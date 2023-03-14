(()=>{var e={265:function(e){var t;t=function(){return function(e){var t={};function l(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,l),o.l=!0,o.exports}return l.m=e,l.c=t,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(r,o,function(t){return e[t]}.bind(null,o));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l(l.s=0)}([function(e,t,l){"use strict";l.r(t);var r=function(e){return Array.isArray(e)?e:[e]},o=function(e){return e instanceof Node},n=function(e,t){if(e&&t){e=function(e){return e instanceof NodeList}(e)?e:[e];for(var l=0;l<e.length&&!0!==t(e[l],l,e.length);l++);}},c=function(e){return console.error("[scroll-lock] ".concat(e))},a=function(e){if(Array.isArray(e))return e.join(", ")},i=function(e){var t=[];return n(e,(function(e){return t.push(e)})),t},u=function(e,t){var l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:document;if((!(arguments.length>2&&void 0!==arguments[2])||arguments[2])&&-1!==i(l.querySelectorAll(t)).indexOf(e))return e;for(;(e=e.parentElement)&&-1===i(l.querySelectorAll(t)).indexOf(e););return e},d=function(e,t){var l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;return-1!==i(l.querySelectorAll(t)).indexOf(e)},s=function(e){if(e)return"hidden"===getComputedStyle(e).overflow},f=function(e){if(e)return!!s(e)||e.scrollTop<=0},p=function(e){if(e){if(s(e))return!0;var t=e.scrollTop,l=e.scrollHeight;return t+e.offsetHeight>=l}},g=function(e){if(e)return!!s(e)||e.scrollLeft<=0},b=function(e){if(e){if(s(e))return!0;var t=e.scrollLeft,l=e.scrollWidth;return t+e.offsetWidth>=l}},h=function(e){return d(e,'textarea, [contenteditable="true"]')},v=function(e){return d(e,'input[type="range"]')};function m(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}l.d(t,"disablePageScroll",(function(){return k})),l.d(t,"enablePageScroll",(function(){return w})),l.d(t,"getScrollState",(function(){return A})),l.d(t,"clearQueueScrollLocks",(function(){return G})),l.d(t,"getTargetScrollBarWidth",(function(){return L})),l.d(t,"getCurrentTargetScrollBarWidth",(function(){return T})),l.d(t,"getPageScrollBarWidth",(function(){return x})),l.d(t,"getCurrentPageScrollBarWidth",(function(){return W})),l.d(t,"addScrollableTarget",(function(){return F})),l.d(t,"removeScrollableTarget",(function(){return P})),l.d(t,"addScrollableSelector",(function(){return E})),l.d(t,"removeScrollableSelector",(function(){return Y})),l.d(t,"addLockableTarget",(function(){return O})),l.d(t,"addLockableSelector",(function(){return q})),l.d(t,"setFillGapMethod",(function(){return j})),l.d(t,"addFillGapTarget",(function(){return M})),l.d(t,"removeFillGapTarget",(function(){return N})),l.d(t,"addFillGapSelector",(function(){return _})),l.d(t,"removeFillGapSelector",(function(){return B})),l.d(t,"refillGaps",(function(){return C}));var S=["padding","margin","width","max-width","none"],y={scroll:!0,queue:0,scrollableSelectors:["[data-scroll-lock-scrollable]"],lockableSelectors:["body","[data-scroll-lock-lockable]"],fillGapSelectors:["body","[data-scroll-lock-fill-gap]","[data-scroll-lock-lockable]"],fillGapMethod:S[0],startTouchY:0,startTouchX:0},k=function(e){y.queue<=0&&(y.scroll=!1,K(),H()),F(e),y.queue++},w=function(e){y.queue>0&&y.queue--,y.queue<=0&&(y.scroll=!0,R(),z()),P(e)},A=function(){return y.scroll},G=function(){y.queue=0},L=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(o(e)){var l=e.style.overflowY;t?A()||(e.style.overflowY=e.getAttribute("data-scroll-lock-saved-overflow-y-property")):e.style.overflowY="scroll";var r=T(e);return e.style.overflowY=l,r}return 0},T=function(e){if(o(e)){if(e===document.body){var t=document.documentElement.clientWidth;return window.innerWidth-t}var l=e.style.borderLeftWidth,r=e.style.borderRightWidth;e.style.borderLeftWidth="0px",e.style.borderRightWidth="0px";var n=e.offsetWidth-e.clientWidth;return e.style.borderLeftWidth=l,e.style.borderRightWidth=r,n}return 0},x=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return L(document.body,e)},W=function(){return T(document.body)},F=function(e){e&&r(e).map((function(e){n(e,(function(e){o(e)?e.setAttribute("data-scroll-lock-scrollable",""):c('"'.concat(e,'" is not a Element.'))}))}))},P=function(e){e&&r(e).map((function(e){n(e,(function(e){o(e)?e.removeAttribute("data-scroll-lock-scrollable"):c('"'.concat(e,'" is not a Element.'))}))}))},E=function(e){e&&r(e).map((function(e){y.scrollableSelectors.push(e)}))},Y=function(e){e&&r(e).map((function(e){y.scrollableSelectors=y.scrollableSelectors.filter((function(t){return t!==e}))}))},O=function(e){e&&(r(e).map((function(e){n(e,(function(e){o(e)?e.setAttribute("data-scroll-lock-lockable",""):c('"'.concat(e,'" is not a Element.'))}))})),A()||K())},q=function(e){e&&(r(e).map((function(e){y.lockableSelectors.push(e)})),A()||K(),_(e))},j=function(e){if(e)if(-1!==S.indexOf(e))y.fillGapMethod=e,C();else{var t=S.join(", ");c('"'.concat(e,'" method is not available!\nAvailable fill gap methods: ').concat(t,"."))}},M=function(e){e&&r(e).map((function(e){n(e,(function(e){o(e)?(e.setAttribute("data-scroll-lock-fill-gap",""),y.scroll||J(e)):c('"'.concat(e,'" is not a Element.'))}))}))},N=function(e){e&&r(e).map((function(e){n(e,(function(e){o(e)?(e.removeAttribute("data-scroll-lock-fill-gap"),y.scroll||Z(e)):c('"'.concat(e,'" is not a Element.'))}))}))},_=function(e){e&&r(e).map((function(e){-1===y.fillGapSelectors.indexOf(e)&&(y.fillGapSelectors.push(e),y.scroll||I(e))}))},B=function(e){e&&r(e).map((function(e){y.fillGapSelectors=y.fillGapSelectors.filter((function(t){return t!==e})),y.scroll||V(e)}))},C=function(){y.scroll||H()},K=function(){var e=a(y.lockableSelectors);U(e)},R=function(){var e=a(y.lockableSelectors);X(e)},U=function(e){var t=document.querySelectorAll(e);n(t,(function(e){Q(e)}))},X=function(e){var t=document.querySelectorAll(e);n(t,(function(e){D(e)}))},Q=function(e){if(o(e)&&"true"!==e.getAttribute("data-scroll-lock-locked")){var t=window.getComputedStyle(e);e.setAttribute("data-scroll-lock-saved-overflow-y-property",t.overflowY),e.setAttribute("data-scroll-lock-saved-inline-overflow-property",e.style.overflow),e.setAttribute("data-scroll-lock-saved-inline-overflow-y-property",e.style.overflowY),e.style.overflow="hidden",e.setAttribute("data-scroll-lock-locked","true")}},D=function(e){o(e)&&"true"===e.getAttribute("data-scroll-lock-locked")&&(e.style.overflow=e.getAttribute("data-scroll-lock-saved-inline-overflow-property"),e.style.overflowY=e.getAttribute("data-scroll-lock-saved-inline-overflow-y-property"),e.removeAttribute("data-scroll-lock-saved-overflow-property"),e.removeAttribute("data-scroll-lock-saved-inline-overflow-property"),e.removeAttribute("data-scroll-lock-saved-inline-overflow-y-property"),e.removeAttribute("data-scroll-lock-locked"))},H=function(){y.fillGapSelectors.map((function(e){I(e)}))},z=function(){y.fillGapSelectors.map((function(e){V(e)}))},I=function(e){var t=document.querySelectorAll(e),l=-1!==y.lockableSelectors.indexOf(e);n(t,(function(e){J(e,l)}))},J=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(o(e)){var l;if(""===e.getAttribute("data-scroll-lock-lockable")||t)l=L(e,!0);else{var r=u(e,a(y.lockableSelectors));l=L(r,!0)}"true"===e.getAttribute("data-scroll-lock-filled-gap")&&Z(e);var n=window.getComputedStyle(e);if(e.setAttribute("data-scroll-lock-filled-gap","true"),e.setAttribute("data-scroll-lock-current-fill-gap-method",y.fillGapMethod),"margin"===y.fillGapMethod){var c=parseFloat(n.marginRight);e.style.marginRight="".concat(c+l,"px")}else if("width"===y.fillGapMethod)e.style.width="calc(100% - ".concat(l,"px)");else if("max-width"===y.fillGapMethod)e.style.maxWidth="calc(100% - ".concat(l,"px)");else if("padding"===y.fillGapMethod){var i=parseFloat(n.paddingRight);e.style.paddingRight="".concat(i+l,"px")}}},V=function(e){var t=document.querySelectorAll(e);n(t,(function(e){Z(e)}))},Z=function(e){if(o(e)&&"true"===e.getAttribute("data-scroll-lock-filled-gap")){var t=e.getAttribute("data-scroll-lock-current-fill-gap-method");e.removeAttribute("data-scroll-lock-filled-gap"),e.removeAttribute("data-scroll-lock-current-fill-gap-method"),"margin"===t?e.style.marginRight="":"width"===t?e.style.width="":"max-width"===t?e.style.maxWidth="":"padding"===t&&(e.style.paddingRight="")}};"undefined"!=typeof window&&window.addEventListener("resize",(function(e){C()})),"undefined"!=typeof document&&(document.addEventListener("touchstart",(function(e){y.scroll||(y.startTouchY=e.touches[0].clientY,y.startTouchX=e.touches[0].clientX)})),document.addEventListener("touchmove",(function(e){if(!y.scroll){var t=y.startTouchY,l=y.startTouchX,r=e.touches[0].clientY,o=e.touches[0].clientX;if(e.touches.length<2){var n=a(y.scrollableSelectors),c={up:t<r,down:t>r,left:l<o,right:l>o},i={up:t+3<r,down:t-3>r,left:l+3<o,right:l-3>o};!function t(l){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(l){var o=u(l,n,!1);if(v(l))return!1;if(r||h(l)&&u(l,n)||d(l,n)){var a=!1;g(l)&&b(l)?(c.up&&f(l)||c.down&&p(l))&&(a=!0):f(l)&&p(l)?(c.left&&g(l)||c.right&&b(l))&&(a=!0):(i.up&&f(l)||i.down&&p(l)||i.left&&g(l)||i.right&&b(l))&&(a=!0),a&&(o?t(o,!0):e.cancelable&&e.preventDefault())}else t(o)}else e.cancelable&&e.preventDefault()}(e.target)}}}),{passive:!1}),document.addEventListener("touchend",(function(e){y.scroll||(y.startTouchY=0,y.startTouchX=0)})));var $={hide:function(e){c('"hide" is deprecated! Use "disablePageScroll" instead. \n https://github.com/FL3NKEY/scroll-lock#disablepagescrollscrollabletarget'),k(e)},show:function(e){c('"show" is deprecated! Use "enablePageScroll" instead. \n https://github.com/FL3NKEY/scroll-lock#enablepagescrollscrollabletarget'),w(e)},toggle:function(e){c('"toggle" is deprecated! Do not use it.'),A()?k():w(e)},getState:function(){return c('"getState" is deprecated! Use "getScrollState" instead. \n https://github.com/FL3NKEY/scroll-lock#getscrollstate'),A()},getWidth:function(){return c('"getWidth" is deprecated! Use "getPageScrollBarWidth" instead. \n https://github.com/FL3NKEY/scroll-lock#getpagescrollbarwidth'),x()},getCurrentWidth:function(){return c('"getCurrentWidth" is deprecated! Use "getCurrentPageScrollBarWidth" instead. \n https://github.com/FL3NKEY/scroll-lock#getcurrentpagescrollbarwidth'),W()},setScrollableTargets:function(e){c('"setScrollableTargets" is deprecated! Use "addScrollableTarget" instead. \n https://github.com/FL3NKEY/scroll-lock#addscrollabletargetscrollabletarget'),F(e)},setFillGapSelectors:function(e){c('"setFillGapSelectors" is deprecated! Use "addFillGapSelector" instead. \n https://github.com/FL3NKEY/scroll-lock#addfillgapselectorfillgapselector'),_(e)},setFillGapTargets:function(e){c('"setFillGapTargets" is deprecated! Use "addFillGapTarget" instead. \n https://github.com/FL3NKEY/scroll-lock#addfillgaptargetfillgaptarget'),M(e)},clearQueue:function(){c('"clearQueue" is deprecated! Use "clearQueueScrollLocks" instead. \n https://github.com/FL3NKEY/scroll-lock#clearqueuescrolllocks'),G()}},ee=function(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{},r=Object.keys(l);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(l).filter((function(e){return Object.getOwnPropertyDescriptor(l,e).enumerable})))),r.forEach((function(t){m(e,t,l[t])}))}return e}({disablePageScroll:k,enablePageScroll:w,getScrollState:A,clearQueueScrollLocks:G,getTargetScrollBarWidth:L,getCurrentTargetScrollBarWidth:T,getPageScrollBarWidth:x,getCurrentPageScrollBarWidth:W,addScrollableSelector:E,removeScrollableSelector:Y,addScrollableTarget:F,removeScrollableTarget:P,addLockableSelector:q,addLockableTarget:O,addFillGapSelector:_,removeFillGapSelector:B,addFillGapTarget:M,removeFillGapTarget:N,setFillGapMethod:j,refillGaps:C,_state:y},$);t.default=ee}]).default},e.exports=t()}},t={};function l(r){var o=t[r];if(void 0!==o)return o.exports;var n=t[r]={exports:{}};return e[r].call(n.exports,n,n.exports,l),n.exports}(()=>{"use strict";var e=l(265),t=document.querySelector(".nav__burger"),r=document.querySelector(".nav__list");t.addEventListener("click",(function(){r.classList.contains("open")?(0,e.enablePageScroll)(r):(0,e.disablePageScroll)(r),r.classList.toggle("open")})),r.addEventListener("click",(function(){r.classList.contains("open")&&((0,e.enablePageScroll)(r),r.classList.remove("open"))}))})()})();