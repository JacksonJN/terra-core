(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{1559:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=[{title:"Section 0",key:"unique-key-0",childItems:[{title:"Subsection 0-0",key:"unique-key-0-0",childItems:[{title:"Item 0-0-0",key:"unique-key-0-0-0"},{title:"Item 0-0-1",key:"unique-key-0-0-1"},{title:"Item 0-0-2",key:"unique-key-0-0-2"}]},{title:"Subsection 0-1",key:"unique-key-0-1",childItems:[{title:"Item 0-1-0",key:"unique-key-0-1-0"},{title:"Item 0-1-1",key:"unique-key-0-1-1"},{title:"Item 0-1-2",key:"unique-key-0-1-2"}]}]},{title:"Section 1",key:"unique-key-1",childItems:[{title:"Subsection 1-0",key:"unique-key-1-0",childItems:[{title:"Item 1-0-0",key:"unique-key-1-0-0"},{title:"Item 1-0-1",key:"unique-key-1-0-1"},{title:"Item 1-0-2",key:"unique-key-1-0-2"}]},{title:"Subsection 1-1",key:"unique-key-1-1",childItems:[{title:"Item 1-1-0",key:"unique-key-1-1-0"},{title:"Item 1-1-1",key:"unique-key-1-1-1"},{title:"Item 1-1-2",key:"unique-key-1-1-2"}]}]}];t.default=a},2155:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(0)),o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==d(e)&&"function"!=typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(81)),i=u(n(868)),r=u(n(5)),c=u(n(1559)),l=u(n(904));function s(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function u(e){return e&&e.__esModule?e:{default:e}}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=b(e);if(t){var o=b(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return h(this,n)}}function h(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var S=r.default.bind(l.default),g=function(e){return a.default.createElement(o.Subsection,{key:e.key,title:e.title},e.childItems.map((function(e){return t=e,a.default.createElement(o.Item,{key:t.key},a.default.createElement(i.default,{title:t.title,className:S("placeholder")}));var t})))},v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(l,e);var t,n,i,r=f(l);function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=r.call(this,e)).createSection=t.createSection.bind(y(t)),t.createSections=t.createSections.bind(y(t)),t.handleSectionSelection=t.handleSectionSelection.bind(y(t)),t.state={collapsedKeys:[]},t}return t=l,(n=[{key:"handleSectionSelection",value:function(e,t){e.preventDefault(),this.setState((function(e){return{collapsedKeys:o.Utils.updatedMultiSelectedKeys(e.collapsedKeys,t.key)}}))}},{key:"createSection",value:function(e){var t=this.state.collapsedKeys.indexOf(e.key)>=0;return a.default.createElement(o.Section,{key:e.key,title:e.title,isCollapsed:t,isCollapsible:!0,metaData:{key:e.key},onSelect:this.handleSectionSelection},!t&&e.childItems.map((function(e){return g(e)})))}},{key:"createSections",value:function(e){var t=this;return e.map((function(e){return t.createSection(e)}))}},{key:"render",value:function(){return a.default.createElement(o.default,{dividerStyle:"standard"},this.createSections(c.default))}}])&&p(t.prototype,n),i&&p(t,i),l}(a.default.Component);t.default=v},2156:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(0)),o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==d(e)&&"function"!=typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(81)),i=u(n(868)),r=u(n(5)),c=u(n(1559)),l=u(n(904));function s(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function u(e){return e&&e.__esModule?e:{default:e}}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=b(e);if(t){var o=b(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return h(this,n)}}function h(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var S=r.default.bind(l.default),g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(s,e);var t,n,r,l=f(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=l.call(this,e)).createSection=t.createSection.bind(y(t)),t.createSections=t.createSections.bind(y(t)),t.createSubsection=t.createSubsection.bind(y(t)),t.handleSectionSelection=t.handleSectionSelection.bind(y(t)),t.state={collapsedKeys:[]},t}return t=s,(n=[{key:"handleSectionSelection",value:function(e,t){e.preventDefault(),this.setState((function(e){return{collapsedKeys:o.Utils.updatedMultiSelectedKeys(e.collapsedKeys,t.key)}}))}},{key:"createSubsection",value:function(e){var t=this.state.collapsedKeys.indexOf(e.key)>=0;return a.default.createElement(o.Subsection,{key:e.key,title:e.title,isCollapsed:t,isCollapsible:!0,metaData:{key:e.key},onSelect:this.handleSectionSelection},!t&&e.childItems.map((function(e){return t=e,a.default.createElement(o.Item,{key:t.key},a.default.createElement(i.default,{title:t.title,className:S("placeholder")}));var t})))}},{key:"createSection",value:function(e){var t=this;return a.default.createElement(o.Section,{key:e.key,title:e.title},e.childItems.map((function(e){return t.createSubsection(e)})))}},{key:"createSections",value:function(e){var t=this;return e.map((function(e){return t.createSection(e)}))}},{key:"render",value:function(){return a.default.createElement(o.default,{dividerStyle:"standard"},this.createSections(c.default))}}])&&p(t.prototype,n),r&&p(t,r),s}(a.default.Component);t.default=g},2924:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return D}));var a=n(0),o=n.n(a),i=n(282),r=n(885),c=n(2155),l=n.n(c);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d={};function p(e){var t=e.components,n=u(e,["components"]);return Object(i.mdx)("wrapper",s({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",s({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport List, {\n  Item,\n  Section,\n  Subsection,\n  Utils,\n} from 'terra-list';\n\nimport Placeholder from 'terra-doc-template/lib/Placeholder';\nimport classNames from 'classnames/bind';\nimport mockData from './mock-data/mock-section-sub';\nimport styles from '../example/ListDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst createListItem = itemData => (\n  <Item key={itemData.key}>\n    <Placeholder title={itemData.title} className={cx('placeholder')} />\n  </Item>\n);\n\nconst createSubsection = subsectionData => (\n  <Subsection\n    key={subsectionData.key}\n    title={subsectionData.title}\n  >\n    {subsectionData.childItems.map(childItem => createListItem(childItem))}\n  </Subsection>\n);\n\nclass SectionWithSubsection1 extends React.Component {\n  constructor(props) {\n    super(props);\n    this.createSection = this.createSection.bind(this);\n    this.createSections = this.createSections.bind(this);\n    this.handleSectionSelection = this.handleSectionSelection.bind(this);\n    this.state = { collapsedKeys: [] };\n  }\n\n  handleSectionSelection(event, metaData) {\n    event.preventDefault();\n\n    this.setState(state => ({ collapsedKeys: Utils.updatedMultiSelectedKeys(state.collapsedKeys, metaData.key) }));\n  }\n\n  createSection(sectionData) {\n    const isCollapsed = this.state.collapsedKeys.indexOf(sectionData.key) >= 0;\n    return (\n      <Section\n        key={sectionData.key}\n        title={sectionData.title}\n        isCollapsed={isCollapsed}\n        isCollapsible\n        metaData={{ key: sectionData.key }}\n        onSelect={this.handleSectionSelection}\n      >\n        {!isCollapsed && sectionData.childItems.map(childItem => createSubsection(childItem))}\n      </Section>\n    );\n  }\n\n  createSections(data) {\n    return data.map(section => this.createSection(section));\n  }\n\n  render() {\n    return (\n      <List dividerStyle=\"standard\">\n        {this.createSections(mockData)}\n      </List>\n    );\n  }\n}\n\nexport default SectionWithSubsection1;\n\n")))}p.isMDXComponent=!0;var m=n(855),f=n.n(m),h=function(e){var t=e.title,n=e.description,a=e.isExpanded;return o.a.createElement(f.a,{title:t||"Section With Subsection 1",description:n,example:o.a.createElement(l.a,null),exampleSrc:o.a.createElement(p,null),isExpanded:a})},y=n(2156),b=n.n(y);function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var v={};function k(e){var t=e.components,n=g(e,["components"]);return Object(i.mdx)("wrapper",S({},v,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",S({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport List, {\n  Item,\n  Section,\n  Subsection,\n  Utils,\n} from 'terra-list';\nimport Placeholder from 'terra-doc-template/lib/Placeholder';\nimport classNames from 'classnames/bind';\nimport mockData from './mock-data/mock-section-sub';\nimport styles from '../example/ListDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst createListItem = itemData => (\n  <Item key={itemData.key}>\n    <Placeholder title={itemData.title} className={cx('placeholder')} />\n  </Item>\n);\n\nclass SectionWithSubsection2 extends React.Component {\n  constructor(props) {\n    super(props);\n    this.createSection = this.createSection.bind(this);\n    this.createSections = this.createSections.bind(this);\n    this.createSubsection = this.createSubsection.bind(this);\n    this.handleSectionSelection = this.handleSectionSelection.bind(this);\n    this.state = { collapsedKeys: [] };\n  }\n\n  handleSectionSelection(event, metaData) {\n    event.preventDefault();\n\n    this.setState(state => ({ collapsedKeys: Utils.updatedMultiSelectedKeys(state.collapsedKeys, metaData.key) }));\n  }\n\n  createSubsection(subsectionData) {\n    const isCollapsed = this.state.collapsedKeys.indexOf(subsectionData.key) >= 0;\n    return (\n      <Subsection\n        key={subsectionData.key}\n        title={subsectionData.title}\n        isCollapsed={isCollapsed}\n        isCollapsible\n        metaData={{ key: subsectionData.key }}\n        onSelect={this.handleSectionSelection}\n      >\n        {!isCollapsed && subsectionData.childItems.map(childItem => createListItem(childItem))}\n      </Subsection>\n    );\n  }\n\n  createSection(sectionData) {\n    return (\n      <Section\n        key={sectionData.key}\n        title={sectionData.title}\n      >\n        {sectionData.childItems.map(childItem => this.createSubsection(childItem))}\n      </Section>\n    );\n  }\n\n  createSections(data) {\n    return data.map(section => this.createSection(section));\n  }\n\n  render() {\n    return (\n      <List dividerStyle=\"standard\">\n        {this.createSections(mockData)}\n      </List>\n    );\n  }\n}\n\nexport default SectionWithSubsection2;\n\n")))}k.isMDXComponent=!0;var O=function(e){var t=e.title,n=e.description,a=e.isExpanded;return o.a.createElement(f.a,{title:t||"Section With Subsection 2",description:n,example:o.a.createElement(b.a,null),exampleSrc:o.a.createElement(k,null),isExpanded:a})};function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var j={};function D(e){var t=e.components,n=x(e,["components"]);return Object(i.mdx)("wrapper",_({},j,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)(r.a,{mdxType:"Badge"}),Object(i.mdx)("h1",{id:"terra-list---sections-with-subsections"},"Terra List - Sections with Subsections"),Object(i.mdx)("p",null,"With the inclusion of sections in the list, there are two recommended patterns for creating nested collapsible sections. First is collapsible sections and static subsections, and the second is static sections and collapsible subsections. The guidance from UX is to only use collapsible sections or collapsible subsections in a list, but not both."),Object(i.mdx)("h2",{id:"state-management"},"State Management"),Object(i.mdx)("p",null,"As section and subsection have the same API, we'll be walking through the expectation of a collapsible section in only one pattern."),Object(i.mdx)("p",null,"First defaulting our state to an empty array in the constructor. "),Object(i.mdx)("pre",null,Object(i.mdx)("code",_({parentName:"pre"},{className:"language-diff"}),"class MyList extends React.Component {\n  constructor(props) {\n    super(props);\n\n+    this.state = { collapsedKeys: [] };\n  }\n  \n  render() {\n    return (\n    );\n  }\n}\n")),Object(i.mdx)("p",null,"Next creating an event handler callback method to pass to the section's ",Object(i.mdx)("inlineCode",{parentName:"p"},"onSelect")," prop. The ",Object(i.mdx)("inlineCode",{parentName:"p"},"onSelect")," will return the metaData prop passed it each section."),Object(i.mdx)("pre",null,Object(i.mdx)("code",_({parentName:"pre"},{className:"language-diff"}),"class MyList extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = { collapsedKeys: [] };\n+   this.handleSectionSelection = this.handleSectionSelection.bind(this)\n  }\n  \n+  handleSectionSelection(event, metaData) {\n+\n+  }\n")),Object(i.mdx)("p",null,"As a precaution we can prevent default on the event, in case the list has an ancestor with a listener. This also prevents the browser from auto page scrolling when we are intending to make a selection with the space bar."),Object(i.mdx)("pre",null,Object(i.mdx)("code",_({parentName:"pre"},{className:"language-diff"}),"  handleSectionSelection(event, metaData) {\n+    event.preventDefault();\n  }\n")),Object(i.mdx)("p",null,"Terra list comes with additional helpers to manage state, in this case we want to determine if the selection has collapsed or opened the section using the section key in our state. So we use the utility method ",Object(i.mdx)("inlineCode",{parentName:"p"},"updatedMulitSelectedKeys"),", which returns an array of the keys following the addition or removing of the key passed. We then set this as our state."),Object(i.mdx)("pre",null,Object(i.mdx)("code",_({parentName:"pre"},{className:"language-diff"}),"  handleSectionSelection(event, metaData) {\n    event.preventDefault();\n+   this.setState(state => ({ collapsedKeys: Utils.updatedMultiSelectedKeys(state.selectedKeys, metaData.key) }));\n  }\n")),Object(i.mdx)("p",null,"Settting state will trigger another render. So in the render method we need to generate our sections with the updated ",Object(i.mdx)("inlineCode",{parentName:"p"},"isCollapsed")," and ",Object(i.mdx)("inlineCode",{parentName:"p"},"isCollapsible")," props. Each section needs a unique key, not necessarily associated to our own key, but it works as well. The list renders flat, so keys need to be unique even if items are placed within sections structurally.\n",Object(i.mdx)("a",_({parentName:"p"},{href:"https://reactjs.org/docs/lists-and-keys.html"}),"React List & Key Documentation")),Object(i.mdx)("pre",null,Object(i.mdx)("code",_({parentName:"pre"},{className:"language-diff"}),"class MyList extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = { collapsedKeys: [] };\n    this.handleSectionSelection = this.handleSectionSelection.bind(this)\n+   this.createSection = this.createSection.bind(this)\n  }\n  ...\n+ createSection(sectionData) {\n+   return (\n+     <Section\n+       key={sectionData.key}\n+       title={sectionData.title}\n+     >\n+       {sectionData.childItems.map(childItem => createSubsection(childItem))}\n+     </Section>\n+   );\n+ }\n")),Object(i.mdx)("p",null,"Next we need to set up our ",Object(i.mdx)("inlineCode",{parentName:"p"},"metaData")," object with our key value, and attach the ",Object(i.mdx)("inlineCode",{parentName:"p"},"onSelect")," to our handler."),Object(i.mdx)("pre",null,Object(i.mdx)("code",_({parentName:"pre"},{className:"language-diff"}),"  createSection(sectionData) {\n    return (\n      <Section\n        key={sectionData.key}\n        title={sectionData.title}\n+       metaData={{ key: sectionData.key }}\n+       onSelect={this.handleSectionSelection}\n      >\n        {sectionData.childItems.map(childItem => createSubsection(childItem))}\n      </Section>\n    );\n  }\n")),Object(i.mdx)("p",null,"For the common collapsible sections we set ",Object(i.mdx)("inlineCode",{parentName:"p"},"isCollapsible")," for all sections."),Object(i.mdx)("pre",null,Object(i.mdx)("code",_({parentName:"pre"},{className:"language-diff"}),"  createSection(sectionData) {\n    return (\n      <Section\n        key={sectionData.key}\n        title={sectionData.title}\n+       isCollapsible\n        metaData={{ key: sectionData.key }}\n        onSelect={this.handleSectionSelection}\n      >\n        {sectionData.childItems.map(childItem => createSubsection(childItem))}\n      </Section>\n    );\n  }\n")),Object(i.mdx)("p",null,"Finally we need to check if the section is collapsed. As we support IE10 & 11, we cannot use ",Object(i.mdx)("inlineCode",{parentName:"p"},"contains"),", so we use ",Object(i.mdx)("inlineCode",{parentName:"p"},"indexOf")," to determine if the key is present in our state array. Here we can also avoid rendering collapsed child items and subsections by avoiding the subsequent function calls. Short circuiting the render is not required, as the section can correctly managed the display of the child content, but this will avoid additional javascript cycles looping through and creating child objects. The performance impact of generating child items is minimal, but with large lists it can add up."),Object(i.mdx)("pre",null,Object(i.mdx)("code",_({parentName:"pre"},{className:"language-diff"}),"  createSection(sectionData) {\n+   const isCollapsed = this.state.collapsedKeys.indexOf(sectionData.key) >= 0;\n    return (\n      <Section\n        key={sectionData.key}\n        title={sectionData.title}\n+       isCollapsed={isCollapsed}\n        isCollapsible\n        metaData={{ key: sectionData.key }}\n        onSelect={this.handleSectionSelection}\n      >\n-       {sectionData.childItems.map(childItem => createSubsection(childItem))}\n+       {!isCollapsed && sectionData.childItems.map(childItem => createSubsection(childItem))}\n      </Section>\n    );\n")),Object(i.mdx)("p",null,"We can then implement the unpack of our data into our list items."),Object(i.mdx)("pre",null,Object(i.mdx)("code",_({parentName:"pre"},{className:"language-diff"}),"  createSection(sectionData) {\n   const isCollapsed = this.state.collapsedKeys.indexOf(sectionData.key) >= 0;\n+  const createListItem = itemData => (\n+    <Item key={itemData.key}>\n+       <Placeholder />\n+    </Item>\n+  );\n\n+  const createSubsection = subsectionData => (\n+     <Subsection\n+       key={subsectionData.key}\n+       title={subsectionData.title}\n+     >\n+       {subsectionData.childItems.map(childItem => createListItem(childItem))}\n+     </Subsection>\n+   );\n    return (\n      <Section\n        key={sectionData.key}\n        title={sectionData.title}\n        isCollapsed={isCollapsed}\n        isCollapsible\n        metaData={{ key: sectionData.key }}\n        onSelect={this.handleSectionSelection}\n      >\n        {!isCollapsed && sectionData.childItems.map(childItem => createSubsection(childItem))}\n      </Section>\n    );\n")),Object(i.mdx)("p",null,"Then we can implement a method to loop through our data and create the section with our methods and call it from our render method."),Object(i.mdx)("pre",null,Object(i.mdx)("code",_({parentName:"pre"},{className:"language-diff"}),'class MyList extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = { collapsedKeys: [] };\n    this.handleSectionSelection = this.handleSectionSelection.bind(this)\n    this.createSection = this.createSection.bind(this)\n+   this.createSections = this.createSections.bind(this)\n  }\n  ...\n+ createSections(data) {\n+   return data.map(section => this.createSection(section));\n+ }\n\n  render() {\n    return (\n+     <List dividerStyle="standard">\n+       {this.createSections(mockData)}\n+     </List>\n    );\n  }\n')),Object(i.mdx)("p",null,"  Using these steps we get the following example."),Object(i.mdx)("h2",{id:"examples"},"Examples"),Object(i.mdx)(h,{mdxType:"SectionWithSubsection1"}),Object(i.mdx)(O,{mdxType:"SectionWithSubsection2"}))}D.isMDXComponent=!0},855:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(0)),o=c(n(3)),i=c(n(5)),r=c(n(859));function c(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=h(e);if(t){var o=h(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return m(this,n)}}function m(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y=i.default.bind(r.default),b={example:o.default.element,exampleSrc:o.default.element,title:o.default.string,description:o.default.node,isExpanded:o.default.bool},S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(n,e);var t=p(n);function n(e){var a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(a=t.call(this,e)).state={isExpanded:e.isExpanded,isBackgroundTransparent:!1},a.handleBgToggle=a.handleBgToggle.bind(f(a)),a.handleCodeToggle=a.handleCodeToggle.bind(f(a)),a}return u(n,null,[{key:"renderHeader",value:function(e){return e?a.default.createElement("div",{className:y("header")},a.default.createElement("h2",{className:y("title")},e)):null}},{key:"renderDescription",value:function(e){return e?a.default.createElement("div",{className:y("description")},e):null}}]),u(n,[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,t=e.example,o=e.exampleSrc,i=e.title,r=e.description,c=this.state,l=c.isExpanded,s=c.isBackgroundTransparent;return a.default.createElement("div",{className:y("template")},n.renderHeader(i),a.default.createElement("div",{className:y("content",{"dynamic-content":s})},n.renderDescription(r),t),o&&a.default.createElement("div",{className:y("footer")},a.default.createElement("div",{className:y("button-container")},a.default.createElement("button",{type:"button",className:y("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),a.default.createElement("button",{type:"button",className:y("code-toggle"),onClick:this.handleCodeToggle},a.default.createElement("span",{className:y("chevron-left")}),a.default.createElement("span",null,"Code"),a.default.createElement("span",{className:y("chevron-right")}))),l&&a.default.createElement("div",{className:y("code")},o)))}}]),n}(a.default.Component);S.propTypes=b,S.defaultProps={isExpanded:!1};var g=S;t.default=g},856:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(0)),o=c(n(3)),i=c(n(5)),r=c(n(857));function c(e){return e&&e.__esModule?e:{default:e}}var l=i.default.bind(r.default),s={name:o.default.string.isRequired,src:o.default.string,url:o.default.string,version:o.default.string.isRequired},u=function(e){var t=e.src,n=e.name,o=e.url,i=e.version,r=a.default.createElement("a",{className:l("badge"),href:o||"https://www.npmjs.org/package/".concat(n,"/v/").concat(i)},a.default.createElement("span",{className:l("badge-name")},o?"package":"npm"),a.default.createElement("span",{className:l("badge-version")},"v".concat(i))),c=t?a.default.createElement("a",{className:l("badge"),href:t},a.default.createElement("span",{className:l("badge-name")},"github"),a.default.createElement("span",{className:l("badge-version")},"source")):void 0;return a.default.createElement("div",{className:l("badge-container")},r,c)};u.propTypes=s;var d=u;t.default=d},857:function(e,t,n){e.exports={badge:"Badges-module__badge___3m7y2","badge-container":"Badges-module__badge-container___1YxI5","badge-name":"Badges-module__badge-name___BQ3u4","badge-version":"Badges-module__badge-version___3OgwS"}},859:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___2Cn_e",header:"ExampleTemplate-module__header___1Uk65",content:"ExampleTemplate-module__content___2BfpO",description:"ExampleTemplate-module__description___17dwL",footer:"ExampleTemplate-module__footer___2qb8M","button-container":"ExampleTemplate-module__button-container___305lx",code:"ExampleTemplate-module__code____AmLF","bg-toggle":"ExampleTemplate-module__bg-toggle___3RP_x","code-toggle":"ExampleTemplate-module__code-toggle___25ONK","chevron-left":"ExampleTemplate-module__chevron-left___3vfkd","chevron-right":"ExampleTemplate-module__chevron-right___YOdVB",title:"ExampleTemplate-module__title___5hduh","dynamic-content":"ExampleTemplate-module__dynamic-content___1b8Fh"}},868:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(0)),o=c(n(3)),i=c(n(5)),r=c(n(876));function c(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=i.default.bind(r.default),d={variant:o.default.oneOf(["light","dark"]),title:o.default.string},p=function(e){var t=e.variant,n=e.title,o=s(e,["variant","title"]),i=u(["placeholder",o.className]),r=u(["inner","is-".concat(t)]);return a.default.createElement("div",l({},o,{className:i}),a.default.createElement("div",{className:r},a.default.createElement("h2",null,n)))};p.propTypes=d,p.defaultProps={variant:"dark",title:""};var m=p;t.default=m},876:function(e,t,n){e.exports={placeholder:"Placeholder-module__placeholder___tuGWe",inner:"Placeholder-module__inner___1irlA","is-light":"Placeholder-module__is-light___3LkLU","is-dark":"Placeholder-module__is-dark___5pLAg"}},885:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),o=n.n(a),i=n(856),r=n.n(i),c=function(e){var t=e.url;return o.a.createElement(r.a,{src:"https://github.com/cerner/terra-core/tree/master/packages/terra-list",name:"terra-list",version:"4.31.0",url:t})}},904:function(e,t,n){e.exports={placeholder:"ListDocCommon-module__placeholder___cpXI4"}}}]);
//# sourceMappingURL=111-d02d4b559375d078b5c4.js.map