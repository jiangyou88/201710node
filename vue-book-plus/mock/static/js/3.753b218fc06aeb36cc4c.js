webpackJsonp([3],{"6sBE":function(e,n,o){n=e.exports=o("FZ+f")(!0),n.push([e.i,"\nul[data-v-0ce10625] {\n  margin: 50px 20px 0 20px;\n}\nul li label[data-v-0ce10625] {\n  display: block;\n  font-size: 25px;\n}\nul li input[data-v-0ce10625] {\n  margin: 10px 0;\n  height: 25px;\n  width: 100%;\n}\nul li button[data-v-0ce10625] {\n  display: block;\n  width: 80px;\n  height: 35px;\n  background: #2aabd2;\n  color: #fff;\n  border: none;\n  border-radius: 4px;\n  outline: none;\n}\n.detail[data-v-0ce10625] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: #fff;\n  z-index: 100;\n}\n","",{version:3,sources:["C:/Users/speedly/Desktop/201710node/vue-book-plus/src/components/Detail.vue"],names:[],mappings:";AACA;EACE,yBAAyB;CAC1B;AACD;EACE,eAAe;EACf,gBAAgB;CACjB;AACD;EACE,eAAe;EACf,aAAa;EACb,YAAY;CACb;AACD;EACE,eAAe;EACf,YAAY;EACZ,aAAa;EACb,oBAAoB;EACpB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,cAAc;CACf;AACD;EACE,mBAAmB;EACnB,OAAO;EACP,QAAQ;EACR,UAAU;EACV,SAAS;EACT,iBAAiB;EACjB,aAAa;CACd",file:"Detail.vue",sourcesContent:["\nul[data-v-0ce10625] {\n  margin: 50px 20px 0 20px;\n}\nul li label[data-v-0ce10625] {\n  display: block;\n  font-size: 25px;\n}\nul li input[data-v-0ce10625] {\n  margin: 10px 0;\n  height: 25px;\n  width: 100%;\n}\nul li button[data-v-0ce10625] {\n  display: block;\n  width: 80px;\n  height: 35px;\n  background: #2aabd2;\n  color: #fff;\n  border: none;\n  border-radius: 4px;\n  outline: none;\n}\n.detail[data-v-0ce10625] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: #fff;\n  z-index: 100;\n}\n"],sourceRoot:""}])},Cdx3:function(e,n,o){var t=o("sB3e"),a=o("lktj");o("uqUo")("keys",function(){return function(e){return a(t(e))}})},fZjL:function(e,n,o){e.exports={default:o("jFbC"),__esModule:!0}},jFbC:function(e,n,o){o("Cdx3"),e.exports=o("FeBl").Object.keys},uqUo:function(e,n,o){var t=o("kM2E"),a=o("FeBl"),r=o("S82l");e.exports=function(e,n){var o=(a.Object||{})[e]||Object[e],i={};i[e]=n(o),t(t.S+t.F*r(function(){o(1)}),"Object",i)}},wHgX:function(e,n,o){"use strict";function t(e){o("yEUR")}Object.defineProperty(n,"__esModule",{value:!0});var a=o("fZjL"),r=o.n(a),i=o("Xxa5"),u=o.n(i),s=o("exGp"),c=o.n(s),l=o("UeVD"),b=o("gyMJ"),d={data:function(){return{book:{}}},watch:{$route:function(){this.getData()}},created:function(){this.getData()},methods:{update:function(){var e=this;return c()(u.a.mark(function n(){return u.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(b.f)(e.bid,e.book);case 2:e.$router.push("/list");case 3:case"end":return n.stop()}},n,e)}))()},getData:function(){var e=this;return c()(u.a.mark(function n(){return u.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(b.b)(e.bid);case 2:e.book=n.sent,r()(e.book).length>0||e.$router.push("/list");case 4:case"end":return n.stop()}},n,e)}))()}},computed:{bid:function(){return this.$route.params.bid}},components:{MHeader:l.a}},p=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",{staticClass:"detail"},[o("MHeader",{attrs:{back:!0}},[e._v("详情")]),e._v(" "),o("ul",[o("li",[o("label",{attrs:{for:"bookName"}},[e._v("书的名称")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.book.bookName,expression:"book.bookName"}],attrs:{type:"text",id:"bookName"},domProps:{value:e.book.bookName},on:{input:function(n){n.target.composing||e.$set(e.book,"bookName",n.target.value)}}})]),e._v(" "),o("li",[o("label",{attrs:{for:"bookInfo"}},[e._v("书的信息")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.book.bookInfo,expression:"book.bookInfo"}],attrs:{type:"text",id:"bookInfo"},domProps:{value:e.book.bookInfo},on:{input:function(n){n.target.composing||e.$set(e.book,"bookInfo",n.target.value)}}})]),e._v(" "),o("li",[o("label",{attrs:{for:"bookPrice"}},[e._v("书的价格")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model.number",value:e.book.bookPrice,expression:"book.bookPrice",modifiers:{number:!0}}],attrs:{type:"text",id:"bookPrice"},domProps:{value:e.book.bookPrice},on:{input:function(n){n.target.composing||e.$set(e.book,"bookPrice",e._n(n.target.value))},blur:function(n){e.$forceUpdate()}}})]),e._v(" "),o("li",[o("button",{on:{click:e.update}},[e._v("确认修改")])])])],1)},A=[],f={render:p,staticRenderFns:A},v=f,k=o("VU/8"),m=t,C=k(d,v,!1,m,"data-v-0ce10625",null);n.default=C.exports},yEUR:function(e,n,o){var t=o("6sBE");"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);o("rjj0")("4c856b53",t,!0)}});
//# sourceMappingURL=3.753b218fc06aeb36cc4c.js.map