(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var r;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function t(a,b){if(b)a:{for(var c=da,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];if(!(f in c))break a;c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ba(c,d,{configurable:!0,writable:!0,value:f})}}
t("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}
function c(e,f){this.h=e;ba(this,"description",{configurable:!0,writable:!0,value:f})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
var fa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ka;
if("function"==typeof Object.setPrototypeOf)ka=Object.setPrototypeOf;else{var la;a:{var ma={a:!0},na={};try{na.__proto__=ma;la=na.a;break a}catch(a){}la=!1}ka=la?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var oa=ka;
function x(a,b){a.prototype=fa(b.prototype);a.prototype.constructor=a;if(oa)oa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.A=b.prototype}
function pa(){this.o=!1;this.i=null;this.m=void 0;this.h=1;this.u=this.l=0;this.j=null}
function qa(a){if(a.o)throw new TypeError("Generator is already running");a.o=!0}
pa.prototype.s=function(a){this.m=a};
function ra(a,b){a.j={U:b,oa:!0};a.h=a.l||a.u}
pa.prototype["return"]=function(a){this.j={"return":a};this.h=this.u};
function z(a,b,c){a.h=c;return{value:b}}
function va(a){a.l=0;var b=a.j.U;a.j=null;return b}
function wa(a){this.h=new pa;this.i=a}
function xa(a,b){qa(a.h);var c=a.h.i;if(c)return ya(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h["return"]);
a.h["return"](b);return za(a)}
function ya(a,b,c,d){try{var e=b.call(a.h.i,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.o=!1,e;var f=e.value}catch(g){return a.h.i=null,ra(a.h,g),za(a)}a.h.i=null;d.call(a.h,f);return za(a)}
function za(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.o=!1,{value:b.value,done:!1}}catch(c){a.h.m=void 0,ra(a.h,c)}a.h.o=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.oa)throw b.U;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function Aa(a){this.next=function(b){qa(a.h);a.h.i?b=ya(a,a.h.i.next,b,a.h.s):(a.h.s(b),b=za(a));return b};
this["throw"]=function(b){qa(a.h);a.h.i?b=ya(a,a.h.i["throw"],b,a.h.s):(ra(a.h,b),b=za(a));return b};
this["return"]=function(b){return xa(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ba(a,b){var c=new Aa(new wa(b));oa&&a.prototype&&oa(c,a.prototype);return c}
t("Reflect.setPrototypeOf",function(a){return a?a:oa?function(b,c){try{return oa(b,c),!0}catch(d){return!1}}:null});
t("Object.setPrototypeOf",function(a){return a||oa});
function A(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var Ca="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)A(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||Ca});
t("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.s=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.m()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.m=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.ba),reject:g(this.m)}};
b.prototype.ba=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.da(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.aa(g):this.o(g)}};
b.prototype.aa=function(g){var h=void 0;try{h=g.then}catch(k){this.m(k);return}"function"==typeof h?this.ea(h,g):this.o(g)};
b.prototype.m=function(g){this.u(2,g)};
b.prototype.o=function(g){this.u(1,g)};
b.prototype.u=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.ca();this.D()};
b.prototype.ca=function(){var g=this;e(function(){if(g.G()){var h=da.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.G=function(){if(this.s)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.D=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.da=function(g){var h=this.l();g.M(h.resolve,h.reject)};
b.prototype.ea=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(p,q){return"function"==typeof p?function(v){try{l(p(v))}catch(w){m(w)}}:q}
var l,m,n=new b(function(p,q){l=p;m=q});
this.M(k(g,l),k(h,m));return n};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.M=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.s=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),m=l.next();!m.done;m=l.next())d(m.value).M(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(v){return function(w){p[v]=w;q--;0==q&&l(p)}}
var p=[],q=0;do p.push(void 0),q++,d(k.value).M(n(p.length-1),m),k=h.next();while(!k.done)})};
return b});
function Da(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Da(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Da(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length,f=c||0;for(0>f&&(f=Math.max(f+e,0));f<e;f++){var g=d[f];if(g===b||Object.is(g,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Da(this,b,"includes").indexOf(b,c||0)}});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)A(b,d)&&c.push([d,b[d]]);return c}});
function Ga(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.entries",function(a){return a?a:function(){return Ga(this,function(b,c){return[b,c]})}});
t("Array.prototype.keys",function(a){return a?a:function(){return Ga(this,function(b){return b})}});
t("Array.prototype.values",function(a){return a?a:function(){return Ga(this,function(b,c){return c})}});
t("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!A(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m["delete"](k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!A(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&A(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&A(k,g)&&A(k[g],this.h)};
b.prototype["delete"]=function(k){return d(k)&&A(k,g)&&A(k[g],this.h)?delete k[g][this.h]:!1};
return b});
t("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.h;return ea(function(){if(l){for(;l.head!=h.h;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.i[l];if(m&&A(h.i,l))for(var n=0;n<m.length;n++){var p=m[n];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:m,index:n,v:p}}return{id:l,list:m,index:-1,v:void 0}}
function e(h){this.i={};this.h=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.i[l.id]=[]);l.v?l.v.value=k:(l.v={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},l.list.push(l.v),this.h.previous.next=l.v,this.h.previous=l.v,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.v&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.i[h.id],h.v.previous.next=h.v.next,h.v.next.previous=h.v.previous,h.v.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.i={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).v};
e.prototype.get=function(h){return(h=d(this,h).v)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
t("Set",function(a){function b(c){this.h=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype["delete"]=function(c){c=this.h["delete"](c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
var B=this||self;function C(a,b){for(var c=a.split("."),d=b||B,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function Ha(){}
function Ja(a){var b=typeof a;b="object"!=b?b:a?Array.isArray(a)?"array":b:"null";return"array"==b||"object"==b&&"number"==typeof a.length}
function D(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ka(a){return Object.prototype.hasOwnProperty.call(a,La)&&a[La]||(a[La]=++Ma)}
var La="closure_uid_"+(1E9*Math.random()>>>0),Ma=0;function Na(a,b,c){return a.call.apply(a.bind,arguments)}
function Oa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Pa(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Pa=Na:Pa=Oa;return Pa.apply(null,arguments)}
function E(a,b){var c=a.split("."),d=B;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b}
function F(a,b){function c(){}
c.prototype=b.prototype;a.A=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ha=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Qa(a){return a}
;function Ra(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;function Sa(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Sa);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
F(Sa,Error);Sa.prototype.name="CustomError";var Ta=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},H=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ya=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
H(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Za(a,b){a:{var c=a.length;for(var d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function $a(a,b){var c=Ta(a,b),d;(d=0<=c)&&Array.prototype.splice.call(a,c,1);return d}
function ab(a){return Array.prototype.concat.apply([],arguments)}
function bb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function cb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ja(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function db(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function eb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function fb(a){var b=gb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function hb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function ib(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=ib(a[c]);return b}
var jb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function kb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<jb.length;f++)c=jb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var lb;var mb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},nb=/&/g,ob=/</g,pb=/>/g,qb=/"/g,rb=/'/g,sb=/\x00/g,zb=/[\x00&<>"']/;
function Ab(a,b){return a<b?-1:a>b?1:0}
;var Bb;a:{var Cb=B.navigator;if(Cb){var Db=Cb.userAgent;if(Db){Bb=Db;break a}}Bb=""}function I(a){return-1!=Bb.indexOf(a)}
;function Eb(a){this.h=Fb===Fb?a:""}
Eb.prototype.toString=function(){return this.h.toString()};
var Fb={};function Gb(){return I("iPhone")&&!I("iPod")&&!I("iPad")}
;function Hb(a){Hb[" "](a);return a}
Hb[" "]=Ha;var Ib=I("Opera"),Jb=I("Trident")||I("MSIE"),Kb=I("Edge"),Lb=I("Gecko")&&!(-1!=Bb.toLowerCase().indexOf("webkit")&&!I("Edge"))&&!(I("Trident")||I("MSIE"))&&!I("Edge"),Mb=-1!=Bb.toLowerCase().indexOf("webkit")&&!I("Edge");function Nb(){var a=B.document;return a?a.documentMode:void 0}
var Ob;a:{var Pb="",Qb=function(){var a=Bb;if(Lb)return/rv:([^\);]+)(\)|;)/.exec(a);if(Kb)return/Edge\/([\d\.]+)/.exec(a);if(Jb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Mb)return/WebKit\/(\S+)/.exec(a);if(Ib)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Qb&&(Pb=Qb?Qb[1]:"");if(Jb){var Rb=Nb();if(null!=Rb&&Rb>parseFloat(Pb)){Ob=String(Rb);break a}}Ob=Pb}var Sb=Ob,Tb={},Ub;if(B.document&&Jb){var Vb=Nb();Ub=Vb?Vb:parseInt(Sb,10)||void 0}else Ub=void 0;var Wb=Ub;var Xb=I("Firefox")||I("FxiOS"),Yb=Gb()||I("iPod"),Zb=I("iPad"),$b=I("Safari")&&!((I("Chrome")||I("CriOS"))&&!I("Edge")||I("Coast")||I("Opera")||I("Edge")||I("Edg/")||I("OPR")||I("Firefox")||I("FxiOS")||I("Silk")||I("Android"))&&!(Gb()||I("iPad")||I("iPod"));var ac={},bc=null;var J=window;function hc(a,b){this.width=a;this.height=b}
r=hc.prototype;r.clone=function(){return new hc(this.width,this.height)};
r.aspectRatio=function(){return this.width/this.height};
r.isEmpty=function(){return!(this.width*this.height)};
r.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
r.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
r.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function ic(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function jc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var kc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function lc(a){return a?decodeURI(a):a}
function mc(a){return lc(a.match(kc)[3]||null)}
function nc(a){var b=a.match(kc);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function oc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)oc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function pc(a){var b=[],c;for(c in a)oc(c,a[c],b);return b.join("&")}
var qc=/#|$/;function rc(a){var b=sc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function tc(){var a=[];rc(function(b){a.push(b)});
return a}
var sc={ta:"allow-forms",va:"allow-modals",wa:"allow-orientation-lock",xa:"allow-pointer-lock",ya:"allow-popups",za:"allow-popups-to-escape-sandbox",Aa:"allow-presentation",Ba:"allow-same-origin",Ca:"allow-scripts",Da:"allow-top-navigation",Ea:"allow-top-navigation-by-user-activation"},uc=db(function(){return tc()});
function vc(){var a=ic(),b={};H(uc(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function wc(){this.j=this.j;this.m=this.m}
wc.prototype.j=!1;wc.prototype.dispose=function(){this.j||(this.j=!0,this.J())};
wc.prototype.J=function(){if(this.m)for(;this.m.length;)this.m.shift()()};var xc={};function yc(a){if(a!==xc)throw Error("Bad secret");}
;function zc(){var a="undefined"!==typeof window?window.trustedTypes:void 0;return null!==a&&void 0!==a?a:null}
;var Ac;function Bc(){}
function Cc(a,b){yc(b);this.h=a}
x(Cc,Bc);Cc.prototype.toString=function(){return this.h.toString()};
var Dc=null===(Ac=zc())||void 0===Ac?void 0:Ac.emptyHTML;new Cc(null!==Dc&&void 0!==Dc?Dc:"",xc);var Ec;function Fc(){}
function Gc(a,b){yc(b);this.h=a}
x(Gc,Fc);Gc.prototype.toString=function(){return this.h.toString()};
var Hc=null===(Ec=zc())||void 0===Ec?void 0:Ec.emptyScript;new Gc(null!==Hc&&void 0!==Hc?Hc:"",xc);function Ic(){}
function Jc(a,b){yc(b);this.h=a}
x(Jc,Ic);Jc.prototype.toString=function(){return this.h};
new Jc("about:blank",xc);new Jc("about:invalid#zTSz",xc);function Kc(a){var b=C("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||B.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Lc(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Mc[c])c=Mc[c];else{c=String(c);if(!Mc[c]){var f=/function\s+([^\(]+)/m.exec(c);Mc[c]=f?f[1]:"[Anonymous]"}c=Mc[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return a}
function Lc(a,b){b||(b={});b[Nc(a)]=!0;var c=a.stack||"",d=a.Ja;d&&!b[Nc(d)]&&(c+="\nCaused by: ",d.stack&&0==d.stack.indexOf(d.toString())||(c+="string"===typeof d?d:d.message+"\n"),c+=Lc(d,b));return c}
function Nc(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Mc={};function Oc(a){this.h=a||{cookie:""}}
r=Oc.prototype;r.isEnabled=function(){return navigator.cookieEnabled};
r.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Pa;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.V}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);this.h.cookie=a+"="+b+(f?";domain="+f:"")+(g?";path="+g:"")+(0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString())+(d?";secure":"")+(null!=e?";samesite="+e:"")};
r.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=mb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
r.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{V:0,path:b,domain:c});return d};
r.isEmpty=function(){return!this.h.cookie};
r.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=mb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Pc=new Oc("undefined"==typeof document?null:document);var Qc=(new Date).getTime();function Rc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==
c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function Sc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var p=g,q=0;64>q;q+=4)p[q/4]=n[q]<<24|n[q+1]<<16|n[q+2]<<8|n[q+3];for(q=16;80>q;q++)n=p[q-3]^p[q-8]^p[q-14]^p[q-16],p[q]=(n<<1|n>>>31)&4294967295;n=e[0];var v=e[1],w=e[2],y=e[3],G=e[4];for(q=0;80>q;q++){if(40>q)if(20>q){var Q=y^v&(w^y);var Ia=1518500249}else Q=v^w^y,Ia=1859775393;else 60>q?(Q=v&w|y&(v|w),Ia=2400959708):(Q=v^w^y,Ia=3395469782);Q=((n<<5|n>>>27)&4294967295)+Q+G+Ia+p[q]&4294967295;G=y;y=w;w=(v<<30|v>>>2)&4294967295;v=n;n=Q}e[0]=e[0]+n&4294967295;e[1]=e[1]+v&4294967295;
e[2]=e[2]+w&4294967295;e[3]=e[3]+y&4294967295;e[4]=e[4]+G&4294967295}
function c(n,p){if("string"===typeof n){n=unescape(encodeURIComponent(n));for(var q=[],v=0,w=n.length;v<w;++v)q.push(n.charCodeAt(v));n=q}p||(p=n.length);q=0;if(0==l)for(;q+64<p;)b(n.slice(q,q+64)),q+=64,m+=64;for(;q<p;)if(f[l++]=n[q++],m++,64==l)for(l=0,b(f);q+64<p;)b(n.slice(q,q+64)),q+=64,m+=64}
function d(){var n=[],p=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var q=63;56<=q;q--)f[q]=p&255,p>>>=8;b(f);for(q=p=0;5>q;q++)for(var v=24;0<=v;v-=8)n[p++]=e[q]>>v&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,ga:function(){for(var n=d(),p="",q=0;q<n.length;q++)p+="0123456789ABCDEF".charAt(Math.floor(n[q]/16))+"0123456789ABCDEF".charAt(n[q]%16);return p}}}
;function Tc(a,b,c){var d=String(B.location.href);return d&&a&&b?[b,Uc(Rc(d),a,c||null)].join(" "):null}
function Uc(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],H(d,function(h){e.push(h)}),Vc(e.join(" "));
var f=[],g=[];H(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];H(d,function(h){e.push(h)});
a=Vc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Vc(a){var b=Sc();b.update(a);return b.ga().toLowerCase()}
;var Wc={};function Xc(a){return!!Wc.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Yc(a,b,c,d){(a=B[a])||(a=(new Oc(document)).get(b));return a?Tc(a,c,d):null}
function Zc(a){var b=void 0===b?!1:b;var c=Rc(String(B.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=B.__SAPISID||B.__APISID||B.__3PSAPISID||B.__OVERRIDE_SID;Xc(e)&&(f=f||B.__1PSAPISID);if(f)e=!0;else{var g=new Oc(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID");Xc(e)&&(f=f||g.get("__Secure-1PAPISID"));e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?B.__SAPISID:B.__APISID,e||(e=new Oc(document),
e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?Tc(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&Xc(b)&&((b=Yc("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Yc("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;function $c(){this.h=[];this.i=-1}
$c.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.h[a]!=b&&(this.h[a]=b,this.i=-1)};
$c.prototype.get=function(a){return!!this.h[a]};
function ad(a){-1==a.i&&(a.i=Ya(a.h,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.i}
;function bd(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
bd.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function cd(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;var dd;function ed(){var a=B.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!I("Presto")&&(a=function(){var e=ic();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Pa(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!I("Trident")&&!I("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.S;c.S=null;e()}};
return function(e){d.next={S:e};d=d.next;b.port2.postMessage(0)}}return function(e){B.setTimeout(e,0)}}
;function fd(a){B.setTimeout(function(){throw a;},0)}
;function gd(){this.i=this.h=null}
gd.prototype.add=function(a,b){var c=hd.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
gd.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var hd=new bd(function(){return new id},function(a){return a.reset()});
function id(){this.next=this.scope=this.h=null}
id.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
id.prototype.reset=function(){this.next=this.scope=this.h=null};function jd(a,b){kd||ld();md||(kd(),md=!0);nd.add(a,b)}
var kd;function ld(){if(B.Promise&&B.Promise.resolve){var a=B.Promise.resolve(void 0);kd=function(){a.then(od)}}else kd=function(){var b=od;
"function"!==typeof B.setImmediate||B.Window&&B.Window.prototype&&!I("Edge")&&B.Window.prototype.setImmediate==B.setImmediate?(dd||(dd=ed()),dd(b)):B.setImmediate(b)}}
var md=!1,nd=new gd;function od(){for(var a;a=nd.remove();){try{a.h.call(a.scope)}catch(b){fd(b)}cd(hd,a)}md=!1}
;function pd(){this.i=-1}
;function qd(){this.i=64;this.h=[];this.o=[];this.s=[];this.l=[];this.l[0]=128;for(var a=1;a<this.i;++a)this.l[a]=0;this.m=this.j=0;this.reset()}
F(qd,pd);qd.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.m=this.j=0};
function rd(a,b,c){c||(c=0);var d=a.s;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
qd.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.i,d=0,e=this.o,f=this.j;d<b;){if(0==f)for(;d<=c;)rd(this,a,d),d+=this.i;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.i){rd(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.i){rd(this,e);f=0;break}}this.j=f;this.m+=b}};
qd.prototype.digest=function(){var a=[],b=8*this.m;56>this.j?this.update(this.l,56-this.j):this.update(this.l,this.i-(this.j-56));for(var c=this.i-1;56<=c;c--)this.o[c]=b&255,b/=256;rd(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};var sd="StopIteration"in B?B.StopIteration:{message:"StopIteration",stack:""};function td(){}
td.prototype.next=function(){throw sd;};
td.prototype.B=function(){return this};
function ud(a){if(a instanceof td)return a;if("function"==typeof a.B)return a.B(!1);if(Ja(a)){var b=0,c=new td;c.next=function(){for(;;){if(b>=a.length)throw sd;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function vd(a,b){if(Ja(a))try{H(a,b,void 0)}catch(c){if(c!==sd)throw c;}else{a=ud(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==sd)throw c;}}}
function wd(a){if(Ja(a))return bb(a);a=ud(a);var b=[];vd(a,function(c){b.push(c)});
return b}
;function xd(a,b){this.i={};this.h=[];this.l=this.j=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof xd)for(c=yd(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function yd(a){Pd(a);return a.h.concat()}
r=xd.prototype;r.equals=function(a,b){if(this===a)return!0;if(this.j!=a.j)return!1;var c=b||Qd;Pd(this);for(var d,e=0;d=this.h[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function Qd(a,b){return a===b}
r.isEmpty=function(){return 0==this.j};
r.clear=function(){this.i={};this.l=this.j=this.h.length=0};
r.remove=function(a){return Object.prototype.hasOwnProperty.call(this.i,a)?(delete this.i[a],this.j--,this.l++,this.h.length>2*this.j&&Pd(this),!0):!1};
function Pd(a){if(a.j!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];Object.prototype.hasOwnProperty.call(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.j!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],Object.prototype.hasOwnProperty.call(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
r.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.i,a)?this.i[a]:b};
r.set=function(a,b){Object.prototype.hasOwnProperty.call(this.i,a)||(this.j++,this.h.push(a),this.l++);this.i[a]=b};
r.forEach=function(a,b){for(var c=yd(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
r.clone=function(){return new xd(this)};
r.B=function(a){Pd(this);var b=0,c=this.l,d=this,e=new td;e.next=function(){if(c!=d.l)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)throw sd;var f=d.h[b++];return a?f:d.i[f]};
return e};var Rd=!Jb||9<=Number(Wb),Sd;
if(Sd=Jb){var Td;if(Object.prototype.hasOwnProperty.call(Tb,"9"))Td=Tb["9"];else{for(var Ud=0,Vd=mb(String(Sb)).split("."),Wd=mb("9").split("."),Xd=Math.max(Vd.length,Wd.length),Yd=0;0==Ud&&Yd<Xd;Yd++){var Zd=Vd[Yd]||"",$d=Wd[Yd]||"";do{var ae=/(\d*)(\D*)(.*)/.exec(Zd)||["","","",""],be=/(\d*)(\D*)(.*)/.exec($d)||["","","",""];if(0==ae[0].length&&0==be[0].length)break;Ud=Ab(0==ae[1].length?0:parseInt(ae[1],10),0==be[1].length?0:parseInt(be[1],10))||Ab(0==ae[2].length,0==be[2].length)||Ab(ae[2],be[2]);
Zd=ae[3];$d=be[3]}while(0==Ud)}Td=Tb["9"]=0<=Ud}Sd=!Td}var ce=Sd,de=function(){if(!B.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{B.addEventListener("test",Ha,b),B.removeEventListener("test",Ha,b)}catch(c){}return a}();function ee(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.i=!1}
ee.prototype.stopPropagation=function(){this.i=!0};
ee.prototype.preventDefault=function(){this.defaultPrevented=!0};function fe(a,b){ee.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.j=null;a&&this.init(a,b)}
F(fe,ee);var ge={2:"touch",3:"pen",4:"mouse"};
fe.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;var e=a.relatedTarget;if(e){if(Lb){a:{try{Hb(e.nodeName);var f=!0;break a}catch(g){}f=!1}f||(e=null)}}else"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:ge[a.pointerType]||"";this.state=a.state;
this.j=a;a.defaultPrevented&&fe.A.preventDefault.call(this)};
fe.prototype.stopPropagation=function(){fe.A.stopPropagation.call(this);this.j.stopPropagation?this.j.stopPropagation():this.j.cancelBubble=!0};
fe.prototype.preventDefault=function(){fe.A.preventDefault.call(this);var a=this.j;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,ce)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var he="closure_listenable_"+(1E6*Math.random()|0);var ie=0;function je(a,b,c,d,e){this.listener=a;this.h=null;this.src=b;this.type=c;this.capture=!!d;this.N=e;this.key=++ie;this.I=this.L=!1}
function ke(a){a.I=!0;a.listener=null;a.h=null;a.src=null;a.N=null}
;function le(a){this.src=a;this.listeners={};this.h=0}
le.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=me(a,b,d,e);-1<g?(b=a[g],c||(b.L=!1)):(b=new je(b,this.src,f,!!d,e),b.L=c,a.push(b));return b};
le.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=me(e,b,c,d);return-1<b?(ke(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function ne(a,b){var c=b.type;c in a.listeners&&$a(a.listeners[c],b)&&(ke(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function me(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.I&&f.listener==b&&f.capture==!!c&&f.N==d)return e}return-1}
;var oe="closure_lm_"+(1E6*Math.random()|0),pe={},qe=0;function re(a,b,c,d,e){if(d&&d.once)se(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)re(a,b[f],c,d,e);else c=te(c),a&&a[he]?ue(a,b,c,D(d)?!!d.capture:!!d,e):ve(a,b,c,!1,d,e)}
function ve(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=D(e)?!!e.capture:!!e,h=we(a);h||(a[oe]=h=new le(a));c=h.add(b,c,d,g,f);if(!c.h){d=xe();c.h=d;d.src=a;d.listener=c;if(a.addEventListener)de||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(ye(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");qe++}}
function xe(){var a=ze,b=Rd?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function se(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)se(a,b[f],c,d,e);else c=te(c),a&&a[he]?a.h.add(String(b),c,!0,D(d)?!!d.capture:!!d,e):ve(a,b,c,!0,d,e)}
function Ae(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ae(a,b[f],c,d,e);else(d=D(d)?!!d.capture:!!d,c=te(c),a&&a[he])?a.h.remove(String(b),c,d,e):a&&(a=we(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=me(b,c,d,e)),(c=-1<a?b[a]:null)&&Be(c))}
function Be(a){if("number"!==typeof a&&a&&!a.I){var b=a.src;if(b&&b[he])ne(b.h,a);else{var c=a.type,d=a.h;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(ye(c),d):b.addListener&&b.removeListener&&b.removeListener(d);qe--;(c=we(b))?(ne(c,a),0==c.h&&(c.src=null,b[oe]=null)):ke(a)}}}
function ye(a){return a in pe?pe[a]:pe[a]="on"+a}
function Ce(a,b,c,d){var e=!0;if(a=we(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.I&&(f=De(f,d),e=e&&!1!==f)}return e}
function De(a,b){var c=a.listener,d=a.N||a.src;a.L&&Be(a);return c.call(d,b)}
function ze(a,b){if(a.I)return!0;if(!Rd){var c=b||C("window.event"),d=new fe(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(k){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.h;f;f=f.parentNode)c.push(f);f=a.type;for(var g=c.length-1;!d.i&&0<=g;g--){d.h=c[g];var h=Ce(c[g],f,!0,d);e=e&&h}for(g=0;!d.i&&g<c.length;g++)d.h=c[g],h=Ce(c[g],f,!1,d),e=e&&h}return e}return De(a,new fe(b,this))}
function we(a){a=a[oe];return a instanceof le?a:null}
var Ee="__closure_events_fn_"+(1E9*Math.random()>>>0);function te(a){if("function"===typeof a)return a;a[Ee]||(a[Ee]=function(b){return a.handleEvent(b)});
return a[Ee]}
;function K(){wc.call(this);this.h=new le(this);this.D=this;this.o=null}
F(K,wc);K.prototype[he]=!0;K.prototype.addEventListener=function(a,b,c,d){re(this,a,b,c,d)};
K.prototype.removeEventListener=function(a,b,c,d){Ae(this,a,b,c,d)};
function Fe(a,b){var c=a.o;if(c){var d=[];for(var e=1;c;c=c.o)d.push(c),++e}c=a.D;e=b;var f=e.type||e;if("string"===typeof e)e=new ee(e,c);else if(e instanceof ee)e.target=e.target||c;else{var g=e;e=new ee(f,c);kb(e,g)}g=!0;if(d)for(var h=d.length-1;!e.i&&0<=h;h--){var k=e.h=d[h];g=Ge(k,f,!0,e)&&g}e.i||(k=e.h=c,g=Ge(k,f,!0,e)&&g,e.i||(g=Ge(k,f,!1,e)&&g));if(d)for(h=0;!e.i&&h<d.length;h++)k=e.h=d[h],g=Ge(k,f,!1,e)&&g}
K.prototype.J=function(){K.A.J.call(this);if(this.h){var a=this.h,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,ke(d[e]);delete a.listeners[c];a.h--}}this.o=null};
function ue(a,b,c,d,e){a.h.add(String(b),c,!1,d,e)}
function Ge(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.I&&g.capture==c){var h=g.listener,k=g.N||g.src;g.L&&ne(a.h,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;var He=B.JSON.stringify;function Ie(a){this.h=0;this.s=void 0;this.l=this.i=this.j=null;this.m=this.o=!1;if(a!=Ha)try{var b=this;a.call(void 0,function(c){Je(b,2,c)},function(c){Je(b,3,c)})}catch(c){Je(this,3,c)}}
function Ke(){this.next=this.context=this.onRejected=this.i=this.h=null;this.j=!1}
Ke.prototype.reset=function(){this.context=this.onRejected=this.i=this.h=null;this.j=!1};
var Le=new bd(function(){return new Ke},function(a){a.reset()});
function Me(a,b,c){var d=Le.get();d.i=a;d.onRejected=b;d.context=c;return d}
Ie.prototype.then=function(a,b,c){return Ne(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Ie.prototype.$goog_Thenable=!0;Ie.prototype.cancel=function(a){if(0==this.h){var b=new Oe(a);jd(function(){Pe(this,b)},this)}};
function Pe(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?Pe(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Qe(c),Re(c,e,3,b)))}a.j=null}else Je(a,3,b)}
function Se(a,b){a.i||2!=a.h&&3!=a.h||Te(a);a.l?a.l.next=b:a.i=b;a.l=b}
function Ne(a,b,c,d){var e=Me(null,null,null);e.h=new Ie(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Oe?g(h):f(k)}catch(l){g(l)}}:g});
e.h.j=a;Se(a,e);return e.h}
Ie.prototype.D=function(a){this.h=0;Je(this,2,a)};
Ie.prototype.G=function(a){this.h=0;Je(this,3,a)};
function Je(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.D,f=a.G;if(d instanceof Ie){Se(d,Me(e||Ha,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(D(d))try{var k=d.then;if("function"===typeof k){Ue(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.s=c,a.h=b,a.j=null,Te(a),3!=b||c instanceof Oe||Ve(a,c))}}
function Ue(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Te(a){a.o||(a.o=!0,jd(a.u,a))}
function Qe(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
Ie.prototype.u=function(){for(var a;a=Qe(this);)Re(this,a,this.h,this.s);this.o=!1};
function Re(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.m;a=a.j)a.m=!1;if(b.h)b.h.j=null,We(b,c,d);else try{b.j?b.i.call(b.context):We(b,c,d)}catch(e){Xe.call(null,e)}cd(Le,b)}
function We(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Ve(a,b){a.m=!0;jd(function(){a.m&&Xe.call(null,b)})}
var Xe=fd;function Oe(a){Sa.call(this,a)}
F(Oe,Sa);Oe.prototype.name="cancel";function L(a){wc.call(this);this.s=1;this.l=[];this.o=0;this.h=[];this.i={};this.u=!!a}
F(L,wc);r=L.prototype;r.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.s;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.s=e+3;d.push(e);return e};
function Ye(a,b,c){var d=Ze;if(a=d.i[a]){var e=d.h;(a=Za(a,function(f){return e[f+1]==b&&e[f+2]==c}))&&d.K(a)}}
r.K=function(a){var b=this.h[a];if(b){var c=this.i[b];0!=this.o?(this.l.push(a),this.h[a+1]=Ha):(c&&$a(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
r.H=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.u)for(e=0;e<c.length;e++){var g=c[e];$e(this.h[g+1],this.h[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.o--,0<this.l.length&&0==this.o)for(;c=this.l.pop();)this.K(c)}}return 0!=e}return!1};
function $e(a,b,c){jd(function(){a.apply(b,c)})}
r.clear=function(a){if(a){var b=this.i[a];b&&(H(b,this.K,this),delete this.i[a])}else this.h.length=0,this.i={}};
r.J=function(){L.A.J.call(this);this.clear();this.l.length=0};function af(a){this.h=a}
af.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,He(b))};
af.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
af.prototype.remove=function(a){this.h.remove(a)};function bf(a){this.h=a}
F(bf,af);function cf(a){this.data=a}
function df(a){return void 0===a||a instanceof cf?a:new cf(a)}
bf.prototype.set=function(a,b){bf.A.set.call(this,a,df(b))};
bf.prototype.i=function(a){a=bf.A.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
bf.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function ef(a){this.h=a}
F(ef,bf);ef.prototype.set=function(a,b,c){if(b=df(b)){if(c){if(c<Date.now()){ef.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}ef.A.set.call(this,a,b)};
ef.prototype.i=function(a){var b=ef.A.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())ef.prototype.remove.call(this,a);else return b}};function ff(){}
;function gf(){}
F(gf,ff);gf.prototype.clear=function(){var a=wd(this.B(!0)),b=this;H(a,function(c){b.remove(c)})};function hf(a){this.h=a}
F(hf,gf);r=hf.prototype;r.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
r.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
r.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){this.h.removeItem(a)};
r.B=function(a){var b=0,c=this.h,d=new td;d.next=function(){if(b>=c.length)throw sd;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
r.clear=function(){this.h.clear()};
r.key=function(a){return this.h.key(a)};function jf(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
F(jf,hf);function kf(a,b){this.i=a;this.h=null;if(Jb&&!(9<=Number(Wb))){lf||(lf=new xd);this.h=lf.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),lf.set(a,this.h));try{this.h.load(this.i)}catch(c){this.h=null}}}
F(kf,gf);var mf={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},lf=null;function nf(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return mf[b]})}
r=kf.prototype;r.isAvailable=function(){return!!this.h};
r.set=function(a,b){this.h.setAttribute(nf(a),b);of(this)};
r.get=function(a){a=this.h.getAttribute(nf(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){this.h.removeAttribute(nf(a));of(this)};
r.B=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new td;d.next=function(){if(b>=c.length)throw sd;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
r.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);of(this)};
function of(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function pf(a,b){this.i=a;this.h=b+"::"}
F(pf,gf);pf.prototype.set=function(a,b){this.i.set(this.h+a,b)};
pf.prototype.get=function(a){return this.i.get(this.h+a)};
pf.prototype.remove=function(a){this.i.remove(this.h+a)};
pf.prototype.B=function(a){var b=this.i.B(!0),c=this,d=new td;d.next=function(){for(var e=b.next();e.substr(0,c.h.length)!=c.h;)e=b.next();return a?e.substr(c.h.length):c.i.get(e)};
return d};var qf=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};E("yt.config_",qf);function rf(a){var b=arguments;1<b.length?qf[b[0]]=b[1]:1===b.length&&Object.assign(qf,b[0])}
function M(a,b){return a in qf?qf[a]:b}
;var sf=[];function tf(a){sf.forEach(function(b){return b(a)})}
function uf(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){vf(b),tf(b)}}:a}
function vf(a){var b=C("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=M("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),rf("ERRORS",b))}
function wf(a){var b=C("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=M("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),rf("ERRORS",b))}
;var xf=0;E("ytDomDomGetNextId",C("ytDomDomGetNextId")||function(){return++xf});var yf={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function zf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in yf||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
zf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
zf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
zf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var gb=B.ytEventsEventsListeners||{};E("ytEventsEventsListeners",gb);var Af=B.ytEventsEventsCounter||{count:0};E("ytEventsEventsCounter",Af);
function Bf(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return fb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=D(e[4])&&D(d)&&hb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function Cf(a){a&&("string"==typeof a&&(a=[a]),H(a,function(b){if(b in gb){var c=gb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Df()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete gb[b]}}))}
var Df=db(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Ef(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=Bf(a,b,c,d);if(!e){e=++Af.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new zf(h);if(!jc(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new zf(h);
h.currentTarget=a;return c.call(a,h)};
g=uf(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Df()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);gb[e]=[a,b,c,g,d]}}}
;function Ff(a,b){"function"===typeof a&&(a=uf(a));return window.setTimeout(a,b)}
function Gf(a){"function"===typeof a&&(a=uf(a));return window.setInterval(a,250)}
;var Hf=/^[\w.]*$/,If={q:!0,search_query:!0};function Jf(a,b){for(var c=a.split(b),d={},e=0,f=c.length;e<f;e++){var g=c[e].split("=");if(1==g.length&&g[0]||2==g.length)try{var h=Kf(g[0]||""),k=Kf(g[1]||"");h in d?Array.isArray(d[h])?cb(d[h],k):d[h]=[d[h],k]:d[h]=k}catch(p){var l=p,m=g[0],n=String(Jf);l.args=[{key:m,value:g[1],query:a,method:Lf==n?"unchanged":n}];If.hasOwnProperty(m)||("ReferenceError"===l.name?wf(l):vf(l))}}return d}
var Lf=String(Jf);function Mf(a){var b=[];eb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];H(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Nf(a){"?"==a.charAt(0)&&(a=a.substr(1));return Jf(a,"&")}
function Of(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Nf(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=pc(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.substr(0,f),e,b.substr(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function Kf(a){return a&&a.match(Hf)?a:decodeURIComponent(a.replace(/\+/g," "))}
;var Pf={};function Qf(a){return Pf[a]||(Pf[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Rf={},Sf=[],Ze=new L,Tf={};function Uf(){for(var a=u(Sf),b=a.next();!b.done;b=a.next())b=b.value,b()}
function Vf(a,b){var c;"yt:"==a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[Qf(b)]:a.getAttribute("data-"+b):null;return c}
function Wf(a,b){Ze.H.apply(Ze,arguments)}
;function Xf(a){this.i=a||{};this.j=this.h=!1;a=document.getElementById("www-widgetapi-script");if(this.h=!!("https:"==document.location.protocol||a&&0==a.src.indexOf("https:"))){a=[this.i,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.replace("http://","https://"))}}
function N(a,b){for(var c=[a.i,window.YTConfig||{}],d=0;d<c.length;d++){var e=c[d][b];if(void 0!=e)return e}return null}
function Yf(a,b,c){Zf||(Zf={},Ef(window,"message",Pa(a.l,a)));Zf[c]=b}
Xf.prototype.l=function(a){if(a.origin==N(this,"host")||a.origin==N(this,"host").replace(/^http:/,"https:")){try{var b=JSON.parse(a.data)}catch(c){return}this.j=!0;this.h||0!=a.origin.indexOf("https:")||(this.h=!0);if(a=Zf[b.id])a.u=!0,a.u&&(H(a.s,a.R,a),a.s.length=0),a.Y(b)}};
var Zf=null;function P(a){a=$f(a);return"string"===typeof a&&"false"===a?!1:!!a}
function ag(a,b){var c=$f(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function $f(a){var b=M("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:M("EXPERIMENT_FLAGS",{})[a]}
;function bg(){}
function cg(a,b){return dg(a,1,b)}
;function eg(){bg.apply(this,arguments)}
x(eg,bg);function dg(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=C("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Ff(a,c||0)}
function fg(a){if(void 0===a||!Number.isNaN(Number(a))){var b=C("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}}
eg.prototype.start=function(){var a=C("yt.scheduler.instance.start");a&&a()};
eg.h=void 0;eg.i=function(){eg.h||(eg.h=new eg)};
eg.i();var gg=B.ytPubsubPubsubInstance||new L,hg=B.ytPubsubPubsubSubscribedKeys||{},ig=B.ytPubsubPubsubTopicToKeys||{},jg=B.ytPubsubPubsubIsSynchronous||{};L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.K;L.prototype.publish=L.prototype.H;L.prototype.clear=L.prototype.clear;E("ytPubsubPubsubInstance",gg);E("ytPubsubPubsubTopicToKeys",ig);E("ytPubsubPubsubIsSynchronous",jg);E("ytPubsubPubsubSubscribedKeys",hg);var Qg=window,R=Qg.ytcsi&&Qg.ytcsi.now?Qg.ytcsi.now:Qg.performance&&Qg.performance.timing&&Qg.performance.now&&Qg.performance.timing.navigationStart?function(){return Qg.performance.timing.navigationStart+Qg.performance.now()}:function(){return(new Date).getTime()};var Rg=ag("initial_gel_batch_timeout",1E3),Sg=Math.pow(2,16)-1,Tg=null,Ug=0,Vg=void 0,Wg=0,Xg=0,Yg=0,Zg=!0,$g=B.ytLoggingTransportGELQueue_||new Map;E("ytLoggingTransportGELQueue_",$g);var ah=B.ytLoggingTransportTokensToCttTargetIds_||{};E("ytLoggingTransportTokensToCttTargetIds_",ah);function bh(a){a=void 0===a?!1:a;return new Ie(function(b){window.clearTimeout(Wg);window.clearTimeout(Xg);Xg=0;Vg&&Vg.isReady()?(ch(b,a),$g.clear()):(dh(),b())})}
function dh(){P("web_gel_timeout_cap")&&!Xg&&(Xg=Ff(bh,6E4));window.clearTimeout(Wg);var a=M("LOGGING_BATCH_TIMEOUT",ag("web_gel_debounce_ms",1E4));P("shorten_initial_gel_batch_timeout")&&Zg&&(a=Rg);Wg=Ff(bh,a)}
function ch(a,b){var c=Vg;b=void 0===b?!1:b;for(var d=Math.round(R()),e=$g.size,f=u($g),g=f.next();!g.done;g=f.next()){var h=u(g.value);g=h.next().value;var k=h.next().value;h=ib({context:eh(c.h||fh())});h.events=k;(k=ah[g])&&gh(h,g,k);delete ah[g];hh(h,d);ih(c,"log_event",h,{retry:!0,onSuccess:function(){e--;e||a();Ug=Math.round(R()-d)},
onError:function(){e--;e||a()},
sa:b});Zg=!1}}
function hh(a,b){a.requestTimeMs=String(b);P("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=M("EVENT_ID",void 0);if(c){var d=M("BATCH_CLIENT_COUNTER",void 0)||0;!d&&P("web_client_counter_random_seed")&&(d=Math.floor(Math.random()*Sg/2));d++;d>Sg&&(d=1);rf("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;Tg&&Ug&&P("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:Tg,roundtripMs:String(Ug)});Tg=c;Ug=0}}
function gh(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
;var jh=B.ytLoggingGelSequenceIdObj_||{};E("ytLoggingGelSequenceIdObj_",jh);function kh(a){var b=lh;a=void 0===a?C("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Qc;e.flash="0";a:{try{var f=b.h.top.location.href}catch(G){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?J:g;try{var h=g.history.length}catch(G){h=0}e.u_his=h;e.u_java=!!J.navigator&&"unknown"!==typeof J.navigator.javaEnabled&&!!J.navigator.javaEnabled&&J.navigator.javaEnabled();J.screen&&(e.u_h=J.screen.height,e.u_w=J.screen.width,
e.u_ah=J.screen.availHeight,e.u_aw=J.screen.availWidth,e.u_cd=J.screen.colorDepth);J.navigator&&J.navigator.plugins&&(e.u_nplug=J.navigator.plugins.length);J.navigator&&J.navigator.mimeTypes&&(e.u_nmime=J.navigator.mimeTypes.length);h=b.h;try{var k=h.screenX;var l=h.screenY}catch(G){}try{var m=h.outerWidth;var n=h.outerHeight}catch(G){}try{var p=h.innerWidth;var q=h.innerHeight}catch(G){}k=[h.screenLeft,h.screenTop,k,l,h.screen?h.screen.availWidth:void 0,h.screen?h.screen.availTop:void 0,m,n,p,q];
l=b.h.top;try{var v=(l||window).document,w="CSS1Compat"==v.compatMode?v.documentElement:v.body;var y=(new hc(w.clientWidth,w.clientHeight)).round()}catch(G){y=new hc(-12245933,-12245933)}v=y;y={};w=new $c;B.SVGElement&&B.document.createElementNS&&w.set(0);l=vc();l["allow-top-navigation-by-user-activation"]&&w.set(1);l["allow-popups-to-escape-sandbox"]&&w.set(2);B.crypto&&B.crypto.subtle&&w.set(3);B.TextDecoder&&B.TextEncoder&&w.set(4);w=ad(w);y.bc=w;y.bih=v.height;y.biw=v.width;y.brdim=k.join();b=
b.i;b=(y.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,y.wgl=!!J.WebGLRenderingContext,y);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var lh=new function(){var a=window.document;this.h=window;this.i=a};
E("yt.ads_.signals_.getAdSignalsString",function(a){return Mf(kh(a))});var mh="XMLHttpRequest"in B?function(){return new XMLHttpRequest}:null;
function nh(){if(!mh)return null;var a=mh();return"open"in a?a:null}
;var oh={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},
ph="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address client_dev_root_url".split(" "),qh=!1;
function rh(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=a.match(kc)[1]||null,e=mc(a);d&&e?(d=c,c=a.match(kc),d=d.match(kc),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?mc(c)==e&&(Number(c.match(kc)[4]||null)||null)==(Number(a.match(kc)[4]||null)||null):!0;d=P("web_ajax_ignore_global_headers_if_set");for(var f in oh)e=M(oh[f]),!e||!c&&mc(a)||d&&void 0!==b[f]||(b[f]=e);if(c||!mc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||!mc(a))&&(f="undefined"!=typeof Intl?
(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)&&(b["X-YouTube-Time-Zone"]=f);if(c||!mc(a))b["X-YouTube-Ad-Signals"]=Mf(kh(void 0));return b}
function sh(a){var b=window.location.search,c=mc(a),d=lc(a.match(kc)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Nf(b),f={};H(ph,function(g){e[g]&&(f[g]=e[g])});
return Of(a,f||{},!1)}
function th(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=uh(a,b);var d=vh(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&window.clearTimeout(f);var h=g.ok,k=function(l){l=l||{};var m=b.context||B;h?b.onSuccess&&b.onSuccess.call(m,l,g):b.onError&&b.onError.call(m,l,g);b.onFinish&&b.onFinish.call(m,l,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(k,function(){k(null)}):k(null)}});
b.onFetchTimeout&&0<b.timeout&&(f=Ff(function(){e||(e=!0,window.clearTimeout(f),b.onFetchTimeout.call(b.context||B))},b.timeout))}else wh(a,b)}
function wh(a,b){var c=b.format||"JSON";a=uh(a,b);var d=vh(a,b),e=!1,f=xh(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,n=400<=k.status&&500>k.status,p=500<=k.status&&600>k.status;if(l||n||p)m=yh(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=
!!m}m=m||{};n=b.context||B;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.onFinish&&b.onFinish.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
if(b.onTimeout&&0<b.timeout){var g=b.onTimeout;var h=Ff(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||B,f))},b.timeout)}}
function uh(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=M("XSRF_FIELD_NAME",void 0),d=b.urlParams;d&&(d[c]&&delete d[c],a=Of(a,d||{},!0));return a}
function vh(a,b){var c=M("XSRF_FIELD_NAME",void 0),d=M("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.postParams,g=M("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||mc(a)&&!b.withCredentials&&mc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=Nf(e),kb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):pc(e));if(!(c=e)&&(c=f)){a:{for(var k in f){f=
!1;break a}f=!0}c=!f}!qh&&c&&"POST"!=b.method&&(qh=!0,vf(Error("AJAX request with postData should use POST")));return e}
function yh(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,wf(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?zh(a):null)e={},H(a.getElementsByTagName("*"),function(g){e[g.tagName]=Ah(g)})}d&&Bh(e);
return e}
function Bh(a){if(D(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b];if(void 0===lb){var e=null;var f=B.trustedTypes;if(f&&f.createPolicy){try{e=f.createPolicy("goog#html",{createHTML:Qa,createScript:Qa,createScriptURL:Qa})}catch(g){B.console&&B.console.error(g.message)}lb=e}else lb=e}d=(e=lb)?e.createHTML(d):d;a[c]=new Eb(d)}else Bh(a[b])}}
function zh(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Ah(a){var b="";H(a.childNodes,function(c){b+=c.nodeValue});
return b}
function xh(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&uf(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=nh();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;P("debug_forward_web_query_parameters")&&(a=sh(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=rh(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function Ch(){return"INNERTUBE_API_KEY"in qf&&"INNERTUBE_API_VERSION"in qf}
function fh(){return{innertubeApiKey:M("INNERTUBE_API_KEY",void 0),innertubeApiVersion:M("INNERTUBE_API_VERSION",void 0),ha:M("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),ia:M("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:M("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),ka:M("INNERTUBE_CONTEXT_HL",void 0),ja:M("INNERTUBE_CONTEXT_GL",void 0),la:M("INNERTUBE_HOST_OVERRIDE",void 0)||"",na:!!M("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),ma:!!M("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:M("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function eh(a){var b={client:{hl:a.ka,gl:a.ja,clientName:a.ia,clientVersion:a.innertubeContextClientVersion,configInfo:a.ha}},c=window.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=M("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=[];var d=M("EXPERIMENTS_FORCED_FLAGS",{});for(e in d)c.push({key:e,value:String(d[e])});var e=M("EXPERIMENT_FLAGS",{});for(var f in e)f.startsWith("force_")&&void 0===d[f]&&c.push({key:f,value:String(e[f])});0<c.length&&(b.request={internalExperimentFlags:c});
a.appInstallData&&P("web_log_app_install_experiments")&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);M("DELEGATED_SESSION_ID")&&!P("pageid_as_header_web")&&(b.user={onBehalfOfUser:M("DELEGATED_SESSION_ID")});a=Object;f=a.assign;e=b.client;c={};d=u(Object.entries(Nf(M("DEVICE",""))));for(var g=d.next();!g.done;g=d.next()){var h=u(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?c.deviceMake=h:"cmodel"===g?c.deviceModel=h:"cbr"===g?c.browserName=
h:"cbrver"===g?c.browserVersion=h:"cos"===g?c.osName=h:"cosver"===g?c.osVersion=h:"cplatform"===g&&(c.platform=h)}b.client=f.call(a,e,c);return b}
function Dh(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||M("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Ga||M("AUTHORIZATION"))||(a?b="Bearer "+C("gapi.auth.getToken")().Fa:b=Zc([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=M("SESSION_INDEX",0),P("pageid_as_header_web")&&(d["X-Goog-PageId"]=M("DELEGATED_SESSION_ID")));return d}
;function Eh(a){a=Object.assign({},a);delete a.Authorization;var b=Zc();if(b){var c=new qd;c.update(M("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=3;Ja(b);void 0===c&&(c=0);if(!bc){bc={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));ac[f]=g;for(var h=0;h<g.length;h++){var k=g[h];void 0===bc[k]&&(bc[k]=h)}}}c=ac[c];d=[];for(e=0;e<b.length;e+=3){var l=b[e],m=(f=e+1<b.length)?
b[e+1]:0;k=(g=e+2<b.length)?b[e+2]:0;h=l>>2;l=(l&3)<<4|m>>4;m=(m&15)<<2|k>>6;k&=63;g||(k=64,f||(m=64));d.push(c[h],c[l],c[m]||"",c[k]||"")}a.hash=d.join("")}return a}
;function Fh(a){var b=new jf;(b=b.isAvailable()?a?new pf(b,a):b:null)||(a=new kf(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new ef(a):null;this.i=document.domain||window.location.hostname}
Fh.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(He(b))}catch(f){return}else e=escape(b);b=this.i;Pc.set(""+a,e,{V:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
Fh.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=Pc.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Fh.prototype.remove=function(a){this.h&&this.h.remove(a);var b=this.i;Pc.remove(""+a,"/",void 0===b?"youtube.com":b)};var Gh;function Hh(){Gh||(Gh=new Fh("yt.innertube"));return Gh}
function Ih(a,b,c,d){if(d)return null;d=Hh().get("nextId",!0)||1;var e=Hh().get("requests",!0)||{};e[d]={method:a,request:b,authState:Eh(c),requestTime:Math.round(R())};Hh().set("nextId",d+1,86400,!0);Hh().set("requests",e,86400,!0);return d}
function Jh(a){var b=Hh().get("requests",!0)||{};delete b[a];Hh().set("requests",b,86400,!0)}
function Kh(a){var b=Hh().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(R())-d.requestTime)){var e=d.authState,f=Eh(Dh(!1));hb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(R())),ih(a,d.method,e,{}));delete b[c]}}Hh().set("requests",b,86400,!0)}}
;var Lh=C("ytPubsub2Pubsub2Instance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.K;L.prototype.publish=L.prototype.H;L.prototype.clear=L.prototype.clear;E("ytPubsub2Pubsub2Instance",Lh);E("ytPubsub2Pubsub2SubscribedKeys",C("ytPubsub2Pubsub2SubscribedKeys")||{});E("ytPubsub2Pubsub2TopicToKeys",C("ytPubsub2Pubsub2TopicToKeys")||{});E("ytPubsub2Pubsub2IsAsync",C("ytPubsub2Pubsub2IsAsync")||{});E("ytPubsub2Pubsub2SkipSubKey",null);var Mh=Yb||Zb;var Nh=[],Oh=!1;function Ph(a,b){Oh||(Nh.push({type:"EVENT",eventType:a,payload:b}),10<Nh.length&&Nh.shift())}
;function T(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);d=[];var e=d.concat;if(!(c instanceof Array)){c=u(c);for(var f,g=[];!(f=c.next()).done;)g.push(f.value);c=g}this.args=e.call(d,c)}
x(T,Error);var Qh={},Rh=(Qh.AUTH_INVALID="No user identifier specified.",Qh.EXPLICIT_ABORT="Transaction was explicitly aborted.",Qh.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Qh.MISSING_OBJECT_STORE="Object store not created.",Qh.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",Qh.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Qh.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Qh.EXECUTE_TRANSACTION_ON_CLOSED_DB=
"Can't start a transaction on a closed database",Qh);function U(a,b,c){b=void 0===b?{}:b;c=void 0===c?Rh[a]:c;T.call(this,c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;Object.setPrototypeOf(this,U.prototype);Oh||(Nh.push({type:"ERROR",payload:this}),10<Nh.length&&Nh.shift())}
x(U,T);function Sh(a){U.call(this,"MISSING_OBJECT_STORE",{Na:a},Rh.MISSING_OBJECT_STORE);Object.setPrototypeOf(this,Sh.prototype)}
x(Sh,U);var Th=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Uh(a,b,c){if(a instanceof U||a instanceof T)return a;if("QuotaExceededError"===a.name)return new U("QUOTA_EXCEEDED",{objectStoreNames:c,dbName:b});if($b&&"UnknownError"===a.name)return new U("QUOTA_MAYBE_EXCEEDED",{objectStoreNames:c,dbName:b});if("InvalidStateError"===a.name&&Th.some(function(d){return a.message.includes(d)}))return new U("EXECUTE_TRANSACTION_ON_CLOSED_DB",{objectStoreNames:c,
dbName:b});Object.setPrototypeOf(a,T.prototype);a.args=[{name:"IdbError",Oa:a.name,dbName:b,objectStoreNames:c}];return a}
;function Vh(a){if(!a)throw Error();throw a;}
function Wh(a){return a}
function V(a){var b=this;this.i=a;this.state={status:"PENDING"};this.h=[];this.onRejected=[];this.i(function(c){if("PENDING"===b.state.status){b.state={status:"FULFILLED",value:c};c=u(b.h);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}},function(c){if("PENDING"===b.state.status){b.state={status:"REJECTED",
reason:c};c=u(b.onRejected);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}})}
V.all=function(a){return new V(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={F:0};f.F<a.length;f={F:f.F},++f.F)Xh(V.resolve(a[f.F]).then(function(g){return function(h){d[g.F]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})})};
V.resolve=function(a){return new V(function(b,c){a instanceof V?a.then(b,c):b(a)})};
V.reject=function(a){return new V(function(b,c){c(a)})};
V.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:Wh,e=null!==b&&void 0!==b?b:Vh;return new V(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){Yh(c,c,d,f,g)}),c.onRejected.push(function(){Zh(c,c,e,f,g)})):"FULFILLED"===c.state.status?Yh(c,c,d,f,g):"REJECTED"===c.state.status&&Zh(c,c,e,f,g)})};
function Xh(a,b){a.then(void 0,b)}
function Yh(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof V?$h(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Zh(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof V?$h(a,b,f,d,e):d(f)}catch(g){e(g)}}
function $h(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof V?$h(a,b,f,d,e):d(f)},function(f){e(f)})}
;function ai(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function bi(a){return new Promise(function(b,c){ai(a,b,c)})}
function W(a){return new V(function(b,c){ai(a,b,c)})}
;function ci(a,b){return new V(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()})}
;function di(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(R());this.i=!1}
r=di.prototype;r.add=function(a,b,c){return ei(this,[a],"readwrite",function(d){return fi(d,a).add(b,c)})};
r.clear=function(a){return ei(this,[a],"readwrite",function(b){return fi(b,a).clear()})};
r.close=function(){var a;this.h.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
r.count=function(a,b){return ei(this,[a],"readonly",function(c){return fi(c,a).count(b)})};
r["delete"]=function(a,b){return ei(this,[a],"readwrite",function(c){return fi(c,a)["delete"](b)})};
r.get=function(a,b){return ei(this,[a],"readwrite",function(c){return fi(c,a).get(b)})};
function ei(a,b,c,d){c=void 0===c?"readonly":c;a.transactionCount++;try{var e=a.h.transaction(b,c);var f=gi(e,d)["catch"](function(g){throw Uh(g,a.h.name,b.join());})}catch(g){f=g instanceof Error?Promise.reject(Uh(g,a.h.name,b.join())):Promise.reject(Uh(Error("unexpected transaction error: "+g),a.h.name,b.join()))}hi(a,f,b.join(),c);
return f}
function hi(a,b,c,d){Ra(a,function f(){var g,h,k=this,l,m,n;return Ba(f,function(p){if(1==p.h)return g=Math.round(R()),p.l=2,z(p,b,4);2!=p.h?(h=Math.round(R()),ii(k,!0,c,h-g),p.h=0,p.l=0):(l=va(p),m=Math.round(R()),n=m-g,l instanceof U&&("QUOTA_EXCEEDED"===l.type||"QUOTA_MAYBE_EXCEEDED"===l.type)&&Ph("QUOTA_EXCEEDED",{dbName:k.h.name,objectStoreNames:c,transactionCount:k.transactionCount,transactionMode:d}),l instanceof U&&"UNKNOWN_ABORT"===l.type&&(Ph("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:c,
transactionDuration:n,transactionCount:k.transactionCount,dbDuration:m-k.j}),k.i=!0),ii(k,!1,c,n),p.h=0)})})}
function ii(a,b,c,d){Ph("TRANSACTION_ENDED",{objectStoreNames:c,connectionHasUnknownAbortedTransaction:a.i,duration:d,isSuccessful:b})}
function ji(a){this.h=a}
r=ji.prototype;r.add=function(a,b){return W(this.h.add(a,b))};
r.clear=function(){return W(this.h.clear()).then(function(){})};
r.count=function(a){return W(this.h.count(a))};
function ki(a,b){return li(a,{query:b},function(c){return c["delete"]().then(function(){return c["continue"]()})}).then(function(){})}
r["delete"]=function(a){return a instanceof IDBKeyRange?ki(this,a):W(this.h["delete"](a))};
r.get=function(a){return W(this.h.get(a))};
r.index=function(a){return new mi(this.h.index(a))};
r.getName=function(){return this.h.name};
function li(a,b,c){a=a.h.openCursor(b.query,b.direction);return ni(a).then(function(d){return ci(d,c)})}
function oi(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=U;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function gi(a,b){var c=new oi(a);return pi(c,b)}
function pi(a,b){var c=new Promise(function(d,e){Xh(b(a).then(function(f){a.commit();d(f)}),e)});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
oi.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new U("EXPLICIT_ABORT");};
oi.prototype.commit=function(){var a=this.h;a.commit&&!this.aborted&&a.commit()};
function fi(a,b){var c=a.h.objectStore(b),d=a.i.get(c);d||(d=new ji(c),a.i.set(c,d));return d}
function mi(a){this.h=a}
mi.prototype.count=function(a){return W(this.h.count(a))};
mi.prototype["delete"]=function(a){return qi(this,{query:a},function(b){return b["delete"]().then(function(){return b["continue"]()})})};
mi.prototype.get=function(a){return W(this.h.get(a))};
mi.prototype.getKey=function(a){return W(this.h.getKey(a))};
function qi(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return ni(a).then(function(d){return ci(d,c)})}
function ri(a,b){this.request=a;this.cursor=b}
function ni(a){return W(a).then(function(b){return null===b?null:new ri(a,b)})}
r=ri.prototype;r.advance=function(a){this.cursor.advance(a);return ni(this.request)};
r["continue"]=function(a){this.cursor["continue"](a);return ni(this.request)};
r["delete"]=function(){return W(this.cursor["delete"]()).then(function(){})};
r.getKey=function(){return this.cursor.key};
r.update=function(a){return W(this.cursor.update(a))};function si(a,b,c){return Ra(this,function e(){var f,g,h,k,l,m,n,p,q,v;return Ba(e,function(w){if(1==w.h)return f=self.indexedDB.open(a,b),g=c,h=g.blocked,k=g.blocking,l=g.ra,m=g.upgrade,n=g.closed,q=function(){p||(p=new di(f.result,{closed:n}));return p},f.addEventListener("upgradeneeded",function(y){if(null===y.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
if(null===f.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");y.dataLoss&&"none"!==y.dataLoss&&Ph("IDB_DATA_CORRUPTED",{reason:y.dataLossMessage||"unknown reason",dbName:a});var G=q(),Q=new oi(f.transaction);m&&m(G,y.oldVersion,y.newVersion,Q)}),h&&f.addEventListener("blocked",function(){h()}),z(w,bi(f),2);
v=w.m;k&&v.addEventListener("versionchange",function(){k(q())});
v.addEventListener("close",function(){Ph("IDB_UNEXPECTEDLY_CLOSED",{dbName:a,dbVersion:v.version});l&&l()});
return w["return"](q())})})}
function ti(a,b){b=void 0===b?{}:b;return Ra(this,function d(){var e,f,g;return Ba(d,function(h){e=self.indexedDB.deleteDatabase(a);f=b;(g=f.blocked)&&e.addEventListener("blocked",function(){g()});
return z(h,bi(e),0)})})}
;function ui(a){this.name="YtIdbMeta";this.options=a;this.i=!1}
function vi(a,b,c){c=void 0===c?{}:c;c=void 0===c?{}:c;return si(a,b,c)}
ui.prototype["delete"]=function(a){a=void 0===a?{}:a;return ti(this.name,a)};
function wi(){var a=xi;if(!a.h){var b=function(){a.h===e&&(a.h=void 0)},c={blocking:function(f){f.close()},
closed:b,ra:b,upgrade:a.options.upgrade},d=function(){return Ra(a,function g(){var h=this,k,l,m;return Ba(g,function(n){switch(n.h){case 1:return n.l=2,z(n,vi(h.name,h.options.version,c),4);case 4:k=n.m;if(!Xb){n.h=5;break}a:{var p=u(Object.keys(h.options.qa));for(var q=p.next();!q.done;q=p.next())if(q=q.value,!k.h.objectStoreNames.contains(q)){p=q;break a}p=void 0}l=p;if(void 0===l){n.h=5;break}if(!Xb||h.i){n.h=7;break}h.i=!0;return z(n,h["delete"](),8);case 8:return n["return"](d());case 7:throw new Sh(l);
case 5:return n["return"](k);case 2:m=va(n);if(m instanceof DOMException?"VersionError"===m.name:"DOMError"in self&&m instanceof DOMError?"VersionError"===m.name:m instanceof Object&&"message"in m&&"An attempt was made to open a database using a lower version than the existing version."===m.message)return n["return"](vi(h.name,void 0,Object.assign(Object.assign({},c),{upgrade:void 0})));b();throw m;}})})};
var e=d();a.h=e}return a.h}
;var xi=new ui({qa:{databases:!0},upgrade:function(a,b){1>b&&a.h.createObjectStore("databases",{keyPath:"actualName"})}});
function yi(a){return Ra(this,function c(){var d;return Ba(c,function(e){if(1==e.h)return z(e,wi(),2);d=e.m;return e["return"](ei(d,["databases"],"readwrite",function(f){var g=fi(f,"databases");return g.get(a.actualName).then(function(h){if(h?a.actualName!==h.actualName||a.publicName!==h.publicName||a.userIdentifier!==h.userIdentifier||a.signedIn!==h.signedIn||a.clearDataOnAuthChange!==h.clearDataOnAuthChange:1)return W(g.h.put(a,void 0)).then(function(){})})}))})})}
function zi(){return Ra(this,function b(){var c;return Ba(b,function(d){if(1==d.h)return z(d,wi(),2);c=d.m;return d["return"](c["delete"]("databases","yt-idb-test-do-not-use"))})})}
;var Ai;
function Bi(){return Ra(this,function b(){var c,d;return Ba(b,function(e){switch(e.h){case 1:var f;if(f=Mh)f=/WebKit\/([0-9]+)/.exec(Bb),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Bb),f=!(f&&602<=parseInt(f[1],10)));if(f&&!P("ytidb_allow_on_ios_safari_v8_and_v9")||Kb)return e["return"](!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e["return"](!1)}catch(g){return e["return"](!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e["return"](!1);e.l=
2;d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0,signedIn:!1};return z(e,yi(d),4);case 4:return z(e,zi(),5);case 5:return e["return"](!0);case 2:return va(e),e["return"](!1)}})})}
function Ci(){if(void 0!==Ai)return Ai;Oh=!0;return Ai=Bi().then(function(a){Oh=!1;return a})}
;var Di;function Ei(){Di||(Di=new Fh("yt.offline"));return Di}
;function Fi(){K.call(this);this.s=this.u=this.i=!1;this.l=Gi();Hi(this);Ii(this)}
x(Fi,K);function Gi(){var a=window.navigator.onLine;return void 0===a?!0:a}
function Ii(a){window.addEventListener("online",function(){a.l=!0;a.i&&Fe(a,"ytnetworkstatus-online");Ji(a);if(a.s&&P("offline_error_handling")){var b=Ei().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new T(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;vf(d)}Ei().set("errors",{},2592E3,!0)}}})}
function Hi(a){window.addEventListener("offline",function(){a.l=!1;a.i&&Fe(a,"ytnetworkstatus-offline");Ji(a)})}
function Ji(a){a.u&&(wf(new T("NetworkStatusManager state did not match poll",R()-0)),a.u=!1)}
;function Ki(a){a=void 0===a?{}:a;K.call(this);var b=this;this.l=this.u=0;Fi.h||(Fi.h=new Fi);this.i=Fi.h;this.i.i=!0;a.pa&&(this.i.s=!0);a.O?(this.O=a.O,ue(this.i,"ytnetworkstatus-online",function(){Li(b,"publicytnetworkstatus-online")}),ue(this.i,"ytnetworkstatus-offline",function(){Li(b,"publicytnetworkstatus-offline")})):(ue(this.i,"ytnetworkstatus-online",function(){Fe(b,"publicytnetworkstatus-online")}),ue(this.i,"ytnetworkstatus-offline",function(){Fe(b,"publicytnetworkstatus-offline")}))}
x(Ki,K);function Li(a,b){a.O?a.l?(fg(a.u),a.u=cg(function(){a.s!==b&&(Fe(a,b),a.s=b,a.l=R())},a.O-(R()-a.l))):(Fe(a,b),a.s=b,a.l=R()):Fe(a,b)}
;var Mi;function Ni(a,b){b=void 0===b?{}:b;Ci().then(function(){Mi||(Mi=new Ki({pa:!0}));Mi.i.l!==Gi()&&wf(new T("NetworkStatusManager isOnline does not match window status"));wh(a,b)})}
function Oi(a,b){b=void 0===b?{}:b;Ci().then(function(){wh(a,b)})}
;function Pi(a){var b=this;this.h=null;a?this.h=a:Ch()&&(this.h=fh());dg(function(){Kh(b)},0,5E3)}
Pi.prototype.isReady=function(){!this.h&&Ch()&&(this.h=fh());return!!this.h};
function ih(a,b,c,d){!M("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&wf(new T("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var e=new T("innertube xhrclient not ready",b,c,d);vf(e);throw e;}var f={headers:{"Content-Type":"application/json"},method:"POST",postParams:c,postBodyFormat:"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(n,p){if(d.onSuccess)d.onSuccess(p)},
onFetchSuccess:function(n){if(d.onSuccess)d.onSuccess(n)},
onError:function(n,p){if(d.onError)d.onError(p)},
onFetchError:function(n){if(d.onError)d.onError(n)},
timeout:d.timeout,withCredentials:!0},g="";(e=a.h.la)&&(g=e);var h=a.h.na||!1,k=Dh(h,g,d);Object.assign(f.headers,k);f.headers.Authorization&&!g&&(f.headers["x-origin"]=window.location.origin);e="/youtubei/"+a.h.innertubeApiVersion+"/"+b;var l={alt:"json"};a.h.ma&&f.headers.Authorization||(l.key=a.h.innertubeApiKey);var m=Of(""+g+e,l||{},!0);Ci().then(function(n){if(d.retry&&P("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=g){if(P("networkless_gel")&&!n||!P("networkless_gel"))var p=Ih(b,
c,k,h);if(p){var q=f.onSuccess,v=f.onFetchSuccess;f.onSuccess=function(w,y){Jh(p);q(w,y)};
c.onFetchSuccess=function(w,y){Jh(p);v(w,y)}}}try{P("use_fetch_for_op_xhr")?th(m,f):P("networkless_gel")&&d.retry?(f.method="POST",!d.sa&&P("nwl_send_fast_on_unload")?Oi(m,f):Ni(m,f)):(f.method="POST",f.postParams||(f.postParams={}),wh(m,f))}catch(w){if("InvalidAccessError"==w.name)p&&(Jh(p),p=0),wf(Error("An extension is blocking network request."));
else throw w;}p&&dg(function(){Kh(a)},0,5E3)})}
;function Qi(a,b){var c=void 0===c?{}:c;var d=Pi;M("ytLoggingEventsDefaultDisabled",!1)&&Pi==Pi&&(d=null);var e=c;e=void 0===e?{}:e;c={};c.eventTimeMs=Math.round(e.timestamp||R());c[a]=b;var f=C("_lact",window);f=null==f?-1:Math.max(Date.now()-f,0);c.context={lastActivityMs:String(e.timestamp||!isFinite(f)?-1:f)};if(P("log_sequence_info_on_gel_web")&&e.Z){f=c.context;var g=e.Z;jh[g]=g in jh?jh[g]+1:0;f.sequence={index:jh[g],groupKey:g};e.La&&delete jh[e.Z]}e=e.Ka;f="";e&&(f={},e.videoId?f.videoId=
e.videoId:e.playlistId&&(f.playlistId=e.playlistId),ah[e.token]=f,f=e.token);e=$g.get(f)||[];$g.set(f,e);e.push(c);d&&(Vg=new d);d=ag("web_logging_max_batch")||100;c=R();e.length>=d?bh(!0):10<=c-Yg&&(dh(),Yg=c)}
;var Ri=[{W:function(a){return"Cannot read property '"+a.key+"'"},
P:{TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{W:function(a){return"Cannot call '"+a.key+"'"},
P:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}}];function Si(){this.h=[];this.i=[]}
var Ti;function Ui(){Ti||(Ti=new Si);return Ti}
;var Vi=new L;function Wi(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Xi(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Xi(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Xi(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Xi(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Yi(a,b,c,d){c+="."+a;a=Zi(b);d[c]=a;return c.length+a.length}
function Zi(a){return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}
;var $i=new Set,aj=0,bj=0,cj=0,dj=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Y(a,b,c){this.o=this.h=this.i=null;this.m=Ka(this);this.j=0;this.u=!1;this.s=[];this.l=null;this.D=c;this.G={};c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"==a.tagName.toLowerCase(),b.host||(b.host=c?nc(a.src):"https://www.youtube.com"),this.i=new Xf(b),c||(b=ej(this,a),this.o=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.h=a,this.h.id||(this.h.id="widget"+Ka(this.h)),Rf[this.h.id]=this,window.postMessage){this.l=new L;fj(this);b=N(this.i,"events");for(var d in b)b.hasOwnProperty(d)&&
this.addEventListener(d,b[d]);for(var e in Tf)gj(this,e)}}
r=Y.prototype;r.setSize=function(a,b){this.h.width=a;this.h.height=b;return this};
r.fa=function(){return this.h};
r.Y=function(a){hj(this,a.event,a)};
r.addEventListener=function(a,b){var c=b;"string"==typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.l.subscribe(a,c);ij(this,a);return this};
function gj(a,b){var c=b.split(".");if(2==c.length){var d=c[1];a.D==c[0]&&ij(a,d)}}
r.destroy=function(){this.h.id&&(Rf[this.h.id]=null);var a=this.l;a&&"function"==typeof a.dispose&&a.dispose();if(this.o){a=this.h;var b=a.parentNode;b&&b.replaceChild(this.o,a)}else(a=this.h)&&a.parentNode&&a.parentNode.removeChild(a);Zf&&(Zf[this.m]=null);this.i=null;a=this.h;for(var c in gb)gb[c][0]==a&&Cf(c);this.o=this.h=null};
r.T=function(){return{}};
function jj(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.u?a.R(b):a.s.push(b)}
function hj(a,b,c){a.l.j||(c={target:a,data:c},a.l.H(b,c),Wf(a.D+"."+b,c))}
function ej(a,b){for(var c=document.createElement("iframe"),d=b.attributes,e=0,f=d.length;e<f;e++){var g=d[e].value;null!=g&&""!=g&&"null"!=g&&c.setAttribute(d[e].name,g)}c.setAttribute("frameBorder",0);c.setAttribute("allowfullscreen",1);c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");c.setAttribute("title","YouTube "+N(a.i,"title"));(d=N(a.i,"width"))&&c.setAttribute("width",d);(d=N(a.i,"height"))&&c.setAttribute("height",d);var h=
a.T();h.enablejsapi=window.postMessage?1:0;window.location.host&&(h.origin=window.location.protocol+"//"+window.location.host);h.widgetid=a.m;window.location.href&&H(["debugjs","debugcss"],function(k){var l=window.location.href;var m=l.search(qc);b:{var n=0;for(var p=k.length;0<=(n=l.indexOf(k,n))&&n<m;){var q=l.charCodeAt(n-1);if(38==q||63==q)if(q=l.charCodeAt(n+p),!q||61==q||38==q||35==q)break b;n+=p+1}n=-1}if(0>n)l=null;else{p=l.indexOf("&",n);if(0>p||p>m)p=m;n+=k.length+1;l=decodeURIComponent(l.substr(n,
p-n).replace(/\+/g," "))}null!==l&&(h[k]=l)});
c.src=N(a.i,"host")+("/embed/"+N(a.i,"videoId"))+"?"+pc(h);return c}
r.X=function(){this.h&&this.h.contentWindow?this.R({event:"listening"}):window.clearInterval(this.j)};
function fj(a){Yf(a.i,a,a.m);a.j=Gf(Pa(a.X,a));Ef(a.h,"load",Pa(function(){window.clearInterval(this.j);this.j=Gf(Pa(this.X,this))},a))}
function ij(a,b){a.G[b]||(a.G[b]=!0,jj(a,"addEventListener",[b]))}
r.R=function(a){a.id=this.m;a.channel="widget";var b=He(a),c=this.i,d=nc(this.h.src||"");var e=0==d.indexOf("https:")?[d]:c.h?[d.replace("http:","https:")]:c.j?[d]:[d,d.replace("http:","https:")];if(this.h.contentWindow)for(var f=0;f<e.length;f++)try{this.h.contentWindow.postMessage(b,e[f])}catch(Ua){if(Ua.name&&"SyntaxError"==Ua.name){if(!(Ua.message&&0<Ua.message.indexOf("target origin ''"))){var g=void 0,h=Ua;g=void 0===g?{}:g;g.name=M("INNERTUBE_CONTEXT_CLIENT_NAME",1);g.version=M("INNERTUBE_CONTEXT_CLIENT_VERSION",
void 0);var k=g||{},l="WARNING";l=void 0===l?"ERROR":l;if(h){if(P("console_log_js_exceptions")){var m=h,n=[];n.push("Name: "+m.name);n.push("Message: "+m.message);m.hasOwnProperty("params")&&n.push("Error Params: "+JSON.stringify(m.params));n.push("File name: "+m.fileName);n.push("Stacktrace: "+m.stack);window.console.log(n.join("\n"),m)}if(!(5<=aj)){var p=h,q=k,v=Kc(p),w=v.message||"Unknown Error",y=v.name||"UnknownError",G=v.stack||p.h||"Not available";if(G.startsWith(y+": "+w)){var Q=G.split("\n");
Q.shift();G=Q.join("\n")}var Ia=v.lineNumber||"Not available",oj=v.fileName||"Not available",pj=G,cc=void 0,ha=p,S=q;if(ha.hasOwnProperty("args")&&ha.args&&ha.args.length)for(var sa=0,dc=0;dc<ha.args.length;dc++){var O=ha.args[dc],ta="params."+dc;sa+=ta.length;if(O)if(Array.isArray(O)){for(var qj=S,zd=sa,tb=0;tb<O.length&&!(O[tb]&&(zd+=Yi(tb,O[tb],ta,qj),500<zd));tb++);sa=zd}else if("object"===typeof O){var Va=void 0,kg=S,ub=sa;for(Va in O)if(O[Va]){var rj=ub;var Ad=Va,lg=O[Va],sj=kg;if("string"!==
typeof lg||"clickTrackingParams"!==Ad&&"trackingParams"!==Ad)var mg=0;else{var ng=Wi(atob(lg.replace(/-/g,"+").replace(/_/g,"/")));mg=ng?Yi(Ad+".ve",ng,ta,sj):0}ub=rj+mg;ub+=Yi(Va,O[Va],ta,kg);if(500<ub)break}sa=ub}else S[ta]=Zi(O),sa+=S[ta].length;else S[ta]=Zi(O),sa+=S[ta].length;if(500<=sa)break}else if(ha.hasOwnProperty("params")&&ha.params){var ec=ha.params;if("object"===typeof ha.params){var og=0;for(cc in ec)if(ec[cc]){var pg="params."+cc,qg=Zi(ec[cc]);S[pg]=qg;og+=pg.length+qg.length;if(500<
og)break}}else S.params=Zi(ec)}navigator.vendor&&!S.hasOwnProperty("vendor")&&(S["device.vendor"]=navigator.vendor);var vb={message:w,name:y,lineNumber:Ia,fileName:oj,stack:pj,params:S,sampleWeight:1},rg=Number(p.columnNumber);isNaN(rg)||(vb.lineNumber=vb.lineNumber+":"+rg);if(void 0!==p.sampleWeight)var fc=p.sampleWeight;else a:{for(var Bd=vb,sg=Ui(),tg=u(sg.i),Cd=tg.next();!Cd.done;Cd=tg.next()){var ug=Cd.value;if(Bd.message&&Bd.message.match(ug.Ma)){fc=ug.weight;break a}}for(var vg=u(sg.h),Dd=
vg.next();!Dd.done;Dd=vg.next()){var wg=Dd.value;if(wg.Ia(Bd)){fc=wg.weight;break a}}fc=1}vb.sampleWeight=fc;for(var Ea=vb,xg=u(Ri),Ed=xg.next();!Ed.done;Ed=xg.next()){var Fd=Ed.value;if(Fd.P[Ea.name])for(var yg=u(Fd.P[Ea.name]),Gd=yg.next();!Gd.done;Gd=yg.next()){var zg=Gd.value,gc=Ea.message.match(zg.regexp);if(gc){Ea.params["params.error.original"]=gc[0];for(var Hd=zg.groups,Ag={},Wa=0;Wa<Hd.length;Wa++)Ag[Hd[Wa]]=gc[Wa+1],Ea.params["params.error."+Hd[Wa]]=gc[Wa+1];Ea.message=Fd.W(Ag);break}}}var Xa=
Ea;Xa.params||(Xa.params={});var Bg=Ui();Xa.params["params.errorServiceSignature"]="msg="+Bg.i.length+"&cb="+Bg.h.length;Xa.params["params.serviceWorker"]="false";Xa.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length);var ia=Xa;window.yterr&&"function"===typeof window.yterr&&window.yterr(ia);var tj=0===ia.sampleWeight;if(!$i.has(ia.message)&&!tj){"ERROR"===l?(Vi.H("handleError",ia),P("record_app_crashed_web")&&0===cj&&1===ia.sampleWeight&&(cj++,Qi("appCrashed",
{appCrashType:"APP_CRASH_TYPE_BREAKPAD"})),bj++):"WARNING"===l&&Vi.H("handleWarning",ia);if(P("kevlar_gel_error_routing")){var Cg=l,X=ia;a:{for(var Dg=u(dj),Id=Dg.next();!Id.done;Id=Dg.next()){var Eg=Bb;if(Eg&&0<=Eg.toLowerCase().indexOf(Id.value.toLowerCase())){var Fg=!0;break a}}Fg=!1}if(!Fg){var wb={stackTrace:X.stack};X.fileName&&(wb.filename=X.fileName);var ja=X.lineNumber&&X.lineNumber.split?X.lineNumber.split(":"):[];0!==ja.length&&(1!==ja.length||isNaN(Number(ja[0]))?2!==ja.length||isNaN(Number(ja[0]))||
isNaN(Number(ja[1]))||(wb.lineNumber=Number(ja[0]),wb.columnNumber=Number(ja[1])):wb.lineNumber=Number(ja[0]));var Jd={level:"ERROR_LEVEL_UNKNOWN",message:X.message,errorClassName:X.name,sampleWeight:X.sampleWeight};"ERROR"===Cg?Jd.level="ERROR_LEVEL_ERROR":"WARNING"===Cg&&(Jd.level="ERROR_LEVEL_WARNNING");var uj={isObfuscated:!0,browserStackInfo:wb},xb={pageUrl:window.location.href,kvPairs:[]};M("FEXP_EXPERIMENTS")&&(xb.experimentIds=M("FEXP_EXPERIMENTS"));var Kd=X.params;if(Kd)for(var Gg=u(Object.keys(Kd)),
Ld=Gg.next();!Ld.done;Ld=Gg.next()){var Hg=Ld.value;xb.kvPairs.push({key:"client."+Hg,value:String(Kd[Hg])})}var Ig=M("SERVER_NAME",void 0),Jg=M("SERVER_VERSION",void 0);Ig&&Jg&&(xb.kvPairs.push({key:"server.name",value:Ig}),xb.kvPairs.push({key:"server.version",value:Jg}));Qi("clientError",{errorMetadata:xb,stackTrace:uj,logMessage:Jd});bh()}}if(!P("suppress_error_204_logging")){var Md,Fa=ia,yb=Fa.params||{},ua={urlParams:{a:"logerror",t:"jserror",type:Fa.name,msg:Fa.message.substr(0,250),line:Fa.lineNumber,
level:l,"client.name":yb.name},postParams:{url:M("PAGE_NAME",window.location.href),file:Fa.fileName},method:"POST"};yb.version&&(ua["client.version"]=yb.version);if(ua.postParams){Fa.stack&&(ua.postParams.stack=Fa.stack);for(var Kg=u(Object.keys(yb)),Nd=Kg.next();!Nd.done;Nd=Kg.next()){var Lg=Nd.value;ua.postParams["client."+Lg]=yb[Lg]}if(Md=M("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var Mg=u(Object.keys(Md)),Od=Mg.next();!Od.done;Od=Mg.next()){var Ng=Od.value;ua.postParams[Ng]=Md[Ng]}var Og=
M("SERVER_NAME",void 0),Pg=M("SERVER_VERSION",void 0);Og&&Pg&&(ua.postParams["server.name"]=Og,ua.postParams["server.version"]=Pg)}wh(M("ECATCHER_REPORT_HOST","")+"/error_204",ua)}$i.add(ia.message);aj++}}}}}else throw Ua;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function kj(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function lj(a){return 0===a.search("get")||0===a.search("is")}
;function Z(a,b){if(!a)throw Error("YouTube player element ID required.");var c={title:"video player",videoId:"",width:640,height:360};if(b)for(var d in b)c[d]=b[d];Y.call(this,a,c,"player");this.C={};this.playerInfo={}}
x(Z,Y);r=Z.prototype;r.T=function(){var a=N(this.i,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!=window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=N(this.i,"embedConfig")){if(D(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
r.Y=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(D(a))for(var c in a)this.C[c]=a[c];break;case "infoDelivery":mj(this,a);break;case "initialDelivery":window.clearInterval(this.j);this.playerInfo={};this.C={};nj(this,a.apiInterface);mj(this,a);break;default:hj(this,b,a)}};
function mj(a,b){if(D(b))for(var c in b)a.playerInfo[c]=b[c]}
function nj(a,b){H(b,function(c){this[c]||("getCurrentTime"==c?this[c]=function(){var d=this.playerInfo.currentTime;if(1==this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:kj(c)?this[c]=function(){this.playerInfo={};
this.C={};jj(this,c,arguments);return this}:lj(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){jj(this,c,arguments);
return this})},a)}
r.getVideoEmbedCode=function(){var a=parseInt(N(this.i,"width"),10),b=parseInt(N(this.i,"height"),10),c=N(this.i,"host")+("/embed/"+N(this.i,"videoId"));zb.test(c)&&(-1!=c.indexOf("&")&&(c=c.replace(nb,"&amp;")),-1!=c.indexOf("<")&&(c=c.replace(ob,"&lt;")),-1!=c.indexOf(">")&&(c=c.replace(pb,"&gt;")),-1!=c.indexOf('"')&&(c=c.replace(qb,"&quot;")),-1!=c.indexOf("'")&&(c=c.replace(rb,"&#39;")),-1!=c.indexOf("\x00")&&(c=c.replace(sb,"&#0;")));return'<iframe width="'+a+'" height="'+b+'" src="'+c+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'};
r.getOptions=function(a){return this.C.namespaces?a?this.C[a].options||[]:this.C.namespaces||[]:[]};
r.getOption=function(a,b){if(this.C.namespaces&&a&&b)return this.C[a][b]};
function vj(a){if("iframe"!=a.tagName.toLowerCase()){var b=Vf(a,"videoid");b&&(b={videoId:b,width:Vf(a,"width"),height:Vf(a,"height")},new Z(a,b))}}
;E("YT.PlayerState.UNSTARTED",-1);E("YT.PlayerState.ENDED",0);E("YT.PlayerState.PLAYING",1);E("YT.PlayerState.PAUSED",2);E("YT.PlayerState.BUFFERING",3);E("YT.PlayerState.CUED",5);E("YT.get",function(a){return Rf[a]});
E("YT.scan",Uf);E("YT.subscribe",function(a,b,c){Ze.subscribe(a,b,c);Tf[a]=!0;for(var d in Rf)gj(Rf[d],a)});
E("YT.unsubscribe",function(a,b,c){Ye(a,b,c)});
E("YT.Player",Z);Y.prototype.destroy=Y.prototype.destroy;Y.prototype.setSize=Y.prototype.setSize;Y.prototype.getIframe=Y.prototype.fa;Y.prototype.addEventListener=Y.prototype.addEventListener;Z.prototype.getVideoEmbedCode=Z.prototype.getVideoEmbedCode;Z.prototype.getOptions=Z.prototype.getOptions;Z.prototype.getOption=Z.prototype.getOption;
Sf.push(function(a){var b=a;b||(b=document);a=bb(b.getElementsByTagName("yt:player"));var c=b||document;if(c.querySelectorAll&&c.querySelector)b=c.querySelectorAll(".yt-player");else{var d;c=document;b=b||c;if(b.querySelectorAll&&b.querySelector)b=b.querySelectorAll(".yt-player");else if(b.getElementsByClassName){var e=b.getElementsByClassName("yt-player");b=e}else{e=b.getElementsByTagName("*");var f={};for(c=d=0;b=e[c];c++){var g=b.className,h;if(h="function"==typeof g.split)h=0<=Ta(g.split(/\s+/),
"yt-player");h&&(f[d++]=b)}f.length=d;b=f}}b=bb(b);H(ab(a,b),vj)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||Uf();var wj=B.onYTReady;wj&&wj();var xj=B.onYouTubeIframeAPIReady;xj&&xj();var yj=B.onYouTubePlayerAPIReady;yj&&yj();}).call(this);
