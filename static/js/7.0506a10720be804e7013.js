webpackJsonp([7],{"7rGe":function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a={name:"loginRegist",data:function(){return{loginForm:{userName:"",passWord:""},showPassord:!0,default:{userName:"hefang",passWord:"HJ997812"}}},mounted:function(){},methods:{login:function(){this.loginForm.userName&&this.loginForm.passWord?this.loginForm.userName===this.default.userName&&this.loginForm.passWord===this.default.passWord?(this.$router.replace("/echart"),sessionStorage.setItem("userName",this.loginForm.userName)):this.$message.error("用户名或密码错误!"):this.$message.info("请填写用户名和密码!")},handleShow:function(){this.showPassord=!this.showPassord;var e=document.getElementById("pwd-inp");this.showPassord&&e.setAttribute("type","password"),!this.showPassord&&e.setAttribute("type","text")}}},o={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"login"},[t("div",{staticClass:"login_center"},[t("div",{staticClass:"title"},[e._v("管理员登录")]),e._v(" "),t("div",{staticClass:"form"},[t("div",{staticClass:"form-item"},[t("i",{staticClass:"fa fa-github-alt",attrs:{id:"logo-github"}}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.loginForm.userName,expression:"loginForm.userName"}],attrs:{placeholder:"Username",onkeyup:"value=value.replace(/[^a-z]+/g,'')",type:"text"},domProps:{value:e.loginForm.userName},on:{input:function(s){s.target.composing||e.$set(e.loginForm,"userName",s.target.value)}}})]),e._v(" "),t("div",{staticClass:"form-item"},[t("i",{staticClass:"fa fa-lock",attrs:{id:"logo-lock"}}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.loginForm.passWord,expression:"loginForm.passWord"}],attrs:{id:"pwd-inp",placeholder:"Password",onkeyup:"value=value.replace(/[^A-Z|a-z|0-9]+/g,'')",type:"password"},domProps:{value:e.loginForm.passWord},on:{keydown:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.login.apply(null,arguments)},input:function(s){s.target.composing||e.$set(e.loginForm,"passWord",s.target.value)}}}),e._v(" "),t("span",{staticClass:"password-eye",on:{click:e.handleShow}},[e.showPassord?t("i",{staticClass:"fa fa-eye"}):t("i",{staticClass:"fa fa-eye-slash"})])])]),e._v(" "),t("div",{staticClass:"login_btn",on:{click:e.login}},[e._v("登录")]),e._v(" "),t("div",{staticClass:"welcome"},[e._v("欢迎登录后台管理系统")])])])},staticRenderFns:[]};var i=t("VU/8")(a,o,!1,function(e){t("GBUg")},null,null);s.default=i.exports},GBUg:function(e,s){}});
//# sourceMappingURL=7.0506a10720be804e7013.js.map