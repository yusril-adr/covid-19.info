!function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=6)}([function(n,t,e){var r=e(1),o=e(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1},c=(r(o,i),o.locals?o.locals:{});n.exports=c},function(n,t,e){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}(),c=[];function a(n){for(var t=-1,e=0;e<c.length;e++)if(c[e].identifier===n){t=e;break}return t}function u(n,t){for(var e={},r=[],o=0;o<n.length;o++){var i=n[o],u=t.base?i[0]+t.base:i[0],f=e[u]||0,l="".concat(u," ").concat(f);e[u]=f+1;var s=a(l),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==s?(c[s].references++,c[s].updater(p)):c.push({identifier:l,updater:h(p,t),references:1}),r.push(l)}return r}function f(n){var t=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=e.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){t.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(t);else{var c=i(n.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var l,s=(l=[],function(n,t){return l[n]=t,l.filter(Boolean).join("\n")});function p(n,t,e,r){var o=e?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=s(t,o);else{var i=document.createTextNode(o),c=n.childNodes;c[t]&&n.removeChild(c[t]),c.length?n.insertBefore(i,c[t]):n.appendChild(i)}}function d(n,t,e){var r=e.css,o=e.media,i=e.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var y=null,b=0;function h(n,t){var e,r,o;if(t.singleton){var i=b++;e=y||(y=f(t)),r=p.bind(null,e,i,!1),o=p.bind(null,e,i,!0)}else e=f(t),r=d.bind(null,e,t),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else o()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var e=u(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<e.length;r++){var o=a(e[r]);c[o].references--}for(var i=u(n,t),f=0;f<e.length;f++){var l=a(e[f]);0===c[l].references&&(c[l].updater(),c.splice(l,1))}e=i}}}},function(n,t,e){(t=e(3)(!1)).push([n.i,"@import url(https://fonts.googleapis.com/css?family=Girassol|Muli&display=swap);"]),t.push([n.i,"@import url(https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css);"]),t.push([n.i,"* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-family: 'Muli';\r\n}\r\n\r\nmain {\r\n    background-image: url(https://www.toptal.com/designers/subtlepatterns/patterns/more-leaves-on-green.png);\r\n}\r\n\r\n.card {\r\n    border: 2px solid rgb(20, 204, 143);\r\n    border-radius: 12px;\r\n    background-color: white;\r\n    padding: 20px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\nheader {\r\n    background: -webkit-linear-gradient(rgb(20, 204, 143), rgb(76, 216, 169));\r\n    color: white;\r\n    font-family: 'Girassol';\r\n}\r\n\r\n.content {\r\n    width: 60%;\r\n    margin: auto;\r\n    padding: 20px;\r\n}\r\n\r\nfooter {\r\n    background-color: teal;\r\n    padding: 20px;\r\n    color: white;\r\n}\r\n\r\n@media screen and (max-width: 1000px) {\r\n    .content {\r\n        width: 90%;\r\n    }\r\n}",""]),n.exports=t},function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=function(n,t){var e=n[1]||"",r=n[3];if(!r)return e;if(t&&"function"==typeof btoa){var o=(c=r,a=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(u," */")),i=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[e].concat(i).concat([o]).join("\n")}var c,a,u;return[e].join("\n")}(t,n);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(var a=0;a<n.length;a++){var u=[].concat(n[a]);r&&o[u[0]]||(e&&(u[2]?u[2]="".concat(e," and ").concat(u[2]):u[2]=e),t.push(u))}},t}},function(n,t){function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function r(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function o(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function i(n,t){return!t||"object"!==e(t)&&"function"!=typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}function c(n){var t="function"==typeof Map?new Map:void 0;return(c=function(n){if(null===n||(e=n,-1===Function.toString.call(e).indexOf("[native code]")))return n;var e;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,r)}function r(){return a(n,arguments,l(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),f(r,n)})(n)}function a(n,t,e){return(a=u()?Reflect.construct:function(n,t,e){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(n,r));return e&&f(o,e.prototype),o}).apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}function f(n,t){return(f=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function l(n){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var s=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&f(n,t)}(p,n);var t,e,c,a,s=(t=p,function(){var n,e=l(t);if(u()){var r=l(this).constructor;n=Reflect.construct(e,arguments,r)}else n=e.apply(this,arguments);return i(this,n)});function p(){return r(this,p),s.apply(this,arguments)}return e=p,(c=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML='\n        <style>\n            .search-box {\n                margin: auto;\n                display: flex;\n                justify-content: space-around;\n            }\n            \n            #search {\n                border: 0;\n                border-bottom: 1px solid rgb(20, 204, 143);\n                background: transparent;\n                font-size: 14px;\n                width: 75%;\n            }\n            \n            #searchButton {\n                background-color: rgb(20, 204, 143);\n                width: 20%;\n                padding: 5px;\n                margin-left: 5px;\n                font-size: 22px;\n                color: white;\n                border: 0;\n                border-radius: 8px;\n                transition: transform .3s;\n            }\n            \n            #searchButton:hover {\n                background-color: salmon;\n                transform: scale(1.2);\n            }\n\n            @media screen and (max-width: 1000px) {\n                .search-box {\n                    width: 100%;\n                }\n            \n                #search {\n                    width: 75%;\n                }\n            }\n        </style>\n        <div class="animated fadeInLeft duration-1s delay--3s card search-box">\n                <input type="text" placeholder="Cari Negara" id="search">\n                <button id="searchButton">Cari</button>\n        </div>\n        '}},{key:"value",get:function(){return document.querySelector("#search").value}},{key:"clickEvent",set:function(n){this._clickEvent=n,document.querySelector("#searchButton").addEventListener("click",this._clickEvent)}}])&&o(e.prototype,c),a&&o(e,a),p}(c(HTMLElement));customElements.define("search-box",s)},function(n,t){function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function r(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function o(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function i(n,t){return!t||"object"!==e(t)&&"function"!=typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}function c(n){var t="function"==typeof Map?new Map:void 0;return(c=function(n){if(null===n||(e=n,-1===Function.toString.call(e).indexOf("[native code]")))return n;var e;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,r)}function r(){return a(n,arguments,l(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),f(r,n)})(n)}function a(n,t,e){return(a=u()?Reflect.construct:function(n,t,e){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(n,r));return e&&f(o,e.prototype),o}).apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}function f(n,t){return(f=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function l(n){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var s=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&f(n,t)}(p,n);var t,e,c,a,s=(t=p,function(){var n,e=l(t);if(u()){var r=l(this).constructor;n=Reflect.construct(e,arguments,r)}else n=e.apply(this,arguments);return i(this,n)});function p(){return r(this,p),s.apply(this,arguments)}return e=p,(c=[{key:"render",value:function(){this.innerHTML='\n        <style>\n            #not-found {\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                position: fixed;\n                top: 0;\n                bottom: 0;\n                right: 0;\n                left: 0;\n                background-color: rgba(0,0,0,.7);\n            }\n            \n            .errorBox {\n                width: 250px;\n                padding: 15px;\n                display: flex;\n                flex-direction: column;\n                align-items: center;\n                justify-content: center;\n                background-color: white;\n                border-radius: 12px;\n                animation-duration: .3s;\n            }\n\n            .errorBox p {\n                margin-bottom: 10px;\n            }\n\n            #notFoundButton {\n                width: 50px;\n                background-color: rgb(20, 204, 143);\n                color: white;\n                font-size: 18px;\n                border: 0;\n                border-radius: 4px;\n                padding: 5px;\n                transition: transform .3s;\n            }\n            \n            #notFoundButton:hover {\n                background-color: salmon;\n                transform: scale(1.1);\n            }\n        </style>\n        <div id="not-found">\n            <div class="animated zoomIn errorBox">\n                <p>'.concat(this._message,'</p>\n                <button id="notFoundButton">OK</button>\n            </div>\n        </div>\n        ')}},{key:"message",set:function(n){this._message=n,this.render()}},{key:"clickEvent",set:function(n){this._clickEvent=n,document.querySelector("#notFoundButton").addEventListener("click",this._clickEvent)}}])&&o(e.prototype,c),a&&o(e,a),p}(c(HTMLElement));customElements.define("not-found",s)},function(n,t,e){"use strict";e.r(t);e(0);var r=e.p+"57729aa8a523c06d3c545b269bcd8dda.png";function o(n){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function i(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function c(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function a(n,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}function u(n){var t="function"==typeof Map?new Map:void 0;return(u=function(n){if(null===n||(e=n,-1===Function.toString.call(e).indexOf("[native code]")))return n;var e;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,r)}function r(){return f(n,arguments,p(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),s(r,n)})(n)}function f(n,t,e){return(f=l()?Reflect.construct:function(n,t,e){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(n,r));return e&&s(o,e.prototype),o}).apply(null,arguments)}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}function s(n,t){return(s=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function p(n){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var d=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&s(n,t)}(d,n);var t,e,o,u,f=(t=d,function(){var n,e=p(t);if(l()){var r=p(this).constructor;n=Reflect.construct(e,arguments,r)}else n=e.apply(this,arguments);return a(this,n)});function d(){return i(this,d),f.apply(this,arguments)}return e=d,(o=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML='\n        <style>\n            .jumbotron {\n                display: flex;\n                text-transform: uppercase;\n                justify-content: center;\n                align-items: center;\n                padding: 10px;\n            }\n            \n            .jumbotron > img {\n                height: 70px;\n                margin-right: 15px;\n            }\n            \n            .jumbotron > h1 { \n                font-size: 28px;\n            }\n        </style>\n        <div class="jumbotron animated slideInDown">\n            <img src="'.concat(r,'" alt="Corona">\n            <h1>Covid-19.Info</h1>\n        </div>\n        ')}}])&&c(e.prototype,o),u&&c(e,u),d}(u(HTMLElement));customElements.define("jumbotron-title",d);var y=e.p+"aa736ed76abe8a40499bdc6a79aeb2ec.png";function b(n){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function h(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function m(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function v(n,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}function g(n){var t="function"==typeof Map?new Map:void 0;return(g=function(n){if(null===n||(e=n,-1===Function.toString.call(e).indexOf("[native code]")))return n;var e;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,r)}function r(){return w(n,arguments,O(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),j(r,n)})(n)}function w(n,t,e){return(w=x()?Reflect.construct:function(n,t,e){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(n,r));return e&&j(o,e.prototype),o}).apply(null,arguments)}function x(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}function j(n,t){return(j=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function O(n){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var S=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&j(n,t)}(c,n);var t,e,r,o,i=(t=c,function(){var n,e=O(t);if(x()){var r=O(this).constructor;n=Reflect.construct(e,arguments,r)}else n=e.apply(this,arguments);return v(this,n)});function c(){return h(this,c),i.apply(this,arguments)}return e=c,(r=[{key:"connectedCallback",value:function(){this.connect()}},{key:"connect",value:function(){this.innerHTML='\n        <style>\n            .connect {\n                height: 300px;\n                color: grey;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n            }\n\n            .connect > h1 {\n                text-align: center;\n            }\n        </style>\n        <div class = "animated fadeInRight card connect">\n            <h1>Data belum dicari</h1>\n        </div>\n        '}},{key:"render",value:function(){this.innerHTML='\n        <style>\n            .information-data {\n                display: flex;\n                flex-direction: column;\n                text-align: center;\n                align-items: center;\n            }\n\n            .information-data > img {\n                width: 50%;\n                margin: 20px;\n                border: 5px solid white;\n                border-radius: 12px;\n                box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, .7);\n                transition: .3s;\n            }\n\n            .information-data > img:hover {\n                transform: scale(1.05);\n            }\n\n            .data {\n                width: 60%;\n                margin: auto;\n                display: flex;\n                justify-content: space-around;\n            }\n\n            @media screen and (max-width: 1000px) {\n                .data {\n                    width: 80%;\n                    flex-wrap: wrap;\n                }\n\n                .information-data > img{\n                    width: 80%;\n                }\n            }\n        </style>\n        <div class="animated fadeInRight card information-data">\n\n            <h2>'.concat(this.region.toUpperCase(),'</h2>\n            <img src="').concat(y,'" alt"world">\n\n            <div class="data">\n                <p>Positif : ').concat(this.positive,"</p>\n                <p>Sembuh : ").concat(this.recovered,"</p>\n                <p>Meninggal : ").concat(this.deaths,"</p>\n            </div>\n        </div>\n        ")}},{key:"search",set:function(n){this.region=n.attributes.Country_Region,this.positive=n.attributes.Confirmed,this.deaths=n.attributes.Deaths,this.recovered=n.attributes.Recovered,this.render()}}])&&m(e.prototype,r),o&&m(e,o),c}(g(HTMLElement));customElements.define("information-data",S);e(4);var k=e.p+"c3ca4b33e284f5403c6e7d1ae1acae3d.png",_=e.p+"44e5a8c93fef1ed4b412715f72080f60.png",E=e.p+"4b114bd7949cda718404d1ce8ce44b1d.png";function R(n){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function P(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function M(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function T(n,t){return!t||"object"!==R(t)&&"function"!=typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}function C(n){var t="function"==typeof Map?new Map:void 0;return(C=function(n){if(null===n||(e=n,-1===Function.toString.call(e).indexOf("[native code]")))return n;var e;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,r)}function r(){return L(n,arguments,I(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),D(r,n)})(n)}function L(n,t,e){return(L=F()?Reflect.construct:function(n,t,e){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(n,r));return e&&D(o,e.prototype),o}).apply(null,arguments)}function F(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}function D(n,t){return(D=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function I(n){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var A=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&D(n,t)}(c,n);var t,e,r,o,i=(t=c,function(){var n,e=I(t);if(F()){var r=I(this).constructor;n=Reflect.construct(e,arguments,r)}else n=e.apply(this,arguments);return T(this,n)});function c(){return P(this,c),i.apply(this,arguments)}return e=c,(r=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML='\n        <style>\n            .copyright-social {\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n                flex-wrap: wrap;\n            }\n            .copyright { \n                width: 50%; \n                text-align: center;\n            }\n\n            .social {\n                width: 50%;\n                text-align: center;\n            }\n            \n            .social > p {\n                font-size: 20px;\n            }\n            \n            .social figure {\n                width: 50%;\n                margin: auto;\n                margin-top: 10px;\n                display: flex;\n                justify-content: space-around;\n            }\n            \n            .social figure img { \n                width: 70px;\n                border-radius: 50%;\n                transition: .3s;\n            }\n            \n            .social figure img:hover {\n                transform: scale(1.2);\n            }\n\n            @media screen and (max-width: 1000px) {\n                .copyright, .social, .social figure {\n                    width: 100%;\n                }\n            \n                .social {\n                    margin-top: 20px;\n                }\n            \n                .social figure img {\n                    width: 85px;\n                }\n            }\n        </style>\n        <div class="copyright-social animated fadeInUp">\n            <article class="copyright">\n                <p>Thanks to Data Pandemi Covid-19 API by Teguh Aprianto.</p><br>\n                <p>&copy; 2020 by Yusril Adriansyah Putra.</p>\n            </article>\n\n            <article class="social">\n                    <p>Find me on :</p>\n                    <figure>\n                        <a href="https://www.facebook.com/yusril.adr" target="_blank" class="facebook">\n                            <img src="'.concat(k,'" alt="Facebook">\n                        </a>\n                \n                        <a href="https://www.instagram.com/yusril_adr" target="_blank" class="instagram">\n                            <img src="').concat(_,'" alt="Instagram">\n                        </a>\n                \n                        <a href="https://www.dicoding.com/users/648933" target="_blank" class="dicoding">\n                            <img src="').concat(E,'" alt="Dicoding">\n                        </a>\n                    </figure>\n            </article>\n        </div>\n        ')}}])&&M(e.prototype,r),o&&M(e,o),c}(C(HTMLElement));customElements.define("copyright-social",A);e(5);function B(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(n)))return;var e=[],r=!0,o=!1,i=void 0;try{for(var c,a=n[Symbol.iterator]();!(r=(c=a.next()).done)&&(e.push(c.value),!t||e.length!==t);r=!0);}catch(n){o=!0,i=n}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return e}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return H(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return H(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function H(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function U(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var N=function(){function n(){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n)}var t,e,r;return t=n,r=[{key:"search",value:function(n){return fetch("https://api.kawalcorona.com/").then((function(n){return n.json()})).then((function(t){return null===t?Promise.reject("Api sedang down, mohon coba lagi nanti setelah beberapa saat."):t.filter((function(t){return t.attributes.Country_Region.toUpperCase()===n.toUpperCase()}))})).then((function(t){if(t.length){var e=B(t,1)[0];return Promise.resolve(e)}return Promise.reject("".concat(n," tidak ditemukan."))}))}}],(e=null)&&U(t.prototype,e),r&&U(t,r),n}();document.addEventListener("DOMContentLoaded",(function(){var n=document.querySelector("body"),t=document.querySelector("search-box"),e=document.querySelector("information-data"),r=document.createElement("not-found"),o=function(n){e.search=n},i=function(t){r.message=t,n.appendChild(r),r.clickEvent=c},c=function(){n.removeChild(r)};t.clickEvent=function(){""!=t.value&&N.search(t.value).then(o).catch(i)}}))}]);