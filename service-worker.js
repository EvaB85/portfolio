"use strict";var precacheConfig=[["/portfolio/index.html","8c53afadb09e4d54ba3eb47edbacaf05"],["/portfolio/static/css/main.25dd30ab.css","1827bf5d7a3def4038447addfe4f67c1"],["/portfolio/static/js/main.d6ee4311.js","1ecdef514f5edae63b2f8e8bf5c86f78"],["/portfolio/static/media/Monch.dfc956b0.png","dfc956b05a4217665e96b5b4aa9ea87d"],["/portfolio/static/media/Musaic.3dde44bf.png","3dde44bfd20b28bc62307badcefc0075"],["/portfolio/static/media/RepoTracker.4ea2e9f7.png","4ea2e9f78efd997f12f687a083554bed"],["/portfolio/static/media/bg-art.5fe0e9a8.jpeg","5fe0e9a8b155bc32e9fd70face3aa551"],["/portfolio/static/media/bigtree.fa67aa28.jpg","fa67aa287d68ff0d65a4bba7d24525c1"],["/portfolio/static/media/butterfly.b863ceae.jpg","b863ceae481f8a1925e16b052bd8b1e9"],["/portfolio/static/media/light.3a72625b.jpg","3a72625b2e73210ca8edf815e755b61d"],["/portfolio/static/media/mopop.fa7f6d1b.jpg","fa7f6d1bc714d5cf86681a7435447352"],["/portfolio/static/media/mountain.268f5b64.jpg","268f5b647c7edf45cf76bdf9eed6529f"],["/portfolio/static/media/profilepic1.5a42beae.jpg","5a42beae9f3a12e5839bbd2e5f20aed1"],["/portfolio/static/media/spaceneedle.872dd892.jpg","872dd8921ebeb4b111159c30c3140f04"],["/portfolio/static/media/subway.56ff5f74.jpg","56ff5f74b2aec0c90250db397a49ae58"],["/portfolio/static/media/sunset.f3b19a36.jpg","f3b19a3676dab6fdd9c57da50bdfa153"],["/portfolio/static/media/waterworks.27ddfce4.jpg","27ddfce4c64c3ce403e80f87612c1055"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),e=urlsToCacheKeys.has(a));var n="/portfolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});