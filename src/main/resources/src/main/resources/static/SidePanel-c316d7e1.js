import{j as e,c as d,a as h,u as c,v as i}from"./index-81b59d9c.js";import{D as x}from"./Drawer-24d4eefb.js";import{k as u}from"./CloseButton-a9d506d9.js";const j=s=>{const a=n=>{const{className:o,hoverable:r=!0}=n;return e.jsx(s,{...n,className:d("header-action-item",r&&"header-action-item-hoverable",o)})};return a.displayName=`withHeaderItem(${s.displayName||s.name||"Component"})`,a},w=s=>e.jsx("div",{children:"Content"}),C=s=>{const a=h(),{className:n,...o}=s,r=c(t=>t.theme.panelExpand),m=c(t=>t.theme.direction),p=()=>{a(i(!0))},l=()=>{a(i(!1));const t=document.body.classList;t.contains("drawer-lock-scroll")&&t.remove("drawer-lock-scroll","drawer-open")};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:d("text-2xl",n),onClick:p,...o,children:e.jsx(u,{})}),e.jsx(x,{title:"Side Panel",isOpen:r,placement:m==="rtl"?"left":"right",width:375,onClose:l,onRequestClose:l,children:e.jsx(w,{callBackClose:l})})]})},v=j(C);export{v as S,j as w};
