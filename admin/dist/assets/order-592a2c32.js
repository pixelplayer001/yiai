
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as L}from"./index-ffb2bbfd.js";import{A as N}from"./sales-d7269b7d.js";import{O as W,p as G}from"./index-39bad72e.js";import{d as M,r as b,O as Q,q as J,h as n,P as K,o as _,c as h,e as t,f as l,Q as R,R as D,b as c,k as f,w as X,G as S,a as Y,t as T,n as U}from"./index-6b0fe787.js";const Z=["src"],E=M({__name:"order",setup(ee){const C=b(),k=b(0),m=b(!1),o=Q({orderStatus:0,withdrawalChannels:null,page:1,size:10}),z=b([]);async function u(){try{m.value=!0;const s=await N.querySalesOrder(o);m.value=!1;const{rows:a,count:p}=s.data;k.value=p,z.value=a}catch{m.value=!1}}function B(s){s==null||s.resetFields(),u()}async function O(s,a){const{id:p}=s,w={id:p,status:a};await N.salesAuditOrder(w),u()}return J(()=>{u()}),(s,a)=>{const p=n("el-option"),w=n("el-select"),v=n("el-form-item"),g=n("el-button"),P=n("el-form"),y=L,q=n("el-alert"),i=n("el-table-column"),V=n("el-tag"),x=n("el-popconfirm"),$=n("el-table"),j=n("el-pagination"),F=n("el-row"),H=K("loading");return _(),h("div",null,[t(y,null,{default:l(()=>[t(P,{ref_key:"formRef",ref:C,inline:!0,model:o},{default:l(()=>[t(v,{label:"工单状态",prop:"orderStatus"},{default:l(()=>[t(w,{modelValue:o.orderStatus,"onUpdate:modelValue":a[0]||(a[0]=e=>o.orderStatus=e),placeholder:"请选择工单状态",clearable:""},{default:l(()=>[(_(!0),h(R,null,D(c(W),e=>(_(),S(p,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(v,{label:"提现渠道",prop:"withdrawalChannels"},{default:l(()=>[t(w,{modelValue:o.withdrawalChannels,"onUpdate:modelValue":a[1]||(a[1]=e=>o.withdrawalChannels=e),placeholder:"请选择提现渠道",clearable:""},{default:l(()=>[(_(!0),h(R,null,D(c(G),e=>(_(),S(p,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(v,null,{default:l(()=>[t(g,{type:"primary",onClick:u},{default:l(()=>a[5]||(a[5]=[f(" 查询 ")])),_:1}),t(g,{onClick:a[2]||(a[2]=e=>B(c(C)))},{default:l(()=>a[6]||(a[6]=[f(" 重置 ")])),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),t(y,null,{default:l(()=>[t(q,{"show-icon":"",title:"提现审核说明",description:"所有工单只可审核一次、请准确操作、打款请人工打款、确定打款后点击审核通过即可！",type:"success"})]),_:1}),t(y,{style:{width:"100%"}},{default:l(()=>[X((_(),S($,{border:"",data:c(z),style:{width:"100%"},size:"large"},{default:l(()=>[t(i,{prop:"userInfo.avatar",label:"头像",width:"120"},{default:l(e=>{var r,d;return[Y("img",{src:(d=(r=e.row)==null?void 0:r.userInfo)==null?void 0:d.avatar,style:{height:"50px"}},null,8,Z)]}),_:1}),t(i,{prop:"withdrawalChannels",align:"center",label:"提现渠道"},{default:l(e=>{var r;return[t(V,{type:((r=e.row)==null?void 0:r.withdrawalChannels)===1?"":"success"},{default:l(()=>{var d;return[f(T(((d=e.row)==null?void 0:d.withdrawalChannels)===1?"支付宝":"微信"),1)]}),_:2},1032,["type"])]}),_:1}),t(i,{prop:"userInfo.email",label:"邮箱",width:"200"}),t(i,{prop:"withdrawalAmount",align:"center",label:"提现金额"}),t(i,{prop:"contactInformation",align:"center",label:"提现备注",width:"340"}),t(i,{prop:"remark",align:"center",label:"提现留言",width:"340"}),t(i,{prop:"orderStatus",align:"center",label:"工单状态",width:"140"},{default:l(e=>{var r,d;return[t(V,{type:((r=e.row)==null?void 0:r.orderStatus)===0?"":((d=e.row)==null?void 0:d.orderStatus)===1?"success":"danger"},{default:l(()=>{var A,I;return[f(T(((A=e.row)==null?void 0:A.orderStatus)===0?"待审核":((I=e.row)==null?void 0:I.orderStatus)===1?"已通过":"已拒绝"),1)]}),_:2},1032,["type"])]}),_:1}),t(i,{fixed:"right",label:"审核",width:"200",align:"center"},{default:l(e=>[t(x,{title:"确认通过审核吗、请您先手动打款后通过！",width:"260","icon-color":"red",onConfirm:r=>O(e.row,1)},{reference:l(()=>[t(g,{link:"",type:"primary",size:"small",disabled:e.row.orderStatus!==0},{default:l(()=>a[7]||(a[7]=[f(" 通过审核 ")])),_:2},1032,["disabled"])]),_:2},1032,["onConfirm"]),t(x,{title:"确认拒绝审核么、拒绝后此次提交将作废！",width:"260","icon-color":"red",onConfirm:r=>O(e.row,-1)},{reference:l(()=>[t(g,{link:"",type:"danger",size:"small",disabled:e.row.orderStatus!==0},{default:l(()=>a[8]||(a[8]=[f(" 拒绝审核 ")])),_:2},1032,["disabled"])]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"])),[[H,c(m)]]),t(F,{class:"flex justify-end mt-5"},{default:l(()=>[t(j,{"current-page":o.page,"onUpdate:currentPage":a[3]||(a[3]=e=>o.page=e),"page-size":o.size,"onUpdate:pageSize":a[4]||(a[4]=e=>o.size=e),class:"mr-5","page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:c(k),onSizeChange:u,onCurrentChange:u},null,8,["current-page","page-size","total"])]),_:1})]),_:1})])}}});typeof U=="function"&&U(E);export{E as default};
