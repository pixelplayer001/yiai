
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as g,r as v,s as b,q as k,J as y,h as l,o as r,c as S,e as a,f as s,k as d,t as i,b as e,G as u,H as m,S as x,m as h}from"./index-6b0fe787.js";const V=g({__name:"index",setup(w){const o=v(!1),t=b();return k(()=>{y.on("global-hotkeys-intro-toggle",()=>{o.value=!o.value})}),(B,c)=>{const n=l("el-descriptions-item"),_=l("el-descriptions"),p=l("el-drawer");return r(),S("div",null,[a(p,{modelValue:e(o),"onUpdate:modelValue":c[0]||(c[0]=f=>x(o)?o.value=f:null),title:"快捷键介绍",direction:"rtl",size:360},{default:s(()=>[a(_,{title:"全局",column:1,border:""},{default:s(()=>[a(n,{label:"查看系统信息"},{default:s(()=>[d(i(e(t).os==="mac"?"⌥":"Alt")+" + I ",1)]),_:1}),e(t).settings.navSearch.enable&&e(t).settings.navSearch.enableHotkeys?(r(),u(n,{key:0,label:"唤起导航搜索"},{default:s(()=>[d(i(e(t).os==="mac"?"⌥":"Alt")+" + S ",1)]),_:1})):m("",!0)]),_:1}),e(t).settings.menu.enableHotkeys&&["side","head"].includes(e(t).settings.menu.menuMode)?(r(),u(_,{key:0,title:"主导航",column:1,border:""},{default:s(()=>[a(n,{label:"激活下一个主导航"},{default:s(()=>[d(i(e(t).os==="mac"?"⌥":"Alt")+" + ` ",1)]),_:1})]),_:1})):m("",!0)]),_:1},8,["modelValue"])])}}});const H=h(V,[["__scopeId","data-v-69a4a624"]]);export{H as default};
