!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return t[o].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(3)},function(t,e,n){(function(t){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(6),i=o(r),s=function(){var e=function(){return new Promise(function(e,n){setTimeout(function(){t(i["default"]).then(function(t){if(t.status>=200&&t.status<300)return t;var e=new Error(t.statusText);throw e.response=t,e}).then(function(t){return t.json()}).then(function(t){return e(t)})["catch"](function(t){return console.error(t)})},200)})};return{getData:e}};e["default"]=s}).call(e,n(7))},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t,e){var n=function(){return t},o=function(t){return e[t]};return{getName:n,getNetwork:o}};e["default"]=n},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}n(9);var r=n(1),i=o(r),s=n(2),a=o(s),c=function(){var t={countries:[],network:"facebook"},e=function(e){Object.assign(t,e)},n=function(){return new Promise(function(n,o){(0,i["default"])().getData().then(function(o){var r=o.data.map(function(t){return(0,a["default"])(t.name,t.networks)});e({countries:r}),n(t.countries)})["catch"](function(t){return console.error(t)})})},o=function(){document.querySelector(".app").addEventListener("click",function(t){t.target&&t.target.matches("button.controls__button")&&c(t.target)})},r=function(){var e=Array.from(document.querySelectorAll(".country"));t.countries.forEach(function(n,o){e[o].style.transform=s(n),e[o].classList.remove("facebook","instagram","twitter"),e[o].classList.add(t.network)})},s=function(e){return"scale("+e.getNetwork(t.network).totalUsers/1e8+")"},c=function(n){var o=n.getAttribute("data-network"),i=Array.from(document.querySelectorAll(".controls__button"));e({network:o}),i.map(function(t){return t.classList.remove("facebook","instagram","twitter")}),n.classList.add("controls__button--active",t.network),r()},f=function(){return'<h1 class="title">Social Circles</h1>\n			<div class="earth">\n				<div class="earth__ocean"></div>\n				<div class="earth__map">\n					<div class="countries">\n						'+t.countries.map(function(e){return'<div\n								id="'+e.getName().replace(/\ /g,"-")+'"\n								class="country '+t.network+'"\n								style="transform: '+s(e)+'">\n							</div>'}).join("")+'\n					</div>\n				</div>\n			</div>\n			<div class="controls">\n				<button class="controls__button facebook" type="button" data-network="facebook">Facebook</button>\n				<button class="controls__button" type="button" data-network="instagram">Instagram</button>\n				<button class="controls__button" type="button" data-network="twitter">Twitter</button>\n			</div>\n			<div class="example-size">100 Million<br>People</div>\n			<footer class="footer">\n				<a href="https://www.arjanjassal.me/">Designed &amp; Developed by Arjan Jassal</a>\n			</footer>'},u=function(){document.querySelector(".app").innerHTML=f()},l=function(){o(),n().then(function(t){return u()})["catch"](function(t){return console.error(t)})};return{init:l}};document.addEventListener("DOMContentLoaded",function(){c().init()})},function(t,e,n){e=t.exports=n(5)(),e.push([t.id,"@import url(https://fonts.googleapis.com/css?family=Roboto:400,300,700);",""]),e.push([t.id,'#United-States{left:-425px;top:130px}#India{left:220px;top:210px}#Brazil{left:-250px;top:300px}#Indonesia{left:345px;top:290px}#Mexico{left:-430px;top:180px}#United-Kingdom{left:-65px;top:80px}#Turkey{left:55px;top:135px}#Philippines{left:380px;top:235px}#France{left:-55px;top:100px}#Germany{left:-30px;top:90px}#Italy{left:-10px;top:125px}#Argentina{left:-285px;top:380px}#Canada{left:-450px;top:85px}#Thailand{left:305px;top:215px}#Spain{left:-75px;top:130px}#Colombia{left:-325px;top:255px}#Japan{left:440px;top:135px}#Malaysia{left:350px;top:260px}#Taiwan{left:375px;top:190px}#Egypt{left:50px;top:170px}#Australia{left:420px;top:355px}#Vietnam{left:330px;top:225px}#South-Korea{left:395px;top:145px}*{box-sizing:border-box;margin:0;padding:0}:root{font-family:Roboto,sans-serif;font-size:.625rem;line-height:1.6;-webkit-font-smoothing:antialiased;-moz-font-smoothing:antialiased;text-rendering:optimizeLegibility}.app{*zoom:1;min-height:100vh;padding:5vh 5vw 0;background:#252a34 url("//unsplash.it/1920/1080?image=825") 50%/cover;position:relative;z-index:1}.app:after,.app:before{content:"";display:table}.app:after{clear:both}.app:before{content:"";display:block;position:absolute;z-index:-1;top:0;left:0;width:100%;height:100%;background:#0f2145;opacity:.7}.earth{position:absolute;left:50%;top:50%;margin:-262.5px 0 0 -262.5px;border-radius:50%;overflow:hidden;width:525px;height:525px;-webkit-transform:scale(0);transform:scale(0);-webkit-animation:earth-enter .5s .5s cubic-bezier(.175,.885,.32,1.275);animation:earth-enter .5s .5s cubic-bezier(.175,.885,.32,1.275);-webkit-animation-fill-mode:both;animation-fill-mode:both}.earth__ocean{position:absolute;width:100%;height:100%;background:#88a6e5}.earth__map{width:2560px;height:525px;background:url('+n(10)+") 50% repeat-x;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0);-webkit-animation:map-rotation 20s linear infinite;animation:map-rotation 20s linear infinite;will-change:transform;-webkit-backface-visibility:hidden;backface-visibility:hidden}@-webkit-keyframes earth-enter{to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes earth-enter{to{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes map-rotation{to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes map-rotation{to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes countries-shift{0%,75.9%{left:50%}76%,to{left:0}}@keyframes countries-shift{0%,75.9%{left:50%}76%,to{left:0}}.countries{display:block;position:absolute;top:0;left:50%;-webkit-animation:countries-shift 20s linear infinite;animation:countries-shift 20s linear infinite}.country{width:100px;height:100px;background:#8d6ec8;border-radius:50%;position:absolute;box-shadow:0 10px 20px rgba(0,0,0,.22),0 14px 56px rgba(0,0,0,.25);opacity:.9;-webkit-transition:-webkit-transform .3s cubic-bezier(.175,.885,.32,1.275);transition:-webkit-transform .3s cubic-bezier(.175,.885,.32,1.275);transition:transform .3s cubic-bezier(.175,.885,.32,1.275);transition:transform .3s cubic-bezier(.175,.885,.32,1.275),-webkit-transform .3s cubic-bezier(.175,.885,.32,1.275)}.country.facebook{background:#3b5998}.country.instagram{background:#3f729b}.country.twitter{background:#55acee}.title{margin:0 0 2.4rem;font-size:3.2rem;color:#fff;text-align:center;letter-spacing:4px;text-transform:uppercase;font-weight:300}.controls{position:absolute;top:0;height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column wrap;-ms-flex-flow:column wrap;flex-flow:column wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.controls__button{-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;display:block;width:130px;margin-bottom:20px;padding:10px 20px;border:3px solid #fff;text-transform:uppercase;font-weight:700;letter-spacing:2px;color:#fff;background:rgba(0,0,0,.15);-webkit-transition:all .1s ease-out;transition:all .1s ease-out;box-shadow:0 1.5px 4px rgba(0,0,0,.24),0 1.5px 6px rgba(0,0,0,.12)}.controls__button:focus{outline:none}.controls__button:hover{-webkit-transform:scale(1.05);transform:scale(1.05)}.controls__button:last-child{margin-bottom:0}.controls__button.facebook{border-color:#3b5998;color:#3b5998}.controls__button.instagram{border-color:#3f729b;color:#3f729b}.controls__button.twitter{border-color:#55acee;color:#55acee}.example-size{pointer-events:none;position:absolute;top:calc(50% - 50px);right:5vw;width:100px;height:100px;border:3px solid #fff;border-radius:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;text-align:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#fff;font-weight:700;text-transform:uppercase;letter-spacing:1px;background:rgba(0,0,0,.15)}.footer{position:absolute;bottom:5vh}.footer a{color:#fff;text-decoration:none;font-size:1.4rem;font-weight:300}",""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<e.length;r++){var s=e[r];"number"==typeof s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(t,e,n){t.exports=n.p+"b558687b5fd63b2e83221b016ca895bb.json"},function(t,e){(function(e){(function(){!function(t){"use strict";function e(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function n(t){return"string"!=typeof t&&(t=String(t)),t}function o(t){this.map={},t instanceof o?t.forEach(function(t,e){this.append(e,t)},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function r(t){return t.bodyUsed?Promise.reject(new TypeError("Already read")):void(t.bodyUsed=!0)}function i(t){return new Promise(function(e,n){t.onload=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function s(t){var e=new FileReader;return e.readAsArrayBuffer(t),i(e)}function a(t){var e=new FileReader;return e.readAsText(t),i(e)}function c(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,"string"==typeof t)this._bodyText=t;else if(h.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(h.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(t){if(!h.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t))throw new Error("unsupported BodyInit type")}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type&&this.headers.set("content-type",this._bodyBlob.type))},h.blob?(this.blob=function(){var t=r(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this.blob().then(s)},this.text=function(){var t=r(this);if(t)return t;if(this._bodyBlob)return a(this._bodyBlob);if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)}):this.text=function(){var t=r(this);return t?t:Promise.resolve(this._bodyText)},h.formData&&(this.formData=function(){return this.text().then(l)}),this.json=function(){return this.text().then(JSON.parse)},this}function f(t){var e=t.toUpperCase();return b.indexOf(e)>-1?e:t}function u(t,e){e=e||{};var n=e.body;if(u.prototype.isPrototypeOf(t)){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new o(t.headers)),this.method=t.method,this.mode=t.mode,n||(n=t._bodyInit,t.bodyUsed=!0)}else this.url=t;if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new o(e.headers)),this.method=f(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function l(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var n=t.split("="),o=n.shift().replace(/\+/g," "),r=n.join("=").replace(/\+/g," ");e.append(decodeURIComponent(o),decodeURIComponent(r))}}),e}function p(t){var e=new o,n=t.getAllResponseHeaders().trim().split("\n");return n.forEach(function(t){var n=t.trim().split(":"),o=n.shift().trim(),r=n.join(":").trim();e.append(o,r)}),e}function d(t,e){e||(e={}),this.type="default",this.status=e.status,this.ok=this.status>=200&&this.status<300,this.statusText=e.statusText,this.headers=e.headers instanceof o?e.headers:new o(e.headers),this.url=e.url||"",this._initBody(t)}if(!t.fetch){o.prototype.append=function(t,o){t=e(t),o=n(o);var r=this.map[t];r||(r=[],this.map[t]=r),r.push(o)},o.prototype["delete"]=function(t){delete this.map[e(t)]},o.prototype.get=function(t){var n=this.map[e(t)];return n?n[0]:null},o.prototype.getAll=function(t){return this.map[e(t)]||[]},o.prototype.has=function(t){return this.map.hasOwnProperty(e(t))},o.prototype.set=function(t,o){this.map[e(t)]=[n(o)]},o.prototype.forEach=function(t,e){Object.getOwnPropertyNames(this.map).forEach(function(n){this.map[n].forEach(function(o){t.call(e,o,n,this)},this)},this)};var h={blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t},b=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];u.prototype.clone=function(){return new u(this)},c.call(u.prototype),c.call(d.prototype),d.prototype.clone=function(){return new d(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new o(this.headers),url:this.url})},d.error=function(){var t=new d(null,{status:0,statusText:""});return t.type="error",t};var m=[301,302,303,307,308];d.redirect=function(t,e){if(-1===m.indexOf(e))throw new RangeError("Invalid status code");return new d(null,{status:e,headers:{location:t}})},t.Headers=o,t.Request=u,t.Response=d,t.fetch=function(t,e){return new Promise(function(n,o){function r(){return"responseURL"in s?s.responseURL:/^X-Request-URL:/m.test(s.getAllResponseHeaders())?s.getResponseHeader("X-Request-URL"):void 0}var i;i=u.prototype.isPrototypeOf(t)&&!e?t:new u(t,e);var s=new XMLHttpRequest;s.onload=function(){var t=1223===s.status?204:s.status;if(100>t||t>599)return void o(new TypeError("Network request failed"));var e={status:t,statusText:s.statusText,headers:p(s),url:r()},i="response"in s?s.response:s.responseText;n(new d(i,e))},s.onerror=function(){o(new TypeError("Network request failed"))},s.open(i.method,i.url,!0),"include"===i.credentials&&(s.withCredentials=!0),"responseType"in s&&h.blob&&(s.responseType="blob"),i.headers.forEach(function(t,e){s.setRequestHeader(e,t)}),s.send("undefined"==typeof i._bodyInit?null:i._bodyInit)})},t.fetch.polyfill=!0}}("undefined"!=typeof self?self:this),t.exports=e.fetch}).call(e)}).call(e,function(){return this}())},function(t,e,n){function o(t,e){for(var n=0;n<t.length;n++){var o=t[n],r=d[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(f(o.parts[i],e))}else{for(var s=[],i=0;i<o.parts.length;i++)s.push(f(o.parts[i],e));d[o.id]={id:o.id,refs:1,parts:s}}}}function r(t){for(var e=[],n={},o=0;o<t.length;o++){var r=t[o],i=r[0],s=r[1],a=r[2],c=r[3],f={css:s,media:a,sourceMap:c};n[i]?n[i].parts.push(f):e.push(n[i]={id:i,parts:[f]})}return e}function i(t,e){var n=m(),o=w[w.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),w.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function s(t){t.parentNode.removeChild(t);var e=w.indexOf(t);e>=0&&w.splice(e,1)}function a(t){var e=document.createElement("style");return e.type="text/css",i(t,e),e}function c(t){var e=document.createElement("link");return e.rel="stylesheet",i(t,e),e}function f(t,e){var n,o,r;if(e.singleton){var i=x++;n=y||(y=a(e)),o=u.bind(null,n,i,!1),r=u.bind(null,n,i,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(e),o=p.bind(null,n),r=function(){s(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(e),o=l.bind(null,n),r=function(){s(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}function u(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=g(e,r);else{var i=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}function l(t,e){var n=e.css,o=e.media;e.sourceMap;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function p(t,e){var n=e.css,o=(e.media,e.sourceMap);o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var r=new Blob([n],{type:"text/css"}),i=t.href;t.href=URL.createObjectURL(r),i&&URL.revokeObjectURL(i)}var d={},h=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},b=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),m=h(function(){return document.head||document.getElementsByTagName("head")[0]}),y=null,x=0,w=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=b()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var n=r(t);return o(n,e),function(t){for(var i=[],s=0;s<n.length;s++){var a=n[s],c=d[a.id];c.refs--,i.push(c)}if(t){var f=r(t);o(f,e)}for(var s=0;s<i.length;s++){var c=i[s];if(0===c.refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete d[c.id]}}}};var g=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e,n){var o=n(4);"string"==typeof o&&(o=[[t.id,o,""]]);n(8)(o,{});o.locals&&(t.exports=o.locals)},function(t,e,n){t.exports=n.p+"b8c96c0250e4c18694e66a1fd651ce2b.svg"}]);
//# sourceMappingURL=bundle.js.map