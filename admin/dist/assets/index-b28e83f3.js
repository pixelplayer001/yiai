
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as g,s as k,y as S,h as y,o as t,G as d,f as m,b as s,c as n,e as u,a as p,Q as f,R as C,H as c,T as M,D as x,t as B,_ as w,m as N}from"./index-6b0fe787.js";import T from"./index-22541ca7.js";import{u as V}from"./useMenu-7586672a.js";const D={key:0,class:"main-sidebar-container"},L={class:"nav"},$=["title","onClick"],z=g({name:"MainSidebar"}),E=g({...z,setup(F){const a=k(),i=S(),{switchTo:v}=V();return(G,H)=>{const h=w,b=y("el-icon");return t(),d(M,{name:"main-sidebar"},{default:m(()=>[s(a).settings.menu.menuMode==="side"||s(a).mode==="mobile"&&s(a).settings.menu.menuMode!=="single"?(t(),n("div",D,[u(T,{"show-title":!1,class:"sidebar-logo"}),p("div",L,[(t(!0),n(f,null,C(s(i).allMenus,(e,o)=>{var l,r,_;return t(),n(f,null,[e.children&&e.children.length!==0?(t(),n("div",{key:o,class:x(["item",{active:o===s(i).actived}]),title:((l=e.meta)==null?void 0:l.title)??"[ 无标题 ]",onClick:I=>s(v)(o)},[(r=e.meta)!=null&&r.icon?(t(),d(b,{key:0},{default:m(()=>[u(h,{name:e.meta.icon},null,8,["name"])]),_:2},1024)):c("",!0),p("span",null,B(((_=e.meta)==null?void 0:_.title)??"[ 无标题 ]"),1)],10,$)):c("",!0)],64)}),256))])])):c("",!0)]),_:1})}}});const q=N(E,[["__scopeId","data-v-79c2b4c4"]]);export{q as default};
