(window.webpackJsonp=window.webpackJsonp||[]).push([[365],{2525:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(n(0)),o=i(n(875));function i(e){return e&&e.__esModule?e:{default:e}}var a=function(){return l.default.createElement(o.default,{id:"longText",labelText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"})};t.default=a},875:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=c(n(0)),o=c(n(3)),i=c(n(18)),a=c(n(5)),u=c(n(10)),r=c(n(919)),d=c(n(920));function c(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var h=a.default.bind(r.default),p={checked:o.default.bool,defaultChecked:o.default.bool,id:o.default.string,inputAttrs:o.default.object,disabled:o.default.bool,isInline:o.default.bool,isLabelHidden:o.default.bool,labelText:o.default.string.isRequired,labelTextAttrs:o.default.object,name:o.default.string,onBlur:o.default.func,onChange:o.default.func,onFocus:o.default.func,value:o.default.string},_={checked:void 0,defaultChecked:void 0,id:void 0,inputAttrs:{},disabled:!1,isInline:!1,isLabelHidden:!1,labelTextAttrs:{},name:null,onBlur:void 0,onChange:void 0,onFocus:void 0,value:void 0},v=function(e){var t=e.checked,n=e.defaultChecked,o=e.inputAttrs,a=e.id,r=e.disabled,c=e.isInline,p=e.isLabelHidden,_=e.labelText,v=e.labelTextAttrs,x=e.name,g=e.onBlur,O=e.onChange,k=e.onFocus,C=e.value,w=m(e,["checked","defaultChecked","inputAttrs","id","disabled","isInline","isLabelHidden","labelText","labelTextAttrs","name","onBlur","onChange","onFocus","value"]),y=l.default.useContext(u.default),j=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},o);void 0!==t?j.checked=t:j.defaultChecked=n;var P=(0,i.default)(h("checkbox",{"is-inline":c},y.className),w.className),T=h(["label",{"is-disabled":r},{"is-mobile":d.default.isConsideredMobileDevice()},v.className]),D=h(["native-input",o.className]),E=h(["label-text",{"is-hidden":p},{"is-mobile":d.default.isConsideredMobileDevice()}]),M=null;return p?(j["aria-label"]=_,M=l.default.createElement("span",s({},v,{className:E}))):M=l.default.createElement("span",s({},v,{className:E}),_),l.default.createElement("div",s({},w,{className:P}),l.default.createElement("label",{htmlFor:a,className:T},l.default.createElement("input",s({},j,{type:"checkbox",id:a,disabled:r,name:x,value:C,onChange:O,onFocus:k,onBlur:g,className:D})),M))};v.propTypes=p,v.defaultProps=_,v.isCheckbox=!0;var x=v;t.default=x},919:function(e,t,n){e.exports={"clinical-lowlight-theme":"Checkbox-module__clinical-lowlight-theme___1I7Gn","orion-fusion-theme":"Checkbox-module__orion-fusion-theme___29m2d",checkbox:"Checkbox-module__checkbox___1DzDw",label:"Checkbox-module__label___GWPVb","is-mobile":"Checkbox-module__is-mobile___13DUd","native-input":"Checkbox-module__native-input___1CCoe","label-text":"Checkbox-module__label-text___3q5Qm","is-hidden":"Checkbox-module__is-hidden___1VqYx","is-disabled":"Checkbox-module__is-disabled___3ERR9","is-inline":"Checkbox-module__is-inline___2HYdD"}},920:function(e,t,n){"use strict";var l={isConsideredMobileDevice:function(){return window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)}};e.exports=l}}]);
//# sourceMappingURL=365-7aeef1e18a9ba18e3bb3.js.map