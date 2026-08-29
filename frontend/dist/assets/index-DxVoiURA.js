(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function xp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var wc={exports:{}},Ga={},kc={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var In=Symbol.for("react.element"),vp=Symbol.for("react.portal"),yp=Symbol.for("react.fragment"),bp=Symbol.for("react.strict_mode"),jp=Symbol.for("react.profiler"),wp=Symbol.for("react.provider"),kp=Symbol.for("react.context"),Np=Symbol.for("react.forward_ref"),Sp=Symbol.for("react.suspense"),Cp=Symbol.for("react.memo"),zp=Symbol.for("react.lazy"),Jo=Symbol.iterator;function Mp(e){return e===null||typeof e!="object"?null:(e=Jo&&e[Jo]||e["@@iterator"],typeof e=="function"?e:null)}var Nc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Sc=Object.assign,Cc={};function Vr(e,t,n){this.props=e,this.context=t,this.refs=Cc,this.updater=n||Nc}Vr.prototype.isReactComponent={};Vr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Vr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function zc(){}zc.prototype=Vr.prototype;function Ki(e,t,n){this.props=e,this.context=t,this.refs=Cc,this.updater=n||Nc}var Qi=Ki.prototype=new zc;Qi.constructor=Ki;Sc(Qi,Vr.prototype);Qi.isPureReactComponent=!0;var Xo=Array.isArray,Mc=Object.prototype.hasOwnProperty,Yi={current:null},Pc={key:!0,ref:!0,__self:!0,__source:!0};function Ec(e,t,n){var a,s={},i=null,o=null;if(t!=null)for(a in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)Mc.call(t,a)&&!Pc.hasOwnProperty(a)&&(s[a]=t[a]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];s.children=c}if(e&&e.defaultProps)for(a in l=e.defaultProps,l)s[a]===void 0&&(s[a]=l[a]);return{$$typeof:In,type:e,key:i,ref:o,props:s,_owner:Yi.current}}function Pp(e,t){return{$$typeof:In,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ji(e){return typeof e=="object"&&e!==null&&e.$$typeof===In}function Ep(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Zo=/\/+/g;function ds(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ep(""+e.key):t.toString(36)}function ca(e,t,n,a,s){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case In:case vp:o=!0}}if(o)return o=e,s=s(o),e=a===""?"."+ds(o,0):a,Xo(s)?(n="",e!=null&&(n=e.replace(Zo,"$&/")+"/"),ca(s,t,n,"",function(u){return u})):s!=null&&(Ji(s)&&(s=Pp(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Zo,"$&/")+"/")+e)),t.push(s)),1;if(o=0,a=a===""?".":a+":",Xo(e))for(var l=0;l<e.length;l++){i=e[l];var c=a+ds(i,l);o+=ca(i,t,n,c,s)}else if(c=Mp(e),typeof c=="function")for(e=c.call(e),l=0;!(i=e.next()).done;)i=i.value,c=a+ds(i,l++),o+=ca(i,t,n,c,s);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Wn(e,t,n){if(e==null)return e;var a=[],s=0;return ca(e,a,"","",function(i){return t.call(n,i,s++)}),a}function Tp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ee={current:null},da={transition:null},Bp={ReactCurrentDispatcher:Ee,ReactCurrentBatchConfig:da,ReactCurrentOwner:Yi};function Tc(){throw Error("act(...) is not supported in production builds of React.")}H.Children={map:Wn,forEach:function(e,t,n){Wn(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Wn(e,function(){t++}),t},toArray:function(e){return Wn(e,function(t){return t})||[]},only:function(e){if(!Ji(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};H.Component=Vr;H.Fragment=yp;H.Profiler=jp;H.PureComponent=Ki;H.StrictMode=bp;H.Suspense=Sp;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bp;H.act=Tc;H.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=Sc({},e.props),s=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=Yi.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Mc.call(t,c)&&!Pc.hasOwnProperty(c)&&(a[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)a.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];a.children=l}return{$$typeof:In,type:e.type,key:s,ref:i,props:a,_owner:o}};H.createContext=function(e){return e={$$typeof:kp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:wp,_context:e},e.Consumer=e};H.createElement=Ec;H.createFactory=function(e){var t=Ec.bind(null,e);return t.type=e,t};H.createRef=function(){return{current:null}};H.forwardRef=function(e){return{$$typeof:Np,render:e}};H.isValidElement=Ji;H.lazy=function(e){return{$$typeof:zp,_payload:{_status:-1,_result:e},_init:Tp}};H.memo=function(e,t){return{$$typeof:Cp,type:e,compare:t===void 0?null:t}};H.startTransition=function(e){var t=da.transition;da.transition={};try{e()}finally{da.transition=t}};H.unstable_act=Tc;H.useCallback=function(e,t){return Ee.current.useCallback(e,t)};H.useContext=function(e){return Ee.current.useContext(e)};H.useDebugValue=function(){};H.useDeferredValue=function(e){return Ee.current.useDeferredValue(e)};H.useEffect=function(e,t){return Ee.current.useEffect(e,t)};H.useId=function(){return Ee.current.useId()};H.useImperativeHandle=function(e,t,n){return Ee.current.useImperativeHandle(e,t,n)};H.useInsertionEffect=function(e,t){return Ee.current.useInsertionEffect(e,t)};H.useLayoutEffect=function(e,t){return Ee.current.useLayoutEffect(e,t)};H.useMemo=function(e,t){return Ee.current.useMemo(e,t)};H.useReducer=function(e,t,n){return Ee.current.useReducer(e,t,n)};H.useRef=function(e){return Ee.current.useRef(e)};H.useState=function(e){return Ee.current.useState(e)};H.useSyncExternalStore=function(e,t,n){return Ee.current.useSyncExternalStore(e,t,n)};H.useTransition=function(){return Ee.current.useTransition()};H.version="18.3.1";kc.exports=H;var j=kc.exports;const Ap=xp(j);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _p=j,Fp=Symbol.for("react.element"),Ip=Symbol.for("react.fragment"),Rp=Object.prototype.hasOwnProperty,Lp=_p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Op={key:!0,ref:!0,__self:!0,__source:!0};function Bc(e,t,n){var a,s={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(a in t)Rp.call(t,a)&&!Op.hasOwnProperty(a)&&(s[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps,t)s[a]===void 0&&(s[a]=t[a]);return{$$typeof:Fp,type:e,key:i,ref:o,props:s,_owner:Lp.current}}Ga.Fragment=Ip;Ga.jsx=Bc;Ga.jsxs=Bc;wc.exports=Ga;var r=wc.exports,Hs={},Ac={exports:{}},qe={},_c={exports:{}},Fc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,$){var b=A.length;A.push($);e:for(;0<b;){var x=b-1>>>1,M=A[x];if(0<s(M,$))A[x]=$,A[b]=M,b=x;else break e}}function n(A){return A.length===0?null:A[0]}function a(A){if(A.length===0)return null;var $=A[0],b=A.pop();if(b!==$){A[0]=b;e:for(var x=0,M=A.length,I=M>>>1;x<I;){var L=2*(x+1)-1,U=A[L],V=L+1,D=A[V];if(0>s(U,b))V<M&&0>s(D,U)?(A[x]=D,A[V]=b,x=V):(A[x]=U,A[L]=b,x=L);else if(V<M&&0>s(D,b))A[x]=D,A[V]=b,x=V;else break e}}return $}function s(A,$){var b=A.sortIndex-$.sortIndex;return b!==0?b:A.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var c=[],u=[],f=1,h=null,m=3,v=!1,y=!1,k=!1,N=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(A){for(var $=n(u);$!==null;){if($.callback===null)a(u);else if($.startTime<=A)a(u),$.sortIndex=$.expirationTime,t(c,$);else break;$=n(u)}}function w(A){if(k=!1,g(A),!y)if(n(c)!==null)y=!0,W(z);else{var $=n(u);$!==null&&J(w,$.startTime-A)}}function z(A,$){y=!1,k&&(k=!1,d(B),B=-1),v=!0;var b=m;try{for(g($),h=n(c);h!==null&&(!(h.expirationTime>$)||A&&!O());){var x=h.callback;if(typeof x=="function"){h.callback=null,m=h.priorityLevel;var M=x(h.expirationTime<=$);$=e.unstable_now(),typeof M=="function"?h.callback=M:h===n(c)&&a(c),g($)}else a(c);h=n(c)}if(h!==null)var I=!0;else{var L=n(u);L!==null&&J(w,L.startTime-$),I=!1}return I}finally{h=null,m=b,v=!1}}var S=!1,E=null,B=-1,T=5,C=-1;function O(){return!(e.unstable_now()-C<T)}function R(){if(E!==null){var A=e.unstable_now();C=A;var $=!0;try{$=E(!0,A)}finally{$?G():(S=!1,E=null)}}else S=!1}var G;if(typeof p=="function")G=function(){p(R)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,Y=Z.port2;Z.port1.onmessage=R,G=function(){Y.postMessage(null)}}else G=function(){N(R,0)};function W(A){E=A,S||(S=!0,G())}function J(A,$){B=N(function(){A(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,W(z))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(A){switch(m){case 1:case 2:case 3:var $=3;break;default:$=m}var b=m;m=$;try{return A()}finally{m=b}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,$){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var b=m;m=A;try{return $()}finally{m=b}},e.unstable_scheduleCallback=function(A,$,b){var x=e.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?x+b:x):b=x,A){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=b+M,A={id:f++,callback:$,priorityLevel:A,startTime:b,expirationTime:M,sortIndex:-1},b>x?(A.sortIndex=b,t(u,A),n(c)===null&&A===n(u)&&(k?(d(B),B=-1):k=!0,J(w,b-x))):(A.sortIndex=M,t(c,A),y||v||(y=!0,W(z))),A},e.unstable_shouldYield=O,e.unstable_wrapCallback=function(A){var $=m;return function(){var b=m;m=$;try{return A.apply(this,arguments)}finally{m=b}}}})(Fc);_c.exports=Fc;var Dp=_c.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p=j,We=Dp;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ic=new Set,gn={};function pr(e,t){Ir(e,t),Ir(e+"Capture",t)}function Ir(e,t){for(gn[e]=t,e=0;e<t.length;e++)Ic.add(t[e])}var kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qs=Object.prototype.hasOwnProperty,Up=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,el={},tl={};function Vp(e){return qs.call(tl,e)?!0:qs.call(el,e)?!1:Up.test(e)?tl[e]=!0:(el[e]=!0,!1)}function Wp(e,t,n,a){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Hp(e,t,n,a){if(t===null||typeof t>"u"||Wp(e,t,n,a))return!0;if(a)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Te(e,t,n,a,s,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var we={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){we[e]=new Te(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];we[t]=new Te(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){we[e]=new Te(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){we[e]=new Te(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){we[e]=new Te(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){we[e]=new Te(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){we[e]=new Te(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){we[e]=new Te(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){we[e]=new Te(e,5,!1,e.toLowerCase(),null,!1,!1)});var Xi=/[\-:]([a-z])/g;function Zi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Xi,Zi);we[t]=new Te(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Xi,Zi);we[t]=new Te(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Xi,Zi);we[t]=new Te(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){we[e]=new Te(e,1,!1,e.toLowerCase(),null,!1,!1)});we.xlinkHref=new Te("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){we[e]=new Te(e,1,!1,e.toLowerCase(),null,!0,!0)});function eo(e,t,n,a){var s=we.hasOwnProperty(t)?we[t]:null;(s!==null?s.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Hp(t,n,s,a)&&(n=null),a||s===null?Vp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,a=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,a?e.setAttributeNS(a,t,n):e.setAttribute(t,n))))}var Mt=$p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Hn=Symbol.for("react.element"),vr=Symbol.for("react.portal"),yr=Symbol.for("react.fragment"),to=Symbol.for("react.strict_mode"),Gs=Symbol.for("react.profiler"),Rc=Symbol.for("react.provider"),Lc=Symbol.for("react.context"),ro=Symbol.for("react.forward_ref"),Ks=Symbol.for("react.suspense"),Qs=Symbol.for("react.suspense_list"),no=Symbol.for("react.memo"),Tt=Symbol.for("react.lazy"),Oc=Symbol.for("react.offscreen"),rl=Symbol.iterator;function Gr(e){return e===null||typeof e!="object"?null:(e=rl&&e[rl]||e["@@iterator"],typeof e=="function"?e:null)}var ce=Object.assign,us;function tn(e){if(us===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);us=t&&t[1]||""}return`
`+us+e}var ps=!1;function ms(e,t){if(!e||ps)return"";ps=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var a=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){a=u}e.call(t.prototype)}else{try{throw Error()}catch(u){a=u}e()}}catch(u){if(u&&a&&typeof u.stack=="string"){for(var s=u.stack.split(`
`),i=a.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var c=`
`+s[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=l);break}}}finally{ps=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?tn(e):""}function qp(e){switch(e.tag){case 5:return tn(e.type);case 16:return tn("Lazy");case 13:return tn("Suspense");case 19:return tn("SuspenseList");case 0:case 2:case 15:return e=ms(e.type,!1),e;case 11:return e=ms(e.type.render,!1),e;case 1:return e=ms(e.type,!0),e;default:return""}}function Ys(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case yr:return"Fragment";case vr:return"Portal";case Gs:return"Profiler";case to:return"StrictMode";case Ks:return"Suspense";case Qs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Lc:return(e.displayName||"Context")+".Consumer";case Rc:return(e._context.displayName||"Context")+".Provider";case ro:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case no:return t=e.displayName||null,t!==null?t:Ys(e.type)||"Memo";case Tt:t=e._payload,e=e._init;try{return Ys(e(t))}catch{}}return null}function Gp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ys(t);case 8:return t===to?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function qt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Dc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Kp(e){var t=Dc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(o){a=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function qn(e){e._valueTracker||(e._valueTracker=Kp(e))}function $c(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Dc(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function wa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Js(e,t){var n=t.checked;return ce({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function nl(e,t){var n=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;n=qt(t.value!=null?t.value:n),e._wrapperState={initialChecked:a,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Uc(e,t){t=t.checked,t!=null&&eo(e,"checked",t,!1)}function Xs(e,t){Uc(e,t);var n=qt(t.value),a=t.type;if(n!=null)a==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Zs(e,t.type,n):t.hasOwnProperty("defaultValue")&&Zs(e,t.type,qt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function al(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Zs(e,t,n){(t!=="number"||wa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var rn=Array.isArray;function Er(e,t,n,a){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&a&&(e[n].defaultSelected=!0)}else{for(n=""+qt(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,a&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function ei(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return ce({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function sl(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(rn(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:qt(n)}}function Vc(e,t){var n=qt(t.value),a=qt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),a!=null&&(e.defaultValue=""+a)}function il(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Wc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ti(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Wc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Gn,Hc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,a,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,a,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Gn=Gn||document.createElement("div"),Gn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Gn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function xn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var on={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qp=["Webkit","ms","Moz","O"];Object.keys(on).forEach(function(e){Qp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),on[t]=on[e]})});function qc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||on.hasOwnProperty(e)&&on[e]?(""+t).trim():t+"px"}function Gc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var a=n.indexOf("--")===0,s=qc(n,t[n],a);n==="float"&&(n="cssFloat"),a?e.setProperty(n,s):e[n]=s}}var Yp=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ri(e,t){if(t){if(Yp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function ni(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ai=null;function ao(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var si=null,Tr=null,Br=null;function ol(e){if(e=On(e)){if(typeof si!="function")throw Error(P(280));var t=e.stateNode;t&&(t=Xa(t),si(e.stateNode,e.type,t))}}function Kc(e){Tr?Br?Br.push(e):Br=[e]:Tr=e}function Qc(){if(Tr){var e=Tr,t=Br;if(Br=Tr=null,ol(e),t)for(e=0;e<t.length;e++)ol(t[e])}}function Yc(e,t){return e(t)}function Jc(){}var fs=!1;function Xc(e,t,n){if(fs)return e(t,n);fs=!0;try{return Yc(e,t,n)}finally{fs=!1,(Tr!==null||Br!==null)&&(Jc(),Qc())}}function vn(e,t){var n=e.stateNode;if(n===null)return null;var a=Xa(n);if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var ii=!1;if(kt)try{var Kr={};Object.defineProperty(Kr,"passive",{get:function(){ii=!0}}),window.addEventListener("test",Kr,Kr),window.removeEventListener("test",Kr,Kr)}catch{ii=!1}function Jp(e,t,n,a,s,i,o,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var ln=!1,ka=null,Na=!1,oi=null,Xp={onError:function(e){ln=!0,ka=e}};function Zp(e,t,n,a,s,i,o,l,c){ln=!1,ka=null,Jp.apply(Xp,arguments)}function em(e,t,n,a,s,i,o,l,c){if(Zp.apply(this,arguments),ln){if(ln){var u=ka;ln=!1,ka=null}else throw Error(P(198));Na||(Na=!0,oi=u)}}function mr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Zc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ll(e){if(mr(e)!==e)throw Error(P(188))}function tm(e){var t=e.alternate;if(!t){if(t=mr(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,a=t;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(a=s.return,a!==null){n=a;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return ll(s),e;if(i===a)return ll(s),t;i=i.sibling}throw Error(P(188))}if(n.return!==a.return)n=s,a=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,a=i;break}if(l===a){o=!0,a=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,a=s;break}if(l===a){o=!0,a=i,n=s;break}l=l.sibling}if(!o)throw Error(P(189))}}if(n.alternate!==a)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function ed(e){return e=tm(e),e!==null?td(e):null}function td(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=td(e);if(t!==null)return t;e=e.sibling}return null}var rd=We.unstable_scheduleCallback,cl=We.unstable_cancelCallback,rm=We.unstable_shouldYield,nm=We.unstable_requestPaint,me=We.unstable_now,am=We.unstable_getCurrentPriorityLevel,so=We.unstable_ImmediatePriority,nd=We.unstable_UserBlockingPriority,Sa=We.unstable_NormalPriority,sm=We.unstable_LowPriority,ad=We.unstable_IdlePriority,Ka=null,ft=null;function im(e){if(ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(Ka,e,void 0,(e.current.flags&128)===128)}catch{}}var it=Math.clz32?Math.clz32:cm,om=Math.log,lm=Math.LN2;function cm(e){return e>>>=0,e===0?32:31-(om(e)/lm|0)|0}var Kn=64,Qn=4194304;function nn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ca(e,t){var n=e.pendingLanes;if(n===0)return 0;var a=0,s=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?a=nn(l):(i&=o,i!==0&&(a=nn(i)))}else o=n&~s,o!==0?a=nn(o):i!==0&&(a=nn(i));if(a===0)return 0;if(t!==0&&t!==a&&!(t&s)&&(s=a&-a,i=t&-t,s>=i||s===16&&(i&4194240)!==0))return t;if(a&4&&(a|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)n=31-it(t),s=1<<n,a|=e[n],t&=~s;return a}function dm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function um(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,s=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-it(i),l=1<<o,c=s[o];c===-1?(!(l&n)||l&a)&&(s[o]=dm(l,t)):c<=t&&(e.expiredLanes|=l),i&=~l}}function li(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function sd(){var e=Kn;return Kn<<=1,!(Kn&4194240)&&(Kn=64),e}function hs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Rn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-it(t),e[t]=n}function pm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-it(n),i=1<<s;t[s]=0,a[s]=-1,e[s]=-1,n&=~i}}function io(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-it(n),s=1<<a;s&t|e[a]&t&&(e[a]|=t),n&=~s}}var X=0;function id(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var od,oo,ld,cd,dd,ci=!1,Yn=[],Rt=null,Lt=null,Ot=null,yn=new Map,bn=new Map,At=[],mm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dl(e,t){switch(e){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":Lt=null;break;case"mouseover":case"mouseout":Ot=null;break;case"pointerover":case"pointerout":yn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":bn.delete(t.pointerId)}}function Qr(e,t,n,a,s,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:i,targetContainers:[s]},t!==null&&(t=On(t),t!==null&&oo(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function fm(e,t,n,a,s){switch(t){case"focusin":return Rt=Qr(Rt,e,t,n,a,s),!0;case"dragenter":return Lt=Qr(Lt,e,t,n,a,s),!0;case"mouseover":return Ot=Qr(Ot,e,t,n,a,s),!0;case"pointerover":var i=s.pointerId;return yn.set(i,Qr(yn.get(i)||null,e,t,n,a,s)),!0;case"gotpointercapture":return i=s.pointerId,bn.set(i,Qr(bn.get(i)||null,e,t,n,a,s)),!0}return!1}function ud(e){var t=tr(e.target);if(t!==null){var n=mr(t);if(n!==null){if(t=n.tag,t===13){if(t=Zc(n),t!==null){e.blockedOn=t,dd(e.priority,function(){ld(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ua(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=di(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);ai=a,n.target.dispatchEvent(a),ai=null}else return t=On(n),t!==null&&oo(t),e.blockedOn=n,!1;t.shift()}return!0}function ul(e,t,n){ua(e)&&n.delete(t)}function hm(){ci=!1,Rt!==null&&ua(Rt)&&(Rt=null),Lt!==null&&ua(Lt)&&(Lt=null),Ot!==null&&ua(Ot)&&(Ot=null),yn.forEach(ul),bn.forEach(ul)}function Yr(e,t){e.blockedOn===t&&(e.blockedOn=null,ci||(ci=!0,We.unstable_scheduleCallback(We.unstable_NormalPriority,hm)))}function jn(e){function t(s){return Yr(s,e)}if(0<Yn.length){Yr(Yn[0],e);for(var n=1;n<Yn.length;n++){var a=Yn[n];a.blockedOn===e&&(a.blockedOn=null)}}for(Rt!==null&&Yr(Rt,e),Lt!==null&&Yr(Lt,e),Ot!==null&&Yr(Ot,e),yn.forEach(t),bn.forEach(t),n=0;n<At.length;n++)a=At[n],a.blockedOn===e&&(a.blockedOn=null);for(;0<At.length&&(n=At[0],n.blockedOn===null);)ud(n),n.blockedOn===null&&At.shift()}var Ar=Mt.ReactCurrentBatchConfig,za=!0;function gm(e,t,n,a){var s=X,i=Ar.transition;Ar.transition=null;try{X=1,lo(e,t,n,a)}finally{X=s,Ar.transition=i}}function xm(e,t,n,a){var s=X,i=Ar.transition;Ar.transition=null;try{X=4,lo(e,t,n,a)}finally{X=s,Ar.transition=i}}function lo(e,t,n,a){if(za){var s=di(e,t,n,a);if(s===null)Ss(e,t,a,Ma,n),dl(e,a);else if(fm(s,e,t,n,a))a.stopPropagation();else if(dl(e,a),t&4&&-1<mm.indexOf(e)){for(;s!==null;){var i=On(s);if(i!==null&&od(i),i=di(e,t,n,a),i===null&&Ss(e,t,a,Ma,n),i===s)break;s=i}s!==null&&a.stopPropagation()}else Ss(e,t,a,null,n)}}var Ma=null;function di(e,t,n,a){if(Ma=null,e=ao(a),e=tr(e),e!==null)if(t=mr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Zc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ma=e,null}function pd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(am()){case so:return 1;case nd:return 4;case Sa:case sm:return 16;case ad:return 536870912;default:return 16}default:return 16}}var Ft=null,co=null,pa=null;function md(){if(pa)return pa;var e,t=co,n=t.length,a,s="value"in Ft?Ft.value:Ft.textContent,i=s.length;for(e=0;e<n&&t[e]===s[e];e++);var o=n-e;for(a=1;a<=o&&t[n-a]===s[i-a];a++);return pa=s.slice(e,1<a?1-a:void 0)}function ma(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Jn(){return!0}function pl(){return!1}function Ge(e){function t(n,a,s,i,o){this._reactName=n,this._targetInst=s,this.type=a,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Jn:pl,this.isPropagationStopped=pl,this}return ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Jn)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Jn)},persist:function(){},isPersistent:Jn}),t}var Wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uo=Ge(Wr),Ln=ce({},Wr,{view:0,detail:0}),vm=Ge(Ln),gs,xs,Jr,Qa=ce({},Ln,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:po,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jr&&(Jr&&e.type==="mousemove"?(gs=e.screenX-Jr.screenX,xs=e.screenY-Jr.screenY):xs=gs=0,Jr=e),gs)},movementY:function(e){return"movementY"in e?e.movementY:xs}}),ml=Ge(Qa),ym=ce({},Qa,{dataTransfer:0}),bm=Ge(ym),jm=ce({},Ln,{relatedTarget:0}),vs=Ge(jm),wm=ce({},Wr,{animationName:0,elapsedTime:0,pseudoElement:0}),km=Ge(wm),Nm=ce({},Wr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Sm=Ge(Nm),Cm=ce({},Wr,{data:0}),fl=Ge(Cm),zm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Em(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Pm[e])?!!t[e]:!1}function po(){return Em}var Tm=ce({},Ln,{key:function(e){if(e.key){var t=zm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ma(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Mm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:po,charCode:function(e){return e.type==="keypress"?ma(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ma(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Bm=Ge(Tm),Am=ce({},Qa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hl=Ge(Am),_m=ce({},Ln,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:po}),Fm=Ge(_m),Im=ce({},Wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rm=Ge(Im),Lm=ce({},Qa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Om=Ge(Lm),Dm=[9,13,27,32],mo=kt&&"CompositionEvent"in window,cn=null;kt&&"documentMode"in document&&(cn=document.documentMode);var $m=kt&&"TextEvent"in window&&!cn,fd=kt&&(!mo||cn&&8<cn&&11>=cn),gl=" ",xl=!1;function hd(e,t){switch(e){case"keyup":return Dm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var br=!1;function Um(e,t){switch(e){case"compositionend":return gd(t);case"keypress":return t.which!==32?null:(xl=!0,gl);case"textInput":return e=t.data,e===gl&&xl?null:e;default:return null}}function Vm(e,t){if(br)return e==="compositionend"||!mo&&hd(e,t)?(e=md(),pa=co=Ft=null,br=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return fd&&t.locale!=="ko"?null:t.data;default:return null}}var Wm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Wm[e.type]:t==="textarea"}function xd(e,t,n,a){Kc(a),t=Pa(t,"onChange"),0<t.length&&(n=new uo("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var dn=null,wn=null;function Hm(e){Md(e,0)}function Ya(e){var t=kr(e);if($c(t))return e}function qm(e,t){if(e==="change")return t}var vd=!1;if(kt){var ys;if(kt){var bs="oninput"in document;if(!bs){var yl=document.createElement("div");yl.setAttribute("oninput","return;"),bs=typeof yl.oninput=="function"}ys=bs}else ys=!1;vd=ys&&(!document.documentMode||9<document.documentMode)}function bl(){dn&&(dn.detachEvent("onpropertychange",yd),wn=dn=null)}function yd(e){if(e.propertyName==="value"&&Ya(wn)){var t=[];xd(t,wn,e,ao(e)),Xc(Hm,t)}}function Gm(e,t,n){e==="focusin"?(bl(),dn=t,wn=n,dn.attachEvent("onpropertychange",yd)):e==="focusout"&&bl()}function Km(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ya(wn)}function Qm(e,t){if(e==="click")return Ya(t)}function Ym(e,t){if(e==="input"||e==="change")return Ya(t)}function Jm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var lt=typeof Object.is=="function"?Object.is:Jm;function kn(e,t){if(lt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var s=n[a];if(!qs.call(t,s)||!lt(e[s],t[s]))return!1}return!0}function jl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wl(e,t){var n=jl(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=jl(n)}}function bd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?bd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function jd(){for(var e=window,t=wa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=wa(e.document)}return t}function fo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Xm(e){var t=jd(),n=e.focusedElem,a=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&bd(n.ownerDocument.documentElement,n)){if(a!==null&&fo(n)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,i=Math.min(a.start,s);a=a.end===void 0?i:Math.min(a.end,s),!e.extend&&i>a&&(s=a,a=i,i=s),s=wl(n,i);var o=wl(n,a);s&&o&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),i>a?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Zm=kt&&"documentMode"in document&&11>=document.documentMode,jr=null,ui=null,un=null,pi=!1;function kl(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;pi||jr==null||jr!==wa(a)||(a=jr,"selectionStart"in a&&fo(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),un&&kn(un,a)||(un=a,a=Pa(ui,"onSelect"),0<a.length&&(t=new uo("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=jr)))}function Xn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var wr={animationend:Xn("Animation","AnimationEnd"),animationiteration:Xn("Animation","AnimationIteration"),animationstart:Xn("Animation","AnimationStart"),transitionend:Xn("Transition","TransitionEnd")},js={},wd={};kt&&(wd=document.createElement("div").style,"AnimationEvent"in window||(delete wr.animationend.animation,delete wr.animationiteration.animation,delete wr.animationstart.animation),"TransitionEvent"in window||delete wr.transitionend.transition);function Ja(e){if(js[e])return js[e];if(!wr[e])return e;var t=wr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in wd)return js[e]=t[n];return e}var kd=Ja("animationend"),Nd=Ja("animationiteration"),Sd=Ja("animationstart"),Cd=Ja("transitionend"),zd=new Map,Nl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qt(e,t){zd.set(e,t),pr(t,[e])}for(var ws=0;ws<Nl.length;ws++){var ks=Nl[ws],ef=ks.toLowerCase(),tf=ks[0].toUpperCase()+ks.slice(1);Qt(ef,"on"+tf)}Qt(kd,"onAnimationEnd");Qt(Nd,"onAnimationIteration");Qt(Sd,"onAnimationStart");Qt("dblclick","onDoubleClick");Qt("focusin","onFocus");Qt("focusout","onBlur");Qt(Cd,"onTransitionEnd");Ir("onMouseEnter",["mouseout","mouseover"]);Ir("onMouseLeave",["mouseout","mouseover"]);Ir("onPointerEnter",["pointerout","pointerover"]);Ir("onPointerLeave",["pointerout","pointerover"]);pr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pr("onBeforeInput",["compositionend","keypress","textInput","paste"]);pr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var an="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rf=new Set("cancel close invalid load scroll toggle".split(" ").concat(an));function Sl(e,t,n){var a=e.type||"unknown-event";e.currentTarget=n,em(a,t,void 0,e),e.currentTarget=null}function Md(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],s=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var o=a.length-1;0<=o;o--){var l=a[o],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==i&&s.isPropagationStopped())break e;Sl(s,l,u),i=c}else for(o=0;o<a.length;o++){if(l=a[o],c=l.instance,u=l.currentTarget,l=l.listener,c!==i&&s.isPropagationStopped())break e;Sl(s,l,u),i=c}}}if(Na)throw e=oi,Na=!1,oi=null,e}function ne(e,t){var n=t[xi];n===void 0&&(n=t[xi]=new Set);var a=e+"__bubble";n.has(a)||(Pd(t,e,2,!1),n.add(a))}function Ns(e,t,n){var a=0;t&&(a|=4),Pd(n,e,a,t)}var Zn="_reactListening"+Math.random().toString(36).slice(2);function Nn(e){if(!e[Zn]){e[Zn]=!0,Ic.forEach(function(n){n!=="selectionchange"&&(rf.has(n)||Ns(n,!1,e),Ns(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Zn]||(t[Zn]=!0,Ns("selectionchange",!1,t))}}function Pd(e,t,n,a){switch(pd(t)){case 1:var s=gm;break;case 4:s=xm;break;default:s=lo}n=s.bind(null,t,n,e),s=void 0,!ii||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),a?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Ss(e,t,n,a,s){var i=a;if(!(t&1)&&!(t&2)&&a!==null)e:for(;;){if(a===null)return;var o=a.tag;if(o===3||o===4){var l=a.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=a.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;o=o.return}for(;l!==null;){if(o=tr(l),o===null)return;if(c=o.tag,c===5||c===6){a=i=o;continue e}l=l.parentNode}}a=a.return}Xc(function(){var u=i,f=ao(n),h=[];e:{var m=zd.get(e);if(m!==void 0){var v=uo,y=e;switch(e){case"keypress":if(ma(n)===0)break e;case"keydown":case"keyup":v=Bm;break;case"focusin":y="focus",v=vs;break;case"focusout":y="blur",v=vs;break;case"beforeblur":case"afterblur":v=vs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=ml;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=bm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Fm;break;case kd:case Nd:case Sd:v=km;break;case Cd:v=Rm;break;case"scroll":v=vm;break;case"wheel":v=Om;break;case"copy":case"cut":case"paste":v=Sm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=hl}var k=(t&4)!==0,N=!k&&e==="scroll",d=k?m!==null?m+"Capture":null:m;k=[];for(var p=u,g;p!==null;){g=p;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,d!==null&&(w=vn(p,d),w!=null&&k.push(Sn(p,w,g)))),N)break;p=p.return}0<k.length&&(m=new v(m,y,null,n,f),h.push({event:m,listeners:k}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&n!==ai&&(y=n.relatedTarget||n.fromElement)&&(tr(y)||y[Nt]))break e;if((v||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=u,y=y?tr(y):null,y!==null&&(N=mr(y),y!==N||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(k=ml,w="onMouseLeave",d="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(k=hl,w="onPointerLeave",d="onPointerEnter",p="pointer"),N=v==null?m:kr(v),g=y==null?m:kr(y),m=new k(w,p+"leave",v,n,f),m.target=N,m.relatedTarget=g,w=null,tr(f)===u&&(k=new k(d,p+"enter",y,n,f),k.target=g,k.relatedTarget=N,w=k),N=w,v&&y)t:{for(k=v,d=y,p=0,g=k;g;g=gr(g))p++;for(g=0,w=d;w;w=gr(w))g++;for(;0<p-g;)k=gr(k),p--;for(;0<g-p;)d=gr(d),g--;for(;p--;){if(k===d||d!==null&&k===d.alternate)break t;k=gr(k),d=gr(d)}k=null}else k=null;v!==null&&Cl(h,m,v,k,!1),y!==null&&N!==null&&Cl(h,N,y,k,!0)}}e:{if(m=u?kr(u):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var z=qm;else if(vl(m))if(vd)z=Ym;else{z=Km;var S=Gm}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(z=Qm);if(z&&(z=z(e,u))){xd(h,z,n,f);break e}S&&S(e,m,u),e==="focusout"&&(S=m._wrapperState)&&S.controlled&&m.type==="number"&&Zs(m,"number",m.value)}switch(S=u?kr(u):window,e){case"focusin":(vl(S)||S.contentEditable==="true")&&(jr=S,ui=u,un=null);break;case"focusout":un=ui=jr=null;break;case"mousedown":pi=!0;break;case"contextmenu":case"mouseup":case"dragend":pi=!1,kl(h,n,f);break;case"selectionchange":if(Zm)break;case"keydown":case"keyup":kl(h,n,f)}var E;if(mo)e:{switch(e){case"compositionstart":var B="onCompositionStart";break e;case"compositionend":B="onCompositionEnd";break e;case"compositionupdate":B="onCompositionUpdate";break e}B=void 0}else br?hd(e,n)&&(B="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(B="onCompositionStart");B&&(fd&&n.locale!=="ko"&&(br||B!=="onCompositionStart"?B==="onCompositionEnd"&&br&&(E=md()):(Ft=f,co="value"in Ft?Ft.value:Ft.textContent,br=!0)),S=Pa(u,B),0<S.length&&(B=new fl(B,e,null,n,f),h.push({event:B,listeners:S}),E?B.data=E:(E=gd(n),E!==null&&(B.data=E)))),(E=$m?Um(e,n):Vm(e,n))&&(u=Pa(u,"onBeforeInput"),0<u.length&&(f=new fl("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:u}),f.data=E))}Md(h,t)})}function Sn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Pa(e,t){for(var n=t+"Capture",a=[];e!==null;){var s=e,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=vn(e,n),i!=null&&a.unshift(Sn(e,i,s)),i=vn(e,t),i!=null&&a.push(Sn(e,i,s))),e=e.return}return a}function gr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Cl(e,t,n,a,s){for(var i=t._reactName,o=[];n!==null&&n!==a;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===a)break;l.tag===5&&u!==null&&(l=u,s?(c=vn(n,i),c!=null&&o.unshift(Sn(n,c,l))):s||(c=vn(n,i),c!=null&&o.push(Sn(n,c,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var nf=/\r\n?/g,af=/\u0000|\uFFFD/g;function zl(e){return(typeof e=="string"?e:""+e).replace(nf,`
`).replace(af,"")}function ea(e,t,n){if(t=zl(t),zl(e)!==t&&n)throw Error(P(425))}function Ea(){}var mi=null,fi=null;function hi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var gi=typeof setTimeout=="function"?setTimeout:void 0,sf=typeof clearTimeout=="function"?clearTimeout:void 0,Ml=typeof Promise=="function"?Promise:void 0,of=typeof queueMicrotask=="function"?queueMicrotask:typeof Ml<"u"?function(e){return Ml.resolve(null).then(e).catch(lf)}:gi;function lf(e){setTimeout(function(){throw e})}function Cs(e,t){var n=t,a=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(a===0){e.removeChild(s),jn(t);return}a--}else n!=="$"&&n!=="$?"&&n!=="$!"||a++;n=s}while(n);jn(t)}function Dt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Pl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Hr=Math.random().toString(36).slice(2),mt="__reactFiber$"+Hr,Cn="__reactProps$"+Hr,Nt="__reactContainer$"+Hr,xi="__reactEvents$"+Hr,cf="__reactListeners$"+Hr,df="__reactHandles$"+Hr;function tr(e){var t=e[mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Nt]||n[mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Pl(e);e!==null;){if(n=e[mt])return n;e=Pl(e)}return t}e=n,n=e.parentNode}return null}function On(e){return e=e[mt]||e[Nt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function kr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function Xa(e){return e[Cn]||null}var vi=[],Nr=-1;function Yt(e){return{current:e}}function se(e){0>Nr||(e.current=vi[Nr],vi[Nr]=null,Nr--)}function te(e,t){Nr++,vi[Nr]=e.current,e.current=t}var Gt={},Ce=Yt(Gt),Fe=Yt(!1),or=Gt;function Rr(e,t){var n=e.type.contextTypes;if(!n)return Gt;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=t[i];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function Ie(e){return e=e.childContextTypes,e!=null}function Ta(){se(Fe),se(Ce)}function El(e,t,n){if(Ce.current!==Gt)throw Error(P(168));te(Ce,t),te(Fe,n)}function Ed(e,t,n){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return n;a=a.getChildContext();for(var s in a)if(!(s in t))throw Error(P(108,Gp(e)||"Unknown",s));return ce({},n,a)}function Ba(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Gt,or=Ce.current,te(Ce,e),te(Fe,Fe.current),!0}function Tl(e,t,n){var a=e.stateNode;if(!a)throw Error(P(169));n?(e=Ed(e,t,or),a.__reactInternalMemoizedMergedChildContext=e,se(Fe),se(Ce),te(Ce,e)):se(Fe),te(Fe,n)}var yt=null,Za=!1,zs=!1;function Td(e){yt===null?yt=[e]:yt.push(e)}function uf(e){Za=!0,Td(e)}function Jt(){if(!zs&&yt!==null){zs=!0;var e=0,t=X;try{var n=yt;for(X=1;e<n.length;e++){var a=n[e];do a=a(!0);while(a!==null)}yt=null,Za=!1}catch(s){throw yt!==null&&(yt=yt.slice(e+1)),rd(so,Jt),s}finally{X=t,zs=!1}}return null}var Sr=[],Cr=0,Aa=null,_a=0,Ke=[],Qe=0,lr=null,bt=1,jt="";function Zt(e,t){Sr[Cr++]=_a,Sr[Cr++]=Aa,Aa=e,_a=t}function Bd(e,t,n){Ke[Qe++]=bt,Ke[Qe++]=jt,Ke[Qe++]=lr,lr=e;var a=bt;e=jt;var s=32-it(a)-1;a&=~(1<<s),n+=1;var i=32-it(t)+s;if(30<i){var o=s-s%5;i=(a&(1<<o)-1).toString(32),a>>=o,s-=o,bt=1<<32-it(t)+s|n<<s|a,jt=i+e}else bt=1<<i|n<<s|a,jt=e}function ho(e){e.return!==null&&(Zt(e,1),Bd(e,1,0))}function go(e){for(;e===Aa;)Aa=Sr[--Cr],Sr[Cr]=null,_a=Sr[--Cr],Sr[Cr]=null;for(;e===lr;)lr=Ke[--Qe],Ke[Qe]=null,jt=Ke[--Qe],Ke[Qe]=null,bt=Ke[--Qe],Ke[Qe]=null}var Ve=null,$e=null,ie=!1,st=null;function Ad(e,t){var n=Ye(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Bl(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ve=e,$e=Dt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ve=e,$e=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=lr!==null?{id:bt,overflow:jt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ye(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ve=e,$e=null,!0):!1;default:return!1}}function yi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function bi(e){if(ie){var t=$e;if(t){var n=t;if(!Bl(e,t)){if(yi(e))throw Error(P(418));t=Dt(n.nextSibling);var a=Ve;t&&Bl(e,t)?Ad(a,n):(e.flags=e.flags&-4097|2,ie=!1,Ve=e)}}else{if(yi(e))throw Error(P(418));e.flags=e.flags&-4097|2,ie=!1,Ve=e}}}function Al(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ve=e}function ta(e){if(e!==Ve)return!1;if(!ie)return Al(e),ie=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!hi(e.type,e.memoizedProps)),t&&(t=$e)){if(yi(e))throw _d(),Error(P(418));for(;t;)Ad(e,t),t=Dt(t.nextSibling)}if(Al(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){$e=Dt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}$e=null}}else $e=Ve?Dt(e.stateNode.nextSibling):null;return!0}function _d(){for(var e=$e;e;)e=Dt(e.nextSibling)}function Lr(){$e=Ve=null,ie=!1}function xo(e){st===null?st=[e]:st.push(e)}var pf=Mt.ReactCurrentBatchConfig;function Xr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var a=n.stateNode}if(!a)throw Error(P(147,e));var s=a,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function ra(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function _l(e){var t=e._init;return t(e._payload)}function Fd(e){function t(d,p){if(e){var g=d.deletions;g===null?(d.deletions=[p],d.flags|=16):g.push(p)}}function n(d,p){if(!e)return null;for(;p!==null;)t(d,p),p=p.sibling;return null}function a(d,p){for(d=new Map;p!==null;)p.key!==null?d.set(p.key,p):d.set(p.index,p),p=p.sibling;return d}function s(d,p){return d=Wt(d,p),d.index=0,d.sibling=null,d}function i(d,p,g){return d.index=g,e?(g=d.alternate,g!==null?(g=g.index,g<p?(d.flags|=2,p):g):(d.flags|=2,p)):(d.flags|=1048576,p)}function o(d){return e&&d.alternate===null&&(d.flags|=2),d}function l(d,p,g,w){return p===null||p.tag!==6?(p=_s(g,d.mode,w),p.return=d,p):(p=s(p,g),p.return=d,p)}function c(d,p,g,w){var z=g.type;return z===yr?f(d,p,g.props.children,w,g.key):p!==null&&(p.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Tt&&_l(z)===p.type)?(w=s(p,g.props),w.ref=Xr(d,p,g),w.return=d,w):(w=ba(g.type,g.key,g.props,null,d.mode,w),w.ref=Xr(d,p,g),w.return=d,w)}function u(d,p,g,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=Fs(g,d.mode,w),p.return=d,p):(p=s(p,g.children||[]),p.return=d,p)}function f(d,p,g,w,z){return p===null||p.tag!==7?(p=sr(g,d.mode,w,z),p.return=d,p):(p=s(p,g),p.return=d,p)}function h(d,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=_s(""+p,d.mode,g),p.return=d,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Hn:return g=ba(p.type,p.key,p.props,null,d.mode,g),g.ref=Xr(d,null,p),g.return=d,g;case vr:return p=Fs(p,d.mode,g),p.return=d,p;case Tt:var w=p._init;return h(d,w(p._payload),g)}if(rn(p)||Gr(p))return p=sr(p,d.mode,g,null),p.return=d,p;ra(d,p)}return null}function m(d,p,g,w){var z=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return z!==null?null:l(d,p,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Hn:return g.key===z?c(d,p,g,w):null;case vr:return g.key===z?u(d,p,g,w):null;case Tt:return z=g._init,m(d,p,z(g._payload),w)}if(rn(g)||Gr(g))return z!==null?null:f(d,p,g,w,null);ra(d,g)}return null}function v(d,p,g,w,z){if(typeof w=="string"&&w!==""||typeof w=="number")return d=d.get(g)||null,l(p,d,""+w,z);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Hn:return d=d.get(w.key===null?g:w.key)||null,c(p,d,w,z);case vr:return d=d.get(w.key===null?g:w.key)||null,u(p,d,w,z);case Tt:var S=w._init;return v(d,p,g,S(w._payload),z)}if(rn(w)||Gr(w))return d=d.get(g)||null,f(p,d,w,z,null);ra(p,w)}return null}function y(d,p,g,w){for(var z=null,S=null,E=p,B=p=0,T=null;E!==null&&B<g.length;B++){E.index>B?(T=E,E=null):T=E.sibling;var C=m(d,E,g[B],w);if(C===null){E===null&&(E=T);break}e&&E&&C.alternate===null&&t(d,E),p=i(C,p,B),S===null?z=C:S.sibling=C,S=C,E=T}if(B===g.length)return n(d,E),ie&&Zt(d,B),z;if(E===null){for(;B<g.length;B++)E=h(d,g[B],w),E!==null&&(p=i(E,p,B),S===null?z=E:S.sibling=E,S=E);return ie&&Zt(d,B),z}for(E=a(d,E);B<g.length;B++)T=v(E,d,B,g[B],w),T!==null&&(e&&T.alternate!==null&&E.delete(T.key===null?B:T.key),p=i(T,p,B),S===null?z=T:S.sibling=T,S=T);return e&&E.forEach(function(O){return t(d,O)}),ie&&Zt(d,B),z}function k(d,p,g,w){var z=Gr(g);if(typeof z!="function")throw Error(P(150));if(g=z.call(g),g==null)throw Error(P(151));for(var S=z=null,E=p,B=p=0,T=null,C=g.next();E!==null&&!C.done;B++,C=g.next()){E.index>B?(T=E,E=null):T=E.sibling;var O=m(d,E,C.value,w);if(O===null){E===null&&(E=T);break}e&&E&&O.alternate===null&&t(d,E),p=i(O,p,B),S===null?z=O:S.sibling=O,S=O,E=T}if(C.done)return n(d,E),ie&&Zt(d,B),z;if(E===null){for(;!C.done;B++,C=g.next())C=h(d,C.value,w),C!==null&&(p=i(C,p,B),S===null?z=C:S.sibling=C,S=C);return ie&&Zt(d,B),z}for(E=a(d,E);!C.done;B++,C=g.next())C=v(E,d,B,C.value,w),C!==null&&(e&&C.alternate!==null&&E.delete(C.key===null?B:C.key),p=i(C,p,B),S===null?z=C:S.sibling=C,S=C);return e&&E.forEach(function(R){return t(d,R)}),ie&&Zt(d,B),z}function N(d,p,g,w){if(typeof g=="object"&&g!==null&&g.type===yr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Hn:e:{for(var z=g.key,S=p;S!==null;){if(S.key===z){if(z=g.type,z===yr){if(S.tag===7){n(d,S.sibling),p=s(S,g.props.children),p.return=d,d=p;break e}}else if(S.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Tt&&_l(z)===S.type){n(d,S.sibling),p=s(S,g.props),p.ref=Xr(d,S,g),p.return=d,d=p;break e}n(d,S);break}else t(d,S);S=S.sibling}g.type===yr?(p=sr(g.props.children,d.mode,w,g.key),p.return=d,d=p):(w=ba(g.type,g.key,g.props,null,d.mode,w),w.ref=Xr(d,p,g),w.return=d,d=w)}return o(d);case vr:e:{for(S=g.key;p!==null;){if(p.key===S)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(d,p.sibling),p=s(p,g.children||[]),p.return=d,d=p;break e}else{n(d,p);break}else t(d,p);p=p.sibling}p=Fs(g,d.mode,w),p.return=d,d=p}return o(d);case Tt:return S=g._init,N(d,p,S(g._payload),w)}if(rn(g))return y(d,p,g,w);if(Gr(g))return k(d,p,g,w);ra(d,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(d,p.sibling),p=s(p,g),p.return=d,d=p):(n(d,p),p=_s(g,d.mode,w),p.return=d,d=p),o(d)):n(d,p)}return N}var Or=Fd(!0),Id=Fd(!1),Fa=Yt(null),Ia=null,zr=null,vo=null;function yo(){vo=zr=Ia=null}function bo(e){var t=Fa.current;se(Fa),e._currentValue=t}function ji(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function _r(e,t){Ia=e,vo=zr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(_e=!0),e.firstContext=null)}function Xe(e){var t=e._currentValue;if(vo!==e)if(e={context:e,memoizedValue:t,next:null},zr===null){if(Ia===null)throw Error(P(308));zr=e,Ia.dependencies={lanes:0,firstContext:e}}else zr=zr.next=e;return t}var rr=null;function jo(e){rr===null?rr=[e]:rr.push(e)}function Rd(e,t,n,a){var s=t.interleaved;return s===null?(n.next=n,jo(t)):(n.next=s.next,s.next=n),t.interleaved=n,St(e,a)}function St(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Bt=!1;function wo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ld(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function wt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function $t(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,Q&2){var s=a.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),a.pending=t,St(e,n)}return s=a.interleaved,s===null?(t.next=t,jo(a)):(t.next=s.next,s.next=t),a.interleaved=t,St(e,n)}function fa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,io(e,n)}}function Fl(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=t:i=i.next=t}else s=i=t;n={baseState:a.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:a.shared,effects:a.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ra(e,t,n,a){var s=e.updateQueue;Bt=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var c=l,u=c.next;c.next=null,o===null?i=u:o.next=u,o=c;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=c))}if(i!==null){var h=s.baseState;o=0,f=u=c=null,l=i;do{var m=l.lane,v=l.eventTime;if((a&m)===m){f!==null&&(f=f.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,k=l;switch(m=t,v=n,k.tag){case 1:if(y=k.payload,typeof y=="function"){h=y.call(v,h,m);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=k.payload,m=typeof y=="function"?y.call(v,h,m):y,m==null)break e;h=ce({},h,m);break e;case 2:Bt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=s.effects,m===null?s.effects=[l]:m.push(l))}else v={eventTime:v,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=v,c=h):f=f.next=v,o|=m;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;m=l,l=m.next,m.next=null,s.lastBaseUpdate=m,s.shared.pending=null}}while(!0);if(f===null&&(c=h),s.baseState=c,s.firstBaseUpdate=u,s.lastBaseUpdate=f,t=s.shared.interleaved,t!==null){s=t;do o|=s.lane,s=s.next;while(s!==t)}else i===null&&(s.shared.lanes=0);dr|=o,e.lanes=o,e.memoizedState=h}}function Il(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],s=a.callback;if(s!==null){if(a.callback=null,a=n,typeof s!="function")throw Error(P(191,s));s.call(a)}}}var Dn={},ht=Yt(Dn),zn=Yt(Dn),Mn=Yt(Dn);function nr(e){if(e===Dn)throw Error(P(174));return e}function ko(e,t){switch(te(Mn,t),te(zn,e),te(ht,Dn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ti(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ti(t,e)}se(ht),te(ht,t)}function Dr(){se(ht),se(zn),se(Mn)}function Od(e){nr(Mn.current);var t=nr(ht.current),n=ti(t,e.type);t!==n&&(te(zn,e),te(ht,n))}function No(e){zn.current===e&&(se(ht),se(zn))}var oe=Yt(0);function La(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ms=[];function So(){for(var e=0;e<Ms.length;e++)Ms[e]._workInProgressVersionPrimary=null;Ms.length=0}var ha=Mt.ReactCurrentDispatcher,Ps=Mt.ReactCurrentBatchConfig,cr=0,le=null,he=null,xe=null,Oa=!1,pn=!1,Pn=0,mf=0;function ke(){throw Error(P(321))}function Co(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lt(e[n],t[n]))return!1;return!0}function zo(e,t,n,a,s,i){if(cr=i,le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ha.current=e===null||e.memoizedState===null?xf:vf,e=n(a,s),pn){i=0;do{if(pn=!1,Pn=0,25<=i)throw Error(P(301));i+=1,xe=he=null,t.updateQueue=null,ha.current=yf,e=n(a,s)}while(pn)}if(ha.current=Da,t=he!==null&&he.next!==null,cr=0,xe=he=le=null,Oa=!1,t)throw Error(P(300));return e}function Mo(){var e=Pn!==0;return Pn=0,e}function pt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xe===null?le.memoizedState=xe=e:xe=xe.next=e,xe}function Ze(){if(he===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=he.next;var t=xe===null?le.memoizedState:xe.next;if(t!==null)xe=t,he=e;else{if(e===null)throw Error(P(310));he=e,e={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},xe===null?le.memoizedState=xe=e:xe=xe.next=e}return xe}function En(e,t){return typeof t=="function"?t(e):t}function Es(e){var t=Ze(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var a=he,s=a.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}a.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,a=a.baseState;var l=o=null,c=null,u=i;do{var f=u.lane;if((cr&f)===f)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),a=u.hasEagerState?u.eagerState:e(a,u.action);else{var h={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=h,o=a):c=c.next=h,le.lanes|=f,dr|=f}u=u.next}while(u!==null&&u!==i);c===null?o=a:c.next=l,lt(a,t.memoizedState)||(_e=!0),t.memoizedState=a,t.baseState=o,t.baseQueue=c,n.lastRenderedState=a}if(e=n.interleaved,e!==null){s=e;do i=s.lane,le.lanes|=i,dr|=i,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ts(e){var t=Ze(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var a=n.dispatch,s=n.pending,i=t.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=e(i,o.action),o=o.next;while(o!==s);lt(i,t.memoizedState)||(_e=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,a]}function Dd(){}function $d(e,t){var n=le,a=Ze(),s=t(),i=!lt(a.memoizedState,s);if(i&&(a.memoizedState=s,_e=!0),a=a.queue,Po(Wd.bind(null,n,a,e),[e]),a.getSnapshot!==t||i||xe!==null&&xe.memoizedState.tag&1){if(n.flags|=2048,Tn(9,Vd.bind(null,n,a,s,t),void 0,null),ve===null)throw Error(P(349));cr&30||Ud(n,t,s)}return s}function Ud(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Vd(e,t,n,a){t.value=n,t.getSnapshot=a,Hd(t)&&qd(e)}function Wd(e,t,n){return n(function(){Hd(t)&&qd(e)})}function Hd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lt(e,n)}catch{return!0}}function qd(e){var t=St(e,1);t!==null&&ot(t,e,1,-1)}function Rl(e){var t=pt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:En,lastRenderedState:e},t.queue=e,e=e.dispatch=gf.bind(null,le,e),[t.memoizedState,e]}function Tn(e,t,n,a){return e={tag:e,create:t,destroy:n,deps:a,next:null},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e)),e}function Gd(){return Ze().memoizedState}function ga(e,t,n,a){var s=pt();le.flags|=e,s.memoizedState=Tn(1|t,n,void 0,a===void 0?null:a)}function es(e,t,n,a){var s=Ze();a=a===void 0?null:a;var i=void 0;if(he!==null){var o=he.memoizedState;if(i=o.destroy,a!==null&&Co(a,o.deps)){s.memoizedState=Tn(t,n,i,a);return}}le.flags|=e,s.memoizedState=Tn(1|t,n,i,a)}function Ll(e,t){return ga(8390656,8,e,t)}function Po(e,t){return es(2048,8,e,t)}function Kd(e,t){return es(4,2,e,t)}function Qd(e,t){return es(4,4,e,t)}function Yd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Jd(e,t,n){return n=n!=null?n.concat([e]):null,es(4,4,Yd.bind(null,t,e),n)}function Eo(){}function Xd(e,t){var n=Ze();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&Co(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Zd(e,t){var n=Ze();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&Co(t,a[1])?a[0]:(e=e(),n.memoizedState=[e,t],e)}function eu(e,t,n){return cr&21?(lt(n,t)||(n=sd(),le.lanes|=n,dr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,_e=!0),e.memoizedState=n)}function ff(e,t){var n=X;X=n!==0&&4>n?n:4,e(!0);var a=Ps.transition;Ps.transition={};try{e(!1),t()}finally{X=n,Ps.transition=a}}function tu(){return Ze().memoizedState}function hf(e,t,n){var a=Vt(e);if(n={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null},ru(e))nu(t,n);else if(n=Rd(e,t,n,a),n!==null){var s=Pe();ot(n,e,a,s),au(n,t,a)}}function gf(e,t,n){var a=Vt(e),s={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null};if(ru(e))nu(t,s);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,lt(l,o)){var c=t.interleaved;c===null?(s.next=s,jo(t)):(s.next=c.next,c.next=s),t.interleaved=s;return}}catch{}finally{}n=Rd(e,t,s,a),n!==null&&(s=Pe(),ot(n,e,a,s),au(n,t,a))}}function ru(e){var t=e.alternate;return e===le||t!==null&&t===le}function nu(e,t){pn=Oa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function au(e,t,n){if(n&4194240){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,io(e,n)}}var Da={readContext:Xe,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useInsertionEffect:ke,useLayoutEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useMutableSource:ke,useSyncExternalStore:ke,useId:ke,unstable_isNewReconciler:!1},xf={readContext:Xe,useCallback:function(e,t){return pt().memoizedState=[e,t===void 0?null:t],e},useContext:Xe,useEffect:Ll,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ga(4194308,4,Yd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ga(4194308,4,e,t)},useInsertionEffect:function(e,t){return ga(4,2,e,t)},useMemo:function(e,t){var n=pt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var a=pt();return t=n!==void 0?n(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=hf.bind(null,le,e),[a.memoizedState,e]},useRef:function(e){var t=pt();return e={current:e},t.memoizedState=e},useState:Rl,useDebugValue:Eo,useDeferredValue:function(e){return pt().memoizedState=e},useTransition:function(){var e=Rl(!1),t=e[0];return e=ff.bind(null,e[1]),pt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var a=le,s=pt();if(ie){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),ve===null)throw Error(P(349));cr&30||Ud(a,t,n)}s.memoizedState=n;var i={value:n,getSnapshot:t};return s.queue=i,Ll(Wd.bind(null,a,i,e),[e]),a.flags|=2048,Tn(9,Vd.bind(null,a,i,n,t),void 0,null),n},useId:function(){var e=pt(),t=ve.identifierPrefix;if(ie){var n=jt,a=bt;n=(a&~(1<<32-it(a)-1)).toString(32)+n,t=":"+t+"R"+n,n=Pn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=mf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},vf={readContext:Xe,useCallback:Xd,useContext:Xe,useEffect:Po,useImperativeHandle:Jd,useInsertionEffect:Kd,useLayoutEffect:Qd,useMemo:Zd,useReducer:Es,useRef:Gd,useState:function(){return Es(En)},useDebugValue:Eo,useDeferredValue:function(e){var t=Ze();return eu(t,he.memoizedState,e)},useTransition:function(){var e=Es(En)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:Dd,useSyncExternalStore:$d,useId:tu,unstable_isNewReconciler:!1},yf={readContext:Xe,useCallback:Xd,useContext:Xe,useEffect:Po,useImperativeHandle:Jd,useInsertionEffect:Kd,useLayoutEffect:Qd,useMemo:Zd,useReducer:Ts,useRef:Gd,useState:function(){return Ts(En)},useDebugValue:Eo,useDeferredValue:function(e){var t=Ze();return he===null?t.memoizedState=e:eu(t,he.memoizedState,e)},useTransition:function(){var e=Ts(En)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:Dd,useSyncExternalStore:$d,useId:tu,unstable_isNewReconciler:!1};function nt(e,t){if(e&&e.defaultProps){t=ce({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function wi(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:ce({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ts={isMounted:function(e){return(e=e._reactInternals)?mr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Pe(),s=Vt(e),i=wt(a,s);i.payload=t,n!=null&&(i.callback=n),t=$t(e,i,s),t!==null&&(ot(t,e,s,a),fa(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Pe(),s=Vt(e),i=wt(a,s);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=$t(e,i,s),t!==null&&(ot(t,e,s,a),fa(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Pe(),a=Vt(e),s=wt(n,a);s.tag=2,t!=null&&(s.callback=t),t=$t(e,s,a),t!==null&&(ot(t,e,a,n),fa(t,e,a))}};function Ol(e,t,n,a,s,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,o):t.prototype&&t.prototype.isPureReactComponent?!kn(n,a)||!kn(s,i):!0}function su(e,t,n){var a=!1,s=Gt,i=t.contextType;return typeof i=="object"&&i!==null?i=Xe(i):(s=Ie(t)?or:Ce.current,a=t.contextTypes,i=(a=a!=null)?Rr(e,s):Gt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ts,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=i),t}function Dl(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&ts.enqueueReplaceState(t,t.state,null)}function ki(e,t,n,a){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},wo(e);var i=t.contextType;typeof i=="object"&&i!==null?s.context=Xe(i):(i=Ie(t)?or:Ce.current,s.context=Rr(e,i)),s.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(wi(e,t,i,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&ts.enqueueReplaceState(s,s.state,null),Ra(e,n,s,a),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function $r(e,t){try{var n="",a=t;do n+=qp(a),a=a.return;while(a);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:s,digest:null}}function Bs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ni(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var bf=typeof WeakMap=="function"?WeakMap:Map;function iu(e,t,n){n=wt(-1,n),n.tag=3,n.payload={element:null};var a=t.value;return n.callback=function(){Ua||(Ua=!0,_i=a),Ni(e,t)},n}function ou(e,t,n){n=wt(-1,n),n.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var s=t.value;n.payload=function(){return a(s)},n.callback=function(){Ni(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ni(e,t),typeof a!="function"&&(Ut===null?Ut=new Set([this]):Ut.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function $l(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new bf;var s=new Set;a.set(t,s)}else s=a.get(t),s===void 0&&(s=new Set,a.set(t,s));s.has(n)||(s.add(n),e=_f.bind(null,e,t,n),t.then(e,e))}function Ul(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Vl(e,t,n,a,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=wt(-1,1),t.tag=2,$t(n,t,1))),n.lanes|=1),e)}var jf=Mt.ReactCurrentOwner,_e=!1;function Me(e,t,n,a){t.child=e===null?Id(t,null,n,a):Or(t,e.child,n,a)}function Wl(e,t,n,a,s){n=n.render;var i=t.ref;return _r(t,s),a=zo(e,t,n,a,i,s),n=Mo(),e!==null&&!_e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Ct(e,t,s)):(ie&&n&&ho(t),t.flags|=1,Me(e,t,a,s),t.child)}function Hl(e,t,n,a,s){if(e===null){var i=n.type;return typeof i=="function"&&!Lo(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,lu(e,t,i,a,s)):(e=ba(n.type,null,a,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:kn,n(o,a)&&e.ref===t.ref)return Ct(e,t,s)}return t.flags|=1,e=Wt(i,a),e.ref=t.ref,e.return=t,t.child=e}function lu(e,t,n,a,s){if(e!==null){var i=e.memoizedProps;if(kn(i,a)&&e.ref===t.ref)if(_e=!1,t.pendingProps=a=i,(e.lanes&s)!==0)e.flags&131072&&(_e=!0);else return t.lanes=e.lanes,Ct(e,t,s)}return Si(e,t,n,a,s)}function cu(e,t,n){var a=t.pendingProps,s=a.children,i=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},te(Pr,Oe),Oe|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,te(Pr,Oe),Oe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=i!==null?i.baseLanes:n,te(Pr,Oe),Oe|=a}else i!==null?(a=i.baseLanes|n,t.memoizedState=null):a=n,te(Pr,Oe),Oe|=a;return Me(e,t,s,n),t.child}function du(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Si(e,t,n,a,s){var i=Ie(n)?or:Ce.current;return i=Rr(t,i),_r(t,s),n=zo(e,t,n,a,i,s),a=Mo(),e!==null&&!_e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Ct(e,t,s)):(ie&&a&&ho(t),t.flags|=1,Me(e,t,n,s),t.child)}function ql(e,t,n,a,s){if(Ie(n)){var i=!0;Ba(t)}else i=!1;if(_r(t,s),t.stateNode===null)xa(e,t),su(t,n,a),ki(t,n,a,s),a=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var c=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Xe(u):(u=Ie(n)?or:Ce.current,u=Rr(t,u));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==a||c!==u)&&Dl(t,o,a,u),Bt=!1;var m=t.memoizedState;o.state=m,Ra(t,a,o,s),c=t.memoizedState,l!==a||m!==c||Fe.current||Bt?(typeof f=="function"&&(wi(t,n,f,a),c=t.memoizedState),(l=Bt||Ol(t,n,l,a,m,c,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=c),o.props=a,o.state=c,o.context=u,a=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{o=t.stateNode,Ld(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:nt(t.type,l),o.props=u,h=t.pendingProps,m=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=Xe(c):(c=Ie(n)?or:Ce.current,c=Rr(t,c));var v=n.getDerivedStateFromProps;(f=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==h||m!==c)&&Dl(t,o,a,c),Bt=!1,m=t.memoizedState,o.state=m,Ra(t,a,o,s);var y=t.memoizedState;l!==h||m!==y||Fe.current||Bt?(typeof v=="function"&&(wi(t,n,v,a),y=t.memoizedState),(u=Bt||Ol(t,n,u,a,m,y,c)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(a,y,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(a,y,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=y),o.props=a,o.state=y,o.context=c,a=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),a=!1)}return Ci(e,t,n,a,i,s)}function Ci(e,t,n,a,s,i){du(e,t);var o=(t.flags&128)!==0;if(!a&&!o)return s&&Tl(t,n,!1),Ct(e,t,i);a=t.stateNode,jf.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&o?(t.child=Or(t,e.child,null,i),t.child=Or(t,null,l,i)):Me(e,t,l,i),t.memoizedState=a.state,s&&Tl(t,n,!0),t.child}function uu(e){var t=e.stateNode;t.pendingContext?El(e,t.pendingContext,t.pendingContext!==t.context):t.context&&El(e,t.context,!1),ko(e,t.containerInfo)}function Gl(e,t,n,a,s){return Lr(),xo(s),t.flags|=256,Me(e,t,n,a),t.child}var zi={dehydrated:null,treeContext:null,retryLane:0};function Mi(e){return{baseLanes:e,cachePool:null,transitions:null}}function pu(e,t,n){var a=t.pendingProps,s=oe.current,i=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(s&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),te(oe,s&1),e===null)return bi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=a.children,e=a.fallback,i?(a=t.mode,i=t.child,o={mode:"hidden",children:o},!(a&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=as(o,a,0,null),e=sr(e,a,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Mi(n),t.memoizedState=zi,e):To(t,o));if(s=e.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return wf(e,t,o,a,l,s,n);if(i){i=a.fallback,o=t.mode,s=e.child,l=s.sibling;var c={mode:"hidden",children:a.children};return!(o&1)&&t.child!==s?(a=t.child,a.childLanes=0,a.pendingProps=c,t.deletions=null):(a=Wt(s,c),a.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=Wt(l,i):(i=sr(i,o,n,null),i.flags|=2),i.return=t,a.return=t,a.sibling=i,t.child=a,a=i,i=t.child,o=e.child.memoizedState,o=o===null?Mi(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=zi,a}return i=e.child,e=i.sibling,a=Wt(i,{mode:"visible",children:a.children}),!(t.mode&1)&&(a.lanes=n),a.return=t,a.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function To(e,t){return t=as({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function na(e,t,n,a){return a!==null&&xo(a),Or(t,e.child,null,n),e=To(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function wf(e,t,n,a,s,i,o){if(n)return t.flags&256?(t.flags&=-257,a=Bs(Error(P(422))),na(e,t,o,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=a.fallback,s=t.mode,a=as({mode:"visible",children:a.children},s,0,null),i=sr(i,s,o,null),i.flags|=2,a.return=t,i.return=t,a.sibling=i,t.child=a,t.mode&1&&Or(t,e.child,null,o),t.child.memoizedState=Mi(o),t.memoizedState=zi,i);if(!(t.mode&1))return na(e,t,o,null);if(s.data==="$!"){if(a=s.nextSibling&&s.nextSibling.dataset,a)var l=a.dgst;return a=l,i=Error(P(419)),a=Bs(i,a,void 0),na(e,t,o,a)}if(l=(o&e.childLanes)!==0,_e||l){if(a=ve,a!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(a.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,St(e,s),ot(a,e,s,-1))}return Ro(),a=Bs(Error(P(421))),na(e,t,o,a)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=Ff.bind(null,e),s._reactRetry=t,null):(e=i.treeContext,$e=Dt(s.nextSibling),Ve=t,ie=!0,st=null,e!==null&&(Ke[Qe++]=bt,Ke[Qe++]=jt,Ke[Qe++]=lr,bt=e.id,jt=e.overflow,lr=t),t=To(t,a.children),t.flags|=4096,t)}function Kl(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),ji(e.return,t,n)}function As(e,t,n,a,s){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:s}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=n,i.tailMode=s)}function mu(e,t,n){var a=t.pendingProps,s=a.revealOrder,i=a.tail;if(Me(e,t,a.children,n),a=oe.current,a&2)a=a&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Kl(e,n,t);else if(e.tag===19)Kl(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(te(oe,a),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&La(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),As(t,!1,s,n,i);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&La(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}As(t,!0,n,null,i);break;case"together":As(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function xa(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ct(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),dr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=Wt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Wt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function kf(e,t,n){switch(t.tag){case 3:uu(t),Lr();break;case 5:Od(t);break;case 1:Ie(t.type)&&Ba(t);break;case 4:ko(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,s=t.memoizedProps.value;te(Fa,a._currentValue),a._currentValue=s;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(te(oe,oe.current&1),t.flags|=128,null):n&t.child.childLanes?pu(e,t,n):(te(oe,oe.current&1),e=Ct(e,t,n),e!==null?e.sibling:null);te(oe,oe.current&1);break;case 19:if(a=(n&t.childLanes)!==0,e.flags&128){if(a)return mu(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),te(oe,oe.current),a)break;return null;case 22:case 23:return t.lanes=0,cu(e,t,n)}return Ct(e,t,n)}var fu,Pi,hu,gu;fu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Pi=function(){};hu=function(e,t,n,a){var s=e.memoizedProps;if(s!==a){e=t.stateNode,nr(ht.current);var i=null;switch(n){case"input":s=Js(e,s),a=Js(e,a),i=[];break;case"select":s=ce({},s,{value:void 0}),a=ce({},a,{value:void 0}),i=[];break;case"textarea":s=ei(e,s),a=ei(e,a),i=[];break;default:typeof s.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=Ea)}ri(n,a);var o;n=null;for(u in s)if(!a.hasOwnProperty(u)&&s.hasOwnProperty(u)&&s[u]!=null)if(u==="style"){var l=s[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(gn.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in a){var c=a[u];if(l=s!=null?s[u]:void 0,a.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(i||(i=[]),i.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(i=i||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(gn.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&ne("scroll",e),i||l===c||(i=[])):(i=i||[]).push(u,c))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};gu=function(e,t,n,a){n!==a&&(t.flags|=4)};function Zr(e,t){if(!ie)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,a|=s.subtreeFlags&14680064,a|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,a|=s.subtreeFlags,a|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function Nf(e,t,n){var a=t.pendingProps;switch(go(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(t),null;case 1:return Ie(t.type)&&Ta(),Ne(t),null;case 3:return a=t.stateNode,Dr(),se(Fe),se(Ce),So(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ta(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,st!==null&&(Ri(st),st=null))),Pi(e,t),Ne(t),null;case 5:No(t);var s=nr(Mn.current);if(n=t.type,e!==null&&t.stateNode!=null)hu(e,t,n,a,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(P(166));return Ne(t),null}if(e=nr(ht.current),ta(t)){a=t.stateNode,n=t.type;var i=t.memoizedProps;switch(a[mt]=t,a[Cn]=i,e=(t.mode&1)!==0,n){case"dialog":ne("cancel",a),ne("close",a);break;case"iframe":case"object":case"embed":ne("load",a);break;case"video":case"audio":for(s=0;s<an.length;s++)ne(an[s],a);break;case"source":ne("error",a);break;case"img":case"image":case"link":ne("error",a),ne("load",a);break;case"details":ne("toggle",a);break;case"input":nl(a,i),ne("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!i.multiple},ne("invalid",a);break;case"textarea":sl(a,i),ne("invalid",a)}ri(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?a.textContent!==l&&(i.suppressHydrationWarning!==!0&&ea(a.textContent,l,e),s=["children",l]):typeof l=="number"&&a.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&ea(a.textContent,l,e),s=["children",""+l]):gn.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ne("scroll",a)}switch(n){case"input":qn(a),al(a,i,!0);break;case"textarea":qn(a),il(a);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(a.onclick=Ea)}a=s,t.updateQueue=a,a!==null&&(t.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Wc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=o.createElement(n,{is:a.is}):(e=o.createElement(n),n==="select"&&(o=e,a.multiple?o.multiple=!0:a.size&&(o.size=a.size))):e=o.createElementNS(e,n),e[mt]=t,e[Cn]=a,fu(e,t,!1,!1),t.stateNode=e;e:{switch(o=ni(n,a),n){case"dialog":ne("cancel",e),ne("close",e),s=a;break;case"iframe":case"object":case"embed":ne("load",e),s=a;break;case"video":case"audio":for(s=0;s<an.length;s++)ne(an[s],e);s=a;break;case"source":ne("error",e),s=a;break;case"img":case"image":case"link":ne("error",e),ne("load",e),s=a;break;case"details":ne("toggle",e),s=a;break;case"input":nl(e,a),s=Js(e,a),ne("invalid",e);break;case"option":s=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},s=ce({},a,{value:void 0}),ne("invalid",e);break;case"textarea":sl(e,a),s=ei(e,a),ne("invalid",e);break;default:s=a}ri(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var c=l[i];i==="style"?Gc(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Hc(e,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&xn(e,c):typeof c=="number"&&xn(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(gn.hasOwnProperty(i)?c!=null&&i==="onScroll"&&ne("scroll",e):c!=null&&eo(e,i,c,o))}switch(n){case"input":qn(e),al(e,a,!1);break;case"textarea":qn(e),il(e);break;case"option":a.value!=null&&e.setAttribute("value",""+qt(a.value));break;case"select":e.multiple=!!a.multiple,i=a.value,i!=null?Er(e,!!a.multiple,i,!1):a.defaultValue!=null&&Er(e,!!a.multiple,a.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Ea)}switch(n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ne(t),null;case 6:if(e&&t.stateNode!=null)gu(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(P(166));if(n=nr(Mn.current),nr(ht.current),ta(t)){if(a=t.stateNode,n=t.memoizedProps,a[mt]=t,(i=a.nodeValue!==n)&&(e=Ve,e!==null))switch(e.tag){case 3:ea(a.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ea(a.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else a=(n.nodeType===9?n:n.ownerDocument).createTextNode(a),a[mt]=t,t.stateNode=a}return Ne(t),null;case 13:if(se(oe),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ie&&$e!==null&&t.mode&1&&!(t.flags&128))_d(),Lr(),t.flags|=98560,i=!1;else if(i=ta(t),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(P(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(P(317));i[mt]=t}else Lr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ne(t),i=!1}else st!==null&&(Ri(st),st=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,t.mode&1&&(e===null||oe.current&1?ge===0&&(ge=3):Ro())),t.updateQueue!==null&&(t.flags|=4),Ne(t),null);case 4:return Dr(),Pi(e,t),e===null&&Nn(t.stateNode.containerInfo),Ne(t),null;case 10:return bo(t.type._context),Ne(t),null;case 17:return Ie(t.type)&&Ta(),Ne(t),null;case 19:if(se(oe),i=t.memoizedState,i===null)return Ne(t),null;if(a=(t.flags&128)!==0,o=i.rendering,o===null)if(a)Zr(i,!1);else{if(ge!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=La(e),o!==null){for(t.flags|=128,Zr(i,!1),a=o.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=n,n=t.child;n!==null;)i=n,e=a,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return te(oe,oe.current&1|2),t.child}e=e.sibling}i.tail!==null&&me()>Ur&&(t.flags|=128,a=!0,Zr(i,!1),t.lanes=4194304)}else{if(!a)if(e=La(o),e!==null){if(t.flags|=128,a=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Zr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!ie)return Ne(t),null}else 2*me()-i.renderingStartTime>Ur&&n!==1073741824&&(t.flags|=128,a=!0,Zr(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=me(),t.sibling=null,n=oe.current,te(oe,a?n&1|2:n&1),t):(Ne(t),null);case 22:case 23:return Io(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&t.mode&1?Oe&1073741824&&(Ne(t),t.subtreeFlags&6&&(t.flags|=8192)):Ne(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function Sf(e,t){switch(go(t),t.tag){case 1:return Ie(t.type)&&Ta(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Dr(),se(Fe),se(Ce),So(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return No(t),null;case 13:if(se(oe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));Lr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return se(oe),null;case 4:return Dr(),null;case 10:return bo(t.type._context),null;case 22:case 23:return Io(),null;case 24:return null;default:return null}}var aa=!1,Se=!1,Cf=typeof WeakSet=="function"?WeakSet:Set,F=null;function Mr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(a){pe(e,t,a)}else n.current=null}function Ei(e,t,n){try{n()}catch(a){pe(e,t,a)}}var Ql=!1;function zf(e,t){if(mi=za,e=jd(),fo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var s=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,c=-1,u=0,f=0,h=e,m=null;t:for(;;){for(var v;h!==n||s!==0&&h.nodeType!==3||(l=o+s),h!==i||a!==0&&h.nodeType!==3||(c=o+a),h.nodeType===3&&(o+=h.nodeValue.length),(v=h.firstChild)!==null;)m=h,h=v;for(;;){if(h===e)break t;if(m===n&&++u===s&&(l=o),m===i&&++f===a&&(c=o),(v=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=v}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(fi={focusedElem:e,selectionRange:n},za=!1,F=t;F!==null;)if(t=F,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,F=e;else for(;F!==null;){t=F;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var k=y.memoizedProps,N=y.memoizedState,d=t.stateNode,p=d.getSnapshotBeforeUpdate(t.elementType===t.type?k:nt(t.type,k),N);d.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(w){pe(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,F=e;break}F=t.return}return y=Ql,Ql=!1,y}function mn(e,t,n){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var s=a=a.next;do{if((s.tag&e)===e){var i=s.destroy;s.destroy=void 0,i!==void 0&&Ei(t,n,i)}s=s.next}while(s!==a)}}function rs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var a=n.create;n.destroy=a()}n=n.next}while(n!==t)}}function Ti(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function xu(e){var t=e.alternate;t!==null&&(e.alternate=null,xu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[mt],delete t[Cn],delete t[xi],delete t[cf],delete t[df])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function vu(e){return e.tag===5||e.tag===3||e.tag===4}function Yl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||vu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bi(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ea));else if(a!==4&&(e=e.child,e!==null))for(Bi(e,t,n),e=e.sibling;e!==null;)Bi(e,t,n),e=e.sibling}function Ai(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(Ai(e,t,n),e=e.sibling;e!==null;)Ai(e,t,n),e=e.sibling}var be=null,at=!1;function Et(e,t,n){for(n=n.child;n!==null;)yu(e,t,n),n=n.sibling}function yu(e,t,n){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(Ka,n)}catch{}switch(n.tag){case 5:Se||Mr(n,t);case 6:var a=be,s=at;be=null,Et(e,t,n),be=a,at=s,be!==null&&(at?(e=be,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):be.removeChild(n.stateNode));break;case 18:be!==null&&(at?(e=be,n=n.stateNode,e.nodeType===8?Cs(e.parentNode,n):e.nodeType===1&&Cs(e,n),jn(e)):Cs(be,n.stateNode));break;case 4:a=be,s=at,be=n.stateNode.containerInfo,at=!0,Et(e,t,n),be=a,at=s;break;case 0:case 11:case 14:case 15:if(!Se&&(a=n.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){s=a=a.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Ei(n,t,o),s=s.next}while(s!==a)}Et(e,t,n);break;case 1:if(!Se&&(Mr(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=n.memoizedProps,a.state=n.memoizedState,a.componentWillUnmount()}catch(l){pe(n,t,l)}Et(e,t,n);break;case 21:Et(e,t,n);break;case 22:n.mode&1?(Se=(a=Se)||n.memoizedState!==null,Et(e,t,n),Se=a):Et(e,t,n);break;default:Et(e,t,n)}}function Jl(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Cf),t.forEach(function(a){var s=If.bind(null,e,a);n.has(a)||(n.add(a),a.then(s,s))})}}function rt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];try{var i=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:be=l.stateNode,at=!1;break e;case 3:be=l.stateNode.containerInfo,at=!0;break e;case 4:be=l.stateNode.containerInfo,at=!0;break e}l=l.return}if(be===null)throw Error(P(160));yu(i,o,s),be=null,at=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(u){pe(s,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)bu(t,e),t=t.sibling}function bu(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(rt(t,e),ut(e),a&4){try{mn(3,e,e.return),rs(3,e)}catch(k){pe(e,e.return,k)}try{mn(5,e,e.return)}catch(k){pe(e,e.return,k)}}break;case 1:rt(t,e),ut(e),a&512&&n!==null&&Mr(n,n.return);break;case 5:if(rt(t,e),ut(e),a&512&&n!==null&&Mr(n,n.return),e.flags&32){var s=e.stateNode;try{xn(s,"")}catch(k){pe(e,e.return,k)}}if(a&4&&(s=e.stateNode,s!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Uc(s,i),ni(l,o);var u=ni(l,i);for(o=0;o<c.length;o+=2){var f=c[o],h=c[o+1];f==="style"?Gc(s,h):f==="dangerouslySetInnerHTML"?Hc(s,h):f==="children"?xn(s,h):eo(s,f,h,u)}switch(l){case"input":Xs(s,i);break;case"textarea":Vc(s,i);break;case"select":var m=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?Er(s,!!i.multiple,v,!1):m!==!!i.multiple&&(i.defaultValue!=null?Er(s,!!i.multiple,i.defaultValue,!0):Er(s,!!i.multiple,i.multiple?[]:"",!1))}s[Cn]=i}catch(k){pe(e,e.return,k)}}break;case 6:if(rt(t,e),ut(e),a&4){if(e.stateNode===null)throw Error(P(162));s=e.stateNode,i=e.memoizedProps;try{s.nodeValue=i}catch(k){pe(e,e.return,k)}}break;case 3:if(rt(t,e),ut(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{jn(t.containerInfo)}catch(k){pe(e,e.return,k)}break;case 4:rt(t,e),ut(e);break;case 13:rt(t,e),ut(e),s=e.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(_o=me())),a&4&&Jl(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Se=(u=Se)||f,rt(t,e),Se=u):rt(t,e),ut(e),a&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(F=e,f=e.child;f!==null;){for(h=F=f;F!==null;){switch(m=F,v=m.child,m.tag){case 0:case 11:case 14:case 15:mn(4,m,m.return);break;case 1:Mr(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){a=m,n=m.return;try{t=a,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(k){pe(a,n,k)}}break;case 5:Mr(m,m.return);break;case 22:if(m.memoizedState!==null){Zl(h);continue}}v!==null?(v.return=m,F=v):Zl(h)}f=f.sibling}e:for(f=null,h=e;;){if(h.tag===5){if(f===null){f=h;try{s=h.stateNode,u?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=h.stateNode,c=h.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=qc("display",o))}catch(k){pe(e,e.return,k)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(k){pe(e,e.return,k)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:rt(t,e),ut(e),a&4&&Jl(e);break;case 21:break;default:rt(t,e),ut(e)}}function ut(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(vu(n)){var a=n;break e}n=n.return}throw Error(P(160))}switch(a.tag){case 5:var s=a.stateNode;a.flags&32&&(xn(s,""),a.flags&=-33);var i=Yl(e);Ai(e,i,s);break;case 3:case 4:var o=a.stateNode.containerInfo,l=Yl(e);Bi(e,l,o);break;default:throw Error(P(161))}}catch(c){pe(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Mf(e,t,n){F=e,ju(e)}function ju(e,t,n){for(var a=(e.mode&1)!==0;F!==null;){var s=F,i=s.child;if(s.tag===22&&a){var o=s.memoizedState!==null||aa;if(!o){var l=s.alternate,c=l!==null&&l.memoizedState!==null||Se;l=aa;var u=Se;if(aa=o,(Se=c)&&!u)for(F=s;F!==null;)o=F,c=o.child,o.tag===22&&o.memoizedState!==null?ec(s):c!==null?(c.return=o,F=c):ec(s);for(;i!==null;)F=i,ju(i),i=i.sibling;F=s,aa=l,Se=u}Xl(e)}else s.subtreeFlags&8772&&i!==null?(i.return=s,F=i):Xl(e)}}function Xl(e){for(;F!==null;){var t=F;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Se||rs(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!Se)if(n===null)a.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:nt(t.type,n.memoizedProps);a.componentDidUpdate(s,n.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Il(t,i,a);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Il(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&jn(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}Se||t.flags&512&&Ti(t)}catch(m){pe(t,t.return,m)}}if(t===e){F=null;break}if(n=t.sibling,n!==null){n.return=t.return,F=n;break}F=t.return}}function Zl(e){for(;F!==null;){var t=F;if(t===e){F=null;break}var n=t.sibling;if(n!==null){n.return=t.return,F=n;break}F=t.return}}function ec(e){for(;F!==null;){var t=F;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rs(4,t)}catch(c){pe(t,n,c)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var s=t.return;try{a.componentDidMount()}catch(c){pe(t,s,c)}}var i=t.return;try{Ti(t)}catch(c){pe(t,i,c)}break;case 5:var o=t.return;try{Ti(t)}catch(c){pe(t,o,c)}}}catch(c){pe(t,t.return,c)}if(t===e){F=null;break}var l=t.sibling;if(l!==null){l.return=t.return,F=l;break}F=t.return}}var Pf=Math.ceil,$a=Mt.ReactCurrentDispatcher,Bo=Mt.ReactCurrentOwner,Je=Mt.ReactCurrentBatchConfig,Q=0,ve=null,fe=null,je=0,Oe=0,Pr=Yt(0),ge=0,Bn=null,dr=0,ns=0,Ao=0,fn=null,Ae=null,_o=0,Ur=1/0,vt=null,Ua=!1,_i=null,Ut=null,sa=!1,It=null,Va=0,hn=0,Fi=null,va=-1,ya=0;function Pe(){return Q&6?me():va!==-1?va:va=me()}function Vt(e){return e.mode&1?Q&2&&je!==0?je&-je:pf.transition!==null?(ya===0&&(ya=sd()),ya):(e=X,e!==0||(e=window.event,e=e===void 0?16:pd(e.type)),e):1}function ot(e,t,n,a){if(50<hn)throw hn=0,Fi=null,Error(P(185));Rn(e,n,a),(!(Q&2)||e!==ve)&&(e===ve&&(!(Q&2)&&(ns|=n),ge===4&&_t(e,je)),Re(e,a),n===1&&Q===0&&!(t.mode&1)&&(Ur=me()+500,Za&&Jt()))}function Re(e,t){var n=e.callbackNode;um(e,t);var a=Ca(e,e===ve?je:0);if(a===0)n!==null&&cl(n),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(n!=null&&cl(n),t===1)e.tag===0?uf(tc.bind(null,e)):Td(tc.bind(null,e)),of(function(){!(Q&6)&&Jt()}),n=null;else{switch(id(a)){case 1:n=so;break;case 4:n=nd;break;case 16:n=Sa;break;case 536870912:n=ad;break;default:n=Sa}n=Pu(n,wu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function wu(e,t){if(va=-1,ya=0,Q&6)throw Error(P(327));var n=e.callbackNode;if(Fr()&&e.callbackNode!==n)return null;var a=Ca(e,e===ve?je:0);if(a===0)return null;if(a&30||a&e.expiredLanes||t)t=Wa(e,a);else{t=a;var s=Q;Q|=2;var i=Nu();(ve!==e||je!==t)&&(vt=null,Ur=me()+500,ar(e,t));do try{Bf();break}catch(l){ku(e,l)}while(!0);yo(),$a.current=i,Q=s,fe!==null?t=0:(ve=null,je=0,t=ge)}if(t!==0){if(t===2&&(s=li(e),s!==0&&(a=s,t=Ii(e,s))),t===1)throw n=Bn,ar(e,0),_t(e,a),Re(e,me()),n;if(t===6)_t(e,a);else{if(s=e.current.alternate,!(a&30)&&!Ef(s)&&(t=Wa(e,a),t===2&&(i=li(e),i!==0&&(a=i,t=Ii(e,i))),t===1))throw n=Bn,ar(e,0),_t(e,a),Re(e,me()),n;switch(e.finishedWork=s,e.finishedLanes=a,t){case 0:case 1:throw Error(P(345));case 2:er(e,Ae,vt);break;case 3:if(_t(e,a),(a&130023424)===a&&(t=_o+500-me(),10<t)){if(Ca(e,0)!==0)break;if(s=e.suspendedLanes,(s&a)!==a){Pe(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=gi(er.bind(null,e,Ae,vt),t);break}er(e,Ae,vt);break;case 4:if(_t(e,a),(a&4194240)===a)break;for(t=e.eventTimes,s=-1;0<a;){var o=31-it(a);i=1<<o,o=t[o],o>s&&(s=o),a&=~i}if(a=s,a=me()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Pf(a/1960))-a,10<a){e.timeoutHandle=gi(er.bind(null,e,Ae,vt),a);break}er(e,Ae,vt);break;case 5:er(e,Ae,vt);break;default:throw Error(P(329))}}}return Re(e,me()),e.callbackNode===n?wu.bind(null,e):null}function Ii(e,t){var n=fn;return e.current.memoizedState.isDehydrated&&(ar(e,t).flags|=256),e=Wa(e,t),e!==2&&(t=Ae,Ae=n,t!==null&&Ri(t)),e}function Ri(e){Ae===null?Ae=e:Ae.push.apply(Ae,e)}function Ef(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var a=0;a<n.length;a++){var s=n[a],i=s.getSnapshot;s=s.value;try{if(!lt(i(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _t(e,t){for(t&=~Ao,t&=~ns,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-it(t),a=1<<n;e[n]=-1,t&=~a}}function tc(e){if(Q&6)throw Error(P(327));Fr();var t=Ca(e,0);if(!(t&1))return Re(e,me()),null;var n=Wa(e,t);if(e.tag!==0&&n===2){var a=li(e);a!==0&&(t=a,n=Ii(e,a))}if(n===1)throw n=Bn,ar(e,0),_t(e,t),Re(e,me()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,er(e,Ae,vt),Re(e,me()),null}function Fo(e,t){var n=Q;Q|=1;try{return e(t)}finally{Q=n,Q===0&&(Ur=me()+500,Za&&Jt())}}function ur(e){It!==null&&It.tag===0&&!(Q&6)&&Fr();var t=Q;Q|=1;var n=Je.transition,a=X;try{if(Je.transition=null,X=1,e)return e()}finally{X=a,Je.transition=n,Q=t,!(Q&6)&&Jt()}}function Io(){Oe=Pr.current,se(Pr)}function ar(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,sf(n)),fe!==null)for(n=fe.return;n!==null;){var a=n;switch(go(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Ta();break;case 3:Dr(),se(Fe),se(Ce),So();break;case 5:No(a);break;case 4:Dr();break;case 13:se(oe);break;case 19:se(oe);break;case 10:bo(a.type._context);break;case 22:case 23:Io()}n=n.return}if(ve=e,fe=e=Wt(e.current,null),je=Oe=t,ge=0,Bn=null,Ao=ns=dr=0,Ae=fn=null,rr!==null){for(t=0;t<rr.length;t++)if(n=rr[t],a=n.interleaved,a!==null){n.interleaved=null;var s=a.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,a.next=o}n.pending=a}rr=null}return e}function ku(e,t){do{var n=fe;try{if(yo(),ha.current=Da,Oa){for(var a=le.memoizedState;a!==null;){var s=a.queue;s!==null&&(s.pending=null),a=a.next}Oa=!1}if(cr=0,xe=he=le=null,pn=!1,Pn=0,Bo.current=null,n===null||n.return===null){ge=1,Bn=t,fe=null;break}e:{var i=e,o=n.return,l=n,c=t;if(t=je,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,f=l,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=Ul(o);if(v!==null){v.flags&=-257,Vl(v,o,l,i,t),v.mode&1&&$l(i,u,t),t=v,c=u;var y=t.updateQueue;if(y===null){var k=new Set;k.add(c),t.updateQueue=k}else y.add(c);break e}else{if(!(t&1)){$l(i,u,t),Ro();break e}c=Error(P(426))}}else if(ie&&l.mode&1){var N=Ul(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Vl(N,o,l,i,t),xo($r(c,l));break e}}i=c=$r(c,l),ge!==4&&(ge=2),fn===null?fn=[i]:fn.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var d=iu(i,c,t);Fl(i,d);break e;case 1:l=c;var p=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ut===null||!Ut.has(g)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=ou(i,l,t);Fl(i,w);break e}}i=i.return}while(i!==null)}Cu(n)}catch(z){t=z,fe===n&&n!==null&&(fe=n=n.return);continue}break}while(!0)}function Nu(){var e=$a.current;return $a.current=Da,e===null?Da:e}function Ro(){(ge===0||ge===3||ge===2)&&(ge=4),ve===null||!(dr&268435455)&&!(ns&268435455)||_t(ve,je)}function Wa(e,t){var n=Q;Q|=2;var a=Nu();(ve!==e||je!==t)&&(vt=null,ar(e,t));do try{Tf();break}catch(s){ku(e,s)}while(!0);if(yo(),Q=n,$a.current=a,fe!==null)throw Error(P(261));return ve=null,je=0,ge}function Tf(){for(;fe!==null;)Su(fe)}function Bf(){for(;fe!==null&&!rm();)Su(fe)}function Su(e){var t=Mu(e.alternate,e,Oe);e.memoizedProps=e.pendingProps,t===null?Cu(e):fe=t,Bo.current=null}function Cu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Sf(n,t),n!==null){n.flags&=32767,fe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ge=6,fe=null;return}}else if(n=Nf(n,t,Oe),n!==null){fe=n;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);ge===0&&(ge=5)}function er(e,t,n){var a=X,s=Je.transition;try{Je.transition=null,X=1,Af(e,t,n,a)}finally{Je.transition=s,X=a}return null}function Af(e,t,n,a){do Fr();while(It!==null);if(Q&6)throw Error(P(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(pm(e,i),e===ve&&(fe=ve=null,je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||sa||(sa=!0,Pu(Sa,function(){return Fr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Je.transition,Je.transition=null;var o=X;X=1;var l=Q;Q|=4,Bo.current=null,zf(e,n),bu(n,e),Xm(fi),za=!!mi,fi=mi=null,e.current=n,Mf(n),nm(),Q=l,X=o,Je.transition=i}else e.current=n;if(sa&&(sa=!1,It=e,Va=s),i=e.pendingLanes,i===0&&(Ut=null),im(n.stateNode),Re(e,me()),t!==null)for(a=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],a(s.value,{componentStack:s.stack,digest:s.digest});if(Ua)throw Ua=!1,e=_i,_i=null,e;return Va&1&&e.tag!==0&&Fr(),i=e.pendingLanes,i&1?e===Fi?hn++:(hn=0,Fi=e):hn=0,Jt(),null}function Fr(){if(It!==null){var e=id(Va),t=Je.transition,n=X;try{if(Je.transition=null,X=16>e?16:e,It===null)var a=!1;else{if(e=It,It=null,Va=0,Q&6)throw Error(P(331));var s=Q;for(Q|=4,F=e.current;F!==null;){var i=F,o=i.child;if(F.flags&16){var l=i.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(F=u;F!==null;){var f=F;switch(f.tag){case 0:case 11:case 15:mn(8,f,i)}var h=f.child;if(h!==null)h.return=f,F=h;else for(;F!==null;){f=F;var m=f.sibling,v=f.return;if(xu(f),f===u){F=null;break}if(m!==null){m.return=v,F=m;break}F=v}}}var y=i.alternate;if(y!==null){var k=y.child;if(k!==null){y.child=null;do{var N=k.sibling;k.sibling=null,k=N}while(k!==null)}}F=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,F=o;else e:for(;F!==null;){if(i=F,i.flags&2048)switch(i.tag){case 0:case 11:case 15:mn(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,F=d;break e}F=i.return}}var p=e.current;for(F=p;F!==null;){o=F;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,F=g;else e:for(o=p;F!==null;){if(l=F,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:rs(9,l)}}catch(z){pe(l,l.return,z)}if(l===o){F=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,F=w;break e}F=l.return}}if(Q=s,Jt(),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(Ka,e)}catch{}a=!0}return a}finally{X=n,Je.transition=t}}return!1}function rc(e,t,n){t=$r(n,t),t=iu(e,t,1),e=$t(e,t,1),t=Pe(),e!==null&&(Rn(e,1,t),Re(e,t))}function pe(e,t,n){if(e.tag===3)rc(e,e,n);else for(;t!==null;){if(t.tag===3){rc(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Ut===null||!Ut.has(a))){e=$r(n,e),e=ou(t,e,1),t=$t(t,e,1),e=Pe(),t!==null&&(Rn(t,1,e),Re(t,e));break}}t=t.return}}function _f(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),t=Pe(),e.pingedLanes|=e.suspendedLanes&n,ve===e&&(je&n)===n&&(ge===4||ge===3&&(je&130023424)===je&&500>me()-_o?ar(e,0):Ao|=n),Re(e,t)}function zu(e,t){t===0&&(e.mode&1?(t=Qn,Qn<<=1,!(Qn&130023424)&&(Qn=4194304)):t=1);var n=Pe();e=St(e,t),e!==null&&(Rn(e,t,n),Re(e,n))}function Ff(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),zu(e,n)}function If(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(P(314))}a!==null&&a.delete(t),zu(e,n)}var Mu;Mu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Fe.current)_e=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return _e=!1,kf(e,t,n);_e=!!(e.flags&131072)}else _e=!1,ie&&t.flags&1048576&&Bd(t,_a,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;xa(e,t),e=t.pendingProps;var s=Rr(t,Ce.current);_r(t,n),s=zo(null,t,a,e,s,n);var i=Mo();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ie(a)?(i=!0,Ba(t)):i=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,wo(t),s.updater=ts,t.stateNode=s,s._reactInternals=t,ki(t,a,e,n),t=Ci(null,t,a,!0,i,n)):(t.tag=0,ie&&i&&ho(t),Me(null,t,s,n),t=t.child),t;case 16:a=t.elementType;e:{switch(xa(e,t),e=t.pendingProps,s=a._init,a=s(a._payload),t.type=a,s=t.tag=Lf(a),e=nt(a,e),s){case 0:t=Si(null,t,a,e,n);break e;case 1:t=ql(null,t,a,e,n);break e;case 11:t=Wl(null,t,a,e,n);break e;case 14:t=Hl(null,t,a,nt(a.type,e),n);break e}throw Error(P(306,a,""))}return t;case 0:return a=t.type,s=t.pendingProps,s=t.elementType===a?s:nt(a,s),Si(e,t,a,s,n);case 1:return a=t.type,s=t.pendingProps,s=t.elementType===a?s:nt(a,s),ql(e,t,a,s,n);case 3:e:{if(uu(t),e===null)throw Error(P(387));a=t.pendingProps,i=t.memoizedState,s=i.element,Ld(e,t),Ra(t,a,null,n);var o=t.memoizedState;if(a=o.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){s=$r(Error(P(423)),t),t=Gl(e,t,a,n,s);break e}else if(a!==s){s=$r(Error(P(424)),t),t=Gl(e,t,a,n,s);break e}else for($e=Dt(t.stateNode.containerInfo.firstChild),Ve=t,ie=!0,st=null,n=Id(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Lr(),a===s){t=Ct(e,t,n);break e}Me(e,t,a,n)}t=t.child}return t;case 5:return Od(t),e===null&&bi(t),a=t.type,s=t.pendingProps,i=e!==null?e.memoizedProps:null,o=s.children,hi(a,s)?o=null:i!==null&&hi(a,i)&&(t.flags|=32),du(e,t),Me(e,t,o,n),t.child;case 6:return e===null&&bi(t),null;case 13:return pu(e,t,n);case 4:return ko(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Or(t,null,a,n):Me(e,t,a,n),t.child;case 11:return a=t.type,s=t.pendingProps,s=t.elementType===a?s:nt(a,s),Wl(e,t,a,s,n);case 7:return Me(e,t,t.pendingProps,n),t.child;case 8:return Me(e,t,t.pendingProps.children,n),t.child;case 12:return Me(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(a=t.type._context,s=t.pendingProps,i=t.memoizedProps,o=s.value,te(Fa,a._currentValue),a._currentValue=o,i!==null)if(lt(i.value,o)){if(i.children===s.children&&!Fe.current){t=Ct(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var c=l.firstContext;c!==null;){if(c.context===a){if(i.tag===1){c=wt(-1,n&-n),c.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?c.next=c:(c.next=f.next,f.next=c),u.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),ji(i.return,n,t),l.lanes|=n;break}c=c.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(P(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ji(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Me(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,a=t.pendingProps.children,_r(t,n),s=Xe(s),a=a(s),t.flags|=1,Me(e,t,a,n),t.child;case 14:return a=t.type,s=nt(a,t.pendingProps),s=nt(a.type,s),Hl(e,t,a,s,n);case 15:return lu(e,t,t.type,t.pendingProps,n);case 17:return a=t.type,s=t.pendingProps,s=t.elementType===a?s:nt(a,s),xa(e,t),t.tag=1,Ie(a)?(e=!0,Ba(t)):e=!1,_r(t,n),su(t,a,s),ki(t,a,s,n),Ci(null,t,a,!0,e,n);case 19:return mu(e,t,n);case 22:return cu(e,t,n)}throw Error(P(156,t.tag))};function Pu(e,t){return rd(e,t)}function Rf(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ye(e,t,n,a){return new Rf(e,t,n,a)}function Lo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Lf(e){if(typeof e=="function")return Lo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ro)return 11;if(e===no)return 14}return 2}function Wt(e,t){var n=e.alternate;return n===null?(n=Ye(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ba(e,t,n,a,s,i){var o=2;if(a=e,typeof e=="function")Lo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case yr:return sr(n.children,s,i,t);case to:o=8,s|=8;break;case Gs:return e=Ye(12,n,t,s|2),e.elementType=Gs,e.lanes=i,e;case Ks:return e=Ye(13,n,t,s),e.elementType=Ks,e.lanes=i,e;case Qs:return e=Ye(19,n,t,s),e.elementType=Qs,e.lanes=i,e;case Oc:return as(n,s,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Rc:o=10;break e;case Lc:o=9;break e;case ro:o=11;break e;case no:o=14;break e;case Tt:o=16,a=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=Ye(o,n,t,s),t.elementType=e,t.type=a,t.lanes=i,t}function sr(e,t,n,a){return e=Ye(7,e,a,t),e.lanes=n,e}function as(e,t,n,a){return e=Ye(22,e,a,t),e.elementType=Oc,e.lanes=n,e.stateNode={isHidden:!1},e}function _s(e,t,n){return e=Ye(6,e,null,t),e.lanes=n,e}function Fs(e,t,n){return t=Ye(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Of(e,t,n,a,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hs(0),this.expirationTimes=hs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hs(0),this.identifierPrefix=a,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Oo(e,t,n,a,s,i,o,l,c){return e=new Of(e,t,n,l,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ye(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:a,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wo(i),e}function Df(e,t,n){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vr,key:a==null?null:""+a,children:e,containerInfo:t,implementation:n}}function Eu(e){if(!e)return Gt;e=e._reactInternals;e:{if(mr(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ie(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(Ie(n))return Ed(e,n,t)}return t}function Tu(e,t,n,a,s,i,o,l,c){return e=Oo(n,a,!0,e,s,i,o,l,c),e.context=Eu(null),n=e.current,a=Pe(),s=Vt(n),i=wt(a,s),i.callback=t??null,$t(n,i,s),e.current.lanes=s,Rn(e,s,a),Re(e,a),e}function ss(e,t,n,a){var s=t.current,i=Pe(),o=Vt(s);return n=Eu(n),t.context===null?t.context=n:t.pendingContext=n,t=wt(i,o),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=$t(s,t,o),e!==null&&(ot(e,s,o,i),fa(e,s,o)),o}function Ha(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function nc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Do(e,t){nc(e,t),(e=e.alternate)&&nc(e,t)}function $f(){return null}var Bu=typeof reportError=="function"?reportError:function(e){console.error(e)};function $o(e){this._internalRoot=e}is.prototype.render=$o.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));ss(e,t,null,null)};is.prototype.unmount=$o.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ur(function(){ss(null,e,null,null)}),t[Nt]=null}};function is(e){this._internalRoot=e}is.prototype.unstable_scheduleHydration=function(e){if(e){var t=cd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<At.length&&t!==0&&t<At[n].priority;n++);At.splice(n,0,e),n===0&&ud(e)}};function Uo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function os(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ac(){}function Uf(e,t,n,a,s){if(s){if(typeof a=="function"){var i=a;a=function(){var u=Ha(o);i.call(u)}}var o=Tu(t,a,e,0,null,!1,!1,"",ac);return e._reactRootContainer=o,e[Nt]=o.current,Nn(e.nodeType===8?e.parentNode:e),ur(),o}for(;s=e.lastChild;)e.removeChild(s);if(typeof a=="function"){var l=a;a=function(){var u=Ha(c);l.call(u)}}var c=Oo(e,0,!1,null,null,!1,!1,"",ac);return e._reactRootContainer=c,e[Nt]=c.current,Nn(e.nodeType===8?e.parentNode:e),ur(function(){ss(t,c,n,a)}),c}function ls(e,t,n,a,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var c=Ha(o);l.call(c)}}ss(t,o,e,s)}else o=Uf(n,t,e,s,a);return Ha(o)}od=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=nn(t.pendingLanes);n!==0&&(io(t,n|1),Re(t,me()),!(Q&6)&&(Ur=me()+500,Jt()))}break;case 13:ur(function(){var a=St(e,1);if(a!==null){var s=Pe();ot(a,e,1,s)}}),Do(e,1)}};oo=function(e){if(e.tag===13){var t=St(e,134217728);if(t!==null){var n=Pe();ot(t,e,134217728,n)}Do(e,134217728)}};ld=function(e){if(e.tag===13){var t=Vt(e),n=St(e,t);if(n!==null){var a=Pe();ot(n,e,t,a)}Do(e,t)}};cd=function(){return X};dd=function(e,t){var n=X;try{return X=e,t()}finally{X=n}};si=function(e,t,n){switch(t){case"input":if(Xs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var s=Xa(a);if(!s)throw Error(P(90));$c(a),Xs(a,s)}}}break;case"textarea":Vc(e,n);break;case"select":t=n.value,t!=null&&Er(e,!!n.multiple,t,!1)}};Yc=Fo;Jc=ur;var Vf={usingClientEntryPoint:!1,Events:[On,kr,Xa,Kc,Qc,Fo]},en={findFiberByHostInstance:tr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Wf={bundleType:en.bundleType,version:en.version,rendererPackageName:en.rendererPackageName,rendererConfig:en.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ed(e),e===null?null:e.stateNode},findFiberByHostInstance:en.findFiberByHostInstance||$f,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ia=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ia.isDisabled&&ia.supportsFiber)try{Ka=ia.inject(Wf),ft=ia}catch{}}qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vf;qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Uo(t))throw Error(P(200));return Df(e,t,null,n)};qe.createRoot=function(e,t){if(!Uo(e))throw Error(P(299));var n=!1,a="",s=Bu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=Oo(e,1,!1,null,null,n,!1,a,s),e[Nt]=t.current,Nn(e.nodeType===8?e.parentNode:e),new $o(t)};qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=ed(t),e=e===null?null:e.stateNode,e};qe.flushSync=function(e){return ur(e)};qe.hydrate=function(e,t,n){if(!os(t))throw Error(P(200));return ls(null,e,t,!0,n)};qe.hydrateRoot=function(e,t,n){if(!Uo(e))throw Error(P(405));var a=n!=null&&n.hydratedSources||null,s=!1,i="",o=Bu;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Tu(t,null,e,1,n??null,s,!1,i,o),e[Nt]=t.current,Nn(e),a)for(e=0;e<a.length;e++)n=a[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new is(t)};qe.render=function(e,t,n){if(!os(t))throw Error(P(200));return ls(null,e,t,!1,n)};qe.unmountComponentAtNode=function(e){if(!os(e))throw Error(P(40));return e._reactRootContainer?(ur(function(){ls(null,null,e,!1,function(){e._reactRootContainer=null,e[Nt]=null})}),!0):!1};qe.unstable_batchedUpdates=Fo;qe.unstable_renderSubtreeIntoContainer=function(e,t,n,a){if(!os(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return ls(e,t,n,!1,a)};qe.version="18.3.1-next-f1338f8080-20240426";function Au(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Au)}catch(e){console.error(e)}}Au(),Ac.exports=qe;var Hf=Ac.exports,sc=Hf;Hs.createRoot=sc.createRoot,Hs.hydrateRoot=sc.hydrateRoot;const Li=[{id:"ahmedabad",name:"Ahmedabad",state:"Gujarat",region:"West",lat:23.0225,lng:72.5714,isMetro:!0},{id:"mumbai",name:"Mumbai",state:"Maharashtra",region:"West",lat:19.076,lng:72.8777,isMetro:!0},{id:"pune",name:"Pune",state:"Maharashtra",region:"West",lat:18.5204,lng:73.8567,isMetro:!0},{id:"surat",name:"Surat",state:"Gujarat",region:"West",lat:21.1702,lng:72.8311},{id:"vadodara",name:"Vadodara",state:"Gujarat",region:"West",lat:22.3072,lng:73.1812},{id:"rajkot",name:"Rajkot",state:"Gujarat",region:"West",lat:22.3039,lng:70.8022},{id:"nagpur",name:"Nagpur",state:"Maharashtra",region:"West",lat:21.1458,lng:79.0882},{id:"nashik",name:"Nashik",state:"Maharashtra",region:"West",lat:19.9975,lng:73.7898},{id:"goa",name:"Goa (Panaji)",state:"Goa",region:"West",lat:15.4909,lng:73.8278},{id:"bengaluru",name:"Bengaluru",state:"Karnataka",region:"South",lat:12.9716,lng:77.5946,isMetro:!0},{id:"chennai",name:"Chennai",state:"Tamil Nadu",region:"South",lat:13.0827,lng:80.2707,isMetro:!0},{id:"hyderabad",name:"Hyderabad",state:"Telangana",region:"South",lat:17.385,lng:78.4867,isMetro:!0},{id:"kochi",name:"Kochi",state:"Kerala",region:"South",lat:9.9312,lng:76.2673},{id:"coimbatore",name:"Coimbatore",state:"Tamil Nadu",region:"South",lat:11.0168,lng:76.9558},{id:"thiruvananthapuram",name:"Thiruvananthapuram",state:"Kerala",region:"South",lat:8.5241,lng:76.9366},{id:"visakhapatnam",name:"Visakhapatnam",state:"Andhra Pradesh",region:"South",lat:17.6868,lng:83.2185},{id:"delhi",name:"Delhi NCR (New Delhi)",state:"Delhi",region:"North",lat:28.6139,lng:77.209,isMetro:!0},{id:"gurugram",name:"Gurugram (Gurgaon)",state:"Haryana",region:"North",lat:28.4595,lng:77.0266,isMetro:!0},{id:"noida",name:"Noida / Greater Noida",state:"Uttar Pradesh",region:"North",lat:28.5355,lng:77.391,isMetro:!0},{id:"chandigarh",name:"Chandigarh",state:"Punjab/Haryana",region:"North",lat:30.7333,lng:76.7794},{id:"jaipur",name:"Jaipur",state:"Rajasthan",region:"North",lat:26.9124,lng:75.7873},{id:"lucknow",name:"Lucknow",state:"Uttar Pradesh",region:"North",lat:26.8467,lng:80.9462},{id:"dehradun",name:"Dehradun",state:"Uttarakhand",region:"North",lat:30.3165,lng:78.0322},{id:"kolkata",name:"Kolkata",state:"West Bengal",region:"East",lat:22.5726,lng:88.3639,isMetro:!0},{id:"bhubaneswar",name:"Bhubaneswar",state:"Odisha",region:"East",lat:20.2961,lng:85.8245},{id:"patna",name:"Patna",state:"Bihar",region:"East",lat:25.5941,lng:85.1376},{id:"ranchi",name:"Ranchi",state:"Jharkhand",region:"East",lat:23.3441,lng:85.3096},{id:"guwahati",name:"Guwahati",state:"Assam",region:"East",lat:26.1445,lng:91.7362},{id:"indore",name:"Indore",state:"Madhya Pradesh",region:"Central",lat:22.7196,lng:75.8577},{id:"bhopal",name:"Bhopal",state:"Madhya Pradesh",region:"Central",lat:23.2599,lng:77.4126},{id:"raipur",name:"Raipur",state:"Chhattisgarh",region:"Central",lat:21.2514,lng:81.6296}],Is=Li,_u=[{id:"all",name:"All Sports",icon:"🏆",color:"#10B981"},{id:"badminton",name:"Badminton",icon:"🏸",color:"#06B6D4"},{id:"football",name:"Football / Turf",icon:"⚽",color:"#10B981"},{id:"cricket",name:"Box Cricket",icon:"🏏",color:"#F59E0B"},{id:"tennis",name:"Tennis",icon:"🎾",color:"#84CC16"},{id:"pickleball",name:"Pickleball",icon:"🏓",color:"#EC4899"},{id:"basketball",name:"Basketball",icon:"🏀",color:"#F97316"},{id:"table_tennis",name:"Table Tennis",icon:"🏓",color:"#6366F1"},{id:"swimming",name:"Swimming",icon:"🏊",color:"#3B82F6"},{id:"squash",name:"Squash",icon:"🎯",color:"#A855F7"}],qa="3.0.0-pan-india",Oi=[{id:"the-arena-transstadia",name:"The Arena by TransStadia",city:"ahmedabad",area:"Kankaria Lake, Maninagar",fullAddress:"Near Gate No. 3, Kankaria Lake, Maninagar, Ahmedabad, Gujarat 380022",rating:4.9,reviewsCount:38,pricePerHour:750,sport:"football",sportName:"Football / Turf",sportIcon:"⚽",venueType:"outdoor",isTopRated:!0,isBudget:!1,operatingHours:"6:00 AM - 11:30 PM",about:"India’s premier convertible multi-purpose stadium built to Olympic specifications. Features FIFA 2-star certified artificial football turf, 4K night floodlighting, professional dugouts, and player locker rooms.",specialNotes:["FIFA 2-Star certified turf flooring with shock pad underlay","Turf/rubber sole shoes strictly required (metal studs prohibited)","Official match balls and training bibs provided free of charge"],amenities:["FIFA Certified 50mm Turf","4K LED Floodlights","Changing Rooms & Showers","Match Bibs & Ball Included","Spectator Gallery (20,000 capacity)","Sports Cafe & Nutrition Bar"],courts:[{id:"c1",name:"Turf A (7v7 Match Turf)",surface:"FIFA Certified AstroTurf",price:1200},{id:"c2",name:"Turf B (5v5 Fast Pitch)",surface:"FIFA Certified AstroTurf",price:750}],images:["https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80","https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=1200&q=80"],reviews:[{id:"rev-ts-1",userName:"Aman Singhania",userAvatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",rating:5,date:"24 June 2025",time:"8:30 PM",comment:"World class facility! The turf cushioning is top notch with zero knee strain. Lighting is bright and even."}],coordinates:{lat:22.9984,lng:72.5976}},{id:"sbr-badminton",name:"SBR Badminton & Sports Arena",city:"ahmedabad",area:"Satellite / Jodhpur Cross Road",fullAddress:"2nd Floor, Aangan Complex, Opposite Star Bazaar, Satellite, Ahmedabad, Gujarat 380015",rating:4.7,reviewsCount:26,pricePerHour:250,sport:"badminton",sportName:"Badminton",sportIcon:"🏸",venueType:"indoor",isTopRated:!0,isBudget:!0,operatingHours:"6:00 AM - 11:00 PM",about:"Premier tournament training venue equipped with 6 international standard BWF-approved synthetic and wooden teak courts. Glare-free overhead LED lighting, high ceiling clearance (35+ ft), air-cooling, and player lounge.",specialNotes:["Tournament Training Venue with BWF certified synthetic mats","For more than 2 players Rs. 50 extra per person","Equipment available on rent (Yonex rackets, Mavis 350 shuttles)"],amenities:["BWF Grade 1 Synthetic Mats","Wooden Teak Sprung Floors","Glare-Free LED Fixtures","Locker & Shower Rooms","Equipment Rental Pro-Shop"],courts:[{id:"c1",name:"Court 1 (Yonex BWF Mat)",surface:"Synthetic BWF Mat",price:250},{id:"c2",name:"Court 2 (Yonex BWF Mat)",surface:"Synthetic BWF Mat",price:250},{id:"c3",name:"Court 3 (Teak Wood Court)",surface:"Wooden Teak Floor",price:300}],images:["https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=1200&q=80","https://images.unsplash.com/photo-1613918431703-aa503525287e?auto=format&fit=crop&w=1200&q=80"],reviews:[{id:"rev-sbr-1",userName:"Mitchell Admin",userAvatar:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",rating:5,date:"10 June 2025",time:"5:30 PM",comment:"Nice turf, well maintained and lighting is top notch! Staff was very courteous."}],coordinates:{lat:23.0234,lng:72.5186}},{id:"siri-fort-delhi",name:"Siri Fort Sports Complex",city:"delhi",area:"August Kranti Marg, Siri Fort",fullAddress:"Siri Fort Institutional Area, August Kranti Marg, New Delhi, Delhi 110049",rating:4.9,reviewsCount:74,pricePerHour:350,sport:"badminton",sportName:"Badminton",sportIcon:"🏸",venueType:"indoor",isTopRated:!0,isBudget:!0,operatingHours:"6:00 AM - 10:00 PM",about:"Iconic Commonwealth Games host stadium with 12 international BWF badminton courts, 8 synthetic tennis courts, Olympic swimming pool, and squash courts.",specialNotes:["Official CWG 2010 Venue","Strictly non-marking shoes required","Yonex stringing service on site"],amenities:["12 BWF Certified Courts","Olympic Swimming Complex","Tennis Hard & Clay Courts","Locker & Steam Rooms","Pro Sports Shop"],courts:[{id:"c1",name:"Court A (CWG Arena Mat)",surface:"BWF Grade 1",price:350},{id:"c2",name:"Court B (CWG Arena Mat)",surface:"BWF Grade 1",price:350}],images:["https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=1200&q=80","https://images.unsplash.com/photo-1613918431703-aa503525287e?auto=format&fit=crop&w=1200&q=80"],reviews:[{id:"rev-sf-1",userName:"Kabir Varma",userAvatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",rating:5,date:"15 June 2025",time:"7:00 AM",comment:"Best sports complex in Delhi NCR. The badminton hall is massive with perfect lighting."}],coordinates:{lat:28.5528,lng:77.2189}},{id:"cybercity-turf-gurugram",name:"Cyber City Sports Arena & Turf",city:"gurugram",area:"DLF Cyber City, Phase 2",fullAddress:"Opposite Building 10, DLF Cyber City, Sector 24, Gurugram, Haryana 122002",rating:4.8,reviewsCount:52,pricePerHour:950,sport:"football",sportName:"Football / Turf",sportIcon:"⚽",venueType:"outdoor",isTopRated:!0,isBudget:!1,operatingHours:"24 Hours Open",about:"High-energy 7v7 and 5v5 FIFA-standard football and box cricket turf located in the heart of Cyber Hub. Features high-definition floodlights and corporate lounge.",specialNotes:["Open 24x7 for night matches","Free energy drinks & water dispenser"],amenities:["FIFA Approved 50mm Grass","LED Floodlights","Air-conditioned Dugouts","Sound System & Live Scoreboard","Valet Parking"],courts:[{id:"c1",name:"Cyber Turf 1 (5v5)",surface:"Artificial Turf",price:950},{id:"c2",name:"Cyber Turf 2 (7v7 Grand)",surface:"Artificial Turf",price:1500}],images:["https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=1200&q=80","https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80"],reviews:[{id:"rev-cc-1",userName:"Varun Grover",userAvatar:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",rating:5,date:"20 June 2025",time:"9:00 PM",comment:"Unbeatable location and fantastic turf bounce. Ideal for corporate leagues."}],coordinates:{lat:28.495,lng:77.0895}},{id:"cse-bengaluru",name:"Padukone-Dravid Centre for Sports Excellence",city:"bengaluru",area:"Bettahalasur, Yelahanka / Airport Road",fullAddress:"Survey No 336, Bettahalasur, Jala Hobli, Yelahanka, Bengaluru, Karnataka 562157",rating:5,reviewsCount:89,pricePerHour:400,sport:"badminton",sportName:"Badminton",sportIcon:"🏸",venueType:"indoor",isTopRated:!0,isBudget:!1,operatingHours:"5:30 AM - 10:30 PM",about:"India’s most advanced integrated sports complex co-founded by Prakash Padukone and Rahul Dravid. Features 16 international BWF Grade-1 badminton courts, FIFA-certified football pitch, Olympic pool, and sports science center.",specialNotes:["Strictly non-marking indoor court shoes required","Full facility sports medicine, physio, and recovery ice baths"],amenities:["16 BWF Certified Courts","FIFA Approved Football Turf","50m Olympic Pool","Sports Science Lab","Pro Athlete Cafeteria"],courts:[{id:"c1",name:"Court 1 (Centre Court BWF)",surface:"BWF Grade 1 Mat",price:400},{id:"c2",name:"Court 2 (BWF Tournament Mat)",surface:"BWF Grade 1 Mat",price:400}],images:["https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=1200&q=80","https://images.unsplash.com/photo-1613918431703-aa503525287e?auto=format&fit=crop&w=1200&q=80"],reviews:[{id:"rev-cse-1",userName:"Siddharth Rao",userAvatar:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80",rating:5,date:"21 June 2025",time:"7:00 AM",comment:"Hands down the best sports facility in India. World class lighting, temperature, and flooring."}],coordinates:{lat:13.1782,lng:77.6256}},{id:"play-arena-sarjapur",name:"Play Arena Multi-Sports Turf & Courts",city:"bengaluru",area:"Kasavanahalli, Sarjapur Road",fullAddress:"Play Arena, Central Jail Road, Kasavanahalli, Sarjapur Road, Bengaluru, Karnataka 560035",rating:4.7,reviewsCount:54,pricePerHour:900,sport:"football",sportName:"Football / Turf",sportIcon:"⚽",venueType:"outdoor",isTopRated:!0,isBudget:!1,operatingHours:"6:00 AM - 11:00 PM",about:"Iconic 10-acre multi-sports arena with multiple 5v5 and 7v7 football turfs, synthetic badminton courts, basketball courts, and skate park.",specialNotes:["Bibs and match footballs provided with every turf slot"],amenities:["Multi 5v5 & 7v7 Turfs","Badminton Arena","Night Floodlights","Showers & Lockers","Play Lounge & Cafe"],courts:[{id:"c1",name:"Turf Alpha (5v5 Football)",surface:"Artificial Turf 50mm",price:900}],images:["https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=1200&q=80","https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80"],reviews:[{id:"rev-pa-1",userName:"Naveen Kumar",userAvatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",rating:5,date:"16 June 2025",time:"8:00 PM",comment:"Great turf quality with zero slippery patches. Plenty of parking and food options around."}],coordinates:{lat:12.9063,lng:77.6748}},{id:"andheri-sports-complex",name:"Andheri Sports Complex (Shahaji Raje Sankul)",city:"mumbai",area:"Veera Desai Road, Andheri West",fullAddress:"Shahaji Raje Krida Sankul, Veera Desai Road, Andheri West, Mumbai, Maharashtra 400053",rating:4.6,reviewsCount:62,pricePerHour:350,sport:"badminton",sportName:"Badminton",sportIcon:"🏸",venueType:"indoor",isTopRated:!0,isBudget:!0,operatingHours:"6:00 AM - 10:30 PM",about:"Major government-backed multi-sports complex in Mumbai featuring 6 wooden teak badminton courts, Olympic swimming pool, tennis courts, and football ground.",specialNotes:["Non-marking shoes mandatory on wooden court"],amenities:["6 Wooden Teak Courts","Olympic Swimming Pool","Floodlit Football Ground","Locker & Changing Rooms"],courts:[{id:"c1",name:"Court 1 (Wooden Teak)",surface:"Wooden Flooring",price:350}],images:["https://images.unsplash.com/photo-1613918431703-aa503525287e?auto=format&fit=crop&w=1200&q=80","https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=1200&q=80"],reviews:[{id:"rev-asc-1",userName:"Rohan Deshmukh",userAvatar:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",rating:4.5,date:"19 June 2025",time:"7:30 PM",comment:"Great value for money in Andheri. Courts are well kept."}],coordinates:{lat:19.1294,lng:72.8335}},{id:"play-turf-bandra",name:"Play Turf Mumbai",city:"mumbai",area:"Bandra West / Khar",fullAddress:"Behind Khar Gymkhana, 14th Road, Bandra West, Mumbai, Maharashtra 400052",rating:4.8,reviewsCount:47,pricePerHour:1100,sport:"football",sportName:"Football / Turf",sportIcon:"⚽",venueType:"outdoor",isTopRated:!0,isBudget:!1,operatingHours:"6:00 AM - 1:00 AM",about:"Premier rooftop football and box cricket turf in Bandra West with sea breeze, high tension safety nets, LED floodlights, and premium rubber-infilled turf.",specialNotes:["Open until 1:00 AM for late night corporate matches"],amenities:["Rooftop Sea Breeze Turf","Night Floodlights","Air-conditioned Dugouts"],courts:[{id:"c1",name:"Rooftop Pitch A (5v5)",surface:"Rubber Infill Turf",price:1100}],images:["https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80"],reviews:[{id:"rev-ptb-1",userName:"Zaid Merchant",userAvatar:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",rating:5,date:"23 June 2025",time:"10:00 PM",comment:"The vibe here at night is unmatched! Turf is soft and very safe for slide tackles."}],coordinates:{lat:19.0607,lng:72.8362}},{id:"gopichand-academy-hyderabad",name:"Pullela Gopichand Badminton Academy",city:"hyderabad",area:"Gachibowli, Financial District",fullAddress:"Survey No 91, ISB Road, Gachibowli, Hyderabad, Telangana 500032",rating:5,reviewsCount:96,pricePerHour:400,sport:"badminton",sportName:"Badminton",sportIcon:"🏸",venueType:"indoor",isTopRated:!0,isBudget:!1,operatingHours:"5:30 AM - 10:00 PM",about:"Legendary breeding ground of Olympic champions like PV Sindhu and Saina Nehwal. Features 8 international Yonex synthetic courts, high air volume cooling, and world-class physical fitness gym.",specialNotes:["World-class training facility","Non-marking shoes strictly enforced"],amenities:["8 Olympic BWF Courts","High-Performance Gym","Physiotherapy Center","Cafeteria & Protein Bar"],courts:[{id:"c1",name:"Court 1 (Yonex BWF Green)",surface:"BWF Grade 1",price:400},{id:"c2",name:"Court 2 (Yonex BWF Green)",surface:"BWF Grade 1",price:400}],images:["https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=1200&q=80","https://images.unsplash.com/photo-1613918431703-aa503525287e?auto=format&fit=crop&w=1200&q=80"],reviews:[{id:"rev-pg-1",userName:"Anand Reddy",userAvatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",rating:5,date:"22 June 2025",time:"6:30 AM",comment:"Playing here is a dream for any badminton fan! Courts are in pristine condition."}],coordinates:{lat:17.4435,lng:78.3489}},{id:"sdat-tennis-stadium-chennai",name:"SDAT Tennis Stadium & Arena",city:"chennai",area:"Nungambakkam, Lake Area",fullAddress:"Sports Development Authority of Tamil Nadu, Nungambakkam, Chennai, Tamil Nadu 600034",rating:4.9,reviewsCount:68,pricePerHour:500,sport:"tennis",sportName:"Tennis",sportIcon:"🎾",venueType:"outdoor",isTopRated:!0,isBudget:!1,operatingHours:"6:00 AM - 10:00 PM",about:"Famous former home of the ATP Chennai Open. Features 5 floodlit Plexicushion hard courts, 6,000 capacity stadium, and coaching academy.",specialNotes:["Official ATP Tour Specification Courts","Tennis shoes required"],amenities:["ATP Plexicushion Courts","Floodlights","Locker & Showers","Tennis Pro Shop"],courts:[{id:"c1",name:"Court 1 (ATP Center Court)",surface:"Plexicushion Hard",price:600},{id:"c2",name:"Court 2 (Match Court)",surface:"Plexicushion Hard",price:500}],images:["https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=1200&q=80","https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=1200&q=80"],reviews:[{id:"rev-sdat-1",userName:"Karthik Subramanian",userAvatar:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",rating:5,date:"19 June 2025",time:"5:30 PM",comment:"Iconic tennis ground with unmatched court pace and bounce. Highly recommended."}],coordinates:{lat:13.0604,lng:80.2405}},{id:"balewadi-sports-complex-pune",name:"Shree Shiv Chhatrapati Sports Complex",city:"pune",area:"Balewadi, Mahalunge",fullAddress:"National Games Park, Balewadi, Pune, Maharashtra 411045",rating:4.8,reviewsCount:57,pricePerHour:300,sport:"badminton",sportName:"Badminton",sportIcon:"🏸",venueType:"indoor",isTopRated:!0,isBudget:!0,operatingHours:"6:00 AM - 10:30 PM",about:"Mega National Games sports stadium featuring air-conditioned badminton halls, Olympic swimming pool, table tennis complex, and athletic tracks.",specialNotes:["National Games specification venue","Non-marking footwear strictly mandatory"],amenities:["BWF Air-conditioned Courts","Olympic Swimming Stadium","Gym & Recovery Center","Cafeteria"],courts:[{id:"c1",name:"Court 1 (BWF Mat)",surface:"BWF Grade 1",price:300},{id:"c2",name:"Court 2 (BWF Mat)",surface:"BWF Grade 1",price:300}],images:["https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=1200&q=80","https://images.unsplash.com/photo-1613918431703-aa503525287e?auto=format&fit=crop&w=1200&q=80"],reviews:[{id:"rev-bw-1",userName:"Soham Kulkarni",userAvatar:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",rating:5,date:"18 June 2025",time:"6:00 PM",comment:"Huge complex with great lighting and cool temperature. Best in Pune."}],coordinates:{lat:18.5793,lng:73.7667}},{id:"salt-lake-stadium-arena-kolkata",name:"Salt Lake Stadium Sports Hub (VYBK)",city:"kolkata",area:"Sector III, Bidhannagar / Salt Lake",fullAddress:"Vivekananda Yuba Bharati Krirangan, Sector III, Salt Lake City, Kolkata, West Bengal 700098",rating:4.9,reviewsCount:78,pricePerHour:800,sport:"football",sportName:"Football / Turf",sportIcon:"⚽",venueType:"outdoor",isTopRated:!0,isBudget:!1,operatingHours:"6:00 AM - 11:00 PM",about:"Mecca of Indian Football. Features official training turfs, floodlit 7v7 astroturf pitches, and indoor sports arenas used for FIFA U-17 World Cup matches.",specialNotes:["FIFA World Cup Training Turf","Turf boots required"],amenities:["FIFA Approved Artificial Grass","Stadium Floodlights","Locker & Shower Facility","Cafeteria"],courts:[{id:"c1",name:"Practice Turf 1 (7v7)",surface:"FIFA Certified AstroTurf",price:800}],images:["https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=1200&q=80"],reviews:[{id:"rev-slk-1",userName:"Debojyoti Banerjee",userAvatar:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",rating:5,date:"20 June 2025",time:"7:30 PM",comment:"Unbelievable football atmosphere! The turf condition is pristine."}],coordinates:{lat:22.5697,lng:88.4069}},{id:"sawai-mansingh-stadium-jaipur",name:"Sawai Mansingh (SMS) Indoor Sports Stadium",city:"jaipur",area:"Ambedkar Circle, Jan Path",fullAddress:"SMS Stadium, Jan Path, Ambedkar Circle, Jaipur, Rajasthan 302005",rating:4.8,reviewsCount:45,pricePerHour:280,sport:"badminton",sportName:"Badminton",sportIcon:"🏸",venueType:"indoor",isTopRated:!0,isBudget:!0,operatingHours:"6:00 AM - 10:00 PM",about:"Historic multi-sports facility in Jaipur featuring wooden and synthetic badminton courts, table tennis arena, and international tennis complex.",specialNotes:["Non-marking shoes required"],amenities:["Wooden & Synthetic Courts","Table Tennis Arena","Lockers & Showers"],courts:[{id:"c1",name:"Court 1 (Wooden Teak)",surface:"Wooden Flooring",price:280}],images:["https://images.unsplash.com/photo-1613918431703-aa503525287e?auto=format&fit=crop&w=1200&q=80"],reviews:[{id:"rev-sms-1",userName:"Aditya Rathore",userAvatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",rating:5,date:"17 June 2025",time:"6:30 PM",comment:"Classic stadium with great lighting and well maintained wooden floors."}],coordinates:{lat:26.894,lng:75.803}}],ic={id:"usr-admin-1",name:"Mitchell Admin",email:"mitchell.admin@quickcourt.com",role:"Player",avatar:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80",city:"ahmedabad",memberSince:"January 2024"},Fu=[{id:"QC-2025-8842",venueId:"the-arena-transstadia",venueName:"The Arena by TransStadia",sport:"football",sportIcon:"⚽",courtName:"Turf A (7v7 Match Turf)",date:"2025-06-28",formattedDate:"28 June 2025",timeSlot:"6:00 PM - 7:00 PM",location:"Kankaria, AHMEDABAD",status:"Confirmed",amount:1200,extraPlayers:2,rentalEquipments:["Bibs & Balls"],createdAt:"2025-06-20T10:30:00Z",canCancel:!0,cancellationReason:null},{id:"QC-2025-4421",venueId:"sbr-badminton",venueName:"SBR Badminton & Sports Arena",sport:"badminton",sportIcon:"🏸",courtName:"Court 1 (Yonex BWF Mat)",date:"2025-06-25",formattedDate:"25 June 2025",timeSlot:"5:00 PM - 6:00 PM",location:"Satellite, AHMEDABAD",status:"Confirmed",amount:300,extraPlayers:0,rentalEquipments:[],createdAt:"2025-06-18T12:00:00Z",canCancel:!0,cancellationReason:null}],sn=[{id:"06:00",label:"6:00 AM - 7:00 AM",time:"06:00",period:"Morning"},{id:"07:00",label:"7:00 AM - 8:00 AM",time:"07:00",period:"Morning"},{id:"08:00",label:"8:00 AM - 9:00 AM",time:"08:00",period:"Morning"},{id:"09:00",label:"9:00 AM - 10:00 AM",time:"09:00",period:"Morning"},{id:"10:00",label:"10:00 AM - 11:00 AM",time:"10:00",period:"Morning"},{id:"11:00",label:"11:00 AM - 12:00 PM",time:"11:00",period:"Morning"},{id:"12:00",label:"12:00 PM - 1:00 PM",time:"12:00",period:"Afternoon"},{id:"13:00",label:"1:00 PM - 2:00 PM",time:"13:00",period:"Afternoon"},{id:"14:00",label:"2:00 PM - 3:00 PM",time:"14:00",period:"Afternoon"},{id:"15:00",label:"3:00 PM - 4:00 PM",time:"15:00",period:"Afternoon"},{id:"16:00",label:"4:00 PM - 5:00 PM",time:"16:00",period:"Evening"},{id:"17:00",label:"5:00 PM - 6:00 PM",time:"17:00",period:"Evening"},{id:"18:00",label:"6:00 PM - 7:00 PM",time:"18:00",period:"Evening"},{id:"19:00",label:"7:00 PM - 8:00 PM",time:"19:00",period:"Evening"},{id:"20:00",label:"8:00 PM - 9:00 PM",time:"20:00",period:"Night"},{id:"21:00",label:"9:00 PM - 10:00 PM",time:"21:00",period:"Night"},{id:"22:00",label:"10:00 PM - 11:00 PM",time:"22:00",period:"Night"}],Rs=[{id:"eq-racket-pair",name:"Yonex Racket Pair (2x)",price:100,icon:"🏸"},{id:"eq-shuttlecock-box",name:"Yonex Mavis 350 Tube (3x)",price:150,icon:"🎯"},{id:"eq-shoes",name:"Yonex Non-Marking Shoes",price:120,icon:"👟"},{id:"eq-tennis-balls",name:"Wilson US Open Ball Can (3x)",price:180,icon:"🎾"},{id:"eq-football-bibs",name:"Match Bibs & Football",price:100,icon:"⚽"},{id:"eq-towel",name:"Sports Towel & Overgrip",price:50,icon:"🧼"}];function Iu(e,t,n,a){if(!e||!t||!n||!a)return null;const s=6371,i=(n-e)*Math.PI/180,o=(a-t)*Math.PI/180,l=Math.sin(i/2)*Math.sin(i/2)+Math.cos(e*Math.PI/180)*Math.cos(n*Math.PI/180)*Math.sin(o/2)*Math.sin(o/2),c=2*Math.atan2(Math.sqrt(l),Math.sqrt(1-l)),u=s*c;return Math.round(u*10)/10}function qf(e,t){let n=Li[0],a=1/0;for(const s of Li)if(s.lat&&s.lng){const i=Iu(e,t,s.lat,s.lng);i<a&&(a=i,n=s)}return{city:n,distanceKm:a}}function Gf(){return new Promise((e,t)=>{if(!navigator.geolocation){t(new Error("Geolocation is not supported by your browser"));return}navigator.geolocation.getCurrentPosition(n=>{const{latitude:a,longitude:s,accuracy:i}=n.coords,o=qf(a,s);e({lat:a,lng:s,accuracy:i,nearestCity:o.city,distanceToNearestCityKm:o.distanceKm})},n=>{let a="Failed to detect location";switch(n.code){case n.PERMISSION_DENIED:a="Location permission denied by user";break;case n.POSITION_UNAVAILABLE:a="Location information is unavailable";break;case n.TIMEOUT:a="Location request timed out";break;default:a=n.message}t(new Error(a))},{enableHighAccuracy:!0,timeout:1e4,maximumAge:6e4})})}/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ru=(...e)=>e.filter((t,n,a)=>!!t&&t.trim()!==""&&a.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,a)=>a?a.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oc=e=>{const t=Qf(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ls={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yf=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},Jf=j.createContext({}),Xf=()=>j.useContext(Jf),Zf=j.forwardRef(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:a,className:s="",children:i,iconNode:o,...l},c)=>{const{size:u=24,strokeWidth:f=2,absoluteStrokeWidth:h=!1,color:m="currentColor",className:v=""}=Xf()??{},y=a??h?Number(n??f)*24/Number(t??u):n??f;return j.createElement("svg",{ref:c,...Ls,width:t??u??Ls.width,height:t??u??Ls.height,stroke:e??m,strokeWidth:y,className:Ru("lucide",v,s),...!i&&!Yf(l)&&{"aria-hidden":"true"},...l},[...o.map(([k,N])=>j.createElement(k,N)),...Array.isArray(i)?i:[i]])});/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=(e,t)=>{const n=j.forwardRef(({className:a,...s},i)=>j.createElement(Zf,{ref:i,iconNode:t,className:Ru(`lucide-${Kf(oc(e))}`,`lucide-${e}`,a),...s}));return n.displayName=oc(e),n};/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Di=_("arrow-left",eh);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],$n=_("arrow-right",th);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],Os=_("arrow-up-right",rh);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],Vo=_("award",nh);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=[["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3",key:"cabbwy"}],["rect",{x:"4",y:"2",width:"16",height:"20",rx:"2",key:"1uxh74"}]],sh=_("building",ah);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],Un=_("building-2",ih);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}]],He=_("calendar",oh);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],Lu=_("camera",lh);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],lc=_("chevron-down",ch);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Ou=_("chevron-left",dh);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Wo=_("chevron-right",uh);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Ue=_("circle-alert",ph);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],Le=_("circle-check",mh);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],hh=_("circle-question-mark",fh);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],xh=_("circle-x",gh);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],Kt=_("clock",vh);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}]],bh=_("compass",yh);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],Du=_("credit-card",jh);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],kh=_("dollar-sign",wh);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Sh=_("download",Nh);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],$u=_("external-link",Ch);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],An=_("eye",zh);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],_n=_("eye-off",Mh);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=[["path",{d:"M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",key:"1jaruq"}]],Uu=_("flag",Ph);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],Vu=_("flame",Eh);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],Bh=_("funnel",Th);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],$i=_("grid-3x3",Ah);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Wu=_("info",_h);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],Hu=_("layout-dashboard",Fh);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],cc=_("layout-grid",Ih);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=[["line",{x1:"2",x2:"5",y1:"12",y2:"12",key:"bvdh0s"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12",key:"1tbv5k"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5",key:"11lu5j"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}],["circle",{cx:"12",cy:"12",r:"7",key:"fim9np"}]],qu=_("locate",Rh);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]],Oh=_("lock-open",Lh);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Ui=_("lock",Dh);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=[["path",{d:"m10 17 5-5-5-5",key:"1bsop3"}],["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}]],Uh=_("log-in",$h);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],Vi=_("log-out",Vh);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Hh=_("mail",Wh);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],ct=_("map-pin",qh);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]],dc=_("map",Gh);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Qh=_("menu",Kh);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}],["path",{d:"M12 8v6",key:"1ib9pf"}],["path",{d:"M9 11h6",key:"1fldmi"}]],Jh=_("message-square-plus",Yh);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],Zh=_("message-square",Xh);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],tg=_("moon",eg);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]],ng=_("navigation",rg);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],sg=_("pen",ag);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],og=_("phone",ig);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Wi=_("plus",lg);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]],dg=_("qr-code",cg);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],pg=_("rotate-ccw",ug);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],Gu=_("save",mg);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],hg=_("search",fg);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],xg=_("send",gg);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],yg=_("shield-alert",vg);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Vn=_("shield-check",bg);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],wg=_("shield",jg);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],uc=_("sliders-horizontal",kg);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],Sg=_("smartphone",Ng);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],fr=_("sparkles",Cg);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],zt=_("star",zg);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],Pg=_("sun",Mg);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]],Tg=_("sunrise",Eg);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=[["path",{d:"M12 10V2",key:"16sf7g"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m16 6-4 4-4-4",key:"6wukr"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]],Ag=_("sunset",Bg);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Ku=_("trash-2",_g);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],Qu=_("trending-up",Fg);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Rg=_("triangle-alert",Ig);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=[["path",{d:"M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2",key:"pwuv1l"}],["path",{d:"M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2",key:"1y54w1"}],["path",{d:"M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3",key:"e30mpu"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3",key:"i0yafy"}]],Og=_("trophy",Lg);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],$g=_("user-plus",Dg);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Ho=_("user",Ug);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Yu=_("users",Vg);/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Fn=_("x",Wg),Ju=j.createContext();function Hg({children:e}){const[t,n]=j.useState([]),a=j.useCallback((i,o="success",l=4e3)=>{const c=Date.now()+Math.random().toString(36).substr(2,9);n(u=>[...u,{id:c,message:i,type:o}]),setTimeout(()=>{n(u=>u.filter(f=>f.id!==c))},l)},[]),s=j.useCallback(i=>{n(o=>o.filter(l=>l.id!==i))},[]);return r.jsxs(Ju.Provider,{value:{showToast:a},children:[e,r.jsx("div",{className:"toast-container","aria-live":"polite",children:t.map(i=>r.jsxs("div",{className:`toast toast-${i.type}`,children:[i.type==="success"&&r.jsx(Le,{size:18,color:"#10B981"}),i.type==="error"&&r.jsx(Ue,{size:18,color:"#EF4444"}),i.type==="info"&&r.jsx(Wu,{size:18,color:"#06B6D4"}),r.jsx("span",{style:{fontSize:"0.9rem",flex:1},children:i.message}),r.jsx("button",{onClick:()=>s(i.id),style:{color:"#94a3b8",display:"flex"},"aria-label":"Close notification",children:r.jsx(Fn,{size:14})})]},i.id))})]})}function ze(){const e=j.useContext(Ju);if(!e)throw new Error("useToast must be used within a ToastProvider");return e}const Xu=j.createContext();function qg({children:e}){const[t,n]=j.useState(()=>localStorage.getItem("quickcourt_city")||"ahmedabad"),[a,s]=j.useState(()=>{const f=localStorage.getItem("quickcourt_user_gps");if(f)try{return JSON.parse(f)}catch{}return null}),[i,o]=j.useState(!1);j.useEffect(()=>{localStorage.setItem("quickcourt_city",t)},[t]),j.useEffect(()=>{a&&localStorage.setItem("quickcourt_user_gps",JSON.stringify(a))},[a]);const l=Is.find(f=>f.id===t)||Is[0],c=async(f=!1)=>{o(!0);try{const h=await Gf(),m={lat:h.lat,lng:h.lng,cityId:h.nearestCity.id,cityName:h.nearestCity.name,distanceKm:h.distanceToNearestCityKm};return s(m),n(h.nearestCity.id),o(!1),{success:!0,location:m}}catch(h){return o(!1),{success:!1,error:h.message}}},u=f=>!a||!f.coordinates?null:Iu(a.lat,a.lng,f.coordinates.lat,f.coordinates.lng);return r.jsx(Xu.Provider,{value:{selectedCity:t,setSelectedCity:n,currentCityObj:l,cities:Is,userLocation:a,isDetectingLocation:i,detectLocation:c,getDistanceToVenue:u},children:e})}function qr(){const e=j.useContext(Xu);if(!e)throw new Error("useCity must be used within a CityProvider");return e}const Zu=j.createContext(),pc="quickcourt_registered_users",Ds="quickcourt_current_user",$s="quickcourt_pending_verification";function Hi(e){return e?e.length<8||e.length>20?{isValid:!1,message:"Password must be between 8 and 20 characters"}:/[A-Z]/.test(e)?/[0-9]/.test(e)?/[!@#$%^&*(),.?":{}|<>]/.test(e)?{isValid:!0,message:""}:{isValid:!1,message:"Password must contain at least one special symbol like @ or #"}:{isValid:!1,message:"Password must contain at least one number"}:{isValid:!1,message:"Password must contain at least one uppercase letter"}:{isValid:!1,message:"Password is required"}}function Gg({children:e}){const[t,n]=j.useState(()=>{const v=localStorage.getItem(pc);if(v)try{return JSON.parse(v)}catch{}return[{...ic,password:"Password@123"}]}),[a,s]=j.useState(()=>{const v=localStorage.getItem(Ds);if(v)try{return JSON.parse(v)}catch{}return ic}),[i,o]=j.useState(()=>{const v=localStorage.getItem($s);if(v)try{return JSON.parse(v)}catch{}return null});j.useEffect(()=>{localStorage.setItem(pc,JSON.stringify(t))},[t]),j.useEffect(()=>{a?localStorage.setItem(Ds,JSON.stringify(a)):localStorage.removeItem(Ds)},[a]),j.useEffect(()=>{i?localStorage.setItem($s,JSON.stringify(i)):localStorage.removeItem($s)},[i]);const l=(v,y)=>{const k=v.trim().toLowerCase(),N=t.find(p=>p.email.toLowerCase()===k);if(!N)return{success:!1,errorField:"email",message:"No account found with this email"};if(N.password!==y)return{success:!1,errorField:"password",message:"Incorrect password. Please try again."};const d={id:N.id,name:N.name,email:N.email,role:N.role||"Player",avatar:N.avatar,city:N.city||"ahmedabad",memberSince:N.memberSince||"June 2025"};return s(d),{success:!0,user:d}},c=({name:v,email:y,role:k,avatar:N,password:d})=>{const p=y.trim().toLowerCase();if(t.find(E=>E.email.toLowerCase()===p))return{success:!1,errorField:"email",message:"This email is already registered. Please log in or use a different email."};const w=Hi(d);if(!w.isValid)return{success:!1,errorField:"password",message:w.message};const S={id:"usr-"+Date.now(),name:v.trim(),email:p,role:k||"Player",avatar:N||"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=250&q=80",password:d,city:"ahmedabad",memberSince:new Date().toLocaleDateString("en-US",{month:"long",year:"numeric"}),otp:"123456",createdAt:Date.now()};return o(S),{success:!0,pendingUser:S}},u=v=>{if(!i)return{success:!1,message:"No pending verification session. Please sign up again."};if(v.length===6){const y={id:i.id,name:i.name,email:i.email,role:i.role,avatar:i.avatar,password:i.password,city:i.city,memberSince:i.memberSince};return n(k=>[...k,y]),s({id:y.id,name:y.name,email:y.email,role:y.role,avatar:y.avatar,city:y.city,memberSince:y.memberSince}),o(null),{success:!0}}return{success:!1,message:"Invalid 6-digit OTP code. Please check and try again."}},f=v=>{if(!i)return{success:!1};const y=v.trim().toLowerCase();if(t.find(d=>d.email.toLowerCase()===y))return{success:!1,message:"Email is already taken by another account."};const N={...i,email:y};return o(N),{success:!0}},h=()=>{s(null)},m=({name:v,email:y,avatar:k,oldPassword:N,newPassword:d})=>{if(!a)return{success:!1,message:"You must be logged in"};const p=t.find(w=>w.id===a.id);if(!p)return{success:!1,message:"User record not found"};if(d){if(p.password&&p.password!==N)return{success:!1,errorField:"oldPassword",message:"Current password does not match"};const w=Hi(d);if(!w.isValid)return{success:!1,errorField:"newPassword",message:w.message}}if(y&&y.toLowerCase()!==a.email.toLowerCase()&&t.some(z=>z.id!==a.id&&z.email.toLowerCase()===y.toLowerCase()))return{success:!1,errorField:"email",message:"This email is already in use"};const g={...p,name:v||p.name,email:y||p.email,avatar:k||p.avatar,password:d||p.password};return n(w=>w.map(z=>z.id===a.id?g:z)),s({id:g.id,name:g.name,email:g.email,role:g.role,avatar:g.avatar,city:g.city,memberSince:g.memberSince}),{success:!0}};return r.jsx(Zu.Provider,{value:{user:a,isAuthenticated:!!a,pendingSignup:i,login:l,startSignUp:c,verifyEmailOtp:u,updatePendingEmail:f,logout:h,updateProfile:m},children:e})}function gt(){const e=j.useContext(Zu);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e}const ep=j.createContext(),mc="quickcourt_venues_data_v2",fc="quickcourt_user_bookings_v2",hc="quickcourt_dataset_ver";function Kg({children:e}){const[t,n]=j.useState(()=>{if(localStorage.getItem(hc)===qa){const h=localStorage.getItem(mc);if(h)try{return JSON.parse(h)}catch{}}return localStorage.setItem(hc,qa),Oi}),[a,s]=j.useState(()=>{const f=localStorage.getItem(fc);if(f)try{return JSON.parse(f)}catch{}return Fu});j.useEffect(()=>{localStorage.setItem(mc,JSON.stringify(t))},[t]),j.useEffect(()=>{localStorage.setItem(fc,JSON.stringify(a))},[a]);const i=f=>t.find(h=>h.id===f),o=(f,{userName:h,userAvatar:m,rating:v,comment:y})=>{const k=new Date,N=k.toLocaleDateString("en-US",{day:"numeric",month:"long",year:"numeric"}),d=k.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0}),p={id:"rev-"+Date.now(),userName:h||"Anonymous Player",userAvatar:m||"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",rating:parseFloat(v)||5,date:N,time:d,comment:y.trim()};return n(g=>g.map(w=>{if(w.id!==f)return w;const z=[p,...w.reviews],S=+(z.reduce((E,B)=>E+B.rating,0)/z.length).toFixed(1);return{...w,rating:S,reviewsCount:z.length,reviews:z}})),p},l=(f,h,m,v)=>a.some(y=>{var k;return y.venueId===f&&y.courtId===h&&y.date===m&&((k=y.timeSlot)==null?void 0:k.includes(v))&&y.status==="Confirmed"}),c=f=>{const m={id:"QC-"+new Date().getFullYear()+"-"+Math.floor(1e3+Math.random()*9e3),venueId:f.venueId,venueName:f.venueName,sport:f.sport,sportIcon:f.sportIcon||"🏸",courtId:f.courtId,courtName:f.courtName,date:f.date,formattedDate:f.formattedDate,timeSlot:f.timeSlot,location:f.location,status:"Confirmed",amount:f.amount,extraPlayers:f.extraPlayers||0,rentalEquipments:f.rentalEquipments||[],createdAt:new Date().toISOString(),canCancel:!0,cancellationReason:null};return s(v=>[m,...v]),m},u=(f,h="Cancelled by user")=>(s(m=>m.map(v=>v.id!==f?v:{...v,status:"Cancelled",canCancel:!1,cancellationReason:h})),{success:!0});return r.jsx(ep.Provider,{value:{venues:t,bookings:a,getVenueById:i,addReview:o,isSlotBooked:l,createBooking:c,cancelBooking:u},children:e})}function hr(){const e=j.useContext(ep);if(!e)throw new Error("useBooking must be used within a BookingProvider");return e}function Qg({activePage:e,setActivePage:t,onNavigateVenue:n}){const{user:a,isAuthenticated:s,logout:i}=gt(),{selectedCity:o,setSelectedCity:l,cities:c,currentCityObj:u,detectLocation:f,isDetectingLocation:h}=qr(),{showToast:m}=ze(),[v,y]=j.useState(""),[k,N]=j.useState(!1),[d,p]=j.useState(!1),[g,w]=j.useState(!1),z=j.useRef(null),S=j.useRef(null),E=c.filter(C=>{var O;return!v||C.name.toLowerCase().includes(v.toLowerCase())||C.state.toLowerCase().includes(v.toLowerCase())||((O=C.region)==null?void 0:O.toLowerCase().includes(v.toLowerCase()))});j.useEffect(()=>{function C(O){z.current&&!z.current.contains(O.target)&&N(!1),S.current&&!S.current.contains(O.target)&&p(!1)}return document.addEventListener("mousedown",C),()=>document.removeEventListener("mousedown",C)},[]);const B=()=>{i(),p(!1),w(!1),m("Logged out successfully","info"),t("home")},T=(C,O=null)=>{t(C),w(!1),p(!1),window.scrollTo({top:0,behavior:"smooth"})};return r.jsxs("header",{className:"navbar-wrapper",children:[r.jsxs("div",{className:"container flex items-center justify-between",style:{height:"100%"},children:[r.jsxs("div",{className:"flex items-center gap-md",children:[r.jsxs("div",{onClick:()=>T("home"),className:"brand-logo",role:"button",tabIndex:0,children:[r.jsx("div",{className:"logo-badge",children:r.jsx("span",{className:"logo-court-icon",children:"⚡"})}),r.jsxs("div",{className:"logo-text-group",children:[r.jsx("span",{className:"logo-title",children:"QUICKCOURT"}),r.jsx("span",{className:"logo-subtitle",children:"LOCAL SPORTS BOOKING"})]})]}),r.jsxs("div",{className:"city-selector-wrapper",ref:z,children:[r.jsxs("button",{className:"city-btn",onClick:()=>N(!k),"aria-expanded":k,"aria-label":"Select location",children:[r.jsx(ct,{size:16,className:"city-icon"}),r.jsx("span",{className:"city-name",children:u.name}),r.jsx(lc,{size:14,className:`city-arrow ${k?"rotate":""}`})]}),k&&r.jsxs("div",{className:"city-dropdown-menu pan-india-city-menu",children:[r.jsx("div",{className:"city-search-box",children:r.jsx("input",{type:"text",className:"form-input city-search-input",placeholder:"Search 30+ Indian cities...",value:v,onChange:C=>y(C.target.value),autoFocus:!0})}),r.jsxs("button",{type:"button",className:"gps-detect-city-btn flex items-center justify-between",onClick:async()=>{const C=await f();C.success?(m(`Detected location: ${C.location.cityName}!`,"success"),N(!1)):m(C.error||"Could not access GPS location","error")},disabled:h,children:[r.jsxs("div",{className:"flex items-center gap-sm",children:[r.jsx("span",{className:"gps-radar-icon",children:"📍"}),r.jsx("span",{style:{fontWeight:700,color:"#38bdf8"},children:h?"Detecting GPS...":"Use My Current Location"})]}),r.jsx("span",{className:"gps-badge",children:"GPS"})]}),r.jsx("div",{className:"metro-pills-row flex flex-wrap gap-xs",children:c.filter(C=>C.isMetro).slice(0,6).map(C=>r.jsx("button",{type:"button",className:`metro-chip ${C.id===o?"active":""}`,onClick:()=>{l(C.id),N(!1),y(""),m(`City changed to ${C.name}`,"info")},children:C.name},C.id))}),r.jsx("div",{className:"dropdown-header-label",style:{marginTop:8},children:v?"Matching Cities":"All Indian Cities"}),r.jsxs("div",{className:"cities-scroll-list",children:[E.map(C=>r.jsxs("button",{className:`city-option-item ${C.id===o?"active":""}`,onClick:()=>{l(C.id),N(!1),y(""),m(`City changed to ${C.name}`,"info")},children:[r.jsxs("div",{className:"flex items-center gap-sm",children:[r.jsx(ct,{size:14,color:C.id===o?"#10B981":"#94A3B8"}),r.jsx("span",{style:{fontWeight:C.id===o?700:500},children:C.name})]}),r.jsx("span",{className:"city-state-pill",children:C.state})]},C.id)),E.length===0&&r.jsxs("div",{style:{padding:"16px 10px",textAlign:"center",color:"#94a3b8",fontSize:"0.85rem"},children:['No city found matching "',v,'"']})]})]})]})]}),r.jsxs("nav",{className:"desktop-nav-links flex items-center gap-md",children:[r.jsx("button",{className:`nav-link ${e==="home"?"active":""}`,onClick:()=>T("home"),children:"Home"}),r.jsx("button",{className:`nav-link ${e==="venues"?"active":""}`,onClick:()=>T("venues"),children:"Explore Venues"}),(a==null?void 0:a.role)==="Facility Owner"&&r.jsx("button",{className:`nav-link ${e==="owner-dashboard"?"active":""}`,onClick:()=>T("owner-dashboard"),children:"🏢 Owner Portal"}),(a==null?void 0:a.role)==="Admin"&&r.jsx("button",{className:`nav-link ${e==="admin-dashboard"?"active":""}`,onClick:()=>T("admin-dashboard"),children:"🛡️ Admin Portal"}),r.jsxs("button",{className:"btn btn-primary btn-sm book-cta-btn",onClick:()=>T("venues"),children:[r.jsx(He,{size:15}),r.jsx("span",{children:"Book Court"})]}),s?r.jsxs("div",{className:"profile-dropdown-wrapper",ref:S,children:[r.jsxs("button",{className:"profile-trigger-btn",onClick:()=>p(!d),"aria-expanded":d,children:[r.jsx("img",{src:a.avatar,alt:a.name,className:"profile-avatar-img",onError:C=>{C.target.src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80"}}),r.jsx("span",{className:"profile-user-name",children:a.name}),r.jsx(lc,{size:14,className:`profile-arrow ${d?"rotate":""}`})]}),d&&r.jsxs("div",{className:"profile-dropdown-menu",children:[r.jsx("div",{className:"profile-menu-header",children:r.jsxs("div",{className:"flex items-center gap-sm",children:[r.jsx("img",{src:a.avatar,alt:"",className:"menu-header-avatar"}),r.jsxs("div",{children:[r.jsx("div",{className:"menu-header-name",children:a.name}),r.jsx("div",{className:"menu-header-role",children:a.role||"Player"})]})]})}),r.jsx("div",{className:"profile-menu-divider"}),r.jsxs("button",{className:"profile-menu-item",onClick:()=>T("venues"),children:[r.jsx(He,{size:16}),r.jsx("span",{children:"Book Venue"})]}),r.jsxs("button",{className:"profile-menu-item",onClick:()=>T("profile"),children:[r.jsx(Ho,{size:16}),r.jsx("span",{children:"My Profile & Bookings"})]}),(a==null?void 0:a.role)==="Facility Owner"&&r.jsxs("button",{className:"profile-menu-item",onClick:()=>T("owner-dashboard"),children:[r.jsx(fr,{size:16,color:"#06B6D4"}),r.jsx("span",{style:{color:"#38bdf8",fontWeight:600},children:"Facility Owner Portal"})]}),(a==null?void 0:a.role)==="Admin"&&r.jsxs("button",{className:"profile-menu-item",onClick:()=>T("admin-dashboard"),children:[r.jsx(Vn,{size:16,color:"#F59E0B"}),r.jsx("span",{style:{color:"#fbbf24",fontWeight:600},children:"Admin Platform Portal"})]}),r.jsx("div",{className:"profile-menu-divider"}),r.jsxs("button",{className:"profile-menu-item menu-item-logout",onClick:B,children:[r.jsx(Vi,{size:16}),r.jsx("span",{children:"Logout"})]})]})]}):r.jsxs("div",{className:"flex items-center gap-sm",children:[r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>T("login"),children:"Login"}),r.jsx("button",{className:"btn btn-primary btn-sm",onClick:()=>T("signup"),children:"Sign Up"})]})]}),r.jsx("button",{className:"mobile-hamburger-btn show-on-mobile",onClick:()=>w(!g),"aria-label":"Toggle navigation menu",children:g?r.jsx(Fn,{size:24}):r.jsx(Qh,{size:24})})]}),g&&r.jsx("div",{className:"mobile-drawer-overlay",onClick:()=>w(!1),children:r.jsxs("div",{className:"mobile-drawer-content",onClick:C=>C.stopPropagation(),children:[r.jsxs("div",{className:"drawer-header flex items-center justify-between",children:[r.jsxs("div",{className:"brand-logo",onClick:()=>T("home"),children:[r.jsx("div",{className:"logo-badge",children:r.jsx("span",{className:"logo-court-icon",children:"⚡"})}),r.jsx("span",{className:"logo-title",children:"QUICKCOURT"})]}),r.jsx("button",{onClick:()=>w(!1),className:"modal-close",children:r.jsx(Fn,{size:20})})]}),s?r.jsxs("div",{className:"mobile-user-card",onClick:()=>T("profile"),children:[r.jsx("img",{src:a.avatar,alt:"",className:"drawer-user-avatar"}),r.jsxs("div",{children:[r.jsx("div",{style:{fontWeight:700,color:"#f8fafc"},children:a.name}),r.jsxs("div",{style:{fontSize:"0.8rem",color:"#10B981"},children:[a.role," • ",a.email]})]})]}):r.jsxs("div",{className:"flex gap-sm",style:{marginBottom:20},children:[r.jsx("button",{className:"btn btn-secondary",style:{flex:1},onClick:()=>T("login"),children:"Login"}),r.jsx("button",{className:"btn btn-primary",style:{flex:1},onClick:()=>T("signup"),children:"Sign Up"})]}),r.jsxs("div",{className:"drawer-nav-list flex-col gap-sm",children:[r.jsx("button",{className:"drawer-nav-btn",onClick:()=>T("home"),children:"Home"}),r.jsx("button",{className:"drawer-nav-btn",onClick:()=>T("venues"),children:"Explore Venues"}),s&&r.jsx("button",{className:"drawer-nav-btn",onClick:()=>T("profile"),children:"My Profile & Bookings"})]}),s&&r.jsxs("button",{className:"btn btn-danger",style:{marginTop:24,width:"100%"},onClick:B,children:[r.jsx(Vi,{size:16}),r.jsx("span",{children:"Logout"})]})]})}),r.jsx("style",{children:`
        .navbar-wrapper {
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          height: var(--header-height);
          background: rgba(11, 17, 32, 0.92);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border-subtle);
          z-index: 100;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          user-select: none;
        }

        .logo-badge {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: linear-gradient(135deg, #10B981 0%, #06B6D4 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
        }

        .logo-court-icon {
          font-size: 1.2rem;
        }

        .logo-text-group {
          display: flex;
          flex-direction: column;
        }

        .logo-title {
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: 1.25rem;
          letter-spacing: 0.05em;
          background: linear-gradient(to right, #ffffff, #a7f3d0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .logo-subtitle {
          font-size: 0.65rem;
          font-weight: 700;
          color: #10B981;
          letter-spacing: 0.12em;
        }

        .city-selector-wrapper {
          position: relative;
        }

        .city-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid var(--border-subtle);
          padding: 7px 12px;
          border-radius: var(--radius-full);
          color: var(--text-main);
          font-size: 0.85rem;
          font-weight: 600;
          transition: all 0.2s ease;
        }

        .city-btn:hover {
          background: rgba(51, 65, 85, 0.8);
          border-color: rgba(16, 185, 129, 0.4);
        }

        .city-icon {
          color: var(--primary);
        }

        .city-arrow {
          transition: transform 0.2s ease;
          color: var(--text-muted);
        }

        .city-arrow.rotate {
          transform: rotate(180deg);
        }

        .city-dropdown-menu {
          position: absolute;
          top: calc(100% + 8px);
          left: 0;
          width: 320px;
          background: rgba(15, 23, 42, 0.96);
          backdrop-filter: blur(20px);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.6);
          padding: 12px;
          z-index: 110;
          animation: slideUp 0.15s ease forwards;
        }

        .city-search-box {
          margin-bottom: 8px;
        }

        .city-search-input {
          padding: 8px 12px;
          font-size: 0.85rem;
          background: rgba(30, 41, 59, 0.8);
        }

        .gps-detect-city-btn {
          width: 100%;
          padding: 8px 12px;
          background: rgba(56, 189, 248, 0.1);
          border: 1px solid rgba(56, 189, 248, 0.3);
          border-radius: var(--radius-sm);
          font-size: 0.82rem;
          margin-bottom: 10px;
          text-align: left;
          transition: all 0.2s ease;
        }

        .gps-detect-city-btn:hover {
          background: rgba(56, 189, 248, 0.2);
          border-color: #38bdf8;
        }

        .gps-badge {
          background: #38bdf8;
          color: #0b1120;
          font-size: 0.65rem;
          font-weight: 800;
          padding: 1px 6px;
          border-radius: 4px;
        }

        .metro-pills-row {
          margin-bottom: 8px;
        }

        .metro-chip {
          font-size: 0.72rem;
          font-weight: 600;
          color: #94a3b8;
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid var(--border-subtle);
          padding: 3px 8px;
          border-radius: var(--radius-full);
          transition: all 0.2s ease;
        }

        .metro-chip:hover {
          color: #f8fafc;
          border-color: var(--primary);
        }

        .metro-chip.active {
          background: var(--primary);
          color: #ffffff;
          border-color: var(--primary);
        }

        .cities-scroll-list {
          max-height: 240px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 2px;
          padding-right: 4px;
        }

        .dropdown-header-label {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--text-dim);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 4px 6px;
        }

        .city-option-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 9px 12px;
          border-radius: var(--radius-sm);
          font-size: 0.88rem;
          color: var(--text-main);
          font-weight: 500;
          text-align: left;
        }

        .city-option-item:hover {
          background: var(--bg-tertiary);
          color: var(--primary);
        }

        .city-option-item.active {
          background: var(--primary-light);
          color: var(--primary);
          font-weight: 700;
        }

        .city-state-pill {
          font-size: 0.7rem;
          color: var(--text-dim);
        }

        .desktop-nav-links {
          display: flex;
        }

        .nav-link {
          font-weight: 600;
          font-size: 0.92rem;
          color: var(--text-muted);
          padding: 8px 12px;
          border-radius: var(--radius-sm);
        }

        .nav-link:hover {
          color: var(--text-main);
          background: rgba(255, 255, 255, 0.05);
        }

        .nav-link.active {
          color: var(--primary);
          background: var(--primary-light);
        }

        .profile-dropdown-wrapper {
          position: relative;
        }

        .profile-trigger-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid var(--border-subtle);
          padding: 5px 12px 5px 6px;
          border-radius: var(--radius-full);
          color: var(--text-main);
          font-weight: 600;
          font-size: 0.88rem;
        }

        .profile-trigger-btn:hover {
          border-color: var(--primary);
        }

        .profile-avatar-img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--primary);
        }

        .profile-arrow.rotate {
          transform: rotate(180deg);
        }

        .profile-dropdown-menu {
          position: absolute;
          top: calc(100% + 8px);
          right: 0;
          width: 240px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          padding: 8px;
          z-index: 110;
          animation: slideUp 0.15s ease forwards;
        }

        .profile-menu-header {
          padding: 10px;
        }

        .menu-header-avatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          object-fit: cover;
        }

        .menu-header-name {
          font-weight: 700;
          font-size: 0.95rem;
        }

        .menu-header-role {
          font-size: 0.75rem;
          color: var(--primary);
          font-weight: 600;
        }

        .profile-menu-divider {
          height: 1px;
          background: var(--border-subtle);
          margin: 6px 0;
        }

        .profile-menu-item {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;
          padding: 10px 12px;
          border-radius: var(--radius-sm);
          font-size: 0.88rem;
          color: var(--text-main);
          font-weight: 500;
        }

        .profile-menu-item:hover {
          background: var(--bg-tertiary);
          color: var(--primary);
        }

        .menu-item-logout:hover {
          background: rgba(239, 68, 68, 0.15);
          color: #f87171;
        }

        .mobile-hamburger-btn {
          color: var(--text-main);
          padding: 8px;
        }

        .mobile-drawer-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(8px);
          z-index: 200;
        }

        .mobile-drawer-content {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: 80%;
          max-width: 320px;
          background: var(--bg-secondary);
          border-left: 1px solid var(--border-subtle);
          padding: 24px;
          display: flex;
          flex-direction: column;
        }

        .drawer-header {
          padding-bottom: 20px;
          border-bottom: 1px solid var(--border-subtle);
          margin-bottom: 20px;
        }

        .mobile-user-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          background: var(--bg-tertiary);
          border-radius: var(--radius-md);
          margin-bottom: 20px;
          cursor: pointer;
        }

        .drawer-user-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--primary);
        }

        .drawer-nav-btn {
          width: 100%;
          padding: 14px 16px;
          border-radius: var(--radius-md);
          background: var(--bg-tertiary);
          color: var(--text-main);
          font-weight: 600;
          font-size: 1rem;
          text-align: left;
        }

        .drawer-nav-btn:hover {
          background: var(--primary-light);
          color: var(--primary);
        }

        @media (max-width: 768px) {
          .desktop-nav-links {
            display: none;
          }
          .city-btn .city-name {
            display: none;
          }
        }
      `})]})}function Yg({setActivePage:e}){return r.jsxs("footer",{className:"footer-wrapper",children:[r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"footer-top-grid",children:[r.jsxs("div",{className:"footer-col brand-col",children:[r.jsxs("div",{className:"brand-logo",onClick:()=>e("home"),children:[r.jsx("div",{className:"logo-badge",children:r.jsx("span",{className:"logo-court-icon",children:"⚡"})}),r.jsxs("div",{className:"logo-text-group",children:[r.jsx("span",{className:"logo-title",children:"QUICKCOURT"}),r.jsx("span",{className:"logo-subtitle",children:"LOCAL SPORTS BOOKING"})]})]}),r.jsx("p",{className:"footer-desc",children:"Discover and instantly book the best verified local sports venues, badminton courts, football turfs, cricket boxes, and tennis clubs near you."}),r.jsxs("div",{className:"footer-features-badges",children:[r.jsxs("div",{className:"feature-pill",children:[r.jsx(wg,{size:13,color:"#10B981"})," 100% Verified Courts"]}),r.jsxs("div",{className:"feature-pill",children:[r.jsx(Kt,{size:13,color:"#06B6D4"})," Instant Confirmation"]}),r.jsxs("div",{className:"feature-pill",children:[r.jsx(Vo,{size:13,color:"#F59E0B"})," Best Price Guarantee"]})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h4",{className:"footer-col-title",children:"Quick Navigation"}),r.jsxs("ul",{className:"footer-links",children:[r.jsx("li",{children:r.jsx("button",{onClick:()=>{e("home"),window.scrollTo(0,0)},children:"Home"})}),r.jsx("li",{children:r.jsx("button",{onClick:()=>{e("venues"),window.scrollTo(0,0)},children:"Explore Venues"})}),r.jsx("li",{children:r.jsx("button",{onClick:()=>{e("venues"),window.scrollTo(0,0)},children:"Book Badmiton"})}),r.jsx("li",{children:r.jsx("button",{onClick:()=>{e("venues"),window.scrollTo(0,0)},children:"Football Turfs"})}),r.jsx("li",{children:r.jsx("button",{onClick:()=>{e("profile"),window.scrollTo(0,0)},children:"My Bookings"})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h4",{className:"footer-col-title",children:"Sports Categories"}),r.jsxs("ul",{className:"footer-links",children:[r.jsx("li",{children:"🏸 Badminton Arenas"}),r.jsx("li",{children:"⚽ FIFA Approved Turfs"}),r.jsx("li",{children:"🏏 Box Cricket Pitches"}),r.jsx("li",{children:"🎾 Clay & Hard Tennis"}),r.jsx("li",{children:"🏓 Pickleball & Padel"}),r.jsx("li",{children:"🏀 Basketball Courts"})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h4",{className:"footer-col-title",children:"Available Cities"}),r.jsxs("div",{className:"cities-tag-cloud",children:[r.jsx("span",{className:"city-badge",children:"Ahmedabad"}),r.jsx("span",{className:"city-badge",children:"Rajkot"}),r.jsx("span",{className:"city-badge",children:"Surat"}),r.jsx("span",{className:"city-badge",children:"Vadodara"}),r.jsx("span",{className:"city-badge",children:"Mumbai"}),r.jsx("span",{className:"city-badge",children:"Bengaluru"})]}),r.jsxs("div",{className:"support-box",children:[r.jsxs("div",{className:"support-item flex items-center gap-sm",children:[r.jsx(og,{size:14,color:"#10B981"}),r.jsx("span",{children:"+91 98765 43210 (9AM - 9PM)"})]}),r.jsxs("div",{className:"support-item flex items-center gap-sm",children:[r.jsx(Hh,{size:14,color:"#06B6D4"}),r.jsx("span",{children:"support@quickcourt.in"})]})]})]})]}),r.jsxs("div",{className:"footer-bottom flex items-center justify-between",children:[r.jsxs("p",{className:"copyright-text",children:["© ",new Date().getFullYear()," QuickCourt Technologies Inc. All rights reserved."]}),r.jsxs("div",{className:"footer-policy-links flex gap-md",children:[r.jsx("span",{children:"Privacy Policy"}),r.jsx("span",{children:"Terms of Service"}),r.jsx("span",{children:"Cancellation Policy"}),r.jsx("span",{children:"Court Owner Portal"})]})]})]}),r.jsx("style",{children:`
        .footer-wrapper {
          background: #070c18;
          border-top: 1px solid var(--border-subtle);
          padding: 60px 0 24px;
          margin-top: 80px;
        }

        .footer-top-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 40px;
          margin-bottom: 50px;
        }

        .brand-col .footer-desc {
          font-size: 0.88rem;
          color: var(--text-muted);
          margin: 16px 0 20px;
          line-height: 1.6;
          max-width: 380px;
        }

        .footer-features-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .feature-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid var(--border-subtle);
          padding: 4px 10px;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          color: var(--text-main);
          font-weight: 500;
        }

        .footer-col-title {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 20px;
          position: relative;
        }

        .footer-col-title::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 24px;
          height: 2px;
          background: var(--primary);
          border-radius: 2px;
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-links li, .footer-links button {
          font-size: 0.88rem;
          color: var(--text-muted);
          text-align: left;
          transition: color 0.2s ease;
        }

        .footer-links button:hover {
          color: var(--primary);
        }

        .cities-tag-cloud {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }

        .city-badge {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-subtle);
          padding: 3px 10px;
          border-radius: var(--radius-sm);
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .support-box {
          display: flex;
          flex-direction: column;
          gap: 8px;
          background: rgba(15, 23, 42, 0.6);
          padding: 12px;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-subtle);
        }

        .support-item {
          font-size: 0.82rem;
          color: var(--text-muted);
        }

        .footer-bottom {
          padding-top: 24px;
          border-top: 1px solid var(--border-subtle);
          font-size: 0.82rem;
          color: var(--text-dim);
          flex-wrap: wrap;
          gap: 16px;
        }

        .footer-policy-links span {
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .footer-policy-links span:hover {
          color: var(--text-main);
        }

        @media (max-width: 992px) {
          .footer-top-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 600px) {
          .footer-top-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `})]})}function Jg({activeRole:e,setActiveRole:t,setActivePage:n}){const{user:a,updateProfile:s}=gt(),{showToast:i}=ze(),o=l=>{t(l),a&&s({role:l}),l==="Facility Owner"?(n("owner-dashboard"),i("Switched to Facility Owner portal","info")):l==="Admin"?(n("admin-dashboard"),i("Switched to Admin management portal","info")):(n("home"),i("Switched to Player / User view","info"))};return r.jsxs("div",{className:"role-switcher-banner",children:[r.jsxs("div",{className:"container flex items-center justify-between",children:[r.jsxs("div",{className:"flex items-center gap-sm hide-on-mobile",children:[r.jsx(fr,{size:14,color:"#10B981"}),r.jsx("span",{className:"role-banner-label",children:"QuickCourt Role Simulator:"}),r.jsx("span",{style:{fontSize:"0.78rem",color:"#94a3b8"},children:"Toggle between roles to test all platform features"})]}),r.jsxs("div",{className:"role-pills-group flex gap-sm",children:[r.jsxs("button",{className:`role-pill-btn ${e==="Player"||e==="User"?"active":""}`,onClick:()=>o("Player"),children:[r.jsx(Ho,{size:13}),r.jsx("span",{children:"Player (User)"})]}),r.jsxs("button",{className:`role-pill-btn ${e==="Facility Owner"?"active":""}`,onClick:()=>o("Facility Owner"),children:[r.jsx(Un,{size:13}),r.jsx("span",{children:"Facility Owner"})]}),r.jsxs("button",{className:`role-pill-btn ${e==="Admin"?"active":""}`,onClick:()=>o("Admin"),children:[r.jsx(Vn,{size:13}),r.jsx("span",{children:"Admin"})]})]})]}),r.jsx("style",{children:`
        .role-switcher-banner {
          background: #060b17;
          border-bottom: 1px solid rgba(148, 163, 184, 0.1);
          padding: 6px 0;
          font-size: 0.8rem;
          z-index: 120;
          position: relative;
        }

        .role-banner-label {
          font-weight: 700;
          color: #10B981;
        }

        .role-pills-group {
          flex-wrap: wrap;
        }

        .role-pill-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          border-radius: var(--radius-full);
          font-size: 0.76rem;
          font-weight: 600;
          color: #94a3b8;
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid var(--border-subtle);
          transition: all 0.2s ease;
        }

        .role-pill-btn:hover {
          color: #f8fafc;
          border-color: rgba(16, 185, 129, 0.3);
        }

        .role-pill-btn.active {
          background: rgba(16, 185, 129, 0.2);
          color: #10B981;
          border-color: #10B981;
          font-weight: 700;
          box-shadow: 0 0 10px rgba(16, 185, 129, 0.25);
        }
      `})]})}function tp({venue:e,onViewDetails:t,onQuickBook:n}){const{getDistanceToVenue:a}=qr(),s=a(e);return r.jsxs("div",{className:"venue-card-wrapper glass-card",children:[r.jsxs("div",{className:"venue-media-box",children:[r.jsx("img",{src:e.images[0],alt:e.name,className:"venue-card-img",loading:"lazy",onError:i=>{i.target.src="https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80"}}),r.jsxs("div",{className:"media-overlay-badges",children:[r.jsx("span",{className:`tag ${e.venueType==="indoor"?"tag-indoor":"tag-outdoor"}`,children:e.venueType==="indoor"?"🏢 Indoor":"🌤️ Outdoor"}),r.jsxs("span",{className:"tag tag-sport",children:[e.sportIcon," ",e.sportName]})]}),r.jsxs("div",{className:"media-rating-badge",children:[r.jsx(zt,{size:13,fill:"#FBBF24",color:"#FBBF24"}),r.jsx("span",{children:e.rating.toFixed(1)}),r.jsxs("span",{className:"reviews-count",children:["(",e.reviewsCount||e.reviews.length,")"]})]})]}),r.jsxs("div",{className:"venue-card-body",children:[r.jsxs("div",{className:"feature-tags-row",children:[e.isTopRated&&r.jsx("span",{className:"tag tag-toprated",children:"⭐ Top Rated"}),e.isBudget&&r.jsx("span",{className:"tag tag-budget",children:"₹ Budget"})]}),r.jsx("h3",{className:"venue-title",onClick:()=>t(e.id),children:e.name}),r.jsxs("div",{className:"venue-location flex items-center justify-between",children:[r.jsxs("div",{className:"flex items-center gap-sm",style:{overflow:"hidden"},children:[r.jsx(ct,{size:14,className:"location-pin"}),r.jsx("span",{className:"location-text",children:e.area})]}),s!==null&&r.jsxs("span",{className:"distance-badge flex items-center gap-xs",children:[r.jsx("span",{children:"📍"}),r.jsxs("span",{children:[s," km away"]})]})]}),r.jsxs("div",{className:"venue-footer-row flex items-center justify-between",children:[r.jsxs("div",{className:"price-box",children:[r.jsx("span",{className:"price-currency",children:"₹"}),r.jsx("span",{className:"price-amount",children:e.pricePerHour}),r.jsx("span",{className:"price-unit",children:"per hour"})]}),r.jsx("button",{className:"btn btn-primary btn-sm view-details-btn",onClick:()=>t(e.id),children:"View Details"})]})]}),r.jsx("style",{children:`
        .venue-card-wrapper {
          display: flex;
          flex-direction: column;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: rgba(15, 23, 42, 0.7);
          border: 1px solid var(--border-subtle);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }

        .venue-card-wrapper:hover {
          transform: translateY(-4px);
          border-color: rgba(16, 185, 129, 0.4);
          box-shadow: 0 14px 30px -8px rgba(0, 0, 0, 0.5), 0 0 20px rgba(16, 185, 129, 0.15);
        }

        .venue-media-box {
          position: relative;
          width: 100%;
          height: 190px;
          overflow: hidden;
          background: #1e293b;
        }

        .venue-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .venue-card-wrapper:hover .venue-card-img {
          transform: scale(1.06);
        }

        .media-overlay-badges {
          position: absolute;
          top: 12px;
          left: 12px;
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }

        .media-rating-badge {
          position: absolute;
          bottom: 12px;
          right: 12px;
          background: rgba(15, 23, 42, 0.88);
          backdrop-filter: blur(8px);
          padding: 4px 8px;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-weight: 700;
          color: #fbbf24;
          display: flex;
          align-items: center;
          gap: 4px;
          border: 1px solid rgba(251, 191, 36, 0.3);
        }

        .reviews-count {
          color: var(--text-dim);
          font-weight: 500;
          font-size: 0.75rem;
        }

        .venue-card-body {
          padding: 18px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .feature-tags-row {
          display: flex;
          gap: 6px;
          margin-bottom: 8px;
        }

        .venue-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 6px;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .venue-title:hover {
          color: var(--primary);
        }

        .venue-location {
          font-size: 0.84rem;
          color: var(--text-muted);
          margin-bottom: 16px;
        }

        .location-pin {
          color: var(--primary);
          flex-shrink: 0;
        }

        .location-text {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .distance-badge {
          background: rgba(56, 189, 248, 0.12);
          border: 1px solid rgba(56, 189, 248, 0.3);
          color: #38bdf8;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 2px 6px;
          border-radius: var(--radius-full);
          white-space: nowrap;
          flex-shrink: 0;
        }

        .venue-footer-row {
          margin-top: auto;
          padding-top: 14px;
          border-top: 1px solid var(--border-subtle);
        }

        .price-box {
          display: flex;
          align-items: baseline;
          gap: 3px;
        }

        .price-currency {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--primary);
        }

        .price-amount {
          font-family: var(--font-heading);
          font-size: 1.28rem;
          font-weight: 800;
          color: var(--text-main);
        }

        .price-unit {
          font-size: 0.75rem;
          color: var(--text-dim);
          margin-left: 2px;
        }

        .view-details-btn {
          font-size: 0.85rem;
        }
      `})]})}function Xg({setActivePage:e,onSelectVenue:t}){const{venues:n}=hr(),{selectedCity:a,currentCityObj:s,cities:i,setSelectedCity:o,detectLocation:l,isDetectingLocation:c}=qr(),[u,f]=j.useState("all"),h=n.filter(v=>v.city===a),m=(h.length>0?h:n).filter(v=>u==="all"?!0:v.sport===u);return r.jsxs("div",{className:"home-page-wrapper",children:[r.jsx("section",{className:"hero-section",children:r.jsx("div",{className:"container hero-container",children:r.jsxs("div",{className:"hero-grid flex items-center justify-between",children:[r.jsxs("div",{className:"hero-content",children:[r.jsxs("div",{className:"hero-badge flex items-center gap-sm",children:[r.jsx(Vu,{size:15,color:"#10B981"}),r.jsx("span",{children:"#1 LOCAL SPORTS VENUE BOOKING"})]}),r.jsxs("h1",{className:"hero-title",children:["FIND PLAYERS & VENUES ",r.jsx("span",{className:"highlight-text",children:"NEARBY"})]}),r.jsx("p",{className:"hero-subtitle",children:"Seamlessly explore sports venues and play with sports enthusiasts just like you!"}),r.jsxs("div",{className:"hero-cta-group flex items-center gap-md",children:[r.jsxs("button",{className:"btn btn-primary btn-lg book-venues-cta",onClick:()=>{e("venues"),window.scrollTo(0,0)},children:[r.jsx(He,{size:18}),r.jsx("span",{children:"Book Venues"})]}),r.jsxs("button",{className:"btn btn-secondary btn-lg explore-cta",onClick:()=>{e("venues"),window.scrollTo(0,0)},children:[r.jsx("span",{children:"Explore Sports"}),r.jsx($n,{size:18})]})]}),r.jsxs("div",{className:"hero-city-pills flex flex-wrap items-center gap-sm",style:{marginTop:24},children:[r.jsxs("button",{type:"button",className:"gps-hero-pill-btn flex items-center gap-sm",onClick:async()=>{(await l()).success},disabled:c,children:[r.jsx("span",{children:"📍"}),r.jsx("span",{children:c?"Detecting GPS...":"Use My Current Location"})]}),r.jsx("span",{style:{fontSize:"0.8rem",color:"#94a3b8",fontWeight:600},children:"Top Metros:"}),i.filter(v=>v.isMetro).slice(0,6).map(v=>r.jsx("button",{className:`city-pill-btn ${v.id===a?"active":""}`,onClick:()=>o(v.id),children:v.name},v.id))]})]}),r.jsx("div",{className:"hero-visual-box hide-on-mobile",children:r.jsxs("div",{className:"hero-image-card",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=800&q=80",alt:"Sports Arena Action",className:"hero-main-img"}),r.jsxs("div",{className:"floating-stat-card stat-card-1",children:[r.jsx("div",{className:"stat-icon-circle",children:r.jsx(Vn,{size:20,color:"#10B981"})}),r.jsxs("div",{children:[r.jsx("div",{className:"stat-title",children:"100% Verified"}),r.jsx("div",{className:"stat-sub",children:"Synthetic & Turf Courts"})]})]}),r.jsxs("div",{className:"floating-stat-card stat-card-2",children:[r.jsx("div",{className:"stat-icon-circle",style:{background:"rgba(6, 182, 212, 0.15)"},children:r.jsx(fr,{size:20,color:"#06B6D4"})}),r.jsxs("div",{children:[r.jsx("div",{className:"stat-title",children:"Instant Slots"}),r.jsx("div",{className:"stat-sub",children:"Real-Time Confirmation"})]})]})]})})]})})}),r.jsx("section",{className:"sports-categories-section",children:r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"section-header-row flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsx("h2",{className:"section-main-heading",children:"Explore by Sport"}),r.jsx("p",{className:"section-sub-heading",children:"Select your favorite sport to find nearby courts"})]}),r.jsxs("button",{className:"see-all-link flex items-center gap-sm",onClick:()=>{e("venues"),window.scrollTo(0,0)},children:[r.jsx("span",{children:"See all venues"}),r.jsx(Wo,{size:16})]})]}),r.jsx("div",{className:"sports-pills-row",children:_u.map(v=>r.jsxs("button",{className:`sport-pill-item ${u===v.id?"active":""}`,onClick:()=>f(v.id),children:[r.jsx("span",{className:"sport-icon",children:v.icon}),r.jsx("span",{className:"sport-name",children:v.name})]},v.id))})]})}),r.jsx("section",{className:"featured-venues-section",children:r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"section-header-row flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"flex items-center gap-sm",style:{marginBottom:4},children:[r.jsx(ct,{size:16,color:"#10B981"}),r.jsxs("span",{style:{fontSize:"0.85rem",fontWeight:700,color:"#10B981",textTransform:"uppercase",letterSpacing:"0.05em"},children:[s.name," Sports Venues"]})]}),r.jsxs("h2",{className:"section-main-heading",children:["Popular Venues in ",s.name]})]}),r.jsx("button",{className:"see-all-link flex items-center gap-sm",onClick:()=>{e("venues"),window.scrollTo(0,0)},children:r.jsx("span",{children:"See all venues >"})})]}),r.jsx("div",{className:"venues-cards-grid",children:m.slice(0,4).map(v=>r.jsx(tp,{venue:v,onViewDetails:y=>t(y)},v.id))}),m.length===0&&r.jsxs("div",{className:"empty-city-venues glass-card flex-col items-center justify-center",children:[r.jsx(He,{size:40,color:"#64748B"}),r.jsxs("h4",{style:{fontSize:"1.1rem",marginTop:12,color:"#f8fafc"},children:["No ",u!=="all"?u:""," venues found in ",s.name]}),r.jsx("p",{style:{fontSize:"0.85rem",color:"#94a3b8",margin:"4px 0 16px"},children:"Try switching city or viewing all sports arenas."}),r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>f("all"),children:"View All Venues"})]})]})}),r.jsx("section",{className:"why-quickcourt-section",children:r.jsx("div",{className:"container",children:r.jsxs("div",{className:"why-banner-card glass-card flex items-center justify-between",children:[r.jsxs("div",{className:"why-text-col",children:[r.jsx("h3",{className:"why-title",children:"Are you a Sports Facility Owner?"}),r.jsx("p",{className:"why-desc",children:"List your badminton courts, football turfs, cricket arenas, or swimming pools on QuickCourt to reach thousands of active local players daily."}),r.jsxs("div",{className:"why-benefits-grid flex gap-md",children:[r.jsxs("div",{className:"benefit-item flex items-center gap-sm",children:[r.jsx(Le,{size:16,color:"#10B981"}),r.jsx("span",{children:"Real-time slot manager"})]}),r.jsxs("div",{className:"benefit-item flex items-center gap-sm",children:[r.jsx(Le,{size:16,color:"#10B981"}),r.jsx("span",{children:"Zero upfront charges"})]}),r.jsxs("div",{className:"benefit-item flex items-center gap-sm",children:[r.jsx(Le,{size:16,color:"#10B981"}),r.jsx("span",{children:"Direct UPI settlements"})]})]})]}),r.jsx("button",{className:"btn btn-primary btn-lg",onClick:()=>{e("signup"),window.scrollTo(0,0)},children:"Register Your Venue"})]})})}),r.jsx("style",{children:`
        .home-page-wrapper {
          padding-bottom: 40px;
        }

        .hero-section {
          padding: 60px 0 40px;
          position: relative;
        }

        .hero-title {
          font-size: 3.2rem;
          font-weight: 900;
          color: var(--text-main);
          letter-spacing: -0.03em;
          line-height: 1.15;
          margin: 16px 0;
        }

        .highlight-text {
          background: linear-gradient(135deg, #10B981 0%, #06B6D4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: 1.15rem;
          color: var(--text-muted);
          margin-bottom: 32px;
          max-width: 520px;
          line-height: 1.6;
        }

        .hero-badge {
          display: inline-flex;
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.3);
          padding: 6px 14px;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-weight: 700;
          color: #34d399;
          letter-spacing: 0.05em;
        }

        .hero-city-pills {
          flex-wrap: wrap;
        }

        .city-pill-btn {
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid var(--border-subtle);
          padding: 4px 12px;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .city-pill-btn:hover {
          color: var(--text-main);
          border-color: var(--primary);
        }

        .city-pill-btn.active {
          background: var(--primary-light);
          color: var(--primary);
          border-color: var(--primary);
        }

        .hero-image-card {
          position: relative;
          width: 480px;
          height: 420px;
          border-radius: var(--radius-lg);
          overflow: visible;
        }

        .hero-main-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-subtle);
          box-shadow: 0 20px 50px -10px rgba(0, 0, 0, 0.7);
        }

        .floating-stat-card {
          position: absolute;
          background: rgba(15, 23, 42, 0.9);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          padding: 12px 18px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: var(--shadow-lg);
        }

        .stat-card-1 {
          top: -20px;
          left: -30px;
        }

        .stat-card-2 {
          bottom: -20px;
          right: -20px;
        }

        .stat-icon-circle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(16, 185, 129, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-title {
          font-size: 0.9rem;
          font-weight: 800;
          color: #f8fafc;
        }

        .stat-sub {
          font-size: 0.72rem;
          color: var(--text-dim);
        }

        .sports-categories-section, .featured-venues-section, .why-quickcourt-section {
          padding: 40px 0;
        }

        .section-header-row {
          margin-bottom: 24px;
          flex-wrap: wrap;
          gap: 12px;
        }

        .section-main-heading {
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--text-main);
        }

        .section-sub-heading {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-top: 2px;
        }

        .see-all-link {
          font-size: 0.92rem;
          font-weight: 700;
          color: var(--primary);
          transition: transform 0.2s ease;
        }

        .see-all-link:hover {
          transform: translateX(4px);
        }

        .sports-pills-row {
          display: flex;
          gap: 12px;
          overflow-x: auto;
          padding-bottom: 12px;
        }

        .sport-pill-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-full);
          color: var(--text-main);
          font-weight: 600;
          font-size: 0.92rem;
          white-space: nowrap;
          transition: all 0.2s ease;
        }

        .sport-pill-item:hover {
          background: var(--bg-card-hover);
          border-color: rgba(16, 185, 129, 0.4);
          transform: translateY(-2px);
        }

        .sport-pill-item.active {
          background: linear-gradient(135deg, #10B981 0%, #059669 100%);
          color: #ffffff;
          border-color: #10B981;
          box-shadow: 0 4px 14px rgba(16, 185, 129, 0.35);
        }

        .venues-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 24px;
        }

        .empty-city-venues {
          padding: 50px 20px;
          text-align: center;
          border-radius: var(--radius-lg);
          margin-top: 20px;
        }

        .why-banner-card {
          padding: 36px 40px;
          background: linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%);
          border-radius: var(--radius-lg);
          border: 1px solid rgba(16, 185, 129, 0.2);
          flex-wrap: wrap;
          gap: 24px;
        }

        .why-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-main);
          margin-bottom: 8px;
        }

        .why-desc {
          font-size: 0.95rem;
          color: var(--text-muted);
          max-width: 600px;
          margin-bottom: 16px;
          line-height: 1.5;
        }

        .benefit-item {
          font-size: 0.85rem;
          color: var(--text-main);
          font-weight: 600;
        }

        .gps-hero-pill-btn {
          background: rgba(56, 189, 248, 0.15);
          border: 1px solid rgba(56, 189, 248, 0.4);
          color: #38bdf8;
          font-weight: 700;
          font-size: 0.8rem;
          padding: 6px 14px;
          border-radius: var(--radius-full);
          transition: all 0.2s ease;
        }

        .gps-hero-pill-btn:hover {
          background: rgba(56, 189, 248, 0.25);
          box-shadow: 0 0 14px rgba(56, 189, 248, 0.3);
        }

        @media (max-width: 992px) {
          .hero-title {
            font-size: 2.5rem;
          }
          .hero-image-card {
            width: 380px;
            height: 340px;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.1rem;
          }
          .hero-section {
            padding: 30px 0 20px;
          }
          .why-banner-card {
            padding: 24px;
          }
        }
      `})]})}function Pt({isOpen:e,onClose:t,title:n,children:a,maxWidth:s="520px"}){return j.useEffect(()=>{function i(o){o.key==="Escape"&&e&&t()}return e&&(document.body.style.overflow="hidden",window.addEventListener("keydown",i)),()=>{document.body.style.overflow="unset",window.removeEventListener("keydown",i)}},[e,t]),e?r.jsx("div",{className:"modal-overlay",onClick:t,role:"dialog","aria-modal":"true",children:r.jsxs("div",{className:"modal-content",style:{maxWidth:s},onClick:i=>i.stopPropagation(),children:[r.jsxs("div",{className:"modal-header",children:[r.jsx("h3",{style:{fontSize:"1.2rem",fontWeight:700},children:n}),r.jsx("button",{className:"modal-close",onClick:t,"aria-label":"Close modal",children:r.jsx(Fn,{size:20})})]}),r.jsx("div",{className:"modal-body",children:a})]})}):null}function Zg({isOpen:e,onClose:t}){const{showToast:n}=ze(),[a,s]=j.useState(""),[i,o]=j.useState(!1),[l,c]=j.useState(!1),u=h=>{if(h.preventDefault(),!a||!a.includes("@")){n("Please enter a valid email address","error");return}c(!0),setTimeout(()=>{c(!1),o(!0),n(`Password reset link sent to ${a}`,"success")},800)},f=()=>{o(!1),s(""),t()};return r.jsx(Pt,{isOpen:e,onClose:f,title:"Reset Your Password",children:i?r.jsxs("div",{style:{textAlign:"center",padding:"10px 0"},children:[r.jsx("div",{style:{width:56,height:56,borderRadius:"50%",background:"rgba(16, 185, 129, 0.15)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px"},children:r.jsx(Le,{size:32,color:"#10B981"})}),r.jsx("h4",{style:{fontSize:"1.1rem",marginBottom:8,color:"#f8fafc"},children:"Reset Link Sent!"}),r.jsxs("p",{style:{fontSize:"0.9rem",color:"#94a3b8",marginBottom:24,lineHeight:1.5},children:["We’ve sent a secure password reset link to ",r.jsx("strong",{style:{color:"#10B981"},children:a}),". Please check your inbox or spam folder."]}),r.jsx("button",{className:"btn btn-primary",style:{width:"100%"},onClick:f,children:"Back to Login"})]}):r.jsxs("form",{onSubmit:u,children:[r.jsx("p",{style:{fontSize:"0.9rem",color:"#94a3b8",marginBottom:20,lineHeight:1.5},children:"Enter your registered email address and we'll send you an instant link to securely reset your password."}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Registered Email"}),r.jsx("div",{className:"form-control-wrapper",children:r.jsx("input",{type:"email",className:"form-input",placeholder:"e.g. mitchell@example.com",value:a,onChange:h=>s(h.target.value),required:!0,autoFocus:!0})})]}),r.jsxs("div",{className:"flex gap-sm",style:{marginTop:24},children:[r.jsx("button",{type:"button",className:"btn btn-secondary",style:{flex:1},onClick:t,children:"Cancel"}),r.jsxs("button",{type:"submit",className:"btn btn-primary",style:{flex:1},disabled:l,children:[r.jsx(xg,{size:15}),r.jsx("span",{children:l?"Sending...":"Send Reset Link"})]})]})]})})}function e0({setActivePage:e,returnUrl:t}){const{login:n}=gt(),{showToast:a}=ze(),[s,i]=j.useState(""),[o,l]=j.useState(""),[c,u]=j.useState(!1),[f,h]=j.useState(""),[m,v]=j.useState(""),[y,k]=j.useState(!1),[N,d]=j.useState(!1),p=w=>{if(w.preventDefault(),h(""),v(""),!s.trim()){h("Please enter your email");return}if(!o){v("Please enter your password");return}d(!0);const z=n(s,o);d(!1),z.success?(a(`Welcome back, ${z.user.name}!`,"success"),e(t||"home"),window.scrollTo(0,0)):z.errorField==="email"?h(z.message):z.errorField==="password"?v(z.message):a(z.message,"error")},g=()=>{i("mitchell.admin@quickcourt.com"),l("Password@123"),h(""),v(""),a("Loaded demo credentials for Mitchell Admin","info")};return r.jsxs("div",{className:"auth-page-container",children:[r.jsxs("div",{className:"auth-split-card glass-card",children:[r.jsxs("div",{className:"auth-visual-col hide-on-mobile",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1000&q=80",alt:"Basketball Court Game",className:"auth-hero-img"}),r.jsx("div",{className:"auth-visual-overlay",children:r.jsxs("div",{className:"auth-quote-box",children:[r.jsx("span",{className:"quote-badge",children:"⚡ INSTANT BOOKING"}),r.jsx("h3",{className:"quote-heading",children:'"The easiest way to book badminton & football courts in seconds."'}),r.jsx("p",{className:"quote-author",children:"Over 15,000+ local sports matches played this month"})]})})]}),r.jsxs("div",{className:"auth-form-col",children:[r.jsxs("div",{className:"auth-form-header",children:[r.jsxs("div",{className:"brand-logo",onClick:()=>e("home"),children:[r.jsx("div",{className:"logo-badge",children:r.jsx("span",{className:"logo-court-icon",children:"⚡"})}),r.jsx("span",{className:"logo-title",children:"QUICKCOURT"})]}),r.jsx("h2",{className:"auth-heading",children:"LOGIN"}),r.jsx("p",{className:"auth-subtext",children:"Access your court bookings, team matches, and profile."})]}),r.jsxs("button",{type:"button",className:"demo-account-pill flex items-center justify-between",onClick:g,children:[r.jsxs("div",{className:"flex items-center gap-sm",children:[r.jsx(fr,{size:14,color:"#10B981"}),r.jsx("span",{children:"Click to auto-fill Mitchell Admin credentials"})]}),r.jsx("span",{className:"demo-pill-badge",children:"Fill"})]}),r.jsxs("form",{onSubmit:p,className:"auth-main-form",children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Email"}),r.jsx("div",{className:"form-control-wrapper",children:r.jsx("input",{type:"email",className:`form-input ${f?"has-error":""}`,placeholder:"name@example.com",value:s,onChange:w=>{i(w.target.value),h("")},required:!0})}),f&&r.jsxs("div",{className:"form-error",children:[r.jsx(Ue,{size:14}),r.jsx("span",{children:f})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Password"}),r.jsxs("div",{className:"form-control-wrapper",children:[r.jsx("input",{type:c?"text":"password",className:`form-input ${m?"has-error":""}`,placeholder:"Enter your password",value:o,onChange:w=>{l(w.target.value),v("")},required:!0}),r.jsx("button",{type:"button",className:"input-icon-btn",onClick:()=>u(!c),"aria-label":"Toggle password visibility",children:c?r.jsx(_n,{size:18}):r.jsx(An,{size:18})})]}),m?r.jsxs("div",{className:"form-error",children:[r.jsx(Ue,{size:14}),r.jsx("span",{children:m})]}):r.jsx("span",{className:"form-hint",children:"Use 8–20 characters with uppercase, number, and symbol (@, #)"})]}),r.jsx("div",{className:"flex justify-end",style:{marginBottom:20},children:r.jsx("button",{type:"button",className:"forgot-pass-link",onClick:()=>k(!0),children:"Forgot password?"})}),r.jsxs("button",{type:"submit",className:"btn btn-primary btn-lg auth-submit-btn",disabled:N,children:[r.jsx(Uh,{size:18}),r.jsx("span",{children:N?"Logging in...":"Login"})]}),r.jsxs("div",{className:"auth-switch-prompt flex items-center justify-center gap-sm",children:[r.jsx("span",{children:"Don't have an account?"}),r.jsx("button",{type:"button",className:"auth-switch-link",onClick:()=>{e("signup"),window.scrollTo(0,0)},children:"Sign up"})]})]})]})]}),r.jsx(Zg,{isOpen:y,onClose:()=>k(!1)}),r.jsx("style",{children:`
        .auth-page-container {
          min-height: calc(100vh - var(--header-height) - 100px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
        }

        .auth-split-card {
          width: 100%;
          max-width: 960px;
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: rgba(15, 23, 42, 0.85);
        }

        .auth-visual-col {
          position: relative;
          background: #1e293b;
          overflow: hidden;
          min-height: 520px;
        }

        .auth-hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .auth-visual-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(11, 17, 32, 0.95) 0%, rgba(11, 17, 32, 0.3) 100%);
          display: flex;
          align-items: flex-end;
          padding: 40px;
        }

        .quote-badge {
          font-size: 0.72rem;
          font-weight: 800;
          color: #10B981;
          background: rgba(16, 185, 129, 0.15);
          padding: 4px 10px;
          border-radius: var(--radius-full);
          letter-spacing: 0.08em;
          display: inline-block;
          margin-bottom: 12px;
        }

        .quote-heading {
          font-size: 1.4rem;
          font-weight: 800;
          color: #f8fafc;
          line-height: 1.35;
          margin-bottom: 8px;
        }

        .quote-author {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .auth-form-col {
          padding: 44px 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .auth-form-header {
          margin-bottom: 24px;
        }

        .auth-heading {
          font-size: 1.8rem;
          font-weight: 900;
          color: var(--text-main);
          letter-spacing: 0.04em;
          margin: 16px 0 4px;
        }

        .auth-subtext {
          font-size: 0.88rem;
          color: var(--text-muted);
        }

        .demo-account-pill {
          width: 100%;
          background: rgba(16, 185, 129, 0.1);
          border: 1px dashed rgba(16, 185, 129, 0.4);
          padding: 8px 14px;
          border-radius: var(--radius-md);
          font-size: 0.78rem;
          color: #34d399;
          font-weight: 600;
          margin-bottom: 20px;
          text-align: left;
        }

        .demo-account-pill:hover {
          background: rgba(16, 185, 129, 0.18);
        }

        .demo-pill-badge {
          background: var(--primary);
          color: #ffffff;
          padding: 2px 8px;
          border-radius: var(--radius-full);
          font-size: 0.7rem;
        }

        .forgot-pass-link {
          font-size: 0.82rem;
          color: var(--primary);
          font-weight: 600;
        }

        .forgot-pass-link:hover {
          text-decoration: underline;
        }

        .auth-submit-btn {
          width: 100%;
          margin-bottom: 20px;
        }

        .auth-switch-prompt {
          font-size: 0.88rem;
          color: var(--text-muted);
        }

        .auth-switch-link {
          font-weight: 700;
          color: var(--primary);
          font-size: 0.9rem;
        }

        .auth-switch-link:hover {
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .auth-split-card {
            grid-template-columns: 1fr;
          }
          .auth-form-col {
            padding: 30px 24px;
          }
        }
      `})]})}function t0({setActivePage:e}){const{startSignUp:t}=gt(),{showToast:n}=ze(),[a,s]=j.useState("Player"),[i,o]=j.useState(""),[l,c]=j.useState(""),[u,f]=j.useState(""),[h,m]=j.useState(""),[v,y]=j.useState(""),[k,N]=j.useState(""),[d,p]=j.useState(!1),[g,w]=j.useState(!1),[z,S]=j.useState(""),[E,B]=j.useState(""),[T,C]=j.useState(""),[O,R]=j.useState(!1),G=Y=>{const W=Y.target.files[0];if(!W)return;if(W.size>1024*1024){N("Oops! The image is too large. Please upload an image smaller than 1 MB"),n("Oops! The image is too large. Please upload an image smaller than 1 MB","error");return}N("");const J=new FileReader;J.onloadend=()=>{y(J.result),n("Profile image uploaded","info")},J.readAsDataURL(W)},Z=Y=>{if(Y.preventDefault(),S(""),B(""),C(""),!i.trim()){n("Please enter your full name","error");return}const W=Hi(u);if(!W.isValid){B(W.message);return}if(u!==h){C("Passwords do not match");return}R(!0);const J=t({name:i,email:l,role:a,avatar:v,password:u});R(!1),J.success?(n("Verification code sent to your email!","success"),e("verify-email"),window.scrollTo(0,0)):J.errorField==="email"?S(J.message):J.errorField==="password"?B(J.message):n(J.message,"error")};return r.jsxs("div",{className:"auth-page-container",children:[r.jsxs("div",{className:"auth-split-card glass-card",children:[r.jsxs("div",{className:"auth-visual-col hide-on-mobile",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=1000&q=80",alt:"Badminton Arena",className:"auth-hero-img"}),r.jsx("div",{className:"auth-visual-overlay",children:r.jsxs("div",{className:"auth-quote-box",children:[r.jsx("span",{className:"quote-badge",children:"🏸 JOIN THE COMMUNITY"}),r.jsx("h3",{className:"quote-heading",children:'"Find nearby games, book courts with friends, and join local tournaments."'}),r.jsx("p",{className:"quote-author",children:"Join 50,000+ players across India on QuickCourt"})]})})]}),r.jsxs("div",{className:"auth-form-col",children:[r.jsxs("div",{className:"auth-form-header",children:[r.jsxs("div",{className:"brand-logo",onClick:()=>e("home"),children:[r.jsx("div",{className:"logo-badge",children:r.jsx("span",{className:"logo-court-icon",children:"⚡"})}),r.jsx("span",{className:"logo-title",children:"QUICKCOURT"})]}),r.jsx("h2",{className:"auth-heading",children:"SIGN UP"}),r.jsx("p",{className:"auth-subtext",children:"Create your player or facility owner account."})]}),r.jsxs("form",{onSubmit:Z,className:"auth-main-form",children:[r.jsxs("div",{className:"profile-pic-uploader flex items-center gap-md",children:[r.jsxs("div",{className:"avatar-preview-box",children:[r.jsx("img",{src:v||"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",alt:"Profile",className:"avatar-img"}),r.jsxs("label",{className:"avatar-upload-badge",title:"Upload Photo",children:[r.jsx(Lu,{size:13,color:"#ffffff"}),r.jsx("input",{type:"file",accept:"image/*",style:{display:"none"},onChange:G})]})]}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:"0.85rem",fontWeight:700,color:"#f8fafc"},children:"Profile Picture (Optional)"}),r.jsx("div",{style:{fontSize:"0.75rem",color:"#94a3b8"},children:"Upload image smaller than 1 MB"}),k&&r.jsxs("div",{className:"form-error",style:{marginTop:4},children:[r.jsx(Ue,{size:13}),r.jsx("span",{children:k})]})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Sign up as"}),r.jsx("div",{className:"form-control-wrapper",children:r.jsxs("select",{className:"form-select",value:a,onChange:Y=>s(Y.target.value),children:[r.jsx("option",{value:"Player",children:"Player (Find & Book Courts)"}),r.jsx("option",{value:"Facility Owner",children:"Facility Owner (List & Manage Venues)"})]})})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Full Name"}),r.jsx("div",{className:"form-control-wrapper",children:r.jsx("input",{type:"text",className:"form-input",placeholder:"e.g. Mitchell Admin",value:i,onChange:Y=>o(Y.target.value),required:!0})})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Email"}),r.jsx("div",{className:"form-control-wrapper",children:r.jsx("input",{type:"email",className:`form-input ${z?"has-error":""}`,placeholder:"name@example.com",value:l,onChange:Y=>{c(Y.target.value),S("")},required:!0})}),z&&r.jsxs("div",{className:"form-error",children:[r.jsx(Ue,{size:14}),r.jsx("span",{children:z})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Password"}),r.jsxs("div",{className:"form-control-wrapper",children:[r.jsx("input",{type:d?"text":"password",className:`form-input ${E?"has-error":""}`,placeholder:"Create a strong password",value:u,onChange:Y=>{f(Y.target.value),B("")},required:!0}),r.jsx("button",{type:"button",className:"input-icon-btn",onClick:()=>p(!d),"aria-label":"Toggle password visibility",children:d?r.jsx(_n,{size:18}):r.jsx(An,{size:18})})]}),E?r.jsxs("div",{className:"form-error",children:[r.jsx(Ue,{size:14}),r.jsx("span",{children:E})]}):r.jsx("span",{className:"form-hint",children:"Use 8–20 characters with at least one uppercase letter, one number, and one special symbol like @ or #"})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Confirm Password"}),r.jsxs("div",{className:"form-control-wrapper",children:[r.jsx("input",{type:g?"text":"password",className:`form-input ${T?"has-error":""}`,placeholder:"Re-enter your password",value:h,onChange:Y=>{m(Y.target.value),C("")},required:!0}),r.jsx("button",{type:"button",className:"input-icon-btn",onClick:()=>w(!g),"aria-label":"Toggle confirm password visibility",children:g?r.jsx(_n,{size:18}):r.jsx(An,{size:18})})]}),T&&r.jsxs("div",{className:"form-error",children:[r.jsx(Ue,{size:14}),r.jsx("span",{children:T})]})]}),r.jsxs("button",{type:"submit",className:"btn btn-primary btn-lg auth-submit-btn",disabled:O,style:{marginTop:12},children:[r.jsx($g,{size:18}),r.jsx("span",{children:O?"Creating Account...":"Sign Up"})]}),r.jsxs("div",{className:"auth-switch-prompt flex items-center justify-center gap-sm",children:[r.jsx("span",{children:"Already have an account?"}),r.jsx("button",{type:"button",className:"auth-switch-link",onClick:()=>{e("login"),window.scrollTo(0,0)},children:"Log in"})]})]})]})]}),r.jsx("style",{children:`
        .profile-pic-uploader {
          background: rgba(15, 23, 42, 0.5);
          border: 1px solid var(--border-subtle);
          padding: 12px 16px;
          border-radius: var(--radius-md);
          margin-bottom: 18px;
        }

        .avatar-preview-box {
          position: relative;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          border: 2px solid var(--primary);
          flex-shrink: 0;
        }

        .avatar-img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
        }

        .avatar-upload-badge {
          position: absolute;
          bottom: -2px;
          right: -2px;
          background: var(--primary);
          width: 22px;
          height: 22px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border: 2px solid var(--bg-secondary);
        }
      `})]})}function r0({setActivePage:e}){const{pendingSignup:t,verifyEmailOtp:n,updatePendingEmail:a}=gt(),{showToast:s}=ze(),[i,o]=j.useState(["","","","","",""]),[l,c]=j.useState(30),[u,f]=j.useState(!1),[h,m]=j.useState(!1),[v,y]=j.useState(""),[k,N]=j.useState(!1),d=j.useRef([]),p=(t==null?void 0:t.email)||"mitchell.player@example.com";j.useEffect(()=>{let T=null;return l>0?T=setInterval(()=>{c(C=>C-1)},1e3):f(!0),()=>clearInterval(T)},[l]);const g=(T,C)=>{var R;if(isNaN(C))return;const O=[...i];O[T]=C.substring(C.length-1),o(O),C&&T<5&&((R=d.current[T+1])==null||R.focus())},w=(T,C)=>{var O;C.key==="Backspace"&&!i[T]&&T>0&&((O=d.current[T-1])==null||O.focus())},z=T=>{var O;T.preventDefault();const C=T.clipboardData.getData("text").trim();if(/^\d{6}$/.test(C)){const R=C.split("");o(R),(O=d.current[5])==null||O.focus(),s("Pasted 6-digit code","info")}},S=T=>{T.preventDefault();const C=i.join("");if(C.length!==6){s("Please enter all 6 digits of the code","error");return}N(!0);const O=n(C);N(!1),O.success?(s("Email verified successfully! Welcome to QuickCourt.","success"),e("home"),window.scrollTo(0,0)):s(O.message,"error")},E=()=>{u&&(c(30),f(!1),o(["","","","","",""]),s(`New verification code sent to ${p}! (Demo Code: 123456)`,"success"))},B=T=>{if(T.preventDefault(),!v||!v.includes("@")){s("Please enter a valid email address","error");return}const C=a(v);C.success?(s(`Email updated to ${v}. New code sent!`,"success"),m(!1),c(30),f(!1)):s(C.message,"error")};return r.jsxs("div",{className:"auth-page-container",children:[r.jsxs("div",{className:"verify-card glass-card",children:[r.jsxs("div",{className:"verify-header-logo flex-col items-center",children:[r.jsxs("div",{className:"brand-logo",onClick:()=>e("home"),children:[r.jsx("div",{className:"logo-badge",children:r.jsx("span",{className:"logo-court-icon",children:"⚡"})}),r.jsx("span",{className:"logo-title",children:"QUICKCOURT"})]}),r.jsx("h2",{className:"verify-heading",children:"🔐 VERIFY YOUR EMAIL"}),r.jsxs("p",{className:"verify-desc",children:["We’ve sent a code to your email: ",r.jsx("br",{}),r.jsx("strong",{className:"user-email-highlight",children:p})]}),r.jsxs("div",{className:"demo-hint-box",children:["💡 Quick Demo Tip: Enter ",r.jsx("strong",{children:"123456"})," or any 6 digits to verify instantly!"]})]}),r.jsxs("form",{onSubmit:S,className:"otp-form-box flex-col items-center",children:[r.jsx("div",{className:"otp-inputs-grid",onPaste:z,children:i.map((T,C)=>r.jsx("input",{type:"text",maxLength:1,className:`otp-digit-input ${T?"filled":""}`,value:T,ref:O=>d.current[C]=O,onChange:O=>g(C,O.target.value),onKeyDown:O=>w(C,O),autoFocus:C===0},C))}),r.jsxs("button",{type:"submit",className:"btn btn-primary btn-lg verify-cta-btn",disabled:k||i.join("").length<6,children:[r.jsx("span",{children:k?"Verifying...":"Verify & Continue"}),r.jsx($n,{size:18})]}),r.jsxs("div",{className:"verify-footer-action flex items-center gap-sm",children:[r.jsx("span",{style:{color:"#94a3b8",fontSize:"0.88rem"},children:"Didn’t receive the code?"}),u?r.jsx("button",{type:"button",className:"resend-action-btn",onClick:E,children:"Resend OTP"}):r.jsxs("span",{className:"timer-text",children:["Resend in ",l,"s"]})]}),r.jsxs("div",{className:"verify-footer-action flex items-center gap-sm",style:{marginTop:8},children:[r.jsx("span",{style:{color:"#94a3b8",fontSize:"0.88rem"},children:"Wrong email?"}),r.jsx("button",{type:"button",className:"edit-email-action-btn",onClick:()=>{y(p),m(!0)},children:"Edit Email"})]})]})]}),r.jsx(Pt,{isOpen:h,onClose:()=>m(!1),title:"Edit Email Address",children:r.jsxs("form",{onSubmit:B,children:[r.jsx("p",{style:{fontSize:"0.88rem",color:"#94a3b8",marginBottom:18},children:"Change your email address. We will re-send a fresh 6-digit OTP code immediately."}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"New Email Address"}),r.jsx("input",{type:"email",className:"form-input",value:v,onChange:T=>y(T.target.value),required:!0,autoFocus:!0})]}),r.jsxs("div",{className:"flex gap-sm",style:{marginTop:20},children:[r.jsx("button",{type:"button",className:"btn btn-secondary",style:{flex:1},onClick:()=>m(!1),children:"Cancel"}),r.jsx("button",{type:"submit",className:"btn btn-primary",style:{flex:1},children:"Update & Resend Code"})]})]})}),r.jsx("style",{children:`
        .verify-card {
          width: 100%;
          max-width: 480px;
          padding: 44px 36px;
          border-radius: var(--radius-lg);
          text-align: center;
        }

        .verify-header-logo {
          margin-bottom: 28px;
        }

        .verify-heading {
          font-size: 1.6rem;
          font-weight: 900;
          color: var(--text-main);
          letter-spacing: 0.04em;
          margin: 16px 0 8px;
        }

        .verify-desc {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .user-email-highlight {
          color: #34d399;
          font-size: 1rem;
        }

        .demo-hint-box {
          background: rgba(16, 185, 129, 0.1);
          border: 1px dashed rgba(16, 185, 129, 0.35);
          padding: 8px 12px;
          border-radius: var(--radius-md);
          font-size: 0.78rem;
          color: #a7f3d0;
          margin-top: 14px;
        }

        .otp-inputs-grid {
          display: flex;
          gap: 10px;
          justify-content: center;
          margin-bottom: 28px;
        }

        .otp-digit-input {
          width: 52px;
          height: 60px;
          border-radius: var(--radius-md);
          background: rgba(15, 23, 42, 0.8);
          border: 2px solid var(--border-subtle);
          color: #f8fafc;
          font-family: var(--font-heading);
          font-size: 1.6rem;
          font-weight: 800;
          text-align: center;
          transition: all 0.2s ease;
        }

        .otp-digit-input:focus {
          border-color: var(--primary);
          background: rgba(15, 23, 42, 0.95);
          box-shadow: 0 0 14px rgba(16, 185, 129, 0.3);
          transform: scale(1.05);
        }

        .otp-digit-input.filled {
          border-color: rgba(16, 185, 129, 0.5);
        }

        .verify-cta-btn {
          width: 100%;
          margin-bottom: 24px;
        }

        .resend-action-btn, .edit-email-action-btn {
          font-weight: 700;
          color: var(--primary);
          font-size: 0.88rem;
        }

        .resend-action-btn:hover, .edit-email-action-btn:hover {
          text-decoration: underline;
        }

        .timer-text {
          font-size: 0.82rem;
          color: var(--text-dim);
          font-weight: 600;
        }

        @media (max-width: 480px) {
          .otp-digit-input {
            width: 42px;
            height: 50px;
            font-size: 1.3rem;
          }
          .verify-card {
            padding: 30px 20px;
          }
        }
      `})]})}function gc({searchTerm:e,setSearchTerm:t,selectedSport:n,setSelectedSport:a,maxPrice:s,setMaxPrice:i,venueType:o,setVenueType:l,minRating:c,setMinRating:u,onResetFilters:f}){return r.jsxs("aside",{className:"filters-sidebar glass-card",children:[r.jsxs("div",{className:"filters-header flex items-center justify-between",children:[r.jsxs("div",{className:"flex items-center gap-sm",children:[r.jsx(Bh,{size:18,color:"#10B981"}),r.jsx("h3",{className:"filters-heading",children:"Filter Venues"})]}),r.jsxs("button",{onClick:f,className:"reset-btn flex items-center gap-sm",title:"Reset all filters",children:[r.jsx(pg,{size:13}),r.jsx("span",{children:"Reset"})]})]}),r.jsxs("div",{className:"filter-section",children:[r.jsx("label",{className:"filter-label",children:"Search by venue name"}),r.jsxs("div",{className:"search-input-wrapper",children:[r.jsx(hg,{size:16,className:"search-icon"}),r.jsx("input",{type:"text",className:"filter-search-input",placeholder:"e.g. SBR Badminton...",value:e,onChange:h=>t(h.target.value)})]})]}),r.jsxs("div",{className:"filter-section",children:[r.jsx("label",{className:"filter-label",children:"Filter by sport type"}),r.jsx("select",{className:"filter-select",value:n,onChange:h=>a(h.target.value),children:_u.map(h=>r.jsxs("option",{value:h.id,children:[h.icon," ",h.name]},h.id))})]}),r.jsxs("div",{className:"filter-section",children:[r.jsxs("div",{className:"flex justify-between items-center",style:{marginBottom:8},children:[r.jsx("label",{className:"filter-label",style:{margin:0},children:"Price range (per hour)"}),r.jsxs("span",{className:"price-tag-value",children:["Up to ₹",s]})]}),r.jsx("input",{type:"range",min:"100",max:"2000",step:"50",className:"price-slider",value:s,onChange:h=>i(Number(h.target.value))}),r.jsxs("div",{className:"flex justify-between",style:{fontSize:"0.75rem",color:"#64748b",marginTop:4},children:[r.jsx("span",{children:"₹100/hr"}),r.jsx("span",{children:"₹2000/hr"})]})]}),r.jsxs("div",{className:"filter-section",children:[r.jsx("label",{className:"filter-label",children:"Choose Venue Type"}),r.jsxs("div",{className:"venue-type-options flex-col gap-sm",children:[r.jsxs("label",{className:"radio-label",children:[r.jsx("input",{type:"radio",name:"venueType",checked:o==="all",onChange:()=>l("all")}),r.jsx("span",{children:"All Types"})]}),r.jsxs("label",{className:"radio-label",children:[r.jsx("input",{type:"radio",name:"venueType",checked:o==="indoor",onChange:()=>l("indoor")}),r.jsx("span",{children:"🏢 Indoor"})]}),r.jsxs("label",{className:"radio-label",children:[r.jsx("input",{type:"radio",name:"venueType",checked:o==="outdoor",onChange:()=>l("outdoor")}),r.jsx("span",{children:"🌤️ Outdoor"})]})]})]}),r.jsxs("div",{className:"filter-section",children:[r.jsx("label",{className:"filter-label",children:"⭐ Rating"}),r.jsxs("div",{className:"rating-options flex-col gap-sm",children:[[4,3,2,1].map(h=>r.jsxs("label",{className:"checkbox-label",children:[r.jsx("input",{type:"radio",name:"minRating",checked:c===h,onChange:()=>u(c===h?0:h)}),r.jsxs("span",{className:"flex items-center gap-sm",children:[r.jsx("span",{className:"flex",children:[...Array(h)].map((m,v)=>r.jsx(zt,{size:13,fill:"#FBBF24",color:"#FBBF24"},v))}),r.jsxs("span",{children:[h," stars & up"]})]})]},h)),r.jsxs("label",{className:"checkbox-label",children:[r.jsx("input",{type:"radio",name:"minRating",checked:c===0,onChange:()=>u(0)}),r.jsx("span",{children:"Any Rating"})]})]})]}),r.jsx("style",{children:`
        .filters-sidebar {
          padding: 24px;
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          gap: 22px;
          position: sticky;
          top: 96px;
        }

        .filters-heading {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .reset-btn {
          font-size: 0.78rem;
          color: var(--text-dim);
          font-weight: 600;
          padding: 4px 8px;
          border-radius: var(--radius-sm);
        }

        .reset-btn:hover {
          color: #ef4444;
          background: rgba(239, 68, 68, 0.1);
        }

        .filter-section {
          display: flex;
          flex-direction: column;
          border-bottom: 1px solid var(--border-subtle);
          padding-bottom: 18px;
        }

        .filter-section:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .filter-label {
          font-size: 0.86rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 10px;
        }

        .search-input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .search-icon {
          position: absolute;
          left: 12px;
          color: var(--text-dim);
        }

        .filter-search-input {
          width: 100%;
          padding: 10px 12px 10px 36px;
          background: rgba(15, 23, 42, 0.8);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          color: var(--text-main);
          font-size: 0.88rem;
        }

        .filter-search-input:focus {
          border-color: var(--primary);
        }

        .filter-select {
          width: 100%;
          padding: 10px 12px;
          background: rgba(15, 23, 42, 0.8);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          color: var(--text-main);
          font-size: 0.88rem;
          font-weight: 500;
        }

        .price-tag-value {
          font-size: 0.84rem;
          font-weight: 700;
          color: var(--primary);
          background: var(--primary-light);
          padding: 2px 8px;
          border-radius: var(--radius-full);
        }

        .price-slider {
          width: 100%;
          height: 6px;
          border-radius: 4px;
          background: #334155;
          outline: none;
          accent-color: var(--primary);
          cursor: pointer;
        }

        .radio-label, .checkbox-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          color: var(--text-muted);
          cursor: pointer;
          user-select: none;
          transition: color 0.15s ease;
        }

        .radio-label:hover, .checkbox-label:hover {
          color: var(--text-main);
        }

        .radio-label input, .checkbox-label input {
          accent-color: var(--primary);
          cursor: pointer;
        }
      `})]})}function n0({venues:e=[],selectedVenue:t=null,onSelectVenue:n,height:a="520px"}){var v,y,k,N;const{currentCityObj:s,userLocation:i,detectLocation:o,isDetectingLocation:l}=qr(),[c,u]=j.useState(t||e[0]||null),[f,h]=j.useState(13);j.useEffect(()=>{t?u(t):e.length>0&&!c&&u(e[0])},[t,e]),(v=c==null?void 0:c.coordinates)!=null&&v.lat||s!=null&&s.lat,(y=c==null?void 0:c.coordinates)!=null&&y.lng||s!=null&&s.lng;const m=d=>{if(!(d!=null&&d.coordinates))return;const p=`https://www.google.com/maps/dir/?api=1&destination=${d.coordinates.lat},${d.coordinates.lng}&destination_place_id=${encodeURIComponent(d.name)}`;window.open(p,"_blank")};return r.jsxs("div",{className:"google-venue-map-container glass-card",style:{height:a},children:[r.jsxs("div",{className:"map-action-bar flex items-center justify-between",children:[r.jsxs("div",{className:"flex items-center gap-sm",children:[r.jsx(ct,{size:16,color:"#10B981"}),r.jsxs("span",{className:"map-city-heading",children:["Live Sports Map – ",s.name,", ",s.state]}),r.jsxs("span",{className:"map-venues-count",children:["(",e.length," Arenas)"]})]}),r.jsx("div",{className:"flex items-center gap-sm",children:r.jsxs("button",{type:"button",className:"btn btn-secondary btn-sm flex items-center gap-sm",onClick:()=>o(),disabled:l,children:[r.jsx(qu,{size:14,color:"#38bdf8"}),r.jsx("span",{children:l?"Locating...":"My Location"})]})})]}),r.jsxs("div",{className:"map-visual-stage",children:[r.jsxs("div",{className:"interactive-map-canvas",children:[r.jsx("div",{className:"map-grid-overlay"}),i&&r.jsxs("div",{className:"user-gps-pulse-marker",style:{top:"55%",left:"42%"},title:"You are here",children:[r.jsx("div",{className:"pulse-ring"}),r.jsx("div",{className:"user-dot"}),r.jsx("div",{className:"user-marker-label",children:"You are here"})]}),e.map((d,p)=>{const g=(c==null?void 0:c.id)===d.id,w=50+(p%3===0?-25:p%3===1?18:32)+p*4,z=45+(p%2===0?-18:22)+p*3;return r.jsxs("div",{className:`venue-map-pin ${g?"selected":""}`,style:{top:`${Math.min(85,Math.max(15,z))}%`,left:`${Math.min(85,Math.max(15,w))}%`},onClick:()=>u(d),children:[r.jsxs("div",{className:"pin-badge flex items-center gap-sm",children:[r.jsx("span",{className:"pin-icon",children:d.sportIcon||"🏸"}),r.jsxs("span",{className:"pin-price",children:["₹",d.pricePerHour]})]}),r.jsx("div",{className:"pin-triangle"})]},d.id)}),r.jsxs("div",{className:"map-zoom-controls flex-col",children:[r.jsx("button",{className:"zoom-btn",onClick:()=>h(d=>Math.min(18,d+1)),children:"+"}),r.jsx("button",{className:"zoom-btn",onClick:()=>h(d=>Math.max(10,d-1)),children:"−"})]}),r.jsxs("div",{className:"map-watermark flex items-center gap-sm",children:[r.jsx(bh,{size:12,color:"#94a3b8"}),r.jsx("span",{children:"Google Maps Platform GPS Grounded"})]})]}),c&&r.jsxs("div",{className:"floating-venue-info-card glass-card",children:[r.jsxs("div",{className:"flex items-start justify-between gap-md",children:[r.jsxs("div",{className:"flex items-center gap-md",children:[r.jsx("img",{src:((k=c.images)==null?void 0:k[0])||"https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=150&q=80",alt:"",className:"venue-card-thumb",onError:d=>{d.target.src="https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=150&q=80"}}),r.jsxs("div",{children:[r.jsxs("div",{className:"flex items-center gap-sm",children:[r.jsxs("span",{className:"floating-sport-tag",children:[c.sportIcon," ",c.sportName]}),r.jsxs("span",{className:"rating-pill flex items-center gap-sm",children:[r.jsx(zt,{size:11,fill:"#FBBF24",color:"#FBBF24"}),r.jsx("span",{children:(N=c.rating)==null?void 0:N.toFixed(1)})]})]}),r.jsx("h4",{className:"floating-venue-title",children:c.name}),r.jsxs("p",{className:"floating-venue-area",children:["📍 ",c.area]})]})]}),r.jsxs("div",{className:"floating-venue-rate text-right",children:[r.jsxs("div",{className:"rate-num",children:["₹",c.pricePerHour]}),r.jsx("div",{className:"rate-label",children:"per hour"})]})]}),r.jsxs("div",{className:"floating-card-actions flex items-center gap-sm",style:{marginTop:12},children:[r.jsxs("button",{type:"button",className:"btn btn-secondary btn-sm flex items-center gap-sm",style:{flex:1},onClick:()=>m(c),children:[r.jsx(ng,{size:13,color:"#38bdf8"}),r.jsx("span",{children:"Get Directions"}),r.jsx($u,{size:11})]}),r.jsxs("button",{type:"button",className:"btn btn-primary btn-sm flex items-center gap-sm",style:{flex:1.2},onClick:()=>n==null?void 0:n(c.id),children:[r.jsx("span",{children:"Book Court Now"}),r.jsx($n,{size:14})]})]})]})]}),r.jsx("style",{children:`
        .google-venue-map-container {
          position: relative;
          display: flex;
          flex-direction: column;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: #0b1329;
        }

        .map-action-bar {
          padding: 12px 18px;
          background: rgba(15, 23, 42, 0.9);
          border-bottom: 1px solid var(--border-subtle);
          z-index: 10;
        }

        .map-city-heading {
          font-size: 0.88rem;
          font-weight: 700;
          color: #f8fafc;
        }

        .map-venues-count {
          font-size: 0.78rem;
          color: var(--primary);
          font-weight: 600;
        }

        .map-visual-stage {
          position: relative;
          flex: 1;
          overflow: hidden;
        }

        .interactive-map-canvas {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.08) 0%, transparent 60%),
            linear-gradient(135deg, #090e1a 0%, #0f172a 100%);
          overflow: hidden;
        }

        .map-grid-overlay {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(148, 163, 184, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148, 163, 184, 0.06) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        .venue-map-pin {
          position: absolute;
          transform: translate(-50%, -100%);
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
          z-index: 20;
        }

        .venue-map-pin:hover {
          transform: translate(-50%, -115%) scale(1.1);
          z-index: 30;
        }

        .venue-map-pin.selected {
          transform: translate(-50%, -120%) scale(1.15);
          z-index: 40;
        }

        .pin-badge {
          background: #0f172a;
          border: 2px solid var(--primary);
          padding: 4px 8px;
          border-radius: var(--radius-full);
          box-shadow: 0 4px 14px rgba(16, 185, 129, 0.4);
        }

        .venue-map-pin.selected .pin-badge {
          background: var(--primary);
          color: #ffffff;
          border-color: #ffffff;
          box-shadow: 0 0 20px rgba(16, 185, 129, 0.8);
        }

        .venue-map-pin.selected .pin-price {
          color: #ffffff;
        }

        .pin-price {
          font-size: 0.72rem;
          font-weight: 800;
          color: #34d399;
        }

        .pin-triangle {
          width: 0;
          height: 0;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 6px solid var(--primary);
          margin: 0 auto;
        }

        .user-gps-pulse-marker {
          position: absolute;
          transform: translate(-50%, -50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 15;
        }

        .user-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #38bdf8;
          border: 2px solid #ffffff;
          box-shadow: 0 0 12px #38bdf8;
        }

        .pulse-ring {
          position: absolute;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 2px solid rgba(56, 189, 248, 0.6);
          animation: pulseAnim 2s infinite;
        }

        .user-marker-label {
          margin-top: 4px;
          background: rgba(15, 23, 42, 0.85);
          color: #38bdf8;
          font-size: 0.68rem;
          font-weight: 700;
          padding: 2px 6px;
          border-radius: 4px;
          white-space: nowrap;
        }

        @keyframes pulseAnim {
          0% { transform: scale(0.5); opacity: 1; }
          100% { transform: scale(1.8); opacity: 0; }
        }

        .map-zoom-controls {
          position: absolute;
          right: 16px;
          top: 16px;
          gap: 4px;
          z-index: 25;
        }

        .zoom-btn {
          width: 32px;
          height: 32px;
          border-radius: var(--radius-sm);
          background: rgba(15, 23, 42, 0.85);
          border: 1px solid var(--border-subtle);
          color: #ffffff;
          font-weight: 800;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .zoom-btn:hover {
          background: var(--bg-card-hover);
          color: var(--primary);
        }

        .map-watermark {
          position: absolute;
          bottom: 12px;
          left: 16px;
          font-size: 0.7rem;
          color: var(--text-dim);
          background: rgba(11, 17, 32, 0.7);
          padding: 4px 8px;
          border-radius: 4px;
        }

        .floating-venue-info-card {
          position: absolute;
          bottom: 16px;
          left: 16px;
          right: 16px;
          max-width: 480px;
          margin: 0 auto;
          padding: 16px 20px;
          border-radius: var(--radius-md);
          background: rgba(15, 23, 42, 0.95);
          backdrop-filter: blur(16px);
          z-index: 50;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(16, 185, 129, 0.4);
          animation: slideUp 0.2s ease forwards;
        }

        .venue-card-thumb {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-sm);
          object-fit: cover;
          border: 1px solid var(--border-subtle);
        }

        .floating-sport-tag {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--primary);
        }

        .floating-venue-title {
          font-size: 1rem;
          font-weight: 800;
          color: #f8fafc;
          margin: 2px 0;
        }

        .floating-venue-area {
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .floating-venue-rate .rate-num {
          font-family: var(--font-heading);
          font-size: 1.2rem;
          font-weight: 900;
          color: #34d399;
        }

        .floating-venue-rate .rate-label {
          font-size: 0.68rem;
          color: var(--text-dim);
        }
      `})]})}function a0({onSelectVenue:e}){var Y;const{venues:t}=hr(),{selectedCity:n,currentCityObj:a,userLocation:s,detectLocation:i,isDetectingLocation:o,getDistanceToVenue:l}=qr(),[c,u]=j.useState("grid"),[f,h]=j.useState(""),[m,v]=j.useState("all"),[y,k]=j.useState(2e3),[N,d]=j.useState("all"),[p,g]=j.useState(0),[w,z]=j.useState(1),S=6,[E,B]=j.useState(!1),T=()=>{h(""),v("all"),k(2e3),d("all"),g(0),z(1)},C=j.useMemo(()=>t.filter(W=>{const J=W.city===n,A=!f||W.name.toLowerCase().includes(f.toLowerCase())||W.area.toLowerCase().includes(f.toLowerCase()),$=m==="all"||W.sport===m,b=W.pricePerHour<=y,x=N==="all"||W.venueType===N,M=p===0||W.rating>=p;return(J||!n)&&A&&$&&b&&x&&M}),[t,n,f,m,y,N,p]),O=j.useMemo(()=>C.length>0?C:t.filter(W=>{const J=!f||W.name.toLowerCase().includes(f.toLowerCase())||W.area.toLowerCase().includes(f.toLowerCase()),A=m==="all"||W.sport===m,$=W.pricePerHour<=y,b=N==="all"||W.venueType===N,x=p===0||W.rating>=p;return J&&A&&$&&b&&x}),[C,t,f,m,y,N,p]),R=Math.ceil(O.length/S)||1,G=O.slice((w-1)*S,w*S),Z=W=>{z(W),window.scrollTo({top:120,behavior:"smooth"})};return r.jsxs("div",{className:"venues-page-wrapper",children:[r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"venues-page-header flex items-start justify-between",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"flex items-center gap-sm",style:{marginBottom:6},children:[r.jsx(ct,{size:16,color:"#10B981"}),r.jsxs("span",{className:"city-breadcrumb-tag",children:["SPORTS IN ",a.name.toUpperCase(),", ",(Y=a.state)==null?void 0:Y.toUpperCase()]})]}),r.jsxs("h1",{className:"venues-header-title",children:["Sports Venues in ",a.name,": Discover & Book Courts"]}),r.jsxs("p",{className:"venues-header-sub",children:["Showing ",O.length," available courts and verified turf facilities"]})]}),r.jsxs("div",{className:"view-mode-toggle-group flex items-center gap-sm hide-on-mobile",children:[r.jsxs("button",{type:"button",className:`view-mode-btn flex items-center gap-sm ${c==="grid"?"active":""}`,onClick:()=>u("grid"),children:[r.jsx(cc,{size:15}),r.jsx("span",{children:"Grid Cards"})]}),r.jsxs("button",{type:"button",className:`view-mode-btn flex items-center gap-sm ${c==="map"?"active":""}`,onClick:()=>u("map"),children:[r.jsx(dc,{size:15}),r.jsx("span",{children:"Google Maps View"})]})]})]}),s&&r.jsxs("div",{className:"live-gps-info-bar glass-card flex items-center justify-between",children:[r.jsxs("div",{className:"flex items-center gap-sm",children:[r.jsx("span",{className:"gps-live-dot"}),r.jsxs("span",{style:{fontSize:"0.85rem",color:"#f8fafc"},children:["Your GPS Location: ",r.jsx("strong",{children:s.cityName})," (±",Math.round(s.distanceKm)," km from city center)"]})]}),r.jsxs("button",{type:"button",className:"refresh-gps-btn flex items-center gap-sm",onClick:()=>i(),disabled:o,children:[r.jsx(qu,{size:13,color:"#38bdf8"}),r.jsx("span",{children:o?"Updating...":"Update GPS"})]})]}),r.jsxs("div",{className:"mobile-view-toggle-bar show-on-mobile flex gap-sm",style:{marginBottom:16},children:[r.jsxs("button",{className:"btn btn-secondary flex items-center justify-between",style:{flex:1},onClick:()=>B(!0),children:[r.jsxs("span",{className:"flex items-center gap-sm",children:[r.jsx(uc,{size:15,color:"#10B981"}),r.jsx("span",{children:"Filters"})]}),r.jsx("span",{className:"filter-count-badge",children:(m!=="all"?1:0)+(N!=="all"?1:0)+(p>0?1:0)+(f?1:0)})]}),r.jsxs("button",{className:`btn btn-secondary flex items-center gap-sm ${c==="map"?"btn-primary":""}`,onClick:()=>u(c==="grid"?"map":"grid"),children:[c==="grid"?r.jsx(dc,{size:16}):r.jsx(cc,{size:16}),r.jsx("span",{children:c==="grid"?"Map View":"Grid View"})]})]}),c==="map"?r.jsx("div",{className:"map-view-fullscreen-container",style:{marginTop:12},children:r.jsx(n0,{venues:O,onSelectVenue:W=>e(W),height:"600px"})}):r.jsxs("div",{className:"venues-layout-grid",children:[r.jsx("div",{className:"desktop-filters-col hide-on-mobile",children:r.jsx(gc,{searchTerm:f,setSearchTerm:h,selectedSport:m,setSelectedSport:v,maxPrice:y,setMaxPrice:k,venueType:N,setVenueType:d,minRating:p,setMinRating:g,onResetFilters:T})}),r.jsx("div",{className:"venues-grid-col",children:G.length===0?r.jsxs("div",{className:"no-venues-box glass-card flex-col items-center justify-center",children:[r.jsx(He,{size:48,color:"#64748B"}),r.jsx("h3",{style:{fontSize:"1.25rem",marginTop:16,color:"#f8fafc"},children:"No matching sports venues found"}),r.jsxs("p",{style:{fontSize:"0.9rem",color:"#94a3b8",margin:"8px 0 20px",maxWidth:"420px",textAlign:"center"},children:["We couldn't find any courts matching your active filter criteria in ",a.name,". Try expanding your search or price range."]}),r.jsx("button",{className:"btn btn-primary",onClick:T,children:"Clear All Filters"})]}):r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"venues-cards-grid-main",children:G.map(W=>r.jsx(tp,{venue:W,onViewDetails:J=>e(J)},W.id))}),R>1&&r.jsxs("div",{className:"pagination-bar flex items-center justify-center gap-sm",children:[r.jsx("button",{className:"pagination-arrow-btn",disabled:w===1,onClick:()=>Z(w-1),"aria-label":"Previous page",children:r.jsx(Ou,{size:18})}),[...Array(R)].map((W,J)=>{const A=J+1;return r.jsx("button",{className:`pagination-num-btn ${w===A?"active":""}`,onClick:()=>Z(A),children:A},A)}),r.jsx("button",{className:"pagination-arrow-btn",disabled:w===R,onClick:()=>Z(w+1),"aria-label":"Next page",children:r.jsx(Wo,{size:18})})]})]})})]})]}),E&&r.jsx("div",{className:"mobile-drawer-overlay",onClick:()=>B(!1),children:r.jsxs("div",{className:"mobile-drawer-content filters-drawer",onClick:W=>W.stopPropagation(),children:[r.jsxs("div",{className:"drawer-header flex items-center justify-between",children:[r.jsxs("div",{className:"flex items-center gap-sm",children:[r.jsx(uc,{size:18,color:"#10B981"}),r.jsx("h3",{style:{fontSize:"1.1rem",fontWeight:700},children:"Filter Venues"})]}),r.jsx("button",{onClick:()=>B(!1),className:"modal-close",children:r.jsx(Fn,{size:20})})]}),r.jsx("div",{style:{flex:1,overflowY:"auto",paddingRight:4},children:r.jsx(gc,{searchTerm:f,setSearchTerm:h,selectedSport:m,setSelectedSport:v,maxPrice:y,setMaxPrice:k,venueType:N,setVenueType:d,minRating:p,setMinRating:g,onResetFilters:T})}),r.jsxs("button",{className:"btn btn-primary",style:{width:"100%",marginTop:16},onClick:()=>B(!1),children:["Show ",O.length," Results"]})]})}),r.jsx("style",{children:`
        .venues-page-wrapper {
          padding: 40px 0 60px;
        }

        .venues-page-header {
          margin-bottom: 24px;
        }

        .city-breadcrumb-tag {
          font-size: 0.78rem;
          font-weight: 800;
          color: #10B981;
          letter-spacing: 0.08em;
        }

        .venues-header-title {
          font-size: 2.2rem;
          font-weight: 900;
          color: var(--text-main);
          letter-spacing: -0.02em;
          margin-bottom: 6px;
        }

        .venues-header-sub {
          font-size: 0.95rem;
          color: var(--text-muted);
        }

        .view-mode-toggle-group {
          background: rgba(15, 23, 42, 0.8);
          border: 1px solid var(--border-subtle);
          padding: 4px;
          border-radius: var(--radius-md);
        }

        .view-mode-btn {
          padding: 8px 14px;
          border-radius: var(--radius-sm);
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-muted);
          transition: all 0.2s ease;
        }

        .view-mode-btn.active {
          background: var(--primary);
          color: #ffffff;
          box-shadow: 0 2px 10px rgba(16, 185, 129, 0.4);
        }

        .live-gps-info-bar {
          padding: 10px 18px;
          border-radius: var(--radius-md);
          margin-bottom: 24px;
          background: rgba(56, 189, 248, 0.08);
          border: 1px solid rgba(56, 189, 248, 0.25);
        }

        .gps-live-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #38bdf8;
          box-shadow: 0 0 8px #38bdf8;
          display: inline-block;
        }

        .refresh-gps-btn {
          font-size: 0.78rem;
          font-weight: 700;
          color: #38bdf8;
        }

        .venues-layout-grid {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 32px;
          align-items: start;
        }

        .venues-cards-grid-main {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 24px;
        }

        .no-venues-box {
          padding: 60px 20px;
          border-radius: var(--radius-lg);
        }

        .pagination-bar {
          margin-top: 40px;
        }

        .pagination-arrow-btn, .pagination-num-btn {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-md);
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid var(--border-subtle);
          color: var(--text-main);
          font-weight: 700;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .pagination-arrow-btn:hover:not(:disabled), .pagination-num-btn:hover {
          background: var(--bg-card-hover);
          border-color: var(--primary);
          color: var(--primary);
        }

        .pagination-num-btn.active {
          background: var(--primary);
          color: #ffffff;
          border-color: var(--primary);
          box-shadow: 0 4px 14px rgba(16, 185, 129, 0.4);
        }

        .pagination-arrow-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .mobile-filter-trigger-bar {
          margin-bottom: 20px;
        }

        .filter-count-badge {
          background: var(--primary);
          color: #ffffff;
          padding: 2px 8px;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 700;
        }

        .filters-drawer {
          width: 85%;
          max-width: 360px;
        }

        @media (max-width: 900px) {
          .venues-layout-grid {
            grid-template-columns: 1fr;
          }
          .venues-header-title {
            font-size: 1.7rem;
          }
        }
      `})]})}function s0({images:e,venueName:t}){const[n,a]=j.useState(0),s=()=>{a(o=>o===0?e.length-1:o-1)},i=()=>{a(o=>o===e.length-1?0:o+1)};return r.jsxs("div",{className:"media-gallery-wrapper",children:[r.jsxs("div",{className:"gallery-main-stage",children:[r.jsx("img",{src:e[n],alt:`${t} preview ${n+1}`,className:"gallery-active-img",onError:o=>{o.target.src="https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=1200&q=80"}}),e.length>1&&r.jsxs(r.Fragment,{children:[r.jsx("button",{className:"gallery-nav-arrow arrow-left",onClick:s,"aria-label":"Previous image",children:r.jsx(Ou,{size:24})}),r.jsx("button",{className:"gallery-nav-arrow arrow-right",onClick:i,"aria-label":"Next image",children:r.jsx(Wo,{size:24})})]}),r.jsxs("div",{className:"gallery-badge-counter",children:[n+1," / ",e.length]})]}),e.length>1&&r.jsx("div",{className:"gallery-thumbnails-row flex gap-sm",children:e.map((o,l)=>r.jsx("button",{className:`thumbnail-btn ${l===n?"active":""}`,onClick:()=>a(l),children:r.jsx("img",{src:o,alt:"",className:"thumb-img"})},l))}),r.jsx("style",{children:`
        .media-gallery-wrapper {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .gallery-main-stage {
          position: relative;
          width: 100%;
          height: 380px;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: #1e293b;
          border: 1px solid var(--border-subtle);
        }

        .gallery-active-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: opacity 0.3s ease;
        }

        .gallery-nav-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(15, 23, 42, 0.75);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .gallery-nav-arrow:hover {
          background: rgba(16, 185, 129, 0.85);
          transform: translateY(-50%) scale(1.08);
        }

        .arrow-left { left: 16px; }
        .arrow-right { right: 16px; }

        .gallery-badge-counter {
          position: absolute;
          bottom: 14px;
          right: 14px;
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(6px);
          padding: 4px 10px;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-weight: 600;
          color: #f8fafc;
          border: 1px solid var(--border-subtle);
        }

        .gallery-thumbnails-row {
          overflow-x: auto;
          padding-bottom: 4px;
        }

        .thumbnail-btn {
          width: 80px;
          height: 56px;
          border-radius: var(--radius-sm);
          overflow: hidden;
          border: 2px solid transparent;
          opacity: 0.6;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        .thumbnail-btn:hover {
          opacity: 0.9;
        }

        .thumbnail-btn.active {
          border-color: var(--primary);
          opacity: 1;
          transform: scale(1.04);
        }

        .thumb-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media (max-width: 768px) {
          .gallery-main-stage {
            height: 260px;
          }
        }
      `})]})}function i0({venue:e,onBookNow:t}){var i,o;const{getDistanceToVenue:n}=qr(),a=n(e),s=`https://www.google.com/maps/dir/?api=1&destination=${((i=e.coordinates)==null?void 0:i.lat)||23.0225},${((o=e.coordinates)==null?void 0:o.lng)||72.5714}&destination_place_id=${encodeURIComponent(e.name)}`;return r.jsxs("div",{className:"action-sidebar-card glass-card",children:[r.jsxs("div",{className:"cta-price-header",children:[r.jsxs("div",{className:"cta-price-tag",children:[r.jsx("span",{className:"cta-currency",children:"₹"}),r.jsx("span",{className:"cta-price-val",children:e.pricePerHour}),r.jsx("span",{className:"cta-price-unit",children:"/ hour"})]}),r.jsxs("div",{className:"instant-badge flex items-center gap-sm",children:[r.jsx(fr,{size:13,color:"#10B981"}),r.jsx("span",{children:"Instant Slots"})]})]}),r.jsxs("button",{className:"btn btn-primary btn-lg book-venue-main-btn",onClick:t,children:[r.jsx(He,{size:18}),r.jsx("span",{children:"🟩 Book This Venue"})]}),r.jsx("div",{className:"divider-line"}),r.jsxs("div",{className:"info-block",children:[r.jsxs("div",{className:"info-block-header flex items-center gap-sm",children:[r.jsx(Kt,{size:16,color:"#06B6D4"}),r.jsx("h4",{className:"info-block-title",children:"🕒 Operating Hours"})]}),r.jsxs("div",{className:"info-block-content",children:[r.jsx("div",{className:"hours-highlight",children:e.operatingHours||"7:00 AM - 11:00 PM"}),r.jsx("span",{className:"open-days-note",children:"Monday - Sunday (7 Days Open)"})]})]}),r.jsx("div",{className:"divider-line"}),r.jsxs("div",{className:"info-block",children:[r.jsxs("div",{className:"info-block-header flex items-center justify-between",children:[r.jsxs("div",{className:"flex items-center gap-sm",children:[r.jsx(ct,{size:16,color:"#F59E0B"}),r.jsx("h4",{className:"info-block-title",children:"📍 Address"})]}),a!==null&&r.jsx("span",{className:"distance-badge-detail flex items-center gap-xs",children:r.jsxs("span",{children:["📍 ",a," km from you"]})})]}),r.jsx("div",{className:"info-block-content",children:r.jsx("p",{className:"address-text",children:e.fullAddress||e.area})})]}),r.jsxs("div",{className:"info-block",children:[r.jsxs("div",{className:"info-block-header flex items-center justify-between",style:{marginBottom:10},children:[r.jsx("h4",{className:"info-block-title",children:"Location Map"}),r.jsxs("a",{href:s,target:"_blank",rel:"noopener noreferrer",className:"directions-link flex items-center gap-sm",children:[r.jsx("span",{children:"Google Maps Directions"}),r.jsx($u,{size:12})]})]}),r.jsx("div",{className:"map-embed-box",children:r.jsxs("div",{className:"map-mock-bg",children:[r.jsx("div",{className:"map-grid-lines"}),r.jsx("div",{className:"map-road road-1"}),r.jsx("div",{className:"map-road road-2"}),r.jsx("div",{className:"map-road road-3"}),r.jsxs("div",{className:"map-pin-pulse",children:[r.jsx(ct,{size:28,color:"#EF4444",fill:"#EF4444"}),r.jsx("div",{className:"pulse-ring"})]}),r.jsx("div",{className:"map-pin-label",children:e.name})]})})]}),r.jsx("style",{children:`
        .action-sidebar-card {
          padding: 24px;
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          gap: 16px;
          position: sticky;
          top: 96px;
        }

        .cta-price-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .cta-price-tag {
          display: flex;
          align-items: baseline;
          gap: 2px;
        }

        .cta-currency {
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--primary);
        }

        .cta-price-val {
          font-family: var(--font-heading);
          font-size: 2rem;
          font-weight: 900;
          color: var(--text-main);
        }

        .cta-price-unit {
          font-size: 0.85rem;
          color: var(--text-dim);
          margin-left: 4px;
        }

        .instant-badge {
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.25);
          padding: 4px 10px;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 600;
          color: #34d399;
        }

        .book-venue-main-btn {
          width: 100%;
          font-size: 1.05rem;
          padding: 15px;
          box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
        }

        .divider-line {
          height: 1px;
          background: var(--border-subtle);
          margin: 4px 0;
        }

        .info-block {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .info-block-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .hours-highlight {
          font-size: 1.05rem;
          font-weight: 700;
          color: #22d3ee;
        }

        .open-days-note {
          font-size: 0.78rem;
          color: var(--text-dim);
        }

        .address-text {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .distance-badge-detail {
          background: rgba(56, 189, 248, 0.15);
          border: 1px solid rgba(56, 189, 248, 0.35);
          color: #38bdf8;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: var(--radius-full);
        }

        .directions-link {
          font-size: 0.78rem;
          color: var(--primary);
          font-weight: 600;
        }

        .directions-link:hover {
          text-decoration: underline;
        }

        .map-embed-box {
          width: 100%;
          height: 140px;
          border-radius: var(--radius-md);
          overflow: hidden;
          border: 1px solid var(--border-subtle);
          position: relative;
        }

        .map-mock-bg {
          width: 100%;
          height: 100%;
          background: #0f172a;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .map-grid-lines {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 20px 20px;
        }

        .map-road {
          position: absolute;
          background: rgba(100, 116, 139, 0.25);
        }

        .road-1 { top: 40%; left: 0; right: 0; height: 12px; transform: rotate(-5deg); }
        .road-2 { top: 0; bottom: 0; left: 45%; width: 14px; transform: rotate(15deg); }
        .road-3 { top: 70%; left: 0; right: 0; height: 8px; }

        .map-pin-pulse {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pulse-ring {
          position: absolute;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(239, 68, 68, 0.35);
          animation: mapPulse 2s infinite;
          z-index: -1;
        }

        .map-pin-label {
          position: absolute;
          bottom: 8px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(15, 23, 42, 0.9);
          border: 1px solid var(--border-subtle);
          padding: 2px 8px;
          border-radius: var(--radius-sm);
          font-size: 0.7rem;
          font-weight: 700;
          color: #f8fafc;
          white-space: nowrap;
          z-index: 2;
        }

        @keyframes mapPulse {
          0% { transform: scale(0.6); opacity: 1; }
          100% { transform: scale(1.6); opacity: 0; }
        }
      `})]})}function rp({isOpen:e,onClose:t,venueId:n,venueName:a}){const{user:s}=gt(),{addReview:i}=hr(),{showToast:o}=ze(),[l,c]=j.useState(5),[u,f]=j.useState(0),[h,m]=j.useState(""),[v,y]=j.useState(!1),k=N=>{if(N.preventDefault(),!h.trim()){o("Please enter your review feedback","error");return}y(!0),setTimeout(()=>{i(n,{userName:(s==null?void 0:s.name)||"Mitchell Admin",userAvatar:(s==null?void 0:s.avatar)||"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",rating:l,comment:h.trim()}),y(!1),o("Thank you! Your review has been posted.","success"),m(""),c(5),t()},600)};return r.jsx(Pt,{isOpen:e,onClose:t,title:`Write a Review for ${a||"Venue"}`,children:r.jsxs("form",{onSubmit:k,children:[r.jsxs("div",{style:{textAlign:"center",marginBottom:24},children:[r.jsx("div",{style:{fontSize:"0.88rem",color:"#94a3b8",marginBottom:10},children:"Tap stars to rate your playing experience"}),r.jsx("div",{className:"flex justify-center gap-sm",children:[1,2,3,4,5].map(N=>r.jsx("button",{type:"button",onClick:()=>c(N),onMouseEnter:()=>f(N),onMouseLeave:()=>f(0),style:{color:N<=(u||l)?"#FBBF24":"#475569",padding:4,transform:N<=(u||l)?"scale(1.15)":"scale(1)",transition:"transform 0.15s ease, color 0.15s ease"},"aria-label":`${N} star`,children:r.jsx(zt,{size:32,fill:N<=(u||l)?"#FBBF24":"none"})},N))}),r.jsxs("div",{style:{fontSize:"0.95rem",fontWeight:700,color:"#FBBF24",marginTop:8},children:[l===5&&"⭐⭐⭐⭐⭐ Exceptional (5.0)",l===4&&"⭐⭐⭐⭐ Very Good (4.0)",l===3&&"⭐⭐⭐ Good / Average (3.0)",l===2&&"⭐⭐ Below Expectations (2.0)",l===1&&"⭐ Poor Experience (1.0)"]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Your Playing Experience & Feedback"}),r.jsx("textarea",{className:"form-textarea",rows:4,placeholder:"Tell other sports enthusiasts about the court turf, grip, lighting, amenities, and staff hospitality...",value:h,onChange:N=>m(N.target.value),required:!0})]}),r.jsxs("div",{className:"flex gap-sm",style:{marginTop:24},children:[r.jsx("button",{type:"button",className:"btn btn-secondary",style:{flex:1},onClick:t,children:"Cancel"}),r.jsxs("button",{type:"submit",className:"btn btn-primary",style:{flex:1},disabled:v,children:[r.jsx(Zh,{size:16}),r.jsx("span",{children:v?"Submitting...":"Post Review"})]})]})]})})}function o0({venue:e}){const[t,n]=j.useState(3),[a,s]=j.useState(!1),i=e.reviews||[],o=t<i.length,l=()=>{n(c=>Math.min(c+3,i.length))};return r.jsxs("div",{className:"reviews-section-wrapper glass-card",children:[r.jsxs("div",{className:"reviews-section-header flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsx("h3",{className:"section-title",children:"Player Reviews & Ratings"}),r.jsxs("div",{className:"reviews-summary-line flex items-center gap-sm",children:[r.jsxs("div",{className:"overall-rating-pill flex items-center gap-sm",children:[r.jsx(zt,{size:16,fill:"#FBBF24",color:"#FBBF24"}),r.jsx("span",{className:"rating-num",children:e.rating.toFixed(1)})]}),r.jsxs("span",{className:"reviews-total-text",children:["Based on ",e.reviewsCount||i.length," player verified experiences"]})]})]}),r.jsxs("button",{className:"btn btn-outline btn-sm write-review-trigger-btn",onClick:()=>s(!0),children:[r.jsx(Jh,{size:15}),r.jsx("span",{children:"Write Review"})]})]}),r.jsx("div",{className:"reviews-list-container flex-col gap-md",children:i.slice(0,t).map(c=>r.jsxs("div",{className:"review-card",children:[r.jsxs("div",{className:"review-card-header flex items-center justify-between",children:[r.jsxs("div",{className:"review-user-info flex items-center gap-sm",children:[r.jsx("img",{src:c.userAvatar,alt:c.userName,className:"review-user-avatar",onError:u=>{u.target.src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"}}),r.jsxs("div",{children:[r.jsx("div",{className:"review-user-name",children:c.userName}),r.jsx("div",{className:"review-stars-row flex",children:[...Array(5)].map((u,f)=>r.jsx(zt,{size:13,fill:f<Math.floor(c.rating)?"#FBBF24":"none",color:f<Math.floor(c.rating)?"#FBBF24":"#475569"},f))})]})]}),r.jsx("div",{className:"review-datetime-badge flex items-center gap-sm",children:r.jsxs("span",{children:["📅 ",c.date,c.time?`, ${c.time}`:""]})})]}),r.jsxs("p",{className:"review-comment-text",children:['"',c.comment,'"']})]},c.id))}),o&&r.jsx("div",{className:"load-more-wrapper flex justify-center",style:{marginTop:20},children:r.jsx("button",{className:"btn btn-secondary btn-sm load-more-btn",onClick:l,children:"[Load more reviews]"})}),r.jsx(rp,{isOpen:a,onClose:()=>s(!1),venueId:e.id,venueName:e.name}),r.jsx("style",{children:`
        .reviews-section-wrapper {
          padding: 28px;
          border-radius: var(--radius-lg);
          margin-top: 32px;
        }

        .reviews-section-header {
          padding-bottom: 20px;
          border-bottom: 1px solid var(--border-subtle);
          margin-bottom: 24px;
          flex-wrap: wrap;
          gap: 16px;
        }

        .section-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 6px;
        }

        .overall-rating-pill {
          background: rgba(245, 158, 11, 0.15);
          border: 1px solid rgba(245, 158, 11, 0.3);
          padding: 3px 10px;
          border-radius: var(--radius-full);
          color: #fbbf24;
          font-weight: 800;
          font-size: 0.95rem;
        }

        .reviews-total-text {
          font-size: 0.84rem;
          color: var(--text-muted);
        }

        .reviews-list-container {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .review-card {
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 18px 20px;
          transition: border-color 0.2s ease;
        }

        .review-card:hover {
          border-color: rgba(148, 163, 184, 0.3);
        }

        .review-card-header {
          margin-bottom: 12px;
          flex-wrap: wrap;
          gap: 10px;
        }

        .review-user-avatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--border-subtle);
        }

        .review-user-name {
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--text-main);
        }

        .review-stars-row {
          gap: 2px;
          margin-top: 2px;
        }

        .review-datetime-badge {
          font-size: 0.8rem;
          color: var(--text-dim);
          background: rgba(255, 255, 255, 0.04);
          padding: 4px 10px;
          border-radius: var(--radius-sm);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .review-comment-text {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.6;
          font-style: italic;
        }

        .load-more-btn {
          font-weight: 600;
          padding: 10px 24px;
        }
      `})]})}function l0({venueId:e,onBack:t,onProceedBooking:n}){var i,o;const{getVenueById:a}=hr(),s=a(e);return s?r.jsxs("div",{className:"venue-detail-page-wrapper",children:[r.jsxs("div",{className:"container",children:[r.jsxs("button",{className:"back-nav-btn flex items-center gap-sm",onClick:t,children:[r.jsx(Di,{size:16}),r.jsx("span",{children:"Back to Explore Venues"})]}),r.jsx("div",{className:"venue-detail-header flex items-start justify-between",children:r.jsxs("div",{children:[r.jsxs("div",{className:"flex items-center gap-sm",style:{marginBottom:6},children:[r.jsx("span",{className:`tag ${s.venueType==="indoor"?"tag-indoor":"tag-outdoor"}`,children:s.venueType==="indoor"?"🏢 Indoor Arena":"🌤️ Outdoor Arena"}),r.jsxs("span",{className:"tag tag-sport",children:[s.sportIcon," ",s.sportName]})]}),r.jsx("h1",{className:"venue-main-name",children:s.name}),r.jsxs("div",{className:"venue-header-meta flex items-center gap-md",children:[r.jsxs("div",{className:"flex items-center gap-sm",children:[r.jsx(ct,{size:15,color:"#10B981"}),r.jsxs("span",{className:"meta-location-text",children:["📍 ",s.area]})]}),r.jsxs("div",{className:"rating-pill flex items-center gap-sm",children:[r.jsx(zt,{size:14,fill:"#FBBF24",color:"#FBBF24"}),r.jsxs("span",{children:[s.rating.toFixed(1)," (",s.reviewsCount||s.reviews.length," reviews)"]})]})]})]})}),r.jsxs("div",{className:"venue-detail-layout-grid",children:[r.jsxs("div",{className:"venue-main-col flex-col gap-lg",children:[r.jsx(s0,{images:s.images,venueName:s.name}),r.jsxs("div",{className:"details-card glass-card",children:[r.jsxs("h3",{className:"card-section-heading flex items-center gap-sm",children:[r.jsx("span",{children:s.sportIcon}),r.jsx("span",{children:"Available Courts & Specifications"})]}),r.jsx("div",{className:"courts-available-grid",children:s.courts.map(l=>r.jsxs("div",{className:"court-spec-tile",children:[r.jsxs("div",{className:"court-tile-top flex items-center justify-between",children:[r.jsx("span",{className:"court-tile-name",children:l.name}),r.jsxs("span",{className:"court-tile-price",children:["₹",l.price,"/hr"]})]}),r.jsxs("div",{className:"court-tile-surface flex items-center gap-sm",children:[r.jsx(Le,{size:13,color:"#10B981"}),r.jsx("span",{children:l.surface})]})]},l.id))})]}),r.jsxs("div",{className:"details-card glass-card",children:[r.jsx("h3",{className:"card-section-heading",children:"About Venue"}),r.jsx("p",{className:"about-venue-text",children:s.about}),r.jsxs("div",{className:"special-notes-box",children:[r.jsxs("div",{className:"notes-header flex items-center gap-sm",children:[r.jsx(Wu,{size:16,color:"#10B981"}),r.jsx("span",{style:{fontWeight:700,color:"#f8fafc",fontSize:"0.9rem"},children:"Venue Guidelines & Features"})]}),r.jsx("ul",{className:"special-notes-list",children:(i=s.specialNotes)==null?void 0:i.map((l,c)=>r.jsxs("li",{className:"note-list-item flex items-center gap-sm",children:[r.jsx("span",{className:"bullet-dot"}),r.jsx("span",{children:l})]},c))})]}),r.jsxs("div",{style:{marginTop:24},children:[r.jsx("h4",{style:{fontSize:"0.95rem",fontWeight:700,marginBottom:12,color:"#f8fafc"},children:"Amenities & Facilities"}),r.jsx("div",{className:"amenities-tags-grid",children:(o=s.amenities)==null?void 0:o.map((l,c)=>r.jsxs("div",{className:"amenity-chip flex items-center gap-sm",children:[r.jsx(Le,{size:14,color:"#10B981"}),r.jsx("span",{children:l})]},c))})]})]}),r.jsx(o0,{venue:s})]}),r.jsx("div",{className:"venue-sidebar-col",children:r.jsx(i0,{venue:s,onBookNow:()=>n(s.id)})})]})]}),r.jsx("style",{children:`
        .venue-detail-page-wrapper {
          padding: 30px 0 60px;
        }

        .back-nav-btn {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-muted);
          margin-bottom: 20px;
          padding: 6px 12px;
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.05);
          display: inline-flex;
        }

        .back-nav-btn:hover {
          color: var(--primary);
          background: rgba(255, 255, 255, 0.08);
        }

        .venue-detail-header {
          margin-bottom: 28px;
        }

        .venue-main-name {
          font-size: 2.4rem;
          font-weight: 900;
          color: var(--text-main);
          letter-spacing: -0.02em;
          margin: 4px 0 8px;
        }

        .venue-header-meta {
          flex-wrap: wrap;
          gap: 16px;
        }

        .meta-location-text {
          font-size: 0.95rem;
          color: var(--text-muted);
        }

        .venue-detail-layout-grid {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 32px;
          align-items: start;
        }

        .details-card {
          padding: 28px;
          border-radius: var(--radius-lg);
        }

        .card-section-heading {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--text-main);
          margin-bottom: 18px;
        }

        .courts-available-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 12px;
        }

        .court-spec-tile {
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid var(--border-subtle);
          padding: 14px;
          border-radius: var(--radius-md);
        }

        .court-tile-name {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .court-tile-price {
          font-size: 0.85rem;
          font-weight: 800;
          color: #34d399;
        }

        .court-tile-surface {
          font-size: 0.78rem;
          color: var(--text-muted);
          margin-top: 6px;
        }

        .about-venue-text {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 20px;
        }

        .special-notes-box {
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.25);
          padding: 18px 20px;
          border-radius: var(--radius-md);
        }

        .special-notes-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 10px;
        }

        .note-list-item {
          font-size: 0.88rem;
          color: #cbd5e1;
        }

        .bullet-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--primary);
          flex-shrink: 0;
        }

        .amenities-tags-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .amenity-chip {
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid var(--border-subtle);
          padding: 8px 14px;
          border-radius: var(--radius-full);
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-main);
        }

        @media (max-width: 992px) {
          .venue-detail-layout-grid {
            grid-template-columns: 1fr;
          }
          .venue-main-name {
            font-size: 1.8rem;
          }
        }
      `})]}):r.jsxs("div",{className:"container",style:{padding:"80px 20px",textAlign:"center"},children:[r.jsx("h2",{style:{color:"#f8fafc",marginBottom:16},children:"Venue Not Found"}),r.jsxs("button",{className:"btn btn-primary",onClick:t,children:[r.jsx(Di,{size:16}),r.jsx("span",{children:"Back to All Venues"})]})]})}function c0({selectedSlot:e,setSelectedSlot:t,selectedDate:n,bookedSlots:a=[]}){const s=new Date,i=s.toISOString().split("T")[0],o=n===i,l=s.getHours(),c=f=>{if(!o)return!1;const[h]=f.split(":").map(Number);return h<=l},u=[{name:"Morning",icon:r.jsx(Tg,{size:15,color:"#06B6D4"}),slots:sn.filter(f=>f.period==="Morning")},{name:"Afternoon",icon:r.jsx(Pg,{size:15,color:"#F59E0B"}),slots:sn.filter(f=>f.period==="Afternoon")},{name:"Evening",icon:r.jsx(Ag,{size:15,color:"#F97316"}),slots:sn.filter(f=>f.period==="Evening")},{name:"Night",icon:r.jsx(tg,{size:15,color:"#A855F7"}),slots:sn.filter(f=>f.period==="Night")}];return r.jsxs("div",{className:"slot-grid-wrapper flex-col gap-md",children:[r.jsxs("div",{className:"slot-rules-banner flex items-center gap-sm",children:[r.jsx(Ue,{size:15,color:"#06B6D4"}),r.jsx("span",{children:"Unavailable time slots are disabled and cannot be selected. Start time must be in the future."})]}),u.map(f=>r.jsxs("div",{className:"period-slot-group",children:[r.jsxs("div",{className:"period-title flex items-center gap-sm",children:[f.icon,r.jsx("span",{children:f.name})]}),r.jsx("div",{className:"slots-buttons-grid",children:f.slots.map(h=>{const m=c(h.time),v=a.includes(h.label)||a.includes(h.time),y=m||v,k=e===h.label;return r.jsxs("button",{type:"button",disabled:y,className:`slot-chip-btn ${k?"selected":""} ${v?"booked":""} ${m?"past":""}`,onClick:()=>t(h.label),children:[r.jsx(Kt,{size:12,className:"slot-clock-icon"}),r.jsx("span",{className:"slot-time-text",children:h.label}),v&&r.jsx("span",{className:"slot-status-badge",children:"Booked"}),m&&!v&&r.jsx("span",{className:"slot-status-badge",children:"Past"})]},h.id)})})]},f.name)),r.jsx("style",{children:`
        .slot-grid-wrapper {
          display: flex;
          flex-direction: column;
        }

        .slot-rules-banner {
          background: rgba(6, 182, 212, 0.1);
          border: 1px solid rgba(6, 182, 212, 0.25);
          padding: 10px 14px;
          border-radius: var(--radius-md);
          font-size: 0.8rem;
          color: #67e8f9;
        }

        .period-slot-group {
          background: rgba(15, 23, 42, 0.45);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 14px 16px;
        }

        .period-title {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 12px;
        }

        .slots-buttons-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 10px;
        }

        .slot-chip-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 12px;
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          color: var(--text-main);
          font-size: 0.82rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .slot-chip-btn:hover:not(:disabled) {
          background: var(--bg-card-hover);
          border-color: rgba(16, 185, 129, 0.4);
          transform: translateY(-1px);
        }

        .slot-chip-btn.selected {
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.25) 0%, rgba(6, 182, 212, 0.25) 100%);
          border-color: var(--primary);
          color: #ffffff;
          box-shadow: 0 0 12px rgba(16, 185, 129, 0.3);
        }

        .slot-chip-btn:disabled {
          background: rgba(15, 23, 42, 0.3);
          border-color: rgba(255, 255, 255, 0.05);
          color: #475569;
          cursor: not-allowed;
          opacity: 0.6;
        }

        .slot-clock-icon {
          color: var(--primary);
        }

        .slot-chip-btn:disabled .slot-clock-icon {
          color: #475569;
        }

        .slot-status-badge {
          font-size: 0.65rem;
          background: rgba(239, 68, 68, 0.15);
          color: #f87171;
          padding: 1px 6px;
          border-radius: 4px;
          border: 1px solid rgba(239, 68, 68, 0.25);
        }

        .slot-chip-btn.past .slot-status-badge {
          background: rgba(100, 116, 139, 0.2);
          color: #94a3b8;
          border-color: rgba(100, 116, 139, 0.3);
        }
      `})]})}var qo={};(function e(t,n,a,s){var i=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),o=typeof Path2D=="function"&&typeof DOMMatrix=="function",l=function(){if(!t.OffscreenCanvas)return!1;try{var b=new OffscreenCanvas(1,1),x=b.getContext("2d");x.fillRect(0,0,1,1);var M=b.transferToImageBitmap();x.createPattern(M,"no-repeat")}catch{return!1}return!0}();function c(){}function u(b){var x=n.exports.Promise,M=x!==void 0?x:t.Promise;return typeof M=="function"?new M(b):(b(c,c),null)}var f=function(b,x){return{transform:function(M){if(b)return M;if(x.has(M))return x.get(M);var I=new OffscreenCanvas(M.width,M.height),L=I.getContext("2d");return L.drawImage(M,0,0),x.set(M,I),I},clear:function(){x.clear()}}}(l,new Map),h=function(){var b=Math.floor(16.666666666666668),x,M,I={},L=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(x=function(U){var V=Math.random();return I[V]=requestAnimationFrame(function D(q){L===q||L+b-1<q?(L=q,delete I[V],U()):I[V]=requestAnimationFrame(D)}),V},M=function(U){I[U]&&cancelAnimationFrame(I[U])}):(x=function(U){return setTimeout(U,b)},M=function(U){return clearTimeout(U)}),{frame:x,cancel:M}}(),m=function(){var b,x,M={};function I(L){function U(V,D){L.postMessage({options:V||{},callback:D})}L.init=function(D){var q=D.transferControlToOffscreen();L.postMessage({canvas:q},[q])},L.fire=function(D,q,ee){if(x)return U(D,null),x;var de=Math.random().toString(36).slice(2);return x=u(function(re){function ue(ye){ye.data.callback===de&&(delete M[de],L.removeEventListener("message",ue),x=null,f.clear(),ee(),re())}L.addEventListener("message",ue),U(D,de),M[de]=ue.bind(null,{data:{callback:de}})}),x},L.reset=function(){L.postMessage({reset:!0});for(var D in M)M[D](),delete M[D]}}return function(){if(b)return b;if(!a&&i){var L=["var CONFETTI, SIZE = {}, module = {};","("+e.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{b=new Worker(URL.createObjectURL(new Blob([L])))}catch(U){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",U),null}I(b)}return b}}(),v={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function y(b,x){return x?x(b):b}function k(b){return b!=null}function N(b,x,M){return y(b&&k(b[x])?b[x]:v[x],M)}function d(b){return b<0?0:Math.floor(b)}function p(b,x){return Math.floor(Math.random()*(x-b))+b}function g(b){return parseInt(b,16)}function w(b){return b.map(z)}function z(b){var x=String(b).replace(/[^0-9a-f]/gi,"");return x.length<6&&(x=x[0]+x[0]+x[1]+x[1]+x[2]+x[2]),{r:g(x.substring(0,2)),g:g(x.substring(2,4)),b:g(x.substring(4,6))}}function S(b){var x=N(b,"origin",Object);return x.x=N(x,"x",Number),x.y=N(x,"y",Number),x}function E(b){b.width=document.documentElement.clientWidth,b.height=document.documentElement.clientHeight}function B(b){var x=b.getBoundingClientRect();b.width=x.width,b.height=x.height}function T(b){var x=document.createElement("canvas");return x.style.position="fixed",x.style.top="0px",x.style.left="0px",x.style.pointerEvents="none",x.style.zIndex=b,x}function C(b,x,M,I,L,U,V,D,q){b.save(),b.translate(x,M),b.rotate(U),b.scale(I,L),b.arc(0,0,1,V,D,q),b.restore()}function O(b){var x=b.angle*(Math.PI/180),M=b.spread*(Math.PI/180);return{x:b.x,y:b.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:b.startVelocity*.5+Math.random()*b.startVelocity,angle2D:-x+(.5*M-Math.random()*M),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:b.color,shape:b.shape,tick:0,totalTicks:b.ticks,decay:b.decay,drift:b.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:b.gravity*3,ovalScalar:.6,scalar:b.scalar,flat:b.flat}}function R(b,x){x.x+=Math.cos(x.angle2D)*x.velocity+x.drift,x.y+=Math.sin(x.angle2D)*x.velocity+x.gravity,x.velocity*=x.decay,x.flat?(x.wobble=0,x.wobbleX=x.x+10*x.scalar,x.wobbleY=x.y+10*x.scalar,x.tiltSin=0,x.tiltCos=0,x.random=1):(x.wobble+=x.wobbleSpeed,x.wobbleX=x.x+10*x.scalar*Math.cos(x.wobble),x.wobbleY=x.y+10*x.scalar*Math.sin(x.wobble),x.tiltAngle+=.1,x.tiltSin=Math.sin(x.tiltAngle),x.tiltCos=Math.cos(x.tiltAngle),x.random=Math.random()+2);var M=x.tick++/x.totalTicks,I=x.x+x.random*x.tiltCos,L=x.y+x.random*x.tiltSin,U=x.wobbleX+x.random*x.tiltCos,V=x.wobbleY+x.random*x.tiltSin;if(b.fillStyle="rgba("+x.color.r+", "+x.color.g+", "+x.color.b+", "+(1-M)+")",b.beginPath(),o&&x.shape.type==="path"&&typeof x.shape.path=="string"&&Array.isArray(x.shape.matrix))b.fill(J(x.shape.path,x.shape.matrix,x.x,x.y,Math.abs(U-I)*.1,Math.abs(V-L)*.1,Math.PI/10*x.wobble));else if(x.shape.type==="bitmap"){var D=Math.PI/10*x.wobble,q=Math.abs(U-I)*.1,ee=Math.abs(V-L)*.1,de=x.shape.bitmap.width*x.scalar,re=x.shape.bitmap.height*x.scalar,ue=new DOMMatrix([Math.cos(D)*q,Math.sin(D)*q,-Math.sin(D)*ee,Math.cos(D)*ee,x.x,x.y]);ue.multiplySelf(new DOMMatrix(x.shape.matrix));var ye=b.createPattern(f.transform(x.shape.bitmap),"no-repeat");ye.setTransform(ue),b.globalAlpha=1-M,b.fillStyle=ye,b.fillRect(x.x-de/2,x.y-re/2,de,re),b.globalAlpha=1}else if(x.shape==="circle")b.ellipse?b.ellipse(x.x,x.y,Math.abs(U-I)*x.ovalScalar,Math.abs(V-L)*x.ovalScalar,Math.PI/10*x.wobble,0,2*Math.PI):C(b,x.x,x.y,Math.abs(U-I)*x.ovalScalar,Math.abs(V-L)*x.ovalScalar,Math.PI/10*x.wobble,0,2*Math.PI);else if(x.shape==="star")for(var K=Math.PI/2*3,Be=4*x.scalar,et=8*x.scalar,tt=x.x,xt=x.y,Xt=5,dt=Math.PI/Xt;Xt--;)tt=x.x+Math.cos(K)*et,xt=x.y+Math.sin(K)*et,b.lineTo(tt,xt),K+=dt,tt=x.x+Math.cos(K)*Be,xt=x.y+Math.sin(K)*Be,b.lineTo(tt,xt),K+=dt;else b.moveTo(Math.floor(x.x),Math.floor(x.y)),b.lineTo(Math.floor(x.wobbleX),Math.floor(L)),b.lineTo(Math.floor(U),Math.floor(V)),b.lineTo(Math.floor(I),Math.floor(x.wobbleY));return b.closePath(),b.fill(),x.tick<x.totalTicks}function G(b,x,M,I,L){var U=x.slice(),V=b.getContext("2d"),D,q,ee=u(function(de){function re(){D=q=null,V.clearRect(0,0,I.width,I.height),f.clear(),L(),de()}function ue(){a&&!(I.width===s.width&&I.height===s.height)&&(I.width=b.width=s.width,I.height=b.height=s.height),!I.width&&!I.height&&(M(b),I.width=b.width,I.height=b.height),V.clearRect(0,0,I.width,I.height),U=U.filter(function(ye){return R(V,ye)}),U.length?D=h.frame(ue):re()}D=h.frame(ue),q=re});return{addFettis:function(de){return U=U.concat(de),ee},canvas:b,promise:ee,reset:function(){D&&h.cancel(D),q&&q()}}}function Z(b,x){var M=!b,I=!!N(x||{},"resize"),L=!1,U=N(x,"disableForReducedMotion",Boolean),V=i&&!!N(x||{},"useWorker"),D=V?m():null,q=M?E:B,ee=b&&D?!!b.__confetti_initialized:!1,de=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,re;function ue(K,Be,et){for(var tt=N(K,"particleCount",d),xt=N(K,"angle",Number),Xt=N(K,"spread",Number),dt=N(K,"startVelocity",Number),cp=N(K,"decay",Number),dp=N(K,"gravity",Number),up=N(K,"drift",Number),Go=N(K,"colors",w),pp=N(K,"ticks",Number),Ko=N(K,"shapes"),mp=N(K,"scalar"),fp=!!N(K,"flat"),Qo=S(K),Yo=tt,cs=[],hp=b.width*Qo.x,gp=b.height*Qo.y;Yo--;)cs.push(O({x:hp,y:gp,angle:xt,spread:Xt,startVelocity:dt,color:Go[Yo%Go.length],shape:Ko[p(0,Ko.length)],ticks:pp,decay:cp,gravity:dp,drift:up,scalar:mp,flat:fp}));return re?re.addFettis(cs):(re=G(b,cs,q,Be,et),re.promise)}function ye(K){var Be=U||N(K,"disableForReducedMotion",Boolean),et=N(K,"zIndex",Number);if(Be&&de)return u(function(dt){dt()});M&&re?b=re.canvas:M&&!b&&(b=T(et),document.body.appendChild(b)),I&&!ee&&q(b);var tt={width:b.width,height:b.height};D&&!ee&&D.init(b),ee=!0,D&&(b.__confetti_initialized=!0);function xt(){if(D){var dt={getBoundingClientRect:function(){if(!M)return b.getBoundingClientRect()}};q(dt),D.postMessage({resize:{width:dt.width,height:dt.height}});return}tt.width=tt.height=null}function Xt(){re=null,I&&(L=!1,t.removeEventListener("resize",xt)),M&&b&&(document.body.contains(b)&&document.body.removeChild(b),b=null,ee=!1)}return I&&!L&&(L=!0,t.addEventListener("resize",xt,!1)),D?D.fire(K,tt,Xt):ue(K,tt,Xt)}return ye.reset=function(){D&&D.reset(),re&&re.reset()},ye}var Y;function W(){return Y||(Y=Z(null,{useWorker:!0,resize:!0})),Y}function J(b,x,M,I,L,U,V){var D=new Path2D(b),q=new Path2D;q.addPath(D,new DOMMatrix(x));var ee=new Path2D;return ee.addPath(q,new DOMMatrix([Math.cos(V)*L,Math.sin(V)*L,-Math.sin(V)*U,Math.cos(V)*U,M,I])),ee}function A(b){if(!o)throw new Error("path confetti are not supported in this browser");var x,M;typeof b=="string"?x=b:(x=b.path,M=b.matrix);var I=new Path2D(x),L=document.createElement("canvas"),U=L.getContext("2d");if(!M){for(var V=1e3,D=V,q=V,ee=0,de=0,re,ue,ye=0;ye<V;ye+=2)for(var K=0;K<V;K+=2)U.isPointInPath(I,ye,K,"nonzero")&&(D=Math.min(D,ye),q=Math.min(q,K),ee=Math.max(ee,ye),de=Math.max(de,K));re=ee-D,ue=de-q;var Be=10,et=Math.min(Be/re,Be/ue);M=[et,0,0,et,-Math.round(re/2+D)*et,-Math.round(ue/2+q)*et]}return{type:"path",path:x,matrix:M}}function $(b){var x,M=1,I="#000000",L='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof b=="string"?x=b:(x=b.text,M="scalar"in b?b.scalar:M,L="fontFamily"in b?b.fontFamily:L,I="color"in b?b.color:I);var U=10*M,V=""+U+"px "+L,D=new OffscreenCanvas(U,U),q=D.getContext("2d");q.font=V;var ee=q.measureText(x),de=Math.ceil(ee.actualBoundingBoxRight+ee.actualBoundingBoxLeft),re=Math.ceil(ee.actualBoundingBoxAscent+ee.actualBoundingBoxDescent),ue=2,ye=ee.actualBoundingBoxLeft+ue,K=ee.actualBoundingBoxAscent+ue;de+=ue+ue,re+=ue+ue,D=new OffscreenCanvas(de,re),q=D.getContext("2d"),q.font=V,q.fillStyle=I,q.fillText(x,ye,K);var Be=1/M;return{type:"bitmap",bitmap:D.transferToImageBitmap(),matrix:[Be,0,0,Be,-de*Be/2,-re*Be/2]}}n.exports=function(){return W().apply(this,arguments)},n.exports.reset=function(){W().reset()},n.exports.create=Z,n.exports.shapeFromPath=A,n.exports.shapeFromText=$})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),qo,!1);const d0=qo.exports;qo.exports.create;function u0({isOpen:e,onClose:t,bookingDetails:n,onBookingSuccess:a}){const[s,i]=j.useState("upi"),[o,l]=j.useState(!1),[c,u]=j.useState(null),f=()=>{try{d0({particleCount:120,spread:80,origin:{y:.6}})}catch{}},h=()=>{l(!0),setTimeout(()=>{l(!1);const v=a();u(v),f()},1200)},m=(v="profile")=>{u(null),t(v)};return e?r.jsxs(Pt,{isOpen:e,onClose:()=>c?m("profile"):t(),title:c?"🎉 Booking Confirmed!":"Complete Payment",maxWidth:"560px",children:[c?r.jsxs("div",{className:"confirmation-screen flex-col items-center",children:[r.jsx("div",{className:"success-icon-circle",children:r.jsx(Le,{size:44,color:"#10B981"})}),r.jsx("h3",{className:"confirmation-title",children:"Court Reserved Successfully!"}),r.jsxs("p",{className:"confirmation-subtitle",children:["Your booking ID is ",r.jsxs("strong",{style:{color:"#10B981"},children:["#",c.id]}),". A confirmation SMS & email has been sent."]}),r.jsxs("div",{className:"receipt-card glass-card",children:[r.jsxs("div",{className:"receipt-row",children:[r.jsx("span",{className:"receipt-label",children:"Venue"}),r.jsx("span",{className:"receipt-val",children:c.venueName})]}),r.jsxs("div",{className:"receipt-row",children:[r.jsx("span",{className:"receipt-label",children:"Court"}),r.jsx("span",{className:"receipt-val",children:c.courtName})]}),r.jsxs("div",{className:"receipt-row",children:[r.jsx("span",{className:"receipt-label",children:"Date & Time"}),r.jsxs("span",{className:"receipt-val",children:[c.formattedDate," • ",c.timeSlot]})]}),r.jsxs("div",{className:"receipt-row",children:[r.jsx("span",{className:"receipt-label",children:"Location"}),r.jsx("span",{className:"receipt-val",children:c.location})]}),r.jsx("div",{className:"receipt-divider"}),r.jsxs("div",{className:"receipt-row receipt-total-row",children:[r.jsx("span",{className:"receipt-label",style:{fontWeight:700,color:"#f8fafc"},children:"Total Paid"}),r.jsxs("span",{className:"receipt-total-amount",children:["₹",c.amount,".00"]})]})]}),r.jsxs("div",{className:"confirmation-actions flex gap-sm",style:{width:"100%",marginTop:24},children:[r.jsxs("button",{className:"btn btn-secondary",style:{flex:1},onClick:()=>{alert(`Receipt #${c.id} downloaded.`)},children:[r.jsx(Sh,{size:16}),r.jsx("span",{children:"Download Receipt"})]}),r.jsxs("button",{className:"btn btn-primary",style:{flex:1},onClick:()=>m("profile"),children:[r.jsx("span",{children:"View My Bookings"}),r.jsx($n,{size:16})]})]})]}):r.jsxs("div",{className:"payment-form-wrapper flex-col gap-md",children:[r.jsxs("div",{className:"order-summary-box flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:"0.95rem",fontWeight:700,color:"#f8fafc"},children:n==null?void 0:n.venueName}),r.jsxs("div",{style:{fontSize:"0.8rem",color:"#94a3b8"},children:[n==null?void 0:n.formattedDate," • ",n==null?void 0:n.timeSlot]})]}),r.jsxs("div",{className:"order-total-pill",children:["₹",n==null?void 0:n.amount,".00"]})]}),r.jsxs("div",{className:"payment-methods-grid",children:[r.jsxs("button",{type:"button",className:`method-tile ${s==="upi"?"selected":""}`,onClick:()=>i("upi"),children:[r.jsx(Sg,{size:20,className:"method-icon"}),r.jsx("span",{children:"Instant UPI / QR"}),r.jsx("span",{className:"method-sub",children:"GPay, PhonePe, Paytm"})]}),r.jsxs("button",{type:"button",className:`method-tile ${s==="card"?"selected":""}`,onClick:()=>i("card"),children:[r.jsx(Du,{size:20,className:"method-icon"}),r.jsx("span",{children:"Debit / Credit Card"}),r.jsx("span",{className:"method-sub",children:"Visa, MasterCard, RuPay"})]}),r.jsxs("button",{type:"button",className:`method-tile ${s==="netbanking"?"selected":""}`,onClick:()=>i("netbanking"),children:[r.jsx(sh,{size:20,className:"method-icon"}),r.jsx("span",{children:"Net Banking"}),r.jsx("span",{className:"method-sub",children:"HDFC, ICICI, SBI, Axis"})]}),r.jsxs("button",{type:"button",className:`method-tile ${s==="venue"?"selected":""}`,onClick:()=>i("venue"),children:[r.jsx(fr,{size:20,className:"method-icon"}),r.jsx("span",{children:"Pay at Venue"}),r.jsx("span",{className:"method-sub",children:"Cash / UPI on arrival"})]})]}),s==="upi"&&r.jsxs("div",{className:"upi-details-box flex-col items-center",children:[r.jsxs("div",{className:"qr-code-placeholder flex-col items-center justify-center",children:[r.jsx(dg,{size:96,color:"#10B981"}),r.jsxs("span",{style:{fontSize:"0.75rem",color:"#94a3b8",marginTop:6},children:["Scan & Pay ₹",n==null?void 0:n.amount," using any UPI App"]})]}),r.jsx("div",{style:{fontSize:"0.8rem",color:"#64748b",margin:"8px 0"},children:"or enter UPI ID"}),r.jsx("input",{type:"text",className:"form-input",placeholder:"e.g. yourname@oksbi",defaultValue:"mitchell@okhdfcbank"})]}),s==="card"&&r.jsxs("div",{className:"card-details-box flex-col gap-sm",children:[r.jsxs("div",{className:"form-group",style:{margin:0},children:[r.jsx("label",{className:"form-label",children:"Card Number"}),r.jsx("input",{type:"text",className:"form-input",placeholder:"4532 •••• •••• 8842",defaultValue:"4532 9081 2234 8842"})]}),r.jsxs("div",{className:"flex gap-sm",children:[r.jsxs("div",{className:"form-group",style:{flex:1,margin:0},children:[r.jsx("label",{className:"form-label",children:"Expiry"}),r.jsx("input",{type:"text",className:"form-input",placeholder:"MM/YY",defaultValue:"08/28"})]}),r.jsxs("div",{className:"form-group",style:{flex:1,margin:0},children:[r.jsx("label",{className:"form-label",children:"CVV"}),r.jsx("input",{type:"password",className:"form-input",placeholder:"123",defaultValue:"789"})]})]})]}),r.jsxs("div",{className:"security-notice flex items-center gap-sm",children:[r.jsx(Vn,{size:16,color:"#10B981"}),r.jsx("span",{children:"256-Bit SSL Encrypted & Protected by QuickCourt Buyer Shield"})]}),r.jsx("button",{type:"button",className:"btn btn-primary btn-lg pay-submit-btn",disabled:o,onClick:h,children:o?"Processing Payment...":`Confirm & Pay – ₹${n==null?void 0:n.amount}.00`})]}),r.jsx("style",{children:`
        .order-summary-box {
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid var(--border-subtle);
          padding: 14px 18px;
          border-radius: var(--radius-md);
        }

        .order-total-pill {
          font-family: var(--font-heading);
          font-size: 1.3rem;
          font-weight: 800;
          color: #34d399;
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.3);
          padding: 4px 12px;
          border-radius: var(--radius-full);
        }

        .payment-methods-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .method-tile {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 14px;
          background: rgba(30, 41, 59, 0.5);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          color: var(--text-main);
          font-size: 0.88rem;
          font-weight: 700;
          text-align: left;
          transition: all 0.2s ease;
        }

        .method-tile:hover {
          background: var(--bg-card-hover);
          border-color: rgba(16, 185, 129, 0.3);
        }

        .method-tile.selected {
          background: rgba(16, 185, 129, 0.15);
          border-color: var(--primary);
          color: #ffffff;
        }

        .method-icon {
          color: var(--primary);
          margin-bottom: 6px;
        }

        .method-sub {
          font-size: 0.72rem;
          font-weight: 500;
          color: var(--text-dim);
          margin-top: 2px;
        }

        .upi-details-box {
          background: rgba(15, 23, 42, 0.5);
          border: 1px dashed var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 16px;
        }

        .qr-code-placeholder {
          background: rgba(255, 255, 255, 0.05);
          padding: 16px;
          border-radius: var(--radius-md);
        }

        .card-details-box {
          background: rgba(15, 23, 42, 0.5);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 16px;
        }

        .security-notice {
          font-size: 0.78rem;
          color: var(--text-dim);
          justify-content: center;
        }

        .pay-submit-btn {
          width: 100%;
          font-size: 1.1rem;
          padding: 16px;
        }

        .confirmation-screen {
          text-align: center;
          padding: 10px 0;
        }

        .success-icon-circle {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: rgba(16, 185, 129, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }

        .confirmation-title {
          font-size: 1.4rem;
          font-weight: 800;
          color: #f8fafc;
          margin-bottom: 6px;
        }

        .confirmation-subtitle {
          font-size: 0.88rem;
          color: var(--text-muted);
          margin-bottom: 20px;
        }

        .receipt-card {
          width: 100%;
          padding: 18px;
          background: rgba(15, 23, 42, 0.7);
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          gap: 10px;
          text-align: left;
        }

        .receipt-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
        }

        .receipt-label {
          color: var(--text-muted);
        }

        .receipt-val {
          font-weight: 600;
          color: var(--text-main);
        }

        .receipt-divider {
          height: 1px;
          background: var(--border-subtle);
          margin: 4px 0;
        }

        .receipt-total-amount {
          font-family: var(--font-heading);
          font-size: 1.3rem;
          font-weight: 800;
          color: #34d399;
        }
      `})]}):null}function p0({venueId:e,onBack:t,onNavigatePage:n}){var x;const{user:a,isAuthenticated:s}=gt(),{getVenueById:i,createBooking:o}=hr(),{showToast:l}=ze(),c=i(e);j.useEffect(()=>{s||(l("Please log in to reserve a court slot","info"),n("login","booking"))},[s,n,l]);const[u,f]=j.useState(((x=c==null?void 0:c.courts[0])==null?void 0:x.id)||"c1"),h=new Date().toISOString().split("T")[0],[m,v]=j.useState(h),[y,k]=j.useState(""),[N,d]=j.useState("5:00 PM - 6:00 PM"),[p,g]=j.useState(1),[w,z]=j.useState(0),[S,E]=j.useState([]),[B,T]=j.useState(!1);if(!c)return r.jsxs("div",{className:"container",style:{padding:"80px 20px",textAlign:"center"},children:[r.jsx("h2",{children:"Venue not found"}),r.jsx("button",{className:"btn btn-primary",onClick:t,children:"Back to Venues"})]});const C=c.courts.find(M=>M.id===u)||c.courts[0],O=M=>{const I=M.target.value;I<h?(k("The selected date must be today or later"),l("The selected date must be today or later","error"),v(h)):(k(""),v(I))},R=M=>{E(I=>I.includes(M)?I.filter(L=>L!==M):[...I,M])},Z=(C?C.price:c.pricePerHour)*p,Y=w*50*p,W=S.reduce((M,I)=>{const L=Rs.find(U=>U.id===I);return M+(L?L.price:0)},0),J=Z+Y+W,A=new Date(m+"T00:00:00").toLocaleDateString("en-US",{day:"numeric",month:"long",year:"numeric"}),$=()=>{if(!N){l("Please select an available time slot","error");return}T(!0)},b=()=>o({venueId:c.id,venueName:c.name,sport:c.sport,sportIcon:c.sportIcon,courtId:C.id,courtName:C.name,date:m,formattedDate:A,timeSlot:N,location:c.area+", "+c.city.toUpperCase(),amount:J,extraPlayers:w,rentalEquipments:S.map(I=>{var L;return(L=Rs.find(U=>U.id===I))==null?void 0:L.name})});return r.jsxs("div",{className:"booking-page-wrapper",children:[r.jsxs("div",{className:"container",children:[r.jsxs("button",{className:"back-nav-btn flex items-center gap-sm",onClick:t,children:[r.jsx(Di,{size:16}),r.jsx("span",{children:"Back to Venue Details"})]}),r.jsxs("div",{className:"booking-page-title-row",children:[r.jsxs("div",{className:"flex items-center gap-sm",children:[r.jsx("span",{className:"screen-tag-badge",children:"SCREEN 8"}),r.jsx("h1",{className:"booking-title-main",children:"Court Booking"})]}),r.jsxs("p",{className:"booking-title-sub",children:["Reserve your court slot and equipment at ",r.jsx("strong",{children:c.name})]})]}),r.jsxs("div",{className:"venue-summary-banner glass-card flex items-center justify-between",children:[r.jsxs("div",{className:"flex items-center gap-md",children:[r.jsx("img",{src:c.images[0],alt:"",className:"summary-venue-thumb",onError:M=>{M.target.src="https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=150&q=80"}}),r.jsxs("div",{children:[r.jsx("h3",{style:{fontSize:"1.2rem",fontWeight:800,color:"#f8fafc"},children:c.name}),r.jsxs("div",{className:"flex items-center gap-md",style:{marginTop:4},children:[r.jsxs("span",{className:"flex items-center gap-sm",style:{fontSize:"0.85rem",color:"#94a3b8"},children:[r.jsx(ct,{size:14,color:"#10B981"}),r.jsxs("span",{children:["📍 ",c.area]})]}),r.jsxs("span",{className:"rating-pill flex items-center gap-sm",children:[r.jsx(zt,{size:13,fill:"#FBBF24",color:"#FBBF24"}),r.jsxs("span",{children:[c.rating.toFixed(1)," (",c.reviewsCount||c.reviews.length,")"]})]})]})]})]}),r.jsxs("div",{className:"summary-base-rate hide-on-mobile",children:[r.jsx("div",{style:{fontSize:"0.78rem",color:"#94a3b8"},children:"Starting Rate"}),r.jsxs("div",{style:{fontSize:"1.3rem",fontWeight:800,color:"#34d399"},children:["₹",c.pricePerHour,"/hr"]})]})]}),r.jsxs("div",{className:"booking-layout-grid",children:[r.jsxs("div",{className:"booking-form-col flex-col gap-lg",children:[r.jsxs("div",{className:"booking-section-card glass-card",children:[r.jsxs("h3",{className:"section-step-title flex items-center gap-sm",children:[r.jsx("span",{className:"step-num",children:"1"}),r.jsx("span",{children:"Select Court"})]}),r.jsx("div",{className:"courts-selection-grid",children:c.courts.map(M=>r.jsxs("button",{type:"button",className:`court-select-tile ${u===M.id?"selected":""}`,onClick:()=>f(M.id),children:[r.jsxs("div",{className:"flex justify-between items-center",style:{marginBottom:6},children:[r.jsx("span",{className:"court-name-label",children:M.name}),r.jsxs("span",{className:"court-rate-label",children:["₹",M.price,"/hr"]})]}),r.jsxs("div",{className:"court-spec-sub flex items-center gap-sm",children:[r.jsx(Le,{size:12,color:"#10B981"}),r.jsx("span",{children:M.surface})]})]},M.id))})]}),r.jsxs("div",{className:"booking-section-card glass-card",children:[r.jsxs("h3",{className:"section-step-title flex items-center gap-sm",children:[r.jsx("span",{className:"step-num",children:"2"}),r.jsx("span",{children:"Choose Booking Date"})]}),r.jsxs("div",{className:"form-group",style:{maxWidth:"320px",margin:0},children:[r.jsx("label",{className:"form-label",children:"Playing Date"}),r.jsx("div",{className:"form-control-wrapper",children:r.jsx("input",{type:"date",min:h,className:`form-input date-input ${y?"has-error":""}`,value:m,onChange:O,required:!0})}),y?r.jsxs("div",{className:"form-error",children:[r.jsx(Ue,{size:14}),r.jsx("span",{children:y})]}):r.jsxs("span",{className:"form-hint",children:["Selected: ",A]})]})]}),r.jsxs("div",{className:"booking-section-card glass-card",children:[r.jsxs("h3",{className:"section-step-title flex items-center gap-sm",children:[r.jsx("span",{className:"step-num",children:"3"}),r.jsx("span",{children:"Start Time & Slot"})]}),r.jsx(c0,{selectedSlot:N,setSelectedSlot:d,selectedDate:m,bookedSlots:["10:00 AM - 11:00 AM","6:00 PM - 7:00 PM"]})]}),r.jsxs("div",{className:"booking-section-card glass-card",children:[r.jsxs("h3",{className:"section-step-title flex items-center gap-sm",children:[r.jsx("span",{className:"step-num",children:"4"}),r.jsx("span",{children:"Duration & Add-ons"})]}),r.jsxs("div",{style:{marginBottom:20},children:[r.jsx("label",{className:"form-label",children:"Playing Duration"}),r.jsx("div",{className:"duration-buttons-row flex gap-sm",children:[1,2,3].map(M=>r.jsxs("button",{type:"button",className:`duration-btn ${p===M?"selected":""}`,onClick:()=>g(M),children:[r.jsx(Kt,{size:14}),r.jsxs("span",{children:[M," Hour",M>1?"s":""]})]},M))})]}),r.jsxs("div",{className:"extra-players-box flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:"0.9rem",fontWeight:700,color:"#f8fafc"},children:"Extra Players"}),r.jsx("div",{style:{fontSize:"0.78rem",color:"#94a3b8"},children:"+₹50 per extra person (beyond 2 standard players)"})]}),r.jsxs("div",{className:"stepper-controls flex items-center gap-sm",children:[r.jsx("button",{type:"button",className:"stepper-btn",onClick:()=>z(Math.max(0,w-1)),children:"-"}),r.jsx("span",{className:"stepper-val",children:w}),r.jsx("button",{type:"button",className:"stepper-btn",onClick:()=>z(w+1),children:"+"})]})]}),r.jsxs("div",{style:{marginTop:20},children:[r.jsx("label",{className:"form-label",children:"Rental Gear & Equipment"}),r.jsx("div",{className:"equipment-rentals-grid",children:Rs.map(M=>{const I=S.includes(M.id);return r.jsxs("button",{type:"button",className:`equipment-tile ${I?"selected":""}`,onClick:()=>R(M.id),children:[r.jsxs("div",{className:"flex items-center gap-sm",children:[r.jsx("span",{style:{fontSize:"1.2rem"},children:M.icon}),r.jsx("span",{style:{fontSize:"0.85rem",fontWeight:600},children:M.name})]}),r.jsxs("span",{className:"eq-price-tag",children:["+₹",M.price]})]},M.id)})})]})]})]}),r.jsx("div",{className:"booking-summary-col",children:r.jsxs("div",{className:"price-breakdown-card glass-card",children:[r.jsx("h3",{className:"breakdown-title",children:"Booking Summary"}),r.jsxs("div",{className:"breakdown-rows-list flex-col gap-sm",children:[r.jsxs("div",{className:"breakdown-row",children:[r.jsx("span",{className:"breakdown-label",children:"Venue"}),r.jsx("span",{className:"breakdown-val",children:c.name})]}),r.jsxs("div",{className:"breakdown-row",children:[r.jsx("span",{className:"breakdown-label",children:"Court"}),r.jsx("span",{className:"breakdown-val",children:C.name})]}),r.jsxs("div",{className:"breakdown-row",children:[r.jsx("span",{className:"breakdown-label",children:"Date"}),r.jsx("span",{className:"breakdown-val",children:A})]}),r.jsxs("div",{className:"breakdown-row",children:[r.jsx("span",{className:"breakdown-label",children:"Time Slot"}),r.jsx("span",{className:"breakdown-val",style:{color:"#34d399"},children:N})]}),r.jsxs("div",{className:"breakdown-row",children:[r.jsx("span",{className:"breakdown-label",children:"Duration"}),r.jsxs("span",{className:"breakdown-val",children:[p," hr (",Z," INR)"]})]}),w>0&&r.jsxs("div",{className:"breakdown-row",children:[r.jsxs("span",{className:"breakdown-label",children:["Extra Players (",w,"x)"]}),r.jsxs("span",{className:"breakdown-val",children:["+₹",Y]})]}),S.length>0&&r.jsxs("div",{className:"breakdown-row",children:[r.jsx("span",{className:"breakdown-label",children:"Equipment Add-ons"}),r.jsxs("span",{className:"breakdown-val",children:["+₹",W]})]}),r.jsx("div",{className:"breakdown-divider"}),r.jsxs("div",{className:"breakdown-row total-row",children:[r.jsx("span",{className:"total-label",children:"Total Payable"}),r.jsxs("span",{className:"total-val",children:["₹",J,".00"]})]})]}),r.jsxs("button",{className:"btn btn-primary btn-lg continue-pay-btn",onClick:$,children:[r.jsx(Du,{size:18}),r.jsxs("span",{children:["Continue to Payment – ₹",J,".00"]})]}),r.jsxs("div",{className:"safe-guarantee flex items-center justify-center gap-sm",children:[r.jsx(Vn,{size:15,color:"#10B981"}),r.jsx("span",{children:"100% Refundable up to 2 hours before match"})]})]})})]})]}),r.jsx(u0,{isOpen:B,onClose:M=>{T(!1),M&&n(M)},bookingDetails:{venueName:c.name,courtName:C.name,formattedDate:A,timeSlot:N,amount:J,location:c.area},onBookingSuccess:b}),r.jsx("style",{children:`
        .booking-page-wrapper {
          padding: 30px 0 60px;
        }

        .screen-tag-badge {
          background: rgba(16, 185, 129, 0.15);
          color: #10B981;
          border: 1px solid rgba(16, 185, 129, 0.3);
          padding: 2px 8px;
          border-radius: var(--radius-sm);
          font-size: 0.72rem;
          font-weight: 800;
        }

        .booking-title-main {
          font-size: 2.2rem;
          font-weight: 900;
          color: var(--text-main);
        }

        .booking-title-sub {
          font-size: 0.95rem;
          color: var(--text-muted);
          margin-top: 4px;
          margin-bottom: 24px;
        }

        .venue-summary-banner {
          padding: 18px 24px;
          border-radius: var(--radius-lg);
          margin-bottom: 32px;
        }

        .summary-venue-thumb {
          width: 60px;
          height: 60px;
          border-radius: var(--radius-md);
          object-fit: cover;
          border: 2px solid var(--border-subtle);
        }

        .booking-layout-grid {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 32px;
          align-items: start;
        }

        .booking-section-card {
          padding: 24px;
          border-radius: var(--radius-lg);
        }

        .section-step-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--text-main);
          margin-bottom: 18px;
        }

        .step-num {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: var(--primary);
          color: #ffffff;
          font-size: 0.82rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
        }

        .courts-selection-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 12px;
        }

        .court-select-tile {
          padding: 14px;
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          text-align: left;
          color: var(--text-main);
          transition: all 0.2s ease;
        }

        .court-select-tile:hover {
          border-color: rgba(16, 185, 129, 0.4);
          background: var(--bg-card-hover);
        }

        .court-select-tile.selected {
          border-color: var(--primary);
          background: rgba(16, 185, 129, 0.15);
          box-shadow: 0 0 14px rgba(16, 185, 129, 0.2);
        }

        .court-name-label {
          font-size: 0.9rem;
          font-weight: 700;
        }

        .court-rate-label {
          font-size: 0.85rem;
          font-weight: 800;
          color: #34d399;
        }

        .court-spec-sub {
          font-size: 0.75rem;
          color: var(--text-dim);
        }

        .duration-buttons-row {
          flex-wrap: wrap;
        }

        .duration-btn {
          padding: 10px 18px;
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          color: var(--text-main);
          font-weight: 600;
          font-size: 0.88rem;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .duration-btn.selected {
          background: var(--primary);
          color: #ffffff;
          border-color: var(--primary);
        }

        .extra-players-box {
          background: rgba(15, 23, 42, 0.5);
          border: 1px solid var(--border-subtle);
          padding: 14px 18px;
          border-radius: var(--radius-md);
        }

        .stepper-controls {
          background: rgba(30, 41, 59, 0.8);
          border: 1px solid var(--border-subtle);
          padding: 4px;
          border-radius: var(--radius-md);
        }

        .stepper-btn {
          width: 30px;
          height: 30px;
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.08);
          color: var(--text-main);
          font-size: 1.1rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stepper-btn:hover {
          background: var(--primary);
        }

        .stepper-val {
          font-weight: 800;
          font-size: 1rem;
          min-width: 24px;
          text-align: center;
        }

        .equipment-rentals-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 10px;
        }

        .equipment-tile {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 14px;
          background: rgba(30, 41, 59, 0.5);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          color: var(--text-main);
        }

        .equipment-tile.selected {
          background: rgba(16, 185, 129, 0.15);
          border-color: var(--primary);
        }

        .eq-price-tag {
          font-size: 0.8rem;
          font-weight: 700;
          color: #34d399;
        }

        .price-breakdown-card {
          padding: 24px;
          border-radius: var(--radius-lg);
          position: sticky;
          top: 96px;
        }

        .breakdown-title {
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--text-main);
          margin-bottom: 16px;
        }

        .breakdown-rows-list {
          display: flex;
          flex-direction: column;
        }

        .breakdown-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.88rem;
        }

        .breakdown-label {
          color: var(--text-muted);
        }

        .breakdown-val {
          font-weight: 600;
          color: var(--text-main);
        }

        .breakdown-divider {
          height: 1px;
          background: var(--border-subtle);
          margin: 10px 0;
        }

        .total-row {
          font-size: 1.1rem;
        }

        .total-label {
          font-weight: 800;
          color: #f8fafc;
        }

        .total-val {
          font-family: var(--font-heading);
          font-size: 1.6rem;
          font-weight: 900;
          color: #34d399;
        }

        .continue-pay-btn {
          width: 100%;
          margin: 20px 0 12px;
          box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
        }

        .safe-guarantee {
          font-size: 0.75rem;
          color: var(--text-dim);
        }

        @media (max-width: 992px) {
          .booking-layout-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function m0(){const{user:e,updateProfile:t}=gt(),{showToast:n}=ze(),[a,s]=j.useState((e==null?void 0:e.name)||""),[i,o]=j.useState((e==null?void 0:e.email)||""),[l,c]=j.useState((e==null?void 0:e.avatar)||""),[u,f]=j.useState(""),[h,m]=j.useState(""),[v,y]=j.useState(""),[k,N]=j.useState(""),[d,p]=j.useState(!1),[g,w]=j.useState(!1),[z,S]=j.useState(""),[E,B]=j.useState(""),[T,C]=j.useState(!1),O=G=>{const Z=G.target.files[0];if(!Z)return;if(Z.size>1024*1024){f("Oops! The image is too large. Please upload an image smaller than 1 MB"),n("Oops! The image is too large. Please upload an image smaller than 1 MB","error");return}f("");const Y=new FileReader;Y.onloadend=()=>{c(Y.result),n("Profile picture preview updated","info")},Y.readAsDataURL(Z)},R=G=>{if(G.preventDefault(),S(""),B(""),v&&v!==k){S("New passwords do not match");return}C(!0);const Z=t({name:a,email:i,avatar:l,oldPassword:h||void 0,newPassword:v||void 0});C(!1),Z.success?(n("Profile changes saved successfully!","success"),m(""),y(""),N("")):(Z.errorField==="oldPassword"||Z.errorField==="newPassword"?S(Z.message):Z.errorField==="email"&&B(Z.message),n(Z.message,"error"))};return r.jsxs("div",{className:"edit-profile-card glass-card",children:[r.jsx("h3",{className:"tab-title",children:"Edit Profile Information"}),r.jsx("p",{className:"tab-subtitle",children:"Update your personal account information and manage your password security."}),r.jsxs("form",{onSubmit:R,className:"edit-profile-form",children:[r.jsxs("div",{className:"profile-pic-section flex items-center gap-lg",children:[r.jsxs("div",{className:"avatar-preview-box",children:[r.jsx("img",{src:l||"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80",alt:"Avatar",className:"avatar-img"}),r.jsxs("label",{className:"avatar-upload-badge",title:"Change picture",children:[r.jsx(Lu,{size:14,color:"#ffffff"}),r.jsx("input",{type:"file",accept:"image/*",style:{display:"none"},onChange:O})]})]}),r.jsxs("div",{className:"avatar-instructions",children:[r.jsx("div",{style:{fontWeight:700,color:"#f8fafc",marginBottom:4},children:"Profile Picture"}),r.jsxs("div",{style:{fontSize:"0.8rem",color:"#94a3b8"},children:["Upload JPG, PNG or WebP. ",r.jsx("strong",{children:"Max size: 1 MB"})]}),u&&r.jsxs("div",{className:"form-error",style:{marginTop:6},children:[r.jsx(Ue,{size:14}),r.jsx("span",{children:u})]})]})]}),r.jsxs("div",{className:"form-grid-2",children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Full Name"}),r.jsx("div",{className:"form-control-wrapper",children:r.jsx("input",{type:"text",className:"form-input",value:a,onChange:G=>s(G.target.value),required:!0})})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Email"}),r.jsx("div",{className:"form-control-wrapper",children:r.jsx("input",{type:"email",className:`form-input ${E?"has-error":""}`,value:i,onChange:G=>{o(G.target.value),B("")},required:!0})}),E&&r.jsxs("div",{className:"form-error",children:[r.jsx(Ue,{size:14}),r.jsx("span",{children:E})]})]})]}),r.jsxs("div",{className:"password-update-section",children:[r.jsxs("div",{className:"flex items-center gap-sm",style:{marginBottom:16},children:[r.jsx(Ui,{size:16,color:"#10B981"}),r.jsx("h4",{style:{fontSize:"1rem",fontWeight:700,color:"#f8fafc"},children:"Change Password (Optional)"})]}),r.jsxs("div",{className:"form-grid-2",children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Old Password"}),r.jsxs("div",{className:"form-control-wrapper",children:[r.jsx("input",{type:d?"text":"password",className:"form-input",placeholder:"Enter current password",value:h,onChange:G=>m(G.target.value)}),r.jsx("button",{type:"button",className:"input-icon-btn",onClick:()=>p(!d),"aria-label":"Toggle password visibility",children:d?r.jsx(_n,{size:16}):r.jsx(An,{size:16})})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"New Password"}),r.jsxs("div",{className:"form-control-wrapper",children:[r.jsx("input",{type:g?"text":"password",className:"form-input",placeholder:"8-20 chars, 1 uppercase, 1 number, 1 symbol",value:v,onChange:G=>y(G.target.value)}),r.jsx("button",{type:"button",className:"input-icon-btn",onClick:()=>w(!g),"aria-label":"Toggle password visibility",children:g?r.jsx(_n,{size:16}):r.jsx(An,{size:16})})]})]})]}),v&&r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Confirm New Password"}),r.jsx("div",{className:"form-control-wrapper",children:r.jsx("input",{type:g?"text":"password",className:"form-input",placeholder:"Re-enter new password",value:k,onChange:G=>N(G.target.value)})})]}),z&&r.jsxs("div",{className:"form-error",style:{marginBottom:16},children:[r.jsx(Ue,{size:14}),r.jsx("span",{children:z})]})]}),r.jsx("div",{style:{marginTop:24},children:r.jsxs("button",{type:"submit",className:"btn btn-primary",disabled:T,children:[r.jsx(Gu,{size:16}),r.jsx("span",{children:T?"Saving Changes...":"Save Profile Changes"})]})})]}),r.jsx("style",{children:`
        .edit-profile-card {
          padding: 32px;
          border-radius: var(--radius-lg);
        }

        .tab-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-main);
          margin-bottom: 4px;
        }

        .tab-subtitle {
          font-size: 0.88rem;
          color: var(--text-muted);
          margin-bottom: 28px;
        }

        .profile-pic-section {
          background: rgba(15, 23, 42, 0.5);
          border: 1px solid var(--border-subtle);
          padding: 20px;
          border-radius: var(--radius-md);
          margin-bottom: 24px;
        }

        .avatar-preview-box {
          position: relative;
          width: 76px;
          height: 76px;
          border-radius: 50%;
          border: 3px solid var(--primary);
        }

        .avatar-img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
        }

        .avatar-upload-badge {
          position: absolute;
          bottom: -2px;
          right: -2px;
          background: var(--primary);
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border: 2px solid var(--bg-secondary);
          transition: transform 0.2s ease;
        }

        .avatar-upload-badge:hover {
          transform: scale(1.1);
        }

        .form-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .password-update-section {
          background: rgba(15, 23, 42, 0.4);
          border: 1px solid var(--border-subtle);
          padding: 20px;
          border-radius: var(--radius-md);
          margin-top: 12px;
        }

        @media (max-width: 650px) {
          .form-grid-2 {
            grid-template-columns: 1fr;
          }
          .edit-profile-card {
            padding: 20px;
          }
        }
      `})]})}function f0({onExploreVenues:e}){const{bookings:t,cancelBooking:n}=hr(),{showToast:a}=ze(),[s,i]=j.useState("all"),[o,l]=j.useState(null),[c,u]=j.useState(null),[f,h]=j.useState("Change of plans"),m=t.filter(y=>s==="cancelled"?y.status==="Cancelled":!0),v=()=>{c&&(n(c.id,f),a(`Booking #${c.id} cancelled. 100% refund initiated.`,"info"),u(null))};return r.jsxs("div",{className:"bookings-tab-wrapper",children:[r.jsxs("div",{className:"bookings-nav-tabs flex items-center justify-between",children:[r.jsxs("div",{className:"tabs-pill-group flex gap-sm",children:[r.jsxs("button",{className:`booking-tab-btn ${s==="all"?"active":""}`,onClick:()=>i("all"),children:["All Bookings (",t.length,")"]}),r.jsxs("button",{className:`booking-tab-btn ${s==="cancelled"?"active":""}`,onClick:()=>i("cancelled"),children:["Cancelled (",t.filter(y=>y.status==="Cancelled").length,")"]})]}),r.jsx("button",{className:"btn btn-outline btn-sm",onClick:e,children:"+ Book New Court"})]}),m.length===0?r.jsxs("div",{className:"empty-bookings-box glass-card flex-col items-center justify-center",children:[r.jsx(He,{size:48,color:"#64748B"}),r.jsx("h4",{style:{fontSize:"1.2rem",marginTop:12,color:"#f8fafc"},children:"No bookings found"}),r.jsx("p",{style:{fontSize:"0.88rem",color:"#94a3b8",margin:"6px 0 18px"},children:s==="cancelled"?"You have no cancelled court bookings.":"You have not reserved any sports venues yet."}),r.jsx("button",{className:"btn btn-primary",onClick:e,children:"Browse Sports Arenas"})]}):r.jsx("div",{className:"bookings-cards-grid flex-col gap-md",children:m.map(y=>r.jsxs("div",{className:"booking-item-card glass-card",children:[r.jsxs("div",{className:"booking-item-main flex justify-between items-start",children:[r.jsxs("div",{children:[r.jsxs("h4",{className:"booking-venue-title flex items-center gap-sm",children:[r.jsx("span",{children:y.sportIcon||"🏸"}),r.jsx("span",{children:y.venueName}),r.jsxs("span",{className:"booking-sport-tag",children:["(",y.sport?y.sport.toUpperCase():"BADMINTON",")"]})]}),r.jsxs("div",{className:"booking-meta-line flex items-center gap-md",children:[r.jsx("span",{className:"flex items-center gap-sm",children:r.jsxs("span",{children:["📅 ",y.formattedDate||y.date]})}),r.jsx("span",{className:"flex items-center gap-sm",children:r.jsxs("span",{children:["⏰ ",y.timeSlot]})})]}),r.jsx("div",{className:"booking-meta-location flex items-center gap-sm",children:r.jsxs("span",{children:["📍 ",y.location]})}),r.jsxs("div",{className:"booking-status-row flex items-center gap-sm",children:[y.status==="Confirmed"?r.jsx("span",{className:"status-confirmed",children:"Status: ✅ Confirmed"}):r.jsx("span",{className:"status-cancelled",children:"Status: ❌ Cancelled"}),r.jsxs("span",{className:"booking-id-tag",children:["ID: #",y.id]})]})]}),r.jsxs("div",{className:"booking-cost-box",children:[r.jsxs("div",{className:"cost-tag",children:["₹",y.amount,".00"]}),r.jsx("div",{className:"cost-sub",children:"Paid via UPI"})]})]}),r.jsxs("div",{className:"booking-actions-row flex items-center justify-between",children:[r.jsx("div",{children:y.canCancel&&y.status==="Confirmed"?r.jsx("button",{className:"btn btn-danger btn-sm cancel-booking-btn",onClick:()=>u(y),children:"[Cancel Booking]"}):r.jsxs("span",{className:"no-cancel-badge flex items-center gap-sm",title:"Past booking or already cancelled",children:[r.jsx(hh,{size:13}),r.jsx("span",{children:"No cancel booking"})]})}),r.jsx("div",{className:"flex items-center gap-sm",children:r.jsxs("button",{className:"btn btn-outline btn-sm write-rev-btn",onClick:()=>l({id:y.venueId,name:y.venueName}),children:[r.jsx(zt,{size:14,color:"#FBBF24"}),r.jsx("span",{children:"[Write Review]"})]})})]})]},y.id))}),o&&r.jsx(rp,{isOpen:!!o,onClose:()=>l(null),venueId:o.id,venueName:o.name}),c&&r.jsx(Pt,{isOpen:!!c,onClose:()=>u(null),title:"Confirm Booking Cancellation",children:r.jsxs("div",{className:"flex-col gap-md",children:[r.jsxs("div",{className:"cancel-warning-box flex items-center gap-sm",children:[r.jsx(Rg,{size:20,color:"#F59E0B"}),r.jsxs("span",{children:["Are you sure you want to cancel booking ",r.jsxs("strong",{children:["#",c.id]}),"?"]})]}),r.jsxs("p",{style:{fontSize:"0.88rem",color:"#94a3b8",lineHeight:1.5},children:["Venue: ",r.jsx("strong",{children:c.venueName}),r.jsx("br",{}),"Slot: ",r.jsxs("strong",{children:[c.formattedDate," (",c.timeSlot,")"]}),r.jsx("br",{}),"Refund Amount: ",r.jsxs("strong",{style:{color:"#10B981"},children:["₹",c.amount,".00"]})," (100% full refund to original payment method)."]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Reason for Cancellation"}),r.jsxs("select",{className:"form-select",value:f,onChange:y=>h(y.target.value),children:[r.jsx("option",{value:"Change of plans",children:"Change of plans"}),r.jsx("option",{value:"Player unavailable",children:"Player / Team unavailable"}),r.jsx("option",{value:"Weather / rain issue",children:"Weather / rain concern"}),r.jsx("option",{value:"Booked wrong venue/slot",children:"Booked wrong venue or slot"})]})]}),r.jsxs("div",{className:"flex gap-sm",style:{marginTop:12},children:[r.jsx("button",{type:"button",className:"btn btn-secondary",style:{flex:1},onClick:()=>u(null),children:"Keep Booking"}),r.jsx("button",{type:"button",className:"btn btn-danger",style:{flex:1},onClick:v,children:"Confirm Cancel"})]})]})}),r.jsx("style",{children:`
        .bookings-nav-tabs {
          margin-bottom: 24px;
          flex-wrap: wrap;
          gap: 12px;
        }

        .booking-tab-btn {
          padding: 8px 18px;
          border-radius: var(--radius-full);
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-muted);
          background: rgba(30, 41, 59, 0.5);
          border: 1px solid var(--border-subtle);
          transition: all 0.2s ease;
        }

        .booking-tab-btn:hover {
          color: var(--text-main);
          background: rgba(51, 65, 85, 0.7);
        }

        .booking-tab-btn.active {
          background: var(--primary);
          color: #ffffff;
          border-color: var(--primary);
        }

        .empty-bookings-box {
          padding: 60px 20px;
          text-align: center;
          border-radius: var(--radius-lg);
        }

        .booking-item-card {
          padding: 22px;
          border-radius: var(--radius-lg);
          transition: border-color 0.2s ease;
        }

        .booking-item-card:hover {
          border-color: rgba(148, 163, 184, 0.3);
        }

        .booking-venue-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 6px;
        }

        .booking-sport-tag {
          font-size: 0.75rem;
          color: var(--primary);
          font-weight: 600;
        }

        .booking-meta-line {
          font-size: 0.85rem;
          color: #cbd5e1;
          margin-bottom: 4px;
          flex-wrap: wrap;
        }

        .booking-meta-location {
          font-size: 0.82rem;
          color: var(--text-muted);
          margin-bottom: 12px;
        }

        .booking-status-row {
          margin-top: 6px;
        }

        .booking-id-tag {
          font-size: 0.75rem;
          color: var(--text-dim);
          background: rgba(255, 255, 255, 0.05);
          padding: 2px 8px;
          border-radius: 4px;
        }

        .booking-cost-box {
          text-align: right;
        }

        .cost-tag {
          font-family: var(--font-heading);
          font-size: 1.35rem;
          font-weight: 800;
          color: #34d399;
        }

        .cost-sub {
          font-size: 0.72rem;
          color: var(--text-dim);
        }

        .booking-actions-row {
          margin-top: 18px;
          padding-top: 14px;
          border-top: 1px solid var(--border-subtle);
          flex-wrap: wrap;
          gap: 10px;
        }

        .no-cancel-badge {
          font-size: 0.78rem;
          color: #64748b;
          background: rgba(100, 116, 139, 0.12);
          padding: 4px 10px;
          border-radius: var(--radius-full);
          border: 1px solid rgba(100, 116, 139, 0.2);
        }

        .cancel-warning-box {
          background: rgba(245, 158, 11, 0.12);
          border: 1px solid rgba(245, 158, 11, 0.3);
          padding: 12px;
          border-radius: var(--radius-md);
          font-size: 0.88rem;
          color: #fde68a;
        }
      `})]})}function h0({setActivePage:e}){const{user:t,logout:n}=gt(),{bookings:a}=hr(),[s,i]=j.useState("bookings");if(!t)return r.jsxs("div",{className:"container",style:{padding:"80px 20px",textAlign:"center"},children:[r.jsx("h2",{style:{color:"#f8fafc",marginBottom:16},children:"Please log in to view your profile"}),r.jsx("button",{className:"btn btn-primary",onClick:()=>e("login"),children:"Go to Login"})]});const o=a.filter(l=>l.status==="Confirmed").length;return r.jsxs("div",{className:"profile-page-wrapper",children:[r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"profile-banner-card glass-card flex items-center justify-between",children:[r.jsxs("div",{className:"flex items-center gap-md",children:[r.jsx("img",{src:t.avatar,alt:t.name,className:"banner-avatar-img",onError:l=>{l.target.src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=250&q=80"}}),r.jsxs("div",{children:[r.jsxs("div",{className:"flex items-center gap-sm",children:[r.jsx("h1",{className:"banner-user-name",children:t.name}),r.jsx("span",{className:"banner-role-tag",children:t.role||"Player"})]}),r.jsx("p",{className:"banner-user-email",children:t.email}),r.jsxs("div",{className:"banner-stats-pills flex items-center gap-sm",style:{marginTop:6},children:[r.jsxs("span",{className:"stat-badge flex items-center gap-sm",children:[r.jsx(Og,{size:13,color:"#10B981"}),r.jsxs("span",{children:[o," Active Bookings"]})]}),r.jsxs("span",{className:"stat-badge flex items-center gap-sm",children:[r.jsx(Vo,{size:13,color:"#F59E0B"}),r.jsxs("span",{children:["Member since ",t.memberSince||"June 2025"]})]})]})]})]}),r.jsxs("button",{className:"btn btn-secondary hide-on-mobile",onClick:()=>{e("venues"),window.scrollTo(0,0)},children:[r.jsx(He,{size:16}),r.jsx("span",{children:"Book a Venue"})]})]}),r.jsxs("div",{className:"profile-layout-grid",children:[r.jsxs("aside",{className:"profile-sidebar-card glass-card",children:[r.jsx("div",{className:"sidebar-section-title",children:"Dashboard Menu"}),r.jsxs("div",{className:"sidebar-nav-list flex-col gap-sm",children:[r.jsxs("button",{className:`profile-nav-item ${s==="bookings"?"active":""}`,onClick:()=>i("bookings"),children:[r.jsx(He,{size:16}),r.jsx("span",{children:"All Bookings"})]}),r.jsxs("button",{className:`profile-nav-item ${s==="editProfile"?"active":""}`,onClick:()=>i("editProfile"),children:[r.jsx(Ho,{size:16}),r.jsx("span",{children:"Edit Profile"})]})]}),r.jsx("div",{className:"sidebar-divider"}),r.jsxs("button",{className:"profile-nav-item logout-nav-item",onClick:()=>{n(),e("home")},children:[r.jsx(Vi,{size:16}),r.jsx("span",{children:"Logout"})]})]}),r.jsxs("main",{className:"profile-tab-content",children:[s==="bookings"&&r.jsx(f0,{onExploreVenues:()=>e("venues")}),s==="editProfile"&&r.jsx(m0,{})]})]})]}),r.jsx("style",{children:`
        .profile-page-wrapper {
          padding: 30px 0 60px;
        }

        .profile-banner-card {
          padding: 28px 32px;
          border-radius: var(--radius-lg);
          margin-bottom: 32px;
          flex-wrap: wrap;
          gap: 20px;
        }

        .banner-avatar-img {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid var(--primary);
          box-shadow: 0 4px 14px rgba(16, 185, 129, 0.3);
        }

        .banner-user-name {
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--text-main);
        }

        .banner-role-tag {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--primary);
          background: var(--primary-light);
          padding: 2px 10px;
          border-radius: var(--radius-full);
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .banner-user-email {
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .banner-stats-pills {
          flex-wrap: wrap;
        }

        .stat-badge {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--text-muted);
          background: rgba(30, 41, 59, 0.6);
          padding: 3px 10px;
          border-radius: var(--radius-full);
          border: 1px solid var(--border-subtle);
        }

        .profile-layout-grid {
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 32px;
          align-items: start;
        }

        .profile-sidebar-card {
          padding: 20px;
          border-radius: var(--radius-lg);
          position: sticky;
          top: 96px;
        }

        .sidebar-section-title {
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--text-dim);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 12px;
          padding-left: 8px;
        }

        .profile-nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          padding: 12px 16px;
          border-radius: var(--radius-md);
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--text-muted);
          text-align: left;
          transition: all 0.2s ease;
        }

        .profile-nav-item:hover {
          background: var(--bg-card-hover);
          color: var(--text-main);
        }

        .profile-nav-item.active {
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%);
          color: #10B981;
          border: 1px solid rgba(16, 185, 129, 0.35);
          font-weight: 700;
        }

        .sidebar-divider {
          height: 1px;
          background: var(--border-subtle);
          margin: 12px 0;
        }

        .logout-nav-item:hover {
          background: rgba(239, 68, 68, 0.15);
          color: #f87171;
        }

        @media (max-width: 860px) {
          .profile-layout-grid {
            grid-template-columns: 1fr;
          }
          .profile-banner-card {
            padding: 20px;
          }
        }
      `})]})}const g0=200;async function ae(e,t={}){const{method:n="GET",data:a=null,params:s=null}=t;return localStorage.getItem("quickcourt_auth_token"),await new Promise(i=>setTimeout(i,g0)),null}const qi="quickcourt_venues_data_v2",xc="quickcourt_dataset_ver";function xr(){if(localStorage.getItem(xc)===qa){const t=localStorage.getItem(qi);if(t)try{return JSON.parse(t)}catch{}}return localStorage.setItem(xc,qa),localStorage.setItem(qi,JSON.stringify(Oi)),Oi}function oa(e){localStorage.setItem(qi,JSON.stringify(e))}const De={async getVenues(e={}){const t=await ae("/venues",{params:e});return t?Array.isArray(t)?t:t.venues||t:xr().filter(a=>a.status!=="pending"&&a.status!=="rejected")},async getVenueById(e){const t=await ae();return t?t.venue||t:xr().find(a=>a.id===e)||null},async createVenue(e){var s;const t=await ae("/venues",{method:"POST",data:e});if(t)return t;const n=xr(),a={...e,id:e.id||`venue-${Date.now()}`,status:e.status||"approved",rating:e.rating||5,reviewsCount:e.reviewsCount||0,reviews:e.reviews||[],courts:e.courts||[{id:"c1",name:"Court 1 (Main Mat)",surface:"Synthetic Mat",price:e.pricePerHour||300}],images:((s=e.images)==null?void 0:s.length)>0?e.images:["https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=1200&q=80"]};return n.push(a),oa(n),a},async updateVenue(e,t){const n=await ae(`/venues/${e}`,{method:"PUT",data:t});if(n)return n;const s=xr().map(i=>i.id===e?{...i,...t}:i);return oa(s),s.find(i=>i.id===e)},async deleteVenue(e){const t=await ae(`/venues/${e}`,{method:"DELETE"});if(t)return t;const a=xr().filter(s=>s.id!==e);return oa(a),{success:!0}},async addReview(e,t){const n=await ae(`/venues/${e}/reviews`,{method:"POST",data:t});if(n)return n;const a=xr(),s=new Date,i={id:`rev-${Date.now()}`,userName:t.userName||"Anonymous Player",userAvatar:t.userAvatar||"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",rating:parseFloat(t.rating)||5,date:s.toLocaleDateString("en-US",{day:"numeric",month:"long",year:"numeric"}),time:s.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0}),comment:t.comment},o=a.map(l=>{if(l.id!==e)return l;const c=[i,...l.reviews||[]],u=+(c.reduce((f,h)=>f+h.rating,0)/c.length).toFixed(1);return{...l,rating:u,reviewsCount:c.length,reviews:c}});return oa(o),i}},np="quickcourt_user_bookings",ap="quickcourt_blocked_slots";function Us(){const e=localStorage.getItem(np);if(e)try{return JSON.parse(e)}catch{}return Fu}function vc(e){localStorage.setItem(np,JSON.stringify(e))}function Vs(){const e=localStorage.getItem(ap);if(e)try{return JSON.parse(e)}catch{}return[{id:"blk-1",venueId:"sbr-badminton",courtId:"c1",date:new Date().toISOString().split("T")[0],timeSlot:"11:00 AM - 12:00 PM",reason:"Floor Maintenance"}]}function yc(e){localStorage.setItem(ap,JSON.stringify(e))}const ir={async getBookings(e={}){const t=await ae("/bookings",{params:e});if(t)return Array.isArray(t)?t:t.bookings||t;let n=Us();return e.userId&&(n=n.filter(a=>a.userId===e.userId||!a.userId)),e.status&&(n=n.filter(a=>a.status===e.status)),n},async createBooking(e){const t=await ae("/bookings",{method:"POST",data:e});if(t)return t.booking||t;const n=Us(),a={id:"QC-"+new Date().getFullYear()+"-"+Math.floor(1e3+Math.random()*9e3),...e,status:"Confirmed",createdAt:new Date().toISOString(),canCancel:!0,cancellationReason:null};return n.unshift(a),vc(n),a},async cancelBooking(e,t="Cancelled by user"){const n=await ae(`/bookings/${e}/cancel`,{method:"POST",data:{}});if(n)return n;const s=Us().map(i=>i.id!==e?i:{...i,status:"Cancelled",canCancel:!1,cancellationReason:t});return vc(s),{success:!0,bookingId:e}},async getBlockedSlots(e,t){const n=await ae(`/venues/${e}/blocked-slots`,{params:{}});return n?Array.isArray(n)?n:n.blockedSlots||n:Vs().filter(s=>(!e||s.venueId===e)&&(!t||s.date===t))},async blockSlot(e){const t=await ae("/courts/block-slot",{method:"POST",data:e});if(t)return t;const n=Vs(),a={id:`blk-${Date.now()}`,...e};return n.push(a),yc(n),a},async unblockSlot(e){const t=await ae(`/courts/unblock-slot/${e}`,{method:"DELETE"});if(t)return t;const a=Vs().filter(s=>s.id!==e);return yc(a),{success:!0}}},ja={async getDashboardStats(e="owner-1"){const t=await ae("/owner/dashboard-stats",{params:{}});if(t)return t;const n=await De.getVenues(),a=await ir.getBookings(),s=n.reduce((l,c)=>{var u;return l+(((u=c.courts)==null?void 0:u.length)||1)},0),i=a.filter(l=>l.status==="Confirmed"),o=i.reduce((l,c)=>l+(c.amount||300),0);return{totalBookings:a.length,activeCourts:s,totalEarnings:o,occupancyRate:"78%",todayBookingsCount:i.length,bookingTrends:[{label:"Mon",bookings:12,earnings:3600},{label:"Tue",bookings:18,earnings:5400},{label:"Wed",bookings:15,earnings:4500},{label:"Thu",bookings:22,earnings:6600},{label:"Fri",bookings:30,earnings:9e3},{label:"Sat",bookings:45,earnings:13500},{label:"Sun",bookings:40,earnings:12e3}],earningsBySport:[{sport:"Badminton",percentage:45,amount:Math.round(o*.45),color:"#06B6D4"},{sport:"Football / Turf",percentage:30,amount:Math.round(o*.3),color:"#10B981"},{sport:"Box Cricket",percentage:15,amount:Math.round(o*.15),color:"#F59E0B"},{sport:"Tennis / Pickleball",percentage:10,amount:Math.round(o*.1),color:"#EC4899"}],peakHours:[{hour:"6 AM - 9 AM",occupancy:"65%",intensity:.65},{hour:"9 AM - 12 PM",occupancy:"40%",intensity:.4},{hour:"12 PM - 4 PM",occupancy:"25%",intensity:.25},{hour:"4 PM - 7 PM",occupancy:"92%",intensity:.92},{hour:"7 PM - 10 PM",occupancy:"98%",intensity:.98},{hour:"10 PM - 12 AM",occupancy:"70%",intensity:.7}]}},async getOwnerFacilities(e="owner-1"){const t=await ae("/owner/facilities",{params:{}});return t?Array.isArray(t)?t:t.facilities||t:await De.getVenues()},async addCourt(e,t){const n=await ae(`/owner/facilities/${e}/courts`,{method:"POST",data:t});if(n)return n;const a=await De.getVenueById(e);if(!a)throw new Error("Venue not found");const s={id:`c-${Date.now()}`,name:t.name,surface:t.surface||"Synthetic Mat",price:Number(t.price)||300,sport:t.sport||a.sport},i=[...a.courts||[],s];return await De.updateVenue(e,{courts:i}),s},async updateCourt(e,t,n){const a=await ae(`/owner/facilities/${e}/courts/${t}`,{method:"PUT",data:n});if(a)return a;const s=await De.getVenueById(e);if(!s)throw new Error("Venue not found");const i=(s.courts||[]).map(o=>o.id===t?{...o,...n}:o);return await De.updateVenue(e,{courts:i}),{success:!0}},async deleteCourt(e,t){const n=await ae(`/owner/facilities/${e}/courts/${t}`,{method:"DELETE"});if(n)return n;const a=await De.getVenueById(e);if(!a)throw new Error("Venue not found");const s=(a.courts||[]).filter(i=>i.id!==t);return await De.updateVenue(e,{courts:s}),{success:!0}}};function Gi({data:e=[],title:t="Trends",valuePrefix:n="",height:a=220}){const[s,i]=j.useState(null);if(!e||e.length===0)return null;const o=e.map(f=>f.bookings??f.revenue??f.players??0),l=Math.max(...o,10),c=a-60,u=Math.max(24,Math.min(48,500/e.length-12));return r.jsxs("div",{className:"chart-wrapper glass-card",children:[r.jsxs("div",{className:"chart-header flex justify-between items-center",children:[r.jsx("h4",{className:"chart-title",children:t}),s!==null&&r.jsxs("span",{className:"chart-tooltip-badge",children:[e[s].label||e[s].month,": ",r.jsxs("strong",{children:[n,o[s]]})]})]}),r.jsx("div",{className:"chart-body",style:{height:`${c}px`},children:r.jsx("div",{className:"chart-bars-row flex items-end justify-between",style:{height:"100%",gap:8},children:e.map((f,h)=>{const m=o[h],v=Math.round(m/l*100),y=s===h;return r.jsxs("div",{className:"bar-col flex-col items-center",style:{flex:1,height:"100%",justifyContent:"flex-end"},onMouseEnter:()=>i(h),onMouseLeave:()=>i(null),children:[r.jsx("div",{className:`bar-fill ${y?"hovered":""}`,style:{height:`${v}%`,width:`${u}px`,background:y?"linear-gradient(180deg, #34D399 0%, #10B981 100%)":"linear-gradient(180deg, rgba(16, 185, 129, 0.8) 0%, rgba(6, 182, 212, 0.6) 100%)",borderRadius:"6px 6px 0 0",transition:"all 0.25s ease"}}),r.jsx("span",{className:"bar-label",children:f.label||f.month})]},h)})})}),r.jsx("style",{children:`
        .chart-wrapper {
          padding: 20px 24px;
          border-radius: var(--radius-lg);
        }

        .chart-title {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .chart-tooltip-badge {
          font-size: 0.8rem;
          background: rgba(16, 185, 129, 0.15);
          color: #34d399;
          border: 1px solid rgba(16, 185, 129, 0.3);
          padding: 3px 10px;
          border-radius: var(--radius-full);
        }

        .chart-body {
          margin-top: 16px;
          position: relative;
        }

        .bar-col {
          cursor: pointer;
        }

        .bar-fill.hovered {
          transform: scaleY(1.04);
          box-shadow: 0 0 16px rgba(16, 185, 129, 0.5);
        }

        .bar-label {
          font-size: 0.75rem;
          color: var(--text-dim);
          font-weight: 600;
          margin-top: 8px;
        }
      `})]})}function sp({data:e=[],title:t="Earnings Breakdown"}){return!e||e.length===0?null:r.jsxs("div",{className:"doughnut-wrapper glass-card",children:[r.jsx("h4",{className:"chart-title",children:t}),r.jsx("div",{className:"doughnut-content flex items-center justify-between gap-md",style:{marginTop:16},children:r.jsx("div",{className:"progress-stack",style:{flex:1,display:"flex",flexDirection:"column",gap:10},children:e.map((n,a)=>r.jsxs("div",{className:"progress-item",children:[r.jsxs("div",{className:"flex justify-between items-center",style:{fontSize:"0.82rem",marginBottom:4},children:[r.jsxs("span",{className:"flex items-center gap-sm",children:[r.jsx("span",{className:"color-dot",style:{background:n.color||"#10B981"}}),r.jsx("span",{style:{fontWeight:600,color:"#f8fafc"},children:n.sport||n.name})]}),r.jsx("span",{style:{fontWeight:700,color:n.color||"#34d399"},children:n.amount?`₹${n.amount.toLocaleString()}`:`${n.percentage}%`})]}),r.jsx("div",{className:"progress-track",style:{width:"100%",height:8,background:"#1e293b",borderRadius:4,overflow:"hidden"},children:r.jsx("div",{className:"progress-fill",style:{width:`${n.percentage}%`,height:"100%",background:n.color||"#10B981",borderRadius:4}})})]},a))})}),r.jsx("style",{children:`
        .doughnut-wrapper {
          padding: 20px 24px;
          border-radius: var(--radius-lg);
        }

        .chart-title {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .color-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          display: inline-block;
        }
      `})]})}function x0({data:e=[],title:t="Peak Booking Hours"}){return!e||e.length===0?null:r.jsxs("div",{className:"heatmap-wrapper glass-card",children:[r.jsxs("div",{className:"flex items-center justify-between",style:{marginBottom:16},children:[r.jsxs("h4",{className:"chart-title flex items-center gap-sm",children:[r.jsx(Vu,{size:16,color:"#F97316"}),r.jsx("span",{children:t})]}),r.jsx("span",{style:{fontSize:"0.75rem",color:"#94a3b8"},children:"Real-time court load"})]}),r.jsx("div",{className:"heatmap-grid flex-col gap-sm",children:e.map((n,a)=>{const s=n.intensity||.5,i=s>.8?"rgba(239, 68, 68, 0.85)":s>.5?"rgba(245, 158, 11, 0.8)":"rgba(16, 185, 129, 0.75)";return r.jsxs("div",{className:"heatmap-row flex items-center justify-between",children:[r.jsx("span",{className:"heat-time-label",children:n.hour}),r.jsx("div",{className:"heat-bar-track",style:{flex:1,margin:"0 12px"},children:r.jsx("div",{className:"heat-bar-fill",style:{width:`${Math.round(s*100)}%`,background:i,height:8,borderRadius:4}})}),r.jsx("span",{className:"heat-pct-badge",style:{color:i,fontWeight:700},children:n.occupancy})]},a)})}),r.jsx("style",{children:`
        .heatmap-wrapper {
          padding: 20px 24px;
          border-radius: var(--radius-lg);
        }

        .chart-title {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .heatmap-row {
          padding: 6px 0;
          font-size: 0.82rem;
        }

        .heat-time-label {
          width: 110px;
          color: var(--text-muted);
          font-weight: 500;
        }

        .heat-bar-track {
          background: #1e293b;
          height: 8px;
          border-radius: 4px;
          overflow: hidden;
        }

        .heat-pct-badge {
          width: 44px;
          text-align: right;
          font-size: 0.82rem;
        }
      `})]})}function v0({onNavigateTab:e}){const[t,n]=j.useState(null),[a,s]=j.useState("weekly");return j.useEffect(()=>{ja.getDashboardStats().then(n)},[]),t?r.jsxs("div",{className:"owner-dashboard-view flex-col gap-lg",children:[r.jsxs("div",{className:"owner-kpi-grid",children:[r.jsxs("div",{className:"kpi-card glass-card",children:[r.jsxs("div",{className:"flex justify-between items-start",children:[r.jsxs("div",{children:[r.jsx("span",{className:"kpi-label",children:"Total Bookings"}),r.jsx("h3",{className:"kpi-value",children:t.totalBookings})]}),r.jsx("div",{className:"kpi-icon-box",style:{background:"rgba(6, 182, 212, 0.15)",color:"#06B6D4"},children:r.jsx(He,{size:22})})]}),r.jsxs("div",{className:"kpi-sub flex items-center gap-sm",style:{color:"#34d399"},children:[r.jsx(Qu,{size:13}),r.jsx("span",{children:"+18% from last week"})]})]}),r.jsxs("div",{className:"kpi-card glass-card",children:[r.jsxs("div",{className:"flex justify-between items-start",children:[r.jsxs("div",{children:[r.jsx("span",{className:"kpi-label",children:"Active Courts"}),r.jsx("h3",{className:"kpi-value",children:t.activeCourts})]}),r.jsx("div",{className:"kpi-icon-box",style:{background:"rgba(16, 185, 129, 0.15)",color:"#10B981"},children:r.jsx($i,{size:22})})]}),r.jsx("div",{className:"kpi-sub flex items-center gap-sm",style:{color:"#38bdf8"},children:r.jsx("span",{children:"100% Operational status"})})]}),r.jsxs("div",{className:"kpi-card glass-card",children:[r.jsxs("div",{className:"flex justify-between items-start",children:[r.jsxs("div",{children:[r.jsx("span",{className:"kpi-label",children:"Simulated Earnings"}),r.jsxs("h3",{className:"kpi-value",children:["₹",t.totalEarnings.toLocaleString()]})]}),r.jsx("div",{className:"kpi-icon-box",style:{background:"rgba(245, 158, 11, 0.15)",color:"#F59E0B"},children:r.jsx(kh,{size:22})})]}),r.jsx("div",{className:"kpi-sub flex items-center gap-sm",style:{color:"#fbbf24"},children:r.jsx("span",{children:"Real-time settled payouts"})})]}),r.jsxs("div",{className:"kpi-card glass-card",children:[r.jsxs("div",{className:"flex justify-between items-start",children:[r.jsxs("div",{children:[r.jsx("span",{className:"kpi-label",children:"Slot Occupancy Rate"}),r.jsx("h3",{className:"kpi-value",children:t.occupancyRate})]}),r.jsx("div",{className:"kpi-icon-box",style:{background:"rgba(236, 72, 153, 0.15)",color:"#EC4899"},children:r.jsx(Kt,{size:22})})]}),r.jsx("div",{className:"kpi-sub flex items-center gap-sm",style:{color:"#f472b6"},children:r.jsx("span",{children:"Peak evening slots booked"})})]})]}),r.jsxs("div",{className:"charts-main-grid",children:[r.jsx("div",{className:"chart-col-span-2",children:r.jsx(Gi,{data:t.bookingTrends,title:"Daily & Weekly Booking Trends",valuePrefix:"₹",height:260})}),r.jsx("div",{className:"chart-col",children:r.jsx(sp,{data:t.earningsBySport,title:"Revenue Contribution by Sport"})})]}),r.jsxs("div",{className:"charts-secondary-grid",children:[r.jsx("div",{className:"chart-col",style:{flex:1},children:r.jsx(x0,{data:t.peakHours,title:"Peak Booking Hours & Court Load"})}),r.jsxs("div",{className:"shortcuts-card glass-card flex-col justify-between",style:{flex:1},children:[r.jsxs("div",{children:[r.jsx("h4",{style:{fontSize:"1.05rem",fontWeight:800,color:"#f8fafc",marginBottom:6},children:"Quick Facility Actions"}),r.jsx("p",{style:{fontSize:"0.85rem",color:"#94a3b8",marginBottom:18},children:"Manage court pricing, block slots for ground maintenance, or update facility photos."}),r.jsxs("div",{className:"shortcuts-buttons-list flex-col gap-sm",children:[r.jsxs("button",{className:"shortcut-btn flex items-center justify-between",onClick:()=>e("slots"),children:[r.jsxs("div",{className:"flex items-center gap-sm",children:[r.jsx(Kt,{size:16,color:"#06B6D4"}),r.jsx("span",{children:"Block Slots for Maintenance"})]}),r.jsx(Os,{size:15})]}),r.jsxs("button",{className:"shortcut-btn flex items-center justify-between",onClick:()=>e("courts"),children:[r.jsxs("div",{className:"flex items-center gap-sm",children:[r.jsx($i,{size:16,color:"#10B981"}),r.jsx("span",{children:"Add or Edit Court Pricing"})]}),r.jsx(Os,{size:15})]}),r.jsxs("button",{className:"shortcut-btn flex items-center justify-between",onClick:()=>e("facility"),children:[r.jsxs("div",{className:"flex items-center gap-sm",children:[r.jsx(fr,{size:16,color:"#F59E0B"}),r.jsx("span",{children:"Update Amenities & Photos"})]}),r.jsx(Os,{size:15})]})]})]}),r.jsxs("div",{className:"portal-help-note flex items-center gap-sm",style:{marginTop:18},children:[r.jsx(Vo,{size:16,color:"#10B981"}),r.jsx("span",{style:{fontSize:"0.78rem",color:"#cbd5e1"},children:"QuickCourt Partner Facility Badge Active"})]})]})]}),r.jsx("style",{children:`
        .owner-kpi-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
        }

        .kpi-card {
          padding: 20px;
          border-radius: var(--radius-lg);
        }

        .kpi-label {
          font-size: 0.8rem;
          color: var(--text-dim);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .kpi-value {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          font-weight: 900;
          color: var(--text-main);
          margin-top: 4px;
        }

        .kpi-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .kpi-sub {
          font-size: 0.76rem;
          font-weight: 600;
          margin-top: 12px;
        }

        .charts-main-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 24px;
        }

        .charts-secondary-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .shortcuts-card {
          padding: 24px;
          border-radius: var(--radius-lg);
        }

        .shortcut-btn {
          padding: 12px 16px;
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          color: var(--text-main);
          font-size: 0.88rem;
          font-weight: 600;
          transition: all 0.2s ease;
        }

        .shortcut-btn:hover {
          background: var(--bg-card-hover);
          border-color: rgba(16, 185, 129, 0.4);
          color: var(--primary);
        }

        .portal-help-note {
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.25);
          padding: 10px 14px;
          border-radius: var(--radius-md);
        }

        @media (max-width: 900px) {
          .charts-main-grid, .charts-secondary-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]}):r.jsx("div",{style:{padding:40,textAlign:"center"},children:"Loading dashboard analytics..."})}function y0(){const{showToast:e}=ze(),[t,n]=j.useState(null),[a,s]=j.useState(""),[i,o]=j.useState(""),[l,c]=j.useState(""),[u,f]=j.useState(""),[h,m]=j.useState("7:00 AM - 11:00 PM"),[v,y]=j.useState(""),[k,N]=j.useState([]),[d,p]=j.useState([]),[g,w]=j.useState(""),[z,S]=j.useState(!1);j.useEffect(()=>{De.getVenueById("sbr-badminton").then(R=>{R&&(n(R),s(R.name),o(R.area),c(R.fullAddress||""),f(R.about||""),m(R.operatingHours||"7:00 AM - 11:00 PM"),N(R.amenities||[]),p(R.images||[]))})},[]);const E=()=>{v.trim()&&!k.includes(v.trim())&&(N([...k,v.trim()]),y(""))},B=R=>{N(k.filter(G=>G!==R))},T=()=>{g.trim()&&(p([...d,g.trim()]),w(""),e("Photo added to gallery preview","info"))},C=R=>{p(d.filter((G,Z)=>Z!==R))},O=async R=>{R.preventDefault(),a.trim()&&(S(!0),await De.updateVenue((t==null?void 0:t.id)||"sbr-badminton",{name:a,area:i,fullAddress:l,about:u,operatingHours:h,amenities:k,images:d}),S(!1),e("Facility details saved successfully!","success"))};return t?r.jsxs("div",{className:"facility-mgmt-wrapper glass-card",children:[r.jsx("div",{className:"mgmt-header flex items-center justify-between",children:r.jsxs("div",{children:[r.jsx("h3",{className:"mgmt-title",children:"Facility Profile & Details"}),r.jsx("p",{className:"mgmt-sub",children:"Manage your venue branding, address, amenities, and player photo gallery."})]})}),r.jsxs("form",{onSubmit:O,className:"facility-form flex-col gap-lg",children:[r.jsxs("div",{className:"form-grid-2",children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Facility / Arena Name"}),r.jsx("input",{type:"text",className:"form-input",value:a,onChange:R=>s(R.target.value),required:!0})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Operating Hours"}),r.jsx("input",{type:"text",className:"form-input",placeholder:"e.g. 7:00 AM - 11:00 PM",value:h,onChange:R=>m(R.target.value),required:!0})]})]}),r.jsxs("div",{className:"form-grid-2",children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Short Area / Landmark"}),r.jsx("input",{type:"text",className:"form-input",value:i,onChange:R=>o(R.target.value),required:!0})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Full Street Address"}),r.jsx("input",{type:"text",className:"form-input",value:l,onChange:R=>c(R.target.value),required:!0})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"About Venue (Specifications, Flooring, Amenities Description)"}),r.jsx("textarea",{className:"form-textarea",rows:4,value:u,onChange:R=>f(R.target.value),required:!0})]}),r.jsxs("div",{className:"amenities-mgmt-box",children:[r.jsx("label",{className:"form-label",children:"Amenities & Player Offerings"}),r.jsxs("div",{className:"flex gap-sm",style:{marginBottom:12},children:[r.jsx("input",{type:"text",className:"form-input",placeholder:"e.g. Air Conditioning, Locker Rooms, Drinking Water...",value:v,onChange:R=>y(R.target.value),onKeyDown:R=>R.key==="Enter"&&(R.preventDefault(),E())}),r.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:E,children:[r.jsx(Wi,{size:16}),r.jsx("span",{children:"Add"})]})]}),r.jsx("div",{className:"amenities-chips-list flex flex-wrap gap-sm",children:k.map((R,G)=>r.jsxs("span",{className:"amenity-edit-chip flex items-center gap-sm",children:[r.jsx(Le,{size:13,color:"#10B981"}),r.jsx("span",{children:R}),r.jsx("button",{type:"button",className:"chip-delete-btn",onClick:()=>B(R),children:"×"})]},G))})]}),r.jsxs("div",{className:"gallery-mgmt-box",children:[r.jsx("label",{className:"form-label",children:"Venue Photos (Upload / Paste image URLs)"}),r.jsxs("div",{className:"flex gap-sm",style:{marginBottom:16},children:[r.jsx("input",{type:"url",className:"form-input",placeholder:"Paste photo URL (https://images.unsplash.com/...)",value:g,onChange:R=>w(R.target.value)}),r.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:T,children:[r.jsx(Wi,{size:16}),r.jsx("span",{children:"Add Photo"})]})]}),r.jsx("div",{className:"gallery-thumbs-grid",children:d.map((R,G)=>r.jsxs("div",{className:"gallery-thumb-item",children:[r.jsx("img",{src:R,alt:"",className:"thumb-preview-img"}),r.jsx("button",{type:"button",className:"delete-photo-btn",onClick:()=>C(G),title:"Remove photo",children:r.jsx(Ku,{size:14})})]},G))})]}),r.jsx("div",{style:{marginTop:12},children:r.jsxs("button",{type:"submit",className:"btn btn-primary btn-lg",disabled:z,children:[r.jsx(Gu,{size:18}),r.jsx("span",{children:z?"Saving Changes...":"Save Facility Details"})]})})]}),r.jsx("style",{children:`
        .facility-mgmt-wrapper {
          padding: 32px;
          border-radius: var(--radius-lg);
        }

        .mgmt-title {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--text-main);
        }

        .mgmt-sub {
          font-size: 0.88rem;
          color: var(--text-muted);
          margin-top: 4px;
          margin-bottom: 24px;
        }

        .amenities-mgmt-box, .gallery-mgmt-box {
          background: rgba(15, 23, 42, 0.45);
          border: 1px solid var(--border-subtle);
          padding: 20px;
          border-radius: var(--radius-md);
        }

        .amenity-edit-chip {
          background: rgba(30, 41, 59, 0.8);
          border: 1px solid var(--border-subtle);
          padding: 6px 12px;
          border-radius: var(--radius-full);
          font-size: 0.82rem;
          color: var(--text-main);
          font-weight: 600;
        }

        .chip-delete-btn {
          color: #ef4444;
          font-size: 1rem;
          line-height: 1;
          margin-left: 4px;
        }

        .gallery-thumbs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          gap: 12px;
        }

        .gallery-thumb-item {
          position: relative;
          height: 90px;
          border-radius: var(--radius-md);
          overflow: hidden;
          border: 1px solid var(--border-subtle);
        }

        .thumb-preview-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .delete-photo-btn {
          position: absolute;
          top: 6px;
          right: 6px;
          background: rgba(239, 68, 68, 0.85);
          color: #ffffff;
          width: 24px;
          height: 24px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `})]}):r.jsx("div",{style:{padding:40,textAlign:"center"},children:"Loading facility details..."})}function b0(){const{showToast:e}=ze(),[t,n]=j.useState(null),[a,s]=j.useState([]),[i,o]=j.useState(!1),[l,c]=j.useState(null),[u,f]=j.useState(""),[h,m]=j.useState("Synthetic BWF Mat"),[v,y]=j.useState(250),[k,N]=j.useState("badminton"),d=()=>{De.getVenueById("sbr-badminton").then(S=>{S&&(n(S),s(S.courts||[]))})};j.useEffect(()=>{d()},[]);const p=()=>{c(null),f(`Court ${a.length+1}`),m("Synthetic BWF Mat"),y(250),N((t==null?void 0:t.sport)||"badminton"),o(!0)},g=S=>{c(S),f(S.name),m(S.surface),y(S.price),N(S.sport||(t==null?void 0:t.sport)||"badminton"),o(!0)},w=async S=>{confirm("Are you sure you want to delete this court?")&&(await ja.deleteCourt(t.id,S),e("Court removed","info"),d())},z=async S=>{S.preventDefault(),l?(await ja.updateCourt(t.id,l.id,{name:u,surface:h,price:Number(v),sport:k}),e("Court updated successfully","success")):(await ja.addCourt(t.id,{name:u,surface:h,price:Number(v),sport:k}),e("New court added to venue","success")),o(!1),d()};return r.jsxs("div",{className:"court-mgmt-wrapper glass-card",children:[r.jsxs("div",{className:"mgmt-header flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsx("h3",{className:"mgmt-title",children:"Court & Pitch Management"}),r.jsx("p",{className:"mgmt-sub",children:"Add, customize surface specifications, and set hourly pricing for individual courts."})]}),r.jsxs("button",{className:"btn btn-primary btn-sm flex items-center gap-sm",onClick:p,children:[r.jsx(Wi,{size:16}),r.jsx("span",{children:"Add New Court"})]})]}),r.jsx("div",{className:"courts-grid-cards",children:a.map(S=>r.jsxs("div",{className:"court-card-item glass-card",children:[r.jsxs("div",{className:"court-card-header flex justify-between items-start",children:[r.jsxs("div",{children:[r.jsx("span",{className:"court-sport-badge",children:S.sport?S.sport.toUpperCase():"BADMINTON"}),r.jsx("h4",{className:"court-item-title",children:S.name})]}),r.jsxs("div",{className:"court-item-price",children:["₹",S.price," ",r.jsx("span",{style:{fontSize:"0.75rem",color:"#94a3b8"},children:"/hr"})]})]}),r.jsxs("div",{className:"court-item-surface flex items-center gap-sm",children:[r.jsx(Le,{size:14,color:"#10B981"}),r.jsx("span",{children:S.surface})]}),r.jsxs("div",{className:"court-actions-row flex items-center justify-end gap-sm",style:{marginTop:16,paddingTop:12,borderTop:"1px solid rgba(148, 163, 184, 0.1)"},children:[r.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>g(S),title:"Edit Court",children:[r.jsx(sg,{size:14}),r.jsx("span",{children:"Edit"})]}),r.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>w(S.id),title:"Delete Court",children:r.jsx(Ku,{size:14})})]})]},S.id))}),r.jsx(Pt,{isOpen:i,onClose:()=>o(!1),title:l?"Edit Court Details":"Add New Court",children:r.jsxs("form",{onSubmit:z,className:"flex-col gap-md",children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Court / Pitch Name"}),r.jsx("input",{type:"text",className:"form-input",value:u,onChange:S=>f(S.target.value),required:!0})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Surface Material / Specifications"}),r.jsxs("select",{className:"form-select",value:h,onChange:S=>m(S.target.value),children:[r.jsx("option",{value:"Synthetic BWF Mat",children:"Synthetic BWF Mat (Badminton)"}),r.jsx("option",{value:"Wooden Teak Court",children:"Wooden Teak Court (Badminton/Basketball)"}),r.jsx("option",{value:"FIFA Certified Astro Turf",children:"FIFA Certified Astro Turf (Football)"}),r.jsx("option",{value:"Box Cricket Astro Mat",children:"Box Cricket Astro Mat (Cricket)"}),r.jsx("option",{value:"DecoTurf Multi-layer",children:"DecoTurf Multi-layer (Tennis)"}),r.jsx("option",{value:"European Red Clay",children:"European Red Clay (Tennis)"}),r.jsx("option",{value:"8-layer Cushion Acrylic",children:"8-layer Cushion Acrylic (Pickleball)"})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Pricing Per Hour (₹)"}),r.jsx("input",{type:"number",min:"50",max:"5000",step:"50",className:"form-input",value:v,onChange:S=>y(S.target.value),required:!0})]}),r.jsxs("div",{className:"flex gap-sm",style:{marginTop:16},children:[r.jsx("button",{type:"button",className:"btn btn-secondary",style:{flex:1},onClick:()=>o(!1),children:"Cancel"}),r.jsx("button",{type:"submit",className:"btn btn-primary",style:{flex:1},children:"Save Court"})]})]})}),r.jsx("style",{children:`
        .court-mgmt-wrapper {
          padding: 32px;
          border-radius: var(--radius-lg);
        }

        .mgmt-title {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--text-main);
        }

        .mgmt-sub {
          font-size: 0.88rem;
          color: var(--text-muted);
          margin-top: 4px;
          margin-bottom: 24px;
        }

        .courts-grid-cards {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
        }

        .court-card-item {
          padding: 20px;
          border-radius: var(--radius-md);
          background: rgba(15, 23, 42, 0.6);
        }

        .court-sport-badge {
          font-size: 0.7rem;
          font-weight: 800;
          color: var(--primary);
          letter-spacing: 0.06em;
        }

        .court-item-title {
          font-size: 1.1rem;
          font-weight: 800;
          color: #f8fafc;
          margin-top: 2px;
        }

        .court-item-price {
          font-family: var(--font-heading);
          font-size: 1.3rem;
          font-weight: 800;
          color: #34d399;
        }

        .court-item-surface {
          font-size: 0.82rem;
          color: var(--text-muted);
          margin-top: 8px;
        }
      `})]})}function j0(){const{showToast:e}=ze(),t=new Date().toISOString().split("T")[0],[n,a]=j.useState(t),[s,i]=j.useState([]),[o,l]=j.useState(null),[c,u]=j.useState("Ground & Surface Maintenance"),f=()=>{ir.getBlockedSlots("sbr-badminton",n).then(i)};j.useEffect(()=>{f()},[n]);const h=y=>{l(y),u("Ground & Surface Maintenance")},m=async y=>{y.preventDefault(),o&&(await ir.blockSlot({venueId:"sbr-badminton",courtId:"c1",date:n,timeSlot:o,reason:c}),e(`Time slot ${o} blocked for maintenance`,"info"),l(null),f())},v=async y=>{await ir.unblockSlot(y),e("Time slot restored to available","success"),f()};return r.jsxs("div",{className:"slot-mgmt-wrapper glass-card",children:[r.jsxs("div",{className:"mgmt-header flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsx("h3",{className:"mgmt-title",children:"Time Slot & Maintenance Manager"}),r.jsx("p",{className:"mgmt-sub",children:"Block specific court hours for floor cleaning, equipment repairs, or private club tournaments."})]}),r.jsxs("div",{className:"date-picker-box flex items-center gap-sm",children:[r.jsx("span",{style:{fontSize:"0.85rem",color:"#94a3b8"},children:"Schedule Date:"}),r.jsx("input",{type:"date",className:"form-input",style:{width:"auto",padding:"6px 12px"},value:n,onChange:y=>a(y.target.value)})]})]}),r.jsxs("div",{className:"slot-schedule-table-card glass-card",children:[r.jsxs("div",{className:"slots-table-header flex justify-between items-center",children:[r.jsx("span",{style:{fontWeight:700,color:"#f8fafc",fontSize:"0.9rem"},children:"Time Slot (Court 1)"}),r.jsx("span",{style:{fontWeight:700,color:"#f8fafc",fontSize:"0.9rem"},children:"Status & Action"})]}),r.jsx("div",{className:"slots-schedule-list flex-col gap-sm",children:sn.map(y=>{const k=s.find(d=>d.timeSlot===y.label),N=!!k;return r.jsxs("div",{className:`slot-row-item flex items-center justify-between ${N?"is-blocked":""}`,children:[r.jsxs("div",{className:"flex items-center gap-sm",children:[r.jsx(Kt,{size:15,color:N?"#EF4444":"#10B981"}),r.jsx("span",{className:"slot-row-label",children:y.label}),r.jsxs("span",{className:"slot-row-period",children:["(",y.period,")"]})]}),r.jsx("div",{className:"flex items-center gap-md",children:N?r.jsxs(r.Fragment,{children:[r.jsxs("span",{className:"blocked-tag flex items-center gap-sm",children:[r.jsx(Ui,{size:12}),r.jsxs("span",{children:["Blocked: ",k.reason]})]}),r.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>v(k.id),title:"Unblock this slot",children:[r.jsx(Oh,{size:13}),r.jsx("span",{children:"Unblock"})]})]}):r.jsxs(r.Fragment,{children:[r.jsxs("span",{className:"available-tag flex items-center gap-sm",children:[r.jsx(Le,{size:12,color:"#10B981"}),r.jsx("span",{children:"Open / Available"})]}),r.jsxs("button",{className:"btn btn-outline btn-sm block-trigger-btn",onClick:()=>h(y.label),children:[r.jsx(Ui,{size:13}),r.jsx("span",{children:"Block Slot"})]})]})})]},y.id)})})]}),o&&r.jsx(Pt,{isOpen:!!o,onClose:()=>l(null),title:`Block Slot (${o})`,children:r.jsxs("form",{onSubmit:m,className:"flex-col gap-md",children:[r.jsxs("div",{className:"alert-block-info flex items-center gap-sm",children:[r.jsx(yg,{size:20,color:"#EF4444"}),r.jsxs("span",{children:["Blocking this slot will make it unselectable for players on ",n,"."]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Maintenance / Block Reason"}),r.jsxs("select",{className:"form-select",value:c,onChange:y=>u(y.target.value),children:[r.jsx("option",{value:"Ground & Surface Maintenance",children:"Ground & Surface Maintenance"}),r.jsx("option",{value:"Floodlight & Net Repairs",children:"Floodlight & Net Repairs"}),r.jsx("option",{value:"Private League Tournament",children:"Private League Tournament"}),r.jsx("option",{value:"Monsoon / Rain Waterlogging",children:"Monsoon / Rain Issue"})]})]}),r.jsxs("div",{className:"flex gap-sm",style:{marginTop:12},children:[r.jsx("button",{type:"button",className:"btn btn-secondary",style:{flex:1},onClick:()=>l(null),children:"Cancel"}),r.jsx("button",{type:"submit",className:"btn btn-danger",style:{flex:1},children:"Confirm Block"})]})]})}),r.jsx("style",{children:`
        .slot-mgmt-wrapper {
          padding: 32px;
          border-radius: var(--radius-lg);
        }

        .mgmt-title {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--text-main);
        }

        .mgmt-sub {
          font-size: 0.88rem;
          color: var(--text-muted);
          margin-top: 4px;
          margin-bottom: 24px;
        }

        .slot-schedule-table-card {
          padding: 20px;
          border-radius: var(--radius-md);
        }

        .slots-table-header {
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-subtle);
          margin-bottom: 12px;
        }

        .slot-row-item {
          padding: 12px 16px;
          border-radius: var(--radius-sm);
          background: rgba(15, 23, 42, 0.5);
          border: 1px solid var(--border-subtle);
          transition: all 0.2s ease;
        }

        .slot-row-item.is-blocked {
          background: rgba(239, 68, 68, 0.08);
          border-color: rgba(239, 68, 68, 0.3);
        }

        .slot-row-label {
          font-weight: 700;
          font-size: 0.88rem;
          color: var(--text-main);
        }

        .slot-row-period {
          font-size: 0.75rem;
          color: var(--text-dim);
        }

        .blocked-tag {
          font-size: 0.78rem;
          color: #f87171;
          font-weight: 600;
        }

        .available-tag {
          font-size: 0.78rem;
          color: #34d399;
          font-weight: 600;
        }

        .alert-block-info {
          background: rgba(239, 68, 68, 0.12);
          border: 1px solid rgba(239, 68, 68, 0.3);
          padding: 12px;
          border-radius: var(--radius-md);
          font-size: 0.85rem;
          color: #fca5a5;
        }
      `})]})}function w0(){const[e,t]=j.useState([]),[n,a]=j.useState("all"),[s,i]=j.useState("");j.useEffect(()=>{ir.getBookings().then(t)},[]);const o=e.filter(l=>{var f,h,m;const c=n==="all"||l.status===n,u=!s||((f=l.venueName)==null?void 0:f.toLowerCase().includes(s.toLowerCase()))||((h=l.id)==null?void 0:h.toLowerCase().includes(s.toLowerCase()))||((m=l.courtName)==null?void 0:m.toLowerCase().includes(s.toLowerCase()));return c&&u});return r.jsxs("div",{className:"owner-bookings-wrapper glass-card",children:[r.jsxs("div",{className:"mgmt-header flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsx("h3",{className:"mgmt-title",children:"Customer Bookings Overview"}),r.jsx("p",{className:"mgmt-sub",children:"Track all live, upcoming, and past reservations across your courts."})]}),r.jsxs("div",{className:"flex gap-sm",children:[r.jsx("input",{type:"text",className:"form-input",placeholder:"Search booking ID or court...",style:{width:240,padding:"6px 12px"},value:s,onChange:l=>i(l.target.value)}),r.jsxs("select",{className:"form-select",style:{width:"auto",padding:"6px 12px"},value:n,onChange:l=>a(l.target.value),children:[r.jsx("option",{value:"all",children:"All Statuses"}),r.jsx("option",{value:"Confirmed",children:"Confirmed"}),r.jsx("option",{value:"Cancelled",children:"Cancelled"})]})]})]}),r.jsx("div",{className:"bookings-table-container",children:r.jsxs("table",{className:"owner-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Booking ID"}),r.jsx("th",{children:"Court & Sport"}),r.jsx("th",{children:"Date & Time"}),r.jsx("th",{children:"Amount"}),r.jsx("th",{children:"Status"})]})}),r.jsx("tbody",{children:o.map(l=>r.jsxs("tr",{children:[r.jsx("td",{children:r.jsxs("span",{className:"table-booking-id",children:["#",l.id]})}),r.jsxs("td",{children:[r.jsx("div",{style:{fontWeight:700,color:"#f8fafc"},children:l.courtName||"Court 1 (Synthetic Mat)"}),r.jsx("div",{style:{fontSize:"0.75rem",color:"#10B981"},children:l.venueName})]}),r.jsxs("td",{children:[r.jsxs("div",{style:{fontSize:"0.85rem",color:"#f8fafc"},children:["📅 ",l.formattedDate||l.date]}),r.jsxs("div",{style:{fontSize:"0.78rem",color:"#94a3b8"},children:["⏰ ",l.timeSlot]})]}),r.jsx("td",{children:r.jsxs("span",{style:{fontWeight:800,color:"#34d399"},children:["₹",l.amount,".00"]})}),r.jsx("td",{children:l.status==="Confirmed"?r.jsx("span",{className:"status-confirmed",children:"✅ Confirmed"}):r.jsx("span",{className:"status-cancelled",children:"❌ Cancelled"})})]},l.id))})]})}),r.jsx("style",{children:`
        .owner-bookings-wrapper {
          padding: 32px;
          border-radius: var(--radius-lg);
        }

        .mgmt-title {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--text-main);
        }

        .mgmt-sub {
          font-size: 0.88rem;
          color: var(--text-muted);
          margin-top: 4px;
          margin-bottom: 24px;
        }

        .bookings-table-container {
          overflow-x: auto;
        }

        .owner-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }

        .owner-table th {
          padding: 12px 16px;
          font-size: 0.78rem;
          font-weight: 800;
          color: var(--text-dim);
          text-transform: uppercase;
          border-bottom: 1px solid var(--border-subtle);
        }

        .owner-table td {
          padding: 16px;
          border-bottom: 1px solid rgba(148, 163, 184, 0.08);
          font-size: 0.88rem;
        }

        .table-booking-id {
          font-family: monospace;
          font-weight: 700;
          color: var(--primary);
          background: rgba(16, 185, 129, 0.1);
          padding: 3px 8px;
          border-radius: 4px;
        }
      `})]})}function k0({setActivePage:e}){const[t,n]=j.useState("dashboard");return r.jsxs("div",{className:"owner-portal-page",children:[r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"owner-portal-header glass-card flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"flex items-center gap-sm",children:[r.jsx("span",{className:"owner-portal-tag",children:"FACILITY OWNER PORTAL"}),r.jsx("span",{className:"facility-live-indicator",children:"● SBR Badminton Arena (Active)"})]}),r.jsx("h1",{className:"portal-heading",children:"Facility Partner Dashboard"}),r.jsx("p",{className:"portal-sub",children:"Manage courts, monitor real-time revenue, and schedule slot maintenance."})]}),r.jsxs("button",{className:"btn btn-secondary hide-on-mobile",onClick:()=>e("venue-detail"),children:[r.jsx("span",{children:"View Public Listing"}),r.jsx($n,{size:14})]})]}),r.jsxs("div",{className:"owner-tab-nav-bar flex gap-sm",children:[r.jsxs("button",{className:`owner-tab-btn ${t==="dashboard"?"active":""}`,onClick:()=>n("dashboard"),children:[r.jsx(Hu,{size:15}),r.jsx("span",{children:"Dashboard & KPIs"})]}),r.jsxs("button",{className:`owner-tab-btn ${t==="facility"?"active":""}`,onClick:()=>n("facility"),children:[r.jsx(Un,{size:15}),r.jsx("span",{children:"Facility Details"})]}),r.jsxs("button",{className:`owner-tab-btn ${t==="courts"?"active":""}`,onClick:()=>n("courts"),children:[r.jsx($i,{size:15}),r.jsx("span",{children:"Court Management"})]}),r.jsxs("button",{className:`owner-tab-btn ${t==="slots"?"active":""}`,onClick:()=>n("slots"),children:[r.jsx(Kt,{size:15}),r.jsx("span",{children:"Time Slots & Maintenance"})]}),r.jsxs("button",{className:`owner-tab-btn ${t==="bookings"?"active":""}`,onClick:()=>n("bookings"),children:[r.jsx(He,{size:15}),r.jsx("span",{children:"Customer Bookings"})]})]}),r.jsxs("div",{className:"owner-content-area",style:{marginTop:24},children:[t==="dashboard"&&r.jsx(v0,{onNavigateTab:n}),t==="facility"&&r.jsx(y0,{}),t==="courts"&&r.jsx(b0,{}),t==="slots"&&r.jsx(j0,{}),t==="bookings"&&r.jsx(w0,{})]})]}),r.jsx("style",{children:`
        .owner-portal-page {
          padding: 30px 0 60px;
        }

        .owner-portal-header {
          padding: 24px 32px;
          border-radius: var(--radius-lg);
          margin-bottom: 24px;
        }

        .owner-portal-tag {
          font-size: 0.72rem;
          font-weight: 800;
          color: #06B6D4;
          background: rgba(6, 182, 212, 0.15);
          padding: 2px 8px;
          border-radius: var(--radius-sm);
          letter-spacing: 0.06em;
        }

        .facility-live-indicator {
          font-size: 0.78rem;
          color: #34d399;
          font-weight: 600;
        }

        .portal-heading {
          font-size: 1.8rem;
          font-weight: 900;
          color: var(--text-main);
          margin: 6px 0 4px;
        }

        .portal-sub {
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .owner-tab-nav-bar {
          overflow-x: auto;
          padding-bottom: 6px;
        }

        .owner-tab-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          border-radius: var(--radius-md);
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid var(--border-subtle);
          color: var(--text-muted);
          font-weight: 600;
          font-size: 0.88rem;
          white-space: nowrap;
          transition: all 0.2s ease;
        }

        .owner-tab-btn:hover {
          background: var(--bg-card-hover);
          color: var(--text-main);
        }

        .owner-tab-btn.active {
          background: linear-gradient(135deg, rgba(6, 182, 212, 0.2) 0%, rgba(16, 185, 129, 0.2) 100%);
          border-color: #06B6D4;
          color: #38bdf8;
          font-weight: 700;
          box-shadow: 0 0 12px rgba(6, 182, 212, 0.25);
        }
      `})]})}const ip="quickcourt_registered_users",op="quickcourt_moderation_reports",lp="quickcourt_pending_facilities",N0=[{id:"pending-1",name:"Smash Point Badminton Club",ownerName:"Vikas Shah",ownerEmail:"vikas.shah@smashpoint.com",city:"Ahmedabad",area:"Prahlad Nagar, Corporate Road",sports:["badminton"],courtsCount:4,pricePerHour:350,status:"pending",submittedAt:"2025-06-25T14:30:00Z",description:"New 4-court wooden badminton arena with premium Yonex equipment and shower facilities.",images:["https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1613918431703-aa503525287e?auto=format&fit=crop&w=800&q=80"]},{id:"pending-2",name:"Thunderbolt Box Cricket Turf",ownerName:"Jayesh Patel",ownerEmail:"jayesh@thunderbolt.in",city:"Surat",area:"Adajan, Pal Road",sports:["cricket","football"],courtsCount:2,pricePerHour:700,status:"pending",submittedAt:"2025-06-27T09:15:00Z",description:"High-roof box cricket and mini turf football ground with 4K floodlights and livestream cameras.",images:["https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80"]}],S0=[{id:"rep-1",type:"Venue Issue",targetName:"Champions Box Cricket Arena",reportedBy:"Rajiv Malhotra",reason:"Lighting failure on pitch 2 during scheduled evening match.",date:"2025-06-20",status:"open"},{id:"rep-2",type:"User Conduct",targetName:"Player: Aman Verma",reportedBy:"Skyline Arena Owner",reason:"Repeated late arrival and damaged racket rental equipment.",date:"2025-06-22",status:"open"}];function Ws(){const e=localStorage.getItem(ip);if(e)try{return JSON.parse(e)}catch{}return[{id:"usr-1",name:"Mitchell Admin",email:"mitchell.admin@quickcourt.com",role:"Admin",status:"Active",bookingsCount:3,createdAt:"2024-01-15"},{id:"usr-2",name:"Rohan Sharma (Player)",email:"rohan.sharma@example.com",role:"Player",status:"Active",bookingsCount:7,createdAt:"2024-03-20"},{id:"usr-3",name:"Devendra Patel (Owner)",email:"devendra.sbr@gmail.com",role:"Facility Owner",status:"Active",bookingsCount:42,createdAt:"2024-02-10"},{id:"usr-4",name:"Kunal Singhania",email:"kunal.singh@yahoo.com",role:"Player",status:"Banned",bookingsCount:1,createdAt:"2024-05-18"}]}function C0(e){localStorage.setItem(ip,JSON.stringify(e))}function la(){const e=localStorage.getItem(lp);if(e)try{return JSON.parse(e)}catch{}return N0}function bc(e){localStorage.setItem(lp,JSON.stringify(e))}function jc(){const e=localStorage.getItem(op);if(e)try{return JSON.parse(e)}catch{}return S0}function z0(e){localStorage.setItem(op,JSON.stringify(e))}const Ht={async getDashboardStats(){const e=await ae();if(e)return e;const t=Ws(),n=await De.getVenues(),a=await ir.getBookings(),s=la(),i=t.filter(c=>c.role==="Player").length,o=t.filter(c=>c.role==="Facility Owner").length,l=n.reduce((c,u)=>{var f;return c+(((f=u.courts)==null?void 0:f.length)||1)},0);return{totalUsers:Math.max(i,128),totalOwners:Math.max(o,24),totalBookings:Math.max(a.length,560),totalActiveCourts:l,pendingApprovalsCount:s.length,userTrends:[{month:"Jan",players:45,owners:5},{month:"Feb",players:78,owners:9},{month:"Mar",players:110,owners:14},{month:"Apr",players:155,owners:18},{month:"May",players:210,owners:22},{month:"Jun",players:280,owners:28}],mostActiveSports:[{name:"Badminton",count:240,percentage:42,color:"#06B6D4"},{name:"Football / Turf",count:160,percentage:28,color:"#10B981"},{name:"Box Cricket",count:98,percentage:17,color:"#F59E0B"},{name:"Tennis",count:42,percentage:8,color:"#84CC16"},{name:"Pickleball",count:28,percentage:5,color:"#EC4899"}],monthlyRevenue:[{month:"Jan",revenue:45e3},{month:"Feb",revenue:68e3},{month:"Mar",revenue:92e3},{month:"Apr",revenue:125e3},{month:"May",revenue:164e3},{month:"Jun",revenue:215e3}]}},async getPendingFacilities(){const e=await ae();return e?Array.isArray(e)?e:e.pendingFacilities||e:la()},async approveFacility(e,t=""){const n=await ae(`/admin/facilities/${e}/approve`,{method:"POST",data:{}});if(n)return n;const a=la(),s=a.find(i=>i.id===e);return s&&(await De.createVenue({id:`venue-${Date.now()}`,name:s.name,city:s.city.toLowerCase(),area:s.area,fullAddress:`${s.area}, ${s.city}`,rating:5,reviewsCount:1,pricePerHour:s.pricePerHour,sport:s.sports[0]||"badminton",sportName:"Badminton",sportIcon:"🏸",venueType:"indoor",isTopRated:!0,isBudget:!0,about:s.description,images:s.images,operatingHours:"6:00 AM - 11:00 PM",courts:[{id:"c1",name:"Court 1 (Main Court)",surface:"Synthetic BWF Mat",price:s.pricePerHour}]}),bc(a.filter(i=>i.id!==e))),{success:!0}},async rejectFacility(e,t=""){const n=await ae(`/admin/facilities/${e}/reject`,{method:"POST",data:{}});if(n)return n;const a=la();return bc(a.filter(s=>s.id!==e)),{success:!0}},async getAllUsers(){const e=await ae();return e?Array.isArray(e)?e:e.users||e:Ws()},async toggleUserBan(e){const t=await ae(`/admin/users/${e}/toggle-ban`,{method:"POST"});if(t)return t.user||t;const a=Ws().map(s=>s.id!==e?s:{...s,status:s.status==="Active"?"Banned":"Active"});return C0(a),a.find(s=>s.id===e)},async getReports(){const e=await ae();return e?Array.isArray(e)?e:e.reports||e:jc()},async resolveReport(e,t="resolved"){const n=await ae(`/admin/reports/${e}/resolve`,{method:"POST",data:{}});if(n)return n;const s=jc().map(i=>i.id===e?{...i,status:"resolved",resolution:t}:i);return z0(s),{success:!0}}};function M0({onNavigateTab:e}){const[t,n]=j.useState(null);return j.useEffect(()=>{Ht.getDashboardStats().then(n)},[]),t?r.jsxs("div",{className:"admin-dashboard-view flex-col gap-lg",children:[r.jsxs("div",{className:"admin-kpi-grid",children:[r.jsxs("div",{className:"kpi-card glass-card",children:[r.jsxs("div",{className:"flex justify-between items-start",children:[r.jsxs("div",{children:[r.jsx("span",{className:"kpi-label",children:"Total Players (Users)"}),r.jsx("h3",{className:"kpi-value",children:t.totalUsers})]}),r.jsx("div",{className:"kpi-icon-box",style:{background:"rgba(16, 185, 129, 0.15)",color:"#10B981"},children:r.jsx(Yu,{size:22})})]}),r.jsxs("div",{className:"kpi-sub flex items-center gap-sm",style:{color:"#34d399"},children:[r.jsx(Qu,{size:13}),r.jsx("span",{children:"+32% MoM growth"})]})]}),r.jsxs("div",{className:"kpi-card glass-card",children:[r.jsxs("div",{className:"flex justify-between items-start",children:[r.jsxs("div",{children:[r.jsx("span",{className:"kpi-label",children:"Facility Owners"}),r.jsx("h3",{className:"kpi-value",children:t.totalOwners})]}),r.jsx("div",{className:"kpi-icon-box",style:{background:"rgba(6, 182, 212, 0.15)",color:"#06B6D4"},children:r.jsx(Un,{size:22})})]}),r.jsx("div",{className:"kpi-sub flex items-center gap-sm",style:{color:"#38bdf8"},children:r.jsx("span",{children:"Verified arena partners"})})]}),r.jsxs("div",{className:"kpi-card glass-card",children:[r.jsxs("div",{className:"flex justify-between items-start",children:[r.jsxs("div",{children:[r.jsx("span",{className:"kpi-label",children:"Total Bookings"}),r.jsx("h3",{className:"kpi-value",children:t.totalBookings})]}),r.jsx("div",{className:"kpi-icon-box",style:{background:"rgba(245, 158, 11, 0.15)",color:"#F59E0B"},children:r.jsx(He,{size:22})})]}),r.jsx("div",{className:"kpi-sub flex items-center gap-sm",style:{color:"#fbbf24"},children:r.jsx("span",{children:"Matches facilitated"})})]}),r.jsxs("div",{className:"kpi-card glass-card pointer-kpi",onClick:()=>e("approvals"),children:[r.jsxs("div",{className:"flex justify-between items-start",children:[r.jsxs("div",{children:[r.jsx("span",{className:"kpi-label",children:"Pending Approvals"}),r.jsx("h3",{className:"kpi-value",style:{color:t.pendingApprovalsCount>0?"#F59E0B":"#10B981"},children:t.pendingApprovalsCount})]}),r.jsx("div",{className:"kpi-icon-box",style:{background:"rgba(245, 158, 11, 0.15)",color:"#F59E0B"},children:r.jsx(Ue,{size:22})})]}),r.jsx("div",{className:"kpi-sub flex items-center gap-sm",style:{color:"#F59E0B"},children:r.jsx("span",{children:"Click to review submissions →"})})]})]}),r.jsxs("div",{className:"charts-main-grid",children:[r.jsx("div",{className:"chart-col-span-2",children:r.jsx(Gi,{data:t.userTrends.map(a=>({month:a.month,bookings:a.players})),title:"User Registration Trends (Monthly Growth)",valuePrefix:"",height:260})}),r.jsx("div",{className:"chart-col",children:r.jsx(sp,{data:t.mostActiveSports,title:"Most Active Sports Distribution"})})]}),r.jsx("div",{children:r.jsx(Gi,{data:t.monthlyRevenue.map(a=>({month:a.month,bookings:a.revenue})),title:"Platform Gross Booking Volume (INR ₹)",valuePrefix:"₹",height:240})}),r.jsx("style",{children:`
        .admin-kpi-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
        }

        .pointer-kpi {
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .pointer-kpi:hover {
          transform: translateY(-2px);
          border-color: rgba(245, 158, 11, 0.5);
        }
      `})]}):r.jsx("div",{style:{padding:40,textAlign:"center"},children:"Loading system analytics..."})}function P0(){const{showToast:e}=ze(),[t,n]=j.useState([]),[a,s]=j.useState(null),[i,o]=j.useState(""),[l,c]=j.useState(null),u=()=>{Ht.getPendingFacilities().then(n)};j.useEffect(()=>{u()},[]);const f=(m,v)=>{s(m),c(v),o(v==="approve"?"Facility verified and approved for live bookings.":"Incomplete documentation or unclear photos.")},h=async m=>{m.preventDefault(),a&&(l==="approve"?(await Ht.approveFacility(a.id,i),e(`Approved "${a.name}" and added to live venues!`,"success")):(await Ht.rejectFacility(a.id,i),e(`Rejected registration for "${a.name}".`,"info")),s(null),c(null),u())};return r.jsxs("div",{className:"approvals-mgmt-wrapper glass-card",children:[r.jsxs("div",{className:"mgmt-header flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsx("h3",{className:"mgmt-title",children:"Facility Registration Approvals"}),r.jsx("p",{className:"mgmt-sub",children:"Review new facility owner submissions, inspect turf flooring, and approve for public bookings."})]}),r.jsxs("span",{className:"pending-counter-tag",children:[t.length," Pending Review"]})]}),t.length===0?r.jsxs("div",{className:"empty-approvals-box flex-col items-center justify-center",children:[r.jsx(Le,{size:48,color:"#10B981"}),r.jsx("h4",{style:{color:"#f8fafc",marginTop:14},children:"All Facility Requests Reviewed!"}),r.jsx("p",{style:{color:"#94a3b8",fontSize:"0.88rem",marginTop:4},children:"There are currently no pending facility owner registrations waiting for admin approval."})]}):r.jsx("div",{className:"pending-cards-grid",children:t.map(m=>r.jsxs("div",{className:"pending-item-card glass-card",children:[r.jsxs("div",{className:"pending-card-image-wrap",children:[r.jsx("img",{src:m.images[0],alt:m.name,className:"pending-card-img"}),r.jsx("span",{className:"pending-status-badge",children:"PENDING REVIEW"})]}),r.jsxs("div",{className:"pending-card-body",children:[r.jsx("h4",{className:"pending-facility-name",children:m.name}),r.jsxs("div",{className:"pending-meta-row flex items-center gap-sm",children:[r.jsx(ct,{size:13,color:"#10B981"}),r.jsxs("span",{children:[m.area,", ",m.city]})]}),r.jsxs("div",{className:"pending-meta-row flex items-center gap-sm",style:{marginTop:4},children:[r.jsx(Un,{size:13,color:"#06B6D4"}),r.jsxs("span",{children:["Owner: ",m.ownerName," (",m.ownerEmail,")"]})]}),r.jsx("p",{className:"pending-desc-snippet",children:m.description}),r.jsxs("div",{className:"pending-specs-pills flex items-center gap-sm",children:[r.jsxs("span",{className:"spec-pill",children:[m.courtsCount," Courts"]}),r.jsxs("span",{className:"spec-pill",children:["₹",m.pricePerHour,"/hr"]})]}),r.jsxs("div",{className:"pending-actions-row flex gap-sm",style:{marginTop:16},children:[r.jsxs("button",{className:"btn btn-primary btn-sm flex items-center justify-center gap-sm",style:{flex:1},onClick:()=>f(m,"approve"),children:[r.jsx(Le,{size:14}),r.jsx("span",{children:"Approve"})]}),r.jsxs("button",{className:"btn btn-danger btn-sm flex items-center justify-center gap-sm",style:{flex:1},onClick:()=>f(m,"reject"),children:[r.jsx(xh,{size:14}),r.jsx("span",{children:"Reject"})]})]})]})]},m.id))}),a&&l&&r.jsx(Pt,{isOpen:!!a,onClose:()=>{s(null),c(null)},title:l==="approve"?`Approve "${a.name}"`:`Reject "${a.name}"`,children:r.jsxs("form",{onSubmit:h,className:"flex-col gap-md",children:[r.jsxs("div",{className:"decision-preview-box",children:[r.jsx("div",{style:{fontWeight:700,color:"#f8fafc",marginBottom:4},children:a.name}),r.jsxs("div",{style:{fontSize:"0.82rem",color:"#94a3b8"},children:["📍 ",a.area,", ",a.city]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:l==="approve"?"Approval Comments (Optional for Owner)":"Reason for Rejection"}),r.jsx("textarea",{className:"form-textarea",rows:3,value:i,onChange:m=>o(m.target.value),required:l==="reject"})]}),r.jsxs("div",{className:"flex gap-sm",style:{marginTop:12},children:[r.jsx("button",{type:"button",className:"btn btn-secondary",style:{flex:1},onClick:()=>{s(null),c(null)},children:"Cancel"}),r.jsx("button",{type:"submit",className:`btn ${l==="approve"?"btn-primary":"btn-danger"}`,style:{flex:1},children:l==="approve"?"Confirm Approval":"Confirm Rejection"})]})]})}),r.jsx("style",{children:`
        .approvals-mgmt-wrapper {
          padding: 32px;
          border-radius: var(--radius-lg);
        }

        .pending-counter-tag {
          background: rgba(245, 158, 11, 0.15);
          color: #F59E0B;
          border: 1px solid rgba(245, 158, 11, 0.3);
          padding: 4px 12px;
          border-radius: var(--radius-full);
          font-size: 0.78rem;
          font-weight: 800;
        }

        .empty-approvals-box {
          padding: 60px 20px;
          text-align: center;
        }

        .pending-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 24px;
        }

        .pending-item-card {
          border-radius: var(--radius-md);
          overflow: hidden;
          background: rgba(15, 23, 42, 0.6);
        }

        .pending-card-image-wrap {
          position: relative;
          height: 160px;
        }

        .pending-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .pending-status-badge {
          position: absolute;
          top: 10px;
          left: 10px;
          background: rgba(245, 158, 11, 0.9);
          color: #0b1120;
          font-size: 0.68rem;
          font-weight: 800;
          padding: 3px 8px;
          border-radius: 4px;
          letter-spacing: 0.05em;
        }

        .pending-card-body {
          padding: 20px;
        }

        .pending-facility-name {
          font-size: 1.15rem;
          font-weight: 800;
          color: #f8fafc;
          margin-bottom: 6px;
        }

        .pending-meta-row {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .pending-desc-snippet {
          font-size: 0.82rem;
          color: var(--text-dim);
          line-height: 1.5;
          margin: 10px 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .spec-pill {
          background: rgba(30, 41, 59, 0.8);
          border: 1px solid var(--border-subtle);
          padding: 3px 10px;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 700;
          color: #34d399;
        }

        .decision-preview-box {
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid var(--border-subtle);
          padding: 12px 16px;
          border-radius: var(--radius-md);
        }
      `})]})}function E0(){const{showToast:e}=ze(),[t,n]=j.useState([]),[a,s]=j.useState(""),[i,o]=j.useState("all"),[l,c]=j.useState("all"),[u,f]=j.useState(null),[h,m]=j.useState([]),v=()=>{Ht.getAllUsers().then(n)};j.useEffect(()=>{v()},[]);const y=async d=>{const p=d.status==="Active"?"ban":"unban";confirm(`Are you sure you want to ${p} ${d.name}?`)&&(await Ht.toggleUserBan(d.id),e(`User ${d.name} is now ${d.status==="Active"?"Banned":"Active"}`,"info"),v())},k=async d=>{f(d);const p=await ir.getBookings();m(p)},N=t.filter(d=>{const p=!a||d.name.toLowerCase().includes(a.toLowerCase())||d.email.toLowerCase().includes(a.toLowerCase()),g=i==="all"||d.role===i,w=l==="all"||d.status===l;return p&&g&&w});return r.jsxs("div",{className:"user-mgmt-wrapper glass-card",children:[r.jsx("div",{className:"mgmt-header flex items-center justify-between",children:r.jsxs("div",{children:[r.jsx("h3",{className:"mgmt-title",children:"User & Account Moderation"}),r.jsx("p",{className:"mgmt-sub",children:"Manage player profiles, facility partner accounts, ban status, and booking history logs."})]})}),r.jsxs("div",{className:"user-filter-bar flex gap-sm",style:{marginBottom:20},children:[r.jsx("div",{style:{flex:1},children:r.jsx("input",{type:"text",className:"form-input",placeholder:"Search by user name or email...",value:a,onChange:d=>s(d.target.value)})}),r.jsxs("select",{className:"form-select",style:{width:"auto"},value:i,onChange:d=>o(d.target.value),children:[r.jsx("option",{value:"all",children:"All Roles"}),r.jsx("option",{value:"Player",children:"Players (Users)"}),r.jsx("option",{value:"Facility Owner",children:"Facility Owners"}),r.jsx("option",{value:"Admin",children:"Admins"})]}),r.jsxs("select",{className:"form-select",style:{width:"auto"},value:l,onChange:d=>c(d.target.value),children:[r.jsx("option",{value:"all",children:"All Statuses"}),r.jsx("option",{value:"Active",children:"Active"}),r.jsx("option",{value:"Banned",children:"Banned"})]})]}),r.jsx("div",{className:"table-responsive-box",children:r.jsxs("table",{className:"admin-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"User / Name"}),r.jsx("th",{children:"Role"}),r.jsx("th",{children:"Status"}),r.jsx("th",{children:"Registered"}),r.jsx("th",{children:"Activity"}),r.jsx("th",{children:"Actions"})]})}),r.jsx("tbody",{children:N.map(d=>r.jsxs("tr",{children:[r.jsxs("td",{children:[r.jsx("div",{style:{fontWeight:700,color:"#f8fafc"},children:d.name}),r.jsx("div",{style:{fontSize:"0.78rem",color:"#94a3b8"},children:d.email})]}),r.jsx("td",{children:r.jsx("span",{className:`role-badge ${d.role==="Admin"?"badge-admin":d.role==="Facility Owner"?"badge-owner":"badge-player"}`,children:d.role})}),r.jsx("td",{children:d.status==="Active"?r.jsx("span",{className:"status-confirmed",children:"● Active"}):r.jsx("span",{className:"status-cancelled",children:"● Banned"})}),r.jsx("td",{children:r.jsx("span",{style:{fontSize:"0.82rem",color:"#94a3b8"},children:d.createdAt})}),r.jsx("td",{children:r.jsxs("button",{className:"btn btn-secondary btn-sm flex items-center gap-sm",onClick:()=>k(d),children:[r.jsx(He,{size:13}),r.jsxs("span",{children:[d.bookingsCount||3," Bookings"]})]})}),r.jsx("td",{children:d.role!=="Admin"?r.jsx("button",{className:`btn btn-sm ${d.status==="Active"?"btn-danger":"btn-primary"}`,onClick:()=>y(d),children:d.status==="Active"?"Ban User":"Unban"}):r.jsx("span",{style:{fontSize:"0.75rem",color:"#64748B"},children:"System Root"})})]},d.id))})]})}),u&&r.jsx(Pt,{isOpen:!!u,onClose:()=>f(null),title:`Booking History – ${u.name}`,children:r.jsxs("div",{className:"flex-col gap-sm",children:[r.jsxs("p",{style:{fontSize:"0.85rem",color:"#94a3b8",marginBottom:12},children:["Account: ",r.jsx("strong",{children:u.email})," | Role: ",r.jsx("strong",{children:u.role})]}),h.slice(0,4).map(d=>r.jsxs("div",{className:"history-booking-row flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsx("div",{style:{fontWeight:700,color:"#f8fafc",fontSize:"0.9rem"},children:d.venueName}),r.jsxs("div",{style:{fontSize:"0.78rem",color:"#94a3b8"},children:[d.courtName," • ",d.formattedDate||d.date," (",d.timeSlot,")"]})]}),r.jsxs("div",{style:{textAlign:"right"},children:[r.jsxs("div",{style:{fontWeight:800,color:"#34d399",fontSize:"0.9rem"},children:["₹",d.amount,".00"]}),r.jsx("span",{style:{fontSize:"0.72rem",color:d.status==="Confirmed"?"#34d399":"#f87171"},children:d.status})]})]},d.id)),r.jsx("button",{className:"btn btn-secondary",style:{marginTop:16},onClick:()=>f(null),children:"Close"})]})}),r.jsx("style",{children:`
        .user-mgmt-wrapper {
          padding: 32px;
          border-radius: var(--radius-lg);
        }

        .table-responsive-box {
          overflow-x: auto;
        }

        .admin-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }

        .admin-table th {
          padding: 12px 16px;
          font-size: 0.78rem;
          font-weight: 800;
          color: var(--text-dim);
          text-transform: uppercase;
          border-bottom: 1px solid var(--border-subtle);
        }

        .admin-table td {
          padding: 16px;
          border-bottom: 1px solid rgba(148, 163, 184, 0.08);
          font-size: 0.88rem;
        }

        .role-badge {
          font-size: 0.72rem;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: var(--radius-full);
        }

        .badge-player {
          background: rgba(16, 185, 129, 0.15);
          color: #10B981;
        }

        .badge-owner {
          background: rgba(6, 182, 212, 0.15);
          color: #06B6D4;
        }

        .badge-admin {
          background: rgba(245, 158, 11, 0.15);
          color: #F59E0B;
        }

        .history-booking-row {
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid var(--border-subtle);
          padding: 12px 16px;
          border-radius: var(--radius-md);
        }
      `})]})}function T0(){const{showToast:e}=ze(),[t,n]=j.useState([]),a=()=>{Ht.getReports().then(n)};j.useEffect(()=>{a()},[]);const s=async(i,o)=>{await Ht.resolveReport(i,o),e(`Report marked as ${o}`,"success"),a()};return r.jsxs("div",{className:"reports-mgmt-wrapper glass-card",children:[r.jsx("div",{className:"mgmt-header flex items-center justify-between",children:r.jsxs("div",{children:[r.jsx("h3",{className:"mgmt-title",children:"Reports & Platform Moderation"}),r.jsx("p",{className:"mgmt-sub",children:"Investigate player disputes, damaged gear complaints, and facility violations."})]})}),r.jsx("div",{className:"reports-list-cards flex-col gap-md",children:t.map(i=>r.jsxs("div",{className:"report-card-item glass-card",children:[r.jsxs("div",{className:"flex justify-between items-start",children:[r.jsxs("div",{className:"flex items-center gap-sm",children:[r.jsxs("span",{className:"report-type-badge flex items-center gap-sm",children:[r.jsx(Uu,{size:12,color:"#EF4444"}),r.jsx("span",{children:i.type})]}),r.jsxs("span",{style:{fontSize:"0.78rem",color:"#94a3b8"},children:["Reported on ",i.date]})]}),r.jsx("span",{className:`status-pill ${i.status==="open"?"status-open":"status-resolved"}`,children:i.status==="open"?"⚠️ Open Investigation":"✅ Resolved"})]}),r.jsxs("div",{style:{marginTop:12},children:[r.jsxs("div",{style:{fontSize:"1rem",fontWeight:800,color:"#f8fafc"},children:["Subject: ",r.jsx("span",{style:{color:"#38bdf8"},children:i.targetName})]}),r.jsxs("div",{style:{fontSize:"0.82rem",color:"#94a3b8",marginTop:2},children:["Reported by: ",r.jsx("strong",{children:i.reportedBy})]}),r.jsxs("p",{className:"report-reason-text",children:['"',i.reason,'"']})]}),i.status==="open"&&r.jsxs("div",{className:"report-actions-row flex justify-end gap-sm",style:{marginTop:16},children:[r.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>s(i.id,"dismissed"),children:"Dismiss Report"}),r.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>s(i.id,"warned"),children:"Issue Official Warning"})]})]},i.id))}),r.jsx("style",{children:`
        .reports-mgmt-wrapper {
          padding: 32px;
          border-radius: var(--radius-lg);
        }

        .report-card-item {
          padding: 20px;
          border-radius: var(--radius-md);
          background: rgba(15, 23, 42, 0.6);
        }

        .report-type-badge {
          background: rgba(239, 68, 68, 0.15);
          color: #f87171;
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 0.72rem;
          font-weight: 700;
        }

        .status-open {
          background: rgba(245, 158, 11, 0.15);
          color: #F59E0B;
        }

        .status-resolved {
          background: rgba(16, 185, 129, 0.15);
          color: #10B981;
        }

        .status-pill {
          padding: 2px 8px;
          border-radius: var(--radius-full);
          font-size: 0.72rem;
          font-weight: 700;
        }

        .report-reason-text {
          font-size: 0.88rem;
          color: #e2e8f0;
          font-style: italic;
          background: rgba(30, 41, 59, 0.5);
          padding: 10px 14px;
          border-radius: var(--radius-md);
          margin-top: 10px;
        }
      `})]})}function B0({setActivePage:e}){const[t,n]=j.useState("overview");return r.jsxs("div",{className:"admin-portal-page",children:[r.jsxs("div",{className:"container",children:[r.jsx("div",{className:"admin-portal-header glass-card flex items-center justify-between",children:r.jsxs("div",{children:[r.jsxs("div",{className:"flex items-center gap-sm",children:[r.jsx("span",{className:"admin-portal-tag",children:"SYSTEM ADMINISTRATOR"}),r.jsx("span",{className:"admin-status-indicator",children:"● Superadmin Root Mode"})]}),r.jsx("h1",{className:"portal-heading",children:"Platform Administration"}),r.jsx("p",{className:"portal-sub",children:"Oversee multi-city turf facilities, approve pending registrations, and moderate accounts."})]})}),r.jsxs("div",{className:"admin-tab-nav-bar flex gap-sm",children:[r.jsxs("button",{className:`admin-tab-btn ${t==="overview"?"active":""}`,onClick:()=>n("overview"),children:[r.jsx(Hu,{size:15}),r.jsx("span",{children:"Platform Overview"})]}),r.jsxs("button",{className:`admin-tab-btn ${t==="approvals"?"active":""}`,onClick:()=>n("approvals"),children:[r.jsx(Un,{size:15}),r.jsx("span",{children:"Facility Approvals"})]}),r.jsxs("button",{className:`admin-tab-btn ${t==="users"?"active":""}`,onClick:()=>n("users"),children:[r.jsx(Yu,{size:15}),r.jsx("span",{children:"User Management"})]}),r.jsxs("button",{className:`admin-tab-btn ${t==="reports"?"active":""}`,onClick:()=>n("reports"),children:[r.jsx(Uu,{size:15}),r.jsx("span",{children:"Reports & Moderation"})]})]}),r.jsxs("div",{className:"admin-content-area",style:{marginTop:24},children:[t==="overview"&&r.jsx(M0,{onNavigateTab:n}),t==="approvals"&&r.jsx(P0,{}),t==="users"&&r.jsx(E0,{}),t==="reports"&&r.jsx(T0,{})]})]}),r.jsx("style",{children:`
        .admin-portal-page {
          padding: 30px 0 60px;
        }

        .admin-portal-header {
          padding: 24px 32px;
          border-radius: var(--radius-lg);
          margin-bottom: 24px;
        }

        .admin-portal-tag {
          font-size: 0.72rem;
          font-weight: 800;
          color: #F59E0B;
          background: rgba(245, 158, 11, 0.15);
          padding: 2px 8px;
          border-radius: var(--radius-sm);
          letter-spacing: 0.06em;
        }

        .admin-status-indicator {
          font-size: 0.78rem;
          color: #10B981;
          font-weight: 600;
        }

        .portal-heading {
          font-size: 1.8rem;
          font-weight: 900;
          color: var(--text-main);
          margin: 6px 0 4px;
        }

        .portal-sub {
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .admin-tab-nav-bar {
          overflow-x: auto;
          padding-bottom: 6px;
        }

        .admin-tab-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          border-radius: var(--radius-md);
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid var(--border-subtle);
          color: var(--text-muted);
          font-weight: 600;
          font-size: 0.88rem;
          white-space: nowrap;
          transition: all 0.2s ease;
        }

        .admin-tab-btn:hover {
          background: var(--bg-card-hover);
          color: var(--text-main);
        }

        .admin-tab-btn.active {
          background: linear-gradient(135deg, rgba(245, 158, 11, 0.2) 0%, rgba(16, 185, 129, 0.2) 100%);
          border-color: #F59E0B;
          color: #fbbf24;
          font-weight: 700;
          box-shadow: 0 0 12px rgba(245, 158, 11, 0.25);
        }
      `})]})}function A0(){const{user:e}=gt(),[t,n]=j.useState((e==null?void 0:e.role)||"Player"),[a,s]=j.useState("home"),[i,o]=j.useState("sbr-badminton"),[l,c]=j.useState(null);j.useEffect(()=>{e!=null&&e.role&&e.role!==t&&n(e.role)},[e]);const u=m=>{o(m),s("venue-detail"),window.scrollTo({top:0,behavior:"smooth"})},f=m=>{o(m),s("booking"),window.scrollTo({top:0,behavior:"smooth"})},h=(m,v=null)=>{v&&c(v),s(m),window.scrollTo({top:0,behavior:"smooth"})};return r.jsxs("div",{className:"app-root-layout",children:[r.jsx(Jg,{activeRole:t,setActiveRole:n,setActivePage:m=>h(m)}),r.jsx(Qg,{activePage:a,setActivePage:m=>h(m),onNavigateVenue:u}),r.jsxs("main",{className:"main-content-view",children:[a==="home"&&r.jsx(Xg,{setActivePage:m=>h(m),onSelectVenue:u}),a==="login"&&r.jsx(e0,{setActivePage:m=>h(m),returnUrl:l}),a==="signup"&&r.jsx(t0,{setActivePage:m=>h(m)}),a==="verify-email"&&r.jsx(r0,{setActivePage:m=>h(m)}),a==="venues"&&r.jsx(a0,{onSelectVenue:u}),a==="venue-detail"&&r.jsx(l0,{venueId:i,onBack:()=>h("venues"),onProceedBooking:f}),a==="booking"&&r.jsx(p0,{venueId:i,onBack:()=>h("venue-detail"),onNavigatePage:h}),a==="profile"&&r.jsx(h0,{setActivePage:m=>h(m)}),a==="owner-dashboard"&&r.jsx(k0,{setActivePage:m=>h(m)}),a==="admin-dashboard"&&r.jsx(B0,{setActivePage:m=>h(m)})]}),r.jsx(Yg,{setActivePage:m=>h(m)})]})}function _0(){return r.jsx(Hg,{children:r.jsx(qg,{children:r.jsx(Gg,{children:r.jsx(Kg,{children:r.jsx(A0,{})})})})})}Hs.createRoot(document.getElementById("root")).render(r.jsx(Ap.StrictMode,{children:r.jsx(_0,{})}));
