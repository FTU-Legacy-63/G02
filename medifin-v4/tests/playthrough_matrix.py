"""Run six complete MEDIFIN cases through visible UI controls in headless Chrome."""
import asyncio
import json
import subprocess
import tempfile
import time
import urllib.request
from pathlib import Path

import websockets

ROOT = Path(__file__).resolve().parents[1]
CHROME = Path(r'C:\Users\Mr.Nguyen Nhung\AppData\Local\Google\Chrome\Application\chrome.exe')
PORT = 9244


async def run(ws):
    async def send(ident, method, params=None):
        await ws.send(json.dumps({'id': ident, 'method': method, 'params': params or {}}))
        while True:
            response = json.loads(await ws.recv())
            if response.get('id') == ident:
                if 'error' in response:
                    raise RuntimeError(response['error'])
                return response.get('result', {})

    async def evaluate(ident, expression):
        response = await send(ident, 'Runtime.evaluate', {'expression': expression, 'returnByValue': True, 'awaitPromise': True})
        if 'exceptionDetails' in response:
            raise RuntimeError(response['exceptionDetails'])
        return response.get('result', {}).get('value')

    await send(1, 'Page.navigate', {'url': (ROOT / 'final.html').as_uri()})
    for attempt in range(400):
        if await evaluate(100 + attempt, 'typeof startCase') == 'function':
            break
        await asyncio.sleep(.1)
    else:
        detail = await evaluate(240, '({url: location.href, title: document.title, readyState: document.readyState, engine: typeof makeInitialState, app: typeof startCase, body: document.body?.innerText?.slice(0, 300)})')
        raise RuntimeError(f'Game did not load: {detail}')
    result = await evaluate(250, (ROOT / 'tests/full_playthrough_matrix.js').read_text(encoding='utf-8'))
    (ROOT / 'tests/scoring-playthrough-matrix.json').write_text(json.dumps(result, indent=2), encoding='utf-8')
    print(json.dumps({'allCompleted': result['allCompleted'], 'runs': [
        {'name': run['name'], 'total': run['total'], 'process': run['process']['overall'],
         'financial': run['financial']['score'], 'clientExperience': run['clientExperience']}
        for run in result['runs']
    ]}, indent=2))


if __name__ == '__main__':
    with tempfile.TemporaryDirectory(prefix='medifin-six-runs-') as profile:
        process = subprocess.Popen([str(CHROME), '--headless', '--disable-gpu', '--no-sandbox', '--no-first-run', '--remote-allow-origins=*', f'--remote-debugging-port={PORT}', f'--user-data-dir={profile}', 'about:blank'], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        try:
            for _ in range(100):
                try:
                    tabs = json.load(urllib.request.urlopen(f'http://127.0.0.1:{PORT}/json', timeout=1))
                    page = next(tab for tab in tabs if tab.get('type') == 'page')
                    break
                except Exception:
                    time.sleep(.1)
            else:
                raise RuntimeError('Chrome debugging endpoint did not start')
            async def connected_run():
                async with websockets.connect(page['webSocketDebuggerUrl'], max_size=30_000_000) as websocket:
                    await run(websocket)
            asyncio.run(connected_run())
        finally:
            process.terminate()
            try:
                process.wait(timeout=5)
            except subprocess.TimeoutExpired:
                process.kill()
