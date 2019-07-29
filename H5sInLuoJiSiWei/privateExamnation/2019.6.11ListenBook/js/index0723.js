/* Zepto v1.1.4 - zepto event ajax form ie - zeptojs.com/license */
var Zepto=function(){function L(t){return null==t?String(t):j[S.call(t)]||"object"}function Z(t){return"function"==L(t)}function $(t){return null!=t&&t==t.window}function _(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function D(t){return"object"==L(t)}function R(t){return D(t)&&!$(t)&&Object.getPrototypeOf(t)==Object.prototype}function M(t){return"number"==typeof t.length}function k(t){return s.call(t,function(t){return null!=t})}function z(t){return t.length>0?n.fn.concat.apply([],t):t}function F(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function q(t){return t in f?f[t]:f[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function H(t,e){return"number"!=typeof e||c[F(t)]?e:e+"px"}function I(t){var e,n;return u[t]||(e=a.createElement(t),a.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),u[t]=n),u[t]}function V(t){return"children"in t?o.call(t.children):n.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function B(n,i,r){for(e in i)r&&(R(i[e])||A(i[e]))?(R(i[e])&&!R(n[e])&&(n[e]={}),A(i[e])&&!A(n[e])&&(n[e]=[]),B(n[e],i[e],r)):i[e]!==t&&(n[e]=i[e])}function U(t,e){return null==e?n(t):n(t).filter(e)}function J(t,e,n,i){return Z(e)?e.call(t,n,i):e}function X(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function W(e,n){var i=e.className,r=i&&i.baseVal!==t;return n===t?r?i.baseVal:i:void(r?i.baseVal=n:e.className=n)}function Y(t){var e;try{return t?"true"==t||("false"==t?!1:"null"==t?null:/^0/.test(t)||isNaN(e=Number(t))?/^[\[\{]/.test(t)?n.parseJSON(t):t:e):t}catch(i){return t}}function G(t,e){e(t);for(var n=0,i=t.childNodes.length;i>n;n++)G(t.childNodes[n],e)}var t,e,n,i,C,N,r=[],o=r.slice,s=r.filter,a=window.document,u={},f={},c={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},l=/^\s*<(\w+|!)[^>]*>/,h=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,p=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,d=/^(?:body|html)$/i,m=/([A-Z])/g,g=["val","css","html","text","data","width","height","offset"],v=["after","prepend","before","append"],y=a.createElement("table"),x=a.createElement("tr"),b={tr:a.createElement("tbody"),tbody:y,thead:y,tfoot:y,td:x,th:x,"*":a.createElement("div")},w=/complete|loaded|interactive/,E=/^[\w-]*$/,j={},S=j.toString,T={},O=a.createElement("div"),P={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},A=Array.isArray||function(t){return t instanceof Array};return T.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=O).appendChild(t),i=~T.qsa(r,e).indexOf(t),o&&O.removeChild(t),i},C=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},N=function(t){return s.call(t,function(e,n){return t.indexOf(e)==n})},T.fragment=function(e,i,r){var s,u,f;return h.test(e)&&(s=n(a.createElement(RegExp.$1))),s||(e.replace&&(e=e.replace(p,"<$1></$2>")),i===t&&(i=l.test(e)&&RegExp.$1),i in b||(i="*"),f=b[i],f.innerHTML=""+e,s=n.each(o.call(f.childNodes),function(){f.removeChild(this)})),R(r)&&(u=n(s),n.each(r,function(t,e){g.indexOf(t)>-1?u[t](e):u.attr(t,e)})),s},T.Z=function(t,e){return t=t||[],t.__proto__=n.fn,t.selector=e||"",t},T.isZ=function(t){return t instanceof T.Z},T.init=function(e,i){var r;if(!e)return T.Z();if("string"==typeof e)if(e=e.trim(),"<"==e[0]&&l.test(e))r=T.fragment(e,RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=T.qsa(a,e)}else{if(Z(e))return n(a).ready(e);if(T.isZ(e))return e;if(A(e))r=k(e);else if(D(e))r=[e],e=null;else if(l.test(e))r=T.fragment(e.trim(),RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=T.qsa(a,e)}}return T.Z(r,e)},n=function(t,e){return T.init(t,e)},n.extend=function(t){var e,n=o.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){B(t,n,e)}),t},T.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],s=i||r?e.slice(1):e,a=E.test(s);return _(t)&&a&&i?(n=t.getElementById(s))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:o.call(a&&!i?r?t.getElementsByClassName(s):t.getElementsByTagName(e):t.querySelectorAll(e))},n.contains=a.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},n.type=L,n.isFunction=Z,n.isWindow=$,n.isArray=A,n.isPlainObject=R,n.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},n.inArray=function(t,e,n){return r.indexOf.call(e,t,n)},n.camelCase=C,n.trim=function(t){return null==t?"":String.prototype.trim.call(t)},n.uuid=0,n.support={},n.expr={},n.map=function(t,e){var n,r,o,i=[];if(M(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&i.push(n);else for(o in t)n=e(t[o],o),null!=n&&i.push(n);return z(i)},n.each=function(t,e){var n,i;if(M(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},n.grep=function(t,e){return s.call(t,e)},window.JSON&&(n.parseJSON=JSON.parse),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){j["[object "+e+"]"]=e.toLowerCase()}),n.fn={forEach:r.forEach,reduce:r.reduce,push:r.push,sort:r.sort,indexOf:r.indexOf,concat:r.concat,map:function(t){return n(n.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return n(o.apply(this,arguments))},ready:function(t){return w.test(a.readyState)&&a.body?t(n):a.addEventListener("DOMContentLoaded",function(){t(n)},!1),this},get:function(e){return e===t?o.call(this):this[e>=0?e:e+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return r.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return Z(t)?this.not(this.not(t)):n(s.call(this,function(e){return T.matches(e,t)}))},add:function(t,e){return n(N(this.concat(n(t,e))))},is:function(t){return this.length>0&&T.matches(this[0],t)},not:function(e){var i=[];if(Z(e)&&e.call!==t)this.each(function(t){e.call(this,t)||i.push(this)});else{var r="string"==typeof e?this.filter(e):M(e)&&Z(e.item)?o.call(e):n(e);this.forEach(function(t){r.indexOf(t)<0&&i.push(t)})}return n(i)},has:function(t){return this.filter(function(){return D(t)?n.contains(this,t):n(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!D(t)?t:n(t)},last:function(){var t=this[this.length-1];return t&&!D(t)?t:n(t)},find:function(t){var e,i=this;return e=t?"object"==typeof t?n(t).filter(function(){var t=this;return r.some.call(i,function(e){return n.contains(e,t)})}):1==this.length?n(T.qsa(this[0],t)):this.map(function(){return T.qsa(this,t)}):[]},closest:function(t,e){var i=this[0],r=!1;for("object"==typeof t&&(r=n(t));i&&!(r?r.indexOf(i)>=0:T.matches(i,t));)i=i!==e&&!_(i)&&i.parentNode;return n(i)},parents:function(t){for(var e=[],i=this;i.length>0;)i=n.map(i,function(t){return(t=t.parentNode)&&!_(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return U(e,t)},parent:function(t){return U(N(this.pluck("parentNode")),t)},children:function(t){return U(this.map(function(){return V(this)}),t)},contents:function(){return this.map(function(){return o.call(this.childNodes)})},siblings:function(t){return U(this.map(function(t,e){return s.call(V(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return n.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=I(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=Z(t);if(this[0]&&!e)var i=n(t).get(0),r=i.parentNode||this.length>1;return this.each(function(o){n(this).wrapAll(e?t.call(this,o):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){n(this[0]).before(t=n(t));for(var e;(e=t.children()).length;)t=e.first();n(t).append(this)}return this},wrapInner:function(t){var e=Z(t);return this.each(function(i){var r=n(this),o=r.contents(),s=e?t.call(this,i):t;o.length?o.wrapAll(s):r.append(s)})},unwrap:function(){return this.parent().each(function(){n(this).replaceWith(n(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var i=n(this);(e===t?"none"==i.css("display"):e)?i.show():i.hide()})},prev:function(t){return n(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return n(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var i=this.innerHTML;n(this).empty().append(J(this,t,e,i))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=J(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(n,i){var r;return"string"!=typeof n||1 in arguments?this.each(function(t){if(1===this.nodeType)if(D(n))for(e in n)X(this,e,n[e]);else X(this,n,J(this,i,t,this.getAttribute(n)))}):this.length&&1===this[0].nodeType?!(r=this[0].getAttribute(n))&&n in this[0]?this[0][n]:r:t},removeAttr:function(t){return this.each(function(){1===this.nodeType&&X(this,t)})},prop:function(t,e){return t=P[t]||t,1 in arguments?this.each(function(n){this[t]=J(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(e,n){var i="data-"+e.replace(m,"-$1").toLowerCase(),r=1 in arguments?this.attr(i,n):this.attr(i);return null!==r?Y(r):t},val:function(t){return 0 in arguments?this.each(function(e){this.value=J(this,t,e,this.value)}):this[0]&&(this[0].multiple?n(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var i=n(this),r=J(this,t,e,i.offset()),o=i.offsetParent().offset(),s={top:r.top-o.top,left:r.left-o.left};"static"==i.css("position")&&(s.position="relative"),i.css(s)});if(!this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(t,i){if(arguments.length<2){var r=this[0],o=getComputedStyle(r,"");if(!r)return;if("string"==typeof t)return r.style[C(t)]||o.getPropertyValue(t);if(A(t)){var s={};return n.each(A(t)?t:[t],function(t,e){s[e]=r.style[C(e)]||o.getPropertyValue(e)}),s}}var a="";if("string"==L(t))i||0===i?a=F(t)+":"+H(t,i):this.each(function(){this.style.removeProperty(F(t))});else for(e in t)t[e]||0===t[e]?a+=F(e)+":"+H(e,t[e])+";":this.each(function(){this.style.removeProperty(F(e))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(n(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?r.some.call(this,function(t){return this.test(W(t))},q(t)):!1},addClass:function(t){return t?this.each(function(e){i=[];var r=W(this),o=J(this,t,e,r);o.split(/\s+/g).forEach(function(t){n(this).hasClass(t)||i.push(t)},this),i.length&&W(this,r+(r?" ":"")+i.join(" "))}):this},removeClass:function(e){return this.each(function(n){return e===t?W(this,""):(i=W(this),J(this,e,n,i).split(/\s+/g).forEach(function(t){i=i.replace(q(t)," ")}),void W(this,i.trim()))})},toggleClass:function(e,i){return e?this.each(function(r){var o=n(this),s=J(this,e,r,W(this));s.split(/\s+/g).forEach(function(e){(i===t?!o.hasClass(e):i)?o.addClass(e):o.removeClass(e)})}):this},scrollTop:function(e){if(this.length){var n="scrollTop"in this[0];return e===t?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=e}:function(){this.scrollTo(this.scrollX,e)})}},scrollLeft:function(e){if(this.length){var n="scrollLeft"in this[0];return e===t?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=e}:function(){this.scrollTo(e,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),i=this.offset(),r=d.test(e[0].nodeName)?{top:0,left:0}:e.offset();return i.top-=parseFloat(n(t).css("margin-top"))||0,i.left-=parseFloat(n(t).css("margin-left"))||0,r.top+=parseFloat(n(e[0]).css("border-top-width"))||0,r.left+=parseFloat(n(e[0]).css("border-left-width"))||0,{top:i.top-r.top,left:i.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||a.body;t&&!d.test(t.nodeName)&&"static"==n(t).css("position");)t=t.offsetParent;return t})}},n.fn.detach=n.fn.remove,["width","height"].forEach(function(e){var i=e.replace(/./,function(t){return t[0].toUpperCase()});n.fn[e]=function(r){var o,s=this[0];return r===t?$(s)?s["inner"+i]:_(s)?s.documentElement["scroll"+i]:(o=this.offset())&&o[e]:this.each(function(t){s=n(this),s.css(e,J(this,r,t,s[e]()))})}}),v.forEach(function(t,e){var i=e%2;n.fn[t]=function(){var t,o,r=n.map(arguments,function(e){return t=L(e),"object"==t||"array"==t||null==e?e:T.fragment(e)}),s=this.length>1;return r.length<1?this:this.each(function(t,u){o=i?u:u.parentNode,u=0==e?u.nextSibling:1==e?u.firstChild:2==e?u:null;var f=n.contains(a.documentElement,o);r.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!o)return n(t).remove();o.insertBefore(t,u),f&&G(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},n.fn[i?t+"To":"insert"+(e?"Before":"After")]=function(e){return n(e)[t](this),this}}),T.Z.prototype=n.fn,T.uniq=N,T.deserializeValue=Y,n.zepto=T,n}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function l(t){return t._zid||(t._zid=e++)}function h(t,e,n,i){if(e=p(e),e.ns)var r=d(e.ns);return(s[l(t)]||[]).filter(function(t){return!(!t||e.e&&t.e!=e.e||e.ns&&!r.test(t.ns)||n&&l(t.fn)!==l(n)||i&&t.sel!=i)})}function p(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function d(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function m(t,e){return t.del&&!u&&t.e in f||!!e}function g(t){return c[t]||u&&f[t]||t}function v(e,i,r,o,a,u,f){var h=l(e),d=s[h]||(s[h]=[]);i.split(/\s/).forEach(function(i){if("ready"==i)return t(document).ready(r);var s=p(i);s.fn=r,s.sel=a,s.e in c&&(r=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?s.fn.apply(this,arguments):void 0}),s.del=u;var l=u||r;s.proxy=function(t){if(t=j(t),!t.isImmediatePropagationStopped()){t.data=o;var i=l.apply(e,t._args==n?[t]:[t].concat(t._args));return i===!1&&(t.preventDefault(),t.stopPropagation()),i}},s.i=d.length,d.push(s),"addEventListener"in e&&e.addEventListener(g(s.e),s.proxy,m(s,f))})}function y(t,e,n,i,r){var o=l(t);(e||"").split(/\s/).forEach(function(e){h(t,e,n,i).forEach(function(e){delete s[o][e.i],"removeEventListener"in t&&t.removeEventListener(g(e.e),e.proxy,m(e,r))})})}function j(e,i){return(i||!e.isDefaultPrevented)&&(i||(i=e),t.each(E,function(t,n){var r=i[t];e[t]=function(){return this[n]=x,r&&r.apply(i,arguments)},e[n]=b}),(i.defaultPrevented!==n?i.defaultPrevented:"returnValue"in i?i.returnValue===!1:i.getPreventDefault&&i.getPreventDefault())&&(e.isDefaultPrevented=x)),e}function S(t){var e,i={originalEvent:t};for(e in t)w.test(e)||t[e]===n||(i[e]=t[e]);return j(i,t)}var n,e=1,i=Array.prototype.slice,r=t.isFunction,o=function(t){return"string"==typeof t},s={},a={},u="onfocusin"in window,f={focus:"focusin",blur:"focusout"},c={mouseenter:"mouseover",mouseleave:"mouseout"};a.click=a.mousedown=a.mouseup=a.mousemove="MouseEvents",t.event={add:v,remove:y},t.proxy=function(e,n){var s=2 in arguments&&i.call(arguments,2);if(r(e)){var a=function(){return e.apply(n,s?s.concat(i.call(arguments)):arguments)};return a._zid=l(e),a}if(o(n))return s?(s.unshift(e[n],e),t.proxy.apply(null,s)):t.proxy(e[n],e);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var x=function(){return!0},b=function(){return!1},w=/^([A-Z]|returnValue$|layer[XY]$)/,E={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,s,a,u,f){var c,l,h=this;return e&&!o(e)?(t.each(e,function(t,e){h.on(t,s,a,e,f)}),h):(o(s)||r(u)||u===!1||(u=a,a=s,s=n),(r(a)||a===!1)&&(u=a,a=n),u===!1&&(u=b),h.each(function(n,r){f&&(c=function(t){return y(r,t.type,u),u.apply(this,arguments)}),s&&(l=function(e){var n,o=t(e.target).closest(s,r).get(0);return o&&o!==r?(n=t.extend(S(e),{currentTarget:o,liveFired:r}),(c||u).apply(o,[n].concat(i.call(arguments,1)))):void 0}),v(r,e,u,a,s,l||c)}))},t.fn.off=function(e,i,s){var a=this;return e&&!o(e)?(t.each(e,function(t,e){a.off(t,i,e)}),a):(o(i)||r(s)||s===!1||(s=i,i=n),s===!1&&(s=b),a.each(function(){y(this,e,s,i)}))},t.fn.trigger=function(e,n){return e=o(e)||t.isPlainObject(e)?t.Event(e):j(e),e._args=n,this.each(function(){"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,n){var i,r;return this.each(function(s,a){i=S(o(e)?t.Event(e):e),i._args=n,i.target=a,t.each(h(a,e.type||e),function(t,e){return r=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),r},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.trigger(e)}}),["focus","blur"].forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.each(function(){try{this[e]()}catch(t){}}),this}}),t.Event=function(t,e){o(t)||(e=t,t=e.type);var n=document.createEvent(a[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),j(n)}}(Zepto),function(t){function l(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function h(t,e,i,r){return t.global?l(e||n,i,r):void 0}function p(e){e.global&&0===t.active++&&h(e,null,"ajaxStart")}function d(e){e.global&&!--t.active&&h(e,null,"ajaxStop")}function m(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||h(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void h(e,n,"ajaxSend",[t,e])}function g(t,e,n,i){var r=n.context,o="success";n.success.call(r,t,o,e),i&&i.resolveWith(r,[t,o,e]),h(n,r,"ajaxSuccess",[e,n,t]),y(o,e,n)}function v(t,e,n,i,r){var o=i.context;i.error.call(o,n,e,t),r&&r.rejectWith(o,[n,e,t]),h(i,o,"ajaxError",[n,i,t||e]),y(e,n,i)}function y(t,e,n){var i=n.context;n.complete.call(i,e,t),h(n,i,"ajaxComplete",[e,n]),d(n)}function x(){}function b(t){return t&&(t=t.split(";",2)[0]),t&&(t==f?"html":t==u?"json":s.test(t)?"script":a.test(t)&&"xml")||"text"}function w(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function E(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=w(e.url,e.data),e.data=void 0)}function j(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function T(e,n,i,r){var o,s=t.isArray(n),a=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),r&&(n=i?r:r+"["+(a||"object"==o||"array"==o?n:"")+"]"),!r&&s?e.add(u.name,u.value):"array"==o||!i&&"object"==o?T(e,u,i,n):e.add(n,u)})}var i,r,e=0,n=window.document,o=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,s=/^(?:text|application)\/javascript/i,a=/^(?:text|application)\/xml/i,u="application/json",f="text/html",c=/^\s*$/;t.active=0,t.ajaxJSONP=function(i,r){if(!("type"in i))return t.ajax(i);var f,h,o=i.jsonpCallback,s=(t.isFunction(o)?o():o)||"jsonp"+ ++e,a=n.createElement("script"),u=window[s],c=function(e){t(a).triggerHandler("error",e||"abort")},l={abort:c};return r&&r.promise(l),t(a).on("load error",function(e,n){clearTimeout(h),t(a).off().remove(),"error"!=e.type&&f?g(f[0],l,i,r):v(null,n||"error",l,i,r),window[s]=u,f&&t.isFunction(u)&&u(f[0]),u=f=void 0}),m(l,i)===!1?(c("abort"),l):(window[s]=function(){f=arguments},a.src=i.url.replace(/\?(.+)=\?/,"?$1="+s),n.head.appendChild(a),i.timeout>0&&(h=setTimeout(function(){c("timeout")},i.timeout)),l)},t.ajaxSettings={type:"GET",beforeSend:x,success:x,error:x,complete:x,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:u,xml:"application/xml, text/xml",html:f,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n=t.extend({},e||{}),o=t.Deferred&&t.Deferred();for(i in t.ajaxSettings)void 0===n[i]&&(n[i]=t.ajaxSettings[i]);p(n),n.crossDomain||(n.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(n.url)&&RegExp.$2!=window.location.host),n.url||(n.url=window.location.toString()),E(n);var s=n.dataType,a=/\?.+=\?/.test(n.url);if(a&&(s="jsonp"),n.cache!==!1&&(e&&e.cache===!0||"script"!=s&&"jsonp"!=s)||(n.url=w(n.url,"_="+Date.now())),"jsonp"==s)return a||(n.url=w(n.url,n.jsonp?n.jsonp+"=?":n.jsonp===!1?"":"callback=?")),t.ajaxJSONP(n,o);var j,u=n.accepts[s],f={},l=function(t,e){f[t.toLowerCase()]=[t,e]},h=/^([\w-]+:)\/\//.test(n.url)?RegExp.$1:window.location.protocol,d=n.xhr(),y=d.setRequestHeader;if(o&&o.promise(d),n.crossDomain||l("X-Requested-With","XMLHttpRequest"),l("Accept",u||"*/*"),(u=n.mimeType||u)&&(u.indexOf(",")>-1&&(u=u.split(",",2)[0]),d.overrideMimeType&&d.overrideMimeType(u)),(n.contentType||n.contentType!==!1&&n.data&&"GET"!=n.type.toUpperCase())&&l("Content-Type",n.contentType||"application/x-www-form-urlencoded"),n.headers)for(r in n.headers)l(r,n.headers[r]);if(d.setRequestHeader=l,d.onreadystatechange=function(){if(4==d.readyState){d.onreadystatechange=x,clearTimeout(j);var e,i=!1;if(d.status>=200&&d.status<300||304==d.status||0==d.status&&"file:"==h){s=s||b(n.mimeType||d.getResponseHeader("content-type")),e=d.responseText;try{"script"==s?(1,eval)(e):"xml"==s?e=d.responseXML:"json"==s&&(e=c.test(e)?null:t.parseJSON(e))}catch(r){i=r}i?v(i,"parsererror",d,n,o):g(e,d,n,o)}else v(d.statusText||null,d.status?"error":"abort",d,n,o)}},m(d,n)===!1)return d.abort(),v(null,"abort",d,n,o),d;if(n.xhrFields)for(r in n.xhrFields)d[r]=n.xhrFields[r];var S="async"in n?n.async:!0;d.open(n.type,n.url,S,n.username,n.password);for(r in f)y.apply(d,f[r]);return n.timeout>0&&(j=setTimeout(function(){d.onreadystatechange=x,d.abort(),v(null,"timeout",d,n,o)},n.timeout)),d.send(n.data?n.data:null),d},t.get=function(){return t.ajax(j.apply(null,arguments))},t.post=function(){var e=j.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=j.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var a,r=this,s=e.split(/\s/),u=j(e,n,i),f=u.success;return s.length>1&&(u.url=s[0],a=s[1]),u.success=function(e){r.html(a?t("<div>").html(e.replace(o,"")).find(a):e),f&&f.apply(r,arguments)},t.ajax(u),this};var S=encodeURIComponent;t.param=function(t,e){var n=[];return n.add=function(t,e){this.push(S(t)+"="+S(e))},T(n,t,e),n.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var n,e=[];return t([].slice.call(this.get(0).elements)).each(function(){n=t(this);var i=n.attr("type");"fieldset"!=this.nodeName.toLowerCase()&&!this.disabled&&"submit"!=i&&"reset"!=i&&"button"!=i&&("radio"!=i&&"checkbox"!=i||this.checked)&&e.push({name:n.attr("name"),value:n.val()})}),e},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(e)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(Zepto);

var imgData={
	logo:[
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/load/logo.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/load/logo2.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/load/logo3.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/load/doorin.png"
	],
	logoIco:[
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/load/loadIco1.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/load/loadIco2.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/load/loadIco3.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/load/loadIco4.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/load/loadIco5.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/load/loadIco6.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/load/loadIco7.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/load/loadIco8.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/load/loadIco9.png"
	],
	cloud:[
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/bg0723/cloud1.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/bg0723/cloud2.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/bg0723/cloud3.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/bg0723/cloud01.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/bg0723/cloud02.png",
	],
	pageBg:["https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/bg0723/bg.jpg"],
	bg:[
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/bg0723/131729346184978349_01.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/bg0723/131729346184978349_02.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/bg0723/131729346184978349_03.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/bg0723/131729346184978349_04.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/bg0723/131729346184978349_05.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/bg0723/131729346184978349_06.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/bg0723/131729346184978349_07.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/bg0723/131729346184978349_08.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/bg0723/131729346184978349_09.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/bg0723/131729346184978349_10.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/bg0723/131729346184978349_11.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/bg0723/131729346184978349_12.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/bg0723/131729346184978349_13.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/bg0723/131729346184978349_14.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/bg0723/131729346184978349_15.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/bg0723/131729346184978349_16.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/bg0723/131729346184978349_17.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/bg0723/131729346184978349_18.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/bg0723/131729346184978349_19.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/bg0723/131729346184978349_20.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/bg0723/131729346184978349_21.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/bg0723/131729346184978349_22.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/bg0723/131729346184978349_23.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/bg0723/131729346184978349_24.png",
	],
	pano:[
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/pano0723/book1-1.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/pano0723/book2-1.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/pano0723/book2-2.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/pano0723/book9-1.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/pano0723/book9-2.png",
		// "pano/p8-3.png",
		// "pano/p8-4.png",
		// "pano/p8-5.png",
		// "pano/p8-6.png",
	],
	big:[
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/pano0723/machine.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/pano0723/machine2.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/pano0723/machine3.png",
	],
	panosClick:[
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/pano0723/jiahangjia.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/pano0723/lijun.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/pano0723/liuwei.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/pano0723/huanglining1.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/pano0723/haunglining2.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/pano0723/haungliningmingpai.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/pano0723/liuweimingpai.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/pano0723/zhuwei1.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/pano0723/zhuwei2.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/pano0723/caoxingyuan1.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/pano0723/caoxingyuan2.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/pano0723/linannan.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/pano0723/hongbaohe1-1.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/pano0723/hongbaohe1-2.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/pano0723/shehuiyujingji.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/pano0723/anzhishi1.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/pano0723/anzhishi2.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/pano0723/chengshi1.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/pano0723/chengshi2.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/pano0723/shiwenhuojinchensilu.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/pano0723/meiguoxianjing1.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/pano0723/meiguoxianjing2.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/pano0723/bianhengqin.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/pano0723/dasheji.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/pano0723/zhaizizhongguo.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/pano0723/jinhuidui.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/pano0723/xugoudeyoutaiminzu1.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/pano0723/xugoudeyoutaiminzu2.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/pano0723/xiaoshuodeyishu1.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/pano0723/xiaoshuodeyishu2.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/pano0723/liuxuan.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/pano0723/tingshutieshi1.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/pano0723/tingshutieshi2.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/pano0723/shujialidehongbao.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/pano0723/yonghu1.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/pano0723/yonghu2.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/pano0723/hongbaohe2.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/pano0723/yonghu3.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/pano0723/tingshushujubang1.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/pano0723/tingshushujubang2.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/pano0723/ditu1.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/pano0723/ditu2.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/pano0723/ditu3.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/pano0723/saodiseng.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/pano0723/beisu.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/pano0723/yonghu4.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/pano0723/hongbaohe3.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/pano0723/yanglei.png",
	"https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/pano0723/ashi.png",
	],
	window:[
		// "https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/getmoney.png",
		// "https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/jiahangjia.png",
		// "https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/lijun.png",
		// "https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/liuwei.png",
		// "https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/huanglining1.png",
		// "https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/haunglining2.png",
		// "https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/haungliningmingpai.png",
		// "https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/liuweimingpai.png",
		// "https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/zhuwei1.png",
		// "https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/caoxingyuan1.png",
		// "https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/caoxingyuan2.png",
		// "https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/linannan.png",
		// "https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/hongbaohe1-1.png",
		// "https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/hongbaohe1-2.png",
		// "https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/shehuiyujingji.png",
		// "https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/anzhishi1.png",
		// "https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/anzhishi2.png",
		// "https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/chengshi1.png",
		// "https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/chengshi2.png",
		// "https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/shiwenhuojinchensilu.png",
		// "https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/meiguoxianjing1.png",
		// "https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/meiguoxianjing2.png",
		// "https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/bianhengqin.png",
		// "https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/dasheji.png",
		// "https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/zhaizizhongguo.png",
		// "https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/jinhuidui.png",
		// "https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/xugoudeyoutaiminzu1.png",
		// "https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/xugoudeyoutaiminzu2.png",
		// "https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/xiaoshuodeyishu1.png",
		// "https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/xiaoshuodeyishu2.png",
		// "https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/liuxuan.png",
		// "https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/tingshutieshi1.png",
		// "https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/tingshutieshi2.png",
		// "https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/shujialidehongbao.png",
		// "https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/yonghu1.png",
		// "https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/yonghu2.png",
		// "https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/hongbaohe2.png",
		// "https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/yonghu3.png",
		// "https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/tingshushujubang1.png",
		// "https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/tingshushujubang2.png",
		// "https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/ditu1.png",
		// "https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/ditu2.png",
		// "https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/ditu3.png",
		// "https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/saodiseng.png",
		// "https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/beisu.png",
		// "https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/yonghu4.png",
		// "https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/hongbaohe3.png",
		// "https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/yanglei.png",
		// "https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/ashi.png",
	]
};;

var Tween={linear:function(e,a,g,f){return g*e/f+a},easeIn:function(e,a,g,f){return g*(e/=f)*e+a},easeOut:function(e,a,g,f){return -g*(e/=f)*(e-2)+a},easeBoth:function(e,a,g,f){if((e/=f/2)<1){return g/2*e*e+a}return -g/2*((--e)*(e-2)-1)+a},easeInStrong:function(e,a,g,f){return g*(e/=f)*e*e*e+a},easeOutStrong:function(e,a,g,f){return -g*((e=e/f-1)*e*e*e-1)+a},easeBothStrong:function(e,a,g,f){if((e/=f/2)<1){return g/2*e*e*e*e+a}return -g/2*((e-=2)*e*e*e-2)+a},elasticIn:function(g,e,k,j,f,i){if(g===0){return e}if((g/=j)==1){return e+k}if(!i){i=j*0.3}if(!f||f<Math.abs(k)){f=k;var h=i/4}else{var h=i/(2*Math.PI)*Math.asin(k/f)}return -(f*Math.pow(2,10*(g-=1))*Math.sin((g*j-h)*(2*Math.PI)/i))+e},elasticOut:function(g,e,k,j,f,i){if(g===0){return e}if((g/=j)==1){return e+k}if(!i){i=j*0.3}if(!f||f<Math.abs(k)){f=k;var h=i/4}else{var h=i/(2*Math.PI)*Math.asin(k/f)}return f*Math.pow(2,-10*g)*Math.sin((g*j-h)*(2*Math.PI)/i)+k+e},elasticBoth:function(g,e,k,j,f,i){if(g===0){return e}if((g/=j/2)==2){return e+k}if(!i){i=j*(0.3*1.5)}if(!f||f<Math.abs(k)){f=k;var h=i/4}else{var h=i/(2*Math.PI)*Math.asin(k/f)}if(g<1){return -0.5*(f*Math.pow(2,10*(g-=1))*Math.sin((g*j-h)*(2*Math.PI)/i))+e}return f*Math.pow(2,-10*(g-=1))*Math.sin((g*j-h)*(2*Math.PI)/i)*0.5+k+e},backIn:function(e,a,h,g,f){if(typeof f=="undefined"){f=1.70158}return h*(e/=g)*e*((f+1)*e-f)+a},backOut:function(e,a,h,g,f){if(typeof f=="undefined"){f=2.70158}return h*((e=e/g-1)*e*((f+1)*e+f)+1)+a},backBoth:function(e,a,h,g,f){if(typeof f=="undefined"){f=1.70158}if((e/=g/2)<1){return h/2*(e*e*(((f*=(1.525))+1)*e-f))+a}return h/2*((e-=2)*e*(((f*=(1.525))+1)*e+f)+2)+a},bounceIn:function(e,a,g,f){return g-Tween.bounceOut(f-e,0,g,f)+a},bounceOut:function(e,a,g,f){if((e/=f)<(1/2.75)){return g*(7.5625*e*e)+a}else{if(e<(2/2.75)){return g*(7.5625*(e-=(1.5/2.75))*e+0.75)+a}else{if(e<(2.5/2.75)){return g*(7.5625*(e-=(2.25/2.75))*e+0.9375)+a}}}return g*(7.5625*(e-=(2.625/2.75))*e+0.984375)+a},bounceBoth:function(e,a,g,f){if(e<f/2){return Tween.bounceIn(e*2,0,g,f)*0.5+a}return Tween.bounceOut(e*2-f,0,g,f)*0.5+g*0.5+a}};function cssTransform(c,a,e){if(!c.transform){c.transform={}}if(typeof e=="undefined"){if(typeof c.transform[a]=="undefined"){switch(a){case"scale":case"scaleX":case"scaleY":c.transform[a]=100;break;default:c.transform[a]=0}}return c.transform[a]}else{var d="";c.transform[a]=Number(e);for(var b in c.transform){switch(b){case"rotate":case"rotateX":case"rotateY":case"rotateZ":case"skewX":case"skewY":d+=" "+b+"("+c.transform[b]+"deg)";break;case"translateX":case"translateY":case"translateZ":d+=" "+b+"("+c.transform[b]+"px)";break;case"scale":case"scaleX":case"scaleY":d+=" "+b+"("+c.transform[b]/100+")";break}}c.style.WebkitTransform=c.style.transform=d}}function css(b,a,c){if(a=="rotate"||a=="rotateX"||a=="rotateY"||a=="rotateZ"||a=="scale"||a=="scaleX"||a=="scaleY"||a=="skewX"||a=="skewY"||a=="translateX"||a=="translateY"||a=="translateZ"){return cssTransform(b,a,c)}if(arguments.length==2){var c=getComputedStyle(b)[a];if(a=="opacity"){c=Math.round(c*100)}return parseFloat(c)}if(a=="opacity"){b.style.opacity=c/100}else{b.style[a]=c+"px"}}function MTween(h){var e=0;var a={};var i={};var g=h.time/20;for(var f in h.target){a[f]=css(h.el,f);i[f]=h.target[f]-a[f]}clearInterval(h.el.timer);h.el.timer=setInterval(function(){e++;if(e>g){clearInterval(h.el.timer);h.callBack&&h.callBack.call(h.el)}else{h.callIn&&h.callIn.call(h.el);for(var b in a){var c=(Tween[h.type](e,a[b],i[b],g)).toFixed(2);css(h.el,b,c)}}},20)};

//填充dom
var dom = `
<div id="pageBg"></div>
<div id="wrapper"></div>
<div id="view">
	<div id="logo1">
    <div class="logoImg" id="bgdoor">
			<img src="https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/load/logo.png">
    </div>
    <div class="goMarkImg">
      <img src="https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/others/gomark.png">
    </div>
    <p class="logoText">已加载 0%</p>
	</div>
	<div id="main">
		<div id="tZ">
			<div id="panoBg"></div>
			<div id="cloud"></div>
			<div id="pano"></div>
		</div>
  </div>
</div>
<div id="go" class="hidden" style="width: 20%;position: absolute;bottom: 5%;right: 15%;text-align: center;height: 20%;"> 
	<img id="goImg" class= "mcclick" src="https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/load/go.png" style="height: 100%;margin: auto;"/>
</div>
<div id="window" class="hidden"style="width: 100%;position: absolute;top: 0;left: 0;text-align: center;height: 100%;background-color: rgba(0,0,0,0.7);">
    <div style="width: 90%;min-height: 100px;position: absolute;top: 5%;left: 5%;text-align: center;height: 80%;"> 
        <div class="hidden" id="info">
            <img id="avatar"></img>
            <div id="nick"></div>
            <div id="getButton"></div>
        </div>
        <div class="hidden" id="rules">
            <div class="goapp"></div>
        </div>
        <img id="windowImg" src="" style="height: 100%;margin: auto;"/>
    </div>
    <img id="close" src="https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/others/close.png" style="width: 50px;margin: auto;height: 50px;bottom: 3%;position: absolute;margin-left: -25px;"/>
</div>`;

$('#root').html(dom);


(function() {//loading完搞入口函数
  setLoading()//初始化loading动画
  setPerc()//初始化图像动画
})()

/*
  根据当前屏幕的大小，来计算景深
  1.固定视野的角度大小，根据这个角度的大小，计算出景深
  2. 保持我和景物之间的距离不变
*/
function setPerc() {
  resteview()//重置视区？
  window.onresize = resteview

  function resteview() {
    var view = document.querySelector('#view')
    var main = document.querySelector('#main')
    var deg = 52.5
    var height = document.documentElement.clientHeight;
    var R = Math.round(Math.tan(deg / 180 * Math.PI) * height * .5);
    view.style.WebkitPerspective = view.style.perspective = R + "px";
    css(main, 'translateZ', R)
  }
}
/* 根据屏幕大小 计算景深 */
function setLoading() {//该函数用来刷家在进度百分比条。
  var logoText = document.querySelector('.logoText');//已加载1%。。。
  var data = [];//数据数组
  var nub = 0;//当前加载数
  for (var s in imgData) {//imgData，所有的图片数组
    data = data.concat(imgData[s]);//concat，数组链接。 把img的数据模块挨个放在data数组。二维数组变一维数组。
  }
  for (var i = 0; i < data.length; i++) {
    var img = new Image();
    img.src = data[i];//预加载图片
    img.onload = function() {
      nub++;
      logoText.innerHTML = "已加载 " + (Math.floor(nub / data.length * 100)) + "%";//按照图片张数显示
      if (nub == data.length) {
        //图片加载完成之后，要做的事情
        document.getElementById('wrapper').style.opacity = 0;
        anmt();
      }
    };
  }
}

function anmt() {//百分比和首屏logo动画
  var view = document.querySelector('#view')//全景容器
  var logo1 = document.querySelector('#logo1')//该元素包含百分比和加载logo
  var bgdoor = document.querySelector('#bgdoor')
  MTween({
    el: bgdoor,//目标元素
    target: {
      opacity: 40,//最终态为透明
      scale: 450
    },
    time: 2000,//转态时间
    // type: 'easeBoth',
    type: 'easeOut',//
    callBack: function() {
      view.removeChild(logo1)
      anmt5();
    }
  })
}
function anmt5() {
  var tZ = document.querySelector('#tZ')//卷轴 + 图标 + 云朵容器
  css(tZ, 'translateZ', -2000)//开始状态，启动点在远处
  anmt6() // 主体
    anmt7() // 云朵
  createPano() // 图标层
  createBigClick();//点击响应层。
  MTween({//主体的前后向动画
    el: tZ,
    target: {
      translateZ: -100//主体往前挪至想要位置
    },
    time: 3600,//持续时间。
    type: 'easeBoth',
    callBack: function() {
    }
  })
}

function anmt6() {//卷轴动画
  var panoBg = document.querySelector('#panoBg');//背景图容器
  var width = 129 // 一张图片宽度
  var deg = 360 / imgData.bg.length // 圆柱图片角度
  //24片竹片情况下每片夹角为15度 deg = 15
  var R = parseInt(Math.tan((180 - deg) / 2 * Math.PI / 180) * (width / 2) - 1) // tan@ = 对边(R) / 临边(W/2)  R为景深，相机对正对面的边的最近距离-1
  //景深 R = 488
  var startDeg = 180;//从哪个角度开始填充第一个竹片
  css(panoBg, 'rotateX', 0)
  css(panoBg, 'rotateY', -765)//起始点设置，设定跑到眼前转动多少量的角度
  for (var i = 0; i < imgData.bg.length; i++) {//向元素中添加竹片
    var span = document.createElement("span");//新建竹片
    css(span, 'rotateY', startDeg)//竹片偏转角度
    css(span, 'translateZ', -R)//竹片景深
    span.style.backgroundImage = "url(" + imgData.bg[i] + ")";//竹片填充纹理
    span.style.display = "none";//竹片开始不可见
    panoBg.appendChild(span);//竹片加入背景图容器
    startDeg -= deg//下一个偏转角减去
  }
  var num = 0
  var timer = setInterval(function() {//设置竹片一个个出现
    panoBg.children[num].style.display = "block";
    num++
    if (num >= panoBg.children.length) {
      clearInterval(timer)
    }
  }, 3600 / 2 / imgData.bg.length)//持续时间的一半时间加载总片数
  MTween({//主体的旋转向动画
    el: panoBg,
    target: {
      rotateY: -160 // 通过设定角度设定首屏的位置。
    },
    time: 3600,//持续时间，可以考虑和前后向动画一致
    type: 'linear',
    callBack: function() {
      setDarg()//初始化拖拽逻辑
      setTimeout(function() {
        // setSensors()//初始化陀螺仪。
      }, 1000)
    }
  })
}

function anmt7() {
  var cloud = document.querySelector('#cloud');//云朵容器
  var cloudcount = 9;//云朵数量
  css(cloud, 'translateZ', -400)//初始远处
  for (var i = 0; i < cloudcount; i++) {//添加进去
    var span = document.createElement("span");
    span.style.backgroundImage = 'url(' + imgData.cloud[i % 3] + ')';
    var R = 200 + (Math.random() * 150)
    var deg = (360 / cloudcount) * i
    var x = Math.sin(deg * Math.PI / 180) * R
    var z = Math.cos(deg * Math.PI / 180) * R
    var y = (Math.random() - .5) * 200//纵轴随机
    css(span, "translateX", x)
    css(span, "translateZ", z)
    css(span, "translateY", y)
    span.style.display = 'none'
    cloud.appendChild(span)
  }
  var num = 0
  var timer = setInterval(function() {//一朵朵出现
    cloud.children[num].style.display = 'block'
    num++
    if (num >= cloud.children.length) {
      clearInterval(timer);
    }
  }, 50)
  MTween({//云朵旋转动画
    el: cloud,
    target: {
      rotateY: 540
    },
    time: 3500,
    type: "easeIn",
    callIn: function() {
      var deg = -css(cloud, "rotateY");
      for (var i = 0; i < cloud.children.length; i++) {
        css(cloud.children[i], "rotateY", deg);
      }
    },
    callBack: function() {//结束删除
      cloud.parentNode.removeChild(cloud)
      bgShow();
      machineAnimit();//弹出领取机器
      initcloud();
      addBigClickEvent();//绑定弹层点击事件
      $("#go").show();
      //右下角按钮微微抖动
      buttonAnimit();

      //底部有弹幕
      document.getElementById('wrapper').style.zIndex = 0;
      document.getElementById('wrapper').style.opacity = 1;
    }
  })
}

function setDarg() {//拖动逻辑
  var panoBg = document.querySelector('#panoBg');
  var tZ = document.querySelector('#tZ'); // 用来控制远近的
  var pano = document.querySelector('#pano')
  var startPoint = {
    x: 0,//后边会重新赋值
    y: 0//后边会重新赋值
  }
  var panoBgDeg = {
    x: 0,//后边会重新赋值
    y: 0//后边会重新赋值
  }
  var scale = {
    x: 129 / 15, // 移动一度需要走多少px 15 = 360/24张图片
    y: 1170 / 80
  }
  var startZ = css(tZ, "translateZ")
  var lastDeg = { x: 0, y: 0 };
  var lastDis = { x: 0, y: 0 };
  document.addEventListener('touchstart', function(e) {
    window.isTouch = true
    clearInterval(pano.timer)
    clearInterval(panoBg.timer)
    clearInterval(tZ.timer)
    startPoint.x = e.changedTouches[0].pageX;
    startPoint.y = e.changedTouches[0].pageY;
    panoBgDeg.x = css(panoBg, 'rotateY');
    panoBgDeg.y = css(panoBg, 'rotateX');
  
    
    var top = document.scrollTop
      , totalScroll = document.scrollHeight
      , currentScroll = top + document.offsetHeight
    //If we're at the top or the bottom of the containers
    //scroll, push up or down one pixel.
    //
    //this prevents the scroll from "passing through" to
    //the body.
    if(top === 0) {
      document.scrollTop = 1
    } else if(currentScroll === totalScroll) {
      document.scrollTop = top - 1
    }
  })

  document.addEventListener('touchmove', function(e) {
    var nowDeg = {}
    var nowDeg2 = {} // 悬浮层
    var nowPoint = {}
    nowPoint.x = e.changedTouches[0].pageX;
    nowPoint.y = e.changedTouches[0].pageY;
    var dis = {}
    dis.x = nowPoint.x - startPoint.x
    dis.y = nowPoint.y - startPoint.y
    var disDeg = {}
    disDeg.x = -(dis.x / scale.x) // 距离转度数
    disDeg.y = dis.y / scale.y
    // panoBgDeg.y = css(panoBg, 'rotateX')

    nowDeg.y = panoBgDeg.y + disDeg.y // 开始角度 + 移动角度
    nowDeg.x = panoBgDeg.x + disDeg.x
    nowDeg2.x = panoBgDeg.x + (disDeg.x) * 0.95
    nowDeg2.y = panoBgDeg.y + (disDeg.y) * 0.95
    if (nowDeg.y > 45) {
      nowDeg.y = 45
    } else if (nowDeg.y < -45) {
      nowDeg.y = -45
    }

    if (nowDeg2.y > 45) {
      nowDeg2.y = 45
    } else if (nowDeg2.y < -45) {
      nowDeg2.y = -45
    }
    lastDis.x = nowDeg.x - lastDeg.x
    lastDeg.x = nowDeg.x
    lastDis.y = nowDeg.y - lastDeg.y
    lastDeg.y = nowDeg.y
    css(panoBg, "rotateX", nowDeg.y);
    css(panoBg, "rotateY", nowDeg.x);
    css(pano, "rotateX", nowDeg2.y); //pano为浮动层，rotateX为上下，改动的是y
    css(pano, "rotateY", nowDeg2.x);//nowDeg2.x这个值是错误的。
    var disZ = Math.max(Math.abs(dis.x), Math.abs(dis.y))
    if (disZ > 300) {
      disZ = 300
    }
    css(tZ, 'translateZ', startZ - disZ);

    doAnimationAboutPostion(nowDeg.x);
    
  })
  document.addEventListener('touchend', function(e) {

    var nowDeg = {
      x: css(panoBg, "rotateY"),
      y: css(panoBg, "rotateX")
    };
    var disDeg = {//缓冲距离
      x: lastDis.x * 10,
      y: lastDis.y * 10
    }
    //元素动画
    doAnimationAboutPostion(nowDeg.x + disDeg.x);

    MTween({
      el: tZ,
      target: {
        translateZ: startZ // 移动后回来 变近
      },
      time: 700,
      type: "easeOut"
    })
    MTween({
      el: panoBg,
      target: {
        rotateY: nowDeg.x + disDeg.x // 缓冲
      },
      time: 800,
      type: "easeOut"
    })
    MTween({
      el: pano,
      target: {
        rotateY: nowDeg.x + disDeg.x // 缓冲
      },
      time: 800,
      type: "easeOut",
      callBack: function() {
        window.isTouch = false
        window.isStart = false   
      }
    })

    lastDis.x =0,
    lastDis.y =0
  })
}

function bgShow() {
  var pageBg = document.querySelector('#pageBg')
  MTween({
    el: pageBg,
    target: {
      opacity: 100
    },
    time: 1000,
    type: "easeBoth"
  })
}

var panosClick = {
  pano0:{width:"92px",height:"126px",startDeg:35,marginTop:"-270px"},
  pano1:{
    width:'0px',
    height:'0px',
    startDeg:-75,
    marginTop:'-240px'
  },
  pano2:{
    width:'0px',
    height:'0px',
    startDeg:-95,
    marginTop:'-240px'
  },
  pano3:{width:"37px",height:"130px",startDeg:-18,marginTop:"-135px"},
  pano4:{width:"60px",height:"130px",startDeg:-22,marginTop:"-135px"},


  

  length: 5,
};
// var panosClick = [
//   {name:'pano0', width:"92px",height:"126px",startDeg:35,marginTop:"-270px"},
//   {},

// ];
var bigClick = [
  {name:'pano0', width:"92px",height:"126px",startDeg:35,marginTop:"-270px"},
];



// 漂浮层
function createPano() {
  var pano = document.querySelector('#pano');
  var deg = 10;
  var R = 450;
  var nub = 0;
  var startDeg = 180;

  for (var j = 0; j < panosClick.length; j++) {
    var thepano = document.createElement("div");
    var startDeg2 = panosClick['pano' + j].startDeg;
    css(pano, "rotateX", 0);
    css(pano, "rotateY", 0);
    css(pano, "scale", 0);
    var span = document.createElement("div");
    span.style.cssText = "float:left;height:"+panosClick['pano' + j].height+";width:"+panosClick['pano' + j].width+";margin-top:"+panosClick['pano' + j].marginTop+";";
    span.style.background = "url(" + imgData["pano"][nub] + ")";
    css(span, "translateY", 0);
    css(span, "rotateY", startDeg2);
    css(span, "translateZ", -R);
    nub++;
    startDeg -= deg;
    thepano.appendChild(span);
    pano.appendChild(thepano);
  }
  //创建浮层元素
  initFloatingPiece();

  setTimeout(function() {
    MTween({
      el: pano,
      target: {
        rotateY: -160,
        scale: 100
      },
      time: 1200,
      type: "easeBoth"
    });
  }, 28);
}

/*陀螺仪*/
function setSensors() {
  var pano = document.querySelector('#pano');
  var panoBg = document.querySelector('#panoBg');
  var last = { x: 0, y: 0 };
  window.isStart = false;
  window.isTouch = false;
  var start = {};
  var now = {};
  var startEl = {};
  var lastTime = Date.now()
  var scale = 129 / 18;
  var startZ = -160;
  var dir = window.orientation; //检测横竖屏

  window.addEventListener('orientationchange', function(e) {
      dir = window.orientation //用户切换了横竖之后，重置方向
    })
    // deviceorientation执行的间隔 有可能小于
    /*
      注意 用户切换了横屏之后，左右旋转就不再是e.gamma，上下旋转也不再是e.beta，所以陀螺仪记得检测横竖屏
    */

  window.addEventListener('deviceorientation', function(e) {
    if (window.isTouch) {
      return
    }
    var x = e.beta;
    var y = e.gamma;
    switch (dir) {
      case 0:
        x = e.beta;
        y = e.gamma;
        break;
      case 90:
        x = e.gamma;
        y = e.beta;
        break;
      case -90:
        x = -e.gamma;
        y = -e.beta;
        break;
      case 180:
        x = -e.beta;
        y = -e.gamma;
        break;
    }
    var nowTime = Date.now()
      // 检测陀螺仪 转动时间 与插件的20ms 兼容
    if (nowTime - lastTime < 30) {
      return
    }
    lastTime = nowTime
      // 角度倾斜
    if (!isStart) {
      //start
      isStart = true;
      start.x = x
      start.y = y
      startEl.x = css(pano, 'rotateX')
      startEl.y = css(pano, 'rotateY')
    } else {
      // move
      now.x = x
      now.y = y

      var dis = {}
      dis.x = now.x - start.x
      dis.y = now.y - start.y

      var deg = {}
      deg.x = startEl.x + dis.x
      deg.y = startEl.y + dis.y

      if (deg.x > 45) {
        deg.x = 45;
      } else if (deg.x < -45) {
        deg.x = -45;
      }

      var disXZ = Math.abs(Math.round((deg.x - css(pano, 'rotateX')) * scale))
      var disYZ = Math.abs(Math.round((deg.y - css(pano, "rotateY")) * scale))

      var disZ = Math.max(disXZ, disYZ)
      if (disZ > 300) {
        disZ = 300
      }
      MTween({
        el: tZ,
        target: {
          translateZ: startZ - disZ
        },
        time: 300,
        type: 'easeOut',
        callBack: function(){
          MTween({
            el:tZ,
            target:{
              translateZ: startZ
            },
            time: 400,
            type: "easeOut"
          })
        }
      })

      MTween({
        el: pano,
        target: {
          rotateX: deg.x,
          rotateY: deg.y
        },
        time: 800,
        type: 'easeOut'
      })

      MTween({
        el: panoBg,
        target: {
          rotateX: deg.x,
          rotateY: deg.y
        },
        time: 800,
        type: 'easeOut'
      })
    }
  })
}


//初始化浮片
function initFloatingPiece() {
  var pano = document.querySelector('#pano');
  //首屏机器
  //奖学金领取处机器
  var themachine = document.createElement('div');
  var machine = document.createElement('div');
  machine.className = "machine";
  machine.classList.add("mcclick");
  var str = "opacity:0;float:left;height: 550px;width: 400px;left: -130px;background: url(&quot;pano3/mation.png&quot;);transform: translateY(0px) rotateY(166deg) translateZ(-429px);float: left;position: absolute;";
  machine.style.cssText = str;
  machine.style.background = "url(" + imgData["big"][0] + ")";
  themachine.appendChild(machine);
  pano.appendChild(themachine);
  //奖学金领取处文字
  var machineWords = document.createElement('div');
  var words = document.createElement('div');
  words.className = "machine2";
  words.classList.add("mcclick");
  var str = "opacity:0;height: 160px;width: 400px;left: -123px;background: url(&quot;pano3/machine2.png&quot;);transform: translateY(0px) rotateY(163deg) translateZ(-427px);float: left;position: absolute;top: -400px;";
  words.style.cssText = str;
  words.style.background = "url(" + imgData["big"][1] + ")";
  machineWords.appendChild(words);
  pano.appendChild(machineWords);
  //硬币
  var machineIcon = document.createElement('div');
  var icon = document.createElement('div');
  icon.className = "machine3";
  icon.classList.add("mcclick");
  var str = "opacity: 0;height: 131px;width: 237px;left: -12px;background: url(&quot;pano3/machine3.png&quot;);transform: translateY(0px) rotateY(163deg) translateZ(-338px);float: left;position: absolute;top: 75px;";
  icon.style.cssText = str;
  icon.style.background = "url(" + imgData["big"][2] + ")";
  machineIcon.appendChild(icon);
  pano.appendChild(machineIcon);
  //绑定点击机器事件
  getMoney();
}

//首屏奖学金机器
function machineAnimit(){
  MTween({
    el: $(".machine")[0],//听书奖学金领取机器
    target: {
      opacity: 100,//透明变不透明
      top: -269,//上升
    },
    time: 400,
    type: 'linear',
    callBack: function() {
      MTween({
        el: $(".machine2")[0],//奖学金领取处字样
        target: {
          opacity: 100,//透明变不透明
          top: -400,//上升
        },
        time: 400,
        type: 'linear',
        callBack: function() {
          iconAnimit();
        }
      })
    }
  })
}
function iconAnimit(){
  MTween({
    el: $(".machine3")[0],//奖学金领取处字样
    target: {
      opacity: 100,//透明变不透明
      top: 80,//上升
    },
    time: 500,
    type: 'linear',
    callBack: function() {
      MTween({
        el: $(".machine3")[0],//奖学金领取处字样
        target: {
          opacity: 30,//透明变不透明
          top: 75,//上升
        },
        time: 100,
        type: 'linear',
        callBack: function() {
          iconAnimit();
        }
      })
    }
  })
}
var xiayu = 1;
//基于滑动的函数封装在这里
function doAnimationAboutPostion(nowDegx){
    //松手触发动画
    //大件
    //奖学金领取屏
  doFloatingPiece(nowDegx);
  //小元素滑出
  doslideOut(nowDegx);
  //点击提示
  clicktip(nowDegx);
  //红包雨
  if(xiayu === 1 && Math.abs(((nowDegx + 360000) - 500))%360 < 50){
    xiayu = 0;
    hongbaoyu(nowDegx);
  } else {
    if(Math.abs(((nowDegx + 360000) - 700))%360 < 90){
      xiayu = 1;
    }
  }
}
//浮片动作
function doFloatingPiece (nowDegx) {
    //滑动提示逻辑
    if(Math.abs(((nowDegx + 360000) - 85.5))%360 < 25){
        MTween({
            el: $(".talkWindowbs")[0],//黑白logo
            target: {
              opacity: 100,//最终态挪到远处
              top: -15,
            },
            time: 500,
            type: 'linear',
            callBack: function() {}
          })
      } else {
        MTween({
          el: $(".talkWindowbs")[0],//黑白logo
          target: {
            opacity: -100,//最终态挪到远处
            top: 20,
          },
          time: 500,
          type: 'linear',
          callBack: function() {}
        })
      }

      if(Math.abs(((nowDegx + 360000) - 107.5))%360 < 25){
        MTween({
            el: $(".talkWindowmp")[0],//黑白logo
            target: {
              opacity: 100,//最终态挪到远处
              top: -250,
            },
            time: 500,
            type: 'linear',
            callBack: function() {}
          })
      } else {
        MTween({
          el: $(".talkWindowmp")[0],//黑白logo
          target: {
            opacity: -100,//最终态挪到远处
            top: -200,
          },
          time: 500,
          type: 'linear',
          callBack: function() {}
        })
      }


    //首屏逻辑
  if(Math.abs(((nowDegx + 360000) - 165))%360 < 360){
    machineAnimit();
  } else {
    MTween({
      el: $(".machine")[0],//黑白logo
      target: {
        opacity: -100,//最终态挪到远处
        top: 269,
      },
      time: 500,
      type: 'linear',
      callBack: function() {
        MTween({
          el: $(".machine2")[0],//奖学金领取处字样
          target: {
            opacity: -100,//透明变不透明
            top: 40,//上升
          },
          time: 100,
          type: 'linear',
          callBack: function() {
            MTween({
              el: $(".machine3")[0],//钱币
              target: {
                opacity: -100,//透明变不透明
                top: 40,//上升
              },
              time: 50,
              type: 'linear',
              callBack: function() {
              }
            })
          }
        })
      }
    })
  }
}
//小元素滑出
function doslideOut(nowDegx) {
  var outEle =  $('.slideout');
  for (var i = 0; i < outEle.length; i++  ){
    //当前元素的角度
    if($('.slideout')[i]){
      var currrentdeg = parseInt($($('.slideout')[i]).css("transform").substring( $($('.slideout')[i]).css("transform").indexOf('rotateY')+8, $($('.slideout')[i]).css("transform").indexOf('rotateY')+12));
      if(Math.abs(((nowDegx + 360000) - (-parseInt(currrentdeg) )))%360 < 25){
        //把他往下挪几个像素
        var topnow = $($('.slideout')[i]).css('top')//-100px
        var top = parseInt(topnow.substring(0,topnow.length-2)) + 40;
        $(outEle[i]).css('top', top + 'px'); 
        $(outEle[i]).removeClass('slideout');
        //挪上来，变透明
        MTween({
          el: outEle[i],
          target: {
            opacity: 100,//不透明
            top: parseInt(topnow.substring(0,topnow.length-2)),
          },
          time: 500,
          type: 'linear',
          callBack: function() {
          }
        })
      }
    }
  }
}
function clicktip(nowDegx) {
  var outEle =  $('.clicktip');
  for (var i = 0; i < outEle.length; i++  ){
    //当前元素的角度
    var currrentdeg = parseInt($(outEle[i]).css("transform").substring( $(outEle[i]).css("transform").indexOf('rotateY')+8, $(outEle[i]).css("transform").indexOf('rotateY')+12));
    if(Math.abs(((nowDegx + 360000) - (-parseInt(currrentdeg) )))%360 < 25){
      //把他往下挪几个像素
      var topnow = $(outEle[i]).css('top')//-100px
      // var top = parseInt(topnow.substring(0,topnow.length-2)) + 40;
      // $(outEle[i]).css('top', top + 'px'); 
      $(outEle[i]).removeClass('slideout');
      //挪上来，变透明
      MTween({
        el: outEle[i],
        target: {
          opacity: 60,//不透明
          // top: parseInt(topnow.substring(0,topnow.length-2)),
        },
        time: 500,
        type: 'linear',
        callBack: function() {
        }
      })
    } else {
      MTween({
        el: outEle[i],
        target: {
          opacity: -100,//不透明
          // top: parseInt(topnow.substring(0,topnow.length-2)),
        },
        time: 500,
        type: 'linear',
        callBack: function() {
        }
      })
    }
  }
}
function hongbaoyu(nowDegx) {
  if(Math.abs(((nowDegx + 360000) - 500))%360 < 50){
    var hongbaos = [
      'https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/hongbaohe3.png',
      'https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/hongbaohe3.png',
      'https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/hongbaohe3.png',
      'https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/hongbaohe3.png',
      'https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/hongbaohe3.png',
      'https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/hongbaohe3.png',
      'https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/hongbaohe3.png',
      'https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/hongbaohe3.png',
      'https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/hongbaohe3.png',
      'https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/hongbaohe3.png',
      'https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/hongbaohe3.png',
      'https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/hongbaohe3.png',
      'https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/hongbaohe3.png',
      'https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/hongbaohe3.png',
      'https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/hongbaohe3.png',
      'https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/hongbaohe3.png',
      'https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/hongbaohe3.png',
      'https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/hongbaohe3.png',
      'https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/hongbaohe3.png',
      'https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/hongbaohe3.png',
      'https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/hongbaohe3.png',
      'https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/hongbaohe3.png',
      'https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/hongbaohe3.png',
      'https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/hongbaohe3.png',
      'https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/hongbaohe3.png',
      'https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/hongbaohe3.png',
  ];
    for(var i = 0; i < hongbaos.length; i++){

      var outDiv = document.createElement('div');
      let imgDiv = document.createElement('div');
      imgDiv.classList = "showWindow hongbaoyu";
      var str = "position: absolute;top:-50px;right:-50px;width:50px;height:50px;background-image:url('"+hongbaos[i]+"');background-size: 50px;";
      imgDiv.style.cssText = str;
      outDiv.appendChild(imgDiv);
      imgDiv.onclick = function(){
        $('.hongbaohe3').click();
      }
      $('body')[0].appendChild(outDiv);

      //生产一个随机时间
      setTimeout(function(){
        MTween({
          el: imgDiv,
          target: {
            opacity: 60,//不透明
            top:50+(Math.random()*2500),
            right:400+(Math.random()*430)
          },
          time: (Math.random()*1000+2000),
          type: 'linear',
          callBack: function() {
            imgDiv.remove();
          }
        })
      },Math.abs(Math.random()*5000 -2000))
    }
  }else {
  }
}
//创建各种点击及浮层
function createBigClick(){
  var bigClickData = [
    {id:"jiahangjia",name:"贾行家",width:"146px",height:"310px",startDeg:135,translateZ:"-411px",marginTop:"45px","point":"1111","link":"2222"},
    {id:"lijun",name:"李筠",width:"174px",height:"371px",startDeg:125,marginTop:"-169px","point":"1111","link":"2222"},
    {id:"liuwei",name:"刘玮",width:"157px",height:"304px",startDeg:79,translateZ:"-463px",marginTop:"-107px","point":"1111","link":"2222"},
    {id:"huanglining1",name:"黄昱宁-1",width:"181px",height:"289px",startDeg:103,marginTop:"-151px","point":"1111","link":"2222"},
    {id:"haunglining2",name:"黄昱宁-2",width:"0px",height:"0px",startDeg:99,marginTop:"-126px","point":"1111","link":"2222"},
    {id:"haungliningmingpai",name:"黄昱宁名牌",width:"0px",height:"0px",startDeg:94,marginTop:"-154px","point":"1111","link":"2222"},
    {id:"liuweimingpai",name:"刘玮名牌",width:"0px",height:"0px",startDeg:83,marginTop:"-113px","point":"1111","link":"2222"},
    {id:"zhuwei1",name:"朱伟-1",width:"330px",height:"311px",startDeg:100,translateZ:'-540px',marginTop:"56px","point":"1111","link":"2222"},
    {id:"zhuwei2",name:"朱伟-2",width:"0px",height:"0px",startDeg:84,marginTop:"48px","point":"1111","link":"2222"},
    {id:"caoxingyuan1",name:"曹星原-1",width:"286px",height:"345px",startDeg:65,translateZ:'-500px',marginTop:"20px","point":"1111","link":"2222"},
    {id:"caoxingyuan2",name:"曹星原-2",width:"0px",height:"0px",startDeg:56,marginTop:"20px","point":"1111","link":"2222"},
    {id:"linannan",name:"李南南",width:"102px",height:"315px",startDeg:37,translateZ:'-448px',marginTop:"-9px","point":"1111","link":"2222"},
    {id:"hongbaohe1-1",name:"红包盒1-1",width:"0px",height:"0px",startDeg:26,marginTop:"134px","point":"1111","link":"2222"},
    {classList:"slideout",id:"hongbaohe1-2",name:"红包盒1-2",width:"80px",height:"55px",startDeg:24,marginTop:"134px","point":"1111","link":"2222"},
    {classList:"blink",id:"shehuiyujingji",name:"社会与经济",width:"93px",height:"117px",startDeg:38,marginTop:"-135px","point":"1111","link":"2222"},
    {classList:"blink",id:"anzhishi1",name:"暗知识-1",width:"23px",height:"115px",startDeg:26,marginTop:"-135px","point":"1111","link":"2222"},
    {classList:"blink",id:"anzhishi2",name:"暗知识-2",width:"79px",height:"115px",startDeg:25,marginTop:"-135px","point":"1111","link":"2222"},
    {classList:"blink",id:"chengshi1",name:"成事-1",width:"89px",height:"116px",startDeg:14,marginTop:"-135px","point":"1111","link":"2222"},
    {classList:"blink",id:"chengshi2",name:"成事-2 无",width:"38px",height:"116px",startDeg:9,marginTop:"-135px","point":"1111","link":"2222"},
    {classList:"blink",id:"shiwenhuojinchensilu",name:"十问：霍金沉思录",width:"90px",height:"120px",startDeg:36,marginTop:"-261px","point":"1111","link":"2222"},
    {classList:"blink",id:"meiguoxianjing1",name:"美国陷阱-1",width:"90px",height:"118px",startDeg:17,marginTop:"-259px","point":"1111","link":"2222"},
    {classList:"blink",id:"meiguoxianjing2",name:"美国陷阱-2 无",width:"15px",height:"117px",startDeg:9,marginTop:"-259px","point":"1111","link":"2222"},
    {id:"bianhengqin",name:"卞恒沁",width:"104px",height:"301px",startDeg:6,marginTop:"-89px","point":"1111","link":"2222"},
    {id:"dasheji",name:"大设计",width:"99px",height:"124px",startDeg:-11,marginTop:"-254px","point":"1111","link":"2222"},
    {id:"zhaizizhongguo",name:"宅兹中国",width:"99px",height:"123px",startDeg:-25,marginTop:"-258px","point":"1111","link":"2222"},
    {id:"jinhuidui",name:"锦灰堆",width:"89px",height:"122px",startDeg:-6,marginTop:"-128px","point":"1111","link":"2222"},
    {id:"xugoudeyoutaiminzu1",name:"虚构的犹太民族-1",width:"86px",height:"119px",startDeg:-18,marginTop:"-128px","point":"1111","link":"2222"},
    {id:"xugoudeyoutaiminzu2",name:"虚构的犹太民族-2 无",width:"0px",height:"0px",startDeg:-21,marginTop:"-128px","point":"1111","link":"2222"},
    {id:"xiaoshuodeyishu1",name:"小说的艺术-1",width:"92px",height:"121px",startDeg:-30,marginTop:"-126px","point":"1111","link":"2222"},
    {id:"xiaoshuodeyishu2",name:"小说的艺术-2 无",width:"29px",height:"121px",startDeg:-36,marginTop:"-126px","point":"1111","link":"2222"},
    {id:"liuxuan",name:"刘玄",width:"110px",height:"285px",startDeg:-36,marginTop:"-16px","point":"1111","link":"2222"},
    {id:"tingshutieshi1",name:"听书帖士-1",width:"44px",height:"220px",startDeg:-45,marginTop:"-287px","point":"1111","link":"2222"},
    {id:"tingshutieshi2",name:"听书帖士-2",width:"59px",height:"220px",startDeg:-51,marginTop:"-287px","point":"1111","link":"2222"},
    {id:"shujialidehongbao",name:"书架里的红包",width:"73px",height:"66px",startDeg:-51,marginTop:"-83px","point":"1111","link":"2222"},
    {id:"yonghu1",name:"用户1",width:"78px",height:"118px",startDeg:-54,marginTop:"-24px","point":"1111","link":"2222"},
    {id:"yonghu2",name:"用户2",width:"175px",height:"307px",startDeg:-66,translateZ:'-400px',marginTop:"34px","point":"1111","link":"2222"},
    {id:"hongbaohe2",name:"红包盒2",width:"79px",height:"56px",startDeg:-75,marginTop:"181px","point":"1111","link":"2222"},
    {id:"yonghu3",name:"用户3",width:"64px",height:"100px",startDeg:-73,marginTop:"-25px","point":"1111","link":"2222"},
    {id:"tingshushujubang1",name:"听书数据榜-1",width:"153px",height:"235px",startDeg:-65,marginTop:"-294px","point":"1111","link":"2222"},
    {id:"tingshushujubang2",name:"听书数据榜-2",width:"0px",height:"0px",startDeg:-66,marginTop:"-294px","point":"1111","link":"2222"},
    {classList:"slideout",id:"ditu1",name:"地图1",width:"64px",height:"75px",startDeg:-82,marginTop:"-222px","point":"1111","link":"2222"},
    {classList:"slideout",id:"ditu2",name:"地图2",width:"70px",height:"69px",startDeg:-96,marginTop:"-236px","point":"1111","link":"2222"},
    {classList:"slideout",id:"ditu3",name:"地图3",width:"45px",height:"63px",startDeg:-105,marginTop:"-202px","point":"1111","link":"2222"},
    {id:"saodiseng",name:"扫地僧",width:"89px",height:"156px",startDeg:-96,marginTop:"-63px","point":"1111","link":"2222"},
    {id:"beisu",name:"倍速",width:"66px",height:"74px",startDeg:-85,marginTop:"9px","point":"1111","link":"2222"},
    {id:"yonghu4",name:"用户4",width:"90px",height:"213px",startDeg:-96,marginTop:"78px","point":"1111","link":"2222"},
    {classList:"slideout",id:"hongbaohe3",name:"红包盒3",width:"82px",height:"52px",startDeg:-131,translateZ:'-399px',marginTop:"113px","point":"1111","link":"2222"},
    {id:"yanglei",name:"杨蕾",width:"111px",height:"306px",startDeg:-114,marginTop:"47px","point":"1111","link":"2222"},
    {id:"ashi",name:"阿狮",width:"237px",height:"411px",startDeg:-145,translateZ:'-360px',marginTop:"-87px","point":"1111","link":"2222"},
    ]
  var pano = document.querySelector('#pano');
  for(var i = 0; i < bigClickData.length; i++) {
    var outDiv = document.createElement('div');
    var imgDiv = document.createElement('div');
    imgDiv.className = bigClickData[i].id
    imgDiv.classList.add("showWindow");
    imgDiv.classList.add("hidden");
    if (bigClickData[i].classList != undefined) {
        imgDiv.classList.add(bigClickData[i].classList);
    }
    var str = "background-color:'red';float:left;top:"+bigClickData[i].marginTop+
              ";height:"+bigClickData[i].height+
              ";width: "+bigClickData[i].width+
              ";left: 0px;transform: translateY(0px) rotateY("+bigClickData[i].startDeg+
              "deg) translateZ("+(bigClickData[i].translateZ === undefined ? "-429px": bigClickData[i].translateZ)+
              ");float: left;position: absolute;";
    imgDiv.style.cssText = str;
    imgDiv.style.background = "url(" + imgData["panosClick"][i] + ")";
    outDiv.appendChild(imgDiv);
    pano.appendChild(outDiv);

    //添加闪光点
    if(parseInt(bigClickData[i].width) > 0&&parseInt(bigClickData[i].height) > 0 ) {
      var eltop = parseInt(bigClickData[i].marginTop) + (parseInt(bigClickData[i].height)*0.3)
      var eltranslateZ =  parseInt(bigClickData[i].translateZ === undefined ? "-429px": bigClickData[i].translateZ)*0.85
      var blink1 = document.createElement('div');
      var blink11 = document.createElement('div');
      var blink11str = "opacity: 0;top:"+eltop+
      "px;height:50px"+
      ";width: 50px;left: "+( (80<parseInt(bigClickData[i].startDeg))?parseInt(bigClickData[i].width)/2:0) +
      "px;transform: translateY(0px) rotateY("+bigClickData[i].startDeg+
      "deg) translateZ("+eltranslateZ+
      "px);float: left;position: absolute;background: url(https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/others/blinkcoin.png);display: block;background-size: cover;"
      blink11.style.cssText = blink11str;
      blink11.classList = bigClickData[i].id +' showWindow clicktip';
      blink1.appendChild(blink11);
      pano.appendChild(blink1);
    }
  }
}
function addBigClickEvent(){
  //显示
  $('.showWindow').show()
  //点击事件绑定
  var window = $('#window');
  var windowImg = $('#windowImg');
  $('.showWindow').click(function(){
    var windowName = $(this)[0].classList[0];
    windowImg[0].src = 'https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/'+windowName+'.png'
    window.show();
  });
  $('#close').click(function () {
    $('#info').hide();
    $('#rules').hide();
    window.hide();  
  });
}
function initcloud(){
  var pano = document.querySelector('#pano');
  var thecloud01 = document.createElement('div');
  var cloud01 = document.createElement('div');
  cloud01.className = "cloud01";
  var str = "opacity:1;float:left;height: 140px;width: 407px;left: 0px;transform: translateY(0px) rotateY(121deg) translateZ(-500px);float: left;position: absolute;top: 312px;";
  cloud01.style.cssText = str;
  cloud01.style.background = "url(" + imgData["cloud"][3] + ")";
  thecloud01.appendChild(cloud01);
  pano.appendChild(thecloud01);
  var thecloud02 = document.createElement('div');
  var cloud02 = document.createElement('div');
  cloud02.className = "cloud02";
  var str = "opacity:1;height: 126px;width: 292px;left: 0px;transform: translateY(0px) rotateY(163deg) translateZ(-427px);float: left;position: absolute;top: 328px;";
  cloud02.style.cssText = str;
  cloud02.style.background = "url(" + imgData["cloud"][4] + ")";
  thecloud02.appendChild(cloud02);
  pano.appendChild(thecloud02);
  cloudblink(cloud02,'left');
  cloudblink(cloud01,'right');



  var talkwindowbs = document.createElement('div');
  var blink11 = document.createElement('div');
  var blink11str = "opacity: 1;top: -15px;height: 88px;width: 165px;left: 31px;transform: translateY(0px) rotateY(-99deg) translateZ(-396px);float: left;position: absolute;background: url(https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/others/blinkwindow.png);display: block;background-size: cover;"
  blink11.style.cssText = blink11str;
  blink11.className = 'talkWindowbs';
  talkwindowbs.appendChild(blink11);
  pano.appendChild(talkwindowbs);

  //地图
  var blink1 = document.createElement('div');
  var blink11 = document.createElement('div');
  var blink11str = "opacity: 1;top: -174px;height: 42px;width: 50px;left: 31px;transform: translateY(0px) rotateY(-104deg) translateZ(-429px);float: left;position: absolute;background: url(https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/others/blinkcoin.png);display: block;background-size: cover;"
  blink11.style.cssText = blink11str;
  blink11.className = 'ditu3 showWindow blink';
  blink1.appendChild(blink11);
  pano.appendChild(blink1);

  var talkwindowbs = document.createElement('div');
  var blink11 = document.createElement('div');
  var blink11str = "opacity: 1;top: -248px;height: 88px;width: 165px;left: 31px;transform: translateY(0px) rotateY(-121deg) translateZ(-396px);float: left;position: absolute;background: url(https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/others/blinkwindow.png);display: block;background-size: cover;"
  blink11.style.cssText = blink11str;
  blink11.className = 'talkWindowmp';
  talkwindowbs.appendChild(blink11);
  pano.appendChild(talkwindowbs);

  var theblinks = $('.blink');
    for(var i = 0; i<theblinks.length; i++){
        // blinks(theblinks[i]);
    }
}
function cloudblink(e,r){
  MTween({
    el: e,//
    target: {
      opacity: 700,//
      left:(r==='right'? 30:10),
    },
    time: (r==='right'?2000:1200),
    type: 'linear',
    callBack: function() {
      MTween({
        el: e,//
        target: {
          opacity: 30,//
          left: (r==='right'? 0:-40),
        },
        time: (r==='right'?2000:1200),
        type: 'linear',
        callBack: function() {
          cloudblink(e,r);
        }
      })
    }
  })
}
function blinks(e){
    MTween({
        el: e,//奖学金领取处字样
        target: {
          opacity: 700,//透明变不透明
        //   left:(r==='right'? 30:10),
        },
        time: (500),
        type: 'linear',
        callBack: function() {
          MTween({
            el: e,//奖学金领取处字样
            target: {
              opacity: 30,//透明变不透明
            //   left: (r==='right'? 0:-40),
            },
            time: (500),
            type: 'linear',
            callBack: function() {
                blinks(e);
            }
          })
        }
    })
}

var onetime_click = 1;
var ua = navigator.userAgent;
var Asio = Asio || {send:function(a){ return false }};
var userInfo = {activity_coupon_list:{coupon_url:''}};
function getMoney() {
	if(onetime_click){
		onetime_click = 0;	
		setTimeout(function(){
			onetime_click = 1;	
		},300);
		if(ua.indexOf('igetapp') && Asio.send('')) {
			//APP内,发请求，弹窗
      //禁掉左滑
      Asio.send('agent.swipe',{enable:false});
      Asio.send('ui.minibar',{show:false});
      //发请求
      ua = navigator.userAgent;
      if (ua.indexOf('igetapp')) {
        var user_id = 0;
        if( Asio.send('agent.info') != undefined ) {
          Asio.send('agent.info').then(function (res) {
            user_id = res.data.userid; //获取用户信息
        
            Asio.send('network.load', {
              url: '$_ENTREE_DOMAIN_$/odob/v2/front_activity/user_and_coupon_info',
              method: 'POST',
              params: {
                user_id: user_id
              },
              contentType: 'application/x-www-form-urlencoded',
              proxyType: 'gateway/entree'
            }).then(function (res) {
              userInfo = res.data;
              $('#avatar')[0].src = userInfo.avatar;
              $('#nick')[0].src = userInfo.nick_name;
              
              $('#getButton').click(function(){
                //点击则跳转至cms奖金领取页。
                var link = encodeURIComponent(userInfo.activity_coupon_list.coupon_url);
                var url = 'igetapp://activity/detail?url='+link;
                Asio.send('jump.ddURL', {
                  ddURL: url,
                  ddURLMinVer: '5.1.0'
                })
              });
            });
          });
        }
      }
		} 
    //点击弹窗或跳转
    $('.mcclick').click(function(){
        if(ua.indexOf('igetapp')>0) {
        //点击事件绑定 app内
        var windowDiv = $('#window');
        var windowImg = $('#windowImg');
        windowImg[0].src = 'https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/window/getmoney.png'
        $('#info').show();
        windowDiv.show();
        }else{
            //cms环境的页面 app外
            if(!(Asio.send('') === false)){
                var windowDiv = $('#window');
                var windowImg = $('#windowImg');
                windowImg[0].src = 'https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/others/guiding.png'
                // $('#info').show();
                $('#rules').show();
                windowDiv.show();

            }else{
                //自研
                var windowDiv = $('#window');
                var windowImg = $('#windowImg');
                windowImg[0].src = 'https://emperorfront.github.io/h5/H5sInLuoJiSiWei/privateExamnation/2019.6.11ListenBook/others/guiding.png'
                $('#info').show();

                windowDiv.click(function(){
                    // var link = encodeURIComponent('http://pic1cdn.luojilab.com/html/postertest/picPkWEl7Z8LmsRVD7mVjRV.html');
                    // var url = 'igetapp://activity/detail?url='+link;
                    // Asio.weLaunch(url);
                });

                windowDiv.show();
            }
        }
    });
    //goapp会有弹出一次。
    var goapp = $('.goapp')
    goapp.click(function(){
        var link = encodeURIComponent('http://pic1cdn.luojilab.com');
        var url = 'igetapp://activity/detail?url='+link;
        Asio.weLaunch(url);
    });
	}
}
function buttonAnimit() {
  var goimg = $('#goImg')[0];
    MTween({
      el: goimg,
      target: {
        opacity: 100,
        marginTop: 8,
      },
      time: 500,
      type: 'linear',
      callBack: function() {
        MTween({
          el: goimg,
          target: {
            opacity: 70,
            marginTop: 0,
          },
          time: 300,
          type: 'linear',
          callBack: function() {
            buttonAnimit();
          }
        })
      }
    })
}

//写死宝箱跳转链接
$(function(){
  $("#windowImg").click(function(e){
    if($("#windowImg")[0].src.indexOf('hongbaohe')){
      // alert('缺一个微信领取链接！填入手机号');
      //https://pic1cdn.luojilab.com/html/poster/picqqL8W9PRlXcgGo6AXrGW.html
    }
  });
});




















const MAX_DM_COUNT = 6;
const CHANNEL_COUNT = 10;

let domPool = [];
let danmuPool =  ['前方高能！',' 来了老铁！这里是听书图书馆',' 听说可以领奖学金？听的越多，领的越多？',' 都别拦我，我去听书了！',' 哇！这里有我喜欢的解读老师！',' 听书听出红包雨，又涨知识又好运。',' 还有好多新书经典书呢',' 内有罗胖，能不能找到就看你的了',' 似乎有很多彩蛋？！同学们快去探索啊',' 太好玩了～我抢到了红包！',' 都憋说了，我要每天听书每天去领奖学金！',' 厉害了！得到放大招！',' 这红包太大了吧........',' 听书竟然能领红包？太爽了吧？',' 不要问我为什么懂得多，你听书你也多',' 我听得书多，不骗你，真有红包在等你',' 朱伟老师忠实听众前来报道',' 3年听书老会员，已就位',' 向我砸红包！',' 我听了1128本书，有谁比我多？',' 你也是听书会员吗？幸会幸会，里面请',' 进去不管看见啥，点就完事儿了',' 都说我脑图画得好，我不会告诉你我是在听书里学的',' 我撸猫时候听，跑步时候听，开车时候听，你啥时候听？',' 书山路有‘听’为径',' 听书一时爽，一直听书一直爽',' 扶我起来，还能再听个三天三夜',' 地上红包可以点，别问我是怎么知道的'];
let hasPosition = [];

/**
 * 做一下初始化工作
 */
function init() {
  let wrapper = document.getElementById('wrapper')
  // 先new一些span 重复利用这些DOM
  for (let j = 0; j < CHANNEL_COUNT; j++) {
    let doms = [];
    for (let i = 0; i < MAX_DM_COUNT; i++) {
      // 要全部放进wrapper
      let dom = document.createElement('span');
      wrapper.appendChild(dom);
      // 初始化dom的位置 通过设置className
      dom.className = 'right';
      // DOM的通道是固定的 所以设置好top就不需要再改变了
      dom.style.bottom = j * 40 + 'px';
      // 放入改通道的DOM池
      doms.push(dom);
      // 每次到transition结束的时候 就是弹幕划出屏幕了 将DOM位置重置 再放回DOM池
      dom.addEventListener('transitionend', () => {
        dom.className = 'right';
        // dom.style.transition = null;
        // dom.style.left = null;
        dom.style.transform = null;

        domPool[j].push(dom);
      });
    }
    domPool.push(doms);
  }
  // hasPosition 标记每个通道目前是否有位置
  for (let i = 0; i < CHANNEL_COUNT; i++) {
    hasPosition[i] = true;
  }
}

/**
 * 获取一个可以发射弹幕的通道 没有则返回-1
 */
function getChannel() {
  for (let i = 0; i < CHANNEL_COUNT; i++) {
    if (hasPosition[i] && domPool[i].length) return i;
  }
  return -1;
}

/**
 * 根据DOM和弹幕信息 发射弹幕
 */
function shootDanmu(dom, text, channel) {
  dom.innerText = text;
  // 如果为每个弹幕设置 transition 可以保证每个弹幕的速度相同 这里没有保证速度相同
  // dom.style.transition = `transform ${7 + dom.clientWidth / 100}s linear`;

  // dom.style.left = '-' + dom.clientWidth + 'px';
  // 设置弹幕的位置信息 性能优化 left -> transform
  dom.style.transform = `translateX(${-dom.clientWidth}px)`;
  dom.className = 'left';
  
  hasPosition[channel] = false;
  // 弹幕全部显示之后 才能开始下一条弹幕
  // 大概 dom.clientWidth * 10 的时间 该条弹幕就从右边全部划出到可见区域 再加1秒保证弹幕之间距离
  setTimeout(() => {
    hasPosition[channel] = true;
  }, dom.clientWidth * 10 + 1000);
}



init();
// 每隔1ms从弹幕池里获取弹幕（如果有的话）并发射
setInterval(() => {
  let channel;
  if (danmuPool.length && (channel = getChannel()) != -1) {
    let dom = domPool[channel].shift();
    domPool[channel].push(dom);
    let danmu = danmuPool.shift();
    danmuPool.push(danmu);
    shootDanmu(dom, danmu, channel);
  }
}, 1);


 