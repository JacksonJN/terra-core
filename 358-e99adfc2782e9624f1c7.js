(window.webpackJsonp=window.webpackJsonp||[]).push([[358],{1222:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var a=t(0),r=t.n(a),d=t(856),c=t.n(d),l=function(e){var n=e.url;return r.a.createElement(c.a,{src:"https://github.com/cerner/terra-core/tree/master/packages/terra-toolbar",name:"terra-toolbar",version:"1.7.0",url:n})}},2974:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return s}));t(0);var a=t(282),r=t(1222);function d(){return(d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},d=Object.keys(e);for(a=0;a<d.length;a++)t=d[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(a=0;a<d.length;a++)t=d[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l={};function o(e){var n=e.components,t=c(e,["components"]);return Object(a.mdx)("wrapper",d({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("h1",{id:"changelog"},"ChangeLog"),Object(a.mdx)("h2",{id:"unreleased"},"Unreleased"),Object(a.mdx)("h2",{id:"170---june-2-2020"},"1.7.0 - (June 2, 2020)"),Object(a.mdx)("h3",{id:"changed"},"Changed"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Minor dependency version bump")),Object(a.mdx)("h2",{id:"160---may-19-2020"},"1.6.0 - (May 19, 2020)"),Object(a.mdx)("h3",{id:"changed-1"},"Changed"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Minor dependency version bump")),Object(a.mdx)("h2",{id:"150---may-5-2020"},"1.5.0 - (May 5, 2020)"),Object(a.mdx)("h3",{id:"changed-2"},"Changed"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Minor dependency version bump")),Object(a.mdx)("h2",{id:"140---april-28-2020"},"1.4.0 - (April 28, 2020)"),Object(a.mdx)("h3",{id:"changed-3"},"Changed"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},'Removed "View Component Source Code" from docs in favour of source code badge')),Object(a.mdx)("h2",{id:"130---april-22-2020"},"1.3.0 - (April 22, 2020)"),Object(a.mdx)("h3",{id:"changed-4"},"Changed"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Minor dependency version bump")),Object(a.mdx)("h2",{id:"120---april-22-2020"},"1.2.0 - (April 22, 2020)"),Object(a.mdx)("h3",{id:"changed-5"},"Changed"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Updated documentation links"),Object(a.mdx)("li",{parentName:"ul"},"Added Usage Section")),Object(a.mdx)("h2",{id:"110---march-31-2020"},"1.1.0 - (March 31, 2020)"),Object(a.mdx)("h3",{id:"changed-6"},"Changed"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Minor dependency version bump")),Object(a.mdx)("h2",{id:"100---march-17-2020"},"1.0.0 - (March 17, 2020)"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Initial stable release")))}function u(){return(u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},d=Object.keys(e);for(a=0;a<d.length;a++)t=d[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(a=0;a<d.length;a++)t=d[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}o.isMDXComponent=!0;var m={};function s(e){var n=e.components,t=i(e,["components"]);return Object(a.mdx)("wrapper",u({},m,t,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)(r.a,{mdxType:"Badge"}),Object(a.mdx)(o,{mdxType:"ChangeLog"}))}s.isMDXComponent=!0},856:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=l(t(0)),r=l(t(3)),d=l(t(5)),c=l(t(857));function l(e){return e&&e.__esModule?e:{default:e}}var o=d.default.bind(c.default),u={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},i=function(e){var n=e.src,t=e.name,r=e.url,d=e.version,c=a.default.createElement("a",{className:o("badge"),href:r||"https://www.npmjs.org/package/".concat(t,"/v/").concat(d)},a.default.createElement("span",{className:o("badge-name")},r?"package":"npm"),a.default.createElement("span",{className:o("badge-version")},"v".concat(d))),l=n?a.default.createElement("a",{className:o("badge"),href:n},a.default.createElement("span",{className:o("badge-name")},"github"),a.default.createElement("span",{className:o("badge-version")},"source")):void 0;return a.default.createElement("div",{className:o("badge-container")},c,l)};i.propTypes=u;var m=i;n.default=m},857:function(e,n,t){e.exports={badge:"Badges-module__badge___3m7y2","badge-container":"Badges-module__badge-container___1YxI5","badge-name":"Badges-module__badge-name___BQ3u4","badge-version":"Badges-module__badge-version___3OgwS"}}}]);
//# sourceMappingURL=358-e99adfc2782e9624f1c7.js.map