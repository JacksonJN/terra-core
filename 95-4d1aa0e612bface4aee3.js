(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{2299:function(e,t,n){"use strict";n.r(t),t.default='# Test Component\nDisplays two strings of text separated by a comma\n\n## Usage\nUse with: `<TestComponent text="text" otherText="more text" />`'},2300:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(0)),o=r(n(2301));function r(e){return e&&e.__esModule?e:{default:e}}var l=function(){return a.default.createElement(o.default,{text:"Hey",otherText:"Seeya"})};t.default=l},2301:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(0)),o=r(n(3));function r(e){return e&&e.__esModule?e:{default:e}}var l={text:o.default.string,otherText:o.default.string},c=function(e){return a.default.createElement("p",null,e.text,","," ",e.otherText)};c.propTypes=l,c.defaultProps={text:"Hi!",otherText:"Bye."};var u=c;t.default=u},2302:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,o=(a=n(0))&&a.__esModule?a:{default:a};var r=function(){return o.default.createElement("table",null,o.default.createElement("thead",null,o.default.createElement("tr",null,o.default.createElement("th",null,"Prop Name"),o.default.createElement("th",null,"Type"),o.default.createElement("th",null,"Is Required"),o.default.createElement("th",null,"Default Value"),o.default.createElement("th",null,"Description"))),o.default.createElement("tbody",null,o.default.createElement("tr",null,o.default.createElement("td",null,"text"),o.default.createElement("td",null,"string"),o.default.createElement("td",null,"optional"),o.default.createElement("td",null,"null"),o.default.createElement("td",null,o.default.createElement("p",null,"A text string to be rendered in the component.")))))};t.default=r},2303:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport TestComponent from './TestComponent';\n\nconst TestComponentExample = () => (\n  <TestComponent text=\"Hey\" otherText=\"Seeya\" />\n);\n\nexport default TestComponentExample;\n"},2304:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\n\nconst propTypes = {\n  /**\n   * A string of text to be displayed first\n   */\n  text: PropTypes.string,\n  /**\n   * A string of text to be displayed second\n  */\n  otherText: PropTypes.string,\n};\n\nconst defaultProps = {\n  text: 'Hi!',\n  otherText: 'Bye.',\n};\n\nconst TestComponent = props => (\n  <p>\n    {props.text}\n,\n    {' '}\n    {props.otherText}\n  </p>\n);\n\nTestComponent.propTypes = propTypes;\nTestComponent.defaultProps = defaultProps;\n\nexport default TestComponent;\n"},2499:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(0)),o=i(n(973)),r=i(n(2299)),l=n(999),c=i(n(2300)),u=i(n(2302)),d=i(n(2303)),s=i(n(2304));function i(e){return e&&e.__esModule?e:{default:e}}var p=function(){var e=[{componentSrc:s.default,componentName:"Test Component"},{componentSrc:s.default,componentName:"Test Component (Again)"}],t=a.default.createElement(c.default,null),n=[{title:"Test Example 1",description:"Describing the test",example:t,source:d.default},{title:"Test Example 2",description:"Describing the test mk. 2",example:t,source:d.default}];return a.default.createElement("div",{id:"DocTemplateContainer"},a.default.createElement(o.default,{packageName:l.name,packageVersion:l.version,readme:r.default,srcPath:"https://github.com/cerner/terra-core/tree/master/packages/terra-doc-template",propsTables:e,examples:n},a.default.createElement(u.default,null)))};t.default=p},940:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(0)),o=l(n(5)),r=l(n(953));function l(e){return e&&e.__esModule?e:{default:e}}var c=o.default.bind(r.default),u=function(e){var t=e.packageName,n=e.packageUrl,o=e.packageVersion;return o?a.default.createElement("div",{className:c("badge-container")},a.default.createElement("a",{className:c("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(o)},a.default.createElement("span",{className:c("badge-name")},n?"package":"npm"),a.default.createElement("span",{className:c("badge-version")},"v".concat(o)))):a.default.createElement("a",{href:"https://www.npmjs.org/package/".concat(t)},a.default.createElement("img",{src:"https://badgen.net/npm/v/".concat(t),alt:"NPM version"}))};t.default=u},953:function(e,t,n){e.exports={badge:"NpmBadge-module__badge___1Cu7Z","badge-container":"NpmBadge-module__badge-container___2zgQi","badge-name":"NpmBadge-module__badge-name___17OzL","badge-version":"NpmBadge-module__badge-version___2Vkei"}},973:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(0)),o=i(n(3)),r=i(n(992)),l=i(n(880)),c=i(n(5)),u=i(n(940)),d=i(n(977)),s=i(n(980));function i(e){return e&&e.__esModule?e:{default:e}}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f=c.default.bind(s.default),g={children:o.default.node,packageName:o.default.string,packageUrl:o.default.string,packageVersion:o.default.string,readme:o.default.string,srcPath:o.default.string,examples:o.default.arrayOf(o.default.shape({title:o.default.string,description:o.default.node,example:o.default.element,source:o.default.string})),propsTables:o.default.arrayOf(o.default.shape({componentSrc:o.default.string,componentName:o.default.string,componentProps:o.default.string,propsResolution:o.default.string}))},_=function(e){var t,n=e.packageName,o=e.packageVersion,c=e.packageUrl,s=e.readme,i=e.srcPath,g=e.examples,_=e.propsTables,h=e.children,b=m(e,["packageName","packageVersion","packageUrl","readme","srcPath","examples","propsTables","children"]),y=g;_&&(t=_);for(var v=0,x=0;x<y.length;x+=1)y[x].id=v,v+=1;if(t)for(var E=0;E<t.length;E+=1)t[E].id=v,v+=1;var T,k=f(["doc-template",b.className]);if(y.length>0){var w=y.length>1?"Examples":"Example";T=a.default.createElement("h1",{className:f("examples-header")},w)}var j=a.default.createElement(u.default,{packageName:n,packageUrl:c,packageVersion:o});return a.default.createElement("div",p({},b,{className:k}),a.default.createElement("div",{className:f("doc-card")},n&&j,s&&a.default.createElement(l.default,{src:s}),i&&a.default.createElement("a",{href:i},"View component source code")),T,y.map((function(e){return a.default.createElement(d.default,{title:e.title,example:e.example,exampleSrc:e.source,description:e.description,key:e.id})})),a.default.createElement("div",{className:f("doc-card")},_[0]&&_[0].componentProps?t.map((function(e){return a.default.createElement("div",{className:f("props-table-markdown"),key:e.id},a.default.createElement("h2",null,e.componentName," Props"),a.default.createElement(l.default,{src:e.componentProps}))})):t.map((function(e){return a.default.createElement(r.default,{src:e.componentSrc,componentName:e.componentName,key:e.id,propsResolution:e.propsResolution})}))),h&&a.default.createElement("div",{className:f("doc-card")},h))};_.propTypes=g,_.defaultProps={packageName:"",packageUrl:"",packageVersion:"",readme:"",srcPath:"",examples:[],propsTables:[]};var h=_;t.default=h},977:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(n(0)),o=s(n(3)),r=s(n(1085)),l=s(n(1087)),c=s(n(5)),u=s(n(978)),d=s(n(979));function s(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function f(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=y(e);if(t){var o=y(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return h(this,n)}}function h(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}r.default.registerLanguage("jsx",l.default);var v=c.default.bind(u.default),x={example:o.default.element,exampleSrc:o.default.string,title:o.default.string,description:o.default.node,children:o.default.element},E={example:void 0,exampleSrc:void 0,title:void 0,description:void 0,children:void 0},T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(c,e);var t,n,o,l=_(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=l.call(this,e)).state={isExpanded:!1,isBackgroundTransparent:!1},t.handleBgToggle=t.handleBgToggle.bind(b(t)),t.handleCodeToggle=t.handleCodeToggle.bind(b(t)),t}return t=c,(n=[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.example,o=e.exampleSrc,l=e.children,c=e.description,u=m(e,["title","example","exampleSrc","children","description"]),s=this.state,i=s.isExpanded,f={};return s.isBackgroundTransparent&&(f={backgroundColor:"rgba(0, 0, 0, 0)"}),a.default.createElement("div",p({},u,{className:v("template",u.className)}),t&&a.default.createElement("div",{className:v("header")},a.default.createElement("h2",{className:v("title")},t)),a.default.createElement("div",{className:v("content"),style:f},c&&a.default.createElement("div",{className:v("description")},c),n,l),o&&a.default.createElement("div",{className:v("footer")},a.default.createElement("div",{className:v("button-container")},a.default.createElement("button",{type:"button",className:v("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),a.default.createElement("button",{type:"button",className:v("code-toggle"),onClick:this.handleCodeToggle},a.default.createElement("span",{className:v("chevron-left")}),a.default.createElement("span",null,"Code"),a.default.createElement("span",{className:v("chevron-right")}))),a.default.createElement("div",{className:v("code",{"is-expanded":i}),"aria-hidden":!i},i?a.default.createElement(r.default,{language:"jsx",style:d.default,customStyle:{margin:"0",borderRadius:"0"}},o):void 0)))}}])&&f(t.prototype,n),o&&f(t,o),c}(a.default.Component);T.propTypes=x,T.defaultProps=E;var k=T;t.default=k},978:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___MEAKz",header:"ExampleTemplate-module__header___13zqD",content:"ExampleTemplate-module__content___1Zdto",description:"ExampleTemplate-module__description___pnaPA",footer:"ExampleTemplate-module__footer___2jmFy","button-container":"ExampleTemplate-module__button-container___2JIjW",code:"ExampleTemplate-module__code___1u1x4","is-expanded":"ExampleTemplate-module__is-expanded___2fXEU","bg-toggle":"ExampleTemplate-module__bg-toggle___1rE0y","code-toggle":"ExampleTemplate-module__code-toggle___1B459","chevron-left":"ExampleTemplate-module__chevron-left___2hjZu","chevron-right":"ExampleTemplate-module__chevron-right___fnHrn",title:"ExampleTemplate-module__title___1qQfE"}},979:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a="#D8DEE9",o="#B2B2B2",r="#c5a5c5",l="#5a9bcf",c="#8dc891",u="#d7deea",d="#FAC863",s={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#fff",background:"rgb(40, 44, 52)",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"rgb(40, 44, 52)",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},"plain-text":{color:"#ffffff"},"attr-name":{color:r},comment:{color:o},"block-comment":{color:o},prolog:{color:o},doctype:{color:o},cdata:{color:o},property:{color:l},number:{color:l},"function-name":{color:l},constant:{color:l},symbol:{color:l},deleted:{color:l},boolean:{color:"#ff8b50"},tag:{color:"#fc929e"},string:{color:c},punctuation:{color:"#88C6BE"},selector:{color:a},char:{color:a},builtin:{color:a},inserted:{color:a},function:{color:"#79b6f2"},operator:{color:u},entity:{color:u,cursor:"help"},url:{color:u},".language-css .token.string":{color:u},".style .token.string":{color:u},variable:{color:u},"attr-value":{color:c},keyword:{color:r},"at-rule":{color:d},"class-name":{color:d},important:{fontWeight:400},bold:{fontWeight:700},italic:{fontStyle:"italic"},".namespace":{opacity:.7}};t.default=s},980:function(e,t,n){e.exports={"examples-header":"DocTemplate-module__examples-header___P3qFL","doc-template":"DocTemplate-module__doc-template___JSxEJ","doc-card":"DocTemplate-module__doc-card___2jEVe","props-table-markdown":"DocTemplate-module__props-table-markdown___1926W"}},999:function(e){e.exports=JSON.parse('{"name":"terra-doc-template","main":"lib/DocTemplate.js","version":"2.26.0","description":"Provides an adjustable template for documentation pages.","repository":{"type":"git","url":"git+https://github.com/cerner/terra-core.git"},"keywords":["Cerner","Terra","terra-doc-template","DocTemplate","UI"],"author":"Cerner Corporation","license":"Apache-2.0","bugs":{"url":"https://github.com/cerner/terra-core/issues"},"homepage":"https://github.com/cerner/terra-core#readme","peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5"},"dependencies":{"classnames":"^2.2.5","prop-types":"^15.5.8","react-syntax-highlighter":"^11.0.0","terra-markdown":"^2.39.0","terra-props-table":"^2.46.0"},"scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run jest && npm run wdio","jest":"jest --config ../../jestconfig.js","wdio-default":"cd ../.. && npx wdio ./packages/$npm_package_name/wdio.conf.js","wdio-lowlight":"cd ../.. && THEME=clinical-lowlight-theme npx wdio ./packages/$npm_package_name/clinical-lowlight-wdio.conf.js","wdio-fusion":"cd ../.. && THEME=orion-fusion-theme npx wdio ./packages/$npm_package_name/wdio.conf.js","wdio":"npm run wdio-default && npm run wdio-lowlight && npm run wdio-fusion"}}')}}]);
//# sourceMappingURL=95-4d1aa0e612bface4aee3.js.map