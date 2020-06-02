(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{2148:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var l=r?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(81)),l=i(n(868)),c=i(n(5)),u=i(n(904));function s(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function i(e){return e&&e.__esModule?e:{default:e}}var d=c.default.bind(u.default),p=function(){return r.default.createElement(o.default,null,r.default.createElement(o.Subsection,{key:"static-subsection",title:"Static Subsection"},r.default.createElement(o.Item,{key:"123"},r.default.createElement(l.default,{title:"Item 0-0",className:d("placeholder")})),r.default.createElement(o.Item,{key:"124"},r.default.createElement(l.default,{title:"Item 0-1",className:d("placeholder")})),r.default.createElement(o.Item,{key:"125"},r.default.createElement(l.default,{title:"Item 0-2",className:d("placeholder")}))),r.default.createElement(o.Subsection,{key:"collapsible-subsection",isCollapsible:!0,title:"Collapsible Subsection"},r.default.createElement(o.Item,{key:"223"},r.default.createElement(l.default,{title:"Item 1-0",className:d("placeholder")})),r.default.createElement(o.Item,{key:"224"},r.default.createElement(l.default,{title:"Item 1-1",className:d("placeholder")})),r.default.createElement(o.Item,{key:"225"},r.default.createElement(l.default,{title:"Item 1-2",className:d("placeholder")}))),r.default.createElement(o.Subsection,{key:"collapsible-subsection",isCollapsed:!0,isCollapsible:!0,title:"Collapsed Subsection"},r.default.createElement(o.Item,{key:"323"},r.default.createElement(l.default,{title:"Item 2-0",className:d("placeholder")})),r.default.createElement(o.Item,{key:"324"},r.default.createElement(l.default,{title:"Item 2-1",className:d("placeholder")})),r.default.createElement(o.Item,{key:"325"},r.default.createElement(l.default,{title:"Item 2-2",className:d("placeholder")}))))};t.default=p},2940:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return E}));var a=n(0),r=n.n(a),o=n(282),l=n(885),c=n(2148),u=n.n(c);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d={};function p(e){var t=e.components,n=i(e,["components"]);return Object(o.mdx)("wrapper",s({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",s({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport List, { Item, Subsection } from \'terra-list/lib/index\';\nimport Placeholder from \'terra-doc-template/lib/Placeholder\';\nimport classNames from \'classnames/bind\';\nimport styles from \'./ListDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst ListSubsectionExample = () => (\n  <List>\n    <Subsection\n      key="static-subsection"\n      title="Static Subsection"\n    >\n      <Item key="123">\n        <Placeholder title="Item 0-0" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="124">\n        <Placeholder title="Item 0-1" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="125">\n        <Placeholder title="Item 0-2" className={cx(\'placeholder\')} />\n      </Item>\n    </Subsection>\n    <Subsection\n      key="collapsible-subsection"\n      isCollapsible\n      title="Collapsible Subsection"\n    >\n      <Item key="223">\n        <Placeholder title="Item 1-0" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="224">\n        <Placeholder title="Item 1-1" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="225">\n        <Placeholder title="Item 1-2" className={cx(\'placeholder\')} />\n      </Item>\n    </Subsection>\n    <Subsection\n      key="collapsible-subsection"\n      isCollapsed\n      isCollapsible\n      title="Collapsed Subsection"\n    >\n      <Item key="323">\n        <Placeholder title="Item 2-0" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="324">\n        <Placeholder title="Item 2-1" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="325">\n        <Placeholder title="Item 2-2" className={cx(\'placeholder\')} />\n      </Item>\n    </Subsection>\n  </List>\n);\n\nexport default ListSubsectionExample;\n\n')))}p.isMDXComponent=!0;var m=n(855),f=n.n(m),_=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.a.createElement(f.a,{title:t||"List Subsection",description:n,example:r.a.createElement(u.a,null),exampleSrc:r.a.createElement(p,null),isExpanded:a})},b=n(858),y=n.n(b);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var x=function(){return Object(o.mdx)(y.a,{rows:[{name:"children",type:function(){var e={};function t(t){var n=t.components,a=v(t,["components"]);return Object(o.mdx)("wrapper",h({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"[]",description:function(){var e={};function t(t){var n=t.components,a=v(t,["components"]);return Object(o.mdx)("wrapper",h({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The children list items passed to the component."))}return t.isMDXComponent=!0,t({})}},{name:"isCollapsed",type:function(){var e={};function t(t){var n=t.components,a=v(t,["components"]);return Object(o.mdx)("wrapper",h({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,a=v(t,["components"]);return Object(o.mdx)("wrapper",h({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether or not the subsection is collapsed."))}return t.isMDXComponent=!0,t({})}},{name:"isCollapsible",type:function(){var e={};function t(t){var n=t.components,a=v(t,["components"]);return Object(o.mdx)("wrapper",h({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,a=v(t,["components"]);return Object(o.mdx)("wrapper",h({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether or not the subsection can be collapsed."))}return t.isMDXComponent=!0,t({})}},{name:"level",type:function(){var e={};function t(t){var n=t.components,a=v(t,["components"]);return Object(o.mdx)("wrapper",h({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"enum"),Object(o.mdx)("pre",null,Object(o.mdx)("code",h({parentName:"pre"},{className:"language-json"}),'[\n "2",\n "3",\n "4",\n "5",\n "6"\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"2",description:function(){var e={};function t(t){var n=t.components,a=v(t,["components"]);return Object(o.mdx)("wrapper",h({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Optionally sets the heading level. One of ",Object(o.mdx)("inlineCode",{parentName:"p"},"2"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"3"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"4"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"5"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"6"),"."))}return t.isMDXComponent=!0,t({})}},{name:"metaData",type:function(){var e={};function t(t){var n=t.components,a=v(t,["components"]);return Object(o.mdx)("wrapper",h({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"object"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=v(t,["components"]);return Object(o.mdx)("wrapper",h({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The associated metaData to be provided in the onSelect callback."))}return t.isMDXComponent=!0,t({})}},{name:"onSelect",type:function(){var e={};function t(t){var n=t.components,a=v(t,["components"]);return Object(o.mdx)("wrapper",h({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=v(t,["components"]);return Object(o.mdx)("wrapper",h({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Function callback for when the appropriate click or key action is performed.\nCallback contains the javascript evnt and prop metadata, e.g. onSelect(event, metaData)"))}return t.isMDXComponent=!0,t({})}},{name:"refCallback",type:function(){var e={};function t(t){var n=t.components,a=v(t,["components"]);return Object(o.mdx)("wrapper",h({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=v(t,["components"]);return Object(o.mdx)("wrapper",h({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Function callback passthrough for the ref of the section li."))}return t.isMDXComponent=!0,t({})}},{name:"title",type:function(){var e={};function t(t){var n=t.components,a=v(t,["components"]);return Object(o.mdx)("wrapper",h({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=v(t,["components"]);return Object(o.mdx)("wrapper",h({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Title text to be placed within the subsection header."))}return t.isMDXComponent=!0,t({})}}]})};function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function O(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var j={};function E(e){var t=e.components,n=O(e,["components"]);return Object(o.mdx)("wrapper",g({},j,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)(l.a,{mdxType:"Badge"}),Object(o.mdx)("h1",{id:"list-subsection"},"List Subsection"),Object(o.mdx)("p",null,"The list subsection component creates a subsection header and layouts it out with the passed child list items. The subsection provides the ability to display and collapse a subsection within a logical group. The list subsection will render as a flat list."),Object(o.mdx)("h2",{id:"usage"},"Usage"),Object(o.mdx)("pre",null,Object(o.mdx)("code",g({parentName:"pre"},{className:"language-jsx"}),"import List, { Item, Subsection } from 'terra-list/lib/List';\\\n")),Object(o.mdx)("h2",{id:"examples"},"Examples"),Object(o.mdx)(_,{mdxType:"ListSubsectionExample"}),Object(o.mdx)("h2",{id:"list-subsection-props"},"List Subsection Props"),Object(o.mdx)(x,{mdxType:"ListSubsectionPropsTable"}))}E.isMDXComponent=!0},855:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(0)),r=c(n(3)),o=c(n(5)),l=c(n(859));function c(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=_(e);if(t){var r=_(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return m(this,n)}}function m(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=o.default.bind(l.default),y={example:r.default.element,exampleSrc:r.default.element,title:r.default.string,description:r.default.node,isExpanded:r.default.bool},h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(n,e);var t=p(n);function n(e){var a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(a=t.call(this,e)).state={isExpanded:e.isExpanded,isBackgroundTransparent:!1},a.handleBgToggle=a.handleBgToggle.bind(f(a)),a.handleCodeToggle=a.handleCodeToggle.bind(f(a)),a}return i(n,null,[{key:"renderHeader",value:function(e){return e?a.default.createElement("div",{className:b("header")},a.default.createElement("h2",{className:b("title")},e)):null}},{key:"renderDescription",value:function(e){return e?a.default.createElement("div",{className:b("description")},e):null}}]),i(n,[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,t=e.example,r=e.exampleSrc,o=e.title,l=e.description,c=this.state,u=c.isExpanded,s=c.isBackgroundTransparent;return a.default.createElement("div",{className:b("template")},n.renderHeader(o),a.default.createElement("div",{className:b("content",{"dynamic-content":s})},n.renderDescription(l),t),r&&a.default.createElement("div",{className:b("footer")},a.default.createElement("div",{className:b("button-container")},a.default.createElement("button",{type:"button",className:b("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),a.default.createElement("button",{type:"button",className:b("code-toggle"),onClick:this.handleCodeToggle},a.default.createElement("span",{className:b("chevron-left")}),a.default.createElement("span",null,"Code"),a.default.createElement("span",{className:b("chevron-right")}))),u&&a.default.createElement("div",{className:b("code")},r)))}}]),n}(a.default.Component);h.propTypes=y,h.defaultProps={isExpanded:!1};var v=h;t.default=v},856:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(0)),r=c(n(3)),o=c(n(5)),l=c(n(857));function c(e){return e&&e.__esModule?e:{default:e}}var u=o.default.bind(l.default),s={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},i=function(e){var t=e.src,n=e.name,r=e.url,o=e.version,l=a.default.createElement("a",{className:u("badge"),href:r||"https://www.npmjs.org/package/".concat(n,"/v/").concat(o)},a.default.createElement("span",{className:u("badge-name")},r?"package":"npm"),a.default.createElement("span",{className:u("badge-version")},"v".concat(o))),c=t?a.default.createElement("a",{className:u("badge"),href:t},a.default.createElement("span",{className:u("badge-name")},"github"),a.default.createElement("span",{className:u("badge-version")},"source")):void 0;return a.default.createElement("div",{className:u("badge-container")},l,c)};i.propTypes=s;var d=i;t.default=d},857:function(e,t,n){e.exports={badge:"Badges-module__badge___3m7y2","badge-container":"Badges-module__badge-container___1YxI5","badge-name":"Badges-module__badge-name___BQ3u4","badge-version":"Badges-module__badge-version___3OgwS"}},858:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(0)),r=c(n(3)),o=c(n(5)),l=c(n(860));function c(e){return e&&e.__esModule?e:{default:e}}var u=o.default.bind(l.default),s={rows:r.default.arrayOf(r.default.shape({name:r.default.string,type:r.default.func,required:r.default.bool,defaultValue:r.default.string,description:r.default.func}))},i=function(e){var t=e.rows;return a.default.createElement("table",{className:u("table")},a.default.createElement("thead",null,a.default.createElement("tr",{className:u("tr")},a.default.createElement("th",{className:u("th")},"Prop Name"),a.default.createElement("th",{className:u("th")},"Type"),a.default.createElement("th",{className:u("th")},"Is Required"),a.default.createElement("th",{className:u("th")},"Default Value"),a.default.createElement("th",{className:u("th")},"Description"))),a.default.createElement("tbody",null,t.map((function(e){return a.default.createElement("tr",{className:u(["tr","props-tr"]),key:e.name},a.default.createElement("td",{className:u(["td","strong","props-td"])},e.name),a.default.createElement("td",{className:u(["td","props-td"])},e.type()),a.default.createElement("td",{className:u(["td","props-td",e.required?["required"]:[]])},e.required?"required":"optional"),a.default.createElement("td",{className:u(["td","props-td"])},e.defaultValue),a.default.createElement("td",{className:u(["td","props-td"])},e.description()))}))))};i.propTypes=s;var d=i;t.default=d},859:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___2Cn_e",header:"ExampleTemplate-module__header___1Uk65",content:"ExampleTemplate-module__content___2BfpO",description:"ExampleTemplate-module__description___17dwL",footer:"ExampleTemplate-module__footer___2qb8M","button-container":"ExampleTemplate-module__button-container___305lx",code:"ExampleTemplate-module__code____AmLF","bg-toggle":"ExampleTemplate-module__bg-toggle___3RP_x","code-toggle":"ExampleTemplate-module__code-toggle___25ONK","chevron-left":"ExampleTemplate-module__chevron-left___3vfkd","chevron-right":"ExampleTemplate-module__chevron-right___YOdVB",title:"ExampleTemplate-module__title___5hduh","dynamic-content":"ExampleTemplate-module__dynamic-content___1b8Fh"}},860:function(e,t,n){e.exports={a:"PropsTable-module__a___6WaJD",blockquote:"PropsTable-module__blockquote___2loIo",code:"PropsTable-module__code___1vedU",dd:"PropsTable-module__dd___3pYcW",dl:"PropsTable-module__dl___397p5",dt:"PropsTable-module__dt___1-GVs",h1:"PropsTable-module__h1___1OAAp",h2:"PropsTable-module__h2___2iZ6i",h3:"PropsTable-module__h3___3N0fw",h4:"PropsTable-module__h4___214vu",h5:"PropsTable-module__h5___1ajw8",h6:"PropsTable-module__h6___19W7i","icon-link":"PropsTable-module__icon-link___HUOC7",anchor:"PropsTable-module__anchor___1UTVD",hr:"PropsTable-module__hr___15B3j",img:"PropsTable-module__img___1rEq-",input:"PropsTable-module__input___1WHRX",kbd:"PropsTable-module__kbd___2DvPC",li:"PropsTable-module__li___1T8DQ",p:"PropsTable-module__p___3ssgC",ol:"PropsTable-module__ol___2tCva",ul:"PropsTable-module__ul___DlvOz",td:"PropsTable-module__td___3svU1",pre:"PropsTable-module__pre___3qXsS",strong:"PropsTable-module__strong___2DSlR",table:"PropsTable-module__table___1sV8g",th:"PropsTable-module__th___RQkAz",tr:"PropsTable-module__tr___1dras",icon:"PropsTable-module__icon___1fv-c",required:"PropsTable-module__required___1b3oJ","props-tr":"PropsTable-module__props-tr___1c88t","props-td":"PropsTable-module__props-td___dEhbY"}},868:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(0)),r=c(n(3)),o=c(n(5)),l=c(n(876));function c(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.default.bind(l.default),d={variant:r.default.oneOf(["light","dark"]),title:r.default.string},p=function(e){var t=e.variant,n=e.title,r=s(e,["variant","title"]),o=i(["placeholder",r.className]),l=i(["inner","is-".concat(t)]);return a.default.createElement("div",u({},r,{className:o}),a.default.createElement("div",{className:l},a.default.createElement("h2",null,n)))};p.propTypes=d,p.defaultProps={variant:"dark",title:""};var m=p;t.default=m},876:function(e,t,n){e.exports={placeholder:"Placeholder-module__placeholder___tuGWe",inner:"Placeholder-module__inner___1irlA","is-light":"Placeholder-module__is-light___3LkLU","is-dark":"Placeholder-module__is-dark___5pLAg"}},885:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),r=n.n(a),o=n(856),l=n.n(o),c=function(e){var t=e.url;return r.a.createElement(l.a,{src:"https://github.com/cerner/terra-core/tree/master/packages/terra-list",name:"terra-list",version:"4.31.0",url:t})}},904:function(e,t,n){e.exports={placeholder:"ListDocCommon-module__placeholder___cpXI4"}}}]);
//# sourceMappingURL=101-8ba7dce869f90da608f0.js.map