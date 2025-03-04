
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as u,r as i,p as d,q as p,o as v,c as f,e as a,a as n,f as m,i as k,_ as x,h as y,k as w,t as B,b as N,m as b,n as s}from"./index-6b0fe787.js";const g={class:"notfound"},C={class:"content"},_=u({__name:"[...all]",setup(I){const c=k(),e=i({inter:NaN,countdown:5});d(()=>{e.value.inter&&clearInterval(e.value.inter)}),p(()=>{e.value.inter=setInterval(()=>{e.value.countdown--,e.value.countdown===0&&(e.value.inter&&clearInterval(e.value.inter),o())},1e3)});function o(){c.push("/")}return(h,t)=>{const l=x,r=y("el-button");return v(),f("div",g,[a(l,{name:"404",class:"icon"}),n("div",C,[t[0]||(t[0]=n("h1",null,"404",-1)),t[1]||(t[1]=n("div",{class:"desc"}," 抱歉，你访问的页面不存在 ",-1)),a(r,{type:"primary",onClick:o},{default:m(()=>[w(B(N(e).countdown)+" 秒后，返回首页 ",1)]),_:1})])])}}});typeof s=="function"&&s(_);const R=b(_,[["__scopeId","data-v-207550e4"]]);export{R as default};
