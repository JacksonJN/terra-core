(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{2260:function(e,t,n){"use strict";function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,o=u(n(0)),r=u(n(871)),c=(a=n(909))&&a.__esModule?a:{default:a};function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function u(e){if(e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var r=a?Object.getOwnPropertyDescriptor(e,o):null;r&&(r.get||r.set)?Object.defineProperty(n,o,r):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],l=!0,a=!1,o=void 0;try{for(var r,c=e[Symbol.iterator]();!(l=(r=c.next()).done)&&(n.push(r.value),!t||n.length!==t);l=!0);}catch(e){a=!0,o=e}finally{try{l||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}var m=function(){var e,t=s((0,o.useState)([]),2),n=t[0],l=t[1],a=function(e,t){e.preventDefault(),l(r.Utils.toggleArrayValue(n,t.key))};return o.default.createElement(r.default,{summaryId:"example-multi-select",summary:"This table shows an implementation of multiple row selection.","aria-multiselectable":!0,rowStyle:"toggle",numberOfColumns:4,cellPaddingStyle:"standard",dividerStyle:"both",headerData:{selectAllColumn:{checkLabel:"Multi Selection"},cells:[{key:"cell-0",id:"toggle-0",children:"Column 0"},{key:"cell-1",id:"toggle-1",children:"Column 1"},{key:"cell-2",id:"toggle-2",children:"Column 2"},{key:"cell-3",id:"toggle-3",children:"Column 3"}]},bodyData:[{rows:(e=c.default,e.map((function(e){return{key:(t=e).key,cells:(l=t.cells,l.map((function(e){return function(e){return{key:e.key,children:e.title}}(e)}))),isDisabled:!r.Utils.canToggleArrayValue(3,n,t.key),toggleAction:{metaData:{key:t.key},onToggle:a,isToggled:n.indexOf(t.key)>=0,toggleLabel:t.toggleText}};var t,l})))}]})};t.default=m},2946:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var l=n(0),a=n.n(l),o=n(282),r=n(2260),c=n.n(r);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s={};function d(e){var t=e.components,n=u(e,["components"]);return Object(o.mdx)("wrapper",i({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",i({parentName:"pre"},{className:"language-jsx"}),"import React, {\n  useState,\n} from 'react';\nimport Table, {\n  Utils,\n} from 'terra-table';\nimport mockData from './mock-data/mock-select';\n\nconst maxSectionCount = 3;\n\nconst createCell = cell => ({ key: cell.key, children: cell.title });\n\nconst createCellsForRow = cells => cells.map(cell => createCell(cell));\n\nconst MultiSelectTable = () => {\n  const [selectedKeys, setSelectedKeys] = useState([]);\n\n  const handleRowToggle = (event, metaData) => {\n    event.preventDefault();\n    setSelectedKeys(Utils.toggleArrayValue(selectedKeys, metaData.key));\n  };\n\n  const createRow = rowData => (\n    {\n      key: rowData.key,\n      cells: createCellsForRow(rowData.cells),\n      isDisabled: !Utils.canToggleArrayValue(maxSectionCount, selectedKeys, rowData.key),\n      toggleAction: {\n        metaData: { key: rowData.key },\n        onToggle: handleRowToggle,\n        isToggled: selectedKeys.indexOf(rowData.key) >= 0,\n        toggleLabel: rowData.toggleText,\n      },\n    }\n  );\n\n  const createRows = data => data.map(childItem => createRow(childItem));\n\n  return (\n    <Table\n      summaryId=\"example-multi-select\"\n      summary=\"This table shows an implementation of multiple row selection.\"\n      aria-multiselectable\n      rowStyle=\"toggle\"\n      numberOfColumns={4}\n      cellPaddingStyle=\"standard\"\n      dividerStyle=\"both\"\n      headerData={{\n        selectAllColumn: {\n          checkLabel: 'Multi Selection',\n        },\n        cells: [\n          { key: 'cell-0', id: 'toggle-0', children: 'Column 0' },\n          { key: 'cell-1', id: 'toggle-1', children: 'Column 1' },\n          { key: 'cell-2', id: 'toggle-2', children: 'Column 2' },\n          { key: 'cell-3', id: 'toggle-3', children: 'Column 3' },\n        ],\n      }}\n      bodyData={[\n        {\n          rows: createRows(mockData),\n        },\n      ]}\n    />\n  );\n};\n\nexport default MultiSelectTable;\n\n")))}d.isMDXComponent=!0;var m=n(855),p=n.n(m),f=function(e){var t=e.title,n=e.description,l=e.isExpanded;return a.a.createElement(p.a,{title:t||"Multi Select Table",description:n,example:a.a.createElement(c.a,null),exampleSrc:a.a.createElement(d,null),isExpanded:l})};function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b={};function h(e){var t=e.components,n=y(e,["components"]);return Object(o.mdx)("wrapper",g({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("h1",{id:"terra-table---implementing-a-multi-select-table"},"Terra Table - Implementing a Multi Select Table"),Object(o.mdx)("p",null,"This guide will show you how to implement that state within a multiple row selection variant of table. To enable row selection, terra-table requires selection state to be managed by the consuming component. As a result selections from the consuming components state are applied at generation of the table rows."),Object(o.mdx)("h2",{id:"state-management"},"State Management"),Object(o.mdx)("p",null,"The state of selection needs to be managed for the table in an ancestor component. In this example we are going to use a unique key, but the type of state used is open to the individual implementation."),Object(o.mdx)("p",null," First defaulting our state to a null value with the useState hook."),Object(o.mdx)("pre",null,Object(o.mdx)("code",g({parentName:"pre"},{className:"language-diff"}),"+ const [selectedKey, setSelectedKey] = useState([]);\n")),Object(o.mdx)("p",null,'Next creating an event handler callback method to pass to the table row\'s "onToggle" prop. The "onToggle" will return the metaData prop passed it each row.'),Object(o.mdx)("pre",null,Object(o.mdx)("code",g({parentName:"pre"},{className:"language-diff"}),"+  const handleRowToggle = (event, metaData) => {\n\n+  };\n")),Object(o.mdx)("p",null,"As a precaution we can prevent default on the event, in case the table has an ancestor with a listener. This also prevents the browser from auto page scrolling when we are intending to make a selection with the space bar."),Object(o.mdx)("pre",null,Object(o.mdx)("code",g({parentName:"pre"},{className:"language-diff"}),"  const handleRowToggle = (event, metaData) => {\n+   event.preventDefault();\n  };\n")),Object(o.mdx)("p",null,"Terra Table comes with additional helpers to manage state, in this case we want to determine if the selection has selected or unselected the table row key in our state. So we use the utility method ",Object(o.mdx)("inlineCode",{parentName:"p"},"toggleArrayValue"),", which takes an array of keys and returns a new array of keys following the addition or removal of the key passed. We then set this as our state."),Object(o.mdx)("pre",null,Object(o.mdx)("code",g({parentName:"pre"},{className:"language-diff"}),"  const handleRowToggle = (event, metaData) => {\n    event.preventDefault();\n+   setSelectedKeys(Utils.toggleArrayValue(selectedKeys, metaData.key));\n  }\n")),Object(o.mdx)("p",null,"Setting state will trigger another render. In the render method we need generate our table rows with the updated isSelected and isSelectable props. Each item needs a unique key, not necessarily associated to our own key, but it works as well. The table renders flat, so keys need to be unique even if they are placed within sections.\n",Object(o.mdx)("a",g({parentName:"p"},{href:"https://reactjs.org/docs/lists-and-keys.html"}),"React List & Key Documentation")),Object(o.mdx)("pre",null,Object(o.mdx)("code",g({parentName:"pre"},{className:"language-diff"}),"+  const createRow = rowData => (\n+    {\n+      key: rowData.key,\n+      cells: createCellsForRow(rowData.cells),\n+    }\n+  );\n")),Object(o.mdx)("p",null,'Next we need to set up our metaData object with our key value, and attach the "onToggle" to our handler.'),Object(o.mdx)("pre",null,Object(o.mdx)("code",g({parentName:"pre"},{className:"language-diff"}),"  const createRow = rowData => (\n    {\n      key: rowData.key,\n      cells: createCellsForRow(rowData.cells),\n+     toggleAction: {\n+       metaData: { key: rowData.key },\n+       onToggle: handleRowToggle,\n+     }\n    }\n  );\n")),Object(o.mdx)("p",null,"Next we need to check if the row is selected. As we support IE10 & 11, we cannot use ",Object(o.mdx)("inlineCode",{parentName:"p"},"contains"),", so we use ",Object(o.mdx)("inlineCode",{parentName:"p"},"indexOf")," to determine if the key is present in our state array."),Object(o.mdx)("pre",null,Object(o.mdx)("code",g({parentName:"pre"},{className:"language-diff"}),"  const createRow = (rowData) => (\n    {\n      key: rowData.key,\n      cells: createCellsForRow(rowData.cells),\n      toggleAction: {\n        metaData: { key: rowData.key },\n        onToggle: handleRowToggle,\n+       isToggled: selectedKeys.indexOf(rowData.key) >= 0,\n+       toggleLabel: rowData.toggleText,\n      }\n    }\n  };\n")),Object(o.mdx)("p",null,"For multi-select tables we need to set selectability based upon whether or not we have reached our max selection count.  Terra Table provides a helper for this, namely ",Object(o.mdx)("inlineCode",{parentName:"p"},"canToggleArrayValue"),", by providing our count, the currently selected key, and the key of the associated item."),Object(o.mdx)("pre",null,Object(o.mdx)("code",g({parentName:"pre"},{className:"language-diff"}),"  const createRow = (rowData) => (\n    {\n      key: rowData.key,\n      cells: createCellsForRow(rowData.cells),\n      toggleAction: {\n        metaData: { key: rowData.key },\n        onToggle: handleRowToggle,\n        isToggled: selectedKeys.indexOf(rowData.key) >= 0,\n        toggleLabel: rowData.toggleText,\n      }\n+     isDisabled: !Utils.canToggleArrayValue(maxSectionCount, selectedKeys, rowData.key),\n    }\n  };\n")),Object(o.mdx)("p",null,"We can then implement the unpack of our data into our row cells."),Object(o.mdx)("pre",null,Object(o.mdx)("code",g({parentName:"pre"},{className:"language-diff"}),"+ const createCell = cell => ({ key: cell.key, children: cell.title });\n\n+ const createCellsForRow = cells => cells.map(cell => createCell(cell));\n")),Object(o.mdx)("p",null,"Finally we can implement a method to loop through our data and create the table row with our methods and call it from our render method.\nEnsuring that we add the appropriate aria label for multiple selections."),Object(o.mdx)("pre",null,Object(o.mdx)("code",g({parentName:"pre"},{className:"language-diff"}),"+ const createRows = data => data.map(childItem => createRow(childItem));\n\n...\n  return (\n+   <Table\n+     summaryId=\"example-multi-select\"\n+     summary=\"This table shows an implementation of multiple row selection.\"\n+     aria-multiselectable\n+     numberOfColumns={4}\n+     cellPaddingStyle=\"standard\"\n+     rowStyle=\"toggle\"\n+     headerData={{\n+       cells: [\n+         { key: 'cell-0', id: 'toggle-0', children: 'Column 0' },\n+         { key: 'cell-1', id: 'toggle-1', children: 'Column 1' },\n+         { key: 'cell-2', id: 'toggle-2', children: 'Column 2' },\n+         { key: 'cell-3', id: 'toggle-3', children: 'Column 3' },\n+       ],\n+     }}\n+     bodyData={[\n+       {\n+         rows: createRows(mockData),\n+       },\n+     ]}\n+   </Table>\n  );\n")),Object(o.mdx)("p",null,"Using these steps we get the following example:"),Object(o.mdx)(f,{mdxType:"MultiSelectTable"}))}h.isMDXComponent=!0},855:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=c(n(0)),a=c(n(3)),o=c(n(5)),r=c(n(859));function c(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function s(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=g(e);if(t){var a=g(this).constructor;n=Reflect.construct(l,arguments,a)}else n=l.apply(this,arguments);return p(this,n)}}function p(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y=o.default.bind(r.default),b={example:a.default.element,exampleSrc:a.default.element,title:a.default.string,description:a.default.node,isExpanded:a.default.bool},h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(n,e);var t=m(n);function n(e){var l;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(l=t.call(this,e)).state={isExpanded:e.isExpanded,isBackgroundTransparent:!1},l.handleBgToggle=l.handleBgToggle.bind(f(l)),l.handleCodeToggle=l.handleCodeToggle.bind(f(l)),l}return s(n,null,[{key:"renderHeader",value:function(e){return e?l.default.createElement("div",{className:y("header")},l.default.createElement("h2",{className:y("title")},e)):null}},{key:"renderDescription",value:function(e){return e?l.default.createElement("div",{className:y("description")},e):null}}]),s(n,[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,t=e.example,a=e.exampleSrc,o=e.title,r=e.description,c=this.state,i=c.isExpanded,u=c.isBackgroundTransparent;return l.default.createElement("div",{className:y("template")},n.renderHeader(o),l.default.createElement("div",{className:y("content",{"dynamic-content":u})},n.renderDescription(r),t),a&&l.default.createElement("div",{className:y("footer")},l.default.createElement("div",{className:y("button-container")},l.default.createElement("button",{type:"button",className:y("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),l.default.createElement("button",{type:"button",className:y("code-toggle"),onClick:this.handleCodeToggle},l.default.createElement("span",{className:y("chevron-left")}),l.default.createElement("span",null,"Code"),l.default.createElement("span",{className:y("chevron-right")}))),i&&l.default.createElement("div",{className:y("code")},a)))}}]),n}(l.default.Component);h.propTypes=b,h.defaultProps={isExpanded:!1};var w=h;t.default=w},859:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___2Cn_e",header:"ExampleTemplate-module__header___1Uk65",content:"ExampleTemplate-module__content___2BfpO",description:"ExampleTemplate-module__description___17dwL",footer:"ExampleTemplate-module__footer___2qb8M","button-container":"ExampleTemplate-module__button-container___305lx",code:"ExampleTemplate-module__code____AmLF","bg-toggle":"ExampleTemplate-module__bg-toggle___3RP_x","code-toggle":"ExampleTemplate-module__code-toggle___25ONK","chevron-left":"ExampleTemplate-module__chevron-left___3vfkd","chevron-right":"ExampleTemplate-module__chevron-right___YOdVB",title:"ExampleTemplate-module__title___5hduh","dynamic-content":"ExampleTemplate-module__dynamic-content___1b8Fh"}},909:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=[{key:"unique-0",toggleText:"Toggle Power Row 0",discloseText:"Power Row 0 - Details",primaryIndex:1,cells:[{key:"unique-0-0",title:"Item 0-0"},{key:"unique-0-1",title:"Item 0-1"},{key:"unique-0-2",title:"Item 0-2"},{key:"unique-0-3",title:"Item 0-3"}]},{key:"unique-1",toggleText:"Toggle Power Row 1",discloseText:"Power Row 1 - Details",primaryIndex:1,cells:[{key:"unique-1-0",title:"Item 1-0"},{key:"unique-1-1",title:"Item 1-1"},{key:"unique-1-2",title:"Item 1-2"},{key:"unique-1-3",title:"Item 1-3"}]},{key:"unique-2",toggleText:"Toggle Power Row 2",discloseText:"Power Row 2 - Details",primaryIndex:1,cells:[{key:"unique-2-0",title:"Item 2-0"},{key:"unique-2-1",title:"Item 2-1"},{key:"unique-2-2",title:"Item 2-2"},{key:"unique-2-3",title:"Item 2-3"}]},{key:"unique-3",toggleText:"Toggle Power Row 3",discloseText:"Power Row 3 - Details",primaryIndex:1,cells:[{key:"unique-3-0",title:"Item 3-0"},{key:"unique-3-1",title:"Item 3-1"},{key:"unique-3-2",title:"Item 3-2"},{key:"unique-3-3",title:"Item 3-3"}]},{key:"unique-4",toggleText:"Toggle Power Row 4",discloseText:"Power Row 4 - Details",primaryIndex:1,cells:[{key:"unique-4-0",title:"Item 4-0"},{key:"unique-4-1",title:"Item 4-1"},{key:"unique-4-2",title:"Item 4-2"},{key:"unique-4-3",title:"Item 4-3"}]}];t.default=l}}]);
//# sourceMappingURL=221-eb8c0e4e1d1a5a624520.js.map