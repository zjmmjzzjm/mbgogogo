(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{834:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=w(a(28)),u=w(a(22)),n=w(a(80)),s=w(a(77)),o=w(a(73)),i=w(a(27)),r=w(a(3)),c=w(a(9)),d=w(a(2)),f=w(a(7)),m=w(a(5)),p=w(a(6)),h=w(a(1)),b=a(14),E=w(a(87)),S=w(a(72)),v=a(18),g=w(a(16));function w(e){return e&&e.__esModule?e:{default:e}}var D=function(e){function t(e){(0,d.default)(this,t);var a=(0,m.default)(this,(t.__proto__||(0,c.default)(t)).call(this,e));return a.handleCancel=function(){g.default.replace((0,v.parseRoute)("/"))},a.handleBack=function(){var e=a.props.account,t=(void 0===e?{}:e).isLogin;g.default.replace((0,v.parseRoute)(t?"/update":"/login/loginPwd"))},a.handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields(function(e,t){if(!e){var l=a.props.account.validCode,u=a.props.account.emailNum?a.props.account.emailNum:a.props.account.data.email;a.props.submit((0,r.default)({email:u,findpwdcode:l},t),a.submitSuccessCb.bind(a),a.submitFailCb.bind(a))}})},a.renderTitle=function(){var e=a.props.intlr;return h.default.createElement("div",{className:"pwd-title title-tac"},h.default.createElement("button",{"aria-label":"Back",className:"ant-btn-back",onClick:a.handleBack},h.default.createElement(i.default,{type:"left"})),e.messages["USER.FORGET.PASSWORD"])},a.focusEl=null,a.focusTimer=null,a}return(0,p.default)(t,e),(0,f.default)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.account;(void 0===t?{}:t).validCode?this.focusTimer=setTimeout(function(){e.focusEl&&e.focusEl.focus()}):g.default.push((0,v.parseRoute)("/forget"))}},{key:"componentWillUnmount",value:function(){clearTimeout(this.focusTimer),this.focusTimer=null}},{key:"hasDisableBtn",value:function(){var e,t=this.props.form,a=t.getFieldsError;return!(0,t.isFieldTouched)("password")||(e=a(),(0,o.default)(e).some(function(t){return e[t]}))}},{key:"submitSuccessCb",value:function(){v.showSuccessMessage.call(this,"USER.FINDPWD.SUCCESS.MSG"),g.default.replace((0,v.parseRoute)("/"))}},{key:"submitFailCb",value:function(e){99999!==e.code?v.showErrorMessage.call(this,"USER.FINDPWD.FAIL.MSG",e.code):v.showErrorMessage.bind(this)("MSG.99999")}},{key:"render",value:function(){var e=this,t=this.props,a=t.form,o=t.intlr,i=t.account,r=void 0===i?{}:i,c=a.getFieldDecorator;return h.default.createElement(l.default,{visible:!0,title:this.renderTitle(),width:"100%",className:"small-modal",closable:!1,maskClosable:!1,keyboard:!1,onCancel:this.handleCancel,footer:null},h.default.createElement(n.default,{onSubmit:this.handleSubmit},h.default.createElement("p",{className:"emailNum-section"},r.emailNum),h.default.createElement(n.default.Item,null,c("password",{rules:[{min:6,message:o.messages["FORM.FIELD.PASSWORD.MIN.MSG"]},{max:20,message:o.messages["FORM.FIELD.PASSWORD.MAX.MSG"]},{required:!0,message:o.messages["FORM.FIELD.PASSWORD.MSG"]}]})(h.default.createElement(s.default,{ref:function(t){return e.focusEl=t},type:"password",autoComplete:"true",placeholder:o.messages["FORM.FIELD.PASSWORD.NEW.PH"]}))),h.default.createElement(n.default.Item,null,h.default.createElement(u.default,{type:"primary",htmlType:"submit",className:"login-form-button",style:{width:"100%",marginBottom:"47px"},loading:r.updatepwdRequest===E.default.PENDING,disabled:this.hasDisableBtn()},o.messages["BUTTON.FINISH.TEXT"]))))}}]),t}(h.default.Component);t.default=(0,b.connect)(function(e){return{intlr:e.intlr,account:e.account}},function(e){return{submit:function(t,a,l){e(S.default.findpwd(t,a,l))}}})(n.default.create()(D))}}]);