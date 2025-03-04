import{d as L,ab as r,aE as oe,b9 as ie,ba as se,bb as le,bc as ae,e as P,bd as j,ar as V,as as C,at as q,aN as me,aO as ne,be,b2 as Q,aS as xe,a5 as Y,o as k,c as B,a as _,I as R,t as W,q as g,F as X,j as ke,k as x,_ as D,m as O,A as Se,s as I,l as E,E as $e,C as ce,f as ue,Y as Ce,D as de,u as pe,r as N,w as U,h as we,a3 as _e,ad as Pe,b as Be,Q as De,ae as Z,bf as Ie,H as J,n as ee,af as ze}from"./index-768c9aff.js";import{N as Ne}from"./Popconfirm-7a68a3e7.js";import{N as te}from"./NumberAnimation-d2783707.js";import{N as Re}from"./LayoutSider-73de740d.js";const Te={success:r(ie,null),error:r(se,null),warning:r(le,null),info:r(ae,null)},Ge=L({name:"ProgressCircle",props:{clsPrefix:{type:String,required:!0},status:{type:String,required:!0},strokeWidth:{type:Number,required:!0},fillColor:[String,Object],railColor:String,railStyle:[String,Object],percentage:{type:Number,default:0},offsetDegree:{type:Number,default:0},showIndicator:{type:Boolean,required:!0},indicatorTextColor:String,unit:String,viewBoxWidth:{type:Number,required:!0},gapDegree:{type:Number,required:!0},gapOffsetDegree:{type:Number,default:0}},setup(e,{slots:m}){function h(s,i,a,c){const{gapDegree:d,viewBoxWidth:f,strokeWidth:y}=e,p=50,v=0,w=p,l=0,o=2*p,u=50+y/2,S=`M ${u},${u} m ${v},${w}
      a ${p},${p} 0 1 1 ${l},${-o}
      a ${p},${p} 0 1 1 ${-l},${o}`,n=Math.PI*2*p,t={stroke:c==="rail"?a:typeof e.fillColor=="object"?"url(#gradient)":a,strokeDasharray:`${s/100*(n-d)}px ${f*8}px`,strokeDashoffset:`-${d/2}px`,transformOrigin:i?"center":void 0,transform:i?`rotate(${i}deg)`:void 0};return{pathString:S,pathStyle:t}}const b=()=>{const s=typeof e.fillColor=="object",i=s?e.fillColor.stops[0]:"",a=s?e.fillColor.stops[1]:"";return s&&r("defs",null,r("linearGradient",{id:"gradient",x1:"0%",y1:"100%",x2:"100%",y2:"0%"},r("stop",{offset:"0%","stop-color":i}),r("stop",{offset:"100%","stop-color":a})))};return()=>{const{fillColor:s,railColor:i,strokeWidth:a,offsetDegree:c,status:d,percentage:f,showIndicator:y,indicatorTextColor:p,unit:v,gapOffsetDegree:w,clsPrefix:l}=e,{pathString:o,pathStyle:u}=h(100,0,i,"rail"),{pathString:S,pathStyle:n}=h(f,c,s,"fill"),t=100+a;return r("div",{class:`${l}-progress-content`,role:"none"},r("div",{class:`${l}-progress-graph`,"aria-hidden":!0},r("div",{class:`${l}-progress-graph-circle`,style:{transform:w?`rotate(${w}deg)`:void 0}},r("svg",{viewBox:`0 0 ${t} ${t}`},b(),r("g",null,r("path",{class:`${l}-progress-graph-circle-rail`,d:o,"stroke-width":a,"stroke-linecap":"round",fill:"none",style:u})),r("g",null,r("path",{class:[`${l}-progress-graph-circle-fill`,f===0&&`${l}-progress-graph-circle-fill--empty`],d:S,"stroke-width":a,"stroke-linecap":"round",fill:"none",style:n}))))),y?r("div",null,m.default?r("div",{class:`${l}-progress-custom-content`,role:"none"},m.default()):d!=="default"?r("div",{class:`${l}-progress-icon`,"aria-hidden":!0},r(oe,{clsPrefix:l},{default:()=>Te[d]})):r("div",{class:`${l}-progress-text`,style:{color:p},role:"none"},r("span",{class:`${l}-progress-text__percentage`},f),r("span",{class:`${l}-progress-text__unit`},v))):null)}}}),We={success:r(ie,null),error:r(se,null),warning:r(le,null),info:r(ae,null)},Ae=L({name:"ProgressLine",props:{clsPrefix:{type:String,required:!0},percentage:{type:Number,default:0},railColor:String,railStyle:[String,Object],fillColor:[String,Object],status:{type:String,required:!0},indicatorPlacement:{type:String,required:!0},indicatorTextColor:String,unit:{type:String,default:"%"},processing:{type:Boolean,required:!0},showIndicator:{type:Boolean,required:!0},height:[String,Number],railBorderRadius:[String,Number],fillBorderRadius:[String,Number]},setup(e,{slots:m}){const h=P(()=>j(e.height)),b=P(()=>{var a,c;return typeof e.fillColor=="object"?`linear-gradient(to right, ${(a=e.fillColor)===null||a===void 0?void 0:a.stops[0]} , ${(c=e.fillColor)===null||c===void 0?void 0:c.stops[1]})`:e.fillColor}),s=P(()=>e.railBorderRadius!==void 0?j(e.railBorderRadius):e.height!==void 0?j(e.height,{c:.5}):""),i=P(()=>e.fillBorderRadius!==void 0?j(e.fillBorderRadius):e.railBorderRadius!==void 0?j(e.railBorderRadius):e.height!==void 0?j(e.height,{c:.5}):"");return()=>{const{indicatorPlacement:a,railColor:c,railStyle:d,percentage:f,unit:y,indicatorTextColor:p,status:v,showIndicator:w,processing:l,clsPrefix:o}=e;return r("div",{class:`${o}-progress-content`,role:"none"},r("div",{class:`${o}-progress-graph`,"aria-hidden":!0},r("div",{class:[`${o}-progress-graph-line`,{[`${o}-progress-graph-line--indicator-${a}`]:!0}]},r("div",{class:`${o}-progress-graph-line-rail`,style:[{backgroundColor:c,height:h.value,borderRadius:s.value},d]},r("div",{class:[`${o}-progress-graph-line-fill`,l&&`${o}-progress-graph-line-fill--processing`],style:{maxWidth:`${e.percentage}%`,background:b.value,height:h.value,lineHeight:h.value,borderRadius:i.value}},a==="inside"?r("div",{class:`${o}-progress-graph-line-indicator`,style:{color:p}},m.default?m.default():`${f}${y}`):null)))),w&&a==="outside"?r("div",null,m.default?r("div",{class:`${o}-progress-custom-content`,style:{color:p},role:"none"},m.default()):v==="default"?r("div",{role:"none",class:`${o}-progress-icon ${o}-progress-icon--as-text`,style:{color:p}},f,y):r("div",{class:`${o}-progress-icon`,"aria-hidden":!0},r(oe,{clsPrefix:o},{default:()=>We[v]}))):null)}}});function re(e,m,h=100){return`m ${h/2} ${h/2-e} a ${e} ${e} 0 1 1 0 ${2*e} a ${e} ${e} 0 1 1 0 -${2*e}`}const Me=L({name:"ProgressMultipleCircle",props:{clsPrefix:{type:String,required:!0},viewBoxWidth:{type:Number,required:!0},percentage:{type:Array,default:[0]},strokeWidth:{type:Number,required:!0},circleGap:{type:Number,required:!0},showIndicator:{type:Boolean,required:!0},fillColor:{type:Array,default:()=>[]},railColor:{type:Array,default:()=>[]},railStyle:{type:Array,default:()=>[]}},setup(e,{slots:m}){const h=P(()=>e.percentage.map((i,a)=>`${Math.PI*i/100*(e.viewBoxWidth/2-e.strokeWidth/2*(1+2*a)-e.circleGap*a)*2}, ${e.viewBoxWidth*8}`)),b=(s,i)=>{const a=e.fillColor[i],c=typeof a=="object"?a.stops[0]:"",d=typeof a=="object"?a.stops[1]:"";return typeof e.fillColor[i]=="object"&&r("linearGradient",{id:`gradient-${i}`,x1:"100%",y1:"0%",x2:"0%",y2:"100%"},r("stop",{offset:"0%","stop-color":c}),r("stop",{offset:"100%","stop-color":d}))};return()=>{const{viewBoxWidth:s,strokeWidth:i,circleGap:a,showIndicator:c,fillColor:d,railColor:f,railStyle:y,percentage:p,clsPrefix:v}=e;return r("div",{class:`${v}-progress-content`,role:"none"},r("div",{class:`${v}-progress-graph`,"aria-hidden":!0},r("div",{class:`${v}-progress-graph-circle`},r("svg",{viewBox:`0 0 ${s} ${s}`},r("defs",null,p.map((w,l)=>b(w,l))),p.map((w,l)=>r("g",{key:l},r("path",{class:`${v}-progress-graph-circle-rail`,d:re(s/2-i/2*(1+2*l)-a*l,i,s),"stroke-width":i,"stroke-linecap":"round",fill:"none",style:[{strokeDashoffset:0,stroke:f[l]},y[l]]}),r("path",{class:[`${v}-progress-graph-circle-fill`,w===0&&`${v}-progress-graph-circle-fill--empty`],d:re(s/2-i/2*(1+2*l)-a*l,i,s),"stroke-width":i,"stroke-linecap":"round",fill:"none",style:{strokeDasharray:h.value[l],strokeDashoffset:0,stroke:typeof d[l]=="object"?`url(#gradient-${l})`:d[l]}})))))),c&&m.default?r("div",null,r("div",{class:`${v}-progress-text`},m.default())):null)}}}),qe=V([C("progress",{display:"inline-block"},[C("progress-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),q("line",`
 width: 100%;
 display: block;
 `,[C("progress-content",`
 display: flex;
 align-items: center;
 `,[C("progress-graph",{flex:1})]),C("progress-custom-content",{marginLeft:"14px"}),C("progress-icon",`
 width: 30px;
 padding-left: 14px;
 height: var(--n-icon-size-line);
 line-height: var(--n-icon-size-line);
 font-size: var(--n-icon-size-line);
 `,[q("as-text",`
 color: var(--n-text-color-line-outer);
 text-align: center;
 width: 40px;
 font-size: var(--n-font-size);
 padding-left: 4px;
 transition: color .3s var(--n-bezier);
 `)])]),q("circle, dashboard",{width:"120px"},[C("progress-custom-content",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `),C("progress-text",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: inherit;
 font-size: var(--n-font-size-circle);
 color: var(--n-text-color-circle);
 font-weight: var(--n-font-weight-circle);
 transition: color .3s var(--n-bezier);
 white-space: nowrap;
 `),C("progress-icon",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: var(--n-icon-color);
 font-size: var(--n-icon-size-circle);
 `)]),q("multiple-circle",`
 width: 200px;
 color: inherit;
 `,[C("progress-text",`
 font-weight: var(--n-font-weight-circle);
 color: var(--n-text-color-circle);
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `)]),C("progress-content",{position:"relative"}),C("progress-graph",{position:"relative"},[C("progress-graph-circle",[V("svg",{verticalAlign:"bottom"}),C("progress-graph-circle-fill",`
 stroke: var(--n-fill-color);
 transition:
 opacity .3s var(--n-bezier),
 stroke .3s var(--n-bezier),
 stroke-dasharray .3s var(--n-bezier);
 `,[q("empty",{opacity:0})]),C("progress-graph-circle-rail",`
 transition: stroke .3s var(--n-bezier);
 overflow: hidden;
 stroke: var(--n-rail-color);
 `)]),C("progress-graph-line",[q("indicator-inside",[C("progress-graph-line-rail",`
 height: 16px;
 line-height: 16px;
 border-radius: 10px;
 `,[C("progress-graph-line-fill",`
 height: inherit;
 border-radius: 10px;
 `),C("progress-graph-line-indicator",`
 background: #0000;
 white-space: nowrap;
 text-align: right;
 margin-left: 14px;
 margin-right: 14px;
 height: inherit;
 font-size: 12px;
 color: var(--n-text-color-line-inner);
 transition: color .3s var(--n-bezier);
 `)])]),q("indicator-inside-label",`
 height: 16px;
 display: flex;
 align-items: center;
 `,[C("progress-graph-line-rail",`
 flex: 1;
 transition: background-color .3s var(--n-bezier);
 `),C("progress-graph-line-indicator",`
 background: var(--n-fill-color);
 font-size: 12px;
 transform: translateZ(0);
 display: flex;
 vertical-align: middle;
 height: 16px;
 line-height: 16px;
 padding: 0 10px;
 border-radius: 10px;
 position: absolute;
 white-space: nowrap;
 color: var(--n-text-color-line-inner);
 transition:
 right .2s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),C("progress-graph-line-rail",`
 position: relative;
 overflow: hidden;
 height: var(--n-rail-height);
 border-radius: 5px;
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 `,[C("progress-graph-line-fill",`
 background: var(--n-fill-color);
 position: relative;
 border-radius: 5px;
 height: inherit;
 width: 100%;
 max-width: 0%;
 transition:
 background-color .3s var(--n-bezier),
 max-width .2s var(--n-bezier);
 `,[q("processing",[V("&::after",`
 content: "";
 background-image: var(--n-line-bg-processing);
 animation: progress-processing-animation 2s var(--n-bezier) infinite;
 `)])])])])])]),V("@keyframes progress-processing-animation",`
 0% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 100%;
 opacity: 1;
 }
 66% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 100% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 `)]),Le=Object.assign(Object.assign({},ne.props),{processing:Boolean,type:{type:String,default:"line"},gapDegree:Number,gapOffsetDegree:Number,status:{type:String,default:"default"},railColor:[String,Array],railStyle:[String,Array],color:[String,Array,Object],viewBoxWidth:{type:Number,default:100},strokeWidth:{type:Number,default:7},percentage:[Number,Array],unit:{type:String,default:"%"},showIndicator:{type:Boolean,default:!0},indicatorPosition:{type:String,default:"outside"},indicatorPlacement:{type:String,default:"outside"},indicatorTextColor:String,circleGap:{type:Number,default:1},height:Number,borderRadius:[String,Number],fillBorderRadius:[String,Number],offsetDegree:Number}),mt=L({name:"Progress",props:Le,setup(e){const m=P(()=>e.indicatorPlacement||e.indicatorPosition),h=P(()=>{if(e.gapDegree||e.gapDegree===0)return e.gapDegree;if(e.type==="dashboard")return 75}),{mergedClsPrefixRef:b,inlineThemeDisabled:s}=me(e),i=ne("Progress","-progress",qe,be,e,b),a=P(()=>{const{status:d}=e,{common:{cubicBezierEaseInOut:f},self:{fontSize:y,fontSizeCircle:p,railColor:v,railHeight:w,iconSizeCircle:l,iconSizeLine:o,textColorCircle:u,textColorLineInner:S,textColorLineOuter:n,lineBgProcessing:t,fontWeightCircle:z,[Q("iconColor",d)]:T,[Q("fillColor",d)]:A}}=i.value;return{"--n-bezier":f,"--n-fill-color":A,"--n-font-size":y,"--n-font-size-circle":p,"--n-font-weight-circle":z,"--n-icon-color":T,"--n-icon-size-circle":l,"--n-icon-size-line":o,"--n-line-bg-processing":t,"--n-rail-color":v,"--n-rail-height":w,"--n-text-color-circle":u,"--n-text-color-line-inner":S,"--n-text-color-line-outer":n}}),c=s?xe("progress",P(()=>e.status[0]),a,e):void 0;return{mergedClsPrefix:b,mergedIndicatorPlacement:m,gapDeg:h,cssVars:s?void 0:a,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){const{type:e,cssVars:m,indicatorTextColor:h,showIndicator:b,status:s,railColor:i,railStyle:a,color:c,percentage:d,viewBoxWidth:f,strokeWidth:y,mergedIndicatorPlacement:p,unit:v,borderRadius:w,fillBorderRadius:l,height:o,processing:u,circleGap:S,mergedClsPrefix:n,gapDeg:t,gapOffsetDegree:z,themeClass:T,$slots:A,onRender:K}=this;return K==null||K(),r("div",{class:[T,`${n}-progress`,`${n}-progress--${e}`,`${n}-progress--${s}`],style:m,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":d,role:e==="circle"||e==="line"||e==="dashboard"?"progressbar":"none"},e==="circle"||e==="dashboard"?r(Ge,{clsPrefix:n,status:s,showIndicator:b,indicatorTextColor:h,railColor:i,fillColor:c,railStyle:a,offsetDegree:this.offsetDegree,percentage:d,viewBoxWidth:f,strokeWidth:y,gapDegree:t===void 0?e==="dashboard"?75:0:t,gapOffsetDegree:z,unit:v},A):e==="line"?r(Ae,{clsPrefix:n,status:s,showIndicator:b,indicatorTextColor:h,railColor:i,fillColor:c,railStyle:a,percentage:d,processing:u,indicatorPlacement:p,unit:v,fillBorderRadius:l,railBorderRadius:w,height:o},A):e==="multiple-circle"?r(Me,{clsPrefix:n,strokeWidth:y,railColor:i,fillColor:c,railStyle:a,viewBoxWidth:f,percentage:d,showIndicator:b,circleGap:S},A):null)}});function je(e,m){let h;return(...b)=>{const s=()=>{clearTimeout(h),e(...b)};clearTimeout(h),h=setTimeout(s,m)}}const Oe={class:"mb-2 text-xs text-neutral-400 font-bold"},Ee={class:"ml-1"},Ke=["onClick"],Ue={class:"relative flex-1 overflow-hidden break-all text-ellipsis whitespace-nowrap"},Ve={key:1},He={key:0,class:"absolute z-10 flex visible right-1"},Xe=["onClick"],Ye={class:"p-1"},Fe={key:0,class:"p-1"},Qe={class:"p-1"},H=L({__name:"ListItem",props:{dataSources:{},title:{}},emits:["update","delete","sticky","select"],setup(e,{emit:m}){const h=e,b=m,s=h.dataSources,i=Y();async function a(o){b("select",o)}function c(o,u,S){S==null||S.stopPropagation(),o.isEdit=u}async function d(o,u){u==null||u.stopPropagation(),await i.updateGroupInfo({isSticky:!o.isSticky,groupId:o.uuid}),await i.queryMyGroup()}async function f(o,u){u==null||u.stopPropagation(),b("delete",o)}const y=je(f,600);async function p(o){const{uuid:u,title:S}=o;o.isEdit=!1,await i.updateGroupInfo({groupId:u,title:S}),await i.queryMyGroup()}async function v(o,u){u==null||u.stopPropagation(),u.key==="Enter"&&p(o)}function w(o,u){u==null||u.stopPropagation(),p(o)}function l(o){return i.active===o}return(o,u)=>{var S;return k(),B(X,null,[_("p",Oe,[R(W(h.title)+" ",1),_("span",Ee,"("+W((S=g(s))==null?void 0:S.length)+")",1)]),(k(!0),B(X,null,ke(g(s),n=>(k(),B("div",{key:`${n.uuid}`},[_("a",{class:$e(["relative flex items-center gap-3 px-3 py-2.5 break-all border rounded-md cursor-pointer hover:bg-neutral-100 group dark:border-neutral-800 dark:hover:bg-[#24272e]",l(n.uuid)&&["border-[#3076FD]","bg-neutral-100","text-[#3076FD]","dark:bg-[#24272e]","dark:border-[#3076fd]","pr-20"]]),onClick:t=>a(n)},[_("span",null,[x(g(D),{icon:n.isSticky?"ri:pushpin-2-line":n.appId?"icon-park-outline:application-one":"eos-icons:typing"},null,8,["icon"])]),_("div",Ue,[n.isEdit?(k(),O(g(Se),{key:0,value:n.title,"onUpdate:value":t=>n.title=t,size:"tiny",onKeypress:t=>v(n,t)},null,8,["value","onUpdate:value","onKeypress"])):(k(),B("span",Ve,W(n.title),1))]),l(n.uuid)?(k(),B("div",He,[n.isEdit?(k(),B("button",{key:0,class:"p-1",onClick:t=>w(n,t)},[x(g(D),{icon:"ri:save-line"})],8,Xe)):(k(),B(X,{key:1},[_("button",Ye,[x(g(D),{icon:n.isSticky?"ri:unpin-line":"ri:pushpin-line",onClick:t=>d(n,t)},null,8,["icon","onClick"])]),n.appId?I("",!0):(k(),B("button",Fe,[x(g(D),{icon:"ri:edit-line",onClick:t=>c(n,!0,t)},null,8,["onClick"])])),x(g(Ne),{placement:"bottom",onPositiveClick:t=>g(y)(n,t)},{trigger:E(()=>[_("button",Qe,[x(g(D),{icon:"ri:delete-bin-line"})])]),default:E(()=>[R(" "+W(o.$t("chat.deleteHistoryConfirm")),1)]),_:2},1032,["onPositiveClick"])],64))])):I("",!0)],10,Ke)]))),128))],64)}}}),Ze={class:"flex flex-col gap-3 text-sm"},Je={key:0,class:"flex flex-col items-center mt-4 text-center text-neutral-300"},et=L({__name:"List",setup(e){const{isMobile:m}=ce(),h=ue(),b=Ce(),s=de(),i=Y(),a=pe(),c=N(100),d=P(()=>i.groupList),f=P(()=>i.groupKeyWord);U(d,()=>c.value=c.value+1),U(f,()=>c.value=c.value+1),P(()=>a.isLogin);function y(t){const T=new Date(t).getTime()+8*60*60*1e3;return new Date(T).getTime()}const p=new Date().setHours(0,0,0,0),v=P(()=>d.value.filter(t=>f.value?t.title.includes(f.value)&&t.isSticky:t.isSticky)),w=P(()=>d.value.filter(t=>f.value?t.title.includes(f.value)&&!t.isSticky&&t.appId:!t.isSticky&&t.appId)),l=P(()=>d.value.filter(t=>f.value?t.title.includes(f.value)&&!t.isSticky&&!t.appId&&y(t.createdAt)>=p:!t.isSticky&&!t.appId&&y(t.createdAt)>=p)),o=P(()=>d.value.filter(t=>f.value?t.title.includes(f.value)&&!t.isSticky&&!t.appId&&y(t.createdAt)<p:!t.isSticky&&!t.appId&&y(t.createdAt)<p));async function u(t){const{uuid:z}=t;n(z)||(await i.setActiveGroup(z),b.name!=="Chat"&&h.push("/chat"),m.value&&s.setSiderCollapsed(!0))}async function S(t){event==null||event.stopPropagation(),await i.deleteGroup(t),await i.queryMyGroup(),m.value&&s.setSiderCollapsed(!0)}function n(t){return i.active===t}return we(()=>{i.queryMyGroup()}),(t,z)=>(k(),O(g(_e),{class:"px-4"},{default:E(()=>[_("div",Ze,[d.value.length?(k(),B(X,{key:1},[v.value.length?(k(),O(H,{key:1e3+c.value,title:"置顶","data-sources":v.value,onSelect:u,onDelete:S},null,8,["data-sources"])):I("",!0),w.value.length?(k(),O(H,{key:2e3+c.value,title:"应用分类组","data-sources":w.value,onSelect:u,onDelete:S},null,8,["data-sources"])):I("",!0),l.value.length?(k(),O(H,{key:3e3+c.value,title:"今天","data-sources":l.value,onSelect:u,onDelete:S},null,8,["data-sources"])):I("",!0),o.value.length?(k(),O(H,{key:4e3+c.value,title:"其他","data-sources":o.value,onSelect:u,onDelete:S},null,8,["data-sources"])):I("",!0)],64)):(k(),B("div",Je,[x(g(D),{icon:"ri:inbox-line",class:"mb-2 text-3xl"}),_("span",null,W(t.$t("common.noData")),1)]))])]),_:1}))}}),tt={class:"flex flex-col h-full flex-1 min-h-0"},rt={class:"flex items-center space-x-2 bg-white dark:bg-gray-900 h-12 px-3 border-b border-t-gray-100 dark:border-b dark:border-b-gray-800 text-lg mb-2"},ot={class:"flex-1 relative"},it={class:"flex-1 relative"},st={class:"flex-1 min-h-0 pb-4 overflow-hidden"},lt={class:"p-4 border-t dark:border-t-neutral-800 flex flex-col"},at={key:0,class:"my-1 flex items-center select-none"},nt={key:1,class:"my-1 flex items-center select-none"},ct={key:2,class:"my-1 flex items-center select-none"},ut={key:3,class:"my-1 flex items-center select-none"},dt={key:4,class:"my-1 flex items-center select-none"},pt={key:5,class:"my-1 flex items-center select-none"},gt={class:"flex justify-between my-3"},bt=L({__name:"index",setup(e){const m=Pe(),h=ue(),b=de(),s=Y(),i=pe();Be();const a=N(null),c=N(null),d=P(()=>i.userBalance),f=De(),y=P(()=>s==null?void 0:s.activeModelKeyDeductType),p=P(()=>s==null?void 0:s.activeModelKeyPrice),v=N(0),w=N(0),l=N(0),o=N(0),u=N(!1),S=N(null);U(()=>i.userBalance.useModel3Token,(G,$)=>{var M;v.value=$||0,w.value=G||0,(M=a.value)==null||M.play()},{immediate:!0,flush:"post"}),U(()=>i.userBalance.useModel4Token,(G,$)=>{var M;l.value=$||0,o.value=G||0,(M=c.value)==null||M.play()},{immediate:!0,flush:"post"});const{isMobile:n}=ce(),t=N(!1),z=P(()=>b.siderCollapsed),T=N("");function A(G){const $=G.target.value;T.value=$,s.setGroupKeyWord($)}function K(){u.value=!1}function ge(){h.push("/role")}async function fe(){try{t.value=!0,await s.addNewChatGroup(),await s.queryMyGroup(),t.value=!1,n.value&&b.setSiderCollapsed(!0)}catch{t.value=!1}}async function he(){f.warning({title:"清空分组",content:"是否删除所有非置顶的对话组？",positiveText:"确认删除",negativeText:"再想想",onPositiveClick:async()=>{await s.delAllGroup()}})}function F(){b.setSiderCollapsed(!z.value)}const ye=P(()=>n.value?{position:"fixed",zIndex:50}:{}),ve=P(()=>n.value?{paddingBottom:"env(safe-area-inset-bottom)"}:{});return U(n,G=>{b.setSiderCollapsed(G)},{immediate:!0,flush:"post"}),(G,$)=>(k(),B("div",null,[x(g(Re),{collapsed:z.value,"collapsed-width":0,width:260,"show-trigger":g(n)?!1:"arrow-circle","collapse-mode":"transform",position:"absolute",bordered:"",style:ee(ye.value),onUpdateCollapsed:F},{default:E(()=>[_("div",{class:"flex flex-col h-full bg-[#fafbfc] dark:bg-[#18181c]",style:ee(ve.value)},[_("main",tt,[_("div",rt,[_("div",ot,[_("div",it,[x(g(D),{icon:"material-symbols-light:search",class:"pointer-events-none absolute inset-y-0 left-0 h-full w-6 h-6 text-gray-400"}),Z(_("input",{ref_key:"searchRef",ref:S,"onUpdate:modelValue":$[0]||($[0]=M=>T.value=M),type:"text",placeholder:"搜索历史对话",class:"block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-700 placeholder:text-gray-400 sm:text-sm dark:bg-gray-900 dark:text-gray-400",onBlur:K,onInput:A},null,544),[[Ie,T.value]])])]),_("button",{type:"button",class:"rounded-md p-2 text-sm focus-visible:outline bg-white text-gray-400 dark:bg-gray-800",onClick:fe},[x(g(D),{icon:"material-symbols-light:add",class:"h-6 w-6"})]),_("button",{type:"button",class:"rounded-md p-2 text-sm focus-visible:outline bg-white text-gray-400 dark:bg-gray-800",onClick:he},[x(g(D),{icon:"material-symbols-light:delete-outline",class:"h-6 w-6"})])]),_("div",st,[x(et)]),_("div",lt,[y.value===1?(k(),B("div",at,[x(g(D),{icon:"material-symbols:account-balance-wallet-outline",class:"ml-2 mr-2 text-base"}),R("普通额度： "+W(`${d.value.sumModel3Count||0} 积分`),1)])):I("",!0),y.value===1?(k(),B("div",nt,[x(g(D),{icon:"ic:twotone-hourglass-top",class:"ml-2 mr-2 text-base"}),$[2]||($[2]=R(" 我已使用： ")),x(g(te),{ref_key:"model3AnimationInstRef",ref:a,from:v.value,to:w.value},null,8,["from","to"]),$[3]||($[3]=R(" Token "))])):I("",!0),y.value===1?(k(),B("div",ct,[x(g(D),{icon:"mingcute:bill-line",class:"ml-2 mr-2 text-base"}),R(" 模型费用： "+W(`${p.value||0}积分 / 次对话`),1)])):I("",!0),y.value===2?(k(),B("div",ut,[x(g(D),{icon:"ic:twotone-hourglass-top",class:"ml-2 mr-2 text-base"}),$[4]||($[4]=R("我已使用： ")),x(g(te),{ref_key:"model4AnimationInstRef",ref:c,from:l.value,to:o.value},null,8,["from","to"]),$[5]||($[5]=R(" Token "))])):I("",!0),y.value===2?(k(),B("div",dt,[x(g(D),{icon:"material-symbols:account-balance-wallet-outline",class:"ml-2 mr-2 text-base"}),R("高级额度： "+W(`${d.value.sumModel4Count||0} 积分`),1)])):I("",!0),y.value===2?(k(),B("div",pt,[x(g(D),{icon:"mingcute:bill-line",class:"ml-2 mr-2 text-base"}),R("模型费用： "+W(`${p.value||0}积分 / 次对话`),1)])):I("",!0),_("div",gt,[x(g(J),{type:"tertiary",size:"small",onClick:$[1]||($[1]=M=>g(m).updateNoticeDialog(!0))},{default:E(()=>[x(g(D),{icon:"mdi:notice-board",class:"ml-2 mr-2 text-sm"}),$[6]||($[6]=_("span",{class:"mr-2"},"公告栏",-1))]),_:1}),x(g(J),{type:"tertiary",size:"small",onClick:ge},{default:E(()=>[x(g(D),{icon:"ri:emoji-sticker-line",class:"ml-2 mr-2 text-sm"}),$[7]||($[7]=_("span",{class:"mr-3"},"工作台",-1))]),_:1})])])])],4)]),_:1},8,["collapsed","show-trigger","style"]),g(n)?Z((k(),B("div",{key:0,class:"fixed inset-0 z-40 bg-black/40",onClick:F},null,512)),[[ze,!z.value]]):I("",!0)]))}});export{mt as N,bt as _};
