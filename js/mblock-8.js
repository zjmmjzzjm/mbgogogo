(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{762:function(e,t){},801:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=p(l(28)),a=p(l(22)),r=p(l(27)),u=p(l(146)),o=p(l(12)),d=p(l(1)),f=l(14),c=p(l(16)),E=p(l(21)),i=p(l(35)),T=l(18),m=p(l(19)),s=p(l(263));function p(e){return e&&e.__esModule?e:{default:e}}l(762);t.default=(0,f.connect)(function(e){return{intlr:e.intlr,updater:e.updater}},function(e){return{onDownload:function(t,l){return e(s.default.download(t,l))},onRemind:function(t){return e(s.default.remind(t))},onIgnore:function(t){return e(s.default.ignore(t))}}})(function(e){var t=e.intlr,l=e.updater,f=e.onDownload,s=e.onRemind,p=e.onIgnore,C=t.messages,R=l.isAuto,N=l.isChecking,k=l.code,y=function(){setTimeout(function(){c.default.replace((0,T.parseRoute)("/"))},0)};if(R){var U=l.model,A=l.ignoreVersions;if(U&&-1!==A.indexOf(U.last))return y(),null}var O=function(){var e=l.isRemind;return d.default.createElement("div",{className:"remind-container"},d.default.createElement(u.default,{defaultChecked:e,onChange:function(e){return s(e.target.checked)}},C["UPDATER.REMIND.TEXT"]))},D=function(){var e=l.model,n=e.last,u=e.board,f=e.is_support,c=E.default.link.download[o.default.has(E.default.link.download,t.langKey)?t.langKey:"en"];return{content:d.default.createElement("div",null,!f&&d.default.createElement("div",{className:"updater-alert"},C["UPDATER.NOT.SUPPORT.UPDATE"]),d.default.createElement("h3",null,d.default.createElement(r.default,{className:"mr",type:"exclamation-circle",style:{color:"#ffe58f"}}),C["UPDATER.CHECKER.CONTENT.TITLE"]),d.default.createElement("p",null,C["UPDATER.CHECKER.CONTENT.VERSION.BEFORE"],d.default.createElement("b",null," ",n," ")),d.default.createElement("p",{className:"version-title"},C["UPDATER.CHECKER.CONTENT.FEATURES.LABEL"]),d.default.createElement("div",{className:"updtaer-content"},d.default.createElement("p",{dangerouslySetInnerHTML:{__html:u}})),O()),footer:f?[d.default.createElement(a.default,{key:"skip",onClick:function(){return p(n),void y()}},C["BUTTON.UPGRADE.SKIP.TEXT"]),d.default.createElement(a.default,{key:"later",onClick:y},C["BUTTON.UPGRADE.LATER.TEXT"]),d.default.createElement(a.default,{key:"now",type:"primary",onClick:P},C["BUTTON.UPGRADE.NOW.TEXT"])]:[d.default.createElement(a.default,{key:"download",type:"primary",href:c,rel:"nofollow me noopener noreferrer",target:"_blank",onClick:function(e){return i.default.openLink(e,c)}},d.default.createElement(r.default,{type:"download"}),C["BUTTON.GO.DOWNLOAD.TEXT"])]}},P=function(){y(),m.default.emit("LogMblockUpdate"),f(function(){c.default.push("/updater/app/restart"),m.default.emit("LogMblockUpdate",!0)},function(){m.default.emit("LogMblockUpdate",!1)})},g=function(){if(!R){if(N)return{content:d.default.createElement("h3",{style:{textAlign:"center"}},d.default.createElement(r.default,{className:"mr",type:"loading"}),C["UPDATER.CHECKER.CHECKING"]),footer:[d.default.createElement(a.default,{key:"later",onClick:y},C["BUTTON.CANCEL.TEXT"])]};if(10037===k)return{content:d.default.createElement("div",null,d.default.createElement("h3",null,d.default.createElement(r.default,{className:"mr",type:"check",style:{color:"#52c41a"}}),C["UPDATER.CHECKER.LATEST.TITLE"]),d.default.createElement("p",null,C["UPDATER.CHECKER.LATEST.TEXT"]),O()),footer:[d.default.createElement(a.default,{type:"primary",key:"later",onClick:y},C["BUTTON.IKNOW.TEXT"])]};if(10031===k||10032===k)return{content:d.default.createElement("div",null,d.default.createElement("h3",null,d.default.createElement(r.default,{className:"mr",type:"warning",style:{color:"#ffa39e"}}),C["UPDATER.CHECKER.NETWORK.TITLE"]),d.default.createElement("p",null,C["UPDATER.CHECKER.NETWORK.TEXT"]),O()),footer:[d.default.createElement(a.default,{type:"primary",key:"later",onClick:y},C["BUTTON.IKNOW.TEXT"])]}}return 0===k?D():{content:null,footer:null}}(),w=g.content,K=g.footer;return w!==K||N?d.default.createElement(n.default,{className:"small-modal",width:"100%",keyboard:!1,visible:!0,title:C["UPDATER.CHECKER.TITLE"],onCancel:y,footer:K},w):(y(),null)})}}]);