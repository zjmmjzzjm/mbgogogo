(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{794:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.onLogout=void 0;var r=s(a(38)),l=s(a(12)),n=s(a(56)),o=s(a(16)),i=a(32),c=a(18);function s(e){return e&&e.__esModule?e:{default:e}}t.onLogout=function(e,t){var a=e.project,s=e.intlr,_=e.saved,u=e.logout,d=a.name,p=s.messages;t.preventDefault();var f=-1===d.indexOf(p["FILENAME.EMPTY"]);l.default.isFunction(_)&&_({projectId:"",isSelfProject:!0,isShare:!1,isConfirmName:f});var m=function(){r.default.success(p["USER.LOGOUT.SUCCESS.MSG"],2),o.default.replace((0,c.parseRoute)("/"))},b=function(){r.default.error(p["USER.LOGOUT.FAIL.MSG"],2)};if((0,i.isWeb)())u(m.bind(void 0),b.bind(void 0));else{var v=a.projects;n.default.hasUnWillUpload(v)?o.default.replace("/list/confirm/logout"):u(m.bind(void 0),b.bind(void 0))}}},831:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _modal=__webpack_require__(28),_modal2=_interopRequireDefault(_modal),_icon=__webpack_require__(27),_icon2=_interopRequireDefault(_icon),_avatar=__webpack_require__(485),_avatar2=_interopRequireDefault(_avatar),_getPrototypeOf=__webpack_require__(9),_getPrototypeOf2=_interopRequireDefault(_getPrototypeOf),_classCallCheck2=__webpack_require__(2),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(7),_createClass3=_interopRequireDefault(_createClass2),_possibleConstructorReturn2=__webpack_require__(5),_possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2),_inherits2=__webpack_require__(6),_inherits3=_interopRequireDefault(_inherits2),_react=__webpack_require__(1),_react2=_interopRequireDefault(_react),_reactRedux=__webpack_require__(14),_reactRouterDom=__webpack_require__(90),_action=__webpack_require__(72),_action2=_interopRequireDefault(_action),_action3=__webpack_require__(88),_action4=_interopRequireDefault(_action3),_history=__webpack_require__(16),_history2=_interopRequireDefault(_history),_index=__webpack_require__(18),_env=__webpack_require__(32),_index2=__webpack_require__(794),_avatar3=__webpack_require__(484),_avatar4=_interopRequireDefault(_avatar3);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var UserLogin=function(_React$Component){function UserLogin(props){(0,_classCallCheck3.default)(this,UserLogin);var _this=(0,_possibleConstructorReturn3.default)(this,(UserLogin.__proto__||(0,_getPrototypeOf2.default)(UserLogin)).call(this,props));return _this.handleCancel=function(){_history2.default.replace((0,_index.parseRoute)("/"))},_this.delete=function(e){e.preventDefault();var t=_this.props.account,a=(void 0===t?{}:t).data.email;(0,_index.isEmailAccount)(a)?_history2.default.push((0,_index.parseRoute)("/login/deletePwd")):_history2.default.push((0,_index.parseRoute)("/profile/delete"))},_this.logout=function(e){(0,_index2.onLogout)(_this.props,e)},_this.renderTitle=function(){var e=_this.props.intlr;return _react2.default.createElement("div",{className:"title-tac"},e.messages["USER.PROFILE"])},_this.renderRow=function(){var _this$props=_this.props,account=_this$props.account,intlr=_this$props.intlr;if(account.data)return eval(account.data.isBindWechat)?_react2.default.createElement("div",{className:"flex-row profile-row",style:{justifyContent:"space-between"}},_react2.default.createElement("label",null,intlr.messages["SOCIAL.WECHAT"]),_react2.default.createElement("label",{className:"label-gray"},account.data.userName||"")):eval(account.data.isBindQQ)?_react2.default.createElement("div",{className:"flex-row profile-row",style:{justifyContent:"space-between"}},_react2.default.createElement("label",null,intlr.messages["SOCIAL.QQ"]),_react2.default.createElement("label",{className:"label-gray"},account.data.userName||"")):eval(account.data.isBindGoogle)?_react2.default.createElement("div",{className:"flex-row profile-row",style:{justifyContent:"space-between"}},_react2.default.createElement("label",null,intlr.messages["SOCIAL.Google"]),_react2.default.createElement("label",{className:"label-gray"},account.data.userName||"")):/^[0-9a-zA-Z]*$/g.test(account.data.email)?_react2.default.createElement("div",{className:"flex-row profile-row",style:{justifyContent:"space-between"}},_react2.default.createElement("label",null,intlr.messages["FORM.FIELD.STUDENTID.PH"]),_react2.default.createElement("label",{className:"label-gray"},account.data.account||"")):_react2.default.createElement("div",{className:"flex-row profile-row",style:{justifyContent:"space-between"}},_react2.default.createElement("label",null,intlr.messages["FORM.FIELD.EMAIL"]),_react2.default.createElement("label",{className:"label-gray"},account.data.email||""))},_this}return(0,_inherits3.default)(UserLogin,_React$Component),(0,_createClass3.default)(UserLogin,[{key:"componentDidMount",value:function(){var e=this.props.account;(void 0===e?{}:e).isLogin||this.handleCancel()}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function render(){var _props=this.props,_props$account2=_props.account,account=void 0===_props$account2?{}:_props$account2,intlr=_props.intlr;return account.isLogin?_react2.default.createElement(_modal2.default,{visible:!0,title:this.renderTitle(),width:340,maskClosable:!1,keyboard:!1,onCancel:this.handleCancel,footer:null},_react2.default.createElement("div",{style:{marginBottom:"30px"}},_react2.default.createElement("div",{className:"profile-avatar"},_react2.default.createElement(_avatar2.default,{size:"large",src:(0,_index.safeHttps)(account.data.headpic)||_avatar4.default,style:{width:"65px",height:"65px",lineHeight:"65px",borderRadius:"9999px"}})),_react2.default.createElement("div",null,_react2.default.createElement("div",{className:"flex-row profile-row",style:{justifyContent:"space-between"}},_react2.default.createElement("label",null,intlr.messages["FORM.FIELD.NICKNAME.PH"]),_react2.default.createElement("label",{className:"label-gray"},account.data.userName||"")),this.renderRow(),!eval(account.data.isBindQQ)&&!eval(account.data.isBindWechat)&&!eval(account.data.isBindGoogle)&&_react2.default.createElement("div",{className:"flex-row profile-row",style:{justifyContent:"space-between"}},_react2.default.createElement("label",null,intlr.messages["FORM.FIELD.PASSWORD"]),_react2.default.createElement(_reactRouterDom.Link,{to:(0,_index.parseRoute)("/update"),rel:"noopener noreferrer",replace:!0},intlr.messages["UPDATE.PASSWORD"],_react2.default.createElement(_icon2.default,{type:"right"}))))),(0,_env.isInternational)()?_react2.default.createElement("div",{className:"flex-row jcsb profile-link"},_react2.default.createElement("a",{onClick:this.delete},intlr.messages["USER.DELETE"]),_react2.default.createElement("a",{onClick:this.logout},intlr.messages["USER.LOGOUT"])):_react2.default.createElement("div",{className:"flex-row jcc profile-link"},_react2.default.createElement("a",{onClick:this.logout},intlr.messages["USER.LOGOUT"]))):null}}]),UserLogin}(_react2.default.Component),mapStateToProps=function(e){return{intlr:e.intlr,account:e.account,project:e.project}},mapDispatchToProps=function(e){return{logout:function(t,a){return e(_action2.default.strategy.logout(t,a))},saved:function(t){return e(_action4.default.saved(t))}}};exports.default=(0,_reactRedux.connect)(mapStateToProps,mapDispatchToProps)(UserLogin)}}]);