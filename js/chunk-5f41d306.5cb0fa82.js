(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f41d306"],{"0d13":function(e,t,n){},1276:function(e,t,n){"use strict";var a=n("d784"),r=n("44e7"),i=n("825a"),o=n("1d80"),s=n("4840"),l=n("8aa5"),c=n("50c4"),u=n("14c3"),d=n("9263"),v=n("d039"),f=[].push,p=Math.min,m=4294967295,_=!v((function(){return!RegExp(m,"y")}));a("split",2,(function(e,t,n){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var a=String(o(this)),i=void 0===n?m:n>>>0;if(0===i)return[];if(void 0===e)return[a];if(!r(e))return t.call(a,e,i);var s,l,c,u=[],v=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,_=new RegExp(e.source,v+"g");while(s=d.call(_,a)){if(l=_.lastIndex,l>p&&(u.push(a.slice(p,s.index)),s.length>1&&s.index<a.length&&f.apply(u,s.slice(1)),c=s[0].length,p=l,u.length>=i))break;_.lastIndex===s.index&&_.lastIndex++}return p===a.length?!c&&_.test("")||u.push(""):u.push(a.slice(p)),u.length>i?u.slice(0,i):u}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var r=o(this),i=void 0==t?void 0:t[e];return void 0!==i?i.call(t,r,n):a.call(String(r),t,n)},function(e,r){var o=n(a,e,this,r,a!==t);if(o.done)return o.value;var d=i(e),v=String(this),f=s(d,RegExp),g=d.unicode,h=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(_?"y":"g"),x=new f(_?d:"^(?:"+d.source+")",h),b=void 0===r?m:r>>>0;if(0===b)return[];if(0===v.length)return null===u(x,v)?[v]:[];var I=0,y=0,D=[];while(y<v.length){x.lastIndex=_?y:0;var E,k=u(x,_?v:v.slice(y));if(null===k||(E=p(c(x.lastIndex+(_?0:y)),v.length))===I)y=l(v,y,g);else{if(D.push(v.slice(I,y)),D.length===b)return D;for(var C=1;C<=k.length-1;C++)if(D.push(k[C]),D.length===b)return D;y=I=E}}return D.push(v.slice(I)),D}]}),!_)},"14c3":function(e,t,n){var a=n("c6b6"),r=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var i=n.call(e,t);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==a(e))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(e,t)}},"3f22":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"attendInfo",class:{checkMode:e.checkMode}},[e._m(0),n("div",{staticClass:"container"},[!1===e.checkMode?n("form",[e._m(1),n("div",{staticClass:"remind"},[n("button",{staticClass:"btn btn-sm btn-info clearBtn ",attrs:{disabled:""===e.attendInfo[0].name},on:{click:function(t){return t.preventDefault(),e.clearData(t)}}},[e._v(" 清空 ")])]),e._l(e.attendInfo,(function(t,a){return n("div",{key:a,staticClass:"item-object"},[n("div",{staticClass:"input-group",attrs:{type:"text"}},[n("label",{attrs:{for:"attendInfo_name"}},[e._v("姓名")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"item.name"}],attrs:{id:"attendInfo_name",type:"text",placeholder:"姓名"},domProps:{value:t.name},on:{input:function(n){n.target.composing||e.$set(t,"name",n.target.value)}}})]),n("div",{staticClass:"input-group",attrs:{type:"text"}},[n("label",[e._v("性別")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.gender,expression:"item.gender"}],attrs:{name:"genderSelection"},on:{change:function(n){var a=Array.prototype.filter.call(n.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(t,"gender",n.target.multiple?a:a[0])}}},[n("option",{staticStyle:{display:"none"},attrs:{value:""}},[e._v(" 請選擇 ")]),e._l(e.genderSelection,(function(t,a){return n("option",{key:a,domProps:{value:t}},["male"===t?n("span",[e._v("男性")]):e._e(),"female"===t?n("span",[e._v("女性")]):e._e()])}))],2)]),n("div",{staticClass:"input-group",attrs:{type:"text"}},[n("label",{attrs:{for:"attendInfo_age"}},[e._v("年齡")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.age,expression:"item.age"}],attrs:{id:"attendInfo_age",type:"number",placeholder:"年齡",min:"1"},domProps:{value:t.age},on:{input:function(n){n.target.composing||e.$set(t,"age",n.target.value)}}})]),n("div",{staticClass:"input-group",attrs:{type:"text"}},[n("label",{attrs:{for:"attendInfo_attendDate"}},[e._v("來寺日期"),n("span",{staticClass:"tips"},[e._v("(活動日期："+e._s(e.eventDates(e.eventInfo.eventStartDate))+"~"+e._s(e.eventDates(e.eventInfo.eventEndDate))+")")])]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.attendDate,expression:"item.attendDate"}],attrs:{id:"attendInfo_attendDate",type:"date",min:e.eventDates(e.eventInfo.eventStartDate),max:e.eventDates(e.eventInfo.eventEndDate)},domProps:{value:t.attendDate},on:{input:function(n){n.target.composing||e.$set(t,"attendDate",n.target.value)}}})]),n("div",{staticClass:"input-group",attrs:{type:"text"}},[n("label",[e._v("來寺時間")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.attendTime,expression:"item.attendTime"}],attrs:{name:"attendTime"},on:{change:function(n){var a=Array.prototype.filter.call(n.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(t,"attendTime",n.target.multiple?a:a[0])}}},[n("option",{staticStyle:{display:"none"},attrs:{value:""}},[e._v(" 請選擇 ")]),e._l(e.moments,(function(t,a){return n("option",{key:a,domProps:{value:t}},["beforeBreakfast"===t?n("span",[e._v("早餐前抵達")]):e._e(),"beforeLunch"===t?n("span",[e._v("午餐前抵達")]):e._e(),"beforeDinner"===t?n("span",[e._v("晚餐前抵達")]):e._e(),"afterDinner"===t?n("span",[e._v("晚餐後抵達")]):e._e()])}))],2)]),n("div",{staticClass:"input-group",attrs:{type:"text"}},[n("label",{attrs:{for:"attendInfo_leaveDate"}},[e._v("離寺日期"),n("span",{staticClass:"tips"},[e._v("(活動日期："+e._s(e.eventDates(e.eventInfo.eventStartDate))+"~"+e._s(e.eventDates(e.eventInfo.eventEndDate))+")")])]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.leaveDate,expression:"item.leaveDate"}],attrs:{id:"attendInfo_leaveDate",type:"date",min:e.eventDates(e.eventInfo.eventStartDate),max:e.eventDates(e.eventInfo.eventEndDate)},domProps:{value:t.leaveDate},on:{input:function(n){n.target.composing||e.$set(t,"leaveDate",n.target.value)}}})]),n("div",{staticClass:"input-group",attrs:{type:"text"}},[n("label",[e._v("離寺時間")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.leaveTime,expression:"item.leaveTime"}],attrs:{name:"leaveTime"},on:{change:function(n){var a=Array.prototype.filter.call(n.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(t,"leaveTime",n.target.multiple?a:a[0])}}},[n("option",{staticStyle:{display:"none"},attrs:{value:""}},[e._v(" 請選擇 ")]),e._l(e.moments,(function(t,a){return n("option",{key:a,domProps:{value:t}},["beforeBreakfast"===t?n("span",[e._v("早餐前離開")]):e._e(),"beforeLunch"===t?n("span",[e._v("午餐前離開")]):e._e(),"beforeDinner"===t?n("span",[e._v("晚餐前離開")]):e._e(),"afterDinner"===t?n("span",[e._v("晚餐後離開")]):e._e()])}))],2)]),n("div",{staticClass:"input-group",attrs:{type:"text"}},[n("label",{attrs:{for:"attendInfo_note"}},[e._v("備註")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.note,expression:"item.note"}],attrs:{id:"attendInfo_note",type:"text",placeholder:"如有行動不便等狀況，請先在備註登記，以利安排住宿"},domProps:{value:t.note},on:{input:function(n){n.target.composing||e.$set(t,"note",n.target.value)}}})]),1!==e.attendInfo.length&&a!==e.attendInfo.length?n("button",{staticClass:"delete-person",on:{click:function(t){return t.preventDefault(),e.deletePerson(a)}}},[n("i",{staticClass:"fas fa-times"})]):e._e(),a+1===e.attendInfo.length?n("button",{staticClass:"add-person",on:{click:function(t){return t.preventDefault(),e.addPerson(t)}}},[e._v(" 增加 ")]):e._e(),n("hr")])}))],2):e._e(),!0===e.checkMode?n("table",[""===e.attendInfo[0].name&&""===e.attendInfo[0].gender&&""===e.attendInfo[0].age&&""===e.attendInfo[0].attendDate&&""===e.attendInfo[0].attendTime&&""===e.attendInfo[0].leaveDate&&""===e.attendInfo[0].leaveTime&&""===e.attendInfo[0].note?n("tr",{staticStyle:{color:"#c51919"}},[n("th",[e._v("沒登記")])]):e._e(),""!==e.attendInfo[0].name?n("tr",[n("th",[e._v("姓名")]),n("th",[e._v("性別")]),n("th",[e._v("年齡")]),n("th",[e._v("來寺日期")]),n("th",[e._v("來寺時間")]),n("th",[e._v("離寺日期")]),n("th",[e._v("離寺時間")]),n("th",[e._v("備註")])]):e._e(),e._l(e.attendInfo,(function(t,a){return n("tr",{key:a},[n("td",[e._v(" "+e._s(t.name)+" ")]),n("td",["male"===t.gender?n("span",[e._v("男性")]):e._e(),"female"===t.gender?n("span",[e._v("女性")]):e._e()]),n("td",[e._v(" "+e._s(t.age)+" ")]),n("td",[e._v(" "+e._s(t.attendDate)+" ")]),n("td",["beforeBreakfast"===t.attendTime?n("span",[e._v("早餐前抵達")]):e._e(),"beforeLunch"===t.attendTime?n("span",[e._v("午餐前抵達")]):e._e(),"beforeDinner"===t.attendTime?n("span",[e._v("晚餐前抵達")]):e._e(),"afterDinner"===t.attendTime?n("span",[e._v("晚餐後抵達")]):e._e()]),n("td",[e._v(" "+e._s(t.leaveDate)+" ")]),n("td",["beforeBreakfast"===t.leaveTime?n("span",[e._v("早餐前離開")]):e._e(),"beforeLunch"===t.leaveTime?n("span",[e._v("午餐前離開")]):e._e(),"beforeDinner"===t.leaveTime?n("span",[e._v("晚餐前離開")]):e._e(),"afterDinner"===t.leaveTime?n("span",[e._v("晚餐後離開")]):e._e()]),n("td",[e._v(" "+e._s(t.note)+" ")])])}))],2):e._e()]),!0===e.checkMode?n("div",{staticClass:"btn-group-fix"},[n("div",[n("router-link",{staticClass:"btn btn-dark btn-sm",attrs:{to:"attendInfo"}},[e._v(" 修改 ")])],1)]):e._e(),!1===e.checkMode?n("div",{staticClass:"btn-group"},[n("div",[n("a",{staticClass:"btn btn-secondary",on:{click:function(t){return t.preventDefault(),e.goStep("last")}}},[e._v(" 上一步 ")])]),n("div",[n("a",{staticClass:"btn btn-primary",on:{click:function(t){return t.preventDefault(),e.goStep("next")}}},[e._v(" 下一步 ")])])]):e._e()])},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",[n("span",[e._v("STEP4")]),e._v(" 法會參加登記 ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"introduction"},[n("p",[e._v("1. 若需住宿請填下表。")]),n("p",[e._v("2. 若僅法會當日參加請將「來寺日期」與「離寺日期」填在同一天。")]),n("p",[e._v("3. 若不克與會，請居士自行在家呼請祖先等，至禪院參加法會，並請虔誠誦經念佛千聲迴向。")]),n("p",[e._v("4. 表格不敷使用者，可按「增加」鈕繼續填寫。")])])}],i=(n("1276"),n("ac1f"),n("a434"),n("c173")),o=n("2b0e"),s=o["default"].extend({props:{checkMode:{type:Boolean,default:!1}},data:function(){return{attendInfo:[new i["a"]("","","","","","","","","")],genderSelection:["male","female"],moments:["beforeBreakfast","beforeLunch","beforeDinner","afterDinner"]}},computed:{confirmApplication:function(){return this.$store.state.confirmApplication},eventInfo:function(){return this.$store.state.eventInfo}},mounted:function(){this.init()},methods:{init:function(){this.attendInfo=this.$store.state.form.ceremonyForm.attendInfoList},eventDates:function(e){var t=e.split("T",1);return t[0]},clearData:function(){this.$notify({type:"info",title:"已清空資料"}),this.attendInfo=[new i["a"]("","","","","","","","","")],this.$store.commit("updateAttendInfo",this.attendInfo)},deletePerson:function(e){this.attendInfo.splice(e,1)},addPerson:function(){this.attendInfo.push(new i["a"]("","","","","","","","",""))},goStep:function(e){"last"===e&&this.$router.push("prayFor"),"next"===e&&this.$router.push("checkForm")}}}),l=s,c=(n("a305"),n("2877")),u=Object(c["a"])(l,a,r,!1,null,"02ee9d2a",null);t["default"]=u.exports},"44e7":function(e,t,n){var a=n("861d"),r=n("c6b6"),i=n("b622"),o=i("match");e.exports=function(e){var t;return a(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==r(e))}},"8aa5":function(e,t,n){"use strict";var a=n("6547").charAt;e.exports=function(e,t,n){return t+(n?a(e,t).length:1)}},9263:function(e,t,n){"use strict";var a=n("ad6d"),r=n("9f7f"),i=RegExp.prototype.exec,o=String.prototype.replace,s=i,l=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),c=r.UNSUPPORTED_Y||r.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=l||u||c;d&&(s=function(e){var t,n,r,s,d=this,v=c&&d.sticky,f=a.call(d),p=d.source,m=0,_=e;return v&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),_=String(e).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==e[d.lastIndex-1])&&(p="(?: "+p+")",_=" "+_,m++),n=new RegExp("^(?:"+p+")",f)),u&&(n=new RegExp("^"+p+"$(?!\\s)",f)),l&&(t=d.lastIndex),r=i.call(v?n:d,_),v?r?(r.input=r.input.slice(m),r[0]=r[0].slice(m),r.index=d.lastIndex,d.lastIndex+=r[0].length):d.lastIndex=0:l&&r&&(d.lastIndex=d.global?r.index+r[0].length:t),u&&r&&r.length>1&&o.call(r[0],n,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(r[s]=void 0)})),r}),e.exports=s},"9f7f":function(e,t,n){"use strict";var a=n("d039");function r(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=a((function(){var e=r("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=a((function(){var e=r("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a305:function(e,t,n){"use strict";n("0d13")},a434:function(e,t,n){"use strict";var a=n("23e7"),r=n("23cb"),i=n("a691"),o=n("50c4"),s=n("7b0b"),l=n("65f0"),c=n("8418"),u=n("1dde"),d=u("splice"),v=Math.max,f=Math.min,p=9007199254740991,m="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!d},{splice:function(e,t){var n,a,u,d,_,g,h=s(this),x=o(h.length),b=r(e,x),I=arguments.length;if(0===I?n=a=0:1===I?(n=0,a=x-b):(n=I-2,a=f(v(i(t),0),x-b)),x+n-a>p)throw TypeError(m);for(u=l(h,a),d=0;d<a;d++)_=b+d,_ in h&&c(u,d,h[_]);if(u.length=a,n<a){for(d=b;d<x-a;d++)_=d+a,g=d+n,_ in h?h[g]=h[_]:delete h[g];for(d=x;d>x-a+n;d--)delete h[d-1]}else if(n>a)for(d=x-a;d>b;d--)_=d+a-1,g=d+n-1,_ in h?h[g]=h[_]:delete h[g];for(d=0;d<n;d++)h[d+b]=arguments[d+2];return h.length=x-a+n,u}})},ac1f:function(e,t,n){"use strict";var a=n("23e7"),r=n("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},ad6d:function(e,t,n){"use strict";var a=n("825a");e.exports=function(){var e=a(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},d784:function(e,t,n){"use strict";n("ac1f");var a=n("6eeb"),r=n("d039"),i=n("b622"),o=n("9263"),s=n("9112"),l=i("species"),c=!r((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=i("replace"),v=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),f=!r((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,d){var p=i(e),m=!r((function(){var t={};return t[p]=function(){return 7},7!=""[e](t)})),_=m&&!r((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[l]=function(){return n},n.flags="",n[p]=/./[p]),n.exec=function(){return t=!0,null},n[p](""),!t}));if(!m||!_||"replace"===e&&(!c||!u||v)||"split"===e&&!f){var g=/./[p],h=n(p,""[e],(function(e,t,n,a,r){return t.exec===o?m&&!r?{done:!0,value:g.call(t,n,a)}:{done:!0,value:e.call(n,t,a)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:v}),x=h[0],b=h[1];a(String.prototype,e,x),a(RegExp.prototype,p,2==t?function(e,t){return b.call(e,this,t)}:function(e){return b.call(e,this)})}d&&s(RegExp.prototype[p],"sham",!0)}}}]);
//# sourceMappingURL=chunk-5f41d306.5cb0fa82.js.map