(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6dc111e3"],{"278f":function(t,e,n){"use strict";n("590d")},"590d":function(t,e,n){},"97ec":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"longevity",class:{checkMode:t.checkMode}},[t._m(0),n("div",{staticClass:"container"},[!1===t.checkMode?n("form",[t._m(1),n("div",{staticClass:"remind"},[n("button",{staticClass:"btn btn-sm btn-info clearBtn",attrs:{disabled:""===t.longevity[0].name},on:{click:function(e){return e.preventDefault(),t.clearData(e)}}},[t._v(" 清空 ")])]),t._l(t.longevity,(function(e,i){return n("div",{key:i,staticClass:"input-group"},[n("label",{attrs:{for:"longevity_name"}},[t._v("長生祿位")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"item.name"}],staticClass:"form-control",attrs:{id:"longevity_name",type:"text",placeholder:"請輸入人名",maxlength:"20"},domProps:{value:e.name},on:{input:function(n){n.target.composing||t.$set(e,"name",n.target.value)}}}),i!==t.longevity.length&&!1===t.checkMode?n("div",{staticClass:"input-group-prepend"},[n("span",{staticClass:"input-group-text"},[1!==t.longevity.length?n("i",{staticClass:"fas fa-times-circle",on:{click:function(e){return e.preventDefault(),t.deletePerson(i)}}}):t._e()])]):t._e(),i+1===t.longevity.length&&!1===t.checkMode?n("button",{on:{click:function(e){return e.preventDefault(),t.addPerson(e)}}},[t._v(" 增加 ")]):t._e()])}))],2):t._e(),!0===t.checkMode?n("div",{staticClass:"check-area"},[""===t.longevity[0].name?n("label",{staticStyle:{color:"#c51919"}},[t._v("沒登記")]):t._e(),""!==t.longevity[0].name?n("label",[t._v("長生祿位")]):t._e(),""!==t.longevity[0].name?n("div",{staticClass:"list"},t._l(t.longevity,(function(e,i){return n("div",{key:i},[n("p",[t._v(" "+t._s(e.name)+" ")])])})),0):t._e()]):t._e()]),!0===t.checkMode?n("div",{staticClass:"btn-group-fix"},[n("div",[n("router-link",{staticClass:"btn btn-dark btn-sm",attrs:{to:"longevity"}},[t._v(" 修改 ")])],1)]):t._e(),!1===t.checkMode?n("div",{staticClass:"btn-group"},[n("div",[n("a",{staticClass:"btn btn-secondary",on:{click:function(e){return e.preventDefault(),t.goStep("last")}}},[t._v(" 上一步 ")])]),n("div",[n("a",{staticClass:"btn btn-primary",on:{click:function(e){return e.preventDefault(),t.goStep("next")}}},[t._v(" 下一步 ")])])]):t._e()])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",[n("span",[t._v("STEP2")]),t._v(" 長生祿位登記")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"introduction"},[n("p",[t._v("1. 填寫個人姓名，或闔家帶表者姓名即可。")]),n("p",[t._v("2. 表格不敷使用者，可按「增加」鈕繼續填寫。")])])}],a=(n("a434"),n("c173")),s=n("2b0e"),c=s["default"].extend({props:{checkMode:{type:Boolean,default:!1}},data:function(){return{longevity:[new a["c"]("")]}},computed:{confirmApplication:function(){return this.$store.state.confirmApplication}},mounted:function(){this.init()},methods:{init:function(){this.longevity=this.$store.state.form.ceremonyForm.longevityBoards},clearData:function(){this.$notify({type:"info",title:"已清空資料"}),this.longevity=[new a["c"]("")],this.$store.commit("updateLongevity",this.longevity)},addPerson:function(){this.longevity.push(new a["c"](""))},deletePerson:function(t){this.longevity.splice(t,1)},goStep:function(t){"last"===t&&this.$router.push("personalInformation"),"next"===t&&this.$router.push("prayFor")}}}),r=c,l=(n("278f"),n("2877")),u=Object(l["a"])(r,i,o,!1,null,"fdd7cd44",null);e["default"]=u.exports},a434:function(t,e,n){"use strict";var i=n("23e7"),o=n("23cb"),a=n("a691"),s=n("50c4"),c=n("7b0b"),r=n("65f0"),l=n("8418"),u=n("1dde"),d=u("splice"),v=Math.max,f=Math.min,p=9007199254740991,h="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!d},{splice:function(t,e){var n,i,u,d,m,g,_=c(this),y=s(_.length),b=o(t,y),k=arguments.length;if(0===k?n=i=0:1===k?(n=0,i=y-b):(n=k-2,i=f(v(a(e),0),y-b)),y+n-i>p)throw TypeError(h);for(u=r(_,i),d=0;d<i;d++)m=b+d,m in _&&l(u,d,_[m]);if(u.length=i,n<i){for(d=b;d<y-i;d++)m=d+i,g=d+n,m in _?_[g]=_[m]:delete _[g];for(d=y;d>y-i+n;d--)delete _[d-1]}else if(n>i)for(d=y-i;d>b;d--)m=d+i-1,g=d+n-1,m in _?_[g]=_[m]:delete _[g];for(d=0;d<n;d++)_[d+b]=arguments[d+2];return _.length=y-i+n,u}})}}]);
//# sourceMappingURL=chunk-6dc111e3.e35bb90e.js.map