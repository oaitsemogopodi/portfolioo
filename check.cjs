const fs=require('fs');
const assert=require('node:assert/strict');
const vm=require('node:vm');
const files=fs.readdirSync('.').filter(f=>f.endsWith('.html'));
let links=0;
for(const file of files){
 const h=fs.readFileSync(file,'utf8');
 assert.equal((h.match(/<h1\b/g)||[]).length,1,`${file}: one page h1`);
 const ids=[...h.matchAll(/\bid="([^"]+)"/g)].map(x=>x[1]);
 assert.equal(new Set(ids).size,ids.length,`${file}: unique ids`);
 assert(!/Lorem ipsum|Emily Jones|Brandon Johnson|example\.com|Birthday:|Happy Clients|<form|<iframe|href=""|href="#"/.test(h),`${file}: sample/private/inactive content`);
 const stack=[];
 const voids=new Set('area base br col embed hr img input link meta param source track wbr'.split(' '));
 const markup=h.replace(/<!--[\s\S]*?-->/g,'').replace(/(<script\b[^>]*>)[\s\S]*?(<\/script>)/g,'$1$2');
 for(const match of markup.matchAll(/<(\/?)([a-z][a-z0-9-]*)\b[^>]*>/gi)){
   const [,close,tag]=match;
   if(voids.has(tag))continue;
   if(close)assert.equal(stack.pop(),tag,`${file}: nesting ${tag}`);else stack.push(tag);
 }
 assert.equal(stack.length,0,`${file}: all elements closed`);
 for(const [,url] of h.matchAll(/(?:src|href)="([^"]+)"/g)){
   if(/^(https?:|mailto:|tel:)/.test(url))continue;
   const [target,anchor]=url.split('#'); const local=target||file;
   assert(fs.existsSync(local),`${file}: ${url}`);
   if(anchor)assert(fs.readFileSync(local,'utf8').includes(`id="${anchor}"`),`${file}: ${url}`);
   links++;
 }
 for(const image of markup.matchAll(/<img\b[^>]*>/g))assert(/\balt="[^"]+"/.test(image[0]),`${file}: image alt`);
}
// Check keyboard filter activation, selected state and mobile navigation semantics.
const filters=[0,1,2,3].map(()=>({listeners:{},attrs:{},addEventListener(type,fn){this.listeners[type]=fn;},setAttribute(k,v){this.attrs[k]=v;},click(){this.listeners.click();}}));
const menu={setAttribute(k,v){this[k]=v;},click(){active=false;},focus(){this.focused=true;}};
let active=true,observer;
const doc={body:{classList:{contains:()=>active}},listeners:{},querySelector:()=>menu,querySelectorAll:()=>filters,addEventListener(type,fn){this.listeners[type]=fn;}};
vm.runInNewContext(fs.readFileSync('assets/js/personalisation.js','utf8'),{document:doc,MutationObserver:class{constructor(fn){observer=fn;}observe(){}}});
let prevented=false;filters[2].listeners.keydown({key:'Enter',preventDefault(){prevented=true;}});
assert(prevented);assert.equal(filters[2].attrs['aria-pressed'],'true');assert.equal(filters[1].attrs['aria-pressed'],'false');
observer();assert.equal(menu['aria-expanded'],'true');doc.listeners.keydown({key:'Escape'});assert(!active&&menu.focused);
console.log(`Passed: ${files.length} pages, ${links} local links/assets/anchors, nesting, headings, unique IDs, image alt text, content cleanup, and keyboard filter/menu handlers.`);

