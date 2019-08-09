!function(e){function t(t){for(var r,o,i=t[0],a=t[1],c=t[2],s=0,u=[];s<i.length;s++)o=i[s],I[o]&&u.push(I[o][0]),I[o]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(k&&k(t);u.length;)u.shift()();return L.push.apply(L,c||[]),n()}function n(){for(var e,t=0;t<L.length;t++){for(var n=L[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==I[i]&&(r=!1)}r&&(L.splice(t--,1),e=N(N.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!y[e]||!O[e])return;for(var n in O[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(g[n]=t[n]);0==--E&&0===v&&b()}(e,t),r&&r(e,t)};var o,i=!0,a="a0af6847fef6db7f44c2",c=1e4,s={},u=[],l=[];var f=[],d="idle";function p(e){d=e;for(var t=0;t<f.length;t++)f[t].call(null,e)}var _,g,h,E=0,v=0,m={},O={},y={};function S(e){return+e+""===e?+e:e}function w(e){if("idle"!==d)throw new Error("check() is only allowed in idle status");return i=e,p("check"),(t=c,t=t||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=N.p+""+a+".hot-update.json";r.open("GET",o,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}})).then(function(e){if(!e)return p("idle"),null;O={},m={},y=e.c,h=e.h,p("prepare");var t=new Promise(function(e,t){_={resolve:e,reject:t}});for(var n in g={},I)T(n);return"prepare"===d&&0===v&&0===E&&b(),t});var t}function T(e){y[e]?(O[e]=!0,E++,function(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.charset="utf-8",n.src=N.p+""+e+"."+a+".hot-update.js",t.appendChild(n)}(e)):m[e]=!0}function b(){p("ready");var e=_;if(_=null,e)if(i)Promise.resolve().then(function(){return C(i)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in g)Object.prototype.hasOwnProperty.call(g,n)&&t.push(S(n));e.resolve(t)}}function C(t){if("ready"!==d)throw new Error("apply() is only allowed in ready status");var n,r,o,i,c;function l(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),a=o.id,c=o.chain;if((i=A[a])&&!i.hot._selfAccepted){if(i.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:a};if(i.hot._main)return{type:"unaccepted",chain:c,moduleId:a};for(var s=0;s<i.parents.length;s++){var u=i.parents[s],l=A[u];if(l){if(l.hot._declinedDependencies[a])return{type:"declined",chain:c.concat([u]),moduleId:a,parentId:u};-1===t.indexOf(u)&&(l.hot._acceptedDependencies[a]?(n[u]||(n[u]=[]),f(n[u],[a])):(delete n[u],t.push(u),r.push({chain:c.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var _={},E=[],v={},m=function(){};for(var O in g)if(Object.prototype.hasOwnProperty.call(g,O)){var w;c=S(O);var T=!1,b=!1,C=!1,L="";switch((w=g[O]?l(c):{type:"disposed",moduleId:O}).chain&&(L="\nUpdate propagation: "+w.chain.join(" -> ")),w.type){case"self-declined":t.onDeclined&&t.onDeclined(w),t.ignoreDeclined||(T=new Error("Aborted because of self decline: "+w.moduleId+L));break;case"declined":t.onDeclined&&t.onDeclined(w),t.ignoreDeclined||(T=new Error("Aborted because of declined dependency: "+w.moduleId+" in "+w.parentId+L));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(w),t.ignoreUnaccepted||(T=new Error("Aborted because "+c+" is not accepted"+L));break;case"accepted":t.onAccepted&&t.onAccepted(w),b=!0;break;case"disposed":t.onDisposed&&t.onDisposed(w),C=!0;break;default:throw new Error("Unexception type "+w.type)}if(T)return p("abort"),Promise.reject(T);if(b)for(c in v[c]=g[c],f(E,w.outdatedModules),w.outdatedDependencies)Object.prototype.hasOwnProperty.call(w.outdatedDependencies,c)&&(_[c]||(_[c]=[]),f(_[c],w.outdatedDependencies[c]));C&&(f(E,[w.moduleId]),v[c]=m)}var D,x=[];for(r=0;r<E.length;r++)c=E[r],A[c]&&A[c].hot._selfAccepted&&x.push({module:c,errorHandler:A[c].hot._selfAccepted});p("dispose"),Object.keys(y).forEach(function(e){!1===y[e]&&function(e){delete I[e]}(e)});for(var R,k,P=E.slice();P.length>0;)if(c=P.pop(),i=A[c]){var U={},j=i.hot._disposeHandlers;for(o=0;o<j.length;o++)(n=j[o])(U);for(s[c]=U,i.hot.active=!1,delete A[c],delete _[c],o=0;o<i.children.length;o++){var M=A[i.children[o]];M&&((D=M.parents.indexOf(c))>=0&&M.parents.splice(D,1))}}for(c in _)if(Object.prototype.hasOwnProperty.call(_,c)&&(i=A[c]))for(k=_[c],o=0;o<k.length;o++)R=k[o],(D=i.children.indexOf(R))>=0&&i.children.splice(D,1);for(c in p("apply"),a=h,v)Object.prototype.hasOwnProperty.call(v,c)&&(e[c]=v[c]);var F=null;for(c in _)if(Object.prototype.hasOwnProperty.call(_,c)&&(i=A[c])){k=_[c];var B=[];for(r=0;r<k.length;r++)if(R=k[r],n=i.hot._acceptedDependencies[R]){if(-1!==B.indexOf(n))continue;B.push(n)}for(r=0;r<B.length;r++){n=B[r];try{n(k)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:c,dependencyId:k[r],error:e}),t.ignoreErrored||F||(F=e)}}}for(r=0;r<x.length;r++){var V=x[r];c=V.module,u=[c];try{N(c)}catch(e){if("function"==typeof V.errorHandler)try{V.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:c,error:n,originalError:e}),t.ignoreErrored||F||(F=n),F||(F=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:c,error:e}),t.ignoreErrored||F||(F=e)}}return F?(p("fail"),Promise.reject(F)):(p("idle"),new Promise(function(e){e(E)}))}var A={},I={40:0},L=[];function N(t){if(A[t])return A[t].exports;var n=A[t]={i:t,l:!1,exports:{},hot:function(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:w,apply:C,status:function(e){if(!e)return d;f.push(e)},addStatusHandler:function(e){f.push(e)},removeStatusHandler:function(e){var t=f.indexOf(e);t>=0&&f.splice(t,1)},data:s[e]};return o=void 0,t}(t),parents:(l=u,u=[],l),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=A[e];if(!t)return N;var n=function(n){return t.hot.active?(A[n]?-1===A[n].parents.indexOf(e)&&A[n].parents.push(e):(u=[e],o=n),-1===t.children.indexOf(n)&&t.children.push(n)):u=[],N(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return N[e]},set:function(t){N[e]=t}}};for(var i in N)Object.prototype.hasOwnProperty.call(N,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(n,i,r(i));return n.e=function(e){return"ready"===d&&p("prepare"),v++,N.e(e).then(t,function(e){throw t(),e});function t(){v--,"prepare"===d&&(m[e]||T(e),0===v&&0===E&&b())}},n.t=function(e,t){return 1&t&&(e=n(e)),N.t(e,-2&t)},n}(t)),n.l=!0,n.exports}N.m=e,N.c=A,N.d=function(e,t,n){N.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},N.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},N.t=function(e,t){if(1&t&&(e=N(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(N.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)N.d(n,r,function(t){return e[t]}.bind(null,r));return n},N.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return N.d(t,"a",t),t},N.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},N.p="",N.h=function(){return a};var D=window.webpackJsonp=window.webpackJsonp||[],x=D.push.bind(D);D.push=t,D=D.slice();for(var R=0;R<D.length;R++)t(D[R]);var k=x;L.push([1212,1,0]),n()}({0:function(e,t,n){e.exports=n(31)(4)},1:function(e,t,n){e.exports=n(31)(2)},12:function(e,t,n){e.exports=n(31)(150)},1211:function(e,t,n){"use strict";var r,o=n(114),i=(r=o)&&r.__esModule?r:{default:r},a=n(32);var c=["style/index.css","js/mscratch-minor.js","js/mscratch-assets.js","js/mscratch-stage.js","js/mscratch-libs.js","js/mscratch.js","js/mblock-antd.js","js/mblock-libs.js","js/index.js","brython/brython_stdlib.js","static/iconfont.js","vs/editor/editor.main.js"],s=function(e){var t=e.split("."),n=t[t.length-1],r=document.createElement("link");switch(r.rel="preload",r.href=e,n){case"js":r.as="script";break;case"css":r.as="style";break;case"eot":r.as="font",r.type="font/application/vnd.ms-fontobject",r.crossorigin="anonymous";break;case"woff":r.as="font",r.type="font/woff",r.crossorigin="anonymous";break;case"ttf":r.as="font",r.type="font/ttf",r.crossorigin="anonymous";break;case"svg":r.as="font",r.type="font/image/svg+xm",r.crossorigin="anonymous";break;default:r.as="fetch"}document.head.appendChild(r)};window.onload=function(){if(!(0,a.isLocal)()){var e=!0,t=!1,n=void 0;try{for(var r,o=(0,i.default)(c);!(e=(r=o.next()).done);e=!0){var u=r.value;s(u)}}catch(e){t=!0,n=e}finally{try{!e&&o.return&&o.return()}finally{if(t)throw n}}}}},1212:function(e,t,n){e.exports=n(1211)},129:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(2)),o=i(n(7));function i(e){return e&&e.__esModule?e:{default:e}}var a=function(){function e(){(0,r.default)(this,e),this.clientList={}}return(0,o.default)(e,[{key:"listen",value:function(e,t){this.clientList[e]||(this.clientList[e]=[]);for(var n=!1,r=0,o=this.clientList[e].length;r<o;r++)if(t===this.clientList[e][r++]){n=!0;break}n||this.clientList[e].push(t)}},{key:"trigger",value:function(){var e=this,t=arguments,n=Array.prototype.shift.call(arguments),r=this.clientList[n];Array.isArray(r)&&r.map(function(n){n.apply(e,t)})}},{key:"remove",value:function(e,t){if(e in this.clientList)if(t&&0!==t.length)for(var n=this.clientList[e].length;n>=0;n--)t===this.clientList[e][n]&&this.clientList[e].splice(n,1);else this.clientList[e].length=0}}],[{key:"getInstance",value:function(){return this.instance?this.instance:this.instance=new e}}]),e}();a.instance=null,t.default=a.getInstance()},15:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SPRITE_TYPE=void 0;var r=f(n(3)),o=f(n(444)),i=f(n(443)),a=f(n(266)),c=n(323),s=n(87),u=n(442),l=n(441);function f(e){return e&&e.__esModule?e:{default:e}}var d=t.SPRITE_TYPE={LIBS:"libs",USER_LIBS:"user_libs",COSTUMES:"costumes",USER_COSTUMES:"user_costumes",SOUNDS:"sounds",USER_SOUNDS:"user_sounds",BACKDROPS:"backdrops",USER_BACKDROPS:"user_backdrops",DEVICES:"devices"};t.default=(0,r.default)({},o.default,{DEVICE:i.default,PROTOCOL:a.default,REQUEST_STATUS:s.REQUEST_STATUS,UPLOAD_STATUS:u.UPLOAD_STATUS,CONNECT_TYPE:c.CONNECT_TYPE,CONNECT_STATUS:c.CONNECT_STATUS,SCAN_STATUS:c.SCAN_STATUS,PROJECT_ACCEPT:["application/mblock","application/json","application/sb2","application/sb3"],PROJECT_SUFFIX:["mblock","json","sb2","sb3"],LOGIN_AVAILABLE_BLOCKS:l.LOGIN_AVAILABLE_BLOCKS,LOGIN_BLOCKS_BELONGTO_EXT:l.LOGIN_BLOCKS_BELONGTO_EXT,SYNC_CONNECT_STATE_TYPE:{ONREADY:0,PROJECT:1,ADD_DEVICE:2,REMOVE_DEVICE:3,CONNECTED:4,SERVER_OFFLINE:5,CONNECT_BROKEN:6},SENSOR_CALIBRATE_TYPE:{COLOR:"color",GYRO:"gyro"},SHOW_COMPILING_DEVICE:["mcore","auriga"],SPRITE_SUFFIX:["svg","png","jpg","sprite2","sprite3"],SPRITE_TYPE:d,SPRIET_ACCEPT:["image/jpeg","image/png","image/svg+xml","image/gif",".sprite2",".sprite3"],COSTUME_ACCEPT:["image/jpeg","image/png","image/svg+xml","image/gif"],SPRIET_SOUNDS_ACCEPT:["audio/mp3","audio/wav"],SPRITE_FILE_PREFIX:"U_",PROJECT_STATUS:{NORMAL:0,WILL_DOWNLOAD:1,WILL_UPLOAD_FILE:2,WILL_UPLOAD_RECORD:3,WILL_UPLOAD_ALL:4,UPLOADING:5,WILL_DELETE:6},PROJECT_TYPE:{EXAMPLE:"example",LOCAL:"local",LIST:"list"},PROJECT_SAVE_STATUS:{DOING:"DOING",FAILURE:"FAILURE",SUCCESS:"SUCCESS"},PROJECT_SYNC_STATUS:{SYNCING:"syncing",SUCCESS:"success",FAIL:"fail",NONETWORK:"noNetWork"},LANG_DOWNLOAD_STATUS:{DOING:"DOING",FAILURE:"FAILURE",SUCCESS:"SUCCESS"},PROJECT_SAVE_TIMEOUT:6e4})},18:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.getNavigatorLang=t.setDefaultExt=t.getDefaultExt=t.isBoxCourse=t.loadDynamicScript=t.safeHttps=t.isBlob=t.getUrlParams=t.blob2ArrayBuffer=t.readFile=t.formatDate=t.genId=t.parseRoute=t.isOnline=t.translateRequestUrlForEU=t.isStudentAccount=t.isEmailAccount=t.openProjectTarget=t.base64ToBlob=t.getBase64ImageFromUrl=t.getImageSize=t.readAsArrayBuffer=t.getBase64=t.bufferToBase64=t.AnimationFrame=t.sleep=t.showSuccessMessage=t.showErrorMessage=t.getReady=t.detectWebGLContext=t.forceDownload=t.hasDarwin=t.getFileName=t.getFileSuffix=t.requestState=t.parseQueryString=t.getQueryString=void 0;var r=O(n(114)),o=O(n(23)),i=O(n(25)),a=O(n(2)),c=O(n(7)),s=O(n(38)),u=O(n(40)),l=O(n(11)),f=O(n(3)),d=O(n(39)),p=O(n(12)),_=O(n(118)),g=O(n(87)),h=O(n(15)),E=n(32),v=O(n(129)),m=O(n(249));function O(e){return e&&e.__esModule?e:{default:e}}t.getQueryString=function(e,t){var n=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),r=(e||window.location.search).substr(1).match(n);return null!=r?unescape(r[2]):null},t.parseQueryString=function(e){var t={};return(e||location.search).slice(1).split("&").forEach(function(e){e=e.split("="),t[e[0]]=decodeURIComponent(e[1]||"")}),t},t.requestState=function(e,t,n){var r;if(t.status===g.default.PENDING||t.data&&99999===t.data.code)return(0,d.default)({},e,(0,f.default)({},e,(r={},(0,l.default)(r,n,t.status),(0,l.default)(r,"code",t.data&&t.data.code),r)))};var y=t.getFileSuffix=function(e){try{return _.default.extname(e).replace(".","")}catch(e){return""}};t.getFileName=function(e){try{var t=e.replace(/\\/g,"/");return _.default.basename(t).replace(_.default.extname(t),"")}catch(t){return e}},t.hasDarwin=function(){return 0===navigator.platform.toLowerCase().indexOf("mac")},t.forceDownload=function(e,t){var n=(window.URL||window.webkitURL).createObjectURL(e),r=window.document.querySelector("#DownloadFileTarget");return r.href=n,r.download=t,r.click(),(window.URL||window.webkitURL).revokeObjectURL(n),u.default.resolve()},t.detectWebGLContext=function(){var e=document.createElement("canvas"),t=e.getContext("webgl")||e.getContext("experimental-webgl");return!!(t&&t instanceof WebGLRenderingContext)},t.getReady=function(e){return new u.default(function(t){var n=null;!function r(){n=requestAnimationFrame(r),e()&&(cancelAnimationFrame(n),t())}()})},t.showErrorMessage=function(e,t){if(t){var n="MSG."+t;p.default.has(this.props.intlr.messages,n)&&s.default.error(this.props.intlr.messages[n])}else s.default.error(this.props.intlr.messages[e])},t.showSuccessMessage=function(e,t){s.default.success(this.props.intlr.messages[e],t)},t.sleep=function(e){return new u.default(function(t){return setTimeout(t,e)})};String.prototype.format=function(){if(0==arguments.length)return this;for(var e=this,t=0;t<arguments.length;t++)e=e.replace(new RegExp("\\{"+t+"\\}","g"),arguments[t]);return e};var S,w,T;t.AnimationFrame=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:60,n=arguments[1];(0,a.default)(this,e),this.requestID=0,this.fps=t,this.animate=n,this.isStop=!1}return(0,c.default)(e,[{key:"start",value:function(){var e=this;this.isStop=!1;var t=performance.now();this.requestID=requestAnimationFrame(function n(r){if(e.isStop)e.stop();else{e.requestID=requestAnimationFrame(n);var o=r-t,i=1e3/e.fps;o>=i-.1&&(t=r-o%i,e.animate(o))}})}},{key:"stop",value:function(){this.isStop=!0,cancelAnimationFrame(this.requestID)}}]),e}(),t.bufferToBase64=function(e){for(var t="",n=new Uint8Array(e),r=n.byteLength,o=0;o<r;o++)t+=String.fromCharCode(n[o]);return window.btoa(t)},t.getBase64=function(e,t){return new u.default(function(n,r){var o=new FileReader;o.onload=function(){n(o.result)},o.onerror=function(e){r(e)},o.addEventListener("load",function(){return n(o.result)}),t?o.readAsText(e):o.readAsDataURL(e)})},t.readAsArrayBuffer=function(t){return t instanceof Blob||t instanceof File?new u.default(function(n,r){var o=new FileReader;o.onload=function(){n(e.from(new Uint8Array(o.result)))},o.onerror=function(e){r(e)},o.readAsArrayBuffer(t)}):t},t.getImageSize=function(e){return new u.default(function(t,n){var r=new Image;r.src=e,r.onload=function(){t({width:this.width,height:this.height})},r.onerror=function(e){n(e)}})},t.getBase64ImageFromUrl=(S=(0,i.default)(o.default.mark(function e(t){var n,r;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.blob();case 5:return r=e.sent,e.abrupt("return",new u.default(function(e,t){var n=new FileReader;n.addEventListener("load",function(){e(n.result)},!1),n.onerror=function(){return t(void 0)},n.readAsDataURL(r)}));case 7:case"end":return e.stop()}},e,void 0)})),function(e){return S.apply(this,arguments)}),t.base64ToBlob=function(e){for(var t=e.split(","),n=t[0].match(/:(.*?);/)[1],r=window.atob(t[1]),o=new ArrayBuffer(r.length),i=new Uint8Array(o),a=0;a<r.length;a++)i[a]=r.charCodeAt(a);return new Blob([o],{type:n})},t.openProjectTarget=function(e){return e="string"==typeof e?e:"#OpenProjectTarget",new u.default(function(t,n){var r=document.querySelector(e);r.click(),r.onchange=function(){var e=r.files;if(e instanceof FileList&&e.length>0){var o=e[0];-1!==h.default.PROJECT_SUFFIX.indexOf(y(o.name))?t(e[0]):n()}else n();r.value=""}})},t.isEmailAccount=function(e){return e&&/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},t.isStudentAccount=function(e){return e&&/^[0-9a-zA-Z]{9}$/.test(e)},t.translateRequestUrlForEU=function(e){if((0,E.isInternational)()){-1!==e.indexOf("//apimblock.makeblock.com/")&&(e=e.replace("apimblock","api.mblock"));var t=!0,n=!0,o=!1,i=void 0;try{for(var a,c=(0,r.default)(["//extservice.makeblock.com/","//planet.mblock.cc/","//extservice.mblock.cc/"]);!(n=(a=c.next()).done);n=!0){var s=a.value;-1!==e.indexOf(s)&&(t=!1)}}catch(e){o=!0,i=e}finally{try{!n&&c.return&&c.return()}finally{if(o)throw i}}t&&(e=e.replace("//","//eu."))}return e},t.isOnline=function(){return window.navigator.onLine},t.parseRoute=function(e){return e},t.genId=function(){for(var e="0123456789qwertyuioplkjhgfdsazxcvbnm",t="",n=(new Date).getTime(),r=0;r<4;r++)t+=e.charAt(Math.ceil(1e8*Math.random())%e.length);return n+t},t.formatDate=function(e){var t=function(e){return 1===e.toString().length?"0"+e:e},n=new Date(1e3*e),r=n.getFullYear(),o=n.getMonth()+1,i=n.getDate(),a=n.getHours(),c=n.getMinutes(),s=n.getSeconds();return r+"-"+t(o)+"-"+t(i)+" "+t(a)+":"+t(c)+":"+t(s)},t.readFile=(w=(0,i.default)(o.default.mark(function e(t){return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new u.default(function(e,n){var r=new XMLHttpRequest;r.open("GET",t,!0),r.responseType="blob",r.onload=function(){var t=this,n=r.response,c=new FileReader;c.readAsArrayBuffer(n),c.onload=(0,i.default)(o.default.mark(function n(){return o.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e(c.result),clearInterval(a),a=null;case 3:case"end":return t.stop()}},n,t)}))},r.onprogress=function(e){if(e.lengthComputable){var t=Math.floor(e.loaded/e.total*100);v.default.trigger("file_download",t),r.loadTime=+new Date}};var a=setInterval(function(){var e=+new Date;r.loadTime&&e-r.loadTime>h.default.PROJECT_SAVE_TIMEOUT&&c("network error")},1e3);r.onerror=function(e){c(e)};try{r.send()}catch(e){c(e)}function c(e){r.abort(),clearInterval(a),a=null,v.default.trigger("file_download_error"),n(e)}}));case 1:case"end":return e.stop()}},e,void 0)})),function(e){return w.apply(this,arguments)}),t.blob2ArrayBuffer=(T=(0,i.default)(o.default.mark(function e(t){return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new u.default(function(e,n){var r=new FileReader;r.readAsArrayBuffer(t),r.onload=function(){var t=r.result;e(t)},r.onerror=function(e){n(e)}}));case 1:case"end":return e.stop()}},e,void 0)})),function(e){return T.apply(this,arguments)}),t.getUrlParams=function(e){var t=e||window.location.href.split("?")[1];return t?p.default.chain(t).split("&").map(p.default.partial(p.default.split,p.default,"=",2)).fromPairs().value():null},t.isBlob=function(e){return"[object Blob]"===Object.prototype.toString.call(e)},t.safeHttps=function(e){return"string"!=typeof e?e:-1!==e.indexOf("http")?e.replace("http:","https:"):e},t.loadDynamicScript=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=document.createElement("script");r.src=e,t&&(r.async="async"),n&&(r.defer="defer"),r.onerror=function(){throw e+" load failed."},document.body.appendChild(r)},t.isBoxCourse=function(e){return location.href.includes(e)},t.getDefaultExt=function(){return m.default.get(h.default.DEFAULT_DEVICE)},t.setDefaultExt=function(e){m.default.set(h.default.DEFAULT_DEVICE,[e])},t.getNavigatorLang=function(){return p.default.isEmpty(navigator.languages)?p.default.isEmpty(navigator.language)?"en":navigator.language[0].split("-").length>1&&"zh"===navigator.language.split("-")[0]&&"zh-CN"!==navigator.language?"zh-hant":navigator.language.split("-")[0]:navigator.languages[0].split("-").length>1&&"zh"===navigator.languages[0].split("-")[0]&&"zh-CN"!==navigator.languages[0]?"zh-hant":navigator.languages[0].split("-")[0]}}).call(this,n(26).Buffer)},20:function(e,t,n){e.exports=n(31)(126)},249:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(143)),o=a(n(2)),i=a(n(7));function a(e){return e&&e.__esModule?e:{default:e}}var c=function(){function e(){(0,o.default)(this,e)}return(0,i.default)(e,[{key:"set",value:function(e,t){return!!window.localStorage&&(localStorage.setItem(e,(0,r.default)(t)),!0)}},{key:"get",value:function(e){if(window.localStorage)try{return JSON.parse(localStorage.getItem(e))}catch(e){return!1}return!1}},{key:"remove",value:function(e){return!!window.localStorage&&(localStorage.removeItem(e),!0)}},{key:"clear",value:function(){return!!window.localStorage&&(localStorage.clear(),!0)}}]),e}();t.default=new c},266:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={FN_PROTOCOL:"http://www.makeblock.com/terms/",ZH_PROTOCOL:"http://www.makeblock.com/cn/agreement/"}},31:function(e,t){e.exports=mdll},32:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.isWindows=exports.getInternational=exports.isInternational=exports.getBuildVersion=exports.getVersion=exports.isChrome=exports.isWebkit=exports.getVendorPrefix=exports.isLocal=exports.isForExt=exports.isElectron=exports.isWeb=void 0;var _lodash=__webpack_require__(12),_lodash2=_interopRequireDefault(_lodash),_store=__webpack_require__(48),_store2=_interopRequireDefault(_store),_util=__webpack_require__(18),_constant=__webpack_require__(15),_constant2=_interopRequireDefault(_constant);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var isWeb=exports.isWeb=function(){return!_lodash2.default.has(window,"window.MbApi.file")},isElectron=exports.isElectron=function(){return _lodash2.default.has(window,"window.MbApi.electron")},isForExt=exports.isForExt=function(){var e=!1;return"undefined"!=typeof FOREXT&&!0===FOREXT&&(e=!0),e},isLocal=exports.isLocal=function(){var e=window.location.hostname;return-1===["test.ide.makeblock.com","testide.makeblock.com","ide.makeblock.com","ext.mblock.makeblock.com","ide.mblock.cc","ext.mblock.cc","testide.mblock.cc"].indexOf(e)},getVendorPrefix=exports.getVendorPrefix=function(){for(var e=(document.body||document.documentElement).style,t=["webkit","khtml","moz","ms","o"],n=0;n<t.length;){if("string"==typeof e[t[n]+"Transition"])return t[n];n++}},isWebkit=exports.isWebkit=function(){return"webkit"===getVendorPrefix()},isChrome=exports.isChrome=function(){var e=navigator.userAgent.toLocaleLowerCase();return(e.indexOf("chrome")>-1||e.indexOf("crios")>-1)&&e.indexOf("safari")>-1},getVersion=exports.getVersion=function(){return"5.1.1"},getBuildVersion=exports.getBuildVersion=function(){return"5.1.1"},isInternational=exports.isInternational=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0],arguments.length>1&&void 0!==arguments[1]&&arguments[1];return!isLocal()&&-1!==window.location.host.indexOf("mblock.cc")},getInternational=exports.getInternational=function(){return isInternational()?"en":"zh"},_handleIntrlEnvFromPc=function _handleIntrlEnvFromPc(){var localeInternational=_store2.default.get(_constant2.default.INTERNATIONAL_VERSION);if(!_lodash2.default.isNull(localeInternational))return eval(localeInternational);var localeLangKey=_store2.default.get(_constant2.default.INTL_LANG_KEY);if(localeLangKey)return"zh"!==localeLangKey;var intlLang=(0,_util.getNavigatorLang)();return"zh"!==intlLang},isWindows=exports.isWindows=function(){return"Win32"===navigator.platform}},323:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.CONNECT_TYPE={SERIAL:"serialport",BLE:"ble",HID:"hid",WIRELESS:"wireless"},t.CONNECT_STATUS={IDLE:"idle",CONNECTED:"connected",NOT_CONNECTED:"not_connected",NOT_SERVICE:"not_server",CONNECTING:"connecting",CONNECT_SUCCESS:"connect_success",CONNECT_FAIL:"connect_fail",CONNECT_ERROR:"connect_error",CONNECT_TIMEOUT:"connect_timeout",CONNECT_CANCEL:"connect_cancel"},t.SCAN_STATUS={SCAN_READY:"scan_ready",SCANNING:"scanning",SCAN_SUCCESS:"scan_success",SCAN_FAIL:"scan_fail",SCAN_TIMEOUT:"scan_timeout",SCAN_CANCEL:"scan_cancel"},t.CH340={PRODUCT_ID:29987,VERDOR_ID:6790}},42:function(e,t,n){e.exports=n(31)(1)},440:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=c(n(2)),o=c(n(7)),i=c(n(711)),a=n(32);function c(e){return e&&e.__esModule?e:{default:e}}var s=function(){function e(){(0,r.default)(this,e),this.synonymMaps={Token:"utoken"}}return(0,o.default)(e,[{key:"set",value:function(e,t){return this.remove(e),i.default.set(e,t,this.config),this.synonymMaps[e]&&i.default.set(this.synonymMaps[e],t,this.config),!0}},{key:"get",value:function(e){var t=i.default.get(e)||this.synonymMaps[e]&&i.default.get(this.synonymMaps[e]);try{return JSON.parse(t)}catch(e){return t}}},{key:"remove",value:function(e){return i.default.remove(e,this.config),this.synonymMaps[e]&&i.default.remove(this.synonymMaps[e],this.config),!0}},{key:"clear",value:function(){}},{key:"config",get:function(){var e=(0,a.isInternational)()?"mblock.cc":"makeblock.com";return(0,a.isLocal)()?{}:{domain:e,expires:365}}}]),e}();t.default=new s},441:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.LOGIN_AVAILABLE_BLOCKS=["iot.ifttt_pub","iot.ifttt_recv","iot.iot_connect_network_new","iot.data_addtolist_cloudlist","iot.data_itemoflist_cloudlist","iot.data_lengthoflist_cloudlist","iot.iot_connect_network","iot.iot_if_connect_network","iot.iot_air","iot.iot_sun","iot.iot_weather","cognitive.beginSpeechToText","cognitive.speechToTextResult","cognitive.beginFaceDetection","cognitive.faceDetectionResult","cognitive.beginEmotionRecognition","cognitive.emotionValue","cognitive.emotionType","cognitive.beginImageToText","cognitive.beginHandwrittenToText","cognitive.imageToTextResult"],t.LOGIN_BLOCKS_BELONGTO_EXT=["cognitive","iot"]},442:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.UPLOAD_STATUS={READY:"ready",UPLOADED:"uploaded",DONE:"done",FAILED:"failed",PROCESSING:"processing",COMPILING:"compiling",COMPILE_FAILED:"compileFailed"}},443:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={CODEY:"codey",MICROBIT:"microbit",NEURON:"neuron",MCORE:"mcore",AURIGA:"auriga"}},444:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={USER_ACCESS_TOKEN_KEY:"Token",USER_ACCESS_ACCESSTOKEN_KEY:"accesstoken",USER_ACCESS_UTOKEN_KEY:"utoken",USER_INFO_KEY:"User",CONNECT_DEVICE_KEY:"ConnectDevice",CONNECT_DEVICE_ID_KEY:"ConnectDeviceId",LAST_CONNECT_TYPE_KEY:"ConnectType",INTL_LANG_KEY:"IntlLang",FEEDBACK_CACHE_KEY:"Feedback",REMIND_UPDATE:"RemindUpdate",IGNORE_UPDATE_VERSIONS:"IgnoreUpdateVersions",LOADED_EXTENSIONS:"LoadedExtensions",INSTALLED_EXT:"InstalledExtensions",INTERNATIONAL_VERSION:"InternationalVersion",DEFAULT_DEVICE:"DefaultDevice"}},48:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(12)),o=a(n(249)),i=a(n(440));function a(e){return e&&e.__esModule?e:{default:e}}var c=o.default;r.default.has(window,"window.MbApi.file")||(c=i.default),t.default=c},712:function(e,t,n){e.exports=n(31)(84)},713:function(e,t,n){e.exports=n(31)(208)},714:function(e,t,n){e.exports=n(31)(207)},74:function(e,t,n){e.exports=n(31)(37)},87:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={CANCELED:"canceled",PENDING:"pending",FAILED:"failed",DONE:"done",TIMEOUT:"timeout"};t.REQUEST_STATUS={CANCELED:"canceled",PENDING:"pending",FAILED:"failed",DONE:"done",TIMEOUT:"timeout"}}});