
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as $}from"./index-ffb2bbfd.js";import{A as D}from"./chat-d63f1410.js";import{d as E,r as _,O as G,q as H,h as o,P as J,o as s,c,e as a,f as t,Q as f,R as v,b as S,k as g,w as Q,G as i,a as b,N as W,t as A,H as I,E as K,n as M}from"./index-6b0fe787.js";import{R as X,a as Y}from"./index-39bad72e.js";const Z={class:"flex draw_container"},ee={class:"draw_head"},le={class:"draw_footer flex mt-3 justify-between items-center"},ae=E({__name:"midjourney",setup(te){const p=_(!1),k=_(),C=_(0),V=_([]),n=G({userId:"",rec:"",status:3,page:1,size:10}),x=_([]);async function u(){p.value=!0;try{const r=await D.queryMjDrawAll(n),{rows:l,count:d}=r.data;p.value=!1,C.value=d,x.value=l}catch{p.value=!1}}async function h(r){const l=await D.recMjDrawImg({id:r});K.success(l.data),u()}async function j(r){const l=await W.queryAllUser({size:30,username:r});V.value=l.data.rows}function N(r){r==null||r.resetFields(),u()}return H(()=>{u()}),(r,l)=>{const d=o("el-option"),y=o("el-select"),m=o("el-form-item"),w=o("el-button"),R=o("el-form"),z=$,T=o("el-image"),P=o("el-tag"),q=o("Plus"),U=o("el-icon"),B=o("Minus"),L=o("el-pagination"),O=o("el-row"),F=J("loading");return s(),c("div",null,[a(z,null,{default:t(()=>[a(R,{ref_key:"formRef",ref:k,inline:!0,model:n},{default:t(()=>[a(m,{label:"用户名称",prop:"userId"},{default:t(()=>[a(y,{modelValue:n.userId,"onUpdate:modelValue":l[0]||(l[0]=e=>n.userId=e),filterable:"",clearable:"",remote:"","reserve-keyword":"",placeholder:"用户姓名[模糊搜索]","remote-show-suffix":"","remote-method":j},{default:t(()=>[(s(!0),c(f,null,v(V.value,e=>(s(),i(d,{key:e.id,label:e.username,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(m,{label:"推荐状态",prop:"rec"},{default:t(()=>[a(y,{modelValue:n.rec,"onUpdate:modelValue":l[1]||(l[1]=e=>n.rec=e),placeholder:"请选择推荐状态",clearable:""},{default:t(()=>[(s(!0),c(f,null,v(S(X),e=>(s(),i(d,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(m,{label:"绘制状态",prop:"status"},{default:t(()=>[a(y,{modelValue:n.status,"onUpdate:modelValue":l[2]||(l[2]=e=>n.status=e),placeholder:"请选择图片绘制状态",clearable:""},{default:t(()=>[(s(!0),c(f,null,v(S(Y),e=>(s(),i(d,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(m,null,{default:t(()=>[a(w,{type:"primary",onClick:u},{default:t(()=>l[6]||(l[6]=[g(" 查询 ")])),_:1}),a(w,{onClick:l[3]||(l[3]=e=>N(k.value))},{default:t(()=>l[7]||(l[7]=[g(" 重置 ")])),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),Q((s(),i(z,{style:{width:"100%"}},{default:t(()=>[b("div",Z,[(s(!0),c(f,null,v(x.value,e=>(s(),c("div",{key:e.id,style:{height:"280px"},class:"draw_img_container flex border"},[b("div",ee,[a(T,{fit:"contain","preview-src-list":[e.drawUrl],src:e.drawUrl,lazy:"",class:"draw_img","hide-on-click-modal":""},null,8,["preview-src-list","src"])]),b("div",le,[a(P,{class:"ml-2",type:e.rec?"success":"info"},{default:t(()=>[g(A(e.rec?"已推荐":"未推荐"),1)]),_:2},1032,["type"]),a(w,{type:"warning",plain:"",size:"small",onClick:ne=>h(e.id)},{default:t(()=>[g(A(e.rec?"取消推荐":"加入推荐")+" ",1),e.rec?I("",!0):(s(),i(U,{key:0},{default:t(()=>[a(q)]),_:1})),e.rec?(s(),i(U,{key:1},{default:t(()=>[a(B)]),_:1})):I("",!0)]),_:2},1032,["onClick"])])]))),128))]),a(O,{class:"flex justify-end mt-5"},{default:t(()=>[a(L,{"current-page":n.page,"onUpdate:currentPage":l[4]||(l[4]=e=>n.page=e),"page-size":n.size,"onUpdate:pageSize":l[5]||(l[5]=e=>n.size=e),class:"mr-5","page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:C.value,onSizeChange:u,onCurrentChange:u},null,8,["current-page","page-size","total"])]),_:1})]),_:1})),[[F,p.value]])])}}});typeof M=="function"&&M(ae);export{ae as default};
