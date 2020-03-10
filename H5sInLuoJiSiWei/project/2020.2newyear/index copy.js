/* Zepto v1.1.4 - zepto event ajax form ie - zeptojs.com/license */
var Zepto=function(){function L(t){return null==t?String(t):j[S.call(t)]||"object"}function Z(t){return"function"==L(t)}function $(t){return null!=t&&t==t.window}function _(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function D(t){return"object"==L(t)}function R(t){return D(t)&&!$(t)&&Object.getPrototypeOf(t)==Object.prototype}function M(t){return"number"==typeof t.length}function k(t){return s.call(t,function(t){return null!=t})}function z(t){return t.length>0?n.fn.concat.apply([],t):t}function F(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function q(t){return t in f?f[t]:f[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function H(t,e){return"number"!=typeof e||c[F(t)]?e:e+"px"}function I(t){var e,n;return u[t]||(e=a.createElement(t),a.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),u[t]=n),u[t]}function V(t){return"children"in t?o.call(t.children):n.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function B(n,i,r){for(e in i)r&&(R(i[e])||A(i[e]))?(R(i[e])&&!R(n[e])&&(n[e]={}),A(i[e])&&!A(n[e])&&(n[e]=[]),B(n[e],i[e],r)):i[e]!==t&&(n[e]=i[e])}function U(t,e){return null==e?n(t):n(t).filter(e)}function J(t,e,n,i){return Z(e)?e.call(t,n,i):e}function X(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function W(e,n){var i=e.className,r=i&&i.baseVal!==t;return n===t?r?i.baseVal:i:void(r?i.baseVal=n:e.className=n)}function Y(t){var e;try{return t?"true"==t||("false"==t?!1:"null"==t?null:/^0/.test(t)||isNaN(e=Number(t))?/^[\[\{]/.test(t)?n.parseJSON(t):t:e):t}catch(i){return t}}function G(t,e){e(t);for(var n=0,i=t.childNodes.length;i>n;n++)G(t.childNodes[n],e)}var t,e,n,i,C,N,r=[],o=r.slice,s=r.filter,a=window.document,u={},f={},c={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},l=/^\s*<(\w+|!)[^>]*>/,h=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,p=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,d=/^(?:body|html)$/i,m=/([A-Z])/g,g=["val","css","html","text","data","width","height","offset"],v=["after","prepend","before","append"],y=a.createElement("table"),x=a.createElement("tr"),b={tr:a.createElement("tbody"),tbody:y,thead:y,tfoot:y,td:x,th:x,"*":a.createElement("div")},w=/complete|loaded|interactive/,E=/^[\w-]*$/,j={},S=j.toString,T={},O=a.createElement("div"),P={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},A=Array.isArray||function(t){return t instanceof Array};return T.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=O).appendChild(t),i=~T.qsa(r,e).indexOf(t),o&&O.removeChild(t),i},C=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},N=function(t){return s.call(t,function(e,n){return t.indexOf(e)==n})},T.fragment=function(e,i,r){var s,u,f;return h.test(e)&&(s=n(a.createElement(RegExp.$1))),s||(e.replace&&(e=e.replace(p,"<$1></$2>")),i===t&&(i=l.test(e)&&RegExp.$1),i in b||(i="*"),f=b[i],f.innerHTML=""+e,s=n.each(o.call(f.childNodes),function(){f.removeChild(this)})),R(r)&&(u=n(s),n.each(r,function(t,e){g.indexOf(t)>-1?u[t](e):u.attr(t,e)})),s},T.Z=function(t,e){return t=t||[],t.__proto__=n.fn,t.selector=e||"",t},T.isZ=function(t){return t instanceof T.Z},T.init=function(e,i){var r;if(!e)return T.Z();if("string"==typeof e)if(e=e.trim(),"<"==e[0]&&l.test(e))r=T.fragment(e,RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=T.qsa(a,e)}else{if(Z(e))return n(a).ready(e);if(T.isZ(e))return e;if(A(e))r=k(e);else if(D(e))r=[e],e=null;else if(l.test(e))r=T.fragment(e.trim(),RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=T.qsa(a,e)}}return T.Z(r,e)},n=function(t,e){return T.init(t,e)},n.extend=function(t){var e,n=o.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){B(t,n,e)}),t},T.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],s=i||r?e.slice(1):e,a=E.test(s);return _(t)&&a&&i?(n=t.getElementById(s))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:o.call(a&&!i?r?t.getElementsByClassName(s):t.getElementsByTagName(e):t.querySelectorAll(e))},n.contains=a.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},n.type=L,n.isFunction=Z,n.isWindow=$,n.isArray=A,n.isPlainObject=R,n.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},n.inArray=function(t,e,n){return r.indexOf.call(e,t,n)},n.camelCase=C,n.trim=function(t){return null==t?"":String.prototype.trim.call(t)},n.uuid=0,n.support={},n.expr={},n.map=function(t,e){var n,r,o,i=[];if(M(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&i.push(n);else for(o in t)n=e(t[o],o),null!=n&&i.push(n);return z(i)},n.each=function(t,e){var n,i;if(M(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},n.grep=function(t,e){return s.call(t,e)},window.JSON&&(n.parseJSON=JSON.parse),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){j["[object "+e+"]"]=e.toLowerCase()}),n.fn={forEach:r.forEach,reduce:r.reduce,push:r.push,sort:r.sort,indexOf:r.indexOf,concat:r.concat,map:function(t){return n(n.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return n(o.apply(this,arguments))},ready:function(t){return w.test(a.readyState)&&a.body?t(n):a.addEventListener("DOMContentLoaded",function(){t(n)},!1),this},get:function(e){return e===t?o.call(this):this[e>=0?e:e+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return r.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return Z(t)?this.not(this.not(t)):n(s.call(this,function(e){return T.matches(e,t)}))},add:function(t,e){return n(N(this.concat(n(t,e))))},is:function(t){return this.length>0&&T.matches(this[0],t)},not:function(e){var i=[];if(Z(e)&&e.call!==t)this.each(function(t){e.call(this,t)||i.push(this)});else{var r="string"==typeof e?this.filter(e):M(e)&&Z(e.item)?o.call(e):n(e);this.forEach(function(t){r.indexOf(t)<0&&i.push(t)})}return n(i)},has:function(t){return this.filter(function(){return D(t)?n.contains(this,t):n(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!D(t)?t:n(t)},last:function(){var t=this[this.length-1];return t&&!D(t)?t:n(t)},find:function(t){var e,i=this;return e=t?"object"==typeof t?n(t).filter(function(){var t=this;return r.some.call(i,function(e){return n.contains(e,t)})}):1==this.length?n(T.qsa(this[0],t)):this.map(function(){return T.qsa(this,t)}):[]},closest:function(t,e){var i=this[0],r=!1;for("object"==typeof t&&(r=n(t));i&&!(r?r.indexOf(i)>=0:T.matches(i,t));)i=i!==e&&!_(i)&&i.parentNode;return n(i)},parents:function(t){for(var e=[],i=this;i.length>0;)i=n.map(i,function(t){return(t=t.parentNode)&&!_(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return U(e,t)},parent:function(t){return U(N(this.pluck("parentNode")),t)},children:function(t){return U(this.map(function(){return V(this)}),t)},contents:function(){return this.map(function(){return o.call(this.childNodes)})},siblings:function(t){return U(this.map(function(t,e){return s.call(V(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return n.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=I(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=Z(t);if(this[0]&&!e)var i=n(t).get(0),r=i.parentNode||this.length>1;return this.each(function(o){n(this).wrapAll(e?t.call(this,o):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){n(this[0]).before(t=n(t));for(var e;(e=t.children()).length;)t=e.first();n(t).append(this)}return this},wrapInner:function(t){var e=Z(t);return this.each(function(i){var r=n(this),o=r.contents(),s=e?t.call(this,i):t;o.length?o.wrapAll(s):r.append(s)})},unwrap:function(){return this.parent().each(function(){n(this).replaceWith(n(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var i=n(this);(e===t?"none"==i.css("display"):e)?i.show():i.hide()})},prev:function(t){return n(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return n(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var i=this.innerHTML;n(this).empty().append(J(this,t,e,i))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=J(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(n,i){var r;return"string"!=typeof n||1 in arguments?this.each(function(t){if(1===this.nodeType)if(D(n))for(e in n)X(this,e,n[e]);else X(this,n,J(this,i,t,this.getAttribute(n)))}):this.length&&1===this[0].nodeType?!(r=this[0].getAttribute(n))&&n in this[0]?this[0][n]:r:t},removeAttr:function(t){return this.each(function(){1===this.nodeType&&X(this,t)})},prop:function(t,e){return t=P[t]||t,1 in arguments?this.each(function(n){this[t]=J(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(e,n){var i="data-"+e.replace(m,"-$1").toLowerCase(),r=1 in arguments?this.attr(i,n):this.attr(i);return null!==r?Y(r):t},val:function(t){return 0 in arguments?this.each(function(e){this.value=J(this,t,e,this.value)}):this[0]&&(this[0].multiple?n(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var i=n(this),r=J(this,t,e,i.offset()),o=i.offsetParent().offset(),s={top:r.top-o.top,left:r.left-o.left};"static"==i.css("position")&&(s.position="relative"),i.css(s)});if(!this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(t,i){if(arguments.length<2){var r=this[0],o=getComputedStyle(r,"");if(!r)return;if("string"==typeof t)return r.style[C(t)]||o.getPropertyValue(t);if(A(t)){var s={};return n.each(A(t)?t:[t],function(t,e){s[e]=r.style[C(e)]||o.getPropertyValue(e)}),s}}var a="";if("string"==L(t))i||0===i?a=F(t)+":"+H(t,i):this.each(function(){this.style.removeProperty(F(t))});else for(e in t)t[e]||0===t[e]?a+=F(e)+":"+H(e,t[e])+";":this.each(function(){this.style.removeProperty(F(e))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(n(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?r.some.call(this,function(t){return this.test(W(t))},q(t)):!1},addClass:function(t){return t?this.each(function(e){i=[];var r=W(this),o=J(this,t,e,r);o.split(/\s+/g).forEach(function(t){n(this).hasClass(t)||i.push(t)},this),i.length&&W(this,r+(r?" ":"")+i.join(" "))}):this},removeClass:function(e){return this.each(function(n){return e===t?W(this,""):(i=W(this),J(this,e,n,i).split(/\s+/g).forEach(function(t){i=i.replace(q(t)," ")}),void W(this,i.trim()))})},toggleClass:function(e,i){return e?this.each(function(r){var o=n(this),s=J(this,e,r,W(this));s.split(/\s+/g).forEach(function(e){(i===t?!o.hasClass(e):i)?o.addClass(e):o.removeClass(e)})}):this},scrollTop:function(e){if(this.length){var n="scrollTop"in this[0];return e===t?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=e}:function(){this.scrollTo(this.scrollX,e)})}},scrollLeft:function(e){if(this.length){var n="scrollLeft"in this[0];return e===t?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=e}:function(){this.scrollTo(e,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),i=this.offset(),r=d.test(e[0].nodeName)?{top:0,left:0}:e.offset();return i.top-=parseFloat(n(t).css("margin-top"))||0,i.left-=parseFloat(n(t).css("margin-left"))||0,r.top+=parseFloat(n(e[0]).css("border-top-width"))||0,r.left+=parseFloat(n(e[0]).css("border-left-width"))||0,{top:i.top-r.top,left:i.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||a.body;t&&!d.test(t.nodeName)&&"static"==n(t).css("position");)t=t.offsetParent;return t})}},n.fn.detach=n.fn.remove,["width","height"].forEach(function(e){var i=e.replace(/./,function(t){return t[0].toUpperCase()});n.fn[e]=function(r){var o,s=this[0];return r===t?$(s)?s["inner"+i]:_(s)?s.documentElement["scroll"+i]:(o=this.offset())&&o[e]:this.each(function(t){s=n(this),s.css(e,J(this,r,t,s[e]()))})}}),v.forEach(function(t,e){var i=e%2;n.fn[t]=function(){var t,o,r=n.map(arguments,function(e){return t=L(e),"object"==t||"array"==t||null==e?e:T.fragment(e)}),s=this.length>1;return r.length<1?this:this.each(function(t,u){o=i?u:u.parentNode,u=0==e?u.nextSibling:1==e?u.firstChild:2==e?u:null;var f=n.contains(a.documentElement,o);r.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!o)return n(t).remove();o.insertBefore(t,u),f&&G(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},n.fn[i?t+"To":"insert"+(e?"Before":"After")]=function(e){return n(e)[t](this),this}}),T.Z.prototype=n.fn,T.uniq=N,T.deserializeValue=Y,n.zepto=T,n}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function l(t){return t._zid||(t._zid=e++)}function h(t,e,n,i){if(e=p(e),e.ns)var r=d(e.ns);return(s[l(t)]||[]).filter(function(t){return!(!t||e.e&&t.e!=e.e||e.ns&&!r.test(t.ns)||n&&l(t.fn)!==l(n)||i&&t.sel!=i)})}function p(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function d(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function m(t,e){return t.del&&!u&&t.e in f||!!e}function g(t){return c[t]||u&&f[t]||t}function v(e,i,r,o,a,u,f){var h=l(e),d=s[h]||(s[h]=[]);i.split(/\s/).forEach(function(i){if("ready"==i)return t(document).ready(r);var s=p(i);s.fn=r,s.sel=a,s.e in c&&(r=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?s.fn.apply(this,arguments):void 0}),s.del=u;var l=u||r;s.proxy=function(t){if(t=j(t),!t.isImmediatePropagationStopped()){t.data=o;var i=l.apply(e,t._args==n?[t]:[t].concat(t._args));return i===!1&&(t.preventDefault(),t.stopPropagation()),i}},s.i=d.length,d.push(s),"addEventListener"in e&&e.addEventListener(g(s.e),s.proxy,m(s,f))})}function y(t,e,n,i,r){var o=l(t);(e||"").split(/\s/).forEach(function(e){h(t,e,n,i).forEach(function(e){delete s[o][e.i],"removeEventListener"in t&&t.removeEventListener(g(e.e),e.proxy,m(e,r))})})}function j(e,i){return(i||!e.isDefaultPrevented)&&(i||(i=e),t.each(E,function(t,n){var r=i[t];e[t]=function(){return this[n]=x,r&&r.apply(i,arguments)},e[n]=b}),(i.defaultPrevented!==n?i.defaultPrevented:"returnValue"in i?i.returnValue===!1:i.getPreventDefault&&i.getPreventDefault())&&(e.isDefaultPrevented=x)),e}function S(t){var e,i={originalEvent:t};for(e in t)w.test(e)||t[e]===n||(i[e]=t[e]);return j(i,t)}var n,e=1,i=Array.prototype.slice,r=t.isFunction,o=function(t){return"string"==typeof t},s={},a={},u="onfocusin"in window,f={focus:"focusin",blur:"focusout"},c={mouseenter:"mouseover",mouseleave:"mouseout"};a.click=a.mousedown=a.mouseup=a.mousemove="MouseEvents",t.event={add:v,remove:y},t.proxy=function(e,n){var s=2 in arguments&&i.call(arguments,2);if(r(e)){var a=function(){return e.apply(n,s?s.concat(i.call(arguments)):arguments)};return a._zid=l(e),a}if(o(n))return s?(s.unshift(e[n],e),t.proxy.apply(null,s)):t.proxy(e[n],e);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var x=function(){return!0},b=function(){return!1},w=/^([A-Z]|returnValue$|layer[XY]$)/,E={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,s,a,u,f){var c,l,h=this;return e&&!o(e)?(t.each(e,function(t,e){h.on(t,s,a,e,f)}),h):(o(s)||r(u)||u===!1||(u=a,a=s,s=n),(r(a)||a===!1)&&(u=a,a=n),u===!1&&(u=b),h.each(function(n,r){f&&(c=function(t){return y(r,t.type,u),u.apply(this,arguments)}),s&&(l=function(e){var n,o=t(e.target).closest(s,r).get(0);return o&&o!==r?(n=t.extend(S(e),{currentTarget:o,liveFired:r}),(c||u).apply(o,[n].concat(i.call(arguments,1)))):void 0}),v(r,e,u,a,s,l||c)}))},t.fn.off=function(e,i,s){var a=this;return e&&!o(e)?(t.each(e,function(t,e){a.off(t,i,e)}),a):(o(i)||r(s)||s===!1||(s=i,i=n),s===!1&&(s=b),a.each(function(){y(this,e,s,i)}))},t.fn.trigger=function(e,n){return e=o(e)||t.isPlainObject(e)?t.Event(e):j(e),e._args=n,this.each(function(){"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,n){var i,r;return this.each(function(s,a){i=S(o(e)?t.Event(e):e),i._args=n,i.target=a,t.each(h(a,e.type||e),function(t,e){return r=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),r},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.trigger(e)}}),["focus","blur"].forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.each(function(){try{this[e]()}catch(t){}}),this}}),t.Event=function(t,e){o(t)||(e=t,t=e.type);var n=document.createEvent(a[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),j(n)}}(Zepto),function(t){function l(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function h(t,e,i,r){return t.global?l(e||n,i,r):void 0}function p(e){e.global&&0===t.active++&&h(e,null,"ajaxStart")}function d(e){e.global&&!--t.active&&h(e,null,"ajaxStop")}function m(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||h(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void h(e,n,"ajaxSend",[t,e])}function g(t,e,n,i){var r=n.context,o="success";n.success.call(r,t,o,e),i&&i.resolveWith(r,[t,o,e]),h(n,r,"ajaxSuccess",[e,n,t]),y(o,e,n)}function v(t,e,n,i,r){var o=i.context;i.error.call(o,n,e,t),r&&r.rejectWith(o,[n,e,t]),h(i,o,"ajaxError",[n,i,t||e]),y(e,n,i)}function y(t,e,n){var i=n.context;n.complete.call(i,e,t),h(n,i,"ajaxComplete",[e,n]),d(n)}function x(){}function b(t){return t&&(t=t.split(";",2)[0]),t&&(t==f?"html":t==u?"json":s.test(t)?"script":a.test(t)&&"xml")||"text"}function w(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function E(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=w(e.url,e.data),e.data=void 0)}function j(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function T(e,n,i,r){var o,s=t.isArray(n),a=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),r&&(n=i?r:r+"["+(a||"object"==o||"array"==o?n:"")+"]"),!r&&s?e.add(u.name,u.value):"array"==o||!i&&"object"==o?T(e,u,i,n):e.add(n,u)})}var i,r,e=0,n=window.document,o=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,s=/^(?:text|application)\/javascript/i,a=/^(?:text|application)\/xml/i,u="application/json",f="text/html",c=/^\s*$/;t.active=0,t.ajaxJSONP=function(i,r){if(!("type"in i))return t.ajax(i);var f,h,o=i.jsonpCallback,s=(t.isFunction(o)?o():o)||"jsonp"+ ++e,a=n.createElement("script"),u=window[s],c=function(e){t(a).triggerHandler("error",e||"abort")},l={abort:c};return r&&r.promise(l),t(a).on("load error",function(e,n){clearTimeout(h),t(a).off().remove(),"error"!=e.type&&f?g(f[0],l,i,r):v(null,n||"error",l,i,r),window[s]=u,f&&t.isFunction(u)&&u(f[0]),u=f=void 0}),m(l,i)===!1?(c("abort"),l):(window[s]=function(){f=arguments},a.src=i.url.replace(/\?(.+)=\?/,"?$1="+s),n.head.appendChild(a),i.timeout>0&&(h=setTimeout(function(){c("timeout")},i.timeout)),l)},t.ajaxSettings={type:"GET",beforeSend:x,success:x,error:x,complete:x,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:u,xml:"application/xml, text/xml",html:f,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n=t.extend({},e||{}),o=t.Deferred&&t.Deferred();for(i in t.ajaxSettings)void 0===n[i]&&(n[i]=t.ajaxSettings[i]);p(n),n.crossDomain||(n.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(n.url)&&RegExp.$2!=window.location.host),n.url||(n.url=window.location.toString()),E(n);var s=n.dataType,a=/\?.+=\?/.test(n.url);if(a&&(s="jsonp"),n.cache!==!1&&(e&&e.cache===!0||"script"!=s&&"jsonp"!=s)||(n.url=w(n.url,"_="+Date.now())),"jsonp"==s)return a||(n.url=w(n.url,n.jsonp?n.jsonp+"=?":n.jsonp===!1?"":"callback=?")),t.ajaxJSONP(n,o);var j,u=n.accepts[s],f={},l=function(t,e){f[t.toLowerCase()]=[t,e]},h=/^([\w-]+:)\/\//.test(n.url)?RegExp.$1:window.location.protocol,d=n.xhr(),y=d.setRequestHeader;if(o&&o.promise(d),n.crossDomain||l("X-Requested-With","XMLHttpRequest"),l("Accept",u||"*/*"),(u=n.mimeType||u)&&(u.indexOf(",")>-1&&(u=u.split(",",2)[0]),d.overrideMimeType&&d.overrideMimeType(u)),(n.contentType||n.contentType!==!1&&n.data&&"GET"!=n.type.toUpperCase())&&l("Content-Type",n.contentType||"application/x-www-form-urlencoded"),n.headers)for(r in n.headers)l(r,n.headers[r]);if(d.setRequestHeader=l,d.onreadystatechange=function(){if(4==d.readyState){d.onreadystatechange=x,clearTimeout(j);var e,i=!1;if(d.status>=200&&d.status<300||304==d.status||0==d.status&&"file:"==h){s=s||b(n.mimeType||d.getResponseHeader("content-type")),e=d.responseText;try{"script"==s?(1,eval)(e):"xml"==s?e=d.responseXML:"json"==s&&(e=c.test(e)?null:t.parseJSON(e))}catch(r){i=r}i?v(i,"parsererror",d,n,o):g(e,d,n,o)}else v(d.statusText||null,d.status?"error":"abort",d,n,o)}},m(d,n)===!1)return d.abort(),v(null,"abort",d,n,o),d;if(n.xhrFields)for(r in n.xhrFields)d[r]=n.xhrFields[r];var S="async"in n?n.async:!0;d.open(n.type,n.url,S,n.username,n.password);for(r in f)y.apply(d,f[r]);return n.timeout>0&&(j=setTimeout(function(){d.onreadystatechange=x,d.abort(),v(null,"timeout",d,n,o)},n.timeout)),d.send(n.data?n.data:null),d},t.get=function(){return t.ajax(j.apply(null,arguments))},t.post=function(){var e=j.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=j.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var a,r=this,s=e.split(/\s/),u=j(e,n,i),f=u.success;return s.length>1&&(u.url=s[0],a=s[1]),u.success=function(e){r.html(a?t("<div>").html(e.replace(o,"")).find(a):e),f&&f.apply(r,arguments)},t.ajax(u),this};var S=encodeURIComponent;t.param=function(t,e){var n=[];return n.add=function(t,e){this.push(S(t)+"="+S(e))},T(n,t,e),n.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var n,e=[];return t([].slice.call(this.get(0).elements)).each(function(){n=t(this);var i=n.attr("type");"fieldset"!=this.nodeName.toLowerCase()&&!this.disabled&&"submit"!=i&&"reset"!=i&&"button"!=i&&("radio"!=i&&"checkbox"!=i||this.checked)&&e.push({name:n.attr("name"),value:n.val()})}),e},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(e)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(Zepto);

/*! Hammer.JS - v2.0.8 - 2016-04-23
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
!function(a,b,c,d){"use strict";function e(a,b,c){return setTimeout(j(a,c),b)}function f(a,b,c){return Array.isArray(a)?(g(a,c[b],c),!0):!1}function g(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function h(b,c,d){var e="DEPRECATED METHOD: "+c+"\n"+d+" AT \n";return function(){var c=new Error("get-stack-trace"),d=c&&c.stack?c.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",f=a.console&&(a.console.warn||a.console.log);return f&&f.call(a.console,e,d),b.apply(this,arguments)}}function i(a,b,c){var d,e=b.prototype;d=a.prototype=Object.create(e),d.constructor=a,d._super=e,c&&la(d,c)}function j(a,b){return function(){return a.apply(b,arguments)}}function k(a,b){return typeof a==oa?a.apply(b?b[0]||d:d,b):a}function l(a,b){return a===d?b:a}function m(a,b,c){g(q(b),function(b){a.addEventListener(b,c,!1)})}function n(a,b,c){g(q(b),function(b){a.removeEventListener(b,c,!1)})}function o(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function p(a,b){return a.indexOf(b)>-1}function q(a){return a.trim().split(/\s+/g)}function r(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function s(a){return Array.prototype.slice.call(a,0)}function t(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];r(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function u(a,b){for(var c,e,f=b[0].toUpperCase()+b.slice(1),g=0;g<ma.length;){if(c=ma[g],e=c?c+f:b,e in a)return e;g++}return d}function v(){return ua++}function w(b){var c=b.ownerDocument||b;return c.defaultView||c.parentWindow||a}function x(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){k(a.options.enable,[a])&&c.handler(b)},this.init()}function y(a){var b,c=a.options.inputClass;return new(b=c?c:xa?M:ya?P:wa?R:L)(a,z)}function z(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&Ea&&d-e===0,g=b&(Ga|Ha)&&d-e===0;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,A(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function A(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=D(b)),e>1&&!c.firstMultiple?c.firstMultiple=D(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=E(d);b.timeStamp=ra(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=I(h,i),b.distance=H(h,i),B(c,b),b.offsetDirection=G(b.deltaX,b.deltaY);var j=F(b.deltaTime,b.deltaX,b.deltaY);b.overallVelocityX=j.x,b.overallVelocityY=j.y,b.overallVelocity=qa(j.x)>qa(j.y)?j.x:j.y,b.scale=g?K(g.pointers,d):1,b.rotation=g?J(g.pointers,d):0,b.maxPointers=c.prevInput?b.pointers.length>c.prevInput.maxPointers?b.pointers.length:c.prevInput.maxPointers:b.pointers.length,C(c,b);var k=a.element;o(b.srcEvent.target,k)&&(k=b.srcEvent.target),b.target=k}function B(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};b.eventType!==Ea&&f.eventType!==Ga||(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function C(a,b){var c,e,f,g,h=a.lastInterval||b,i=b.timeStamp-h.timeStamp;if(b.eventType!=Ha&&(i>Da||h.velocity===d)){var j=b.deltaX-h.deltaX,k=b.deltaY-h.deltaY,l=F(i,j,k);e=l.x,f=l.y,c=qa(l.x)>qa(l.y)?l.x:l.y,g=G(j,k),a.lastInterval=b}else c=h.velocity,e=h.velocityX,f=h.velocityY,g=h.direction;b.velocity=c,b.velocityX=e,b.velocityY=f,b.direction=g}function D(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:pa(a.pointers[c].clientX),clientY:pa(a.pointers[c].clientY)},c++;return{timeStamp:ra(),pointers:b,center:E(b),deltaX:a.deltaX,deltaY:a.deltaY}}function E(a){var b=a.length;if(1===b)return{x:pa(a[0].clientX),y:pa(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:pa(c/b),y:pa(d/b)}}function F(a,b,c){return{x:b/a||0,y:c/a||0}}function G(a,b){return a===b?Ia:qa(a)>=qa(b)?0>a?Ja:Ka:0>b?La:Ma}function H(a,b,c){c||(c=Qa);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function I(a,b,c){c||(c=Qa);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function J(a,b){return I(b[1],b[0],Ra)+I(a[1],a[0],Ra)}function K(a,b){return H(b[0],b[1],Ra)/H(a[0],a[1],Ra)}function L(){this.evEl=Ta,this.evWin=Ua,this.pressed=!1,x.apply(this,arguments)}function M(){this.evEl=Xa,this.evWin=Ya,x.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function N(){this.evTarget=$a,this.evWin=_a,this.started=!1,x.apply(this,arguments)}function O(a,b){var c=s(a.touches),d=s(a.changedTouches);return b&(Ga|Ha)&&(c=t(c.concat(d),"identifier",!0)),[c,d]}function P(){this.evTarget=bb,this.targetIds={},x.apply(this,arguments)}function Q(a,b){var c=s(a.touches),d=this.targetIds;if(b&(Ea|Fa)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=s(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return o(a.target,i)}),b===Ea)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Ga|Ha)&&delete d[g[e].identifier],e++;return h.length?[t(f.concat(h),"identifier",!0),h]:void 0}function R(){x.apply(this,arguments);var a=j(this.handler,this);this.touch=new P(this.manager,a),this.mouse=new L(this.manager,a),this.primaryTouch=null,this.lastTouches=[]}function S(a,b){a&Ea?(this.primaryTouch=b.changedPointers[0].identifier,T.call(this,b)):a&(Ga|Ha)&&T.call(this,b)}function T(a){var b=a.changedPointers[0];if(b.identifier===this.primaryTouch){var c={x:b.clientX,y:b.clientY};this.lastTouches.push(c);var d=this.lastTouches,e=function(){var a=d.indexOf(c);a>-1&&d.splice(a,1)};setTimeout(e,cb)}}function U(a){for(var b=a.srcEvent.clientX,c=a.srcEvent.clientY,d=0;d<this.lastTouches.length;d++){var e=this.lastTouches[d],f=Math.abs(b-e.x),g=Math.abs(c-e.y);if(db>=f&&db>=g)return!0}return!1}function V(a,b){this.manager=a,this.set(b)}function W(a){if(p(a,jb))return jb;var b=p(a,kb),c=p(a,lb);return b&&c?jb:b||c?b?kb:lb:p(a,ib)?ib:hb}function X(){if(!fb)return!1;var b={},c=a.CSS&&a.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(d){b[d]=c?a.CSS.supports("touch-action",d):!0}),b}function Y(a){this.options=la({},this.defaults,a||{}),this.id=v(),this.manager=null,this.options.enable=l(this.options.enable,!0),this.state=nb,this.simultaneous={},this.requireFail=[]}function Z(a){return a&sb?"cancel":a&qb?"end":a&pb?"move":a&ob?"start":""}function $(a){return a==Ma?"down":a==La?"up":a==Ja?"left":a==Ka?"right":""}function _(a,b){var c=b.manager;return c?c.get(a):a}function aa(){Y.apply(this,arguments)}function ba(){aa.apply(this,arguments),this.pX=null,this.pY=null}function ca(){aa.apply(this,arguments)}function da(){Y.apply(this,arguments),this._timer=null,this._input=null}function ea(){aa.apply(this,arguments)}function fa(){aa.apply(this,arguments)}function ga(){Y.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function ha(a,b){return b=b||{},b.recognizers=l(b.recognizers,ha.defaults.preset),new ia(a,b)}function ia(a,b){this.options=la({},ha.defaults,b||{}),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=a,this.input=y(this),this.touchAction=new V(this,this.options.touchAction),ja(this,!0),g(this.options.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function ja(a,b){var c=a.element;if(c.style){var d;g(a.options.cssProps,function(e,f){d=u(c.style,f),b?(a.oldCssProps[d]=c.style[d],c.style[d]=e):c.style[d]=a.oldCssProps[d]||""}),b||(a.oldCssProps={})}}function ka(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var la,ma=["","webkit","Moz","MS","ms","o"],na=b.createElement("div"),oa="function",pa=Math.round,qa=Math.abs,ra=Date.now;la="function"!=typeof Object.assign?function(a){if(a===d||null===a)throw new TypeError("Cannot convert undefined or null to object");for(var b=Object(a),c=1;c<arguments.length;c++){var e=arguments[c];if(e!==d&&null!==e)for(var f in e)e.hasOwnProperty(f)&&(b[f]=e[f])}return b}:Object.assign;var sa=h(function(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a},"extend","Use `assign`."),ta=h(function(a,b){return sa(a,b,!0)},"merge","Use `assign`."),ua=1,va=/mobile|tablet|ip(ad|hone|od)|android/i,wa="ontouchstart"in a,xa=u(a,"PointerEvent")!==d,ya=wa&&va.test(navigator.userAgent),za="touch",Aa="pen",Ba="mouse",Ca="kinect",Da=25,Ea=1,Fa=2,Ga=4,Ha=8,Ia=1,Ja=2,Ka=4,La=8,Ma=16,Na=Ja|Ka,Oa=La|Ma,Pa=Na|Oa,Qa=["x","y"],Ra=["clientX","clientY"];x.prototype={handler:function(){},init:function(){this.evEl&&m(this.element,this.evEl,this.domHandler),this.evTarget&&m(this.target,this.evTarget,this.domHandler),this.evWin&&m(w(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&n(this.element,this.evEl,this.domHandler),this.evTarget&&n(this.target,this.evTarget,this.domHandler),this.evWin&&n(w(this.element),this.evWin,this.domHandler)}};var Sa={mousedown:Ea,mousemove:Fa,mouseup:Ga},Ta="mousedown",Ua="mousemove mouseup";i(L,x,{handler:function(a){var b=Sa[a.type];b&Ea&&0===a.button&&(this.pressed=!0),b&Fa&&1!==a.which&&(b=Ga),this.pressed&&(b&Ga&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:Ba,srcEvent:a}))}});var Va={pointerdown:Ea,pointermove:Fa,pointerup:Ga,pointercancel:Ha,pointerout:Ha},Wa={2:za,3:Aa,4:Ba,5:Ca},Xa="pointerdown",Ya="pointermove pointerup pointercancel";a.MSPointerEvent&&!a.PointerEvent&&(Xa="MSPointerDown",Ya="MSPointerMove MSPointerUp MSPointerCancel"),i(M,x,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=Va[d],f=Wa[a.pointerType]||a.pointerType,g=f==za,h=r(b,a.pointerId,"pointerId");e&Ea&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Ga|Ha)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var Za={touchstart:Ea,touchmove:Fa,touchend:Ga,touchcancel:Ha},$a="touchstart",_a="touchstart touchmove touchend touchcancel";i(N,x,{handler:function(a){var b=Za[a.type];if(b===Ea&&(this.started=!0),this.started){var c=O.call(this,a,b);b&(Ga|Ha)&&c[0].length-c[1].length===0&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:za,srcEvent:a})}}});var ab={touchstart:Ea,touchmove:Fa,touchend:Ga,touchcancel:Ha},bb="touchstart touchmove touchend touchcancel";i(P,x,{handler:function(a){var b=ab[a.type],c=Q.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:za,srcEvent:a})}});var cb=2500,db=25;i(R,x,{handler:function(a,b,c){var d=c.pointerType==za,e=c.pointerType==Ba;if(!(e&&c.sourceCapabilities&&c.sourceCapabilities.firesTouchEvents)){if(d)S.call(this,b,c);else if(e&&U.call(this,c))return;this.callback(a,b,c)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var eb=u(na.style,"touchAction"),fb=eb!==d,gb="compute",hb="auto",ib="manipulation",jb="none",kb="pan-x",lb="pan-y",mb=X();V.prototype={set:function(a){a==gb&&(a=this.compute()),fb&&this.manager.element.style&&mb[a]&&(this.manager.element.style[eb]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return g(this.manager.recognizers,function(b){k(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),W(a.join(" "))},preventDefaults:function(a){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return void b.preventDefault();var d=this.actions,e=p(d,jb)&&!mb[jb],f=p(d,lb)&&!mb[lb],g=p(d,kb)&&!mb[kb];if(e){var h=1===a.pointers.length,i=a.distance<2,j=a.deltaTime<250;if(h&&i&&j)return}return g&&f?void 0:e||f&&c&Na||g&&c&Oa?this.preventSrc(b):void 0},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var nb=1,ob=2,pb=4,qb=8,rb=qb,sb=16,tb=32;Y.prototype={defaults:{},set:function(a){return la(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(f(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=_(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return f(a,"dropRecognizeWith",this)?this:(a=_(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(f(a,"requireFailure",this))return this;var b=this.requireFail;return a=_(a,this),-1===r(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(f(a,"dropRequireFailure",this))return this;a=_(a,this);var b=r(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function b(b){c.manager.emit(b,a)}var c=this,d=this.state;qb>d&&b(c.options.event+Z(d)),b(c.options.event),a.additionalEvent&&b(a.additionalEvent),d>=qb&&b(c.options.event+Z(d))},tryEmit:function(a){return this.canEmit()?this.emit(a):void(this.state=tb)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(tb|nb)))return!1;a++}return!0},recognize:function(a){var b=la({},a);return k(this.options.enable,[this,b])?(this.state&(rb|sb|tb)&&(this.state=nb),this.state=this.process(b),void(this.state&(ob|pb|qb|sb)&&this.tryEmit(b))):(this.reset(),void(this.state=tb))},process:function(a){},getTouchAction:function(){},reset:function(){}},i(aa,Y,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(ob|pb),e=this.attrTest(a);return d&&(c&Ha||!e)?b|sb:d||e?c&Ga?b|qb:b&ob?b|pb:ob:tb}}),i(ba,aa,{defaults:{event:"pan",threshold:10,pointers:1,direction:Pa},getTouchAction:function(){var a=this.options.direction,b=[];return a&Na&&b.push(lb),a&Oa&&b.push(kb),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&Na?(e=0===f?Ia:0>f?Ja:Ka,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?Ia:0>g?La:Ma,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return aa.prototype.attrTest.call(this,a)&&(this.state&ob||!(this.state&ob)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=$(a.direction);b&&(a.additionalEvent=this.options.event+b),this._super.emit.call(this,a)}}),i(ca,aa,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[jb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&ob)},emit:function(a){if(1!==a.scale){var b=a.scale<1?"in":"out";a.additionalEvent=this.options.event+b}this._super.emit.call(this,a)}}),i(da,Y,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[hb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Ga|Ha)&&!f)this.reset();else if(a.eventType&Ea)this.reset(),this._timer=e(function(){this.state=rb,this.tryEmit()},b.time,this);else if(a.eventType&Ga)return rb;return tb},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===rb&&(a&&a.eventType&Ga?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=ra(),this.manager.emit(this.options.event,this._input)))}}),i(ea,aa,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[jb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&ob)}}),i(fa,aa,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:Na|Oa,pointers:1},getTouchAction:function(){return ba.prototype.getTouchAction.call(this)},attrTest:function(a){var b,c=this.options.direction;return c&(Na|Oa)?b=a.overallVelocity:c&Na?b=a.overallVelocityX:c&Oa&&(b=a.overallVelocityY),this._super.attrTest.call(this,a)&&c&a.offsetDirection&&a.distance>this.options.threshold&&a.maxPointers==this.options.pointers&&qa(b)>this.options.velocity&&a.eventType&Ga},emit:function(a){var b=$(a.offsetDirection);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),i(ga,Y,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[ib]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime<b.time;if(this.reset(),a.eventType&Ea&&0===this.count)return this.failTimeout();if(d&&f&&c){if(a.eventType!=Ga)return this.failTimeout();var g=this.pTime?a.timeStamp-this.pTime<b.interval:!0,h=!this.pCenter||H(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,h&&g?this.count+=1:this.count=1,this._input=a;var i=this.count%b.taps;if(0===i)return this.hasRequireFailures()?(this._timer=e(function(){this.state=rb,this.tryEmit()},b.interval,this),ob):rb}return tb},failTimeout:function(){return this._timer=e(function(){this.state=tb},this.options.interval,this),tb},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==rb&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),ha.VERSION="2.0.8",ha.defaults={domEvents:!1,touchAction:gb,enable:!0,inputTarget:null,inputClass:null,preset:[[ea,{enable:!1}],[ca,{enable:!1},["rotate"]],[fa,{direction:Na}],[ba,{direction:Na},["swipe"]],[ga],[ga,{event:"doubletap",taps:2},["tap"]],[da]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var ub=1,vb=2;ia.prototype={set:function(a){return la(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?vb:ub},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&rb)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===vb||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(ob|pb|qb)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof Y)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(f(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(f(a,"remove",this))return this;if(a=this.get(a)){var b=this.recognizers,c=r(b,a);-1!==c&&(b.splice(c,1),this.touchAction.update())}return this},on:function(a,b){if(a!==d&&b!==d){var c=this.handlers;return g(q(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this}},off:function(a,b){if(a!==d){var c=this.handlers;return g(q(a),function(a){b?c[a]&&c[a].splice(r(c[a],b),1):delete c[a]}),this}},emit:function(a,b){this.options.domEvents&&ka(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&ja(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},la(ha,{INPUT_START:Ea,INPUT_MOVE:Fa,INPUT_END:Ga,INPUT_CANCEL:Ha,STATE_POSSIBLE:nb,STATE_BEGAN:ob,STATE_CHANGED:pb,STATE_ENDED:qb,STATE_RECOGNIZED:rb,STATE_CANCELLED:sb,STATE_FAILED:tb,DIRECTION_NONE:Ia,DIRECTION_LEFT:Ja,DIRECTION_RIGHT:Ka,DIRECTION_UP:La,DIRECTION_DOWN:Ma,DIRECTION_HORIZONTAL:Na,DIRECTION_VERTICAL:Oa,DIRECTION_ALL:Pa,Manager:ia,Input:x,TouchAction:V,TouchInput:P,MouseInput:L,PointerEventInput:M,TouchMouseInput:R,SingleTouchInput:N,Recognizer:Y,AttrRecognizer:aa,Tap:ga,Pan:ba,Swipe:fa,Pinch:ca,Rotate:ea,Press:da,on:m,off:n,each:g,merge:ta,extend:sa,assign:la,inherit:i,bindFn:j,prefixed:u});var wb="undefined"!=typeof a?a:"undefined"!=typeof self?self:{};wb.Hammer=ha,"function"==typeof define&&define.amd?define(function(){return ha}):"undefined"!=typeof module&&module.exports?module.exports=ha:a[c]=ha}(window,document,"Hammer");
//# sourceMappingURL=hammer.min.js.map

console.log('hello world');

//填充dom
var dom = `
<div id="page">
    <div id="titleBlock">
        <img class="vw100" src="https://piccdn.luojilab.com/fe-oss/default/MTU3NzQzMDA0MTQ5.jpeg" />
    </div>
    <div id="likeBlock">
        <div id="guideBar">
            
            <div class="slideBlock big">
                <div class="timeName big">
                    赚大钱
                </div>
                <div class="time small">
                    14：30-15：00
                </div>
            </div>
            <div class="slideBlock">
                <div class="timeName">
                    变好看
                </div>
                <div class="time">
                    14：30-15：00
                </div>
            </div>            
            <div class="slideBlock">
                <div class="timeName">
                    赚大钱
                </div>
                <div class="time">
                    14：30-15：00
                </div>
            </div>

            <div class="slideBlock">
                <div class="timeName">
                    变好看
                </div>
                <div class="time">
                    14：30-15：00
                </div>
            </div>            
            <div class="slideBlock">
                <div class="timeName">
                    赚大钱
                </div>
                <div class="time">
                    14：30-15：00
                </div>
            </div>

            <div class="slideBlock">
                <div class="timeName">
                    变好看
                </div>
                <div class="time">
                    14：30-15：00
                </div>
            </div>

        </div>

        <div id="choose">
            <div class="zhuandaqian">
                <div class="chooesTeacher vw100">
                    <img src="https://piccdn.luojilab.com/fe-oss/default/MTU3NjU3NzIwOTM5.jpeg" class="teacherHead"/>            
                    <div class="teacherName">马徐骏</div>
                    <div class="teacherInfo">专栏做作者</div>
                    <div class="teacherTalk">演讲：《中国》</div>
                    <div class="teacherLikeEvent" 
                        data-info="{}"
                    ></div>
                </div>
            </div>
        </div>

        <div id="bottomRules" class="mt7">
            <div class="jumpBlockzhc"></div>
            <img class="vw100" src="https://piccdn.luojilab.com/fe-oss/default/MTU3NzQzMDA0NjA3.jpeg" /> 
            <div id="jpblock" class="hidden">
                <div id="jpApp"></div>
                <div id="jpSmallApp"></div>
                <img class="vw100" src="https://piccdn.luojilab.com/fe-oss/default/MTU3NzA5OTM5NzAx.png" class="closeSeeAllMask"/>
            </div>
        </div>
    </div>


    <div id="mask" class="hidden">
        <div class="likeBlock">
            <div class="maskTeacherBlock">
                <img class="maskTeacherPic" src="https://piccdn.luojilab.com/fe-oss/default/MTU3Njc0NDAyMjUy.png" />
                <img class="maskLetterBG" src="https://piccdn.luojilab.com/fe-oss/default/MTU3NjgyNjQ0OTQy.png" /> 
                <img class="maskLetterTop" src="https://piccdn.luojilab.com/fe-oss/default/MTU3NjgyNjQ1MDAw.png" /> 
            </div>
            <div class="maskWindow">
                <div>
                    <input class="orcinput" type="text" name="firstname" value="+86" style="z-index:999">
                    <input class="phoneinput" type="text" name="firstname" value="123456677">
                </div>
                <div class="sendLikeMessageBlock tcenter">
                    <span>输入手机号参与本轮抽奖及终极大奖抽奖</span>
                    <span>中奖后将会通过手机号进行通知</span>
                    <img src="" class="sendLikeMessage" />
                </div>
            </div>
            <img src="https://piccdn.luojilab.com/fe-oss/default/MTU3Njc0NjUxODAw.png" class="closeMask"/>
        </div>
    </div>

    <div id="maskSeeAll" class="hidden">
        <div class="seeAllBlock">
        </div>
        <img src="https://piccdn.luojilab.com/fe-oss/default/MTU3Njc0NjUxODAw.png" class="closeSeeAllMask"/>
        </div>

</div>`;

$('#root').html(dom);

//全局变量
var allData = {};
var userAllData = {};

function init(){
    //初始化顶部滑动条
    initTopBar();
    //初始化数据,构建HTML
    initData();
}
function initTopBar() {
    var bar = document.querySelector('#guideBar');
    var hammertime = new Hammer(bar);
    var originleft = 0;

    hammertime.on('panstart', function(ev) {
        originleft = parseInt(bar.style.marginLeft ? bar.style.marginLeft :0);
    });

    hammertime.on('pan', function(ev) {
        // if(ev.isFirst){
        //     originleft = parseInt(bar.style.marginLeft ? bar.style.marginLeft :0);
        // }
        //左边极限控制
        if (originleft + ev.deltaX >= 0) {
            bar.style.marginLeft = 0+"px";
        } else
        //右边极限控制
        if ($("#lastBarTip")[0].getBoundingClientRect().right <= window.innerWidth) {
            // bar.style.marginRight = 0+"px";
            if(ev.deltaX > 0){
                bar.style.marginLeft = originleft + ev.deltaX+"px";
            }
        } else {
            bar.style.marginLeft = originleft + ev.deltaX+"px";
        }

    });
}
function initData() {
    if(navigator.userAgent.indexOf('igetapp')>0) {
        //app内
        var Asio = window.Asio;
        
        Asio.send('agent.info').then(function(res){
            var user_id = res.data.userid;
            var user_name = res.data.nickname;
            //静态数据
            Asio.send('network.load', {
                url: '$_ENTREE_DOMAIN_$/vote/api/homeinfo?uid='+user_id+'&user_type=app',
                method: 'GET',
                params: {
                    uid: user_id,
                    user_type: 'app',
                },//吐槽，get必须加params否则不给发。
                contentType: 'application/x-www-form-urlencoded',
                proxyType: 'gateway/entree',
                }).then(function(data){
                    allData = data.data.data.subject_list;//app内是data外为c
                    console.log("allData请求完成",allData);
                    afterDataSuccess();
                });
            //用户数据
            Asio.send('network.load', {
                url: '$_ENTREE_DOMAIN_$/vote/api/user',
                method: 'POST',
                params: {
                    uid: user_id,
                    user_type: 'app',
                },
                contentType: 'application/x-www-form-urlencoded',
                proxyType: 'gateway/entree',
            }).then(function(data){
                userAllData = data.data.data;//app内是data外为c
                userAllData.nickName = user_name;
                console.log("userAllData请求完成",userAllData);
                afterDataSuccess();
            });   
        });


    } else {
        //微信
        //请求静态数据
        $.ajax({
            method: "GET",
            url: "/api/spring-vote/homeinfo",
            data: { uid: window.__wxInfo.openid, user_type: "wechat" },
            success: function(data) {
                console.log(data);
                allData = data.c.data.subject_list;
                
                afterDataSuccess();
            }
            // beforeSend: function( xhr ) {
            // //   xhr.overrideMimeType( "text/plain; charset=x-user-defined" );
            // }
        })
        //请求用户数据
        $.ajax({//发送喜欢请求
            type: "POST",
            url: "/api/spring-vote/user",
            dataType : "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({
                uid: window.__wxInfo.openid,
                user_type: 'wechat',
            }),
            success: function(data) {
                userAllData = data.c.data;
                console.log("userAllData请求完成",userAllData);
                afterDataSuccess();
            }
            // beforeSend: function( xhr ) {
            // //   xhr.overrideMimeType( "text/plain; charset=x-user-defined" );
            // }
        })
    }
}
function afterDataSuccess (){
    if(!(userAllData.phone === undefined)&&allData.length) {
        //拿到后需要调一调数据，补一补我需要的
        correctData();
        //初始化页面内容
        initPageInfo();
        //初始化事件
        initEvent();
    }
}
//组装我需要的数据：
var imgs = {
    //开始投票中
        //未投票：选择喜欢的
        chooseLike:'https://piccdn.luojilab.com/fe-oss/default/MTU3NzQzMDA0MTE4.jpeg',
        //投了票：感谢参与
        thanks:'https://piccdn.luojilab.com/fe-oss/default/MTU3NzQzMDA0NDMy.jpeg',
    //投票截止
        //未投票：互动已结束
        end:'https://piccdn.luojilab.com/fe-oss/default/MTU3Njg0ODY4MzM4.jpeg',
    //开奖公布
        //未中奖：啊！与本时段
        noGift:'https://piccdn.luojilab.com/fe-oss/default/MTU3NzQzMDA0MDY1.jpeg',
        //中奖：恭喜你
        getGift:'https://piccdn.luojilab.com/fe-oss/default/MTU3NzQzMDA0Mzgx.jpeg',

    //喜欢
        like:"https://piccdn.luojilab.com/fe-oss/default/MTU3NjkzNjQyNDA5.png",
    //已喜欢
        liked:"https://piccdn.luojilab.com/fe-oss/default/MTU3NjkzNjQyMzk3.png",
    //喜欢灰色
        nolike:"https://piccdn.luojilab.com/fe-oss/default/MTU3NjkzNjQyMzcy.png",

    //奖品模块状态
        //全程9小时
        nineHour:"https://piccdn.luojilab.com/fe-oss/default/MTU3NzQzMDA0MTk2.jpeg",
        //未开奖

        
}
function correctData (){
    for(var i = 0; i < allData.length; i++) {
        var topimg = '';//顶部的这句话展示哪个图。
        var sentense = '';//顶部图跟着的一句话。
        var barBottom = allData[i].duration;//顶部bar底下的信息 ，默认时间 互动结束 正在直播

        //把userAllData的数据合并过来。
        allData[i].has_voted = userAllData.HasVotedInfo[allData[i].id] ? true:false;

        if(allData[i].status === 0){//未开始
            if(allData[i].type === 1){//如果是超级大奖需要特殊文案
                barBottom = '预计'+allData[i].duration+'开奖';
            }
            if( !allData[i].has_voted ){//未投票
                topimg = imgs.chooseLike;
                sentense = '投票预计1月24日 '+allData[i].duration
            } else {//已投票
                topimg = imgs.thanks;
                sentense = '参与手机号： '+userAllData.phone;
                if(navigator.userAgent.indexOf('igetapp')>0) {
                    sentense = '参与用户： '+userAllData.nickName;
                }
            }
        }
        if(allData[i].status === 1){//已开始
            barBottom = '正在互动';
            if( !allData[i].has_voted ){//未投票
                topimg = imgs.chooseLike;
                sentense = '投票预计1月24日 '+allData[i].duration.substr(allData[i].duration.length-5) + "截止"
            } else {//已投票
                topimg = imgs.thanks;
                sentense = '参与手机号： '+userAllData.phone;
                if(navigator.userAgent.indexOf('igetapp')>0) {
                    sentense = '参与用户： '+userAllData.nickName;
                }
            }
        }
        if(allData[i].status === 2){//已结束
            barBottom = '互动结束';
            if( !allData[i].has_voted ){//未投票
                topimg = imgs.end;
                // sentense = '投票预计1月24日 '+allData[i].duration
            } else {//已投票
                topimg = imgs.noGift;
                // sentense = '参与手机号： '+userAllData.phone
                if(userAllData.LuckyInfo[allData[i].id]){//中奖了！
                    topimg = imgs.getGift;
                }
            }
        }
        //注入数据
        allData[i].topimg = topimg;//注入顶部那句话的图片地址
        allData[i].sentense = sentense;//注入顶部
        allData[i].barBottom = barBottom;//顶部bar底下的信息 ，默认时间 互动结束 正在直播

        //guest_list有时接口返回为空时为空数组，有时接口返回为null 会导致报错因此特殊处理。
        if(!allData[i].guest_list){allData[i].guest_list = [];}
        //先过滤一遍，如果发现这个tab下有已喜欢的，剩下的都要不可点
        for (var k = 0; k < allData[i].guest_list.length; k++) {
            if (userAllData.Detail[allData[i].guest_list[k].id]){//从allData中拿id,对照userall检查是否投过票
                allData[i].hasLikedTeacher = true;
            }
        }
        //真正渲染的填写
        for (var j = 0; j < allData[i].guest_list.length; j++) {
            allData[i].guest_list[j].has_voted = allData[i].has_voted; //每一个镶嵌数据的老师框里还需要知道是否已经投过票
            allData[i].guest_list[j].index = i; //每一个镶嵌数据要知道自己是哪一tab下的
            allData[i].guest_list[j].openTime = allData[i].duration;//点击的时候弹窗要知道时间。

            //调整按钮
            var likeButton = imgs.like;//喜欢/已喜欢/喜欢不可点
            var likeCanClick = true;
            if(allData[i].status === 0){//未开始的置灰
                likeButton = imgs.nolike;
                likeCanClick = false;
            }
            if(allData[i].status === 2 || allData[i].hasLikedTeacher === true){//已结束的全部置灰
                likeButton = imgs.nolike;
                likeCanClick = false;
            }
            if(userAllData.Detail[allData[i].guest_list[j].id]){//已点击过喜欢的变成已喜欢
                likeButton = imgs.liked;
                likeCanClick = false;
            }
            allData[i].guest_list[j].likeButton = likeButton;
            allData[i].guest_list[j].likeCanClick = likeCanClick;

            //注入数据
            allData[i].guest_list[j].tabIndex = j;//这个块是第几个块
        }
    }
}
function initEvent (){
    $('showPage').click(function(){
        console.log('222')
    });
    //标签监听，点击哪个时段展示哪个
    $('#root').delegate( '.showPage', "click", function(e){console.log('111');
        //先把所有的都隐藏了
        $('.pageBlock').hide();
        //再展示该展示的,这里可以考虑动画。
        $('.'+$(this).data('page')).show();
        //把顶部的bar变成大的 高亮
        oneBig(this);
    });
    //投票弹出关闭
    $('#root').delegate( '.closeMask', "click touchstart", function(e){
        $('#mask').hide();
    }); 
    $('#root').delegate( '.closeSeeAllMask', "click touchstart", function(e){
        $('#maskSeeAll').hide();
    }); 
    //点击喜欢
    $('#root').delegate( '.teacherLikeEvent', "click", function(e){
        //初始化弹窗内容
        var obj = $(this).data('info');//这个老师的所有相关信息都绑在这里了。
        if(navigator.userAgent.indexOf('igetapp')>0){//app内 直接发或者登录
            Asio.send('agent.info').then(function(res){
                var info = res.data;
                var user_id = res.data.userid;
                obj.user_id = user_id;
                if(info.islogin){//判断是否登录
                    sendLikeMessage(obj);
                } else {
                    Asio.send('ui.login');
                }
            });
        } else {//微信内 判断是否已经投过
            //取cookie
            var phonenum = (getCookie("phonenum") && !(getCookie("phonenum") == 'undefined')) ?getCookie("phonenum"): '';
            var area = (getCookie("area") && !(getCookie("area") == 'undefined')) ? getCookie("area") : '';
            if(!(area&&phonenum)){//如果未输入过手机号 则弹出投票框
                initMaskInfo(obj);
                $('#mask').show();
            }else{//弹出引导框
                initGideInfo(obj);
                $('#mask').show();
                sendLikeMessage(obj);
            }    
        }
    }); 
}
function initGideInfo (obj){
    //为防止事件重复绑定，直接重建dom。
    $(".maskTeacherPic").attr("src", obj.full_image);//先放一个，再改，兼容app的方法。
    //遍历，他喜欢了谁
    var big_img = '';
    for(var i = 0; i< allData[obj.index].guest_list.length; i++) {
        if(allData[obj.index].guest_list[i].like){
            big_img = allData[obj.index].guest_list.full_image
        }
    }
    if(!big_img === ''){
        $(".maskTeacherPic").attr("src", big_img);//把喜欢的老师头放上去
    }

    $('.sendLikeMessageBlock').html('<img src="https://piccdn.luojilab.com/fe-oss/default/MTU3NjgxNzU1OTA1.png" class="sendLikeMessage" />');//确定按钮
    $('.sendLikeMessage').on('touchend', function(){
        sendLikeMessage(obj);
    });
    if(navigator.userAgent.indexOf('igetapp')>0) {//app内
        $('.maskWindow').attr('style','background-image: url(https://piccdn.luojilab.com/fe-oss/default/MTU3NjkzMDQxMjAz.png);height: 70vw;background-size: contain;');
        $('.maskWindow').html('<span class="linePhoneinput3">预计开奖时间 '+obj.openTime+'</span><div id="appShareBtn"></div>')
    } else {//微信内
        $('.maskWindow').attr('style','background-image: url(https://piccdn.luojilab.com/fe-oss/default/MTU3NzQzMDA0NDIx.png);height: 70vw;');
        $('.maskWindow').html('<span class="linePhoneinput3">预计开奖时间 '+obj.openTime+'</span><div class=""></div><div class=""></div>')
    }
}
function initMaskInfo (obj){
    $(".maskTeacherPic").attr("src", obj.full_image);
    //为防止事件重复绑定，直接重建dom。
    $('.sendLikeMessageBlock').html('<span class="linePhoneinput1">输入手机号参与本轮抽奖及终极大奖抽奖</span><span class="linePhoneinput2">中奖后将会通过手机号进行通知</span><img src="https://piccdn.luojilab.com/fe-oss/default/MTU3NjgxNzU1OTA1.png" class="sendLikeMessage" />');//确定按钮
    $('.sendLikeMessage').on('touchend', function(){
        sendLikeMessage(obj);
    });
}
function sendLikeMessage(obj){
    if(navigator.userAgent.indexOf('igetapp')>0) {
        //app内
        var Asio = window.Asio;
        //先去取登录信息拿uid。
                      
        Asio.send('network.load', {
            url: '$_ENTREE_DOMAIN_$/vote/api/like',
            method: 'POST',
            params: {
                "area_code": $('.orcinput').val()?$('.orcinput').val():getCookie("area"),
                "av": "string",
                "device": "string",
                // "guest_unid": obj.unid,//老师的拼音
                "guest_id": obj.id,//老师的id
                "os": window.___datasourse___.os,
                "phone": $('.phoneinput').val()?$('.phoneinput').val():getCookie("phonenum"),
                // "subject_unid": obj.subject_id,
                "subject_id":obj.subject_id,
                "uid": obj.user_id,
                "user_type": "app",
            },
            contentType: 'application/x-www-form-urlencoded',
            proxyType: 'gateway/entree',
        }).then(function(e){
            console.log('完成完成完成',e);
            //展示引导框
            initGideInfo(obj);
            $('#mask').show();
        });

        
    } else { 
        //微信
        // var phonenum = getCookie("phonenum");
        // var area = getCookie("area");
        $.ajax({//发送喜欢请求
            type: "POST",
            url: "/api/spring-vote/like",
            dataType : "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({ 
                "area_code": $('.orcinput').val()?$('.orcinput').val():getCookie("area"),
                "av": "string",
                "device": "string",
                // "guest_unid": obj.unid,//老师的拼音
                "guest_id": obj.id,//老师的id
                "os": window.___datasourse___.os,
                "phone": $('.phoneinput').val()?$('.phoneinput').val():getCookie("phonenum"),
                // "subject_unid": obj.subject_id,
                "subject_id":obj.subject_id,
                "uid": window.__wxInfo.openid,//仅微信,openid
                "user_type": "wechat",
             }),
            success: function(data) {
                //隐藏弹窗
                $('#mask').hide();

                //弹出引导框
                initGideInfo(obj);
                $('#mask').show();
            }
            // beforeSend: function( xhr ) {
            // //   xhr.overrideMimeType( "text/plain; charset=x-user-defined" );
            // }
        })
    }
    //不论成功与否，先禁用掉当前tab的其他投票
    canotVoteOnThisPage(obj);

    //变更顶部bar
    if(navigator.userAgent.indexOf('igetapp')>0) {
        $('.'+obj.subject_id+'tab').html('参与用户： '+userAllData.nickName);
    } else {
        $('.'+obj.subject_id+'tab').html('参与手机号： '+($('.phoneinput').val()?$('.phoneinput').val():getCookie("phonenum")));
    }

    //cookie写入
    setCookie("phonenum",$('.phoneinput').val()?$('.phoneinput').val():getCookie("phonenum"),30);
    setCookie("area",$('.orcinput').val()?$('.orcinput').val():getCookie("area"),30);

    //投票埋点
    asio.nlog('s_gala_vote', {
        "source": window.___datasourse___.container,
        "tab": obj.subject_id,
        "guest_id": obj.id,
    });

}
function initPageInfo (){
    //顶部v
    var html = '';
    //底部选择标签
    var htmlTab = '';
    for( var i = 0; i < allData.length; i++){
        //头部信息
        html += '<div '+(i  === allData.length - 1 ? 'id="lastBarTip"': '')+' data-page="'+allData[i].id+'" class="slideBlock showPage '+ (allData[i].is_big? 'big': '') +'"><div class="timeName '+ (allData[i].is_big? 'big': '') +'">'+allData[i].title+'</div><div class="time small">'+allData[i].barBottom+'</div></div>';
        //每一页的信息
        htmlTab += '<div class="'+allData[i].id+' pageBlock">';
        //顶部文字
        htmlTab += '<div id="choosetip"><img class="vw100" src="'+allData[i].topimg+'" /><div class="vw100 '+allData[i].id+' '+allData[i].id+'tab">'+allData[i].sentense+'</div></div>';
        //guest_list有时接口返回为空时为空数组，有时接口返回为null 会导致报错因此特殊处理。
        if(allData[i].guest_list === null){allData[i].guest_list = []}
        //组装每一页的老师dom
        for (var j = 0; j < (allData[i].guest_list?allData[i].guest_list.length:0); j++){
            htmlTab += '<div class="chooesTeacher vw100"><img src="'+allData[i].guest_list[j].avatar+'" class="teacherHead"/><div class="teacherName">'+allData[i].guest_list[j].name+'</div><div class="teacherInfo">'+allData[i].guest_list[j].title+'</div><div class="teacherTalk">演讲:'+allData[i].guest_list[j].lecture_title+'</div><div style="background-image:url('+allData[i].guest_list[j].likeButton+');" class="teacherLike '+( allData[i].guest_list[j].likeCanClick ? "teacherLikeEvent" : "")+'" data-info=\''+JSON.stringify(allData[i].guest_list[j])+'\' ></div></div>';
        }
        
        //组装底部奖品介绍及电话号码
        htmlTab += '<div class="giftBlock vw100 mt5"><img class="linePic vw100" src="https://piccdn.luojilab.com/fe-oss/default/MTU3NzQzMDA0MTk2.jpeg" /><img class="giftPic mt3" src="'+allData[i].logo+'" /></div>';

        //组装publish_info如电话号码
        var maxLength = 50;
        if(allData[i].publish_info.length > maxLength && allData[i].publish_info.length > 0){//超过指定字符数则显示...查看全部。
            htmlTab += '<div class="vw100 mt5 publisInfo">'+allData[i].publish_info.substr(0,maxLength)+'...<a class="seeall" onclick="seeall()">查看全部</a></div>';
            $('.seeAllBlock').html(allData[i].publish_info);
        }else{
            htmlTab += '<div class="vw100 mt5 publisInfo">'+allData[i].publish_info+'</div>';
        }

        htmlTab += '</div>';
    }
    $('#guideBar').html(html);
    $('#choose').html(htmlTab);
    //微信页面底部有跳去得到/小得到的按钮
    if(!(navigator.userAgent.indexOf('igetapp')>0)) {
        $('#jpblock').show();
    }
    //展示默认tab项 优先最后big高亮tab  次先高亮tab 最次第一个。
    showOneTab();
}
function showOneTab(){
    //展示默认tab项 优先最后big高亮tab  次先高亮tab 最次第一个。
    //所有的都隐藏起来
    var pageBlocks = $('.pageBlock');
    pageBlocks.hide();
    //遍历滑动头找big
    var slideBlocks = $('.slideBlock');
    var target = 0//默认展示第一个
    for(var i = 0; i < slideBlocks.length; i++) {
        if($($('.slideBlock')[i]).hasClass('big')){
            target = i;//最后一个big
        } 
    }
    $(pageBlocks[target]).show();

    //曝光埋点
    asio.nlog('s_expo_gala', {
        "source": (window.___datasourse___.container=="wechat" ?1:0),
        "tab":  $(slideBlocks[target]).data('page')
    });
}
function oneBig (ele) {
    //先把所有的都变小
    var slideBlocks = $('.slideBlock');
    for(var i = 0; i < slideBlocks.length; i++) {
        if($($('.slideBlock')[i]).hasClass('big')){
            $($('.slideBlock')[i]).removeClass('big');
            $($('.slideBlock')[i]).find('.big').removeClass('big');
        } 
    }
    //再把指定的变大
    $(ele).addClass('big');
    $(ele).find('.timeName').addClass('big');

    //曝光埋点
    asio.nlog('s_expo_gala', {
        "source": (window.___datasourse___.container=="wechat" ?1:0),
        "tab": $(ele).data('page')
    });
}
function seeall () {
    $('#maskSeeAll').show();
}
//vote success 我们投票之后，不论返回，先禁用掉再次投票
function canotVoteOnThisPage (obj) {
    //所有的喜欢老师按钮
    var teacherLikes = $('.' + obj.subject_id).find('.teacherLike');
    for (var i = 0; i < teacherLikes.length; i++) {
        $(teacherLikes[i]).removeClass('teacherLikeEvent');
        if(i === obj.tabIndex) {
            $(teacherLikes[i]).attr('style','background-image:url('+imgs.liked+');');
        } else {
            $(teacherLikes[i]).attr('style','background-image:url('+imgs.nolike+');');
        }
    }
}
//cookie方法用于手机号缓存
function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime()+(exdays*24*60*60*1000));
  var expires = "expires="+d.toGMTString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}
function getCookie(cname){
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) 
  {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
  return "";
}

//打点方法初始化埋点方法初始化
var asio =new window.Asio(window.___datasourse___.container);

//取分享人信息


//加载完了开始填充业务
$(function(){
    //初始化
    init();

    //底部按钮
    $('#root').delegate( '#jpApp', "touchstart", function(e){
        var target = encodeURIComponent('https://pic1cdn.luojilab.com/html/p/q46W0g0/1OM3yXqPJvsZ5W6xEKkO.html');
        var ddurl = 'igetapp://activity/detail?url='+target;
        // ddurl跳转 微信内唤醒app
        Asio.weLaunch(ddurl);
        //  这个是app内跳转的
        // Asio.send('jump.ddURL', {
        //     ddURL: url,
        // })

        if($(this).parent().selector[0].id == "jpblock"){
            //跳得到埋点
            asio.nlog('s_gala_open_app', {
                "source": window.___datasourse___.container,
            });
        } else {
            //跳得到埋点
            asio.nlog('s_gala_go_dedao', {
                "source": window.___datasourse___.container,
            });
        }
    }); 
    $('#root').delegate( '#jpSmallApp', "touchstart", function(e){
        //ddurl跳转 小得到跳转 微信内调不了
        // Asio.send('jump.universal', {
        //     route: '',
        //     appId: '1279715325',
        //     schemes: 'igetcool://',
        //     package: 'com.dedao.juvenile',
        //     beBornPage: 'com.dedao.juvenile.business.splash.SplashActivity',
        //     homePage: 'https://www.igetcool.com/',
        //     url: 'igetcool://juvenile.dedao.app/go/h5',
        //   })

        //跳小得到埋点
        asio.nlog('s_gala_go_sndd', {
            "source": window.___datasourse___.container,
        });
        
        //跳转应用宝下载地址
        window.location.href = 'https://a.app.qq.com/o/simple.jsp?pkgname=com.dedao.juvenile';
    }); 
    //取分享信息
    
    window.shareDataInfo = {}
    //分享 APP内有效
    if(navigator.userAgent.indexOf('igetapp')>0) {
        window.Asio.send('network.load', {
            url: '$_ENTREE_DOMAIN_$/vote/api/share/info',
            method: 'GET',
            params: {},//吐槽，get必须加params否则不给发。
            contentType: 'application/x-www-form-urlencoded',
            proxyType: 'gateway/entree',
            }).then(function(data){
                console.log('分享信息',data);

                window.shareDataInfo = data;
            });
    }
    //页面中的分享按钮监听
    $('#root').delegate( '#appShareBtn', "touchstart", function(e) {
        var shareurl = ( window.___datasourse___.env === 'testing' ? 'http://zt.iget.dev.didatrip.com/wxbase/t/8LWrvGg/mmk7K32KYzClOxWkGp5D' : 'http://zt.iget.dev.didatrip.com/wxbase/p/q46W0g0/1OM3yXqPJvsZ5W6xEKkO' )
        var conf = {
            type: 0,
            url: shareurl,
            title: window.shareDataInfo.data.data.share_title,
            image: window.shareDataInfo.data.data.share_image,//必须保障url有效，否则ios无法弹出
            describe: window.shareDataInfo.data.data.share_content,
            channel: [0, 1, 6],
        }
        Asio.send('agent.share', conf);

        //分享按钮埋点
        asio.nlog('s_gala_share', {
            "source": window.___datasourse___.container,
        });
    }); 
    //跳知识春晚主会场。
    $('#root').delegate( '.jumpBlockzhc', "touchstart", function(e){
        //跳主会场埋点
        asio.nlog('s_gala_return', {
            "source": (window.___datasourse___.container == "wechat" ? 1:0),
        });
        
        var realurl = encodeURIComponent('https://pic1cdn.luojilab.com/html/p/p5BWv4p/RmXkEvzz4Jtw2mXy22Bl.html');
        if(navigator.userAgent.indexOf('igetapp')>0) {
            //ddurl跳转 app内跳转主会场。
            var url = 'igetapp://activity/detail?url=' + realurl;
            Asio.send('jump.ddURL', {
                ddURL: url,
            })
        } else {
            window.location.href = realurl;
        }
    }); 
    
    //初始化app内右上角分享链接。
    var shareurl = ( window.___datasourse___.env === 'testing' ? 'http://zt.iget.dev.didatrip.com/wxbase/t/8LWrvGg/mmk7K32KYzClOxWkGp5D' : 'http://zt.iget.dev.didatrip.com/wxbase/p/q46W0g0/1OM3yXqPJvsZ5W6xEKkO' )
    window.___datasourse___.shareUrl = shareurl;
});




//极验