!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t,n){"use strict";function r(e){return d[e]}function o(e){for(var t=1;t<arguments.length;t++)for(var n in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],n)&&(e[n]=arguments[t][n]);return e}function a(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1}function i(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}return p.test(e)?e.replace(f,r):e}function l(e){return!e&&0!==e||!(!v(e)||0!==e.length)}function s(e){var t=o({},e);return t._parent=e,t}function u(e,t){return e.path=t,e}function c(e,t){return(e?e+".":"")+t}t.__esModule=!0,t.extend=o,t.indexOf=a,t.escapeExpression=i,t.isEmpty=l,t.createFrame=s,t.blockParams=u,t.appendContextPath=c;var d={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},f=/[&<>"'`=]/g,p=/[&<>"'`=]/,h=Object.prototype.toString;t.toString=h;var g=function(e){return"function"==typeof e};g(/x/)&&(t.isFunction=g=function(e){return"function"==typeof e&&"[object Function]"===h.call(e)}),t.isFunction=g;var v=Array.isArray||function(e){return!(!e||"object"!=typeof e)&&"[object Array]"===h.call(e)};t.isArray=v},function(e,t,n){"use strict";function r(e,t){var n=t&&t.loc,a=void 0,i=void 0;n&&(a=n.start.line,i=n.start.column,e+=" - "+a+":"+i);for(var l=Error.prototype.constructor.call(this,e),s=0;s<o.length;s++)this[o[s]]=l[o[s]];Error.captureStackTrace&&Error.captureStackTrace(this,r);try{n&&(this.lineNumber=a,Object.defineProperty?Object.defineProperty(this,"column",{value:i,enumerable:!0}):this.column=i)}catch(e){}}t.__esModule=!0;var o=["description","fileName","lineNumber","message","name","number","stack"];r.prototype=new Error,t.default=r,e.exports=t.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){this.helpers=e||{},this.partials=t||{},this.decorators=n||{},s.registerDefaultHelpers(this),u.registerDefaultDecorators(this)}t.__esModule=!0,t.HandlebarsEnvironment=o;var a=n(0),i=n(1),l=r(i),s=n(11),u=n(19),c=n(21),d=r(c);t.VERSION="4.0.14";t.COMPILER_REVISION=7;var f={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0"};t.REVISION_CHANGES=f;o.prototype={constructor:o,logger:d.default,log:d.default.log,registerHelper:function(e,t){if("[object Object]"===a.toString.call(e)){if(t)throw new l.default("Arg not supported with multiple helpers");a.extend(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if("[object Object]"===a.toString.call(e))a.extend(this.partials,e);else{if(void 0===t)throw new l.default('Attempting to register a partial called "'+e+'" as undefined');this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if("[object Object]"===a.toString.call(e)){if(t)throw new l.default("Arg not supported with multiple decorators");a.extend(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]}};var p=d.default.log;t.log=p,t.createFrame=a.createFrame,t.logger=d.default},function(e,t,n){e.exports=n(4)},function(e,t,n){"use strict";n(5);var r=n(6),o=n(8),a=$("body").width()<720,i=window.conf_login;i.locale=r(),i.locale.userLoginAcc=i.userIdInputPlaceholder||i.locale.userLoginAcc;var l={init:function(){var e=this;if($("body").addClass((i.layoutStyle||"right")+"-mode").html(o(i)),i.logoUrl?$("img.logo").css({height:(i.logoHeight||72)+"px"}):$("img.logo").hide(),i.backgroundUrl){$("body").css({backgroundImage:'url("'+i.backgroundUrl+'")'});var t=(0===i.transparency||""===i.transparency||void 0===i.transparency||i.transparency,1-i.transparency);$(".bg-mask").css("opacity",t)}if($(".project-title").css({fontSize:(i.titleFontSize||28)+"px",fontWeight:i.titleFontWeight||"normal"}),!1===i.enableVeriCode?$(".login").addClass("no-veri-code").find(".veri-code-line").remove():($(".refresh-code").on("click",function(){e.refreshCode()}),$(".captcha").on("click",function(){e.refreshCode()}),e.refreshCode()),$(".login-btn").button().click(function(){$(".tips").html("").removeClass("ui-state-error");var t=$(".uid").val(),n=$(".pwd").val(),o=$(".code").val();return t&&n?!1===i.enableVeriCode||o?void e.doLogin(t,n,o):void $(".tips").addClass("ui-state-error").html(r("inputCodeTips")):void $(".tips").addClass("ui-state-error").html(r("nullTips"))}),$(window).keyup(function(e){13===e.keyCode&&$(".login-btn").focus().click()}),i.noAnimation)return void(a?$(".login").css("top","50%"):"center"!==i.layoutStyle?($(".login-bg").css({width:"38.2%",minWidth:"388px"}),$(".login").css("top","50%")):($(".login-bg").css({height:"61.8%",minHeight:"450px"}),$(".login").show()));if(a)$(".login").css("top","80%").animate({top:"50%"},500,"easeOutQuint");else if("center"!==i.layoutStyle){if(i.noFrame)return $(".login-bg").css("min-width","388px"),void $(".login").animate({top:"50%"},500,"easeOutBounce");$(".login-bg").animate({width:"38.2%"},300,"easeOutQuad",function(){$(".login-bg").css("min-width","388px"),$(".login").animate({top:"50%"},500,"easeOutBounce")})}else{if(i.noFrame)return $(".login-bg").css("min-height","370px"),void $(".login").show("drop",300);$(".login-bg").animate({height:"61.8%"},500,"easeOutQuad",function(){$(".login-bg").css("min-height","370px"),$(".login").show("drop",300)})}},doLogin:function(e,t,n){var o=this,a=window.location.pathname.replace(/\/$/,"");$.ajax({url:a+"/do",dataType:"json",data:{uid:e,pwd:t,code:n||""},type:"post",success:function(e){if(e.success){var t=location.search.match(/redirect=([^&]+)/);if(t)return location.href=decodeURIComponent(t[1]);location.href="/"}else{var n=e.code?r(e.code):e.message;$(".tips").addClass("ui-state-error").html(n),o.refreshCode()}},error:function(e){alert(r("loginException")),console.error(e),o.refreshCode()}})},refreshCode:function(){i.enableVeriCode&&$(".captcha").attr("src","/login/captcha?t="+(new Date).getTime())}};$(function(){l.init()})},function(e,t){},function(e,t,n){"use strict";var r=n(7);e.exports=function(e,t){return e?"__lang__"===e?"zh-cn":(t=t||{},r[e]?r[e].replace(/\{\{(\w+)\}\}/g,function(e,n){return t[n]}):function(){return console.warn("Key "+e+" is not found in locale"),"<?No Translation>"}()):r}},function(e,t,n){"use strict";e.exports={nullTips:"用户名和密码不能为空",userName:"用户名",userLoginAcc:"账号（ID）",password:"密码",login:"登录",veriCode:"验证码",inputCodeTips:"请输入验证码",clickToRefresh:"点击刷新",INVALID_VERI_CODE:"验证码不正确",INVALID_USER_OR_PWD:"用户名或密码不正确",INVALID_ACCOUNT_STATUS:"用户账号状态异常或已被停用",loginDevTips:"当前为预览模式，如果您有使用桥，请将桥升级到 1.2.3 以上，否则无法正常测试登录。",loginException:"[Dev Error] 登录异常。请确保网络正常可用。打开浏览器控制台，查看错误细节，并联系管理员。",BEFORE_LOGIN_SYNTAX_ERR:"[Dev Error] 登录前校验函数有语法错误，原因：",LOGIN_SYNTAX_ERR:"[Dev Error] 登录校验函数有语法错误，原因：",AFTER_LOGIN_SYNTAX_ERR:"[Dev Error] 登录后函数有语法错误，原因：",BEFORE_LOGIN_ERROR:"[Dev Error] 执行登录前函数发生错误，原因：",LOGIN_ERROR:"[Dev Error] 执行登录校验函数时发生错误，原因：",AFTER_LOGIN_ERROR:"[Dev Error] 执行登录后校验函数时发生错误，原因：",beforeLoginScriptError:"[Dev Error] 登录前事件脚本有错误：{{reason}}",afterLoginScriptError:"[Dev Error] 登录后事件脚本有错误：{{reason}}",exeBeforeLoginScriptError:"[Dev Error] 执行登录前事件脚本发生错误：{{reason}}",exeAfterLoginScriptError:"[Dev Error] 执行登录后事件脚本发生错误：{{reason}}"}},function(e,t,n){var r=n(9);e.exports=(r.default||r).template({1:function(e,t,n,r,o){return'<div class="ui-widget-content login-bg"></div>\n'},compiler:[7,">= 4.0.0"],main:function(e,t,n,r,o){var a,i,l=null!=t?t:e.nullContext||{},s=n.helperMissing,u=e.lambda,c=e.escapeExpression;return'<div class="project-title ui-widget-content">\n    <img class="logo" src="'+(null!=(i=null!=(i=n.logoUrl||(null!=t?t.logoUrl:t))?i:s,a="function"==typeof i?i.call(l,{name:"logoUrl",hash:{},data:o}):i)?a:"")+'">\n    '+(null!=(i=null!=(i=n.title||(null!=t?t.title:t))?i:s,a="function"==typeof i?i.call(l,{name:"title",hash:{},data:o}):i)?a:"")+'\n</div>\n<div class="ui-widget-content login">\n    <form class="login-form">\n        <span class="login-title"><i class="fas fa-lock"></i>'+c(u(null!=(a=null!=t?t.locale:t)?a.login:a,t))+'</span>\n        <div class="line">\n            <label class="label fas fa-user ui-widget-content"></label>\n            <input class="ui-widget-content uid" type="text" placeholder="'+c(u(null!=(a=null!=t?t.locale:t)?a.userLoginAcc:a,t))+'">\n        </div>\n        <div class="line">\n            <label class="label fas fa-key ui-widget-content"></label>\n            <input class="ui-widget-content pwd" type="password" placeholder="'+c(u(null!=(a=null!=t?t.locale:t)?a.password:a,t))+'">\n        </div>\n        <div class="line veri-code-line">\n            <label class="label refresh-code fas fa-sync ui-widget-content" title="'+c(u(null!=(a=null!=t?t.locale:t)?a.clickToRefresh:a,t))+'">\n            </label>\n            <img class="captcha ui-widget-content" alt="888888" title="'+c(u(null!=(a=null!=t?t.locale:t)?a.clickToRefresh:a,t))+'">\n            <input class="ui-widget-content code" type="text" placeholder="'+c(u(null!=(a=null!=t?t.locale:t)?a.veriCode:a,t))+'">\n        </div>\n        <div class="tips" class="ui-corner-all" ></div>\n        <a class="login-btn">'+c(u(null!=(a=null!=t?t.locale:t)?a.login:a,t))+'</a>\n    </form>\n</div>\n<div class="ui-state-default bg-mask"></div>\n'+(null!=(a=n.unless.call(l,null!=t?t.noFrame:t,{name:"unless",hash:{},fn:e.program(1,o,0),inverse:e.noop,data:o}))?a:"")},useData:!0})},function(e,t,n){e.exports=n(10).default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function a(){var e=new l.HandlebarsEnvironment;return p.extend(e,l),e.SafeString=u.default,e.Exception=d.default,e.Utils=p,e.escapeExpression=p.escapeExpression,e.VM=g,e.template=function(t){return g.template(t,e)},e}t.__esModule=!0;var i=n(2),l=o(i),s=n(22),u=r(s),c=n(1),d=r(c),f=n(0),p=o(f),h=n(23),g=o(h),v=n(24),m=r(v),_=a();_.create=a,m.default(_),_.default=_,t.default=_,e.exports=t.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){i.default(e),s.default(e),c.default(e),f.default(e),h.default(e),v.default(e),_.default(e)}t.__esModule=!0,t.registerDefaultHelpers=o;var a=n(12),i=r(a),l=n(13),s=r(l),u=n(14),c=r(u),d=n(15),f=r(d),p=n(16),h=r(p),g=n(17),v=r(g),m=n(18),_=r(m)},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0);t.default=function(e){e.registerHelper("blockHelperMissing",function(t,n){var o=n.inverse,a=n.fn;if(!0===t)return a(this);if(!1===t||null==t)return o(this);if(r.isArray(t))return t.length>0?(n.ids&&(n.ids=[n.name]),e.helpers.each(t,n)):o(this);if(n.data&&n.ids){var i=r.createFrame(n.data);i.contextPath=r.appendContextPath(n.data.contextPath,n.name),n={data:i}}return a(t,n)})},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0),o=n(1),a=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default=function(e){e.registerHelper("each",function(e,t){function n(t,n,a){u&&(u.key=t,u.index=n,u.first=0===n,u.last=!!a,c&&(u.contextPath=c+t)),s+=o(e[t],{data:u,blockParams:r.blockParams([e[t],t],[c+t,null])})}if(!t)throw new a.default("Must pass iterator to #each");var o=t.fn,i=t.inverse,l=0,s="",u=void 0,c=void 0;if(t.data&&t.ids&&(c=r.appendContextPath(t.data.contextPath,t.ids[0])+"."),r.isFunction(e)&&(e=e.call(this)),t.data&&(u=r.createFrame(t.data)),e&&"object"==typeof e)if(r.isArray(e))for(var d=e.length;l<d;l++)l in e&&n(l,l,l===e.length-1);else{var f=void 0;for(var p in e)e.hasOwnProperty(p)&&(void 0!==f&&n(f,l-1),f=p,l++);void 0!==f&&n(f,l-1,!0)}return 0===l&&(s=i(this)),s})},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r=n(1),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=function(e){e.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new o.default('Missing helper: "'+arguments[arguments.length-1].name+'"')})},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0);t.default=function(e){e.registerHelper("if",function(e,t){return r.isFunction(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||r.isEmpty(e)?t.inverse(this):t.fn(this)}),e.registerHelper("unless",function(t,n){return e.helpers.if.call(this,t,{fn:n.inverse,inverse:n.fn,hash:n.hash})})},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("log",function(){for(var t=[void 0],n=arguments[arguments.length-1],r=0;r<arguments.length-1;r++)t.push(arguments[r]);var o=1;null!=n.hash.level?o=n.hash.level:n.data&&null!=n.data.level&&(o=n.data.level),t[0]=o,e.log.apply(e,t)})},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("lookup",function(e,t){if(!e)return e;if("constructor"!==t||e.propertyIsEnumerable(t))return e[t]})},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0);t.default=function(e){e.registerHelper("with",function(e,t){r.isFunction(e)&&(e=e.call(this));var n=t.fn;if(r.isEmpty(e))return t.inverse(this);var o=t.data;return t.data&&t.ids&&(o=r.createFrame(t.data),o.contextPath=r.appendContextPath(t.data.contextPath,t.ids[0])),n(e,{data:o,blockParams:r.blockParams([e],[o&&o.contextPath])})})},e.exports=t.default},function(e,t,n){"use strict";function r(e){a.default(e)}t.__esModule=!0,t.registerDefaultDecorators=r;var o=n(20),a=function(e){return e&&e.__esModule?e:{default:e}}(o)},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0);t.default=function(e){e.registerDecorator("inline",function(e,t,n,o){var a=e;return t.partials||(t.partials={},a=function(o,a){var i=n.partials;n.partials=r.extend({},i,t.partials);var l=e(o,a);return n.partials=i,l}),t.partials[o.args[0]]=o.fn,a})},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0),o={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){var t=r.indexOf(o.methodMap,e.toLowerCase());e=t>=0?t:parseInt(e,10)}return e},log:function(e){if(e=o.lookupLevel(e),"undefined"!=typeof console&&o.lookupLevel(o.level)<=e){var t=o.methodMap[e];console[t]||(t="log");for(var n=arguments.length,r=Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];console[t].apply(console,r)}}};t.default=o,e.exports=t.default},function(e,t,n){"use strict";function r(e){this.string=e}t.__esModule=!0,r.prototype.toString=r.prototype.toHTML=function(){return""+this.string},t.default=r,e.exports=t.default},function(e,t,n){"use strict";function r(e){var t=e&&e[0]||1,n=g.COMPILER_REVISION;if(t!==n){if(t<n){var r=g.REVISION_CHANGES[n],o=g.REVISION_CHANGES[t];throw new h.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+r+") or downgrade your runtime to an older version ("+o+").")}throw new h.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")}}function o(e,t){function n(n,r,o){o.hash&&(r=f.extend({},r,o.hash),o.ids&&(o.ids[0]=!0)),n=t.VM.resolvePartial.call(this,n,r,o);var a=t.VM.invokePartial.call(this,n,r,o);if(null==a&&t.compile&&(o.partials[o.name]=t.compile(n,e.compilerOptions,t),a=o.partials[o.name](r,o)),null!=a){if(o.indent){for(var i=a.split("\n"),l=0,s=i.length;l<s&&(i[l]||l+1!==s);l++)i[l]=o.indent+i[l];a=i.join("\n")}return a}throw new h.default("The partial "+o.name+" could not be compiled when running in runtime-only mode")}function r(t){function n(t){return""+e.main(o,t,o.helpers,o.partials,i,s,l)}var a=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],i=a.data;r._setup(a),!a.partial&&e.useData&&(i=u(t,i));var l=void 0,s=e.useBlockParams?[]:void 0;return e.useDepths&&(l=a.depths?t!=a.depths[0]?[t].concat(a.depths):a.depths:[t]),(n=c(e.main,n,o,a.depths||[],i,s))(t,a)}if(!t)throw new h.default("No environment passed to template");if(!e||!e.main)throw new h.default("Unknown template object: "+typeof e);e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler);var o={strict:function(e,t){if(!(t in e))throw new h.default('"'+t+'" not defined in '+e);return e[t]},lookup:function(e,t){for(var n=e.length,r=0;r<n;r++)if(e[r]&&null!=e[r][t])return e[r][t]},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:f.escapeExpression,invokePartial:n,fn:function(t){var n=e[t];return n.decorator=e[t+"_d"],n},programs:[],program:function(e,t,n,r,o){var i=this.programs[e],l=this.fn(e);return t||o||r||n?i=a(this,e,l,t,n,r,o):i||(i=this.programs[e]=a(this,e,l)),i},data:function(e,t){for(;e&&t--;)e=e._parent;return e},merge:function(e,t){var n=e||t;return e&&t&&e!==t&&(n=f.extend({},t,e)),n},nullContext:Object.seal({}),noop:t.VM.noop,compilerInfo:e.compiler};return r.isTop=!0,r._setup=function(n){n.partial?(o.helpers=n.helpers,o.partials=n.partials,o.decorators=n.decorators):(o.helpers=o.merge(n.helpers,t.helpers),e.usePartial&&(o.partials=o.merge(n.partials,t.partials)),(e.usePartial||e.useDecorators)&&(o.decorators=o.merge(n.decorators,t.decorators)))},r._child=function(t,n,r,i){if(e.useBlockParams&&!r)throw new h.default("must pass block params");if(e.useDepths&&!i)throw new h.default("must pass parent depths");return a(o,t,e[t],n,0,r,i)},r}function a(e,t,n,r,o,a,i){function l(t){var o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],l=i;return!i||t==i[0]||t===e.nullContext&&null===i[0]||(l=[t].concat(i)),n(e,t,e.helpers,e.partials,o.data||r,a&&[o.blockParams].concat(a),l)}return l=c(n,l,e,i,r,a),l.program=t,l.depth=i?i.length:0,l.blockParams=o||0,l}function i(e,t,n){return e?e.call||n.name||(n.name=e,e=n.partials[e]):e="@partial-block"===n.name?n.data["partial-block"]:n.partials[n.name],e}function l(e,t,n){var r=n.data&&n.data["partial-block"];n.partial=!0,n.ids&&(n.data.contextPath=n.ids[0]||n.data.contextPath);var o=void 0;if(n.fn&&n.fn!==s&&function(){n.data=g.createFrame(n.data);var e=n.fn;o=n.data["partial-block"]=function(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return n.data=g.createFrame(n.data),n.data["partial-block"]=r,e(t,n)},e.partials&&(n.partials=f.extend({},n.partials,e.partials))}(),void 0===e&&o&&(e=o),void 0===e)throw new h.default("The partial "+n.name+" could not be found");if(e instanceof Function)return e(t,n)}function s(){return""}function u(e,t){return t&&"root"in t||(t=t?g.createFrame(t):{},t.root=e),t}function c(e,t,n,r,o,a){if(e.decorator){var i={};t=e.decorator(t,i,n,r&&r[0],o,a,r),f.extend(t,i)}return t}t.__esModule=!0,t.checkRevision=r,t.template=o,t.wrapProgram=a,t.resolvePartial=i,t.invokePartial=l,t.noop=s;var d=n(0),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(d),p=n(1),h=function(e){return e&&e.__esModule?e:{default:e}}(p),g=n(2)},function(e,t,n){"use strict";(function(n){t.__esModule=!0,t.default=function(e){var t=void 0!==n?n:window,r=t.Handlebars;e.noConflict=function(){return t.Handlebars===e&&(t.Handlebars=r),e}},e.exports=t.default}).call(t,n(25))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n}]);