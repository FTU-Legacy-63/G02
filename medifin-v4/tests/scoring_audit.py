"""Evaluate the actual engine without touching saves or production files."""
import asyncio
import base64
import json
import subprocess
import tempfile
import time
import urllib.request
from pathlib import Path
import websockets

ROOT = Path(__file__).resolve().parents[1]
CHROME = Path(r'C:\Users\Mr.Nguyen Nhung\AppData\Local\Google\Chrome\Application\chrome.exe')

async def run(url):
    async with websockets.connect(url, max_size=30_000_000) as ws:
        source = (ROOT/'engine.js').read_text(encoding='utf-8') + '\n' + (ROOT/'tests/scoring_audit.js').read_text(encoding='utf-8')
        await ws.send(json.dumps({'id':1,'method':'Runtime.evaluate','params':{'expression':source,'returnByValue':True}}))
        while True:
            result=json.loads(await ws.recv())
            if result.get('id')==1:
                if 'exceptionDetails' in result.get('result',{}):
                    raise RuntimeError(result['result']['exceptionDetails'])
                value=result['result']['result']['value']
                (ROOT/'tests/scoring-audit-results.json').write_text(json.dumps(value,indent=2),encoding='utf-8')
                print('Engine audit:',value['count'],'paths; best:',value['best']['outcome']['overall'])
                break
        await ws.send(json.dumps({'id':2,'method':'Page.navigate','params':{'url':(ROOT/'final.html').as_uri()}}))
        for attempt in range(100):
            ident=100+attempt
            await ws.send(json.dumps({'id':ident,'method':'Runtime.evaluate','params':{'expression':'typeof startCase', 'returnByValue':True}}))
            while True:
                message=json.loads(await ws.recv())
                if message.get('id')==ident: break
            if message.get('result',{}).get('result',{}).get('value')=='function': break
            await asyncio.sleep(.2)
        else: raise RuntimeError('Game did not load')
        await ws.send(json.dumps({'id':4,'method':'Emulation.setDeviceMetricsOverride','params':{'width':1440,'height':1200,'deviceScaleFactor':1,'mobile':False}}))
        while True:
            ready=json.loads(await ws.recv())
            if ready.get('id')==4: break
        await ws.send(json.dumps({'id':3,'method':'Runtime.evaluate','params':{'expression':(ROOT/'tests/scoring_replay.js').read_text(encoding='utf-8'),'returnByValue':True}}))
        while True:
            result=json.loads(await ws.recv())
            if result.get('id')==3:
                if 'exceptionDetails' in result.get('result',{}): raise RuntimeError(result['result']['exceptionDetails'])
                print('Browser replay:',result['result']['result'].get('value'))
                break
        await ws.send(json.dumps({'id':5,'method':'Runtime.evaluate','params':{'expression':'window.scrollTo(0,0)'}}))
        while True:
            if json.loads(await ws.recv()).get('id')==5: break
        await ws.send(json.dumps({'id':6,'method':'Page.getLayoutMetrics'}))
        while True:
            metrics=json.loads(await ws.recv())
            if metrics.get('id')==6: break
        size=metrics['result']['cssContentSize']
        height=min(4000,max(1200,size['height']))
        await ws.send(json.dumps({'id':7,'method':'Page.captureScreenshot','params':{'format':'png','fromSurface':True,'captureBeyondViewport':True,'clip':{'x':0,'y':0,'width':1440,'height':height,'scale':1}}}))
        while True:
            shot=json.loads(await ws.recv())
            if shot.get('id')==7: break
        (ROOT/'screenshots/scoring-100-summary.png').write_bytes(base64.b64decode(shot['result']['data']))
        print('Saved 100-point Summary screenshot:',height,'px tall')

if __name__=='__main__':
    with tempfile.TemporaryDirectory(prefix='medifin-audit-') as profile:
        proc=subprocess.Popen([str(CHROME),'--headless','--no-sandbox','--no-first-run','--remote-allow-origins=*','--remote-debugging-port=9237',f'--user-data-dir={profile}','about:blank'],stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL)
        try:
            for _ in range(60):
                try:
                    tabs=json.load(urllib.request.urlopen('http://127.0.0.1:9237/json',timeout=1))
                    tab=next(t for t in tabs if t.get('type')=='page')
                    break
                except Exception: time.sleep(.2)
            asyncio.run(run(tab['webSocketDebuggerUrl']))
        finally:
            proc.terminate()
            proc.wait(timeout=10)
