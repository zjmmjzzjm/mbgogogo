(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{829:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=h(a(28)),l=h(a(22)),u=h(a(27)),r=h(a(9)),i=h(a(2)),o=h(a(7)),s=h(a(5)),c=h(a(6)),d=h(a(1)),f=a(14),p=a(18),m=h(a(16));function h(e){return e&&e.__esModule?e:{default:e}}var b=function(e){function t(e){(0,i.default)(this,t);var a=(0,s.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e));return a.handleBack=function(){m.default.replace((0,p.parseRoute)("/age"))},a.handleSubmit=function(){m.default.replace((0,p.parseRoute)("/agreement"))},a.renderTitle=function(){var e=a.props.intlr;return d.default.createElement("div",{className:"pwd-title title-tac",style:{padding:"0 16px"}},d.default.createElement("button",{"aria-label":"Back",className:"ant-btn-back",onClick:a.handleBack},d.default.createElement(u.default,{type:"left"})),e.messages["USER.GUARDIAN"])},a}return(0,c.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.account;(void 0===e?{}:e).emailNum||m.default.push((0,p.parseRoute)("/login"))}},{key:"render",value:function(){var e=this,t=this.props.intlr;return d.default.createElement(n.default,{visible:!0,title:this.renderTitle(),width:"100%",className:"small-modal",maskClosable:!1,closable:!1,keyboard:!1,footer:null},d.default.createElement("p",{style:{margin:"14px 0"}},t.messages["USER.GUARDIAN.TEXT"]),d.default.createElement(l.default,{type:"primary",className:"login-form-button",style:{width:"100%",minWidth:"320px",marginBottom:"40px"},onClick:function(){return e.handleSubmit(!1)}},t.messages["USER.GUARDIAN.CONFIRM.TEXT"]))}}]),t}(d.default.Component);t.default=(0,f.connect)(function(e){return{intlr:e.intlr,account:e.account}})(b)}}]);