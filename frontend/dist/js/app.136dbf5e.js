(function(t){function e(e){for(var a,o,s=e[0],c=e[1],l=e[2],u=0,f=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},i={app:0},r=[];function o(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"fd838a8a"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=i[t]=[e,a]}));e.push(n[2]=a);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=o(t);var l=new Error;r=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",l.name="ChunkLoadError",l.type=a,l.request=r,n[1](l)}i[t]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),i=n.n(a);i.a},"44e4":function(t,e,n){"use strict";var a=n("d802"),i=n.n(a);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],o=(n("034f"),n("2877")),s={},c=Object(o["a"])(s,i,r,!1,null,null,null),l=c.exports,u=(n("d3b7"),n("8c4f")),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t._m(0),n("div",{staticClass:"row"},[n("RaspberryPiStats",{attrs:{id:"raspberry-pi-stats"}})],1),n("br"),n("div",{staticClass:"row"},[n("CommandRunner",{attrs:{id:"command-runner"}})],1),n("br"),n("div",{staticClass:"row"},[n("LightSettings",{attrs:{id:"light-settings"}})],1)])},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("h2",{staticClass:"text-center",attrs:{id:"heading-bollerwagen-ui"}},[t._v("BollerwagenUI")])])])}],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"raspberry-pi-stats"},[n("div",{staticClass:"row"},[t._m(0),n("div",{staticClass:"col-1 text-right",staticStyle:{"padding-left":"0px","padding-right":"0px"}},[n("font-awesome-icon",{attrs:{icon:"redo",spin:t.isLoading},on:{click:function(e){return t.fetchData()}}})],1)]),n("div",{staticClass:"row box"},t._l(t.stats,(function(e){return n("div",{key:e.name,staticClass:"col-4"},[n("div",{staticClass:"text-center"},[n("h3",{staticClass:"big-number"},[t._v(t._s(e.value))]),n("p",{staticClass:"big-number-label"},[t._v(t._s(e.name))])])])})),0)])},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-11",staticStyle:{"padding-left":"0px","padding-right":"0px"}},[n("label",{attrs:{for:"raspberry-pi-stats"}},[t._v("RPi Stats")])])}],h=n("bc3a"),v=n.n(h),g={name:"RaspberryPiStats",components:{},data:function(){return{isLoading:!0,stats:[]}},methods:{fetchData:function(){var t=this;this.isLoading=!0,v.a.get("http://raspberrypi.local/api/v1/pi-stats").then((function(e){t.stats=e.data})).catch((function(e){t.$toasted.error("Fehler: Daten konnten nicht aktualisiert werden.",{theme:"bubble",position:"bottom-right",duration:2500}),console.error(e)})).finally((function(){t.isLoading=!1}))}},created:function(){this.fetchData()}},b=g,y=(n("d3f9"),Object(o["a"])(b,p,m,!1,null,"6cc89292",null)),_=y.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"command-runner"},[t._m(0),n("div",{staticClass:"row box"},[n("div",{staticClass:"col-10"},[n("div",{staticClass:"input-group mb-3"},[t._m(1),n("input",{directives:[{name:"model",rawName:"v-model",value:t.command,expression:"command"}],staticClass:"form-control",attrs:{type:"text",placeholder:"sudo shutdown -h now"},domProps:{value:t.command},on:{input:function(e){e.target.composing||(t.command=e.target.value)}}})])]),n("div",{staticClass:"col-2 text-right",staticStyle:{"padding-left":"0px"}},[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.sendCommand()}}},[t.isLoading?n("font-awesome-icon",{attrs:{icon:"redo",spin:t.isLoading}}):n("span",[t._v("Run")])],1)])])])},w=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-12",staticStyle:{"padding-left":"0px","padding-right":"0px"}},[n("label",{attrs:{for:"raspberry-pi-stats"}},[t._v("Execute Command")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-group-prepend"},[n("span",{staticClass:"input-group-text",attrs:{id:"basic-addon1"}},[t._v("$")])])}],x={name:"CommandRunner",components:{},data:function(){return{isLoading:!1,command:""}},methods:{sendCommand:function(){var t=this;this.isLoading=!0,v.a.post("http://raspberrypi.local/api/v1/command",{command:this.command}).then((function(e){t.$toasted.success("Befehl erfolgreich ausgeführt.",{theme:"bubble",position:"bottom-right",duration:2500})})).catch((function(e){t.$toasted.error("Der Befehl konnte nicht erfolgreich ausgeführt werden.",{theme:"bubble",position:"bottom-right",duration:2500}),console.error(e)})).finally((function(){t.isLoading=!1}))}}},L=x,S=(n("de58"),Object(o["a"])(L,C,w,!1,null,"081db7ec",null)),E=S.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"light-settings"},[n("div",{staticClass:"row"},[t._m(0),n("div",{staticClass:"col-1 text-right",staticStyle:{"padding-left":"0px","padding-right":"0px"}},[n("font-awesome-icon",{attrs:{icon:"redo",spin:t.isLoading},on:{click:function(e){return t.fetchLightData()}}})],1)]),n("div",{staticClass:"row box",staticStyle:{"padding-bottom":"15px"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.isLoading,expression:"!isLoading"}],staticClass:"col-12"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.lightEffect,expression:"lightEffect"}],staticClass:"custom-select",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.lightEffect=e.target.multiple?n:n[0]}}},[n("option",{attrs:{disabled:"",value:"1"}},[t._v("Lichteffekt auswählen")]),n("option",{domProps:{value:0}},[t._v("Off")]),n("option",{domProps:{value:1}},[t._v("Default")]),n("option",{domProps:{value:2}},[t._v("Sinus Wave")]),n("option",{domProps:{value:3}},[t._v("Static Color Cycle")])])])])])},O=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-11",staticStyle:{"padding-left":"0px","padding-right":"0px"}},[n("label",{attrs:{for:"raspberry-pi-stats"}},[t._v("Lights")])])}],j={name:"LightSettings",data:function(){return{isLoading:!0,lightEffect:0}},methods:{fetchLightData:function(){var t=this;this.isLoading=!0,v.a.get("http://raspberrypi.local/api/v1/current-light-effect").then((function(e){t.lightEffect=e.data})).catch((function(e){t.$toasted.error("Fehler: Daten konnten nicht aktualisiert werden.",{theme:"bubble",position:"bottom-right",duration:2500}),console.error(e)})).finally((function(){t.isLoading=!1}))}},created:function(){this.fetchLightData()}},$=j,k=(n("44e4"),Object(o["a"])($,P,O,!1,null,"73dd6ceb",null)),D=k.exports,R={name:"home",components:{RaspberryPiStats:_,CommandRunner:E,LightSettings:D}},T=R,M=(n("6282"),Object(o["a"])(T,d,f,!1,null,"0f842a11",null)),B=M.exports;a["a"].use(u["a"]);var N=[{path:"/",name:"home",component:B},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],A=new u["a"]({mode:"history",base:"/",routes:N}),F=A,J=(n("4989"),n("ab8b"),n("ecee")),q=n("c074"),I=n("ad3d"),U=n("a65d"),W=n.n(U);J["c"].add(q["a"]),a["a"].component("font-awesome-icon",I["a"]),a["a"].use(W.a),a["a"].config.productionTip=!1,new a["a"]({router:F,render:function(t){return t(l)}}).$mount("#app")},"5d8f":function(t,e,n){},6282:function(t,e,n){"use strict";var a=n("883a"),i=n.n(a);i.a},"85ec":function(t,e,n){},"883a":function(t,e,n){},d3f9:function(t,e,n){"use strict";var a=n("ef01"),i=n.n(a);i.a},d802:function(t,e,n){},de58:function(t,e,n){"use strict";var a=n("5d8f"),i=n.n(a);i.a},ef01:function(t,e,n){}});
//# sourceMappingURL=app.136dbf5e.js.map