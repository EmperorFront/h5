/* Zepto v1.2.0 - zepto event ajax form ie - zeptojs.com/license */
!function(t,e){"function"==typeof define&&define.amd?define(function(){return e(t)}):e(t)}(this,function(t){var e=function(){function $(t){return null==t?String(t):S[C.call(t)]||"object"}function F(t){return"function"==$(t)}function k(t){return null!=t&&t==t.window}function M(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function R(t){return"object"==$(t)}function Z(t){return R(t)&&!k(t)&&Object.getPrototypeOf(t)==Object.prototype}function z(t){var e=!!t&&"length"in t&&t.length,n=r.type(t);return"function"!=n&&!k(t)&&("array"==n||0===e||"number"==typeof e&&e>0&&e-1 in t)}function q(t){return a.call(t,function(t){return null!=t})}function H(t){return t.length>0?r.fn.concat.apply([],t):t}function I(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function V(t){return t in l?l[t]:l[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function _(t,e){return"number"!=typeof e||h[I(t)]?e:e+"px"}function B(t){var e,n;return c[t]||(e=f.createElement(t),f.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),c[t]=n),c[t]}function U(t){return"children"in t?u.call(t.children):r.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function X(t,e){var n,r=t?t.length:0;for(n=0;r>n;n++)this[n]=t[n];this.length=r,this.selector=e||""}function J(t,r,i){for(n in r)i&&(Z(r[n])||L(r[n]))?(Z(r[n])&&!Z(t[n])&&(t[n]={}),L(r[n])&&!L(t[n])&&(t[n]=[]),J(t[n],r[n],i)):r[n]!==e&&(t[n]=r[n])}function W(t,e){return null==e?r(t):r(t).filter(e)}function Y(t,e,n,r){return F(e)?e.call(t,n,r):e}function G(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function K(t,n){var r=t.className||"",i=r&&r.baseVal!==e;return n===e?i?r.baseVal:r:void(i?r.baseVal=n:t.className=n)}function Q(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?r.parseJSON(t):t):t}catch(e){return t}}function tt(t,e){e(t);for(var n=0,r=t.childNodes.length;r>n;n++)tt(t.childNodes[n],e)}var e,n,r,i,O,P,o=[],s=o.concat,a=o.filter,u=o.slice,f=t.document,c={},l={},h={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},p=/^\s*<(\w+|!)[^>]*>/,d=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,m=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,g=/^(?:body|html)$/i,v=/([A-Z])/g,y=["val","css","html","text","data","width","height","offset"],x=["after","prepend","before","append"],b=f.createElement("table"),E=f.createElement("tr"),j={tr:f.createElement("tbody"),tbody:b,thead:b,tfoot:b,td:E,th:E,"*":f.createElement("div")},w=/complete|loaded|interactive/,T=/^[\w-]*$/,S={},C=S.toString,N={},A=f.createElement("div"),D={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},L=Array.isArray||function(t){return t instanceof Array};return N.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var r,i=t.parentNode,o=!i;return o&&(i=A).appendChild(t),r=~N.qsa(i,e).indexOf(t),o&&A.removeChild(t),r},O=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},P=function(t){return a.call(t,function(e,n){return t.indexOf(e)==n})},N.fragment=function(t,n,i){var o,s,a;return d.test(t)&&(o=r(f.createElement(RegExp.$1))),o||(t.replace&&(t=t.replace(m,"<$1></$2>")),n===e&&(n=p.test(t)&&RegExp.$1),n in j||(n="*"),a=j[n],a.innerHTML=""+t,o=r.each(u.call(a.childNodes),function(){a.removeChild(this)})),Z(i)&&(s=r(o),r.each(i,function(t,e){y.indexOf(t)>-1?s[t](e):s.attr(t,e)})),o},N.Z=function(t,e){return new X(t,e)},N.isZ=function(t){return t instanceof N.Z},N.init=function(t,n){var i;if(!t)return N.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&p.test(t))i=N.fragment(t,RegExp.$1,n),t=null;else{if(n!==e)return r(n).find(t);i=N.qsa(f,t)}else{if(F(t))return r(f).ready(t);if(N.isZ(t))return t;if(L(t))i=q(t);else if(R(t))i=[t],t=null;else if(p.test(t))i=N.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==e)return r(n).find(t);i=N.qsa(f,t)}}return N.Z(i,t)},r=function(t,e){return N.init(t,e)},r.extend=function(t){var e,n=u.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){J(t,n,e)}),t},N.qsa=function(t,e){var n,r="#"==e[0],i=!r&&"."==e[0],o=r||i?e.slice(1):e,s=T.test(o);return t.getElementById&&s&&r?(n=t.getElementById(o))?[n]:[]:1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType?[]:u.call(s&&!r&&t.getElementsByClassName?i?t.getElementsByClassName(o):t.getElementsByTagName(e):t.querySelectorAll(e))},r.contains=f.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},r.type=$,r.isFunction=F,r.isWindow=k,r.isArray=L,r.isPlainObject=Z,r.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},r.isNumeric=function(t){var e=Number(t),n=typeof t;return null!=t&&"boolean"!=n&&("string"!=n||t.length)&&!isNaN(e)&&isFinite(e)||!1},r.inArray=function(t,e,n){return o.indexOf.call(e,t,n)},r.camelCase=O,r.trim=function(t){return null==t?"":String.prototype.trim.call(t)},r.uuid=0,r.support={},r.expr={},r.noop=function(){},r.map=function(t,e){var n,i,o,r=[];if(z(t))for(i=0;i<t.length;i++)n=e(t[i],i),null!=n&&r.push(n);else for(o in t)n=e(t[o],o),null!=n&&r.push(n);return H(r)},r.each=function(t,e){var n,r;if(z(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(r in t)if(e.call(t[r],r,t[r])===!1)return t;return t},r.grep=function(t,e){return a.call(t,e)},t.JSON&&(r.parseJSON=JSON.parse),r.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){S["[object "+e+"]"]=e.toLowerCase()}),r.fn={constructor:N.Z,length:0,forEach:o.forEach,reduce:o.reduce,push:o.push,sort:o.sort,splice:o.splice,indexOf:o.indexOf,concat:function(){var t,e,n=[];for(t=0;t<arguments.length;t++)e=arguments[t],n[t]=N.isZ(e)?e.toArray():e;return s.apply(N.isZ(this)?this.toArray():this,n)},map:function(t){return r(r.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return r(u.apply(this,arguments))},ready:function(t){return w.test(f.readyState)&&f.body?t(r):f.addEventListener("DOMContentLoaded",function(){t(r)},!1),this},get:function(t){return t===e?u.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return o.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return F(t)?this.not(this.not(t)):r(a.call(this,function(e){return N.matches(e,t)}))},add:function(t,e){return r(P(this.concat(r(t,e))))},is:function(t){return this.length>0&&N.matches(this[0],t)},not:function(t){var n=[];if(F(t)&&t.call!==e)this.each(function(e){t.call(this,e)||n.push(this)});else{var i="string"==typeof t?this.filter(t):z(t)&&F(t.item)?u.call(t):r(t);this.forEach(function(t){i.indexOf(t)<0&&n.push(t)})}return r(n)},has:function(t){return this.filter(function(){return R(t)?r.contains(this,t):r(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!R(t)?t:r(t)},last:function(){var t=this[this.length-1];return t&&!R(t)?t:r(t)},find:function(t){var e,n=this;return e=t?"object"==typeof t?r(t).filter(function(){var t=this;return o.some.call(n,function(e){return r.contains(e,t)})}):1==this.length?r(N.qsa(this[0],t)):this.map(function(){return N.qsa(this,t)}):r()},closest:function(t,e){var n=[],i="object"==typeof t&&r(t);return this.each(function(r,o){for(;o&&!(i?i.indexOf(o)>=0:N.matches(o,t));)o=o!==e&&!M(o)&&o.parentNode;o&&n.indexOf(o)<0&&n.push(o)}),r(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=r.map(n,function(t){return(t=t.parentNode)&&!M(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return W(e,t)},parent:function(t){return W(P(this.pluck("parentNode")),t)},children:function(t){return W(this.map(function(){return U(this)}),t)},contents:function(){return this.map(function(){return this.contentDocument||u.call(this.childNodes)})},siblings:function(t){return W(this.map(function(t,e){return a.call(U(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return r.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=B(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=F(t);if(this[0]&&!e)var n=r(t).get(0),i=n.parentNode||this.length>1;return this.each(function(o){r(this).wrapAll(e?t.call(this,o):i?n.cloneNode(!0):n)})},wrapAll:function(t){if(this[0]){r(this[0]).before(t=r(t));for(var e;(e=t.children()).length;)t=e.first();r(t).append(this)}return this},wrapInner:function(t){var e=F(t);return this.each(function(n){var i=r(this),o=i.contents(),s=e?t.call(this,n):t;o.length?o.wrapAll(s):i.append(s)})},unwrap:function(){return this.parent().each(function(){r(this).replaceWith(r(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var n=r(this);(t===e?"none"==n.css("display"):t)?n.show():n.hide()})},prev:function(t){return r(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return r(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;r(this).empty().append(Y(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=Y(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this.pluck("textContent").join(""):null},attr:function(t,r){var i;return"string"!=typeof t||1 in arguments?this.each(function(e){if(1===this.nodeType)if(R(t))for(n in t)G(this,n,t[n]);else G(this,t,Y(this,r,e,this.getAttribute(t)))}):0 in this&&1==this[0].nodeType&&null!=(i=this[0].getAttribute(t))?i:e},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){G(this,t)},this)})},prop:function(t,e){return t=D[t]||t,1 in arguments?this.each(function(n){this[t]=Y(this,e,n,this[t])}):this[0]&&this[0][t]},removeProp:function(t){return t=D[t]||t,this.each(function(){delete this[t]})},data:function(t,n){var r="data-"+t.replace(v,"-$1").toLowerCase(),i=1 in arguments?this.attr(r,n):this.attr(r);return null!==i?Q(i):e},val:function(t){return 0 in arguments?(null==t&&(t=""),this.each(function(e){this.value=Y(this,t,e,this.value)})):this[0]&&(this[0].multiple?r(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(e){if(e)return this.each(function(t){var n=r(this),i=Y(this,e,t,n.offset()),o=n.offsetParent().offset(),s={top:i.top-o.top,left:i.left-o.left};"static"==n.css("position")&&(s.position="relative"),n.css(s)});if(!this.length)return null;if(f.documentElement!==this[0]&&!r.contains(f.documentElement,this[0]))return{top:0,left:0};var n=this[0].getBoundingClientRect();return{left:n.left+t.pageXOffset,top:n.top+t.pageYOffset,width:Math.round(n.width),height:Math.round(n.height)}},css:function(t,e){if(arguments.length<2){var i=this[0];if("string"==typeof t){if(!i)return;return i.style[O(t)]||getComputedStyle(i,"").getPropertyValue(t)}if(L(t)){if(!i)return;var o={},s=getComputedStyle(i,"");return r.each(t,function(t,e){o[e]=i.style[O(e)]||s.getPropertyValue(e)}),o}}var a="";if("string"==$(t))e||0===e?a=I(t)+":"+_(t,e):this.each(function(){this.style.removeProperty(I(t))});else for(n in t)t[n]||0===t[n]?a+=I(n)+":"+_(n,t[n])+";":this.each(function(){this.style.removeProperty(I(n))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(r(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?o.some.call(this,function(t){return this.test(K(t))},V(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){i=[];var n=K(this),o=Y(this,t,e,n);o.split(/\s+/g).forEach(function(t){r(this).hasClass(t)||i.push(t)},this),i.length&&K(this,n+(n?" ":"")+i.join(" "))}}):this},removeClass:function(t){return this.each(function(n){if("className"in this){if(t===e)return K(this,"");i=K(this),Y(this,t,n,i).split(/\s+/g).forEach(function(t){i=i.replace(V(t)," ")}),K(this,i.trim())}})},toggleClass:function(t,n){return t?this.each(function(i){var o=r(this),s=Y(this,t,i,K(this));s.split(/\s+/g).forEach(function(t){(n===e?!o.hasClass(t):n)?o.addClass(t):o.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var n="scrollTop"in this[0];return t===e?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var n="scrollLeft"in this[0];return t===e?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),i=g.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(r(t).css("margin-top"))||0,n.left-=parseFloat(r(t).css("margin-left"))||0,i.top+=parseFloat(r(e[0]).css("border-top-width"))||0,i.left+=parseFloat(r(e[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||f.body;t&&!g.test(t.nodeName)&&"static"==r(t).css("position");)t=t.offsetParent;return t})}},r.fn.detach=r.fn.remove,["width","height"].forEach(function(t){var n=t.replace(/./,function(t){return t[0].toUpperCase()});r.fn[t]=function(i){var o,s=this[0];return i===e?k(s)?s["inner"+n]:M(s)?s.documentElement["scroll"+n]:(o=this.offset())&&o[t]:this.each(function(e){s=r(this),s.css(t,Y(this,i,e,s[t]()))})}}),x.forEach(function(n,i){var o=i%2;r.fn[n]=function(){var n,a,s=r.map(arguments,function(t){var i=[];return n=$(t),"array"==n?(t.forEach(function(t){return t.nodeType!==e?i.push(t):r.zepto.isZ(t)?i=i.concat(t.get()):void(i=i.concat(N.fragment(t)))}),i):"object"==n||null==t?t:N.fragment(t)}),u=this.length>1;return s.length<1?this:this.each(function(e,n){a=o?n:n.parentNode,n=0==i?n.nextSibling:1==i?n.firstChild:2==i?n:null;var c=r.contains(f.documentElement,a);s.forEach(function(e){if(u)e=e.cloneNode(!0);else if(!a)return r(e).remove();a.insertBefore(e,n),c&&tt(e,function(e){if(!(null==e.nodeName||"SCRIPT"!==e.nodeName.toUpperCase()||e.type&&"text/javascript"!==e.type||e.src)){var n=e.ownerDocument?e.ownerDocument.defaultView:t;n.eval.call(n,e.innerHTML)}})})})},r.fn[o?n+"To":"insert"+(i?"Before":"After")]=function(t){return r(t)[n](this),this}}),N.Z.prototype=X.prototype=r.fn,N.uniq=P,N.deserializeValue=Q,r.zepto=N,r}();return t.Zepto=e,void 0===t.$&&(t.$=e),function(e){function h(t){return t._zid||(t._zid=n++)}function p(t,e,n,r){if(e=d(e),e.ns)var i=m(e.ns);return(a[h(t)]||[]).filter(function(t){return t&&(!e.e||t.e==e.e)&&(!e.ns||i.test(t.ns))&&(!n||h(t.fn)===h(n))&&(!r||t.sel==r)})}function d(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function m(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function g(t,e){return t.del&&!f&&t.e in c||!!e}function v(t){return l[t]||f&&c[t]||t}function y(t,n,i,o,s,u,f){var c=h(t),p=a[c]||(a[c]=[]);n.split(/\s/).forEach(function(n){if("ready"==n)return e(document).ready(i);var a=d(n);a.fn=i,a.sel=s,a.e in l&&(i=function(t){var n=t.relatedTarget;return!n||n!==this&&!e.contains(this,n)?a.fn.apply(this,arguments):void 0}),a.del=u;var c=u||i;a.proxy=function(e){if(e=T(e),!e.isImmediatePropagationStopped()){e.data=o;var n=c.apply(t,e._args==r?[e]:[e].concat(e._args));return n===!1&&(e.preventDefault(),e.stopPropagation()),n}},a.i=p.length,p.push(a),"addEventListener"in t&&t.addEventListener(v(a.e),a.proxy,g(a,f))})}function x(t,e,n,r,i){var o=h(t);(e||"").split(/\s/).forEach(function(e){p(t,e,n,r).forEach(function(e){delete a[o][e.i],"removeEventListener"in t&&t.removeEventListener(v(e.e),e.proxy,g(e,i))})})}function T(t,n){return(n||!t.isDefaultPrevented)&&(n||(n=t),e.each(w,function(e,r){var i=n[e];t[e]=function(){return this[r]=b,i&&i.apply(n,arguments)},t[r]=E}),t.timeStamp||(t.timeStamp=Date.now()),(n.defaultPrevented!==r?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(t.isDefaultPrevented=b)),t}function S(t){var e,n={originalEvent:t};for(e in t)j.test(e)||t[e]===r||(n[e]=t[e]);return T(n,t)}var r,n=1,i=Array.prototype.slice,o=e.isFunction,s=function(t){return"string"==typeof t},a={},u={},f="onfocusin"in t,c={focus:"focusin",blur:"focusout"},l={mouseenter:"mouseover",mouseleave:"mouseout"};u.click=u.mousedown=u.mouseup=u.mousemove="MouseEvents",e.event={add:y,remove:x},e.proxy=function(t,n){var r=2 in arguments&&i.call(arguments,2);if(o(t)){var a=function(){return t.apply(n,r?r.concat(i.call(arguments)):arguments)};return a._zid=h(t),a}if(s(n))return r?(r.unshift(t[n],t),e.proxy.apply(null,r)):e.proxy(t[n],t);throw new TypeError("expected function")},e.fn.bind=function(t,e,n){return this.on(t,e,n)},e.fn.unbind=function(t,e){return this.off(t,e)},e.fn.one=function(t,e,n,r){return this.on(t,e,n,r,1)};var b=function(){return!0},E=function(){return!1},j=/^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,w={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};e.fn.delegate=function(t,e,n){return this.on(e,t,n)},e.fn.undelegate=function(t,e,n){return this.off(e,t,n)},e.fn.live=function(t,n){return e(document.body).delegate(this.selector,t,n),this},e.fn.die=function(t,n){return e(document.body).undelegate(this.selector,t,n),this},e.fn.on=function(t,n,a,u,f){var c,l,h=this;return t&&!s(t)?(e.each(t,function(t,e){h.on(t,n,a,e,f)}),h):(s(n)||o(u)||u===!1||(u=a,a=n,n=r),(u===r||a===!1)&&(u=a,a=r),u===!1&&(u=E),h.each(function(r,o){f&&(c=function(t){return x(o,t.type,u),u.apply(this,arguments)}),n&&(l=function(t){var r,s=e(t.target).closest(n,o).get(0);return s&&s!==o?(r=e.extend(S(t),{currentTarget:s,liveFired:o}),(c||u).apply(s,[r].concat(i.call(arguments,1)))):void 0}),y(o,t,u,a,n,l||c)}))},e.fn.off=function(t,n,i){var a=this;return t&&!s(t)?(e.each(t,function(t,e){a.off(t,n,e)}),a):(s(n)||o(i)||i===!1||(i=n,n=r),i===!1&&(i=E),a.each(function(){x(this,t,i,n)}))},e.fn.trigger=function(t,n){return t=s(t)||e.isPlainObject(t)?e.Event(t):T(t),t._args=n,this.each(function(){t.type in c&&"function"==typeof this[t.type]?this[t.type]():"dispatchEvent"in this?this.dispatchEvent(t):e(this).triggerHandler(t,n)})},e.fn.triggerHandler=function(t,n){var r,i;return this.each(function(o,a){r=S(s(t)?e.Event(t):t),r._args=n,r.target=a,e.each(p(a,t.type||t),function(t,e){return i=e.proxy(r),r.isImmediatePropagationStopped()?!1:void 0})}),i},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(t){e.fn[t]=function(e){return 0 in arguments?this.bind(t,e):this.trigger(t)}}),e.Event=function(t,e){s(t)||(e=t,t=e.type);var n=document.createEvent(u[t]||"Events"),r=!0;if(e)for(var i in e)"bubbles"==i?r=!!e[i]:n[i]=e[i];return n.initEvent(t,r,!0),T(n)}}(e),function(e){function p(t,n,r){var i=e.Event(n);return e(t).trigger(i,r),!i.isDefaultPrevented()}function d(t,e,n,i){return t.global?p(e||r,n,i):void 0}function m(t){t.global&&0===e.active++&&d(t,null,"ajaxStart")}function g(t){t.global&&!--e.active&&d(t,null,"ajaxStop")}function v(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||d(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void d(e,n,"ajaxSend",[t,e])}function y(t,e,n,r){var i=n.context,o="success";n.success.call(i,t,o,e),r&&r.resolveWith(i,[t,o,e]),d(n,i,"ajaxSuccess",[e,n,t]),b(o,e,n)}function x(t,e,n,r,i){var o=r.context;r.error.call(o,n,e,t),i&&i.rejectWith(o,[n,e,t]),d(r,o,"ajaxError",[n,r,t||e]),b(e,n,r)}function b(t,e,n){var r=n.context;n.complete.call(r,e,t),d(n,r,"ajaxComplete",[e,n]),g(n)}function E(t,e,n){if(n.dataFilter==j)return t;var r=n.context;return n.dataFilter.call(r,t,e)}function j(){}function w(t){return t&&(t=t.split(";",2)[0]),t&&(t==c?"html":t==f?"json":a.test(t)?"script":u.test(t)&&"xml")||"text"}function T(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function S(t){t.processData&&t.data&&"string"!=e.type(t.data)&&(t.data=e.param(t.data,t.traditional)),!t.data||t.type&&"GET"!=t.type.toUpperCase()&&"jsonp"!=t.dataType||(t.url=T(t.url,t.data),t.data=void 0)}function C(t,n,r,i){return e.isFunction(n)&&(i=r,r=n,n=void 0),e.isFunction(r)||(i=r,r=void 0),{url:t,data:n,success:r,dataType:i}}function O(t,n,r,i){var o,s=e.isArray(n),a=e.isPlainObject(n);e.each(n,function(n,u){o=e.type(u),i&&(n=r?i:i+"["+(a||"object"==o||"array"==o?n:"")+"]"),!i&&s?t.add(u.name,u.value):"array"==o||!r&&"object"==o?O(t,u,r,n):t.add(n,u)})}var i,o,n=+new Date,r=t.document,s=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,a=/^(?:text|application)\/javascript/i,u=/^(?:text|application)\/xml/i,f="application/json",c="text/html",l=/^\s*$/,h=r.createElement("a");h.href=t.location.href,e.active=0,e.ajaxJSONP=function(i,o){if(!("type"in i))return e.ajax(i);var c,p,s=i.jsonpCallback,a=(e.isFunction(s)?s():s)||"Zepto"+n++,u=r.createElement("script"),f=t[a],l=function(t){e(u).triggerHandler("error",t||"abort")},h={abort:l};return o&&o.promise(h),e(u).on("load error",function(n,r){clearTimeout(p),e(u).off().remove(),"error"!=n.type&&c?y(c[0],h,i,o):x(null,r||"error",h,i,o),t[a]=f,c&&e.isFunction(f)&&f(c[0]),f=c=void 0}),v(h,i)===!1?(l("abort"),h):(t[a]=function(){c=arguments},u.src=i.url.replace(/\?(.+)=\?/,"?$1="+a),r.head.appendChild(u),i.timeout>0&&(p=setTimeout(function(){l("timeout")},i.timeout)),h)},e.ajaxSettings={type:"GET",beforeSend:j,success:j,error:j,complete:j,context:null,global:!0,xhr:function(){return new t.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:f,xml:"application/xml, text/xml",html:c,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0,dataFilter:j},e.ajax=function(n){var u,f,s=e.extend({},n||{}),a=e.Deferred&&e.Deferred();for(i in e.ajaxSettings)void 0===s[i]&&(s[i]=e.ajaxSettings[i]);m(s),s.crossDomain||(u=r.createElement("a"),u.href=s.url,u.href=u.href,s.crossDomain=h.protocol+"//"+h.host!=u.protocol+"//"+u.host),s.url||(s.url=t.location.toString()),(f=s.url.indexOf("#"))>-1&&(s.url=s.url.slice(0,f)),S(s);var c=s.dataType,p=/\?.+=\?/.test(s.url);if(p&&(c="jsonp"),s.cache!==!1&&(n&&n.cache===!0||"script"!=c&&"jsonp"!=c)||(s.url=T(s.url,"_="+Date.now())),"jsonp"==c)return p||(s.url=T(s.url,s.jsonp?s.jsonp+"=?":s.jsonp===!1?"":"callback=?")),e.ajaxJSONP(s,a);var P,d=s.accepts[c],g={},b=function(t,e){g[t.toLowerCase()]=[t,e]},C=/^([\w-]+:)\/\//.test(s.url)?RegExp.$1:t.location.protocol,N=s.xhr(),O=N.setRequestHeader;if(a&&a.promise(N),s.crossDomain||b("X-Requested-With","XMLHttpRequest"),b("Accept",d||"*/*"),(d=s.mimeType||d)&&(d.indexOf(",")>-1&&(d=d.split(",",2)[0]),N.overrideMimeType&&N.overrideMimeType(d)),(s.contentType||s.contentType!==!1&&s.data&&"GET"!=s.type.toUpperCase())&&b("Content-Type",s.contentType||"application/x-www-form-urlencoded"),s.headers)for(o in s.headers)b(o,s.headers[o]);if(N.setRequestHeader=b,N.onreadystatechange=function(){if(4==N.readyState){N.onreadystatechange=j,clearTimeout(P);var t,n=!1;if(N.status>=200&&N.status<300||304==N.status||0==N.status&&"file:"==C){if(c=c||w(s.mimeType||N.getResponseHeader("content-type")),"arraybuffer"==N.responseType||"blob"==N.responseType)t=N.response;else{t=N.responseText;try{t=E(t,c,s),"script"==c?(1,eval)(t):"xml"==c?t=N.responseXML:"json"==c&&(t=l.test(t)?null:e.parseJSON(t))}catch(r){n=r}if(n)return x(n,"parsererror",N,s,a)}y(t,N,s,a)}else x(N.statusText||null,N.status?"error":"abort",N,s,a)}},v(N,s)===!1)return N.abort(),x(null,"abort",N,s,a),N;var A="async"in s?s.async:!0;if(N.open(s.type,s.url,A,s.username,s.password),s.xhrFields)for(o in s.xhrFields)N[o]=s.xhrFields[o];for(o in g)O.apply(N,g[o]);return s.timeout>0&&(P=setTimeout(function(){N.onreadystatechange=j,N.abort(),x(null,"timeout",N,s,a)},s.timeout)),N.send(s.data?s.data:null),N},e.get=function(){return e.ajax(C.apply(null,arguments))},e.post=function(){var t=C.apply(null,arguments);return t.type="POST",e.ajax(t)},e.getJSON=function(){var t=C.apply(null,arguments);return t.dataType="json",e.ajax(t)},e.fn.load=function(t,n,r){if(!this.length)return this;var a,i=this,o=t.split(/\s/),u=C(t,n,r),f=u.success;return o.length>1&&(u.url=o[0],a=o[1]),u.success=function(t){i.html(a?e("<div>").html(t.replace(s,"")).find(a):t),f&&f.apply(i,arguments)},e.ajax(u),this};var N=encodeURIComponent;e.param=function(t,n){var r=[];return r.add=function(t,n){e.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(N(t)+"="+N(n))},O(r,t,n),r.join("&").replace(/%20/g,"+")}}(e),function(t){t.fn.serializeArray=function(){var e,n,r=[],i=function(t){return t.forEach?t.forEach(i):void r.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(r,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&i(t(o).val())}),r},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(e),function(){try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;t.getComputedStyle=function(t,e){try{return n(t,e)}catch(r){return null}}}}(),e});

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


let dom = `
<div id="page">
    <div id="bg">
        <div id="bg-top"></div>
        <div id="bg-middle-block"></div>
        <div id="bg-bottom"></div>
    </div>
    <div id="content">
        <div class="name"><span id="nickname"></span> 想读 <span id="count">0</span>/148</div>
        <div class="book-block">
            <div class="left-book">

            </div>
            <div class="right-book">
   
            </div>
        </div>
    </div>
    <div id="tools">
        <div class="map-button">生成海报</div>
        <div class="likecount">0</div>
    </div>
    <img class="shareimg" src=""/>
</div>
`;

$('#root').html(dom);

//兼容
// $('#root').css({
//     "background-image":"url(https://piccdn.luojilab.com/fe-oss/default/MTU2OTI5MzYzNTE1.png)",
//     "min-height":"200px;"
// })

//构造书本
var bookCount = 144;
var leftBook = $('.left-book');
var rightBook = $('.right-book');
var lefthtml = '';
var righthtml = '';
var piccdnurl = 'https://piccdn.luojilab.com/fe-oss/default/'//piccdn域名

var chooseArray = []//哪些book被选中了填入这里边

//构造中部重复背景
var middlehtml = '';
for (var i=1; i<=(bookCount-4)/2; i++) {
    middlehtml += '<div class="bg-middle"></div>';
}
$('#bg-middle-block').html(middlehtml);
//构造书本dom
for (var i=1; i<=bookCount - 2; i++) {
    if( i % 2  === 1){
        lefthtml += `
        <div class="book" data-index="${i}">
            <div class="fm" id="${i}fm"></div>
            <div class="wz" id="wz${i}"></div>
            <div class="like${i} like hidden" id="like${i}"></div>
            <div class="nolike${i} nolike" id="nolike${i}"></div>
        </div>
        `;
    }else {
        righthtml += `
        <div class="book" data-index="${i}">
            <div class="fm" id="${i}fm"></div>
            <div class="wz" id="wz${i}"></div>
            <div class="like${i} like hidden" id="like${i}"></div>
            <div class="nolike${i} nolike" id="nolike${i}"></div>
        </div>
        `;
    }
}
//最后两本书
lefthtml += `
<div class="book" data-index="${bookCount - 1}">
    <div class="fm" id="${bookCount - 1}fm"></div>
    <div class="wz wzleftlast" id="wz${bookCount - 1}"></div>
    <div class="like${bookCount - 1} like hidden" id="like${bookCount - 1}"></div>
    <div class="nolike${bookCount - 1} nolike" id="nolike${bookCount - 1}"></div>
</div>
`;
righthtml += `
<div class="book" data-index="${bookCount}">
    <div class="fm" id="${bookCount}fm"></div>
    <div class="wz wzrightlast" id="wz${bookCount}"></div>
    <div class="like${bookCount} like hidden" id="like${bookCount}"></div>
    <div class="nolike${bookCount} nolike" id="nolike${bookCount}"></div>
</div>
`;

leftBook.append(lefthtml)
rightBook.append(righthtml)
//中部填充书本图片
for (var i=1; i<=bookCount; i++) {
    $('#'+i+'fm').css({
        "background-image":"url("+piccdnurl+i+"fm.jpg)",
    })
    $('#wz'+i).css({
        "background-image":"url("+piccdnurl+i+"wz.jpg)",
    })
}

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

//图片预加载
var el = document.createElement('div');   
el.innerHTML = '<img src="https://piccdn.luojilab.com/fe-oss/default/MTU4NDM1NzM0NDM3.png" /><img src="https://piccdn.luojilab.com/fe-oss/default/MTU4NDM1NzM0NDAw.png" />'; 

function pushPic(showqrcode = true){
    //需要一个二位数组，外层为一个个图，内层为位置和大小。
    //内层含义[0/1(选中/没选中)，'图片地址'，left，top，width，height]
  var posterArray= [
      [],
  ]
  var statusTop = 547;
  var statusLeft = 28;
  var picTop = 239.7;
  var picLeft =177.5;
  var layers = [{
    type: 'image',
    image: '',
    left: 0,
    top: 0,
    width: 750,
    height: 10677
  }];
  for(var i=1; i<=bookCount; i++){
    //计算位置
    //top 第几行
    var top = parseInt((i-1)/4)*picTop + statusTop;
    //左数第几个
    var left = parseInt((i-1)%4)*picLeft + statusLeft;
    var url = "https://piccdn.luojilab.com/fe-oss/default/MTU4NDM1NzM0NDM3.png"
    if( chooseArray.indexOf(i) >= 0){
        url = "https://piccdn.luojilab.com/fe-oss/default/MTU4NDM1NzM0NDAw.png"
    }
    // posterArray.push([url,left,top,16,232]);

    layers.push({
        type: 'image',
        image: 'https://piccdn.luojilab.com/fe-oss/default/'+i+'fm.jpg',
        left: left,
        top: top,
        width: 162,
        height: 232
    });  

    layers.push({
        type: 'image',
        image: url,
        left: left,
        top: top,
        width: 162,
        height: 232
    }); 
  }
console.log(layers);
  imagen({
    canvas: {
      width: 750,
      height: 10677,
      background: '#FF7E37',
      // linearGradient:[{
      //   color: '#FF596D',
      //   step: 0,
      // },{
      //   color: '#FC8718',
      //   step: 1,
      // }]
    },
    layers: layers
  }).then((base64) => {
    this.shareImg = base64;
    $('.shareimg').attr('src',this.shareImg);

    $('#content').hide();
    $('#bg').hide();
  })
}

//不同环境下公用的全局变量
var nickname = '';
var qrcodeUrl = '';





//启动后逻辑
$(function(){
    //加载完成
    init();
});
function init (){
    initContainer();//根据环境做一些差异化变更
    initEvent();
}
function initContainer () {//根据环境做差异化
    if(window.___datasourse___){
        container = window.___datasourse___.container; 

        if (container == "igetapp"){//app内

        } else if (container == "wechat") {//微信内
            nickname = window.__wxInfo.nickname;
            $('#nickname').html(nickname);
        }
    } 
    else {//git本地开发环境

    } 
}
function initEvent () {
    //点击生成海报。
    $('.map-button').click(function(){
        pushPic(false);
    });
    //点击添加小心心变动文字
    $('.book').click(function(e){
        changeLike(e);
    });
}
function changeLike (e) {
    //检查是否已经喜欢
    var index = parseInt(e.currentTarget.getAttribute('data-index'));//获取点击的是哪一本书
    if (chooseArray.indexOf(index) >= 0){//已喜欢，操作为取消
        chooseArray.splice(chooseArray.indexOf(index),1);//删除喜欢列表里的这个
    } else {//操作为喜欢
        chooseArray.push(index);
    }
    //重渲染全列表喜欢和不喜欢
    $('.like').hide();
    $('.nolike').show();
    for(var i = 0; i < chooseArray.length; i++){
        $('#like'+chooseArray[i]).show();
        $('#nolike'+chooseArray[i]).hide();
    }
    $('.likecount').html(chooseArray.length);    //更新悬浮窗数字
    $('#count').html(chooseArray.length);//更新顶部文字
}


