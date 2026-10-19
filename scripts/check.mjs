import {readFile,readdir} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {resolve,dirname} from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const context={window:{}};vm.runInNewContext(await readFile(resolve(root,'docs/research.js'),'utf8'),context);
assert.equal(context.window.RESEARCH.methods.length,6);assert.equal(context.window.RESEARCH.experiment.length,6);
const ids=new Set();for(const m of context.window.RESEARCH.methods){assert(!ids.has(m.id));ids.add(m.id);for(const key of ['project','paper','code'])if(m[key])assert.equal(new URL(m[key]).protocol,'https:')}
const html=await readFile(resolve(root,'docs/index.html'),'utf8');for(const name of ['research.js','app.js','style.css','icon.svg'])assert(html.includes(name));
assert(html.includes('非原始现场影像'));assert(html.includes('没有在此案例运行 SAM-6D'));
for(const folder of ['docs','scripts'])for(const file of await readdir(resolve(root,folder))){const text=await readFile(resolve(root,folder,file),'utf8');assert(!/gh[pousr]_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{20,}/.test(text),`credential-like text in ${file}`);assert(!/\/home\/ps\/|\/tmp\/rbs_runs|172\.16\.|192\.168\./.test(text),`private location in ${file}`)}
console.log('PASS: content data, source URLs, disclosure, local assets, no private paths or credential-like text.');
