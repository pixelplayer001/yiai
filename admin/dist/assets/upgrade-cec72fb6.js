
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as w}from"./index-ffb2bbfd.js";import{a as y}from"./config-e982e661.js";import{a as k}from"./userBalance-504446a2.js";import{d as x,r as c,q as C,h as o,P as B,w as V,b as r,o as h,c as N,e as t,f as a,a as u,k as S,n as p}from"./index-6b0fe787.js";const q=x({__name:"upgrade",setup(D){const n=c(!0),s=c(!1);async function l(){var e;const i=await y.queryConfig({keys:["upgradeStatus"]});n.value=((e=i.data)==null?void 0:e.upgradeStatus)==="1"}async function d(){s.value=!0,await k.upgradeBalance(),l(),setTimeout(()=>{l(),s.value=!1},3e4)}return C(()=>{l()}),(i,e)=>{const _=o("el-alert"),f=w,m=o("el-button"),g=o("el-tooltip"),b=o("el-card"),v=B("loading");return V((h(),N("div",null,[t(f,null,{default:a(()=>[t(_,{closable:!1,"show-icon":"",title:"V1.5版本迁移助手",description:"如果您是新部署的用户则无需点击、如果是你是老用户升级(1.6版本以下用户)、由于1.5的计费调整、造成了一定破坏性更新、需要在此进行数据迁移、请注意不要刷新网页、当前升级为危险操作、仅可点击一次、点击完成后请等待约一分钟后完成数据同步、我们将会对历史的用户余额、使用额度、基础模型、4、绘画等数据进行迁移、在迁移完成后即可正常工作了、在未迁移前您是无法查看用户管理下面的用户信息的详细余额的、迁移完毕前去访问您可以看到完整的用户信息包含其余额信息！",type:"error"})]),_:1}),t(b,{style:{margin:"20px"}},{header:a(()=>e[0]||(e[0]=[u("div",{class:"flex justify-between"},[u("b",null,"V1.5版本迁移助手")],-1)])),default:a(()=>[t(g,{content:` ${r(n)?"您已经升级过了、请勿重复操作":"当前升级是危险操作、请勿刷新或重复点击、等待加载完成后再进行其他工作！"}`,placement:"right","show-after":100},{default:a(()=>[t(m,{disabled:r(n),type:"warning",onClick:d},{default:a(()=>e[1]||(e[1]=[S(" 点击升级 ")])),_:1},8,["disabled"])]),_:1},8,["content"])]),_:1})])),[[v,r(s)]])}}});typeof p=="function"&&p(q);export{q as default};
