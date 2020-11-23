/* Zepto v1.2.0 - zepto event ajax form ie - zeptojs.com/license */
!function(t,e){"function"==typeof define&&define.amd?define(function(){return e(t)}):e(t)}(this,function(t){var e=function(){function $(t){return null==t?String(t):S[C.call(t)]||"object"}function F(t){return"function"==$(t)}function k(t){return null!=t&&t==t.window}function M(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function R(t){return"object"==$(t)}function Z(t){return R(t)&&!k(t)&&Object.getPrototypeOf(t)==Object.prototype}function z(t){var e=!!t&&"length"in t&&t.length,n=r.type(t);return"function"!=n&&!k(t)&&("array"==n||0===e||"number"==typeof e&&e>0&&e-1 in t)}function q(t){return a.call(t,function(t){return null!=t})}function H(t){return t.length>0?r.fn.concat.apply([],t):t}function I(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function V(t){return t in l?l[t]:l[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function _(t,e){return"number"!=typeof e||h[I(t)]?e:e+"px"}function B(t){var e,n;return c[t]||(e=f.createElement(t),f.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),c[t]=n),c[t]}function U(t){return"children"in t?u.call(t.children):r.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function X(t,e){var n,r=t?t.length:0;for(n=0;r>n;n++)this[n]=t[n];this.length=r,this.selector=e||""}function J(t,r,i){for(n in r)i&&(Z(r[n])||L(r[n]))?(Z(r[n])&&!Z(t[n])&&(t[n]={}),L(r[n])&&!L(t[n])&&(t[n]=[]),J(t[n],r[n],i)):r[n]!==e&&(t[n]=r[n])}function W(t,e){return null==e?r(t):r(t).filter(e)}function Y(t,e,n,r){return F(e)?e.call(t,n,r):e}function G(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function K(t,n){var r=t.className||"",i=r&&r.baseVal!==e;return n===e?i?r.baseVal:r:void(i?r.baseVal=n:t.className=n)}function Q(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?r.parseJSON(t):t):t}catch(e){return t}}function tt(t,e){e(t);for(var n=0,r=t.childNodes.length;r>n;n++)tt(t.childNodes[n],e)}var e,n,r,i,O,P,o=[],s=o.concat,a=o.filter,u=o.slice,f=t.document,c={},l={},h={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},p=/^\s*<(\w+|!)[^>]*>/,d=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,m=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,g=/^(?:body|html)$/i,v=/([A-Z])/g,y=["val","css","html","text","data","width","height","offset"],x=["after","prepend","before","append"],b=f.createElement("table"),E=f.createElement("tr"),j={tr:f.createElement("tbody"),tbody:b,thead:b,tfoot:b,td:E,th:E,"*":f.createElement("div")},w=/complete|loaded|interactive/,T=/^[\w-]*$/,S={},C=S.toString,N={},A=f.createElement("div"),D={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},L=Array.isArray||function(t){return t instanceof Array};return N.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var r,i=t.parentNode,o=!i;return o&&(i=A).appendChild(t),r=~N.qsa(i,e).indexOf(t),o&&A.removeChild(t),r},O=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},P=function(t){return a.call(t,function(e,n){return t.indexOf(e)==n})},N.fragment=function(t,n,i){var o,s,a;return d.test(t)&&(o=r(f.createElement(RegExp.$1))),o||(t.replace&&(t=t.replace(m,"<$1></$2>")),n===e&&(n=p.test(t)&&RegExp.$1),n in j||(n="*"),a=j[n],a.innerHTML=""+t,o=r.each(u.call(a.childNodes),function(){a.removeChild(this)})),Z(i)&&(s=r(o),r.each(i,function(t,e){y.indexOf(t)>-1?s[t](e):s.attr(t,e)})),o},N.Z=function(t,e){return new X(t,e)},N.isZ=function(t){return t instanceof N.Z},N.init=function(t,n){var i;if(!t)return N.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&p.test(t))i=N.fragment(t,RegExp.$1,n),t=null;else{if(n!==e)return r(n).find(t);i=N.qsa(f,t)}else{if(F(t))return r(f).ready(t);if(N.isZ(t))return t;if(L(t))i=q(t);else if(R(t))i=[t],t=null;else if(p.test(t))i=N.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==e)return r(n).find(t);i=N.qsa(f,t)}}return N.Z(i,t)},r=function(t,e){return N.init(t,e)},r.extend=function(t){var e,n=u.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){J(t,n,e)}),t},N.qsa=function(t,e){var n,r="#"==e[0],i=!r&&"."==e[0],o=r||i?e.slice(1):e,s=T.test(o);return t.getElementById&&s&&r?(n=t.getElementById(o))?[n]:[]:1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType?[]:u.call(s&&!r&&t.getElementsByClassName?i?t.getElementsByClassName(o):t.getElementsByTagName(e):t.querySelectorAll(e))},r.contains=f.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},r.type=$,r.isFunction=F,r.isWindow=k,r.isArray=L,r.isPlainObject=Z,r.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},r.isNumeric=function(t){var e=Number(t),n=typeof t;return null!=t&&"boolean"!=n&&("string"!=n||t.length)&&!isNaN(e)&&isFinite(e)||!1},r.inArray=function(t,e,n){return o.indexOf.call(e,t,n)},r.camelCase=O,r.trim=function(t){return null==t?"":String.prototype.trim.call(t)},r.uuid=0,r.support={},r.expr={},r.noop=function(){},r.map=function(t,e){var n,i,o,r=[];if(z(t))for(i=0;i<t.length;i++)n=e(t[i],i),null!=n&&r.push(n);else for(o in t)n=e(t[o],o),null!=n&&r.push(n);return H(r)},r.each=function(t,e){var n,r;if(z(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(r in t)if(e.call(t[r],r,t[r])===!1)return t;return t},r.grep=function(t,e){return a.call(t,e)},t.JSON&&(r.parseJSON=JSON.parse),r.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){S["[object "+e+"]"]=e.toLowerCase()}),r.fn={constructor:N.Z,length:0,forEach:o.forEach,reduce:o.reduce,push:o.push,sort:o.sort,splice:o.splice,indexOf:o.indexOf,concat:function(){var t,e,n=[];for(t=0;t<arguments.length;t++)e=arguments[t],n[t]=N.isZ(e)?e.toArray():e;return s.apply(N.isZ(this)?this.toArray():this,n)},map:function(t){return r(r.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return r(u.apply(this,arguments))},ready:function(t){return w.test(f.readyState)&&f.body?t(r):f.addEventListener("DOMContentLoaded",function(){t(r)},!1),this},get:function(t){return t===e?u.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return o.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return F(t)?this.not(this.not(t)):r(a.call(this,function(e){return N.matches(e,t)}))},add:function(t,e){return r(P(this.concat(r(t,e))))},is:function(t){return this.length>0&&N.matches(this[0],t)},not:function(t){var n=[];if(F(t)&&t.call!==e)this.each(function(e){t.call(this,e)||n.push(this)});else{var i="string"==typeof t?this.filter(t):z(t)&&F(t.item)?u.call(t):r(t);this.forEach(function(t){i.indexOf(t)<0&&n.push(t)})}return r(n)},has:function(t){return this.filter(function(){return R(t)?r.contains(this,t):r(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!R(t)?t:r(t)},last:function(){var t=this[this.length-1];return t&&!R(t)?t:r(t)},find:function(t){var e,n=this;return e=t?"object"==typeof t?r(t).filter(function(){var t=this;return o.some.call(n,function(e){return r.contains(e,t)})}):1==this.length?r(N.qsa(this[0],t)):this.map(function(){return N.qsa(this,t)}):r()},closest:function(t,e){var n=[],i="object"==typeof t&&r(t);return this.each(function(r,o){for(;o&&!(i?i.indexOf(o)>=0:N.matches(o,t));)o=o!==e&&!M(o)&&o.parentNode;o&&n.indexOf(o)<0&&n.push(o)}),r(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=r.map(n,function(t){return(t=t.parentNode)&&!M(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return W(e,t)},parent:function(t){return W(P(this.pluck("parentNode")),t)},children:function(t){return W(this.map(function(){return U(this)}),t)},contents:function(){return this.map(function(){return this.contentDocument||u.call(this.childNodes)})},siblings:function(t){return W(this.map(function(t,e){return a.call(U(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return r.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=B(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=F(t);if(this[0]&&!e)var n=r(t).get(0),i=n.parentNode||this.length>1;return this.each(function(o){r(this).wrapAll(e?t.call(this,o):i?n.cloneNode(!0):n)})},wrapAll:function(t){if(this[0]){r(this[0]).before(t=r(t));for(var e;(e=t.children()).length;)t=e.first();r(t).append(this)}return this},wrapInner:function(t){var e=F(t);return this.each(function(n){var i=r(this),o=i.contents(),s=e?t.call(this,n):t;o.length?o.wrapAll(s):i.append(s)})},unwrap:function(){return this.parent().each(function(){r(this).replaceWith(r(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var n=r(this);(t===e?"none"==n.css("display"):t)?n.show():n.hide()})},prev:function(t){return r(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return r(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;r(this).empty().append(Y(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=Y(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this.pluck("textContent").join(""):null},attr:function(t,r){var i;return"string"!=typeof t||1 in arguments?this.each(function(e){if(1===this.nodeType)if(R(t))for(n in t)G(this,n,t[n]);else G(this,t,Y(this,r,e,this.getAttribute(t)))}):0 in this&&1==this[0].nodeType&&null!=(i=this[0].getAttribute(t))?i:e},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){G(this,t)},this)})},prop:function(t,e){return t=D[t]||t,1 in arguments?this.each(function(n){this[t]=Y(this,e,n,this[t])}):this[0]&&this[0][t]},removeProp:function(t){return t=D[t]||t,this.each(function(){delete this[t]})},data:function(t,n){var r="data-"+t.replace(v,"-$1").toLowerCase(),i=1 in arguments?this.attr(r,n):this.attr(r);return null!==i?Q(i):e},val:function(t){return 0 in arguments?(null==t&&(t=""),this.each(function(e){this.value=Y(this,t,e,this.value)})):this[0]&&(this[0].multiple?r(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(e){if(e)return this.each(function(t){var n=r(this),i=Y(this,e,t,n.offset()),o=n.offsetParent().offset(),s={top:i.top-o.top,left:i.left-o.left};"static"==n.css("position")&&(s.position="relative"),n.css(s)});if(!this.length)return null;if(f.documentElement!==this[0]&&!r.contains(f.documentElement,this[0]))return{top:0,left:0};var n=this[0].getBoundingClientRect();return{left:n.left+t.pageXOffset,top:n.top+t.pageYOffset,width:Math.round(n.width),height:Math.round(n.height)}},css:function(t,e){if(arguments.length<2){var i=this[0];if("string"==typeof t){if(!i)return;return i.style[O(t)]||getComputedStyle(i,"").getPropertyValue(t)}if(L(t)){if(!i)return;var o={},s=getComputedStyle(i,"");return r.each(t,function(t,e){o[e]=i.style[O(e)]||s.getPropertyValue(e)}),o}}var a="";if("string"==$(t))e||0===e?a=I(t)+":"+_(t,e):this.each(function(){this.style.removeProperty(I(t))});else for(n in t)t[n]||0===t[n]?a+=I(n)+":"+_(n,t[n])+";":this.each(function(){this.style.removeProperty(I(n))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(r(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?o.some.call(this,function(t){return this.test(K(t))},V(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){i=[];var n=K(this),o=Y(this,t,e,n);o.split(/\s+/g).forEach(function(t){r(this).hasClass(t)||i.push(t)},this),i.length&&K(this,n+(n?" ":"")+i.join(" "))}}):this},removeClass:function(t){return this.each(function(n){if("className"in this){if(t===e)return K(this,"");i=K(this),Y(this,t,n,i).split(/\s+/g).forEach(function(t){i=i.replace(V(t)," ")}),K(this,i.trim())}})},toggleClass:function(t,n){return t?this.each(function(i){var o=r(this),s=Y(this,t,i,K(this));s.split(/\s+/g).forEach(function(t){(n===e?!o.hasClass(t):n)?o.addClass(t):o.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var n="scrollTop"in this[0];return t===e?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var n="scrollLeft"in this[0];return t===e?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),i=g.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(r(t).css("margin-top"))||0,n.left-=parseFloat(r(t).css("margin-left"))||0,i.top+=parseFloat(r(e[0]).css("border-top-width"))||0,i.left+=parseFloat(r(e[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||f.body;t&&!g.test(t.nodeName)&&"static"==r(t).css("position");)t=t.offsetParent;return t})}},r.fn.detach=r.fn.remove,["width","height"].forEach(function(t){var n=t.replace(/./,function(t){return t[0].toUpperCase()});r.fn[t]=function(i){var o,s=this[0];return i===e?k(s)?s["inner"+n]:M(s)?s.documentElement["scroll"+n]:(o=this.offset())&&o[t]:this.each(function(e){s=r(this),s.css(t,Y(this,i,e,s[t]()))})}}),x.forEach(function(n,i){var o=i%2;r.fn[n]=function(){var n,a,s=r.map(arguments,function(t){var i=[];return n=$(t),"array"==n?(t.forEach(function(t){return t.nodeType!==e?i.push(t):r.zepto.isZ(t)?i=i.concat(t.get()):void(i=i.concat(N.fragment(t)))}),i):"object"==n||null==t?t:N.fragment(t)}),u=this.length>1;return s.length<1?this:this.each(function(e,n){a=o?n:n.parentNode,n=0==i?n.nextSibling:1==i?n.firstChild:2==i?n:null;var c=r.contains(f.documentElement,a);s.forEach(function(e){if(u)e=e.cloneNode(!0);else if(!a)return r(e).remove();a.insertBefore(e,n),c&&tt(e,function(e){if(!(null==e.nodeName||"SCRIPT"!==e.nodeName.toUpperCase()||e.type&&"text/javascript"!==e.type||e.src)){var n=e.ownerDocument?e.ownerDocument.defaultView:t;n.eval.call(n,e.innerHTML)}})})})},r.fn[o?n+"To":"insert"+(i?"Before":"After")]=function(t){return r(t)[n](this),this}}),N.Z.prototype=X.prototype=r.fn,N.uniq=P,N.deserializeValue=Q,r.zepto=N,r}();return t.Zepto=e,void 0===t.$&&(t.$=e),function(e){function h(t){return t._zid||(t._zid=n++)}function p(t,e,n,r){if(e=d(e),e.ns)var i=m(e.ns);return(a[h(t)]||[]).filter(function(t){return t&&(!e.e||t.e==e.e)&&(!e.ns||i.test(t.ns))&&(!n||h(t.fn)===h(n))&&(!r||t.sel==r)})}function d(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function m(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function g(t,e){return t.del&&!f&&t.e in c||!!e}function v(t){return l[t]||f&&c[t]||t}function y(t,n,i,o,s,u,f){var c=h(t),p=a[c]||(a[c]=[]);n.split(/\s/).forEach(function(n){if("ready"==n)return e(document).ready(i);var a=d(n);a.fn=i,a.sel=s,a.e in l&&(i=function(t){var n=t.relatedTarget;return!n||n!==this&&!e.contains(this,n)?a.fn.apply(this,arguments):void 0}),a.del=u;var c=u||i;a.proxy=function(e){if(e=T(e),!e.isImmediatePropagationStopped()){e.data=o;var n=c.apply(t,e._args==r?[e]:[e].concat(e._args));return n===!1&&(e.preventDefault(),e.stopPropagation()),n}},a.i=p.length,p.push(a),"addEventListener"in t&&t.addEventListener(v(a.e),a.proxy,g(a,f))})}function x(t,e,n,r,i){var o=h(t);(e||"").split(/\s/).forEach(function(e){p(t,e,n,r).forEach(function(e){delete a[o][e.i],"removeEventListener"in t&&t.removeEventListener(v(e.e),e.proxy,g(e,i))})})}function T(t,n){return(n||!t.isDefaultPrevented)&&(n||(n=t),e.each(w,function(e,r){var i=n[e];t[e]=function(){return this[r]=b,i&&i.apply(n,arguments)},t[r]=E}),t.timeStamp||(t.timeStamp=Date.now()),(n.defaultPrevented!==r?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(t.isDefaultPrevented=b)),t}function S(t){var e,n={originalEvent:t};for(e in t)j.test(e)||t[e]===r||(n[e]=t[e]);return T(n,t)}var r,n=1,i=Array.prototype.slice,o=e.isFunction,s=function(t){return"string"==typeof t},a={},u={},f="onfocusin"in t,c={focus:"focusin",blur:"focusout"},l={mouseenter:"mouseover",mouseleave:"mouseout"};u.click=u.mousedown=u.mouseup=u.mousemove="MouseEvents",e.event={add:y,remove:x},e.proxy=function(t,n){var r=2 in arguments&&i.call(arguments,2);if(o(t)){var a=function(){return t.apply(n,r?r.concat(i.call(arguments)):arguments)};return a._zid=h(t),a}if(s(n))return r?(r.unshift(t[n],t),e.proxy.apply(null,r)):e.proxy(t[n],t);throw new TypeError("expected function")},e.fn.bind=function(t,e,n){return this.on(t,e,n)},e.fn.unbind=function(t,e){return this.off(t,e)},e.fn.one=function(t,e,n,r){return this.on(t,e,n,r,1)};var b=function(){return!0},E=function(){return!1},j=/^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,w={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};e.fn.delegate=function(t,e,n){return this.on(e,t,n)},e.fn.undelegate=function(t,e,n){return this.off(e,t,n)},e.fn.live=function(t,n){return e(document.body).delegate(this.selector,t,n),this},e.fn.die=function(t,n){return e(document.body).undelegate(this.selector,t,n),this},e.fn.on=function(t,n,a,u,f){var c,l,h=this;return t&&!s(t)?(e.each(t,function(t,e){h.on(t,n,a,e,f)}),h):(s(n)||o(u)||u===!1||(u=a,a=n,n=r),(u===r||a===!1)&&(u=a,a=r),u===!1&&(u=E),h.each(function(r,o){f&&(c=function(t){return x(o,t.type,u),u.apply(this,arguments)}),n&&(l=function(t){var r,s=e(t.target).closest(n,o).get(0);return s&&s!==o?(r=e.extend(S(t),{currentTarget:s,liveFired:o}),(c||u).apply(s,[r].concat(i.call(arguments,1)))):void 0}),y(o,t,u,a,n,l||c)}))},e.fn.off=function(t,n,i){var a=this;return t&&!s(t)?(e.each(t,function(t,e){a.off(t,n,e)}),a):(s(n)||o(i)||i===!1||(i=n,n=r),i===!1&&(i=E),a.each(function(){x(this,t,i,n)}))},e.fn.trigger=function(t,n){return t=s(t)||e.isPlainObject(t)?e.Event(t):T(t),t._args=n,this.each(function(){t.type in c&&"function"==typeof this[t.type]?this[t.type]():"dispatchEvent"in this?this.dispatchEvent(t):e(this).triggerHandler(t,n)})},e.fn.triggerHandler=function(t,n){var r,i;return this.each(function(o,a){r=S(s(t)?e.Event(t):t),r._args=n,r.target=a,e.each(p(a,t.type||t),function(t,e){return i=e.proxy(r),r.isImmediatePropagationStopped()?!1:void 0})}),i},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(t){e.fn[t]=function(e){return 0 in arguments?this.bind(t,e):this.trigger(t)}}),e.Event=function(t,e){s(t)||(e=t,t=e.type);var n=document.createEvent(u[t]||"Events"),r=!0;if(e)for(var i in e)"bubbles"==i?r=!!e[i]:n[i]=e[i];return n.initEvent(t,r,!0),T(n)}}(e),function(e){function p(t,n,r){var i=e.Event(n);return e(t).trigger(i,r),!i.isDefaultPrevented()}function d(t,e,n,i){return t.global?p(e||r,n,i):void 0}function m(t){t.global&&0===e.active++&&d(t,null,"ajaxStart")}function g(t){t.global&&!--e.active&&d(t,null,"ajaxStop")}function v(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||d(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void d(e,n,"ajaxSend",[t,e])}function y(t,e,n,r){var i=n.context,o="success";n.success.call(i,t,o,e),r&&r.resolveWith(i,[t,o,e]),d(n,i,"ajaxSuccess",[e,n,t]),b(o,e,n)}function x(t,e,n,r,i){var o=r.context;r.error.call(o,n,e,t),i&&i.rejectWith(o,[n,e,t]),d(r,o,"ajaxError",[n,r,t||e]),b(e,n,r)}function b(t,e,n){var r=n.context;n.complete.call(r,e,t),d(n,r,"ajaxComplete",[e,n]),g(n)}function E(t,e,n){if(n.dataFilter==j)return t;var r=n.context;return n.dataFilter.call(r,t,e)}function j(){}function w(t){return t&&(t=t.split(";",2)[0]),t&&(t==c?"html":t==f?"json":a.test(t)?"script":u.test(t)&&"xml")||"text"}function T(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function S(t){t.processData&&t.data&&"string"!=e.type(t.data)&&(t.data=e.param(t.data,t.traditional)),!t.data||t.type&&"GET"!=t.type.toUpperCase()&&"jsonp"!=t.dataType||(t.url=T(t.url,t.data),t.data=void 0)}function C(t,n,r,i){return e.isFunction(n)&&(i=r,r=n,n=void 0),e.isFunction(r)||(i=r,r=void 0),{url:t,data:n,success:r,dataType:i}}function O(t,n,r,i){var o,s=e.isArray(n),a=e.isPlainObject(n);e.each(n,function(n,u){o=e.type(u),i&&(n=r?i:i+"["+(a||"object"==o||"array"==o?n:"")+"]"),!i&&s?t.add(u.name,u.value):"array"==o||!r&&"object"==o?O(t,u,r,n):t.add(n,u)})}var i,o,n=+new Date,r=t.document,s=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,a=/^(?:text|application)\/javascript/i,u=/^(?:text|application)\/xml/i,f="application/json",c="text/html",l=/^\s*$/,h=r.createElement("a");h.href=t.location.href,e.active=0,e.ajaxJSONP=function(i,o){if(!("type"in i))return e.ajax(i);var c,p,s=i.jsonpCallback,a=(e.isFunction(s)?s():s)||"Zepto"+n++,u=r.createElement("script"),f=t[a],l=function(t){e(u).triggerHandler("error",t||"abort")},h={abort:l};return o&&o.promise(h),e(u).on("load error",function(n,r){clearTimeout(p),e(u).off().remove(),"error"!=n.type&&c?y(c[0],h,i,o):x(null,r||"error",h,i,o),t[a]=f,c&&e.isFunction(f)&&f(c[0]),f=c=void 0}),v(h,i)===!1?(l("abort"),h):(t[a]=function(){c=arguments},u.src=i.url.replace(/\?(.+)=\?/,"?$1="+a),r.head.appendChild(u),i.timeout>0&&(p=setTimeout(function(){l("timeout")},i.timeout)),h)},e.ajaxSettings={type:"GET",beforeSend:j,success:j,error:j,complete:j,context:null,global:!0,xhr:function(){return new t.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:f,xml:"application/xml, text/xml",html:c,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0,dataFilter:j},e.ajax=function(n){var u,f,s=e.extend({},n||{}),a=e.Deferred&&e.Deferred();for(i in e.ajaxSettings)void 0===s[i]&&(s[i]=e.ajaxSettings[i]);m(s),s.crossDomain||(u=r.createElement("a"),u.href=s.url,u.href=u.href,s.crossDomain=h.protocol+"//"+h.host!=u.protocol+"//"+u.host),s.url||(s.url=t.location.toString()),(f=s.url.indexOf("#"))>-1&&(s.url=s.url.slice(0,f)),S(s);var c=s.dataType,p=/\?.+=\?/.test(s.url);if(p&&(c="jsonp"),s.cache!==!1&&(n&&n.cache===!0||"script"!=c&&"jsonp"!=c)||(s.url=T(s.url,"_="+Date.now())),"jsonp"==c)return p||(s.url=T(s.url,s.jsonp?s.jsonp+"=?":s.jsonp===!1?"":"callback=?")),e.ajaxJSONP(s,a);var P,d=s.accepts[c],g={},b=function(t,e){g[t.toLowerCase()]=[t,e]},C=/^([\w-]+:)\/\//.test(s.url)?RegExp.$1:t.location.protocol,N=s.xhr(),O=N.setRequestHeader;if(a&&a.promise(N),s.crossDomain||b("X-Requested-With","XMLHttpRequest"),b("Accept",d||"*/*"),(d=s.mimeType||d)&&(d.indexOf(",")>-1&&(d=d.split(",",2)[0]),N.overrideMimeType&&N.overrideMimeType(d)),(s.contentType||s.contentType!==!1&&s.data&&"GET"!=s.type.toUpperCase())&&b("Content-Type",s.contentType||"application/x-www-form-urlencoded"),s.headers)for(o in s.headers)b(o,s.headers[o]);if(N.setRequestHeader=b,N.onreadystatechange=function(){if(4==N.readyState){N.onreadystatechange=j,clearTimeout(P);var t,n=!1;if(N.status>=200&&N.status<300||304==N.status||0==N.status&&"file:"==C){if(c=c||w(s.mimeType||N.getResponseHeader("content-type")),"arraybuffer"==N.responseType||"blob"==N.responseType)t=N.response;else{t=N.responseText;try{t=E(t,c,s),"script"==c?(1,eval)(t):"xml"==c?t=N.responseXML:"json"==c&&(t=l.test(t)?null:e.parseJSON(t))}catch(r){n=r}if(n)return x(n,"parsererror",N,s,a)}y(t,N,s,a)}else x(N.statusText||null,N.status?"error":"abort",N,s,a)}},v(N,s)===!1)return N.abort(),x(null,"abort",N,s,a),N;var A="async"in s?s.async:!0;if(N.open(s.type,s.url,A,s.username,s.password),s.xhrFields)for(o in s.xhrFields)N[o]=s.xhrFields[o];for(o in g)O.apply(N,g[o]);return s.timeout>0&&(P=setTimeout(function(){N.onreadystatechange=j,N.abort(),x(null,"timeout",N,s,a)},s.timeout)),N.send(s.data?s.data:null),N},e.get=function(){return e.ajax(C.apply(null,arguments))},e.post=function(){var t=C.apply(null,arguments);return t.type="POST",e.ajax(t)},e.getJSON=function(){var t=C.apply(null,arguments);return t.dataType="json",e.ajax(t)},e.fn.load=function(t,n,r){if(!this.length)return this;var a,i=this,o=t.split(/\s/),u=C(t,n,r),f=u.success;return o.length>1&&(u.url=o[0],a=o[1]),u.success=function(t){i.html(a?e("<div>").html(t.replace(s,"")).find(a):t),f&&f.apply(i,arguments)},e.ajax(u),this};var N=encodeURIComponent;e.param=function(t,n){var r=[];return r.add=function(t,n){e.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(N(t)+"="+N(n))},O(r,t,n),r.join("&").replace(/%20/g,"+")}}(e),function(t){t.fn.serializeArray=function(){var e,n,r=[],i=function(t){return t.forEach?t.forEach(i):void r.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(r,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&i(t(o).val())}),r},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(e),function(){try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;t.getComputedStyle=function(t,e){try{return n(t,e)}catch(r){return null}}}}(),e});

(function($,undefined){var prefix="",eventPrefix,vendors={Webkit:"webkit",Moz:"",O:"o"},testEl=document.createElement("div"),supportedTransforms=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,transform,transitionProperty,transitionDuration,transitionTiming,transitionDelay,animationName,animationDuration,animationTiming,animationDelay,cssReset={};function dasherize(str){return str.replace(/([A-Z])/g,"-$1").toLowerCase()}function normalizeEvent(name){return eventPrefix?eventPrefix+name:name.toLowerCase()}if(testEl.style.transform===undefined){$.each(vendors,function(vendor,event){if(testEl.style[vendor+"TransitionProperty"]!==undefined){prefix="-"+vendor.toLowerCase()+"-";eventPrefix=event;return false}})}transform=prefix+"transform";cssReset[transitionProperty=prefix+"transition-property"]=cssReset[transitionDuration=prefix+"transition-duration"]=cssReset[transitionDelay=prefix+"transition-delay"]=cssReset[transitionTiming=prefix+"transition-timing-function"]=cssReset[animationName=prefix+"animation-name"]=cssReset[animationDuration=prefix+"animation-duration"]=cssReset[animationDelay=prefix+"animation-delay"]=cssReset[animationTiming=prefix+"animation-timing-function"]="";$.fx={off:(eventPrefix===undefined&&testEl.style.transitionProperty===undefined),speeds:{_default:400,fast:200,slow:600},cssPrefix:prefix,transitionEnd:normalizeEvent("TransitionEnd"),animationEnd:normalizeEvent("AnimationEnd")};$.fn.animate=function(properties,duration,ease,callback,delay){if($.isFunction(duration)){callback=duration,ease=undefined,duration=undefined}if($.isFunction(ease)){callback=ease,ease=undefined}if($.isPlainObject(duration)){ease=duration.easing,callback=duration.complete,delay=duration.delay,duration=duration.duration}if(duration){duration=(typeof duration=="number"?duration:($.fx.speeds[duration]||$.fx.speeds._default))/1000}if(delay){delay=parseFloat(delay)/1000}return this.anim(properties,duration,ease,callback,delay)};$.fn.anim=function(properties,duration,ease,callback,delay){var key,cssValues={},cssProperties,transforms="",that=this,wrappedCallback,endEvent=$.fx.transitionEnd,fired=false;if(duration===undefined){duration=$.fx.speeds._default/1000}if(delay===undefined){delay=0}if($.fx.off){duration=0}if(typeof properties=="string"){cssValues[animationName]=properties;cssValues[animationDuration]=duration+"s";cssValues[animationDelay]=delay+"s";cssValues[animationTiming]=(ease||"linear");endEvent=$.fx.animationEnd}else{cssProperties=[];for(key in properties){if(supportedTransforms.test(key)){transforms+=key+"("+properties[key]+") "}else{cssValues[key]=properties[key],cssProperties.push(dasherize(key))}}if(transforms){cssValues[transform]=transforms,cssProperties.push(transform)}if(duration>0&&typeof properties==="object"){cssValues[transitionProperty]=cssProperties.join(", ");cssValues[transitionDuration]=duration+"s";cssValues[transitionDelay]=delay+"s";cssValues[transitionTiming]=(ease||"linear")}}wrappedCallback=function(event){if(typeof event!=="undefined"){if(event.target!==event.currentTarget){return}$(event.target).unbind(endEvent,wrappedCallback)}else{$(this).unbind(endEvent,wrappedCallback)}fired=true;$(this).css(cssReset);callback&&callback.call(this)};if(duration>0){this.bind(endEvent,wrappedCallback);setTimeout(function(){if(fired){return}wrappedCallback.call(that)},((duration+delay)*1000)+25)}this.size()&&this.get(0).clientLeft;this.css(cssValues);if(duration<=0){setTimeout(function(){that.each(function(){wrappedCallback.call(this)})},0)}return this};testEl=null})(Zepto);


      function xmlToJson(xml) {
          // Create the return object
          var obj = {};
          if(xml.nodeType == 1) { // element
              // do attributes
              if(xml.attributes.length > 0) {
                  obj["@attributes"] = {};
                  for(var j = 0; j < xml.attributes.length; j++) {
                      var attribute = xml.attributes.item(j);
                      obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
                  }
              }
          } else if(xml.nodeType == 3) { // text
              obj = xml.nodeValue;
          }
          // do children
          if(xml.hasChildNodes()) {
              for(var i = 0; i < xml.childNodes.length; i++) {
                  var item = xml.childNodes.item(i);
                  var nodeName = item.nodeName;
                  if(typeof (obj[nodeName]) == "undefined") {
                      obj[nodeName] = xmlToJson(item);
                  } else {
                      if(typeof (obj[nodeName].length) == "undefined") {
                          var old = obj[nodeName];
                          obj[nodeName] = [];
                          obj[nodeName].push(old);
                      }
                      if(obj[nodeName].trim()) {
                          obj[nodeName].push(xmlToJson(item));

                      }
                  }
              }
          }
          return obj;
      };

      // osskey  实例：  ebook/201901/04/201901041347126597632203.epub
      // ebook/年月/日/(16位)  + 年月日时分秒 + 6(微秒) + 4随机号
      // 文件名总长度：16+24 共 40位
      // 注：因为 js 无法从时间戳中获取微秒数，所以将微秒数也作为随机数来生成了
      function getKey(filename){
        function padLeft(str, number){return str.toString().padStart(number, '0')};
        let randomMicroSecond = padLeft(Math.floor(Math.random() * 1000), 3);
        let randomNumber = padLeft(Math.floor(Math.random() * 10000), 4);

        let finalKey = "imgforMe/"+(new Date()).valueOf()+randomMicroSecond+randomNumber+filename;

        return finalKey;
      }
        





 
//alloy方案
/* AlloyCrop v1.0.4
 * By dntzhang
 * Github: https://github.com/AlloyTeam/AlloyCrop
 */
/* transformjs
 * By dntzhang
 */
 ;(function () {

var Matrix3D = function (n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {
    this.elements =window.Float32Array ? new Float32Array(16) : [];
    var te = this.elements;
    te[0] = (n11 !== undefined) ? n11 : 1; te[4] = n12 || 0; te[8] = n13 || 0; te[12] = n14 || 0;
    te[1] = n21 || 0; te[5] = (n22 !== undefined) ? n22 : 1; te[9] = n23 || 0; te[13] = n24 || 0;
    te[2] = n31 || 0; te[6] = n32 || 0; te[10] = (n33 !== undefined) ? n33 : 1; te[14] = n34 || 0;
    te[3] = n41 || 0; te[7] = n42 || 0; te[11] = n43 || 0; te[15] = (n44 !== undefined) ? n44 : 1;
};

Matrix3D.DEG_TO_RAD = Math.PI / 180;

Matrix3D.prototype = {
    set: function (n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {
        var te = this.elements;
        te[0] = n11; te[4] = n12; te[8] = n13; te[12] = n14;
        te[1] = n21; te[5] = n22; te[9] = n23; te[13] = n24;
        te[2] = n31; te[6] = n32; te[10] = n33; te[14] = n34;
        te[3] = n41; te[7] = n42; te[11] = n43; te[15] = n44;
        return this;
    },
    identity: function () {
        this.set(
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        );
        return this;
    },
    multiplyMatrices: function (a, be) {

        var ae = a.elements;
        var te = this.elements;
        var a11 = ae[0], a12 = ae[4], a13 = ae[8], a14 = ae[12];
        var a21 = ae[1], a22 = ae[5], a23 = ae[9], a24 = ae[13];
        var a31 = ae[2], a32 = ae[6], a33 = ae[10], a34 = ae[14];
        var a41 = ae[3], a42 = ae[7], a43 = ae[11], a44 = ae[15];

        var b11 = be[0], b12 = be[1], b13 = be[2], b14 = be[3];
        var b21 = be[4], b22 = be[5], b23 = be[6], b24 = be[7];
        var b31 = be[8], b32 = be[9], b33 = be[10], b34 = be[11];
        var b41 = be[12], b42 = be[13], b43 = be[14], b44 = be[15];

        te[0] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
        te[4] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
        te[8] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
        te[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;

        te[1] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
        te[5] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
        te[9] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
        te[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;

        te[2] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
        te[6] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
        te[10] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
        te[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;

        te[3] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
        te[7] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
        te[11] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
        te[15] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;

        return this;

    },
    // 解决角度为90的整数倍导致Math.cos得到极小的数，其实是0。导致不渲染
    _rounded: function(value,i){
        i= Math.pow(10, i || 15);
        // default
        return Math.round(value*i)/i;
    },
    appendTransform: function (x, y, z, scaleX, scaleY, scaleZ, rotateX, rotateY, rotateZ,skewX,skewY, originX, originY, originZ) {

        var rx = rotateX * Matrix3D.DEG_TO_RAD;
        var cosx =this._rounded( Math.cos(rx));
        var sinx = this._rounded(Math.sin(rx));
        var ry = rotateY * Matrix3D.DEG_TO_RAD;
        var cosy =this._rounded( Math.cos(ry));
        var siny = this._rounded(Math.sin(ry));
        var rz = rotateZ * Matrix3D.DEG_TO_RAD;
        var cosz =this._rounded( Math.cos(rz * -1));
        var sinz =this._rounded( Math.sin(rz * -1));

        this.multiplyMatrices(this, [
            1, 0, 0, x,
            0, cosx, sinx, y,
            0, -sinx, cosx, z,
            0, 0, 0, 1
        ]);

        this.multiplyMatrices(this, [
            cosy, 0, siny, 0,
            0, 1, 0, 0,
            -siny, 0, cosy, 0,
            0, 0, 0, 1
        ]);

        this.multiplyMatrices(this,[
            cosz * scaleX, sinz * scaleY, 0, 0,
            -sinz * scaleX, cosz * scaleY, 0, 0,
            0, 0, 1 * scaleZ, 0,
            0, 0, 0, 1
        ]);

        if(skewX||skewY){
            this.multiplyMatrices(this,[
                this._rounded(Math.cos(skewX* Matrix3D.DEG_TO_RAD)), this._rounded( Math.sin(skewX* Matrix3D.DEG_TO_RAD)), 0, 0,
                -1*this._rounded(Math.sin(skewY* Matrix3D.DEG_TO_RAD)), this._rounded( Math.cos(skewY* Matrix3D.DEG_TO_RAD)), 0, 0,
                0, 0, 1, 0,
                0, 0, 0, 1
            ]);
        }

        if (originX || originY || originZ) {
            this.elements[12] -= originX * this.elements[0] + originY * this.elements[4] + originZ * this.elements[8];
            this.elements[13] -= originX * this.elements[1] + originY * this.elements[5] + originZ * this.elements[9];
            this.elements[14] -= originX * this.elements[2] + originY * this.elements[6] + originZ * this.elements[10];
        }
        return this;
    }
};

function observe(target, props, callback) {
    for (var i = 0, len = props.length; i < len; i++) {
        var prop = props[i];
        watch(target, prop, callback);
    }
}

function watch(target, prop, callback) {
    Object.defineProperty(target, prop, {
        get: function () {
            return this["__" + prop];
        },
        set: function (value) {
            if (value !== this["__" + prop]) {
                this["__" + prop] = value;
                callback();
            }

        }
    });
}

window.Transform = function (element) {

    observe(
        element,
        ["translateX", "translateY", "translateZ", "scaleX", "scaleY", "scaleZ" , "rotateX", "rotateY", "rotateZ","skewX","skewY", "originX", "originY", "originZ"],
        function () {
            var mtx = element.matrix3D.identity().appendTransform( element.translateX, element.translateY, element.translateZ, element.scaleX, element.scaleY, element.scaleZ, element.rotateX, element.rotateY, element.rotateZ,element.skewX,element.skewY, element.originX, element.originY, element.originZ);
            element.style.transform = element.style.msTransform = element.style.OTransform = element.style.MozTransform = element.style.webkitTransform = "perspective("+element.perspective+"px) matrix3d(" + Array.prototype.slice.call(mtx.elements).join(",") + ")";
        });

    observe(
        element,
        [ "perspective"],
        function () {
            element.style.transform = element.style.msTransform = element.style.OTransform = element.style.MozTransform = element.style.webkitTransform = "perspective("+element.perspective+"px) matrix3d(" + Array.prototype.slice.call(element.matrix3D.elements).join(",") + ")";
        });

    element.matrix3D = new Matrix3D();
    element.perspective = 500;
    element.scaleX = element.scaleY = element.scaleZ = 1;
    //由于image自带了x\y\z，所有加上translate前缀
    element.translateX = element.translateY = element.translateZ = element.rotateX = element.rotateY = element.rotateZ =element.skewX=element.skewY= element.originX = element.originY = element.originZ = 0;
}


if (typeof module !== 'undefined' && typeof exports === 'object') {
    module.exports = Transform;
}
})();


/* AlloyFinger v0.1.7
 * By dntzhang
 * Github: https://github.com/AlloyTeam/AlloyFinger
 */
 ; (function () {
    function getLen(v) {
        return Math.sqrt(v.x * v.x + v.y * v.y);
    }

    function dot(v1, v2) {
        return v1.x * v2.x + v1.y * v2.y;
    }

    function getAngle(v1, v2) {
        var mr = getLen(v1) * getLen(v2);
        if (mr === 0) return 0;
        var r = dot(v1, v2) / mr;
        if (r > 1) r = 1;
        return Math.acos(r);
    }

    function cross(v1, v2) {
        return v1.x * v2.y - v2.x * v1.y;
    }

    function getRotateAngle(v1, v2) {
        var angle = getAngle(v1, v2);
        if (cross(v1, v2) > 0) {
            angle *= -1;
        }

        return angle * 180 / Math.PI;
    }

    var HandlerAdmin = function(el) {
        this.handlers = [];
        this.el = el;
    };

    HandlerAdmin.prototype.add = function(handler) {
        this.handlers.push(handler);
    }

    HandlerAdmin.prototype.del = function(handler) {
        if(!handler) this.handlers = [];

        for(var i=this.handlers.length; i>=0; i--) {
            if(this.handlers[i] === handler) {
                this.handlers.splice(i, 1);
            }
        }
    }

    HandlerAdmin.prototype.dispatch = function() {
        for(var i=0,len=this.handlers.length; i<len; i++) {
            var handler = this.handlers[i];
            if(typeof handler === 'function') handler.apply(this.el, arguments);
        }
    }

    function wrapFunc(el, handler) {
        var handlerAdmin = new HandlerAdmin(el);
        handlerAdmin.add(handler);

        return handlerAdmin;
    }

    var AlloyFinger = function (el, option) {

        this.element = typeof el == 'string' ? document.querySelector(el) : el;

        this.start = this.start.bind(this);
        this.move = this.move.bind(this);
        this.end = this.end.bind(this);
        this.cancel = this.cancel.bind(this);
        this.element.addEventListener("touchstart", this.start, false);
        this.element.addEventListener("touchmove", this.move, false);
        this.element.addEventListener("touchend", this.end, false);
        this.element.addEventListener("touchcancel", this.cancel, false);

        this.preV = { x: null, y: null };
        this.pinchStartLen = null;
        this.zoom = 1;
        this.isDoubleTap = false;

        var noop = function () { };

        this.rotate = wrapFunc(this.element, option.rotate || noop);
        this.touchStart = wrapFunc(this.element, option.touchStart || noop);
        this.multipointStart = wrapFunc(this.element, option.multipointStart || noop);
        this.multipointEnd = wrapFunc(this.element, option.multipointEnd || noop);
        this.pinch = wrapFunc(this.element, option.pinch || noop);
        this.swipe = wrapFunc(this.element, option.swipe || noop);
        this.tap = wrapFunc(this.element, option.tap || noop);
        this.doubleTap = wrapFunc(this.element, option.doubleTap || noop);
        this.longTap = wrapFunc(this.element, option.longTap || noop);
        this.singleTap = wrapFunc(this.element, option.singleTap || noop);
        this.pressMove = wrapFunc(this.element, option.pressMove || noop);
        this.touchMove = wrapFunc(this.element, option.touchMove || noop);
        this.touchEnd = wrapFunc(this.element, option.touchEnd || noop);
        this.touchCancel = wrapFunc(this.element, option.touchCancel || noop);

        this.delta = null;
        this.last = null;
        this.now = null;
        this.tapTimeout = null;
        this.singleTapTimeout = null;
        this.longTapTimeout = null;
        this.swipeTimeout = null;
        this.x1 = this.x2 = this.y1 = this.y2 = null;
        this.preTapPosition = { x: null, y: null };
    };

    AlloyFinger.prototype = {
        start: function (evt) {
            if (!evt.touches) return;
            this.now = Date.now();
            this.x1 = evt.touches[0].pageX;
            this.y1 = evt.touches[0].pageY;
            this.delta = this.now - (this.last || this.now);
            this.touchStart.dispatch(evt);
            if (this.preTapPosition.x !== null) {
                this.isDoubleTap = (this.delta > 0 && this.delta <= 250 && Math.abs(this.preTapPosition.x - this.x1) < 30 && Math.abs(this.preTapPosition.y - this.y1) < 30);
            }
            this.preTapPosition.x = this.x1;
            this.preTapPosition.y = this.y1;
            this.last = this.now;
            var preV = this.preV,
                len = evt.touches.length;
            if (len > 1) {
                this._cancelLongTap();
                this._cancelSingleTap();
                var v = { x: evt.touches[1].pageX - this.x1, y: evt.touches[1].pageY - this.y1 };
                preV.x = v.x;
                preV.y = v.y;
                this.pinchStartLen = getLen(preV);
                this.multipointStart.dispatch(evt);
            }
            this.longTapTimeout = setTimeout(function () {
                this.longTap.dispatch(evt);
            }.bind(this), 750);
        },
        move: function (evt) {
            if (!evt.touches) return;
            var preV = this.preV,
                len = evt.touches.length,
                currentX = evt.touches[0].pageX,
                currentY = evt.touches[0].pageY;
            this.isDoubleTap = false;
            if (len > 1) {
                var v = { x: evt.touches[1].pageX - currentX, y: evt.touches[1].pageY - currentY };

                if (preV.x !== null) {
                    if (this.pinchStartLen > 0) {
                        evt.zoom = getLen(v) / this.pinchStartLen;
                        this.pinch.dispatch(evt);
                    }

                    evt.angle = getRotateAngle(v, preV);
                    this.rotate.dispatch(evt);
                }
                preV.x = v.x;
                preV.y = v.y;
            } else {
                if (this.x2 !== null) {
                    evt.deltaX = currentX - this.x2;
                    evt.deltaY = currentY - this.y2;

                } else {
                    evt.deltaX = 0;
                    evt.deltaY = 0;
                }
                this.pressMove.dispatch(evt);
            }

            this.touchMove.dispatch(evt);

            this._cancelLongTap();
            this.x2 = currentX;
            this.y2 = currentY;
            if (len > 1) {
                evt.preventDefault();
            }
        },
        end: function (evt) {
            if (!evt.changedTouches) return;
            this._cancelLongTap();
            var self = this;
            if (evt.touches.length < 2) {
                this.multipointEnd.dispatch(evt);
            }

            //swipe
            if ((this.x2 && Math.abs(this.x1 - this.x2) > 30) ||
                (this.y2 && Math.abs(this.y1 - this.y2) > 30)) {
                evt.direction = this._swipeDirection(this.x1, this.x2, this.y1, this.y2);
                this.swipeTimeout = setTimeout(function () {
                    self.swipe.dispatch(evt);

                }, 0)
            } else {
                this.tapTimeout = setTimeout(function () {
                    self.tap.dispatch(evt);
                    // trigger double tap immediately
                    if (self.isDoubleTap) {
                        self.doubleTap.dispatch(evt);
                        clearTimeout(self.singleTapTimeout);
                        self.isDoubleTap = false;
                    }
                }, 0)

                if (!self.isDoubleTap) {
                    self.singleTapTimeout = setTimeout(function () {
                        self.singleTap.dispatch(evt);
                    }, 250);
                }
            }

            this.touchEnd.dispatch(evt);

            this.preV.x = 0;
            this.preV.y = 0;
            this.zoom = 1;
            this.pinchStartLen = null;
            this.x1 = this.x2 = this.y1 = this.y2 = null;
        },
        cancel: function (evt) {
            clearTimeout(this.singleTapTimeout);
            clearTimeout(this.tapTimeout);
            clearTimeout(this.longTapTimeout);
            clearTimeout(this.swipeTimeout);
            this.touchCancel.dispatch(evt);
        },
        _cancelLongTap: function () {
            clearTimeout(this.longTapTimeout);
        },
        _cancelSingleTap: function () {
            clearTimeout(this.singleTapTimeout);
        },
        _swipeDirection: function (x1, x2, y1, y2) {
            return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ? (x1 - x2 > 0 ? 'Left' : 'Right') : (y1 - y2 > 0 ? 'Up' : 'Down')
        },

        on: function(evt, handler) {
            if(this[evt]) {
                this[evt].add(handler);
            }
        },

        off: function(evt, handler) {
            if(this[evt]) {
                this[evt].del(handler);
            }
        },

        destroy: function() {
            if(this.singleTapTimeout) clearTimeout(this.singleTapTimeout);
            if(this.tapTimeout) clearTimeout(this.tapTimeout);
            if(this.longTapTimeout) clearTimeout(this.longTapTimeout);
            if(this.swipeTimeout) clearTimeout(this.swipeTimeout);

            this.element.removeEventListener("touchstart", this.start);
            this.element.removeEventListener("touchmove", this.move);
            this.element.removeEventListener("touchend", this.end);
            this.element.removeEventListener("touchcancel", this.cancel);

            this.rotate.del();
            this.touchStart.del();
            this.multipointStart.del();
            this.multipointEnd.del();
            this.pinch.del();
            this.swipe.del();
            this.tap.del();
            this.doubleTap.del();
            this.longTap.del();
            this.singleTap.del();
            this.pressMove.del();
            this.touchMove.del();
            this.touchEnd.del();
            this.touchCancel.del();

            this.preV = this.pinchStartLen = this.zoom = this.isDoubleTap = this.delta = this.last = this.now = this.tapTimeout = this.singleTapTimeout = this.longTapTimeout = this.swipeTimeout = this.x1 = this.x2 = this.y1 = this.y2 = this.preTapPosition = this.rotate = this.touchStart = this.multipointStart = this.multipointEnd = this.pinch = this.swipe = this.tap = this.doubleTap = this.longTap = this.singleTap = this.pressMove = this.touchMove = this.touchEnd = this.touchCancel = null;

            return null;
        }
    };

    if (typeof module !== 'undefined' && typeof exports === 'object') {
        module.exports = AlloyFinger;
    } else {
        window.AlloyFinger = AlloyFinger;
    }
})();

;(function(){
    var AlloyFinger = typeof require === 'function'
        ? require('alloyfinger')
        : window.AlloyFinger
    var Transform = typeof require === 'function'
        ? require('css3transform')
        : window.Transform

    var AlloyCrop = function (option) {
        this.renderTo = document.body;
        this.canvas = document.createElement("canvas");
        this.output = option.output;
        this.width = option.width;
        this.height = option.height;
        this.canvas.width = option.width * this.output;
        this.canvas.height = option.height * this.output;
        this.circle = option.circle;
        if (option.width !== option.height && option.circle) {
            throw "can't set circle to true when width is not equal to height"
        }
        this.ctx = this.canvas.getContext("2d");
        this.croppingBox = document.createElement("div");
        this.croppingBox.style.visibility = "hidden";
        this.croppingBox.className = option.className || '';
        this.cover = document.createElement("canvas");
        this.type = option.type || "png";
        this.cover.width = window.innerWidth;
        this.cover.height = window.innerHeight;
        this.cover_ctx = this.cover.getContext("2d");
        this.img = document.createElement("img");

        if(option.image_src.substring(0,4).toLowerCase()==='http') {
            this.img.crossOrigin = 'anonymous';//resolve base64 uri bug in safari:"cross-origin image load denied by cross-origin resource sharing policy."
        }
        this.cancel = option.cancel;
        this.ok = option.ok;

        this.ok_text = option.ok_text || "ok";
        this.cancel_text = option.cancel_text || "cancel";

        this.croppingBox.appendChild(this.img);
        this.croppingBox.appendChild(this.cover);
        this.renderTo.appendChild(this.croppingBox);
        this.img.onload = this.init.bind(this);
        this.img.src = option.image_src;

        this.cancel_btn = document.createElement('a');
        this.cancel_btn.innerHTML = this.cancel_text;
        this.ok_btn = document.createElement('a');
        this.ok_btn.innerHTML = this.ok_text;

        this.croppingBox.appendChild(this.ok_btn);
        this.croppingBox.appendChild(this.cancel_btn);

        this.alloyFingerList = [];
    };

    AlloyCrop.prototype = {
        init: function () {

            this.img_width = this.img.naturalWidth;
            this.img_height = this.img.naturalHeight;
            Transform(this.img,true);
            var scaling_x = window.innerWidth / this.img_width,
                scaling_y = window.innerHeight / this.img_height;
            var scaling = scaling_x > scaling_y ? scaling_y : scaling_x;
            /*this.initScale = scaling;
            this.originScale = scaling;
            this.img.scaleX = this.img.scaleY = scaling;*/
            this.initScale = scaling_x;
            this.originScale = scaling_x;
            this.img.scaleX = this.img.scaleY = scaling_x;
            this.first = 1;
            var self = this;
            this.alloyFingerList.push(new AlloyFinger(this.croppingBox, {
                multipointStart: function (evt) {
                    //reset origin x and y
                    var centerX = (evt.touches[0].pageX + evt.touches[1].pageX) / 2;
                    var centerY = (evt.touches[0].pageY + evt.touches[1].pageY) / 2;
                    var cr = self.img.getBoundingClientRect();
                    var img_centerX = cr.left + cr.width / 2;
                    var img_centerY = cr.top + cr.height / 2;
                    var offX = centerX - img_centerX;
                    var offY = centerY - img_centerY;
                    var preOriginX = self.img.originX
                    var preOriginY = self.img.originY
                    self.img.originX = offX / self.img.scaleX;
                    self.img.originY = offY / self.img.scaleY;
                    //reset translateX and translateY
                    
                    self.img.translateX += offX - preOriginX * self.img.scaleX;
                    self.img.translateY += offY - preOriginY * self.img.scaleX;

                    
                    if(self.first == 1){
                        self.img.scaleX = self.img.scaleY = self.initScale * 1.1;
                        ++self.first;
                    }

                    self.initScale = self.img.scaleX;
                    
                },
                pinch: function (evt) {
                    
                    var cr = self.img.getBoundingClientRect();
                    var boxOffY = (document.documentElement.clientHeight - self.height)/2;
                    
                    var tempo = evt.zoom;
                    var dw = (cr.width * tempo - cr.width)/2;
                    var dh = (cr.height - cr.height * tempo)/2;
                    if( (self.initScale * tempo <= 1.6 ) ){
                        self.img.scaleX = self.img.scaleY = self.initScale * tempo;
                    }
                },
                pressMove: function (evt) {
                    var cr = self.img.getBoundingClientRect();
                    var boxOffY = (document.documentElement.clientHeight - self.height)/2;
                    if(1){
                        self.img.translateY += evt.deltaY;
                    }
                    var boxOffX = (document.documentElement.clientWidth - self.width)/2;
                    if(1){
                        self.img.translateX += evt.deltaX;  
                    }
                    evt.preventDefault();
                }
            }));

            this.alloyFingerList.push(new AlloyFinger(this.cancel_btn, {
                touchStart:function(){
                    self.cancel_btn.style.backgroundColor = '#ffffff';
                    self.cancel_btn.style.color = '#3B4152';
                },
                tap: this._cancel.bind(this)
            }));

            this.alloyFingerList.push(new AlloyFinger(this.ok_btn, {
                touchStart:function(){
                    self.ok_btn.style.backgroundColor = '#ff6b00';
                    self.ok_btn.style.color = '#ffffff';
                },
                tap: this._ok.bind(this)
            }));

            this.alloyFingerList.push(new AlloyFinger(document, {
                touchEnd: function () {
                    self.cancel_btn.style.backgroundColor = '#ffffff';
                    self.ok_btn.style.backgroundColor = '#ff6b00';
                }
            }));

            this.renderCover();
            this.setStyle();

        },
        _cancel: function () {
            this._css(this.croppingBox, {
                display: "none"
            });
            this.cancel();
        },
        _ok: function () {
            this.crop();
            this._css(this.croppingBox, {
                display: "none"
            });
            this.ok(this.canvas.toDataURL("image/" + this.type), this.canvas);
        },
        renderCover: function () {
            var ctx = this.cover_ctx,
                w = this.cover.width,
                h = this.cover.height,
                cw = this.width,
                ch = this.height;
            ctx.save();
            ctx.fillStyle = "black";
            ctx.globalAlpha = 0.7;
            ctx.fillRect(0, 0, this.cover.width, this.cover.height);
            ctx.restore();
            ctx.save();
            ctx.globalCompositeOperation = "destination-out";
            ctx.beginPath();
            if (this.circle) {
                ctx.arc(w / 2, h / 2, cw / 2 - 4, 0, Math.PI * 2, false);
            } else {
                ctx.rect(w / 2 - cw / 2, h / 2 - ch / 2, cw, ch)
            }
            ctx.fill();
            ctx.restore();
            ctx.save();
            ctx.beginPath();
            ctx.strokeStyle = "white";
            if (this.circle) {
                ctx.arc(w / 2, h / 2, cw / 2 - 4, 0, Math.PI * 2, false);
            } else {
                ctx.rect(w / 2 - cw / 2, h / 2 - ch / 2, cw, ch)
            }
            ctx.stroke();
        },
        setStyle: function () {
            this._css(this.cover, {
                position: "fixed",
                zIndex: "100",
                left: "0px",
                top: "0px"
            });

            this._css(this.croppingBox, {
                color: "white",
                textAlign: "center",
                fontSize: "18px",
                textDecoration: "none",
                visibility: "visible"
            });

            this._css(this.img, {
                position: "fixed",
                zIndex: "99",
                left: "50%",
                // error position in meizu when set the top  50%
                top: window.innerHeight / 2 + "px",
                marginLeft: this.img_width / -2 + "px",
                marginTop: this.img_height / -2 + "px"
            });


            this._css(this.ok_btn, {
                position: "fixed",
                zIndex: "101",
                width: "100px",
                right: "50px",
                lineHeight: "40px",
                height: "40px",
                bottom: "20px",
                borderRadius: "2px",
                color: "#ffffff",
                backgroundColor: "#ff6b00",

            });

            this._css(this.cancel_btn, {
                position: "fixed",
                zIndex: "101",
                width: "100px",
                height: "40px",
                lineHeight: "40px",
                left: "50px",
                bottom: "20px",
                borderRadius: "2px",
                color: "#3B4152",
                backgroundColor: "#ffffff"

            });
        },
        crop: function () {
            this.calculateRect();
            // this.ctx.drawImage(this.img, this.crop_rect[0], this.crop_rect[1], this.crop_rect[2], this.crop_rect[3], 0, 0, this.canvas.width, this.canvas.height);
            
            window.crop_sx = parseInt(this.crop_rect[0]);
            window.crop_sy = parseInt(this.crop_rect[1]);
            window.crop_swidth = parseInt(this.crop_rect[2]);
            window.crop_sheight = (this.crop_rect[3]);
            window.crop_reat = 100;
            if (crop_swidth > 1000 || crop_sheight > 1000){
                window.crop_reat = Math.min( parseInt(100000/crop_swidth) , parseInt(100000/crop_sheight) ); 
            }
            
            window.crop_cropstr = window.pageImageHref+'?x-oss-process=image/resize,h_800/resize,p_'+crop_reat+',x-oss-process=image/crop,x_'+parseInt(crop_sx*crop_reat/100)+',y_'+parseInt(crop_sy*crop_reat/100)+',w_'+parseInt(crop_swidth*crop_reat/100)+',h_'+parseInt(crop_sheight*crop_reat/100);

            // this.ctx.drawImage(this.img, this.crop_rect[0], this.crop_rect[1], this.crop_rect[2], this.crop_rect[3], 0, 0, this.crop_rect[2]*this.img.scaleX, this.crop_rect[3]*this.img.scaleY);

        },
        calculateRect: function () {
            var cr = this.img.getBoundingClientRect();
            var c_left = window.innerWidth / 2 - this.width / 2;
            var c_top = window.innerHeight / 2 - this.height / 2;
            var cover_rect = [c_left, c_top, this.width + c_left, this.height + c_top];
            var img_rect = [cr.left, cr.top, cr.width + cr.left, cr.height + cr.top];
            var intersect_rect = this.getOverlap.apply(this, cover_rect.concat(img_rect));
            var left = (intersect_rect[0] - img_rect[0]) / this.img.scaleX;
            var top = (intersect_rect[1] - img_rect[1]) / this.img.scaleY;
            var width = intersect_rect[2] / this.img.scaleX;
            var height = intersect_rect[3] / this.img.scaleY;

            if (left < 0) left = 0;
            if (top < 0) top = 0;
            if (left + width > this.img_width) width = this.img_width - left;
            if (top + height > this.img_height) height = this.img_height - top;

            this.crop_rect = [left, top, width, height];
        },
        // top left (x1,y1) and bottom right (x2,y2) coordination
        getOverlap: function (ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
            if (ax2 < bx1 || ay2 < by1 || ax1 > bx2 || ay1 > by2) return [0, 0, 0, 0];

            var left = Math.max(ax1, bx1);
            var top = Math.max(ay1, by1);
            var right = Math.min(ax2, bx2);
            var bottom = Math.min(ay2, by2);
            return [left, top, right - left, bottom - top]
        },
        _css: function (el, obj) {
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    el.style[key] = obj[key];
                }
            }
        },
        destroy: function () {
            this.alloyFingerList.forEach(function (alloyFinger) {
                alloyFinger.destroy();
            });
            this.renderTo.removeChild(this.croppingBox);
            for(var key in this) {
                delete this[key];
            }
        }
    };

    if (typeof module !== 'undefined' && typeof exports === 'object') {
        module.exports = AlloyCrop;
    }else {
        window.AlloyCrop = AlloyCrop;
    }
})();




!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.QRCode=t()}}(function(){return function(){function t(e,r,n){function o(a,u){if(!r[a]){if(!e[a]){var s="function"==typeof require&&require;if(!u&&s)return s(a,!0);if(i)return i(a,!0);var f=new Error("Cannot find module '"+a+"'");throw f.code="MODULE_NOT_FOUND",f}var c=r[a]={exports:{}};e[a][0].call(c.exports,function(t){return o(e[a][1][t]||t)},c,c.exports,t,e,r,n)}return r[a].exports}for(var i="function"==typeof require&&require,a=0;a<n.length;a++)o(n[a]);return o}return t}()({1:[function(t,e,r){e.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},{}],2:[function(t,e,r){var n=t("./utils").getSymbolSize;r.getRowColCoords=function(t){if(1===t)return[];for(var e=Math.floor(t/7)+2,r=n(t),o=145===r?26:2*Math.ceil((r-13)/(2*e-2)),i=[r-7],a=1;a<e-1;a++)i[a]=i[a-1]-o;return i.push(6),i.reverse()},r.getPositions=function(t){for(var e=[],n=r.getRowColCoords(t),o=n.length,i=0;i<o;i++)for(var a=0;a<o;a++)0===i&&0===a||0===i&&a===o-1||i===o-1&&0===a||e.push([n[i],n[a]]);return e}},{"./utils":21}],3:[function(t,e,r){function n(t){this.mode=o.ALPHANUMERIC,this.data=t}var o=t("./mode"),i=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];n.getBitsLength=function(t){return 11*Math.floor(t/2)+t%2*6},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(t){var e;for(e=0;e+2<=this.data.length;e+=2){var r=45*i.indexOf(this.data[e]);r+=i.indexOf(this.data[e+1]),t.put(r,11)}this.data.length%2&&t.put(i.indexOf(this.data[e]),6)},e.exports=n},{"./mode":14}],4:[function(t,e,r){function n(){this.buffer=[],this.length=0}n.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var r=0;r<e;r++)this.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},e.exports=n},{}],5:[function(t,e,r){function n(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new o(t*t),this.data.fill(0),this.reservedBit=new o(t*t),this.reservedBit.fill(0)}var o=t("../utils/buffer");n.prototype.set=function(t,e,r,n){var o=t*this.size+e;this.data[o]=r,n&&(this.reservedBit[o]=!0)},n.prototype.get=function(t,e){return this.data[t*this.size+e]},n.prototype.xor=function(t,e,r){this.data[t*this.size+e]^=r},n.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]},e.exports=n},{"../utils/buffer":28}],6:[function(t,e,r){function n(t){this.mode=i.BYTE,this.data=new o(t)}var o=t("../utils/buffer"),i=t("./mode");n.getBitsLength=function(t){return 8*t},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(t){for(var e=0,r=this.data.length;e<r;e++)t.put(this.data[e],8)},e.exports=n},{"../utils/buffer":28,"./mode":14}],7:[function(t,e,r){var n=t("./error-correction-level"),o=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],i=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];r.getBlocksCount=function(t,e){switch(e){case n.L:return o[4*(t-1)+0];case n.M:return o[4*(t-1)+1];case n.Q:return o[4*(t-1)+2];case n.H:return o[4*(t-1)+3];default:return}},r.getTotalCodewordsCount=function(t,e){switch(e){case n.L:return i[4*(t-1)+0];case n.M:return i[4*(t-1)+1];case n.Q:return i[4*(t-1)+2];case n.H:return i[4*(t-1)+3];default:return}}},{"./error-correction-level":8}],8:[function(t,e,r){function n(t){if("string"!=typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return r.L;case"m":case"medium":return r.M;case"q":case"quartile":return r.Q;case"h":case"high":return r.H;default:throw new Error("Unknown EC Level: "+t)}}r.L={bit:1},r.M={bit:0},r.Q={bit:3},r.H={bit:2},r.isValid=function(t){return t&&void 0!==t.bit&&t.bit>=0&&t.bit<4},r.from=function(t,e){if(r.isValid(t))return t;try{return n(t)}catch(t){return e}}},{}],9:[function(t,e,r){var n=t("./utils").getSymbolSize;r.getPositions=function(t){var e=n(t);return[[0,0],[e-7,0],[0,e-7]]}},{"./utils":21}],10:[function(t,e,r){var n=t("./utils"),o=n.getBCHDigit(1335);r.getEncodedBits=function(t,e){for(var r=t.bit<<3|e,i=r<<10;n.getBCHDigit(i)-o>=0;)i^=1335<<n.getBCHDigit(i)-o;return 21522^(r<<10|i)}},{"./utils":21}],11:[function(t,e,r){var n=t("../utils/buffer");if(n.alloc)var o=n.alloc(512),i=n.alloc(256);else var o=new n(512),i=new n(256);!function(){for(var t=1,e=0;e<255;e++)o[e]=t,i[t]=e,256&(t<<=1)&&(t^=285);for(e=255;e<512;e++)o[e]=o[e-255]}(),r.log=function(t){if(t<1)throw new Error("log("+t+")");return i[t]},r.exp=function(t){return o[t]},r.mul=function(t,e){return 0===t||0===e?0:o[i[t]+i[e]]}},{"../utils/buffer":28}],12:[function(t,e,r){function n(t){this.mode=o.KANJI,this.data=t}var o=t("./mode"),i=t("./utils");n.getBitsLength=function(t){return 13*t},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(t){var e;for(e=0;e<this.data.length;e++){var r=i.toSJIS(this.data[e]);if(r>=33088&&r<=40956)r-=33088;else{if(!(r>=57408&&r<=60351))throw new Error("Invalid SJIS character: "+this.data[e]+"\nMake sure your charset is UTF-8");r-=49472}r=192*(r>>>8&255)+(255&r),t.put(r,13)}},e.exports=n},{"./mode":14,"./utils":21}],13:[function(t,e,r){function n(t,e,n){switch(t){case r.Patterns.PATTERN000:return(e+n)%2==0;case r.Patterns.PATTERN001:return e%2==0;case r.Patterns.PATTERN010:return n%3==0;case r.Patterns.PATTERN011:return(e+n)%3==0;case r.Patterns.PATTERN100:return(Math.floor(e/2)+Math.floor(n/3))%2==0;case r.Patterns.PATTERN101:return e*n%2+e*n%3==0;case r.Patterns.PATTERN110:return(e*n%2+e*n%3)%2==0;case r.Patterns.PATTERN111:return(e*n%3+(e+n)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}}r.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var o={N1:3,N2:3,N3:40,N4:10};r.isValid=function(t){return null!=t&&""!==t&&!isNaN(t)&&t>=0&&t<=7},r.from=function(t){return r.isValid(t)?parseInt(t,10):void 0},r.getPenaltyN1=function(t){for(var e=t.size,r=0,n=0,i=0,a=null,u=null,s=0;s<e;s++){n=i=0,a=u=null;for(var f=0;f<e;f++){var c=t.get(s,f);c===a?n++:(n>=5&&(r+=o.N1+(n-5)),a=c,n=1),c=t.get(f,s),c===u?i++:(i>=5&&(r+=o.N1+(i-5)),u=c,i=1)}n>=5&&(r+=o.N1+(n-5)),i>=5&&(r+=o.N1+(i-5))}return r},r.getPenaltyN2=function(t){for(var e=t.size,r=0,n=0;n<e-1;n++)for(var i=0;i<e-1;i++){var a=t.get(n,i)+t.get(n,i+1)+t.get(n+1,i)+t.get(n+1,i+1);4!==a&&0!==a||r++}return r*o.N2},r.getPenaltyN3=function(t){for(var e=t.size,r=0,n=0,i=0,a=0;a<e;a++){n=i=0;for(var u=0;u<e;u++)n=n<<1&2047|t.get(a,u),u>=10&&(1488===n||93===n)&&r++,i=i<<1&2047|t.get(u,a),u>=10&&(1488===i||93===i)&&r++}return r*o.N3},r.getPenaltyN4=function(t){for(var e=0,r=t.data.length,n=0;n<r;n++)e+=t.data[n];return Math.abs(Math.ceil(100*e/r/5)-10)*o.N4},r.applyMask=function(t,e){for(var r=e.size,o=0;o<r;o++)for(var i=0;i<r;i++)e.isReserved(i,o)||e.xor(i,o,n(t,i,o))},r.getBestMask=function(t,e){for(var n=Object.keys(r.Patterns).length,o=0,i=1/0,a=0;a<n;a++){e(a),r.applyMask(a,t);var u=r.getPenaltyN1(t)+r.getPenaltyN2(t)+r.getPenaltyN3(t)+r.getPenaltyN4(t);r.applyMask(a,t),u<i&&(i=u,o=a)}return o}},{}],14:[function(t,e,r){function n(t){if("string"!=typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"numeric":return r.NUMERIC;case"alphanumeric":return r.ALPHANUMERIC;case"kanji":return r.KANJI;case"byte":return r.BYTE;default:throw new Error("Unknown mode: "+t)}}var o=t("./version-check"),i=t("./regex");r.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},r.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},r.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},r.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},r.MIXED={bit:-1},r.getCharCountIndicator=function(t,e){if(!t.ccBits)throw new Error("Invalid mode: "+t);if(!o.isValid(e))throw new Error("Invalid version: "+e);return e>=1&&e<10?t.ccBits[0]:e<27?t.ccBits[1]:t.ccBits[2]},r.getBestModeForData=function(t){return i.testNumeric(t)?r.NUMERIC:i.testAlphanumeric(t)?r.ALPHANUMERIC:i.testKanji(t)?r.KANJI:r.BYTE},r.toString=function(t){if(t&&t.id)return t.id;throw new Error("Invalid mode")},r.isValid=function(t){return t&&t.bit&&t.ccBits},r.from=function(t,e){if(r.isValid(t))return t;try{return n(t)}catch(t){return e}}},{"./regex":19,"./version-check":22}],15:[function(t,e,r){function n(t){this.mode=o.NUMERIC,this.data=t.toString()}var o=t("./mode");n.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(t){var e,r,n;for(e=0;e+3<=this.data.length;e+=3)r=this.data.substr(e,3),n=parseInt(r,10),t.put(n,10);var o=this.data.length-e;o>0&&(r=this.data.substr(e),n=parseInt(r,10),t.put(n,3*o+1))},e.exports=n},{"./mode":14}],16:[function(t,e,r){var n=t("../utils/buffer"),o=t("./galois-field");r.mul=function(t,e){var r=new n(t.length+e.length-1);r.fill(0);for(var i=0;i<t.length;i++)for(var a=0;a<e.length;a++)r[i+a]^=o.mul(t[i],e[a]);return r},r.mod=function(t,e){for(var r=new n(t);r.length-e.length>=0;){for(var i=r[0],a=0;a<e.length;a++)r[a]^=o.mul(e[a],i);for(var u=0;u<r.length&&0===r[u];)u++;r=r.slice(u)}return r},r.generateECPolynomial=function(t){for(var e=new n([1]),i=0;i<t;i++)e=r.mul(e,[1,o.exp(i)]);return e}},{"../utils/buffer":28,"./galois-field":11}],17:[function(t,e,r){function n(t,e){for(var r=t.size,n=w.getPositions(e),o=0;o<n.length;o++)for(var i=n[o][0],a=n[o][1],u=-1;u<=7;u++)if(!(i+u<=-1||r<=i+u))for(var s=-1;s<=7;s++)a+s<=-1||r<=a+s||(u>=0&&u<=6&&(0===s||6===s)||s>=0&&s<=6&&(0===u||6===u)||u>=2&&u<=4&&s>=2&&s<=4?t.set(i+u,a+s,!0,!0):t.set(i+u,a+s,!1,!0))}function o(t){for(var e=t.size,r=8;r<e-8;r++){var n=r%2==0;t.set(r,6,n,!0),t.set(6,r,n,!0)}}function i(t,e){for(var r=m.getPositions(e),n=0;n<r.length;n++)for(var o=r[n][0],i=r[n][1],a=-2;a<=2;a++)for(var u=-2;u<=2;u++)-2===a||2===a||-2===u||2===u||0===a&&0===u?t.set(o+a,i+u,!0,!0):t.set(o+a,i+u,!1,!0)}function a(t,e){for(var r,n,o,i=t.size,a=A.getEncodedBits(e),u=0;u<18;u++)r=Math.floor(u/3),n=u%3+i-8-3,o=1==(a>>u&1),t.set(r,n,o,!0),t.set(n,r,o,!0)}function u(t,e,r){var n,o,i=t.size,a=B.getEncodedBits(e,r);for(n=0;n<15;n++)o=1==(a>>n&1),n<6?t.set(n,8,o,!0):n<8?t.set(n+1,8,o,!0):t.set(i-15+n,8,o,!0),n<8?t.set(8,i-n-1,o,!0):n<9?t.set(8,15-n-1+1,o,!0):t.set(8,15-n-1,o,!0);t.set(i-8,8,1,!0)}function s(t,e){for(var r=t.size,n=-1,o=r-1,i=7,a=0,u=r-1;u>0;u-=2)for(6===u&&u--;;){for(var s=0;s<2;s++)if(!t.isReserved(o,u-s)){var f=!1;a<e.length&&(f=1==(e[a]>>>i&1)),t.set(o,u-s,f),i--,-1===i&&(a++,i=7)}if((o+=n)<0||r<=o){o-=n,n=-n;break}}}function f(t,e,r){var n=new p;r.forEach(function(e){n.put(e.mode.bit,4),n.put(e.getLength(),P.getCharCountIndicator(e.mode,t)),e.write(n)});var o=d.getSymbolTotalCodewords(t),i=E.getTotalCodewordsCount(t,e),a=8*(o-i);for(n.getLengthInBits()+4<=a&&n.put(0,4);n.getLengthInBits()%8!=0;)n.putBit(0);for(var u=(a-n.getLengthInBits())/8,s=0;s<u;s++)n.put(s%2?17:236,8);return c(n,t,e)}function c(t,e,r){for(var n=d.getSymbolTotalCodewords(e),o=E.getTotalCodewordsCount(e,r),i=n-o,a=E.getBlocksCount(e,r),u=n%a,s=a-u,f=Math.floor(n/a),c=Math.floor(i/a),l=c+1,g=f-c,p=new b(g),v=0,m=new Array(a),w=new Array(a),y=0,A=new h(t.buffer),B=0;B<a;B++){var P=B<s?c:l;m[B]=A.slice(v,v+P),w[B]=p.encode(m[B]),v+=P,y=Math.max(y,P)}var R,T,C=new h(n),N=0;for(R=0;R<y;R++)for(T=0;T<a;T++)R<m[T].length&&(C[N++]=m[T][R]);for(R=0;R<g;R++)for(T=0;T<a;T++)C[N++]=w[T][R];return C}function l(t,e,r,c){var l;if(T(t))l=R.fromArray(t);else{if("string"!=typeof t)throw new Error("Invalid data");var h=e;if(!h){var g=R.rawSplit(t);h=A.getBestVersionForData(g,r)}l=R.fromString(t,h||40)}var p=A.getBestVersionForData(l,r);if(!p)throw new Error("The amount of data is too big to be stored in a QR Code");if(e){if(e<p)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+p+".\n")}else e=p;var m=f(e,r,l),w=d.getSymbolSize(e),E=new v(w);return n(E,e),o(E),i(E,e),u(E,r,0),e>=7&&a(E,e),s(E,m),isNaN(c)&&(c=y.getBestMask(E,u.bind(null,E,r))),y.applyMask(c,E),u(E,r,c),{modules:E,version:e,errorCorrectionLevel:r,maskPattern:c,segments:l}}var h=t("../utils/buffer"),d=t("./utils"),g=t("./error-correction-level"),p=t("./bit-buffer"),v=t("./bit-matrix"),m=t("./alignment-pattern"),w=t("./finder-pattern"),y=t("./mask-pattern"),E=t("./error-correction-code"),b=t("./reed-solomon-encoder"),A=t("./version"),B=t("./format-info"),P=t("./mode"),R=t("./segments"),T=t("isarray");r.create=function(t,e){if(void 0===t||""===t)throw new Error("No input text");var r,n,o=g.M;return void 0!==e&&(o=g.from(e.errorCorrectionLevel,g.M),r=A.from(e.version),n=y.from(e.maskPattern),e.toSJISFunc&&d.setToSJISFunction(e.toSJISFunc)),l(t,r,o,n)}},{"../utils/buffer":28,"./alignment-pattern":2,"./bit-buffer":4,"./bit-matrix":5,"./error-correction-code":7,"./error-correction-level":8,"./finder-pattern":9,"./format-info":10,"./mask-pattern":13,"./mode":14,"./reed-solomon-encoder":18,"./segments":20,"./utils":21,"./version":23,isarray:30}],18:[function(t,e,r){function n(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}var o=t("../utils/buffer"),i=t("./polynomial");n.prototype.initialize=function(t){this.degree=t,this.genPoly=i.generateECPolynomial(this.degree)},n.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");var e=new o(this.degree);e.fill(0);var r=o.concat([t,e],t.length+this.degree),n=i.mod(r,this.genPoly),a=this.degree-n.length;if(a>0){var u=new o(this.degree);return u.fill(0),n.copy(u,a),u}return n},e.exports=n},{"../utils/buffer":28,"./polynomial":16}],19:[function(t,e,r){var n="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";n=n.replace(/u/g,"\\u");var o="(?:(?![A-Z0-9 $%*+\\-./:]|"+n+")(?:.|[\r\n]))+";r.KANJI=new RegExp(n,"g"),r.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),r.BYTE=new RegExp(o,"g"),r.NUMERIC=new RegExp("[0-9]+","g"),r.ALPHANUMERIC=new RegExp("[A-Z $%*+\\-./:]+","g");var i=new RegExp("^"+n+"$"),a=new RegExp("^[0-9]+$"),u=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");r.testKanji=function(t){return i.test(t)},r.testNumeric=function(t){return a.test(t)},r.testAlphanumeric=function(t){return u.test(t)}},{}],20:[function(t,e,r){function n(t){return unescape(encodeURIComponent(t)).length}function o(t,e,r){for(var n,o=[];null!==(n=t.exec(r));)o.push({data:n[0],index:n.index,mode:e,length:n[0].length});return o}function i(t){var e,r,n=o(v.NUMERIC,l.NUMERIC,t),i=o(v.ALPHANUMERIC,l.ALPHANUMERIC,t);return m.isKanjiModeEnabled()?(e=o(v.BYTE,l.BYTE,t),r=o(v.KANJI,l.KANJI,t)):(e=o(v.BYTE_KANJI,l.BYTE,t),r=[]),n.concat(i,e,r).sort(function(t,e){return t.index-e.index}).map(function(t){return{data:t.data,mode:t.mode,length:t.length}})}function a(t,e){switch(e){case l.NUMERIC:return h.getBitsLength(t);case l.ALPHANUMERIC:return d.getBitsLength(t);case l.KANJI:return p.getBitsLength(t);case l.BYTE:return g.getBitsLength(t)}}function u(t){return t.reduce(function(t,e){var r=t.length-1>=0?t[t.length-1]:null;return r&&r.mode===e.mode?(t[t.length-1].data+=e.data,t):(t.push(e),t)},[])}function s(t){for(var e=[],r=0;r<t.length;r++){var o=t[r];switch(o.mode){case l.NUMERIC:e.push([o,{data:o.data,mode:l.ALPHANUMERIC,length:o.length},{data:o.data,mode:l.BYTE,length:o.length}]);break;case l.ALPHANUMERIC:e.push([o,{data:o.data,mode:l.BYTE,length:o.length}]);break;case l.KANJI:e.push([o,{data:o.data,mode:l.BYTE,length:n(o.data)}]);break;case l.BYTE:e.push([{data:o.data,mode:l.BYTE,length:n(o.data)}])}}return e}function f(t,e){for(var r={},n={start:{}},o=["start"],i=0;i<t.length;i++){for(var u=t[i],s=[],f=0;f<u.length;f++){var c=u[f],h=""+i+f;s.push(h),r[h]={node:c,lastCount:0},n[h]={};for(var d=0;d<o.length;d++){var g=o[d];r[g]&&r[g].node.mode===c.mode?(n[g][h]=a(r[g].lastCount+c.length,c.mode)-a(r[g].lastCount,c.mode),r[g].lastCount+=c.length):(r[g]&&(r[g].lastCount=c.length),n[g][h]=a(c.length,c.mode)+4+l.getCharCountIndicator(c.mode,e))}}o=s}for(d=0;d<o.length;d++)n[o[d]].end=0;return{map:n,table:r}}function c(t,e){var r,n=l.getBestModeForData(t);if((r=l.from(e,n))!==l.BYTE&&r.bit<n.bit)throw new Error('"'+t+'" cannot be encoded with mode '+l.toString(r)+".\n Suggested mode is: "+l.toString(n));switch(r!==l.KANJI||m.isKanjiModeEnabled()||(r=l.BYTE),r){case l.NUMERIC:return new h(t);case l.ALPHANUMERIC:return new d(t);case l.KANJI:return new p(t);case l.BYTE:return new g(t)}}var l=t("./mode"),h=t("./numeric-data"),d=t("./alphanumeric-data"),g=t("./byte-data"),p=t("./kanji-data"),v=t("./regex"),m=t("./utils"),w=t("dijkstrajs");r.fromArray=function(t){return t.reduce(function(t,e){return"string"==typeof e?t.push(c(e,null)):e.data&&t.push(c(e.data,e.mode)),t},[])},r.fromString=function(t,e){for(var n=i(t,m.isKanjiModeEnabled()),o=s(n),a=f(o,e),c=w.find_path(a.map,"start","end"),l=[],h=1;h<c.length-1;h++)l.push(a.table[c[h]].node);return r.fromArray(u(l))},r.rawSplit=function(t){return r.fromArray(i(t,m.isKanjiModeEnabled()))}},{"./alphanumeric-data":3,"./byte-data":6,"./kanji-data":12,"./mode":14,"./numeric-data":15,"./regex":19,"./utils":21,dijkstrajs:29}],21:[function(t,e,r){var n,o=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];r.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return 4*t+17},r.getSymbolTotalCodewords=function(t){return o[t]},r.getBCHDigit=function(t){for(var e=0;0!==t;)e++,t>>>=1;return e},r.setToSJISFunction=function(t){if("function"!=typeof t)throw new Error('"toSJISFunc" is not a valid function.');n=t},r.isKanjiModeEnabled=function(){return void 0!==n},r.toSJIS=function(t){return n(t)}},{}],22:[function(t,e,r){r.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40}},{}],23:[function(t,e,r){function n(t,e,n){for(var o=1;o<=40;o++)if(e<=r.getCapacity(o,n,t))return o}function o(t,e){return c.getCharCountIndicator(t,e)+4}function i(t,e){var r=0;return t.forEach(function(t){var n=o(t.mode,e);r+=n+t.getBitsLength()}),r}function a(t,e){for(var n=1;n<=40;n++){if(i(t,n)<=r.getCapacity(n,e,c.MIXED))return n}}var u=t("./utils"),s=t("./error-correction-code"),f=t("./error-correction-level"),c=t("./mode"),l=t("./version-check"),h=t("isarray"),d=u.getBCHDigit(7973);r.from=function(t,e){return l.isValid(t)?parseInt(t,10):e},r.getCapacity=function(t,e,r){if(!l.isValid(t))throw new Error("Invalid QR Code version");void 0===r&&(r=c.BYTE);var n=u.getSymbolTotalCodewords(t),i=s.getTotalCodewordsCount(t,e),a=8*(n-i);if(r===c.MIXED)return a;var f=a-o(r,t);switch(r){case c.NUMERIC:return Math.floor(f/10*3);case c.ALPHANUMERIC:return Math.floor(f/11*2);case c.KANJI:return Math.floor(f/13);case c.BYTE:default:return Math.floor(f/8)}},r.getBestVersionForData=function(t,e){var r,o=f.from(e,f.M);if(h(t)){if(t.length>1)return a(t,o);if(0===t.length)return 1;r=t[0]}else r=t;return n(r.mode,r.getLength(),o)},r.getEncodedBits=function(t){if(!l.isValid(t)||t<7)throw new Error("Invalid QR Code version");for(var e=t<<12;u.getBCHDigit(e)-d>=0;)e^=7973<<u.getBCHDigit(e)-d;return t<<12|e}},{"./error-correction-code":7,"./error-correction-level":8,"./mode":14,"./utils":21,"./version-check":22,isarray:30}],24:[function(t,e,r){function n(t,e,r,n,a){var u=[].slice.call(arguments,1),s=u.length,f="function"==typeof u[s-1];if(!f&&!o())throw new Error("Callback required as last argument");if(!f){if(s<1)throw new Error("Too few arguments provided");return 1===s?(r=e,e=n=void 0):2!==s||e.getContext||(n=r,r=e,e=void 0),new Promise(function(o,a){try{var u=i.create(r,n);o(t(u,e,n))}catch(t){a(t)}})}if(s<2)throw new Error("Too few arguments provided");2===s?(a=r,r=e,e=n=void 0):3===s&&(e.getContext&&void 0===a?(a=n,n=void 0):(a=n,n=r,r=e,e=void 0));try{var c=i.create(r,n);a(null,t(c,e,n))}catch(t){a(t)}}var o=t("./can-promise"),i=t("./core/qrcode"),a=t("./renderer/canvas"),u=t("./renderer/svg-tag.js");r.create=i.create,r.toCanvas=n.bind(null,a.render),r.toDataURL=n.bind(null,a.renderToDataURL),r.toString=n.bind(null,function(t,e,r){return u.render(t,r)})},{"./can-promise":1,"./core/qrcode":17,"./renderer/canvas":25,"./renderer/svg-tag.js":26}],25:[function(t,e,r){function n(t,e,r){t.clearRect(0,0,e.width,e.height),e.style||(e.style={}),e.height=r,e.width=r,e.style.height=r+"px",e.style.width=r+"px"}function o(){try{return document.createElement("canvas")}catch(t){throw new Error("You need to specify a canvas element")}}var i=t("./utils");r.render=function(t,e,r){var a=r,u=e;void 0!==a||e&&e.getContext||(a=e,e=void 0),e||(u=o()),a=i.getOptions(a);var s=i.getImageWidth(t.modules.size,a),f=u.getContext("2d"),c=f.createImageData(s,s);return i.qrToImageData(c.data,t,a),n(f,u,s),f.putImageData(c,0,0),u},r.renderToDataURL=function(t,e,n){var o=n;void 0!==o||e&&e.getContext||(o=e,e=void 0),o||(o={});var i=r.render(t,e,o),a=o.type||"image/png",u=o.rendererOpts||{};return i.toDataURL(a,u.quality)}},{"./utils":27}],26:[function(t,e,r){function n(t,e){var r=t.a/255,n=e+'="'+t.hex+'"';return r<1?n+" "+e+'-opacity="'+r.toFixed(2).slice(1)+'"':n}function o(t,e,r){var n=t+e;return void 0!==r&&(n+=" "+r),n}function i(t,e,r){for(var n="",i=0,a=!1,u=0,s=0;s<t.length;s++){var f=Math.floor(s%e),c=Math.floor(s/e);f||a||(a=!0),t[s]?(u++,s>0&&f>0&&t[s-1]||(n+=a?o("M",f+r,.5+c+r):o("m",i,0),i=0,a=!1),f+1<e&&t[s+1]||(n+=o("h",u),u=0)):i++}return n}var a=t("./utils");r.render=function(t,e,r){var o=a.getOptions(e),u=t.modules.size,s=t.modules.data,f=u+2*o.margin,c=o.color.light.a?"<path "+n(o.color.light,"fill")+' d="M0 0h'+f+"v"+f+'H0z"/>':"",l="<path "+n(o.color.dark,"stroke")+' d="'+i(s,u,o.margin)+'"/>',h='viewBox="0 0 '+f+" "+f+'"',d=o.width?'width="'+o.width+'" height="'+o.width+'" ':"",g='<svg xmlns="http://www.w3.org/2000/svg" '+d+h+' shape-rendering="crispEdges">'+c+l+"</svg>\n";return"function"==typeof r&&r(null,g),g}},{"./utils":27}],27:[function(t,e,r){function n(t){if("string"!=typeof t)throw new Error("Color should be defined as hex string");var e=t.slice().replace("#","").split("");if(e.length<3||5===e.length||e.length>8)throw new Error("Invalid hex color: "+t);3!==e.length&&4!==e.length||(e=Array.prototype.concat.apply([],e.map(function(t){return[t,t]}))),6===e.length&&e.push("F","F");var r=parseInt(e.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:255&r,hex:"#"+e.slice(0,6).join("")}}r.getOptions=function(t){t||(t={}),t.color||(t.color={});var e=void 0===t.margin||null===t.margin||t.margin<0?4:t.margin,r=t.width&&t.width>=21?t.width:void 0,o=t.scale||4;return{width:r,scale:r?4:o,margin:e,color:{dark:n(t.color.dark||"#000000ff"),light:n(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}},r.getScale=function(t,e){return e.width&&e.width>=t+2*e.margin?e.width/(t+2*e.margin):e.scale},r.getImageWidth=function(t,e){var n=r.getScale(t,e);return Math.floor((t+2*e.margin)*n)},r.qrToImageData=function(t,e,n){for(var o=e.modules.size,i=e.modules.data,a=r.getScale(o,n),u=Math.floor((o+2*n.margin)*a),s=n.margin*a,f=[n.color.light,n.color.dark],c=0;c<u;c++)for(var l=0;l<u;l++){var h=4*(c*u+l),d=n.color.light;if(c>=s&&l>=s&&c<u-s&&l<u-s){var g=Math.floor((c-s)/a),p=Math.floor((l-s)/a);d=f[i[g*o+p]?1:0]}t[h++]=d.r,t[h++]=d.g,t[h++]=d.b,t[h]=d.a}}},{}],28:[function(t,e,r){"use strict";function n(t,e,r){return n.TYPED_ARRAY_SUPPORT||this instanceof n?"number"==typeof t?u(this,t):v(this,t,e,r):new n(t,e,r)}function o(t){if(t>=w)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+w.toString(16)+" bytes");return 0|t}function i(t){return t!==t}function a(t,e){var r;return n.TYPED_ARRAY_SUPPORT?(r=new Uint8Array(e),r.__proto__=n.prototype):(r=t,null===r&&(r=new n(e)),r.length=e),r}function u(t,e){var r=a(t,e<0?0:0|o(e));if(!n.TYPED_ARRAY_SUPPORT)for(var i=0;i<e;++i)r[i]=0;return r}function s(t,e){var r=0|d(e),n=a(t,r),o=n.write(e);return o!==r&&(n=n.slice(0,o)),n}function f(t,e){for(var r=e.length<0?0:0|o(e.length),n=a(t,r),i=0;i<r;i+=1)n[i]=255&e[i];return n}function c(t,e,r,o){if(r<0||e.byteLength<r)throw new RangeError("'offset' is out of bounds");if(e.byteLength<r+(o||0))throw new RangeError("'length' is out of bounds");var i;return i=void 0===r&&void 0===o?new Uint8Array(e):void 0===o?new Uint8Array(e,r):new Uint8Array(e,r,o),n.TYPED_ARRAY_SUPPORT?i.__proto__=n.prototype:i=f(t,i),i}function l(t,e){if(n.isBuffer(e)){var r=0|o(e.length),u=a(t,r);return 0===u.length?u:(e.copy(u,0,0,r),u)}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||i(e.length)?a(t,0):f(t,e);if("Buffer"===e.type&&Array.isArray(e.data))return f(t,e.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function h(t,e){e=e||1/0;for(var r,n=t.length,o=null,i=[],a=0;a<n;++a){if((r=t.charCodeAt(a))>55295&&r<57344){if(!o){if(r>56319){(e-=3)>-1&&i.push(239,191,189);continue}if(a+1===n){(e-=3)>-1&&i.push(239,191,189);continue}o=r;continue}if(r<56320){(e-=3)>-1&&i.push(239,191,189),o=r;continue}r=65536+(o-55296<<10|r-56320)}else o&&(e-=3)>-1&&i.push(239,191,189);if(o=null,r<128){if((e-=1)<0)break;i.push(r)}else if(r<2048){if((e-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return i}function d(t){return n.isBuffer(t)?t.length:"undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer)?t.byteLength:("string"!=typeof t&&(t=""+t),0===t.length?0:h(t).length)}function g(t,e,r,n){for(var o=0;o<n&&!(o+r>=e.length||o>=t.length);++o)e[o+r]=t[o];return o}function p(t,e,r,n){return g(h(e,t.length-r),t,r,n)}function v(t,e,r,n){if("number"==typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer?c(t,e,r,n):"string"==typeof e?s(t,e,r):l(t,e)}var m=t("isarray");n.TYPED_ARRAY_SUPPORT=function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()}catch(t){return!1}}();var w=n.TYPED_ARRAY_SUPPORT?2147483647:1073741823;n.TYPED_ARRAY_SUPPORT&&(n.prototype.__proto__=Uint8Array.prototype,n.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&n[Symbol.species]===n&&Object.defineProperty(n,Symbol.species,{value:null,configurable:!0,enumerable:!1,writable:!1})),n.prototype.write=function(t,e,r){void 0===e?(r=this.length,e=0):void 0===r&&"string"==typeof e?(r=this.length,e=0):isFinite(e)&&(e|=0,isFinite(r)?r|=0:r=void 0);var n=this.length-e;if((void 0===r||r>n)&&(r=n),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");return p(this,t,e,r)},n.prototype.slice=function(t,e){var r=this.length;t=~~t,e=void 0===e?r:~~e,t<0?(t+=r)<0&&(t=0):t>r&&(t=r),e<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t);var o;if(n.TYPED_ARRAY_SUPPORT)o=this.subarray(t,e),o.__proto__=n.prototype;else{var i=e-t;o=new n(i,void 0);for(var a=0;a<i;++a)o[a]=this[a+t]}return o},n.prototype.copy=function(t,e,r,o){if(r||(r=0),o||0===o||(o=this.length),e>=t.length&&(e=t.length),e||(e=0),o>0&&o<r&&(o=r),o===r)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds");if(o<0)throw new RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),t.length-e<o-r&&(o=t.length-e+r);var i,a=o-r;if(this===t&&r<e&&e<o)for(i=a-1;i>=0;--i)t[i+e]=this[i+r];else if(a<1e3||!n.TYPED_ARRAY_SUPPORT)for(i=0;i<a;++i)t[i+e]=this[i+r];else Uint8Array.prototype.set.call(t,this.subarray(r,r+a),e);return a},n.prototype.fill=function(t,e,r){if("string"==typeof t){if("string"==typeof e?(e=0,r=this.length):"string"==typeof r&&(r=this.length),1===t.length){var o=t.charCodeAt(0);o<256&&(t=o)}}else"number"==typeof t&&(t&=255);if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0);var i;if("number"==typeof t)for(i=e;i<r;++i)this[i]=t;else{var a=n.isBuffer(t)?t:new n(t),u=a.length;for(i=0;i<r-e;++i)this[i+e]=a[i%u]}return this},n.concat=function(t,e){if(!m(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return a(null,0);var r;if(void 0===e)for(e=0,r=0;r<t.length;++r)e+=t[r].length;var o=u(null,e),i=0;for(r=0;r<t.length;++r){var s=t[r];if(!n.isBuffer(s))throw new TypeError('"list" argument must be an Array of Buffers');s.copy(o,i),i+=s.length}return o},n.byteLength=d,n.prototype._isBuffer=!0,n.isBuffer=function(t){return!(null==t||!t._isBuffer)},e.exports=n},{isarray:30}],29:[function(t,e,r){"use strict";var n={single_source_shortest_paths:function(t,e,r){var o={},i={};i[e]=0;var a=n.PriorityQueue.make();a.push(e,0);for(var u,s,f,c,l,h,d,g;!a.empty();){u=a.pop(),s=u.value,c=u.cost,l=t[s]||{};for(f in l)l.hasOwnProperty(f)&&(h=l[f],d=c+h,g=i[f],(void 0===i[f]||g>d)&&(i[f]=d,a.push(f,d),o[f]=s))}if(void 0!==r&&void 0===i[r]){var p=["Could not find a path from ",e," to ",r,"."].join("");throw new Error(p)}return o},extract_shortest_path_from_predecessor_list:function(t,e){for(var r=[],n=e;n;)r.push(n),t[n],n=t[n];return r.reverse(),r},find_path:function(t,e,r){var o=n.single_source_shortest_paths(t,e,r);return n.extract_shortest_path_from_predecessor_list(o,r)},PriorityQueue:{make:function(t){var e,r=n.PriorityQueue,o={};t=t||{};for(e in r)r.hasOwnProperty(e)&&(o[e]=r[e]);return o.queue=[],o.sorter=t.sorter||r.default_sorter,o},default_sorter:function(t,e){return t.cost-e.cost},push:function(t,e){var r={value:t,cost:e};this.queue.push(r),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};void 0!==e&&(e.exports=n)},{}],30:[function(t,e,r){var n={}.toString;e.exports=Array.isArray||function(t){return"[object Array]"==n.call(t)}},{}]},{},[24])(24)});
//# sourceMappingURL=qrcode.min.js.map



CanvasRenderingContext2D.prototype.wrapText = function (t, x, y, w, l) {
    if (typeof t != 'string' || typeof x != 'number' || typeof y != 'number') {
      return
    }
  
    var context = this
    var canvas = context.canvas
  
    if (typeof w == 'undefined') {
      w = (canvas && canvas.width) || 300
    }
    if (typeof l == 'undefined') {
      l = (canvas && parseInt(window.getComputedStyle(canvas).lineHeight)) || parseInt(window.getComputedStyle(document.body).lineHeight)
    }
  
    // 字符分隔为数组
    var arrText = t.split('')
    var line = ''
  
    for (var n = 0; n < arrText.length; n++) {
      var testLine = line + arrText[n]
      var metrics = context.measureText(testLine)
      var testWidth = metrics.width
      if (testWidth > w && n > 0) {
        context.fillText(line, x, y)
        line = arrText[n]
        y += l
      } else {
        line = testLine
      }
    }
    context.fillText(line, x, y)
  }
  
  CanvasRenderingContext2D.prototype.drawDiv = function (x, y, w, h, g, r) {
    if (w < 2 * r) r = w / 2
    if (h < 2 * r) r = h / 2
    this.beginPath()
    this.moveTo(x + r, y)
    this.arcTo(x + w, y, x + w, y + h, r)
    this.arcTo(x + w, y + h, x, y + h, r)
    this.arcTo(x, y + h, x, y, r)
    this.arcTo(x, y, x + w, y, r)
    this.closePath()
    this.fillStyle = g
    this.fill()
  }
  
  window.imagen = ({canvas, layers}) => {
    const loadPicPromise = layers.map(l => {
      return new Promise((resolve, reject) => {
        //console.log(l.type)
        if (l.type === 'image' && l.image) {
          l.elem = new Image()
          l.elem.crossOrigin = 'Anonymous'
          l.elem.src = l.image
          l.elem.onload = function () {
            resolve(l)
          }
          l.elem.onerror = function (err) {
            //console.log(l.image, err)
            reject(err)
          }
        } else if (l.type === 'qrcode' && l.text) {
          QRCode.toDataURL(l.text, {
            errorCorrectionLevel: 'L',
            correctLevel: 'L',
            margin: 2,
            width: l.width
          }, function (err, url) {
            if (err) {
              //console.log(err)
              reject(err)
            } else {
              l.type = 'image'
              l.image = url
  
              // FIXME: preaty
              l.elem = new Image()
              l.elem.crossOrigin = 'Anonymous'
              l.elem.src = l.image
              l.elem.onload = function () {
                resolve(l)
              }
              l.elem.onerror = function (err) {
                //console.log(err)
                reject(err)
              }
            }
          })
        } else {
          resolve(l)
        }
      })
    })
    return new Promise((resolve, reject) => {
      Promise.all(loadPicPromise).then((lys) => {
        const cav = document.createElement('canvas')
        cav.width = canvas.width
        cav.height = canvas.height
  
        const ctx = cav.getContext('2d')
        if (canvas.linearGradient && canvas.linearGradient.length > 0) {
          let grd = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
          canvas.linearGradient.forEach(c => grd.addColorStop(c.step, c.color))
          ctx.fillStyle = grd
        } else {
          ctx.fillStyle = canvas.background || '#fff'
        }
        ctx.fillRect(0, 0, canvas.width, canvas.height)
  
        try {
          lys.forEach(ly => {
            if (ly.type === 'image' && ly.image) {
              let args = [ly.elem, ly.left || 0, ly.top || 0]
              if (ly.width && ly.height) {
                args = args.concat([ly.width, ly.height])
              }
              ctx.drawImage.apply(ctx, args)
            }
            if (ly.type === 'text' && ly.text) {
              ctx.textBaseline = ly.verticalAlign || 'top'
              ctx.fillStyle = ly.color || '#000'
              ctx.textAlign = ly.textAlign || 'left'
              ctx.font = `${ly.fontSize || 12}px sans-serif`
  
              if (ly.width) {
                ctx.wrapText(ly.text, ly.left || 0, ly.top || 0, ly.width, ly.lineHeight || ly.fontSize * 1.5)
              } else {
                ctx.fillText(ly.text, ly.left || 0, ly.top || 0)
              }
            }
            if (ly.type === 'div') {
              //console.log(ly)
              ctx.drawDiv(ly.left, ly.top, ly.width, ly.height, ly.background, ly.borderRadius)
            }
          })
  
          const base64 = cav.toDataURL('image/jpeg', 0.7)
          resolve(base64)
        } catch (err) {
          //console.log(err)
          reject(err)
        }
      })
    })
  }
  
window.getQuery = (search) => {
    search = search || window.location.search.substring(1)
    var query = {}
    search.split('&').forEach(param => {
      let paramArr = param.split('=')
      query[paramArr[0]] = paramArr[1]
    })
    return query
  }
  





let dom = `
<div class="sizetip hidden">缩放图片充满裁剪框效果最佳</div>
<div id="texttest"></div>
<div id="pagecontent">
    <div id="blackmask" class="hidden"></div>
    <input type="file" id="file" class="hidden"/>
    <img id="showTheCut"/>
    <div id="clickFile"></div>
    <div id="tip"> </div>
    <textarea id="word" rows="3" cols="30"/>
    
    <div id="submit"></div>

    <div class="container hidden">
    <div class="page crop-box" style="display: block;"></div>
    <div class="page page-choose" style="display: none;">
        
        <div class="pic-area" style="touch-action: none; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></div>

        </div>
    <div class="page page-result" style="display: block;"></div>
    </div>

    <div id="uploadingtip" class="hidden loading-progress-bar"><div class="loading-progress-bar-inner"></div></div>

    <div class="pg2 hidden">
    <img class="shareimg" src=""/>
    <input type="checkbox" id="qrcodorlogobt" class="" name="qrcodorlogobt" checked>
    <label for="qrcodorlogobt" id="labqrcodorlogobt" class="">是否添加二维码</label>
    <img class="sharebtn"/>
    </div>
</div>
`;

$('#root').html(dom);

$('#qrcodorlogobt').hide();
$('#labqrcodorlogobt').hide();

$('#pagecontent').css({
  "backgroundImage":"url(https://piccdn.luojilab.com/fe-oss/default/MTU3MDUyMTY1NjE1.jpeg)",
  "width":"100%",
  "height":"100%",
  "position": "absolute",

  "backgroundSize": "cover",
  "top":"0"
});

//兼容
$('#root').css({
    "backgroundImage":"url(https://piccdn.luojilab.com/fe-oss/default/MTU2OTI5MzYzNTE1.png)",
    "minHeight":"200px;"
})

var hcorrent = window.innerHeight;
var wcorrent = window.innerWidth;

var nickname;
var avatar;
var url_from;




//微信禁止下滑。
$(document).ready(function(){
	var app=document.getElementById("root");
	var touchstartY;
	app.addEventListener("touchstart",function(event){
		var events=event.touches[0]||event;
        touchstartY=events.clientY;//获取触摸目标在视口中的y坐标
        
	},false);
	
	app.addEventListener("touchmove",function(event){
		var events=event.touches[0]||event;
		//注意document.body.scrollTop始终为0
		var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;//获取滚动部分的高度
		var clientHeight=document.documentElement.clientHeight;//获取手机屏幕高度（可视部分高度）
		var scrollHeight=document.body.scrollHeight;//所有内容的高度
		if(events.clientY>touchstartY&&scrollTop<=0&&event.cancelable){
			event.preventDefault();//禁止到顶下拉
        }
        // else if(scrollTop+clientHeight>scrollHeight&&event.cancelable){
		// 	event.preventDefault();//禁止到底上拉
		// }
	},false);
});







window.___links = {
    checkImg : 'https://zt.igetget.com/wxact/api/sifter/img',
    checkText : 'https://zt.igetget.com/wxact/api/sifter/text',
    userinfolink : 'https://pic1cdn.luojilab.com/html/poster/picYwXAgpERJ9f2vpor6XjJ.html',
    osskeylink : 'https://zt.igetget.com/wxact/api/oss-sign',
}
//根据环境判断用不同的连接
if(window.___datasourse___){
    let container = window.___datasourse___.container; 

    if(container != "igetapp") {//微信环境
        let env = window.__wxInfo.env; 

        if(env == 'development' || env == 'testing'){
            window.___links = {
                checkImg : 'http://zt.iget.dev.didatrip.com/wxact/api/sifter/img',
                checkText : 'http://zt.iget.dev.didatrip.com/wxact/api/sifter/text',
                userinfolink : 'http://pic1cdn.luojilab.com/html/postertest/picppVpAX90wJijmrgOk9vn.html',
                osskeylink : 'http://zt.iget.dev.didatrip.com/wxact/api/oss-sign',

                shotlink : 'http://zt.iget.dev.didatrip.com/wxact/api/surl',
                preshotlink : 'http://d.dev.didatrip.com/',
            }
        }
        if(env == 'simulation'){
            window.___links = {
                checkImg : 'http://zt.dev.igetget.com/wxact/api/sifter/img',
                checkText : 'http://zt.dev.igetget.com/wxact/api/sifter/text',
                userinfolink : 'http://pic1cdn.luojilab.com/html/postersimu/picooJLGW7ZOVtYOnv6EMv4.html',
                osskeylink : 'http://zt.dev.igetget.com/wxact/api/oss-sign',
            }
        }
        if(env == 'production'){
            window.___links = {
                checkImg : 'https://zt.igetget.com/wxact/api/sifter/img',
                checkText : 'https://zt.igetget.com/wxact/api/sifter/text',
                userinfolink : 'https://pic1cdn.luojilab.com/html/poster/picYwXAgpERJ9f2vpor6XjJ.html',
                osskeylink : 'https://zt.igetget.com/wxact/api/oss-sign',

                shotlink : 'https://zt.igetget.com/wxact/api/surl',
                preshotlink : 'https://d.sao.cn/',
            }
        }
    }else{ //app
        let env = window.___datasourse___.env; 

        if(env == 'development' || env == 'testing'){
            window.___links = {
                checkImg : '',
                checkText : '',
                userinfolink : 'http://pic1cdn.luojilab.com/html/postertest/picppVpAX90wJijmrgOk9vn.html',
                osskeylink : 'http://zt.iget.dev.didatrip.com/wxact/api/oss-sign',
            }
        }
        if(env == 'simulation'){
            window.___links = {
                checkImg : '',
                checkText : '',
                userinfolink : 'http://pic1cdn.luojilab.com/html/postersimu/picooJLGW7ZOVtYOnv6EMv4.html',
                osskeylink : 'http://zt.dev.igetget.com/wxact/api/oss-sign',
            }
        }
        if(env == 'production'){
            window.___links = {
                checkImg : '',
                checkText : '',
                userinfolink : 'https://pic1cdn.luojilab.com/html/poster/picYwXAgpERJ9f2vpor6XjJ.html',
                osskeylink : 'https://zt.igetget.com/wxact/api/oss-sign',
            }
        }
    }
}




var getuserinfolink = function(){
    window.userinfolinkstr = window.___links.userinfolink+"?nickname="+nickname+"&avatar="+encodeURIComponent(avatar)+"&url_from="+url_from;
    if(window.___datasourse___){
        let container = window.___datasourse___.container; 
        if(container != "igetapp") {//微信环境
            //短连接
            $.ajax({
                type: 'POST',
                url: window.___links.shotlink,
                data: {
                    url: window.userinfolinkstr,
                },
                success: function (res) {
                    if(res.code === 0){
                        window.userinfolinkstr = window.___links.preshotlink + res.rawData.data.id
                    }
                },
            })
        }
    }
}



$('#clickFile').click(function() {
  $('#file').click();
});
var word = $('#word');
var placeholder = '我是得到， \n我每天在拥挤地铁上 \n听「每天听本书」';
word.attr('value', placeholder);
word.val(placeholder);


$(function(){
    document.getElementById('pagecontent').style.height = ($(document).height()>window.innerHeight?$(document).height():window.innerHeight) +'px';

    if(document.body.scrollHeight > window.innerHeight){
        //按钮太靠下
        var mt = parseInt(hcorrent*(hcorrent/wcorrent - 590/375)) ;
        // $('#pagecontent').height($('#pagecontent').height()-(mt/2*0.2));

        $('#pagecontent').height(document.body.scrollHeight);

        $('#pagecontent').css({
            "marginTop":mt/2*0.2+"px",
          });
    } else {

        //按钮太靠上
        var mt = parseInt(hcorrent*(hcorrent/wcorrent - 590/375)) ;
        $('#pagecontent').height($('#pagecontent').height()-(mt/2*0.2));

        $('#pagecontent').css({
            "marginTop":mt/2*0.2+"px",
            });

    }
});
word.focus(function(){
    if($(this).val() === placeholder){
        $(this).val('');
        word.css({'backgroundImage':''});
    }

});

word.blur(function(){
    if($(this).val() ===''){
        $(this).val(placeholder);
        // word.css({'background-image':'url(https://piccdn.luojilab.com/fe-oss/default/MTU2ODk4NDY0NDMy.jpeg)'});
    }    
    window.scroll(0,0);
});

//上传文件
document.getElementById('file').addEventListener('change', function (e) {
    let file = e.target.files[0];
    let storeAs = 'upload-file';
    // console.log(file.name + ' => ' + storeAs);
    // OSS.urlib是sdk内部封装的发送请求的逻辑，开发者可以使用任何发送请求的库向`sts-server`发送请求
    $.post(window.___links.osskeylink, (response) => {
        // if (err) {
        // // return alert(err);
        // }
        // try {

        sign = response;
        // } catch (e) {
        // return alert('parse sts response info error: ' + e.message);
        // }
        //console.log(sign);
        let formData = new FormData()

        
        formData.append("OSSAccessKeyId", sign.accessId)
        formData.append("policy", sign.policy)
        formData.append("Signature", sign.signature)
        formData.append("key", getKey(file.name))
        formData.append("success_action_status", 201)
        formData.append("file", file);

        $('#uploadingtip').show();
        $('.loading-progress-bar-inner').css({width: '0%'});
        $('.loading-progress-bar-inner').animate({width: '85%'}, 3000);
        
        var tempcrop_cropstr = '?x-oss-process=image/resize,h_800/quality,Q_80'
        //上传
        $.ajax({
            type: 'POST',
            url: sign.host,
            data: formData,
            success: function (res) {

                getuserinfolink();

                  //防误触
                  $('#submit').hide();
                    //console.log(res);
                    // 取得地址
                    let href = xmlToJson(res).PostResponse.Location['#text'];
                    href = href.replace('com//', 'com/')
                    window.pageImageHref = href;
                    //console.log('上传的图片地址是：'+href);

                    checkImg();

                    //唤醒裁剪
                    //算算屏幕宽高，裁剪取的大一点
                    var cutwidth = 199;
                    var cutheight = 357;
                    if(window.screen.height / window.screen.width > 357/199 ){
                        //高手机，以宽为准
                        cutwidth = parseInt(window.screen.width*0.8);
                        cutheight = parseInt(cutwidth*357/199);
                    }else{
                        cutheight = parseInt(window.screen.height*0.8);
                        cutwidth = parseInt(cutheight*199/357);
                    }
                    //console.log('eeee');
                    //console.log(cutwidth,cutheight);
                    $('#blackmask').css({
                        "marginTop": '-' + $('#pagecontent').css("margin-top"),
                        'height': parseInt($('#pagecontent').css("height")) + $('#pagecontent').css("margin-top")
                    });
                    $('#blackmask').show();
                    $('.sizetip').show();
                    new AlloyCrop({
                        image_src: window.pageImageHref + tempcrop_cropstr,
                        className: 'crop-box',
                        circle: false, // 是否裁剪圆形
                        width:cutwidth, // crop width 裁剪框宽度
                        height: cutheight, // crop height 裁剪框高度
                        output: 2, // output resolution --> 400*200
                        ok: function (base64, canvas) { 

                          $('#cutImgObj').attr('src',crop_cropstr);
                          $('#showTheCut').attr('src',crop_cropstr);

                          $('.crop-box').remove();

                          setTimeout(function(){
                            $('#submit').show();
                          },500);
                          $('#blackmask').hide();
                          $('.sizetip').hide();
                        },
                        cancel: function(){
                            //console.log("你点击了取消");
                            refresh();
                            $('#submit').show();
                            $('#blackmask').hide();
                            $('.sizetip').hide();
                          },
                        ok_text: "裁剪", // optional parameters , the default value is ok
                        cancel_text: "取消" // optional parameters , the default value is cancel
                    });
                    $('.loading-progress-bar-inner').animate({width: '100%'}, 700,function(){
                        $('#uploadingtip').hide();
                      });
                    

                    //展示出来
                    if($('#cutImgObj').length){
                      $('#cutImgObj')
                    }else{
                      let dom = `<img id="cutImgObj" src="` + href + `"/> `;
                      $('#pagecontent').append(dom);
                    }

                    //切换属性以求安卓重新上传
                    $('#file').attr({'type':'text'});
                    $('#file').attr({'type':'file'});
                },
                processData: false,
            contentType: false
        })
        // $.post(, {data:}).then(res => {console.log(res)
        // })

    });
});


function pushPic(showqrcode = true){
 
    // word = $('#word').val();
    //生成海报
    let sentenst = 985;
    let sentensl = 140;
    let sentensmt = 47;
    let ftonsize =34;
    let sentenswt =450
    let ftcolor = '#ff6b00';
    let sentens = [];
  
    //这里做文案方面的换行检测
    var newsentensstart = 0;
    let allsentens = $('#word').val();
    var texttest = $('#texttest');
    texttest.width($('#word').width()-1);
    texttest.html('');
    texttest.css({
        'fontSize':$('#word').css('font-size'),
        'lineHeight':$('#word').css('line-height'),
      });
    for(var i = 0; i< allsentens.length; i++) {
      texttest.html(allsentens.substring(newsentensstart,i));
      if(texttest.height() > parseInt(texttest.css('line-height'))+2 ){
          sentens.push(allsentens.substring(newsentensstart,i-1));
          newsentensstart = i -1;
          // i = i-1;
      }
      if(allsentens[i] == '\n'){
          sentens.push(allsentens.substring(newsentensstart,i));
          newsentensstart = i+1;
      }
      if(i == allsentens.length -1){
          sentens.push(allsentens.substring(newsentensstart,allsentens.length));
      }
    } 

    //console.log(sentens);

  imagen({
    canvas: {
      width: 750,
      height: 1333,
      background: '#FF7E37',
      // linearGradient:[{
      //   color: '#FF596D',
      //   step: 0,
      // },{
      //   color: '#FC8718',
      //   step: 1,
      // }]
    },
    layers: [
    //外框和装饰物
    {
      type: 'image',
      image: 'https://piccdn.luojilab.com/fe-oss/default/MTU2OTUwMzYwMDYy.jpeg',
      left: 0,
      top: 0,
      width: 750,
      height: 1333
    }, 
    {
      type: 'image',
      image: $('#cutImgObj').attr('src'),
      left: 77,
      top: 68,
      width: 596,
      height: 1072
    }, 
    {
      type: 'image',
      image: 'https://piccdn.luojilab.com/fe-oss/default/MTU2ODk2MTg1NDk4.png',
      left: 112,
      top: 858,
      width: 624,
      height: 285
    }, 
    //第一行
    {
      type: 'text',
      text: sentens[0],
      left: sentensl,
      top: sentenst,
      width: sentenswt,
      fontSize: ftonsize,
      height: 60,
      lineHeight: 54,
      color: ftcolor,
      textAlign: 'left'
    }, 
    {
      type: 'text',
      text: sentens[1],
      left: sentensl,
      top: sentenst+sentensmt,
      width: sentenswt,
      fontSize: ftonsize,
      height: 6,
      lineHeight: 54,
      color: ftcolor,
      textAlign: 'left'
    }, 
    {
      type: 'text',
      text: sentens[2],
      left: sentensl,
      top: sentenst+sentensmt*2,
      width: sentenswt,
      fontSize: ftonsize,
      height: 60,
      lineHeight: 54,
      color: ftcolor,
      textAlign: 'left'
    }, 
    //二维码或者logo
    showqrcode?
    {
      type: 'qrcode',
      text: window.userinfolinkstr,
      left: 613,
      top: 992,
      width: 110,
      height: 110
    }:{
      type: 'image',
      image: 'https://piccdn.luojilab.com/fe-oss/default/MTU2OTEzMDIwMzAw.jpeg',
      left: 613,
      top: 992,
      width: 110,
      height: 148
    }, 
    showqrcode?{
        type: 'image',
        image: 'https://piccdn.luojilab.com/fe-oss/default/MTU2OTUwNTQyNjA4.png',
        left: 100,
        top: 16,
        width: 110,
        height: 110  
    }:{}
    ]
  }).then((base64) => {
    this.shareImg = base64;
    $('.shareimg').attr('src',this.shareImg);
    $('.pg2').show();
  })
}
$('#submit').click(function(){
    //文字校验
    checkText();

    setTimeout(function(){
        if(ifsafe()){
            pushPic($('#qrcodorlogobt')[0].checked);

            $('#submit').hide();
        } else {
            // asioforalert.alert('风控未通过，请检查' + dangeriouspic + dangerioustxt);
            //console.log('风控封禁');
        }
    },500);
});
function ifsafe (){
    if ((dangeriouspic == 'waiting' || dangeriouspic == 'safe' )&&(dangerioustxt == 'waiting' || dangerioustxt == 'safe' )) {
        if(window.pageImageHref){
            return true
        } else {
            asioforalert.alert({
                type: 'error',
                title: '请上传图片'
              });
              return false
        }
    } else {
        if(window.pageImageHref) { 

        } else {
            asioforalert.alert({
                type: 'error',
                title: '请上传图片'
              });
              return false
        }
        return false
    }
}

var checkImg; 
var checkText;
window.dangeriouspic = 'waiting';
window.dangerioustxt = 'waiting';
//风控
var acuid;
//这里没通
// new asio(window.___datasourse___.container);


function refresh() {
    var random = Math.floor((Math.random() * 10000) + 1);
    var url = decodeURI(window.location.href);
    if (url.indexOf('?') < 0) {
        url = url + "?random" + random;
    } else {
        url = url.substr(0, url.indexOf('?random')) + "?random" + random;
    }
    window.location.href = url;
}

//根据环境做差异化
if(window.___datasourse___){
    env = window.___datasourse___.container; 
    
    //一些风控要用的变量
    var act_id = window.location.href.split('/');
    act_id = act_id[act_id.length-1];

    //弹窗注册
    window.asioforalert = new Asio(env);
    
    if(env != "igetapp") {//微信环境
        nickname = window.__wxInfo.nickname;
        avatar = window.__wxInfo.avatar;
        url_from = window.__wxInfo.unionid;
        
        $('.sharebtn').attr('src',"https://piccdn.luojilab.com/fe-oss/default/MTU2OTc1MjU3Njk4.png");
        $('#qrcodorlogobt').show();
        $('#labqrcodorlogobt').show();

        //风控
        //图片
        checkImg = function () {
            $.ajax({
                type: 'POST',
                url: window.___links.checkImg,
                data: {
                    "url": window.pageImageHref,
                    "act_id": act_id
                },
                success: function(e){
                    if(e.code === 0){
                        //通过风控
                        window.dangeriouspic = 'safe';
                        if(e.rawData.data){
                            window.picsafecode = e.rawData.data.id
                        } else {
                            window.picsafecode = '';
                        }

                        if(!window.picsafecode){
                            window.dangeriouspic = e.rawData.err_msg;
                            asioforalert.alert({
                                type: 'error',
                                title: dangeriouspic?dangeriouspic:'请求频率过高'
                            });
                            window.tooquickly = 'tooquickly';
                            setTimeout(function(){
                                refresh();
                            },1500);
                        }
                        // asioforalert.alert({
                        //     type: 'success',
                        //     title: 'pic safe'
                        //   });
                    } else {
                        //未通过风控 频率，检黄等。
                        //console.log(e.rawData.err_msg);
                        window.dangeriouspic = e.rawData.err_msg;
                        
                        asioforalert.alert({
                            type: 'error',
                            title: dangeriouspic?dangeriouspic:'风控服务器繁忙'
                          });
                    }
                },
                // dataType: dataType
            });
        };
        //文字
        checkText = function () {
            if( window.picsafecode ){
                $.ajax({
                    type: 'POST',
                    url: window.___links.checkText,
                    data: {
                        "id": window.picsafecode,
                        "comment": $('#word').val()
                    },
                    success: function(e){
                        if(e.rawData.status === 200){
                            //通过风控
                            window.dangerioustxt = 'safe';

                            // asioforalert.alert({
                            //     type: 'success',
                            //     title: 'text safe'
                            //   });
                        } else {
                            //未通过风控 频率，检黄等。
                            //console.log(e.rawData.err_msg);
                            window.dangerioustxt = e.rawData.err_msg;
                            // asio.alert(e.rawData.err_msg);
                            if(window.picsafecode){
                                asioforalert.alert({
                                    type: 'error',
                                    title: dangerioustxt
                                  });
                            }
                      
                        }
                    },
                    // dataType: dataType
                });
            }

        };
    } 
    else if (env == 'igetapp')
    {//其他环境(app本地)
        //分享海报，再玩一次
        $('.sharebtn').click(function(){
            refresh();
        });
        var sharepicbutton = `<div class= "sharepicbutton"></div>`
        $('.pg2').append(sharepicbutton);
        $('.sharepicbutton').click(function(){

            //优惠券
            Asio.send('network.load', {
                url: '$_ENTREE_DOMAIN_$/allblue/coupon/send?uid='+acuid,
                method: 'POST',
                params: {
                    uid:acuid,
                },
                contentType: 'application/x-www-form-urlencoded',
                proxyType: 'gateway/entree',
              }).then(res => {
                  //console.log('ccccc',res);
              
                //调起App分享、
                  var conf = {
                    type: 1,
                    image: $('.shareimg').attr('src'),
                    channel: [0, 1, 2, 3, 6, 9, 10],
                    // log_id: '0',
                    // log_type: 'sponsor',
                    // log_name: '得到荣誉赞助人',
                  }
                Asio.send('agent.share', conf).then(res =>{
                    //埋点
                    var content = { 'name' : 'H5页面_点击海报分享模块' }
                    asioforalert.nlog('s_h5_poster_share', content);
                });
            });
        });

        act_id = window.___datasourse___.aid;

        Asio.send('agent.info').then(res => {
            acuid = res.data.userid;
            nickname = res.data.nickname;
            avatar = res.data.avatar;
            url_from = res.data.userid;
        });        

     

        // //分享复写
        // var shareIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAQAAADbnPi/AAABY0lEQVR42u3Yu0oDQRSA4anyAIoYfYMgqGAEURRBsfI5ztlMFBG0EiRNujyEpQpWNvExRAQVI3YSRPGSaBDCSgZy0SIYL+ss/P9Uu9ni4zAMZIwhIiIiIiIiIiLqKR2TaznPjsSEmxnVsoQSyq0djwN3Qu4cN5RQ7+2k79wpeWhyHfkxmPF5787JUyfXrUow7+t0F6Xqpnqhe466L5fu+UWWPOTaaXl1vFMZkoIDF1aG9cy9q2VmvQPLjkMerw4Y0wQbszaoJ46869/+XZArPVjvc/gW2Jhsvx7qTbDs9VnRCY5FXoKDLa21Ttu6FnOJbuBcQo603vr+WTajn2L143mr6W5gTX86nd+iB3divzBhLbYn3Fj/BLbJXvewTQIGDBgwYMBxBwf5xm9BPjZgm9KSlmwqNuCu//0AAwYMGDBgwH99L/GdFT248iNw9Dc/utG+W+t1aU23DRERERERERH9Yu/y1VzTuLEA2gAAAABJRU5ErkJggg==';
        // Asio.send('ui.menu.click', { image: shareIcon })
        // var conf = {
        //     type: 0,
        //     url: 'http://zt.iget.dev.didatrip.com/wxact/authorize/'+act_id,
        //     title: '恭喜'+'你'+'成为得到「专注力代言人」啦，买得到阅读器，提'+'你'+'好使！',
        //     describe: '送你一张100元优惠券，快来领取吧>>',
        //     image: 'https://piccdn.luojilab.com/fe-oss/default/MTU2OTEzMDIwMzAw.jpeg',
        //     channel: [0, 1, 2, 3, 6, 9, 10],
        //     // log_id: '0',
        //     // log_type: 'sponsor',
        //     // log_name: '得到荣誉赞助人',
        //   }
        // Asio.on('ui.menu.click', () => { Asio.send('agent.share', conf) })

        //底部按钮
        $('.sharebtn').attr('src',"https://piccdn.luojilab.com/fe-oss/default/MTU2OTEzMTExNjEz.png");
        $('#qrcodorlogobt').show();
        $('#labqrcodorlogobt').show();

        //风控
        checkImg = function () {
            Asio.send('network.load', {
                url: '$_ENTREE_DOMAIN_$/activityback/wechat/img',
                method: 'POST',
                params: {
                    url: window.pageImageHref,
                    source: 'app',
                    uid:acuid,
                    act_id: act_id,
                },
                contentType: 'application/x-www-form-urlencoded',
                proxyType: 'gateway/entree',
              }).then(res => {
                //console.log('aaaaaa',res.data);
                if(res.status_code === 0){
                    //通过风控
                    window.dangeriouspic = 'safe';
                    if(res.data.data){
                        window.picsafecode = res.data.data.id
                    } else {
                        window.picsafecode = '';
                    }

                    if(!window.picsafecode){

                        window.dangeriouspic = res.data.err_msg;
                        //console.log('mmmmmmmm'+dangeriouspic+dangeriouspic+'mmmmmmmm');
                        asioforalert.alert({
                            type: 'error',
                            title: dangeriouspic?dangeriouspic:'请求频率过高'
                        });
                        window.tooquickly = 'tooquickly';
                        
                        setTimeout(function(){
                            location.reload(); 
                        },1500);
                    }

                    // asioforalert.alert({
                    //     type: 'success',
                    //     title: 'pic safe'
                    //   });
                } else {
                    //未通过风控 频率，检黄等。
                    //console.log(res.data.err_msg);
                    window.dangeriouspic = res.data.err_msg;

                    asioforalert.alert({
                        type: 'error',
                        title: dangeriouspic
                      });
                }
                // const coupon = encodeURIComponent(JSON.stringify(res.data.coupon))
                // const ddURL = `igetapp://user/invite?coupon=${coupon}`
      
                // Asio.send('jump.ddURL', {
                //   ddURL,
                //   ddURLMinVer: '5.2.0'
                // })
              })
        };
        checkText = function () {
            Asio.send('network.load', {
                url: '$_ENTREE_DOMAIN_$/activityback/wechat/text',
                method: 'POST',
                params: {
                    "id": window.picsafecode,
                    "comment": $('#word').val()
                },
                contentType: 'application/x-www-form-urlencoded',
                proxyType: 'gateway/entree',
              }).then(res => {
                //console.log('bbbb',res.data);
                
                if(res.data.status === 200){
                    //通过风控
                    window.dangerioustxt = 'safe';

                    // asioforalert.alert({
                    //     type: 'success',
                    //     title: '风控通过'
                    //   });
                } else {
                    //未通过风控 频率，检黄等。
                    //console.log(res.data.err_msg);
                    window.dangerioustxt = res.data.err_msg;
                    
                    if(window.picsafecode){
                        asioforalert.alert({
                            type: 'error',
                            title: dangerioustxt
                          });
                    }
                }
                // const coupon = encodeURIComponent(JSON.stringify(res.data.coupon))
                // const ddURL = `igetapp://user/invite?coupon=${coupon}`
      
                // Asio.send('jump.ddURL', {
                //   ddURL,
                //   ddURLMinVer: '5.2.0'
                // })
              })
        };
    }
} 
    else {//git本地开发环境
    $('.sharebtn').attr('src',"https://piccdn.luojilab.com/fe-oss/default/MTU2OTc1MjU3Njk4.png");
        $('#qrcodorlogobt').show();
        $('#labqrcodorlogobt').show();
    } 

$('#qrcodorlogobt').change(function(){
    pushPic($('#qrcodorlogobt')[0].checked);
})
