(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1006:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var l=a(0),r=a.n(l),n=a(856),o=a.n(n),u=function(e){var t=e.url;return r.a.createElement(o.a,{src:"https://github.com/cerner/terra-core/tree/master/packages/terra-action-footer",name:"terra-action-footer",version:"2.44.0",url:t})}},1007:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(a(0)),r=u(a(5)),n=u(a(3)),o=u(a(1570));function u(e){return e&&e.__esModule?e:{default:e}}var d=r.default.bind(o.default),_={children:n.default.node.isRequired},c=function(e){var t=e.children;return l.default.createElement("div",{className:d("content-wrapper")},t)};c.propTypes=_;var s=c;t.default=s},1570:function(e,t,a){e.exports={"content-wrapper":"ExampleTemplate__content-wrapper___4Jde5"}},855:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(a(0)),r=u(a(3)),n=u(a(5)),o=u(a(859));function u(e){return e&&e.__esModule?e:{default:e}}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function c(e,t,a){return t&&_(e.prototype,t),a&&_(e,a),e}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,l=f(e);if(t){var r=f(this).constructor;a=Reflect.construct(l,arguments,r)}else a=l.apply(this,arguments);return p(this,a)}}function p(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?m(e):t}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=n.default.bind(o.default),g={example:r.default.element,exampleSrc:r.default.element,title:r.default.string,description:r.default.node,isExpanded:r.default.bool},h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(a,e);var t=i(a);function a(e){var l;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(l=t.call(this,e)).state={isExpanded:e.isExpanded,isBackgroundTransparent:!1},l.handleBgToggle=l.handleBgToggle.bind(m(l)),l.handleCodeToggle=l.handleCodeToggle.bind(m(l)),l}return c(a,null,[{key:"renderHeader",value:function(e){return e?l.default.createElement("div",{className:b("header")},l.default.createElement("h2",{className:b("title")},e)):null}},{key:"renderDescription",value:function(e){return e?l.default.createElement("div",{className:b("description")},e):null}}]),c(a,[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,t=e.example,r=e.exampleSrc,n=e.title,o=e.description,u=this.state,d=u.isExpanded,_=u.isBackgroundTransparent;return l.default.createElement("div",{className:b("template")},a.renderHeader(n),l.default.createElement("div",{className:b("content",{"dynamic-content":_})},a.renderDescription(o),t),r&&l.default.createElement("div",{className:b("footer")},l.default.createElement("div",{className:b("button-container")},l.default.createElement("button",{type:"button",className:b("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),l.default.createElement("button",{type:"button",className:b("code-toggle"),onClick:this.handleCodeToggle},l.default.createElement("span",{className:b("chevron-left")}),l.default.createElement("span",null,"Code"),l.default.createElement("span",{className:b("chevron-right")}))),d&&l.default.createElement("div",{className:b("code")},r)))}}]),a}(l.default.Component);h.propTypes=g,h.defaultProps={isExpanded:!1};var v=h;t.default=v},856:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(a(0)),r=u(a(3)),n=u(a(5)),o=u(a(857));function u(e){return e&&e.__esModule?e:{default:e}}var d=n.default.bind(o.default),_={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},c=function(e){var t=e.src,a=e.name,r=e.url,n=e.version,o=l.default.createElement("a",{className:d("badge"),href:r||"https://www.npmjs.org/package/".concat(a,"/v/").concat(n)},l.default.createElement("span",{className:d("badge-name")},r?"package":"npm"),l.default.createElement("span",{className:d("badge-version")},"v".concat(n))),u=t?l.default.createElement("a",{className:d("badge"),href:t},l.default.createElement("span",{className:d("badge-name")},"github"),l.default.createElement("span",{className:d("badge-version")},"source")):void 0;return l.default.createElement("div",{className:d("badge-container")},o,u)};c.propTypes=_;var s=c;t.default=s},857:function(e,t,a){e.exports={badge:"Badges-module__badge___3m7y2","badge-container":"Badges-module__badge-container___1YxI5","badge-name":"Badges-module__badge-name___BQ3u4","badge-version":"Badges-module__badge-version___3OgwS"}},858:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(a(0)),r=u(a(3)),n=u(a(5)),o=u(a(860));function u(e){return e&&e.__esModule?e:{default:e}}var d=n.default.bind(o.default),_={rows:r.default.arrayOf(r.default.shape({name:r.default.string,type:r.default.func,required:r.default.bool,defaultValue:r.default.string,description:r.default.func}))},c=function(e){var t=e.rows;return l.default.createElement("table",{className:d("table")},l.default.createElement("thead",null,l.default.createElement("tr",{className:d("tr")},l.default.createElement("th",{className:d("th")},"Prop Name"),l.default.createElement("th",{className:d("th")},"Type"),l.default.createElement("th",{className:d("th")},"Is Required"),l.default.createElement("th",{className:d("th")},"Default Value"),l.default.createElement("th",{className:d("th")},"Description"))),l.default.createElement("tbody",null,t.map((function(e){return l.default.createElement("tr",{className:d(["tr","props-tr"]),key:e.name},l.default.createElement("td",{className:d(["td","strong","props-td"])},e.name),l.default.createElement("td",{className:d(["td","props-td"])},e.type()),l.default.createElement("td",{className:d(["td","props-td",e.required?["required"]:[]])},e.required?"required":"optional"),l.default.createElement("td",{className:d(["td","props-td"])},e.defaultValue),l.default.createElement("td",{className:d(["td","props-td"])},e.description()))}))))};c.propTypes=_;var s=c;t.default=s},859:function(e,t,a){e.exports={template:"ExampleTemplate-module__template___2Cn_e",header:"ExampleTemplate-module__header___1Uk65",content:"ExampleTemplate-module__content___2BfpO",description:"ExampleTemplate-module__description___17dwL",footer:"ExampleTemplate-module__footer___2qb8M","button-container":"ExampleTemplate-module__button-container___305lx",code:"ExampleTemplate-module__code____AmLF","bg-toggle":"ExampleTemplate-module__bg-toggle___3RP_x","code-toggle":"ExampleTemplate-module__code-toggle___25ONK","chevron-left":"ExampleTemplate-module__chevron-left___3vfkd","chevron-right":"ExampleTemplate-module__chevron-right___YOdVB",title:"ExampleTemplate-module__title___5hduh","dynamic-content":"ExampleTemplate-module__dynamic-content___1b8Fh"}},860:function(e,t,a){e.exports={a:"PropsTable-module__a___6WaJD",blockquote:"PropsTable-module__blockquote___2loIo",code:"PropsTable-module__code___1vedU",dd:"PropsTable-module__dd___3pYcW",dl:"PropsTable-module__dl___397p5",dt:"PropsTable-module__dt___1-GVs",h1:"PropsTable-module__h1___1OAAp",h2:"PropsTable-module__h2___2iZ6i",h3:"PropsTable-module__h3___3N0fw",h4:"PropsTable-module__h4___214vu",h5:"PropsTable-module__h5___1ajw8",h6:"PropsTable-module__h6___19W7i","icon-link":"PropsTable-module__icon-link___HUOC7",anchor:"PropsTable-module__anchor___1UTVD",hr:"PropsTable-module__hr___15B3j",img:"PropsTable-module__img___1rEq-",input:"PropsTable-module__input___1WHRX",kbd:"PropsTable-module__kbd___2DvPC",li:"PropsTable-module__li___1T8DQ",p:"PropsTable-module__p___3ssgC",ol:"PropsTable-module__ol___2tCva",ul:"PropsTable-module__ul___DlvOz",td:"PropsTable-module__td___3svU1",pre:"PropsTable-module__pre___3qXsS",strong:"PropsTable-module__strong___2DSlR",table:"PropsTable-module__table___1sV8g",th:"PropsTable-module__th___RQkAz",tr:"PropsTable-module__tr___1dras",icon:"PropsTable-module__icon___1fv-c",required:"PropsTable-module__required___1b3oJ","props-tr":"PropsTable-module__props-tr___1c88t","props-td":"PropsTable-module__props-td___dEhbY"}}}]);
//# sourceMappingURL=15-15045882494f70cad9f6.js.map