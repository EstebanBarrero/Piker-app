"use strict";(self.webpackChunkmf_colorpicker=self.webpackChunkmf_colorpicker||[]).push([[889],{822:(r,t,e)=>{function n(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}e.d(t,{A:()=>n})},470:(r,t,e)=>{function n(r){if(Array.isArray(r))return r}e.d(t,{A:()=>n})},410:(r,t,e)=>{e.d(t,{A:()=>o});var n=e(822);function o(r){if(Array.isArray(r))return(0,n.A)(r)}},56:(r,t,e)=>{function n(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}e.d(t,{A:()=>n})},713:(r,t,e)=>{function n(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=e){var n,o,a,l,u=[],i=!0,c=!1;try{if(a=(e=e.call(r)).next,0===t){if(Object(e)!==e)return;i=!1}else for(;!(i=(n=a.call(e)).done)&&(u.push(n.value),u.length!==t);i=!0);}catch(r){c=!0,o=r}finally{try{if(!i&&null!=e.return&&(l=e.return(),Object(l)!==l))return}finally{if(c)throw o}}return u}}e.d(t,{A:()=>n})},103:(r,t,e)=>{function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}e.d(t,{A:()=>n})},786:(r,t,e)=>{function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}e.d(t,{A:()=>n})},92:(r,t,e)=>{e.d(t,{A:()=>u});var n=e(470),o=e(713),a=e(663),l=e(103);function u(r,t){return(0,n.A)(r)||(0,o.A)(r,t)||(0,a.A)(r,t)||(0,l.A)()}},575:(r,t,e)=>{e.d(t,{A:()=>u});var n=e(410),o=e(56),a=e(663),l=e(786);function u(r){return(0,n.A)(r)||(0,o.A)(r)||(0,a.A)(r)||(0,l.A)()}},663:(r,t,e)=>{e.d(t,{A:()=>o});var n=e(822);function o(r,t){if(r){if("string"==typeof r)return(0,n.A)(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?(0,n.A)(r,t):void 0}}},903:(r,t,e)=>{e.d(t,{K:()=>n,i:()=>o});var n=function(){return JSON.parse(localStorage.getItem("colors"))||[]},o=function(){return n()[0]||"#732812"}},889:(r,t,e)=>{e.r(t),e.d(t,{default:()=>i,useColor:()=>u});var n=e(575),o=e(92),a=e(914),l=e(903),u=function(){var r=(0,a.useState)((0,l.i)()),t=(0,o.A)(r,2),e=t[0],u=t[1],i=(0,a.useState)((0,l.K)()),c=(0,o.A)(i,2),f=c[0],s=c[1];return(0,a.useEffect)((function(){localStorage.setItem("colors",JSON.stringify(f))}),[f]),{color:e,colorsList:f,handleChangeColor:function(r){u(r.target.value)},handleSubmitSaveColor:function(r){r.preventDefault();var t=[e].concat((0,n.A)(f));s(t)},handleClickClearColors:function(){u("#f2f2f2"),s([]),localStorage.removeItem("colors")}}};const i=u}}]);