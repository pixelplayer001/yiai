
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as i,s as d,r as c,z as g,h as p,o,G as f,f as h,c as l,b as e,H as r,t as k,D as y,m as x}from"./index-6b0fe787.js";const w="/admin/assets/logo-71242da6.png",B=["src"],C={key:1},L=i({name:"Logo"}),v=i({...L,props:{showLogo:{type:Boolean,default:!0},showTitle:{type:Boolean,default:!0}},setup(s){const n=d(),a=c("Yi-Ai"),_=c(w),u=g(()=>{const t={};return n.settings.home.enable&&(t.name="home"),t});return(t,S)=>{const m=p("router-link");return o(),f(m,{to:e(u),class:y(["title",{"is-link":e(n).settings.home.enable}]),title:e(a)},{default:h(()=>[s.showLogo?(o(),l("img",{key:0,src:e(_),class:"logo"},null,8,B)):r("",!0),s.showTitle?(o(),l("span",C,k(e(a)),1)):r("",!0)]),_:1},8,["to","class","title"])}}});const z=x(v,[["__scopeId","data-v-06c5f006"]]);export{z as default};
