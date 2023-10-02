import{r as De,ah as Be,a8 as je,x as Ke,j as P,c as x}from"./index-81b59d9c.js";import{w as ze,c as Ae,m as Ye}from"./Views-a075d396.js";import{C as Ve}from"./CloseButton-a9d506d9.js";var me={exports:{}},I={},he={exports:{}},R={},ye={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=m;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var o="none",r="contents",l=/input|select|textarea|button|object|iframe/;function d(c,p){return p.getPropertyValue("overflow")!=="visible"||c.scrollWidth<=0&&c.scrollHeight<=0}function O(c){var p=c.offsetWidth<=0&&c.offsetHeight<=0;if(p&&!c.innerHTML)return!0;try{var h=window.getComputedStyle(c),C=h.getPropertyValue("display");return p?C!==r&&d(c,h):C===o}catch{return console.warn("Failed to inspect element style"),!1}}function a(c){for(var p=c,h=c.getRootNode&&c.getRootNode();p&&p!==document.body;){if(h&&p===h&&(p=h.host.parentNode),O(p))return!1;p=p.parentNode}return!0}function y(c,p){var h=c.nodeName.toLowerCase(),C=l.test(h)&&!c.disabled||h==="a"&&c.href||p;return C&&a(c)}function v(c){var p=c.getAttribute("tabindex");p===null&&(p=void 0);var h=isNaN(p);return(h||p>=0)&&y(c,!h)}function m(c){var p=[].slice.call(c.querySelectorAll("*"),0).reduce(function(h,C){return h.concat(C.shadowRoot?m(C.shadowRoot):[C])},[]);return p.filter(v)}t.exports=e.default})(ye,ye.exports);var Pe=ye.exports;Object.defineProperty(R,"__esModule",{value:!0});R.resetState=Xe;R.log=Ze;R.handleBlur=X;R.handleFocus=Z;R.markForFocusLater=et;R.returnFocus=tt;R.popWithoutFocus=nt;R.setupScopedFocus=ot;R.teardownScopedFocus=rt;var Ge=Pe,Je=Qe(Ge);function Qe(t){return t&&t.__esModule?t:{default:t}}var K=[],j=null,be=!1;function Xe(){K=[]}function Ze(){}function X(){be=!0}function Z(){if(be){if(be=!1,!j)return;setTimeout(function(){if(!j.contains(document.activeElement)){var t=(0,Je.default)(j)[0]||j;t.focus()}},0)}}function et(){K.push(document.activeElement)}function tt(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=null;try{K.length!==0&&(e=K.pop(),e.focus({preventScroll:t}));return}catch{console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}}function nt(){K.length>0&&K.pop()}function ot(t){j=t,window.addEventListener?(window.addEventListener("blur",X,!1),document.addEventListener("focus",Z,!0)):(window.attachEvent("onBlur",X),document.attachEvent("onFocus",Z))}function rt(){j=null,window.addEventListener?(window.removeEventListener("blur",X),document.removeEventListener("focus",Z)):(window.detachEvent("onBlur",X),document.detachEvent("onFocus",Z))}var Oe={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=O;var o=Pe,r=l(o);function l(a){return a&&a.__esModule?a:{default:a}}function d(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return a.activeElement.shadowRoot?d(a.activeElement.shadowRoot):a.activeElement}function O(a,y){var v=(0,r.default)(a);if(!v.length){y.preventDefault();return}var m=void 0,c=y.shiftKey,p=v[0],h=v[v.length-1],C=d();if(a===C){if(!c)return;m=h}if(h===C&&!c&&(m=p),p===C&&c&&(m=h),m){y.preventDefault(),m.focus();return}var _=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),L=_!=null&&_[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(L){var A=v.indexOf(C);if(A>-1&&(A+=c?-1:1),m=v[A],typeof m>"u"){y.preventDefault(),m=c?h:p,m.focus();return}y.preventDefault(),m.focus()}}t.exports=e.default})(Oe,Oe.exports);var at=Oe.exports,D={},T={},xe={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(t){(function(){var e=!!(typeof window<"u"&&window.document&&window.document.createElement),o={canUseDOM:e,canUseWorkers:typeof Worker<"u",canUseEventListeners:e&&!!(window.addEventListener||window.attachEvent),canUseViewport:e&&!!window.screen};t.exports?t.exports=o:window.ExecutionEnvironment=o})()})(xe);var lt=xe.exports;Object.defineProperty(T,"__esModule",{value:!0});T.canUseDOM=T.SafeNodeList=T.SafeHTMLCollection=void 0;var st=lt,it=ut(st);function ut(t){return t&&t.__esModule?t:{default:t}}var ue=it.default,ft=ue.canUseDOM?window.HTMLElement:{};T.SafeHTMLCollection=ue.canUseDOM?window.HTMLCollection:{};T.SafeNodeList=ue.canUseDOM?window.NodeList:{};T.canUseDOM=ue.canUseDOM;T.default=ft;Object.defineProperty(D,"__esModule",{value:!0});D.resetState=mt;D.log=ht;D.assertNodeList=Fe;D.setElement=yt;D.validateElement=ge;D.hide=bt;D.show=Ot;D.documentNotReadyOrSSRTesting=gt;var ct=ze,dt=vt(ct),pt=T;function vt(t){return t&&t.__esModule?t:{default:t}}var M=null;function mt(){M&&(M.removeAttribute?M.removeAttribute("aria-hidden"):M.length!=null?M.forEach(function(t){return t.removeAttribute("aria-hidden")}):document.querySelectorAll(M).forEach(function(t){return t.removeAttribute("aria-hidden")})),M=null}function ht(){}function Fe(t,e){if(!t||!t.length)throw new Error("react-modal: No elements were found for selector "+e+".")}function yt(t){var e=t;if(typeof e=="string"&&pt.canUseDOM){var o=document.querySelectorAll(e);Fe(o,e),e=o}return M=e||M,M}function ge(t){var e=t||M;return e?Array.isArray(e)||e instanceof HTMLCollection||e instanceof NodeList?e:[e]:((0,dt.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function bt(t){var e=!0,o=!1,r=void 0;try{for(var l=ge(t)[Symbol.iterator](),d;!(e=(d=l.next()).done);e=!0){var O=d.value;O.setAttribute("aria-hidden","true")}}catch(a){o=!0,r=a}finally{try{!e&&l.return&&l.return()}finally{if(o)throw r}}}function Ot(t){var e=!0,o=!1,r=void 0;try{for(var l=ge(t)[Symbol.iterator](),d;!(e=(d=l.next()).done);e=!0){var O=d.value;O.removeAttribute("aria-hidden")}}catch(a){o=!0,r=a}finally{try{!e&&l.return&&l.return()}finally{if(o)throw r}}}function gt(){M=null}var z={};Object.defineProperty(z,"__esModule",{value:!0});z.resetState=Ct;z.log=_t;var J={},Q={};function _e(t,e){t.classList.remove(e)}function Ct(){var t=document.getElementsByTagName("html")[0];for(var e in J)_e(t,J[e]);var o=document.body;for(var r in Q)_e(o,Q[r]);J={},Q={}}function _t(){}var Et=function(e,o){return e[o]||(e[o]=0),e[o]+=1,o},St=function(e,o){return e[o]&&(e[o]-=1),o},wt=function(e,o,r){r.forEach(function(l){Et(o,l),e.add(l)})},Mt=function(e,o,r){r.forEach(function(l){St(o,l),o[l]===0&&e.remove(l)})};z.add=function(e,o){return wt(e.classList,e.nodeName.toLowerCase()=="html"?J:Q,o.split(" "))};z.remove=function(e,o){return Mt(e.classList,e.nodeName.toLowerCase()=="html"?J:Q,o.split(" "))};var Y={};Object.defineProperty(Y,"__esModule",{value:!0});Y.log=Tt;Y.resetState=Rt;function Nt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var Le=function t(){var e=this;Nt(this,t),this.register=function(o){e.openInstances.indexOf(o)===-1&&(e.openInstances.push(o),e.emit("register"))},this.deregister=function(o){var r=e.openInstances.indexOf(o);r!==-1&&(e.openInstances.splice(r,1),e.emit("deregister"))},this.subscribe=function(o){e.subscribers.push(o)},this.emit=function(o){e.subscribers.forEach(function(r){return r(o,e.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},le=new Le;function Tt(){console.log("portalOpenInstances ----------"),console.log(le.openInstances.length),le.openInstances.forEach(function(t){return console.log(t)}),console.log("end portalOpenInstances ----------")}function Rt(){le=new Le}Y.default=le;var Ce={};Object.defineProperty(Ce,"__esModule",{value:!0});Ce.resetState=xt;Ce.log=Ft;var Dt=Y,At=Pt(Dt);function Pt(t){return t&&t.__esModule?t:{default:t}}var S=void 0,N=void 0,H=[];function xt(){for(var t=[S,N],e=0;e<t.length;e++){var o=t[e];o&&o.parentNode&&o.parentNode.removeChild(o)}S=N=null,H=[]}function Ft(){console.log("bodyTrap ----------"),console.log(H.length);for(var t=[S,N],e=0;e<t.length;e++){var o=t[e],r=o||{};console.log(r.nodeName,r.className,r.id)}console.log("edn bodyTrap ----------")}function Ee(){H.length!==0&&H[H.length-1].focusContent()}function Lt(t,e){!S&&!N&&(S=document.createElement("div"),S.setAttribute("data-react-modal-body-trap",""),S.style.position="absolute",S.style.opacity="0",S.setAttribute("tabindex","0"),S.addEventListener("focus",Ee),N=S.cloneNode(),N.addEventListener("focus",Ee)),H=e,H.length>0?(document.body.firstChild!==S&&document.body.insertBefore(S,document.body.firstChild),document.body.lastChild!==N&&document.body.appendChild(N)):(S.parentElement&&S.parentElement.removeChild(S),N.parentElement&&N.parentElement.removeChild(N))}At.default.subscribe(Lt);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(f){for(var u=1;u<arguments.length;u++){var b=arguments[u];for(var n in b)Object.prototype.hasOwnProperty.call(b,n)&&(f[n]=b[n])}return f},r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(f){return typeof f}:function(f){return f&&typeof Symbol=="function"&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f},l=function(){function f(u,b){for(var n=0;n<b.length;n++){var s=b[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(u,s.key,s)}}return function(u,b,n){return b&&f(u.prototype,b),n&&f(u,n),u}}(),d=De,O=Ae,a=B(O),y=R,v=V(y),m=at,c=B(m),p=D,h=V(p),C=z,_=V(C),L=T,A=B(L),q=Y,$=B(q);function V(f){if(f&&f.__esModule)return f;var u={};if(f!=null)for(var b in f)Object.prototype.hasOwnProperty.call(f,b)&&(u[b]=f[b]);return u.default=f,u}function B(f){return f&&f.__esModule?f:{default:f}}function fe(f,u){if(!(f instanceof u))throw new TypeError("Cannot call a class as a function")}function ce(f,u){if(!f)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return u&&(typeof u=="object"||typeof u=="function")?u:f}function de(f,u){if(typeof u!="function"&&u!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof u);f.prototype=Object.create(u&&u.prototype,{constructor:{value:f,enumerable:!1,writable:!0,configurable:!0}}),u&&(Object.setPrototypeOf?Object.setPrototypeOf(f,u):f.__proto__=u)}var G={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},ne=function(u){return u.code==="Tab"||u.keyCode===9},pe=function(u){return u.code==="Escape"||u.keyCode===27},oe=0,ve=function(f){de(u,f);function u(b){fe(this,u);var n=ce(this,(u.__proto__||Object.getPrototypeOf(u)).call(this,b));return n.setOverlayRef=function(s){n.overlay=s,n.props.overlayRef&&n.props.overlayRef(s)},n.setContentRef=function(s){n.content=s,n.props.contentRef&&n.props.contentRef(s)},n.afterClose=function(){var s=n.props,E=s.appElement,w=s.ariaHideApp,g=s.htmlOpenClassName,U=s.bodyOpenClassName,W=s.parentSelector,re=W&&W().ownerDocument||document;U&&_.remove(re.body,U),g&&_.remove(re.getElementsByTagName("html")[0],g),w&&oe>0&&(oe-=1,oe===0&&h.show(E)),n.props.shouldFocusAfterRender&&(n.props.shouldReturnFocusAfterClose?(v.returnFocus(n.props.preventScroll),v.teardownScopedFocus()):v.popWithoutFocus()),n.props.onAfterClose&&n.props.onAfterClose(),$.default.deregister(n)},n.open=function(){n.beforeOpen(),n.state.afterOpen&&n.state.beforeClose?(clearTimeout(n.closeTimer),n.setState({beforeClose:!1})):(n.props.shouldFocusAfterRender&&(v.setupScopedFocus(n.node),v.markForFocusLater()),n.setState({isOpen:!0},function(){n.openAnimationFrame=requestAnimationFrame(function(){n.setState({afterOpen:!0}),n.props.isOpen&&n.props.onAfterOpen&&n.props.onAfterOpen({overlayEl:n.overlay,contentEl:n.content})})}))},n.close=function(){n.props.closeTimeoutMS>0?n.closeWithTimeout():n.closeWithoutTimeout()},n.focusContent=function(){return n.content&&!n.contentHasFocus()&&n.content.focus({preventScroll:!0})},n.closeWithTimeout=function(){var s=Date.now()+n.props.closeTimeoutMS;n.setState({beforeClose:!0,closesAt:s},function(){n.closeTimer=setTimeout(n.closeWithoutTimeout,n.state.closesAt-Date.now())})},n.closeWithoutTimeout=function(){n.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},n.afterClose)},n.handleKeyDown=function(s){ne(s)&&(0,c.default)(n.content,s),n.props.shouldCloseOnEsc&&pe(s)&&(s.stopPropagation(),n.requestClose(s))},n.handleOverlayOnClick=function(s){n.shouldClose===null&&(n.shouldClose=!0),n.shouldClose&&n.props.shouldCloseOnOverlayClick&&(n.ownerHandlesClose()?n.requestClose(s):n.focusContent()),n.shouldClose=null},n.handleContentOnMouseUp=function(){n.shouldClose=!1},n.handleOverlayOnMouseDown=function(s){!n.props.shouldCloseOnOverlayClick&&s.target==n.overlay&&s.preventDefault()},n.handleContentOnClick=function(){n.shouldClose=!1},n.handleContentOnMouseDown=function(){n.shouldClose=!1},n.requestClose=function(s){return n.ownerHandlesClose()&&n.props.onRequestClose(s)},n.ownerHandlesClose=function(){return n.props.onRequestClose},n.shouldBeClosed=function(){return!n.state.isOpen&&!n.state.beforeClose},n.contentHasFocus=function(){return document.activeElement===n.content||n.content.contains(document.activeElement)},n.buildClassName=function(s,E){var w=(typeof E>"u"?"undefined":r(E))==="object"?E:{base:G[s],afterOpen:G[s]+"--after-open",beforeClose:G[s]+"--before-close"},g=w.base;return n.state.afterOpen&&(g=g+" "+w.afterOpen),n.state.beforeClose&&(g=g+" "+w.beforeClose),typeof E=="string"&&E?g+" "+E:g},n.attributesFromObject=function(s,E){return Object.keys(E).reduce(function(w,g){return w[s+"-"+g]=E[g],w},{})},n.state={afterOpen:!1,beforeClose:!1},n.shouldClose=null,n.moveFromContentToOverlay=null,n}return l(u,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(n,s){this.props.isOpen&&!n.isOpen?this.open():!this.props.isOpen&&n.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!s.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var n=this.props,s=n.appElement,E=n.ariaHideApp,w=n.htmlOpenClassName,g=n.bodyOpenClassName,U=n.parentSelector,W=U&&U().ownerDocument||document;g&&_.add(W.body,g),w&&_.add(W.getElementsByTagName("html")[0],w),E&&(oe+=1,h.hide(s)),$.default.register(this)}},{key:"render",value:function(){var n=this.props,s=n.id,E=n.className,w=n.overlayClassName,g=n.defaultStyles,U=n.children,W=E?{}:g.content,re=w?{}:g.overlay;if(this.shouldBeClosed())return null;var Ie={ref:this.setOverlayRef,className:this.buildClassName("overlay",w),style:o({},re,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},qe=o({id:s,ref:this.setContentRef,style:o({},W,this.props.style.content),className:this.buildClassName("content",E),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",o({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),$e=this.props.contentElement(qe,U);return this.props.overlayElement(Ie,$e)}}]),u}(d.Component);ve.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},ve.propTypes={isOpen:a.default.bool.isRequired,defaultStyles:a.default.shape({content:a.default.object,overlay:a.default.object}),style:a.default.shape({content:a.default.object,overlay:a.default.object}),className:a.default.oneOfType([a.default.string,a.default.object]),overlayClassName:a.default.oneOfType([a.default.string,a.default.object]),parentSelector:a.default.func,bodyOpenClassName:a.default.string,htmlOpenClassName:a.default.string,ariaHideApp:a.default.bool,appElement:a.default.oneOfType([a.default.instanceOf(A.default),a.default.instanceOf(L.SafeHTMLCollection),a.default.instanceOf(L.SafeNodeList),a.default.arrayOf(a.default.instanceOf(A.default))]),onAfterOpen:a.default.func,onAfterClose:a.default.func,onRequestClose:a.default.func,closeTimeoutMS:a.default.number,shouldFocusAfterRender:a.default.bool,shouldCloseOnOverlayClick:a.default.bool,shouldReturnFocusAfterClose:a.default.bool,preventScroll:a.default.bool,role:a.default.string,contentLabel:a.default.string,aria:a.default.object,data:a.default.object,children:a.default.node,shouldCloseOnEsc:a.default.bool,overlayRef:a.default.func,contentRef:a.default.func,id:a.default.string,overlayElement:a.default.func,contentElement:a.default.func,testId:a.default.string},e.default=ve,t.exports=e.default})(he,he.exports);var Ut=he.exports;function Ue(){var t=this.constructor.getDerivedStateFromProps(this.props,this.state);t!=null&&this.setState(t)}function We(t){function e(o){var r=this.constructor.getDerivedStateFromProps(t,o);return r??null}this.setState(e.bind(this))}function ke(t,e){try{var o=this.props,r=this.state;this.props=t,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(o,r)}finally{this.props=o,this.state=r}}Ue.__suppressDeprecationWarning=!0;We.__suppressDeprecationWarning=!0;ke.__suppressDeprecationWarning=!0;function Wt(t){var e=t.prototype;if(!e||!e.isReactComponent)throw new Error("Can only polyfill class components");if(typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function")return t;var o=null,r=null,l=null;if(typeof e.componentWillMount=="function"?o="componentWillMount":typeof e.UNSAFE_componentWillMount=="function"&&(o="UNSAFE_componentWillMount"),typeof e.componentWillReceiveProps=="function"?r="componentWillReceiveProps":typeof e.UNSAFE_componentWillReceiveProps=="function"&&(r="UNSAFE_componentWillReceiveProps"),typeof e.componentWillUpdate=="function"?l="componentWillUpdate":typeof e.UNSAFE_componentWillUpdate=="function"&&(l="UNSAFE_componentWillUpdate"),o!==null||r!==null||l!==null){var d=t.displayName||t.name,O=typeof t.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+d+" uses "+O+" but also contains the following legacy lifecycles:"+(o!==null?`
  `+o:"")+(r!==null?`
  `+r:"")+(l!==null?`
  `+l:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof t.getDerivedStateFromProps=="function"&&(e.componentWillMount=Ue,e.componentWillReceiveProps=We),typeof e.getSnapshotBeforeUpdate=="function"){if(typeof e.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");e.componentWillUpdate=ke;var a=e.componentDidUpdate;e.componentDidUpdate=function(v,m,c){var p=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:c;a.call(this,v,m,p)}}return t}const kt=Object.freeze(Object.defineProperty({__proto__:null,polyfill:Wt},Symbol.toStringTag,{value:"Module"})),Ht=Be(kt);Object.defineProperty(I,"__esModule",{value:!0});I.bodyOpenClassName=I.portalClassName=void 0;var Se=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},It=function(){function t(e,o){for(var r=0;r<o.length;r++){var l=o[r];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(e,o,r){return o&&t(e.prototype,o),r&&t(e,r),e}}(),He=De,se=ee(He),qt=je,ie=ee(qt),$t=Ae,i=ee($t),Bt=Ut,we=ee(Bt),jt=D,Kt=Yt(jt),F=T,Me=ee(F),zt=Ht;function Yt(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e}function ee(t){return t&&t.__esModule?t:{default:t}}function Vt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ne(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Gt(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Jt=I.portalClassName="ReactModalPortal",Qt=I.bodyOpenClassName="ReactModal__Body--open",k=F.canUseDOM&&ie.default.createPortal!==void 0,Te=function(e){return document.createElement(e)},Re=function(){return k?ie.default.createPortal:ie.default.unstable_renderSubtreeIntoContainer};function ae(t){return t()}var te=function(t){Gt(e,t);function e(){var o,r,l,d;Vt(this,e);for(var O=arguments.length,a=Array(O),y=0;y<O;y++)a[y]=arguments[y];return d=(r=(l=Ne(this,(o=e.__proto__||Object.getPrototypeOf(e)).call.apply(o,[this].concat(a))),l),l.removePortal=function(){!k&&ie.default.unmountComponentAtNode(l.node);var v=ae(l.props.parentSelector);v&&v.contains(l.node)?v.removeChild(l.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},l.portalRef=function(v){l.portal=v},l.renderPortal=function(v){var m=Re(),c=m(l,se.default.createElement(we.default,Se({defaultStyles:e.defaultStyles},v)),l.node);l.portalRef(c)},r),Ne(l,d)}return It(e,[{key:"componentDidMount",value:function(){if(F.canUseDOM){k||(this.node=Te("div")),this.node.className=this.props.portalClassName;var r=ae(this.props.parentSelector);r.appendChild(this.node),!k&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(r){var l=ae(r.parentSelector),d=ae(this.props.parentSelector);return{prevParent:l,nextParent:d}}},{key:"componentDidUpdate",value:function(r,l,d){if(F.canUseDOM){var O=this.props,a=O.isOpen,y=O.portalClassName;r.portalClassName!==y&&(this.node.className=y);var v=d.prevParent,m=d.nextParent;m!==v&&(v.removeChild(this.node),m.appendChild(this.node)),!(!r.isOpen&&!a)&&!k&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!F.canUseDOM||!this.node||!this.portal)){var r=this.portal.state,l=Date.now(),d=r.isOpen&&this.props.closeTimeoutMS&&(r.closesAt||l+this.props.closeTimeoutMS);d?(r.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,d-l)):this.removePortal()}}},{key:"render",value:function(){if(!F.canUseDOM||!k)return null;!this.node&&k&&(this.node=Te("div"));var r=Re();return r(se.default.createElement(we.default,Se({ref:this.portalRef,defaultStyles:e.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(r){Kt.setElement(r)}}]),e}(He.Component);te.propTypes={isOpen:i.default.bool.isRequired,style:i.default.shape({content:i.default.object,overlay:i.default.object}),portalClassName:i.default.string,bodyOpenClassName:i.default.string,htmlOpenClassName:i.default.string,className:i.default.oneOfType([i.default.string,i.default.shape({base:i.default.string.isRequired,afterOpen:i.default.string.isRequired,beforeClose:i.default.string.isRequired})]),overlayClassName:i.default.oneOfType([i.default.string,i.default.shape({base:i.default.string.isRequired,afterOpen:i.default.string.isRequired,beforeClose:i.default.string.isRequired})]),appElement:i.default.oneOfType([i.default.instanceOf(Me.default),i.default.instanceOf(F.SafeHTMLCollection),i.default.instanceOf(F.SafeNodeList),i.default.arrayOf(i.default.instanceOf(Me.default))]),onAfterOpen:i.default.func,onRequestClose:i.default.func,closeTimeoutMS:i.default.number,ariaHideApp:i.default.bool,shouldFocusAfterRender:i.default.bool,shouldCloseOnOverlayClick:i.default.bool,shouldReturnFocusAfterClose:i.default.bool,preventScroll:i.default.bool,parentSelector:i.default.func,aria:i.default.object,data:i.default.object,role:i.default.string,contentLabel:i.default.string,shouldCloseOnEsc:i.default.bool,overlayRef:i.default.func,contentRef:i.default.func,id:i.default.string,overlayElement:i.default.func,contentElement:i.default.func};te.defaultProps={isOpen:!1,portalClassName:Jt,bodyOpenClassName:Qt,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,o){return se.default.createElement("div",e,o)},contentElement:function(e,o){return se.default.createElement("div",e,o)}};te.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,zt.polyfill)(te);I.default=te;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var o=I,r=l(o);function l(d){return d&&d.__esModule?d:{default:d}}e.default=r.default,t.exports=e.default})(me,me.exports);var Xt=me.exports;const Zt=Ke(Xt),en=t=>{const{bodyOpenClassName:e,bodyClass:o,children:r,className:l,closable:d=!0,closeTimeoutMS:O=300,footer:a,footerClass:y,headerClass:v,height:m=400,isOpen:c,lockScroll:p=!0,onClose:h,overlayClassName:C,placement:_="right",portalClassName:L,showBackdrop:A=!0,title:q,width:$=400,...V}=t,B=pe=>{h==null||h(pe)},fe=P.jsx(Ve,{onClick:B}),ce=()=>_==="left"||_==="right"?{dimensionClass:"vertical",contentStyle:{width:$},motionStyle:{[_]:`-${$}${typeof $=="number"&&"px"}`}}:_==="top"||_==="bottom"?{dimensionClass:"horizontal",contentStyle:{height:m},motionStyle:{[_]:`-${m}${typeof m=="number"&&"px"}`}}:{motionStyle:{}},{dimensionClass:de,contentStyle:G,motionStyle:ne}=ce();return P.jsx(Zt,{className:{base:x("drawer",l),afterOpen:"drawer-after-open",beforeClose:"drawer-before-close"},overlayClassName:{base:x("drawer-overlay",C,!A&&"bg-transparent"),afterOpen:"drawer-overlay-after-open",beforeClose:"drawer-overlay-before-close"},portalClassName:x("drawer-portal",L),bodyOpenClassName:x("drawer-open",p&&"drawer-lock-scroll",e),ariaHideApp:!1,isOpen:c,closeTimeoutMS:O,...V,children:P.jsxs(Ye.div,{className:x("drawer-content",de),style:G,initial:ne,animate:{[_]:c?0:ne[_]},children:[q||d?P.jsxs("div",{className:x("drawer-header",v),children:[typeof q=="string"?P.jsx("h4",{children:q}):P.jsx("span",{children:q}),d&&fe]}):null,P.jsx("div",{className:x("drawer-body",o),children:r}),a&&P.jsx("div",{className:x("drawer-footer",y),children:a})]})})};en.displayName="Drawer";export{en as D,Zt as M};
