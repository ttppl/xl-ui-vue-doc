(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-168f9be2"],{"93a7":function(e,t,r){},b1fd:function(e,t,r){"use strict";r.r(t);var c=r("7a23"),l=function(e){return Object(c["B"])("data-v-2130a91f"),e=e(),Object(c["z"])(),e},n={class:"Input"},a=l((function(){return Object(c["i"])("h1",null,"输入框",-1)})),p=l((function(){return Object(c["i"])("h2",null,"基本使用",-1)})),i={class:"inputs"},o=l((function(){return Object(c["i"])("h3",null,"默认style",-1)})),u=l((function(){return Object(c["i"])("p",null,"type属性：primary, warn, notice, error, success",-1)})),h={class:"language-html"},s=Object(c["j"])(Object(c["J"])('<XlInput placeholder="base" />\n          \n<XlInput type="primary" placeholder="primary" />\n          \n<XlInput type="warn" placeholder="warn" />\n          \n<XlInput type="notice" placeholder="notice" />\n          \n<XlInput type="error" placeholder="error" />\n          \n<XlInput type="success" placeholder="success" />')),d=[s],y={class:"inputs"},b=l((function(){return Object(c["i"])("h3",null,"light-style",-1)})),j={class:"language-html"},O=Object(c["j"])(Object(c["J"])('<XlInput light-style placeholder="light-base" />\n          \n<XlInput light-style type="primary" placeholder="light-primary" />\n          \n<XlInput light-style type="warn" placeholder="light-warn" />\n          \n<XlInput light-style type="notice" placeholder="light-notice" />\n          \n<XlInput light-style type="error" placeholder="light-error" />\n          \n<XlInput light-style type="success" placeholder="light-success" />')),m=[O],g=l((function(){return Object(c["i"])("h2",null,"属性",-1)})),f={class:"inputs"},w=l((function(){return Object(c["i"])("h3",null,"v-model",-1)})),x=l((function(){return Object(c["i"])("p",null,"绑定值",-1)})),k={class:"language-html"},I={class:"inputs"},X=l((function(){return Object(c["i"])("h3",null,"size",-1)})),S=l((function(){return Object(c["i"])("p",null,"宽度Width, 高度height, 接受数字，小于等于0取auto，1取100%，大于1取固定px，小于1取百分比",-1)})),v={class:"language-html"},N={class:"inputs"},D=l((function(){return Object(c["i"])("h3",null,"text-type",-1)})),T=l((function(){return Object(c["i"])("p",null,"文本类型，可选text(默认), textarea",-1)})),J=l((function(){return Object(c["i"])("strong",{class:"emphasize"},"text-type为textarea时height不生效，可使用row设定高度",-1)})),_={class:"language-html"},z=Object(c["j"])(Object(c["J"])('<XlInput text-type="text" type="primary" placeholder="text" />\n          \n<XlInput text-type="textarea" type="primary" placeholder="textarea" />\n          \n<XlInput text-type="textarea" row="6" type="primary" placeholder="textarea row=6" />')),V=[z],G={class:"inputs"},A=l((function(){return Object(c["i"])("h3",null,"pop-class",-1)})),B=l((function(){return Object(c["i"])("p",null,"自定义类",-1)})),F=l((function(){return Object(c["i"])("strong",{class:"emphasize"},"类选择器必须为全局或深度选择，否则不会生效",-1)})),C={class:"language-html"};function E(e,t,r,l,s,O){var z=Object(c["G"])("AttrTable"),E=Object(c["G"])("XlInput"),H=Object(c["G"])("ExampleForm"),U=Object(c["H"])("codeFormat");return Object(c["y"])(),Object(c["h"])("div",n,[a,Object(c["k"])(z,{attrs:l.attrs},null,8,["attrs"]),p,Object(c["k"])(H,{name:"type"},{code:Object(c["S"])((function(){return[Object(c["T"])(Object(c["i"])("code",h,d,512),[[U]])]})),default:Object(c["S"])((function(){return[Object(c["i"])("div",i,[o,u,Object(c["k"])(E,{placeholder:"base"}),Object(c["k"])(E,{type:"primary",placeholder:"primary"}),Object(c["k"])(E,{type:"warn",placeholder:"warn"}),Object(c["k"])(E,{type:"notice",placeholder:"notice"}),Object(c["k"])(E,{type:"error",placeholder:"error"}),Object(c["k"])(E,{type:"success",placeholder:"success"})])]})),_:1}),Object(c["k"])(H,{name:"light-style"},{code:Object(c["S"])((function(){return[Object(c["T"])(Object(c["i"])("code",j,m,512),[[U]])]})),default:Object(c["S"])((function(){return[Object(c["i"])("div",y,[b,Object(c["k"])(E,{"light-style":"",placeholder:"light-base"}),Object(c["k"])(E,{"light-style":"",type:"primary",placeholder:"light-primary"}),Object(c["k"])(E,{"light-style":"",type:"warn",placeholder:"light-warn"}),Object(c["k"])(E,{"light-style":"",type:"notice",placeholder:"light-notice"}),Object(c["k"])(E,{"light-style":"",type:"error",placeholder:"light-error"}),Object(c["k"])(E,{"light-style":"",type:"success",placeholder:"light-success"})])]})),_:1}),g,Object(c["k"])(H,{name:"light-style"},{code:Object(c["S"])((function(){return[Object(c["T"])(Object(c["i"])("code",k,[Object(c["j"])(Object(c["J"])('<template>\n            \n  <p>model值：{{ userName }}</p>\n            \n  <XlInput v-model="userName" type="primary" placeholder="user name" />\n            \n</template>\n\n          \n<script type="text/ecmascript-6">\n            \nimport { ref } from \'vue\'\n            \nexport default {\n            \n  setup () {\n            \n    return {\n            \n      userName: ref(\'Declan\')\n            \n    }\n            \n  }\n            \n}\n            \n<\/script>'),1)],512),[[U]])]})),default:Object(c["S"])((function(){return[Object(c["i"])("div",f,[w,x,Object(c["i"])("p",null,"model值："+Object(c["J"])(l.userName),1),Object(c["k"])(E,{modelValue:l.userName,"onUpdate:modelValue":t[0]||(t[0]=function(e){return l.userName=e}),type:"primary",placeholder:"user name"},null,8,["modelValue"])])]})),_:1}),Object(c["k"])(H,{name:"light-style"},{code:Object(c["S"])((function(){return[Object(c["T"])(Object(c["i"])("code",v,[Object(c["j"])(Object(c["J"])('<XlInput :width="200" :height="20" type="primary" placeholder="width="100" height="20"" />\n          \n<XlInput :width="200" :height="40" type="primary" placeholder="width="200" height="40"" />\n          \n<XlInput :width="0.5" :height="40" type="primary" placeholder="width="50%" height="40"" />\n          \n<XlInput :width="1" :height="40" type="primary" placeholder="width="100%" height="40"" />\n          \n<XlInput :width="0" :height="40" type="primary" placeholder="width="auto" height="40"" />'),1)],512),[[U]])]})),default:Object(c["S"])((function(){return[Object(c["i"])("div",I,[X,S,Object(c["k"])(E,{width:200,height:20,type:"primary",placeholder:'width="100" height="20"'}),Object(c["k"])(E,{width:200,height:40,type:"primary",placeholder:'width="200" height="40"'}),Object(c["k"])(E,{width:.5,height:40,type:"primary",placeholder:'width="50%" height="40"'},null,8,["width"]),Object(c["k"])(E,{width:1,height:40,type:"primary",placeholder:'width="100%" height="40"'}),Object(c["k"])(E,{width:0,height:40,type:"primary",placeholder:'width="auto" height="40"'})])]})),_:1}),Object(c["k"])(H,{name:"light-style"},{code:Object(c["S"])((function(){return[Object(c["T"])(Object(c["i"])("code",_,V,512),[[U]])]})),default:Object(c["S"])((function(){return[Object(c["i"])("div",N,[D,T,J,Object(c["k"])(E,{"text-type":"text",type:"primary",placeholder:"text"}),Object(c["k"])(E,{"text-type":"textarea",type:"primary",placeholder:"textarea"}),Object(c["k"])(E,{"text-type":"textarea",row:"6",type:"primary",placeholder:"textarea row=6"})])]})),_:1}),Object(c["k"])(H,{name:"light-style"},{code:Object(c["S"])((function(){return[Object(c["T"])(Object(c["i"])("code",C,[Object(c["j"])(Object(c["J"])('<template>\n            \n  <XlInput pop-class="diy-font-color" text-type="text" type="primary" placeholder="focus字体显示为红色" />\n            \n  <XlInput pop-class="diy-placeholder-color" text-type="text" type="primary" placeholder="placeholder字体颜色" />\n            \n</template>\n\n          \n<style scoped lang="less">\n            \n/deep/.diy-font-color:focus{\n            \n  color: red;\n            \n}\n\n            \n/deep/.diy-placeholder-color::-webkit-input-placeholder {\n            \n  color: red;\n            \n}\n            \n</style>'),1)],512),[[U]])]})),default:Object(c["S"])((function(){return[Object(c["i"])("div",G,[A,B,F,Object(c["k"])(E,{"pop-class":"diy-font-color","text-type":"text",type:"primary",placeholder:"focus字体显示为红色"}),Object(c["k"])(E,{"pop-class":"diy-placeholder-color","text-type":"text",type:"primary",placeholder:"placeholder字体颜色"})])]})),_:1})])}var H={name:"Input",setup:function(){var e=[{attrName:"type",attrDesc:"类型",type:"String",accepted:"primary / warn / notice / error / success",default:"primary"},{attrName:"light-style",attrDesc:"浅色风格",type:"Boolean",accepted:"true / false",default:"false"},{attrName:"textType",attrDesc:"输入框类型",type:"String",accepted:"text(文本框) / textarea(文本域)",default:"text"},{attrName:"row",attrDesc:"文本域行数（只有textType为textarea时生效）",type:"String",accepted:"",default:"3"},{attrName:"height",attrDesc:"高度（只有textType为text时生效）",type:"Number / String",accepted:"",default:"50"},{attrName:"modelValue",attrDesc:"v-model双向绑定",type:"String",accepted:"",default:""},{attrName:"placeholder",attrDesc:"提示语",type:"String",accepted:"",default:""},{attrName:"popClass",attrDesc:"自定义class（必须为全局class）",type:"Array /  String",accepted:"",default:""},{attrName:"popStyle",attrDesc:"自定义style",type:"Object",accepted:"",default:""}];return{attrs:e,userName:Object(c["D"])("Declan")}}},U=(r("dcdb"),r("6b0d")),W=r.n(U);const q=W()(H,[["render",E],["__scopeId","data-v-2130a91f"]]);t["default"]=q},dcdb:function(e,t,r){"use strict";r("93a7")}}]);