(window.webpackJsonp=window.webpackJsonp||[]).push([[379],{2321:function(e,n,r){"use strict";r.r(n),n.default='### scss\n```scss\n@import "compass/reset";\n\n// variables\n$colorGreen: #008000;\n$colorGreenDark: darken($colorGreen, 10);\n\ndiv,\n.navbar,\n#header,\ninput[type="input"] {\n    font-family: "Helvetica Neue", Arial, sans-serif;\n    width: auto;\n    margin: 0 auto;\n    display: block;\n    &:hover { color: $colorGreenDark; }\n    .home {\n          background: url(\'http://placehold.it/20\') scroll no-repeat 0 0;\n    }\n    padding: {\n        left: 5px; right: 5px;\n    }\n}\n\n@for $i from 1 through 5 {\n    .span#{$i} {\n        width: 20px*$i;\n    }\n}\n\n@mixin mobile {\n  @media screen and (max-width : 600px) {\n    @content;\n  }\n}\n```'},2711:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=l(r(0)),a=l(r(880)),o=l(r(2321));function l(e){return e&&e.__esModule?e:{default:e}}var c=function(){return t.default.createElement(a.default,{src:o.default})};n.default=c},880:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=u(r(0)),a=u(r(3)),o=u(r(5)),l=u(r(965)),c=u(r(966));r(967),r(968),r(969);var i=u(r(897));function u(e){return e&&e.__esModule?e:{default:e}}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function d(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){f(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function f(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}var p=o.default.bind(i.default),b=Object.keys(c.default.languages).filter((function(e){return!["extend","insertBefore","DFS"].includes(e)}));l.default.setOptions({headerIds:!1,highlight:function(e,n){return b.includes(n)?c.default.highlight(e,c.default.languages[n],n):null},langPrefix:"codeblock language-"});var h=new l.default.Renderer;h.heading=function(e,n){var r=e.toLowerCase().replace(/[^\w]+/g,"-");return"<h".concat(n,">")+'<a name="'.concat(r,'" class="anchor" aria-hidden="true" href="#').concat(r,'">')+'<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="is-bidi octicon octicon-link"><path d="M10.5 26.3a16 16 0 0 1 .9-5.3L8 17.6a6.73 6.73 0 0 1-2-4.8A6.41 6.41 0 0 1 8 8a6.76 6.76 0 0 1 9.6 0l9 9a6.88 6.88 0 0 1 0 9.6 6.27 6.27 0 0 1-3.4 1.8 2.65 2.65 0 0 0 .5.6l4.1 4.1a11.36 11.36 0 0 0 3.1-2.3 12.8 12.8 0 0 0 0-18.1l-9-9a12.63 12.63 0 0 0-9-3.7 12.63 12.63 0 0 0-9 3.7A12.1 12.1 0 0 0 0 12.8a12.63 12.63 0 0 0 3.7 9l7 7a21.05 21.05 0 0 1-.2-2.5zm27-4.6a16 16 0 0 1-.9 5.3l3.4 3.4a6.79 6.79 0 1 1-9.6 9.6l-9-9a6.88 6.88 0 0 1 0-9.6 6.27 6.27 0 0 1 3.4-1.8 2.65 2.65 0 0 0-.5-.6l-4-4a11.36 11.36 0 0 0-3.1 2.3 12.8 12.8 0 0 0 0 18.1l9 9a12.73 12.73 0 0 0 18-18l-7-7a8 8 0 0 1 .3 2.3z"/></svg></a>'+"".concat(e)+"</h".concat(n,">")};var g={src:a.default.string,baseUrl:a.default.string,hasHeadingAnchors:a.default.bool},v=function(e){return t.default.createElement("div",{dir:"ltr",className:p(["markdown"]),dangerouslySetInnerHTML:{__html:(0,l.default)(e.src,d(d({},e.baseUrl&&{baseUrl:e.baseUrl}),e.hasHeadingAnchors&&{renderer:h}))}})};v.propTypes=g,v.defaultProps={src:""};var w=v;n.default=w},897:function(e,n,r){e.exports={markdown:"Markdown__markdown___3KTyB"}}}]);
//# sourceMappingURL=379-4484f01d5a71283eb077.js.map