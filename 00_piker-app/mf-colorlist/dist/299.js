/*! For license information please see 299.js.LICENSE.txt */
"use strict";(self.webpackChunkmf_colorlist=self.webpackChunkmf_colorlist||[]).push([[299],{299:(e,r,t)=>{t.r(r),t.d(r,{default:()=>l}),t(914);var o=t(803),n=t.n(o),i=t(848);const l=function(e){var r=e.colorsList,t=void 0===r?[]:r;return e.handleClickClearColors,(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"list-group text-center",children:t.length>0?t.map((function(e,r){return(0,i.jsx)("button",{type:"button",className:"list-group-item list-group-item-action text-white","aria-current":"true",title:"Copiar",style:{background:e,fontWeight:"bolder"},onClick:function(){return function(e){navigator.clipboard.writeText(e),n().fire({position:"top-end",icon:"success",title:"Color: ".concat(e," Copied"),showConfirmButton:!1,timer:1300,timerProgressBar:!0})}(e)}},r)})):(0,i.jsx)("div",{className:"alert alert-danger",role:"alert",children:(0,i.jsx)("b",{children:"Sin elementos por mostrar..."})})})})}},20:(e,r,t)=>{var o=t(914),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};r.Fragment=i,r.jsx=function(e,r,t){var o,i={},c=null,u=null;for(o in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(u=r.ref),r)l.call(r,o)&&!a.hasOwnProperty(o)&&(i[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===i[o]&&(i[o]=r[o]);return{$$typeof:n,type:e,key:c,ref:u,props:i,_owner:s.current}}},848:(e,r,t)=>{e.exports=t(20)}}]);