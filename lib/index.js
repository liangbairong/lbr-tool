!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.index=t():e.index=t()}(self,(function(){return(()=>{"use strict";var e={642:(e,t,r)=>{r.d(t,{default:()=>o});const o=function(e,t){void 0===t&&(t="");var r=t||window.location.href,o=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),n=r.substr(r.indexOf("?")+1).match(o);if(null!==n){var a=decodeURI(n[2]).indexOf("#");return-1!==a?decodeURI(n[2]).substring(0,a):decodeURI(n[2])}return""}},309:(e,t,r)=>{r.d(t,{default:()=>o});const o=function(e,t){if(function(e){for(var t=/js$/i.test(e),r=document.getElementsByTagName(t?"script":"link"),o=0;o<r.length;o++)if(-1!=r[o][t?"src":"href"].indexOf(e))return!0;return!1}(e))t();else{var r=document.createElement("script");r.type="text/javascript",void 0!==t&&(r.readyState?r.onreadystatechange=function(){"loaded"!=r.readyState&&"complete"!=r.readyState||(r.onreadystatechange=null,t())}:r.onload=function(){t()}),r.src=e,document.body.appendChild(r)}}},444:(e,t,r)=>{r.d(t,{default:()=>o});const o={set:function(e,t,r){try{if(!localStorage)return!1;r||(r=6e13);var o={val:t,exp:Date.now()+1e3*r};localStorage.setItem(e,JSON.stringify(o))}catch(e){console.log(e)}},get:function(e){try{if(!localStorage)return!1;var t=localStorage.getItem(e),r=JSON.parse(t),o=Date.now();return r?o>r.exp?(this.remove(e),""):r.val:null}catch(t){return this.remove(e),null}},remove:function(e){if(!localStorage)return!1;localStorage.removeItem(e)},clear:function(){if(!localStorage)return!1;localStorage.clear()}}}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,r),a.exports}r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{r.r(o),r.d(o,{getUrlParam:()=>n.default,loadJs:()=>t.default,myLocalStorage:()=>e.default});var e=r(444),t=r(309),n=r(642)})(),o})()}));