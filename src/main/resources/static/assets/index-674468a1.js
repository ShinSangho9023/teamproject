import{t as b,j as e}from"./index-421448b9.js";import{A as w,F as N,a as i,I as F}from"./Alert-d97c4625.js";import{B as I}from"./Button-8a0d0904.js";import{C as v}from"./index-6a0e33d8.js";import{P as y}from"./PasswordInput-ba26269e.js";import{c as P,a as m,b as M,u as S,F as k,d as A,e as o,A as l}from"./index.esm-ef0cbd68.js";import"./Views-55051943.js";import"./toString-8e299813.js";import"./index-8d1bb71a.js";import"./CloseButton-4993004a.js";import"./_getPrototype-326cdc4c.js";const C=P().shape({userName:m().required("Please enter your user name"),password:m().required("Please enter your password"),rememberMe:M()}),U=c=>{const{disableSubmit:d=!1,className:p,forgotPasswordUrl:u="/forgot-password",signUpUrl:x="/sign-up"}=c,[t,h]=S(),{signIn:j}=b(),f=async(a,s)=>{const{userName:r,password:g}=a;s(!0);const n=await j({userName:r,password:g});(n==null?void 0:n.status)==="failed"&&h(n.message),s(!1)};return e.jsxs("div",{className:p,children:[t&&e.jsx(w,{showIcon:!0,className:"mb-4",type:"danger",children:e.jsx(e.Fragment,{children:t})}),e.jsx(k,{initialValues:{userName:"admin",password:"123Qwe",rememberMe:!0},validationSchema:C,onSubmit:(a,{setSubmitting:s})=>{d?s(!1):f(a,s)},children:({touched:a,errors:s,isSubmitting:r})=>e.jsx(A,{children:e.jsxs(N,{children:[e.jsx(i,{label:"User Name",invalid:s.userName&&a.userName,errorMessage:s.userName,children:e.jsx(o,{type:"text",autoComplete:"off",name:"userName",placeholder:"User Name",component:F})}),e.jsx(i,{label:"Password",invalid:s.password&&a.password,errorMessage:s.password,children:e.jsx(o,{autoComplete:"off",name:"password",placeholder:"Password",component:y})}),e.jsxs("div",{className:"flex justify-between mb-6",children:[e.jsx(o,{className:"mb-0",name:"rememberMe",component:v,children:"Remember Me"}),e.jsx(l,{to:u,children:"Forgot Password?"})]}),e.jsx(I,{block:!0,loading:r,variant:"solid",type:"submit",children:r?"Signing in...":"Sign In"}),e.jsxs("div",{className:"mt-4 text-center",children:[e.jsxs("span",{children:["Don't have an account yet?"," "]}),e.jsx(l,{to:x,children:"Sign up"})]})]})})})]})},$=()=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"mb-1",children:"Welcome back!"}),e.jsx("p",{children:"Please enter your credentials to sign in!"})]}),e.jsx(U,{disableSubmit:!1})]}),z=$;export{z as default};
