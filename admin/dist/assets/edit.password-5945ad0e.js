
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as _,r as m,q as N,C as M,o as f,c as w,L as y,D as R,b as s,m as k,M as T,a as b,t as x,H as L,k as E,g as z,i as A,u as D,h as c,e,f as n,N as I,E as F,n as V}from"./index-6b0fe787.js";import{_ as j}from"./index-ffb2bbfd.js";const G=_({name:"FixedActionBar"}),J=_({...G,setup(i){const a=m(!1);N(()=>{l(),window.addEventListener("scroll",l)}),M(()=>{window.removeEventListener("scroll",l)});function l(){const r=document.documentElement.scrollTop||document.body.scrollTop,d=document.documentElement.clientHeight||document.body.clientHeight,t=document.documentElement.scrollHeight||document.body.scrollHeight;a.value=Math.ceil(r+d)>=t}return(r,d)=>(f(),w("div",{class:R(["actionbar",{shadow:!s(a)}]),"data-fixed-calc-width":""},[y(r.$slots,"default",{},void 0,!0)],2))}});const K=k(J,[["__scopeId","data-v-eef8b492"]]),O={class:"header"},Q={class:"main"},W={class:"title"},X={class:"content"},Y={key:0,class:"sub"},Z=_({name:"PageHeader"}),ee=_({...Z,props:{title:{type:String,required:!0},content:{type:String,default:""}},setup(i){const a=T();return(l,r)=>(f(),w("div",O,[b("div",Q,[b("div",W,x(i.title),1),b("div",X,[y(l.$slots,"content",{},()=>[E(x(i.content),1)],!0)])]),s(a).default?(f(),w("div",Y,[y(l.$slots,"default",{},void 0,!0)])):L("",!0)]))}});const oe=k(ee,[["__scopeId","data-v-1d4ba765"]]),te=_({name:"PersonalEditPassword"}),se=_({...te,setup(i){const a=z(),l=A(),r=D(),d=m(),t=m({password:"",newpassword:"",checkpassword:""}),S=m({password:[{required:!0,message:"请输入原密码",trigger:"blur"}],newpassword:[{required:!0,message:"请输入新密码",trigger:"blur"},{min:6,max:18,trigger:"blur",message:"密码长度为6到18位"}],checkpassword:[{required:!0,message:"请输入新密码",trigger:"blur"},{validator:(g,o,u)=>{o!==t.value.newpassword?u(new Error("两次密码不一致！")):u()}}]});function H(){d.value&&d.value.validate(g=>{if(g){const{password:o,newpassword:u}=t.value;I.updatePassword({oldPassword:o,password:u}).then(()=>{F({type:"success",message:"修改密码成功，请重新登录"}),r.logout().then(()=>{l.push({name:"login",query:{redirect:a.fullPath}})})})}})}return(g,o)=>{const u=oe,h=c("el-input"),v=c("el-form-item"),$=c("el-form"),C=c("el-col"),q=c("el-row"),P=j,U=c("el-button"),B=K;return f(),w("div",null,[e(u,{title:"修改密码",content:"定期修改密码可以提高帐号安全性噢~"}),e(P,null,{default:n(()=>[e(q,null,{default:n(()=>[e(C,{md:24,lg:12},{default:n(()=>[e($,{ref_key:"formRef",ref:d,model:s(t),rules:s(S),"label-width":"120px"},{default:n(()=>[e(v,{label:"原密码",prop:"password"},{default:n(()=>[e(h,{modelValue:s(t).password,"onUpdate:modelValue":o[0]||(o[0]=p=>s(t).password=p),type:"password",placeholder:"请输入原密码","show-password":""},null,8,["modelValue"])]),_:1}),e(v,{label:"新密码",prop:"newpassword"},{default:n(()=>[e(h,{modelValue:s(t).newpassword,"onUpdate:modelValue":o[1]||(o[1]=p=>s(t).newpassword=p),type:"password",placeholder:"请输入原密码","show-password":""},null,8,["modelValue"])]),_:1}),e(v,{label:"确认新密码",prop:"checkpassword"},{default:n(()=>[e(h,{modelValue:s(t).checkpassword,"onUpdate:modelValue":o[2]||(o[2]=p=>s(t).checkpassword=p),type:"password",placeholder:"请输入原密码","show-password":""},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1})]),_:1})]),_:1}),e(B,null,{default:n(()=>[e(U,{type:"primary",size:"large",onClick:H},{default:n(()=>o[3]||(o[3]=[E(" 提交 ")])),_:1})]),_:1})])}}});typeof V=="function"&&V(se);export{se as default};
