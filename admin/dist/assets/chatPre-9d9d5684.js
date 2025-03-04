
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as xe}from"./index-ffb2bbfd.js";import{A as C}from"./chatgpt-97f50f25.js";import{_ as he}from"./index.vue_vue_type_script_setup_true_lang-26ba20a3.js";import{d as we,r as m,O as D,z as I,q as Be,h as n,P as Ve,o as V,c as Z,e as t,f as l,k as c,t as k,b as r,S,w as E,G as R,a as U,Q as ke,R as Te,E as $,V as ee,n as te}from"./index-6b0fe787.js";const Pe={class:"flex justify-end mr-5"},qe={class:"flex justify-end mr-5"},De=we({__name:"chatPre",setup(Ie){const T=m(!1),P=m(!1),x=m(),le=m(),g=m(0),b=m(0),u=D({status:!0,name:"",order:100,icon:""}),d=D({typeId:"",status:!0,title:"",order:100,prompt:""}),ae=D({status:[{required:!0,message:"请选择开启状态",trigger:"change"}],name:[{required:!0,message:"请填写分类名称",trigger:"blur"}],icon:[{required:!0,message:"请填写分类图标",trigger:"blur"}],order:[{required:!0,message:"请填写排序id 越大越靠前",trigger:"blur"}]}),oe=D({typeId:[{required:!0,message:"请选择分类",trigger:"change"}],status:[{required:!0,message:"请选择开启状态",trigger:"change"}],title:[{required:!0,message:"请填写标题名称",trigger:"blur"}],order:[{required:!0,message:"请填写排序id 越大越靠前",trigger:"blur"}],prompt:[{required:!1,message:"请填写快捷描述语",trigger:"blur"}]});function ne(o){g.value=0,o==null||o.resetFields()}function se(o){b.value=0,o==null||o.resetFields()}const y=m(!1),_=m(!1),h=m("chatBoxType"),re=I(()=>g.value?"更新分类":"新增分类"),ue=I(()=>b.value?"更新子项":"新增子项"),A=I(()=>g.value?"确认更新":"确认新增"),z=m([]),F=m([]);async function q(){try{T.value=!0;const o=await C.queryChatPreTypes();T.value=!1,z.value=o.data}catch{T.value=!1}}async function O(){try{P.value=!0;const o=await C.queryChatPres();P.value=!1,F.value=o.data}catch{P.value=!1}}async function de(o){const{id:e}=o;await C.delChatPreType({id:e}),$({type:"success",message:"操作完成！"}),q()}async function ie(o){const{id:e}=o;await C.delChatPre({id:e}),$({type:"success",message:"操作完成！"}),O()}function pe(o){g.value=o.id;const{status:e,name:s,icon:w,order:v}=o;ee(()=>{Object.assign(u,{status:e,name:s,icon:w,order:v})}),y.value=!0}function me(o){b.value=o.id;const{title:e,order:s,status:w,typeId:v,prompt:i}=o;ee(()=>{Object.assign(d,{title:e,order:s,status:w,typeId:v,prompt:i})}),_.value=!0}function ce(o){o==="chatBoxType"?q():O()}async function fe(o){o==null||o.validate(async e=>{if(e){const s=JSON.parse(JSON.stringify(u));delete s.id,g.value&&(s.id=g.value),await C.setChatPreType(s),$({type:"success",message:"操作成功！"}),g.value=0,y.value=!1,q()}})}async function ge(o){o==null||o.validate(async e=>{if(e){const s=JSON.parse(JSON.stringify(d));console.log("params: ",s),delete s.id,b.value&&(s.id=b.value),await C.setChatPre(s),$({type:"success",message:"操作成功！"}),b.value=0,_.value=!1,O()}})}const ye=I(()=>h.value==="chatBoxType"?"添加快问分类":"添加预设问题");function _e(){h.value==="chatBoxType"?y.value=!0:_.value=!0}return Be(()=>{q()}),(o,e)=>{const s=n("el-alert"),w=n("Plus"),v=n("el-icon"),i=n("el-button"),j=xe,J=n("el-tag"),p=n("el-table-column"),Q=n("el-popconfirm"),M=n("el-table"),G=n("el-tab-pane"),ve=n("el-tabs"),L=n("el-switch"),H=n("QuestionFilled"),K=n("el-tooltip"),f=n("el-form-item"),B=n("el-input"),W=n("el-form"),X=n("el-dialog"),be=n("el-option"),Ce=n("el-select"),Y=Ve("loading");return V(),Z("div",null,[t(j,{class:"header"},{default:l(()=>[t(s,{"show-icon":"",title:"快问说明",description:"此处设置用于对话窗口的左下角、点击可以快速打开我们创建的分类、每个分类下我们可以预设一些提问、只需要在提问的地方 补充其他内容即可完成快速提问！",type:"success"}),t(i,{type:"success",class:"ml-3",size:"large",onClick:_e},{default:l(()=>[c(k(ye.value)+" ",1),t(v,{class:"ml-3"},{default:l(()=>[t(w)]),_:1})]),_:1})]),_:1}),t(j,{style:{width:"100%"}},{default:l(()=>[t(ve,{modelValue:r(h),"onUpdate:modelValue":e[0]||(e[0]=a=>S(h)?h.value=a:null),type:"border-card",onTabChange:ce},{default:l(()=>[t(G,{name:"chatBoxType",label:"分类管理"},{default:l(()=>[E((V(),R(M,{border:"",data:r(z),style:{width:"100%"},size:"large"},{default:l(()=>[t(p,{prop:"status",align:"center",label:"分类状态"},{default:l(a=>[t(J,{type:a.row.status?"success":"danger"},{default:l(()=>[c(k(a.row.status?"开启中":"已关闭"),1)]),_:2},1032,["type"])]),_:1}),t(p,{prop:"name",label:"分类名称"}),t(p,{prop:"order",label:"排序ID"}),t(p,{prop:"icon",label:"分类图标"},{default:l(a=>[t(he,{style:{"font-size":"24px"},icon:a.row.icon},null,8,["icon"])]),_:1}),t(p,{fixed:"right",label:"操作",align:"center",width:"180"},{default:l(a=>[t(i,{link:"",type:"primary",size:"small",onClick:N=>pe(a.row)},{default:l(()=>e[17]||(e[17]=[c(" 变更 ")])),_:2},1032,["onClick"]),t(Q,{title:"确认删除此提示词么?",width:"180","icon-color":"red",onConfirm:N=>de(a.row)},{reference:l(()=>[t(i,{link:"",type:"danger",size:"small"},{default:l(()=>e[18]||(e[18]=[c(" 删除分类 ")])),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"])),[[Y,r(T)]])]),_:1}),t(G,{name:"chatBox",label:"子类管理"},{default:l(()=>[E((V(),R(M,{border:"",data:r(F),style:{width:"100%"},size:"large"},{default:l(()=>[t(p,{prop:"typeInfo.name",label:"所属分类",width:"120",align:"center"}),t(p,{prop:"status",label:"开启状态",width:"120",align:"center"},{default:l(a=>[t(J,{type:a.row.status?"success":"danger"},{default:l(()=>[c(k(a.row.status?"开启中":"已关闭"),1)]),_:2},1032,["type"])]),_:1}),t(p,{prop:"title",label:"标题名称",width:"180",align:"center"}),t(p,{prop:"order",label:"排序ID",width:"90",align:"center"}),t(p,{prop:"prompt",label:"快捷预问题"}),t(p,{fixed:"right",label:"操作",align:"center",width:"180"},{default:l(a=>[t(i,{link:"",type:"primary",size:"small",onClick:N=>me(a.row)},{default:l(()=>e[19]||(e[19]=[c(" 变更 ")])),_:2},1032,["onClick"]),t(Q,{title:"确认删除此提示词么?",width:"180","icon-color":"red",onConfirm:N=>ie(a.row)},{reference:l(()=>[t(i,{link:"",type:"danger",size:"small"},{default:l(()=>e[20]||(e[20]=[c(" 删除分类 ")])),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"])),[[Y,r(P)]])]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(X,{modelValue:r(y),"onUpdate:modelValue":e[6]||(e[6]=a=>S(y)?y.value=a:null),"close-on-click-modal":!1,title:re.value,width:"770",onClose:e[7]||(e[7]=a=>ne(r(x)))},{footer:l(()=>[U("span",Pe,[t(i,{onClick:e[4]||(e[4]=a=>y.value=!1)},{default:l(()=>e[22]||(e[22]=[c("取消")])),_:1}),t(i,{type:"primary",onClick:e[5]||(e[5]=a=>fe(r(x)))},{default:l(()=>[c(k(A.value),1)]),_:1})])]),default:l(()=>[t(W,{ref_key:"formPackageChatBoxTypeRef",ref:x,"label-position":"right","label-width":"120px",model:u,rules:ae},{default:l(()=>[t(f,{label:"分类启用状态",prop:"status"},{default:l(()=>[t(L,{modelValue:u.status,"onUpdate:modelValue":e[1]||(e[1]=a=>u.status=a)},null,8,["modelValue"]),t(K,{class:"box-item",effect:"dark",placement:"right"},{content:l(()=>e[21]||(e[21]=[U("div",{style:{width:"250px"}}," 关闭当前分类、用户端将不再展示！ ",-1)])),default:l(()=>[t(v,{class:"ml-3 cursor-pointer"},{default:l(()=>[t(H)]),_:1})]),_:1})]),_:1}),t(f,{label:"排序Order",prop:"order"},{default:l(()=>[t(B,{modelValue:u.order,"onUpdate:modelValue":e[2]||(e[2]=a=>u.order=a),placeholder:"排序id越大越靠前"},null,8,["modelValue"])]),_:1}),t(f,{label:"分类名称",prop:"name"},{default:l(()=>[t(B,{modelValue:u.name,"onUpdate:modelValue":e[3]||(e[3]=a=>u.name=a),placeholder:"请填写提示词名称（用户看到的名称）"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"]),t(X,{modelValue:r(_),"onUpdate:modelValue":e[15]||(e[15]=a=>S(_)?_.value=a:null),"close-on-click-modal":!1,title:ue.value,width:"770",onClose:e[16]||(e[16]=a=>se(r(le)))},{footer:l(()=>[U("span",qe,[t(i,{onClick:e[13]||(e[13]=a=>_.value=!1)},{default:l(()=>e[24]||(e[24]=[c("取消")])),_:1}),t(i,{type:"primary",onClick:e[14]||(e[14]=a=>ge(r(x)))},{default:l(()=>[c(k(A.value),1)]),_:1})])]),default:l(()=>[t(W,{ref_key:"formPackageChatBoxTypeRef",ref:x,"label-position":"right","label-width":"120px",model:d,rules:oe},{default:l(()=>[t(f,{label:"启用状态",prop:"status"},{default:l(()=>[t(L,{modelValue:u.status,"onUpdate:modelValue":e[8]||(e[8]=a=>u.status=a)},null,8,["modelValue"]),t(K,{class:"box-item",effect:"dark",placement:"right"},{content:l(()=>e[23]||(e[23]=[U("div",{style:{width:"250px"}}," 关闭当前子项、用户端将不再展示！ ",-1)])),default:l(()=>[t(v,{class:"ml-3 cursor-pointer"},{default:l(()=>[t(H)]),_:1})]),_:1})]),_:1}),t(f,{label:"选择分类",prop:"typeId"},{default:l(()=>[t(Ce,{modelValue:d.typeId,"onUpdate:modelValue":e[9]||(e[9]=a=>d.typeId=a),placeholder:"请选择分类状态",clearable:"",style:{width:"100%"}},{default:l(()=>[(V(!0),Z(ke,null,Te(r(z),a=>(V(),R(be,{key:a.id,label:a.name,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(f,{label:"标题名称",prop:"title"},{default:l(()=>[t(B,{modelValue:d.title,"onUpdate:modelValue":e[10]||(e[10]=a=>d.title=a),placeholder:"请填写子项标题名称"},null,8,["modelValue"])]),_:1}),t(f,{label:"排序Order",prop:"order"},{default:l(()=>[t(B,{modelValue:d.order,"onUpdate:modelValue":e[11]||(e[11]=a=>d.order=a),placeholder:"排序id越大越靠前"},null,8,["modelValue"])]),_:1}),t(f,{label:"预设问题",prop:"prompt"},{default:l(()=>[t(B,{modelValue:d.prompt,"onUpdate:modelValue":e[12]||(e[12]=a=>d.prompt=a),type:"textarea",rows:5,placeholder:"请填写预设问题、如果设置了应用、那么点击优先跳转应用、如果未设置、点击则会直接在对话中发当前填写预设内容"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])])}}});typeof te=="function"&&te(De);export{De as default};
