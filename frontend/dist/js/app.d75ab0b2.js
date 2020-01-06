(function(t){function e(e){for(var i,r,s=e[0],c=e[1],l=e[2],u=0,p=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(i=!1)}i&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},o={app:0},a=[];function r(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"19dd2d77"}[t]+".js"}function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,i){n=o[t]=[e,i]}));e.push(n[2]=i);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=r(t);var l=new Error;a=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=o[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",l.name="ChunkLoadError",l.type=i,l.request=a,n[1](l)}o[t]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("85ec"),o=n.n(i);o.a},4537:function(t,e,n){},"52e9":function(t,e,n){"use strict";var i=n("da44"),o=n.n(i);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],r=(n("034f"),n("2877")),s={},c=Object(r["a"])(s,o,a,!1,null,null,null),l=c.exports,u=(n("d3b7"),n("8c4f")),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t._m(0),n("div",{staticClass:"row"},[n("RaspberryPiStats",{attrs:{id:"raspberry-pi-stats"}})],1),n("br"),n("div",{staticClass:"row"},[n("CommandRunner",{attrs:{id:"command-runner"}})],1),n("br"),n("div",{staticClass:"row"},[n("LightSettings",{attrs:{id:"light-settings"}})],1)])},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("h2",{staticClass:"text-center",attrs:{id:"heading-bollerwagen-ui"}},[t._v("BollerwagenUI")])])])}],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"raspberry-pi-stats"},[n("div",{staticClass:"row"},[t._m(0),n("div",{staticClass:"col-1 text-right",staticStyle:{"padding-left":"0px","padding-right":"0px"}},[n("font-awesome-icon",{attrs:{icon:"redo",spin:t.isLoading},on:{click:function(e){return t.fetchData()}}})],1)]),n("div",{staticClass:"row box"},t._l(t.stats,(function(e){return n("div",{key:e.name,staticClass:"col-4"},[n("div",{staticClass:"text-center"},[n("h3",{staticClass:"big-number"},[t._v(t._s(e.value))]),n("p",{staticClass:"big-number-label"},[t._v(t._s(e.name))])])])})),0)])},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-11",staticStyle:{"padding-left":"0px","padding-right":"0px"}},[n("label",{attrs:{for:"raspberry-pi-stats"}},[t._v("RPi Stats")])])}],m=n("bc3a"),v=n.n(m),g={name:"RaspberryPiStats",components:{},data:function(){return{isLoading:!0,stats:[]}},methods:{fetchData:function(){var t=this;this.isLoading=!0,v.a.get("http://raspberrypi.local/api/v1/pi-stats").then((function(e){t.stats=e.data})).catch((function(e){t.$toasted.error("Fehler: Daten konnten nicht aktualisiert werden.",{theme:"bubble",position:"bottom-right",duration:2500}),console.error(e)})).finally((function(){t.isLoading=!1}))}},created:function(){this.fetchData()}},b=g,y=(n("d3f9"),Object(r["a"])(b,f,h,!1,null,"6cc89292",null)),C=y.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"command-runner"},[t._m(0),n("div",{staticClass:"row box"},[n("div",{staticClass:"col-10"},[n("div",{staticClass:"input-group mb-3"},[t._m(1),n("input",{directives:[{name:"model",rawName:"v-model",value:t.command,expression:"command"}],staticClass:"form-control",attrs:{type:"text",placeholder:"sudo shutdown -h now"},domProps:{value:t.command},on:{input:function(e){e.target.composing||(t.command=e.target.value)}}})])]),n("div",{staticClass:"col-2 text-right",staticStyle:{"padding-left":"0px"}},[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.sendCommand()}}},[t.isLoading?n("font-awesome-icon",{attrs:{icon:"redo",spin:t.isLoading}}):n("span",[t._v("Run")])],1)])])])},w=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-12",staticStyle:{"padding-left":"0px","padding-right":"0px"}},[n("label",{attrs:{for:"raspberry-pi-stats"}},[t._v("Execute Command")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-group-prepend"},[n("span",{staticClass:"input-group-text",attrs:{id:"basic-addon1"}},[t._v("$")])])}],x={name:"CommandRunner",components:{},data:function(){return{isLoading:!1,command:""}},methods:{sendCommand:function(){var t=this;this.command||this.$toasted.error("Bitte gib einen Befehl ein, der ausgeführt werden soll.",{theme:"bubble",position:"bottom-right",duration:3e3}),this.isLoading=!0,v.a.post("http://raspberrypi.local/api/v1/command",{command:this.command}).then((function(e){t.$toasted.success("Befehl erfolgreich ausgeführt.",{theme:"bubble",position:"bottom-right",duration:2500})})).catch((function(e){t.$toasted.error("Der Befehl konnte nicht erfolgreich ausgeführt werden.",{theme:"bubble",position:"bottom-right",duration:2500}),console.error(e)})).finally((function(){t.isLoading=!1}))}}},L=x,k=(n("52e9"),Object(r["a"])(L,_,w,!1,null,"f0f422b6",null)),S=k.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"light-settings"},[n("div",{staticClass:"row"},[t._m(0),n("div",{staticClass:"col-1 text-right",staticStyle:{"padding-left":"0px","padding-right":"0px"}},[n("font-awesome-icon",{attrs:{icon:"redo",spin:t.isLoading},on:{click:function(e){return t.fetchLightData()}}})],1)]),n("div",{staticClass:"row box",staticStyle:{"padding-bottom":"15px"}},[n("div",{staticClass:"col-12"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.lightEffect,expression:"lightEffect"}],staticClass:"custom-select",attrs:{disabled:t.isLoading},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.lightEffect=e.target.multiple?n:n[0]}}},[n("option",{attrs:{disabled:"",value:"999"}},[t._v("Lichteffekt auswählen")]),n("option",{domProps:{value:0}},[t._v("Off")]),n("option",{domProps:{value:1}},[t._v("Default")]),n("option",{domProps:{value:2}},[t._v("Sinus Wave")]),n("option",{domProps:{value:3}},[t._v("Pulse")]),n("option",{domProps:{value:4}},[t._v("Static Color Cycle")])])]),n("br"),n("div",{staticClass:"col-12 text-center col-color-picker"},[n("verte",{attrs:{picker:"square",model:"rgb",menuPosition:"top"},model:{value:t.colorFront,callback:function(e){t.colorFront=e},expression:"colorFront"}})],1),n("div",{staticClass:"col-3 col-color-picker"}),n("div",{staticClass:"col-3 col-color-picker"},[n("verte",{attrs:{picker:"square",model:"rgb",menuPosition:"top"}})],1),n("div",{staticClass:"col-3 text-centera col-color-picker"},[n("verte",{attrs:{picker:"square",model:"rgb",menuPosition:"top"}})],1),n("div",{staticClass:"col-3 col-color-picker"}),n("div",{staticClass:"col-12 text-center col-color-picker"},[n("verte",{attrs:{picker:"square",model:"rgb",menuPosition:"bottom"}})],1),n("br"),n("div",{staticClass:"col-12"},[n("button",{staticClass:"btn btn-block btn-primary",attrs:{type:"button"},on:{click:function(e){return t.setLight()}}},[n("font-awesome-icon",{directives:[{name:"show",rawName:"v-show",value:t.isSendingLightValues,expression:"isSendingLightValues"}],attrs:{icon:"circle-notch",spin:!0}}),t._v(" Übernehmen ")],1)])])])},E=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-11",staticStyle:{"padding-left":"0px","padding-right":"0px"}},[n("label",{attrs:{for:"raspberry-pi-stats"}},[t._v("Lights")])])}],$=n("36fc"),O=(n("bbb4"),{name:"LightSettings",components:{Verte:$["a"]},data:function(){return{isSendingLightValues:!1,isLoading:!0,lightEffect:0,colorFront:"",colorRight:"",colorRear:"",colorLeft:""}},methods:{fetchLightData:function(){var t=this;this.isLoading=!0,v.a.get("http://raspberrypi.local/api/v1/current-light-effect").then((function(e){t.lightEffect=e.data})).catch((function(e){t.$toasted.error("Fehler: Daten konnten nicht aktualisiert werden.",{theme:"bubble",position:"bottom-right",duration:2500}),console.error(e)})).finally((function(){t.isLoading=!1}))},setLight:function(){var t=this;this.isSendingLightValues=!0,v.a.get("http://raspberrypi.local/api/v1/set-light",{params:{lightEffect:this.lightEffect,front:this.colorFront,right:this.colorRight,rear:this.colorRear,left:this.colorLeft}}).then((function(t){})).catch((function(e){t.$toasted.error("Fehler: Licht konnte nicht richtig gesetzt werden.",{theme:"bubble",position:"bottom-right",duration:2500}),console.error(e)})).finally((function(){t.isSendingLightValues=!1}))}},created:function(){this.fetchLightData()}}),j=O,R=(n("9b61"),Object(r["a"])(j,P,E,!1,null,"080028cb",null)),D=R.exports,F={name:"home",components:{RaspberryPiStats:C,CommandRunner:S,LightSettings:D}},V=F,q=(n("6282"),Object(r["a"])(V,d,p,!1,null,"0f842a11",null)),B=q.exports;i["a"].use(u["a"]);var T=[{path:"/",name:"home",component:B},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],M=new u["a"]({mode:"history",base:"/",routes:T}),N=M,A=(n("4989"),n("ab8b"),n("ecee")),J=n("c074"),z=n("ad3d"),I=n("a65d"),U=n.n(I);A["c"].add(J["b"]),A["c"].add(J["a"]),i["a"].component("font-awesome-icon",z["a"]),i["a"].use(U.a),i["a"].config.productionTip=!1,new i["a"]({router:N,render:function(t){return t(l)}}).$mount("#app")},6282:function(t,e,n){"use strict";var i=n("883a"),o=n.n(i);o.a},"85ec":function(t,e,n){},"883a":function(t,e,n){},"9b61":function(t,e,n){"use strict";var i=n("4537"),o=n.n(i);o.a},d3f9:function(t,e,n){"use strict";var i=n("ef01"),o=n.n(i);o.a},da44:function(t,e,n){},ef01:function(t,e,n){}});
//# sourceMappingURL=app.d75ab0b2.js.map