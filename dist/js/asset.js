!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=function(e,t,n,r,o,s){var i,a=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(i=e,a=e.default);var c,u="function"==typeof a?a.options:a;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0),n&&(u.functional=!0),o&&(u._scopeId=o),s?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},u._ssrRegister=c):r&&(c=r),c){var p=u.functional,d=p?u.render:u.beforeCreate;p?(u._injectStyles=c,u.render=function(e,t){return c.call(t),d(e,t)}):u.beforeCreate=d?[].concat(d,c):[c]}return{esModule:i,exports:a,options:u}}},function(e,t,n){e.exports=n(2)},function(e,t,n){Nova.booting(function(e,t){e.component("collapsible-sidebar",n(3))})},function(e,t,n){var r=n(0)(n(9),n(14),!1,function(e){n(4)},null,null);e.exports=r.exports},function(e,t,n){var r=n(5);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(7)("9fa2d8f8",r,!0,{})},function(e,t,n){(e.exports=n(6)(!1)).push([e.i,".sidebar{position:relative}.sidebar .trigger{display:flex;align-items:center;justify-content:center;position:absolute;top:0;right:0;width:50px;z-index:999;padding:10px}.sidebar .trigger .icon{height:25px;width:25px}.sidebar.collapsed>:not(.trigger){display:none}.sidebar.collapsed .trigger+a{display:block}.sidebar.collapsed+.content{max-width:inherit}",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(i=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),s=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(s).concat([o]).join("\n")}var i;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var s=this[o][0];"number"==typeof s&&(r[s]=!0)}for(o=0;o<e.length;o++){var i=e[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(e,t,n){var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o=n(8),s={},i=r&&(document.head||document.getElementsByTagName("head")[0]),a=null,l=0,c=!1,u=function(){},p=null,d="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(e){for(var t=0;t<e.length;t++){var n=e[t],r=s[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(v(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var i=[];for(o=0;o<n.parts.length;o++)i.push(v(n.parts[o]));s[n.id]={id:n.id,refs:1,parts:i}}}}function g(){var e=document.createElement("style");return e.type="text/css",i.appendChild(e),e}function v(e){var t,n,r=document.querySelector("style["+d+'~="'+e.id+'"]');if(r){if(c)return u;r.parentNode.removeChild(r)}if(f){var o=l++;r=a||(a=g()),t=x.bind(null,r,o,!1),n=x.bind(null,r,o,!0)}else r=g(),t=function(e,t){var n=t.css,r=t.media,o=t.sourceMap;r&&e.setAttribute("media",r);p.ssrId&&e.setAttribute(d,t.id);o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}e.exports=function(e,t,n,r){c=n,p=r||{};var i=o(e,t);return h(i),function(t){for(var n=[],r=0;r<i.length;r++){var a=i[r];(l=s[a.id]).refs--,n.push(l)}t?h(i=o(e,t)):i=[];for(r=0;r<n.length;r++){var l;if(0===(l=n[r]).refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete s[l.id]}}}};var y,m=(y=[],function(e,t){return y[e]=t,y.filter(Boolean).join("\n")});function x(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=m(t,o);else{var s=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(s,i[t]):e.appendChild(s)}}},function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var s=t[o],i=s[0],a={id:e+":"+o,css:s[1],media:s[2],sourceMap:s[3]};r[i]?r[i].parts.push(a):n.push(r[i]={id:i,parts:[a]})}return n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(10),o=n.n(r),s=n(12),i=n.n(s);t.default={components:{ChevronLeft:o.a,ChevronRight:i.a},props:{height:{default:"60px"},width:{default:"60px"},persist:{type:Boolean},storageKey:{type:String,default:"nova-navigation-collapsed"},toggleKeyCode:{type:String,default:"Escape"}},mounted:function(){var e=this;this.marginLeft=-1*(this.$el.offsetWidth-this.$refs.trigger.offsetWidth),this.persist?this.collapsed=1==localStorage.getItem(this.storageKey):localStorage.removeItem(this.storageKey),window.addEventListener("keyup",function(t){"Escape"===t.code&&e.toggleCollapsed()})},data:function(){return{marginLeft:null,collapsed:!1}},computed:{sidebarStyle:function(){return{marginLeft:(this.collapsed?this.marginLeft:0)+"px"}}},methods:{toggleCollapsed:function(){this.collapsed=!this.collapsed,this.persist&&localStorage.setItem(this.storageKey,this.collapsed?1:0)}}}},function(e,t,n){var r=n(0)(null,n(11),!1,null,null,null);e.exports=r.exports},function(e,t){e.exports={render:function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{staticStyle:{"enable-background":"new 0 0 485 485"},attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 485 485","xml:space":"preserve"}},[t("g",[t("path",{staticStyle:{fill:"var(--white)"},attrs:{d:"M413.974,71.026C368.171,25.225,307.274,0,242.5,0S116.829,25.225,71.026,71.026C25.225,116.829,0,177.726,0,242.5\n        s25.225,125.671,71.026,171.474C116.829,459.775,177.726,485,242.5,485s125.671-25.225,171.474-71.026\n        C459.775,368.171,485,307.274,485,242.5S459.775,116.829,413.974,71.026z M242.5,455C125.327,455,30,359.673,30,242.5\n        S125.327,30,242.5,30S455,125.327,455,242.5S359.673,455,242.5,455z"}}),this._v(" "),t("polygon",{staticStyle:{fill:"var(--white)"},attrs:{points:"270.524,114.411 142.852,242.5 270.524,370.589 291.772,349.411 185.209,242.5 291.772,135.589 \t"}})])])},staticRenderFns:[]}},function(e,t,n){var r=n(0)(null,n(13),!1,null,null,null);e.exports=r.exports},function(e,t){e.exports={render:function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{staticStyle:{"enable-background":"new 0 0 485 485"},attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 485 485","xml:space":"preserve"}},[t("g",[t("path",{staticStyle:{fill:"var(--white)"},attrs:{d:"M413.974,71.026C368.171,25.225,307.274,0,242.5,0S116.829,25.225,71.026,71.026C25.225,116.829,0,177.726,0,242.5\n        s25.225,125.671,71.026,171.474C116.829,459.775,177.726,485,242.5,485s125.671-25.225,171.474-71.026\n        C459.775,368.171,485,307.274,485,242.5S459.775,116.829,413.974,71.026z M242.5,455C125.327,455,30,359.673,30,242.5\n        S125.327,30,242.5,30S455,125.327,455,242.5S359.673,455,242.5,455z"}}),this._v(" "),t("polygon",{staticStyle:{fill:"var(--white)"},attrs:{points:"193.228,135.589 299.791,242.5 193.228,349.411 214.476,370.589 342.148,242.5 214.476,114.411 \t"}})])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sidebar",class:{collapsed:e.collapsed},style:e.sidebarStyle,on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"esc",27,t.key,"Escape")?e.toggleCollapsed(t):null}}},[n("a",{ref:"trigger",staticClass:"trigger",style:{height:e.height,width:e.width},attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.toggleCollapsed(t)}}},[e.collapsed?n("chevron-right",{staticClass:"icon"}):n("chevron-left",{staticClass:"icon"})],1),e._v(" "),e._t("default")],2)},staticRenderFns:[]}}]);