// 铁匠 20190809 于 逻辑思维 2694217517@qq.com
var Zepto=function(){function L(t){return null==t?String(t):j[S.call(t)]||"object"}function Z(t){return"function"==L(t)}function $(t){return null!=t&&t==t.window}function _(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function D(t){return"object"==L(t)}function R(t){return D(t)&&!$(t)&&Object.getPrototypeOf(t)==Object.prototype}function M(t){return"number"==typeof t.length}function k(t){return s.call(t,function(t){return null!=t})}function z(t){return t.length>0?n.fn.concat.apply([],t):t}function F(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function q(t){return t in f?f[t]:f[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function H(t,e){return"number"!=typeof e||c[F(t)]?e:e+"px"}function I(t){var e,n;return u[t]||(e=a.createElement(t),a.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),u[t]=n),u[t]}function V(t){return"children"in t?o.call(t.children):n.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function B(n,i,r){for(e in i)r&&(R(i[e])||A(i[e]))?(R(i[e])&&!R(n[e])&&(n[e]={}),A(i[e])&&!A(n[e])&&(n[e]=[]),B(n[e],i[e],r)):i[e]!==t&&(n[e]=i[e])}function U(t,e){return null==e?n(t):n(t).filter(e)}function J(t,e,n,i){return Z(e)?e.call(t,n,i):e}function X(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function W(e,n){var i=e.className,r=i&&i.baseVal!==t;return n===t?r?i.baseVal:i:void(r?i.baseVal=n:e.className=n)}function Y(t){var e;try{return t?"true"==t||("false"==t?!1:"null"==t?null:/^0/.test(t)||isNaN(e=Number(t))?/^[\[\{]/.test(t)?n.parseJSON(t):t:e):t}catch(i){return t}}function G(t,e){e(t);for(var n=0,i=t.childNodes.length;i>n;n++)G(t.childNodes[n],e)}var t,e,n,i,C,N,r=[],o=r.slice,s=r.filter,a=window.document,u={},f={},c={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},l=/^\s*<(\w+|!)[^>]*>/,h=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,p=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,d=/^(?:body|html)$/i,m=/([A-Z])/g,g=["val","css","html","text","data","width","height","offset"],v=["after","prepend","before","append"],y=a.createElement("table"),x=a.createElement("tr"),b={tr:a.createElement("tbody"),tbody:y,thead:y,tfoot:y,td:x,th:x,"*":a.createElement("div")},w=/complete|loaded|interactive/,E=/^[\w-]*$/,j={},S=j.toString,T={},O=a.createElement("div"),P={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},A=Array.isArray||function(t){return t instanceof Array};return T.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=O).appendChild(t),i=~T.qsa(r,e).indexOf(t),o&&O.removeChild(t),i},C=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},N=function(t){return s.call(t,function(e,n){return t.indexOf(e)==n})},T.fragment=function(e,i,r){var s,u,f;return h.test(e)&&(s=n(a.createElement(RegExp.$1))),s||(e.replace&&(e=e.replace(p,"<$1></$2>")),i===t&&(i=l.test(e)&&RegExp.$1),i in b||(i="*"),f=b[i],f.innerHTML=""+e,s=n.each(o.call(f.childNodes),function(){f.removeChild(this)})),R(r)&&(u=n(s),n.each(r,function(t,e){g.indexOf(t)>-1?u[t](e):u.attr(t,e)})),s},T.Z=function(t,e){return t=t||[],t.__proto__=n.fn,t.selector=e||"",t},T.isZ=function(t){return t instanceof T.Z},T.init=function(e,i){var r;if(!e)return T.Z();if("string"==typeof e)if(e=e.trim(),"<"==e[0]&&l.test(e))r=T.fragment(e,RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=T.qsa(a,e)}else{if(Z(e))return n(a).ready(e);if(T.isZ(e))return e;if(A(e))r=k(e);else if(D(e))r=[e],e=null;else if(l.test(e))r=T.fragment(e.trim(),RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=T.qsa(a,e)}}return T.Z(r,e)},n=function(t,e){return T.init(t,e)},n.extend=function(t){var e,n=o.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){B(t,n,e)}),t},T.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],s=i||r?e.slice(1):e,a=E.test(s);return _(t)&&a&&i?(n=t.getElementById(s))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:o.call(a&&!i?r?t.getElementsByClassName(s):t.getElementsByTagName(e):t.querySelectorAll(e))},n.contains=a.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},n.type=L,n.isFunction=Z,n.isWindow=$,n.isArray=A,n.isPlainObject=R,n.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},n.inArray=function(t,e,n){return r.indexOf.call(e,t,n)},n.camelCase=C,n.trim=function(t){return null==t?"":String.prototype.trim.call(t)},n.uuid=0,n.support={},n.expr={},n.map=function(t,e){var n,r,o,i=[];if(M(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&i.push(n);else for(o in t)n=e(t[o],o),null!=n&&i.push(n);return z(i)},n.each=function(t,e){var n,i;if(M(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},n.grep=function(t,e){return s.call(t,e)},window.JSON&&(n.parseJSON=JSON.parse),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){j["[object "+e+"]"]=e.toLowerCase()}),n.fn={forEach:r.forEach,reduce:r.reduce,push:r.push,sort:r.sort,indexOf:r.indexOf,concat:r.concat,map:function(t){return n(n.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return n(o.apply(this,arguments))},ready:function(t){return w.test(a.readyState)&&a.body?t(n):a.addEventListener("DOMContentLoaded",function(){t(n)},!1),this},get:function(e){return e===t?o.call(this):this[e>=0?e:e+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return r.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return Z(t)?this.not(this.not(t)):n(s.call(this,function(e){return T.matches(e,t)}))},add:function(t,e){return n(N(this.concat(n(t,e))))},is:function(t){return this.length>0&&T.matches(this[0],t)},not:function(e){var i=[];if(Z(e)&&e.call!==t)this.each(function(t){e.call(this,t)||i.push(this)});else{var r="string"==typeof e?this.filter(e):M(e)&&Z(e.item)?o.call(e):n(e);this.forEach(function(t){r.indexOf(t)<0&&i.push(t)})}return n(i)},has:function(t){return this.filter(function(){return D(t)?n.contains(this,t):n(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!D(t)?t:n(t)},last:function(){var t=this[this.length-1];return t&&!D(t)?t:n(t)},find:function(t){var e,i=this;return e=t?"object"==typeof t?n(t).filter(function(){var t=this;return r.some.call(i,function(e){return n.contains(e,t)})}):1==this.length?n(T.qsa(this[0],t)):this.map(function(){return T.qsa(this,t)}):[]},closest:function(t,e){var i=this[0],r=!1;for("object"==typeof t&&(r=n(t));i&&!(r?r.indexOf(i)>=0:T.matches(i,t));)i=i!==e&&!_(i)&&i.parentNode;return n(i)},parents:function(t){for(var e=[],i=this;i.length>0;)i=n.map(i,function(t){return(t=t.parentNode)&&!_(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return U(e,t)},parent:function(t){return U(N(this.pluck("parentNode")),t)},children:function(t){return U(this.map(function(){return V(this)}),t)},contents:function(){return this.map(function(){return o.call(this.childNodes)})},siblings:function(t){return U(this.map(function(t,e){return s.call(V(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return n.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=I(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=Z(t);if(this[0]&&!e)var i=n(t).get(0),r=i.parentNode||this.length>1;return this.each(function(o){n(this).wrapAll(e?t.call(this,o):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){n(this[0]).before(t=n(t));for(var e;(e=t.children()).length;)t=e.first();n(t).append(this)}return this},wrapInner:function(t){var e=Z(t);return this.each(function(i){var r=n(this),o=r.contents(),s=e?t.call(this,i):t;o.length?o.wrapAll(s):r.append(s)})},unwrap:function(){return this.parent().each(function(){n(this).replaceWith(n(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var i=n(this);(e===t?"none"==i.css("display"):e)?i.show():i.hide()})},prev:function(t){return n(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return n(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var i=this.innerHTML;n(this).empty().append(J(this,t,e,i))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=J(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(n,i){var r;return"string"!=typeof n||1 in arguments?this.each(function(t){if(1===this.nodeType)if(D(n))for(e in n)X(this,e,n[e]);else X(this,n,J(this,i,t,this.getAttribute(n)))}):this.length&&1===this[0].nodeType?!(r=this[0].getAttribute(n))&&n in this[0]?this[0][n]:r:t},removeAttr:function(t){return this.each(function(){1===this.nodeType&&X(this,t)})},prop:function(t,e){return t=P[t]||t,1 in arguments?this.each(function(n){this[t]=J(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(e,n){var i="data-"+e.replace(m,"-$1").toLowerCase(),r=1 in arguments?this.attr(i,n):this.attr(i);return null!==r?Y(r):t},val:function(t){return 0 in arguments?this.each(function(e){this.value=J(this,t,e,this.value)}):this[0]&&(this[0].multiple?n(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var i=n(this),r=J(this,t,e,i.offset()),o=i.offsetParent().offset(),s={top:r.top-o.top,left:r.left-o.left};"static"==i.css("position")&&(s.position="relative"),i.css(s)});if(!this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(t,i){if(arguments.length<2){var r=this[0],o=getComputedStyle(r,"");if(!r)return;if("string"==typeof t)return r.style[C(t)]||o.getPropertyValue(t);if(A(t)){var s={};return n.each(A(t)?t:[t],function(t,e){s[e]=r.style[C(e)]||o.getPropertyValue(e)}),s}}var a="";if("string"==L(t))i||0===i?a=F(t)+":"+H(t,i):this.each(function(){this.style.removeProperty(F(t))});else for(e in t)t[e]||0===t[e]?a+=F(e)+":"+H(e,t[e])+";":this.each(function(){this.style.removeProperty(F(e))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(n(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?r.some.call(this,function(t){return this.test(W(t))},q(t)):!1},addClass:function(t){return t?this.each(function(e){i=[];var r=W(this),o=J(this,t,e,r);o.split(/\s+/g).forEach(function(t){n(this).hasClass(t)||i.push(t)},this),i.length&&W(this,r+(r?" ":"")+i.join(" "))}):this},removeClass:function(e){return this.each(function(n){return e===t?W(this,""):(i=W(this),J(this,e,n,i).split(/\s+/g).forEach(function(t){i=i.replace(q(t)," ")}),void W(this,i.trim()))})},toggleClass:function(e,i){return e?this.each(function(r){var o=n(this),s=J(this,e,r,W(this));s.split(/\s+/g).forEach(function(e){(i===t?!o.hasClass(e):i)?o.addClass(e):o.removeClass(e)})}):this},scrollTop:function(e){if(this.length){var n="scrollTop"in this[0];return e===t?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=e}:function(){this.scrollTo(this.scrollX,e)})}},scrollLeft:function(e){if(this.length){var n="scrollLeft"in this[0];return e===t?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=e}:function(){this.scrollTo(e,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),i=this.offset(),r=d.test(e[0].nodeName)?{top:0,left:0}:e.offset();return i.top-=parseFloat(n(t).css("margin-top"))||0,i.left-=parseFloat(n(t).css("margin-left"))||0,r.top+=parseFloat(n(e[0]).css("border-top-width"))||0,r.left+=parseFloat(n(e[0]).css("border-left-width"))||0,{top:i.top-r.top,left:i.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||a.body;t&&!d.test(t.nodeName)&&"static"==n(t).css("position");)t=t.offsetParent;return t})}},n.fn.detach=n.fn.remove,["width","height"].forEach(function(e){var i=e.replace(/./,function(t){return t[0].toUpperCase()});n.fn[e]=function(r){var o,s=this[0];return r===t?$(s)?s["inner"+i]:_(s)?s.documentElement["scroll"+i]:(o=this.offset())&&o[e]:this.each(function(t){s=n(this),s.css(e,J(this,r,t,s[e]()))})}}),v.forEach(function(t,e){var i=e%2;n.fn[t]=function(){var t,o,r=n.map(arguments,function(e){return t=L(e),"object"==t||"array"==t||null==e?e:T.fragment(e)}),s=this.length>1;return r.length<1?this:this.each(function(t,u){o=i?u:u.parentNode,u=0==e?u.nextSibling:1==e?u.firstChild:2==e?u:null;var f=n.contains(a.documentElement,o);r.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!o)return n(t).remove();o.insertBefore(t,u),f&&G(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},n.fn[i?t+"To":"insert"+(e?"Before":"After")]=function(e){return n(e)[t](this),this}}),T.Z.prototype=n.fn,T.uniq=N,T.deserializeValue=Y,n.zepto=T,n}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function l(t){return t._zid||(t._zid=e++)}function h(t,e,n,i){if(e=p(e),e.ns)var r=d(e.ns);return(s[l(t)]||[]).filter(function(t){return!(!t||e.e&&t.e!=e.e||e.ns&&!r.test(t.ns)||n&&l(t.fn)!==l(n)||i&&t.sel!=i)})}function p(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function d(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function m(t,e){return t.del&&!u&&t.e in f||!!e}function g(t){return c[t]||u&&f[t]||t}function v(e,i,r,o,a,u,f){var h=l(e),d=s[h]||(s[h]=[]);i.split(/\s/).forEach(function(i){if("ready"==i)return t(document).ready(r);var s=p(i);s.fn=r,s.sel=a,s.e in c&&(r=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?s.fn.apply(this,arguments):void 0}),s.del=u;var l=u||r;s.proxy=function(t){if(t=j(t),!t.isImmediatePropagationStopped()){t.data=o;var i=l.apply(e,t._args==n?[t]:[t].concat(t._args));return i===!1&&(t.preventDefault(),t.stopPropagation()),i}},s.i=d.length,d.push(s),"addEventListener"in e&&e.addEventListener(g(s.e),s.proxy,m(s,f))})}function y(t,e,n,i,r){var o=l(t);(e||"").split(/\s/).forEach(function(e){h(t,e,n,i).forEach(function(e){delete s[o][e.i],"removeEventListener"in t&&t.removeEventListener(g(e.e),e.proxy,m(e,r))})})}function j(e,i){return(i||!e.isDefaultPrevented)&&(i||(i=e),t.each(E,function(t,n){var r=i[t];e[t]=function(){return this[n]=x,r&&r.apply(i,arguments)},e[n]=b}),(i.defaultPrevented!==n?i.defaultPrevented:"returnValue"in i?i.returnValue===!1:i.getPreventDefault&&i.getPreventDefault())&&(e.isDefaultPrevented=x)),e}function S(t){var e,i={originalEvent:t};for(e in t)w.test(e)||t[e]===n||(i[e]=t[e]);return j(i,t)}var n,e=1,i=Array.prototype.slice,r=t.isFunction,o=function(t){return"string"==typeof t},s={},a={},u="onfocusin"in window,f={focus:"focusin",blur:"focusout"},c={mouseenter:"mouseover",mouseleave:"mouseout"};a.click=a.mousedown=a.mouseup=a.mousemove="MouseEvents",t.event={add:v,remove:y},t.proxy=function(e,n){var s=2 in arguments&&i.call(arguments,2);if(r(e)){var a=function(){return e.apply(n,s?s.concat(i.call(arguments)):arguments)};return a._zid=l(e),a}if(o(n))return s?(s.unshift(e[n],e),t.proxy.apply(null,s)):t.proxy(e[n],e);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var x=function(){return!0},b=function(){return!1},w=/^([A-Z]|returnValue$|layer[XY]$)/,E={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,s,a,u,f){var c,l,h=this;return e&&!o(e)?(t.each(e,function(t,e){h.on(t,s,a,e,f)}),h):(o(s)||r(u)||u===!1||(u=a,a=s,s=n),(r(a)||a===!1)&&(u=a,a=n),u===!1&&(u=b),h.each(function(n,r){f&&(c=function(t){return y(r,t.type,u),u.apply(this,arguments)}),s&&(l=function(e){var n,o=t(e.target).closest(s,r).get(0);return o&&o!==r?(n=t.extend(S(e),{currentTarget:o,liveFired:r}),(c||u).apply(o,[n].concat(i.call(arguments,1)))):void 0}),v(r,e,u,a,s,l||c)}))},t.fn.off=function(e,i,s){var a=this;return e&&!o(e)?(t.each(e,function(t,e){a.off(t,i,e)}),a):(o(i)||r(s)||s===!1||(s=i,i=n),s===!1&&(s=b),a.each(function(){y(this,e,s,i)}))},t.fn.trigger=function(e,n){return e=o(e)||t.isPlainObject(e)?t.Event(e):j(e),e._args=n,this.each(function(){"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,n){var i,r;return this.each(function(s,a){i=S(o(e)?t.Event(e):e),i._args=n,i.target=a,t.each(h(a,e.type||e),function(t,e){return r=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),r},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.trigger(e)}}),["focus","blur"].forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.each(function(){try{this[e]()}catch(t){}}),this}}),t.Event=function(t,e){o(t)||(e=t,t=e.type);var n=document.createEvent(a[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),j(n)}}(Zepto),function(t){function l(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function h(t,e,i,r){return t.global?l(e||n,i,r):void 0}function p(e){e.global&&0===t.active++&&h(e,null,"ajaxStart")}function d(e){e.global&&!--t.active&&h(e,null,"ajaxStop")}function m(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||h(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void h(e,n,"ajaxSend",[t,e])}function g(t,e,n,i){var r=n.context,o="success";n.success.call(r,t,o,e),i&&i.resolveWith(r,[t,o,e]),h(n,r,"ajaxSuccess",[e,n,t]),y(o,e,n)}function v(t,e,n,i,r){var o=i.context;i.error.call(o,n,e,t),r&&r.rejectWith(o,[n,e,t]),h(i,o,"ajaxError",[n,i,t||e]),y(e,n,i)}function y(t,e,n){var i=n.context;n.complete.call(i,e,t),h(n,i,"ajaxComplete",[e,n]),d(n)}function x(){}function b(t){return t&&(t=t.split(";",2)[0]),t&&(t==f?"html":t==u?"json":s.test(t)?"script":a.test(t)&&"xml")||"text"}function w(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function E(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=w(e.url,e.data),e.data=void 0)}function j(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function T(e,n,i,r){var o,s=t.isArray(n),a=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),r&&(n=i?r:r+"["+(a||"object"==o||"array"==o?n:"")+"]"),!r&&s?e.add(u.name,u.value):"array"==o||!i&&"object"==o?T(e,u,i,n):e.add(n,u)})}var i,r,e=0,n=window.document,o=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,s=/^(?:text|application)\/javascript/i,a=/^(?:text|application)\/xml/i,u="application/json",f="text/html",c=/^\s*$/;t.active=0,t.ajaxJSONP=function(i,r){if(!("type"in i))return t.ajax(i);var f,h,o=i.jsonpCallback,s=(t.isFunction(o)?o():o)||"jsonp"+ ++e,a=n.createElement("script"),u=window[s],c=function(e){t(a).triggerHandler("error",e||"abort")},l={abort:c};return r&&r.promise(l),t(a).on("load error",function(e,n){clearTimeout(h),t(a).off().remove(),"error"!=e.type&&f?g(f[0],l,i,r):v(null,n||"error",l,i,r),window[s]=u,f&&t.isFunction(u)&&u(f[0]),u=f=void 0}),m(l,i)===!1?(c("abort"),l):(window[s]=function(){f=arguments},a.src=i.url.replace(/\?(.+)=\?/,"?$1="+s),n.head.appendChild(a),i.timeout>0&&(h=setTimeout(function(){c("timeout")},i.timeout)),l)},t.ajaxSettings={type:"GET",beforeSend:x,success:x,error:x,complete:x,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:u,xml:"application/xml, text/xml",html:f,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n=t.extend({},e||{}),o=t.Deferred&&t.Deferred();for(i in t.ajaxSettings)void 0===n[i]&&(n[i]=t.ajaxSettings[i]);p(n),n.crossDomain||(n.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(n.url)&&RegExp.$2!=window.location.host),n.url||(n.url=window.location.toString()),E(n);var s=n.dataType,a=/\?.+=\?/.test(n.url);if(a&&(s="jsonp"),n.cache!==!1&&(e&&e.cache===!0||"script"!=s&&"jsonp"!=s)||(n.url=w(n.url,"_="+Date.now())),"jsonp"==s)return a||(n.url=w(n.url,n.jsonp?n.jsonp+"=?":n.jsonp===!1?"":"callback=?")),t.ajaxJSONP(n,o);var j,u=n.accepts[s],f={},l=function(t,e){f[t.toLowerCase()]=[t,e]},h=/^([\w-]+:)\/\//.test(n.url)?RegExp.$1:window.location.protocol,d=n.xhr(),y=d.setRequestHeader;if(o&&o.promise(d),n.crossDomain||l("X-Requested-With","XMLHttpRequest"),l("Accept",u||"*/*"),(u=n.mimeType||u)&&(u.indexOf(",")>-1&&(u=u.split(",",2)[0]),d.overrideMimeType&&d.overrideMimeType(u)),(n.contentType||n.contentType!==!1&&n.data&&"GET"!=n.type.toUpperCase())&&l("Content-Type",n.contentType||"application/x-www-form-urlencoded"),n.headers)for(r in n.headers)l(r,n.headers[r]);if(d.setRequestHeader=l,d.onreadystatechange=function(){if(4==d.readyState){d.onreadystatechange=x,clearTimeout(j);var e,i=!1;if(d.status>=200&&d.status<300||304==d.status||0==d.status&&"file:"==h){s=s||b(n.mimeType||d.getResponseHeader("content-type")),e=d.responseText;try{"script"==s?(1,eval)(e):"xml"==s?e=d.responseXML:"json"==s&&(e=c.test(e)?null:t.parseJSON(e))}catch(r){i=r}i?v(i,"parsererror",d,n,o):g(e,d,n,o)}else v(d.statusText||null,d.status?"error":"abort",d,n,o)}},m(d,n)===!1)return d.abort(),v(null,"abort",d,n,o),d;if(n.xhrFields)for(r in n.xhrFields)d[r]=n.xhrFields[r];var S="async"in n?n.async:!0;d.open(n.type,n.url,S,n.username,n.password);for(r in f)y.apply(d,f[r]);return n.timeout>0&&(j=setTimeout(function(){d.onreadystatechange=x,d.abort(),v(null,"timeout",d,n,o)},n.timeout)),d.send(n.data?n.data:null),d},t.get=function(){return t.ajax(j.apply(null,arguments))},t.post=function(){var e=j.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=j.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var a,r=this,s=e.split(/\s/),u=j(e,n,i),f=u.success;return s.length>1&&(u.url=s[0],a=s[1]),u.success=function(e){r.html(a?t("<div>").html(e.replace(o,"")).find(a):e),f&&f.apply(r,arguments)},t.ajax(u),this};var S=encodeURIComponent;t.param=function(t,e){var n=[];return n.add=function(t,e){this.push(S(t)+"="+S(e))},T(n,t,e),n.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var n,e=[];return t([].slice.call(this.get(0).elements)).each(function(){n=t(this);var i=n.attr("type");"fieldset"!=this.nodeName.toLowerCase()&&!this.disabled&&"submit"!=i&&"reset"!=i&&"button"!=i&&("radio"!=i&&"checkbox"!=i||this.checked)&&e.push({name:n.attr("name"),value:n.val()})}),e},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(e)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(Zepto);(function($,undefined){var prefix="",eventPrefix,vendors={Webkit:"webkit",Moz:"",O:"o"},testEl=document.createElement("div"),supportedTransforms=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,transform,transitionProperty,transitionDuration,transitionTiming,transitionDelay,animationName,animationDuration,animationTiming,animationDelay,cssReset={};function dasherize(str){return str.replace(/([A-Z])/g,"-$1").toLowerCase()}function normalizeEvent(name){return eventPrefix?eventPrefix+name:name.toLowerCase()}if(testEl.style.transform===undefined){$.each(vendors,function(vendor,event){if(testEl.style[vendor+"TransitionProperty"]!==undefined){prefix="-"+vendor.toLowerCase()+"-";eventPrefix=event;return false}})}transform=prefix+"transform";cssReset[transitionProperty=prefix+"transition-property"]=cssReset[transitionDuration=prefix+"transition-duration"]=cssReset[transitionDelay=prefix+"transition-delay"]=cssReset[transitionTiming=prefix+"transition-timing-function"]=cssReset[animationName=prefix+"animation-name"]=cssReset[animationDuration=prefix+"animation-duration"]=cssReset[animationDelay=prefix+"animation-delay"]=cssReset[animationTiming=prefix+"animation-timing-function"]="";$.fx={off:(eventPrefix===undefined&&testEl.style.transitionProperty===undefined),speeds:{_default:400,fast:200,slow:600},cssPrefix:prefix,transitionEnd:normalizeEvent("TransitionEnd"),animationEnd:normalizeEvent("AnimationEnd")};$.fn.animate=function(properties,duration,ease,callback,delay){if($.isFunction(duration)){callback=duration,ease=undefined,duration=undefined}if($.isFunction(ease)){callback=ease,ease=undefined}if($.isPlainObject(duration)){ease=duration.easing,callback=duration.complete,delay=duration.delay,duration=duration.duration}if(duration){duration=(typeof duration=="number"?duration:($.fx.speeds[duration]||$.fx.speeds._default))/1000}if(delay){delay=parseFloat(delay)/1000}return this.anim(properties,duration,ease,callback,delay)};$.fn.anim=function(properties,duration,ease,callback,delay){var key,cssValues={},cssProperties,transforms="",that=this,wrappedCallback,endEvent=$.fx.transitionEnd,fired=false;if(duration===undefined){duration=$.fx.speeds._default/1000}if(delay===undefined){delay=0}if($.fx.off){duration=0}if(typeof properties=="string"){cssValues[animationName]=properties;cssValues[animationDuration]=duration+"s";cssValues[animationDelay]=delay+"s";cssValues[animationTiming]=(ease||"linear");endEvent=$.fx.animationEnd}else{cssProperties=[];for(key in properties){if(supportedTransforms.test(key)){transforms+=key+"("+properties[key]+") "}else{cssValues[key]=properties[key],cssProperties.push(dasherize(key))}}if(transforms){cssValues[transform]=transforms,cssProperties.push(transform)}if(duration>0&&typeof properties==="object"){cssValues[transitionProperty]=cssProperties.join(", ");cssValues[transitionDuration]=duration+"s";cssValues[transitionDelay]=delay+"s";cssValues[transitionTiming]=(ease||"linear")}}wrappedCallback=function(event){if(typeof event!=="undefined"){if(event.target!==event.currentTarget){return}$(event.target).unbind(endEvent,wrappedCallback)}else{$(this).unbind(endEvent,wrappedCallback)}fired=true;$(this).css(cssReset);callback&&callback.call(this)};if(duration>0){this.bind(endEvent,wrappedCallback);setTimeout(function(){if(fired){return}wrappedCallback.call(that)},((duration+delay)*1000)+25)}this.size()&&this.get(0).clientLeft;this.css(cssValues);if(duration<=0){setTimeout(function(){that.each(function(){wrappedCallback.call(this)})},0)}return this};testEl=null})(Zepto);var first=["https://piccdn.luojilab.com/fe-oss/default/load_gomark.png","https://piccdn.luojilab.com/fe-oss/default/load_logo.jpg",];var imgData={logo:[],cloud:["https://piccdn.luojilab.com/fe-oss/default/bg_cloud1.png","https://piccdn.luojilab.com/fe-oss/default/bg_cloud2.png","https://piccdn.luojilab.com/fe-oss/default/bg_cloud3.png","https://piccdn.luojilab.com/fe-oss/default/bg_cloud01.png","https://piccdn.luojilab.com/fe-oss/default/bg_cloud02.png",],bg:["https://piccdn.luojilab.com/fe-oss/default/bg_beijing0801_01.png","https://piccdn.luojilab.com/fe-oss/default/bg_beijing0801_02.png","https://piccdn.luojilab.com/fe-oss/default/bg_beijing0801_03.png","https://piccdn.luojilab.com/fe-oss/default/bg_beijing0801_04.png","https://piccdn.luojilab.com/fe-oss/default/bg_beijing0801_05.png","https://piccdn.luojilab.com/fe-oss/default/bg_beijing0801_06.png","https://piccdn.luojilab.com/fe-oss/default/bg_beijing0801_07.png","https://piccdn.luojilab.com/fe-oss/default/bg_beijing0801_08.png","https://piccdn.luojilab.com/fe-oss/default/bg_beijing0801_09.png","https://piccdn.luojilab.com/fe-oss/default/bg_beijing0801_10.png","https://piccdn.luojilab.com/fe-oss/default/bg_beijing0801_11.png","https://piccdn.luojilab.com/fe-oss/default/bg_beijing0801_12.png","https://piccdn.luojilab.com/fe-oss/default/bg_jxsd13bl.png","https://piccdn.luojilab.com/fe-oss/default/bg_jxsd14bl.png","https://piccdn.luojilab.com/fe-oss/default/bg_jxsd15bl.png","https://piccdn.luojilab.com/fe-oss/default/bg_jxsd16bl.png","https://piccdn.luojilab.com/fe-oss/default/bg_beijing0801_17.png","https://piccdn.luojilab.com/fe-oss/default/bg_beijing0801_18.png","https://piccdn.luojilab.com/fe-oss/default/bg_beijing0801_19.png","https://piccdn.luojilab.com/fe-oss/default/bg_beijing0801_20.png","https://piccdn.luojilab.com/fe-oss/default/bg_beijing0801_21.png","https://piccdn.luojilab.com/fe-oss/default/bg_beijing0801_22.png","https://piccdn.luojilab.com/fe-oss/default/bg_beijing0801_23.png","https://piccdn.luojilab.com/fe-oss/default/bg_beijing0801_24.png",],big:["https://piccdn.luojilab.com/fe-oss/default/pano_machine.png","https://piccdn.luojilab.com/fe-oss/default/pano_machine2.png","https://piccdn.luojilab.com/fe-oss/default/pano_machine3.png","https://piccdn.luojilab.com/fe-oss/default/pano_machinebutton1.png","https://piccdn.luojilab.com/fe-oss/default/pano_machinebutton2.png",],panosClick:["https://piccdn.luojilab.com/fe-oss/default/pano_jiahangjia.png","https://piccdn.luojilab.com/fe-oss/default/pano_lijun.png","https://piccdn.luojilab.com/fe-oss/default/pano_liuwei.png","https://piccdn.luojilab.com/fe-oss/default/pano_huanglining1.png","https://piccdn.luojilab.com/fe-oss/default/pano_zhuwei1.png","https://piccdn.luojilab.com/fe-oss/default/pano_caoxingyuan1.png","https://piccdn.luojilab.com/fe-oss/default/pano_linannan.png","https://piccdn.luojilab.com/fe-oss/default/pano_hongbaohe1-2.png","https://piccdn.luojilab.com/fe-oss/default/pano_empety.png","https://piccdn.luojilab.com/fe-oss/default/pano_empety.png","https://piccdn.luojilab.com/fe-oss/default/pano_empety.png","https://piccdn.luojilab.com/fe-oss/default/pano_empety.png","https://piccdn.luojilab.com/fe-oss/default/pano_empety.png","https://piccdn.luojilab.com/fe-oss/default/pano_bianhengqin.png","https://piccdn.luojilab.com/fe-oss/default/pano_empety.png","https://piccdn.luojilab.com/fe-oss/default/pano_liuxuan.png","https://piccdn.luojilab.com/fe-oss/default/pano_empety.png","https://piccdn.luojilab.com/fe-oss/default/pano_empety.png","https://piccdn.luojilab.com/fe-oss/default/pano_empety.png","https://piccdn.luojilab.com/fe-oss/default/pano_empety.png","https://piccdn.luojilab.com/fe-oss/default/pano_yonghu2.png","https://piccdn.luojilab.com/fe-oss/default/pano_hongbaohe1-2.png","https://piccdn.luojilab.com/fe-oss/default/pano_empety.png","https://piccdn.luojilab.com/fe-oss/default/pano_tingshushujubang1.png","https://piccdn.luojilab.com/fe-oss/default/pano_ditu1.png","https://piccdn.luojilab.com/fe-oss/default/pano_ditu2.png","https://piccdn.luojilab.com/fe-oss/default/pano_ditu3.png","https://piccdn.luojilab.com/fe-oss/default/pano_empety.png","https://piccdn.luojilab.com/fe-oss/default/pano_empety.png","https://piccdn.luojilab.com/fe-oss/default/pano_empety.png","https://piccdn.luojilab.com/fe-oss/default/pano_hongbaohe1-2.png","https://piccdn.luojilab.com/fe-oss/default/pano_yanglei.png","https://piccdn.luojilab.com/fe-oss/default/pano_ashi.png",]};var others={window:["https://piccdn.luojilab.com/fe-oss/default/window_jiahangjia.png","https://piccdn.luojilab.com/fe-oss/default/window_guiding.png","https://piccdn.luojilab.com/fe-oss/default/window_tanchuang1.png","https://piccdn.luojilab.com/fe-oss/default/window_tanchuang2.png","https://piccdn.luojilab.com/fe-oss/default/window_tanchuang3.png","https://piccdn.luojilab.com/fe-oss/default/window_tanchuang4.png","https://piccdn.luojilab.com/fe-oss/default/window_tanchuang5.png","https://piccdn.luojilab.com/fe-oss/default/window_tanchuang6.png","https://piccdn.luojilab.com/fe-oss/default/window_tanchuang7.png","https://piccdn.luojilab.com/fe-oss/default/window_tanchuang8.png","https://piccdn.luojilab.com/fe-oss/default/window_tanchuang9.png","https://piccdn.luojilab.com/fe-oss/default/window_tanchuang10.png","https://piccdn.luojilab.com/fe-oss/default/window_lijun.png","https://piccdn.luojilab.com/fe-oss/default/window_liuwei.png","https://piccdn.luojilab.com/fe-oss/default/window_huanglining1.png","https://piccdn.luojilab.com/fe-oss/default/window_zhuwei1.png","https://piccdn.luojilab.com/fe-oss/default/window_caoxingyuan1.png","https://piccdn.luojilab.com/fe-oss/default/window_linannan.png","https://piccdn.luojilab.com/fe-oss/default/window_hongbaohe1-2.png","https://piccdn.luojilab.com/fe-oss/default/window_shehuiyujingji.png","https://piccdn.luojilab.com/fe-oss/default/window_anzhishi2.png","https://piccdn.luojilab.com/fe-oss/default/window_chengshi1.png","https://piccdn.luojilab.com/fe-oss/default/window_shiwenhuojinchensilu.png","https://piccdn.luojilab.com/fe-oss/default/window_meiguoxianjing1.png","https://piccdn.luojilab.com/fe-oss/default/window_bianhengqin.png","https://piccdn.luojilab.com/fe-oss/default/window_list.png","https://piccdn.luojilab.com/fe-oss/default/window_liuxuan.png","https://piccdn.luojilab.com/fe-oss/default/window_tingshutieshi1.png","https://piccdn.luojilab.com/fe-oss/default/window_tingshutieshi1.png","https://piccdn.luojilab.com/fe-oss/default/window_shujialidehongbao.png","https://piccdn.luojilab.com/fe-oss/default/window_yonghu1.png","https://piccdn.luojilab.com/fe-oss/default/window_yonghu2.png","https://piccdn.luojilab.com/fe-oss/default/window_hongbaohe1-2.png","https://piccdn.luojilab.com/fe-oss/default/window_yonghu3.png","https://piccdn.luojilab.com/fe-oss/default/window_tingshushujubang1.png","https://piccdn.luojilab.com/fe-oss/default/window_ditu1.png","https://piccdn.luojilab.com/fe-oss/default/window_ditu2.png","https://piccdn.luojilab.com/fe-oss/default/window_ditu3.png","https://piccdn.luojilab.com/fe-oss/default/window_saodiseng.png","https://piccdn.luojilab.com/fe-oss/default/window_beisu.png","https://piccdn.luojilab.com/fe-oss/default/window_yonghu4.png","https://piccdn.luojilab.com/fe-oss/default/window_hongbaohe1-2.png","https://piccdn.luojilab.com/fe-oss/default/window_yanglei.png","https://piccdn.luojilab.com/fe-oss/default/window_ashi.png",]};var Tween={linear:function(e,a,g,f){return g*e/f+a},easeIn:function(e,a,g,f){return g*(e/=f)*e+a},easeOut:function(e,a,g,f){return-g*(e/=f)*(e-2)+a},easeBoth:function(e,a,g,f){if((e/=f/2)<1){return g/2*e*e+a}return-g/2*((--e)*(e-2)-1)+a},easeInStrong:function(e,a,g,f){return g*(e/=f)*e*e*e+a},easeOutStrong:function(e,a,g,f){return-g*((e=e/f-1)*e*e*e-1)+a},easeBothStrong:function(e,a,g,f){if((e/=f/2)<1){return g/2*e*e*e*e+a}return-g/2*((e-=2)*e*e*e-2)+a},elasticIn:function(g,e,k,j,f,i){if(g===0){return e}if((g/=j)==1){return e+k}if(!i){i=j*0.3}if(!f||f<Math.abs(k)){f=k;var h=i/4}else{var h=i/(2*Math.PI)*Math.asin(k/f)}return-(f*Math.pow(2,10*(g-=1))*Math.sin((g*j-h)*(2*Math.PI)/i))+e},elasticOut:function(g,e,k,j,f,i){if(g===0){return e}if((g/=j)==1){return e+k}if(!i){i=j*0.3}if(!f||f<Math.abs(k)){f=k;var h=i/4}else{var h=i/(2*Math.PI)*Math.asin(k/f)}return f*Math.pow(2,-10*g)*Math.sin((g*j-h)*(2*Math.PI)/i)+k+e},elasticBoth:function(g,e,k,j,f,i){if(g===0){return e}if((g/=j/2)==2){return e+k}if(!i){i=j*(0.3*1.5)}if(!f||f<Math.abs(k)){f=k;var h=i/4}else{var h=i/(2*Math.PI)*Math.asin(k/f)}if(g<1){return-0.5*(f*Math.pow(2,10*(g-=1))*Math.sin((g*j-h)*(2*Math.PI)/i))+e}return f*Math.pow(2,-10*(g-=1))*Math.sin((g*j-h)*(2*Math.PI)/i)*0.5+k+e},backIn:function(e,a,h,g,f){if(typeof f=="undefined"){f=1.70158}return h*(e/=g)*e*((f+1)*e-f)+a},backOut:function(e,a,h,g,f){if(typeof f=="undefined"){f=2.70158}return h*((e=e/g-1)*e*((f+1)*e+f)+1)+a},backBoth:function(e,a,h,g,f){if(typeof f=="undefined"){f=1.70158}if((e/=g/2)<1){return h/2*(e*e*(((f*=(1.525))+1)*e-f))+a}return h/2*((e-=2)*e*(((f*=(1.525))+1)*e+f)+2)+a},bounceIn:function(e,a,g,f){return g-Tween.bounceOut(f-e,0,g,f)+a},bounceOut:function(e,a,g,f){if((e/=f)<(1/2.75)){return g*(7.5625*e*e)+a}else{if(e<(2/2.75)){return g*(7.5625*(e-=(1.5/2.75))*e+0.75)+a}else{if(e<(2.5/2.75)){return g*(7.5625*(e-=(2.25/2.75))*e+0.9375)+a}}}return g*(7.5625*(e-=(2.625/2.75))*e+0.984375)+a},bounceBoth:function(e,a,g,f){if(e<f/2){return Tween.bounceIn(e*2,0,g,f)*0.5+a}return Tween.bounceOut(e*2-f,0,g,f)*0.5+g*0.5+a}};function cssTransform(c,a,e){if(!c.transform){c.transform={}}if(typeof e=="undefined"){if(typeof c.transform[a]=="undefined"){switch(a){case"scale":case"scaleX":case"scaleY":c.transform[a]=100;break;default:c.transform[a]=0}}return c.transform[a]}else{var d="";c.transform[a]=Number(e);for(var b in c.transform){switch(b){case"rotate":case"rotateX":case"rotateY":case"rotateZ":case"skewX":case"skewY":d+=" "+b+"("+c.transform[b]+"deg)";break;case"translateX":case"translateY":case"translateZ":d+=" "+b+"("+c.transform[b]+"px)";break;case"scale":case"scaleX":case"scaleY":d+=" "+b+"("+c.transform[b]/100+")";break}}c.style.WebkitTransform=c.style.transform=d}}function css(b,a,c){if(a=="rotate"||a=="rotateX"||a=="rotateY"||a=="rotateZ"||a=="scale"||a=="scaleX"||a=="scaleY"||a=="skewX"||a=="skewY"||a=="translateX"||a=="translateY"||a=="translateZ"){return cssTransform(b,a,c)}if(arguments.length==2){var c=getComputedStyle(b)[a];if(a=="opacity"){c=Math.round(c*100)}return parseFloat(c)}if(a=="opacity"){b.style.opacity=c/100}else{b.style[a]=c+"px"}}function MTween(h){var e=0;var a={};var i={};var g=h.time/20;for(var f in h.target){a[f]=css(h.el,f);i[f]=h.target[f]-a[f]}clearInterval(h.el.timer);h.el.timer=setInterval(function(){e++;if(e>g){clearInterval(h.el.timer);h.callBack&&h.callBack.call(h.el)}else{h.callIn&&h.callIn.call(h.el);for(var b in a){var c=(Tween[h.type](e,a[b],i[b],g)).toFixed(2);css(h.el,b,c)}}},20)};(function(){function Progress(){this.mountedId=null;this.target=100;this.step=1;this.color='#333';this.fontSize='18px';this.borderRadius=0;this.backgroundColor='#eee';this.barBackgroundColor='#26a2ff';}
Progress.prototype={init:function(config){if(!config.mountedId){alert('请输入挂载节点的 id');return;}
this.mountedId=config.mountedId;this.target=config.target||this.target;this.step=config.step||this.step;this.fontSize=config.fontSize||this.fontSize;this.color=config.color||this.color;this.borderRadius=config.borderRadius||this.borderRadius;this.backgroundColor=config.backgroundColor||this.backgroundColor;this.barBackgroundColor=config.barBackgroundColor||this.barBackgroundColor;var box=document.querySelector(this.mountedId);var width=box.offsetWidth;var height=box.offsetHeight;var progress=document.createElement('div');progress.style.position='absolute';progress.style.height=height+'px';progress.style.width=width+'px';progress.style.borderRadius=this.borderRadius;progress.style.backgroundColor=this.backgroundColor;var bar=document.createElement('div');bar.style.float='left';bar.style.height='100%';bar.style.width='0';bar.style.lineHeight=height+'px';bar.style.textAlign='center';bar.style.borderRadius=this.borderRadius;bar.style.backgroundColor=this.barBackgroundColor;var text=document.createElement('span');text.style.position='absolute';text.style.top='0';text.style.left='0';text.style.height=height+'px';text.style.lineHeight=height+'px';text.style.fontSize=this.fontSize;text.style.color=this.color;progress.appendChild(bar);progress.appendChild(text);box.appendChild(progress);this.run(progress,bar,text,this.target,this.step);},run:function(progress,bar,text,target,step){var self=this;++step;var endRate=parseInt(target)-parseInt(bar.style.width);if(endRate<=step){step=endRate;}
var width=parseInt(bar.style.width);var endWidth=width+step+'%';bar.style.width=endWidth;text.innerHTML=endWidth;if(width>=94){text.style.left='94%';}else{text.style.left=width+1+'%';}
if(width===target){clearTimeout(timeout);return;}
var timeout=setTimeout(function(){self.run(progress,bar,text,target,step);},30);},};window.Progress=Progress;})();var dom=`
<div id="pageBg"></div>
<div id="wrapper"></div>
<div id="view">
 <div id="logo1">
    <div class="logoImg hidden" id="bgdoor">
   <img src="https://piccdn.luojilab.com/fe-oss/default/load_logo.jpg">
    </div>
    <div class="goMarkImg">
      <img src="https://piccdn.luojilab.com/fe-oss/default/load_gomark.png">
    </div>
    <p class="logoText"></p>
    <div class="absolute loading-progress-bar hidden">
      <div class="loading-progress-bar-inner"></div>
    </div>
 </div>
 <div id="main">
  <div id="tZ">
   <div id="panoBg"></div>
   <div id="cloud"></div>
   <div id="pano"></div>
  </div>
  </div>
</div>
<div id="go" class="hidden" style="height: 12%;width: 12%;position: absolute;bottom: 5%;right: 15%;text-align: center;"> 
 <img id="goImg" class= "mcclick" src="" style="height: 100%;margin: auto;"/>
</div>
<div id="window" class="hidden"style="width: 100%;position: absolute;top: 0;left: 0;text-align: center;height: 100%;background-color: rgba(0,0,0,0.7);">
    <div style="width: 90%;min-height: 100px;position: absolute;top: 5%;left: 5%;text-align: center;height: 80%; display: flex;justify-content: center;"> 
        <div class="hidden" id="info">
            <img id="avatar"></img>
            <div id="nick"></div>
            <div id="wordbig"></div>
            <img id="bludbar" src=""/>
            <img id="blud" src=""/>
            <div id="hadfinish"></div>
            <img id="moneypic" src=""/>
            <div id="getButton"></div>
        </div>
        <div class="hidden" id="rules">
            <div class="goapp"></div>
        </div>
        <div class="hidden" id="listinfo">
          <div id="listTitle">
            <div id="listTitleTop">
              超过1800本听书，你能怎么听？
            </div>
            <div id="listTitleContent">
              每天一份书单更新，帮你把各种书目排列组合，找到听书新姿势。
            </div>
          </div>
          <div id="listContent">
          <div id="0" class="listContentTitle">
          1.怎样用好OKR提高业务能力？
          </div>
          <div id="1" class="listContentinfo">
          《这就是OKR》| 唐帅解读
          </div>
          <div id="2" class="listContentinfo">
          《团队协作的五大障碍》| 广行解读
          </div>
          <div id="3" class="listContentinfo">
          《德鲁克管理思想精要》| 伟萍解读
          </div>
          <div id="4" class="listContentTitle">
          2.50本商业公司精读书单
          </div>
          <div class="listContentinfo" id="5">
          《IBM帝国缔造者》| 徐玲解读

          </div>
          <div class="listContentinfo" id="6">
          《成为乔布斯》| 安洋洋解读
          </div>
          <div class="listContentinfo" id="7">
  
《下一个倒下的会不会是华为》| 管理百年工作室解读
          </div>
          <div class="listContentinfo" id="8">
          
《穿布鞋的马云》| 管理百年工作室解读
          </div>
          <div class="listContentinfo" id="9">
          ......
          </div>

          <div class="listContentTitle" id="10">
         
3.30本西方文学经典，串起西方文明史
          </div>
          <div class="listContentinfo" id="11">
          《鲁滨孙历险记》| 黄昱宁工作室解读
          </div>
          <div class="listContentinfo" id="12">

《包法利夫人》| 黄昱宁工作室解读
          </div>
          <div class="listContentinfo" id="13">
          《红与黑》| 黄昱宁工作室解读
          </div>
         
          <div class="listContentinfo" id="14">
     《鲁滨孙历险记》| 黄昱宁工作室解读
          </div>
          <div class="listContentinfo" id="15">
        
......
          </div>
         
          <div class="listContentTitle" id="16">
          4.脱不花的育儿必读书
          </div>
          <div class="listContentinfo" id="17">
          《0-2岁宝宝想表达什么？》| 刘玄解读
          </div>
          <div class="listContentinfo" id="18">
          《3-5岁幼儿为什么问个不停？》| 广行解读
          </div>
          <div class="listContentinfo" id="19">
          《6-9岁孩子为何喜欢装大人？》| 良舟工作室解读
          </div>
          <div class="listContentinfo" id="20">
          《10-14岁青少年，你在想什么？》| 闫冠男解读            
          </div>
          <div class="listContentTitle" id="21">
  
5.中年危机很焦虑，心理学书单来帮你
          </div>
          <div class="listContentinfo" id="22">
          《优秀到不能被忽视》| 张凯解读
          </div>
          <div class="listContentinfo" id="23">
          《积极的力量》| 张玥解读
          </div>
          <div class="listContentinfo" id="24">
          《深度工作》| 张爽解读
          </div>
          <div class="listContentinfo" id="25">
          更多书单，欢迎在得到听书首页查看。
          </div>
          



          <div id="26" class="listContentTitle">
          1.怎样用好OKR提高业务能力？
          </div>
          <div id="27" class="listContentinfo">
          《这就是OKR》| 唐帅解读
          </div>
          <div id="28" class="listContentinfo">
          《团队协作的五大障碍》| 广行解读
          </div>
          <div id="29" class="listContentinfo">
          《德鲁克管理思想精要》| 伟萍解读
          </div>
          <div id="30" class="listContentTitle">
          2.50本商业公司精读书单
          </div>
          <div class="listContentinfo" id="31">
          《IBM帝国缔造者》| 徐玲解读

          </div>
          <div class="listContentinfo" id="32">
          《成为乔布斯》| 安洋洋解读
          </div>
          <div class="listContentinfo" id="33">
  
《下一个倒下的会不会是华为》| 管理百年工作室解读
          </div>
          <div class="listContentinfo" id="34">
          
《穿布鞋的马云》| 管理百年工作室解读
          </div>
          <div class="listContentinfo" id="35">
          ......
          </div>

          <div class="listContentTitle" id="36">
         
3.30本西方文学经典，串起西方文明史
          </div>
          <div class="listContentinfo" id="37">
          《鲁滨孙历险记》| 黄昱宁工作室解读
          </div>
          <div class="listContentinfo" id="38">

《包法利夫人》| 黄昱宁工作室解读
          </div>
          <div class="listContentinfo" id="39">
          《红与黑》| 黄昱宁工作室解读
          </div>
         
          <div class="listContentinfo" id="40">
     《鲁滨孙历险记》| 黄昱宁工作室解读
          </div>
          <div class="listContentinfo" id="41">
        
......
          </div>
         
          <div class="listContentTitle" id="42">
          4.脱不花的育儿必读书
          </div>
          <div class="listContentinfo" id="43">
          《0-2岁宝宝想表达什么？》| 刘玄解读
          </div>
          <div class="listContentinfo" id="44">
          《3-5岁幼儿为什么问个不停？》| 广行解读
          </div>
          <div class="listContentinfo" id="45">
          《6-9岁孩子为何喜欢装大人？》| 良舟工作室解读
          </div>
          <div class="listContentinfo" id="46">
          《10-14岁青少年，你在想什么？》| 闫冠男解读            
          </div>
          <div class="listContentTitle" id="47">
  
5.中年危机很焦虑，心理学书单来帮你
          </div>
          <div class="listContentinfo" id="48">
          《优秀到不能被忽视》| 张凯解读
          </div>
          <div class="listContentinfo" id="49">
          《积极的力量》| 张玥解读
          </div>
          <div class="listContentinfo" id="50">
          《深度工作》| 张爽解读
          </div>
          <div class="listContentinfo" id="51">
          更多书单，欢迎在得到听书首页查看。
          </div>






















 



          </div>
        </div>
        <img id="windowImg" src="" style="height: 100%;margin: auto;border-radius: 20px;"/>
    </div>
    <img id="close" src="" style="width: 140px;margin: auto;height: 35px;bottom: 4.5%;position: absolute;margin-left: -70px;"/>
</div>`;$('#root').html(dom);let canTouch=true;(function(){setLoading()
setPerc()})()
function setPerc(){resteview()
window.onresize=resteview
function resteview(){var view=document.querySelector('#view')
var main=document.querySelector('#main')
var deg=52.5
var height=document.documentElement.clientHeight;var R=Math.round(Math.tan(deg/180*Math.PI)*height*.5);view.style.WebkitPerspective=view.style.perspective=R+"px";css(main,'translateZ',R)}}
function setLoading(){var logoText=document.querySelector('.logoText');var data=[];var nub=0;for(var j=0;j<first.length;j++){var img=new Image();img.src=first[j];if(j==first.length-1){img.onload=function(){$('#bgdoor').css({display:'block',opacity:0});MTween({el:$('#bgdoor')[0],target:{opacity:100,},time:1000,type:'easeOut',callBack:function(){$(function(){$('#goImg')[0].src="https://piccdn.luojilab.com/fe-oss/default/load_go.png";$('#bludbar')[0].src="https://piccdn.luojilab.com/fe-oss/default/window_tanchuang10.png";$('#blud')[0].src="https://piccdn.luojilab.com/fe-oss/default/window_tanchuang9.png";$('#close')[0].src="https://piccdn.luojilab.com/fe-oss/default/window_close.png";});var config={mountedId:'#bar',target:8,step:1,color:'green',fontSize:"20px",borderRadius:"5px",backgroundColor:'#eee',barBackgroundColor:'red',};var p=new Progress();var gonext=false;setTimeout(function(){gonext=true;},2000);for(var s in imgData){data=data.concat(imgData[s]);}
for(var i=0;i<data.length;i++){var img=new Image();img.src=data[i];img.onload=function(){$('.loading-progress-bar').show();$('.loading-progress-bar-inner').animate({width:'85%'},3000);nub++;if((Math.floor(nub/data.length*100))==100){logoText.remove();}
if(nub==data.length){$('.loading-progress-bar-inner').animate({width:'100%'},700,function(){$('.loading-progress-bar').hide();if(gonext){document.getElementById('wrapper').style.opacity=0;anmt();}else{setTimeout(function(){document.getElementById('wrapper').style.opacity=0;anmt();},1000);}});}};}}})};}}}
function anmt(){var view=document.querySelector('#view')
var logo1=document.querySelector('#logo1')
var bgdoor=document.querySelector('#bgdoor')
MTween({el:bgdoor,target:{opacity:40,scale:450},time:2000,type:'easeOut',callBack:function(){view.removeChild(logo1)
anmt5();$(function(){var data=others.window;var nub=0;for(var i=0;i<data.length;i++){var img=new Image();img.src=data[i];img.onload=function(){nub++;};}});}})}
function anmt5(){var tZ=document.querySelector('#tZ')
css(tZ,'translateZ',-2000)
anmt6()
anmt7()
createPano()
createBigClick();MTween({el:tZ,target:{translateZ:-100},time:3600,type:'easeBoth',callBack:function(){}})}
function anmt6(){var panoBg=document.querySelector('#panoBg');var width=129
var deg=360/imgData.bg.length
var R=parseInt(Math.tan((180-deg)/2*Math.PI/180)*(width/2)-1)
var startDeg=180;css(panoBg,'rotateX',0)
css(panoBg,'rotateY',-765)
for(var i=0;i<imgData.bg.length;i++){var span=document.createElement("span");css(span,'rotateY',startDeg)
css(span,'translateZ',-R)
span.style.backgroundImage="url("+imgData.bg[i]+")";span.style.display="none";panoBg.appendChild(span);startDeg-=deg}
var num=0
var timer=setInterval(function(){panoBg.children[num].style.display="block";num++
if(num>=panoBg.children.length){clearInterval(timer)}},3600/2/imgData.bg.length)
MTween({el:panoBg,target:{rotateY:-160},time:3600,type:'linear',callBack:function(){setDarg()
setTimeout(function(){},1000)}})}
function anmt7(){var cloud=document.querySelector('#cloud');var cloudcount=18;css(cloud,'translateZ',-400)
for(var i=0;i<cloudcount;i++){var span=document.createElement("span");span.style.backgroundImage='url('+imgData.cloud[i%3]+')';span.style.backgroundSize='contain';var R=200+(Math.random()*150)
var deg=(360/cloudcount)*i
var x=Math.sin(deg*Math.PI/180)*R
var z=Math.cos(deg*Math.PI/180)*R
var y=(Math.random()-.5)*200
css(span,"translateX",x)
css(span,"translateZ",z)
css(span,"translateY",y)
span.style.display='none'
cloud.appendChild(span)}
var num=0
var timer=setInterval(function(){cloud.children[num].style.display='block'
num++
if(num>=cloud.children.length){clearInterval(timer);}},50)
MTween({el:cloud,target:{rotateY:540},time:3500,type:"easeIn",callIn:function(){var deg=-css(cloud,"rotateY");for(var i=0;i<cloud.children.length;i++){css(cloud.children[i],"rotateY",deg);}},callBack:function(){cloud.parentNode.removeChild(cloud)
bgShow();machineAnimit();initcloud();addBigClickEvent();$("#go").show();buttonAnimit();mbuttonAnimit();setTimeout(function(){$('.machinebutton2').addClass('opacity1')},500);document.getElementById('wrapper').style.zIndex=0;document.getElementById('wrapper').style.opacity=1;}})}
function setDarg(){var panoBg=document.querySelector('#panoBg');var tZ=document.querySelector('#tZ');var pano=document.querySelector('#pano')
var startPoint={x:0,y:0}
var panoBgDeg={x:0,y:0}
var scale={x:129/15,y:1170/80}
var startZ=css(tZ,"translateZ")
var lastDeg={x:0,y:0};var lastDis={x:0,y:0};var app=document.getElementById("root");var touchstartY;window.document.getElementById("root").addEventListener('touchstart',function(e){touchstartY=e.touches[0].clientY;if(canTouch){window.isTouch=true;}
if(!canTouch){return;}
clearInterval(pano.timer)
clearInterval(panoBg.timer)
clearInterval(tZ.timer)
startPoint.x=e.changedTouches[0].pageX;startPoint.y=e.changedTouches[0].pageY;panoBgDeg.x=css(panoBg,'rotateY');panoBgDeg.y=css(panoBg,'rotateX');var top=document.scrollTop,totalScroll=document.scrollHeight,currentScroll=top+document.offsetHeight
if(top===0){document.scrollTop=1}else if(currentScroll===totalScroll){document.scrollTop=top-1}},false)
app.addEventListener("touchmove",function(event){var events=event.touches[0]||event;var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;var clientHeight=document.documentElement.clientHeight;var scrollHeight=document.body.scrollHeight;if(events.clientY>touchstartY&&scrollTop===0&&event.cancelable){event.preventDefault();}else if(scrollTop+clientHeight>scrollHeight&&event.cancelable){event.preventDefault();}
if(!canTouch){return;}
var nowDeg={}
var nowDeg2={}
var nowPoint={}
nowPoint.x=event.changedTouches[0].pageX;nowPoint.y=event.changedTouches[0].pageY;var dis={}
dis.x=nowPoint.x-startPoint.x
dis.y=nowPoint.y-startPoint.y
var disDeg={}
disDeg.x=-(dis.x/scale.x)
disDeg.y=dis.y/scale.y
nowDeg.y=panoBgDeg.y+disDeg.y
nowDeg.x=panoBgDeg.x+disDeg.x
nowDeg2.x=panoBgDeg.x+(disDeg.x)*0.95
nowDeg2.y=panoBgDeg.y+(disDeg.y)*0.95
if(nowDeg.y>45){nowDeg.y=45}else if(nowDeg.y<-45){nowDeg.y=-45}
if(nowDeg2.y>45){nowDeg2.y=45}else if(nowDeg2.y<-45){nowDeg2.y=-45}
lastDis.x=nowDeg.x-lastDeg.x
lastDeg.x=nowDeg.x
lastDis.y=nowDeg.y-lastDeg.y
lastDeg.y=nowDeg.y
css(panoBg,"rotateX",nowDeg.y);css(panoBg,"rotateY",nowDeg.x);css(pano,"rotateX",nowDeg2.y);css(pano,"rotateY",nowDeg2.x);var disZ=Math.max(Math.abs(dis.x),Math.abs(dis.y))
if(disZ>300){disZ=300}
css(tZ,'translateZ',startZ-disZ);doAnimationAboutPostion(nowDeg.x);event.stopPropagation();event.cancelBubble=true;return false;},false);window.document.getElementById("root").addEventListener('touchend',function(e){var nowDeg={x:css(panoBg,"rotateY"),y:css(panoBg,"rotateX")};var disDeg={x:lastDis.x*10,y:lastDis.y*10}
doAnimationAboutPostion(nowDeg.x+disDeg.x);MTween({el:tZ,target:{translateZ:startZ},time:700,type:"easeOut"})
MTween({el:panoBg,target:{rotateY:nowDeg.x+disDeg.x},time:800,type:"easeOut"})
MTween({el:pano,target:{rotateY:nowDeg.x+disDeg.x},time:800,type:"easeOut",callBack:function(){window.isTouch=false
window.isStart=false}})
lastDis.x=0,lastDis.y=0})}
function bgShow(){var pageBg=document.querySelector('#pageBg')
MTween({el:pageBg,target:{opacity:100},time:1000,type:"easeBoth"})}
var panosClick={pano0:{width:"92px",height:"126px",startDeg:35,marginTop:"-270px"},pano1:{width:"37px",height:"130px",startDeg:-18,marginTop:"-135px"},pano2:{width:"60px",height:"130px",startDeg:-22,marginTop:"-135px"},length:3,};var bigClick=[{name:'pano0',width:"92px",height:"126px",startDeg:35,marginTop:"-270px"},];function createPano(){var pano=document.querySelector('#pano');var deg=10;var R=450;var nub=0;var startDeg=180;for(var j=0;j<panosClick.length;j++){var thepano=document.createElement("div");var startDeg2=panosClick['pano'+j].startDeg;var span=document.createElement("div");span.style.cssText="float:left;height:"+panosClick['pano'+j].height+";width:"+panosClick['pano'+j].width+";margin-top:"+panosClick['pano'+j].marginTop+";";css(span,"translateY",0);css(span,"rotateY",startDeg2);css(span,"translateZ",-R);nub++;startDeg-=deg;thepano.appendChild(span);pano.appendChild(thepano);$(thepano).addClass('linshiclass'+j);}
css(pano,"rotateX",0);css(pano,"rotateY",0);css(pano,"scale",0);initFloatingPiece();setTimeout(function(){MTween({el:pano,target:{rotateY:-160,scale:100},time:1200,type:"easeBoth"});},28);}
function setSensors(){var pano=document.querySelector('#pano');var panoBg=document.querySelector('#panoBg');var last={x:0,y:0};window.isStart=false;window.isTouch=false;var start={};var now={};var startEl={};var lastTime=Date.now()
var scale=129/18;var startZ=-160;var dir=window.orientation;window.document.getElementById("root").addEventListener('orientationchange',function(e){dir=window.orientation})
window.document.getElementById("root").addEventListener('deviceorientation',function(e){if(window.isTouch){return}
var x=e.beta;var y=e.gamma;switch(dir){case 0:x=e.beta;y=e.gamma;break;case 90:x=e.gamma;y=e.beta;break;case-90:x=-e.gamma;y=-e.beta;break;case 180:x=-e.beta;y=-e.gamma;break;}
var nowTime=Date.now()
if(nowTime-lastTime<30){return}
lastTime=nowTime
if(!isStart){isStart=true;start.x=x
start.y=y
startEl.x=css(pano,'rotateX')
startEl.y=css(pano,'rotateY')}else{now.x=x
now.y=y
var dis={}
dis.x=now.x-start.x
dis.y=now.y-start.y
var deg={}
deg.x=startEl.x+dis.x
deg.y=startEl.y+dis.y
if(deg.x>45){deg.x=45;}else if(deg.x<-45){deg.x=-45;}
var disXZ=Math.abs(Math.round((deg.x-css(pano,'rotateX'))*scale))
var disYZ=Math.abs(Math.round((deg.y-css(pano,"rotateY"))*scale))
var disZ=Math.max(disXZ,disYZ)
if(disZ>300){disZ=300}
MTween({el:tZ,target:{translateZ:startZ-disZ},time:300,type:'easeOut',callBack:function(){MTween({el:tZ,target:{translateZ:startZ},time:400,type:"easeOut"})}})
MTween({el:pano,target:{rotateX:deg.x,rotateY:deg.y},time:800,type:'easeOut'})
MTween({el:panoBg,target:{rotateX:deg.x,rotateY:deg.y},time:800,type:'easeOut'})}})}
function initFloatingPiece(){var pano=document.querySelector('#pano');var themachine=document.createElement('div');var machine=document.createElement('div');machine.className="machine";machine.classList.add("mcclick");var str="opacity:0;float:left;height: 550px;width: 400px;left: -130px;background: url(&quot;pano3/mation.png&quot;);transform: translateY(0px) rotateY(166deg) translateZ(-429px);float: left;position: absolute;";machine.style.cssText=str;machine.style.background="url("+imgData["big"][0]+")";themachine.appendChild(machine);pano.appendChild(themachine);var machineWords=document.createElement('div');var words=document.createElement('div');words.className="machine2";words.classList.add("mcclick");var str="opacity:0;height: 160px;width: 400px;left: -123px;background: url(&quot;pano3/machine2.png&quot;);transform: translateY(0px) rotateY(163deg) translateZ(-427px);float: left;position: absolute;top: -400px;";words.style.cssText=str;words.style.background="url("+imgData["big"][1]+")";machineWords.appendChild(words);pano.appendChild(machineWords);var machineIcon=document.createElement('div');var icon=document.createElement('div');icon.className="machine3";icon.classList.add("mcclick");var str="opacity: 0;height: 129px;width: 237px;left: -12px;background: url(&quot;pano3/machine3.png&quot;);transform: translateY(0px) rotateY(163deg) translateZ(-338px);float: left;position: absolute;top: 75px;";icon.style.cssText=str;icon.style.background="url("+imgData["big"][2]+")";machineIcon.appendChild(icon);pano.appendChild(machineIcon);var machineIcon=document.createElement('div');var icon=document.createElement('div');icon.classList="machinebutton1 mcclick opacity0";var str="height: 63px;width: 141px;left: 27px;transform: translateY(0px) rotateY(163deg) translateZ(-388px);float: left;position: absolute;top: 11px;";icon.style.cssText=str;icon.style.background="url("+imgData["big"][3]+")";machineIcon.appendChild(icon);pano.appendChild(machineIcon);var machineIcon=document.createElement('div');var icon=document.createElement('div');icon.className="machinebutton2";icon.classList.add("mcclick");var str="opacity: 0;height: 75px;width: 145px;left: 23px;transform: translateY(0px) rotateY(163deg) translateZ(-390px);float: left;position: absolute;top: 10px;"
icon.style.cssText=str;icon.style.background="url("+imgData["big"][4]+")";machineIcon.appendChild(icon);pano.appendChild(machineIcon);getMoney();}
function machineAnimit(){MTween({el:$(".machine")[0],target:{opacity:100,top:-269,},time:400,type:'linear',callBack:function(){MTween({el:$(".machine2")[0],target:{opacity:100,top:-400,},time:400,type:'linear',callBack:function(){iconAnimit();}})}})}
function iconAnimit(){MTween({el:$(".machine3")[0],target:{opacity:100,top:80,},time:500,type:'linear',callBack:function(){MTween({el:$(".machine3")[0],target:{opacity:70,top:75,},time:1000,type:'linear',callBack:function(){iconAnimit();}})}})}
function mbuttonAnimit(){var machinebutton1=$('.machinebutton1')
setTimeout(function(){$('.machinebutton1').removeClass('opacity0');$('.machinebutton1').addClass('opacity1');setTimeout(function(){$('.machinebutton1').removeClass('opacity1');$('.machinebutton1').addClass('opacity0');mbuttonAnimit();},700);},700);}
var xiayu=1;function doAnimationAboutPostion(nowDegx){doFloatingPiece(nowDegx);doslideOut(nowDegx);clicktip(nowDegx);if(xiayu===1&&Math.abs(((nowDegx+360000)-500))%360<15){xiayu=0;hongbaoyu(nowDegx);}else{if(Math.abs(((nowDegx+360000)-700))%360<90){xiayu=1;}}}
function doFloatingPiece(nowDegx){if(Math.abs(((nowDegx+360000)-85.5))%360<25){MTween({el:$(".talkWindowbs")[0],target:{opacity:100,top:-15,},time:500,type:'linear',callBack:function(){}})}else{MTween({el:$(".talkWindowbs")[0],target:{opacity:-100,top:20,},time:500,type:'linear',callBack:function(){}})}
if(Math.abs(((nowDegx+360000)-107.5))%360<25){MTween({el:$(".talkWindowmp")[0],target:{opacity:100,top:-250,},time:500,type:'linear',callBack:function(){}})}else{MTween({el:$(".talkWindowmp")[0],target:{opacity:-100,top:-200,},time:500,type:'linear',callBack:function(){}})}
if(Math.abs(((nowDegx+360000)-165))%360<360){machineAnimit();}else{MTween({el:$(".machine")[0],target:{opacity:-100,top:269,},time:500,type:'linear',callBack:function(){MTween({el:$(".machine2")[0],target:{opacity:-100,top:40,},time:100,type:'linear',callBack:function(){MTween({el:$(".machine3")[0],target:{opacity:-100,top:40,},time:50,type:'linear',callBack:function(){}})}})}})}}
function doslideOut(nowDegx){var outEle=$('.slideout');for(var i=0;i<outEle.length;i++){if($('.slideout')[i]){var currrentdeg=parseInt($($('.slideout')[i]).css("transform").substring($($('.slideout')[i]).css("transform").indexOf('rotateY')+8,$($('.slideout')[i]).css("transform").indexOf('rotateY')+12));if(Math.abs(((nowDegx+360000)-(-parseInt(currrentdeg))))%360<25){var topnow=$($('.slideout')[i]).css('top')
var top=parseInt(topnow.substring(0,topnow.length-2))+40;$(outEle[i]).css('top',top+'px');$(outEle[i]).removeClass('slideout');MTween({el:outEle[i],target:{opacity:100,top:parseInt(topnow.substring(0,topnow.length-2)),},time:500,type:'linear',callBack:function(){}})}}}}
function clicktip(nowDegx){var outEle=$('.clicktip');for(var i=0;i<outEle.length;i++){var currrentdeg=parseInt($(outEle[i]).css("transform").substring($(outEle[i]).css("transform").indexOf('rotateY')+8,$(outEle[i]).css("transform").indexOf('rotateY')+12));if(Math.abs(((nowDegx+360000)-(-parseInt(currrentdeg))))%360<45){var topnow=$(outEle[i]).css('top')
$(outEle[i]).removeClass('slideout');MTween({el:outEle[i],target:{opacity:70,},time:500,type:'linear',callBack:function(){}})}else{MTween({el:outEle[i],target:{opacity:-100,},time:500,type:'linear',callBack:function(){}})}}}
function hongbaoyu(nowDegx){if(Math.abs(((nowDegx+360000)-500))%360<50){var hongbaos=['https://piccdn.luojilab.com/fe-oss/default/window_hongbaoyu1.png','https://piccdn.luojilab.com/fe-oss/default/window_hongbaoyu2.png','https://piccdn.luojilab.com/fe-oss/default/window_hongbaoyu3.png','https://piccdn.luojilab.com/fe-oss/default/window_hongbaoyu4.png','https://piccdn.luojilab.com/fe-oss/default/window_hongbaoyu1.png','https://piccdn.luojilab.com/fe-oss/default/window_hongbaoyu2.png','https://piccdn.luojilab.com/fe-oss/default/window_hongbaoyu3.png','https://piccdn.luojilab.com/fe-oss/default/window_hongbaoyu4.png','https://piccdn.luojilab.com/fe-oss/default/window_hongbaoyu1.png','https://piccdn.luojilab.com/fe-oss/default/window_hongbaoyu2.png','https://piccdn.luojilab.com/fe-oss/default/window_hongbaoyu3.png','https://piccdn.luojilab.com/fe-oss/default/window_hongbaoyu4.png','https://piccdn.luojilab.com/fe-oss/default/window_hongbaoyu1.png','https://piccdn.luojilab.com/fe-oss/default/window_hongbaoyu2.png','https://piccdn.luojilab.com/fe-oss/default/window_hongbaoyu3.png','https://piccdn.luojilab.com/fe-oss/default/window_hongbaoyu4.png','https://piccdn.luojilab.com/fe-oss/default/window_hongbaoyu1.png','https://piccdn.luojilab.com/fe-oss/default/window_hongbaoyu2.png','https://piccdn.luojilab.com/fe-oss/default/window_hongbaoyu3.png','https://piccdn.luojilab.com/fe-oss/default/window_hongbaoyu4.png','https://piccdn.luojilab.com/fe-oss/default/window_hongbaoyu1.png','https://piccdn.luojilab.com/fe-oss/default/window_hongbaoyu2.png','https://piccdn.luojilab.com/fe-oss/default/window_hongbaoyu3.png','https://piccdn.luojilab.com/fe-oss/default/window_hongbaoyu4.png','https://piccdn.luojilab.com/fe-oss/default/window_hongbaoyu1.png','https://piccdn.luojilab.com/fe-oss/default/window_hongbaoyu2.png',];for(var i=0;i<hongbaos.length;i++){var outDiv=document.createElement('div');let imgDiv=document.createElement('div');imgDiv.classList="showWindow hongbaoyu";var str="position: absolute;top:-50px;right:-50px;width:50px;height:50px;background-image:url('"+hongbaos[i]+"');background-size: 50px;";imgDiv.style.cssText=str;outDiv.appendChild(imgDiv);imgDiv.onclick=function(){$('#info').hide();$('#rules').hide();$('#window').hide();$('.hongbaohe1-2').click();}
$('body')[0].appendChild(outDiv);setTimeout(function(){MTween({el:imgDiv,target:{opacity:60,top:50+(Math.random()*2500),right:400+(Math.random()*430)},time:(Math.random()*1000+2000),type:'linear',callBack:function(){imgDiv.remove();}})},Math.abs(Math.random()*5000-2000))}}else{}}
function createBigClick(){var bigClickData=[{id:"jiahangjia",name:"贾行家",width:"146px",height:"310px",startDeg:135,translateZ:"-411px",marginTop:"45px","point":"1111","link":"2222"},{id:"lijun",name:"李筠",width:"174px",height:"371px",startDeg:125,marginTop:"-169px","point":"1111","link":"2222"},{id:"liuwei",name:"刘玮",width:"157px",height:"304px",startDeg:79,translateZ:"-463px",marginTop:"-107px","point":"1111","link":"2222"},{id:"huanglining1",name:"黄昱宁-1",width:"181px",height:"289px",startDeg:103,marginTop:"-151px","point":"1111","link":"2222"},{id:"zhuwei1",name:"朱伟-1",width:"330px",height:"311px",startDeg:100,translateZ:'-540px',marginTop:"56px","point":"1111","link":"2222"},{id:"caoxingyuan1",name:"曹星原-1",width:"286px",height:"345px",startDeg:65,translateZ:'-500px',marginTop:"20px","point":"1111","link":"2222"},{id:"linannan",name:"李南南",width:"102px",height:"315px",startDeg:37,translateZ:'-448px',marginTop:"-9px","point":"1111","link":"2222"},{classList:"slideout",id:"hongbaohe1-2",name:"红包盒1-2",width:"80px",height:"55px",startDeg:24,marginTop:"134px","point":"1111","link":"2222"},{classList:"blink",id:"shehuiyujingji",name:"社会与经济",width:"93px",height:"117px",startDeg:38,marginTop:"-135px","point":"1111","link":"2222"},{classList:"blink",id:"anzhishi2",name:"暗知识-2",width:"79px",height:"115px",startDeg:25,marginTop:"-135px","point":"1111","link":"2222"},{classList:"blink",id:"chengshi1",name:"成事-1",width:"89px",height:"116px",startDeg:14,marginTop:"-135px","point":"1111","link":"2222"},{classList:"blink",id:"shiwenhuojinchensilu",name:"十问：霍金沉思录",width:"90px",height:"120px",startDeg:36,marginTop:"-261px","point":"1111","link":"2222"},{classList:"blink",id:"meiguoxianjing1",name:"美国陷阱-1",width:"90px",height:"118px",startDeg:17,marginTop:"-259px","point":"1111","link":"2222"},{id:"bianhengqin",name:"卞恒沁",width:"104px",height:"301px",startDeg:6,marginTop:"-89px","point":"1111","link":"2222"},{id:"list",name:"虚构的犹太民族-1",width:"250px",height:"188px",startDeg:-8,marginTop:"-234px",translateZ:'-390px',"point":"1111","link":"2222"},{id:"liuxuan",name:"刘玄",width:"110px",height:"285px",startDeg:-36,marginTop:"-16px","point":"1111","link":"2222"},{id:"tingshutieshi1",name:"听书帖士-1",width:"44px",height:"220px",startDeg:-45,marginTop:"-287px","point":"1111","link":"2222"},{id:"tingshutieshi1",name:"听书帖士-2",width:"59px",height:"220px",startDeg:-51,marginTop:"-287px","point":"1111","link":"2222"},{id:"shujialidehongbao",name:"书架里的红包",width:"73px",height:"66px",startDeg:-51,marginTop:"-83px","point":"1111","link":"2222"},{id:"yonghu1",name:"用户1",width:"78px",height:"118px",startDeg:-54,marginTop:"-24px","point":"1111","link":"2222"},{id:"yonghu3",name:"用户2",width:"175px",height:"307px",startDeg:-66,translateZ:'-400px',marginTop:"34px","point":"1111","link":"2222"},{id:"hongbaohe1-2",name:"红包盒2",width:"79px",height:"56px",startDeg:-75,marginTop:"181px","point":"1111","link":"2222"},{id:"yonghu2",name:"用户3",width:"64px",height:"100px",startDeg:-73,marginTop:"-25px","point":"1111","link":"2222"},{id:"tingshushujubang1",name:"听书数据榜-1",width:"153px",height:"235px",startDeg:-65,marginTop:"-294px","point":"1111","link":"2222"},{classList:"slideout",id:"ditu1",name:"地图1",width:"64px",height:"75px",startDeg:-87,marginTop:"-170px","point":"1111","link":"2222"},{classList:"slideout",id:"ditu2",name:"地图2",width:"70px",height:"69px",startDeg:-96,marginTop:"-236px","point":"1111","link":"2222"},{classList:"slideout",id:"ditu3",name:"地图3",width:"45px",height:"58px",startDeg:-103,marginTop:"-202px","point":"1111","link":"2222"},{id:"saodiseng",name:"扫地僧",width:"89px",height:"156px",startDeg:-96,marginTop:"-63px","point":"1111","link":"2222"},{id:"beisu",name:"倍速",width:"66px",height:"74px",startDeg:-85,marginTop:"9px","point":"1111","link":"2222"},{id:"yonghu4",name:"用户4",width:"90px",height:"213px",startDeg:-96,marginTop:"78px","point":"1111","link":"2222"},{classList:"slideout",id:"hongbaohe1-2",name:"红包盒3",width:"82px",height:"52px",startDeg:-131,translateZ:'-399px',marginTop:"113px","point":"1111","link":"2222"},{id:"yanglei",name:"杨蕾",width:"111px",height:"306px",startDeg:-114,marginTop:"47px","point":"1111","link":"2222"},{id:"ashi",name:"阿狮",width:"237px",height:"411px",startDeg:-145,translateZ:'-360px',marginTop:"-87px","point":"1111","link":"2222"},]
var tipData=[{id:"jiahangjia",name:"贾行家",width:"146px",height:"310px",startDeg:135,translateZ:"-411px",marginTop:"0px","point":"1111","link":"2222"},{id:"lijun",name:"李筠",width:"174px",height:"371px",startDeg:125,marginTop:"-169px","point":"1111","link":"2222"},{id:"liuwei",name:"刘玮",width:"157px",height:"304px",startDeg:79,translateZ:"-463px",marginTop:"-107px","point":"1111","link":"2222"},{id:"huanglining1",name:"黄昱宁-1",width:"181px",height:"289px",startDeg:103,marginTop:"-151px","point":"1111","link":"2222"},{id:"zhuwei1",name:"朱伟-1",width:"330px",height:"311px",startDeg:100,translateZ:'-540px',marginTop:"56px","point":"1111","link":"2222"},{id:"caoxingyuan1",name:"曹星原-1",width:"286px",height:"345px",startDeg:65,translateZ:'-430px',marginTop:"20px","point":"1111","link":"2222"},{id:"linannan",name:"李南南",width:"102px",height:"315px",startDeg:33,translateZ:'-448px',marginTop:"-40px","point":"1111","link":"2222"},{classList:"slideout",id:"hongbaohe1-2",name:"红包盒1-2",width:"80px",height:"55px",startDeg:24,marginTop:"134px","point":"1111","link":"2222"},{classList:"blink",id:"shehuiyujingji",name:"社会与经济",width:"93px",height:"117px",startDeg:35,marginTop:"-135px","point":"1111","link":"2222"},{classList:"blink",id:"anzhishi2",name:"暗知识-2",width:"79px",height:"115px",startDeg:22,marginTop:"-135px","point":"1111","link":"2222"},{classList:"blink",id:"chengshi1",name:"成事-1",width:"89px",height:"116px",startDeg:11,marginTop:"-135px","point":"1111","link":"2222"},{classList:"blink",id:"shiwenhuojinchensilu",name:"十问：霍金沉思录",width:"90px",height:"120px",startDeg:33,marginTop:"-245px","point":"1111","link":"2222"},{classList:"blink",id:"meiguoxianjing1",name:"美国陷阱-1",width:"90px",height:"118px",startDeg:14,marginTop:"-243px","point":"1111","link":"2222"},{id:"bianhengqin",name:"卞恒沁",width:"104px",height:"301px",startDeg:4,marginTop:"-108px","point":"1111","link":"2222"},{id:"list",name:"虚构的犹太民族-1",width:"250px",height:"188px",startDeg:-21,marginTop:"-218px","point":"1111","link":"2222"},{id:"liuxuan",name:"刘玄",width:"110px",height:"285px",startDeg:-38,marginTop:"-51px","point":"1111","link":"2222"},{id:"tingshutieshi1",name:"听书帖士-1",width:"44px",height:"220px",startDeg:-45,translateZ:'-700px',marginTop:"-287px","point":"1111","link":"2222"},{id:"tingshutieshi1",name:"听书帖士-2",width:"59px",height:"220px",startDeg:-51,marginTop:"-287px","point":"1111","link":"2222"},{id:"shujialidehongbao",name:"书架里的红包",width:"73px",height:"66px",startDeg:-51,marginTop:"-83px","point":"1111","link":"2222"},{id:"yonghu1",name:"用户1",width:"78px",height:"118px",startDeg:-54,marginTop:"-12px","point":"1111","link":"2222"},{id:"yonghu3",name:"用户2",width:"175px",height:"307px",startDeg:-66,translateZ:'-400px',marginTop:"50px","point":"1111","link":"2222"},{id:"hongbaohe1-2",name:"红包盒2",width:"79px",height:"56px",startDeg:-75,marginTop:"156px","point":"1111","link":"2222"},{id:"yonghu2",name:"用户3",width:"64px",height:"100px",startDeg:-73,marginTop:"-10px","point":"1111","link":"2222"},{id:"tingshushujubang1",name:"听书数据榜-1",width:"153px",height:"235px",startDeg:-65,marginTop:"-294px","point":"1111","link":"2222"},{classList:"slideout",id:"ditu1",name:"地图1",width:"64px",height:"75px",startDeg:-87,marginTop:"-133px","point":"1111","link":"2222"},{classList:"slideout",id:"ditu2",name:"地图2",width:"70px",height:"69px",startDeg:-96,marginTop:"-186px","point":"1111","link":"2222"},{classList:"slideout",id:"ditu3",name:"地图3",width:"45px",height:"58px",startDeg:-102,marginTop:"-170px","point":"1111","link":"2222"},{id:"saodiseng",name:"扫地僧",width:"89px",height:"156px",startDeg:-96,marginTop:"-63px","point":"1111","link":"2222"},{id:"beisu",name:"倍速",width:"66px",height:"74px",startDeg:-85,marginTop:"9px","point":"1111","link":"2222"},{id:"yonghu4",name:"用户4",width:"90px",height:"213px",startDeg:-96,marginTop:"78px","point":"1111","link":"2222"},{classList:"slideout",id:"hongbaohe1-2",name:"红包盒3",width:"82px",height:"52px",startDeg:-126,translateZ:'-399px',marginTop:"113px","point":"1111","link":"2222"},{id:"yanglei",name:"杨蕾",width:"111px",height:"306px",startDeg:-110,marginTop:"-13px","point":"1111","link":"2222"},{id:"ashi",name:"阿狮",width:"237px",height:"411px",startDeg:-154,translateZ:'-360px',marginTop:"-123px","point":"1111","link":"2222"},]
var pano=document.querySelector('#pano');for(var i=0;i<bigClickData.length;i++){var outDiv=document.createElement('div');var imgDiv=document.createElement('div');imgDiv.className=bigClickData[i].id
imgDiv.classList.add("showWindow");imgDiv.classList.add("hidden");if(bigClickData[i].classList!=undefined){imgDiv.classList.add(bigClickData[i].classList);}
var str="background-color:'red';float:left;top:"+bigClickData[i].marginTop+";height:"+bigClickData[i].height+";width: "+bigClickData[i].width+";left: 0px;transform: translateY(0px) rotateY("+bigClickData[i].startDeg+"deg) translateZ("+(bigClickData[i].translateZ===undefined?"-429px":bigClickData[i].translateZ)+");float: left;position: absolute;";imgDiv.style.cssText=str;imgDiv.style.background="url("+imgData["panosClick"][i]+")";outDiv.appendChild(imgDiv);pano.appendChild(outDiv);if(parseInt(tipData[i].width)>0&&parseInt(tipData[i].height)>0){var eltop=parseInt(tipData[i].marginTop)+(parseInt(tipData[i].height)*0.4)
var eltranslateZ=parseInt(tipData[i].translateZ===undefined?"-429px":tipData[i].translateZ)*0.85
var blink1=document.createElement('div');var blink11=document.createElement('div');var blink11str="opacity: 0;top:"+eltop+"px;height:25px"+";width: 25px;left: "+((80<parseInt(tipData[i].startDeg)||-140>parseInt(tipData[i].startDeg))?parseInt(tipData[i].width)/2:0)+"px;transform: translateY(0px) rotateY("+tipData[i].startDeg+"deg) translateZ("+eltranslateZ+"px);float: left;position: absolute;background: url('https://piccdn.luojilab.com/fe-oss/default/window_blinkcoin.png');display: block;background-size: cover;"
blink11.style.cssText=blink11str;blink11.classList=tipData[i].id+' showWindow clicktip';blink1.appendChild(blink11);pano.appendChild(blink1);}}}
function addBigClickEvent(){$('.showWindow').show()
var thewindow=$('#window');var windowImg=$('#windowImg');$('.showWindow').click(function(){var windowName=$(this)[0].classList[0];windowImg[0].src='https://piccdn.luojilab.com/fe-oss/default/window_'+windowName+'.png'
thewindow.show();thewindow[0].style.opacity=0
MTween({el:thewindow[0],target:{opacity:100,},time:500,type:'linear',callBack:function(){sendPoint(windowName);}})
canTouch=false;window.isTouch=false;});$('#close').click(function(){$('#info').hide();$('#rules').hide();$('#listinfo').hide();thewindow.hide();canTouch=true;clearInterval(si);$('#listContent').children().forEach(e=>{$(e).show();$(e)[0].style='';});});var si;$('.list').click(function(){$('#listinfo').show();var i=0;si=setInterval(function(){var thediv=$('#'+i);MTween({el:thediv[0],target:{opacity:-100,marginTop:-1*thediv.height()},time:800,type:'linear',callBack:function(){thediv.hide()
i++;if(i==26){$('#listContent').children().forEach(e=>{$(e).show();$(e)[0].style='';});i=0;}}})},1300);});}
function initcloud(){var pano=document.querySelector('#pano');var thecloud01=document.createElement('div');var cloud01=document.createElement('div');cloud01.className="cloud01";var str="opacity:1;float:left;height: 140px;width: 407px;left: 0px;transform: translateY(0px) rotateY(121deg) translateZ(-500px);float: left;position: absolute;top: 312px;";cloud01.style.cssText=str;cloud01.style.background="url("+imgData["cloud"][3]+")";thecloud01.appendChild(cloud01);pano.appendChild(thecloud01);var thecloud02=document.createElement('div');var cloud02=document.createElement('div');cloud02.className="cloud02";var str="opacity:1;height: 126px;width: 292px;left: 0px;transform: translateY(0px) rotateY(163deg) translateZ(-427px);float: left;position: absolute;top: 328px;";cloud02.style.cssText=str;cloud02.style.background="url("+imgData["cloud"][4]+")";thecloud02.appendChild(cloud02);pano.appendChild(thecloud02);cloudblink(cloud02,'left');cloudblink(cloud01,'right');var talkwindowbs=document.createElement('div');var blink11=document.createElement('div');var blink11str="opacity: 1;top: -15px;height: 88px;width: 165px;left: 31px;transform: translateY(0px) rotateY(-99deg) translateZ(-396px);float: left;position: absolute;background: url('');display: block;background-size: cover;"
blink11.style.cssText=blink11str;blink11.className='talkWindowbs';talkwindowbs.appendChild(blink11);pano.appendChild(talkwindowbs);var talkwindowbs=document.createElement('div');var blink11=document.createElement('div');var blink11str="opacity: 1;top: -248px;height: 88px;width: 165px;left: 31px;transform: translateY(0px) rotateY(-121deg) translateZ(-396px);float: left;position: absolute;background: url('');display: block;background-size: cover;"
blink11.style.cssText=blink11str;blink11.className='talkWindowmp';talkwindowbs.appendChild(blink11);pano.appendChild(talkwindowbs);var theblinks=$('.blink');for(var i=0;i<theblinks.length;i++){}}
function cloudblink(e,r){MTween({el:e,target:{opacity:700,left:(r==='right'?30:10),},time:(r==='right'?2000:1200),type:'linear',callBack:function(){MTween({el:e,target:{opacity:30,left:(r==='right'?0:-40),},time:(r==='right'?2000:1200),type:'linear',callBack:function(){cloudblink(e,r);}})}})}
function blinks(e){MTween({el:e,target:{opacity:700,},time:(500),type:'linear',callBack:function(){MTween({el:e,target:{opacity:30,},time:(500),type:'linear',callBack:function(){blinks(e);}})}})}
var onetime_click=1;var ua=navigator.userAgent;var Asio=Asio||{send:function(a){return false}};var userInfo={activity_coupon_list:{coupon_url:''}};function getMoney(){if(onetime_click){onetime_click=0;setTimeout(function(){onetime_click=1;},300);if(ua.indexOf('igetapp')&&Asio.send('')){Asio.send('agent.swipe',{enable:false});Asio.send('ui.minibar',{show:false});}
$('.mcclick').click(function(){if(ua.indexOf('igetapp')>0){var windowDiv=$('#window');var windowImg=$('#windowImg');windowImg[0].src='https://piccdn.luojilab.com/fe-oss/default/window_tanchuang8.png'
windowDiv.show();Asio.send('agent.info').then(function(res){var info=res.data;if(info.islogin){ua=navigator.userAgent;var user_id=0;if(Asio.send('agent.info')!=undefined){Asio.send('agent.info').then(function(res){user_id=res.data.userid;Asio.send('network.load',{url:'$_ENTREE_DOMAIN_$/odob/v2/front_activity/user_and_coupon_info',method:'POST',params:{user_id:user_id},contentType:'application/x-www-form-urlencoded',proxyType:'gateway/entree'}).then(function(res){userInfo=res.data;$('#avatar')[0].src=userInfo.avatar;$('#nick').html(userInfo.nick_name);var listened_count=userInfo.listened_count
var white_word=[{count:-1,word:'万事开头难，一本就不少'},{count:3,word:'中国人年均才读4.67本书'},{count:15,word:'只有10%的中国人，每年读书超过10本'},{count:40,word:'每周读1本，一年才读52本'},{count:80,word:'这些书摞起来有1个篮球运动员那么高'},{count:155,word:'顺着这些书，你能登上1层楼'},{count:365,word:'每天听本书，每天，你真的做到了'},];var showword='';var numcount=0;for(var i=0;i<white_word.length;i++){if(listened_count>=white_word[i].count){showword=white_word[i].word;numcount++;}}
$('#wordbig').html(showword);var hadfinish_word=[{count:-1,word:''},{count:3,word:'good!'},{count:15,word:'great!'},{count:40,word:'amazing!'},{count:80,word:'excellent!'},{count:155,word:'fantastic!'},{count:365,word:'unbelievable!'},];var hadfinish='';for(var i=0;i<hadfinish_word.length;i++){if(listened_count>=hadfinish_word[i].count){hadfinish='你竟然听了'+listened_count+'本，'+hadfinish_word[i].word;}}
if(listened_count<3){hadfinish='已经听了'+listened_count+'本，再接再厉';}
$('#hadfinish').html(hadfinish);$('#moneypic')[0].src=('https://piccdn.luojilab.com/fe-oss/default/window_tanchuang'+numcount+'.png');$('#info').show();var bludwidth=listened_count/365*100*0.47;if(listened_count>365){bludwidth=100*0.47;}
$('#blud').animate({width:bludwidth+'%'},2000);canTouch=false;});});}}else{var windowImg=$('#windowImg');windowImg[0].src='https://piccdn.luojilab.com/fe-oss/default/window_guiding.png'
$('#rules').show();windowDiv.show();canTouch=false;}});}else{if(!(Asio.send('')===false)){var windowDiv=$('#window');var windowImg=$('#windowImg');windowImg[0].src='https://piccdn.luojilab.com/fe-oss/default/window_guiding.png'
$('#rules').show();windowDiv.show();canTouch=false;}else{}}
sendPoint('pano_machine');});if(ua.indexOf('igetapp')>0){$('#getButton').click(function(){var link=encodeURIComponent(userInfo.activity_coupon_list[0].coupon_url);var url='igetapp://activity/detail?url='+link;sendPoint('jiangxuejin');Asio.send('jump.ddURL',{ddURL:url,ddURLMinVer:'5.1.0'})});}
var goapp=$('.goapp')
goapp.click(function(){if(ua.indexOf('igetapp')>0){$('#info').hide();$('#rules').hide();$('#window').hide();canTouch=true;Asio.send('ui.login');}else{var link=encodeURIComponent('https://pic1cdn.luojilab.com/html/poster/picvyLKPPjLjNf5W5N47mky.html');var url='igetapp://activity/detail?url='+link;Asio.weLaunch(url);}});}}
$(function(){if(ua.indexOf('igetapp')>0){$("#windowImg").click(function(e){if($("#windowImg")[0].src.indexOf('hongbaohe')>0){var link=encodeURIComponent('https://pic1cdn.luojilab.com/html/poster/picqqL8W9PRlXcgGo6AXrGW.html');var url='igetapp://activity/detail?url='+link;sendPoint('honghaobe10');Asio.send('jump.ddURL',{ddURL:url,ddURLMinVer:'5.1.0'})};if($("#windowImg")[0].src.indexOf('guiding')>0){$('#info').hide();$('#rules').hide();$('#window').hide();canTouch=true;setTimeout(function(){Asio.send('ui.login');},200);};});}else{$("#windowImg").click(function(e){if($("#windowImg")[0].src.indexOf('hongbaohe')>0){var link='https://pic1cdn.luojilab.com/html/poster/picqqL8W9PRlXcgGo6AXrGW.html';window.location.href=link;};});}});function buttonAnimit(){var goimg=$('#goImg')[0];MTween({el:goimg,target:{opacity:100,marginTop:8,},time:500,type:'linear',callBack:function(){MTween({el:goimg,target:{opacity:70,marginTop:0,},time:300,type:'linear',callBack:function(){buttonAnimit();}})}})}
const MAX_DM_COUNT=6;const CHANNEL_COUNT=10;let domPool=[];let danmuPool=['前方高能！',' 来了老铁！这里是听书图书馆',' 听说可以领奖学金？听的越多，领的越多？',' 都别拦我，我去听书了！',' 哇！这里有我喜欢的解读老师！',' 听书听出红包雨，又涨知识又好运。',' 还有好多新书经典书呢',' 内有罗胖，能不能找到就看你的了',' 似乎有很多彩蛋？！同学们快去探索啊',' 太好玩了～我抢到了红包！',' 都憋说了，我要每天听书每天去领奖学金！',' 厉害了！得到放大招！',' 这红包太大了吧........',' 听书竟然能领红包？太爽了吧？',' 不要问我为什么懂得多，你听书你也多',' 我听得书多，不骗你，真有红包在等你',' 朱伟老师忠实听众前来报道',' 3年听书老会员，已就位',' 向我砸红包！',' 我听了1128本书，有谁比我多？',' 你也是听书会员吗？幸会幸会，里面请',' 进去不管看见啥，点就完事儿了',' 都说我脑图画得好，我不会告诉你我是在听书里学的',' 我撸猫时候听，跑步时候听，开车时候听，你啥时候听？',' 书山路有‘听’为径',' 听书一时爽，一直听书一直爽',' 扶我起来，还能再听个三天三夜',' 地上红包可以点，别问我是怎么知道的'];let hasPosition=[];function init(){let wrapper=document.getElementById('wrapper')
for(let j=0;j<CHANNEL_COUNT;j++){let doms=[];for(let i=0;i<MAX_DM_COUNT;i++){let dom=document.createElement('span');wrapper.appendChild(dom);dom.className='right';if(j%2===1){dom.style.bottom=j*20+'px';}else{dom.style.top=j*20+'px';}
doms.push(dom);dom.addEventListener('transitionend',()=>{dom.className='right';dom.style.transform=null;domPool[j].push(dom);});}
domPool.push(doms);}
for(let i=0;i<CHANNEL_COUNT;i++){hasPosition[i]=true;}}
function getChannel(){for(let i=0;i<CHANNEL_COUNT;i++){if(hasPosition[i]&&domPool[i].length)return i;}
return-1;}
function shootDanmu(dom,text,channel){dom.innerText=text;dom.style.transform=`translateX(${-dom.clientWidth}px)`;dom.className='left';hasPosition[channel]=false;setTimeout(()=>{hasPosition[channel]=true;},dom.clientWidth*10+1000);}
init();setInterval(()=>{let channel;if(danmuPool.length&&(channel=getChannel())!=-1){let dom=domPool[channel].shift();domPool[channel].push(dom);let danmu=danmuPool.shift();danmuPool.push(danmu);shootDanmu(dom,danmu,channel);}},1);function sendPoint(str){if(!(Asio.send('')===false)){const asio=new Asio(window.___datasourse___.container);var content={'name':str}
asio.nlog('s_storytell_h5_goods',content);}}