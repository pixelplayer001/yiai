
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as v,s as S,y as M,r as B,h as T,o as e,G as f,f as p,b as s,c as o,a,e as i,l as x,Q as h,R as w,H as n,T as H,D as N,t as R,_ as V,m as D}from"./index-6b0fe787.js";import L from"./index-22541ca7.js";import{T as $}from"./index-1a58de0e.js";import{u as b}from"./useMenu-7586672a.js";import"./index-05f8e5a3.js";const z={key:0},E={class:"header-container"},F={class:"main"},G=["onClick"],I={key:1},Q=v({name:"Header"}),W=v({...Q,setup(Y){const l=S(),_=M(),{switchTo:k}=b(),d=B();function y(r){d.value.scrollBy({left:(r.deltaY||r.detail)>0?50:-50})}return(r,j)=>{const g=V,C=T("el-icon");return e(),f(H,{name:"header"},{default:p(()=>[s(l).mode==="pc"&&s(l).settings.menu.menuMode==="head"?(e(),o("header",z,[a("div",E,[a("div",F,[i(L),a("div",{ref_key:"navRef",ref:d,class:"nav",onWheel:x(y,["prevent"])},[(e(!0),o(h,null,w(s(_).allMenus,(t,c)=>{var m,u;return e(),o(h,{key:c},[t.children&&t.children.length!==0?(e(),o("div",{key:0,class:N(["item-container",{active:c===s(_).actived}])},[a("div",{class:"item",onClick:q=>s(k)(c)},[(m=t.meta)!=null&&m.icon?(e(),f(C,{key:0},{default:p(()=>[i(g,{name:t.meta.icon},null,8,["name"])]),_:2},1024)):n("",!0),(u=t.meta)!=null&&u.title?(e(),o("span",I,R(t.meta.title),1)):n("",!0)],8,G)],2)):n("",!0)],64)}),128))],544)]),i($)])])):n("",!0)]),_:1})}}});const U=D(W,[["__scopeId","data-v-96d93d80"]]);export{U as default};
