
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as _,M as f,r as g,h as y,o as s,c as a,L as c,Q as v,k as h,t as k,H as i,b as o,e as r,f as C,D as S,F as x,_ as w,m as B}from"./index-6b0fe787.js";const D={key:0,class:"title-container"},N=_({name:"PageMain"}),V=_({...N,props:{title:{type:String,default:""},collaspe:{type:Boolean,default:!1},height:{type:String,default:""}},setup(e){const d=e,n=!!f().title,t=g(d.collaspe);function p(){t.value=!1}return(l,$)=>{const u=w,m=y("el-icon");return s(),a("div",{class:S(["page-main",{"is-collaspe":o(t)}]),style:x({height:o(t)?e.height:""})},[n||e.title?(s(),a("div",D,[n?c(l.$slots,"title",{key:0},void 0,!0):(s(),a(v,{key:1},[h(k(e.title),1)],64))])):i("",!0),c(l.$slots,"default",{},void 0,!0),o(t)?(s(),a("div",{key:1,class:"collaspe",title:"展开",onClick:p},[r(m,null,{default:C(()=>[r(u,{name:"ep:arrow-down"})]),_:1})])):i("",!0)],6)}}});const F=B(V,[["__scopeId","data-v-d890d5e3"]]);export{F as _};
