!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2),n(3),n(4),n(5),n(6),n(7),n(8),n(9)},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t){var n=document.querySelector(".header__menu"),r=document.querySelector(".sidebar"),o=document.querySelector(".opacity");n.addEventListener("click",(function(){r.dataset.folded="false",r.classList.toggle("sidebar-hidden"),r.classList.toggle("sidebar-visible"),o.classList.toggle("hidden"),o.classList.contains("hidden")?removeEventListener("click",opacityBlockHandler):o.addEventListener("click",opacityBlockHandler)})),opacityBlockHandler=function(){o.classList.toggle("hidden"),r.classList.toggle("sidebar-hidden"),r.classList.toggle("sidebar-visible")}},function(e,t){var n=document.querySelector(".nav__collapse-btn"),r=document.querySelector(".nav__expand-btn"),o=document.querySelector(".sidebar");n.addEventListener("click",(function(){var e=o.dataset.folded;o.dataset.folded="true"===e?"false":"true","true"===e?r.removeEventListener("click",i):r.addEventListener("click",i)}));var i=function(){o.dataset.folded="true"!==o.dataset.folded}}]);
//# sourceMappingURL=bundle.js.map