
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as $}from"./index-ffb2bbfd.js";import{A}from"./chat-d63f1410.js";import{d as G,r as i,O as H,q as Q,h as o,P as W,o as s,c,e as a,f as t,Q as m,R as f,b as I,k as v,w as J,G as d,a as D,N as K,t as L,H as U,E as X,n as S}from"./index-6b0fe787.js";import{R as Y,D as Z}from"./index-39bad72e.js";const ee={class:"flex draw_container"},le={class:"draw_head"},ae={class:"draw_footer flex mt-3 justify-between items-center"},te=G({__name:"draw",setup(oe){const _=i(!1),C=i(),V=i(0),x=i([]),n=H({userId:"",rec:"",model:"DALL-E2",page:1,size:14}),z=i([]);async function u(){_.value=!0;try{const r=await A.queryDrawAll(n),{rows:l,count:g}=r.data;_.value=!1,V.value=g,z.value=l}catch{_.value=!1}}async function M(r){const l=await A.recDrawImg({id:r});X.success(l.data),u()}async function N(r){const l=await K.queryAllUser({size:30,username:r});x.value=l.data.rows}function R(r){r==null||r.resetFields(),u()}return Q(()=>{u()}),(r,l)=>{const g=o("el-alert"),y=$,w=o("el-option"),b=o("el-select"),p=o("el-form-item"),k=o("el-button"),O=o("el-form"),P=o("el-image"),T=o("el-tag"),j=o("Plus"),h=o("el-icon"),q=o("Minus"),B=o("el-pagination"),E=o("el-row"),F=W("loading");return s(),c("div",null,[a(y,null,{default:t(()=>[a(g,{closable:!1,"show-icon":"",title:"DALL-E绘画说明",description:"此处的midjourney模型选择是老版本的历史数据、新版迁移至新菜单分开！",type:"success"})]),_:1}),a(y,null,{default:t(()=>[a(O,{ref_key:"formRef",ref:C,inline:!0,model:n},{default:t(()=>[a(p,{label:"用户名称",prop:"userId"},{default:t(()=>[a(b,{modelValue:n.userId,"onUpdate:modelValue":l[0]||(l[0]=e=>n.userId=e),filterable:"",clearable:"",remote:"","reserve-keyword":"",placeholder:"用户姓名[模糊搜索]","remote-show-suffix":"","remote-method":N},{default:t(()=>[(s(!0),c(m,null,f(x.value,e=>(s(),d(w,{key:e.id,label:e.username,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(p,{label:"图片状态",prop:"rec"},{default:t(()=>[a(b,{modelValue:n.rec,"onUpdate:modelValue":l[1]||(l[1]=e=>n.rec=e),placeholder:"请选择图片状态",clearable:""},{default:t(()=>[(s(!0),c(m,null,f(I(Y),e=>(s(),d(w,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(p,{label:"绘画模型",prop:"model"},{default:t(()=>[a(b,{modelValue:n.model,"onUpdate:modelValue":l[2]||(l[2]=e=>n.model=e),placeholder:"请选择绘画模型",clearable:""},{default:t(()=>[(s(!0),c(m,null,f(I(Z),e=>(s(),d(w,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(p,null,{default:t(()=>[a(k,{type:"primary",onClick:u},{default:t(()=>l[6]||(l[6]=[v(" 查询 ")])),_:1}),a(k,{onClick:l[3]||(l[3]=e=>R(C.value))},{default:t(()=>l[7]||(l[7]=[v(" 重置 ")])),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),J((s(),d(y,{style:{width:"100%"}},{default:t(()=>[D("div",ee,[(s(!0),c(m,null,f(z.value,e=>(s(),c("div",{key:e.id,style:{height:"280px"},class:"draw_img_container flex border"},[D("div",le,[a(P,{fit:"contain","preview-src-list":[e.answer],src:e.thumbImg,lazy:"",class:"draw_img","hide-on-click-modal":""},null,8,["preview-src-list","src"])]),D("div",ae,[a(T,{class:"ml-2",type:e.rec?"success":"info"},{default:t(()=>[v(L(e.rec?"已推荐":"未推荐"),1)]),_:2},1032,["type"]),a(k,{type:"warning",plain:"",size:"small",onClick:ne=>M(e.id)},{default:t(()=>[v(L(e.rec?"取消推荐":"加入推荐")+" ",1),e.rec?U("",!0):(s(),d(h,{key:0},{default:t(()=>[a(j)]),_:1})),e.rec?(s(),d(h,{key:1},{default:t(()=>[a(q)]),_:1})):U("",!0)]),_:2},1032,["onClick"])])]))),128))]),a(E,{class:"flex justify-end mt-5"},{default:t(()=>[a(B,{"current-page":n.page,"onUpdate:currentPage":l[4]||(l[4]=e=>n.page=e),"page-size":n.size,"onUpdate:pageSize":l[5]||(l[5]=e=>n.size=e),class:"mr-5","page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:V.value,onSizeChange:u,onCurrentChange:u},null,8,["current-page","page-size","total"])]),_:1})]),_:1})),[[F,_.value]])])}}});typeof S=="function"&&S(te);export{te as default};
