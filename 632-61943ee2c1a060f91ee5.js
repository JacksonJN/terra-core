(window.webpackJsonp=window.webpackJsonp||[]).push([[632],{2848:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(i(0)),a=o(i(1221));function o(t){return t&&t.__esModule?t:{default:t}}e.default=function(){return n.default.createElement(a.default,{title:"Default Toggle Section Header"},n.default.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))}},863:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=u(i(0)),r=u(i(3)),l=u(i(18));function u(t){return t&&t.__esModule?t:{default:t}}function h(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var c={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"},m=["animateOpacity","animationStateClasses","applyInlineTransitions","children","contentClassName","delay","duration","easing","height","onAnimationEnd","onAnimationStart"];function f(t){for(var e=arguments.length,i=Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];if(!i.length)return t;for(var a={},o=Object.keys(t),s=0;s<o.length;s++){var r=o[s];-1===i.indexOf(r)&&(a[r]=t[r])}return a}function d(t){t.forEach((function(t){return cancelAnimationFrame(t)}))}function g(t){return!isNaN(parseFloat(t))&&isFinite(t)}function p(t){return"string"==typeof t&&t.search("%")===t.length-1&&g(t.substr(0,t.length-1))}function y(t,e){t&&"function"==typeof t&&t(e)}var v=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var i=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));i.animationFrameIDs=[];var n="auto",o="visible";g(t.height)?(n=t.height<0||"0"===t.height?0:t.height,o="hidden"):p(t.height)&&(n="0%"===t.height?0:t.height,o="hidden"),i.animationStateClasses=a({},c,t.animationStateClasses);var s=i.getStaticStateClasses(n);return i.state={animationStateClasses:s,height:n,overflow:o,shouldUseTransitions:!1},i}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"componentDidMount",value:function(){var t=this.state.height;this.contentElement&&this.contentElement.style&&this.hideContent(t)}},{key:"componentDidUpdate",value:function(t,e){var i,n,a=this,o=this.props,s=o.delay,r=o.duration,u=o.height,c=o.onAnimationEnd,m=o.onAnimationStart;if(this.contentElement&&u!==t.height){var f;this.showContent(e.height),this.contentElement.style.overflow="hidden";var v=this.contentElement.offsetHeight;this.contentElement.style.overflow="";var b=r+s,S=null,C={height:null,overflow:"hidden"},w="auto"===e.height;g(u)?(S=u<0||"0"===u?0:u,C.height=S):p(u)?(S="0%"===u?0:u,C.height=S):(S=v,C.height="auto",C.overflow=null),w&&(C.height=S,S=v);var T=(0,l.default)((h(f={},this.animationStateClasses.animating,!0),h(f,this.animationStateClasses.animatingUp,"auto"===t.height||u<t.height),h(f,this.animationStateClasses.animatingDown,"auto"===u||u>t.height),h(f,this.animationStateClasses.animatingToHeightZero,0===C.height),h(f,this.animationStateClasses.animatingToHeightAuto,"auto"===C.height),h(f,this.animationStateClasses.animatingToHeightSpecific,C.height>0),f)),E=this.getStaticStateClasses(C.height);this.setState({animationStateClasses:T,height:S,overflow:"hidden",shouldUseTransitions:!w}),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),w?(C.shouldUseTransitions=!0,d(this.animationFrameIDs),this.animationFrameIDs=(i=function(){a.setState(C),y(m,{newHeight:C.height})},(n=[])[0]=requestAnimationFrame((function(){n[1]=requestAnimationFrame((function(){i()}))})),n),this.animationClassesTimeoutID=setTimeout((function(){a.setState({animationStateClasses:E,shouldUseTransitions:!1}),a.hideContent(C.height),y(c,{newHeight:C.height})}),b)):(y(m,{newHeight:S}),this.timeoutID=setTimeout((function(){C.animationStateClasses=E,C.shouldUseTransitions=!1,a.setState(C),"auto"!==u&&a.hideContent(S),y(c,{newHeight:S})}),b))}}},{key:"componentWillUnmount",value:function(){d(this.animationFrameIDs),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),this.timeoutID=null,this.animationClassesTimeoutID=null,this.animationStateClasses=null}},{key:"showContent",value:function(t){0===t&&(this.contentElement.style.display="")}},{key:"hideContent",value:function(t){0===t&&(this.contentElement.style.display="none")}},{key:"getStaticStateClasses",value:function(t){var e;return(0,l.default)((h(e={},this.animationStateClasses.static,!0),h(e,this.animationStateClasses.staticHeightZero,0===t),h(e,this.animationStateClasses.staticHeightSpecific,t>0),h(e,this.animationStateClasses.staticHeightAuto,"auto"===t),e))}},{key:"render",value:function(){var t,e=this,i=this.props,n=i.animateOpacity,o=i.applyInlineTransitions,r=i.children,u=i.className,c=i.contentClassName,d=i.duration,g=i.easing,p=i.delay,y=i.style,v=this.state,b=v.height,S=v.overflow,C=v.animationStateClasses,w=v.shouldUseTransitions,T=a({},y,{height:b,overflow:S||y.overflow});w&&o&&(T.transition="height "+d+"ms "+g+" "+p+"ms",y.transition&&(T.transition=y.transition+", "+T.transition),T.WebkitTransition=T.transition);var E={};n&&(E.transition="opacity "+d+"ms "+g+" "+p+"ms",E.WebkitTransition=E.transition,0===b&&(E.opacity=0));var O=(0,l.default)((h(t={},C,!0),h(t,u,u),t));return s.default.createElement("div",a({},f.apply(void 0,[this.props].concat(m)),{"aria-hidden":0===b,className:O,style:T}),s.default.createElement("div",{className:c,style:E,ref:function(t){return e.contentElement=t}},r))}}]),e}(s.default.Component);v.propTypes={animateOpacity:r.default.bool,animationStateClasses:r.default.object,applyInlineTransitions:r.default.bool,children:r.default.any.isRequired,className:r.default.string,contentClassName:r.default.string,duration:r.default.number,delay:r.default.number,easing:r.default.string,height:function(t,e,i){var a=t[e];return"number"==typeof a&&a>=0||p(a)||"auto"===a?null:new TypeError('value "'+a+'" of type "'+("undefined"==typeof a?"undefined":n(a))+'" is invalid type for '+e+" in "+i+'. It needs to be a positive number, string "auto" or percentage string (e.g. "15%").')},onAnimationEnd:r.default.func,onAnimationStart:r.default.func,style:r.default.object},v.defaultProps={animateOpacity:!1,animationStateClasses:c,applyInlineTransitions:!0,duration:250,delay:0,easing:"ease",style:{}},e.default=v}}]);
//# sourceMappingURL=632-61943ee2c1a060f91ee5.js.map