(window.webpackJsonp=window.webpackJsonp||[]).push([[443],{2825:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(n(0)),i=l(n(872));function l(e){return e&&e.__esModule?e:{default:e}}var r=function(){return o.default.createElement("div",{id:"fontSize1"},o.default.createElement(i.default,{id:"textFontSize10",fontSize:10},"Font Size 10"),o.default.createElement("br",null),o.default.createElement(i.default,{id:"textFontSize12",fontSize:12},"Font Size 12"),o.default.createElement("br",null),o.default.createElement(i.default,{id:"textFontSize14",fontSize:14},"Font Size 14"),o.default.createElement("br",null),o.default.createElement(i.default,{id:"textFontSize16",fontSize:16},"Font Size 16"),o.default.createElement("br",null),o.default.createElement(i.default,{id:"textFontSize18",fontSize:18},"Font Size 18"),o.default.createElement("br",null),o.default.createElement(i.default,{id:"textFontSize20",fontSize:20},"Font Size 20"),o.default.createElement("br",null),o.default.createElement(i.default,{id:"textFontSize24",fontSize:24},"Font Size 24"),o.default.createElement("br",null),o.default.createElement(i.default,{id:"textFontSize32",fontSize:32},"Font Size 32"))};t.default=r},872:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TextWeight=t.TextFontSize=t.default=void 0;var o=_(n(0)),i=_(n(3)),l=_(n(5)),r=_(n(881));function _(e){return e&&e.__esModule?e:{default:e}}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=l.default.bind(r.default);t.TextFontSize={10:10,12:12,14:14,16:16,18:18,20:20,24:24,32:32,36:36,46:46,50:50,56:56,64:64,72:72,92:92,100:100};t.TextWeight={200:200,300:300,400:400,700:700};var c={children:i.default.node.isRequired,isItalic:i.default.bool,isVisuallyHidden:i.default.bool,isWordWrapped:i.default.bool,fontSize:i.default.oneOf([10,12,14,16,18,20,24,32,36,46,50,56,64,72,92,100]),weight:i.default.oneOf([200,300,400,700]),colorClass:i.default.string},z=function(e){var t=e.children,n=e.isVisuallyHidden,i=e.isItalic,l=e.fontSize,r=e.weight,_=e.isWordWrapped,c=e.colorClass,z=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},d(e,["children","isVisuallyHidden","isItalic","fontSize","weight","isWordWrapped","colorClass"])),m=s(["text",{"inherit-color":!c},{italic:i},{"word-wrap":_},{"visually-hidden":n},a({},"font-size-".concat(l),l),a({},"font-weight-".concat(r),r),c,z.className]);return o.default.createElement("span",f({},z,{className:m}),t)};z.propTypes=c,z.defaultProps={isItalic:!1,isVisuallyHidden:!1,isWordWrapped:!1};var m=z;t.default=m},881:function(e,t,n){e.exports={text:"Text-module__text___1XN3H","inherit-color":"Text-module__inherit-color___wLBZA",italic:"Text-module__italic___1LU77","word-wrap":"Text-module__word-wrap___26Ry3","font-size-100":"Text-module__font-size-100___ZJzFP","font-size-92":"Text-module__font-size-92___1qZR8","font-size-72":"Text-module__font-size-72___2ydxB","font-size-64":"Text-module__font-size-64___3oiCB","font-size-56":"Text-module__font-size-56___Tr9tG","font-size-50":"Text-module__font-size-50___2dFNP","font-size-46":"Text-module__font-size-46___2JriJ","font-size-36":"Text-module__font-size-36___1GU7I","font-size-32":"Text-module__font-size-32___2aM6d","font-size-24":"Text-module__font-size-24___2HgWq","font-size-20":"Text-module__font-size-20___WRnEH","font-size-18":"Text-module__font-size-18___2QuQW","font-size-16":"Text-module__font-size-16___3bUvR","font-size-14":"Text-module__font-size-14___1bAVG","font-size-12":"Text-module__font-size-12___2rFpl","font-size-10":"Text-module__font-size-10___2tVKI","font-weight-200":"Text-module__font-weight-200___3zjuy","font-weight-300":"Text-module__font-weight-300___3sjO1","font-weight-400":"Text-module__font-weight-400___3zaUV","font-weight-700":"Text-module__font-weight-700___24wsv","visually-hidden":"Text-module__visually-hidden___3MbXi","font-stack":"Text-module__font-stack___2T_7m"}}}]);
//# sourceMappingURL=443-0cb0c9382fd5fe050c47.js.map