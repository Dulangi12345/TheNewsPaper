if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let o={};const c=e=>n(e,d),f={module:{uri:d},exports:o,require:c};i[d]=Promise.all(r.map((e=>f[e]||c(e)))).then((e=>(s(...e),o)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-c19ac948.css",revision:null},{url:"index.html",revision:"c8f82a2d022491bf523226df7968a6d4"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"favicon-16x16.png",revision:"c56c5f7b5a1bade21eaa0d3955361e5a"},{url:"favicon-32x32.png",revision:"e4cbc684a6d2f6d61271fef9ea4471c3"},{url:"android-icon-144x144.png",revision:"09470622eef09b2e055e0e89fc14d02d"},{url:"android-icon-192x192.png",revision:"52f90f20b93d92e66832f495e0397ecd"},{url:"android-chrome-512x512.png",revision:"d57e07fd340b76d379804043735571b9"},{url:"manifest.webmanifest",revision:"2e8dd6dbb3dba0bf2cfb0651adc17da2"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
