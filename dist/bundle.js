(()=>{"use strict";var e={705:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},738:e=>{e.exports=function(e){return e[1]}},807:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(738),a=n.n(r),o=n(705),i=n.n(o)()(a());i.push([e.id,'*,::after,::before{padding:0;margin:0;box-sizing:border-box}html,body{height:100%;width:100%}header{width:100vw;height:12vh;background-color:#00425a;display:flex;flex-direction:row;justify-content:space-between;align-items:center}header h1{margin-left:2vw;font-size:2.5vw;color:#bfdb38;font-family:"Segoe UI",Tahoma,Geneva,Verdana,sans-serif}header ul{display:flex;flex-direction:row;list-style-type:none;gap:1vw;margin-right:2vw;padding:1vh 1vw;background-color:#1f8a70;border-radius:10px}header ul .img{width:3vw}header ul .img:hover{transform:scale(1.2)}main .container{display:grid;grid-template-columns:1fr 1fr}',""]);const c=i},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],d=o[l]||0,u="".concat(l," ").concat(d);o[l]=d+1;var p=n(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=a(f,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=n(o[i]);t[c].references--}for(var s=r(e,a),l=0;l<o.length;l++){var d=n(o[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),a=n.n(r),o=n(569),i=n.n(o),c=n(565),s=n.n(c),l=n(216),d=n.n(l),u=n(589),p=n.n(u),f=n(807),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=d(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const h=n.p+"/img/github-icon.svg",v=n.p+"/img/linkedin-icon.svg",g=n.p+"/img/website-icon.svg";!function(){let e=document.createElement("header");document.body.appendChild(e);let t=document.createElement("h1");t.innerHTML="Hacker News",e.appendChild(t);let n=document.createElement("ul");function r(e,t){let r=document.createElement("li");n.appendChild(r);let a=document.createElement("a");a.href=e,a.target="_blank",a.rel="noopener noreferrer",r.appendChild(a);let o=document.createElement("img");o.src=t,a.appendChild(o),o.classList.add("img")}e.appendChild(n),r("https://marcogiu.github.io/myWebsite/",g),r("https://github.com/marcogiu",h),r("https://www.linkedin.com/in/marco-giuliani-2a20b4179/",v)}(),function(){let e=document.createElement("main");document.body.appendChild(e);let t=document.createElement("div");t.classList.add("container"),e.appendChild(t);let n=document.createElement("button");n.classList.add("load-more"),n.innerHTML="Load More",e.appendChild(n)}();let b=0;async function y(e){const t=await fetch(`https://hacker-news.firebaseio.com/v0/item/${e}.json`);!function(e){const t=document.querySelector(".container"),n=document.createElement("div");n.innerHTML=`<a href="${e.url}" target="_blank"><h3>${e.title}</h3></a><article>${e.id}</article>`,t.appendChild(n)}(await t.json())}!async function(){(await async function(){const e=await fetch("https://hacker-news.firebaseio.com/v0/newstories.json");return(await e.json()).slice(b,b+10)}()).forEach(y)}(),document.querySelector(".load-more").addEventListener("click",(()=>{b+=10,getNews()}))})()})();