(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{819:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=w(a(28)),l=w(a(22)),n=w(a(27)),i=w(a(195)),o=w(a(9)),u=w(a(2)),c=w(a(7)),s=w(a(5)),d=w(a(6)),f=w(a(12)),p=w(a(1)),m=a(14),E=w(a(16)),T=w(a(19)),h=w(a(264)),v=w(a(165)),y=a(91),g=a(18),F=w(a(488));function w(e){return e&&e.__esModule?e:{default:e}}var A=w(a(15)).default.UPLOAD_STATUS,R=function(e){function t(e){(0,u.default)(this,t);var a=(0,s.default)(this,(t.__proto__||(0,o.default)(t)).call(this,e));return a.getEditingTarget=function(){try{var e=(0,y.editingTarget)();a.firmware=e.config.options.firmware}catch(e){}},a.handleOk=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&(E.default.replace("/"),T.default.emit("ShowUpdateFirmware",null),T.default.emit("UploadFirmwareComplete",a.device,!0,e))},a.handleCancel=function(){F.default.setSoftDisconnectMode(!1),T.default.emit("ConnectBroken",a.device,!0),T.default.emit("firmware.update.cancel",a.device),E.default.replace("/")},a.processing=function(e,t){var r=a.props.intlr,o=r.messages;return{title:o["UPDATER.FIRMWARE.LOADING.TITLE"],content:p.default.createElement("div",{style:{padding:"48px 0 80px 0"}},p.default.createElement(i.default,{status:e===A.FAILED?"exception":e===A.UPLOADED?"success":"active",percent:t}),p.default.createElement("p",{style:{marginTop:"1rem",textAlign:"center"}},p.default.createElement(n.default,{type:"warning mr",style:{color:"#ffa39e"}}),o["UPDATER.FIRMWARE.LOADING.CONTENT.TEXT"])),footer:p.default.createElement("div",{style:{textAlign:"center"}},p.default.createElement(l.default,{type:"primary",ghost:!0,onClick:a.handleCancel},r.messages["BUTTON.CANCEL.TEXT"])),close:!1}},a.uploaded=function(){var e=a.props.intlr.messages,t=a.firmware&&a.firmware.tips&&a.firmware.tips.success||[];return{title:e["UPDATER.FIRMWARE.SUCCESS.TITLE"],content:p.default.createElement("div",{style:{padding:"26px 0 40px 0"}},p.default.createElement("p",{className:"progress-title"},p.default.createElement("i",{className:"mblock-icon icon-success",style:{color:"#52c41a"}}),e["UPDATER.FIRMWARE.SUCCESS.CONTENT.TITLE"]),p.default.createElement("ul",{className:"helpTip",style:{marginBottom:"0"}},t.map(function(e,t){return p.default.createElement("li",{key:t},(0,v.default)(e))}))),footer:p.default.createElement("div",{style:{textAlign:"center"}},p.default.createElement(l.default,{type:"primary",onClick:a.handleCancel},e["BUTTON.IKNOW.TEXT"])),close:!0}},a.failed=function(){var e=a.props.intlr.messages,t=a.firmware&&a.firmware.tips&&a.firmware.tips.fail||[];return{title:e["UPDATER.FIRMWARE.FAILED.TITLE"],content:p.default.createElement("div",{style:{padding:"26px 0 40px 0"}},p.default.createElement("p",{className:"progress-title"},p.default.createElement("i",{className:"mblock-icon icon-wangluoyichangchengseV",style:{color:"#FDC02F"}}),e["UPDATER.FIRMWARE.FAILED.CONTENT.TITLE"]),p.default.createElement("ul",{className:"helpTip fail",style:{marginBottom:"0"}},t.map(function(e,t){return p.default.createElement("li",{key:t},(0,v.default)(e))}))),footer:[p.default.createElement("div",{key:"ok",style:{textAlign:"center"}},p.default.createElement(l.default,{type:"primary",onClick:function(){return a.handleOk(!0)}},e["BUTTON.RETRY.TEXT"]))],close:!1}},a.noupdate=function(){var e=a.props.intlr.messages;return{title:e["UPDATER.FRIMWARE.M.TITLE"],content:p.default.createElement("div",null,p.default.createElement("h3",null,p.default.createElement(n.default,{type:"exclamation-circle",className:"mr",style:{color:"#52c41a"}}),e["UPDATER.NO.NEED.UPDATE"])),footer:p.default.createElement(l.default,{type:"primary",onClick:function(){return E.default.replace("/")}},e["BUTTON.OK.TEXT"]),close:!0}},a.cantuseble=function(){var e=a.props.intlr.messages;return{title:e["UPDATER.FRIMWARE.M.TITLE"],content:p.default.createElement("div",null,p.default.createElement("h3",null,p.default.createElement(n.default,{type:"exclamation-circle",className:"mr",style:{color:"#ffa39e"}}),e["UPDATER.CANT.USE.BLE.TITLE"]),p.default.createElement("p",null,e["UPDATER.CANT.USE.BLE.TEXT"])),footer:p.default.createElement(l.default,{type:"primary",onClick:function(){return E.default.replace("/")}},e["BUTTON.OK.TEXT"]),close:!1}},a.modalData=function(){if(a.isBle)return a.cantuseble();var e=a.props.upload,t=e.progress_status;return t===A.UPLOADED?a.uploaded():t===A.FAILED?a.failed():(A.PROCESSING,a.processing(t,e.progress_percent))},a.url=(0,g.getQueryString)(E.default.location.search,"url"),a.firmware=null,a.check(),a.getEditingTarget(),a.isBle||a.handleOk(),a}return(0,d.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){this.device=this.props.connect.device,this.initListeners()}},{key:"componentWillUnmount",value:function(){for(var e in this.listeners)T.default.removeListener(e,this.listeners[e])}},{key:"initListeners",value:function(){var e=this;for(var t in this.listeners={uploadFirmwarePrepare:function(){return e.props.uploadFirmwarePrepare()},uploadFirmwareProgress:function(t){return e.props.uploadFirmwareProgress(t)},uploadFirmwareFail:function(t){return e.props.uploadFirmwareFail(t)},uploadFirmwareFinished:function(){return e.props.uploadFirmwareFinished()}},this.listeners)T.default.on(t,this.listeners[t])}},{key:"check",value:function(){var e=this.props,t=e.updater,a=e.connect,r=t.model,l=a.devices;if(!f.default.isEmpty(l)&&!f.default.isEmpty(r)){var n;if(n=l[0]){var i=n.firmware;return i||(i={}),this.isNoUpdate=i.version===r.codey.last,this.isBle="BLE"===i.channel,void(this.verify=!0)}}this.verify=!1}},{key:"render",value:function(){var e=this.modalData(),t=e.title,a=e.content,l=e.footer,n=e.close;return p.default.createElement(r.default,{width:400,keyboard:!1,visible:!0,title:t,footer:l,closable:!0,maskClosable:n,onCancel:this.handleCancel},a)}}]),t}(p.default.Component);t.default=(0,m.connect)(function(e){return{intlr:e.intlr,connect:e.connect,updater:e.updater,upload:e.upload}},function(e){return{uploadFirmwarePrepare:function(){e(h.default.uploadFirmwarePrepare())},uploadFirmwareProgress:function(t){e(h.default.uploadFirmwareProgress(t))},uploadFirmwareFinished:function(){e(h.default.uploadFirmwareFinished())},uploadFirmwareFail:function(t){e(h.default.uploadFirmwareFail(t))}}})(R)}}]);