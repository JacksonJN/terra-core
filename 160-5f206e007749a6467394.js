(window.webpackJsonp=window.webpackJsonp||[]).push([[160,157,158,159,161],{855:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),o=l(a(3)),i=l(a(5)),r=l(a(859));function l(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t,a){return t&&u(e.prototype,t),a&&u(e,a),e}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=p(e);if(t){var o=p(this).constructor;a=Reflect.construct(n,arguments,o)}else a=n.apply(this,arguments);return f(this,a)}}function f(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?_(e):t}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=i.default.bind(r.default),g={example:o.default.element,exampleSrc:o.default.element,title:o.default.string,description:o.default.node,isExpanded:o.default.bool},b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(a,e);var t=m(a);function a(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=t.call(this,e)).state={isExpanded:e.isExpanded,isBackgroundTransparent:!1},n.handleBgToggle=n.handleBgToggle.bind(_(n)),n.handleCodeToggle=n.handleCodeToggle.bind(_(n)),n}return c(a,null,[{key:"renderHeader",value:function(e){return e?n.default.createElement("div",{className:h("header")},n.default.createElement("h2",{className:h("title")},e)):null}},{key:"renderDescription",value:function(e){return e?n.default.createElement("div",{className:h("description")},e):null}}]),c(a,[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,t=e.example,o=e.exampleSrc,i=e.title,r=e.description,l=this.state,s=l.isExpanded,u=l.isBackgroundTransparent;return n.default.createElement("div",{className:h("template")},a.renderHeader(i),n.default.createElement("div",{className:h("content",{"dynamic-content":u})},a.renderDescription(r),t),o&&n.default.createElement("div",{className:h("footer")},n.default.createElement("div",{className:h("button-container")},n.default.createElement("button",{type:"button",className:h("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),n.default.createElement("button",{type:"button",className:h("code-toggle"),onClick:this.handleCodeToggle},n.default.createElement("span",{className:h("chevron-left")}),n.default.createElement("span",null,"Code"),n.default.createElement("span",{className:h("chevron-right")}))),s&&n.default.createElement("div",{className:h("code")},o)))}}]),a}(n.default.Component);b.propTypes=g,b.defaultProps={isExpanded:!1};var y=b;t.default=y},856:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),o=l(a(3)),i=l(a(5)),r=l(a(857));function l(e){return e&&e.__esModule?e:{default:e}}var s=i.default.bind(r.default),u={name:o.default.string.isRequired,src:o.default.string,url:o.default.string,version:o.default.string.isRequired},c=function(e){var t=e.src,a=e.name,o=e.url,i=e.version,r=n.default.createElement("a",{className:s("badge"),href:o||"https://www.npmjs.org/package/".concat(a,"/v/").concat(i)},n.default.createElement("span",{className:s("badge-name")},o?"package":"npm"),n.default.createElement("span",{className:s("badge-version")},"v".concat(i))),l=t?n.default.createElement("a",{className:s("badge"),href:t},n.default.createElement("span",{className:s("badge-name")},"github"),n.default.createElement("span",{className:s("badge-version")},"source")):void 0;return n.default.createElement("div",{className:s("badge-container")},r,l)};c.propTypes=u;var d=c;t.default=d},857:function(e,t,a){e.exports={badge:"Badges-module__badge___3m7y2","badge-container":"Badges-module__badge-container___1YxI5","badge-name":"Badges-module__badge-name___BQ3u4","badge-version":"Badges-module__badge-version___3OgwS"}},858:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),o=l(a(3)),i=l(a(5)),r=l(a(860));function l(e){return e&&e.__esModule?e:{default:e}}var s=i.default.bind(r.default),u={rows:o.default.arrayOf(o.default.shape({name:o.default.string,type:o.default.func,required:o.default.bool,defaultValue:o.default.string,description:o.default.func}))},c=function(e){var t=e.rows;return n.default.createElement("table",{className:s("table")},n.default.createElement("thead",null,n.default.createElement("tr",{className:s("tr")},n.default.createElement("th",{className:s("th")},"Prop Name"),n.default.createElement("th",{className:s("th")},"Type"),n.default.createElement("th",{className:s("th")},"Is Required"),n.default.createElement("th",{className:s("th")},"Default Value"),n.default.createElement("th",{className:s("th")},"Description"))),n.default.createElement("tbody",null,t.map((function(e){return n.default.createElement("tr",{className:s(["tr","props-tr"]),key:e.name},n.default.createElement("td",{className:s(["td","strong","props-td"])},e.name),n.default.createElement("td",{className:s(["td","props-td"])},e.type()),n.default.createElement("td",{className:s(["td","props-td",e.required?["required"]:[]])},e.required?"required":"optional"),n.default.createElement("td",{className:s(["td","props-td"])},e.defaultValue),n.default.createElement("td",{className:s(["td","props-td"])},e.description()))}))))};c.propTypes=u;var d=c;t.default=d},859:function(e,t,a){e.exports={template:"ExampleTemplate-module__template___2Cn_e",header:"ExampleTemplate-module__header___1Uk65",content:"ExampleTemplate-module__content___2BfpO",description:"ExampleTemplate-module__description___17dwL",footer:"ExampleTemplate-module__footer___2qb8M","button-container":"ExampleTemplate-module__button-container___305lx",code:"ExampleTemplate-module__code____AmLF","bg-toggle":"ExampleTemplate-module__bg-toggle___3RP_x","code-toggle":"ExampleTemplate-module__code-toggle___25ONK","chevron-left":"ExampleTemplate-module__chevron-left___3vfkd","chevron-right":"ExampleTemplate-module__chevron-right___YOdVB",title:"ExampleTemplate-module__title___5hduh","dynamic-content":"ExampleTemplate-module__dynamic-content___1b8Fh"}},860:function(e,t,a){e.exports={a:"PropsTable-module__a___6WaJD",blockquote:"PropsTable-module__blockquote___2loIo",code:"PropsTable-module__code___1vedU",dd:"PropsTable-module__dd___3pYcW",dl:"PropsTable-module__dl___397p5",dt:"PropsTable-module__dt___1-GVs",h1:"PropsTable-module__h1___1OAAp",h2:"PropsTable-module__h2___2iZ6i",h3:"PropsTable-module__h3___3N0fw",h4:"PropsTable-module__h4___214vu",h5:"PropsTable-module__h5___1ajw8",h6:"PropsTable-module__h6___19W7i","icon-link":"PropsTable-module__icon-link___HUOC7",anchor:"PropsTable-module__anchor___1UTVD",hr:"PropsTable-module__hr___15B3j",img:"PropsTable-module__img___1rEq-",input:"PropsTable-module__input___1WHRX",kbd:"PropsTable-module__kbd___2DvPC",li:"PropsTable-module__li___1T8DQ",p:"PropsTable-module__p___3ssgC",ol:"PropsTable-module__ol___2tCva",ul:"PropsTable-module__ul___DlvOz",td:"PropsTable-module__td___3svU1",pre:"PropsTable-module__pre___3qXsS",strong:"PropsTable-module__strong___2DSlR",table:"PropsTable-module__table___1sV8g",th:"PropsTable-module__th___RQkAz",tr:"PropsTable-module__tr___1dras",icon:"PropsTable-module__icon___1fv-c",required:"PropsTable-module__required___1b3oJ","props-tr":"PropsTable-module__props-tr___1c88t","props-td":"PropsTable-module__props-td___dEhbY"}},863:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=u(a(0)),l=u(a(3)),s=u(a(18));function u(e){return e&&e.__esModule?e:{default:e}}function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var d={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"},m=["animateOpacity","animationStateClasses","applyInlineTransitions","children","contentClassName","delay","duration","easing","height","onAnimationEnd","onAnimationStart"];function f(e){for(var t=arguments.length,a=Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];if(!a.length)return e;for(var o={},i=Object.keys(e),r=0;r<i.length;r++){var l=i[r];-1===a.indexOf(l)&&(o[l]=e[l])}return o}function _(e){e.forEach((function(e){return cancelAnimationFrame(e)}))}function p(e){return!isNaN(parseFloat(e))&&isFinite(e)}function h(e){return"string"==typeof e&&e.search("%")===e.length-1&&p(e.substr(0,e.length-1))}function g(e,t){e&&"function"==typeof e&&e(t)}var b=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));a.animationFrameIDs=[];var n="auto",i="visible";p(e.height)?(n=e.height<0||"0"===e.height?0:e.height,i="hidden"):h(e.height)&&(n="0%"===e.height?0:e.height,i="hidden"),a.animationStateClasses=o({},d,e.animationStateClasses);var r=a.getStaticStateClasses(n);return a.state={animationStateClasses:r,height:n,overflow:i,shouldUseTransitions:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this.state.height;this.contentElement&&this.contentElement.style&&this.hideContent(e)}},{key:"componentDidUpdate",value:function(e,t){var a,n,o=this,i=this.props,r=i.delay,l=i.duration,u=i.height,d=i.onAnimationEnd,m=i.onAnimationStart;if(this.contentElement&&u!==e.height){var f;this.showContent(t.height),this.contentElement.style.overflow="hidden";var b=this.contentElement.offsetHeight;this.contentElement.style.overflow="";var y=l+r,v=null,T={height:null,overflow:"hidden"},E="auto"===t.height;p(u)?(v=u<0||"0"===u?0:u,T.height=v):h(u)?(v="0%"===u?0:u,T.height=v):(v=b,T.height="auto",T.overflow=null),E&&(T.height=v,v=b);var S=(0,s.default)((c(f={},this.animationStateClasses.animating,!0),c(f,this.animationStateClasses.animatingUp,"auto"===e.height||u<e.height),c(f,this.animationStateClasses.animatingDown,"auto"===u||u>e.height),c(f,this.animationStateClasses.animatingToHeightZero,0===T.height),c(f,this.animationStateClasses.animatingToHeightAuto,"auto"===T.height),c(f,this.animationStateClasses.animatingToHeightSpecific,T.height>0),f)),C=this.getStaticStateClasses(T.height);this.setState({animationStateClasses:S,height:v,overflow:"hidden",shouldUseTransitions:!E}),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),E?(T.shouldUseTransitions=!0,_(this.animationFrameIDs),this.animationFrameIDs=(a=function(){o.setState(T),g(m,{newHeight:T.height})},(n=[])[0]=requestAnimationFrame((function(){n[1]=requestAnimationFrame((function(){a()}))})),n),this.animationClassesTimeoutID=setTimeout((function(){o.setState({animationStateClasses:C,shouldUseTransitions:!1}),o.hideContent(T.height),g(d,{newHeight:T.height})}),y)):(g(m,{newHeight:v}),this.timeoutID=setTimeout((function(){T.animationStateClasses=C,T.shouldUseTransitions=!1,o.setState(T),"auto"!==u&&o.hideContent(v),g(d,{newHeight:v})}),y))}}},{key:"componentWillUnmount",value:function(){_(this.animationFrameIDs),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),this.timeoutID=null,this.animationClassesTimeoutID=null,this.animationStateClasses=null}},{key:"showContent",value:function(e){0===e&&(this.contentElement.style.display="")}},{key:"hideContent",value:function(e){0===e&&(this.contentElement.style.display="none")}},{key:"getStaticStateClasses",value:function(e){var t;return(0,s.default)((c(t={},this.animationStateClasses.static,!0),c(t,this.animationStateClasses.staticHeightZero,0===e),c(t,this.animationStateClasses.staticHeightSpecific,e>0),c(t,this.animationStateClasses.staticHeightAuto,"auto"===e),t))}},{key:"render",value:function(){var e,t=this,a=this.props,n=a.animateOpacity,i=a.applyInlineTransitions,l=a.children,u=a.className,d=a.contentClassName,_=a.duration,p=a.easing,h=a.delay,g=a.style,b=this.state,y=b.height,v=b.overflow,T=b.animationStateClasses,E=b.shouldUseTransitions,S=o({},g,{height:y,overflow:v||g.overflow});E&&i&&(S.transition="height "+_+"ms "+p+" "+h+"ms",g.transition&&(S.transition=g.transition+", "+S.transition),S.WebkitTransition=S.transition);var C={};n&&(C.transition="opacity "+_+"ms "+p+" "+h+"ms",C.WebkitTransition=C.transition,0===y&&(C.opacity=0));var P=(0,s.default)((c(e={},T,!0),c(e,u,u),e));return r.default.createElement("div",o({},f.apply(void 0,[this.props].concat(m)),{"aria-hidden":0===y,className:P,style:S}),r.default.createElement("div",{className:d,style:C,ref:function(e){return t.contentElement=e}},l))}}]),t}(r.default.Component);b.propTypes={animateOpacity:l.default.bool,animationStateClasses:l.default.object,applyInlineTransitions:l.default.bool,children:l.default.any.isRequired,className:l.default.string,contentClassName:l.default.string,duration:l.default.number,delay:l.default.number,easing:l.default.string,height:function(e,t,a){var o=e[t];return"number"==typeof o&&o>=0||h(o)||"auto"===o?null:new TypeError('value "'+o+'" of type "'+("undefined"==typeof o?"undefined":n(o))+'" is invalid type for '+t+" in "+a+'. It needs to be a positive number, string "auto" or percentage string (e.g. "15%").')},onAnimationEnd:l.default.func,onAnimationStart:l.default.func,style:l.default.object},b.defaultProps={animateOpacity:!1,animationStateClasses:d,applyInlineTransitions:!0,duration:250,delay:0,easing:"ease",style:{}},t.default=b}}]);
//# sourceMappingURL=160-5f206e007749a6467394.js.map