'use strict';const _0x1dcce3=_0x1ba7;(function(_0x2d3cfd,_0x544912){const _0x4b3ca2=_0x1ba7,_0x58130d=_0x2d3cfd();while(!![]){try{const _0x3bcf3c=-parseInt(_0x4b3ca2(0xf9))/0x1+-parseInt(_0x4b3ca2(0xec))/0x2*(parseInt(_0x4b3ca2(0xea))/0x3)+parseInt(_0x4b3ca2(0xeb))/0x4+-parseInt(_0x4b3ca2(0xf0))/0x5*(-parseInt(_0x4b3ca2(0xf4))/0x6)+-parseInt(_0x4b3ca2(0x106))/0x7*(parseInt(_0x4b3ca2(0x101))/0x8)+parseInt(_0x4b3ca2(0xfa))/0x9+-parseInt(_0x4b3ca2(0xf7))/0xa*(parseInt(_0x4b3ca2(0xf1))/0xb);if(_0x3bcf3c===_0x544912)break;else _0x58130d['push'](_0x58130d['shift']());}catch(_0x54199a){_0x58130d['push'](_0x58130d['shift']());}}}(_0x380c,0x90dc0));Object['defineProperty'](exports,_0x1dcce3(0xe9),{'value':!![]}),exports[_0x1dcce3(0xe4)]=exports[_0x1dcce3(0xef)]=exports['compilerMetaJsonStr']=exports[_0x1dcce3(0x10b)]=void 0x0;const axios=require(_0x1dcce3(0x107)),jwt=require('jsonwebtoken');function _0x380c(){const _0xfc3be2=['271980WUXpgH','parse','round','10vTdmqr','POST','364778EChSSh','6282513jhVOjM','SIGN','then','sign','id:','data:','compilerMetaJsonStr','369448VVSavc','trim','error','is_end','json\x20parse\x20error\x20from\x20zhipu!','77XjcmOd','axios','HS256','stream','event:','generateToken','application/json','filter','sendMessageFromZhipu','error:\x20','split','/sse-invoke','now','__esModule','3xnOdMa','2007656BUTUtd','392198IvwkGC','data','length','compilerStream','90EmUJFg','3890689yhEQtj','replace','https://open.bigmodel.cn/api/paas/v3/model-api/'];_0x380c=function(){return _0xfc3be2;};return _0x380c();}function generateToken(_0x3e85d8,_0x4ec50b=0x3e8*0x3c*0x3c*0x18*0x168){const _0x4a324d=_0x1dcce3,[_0x568b7c,_0x582d67]=_0x3e85d8[_0x4a324d(0xe6)]('.'),_0x278fc9={'api_key':_0x568b7c,'exp':Math[_0x4a324d(0xf6)](Date[_0x4a324d(0xe8)]())+_0x4ec50b*0x3e8,'timestamp':Math[_0x4a324d(0xf6)](Date[_0x4a324d(0xe8)]())};return jwt[_0x4a324d(0xfd)](_0x278fc9,_0x582d67,{'algorithm':'HS256','header':{'alg':_0x4a324d(0x108),'sign_type':_0x4a324d(0xfb)}});}exports[_0x1dcce3(0x10b)]=generateToken;function compilerMetaJsonStr(_0x18a314){const _0x56b501=_0x1dcce3;let _0x2430b3={};try{_0x2430b3=JSON[_0x56b501(0xf5)](_0x18a314);}catch(_0x88c73f){_0x2430b3={'usage':{'completion_tokens':0x31,'prompt_tokens':0x14d,'total_tokens':0x18f}},console[_0x56b501(0x103)](_0x56b501(0x105),_0x18a314);}return _0x2430b3;}exports[_0x1dcce3(0x100)]=compilerMetaJsonStr;function _0x1ba7(_0x442e66,_0x1ca519){const _0x380c34=_0x380c();return _0x1ba7=function(_0x1ba73e,_0x4c45b2){_0x1ba73e=_0x1ba73e-0xe4;let _0x4acf02=_0x380c34[_0x1ba73e];return _0x4acf02;},_0x1ba7(_0x442e66,_0x1ca519);}function compilerStream(_0x4f1d75){const _0x420351=_0x1dcce3;var _0x361217;if(_0x4f1d75['length']===0x3)return{'event':_0x4f1d75[0x0]['replace'](_0x420351(0x10a),''),'id':_0x4f1d75[0x1][_0x420351(0xf2)](_0x420351(0xfe),''),'is_end':![],'result':_0x4f1d75[0x2][_0x420351(0xf2)](_0x420351(0xff),'')[_0x420351(0x102)]()};if(_0x4f1d75[_0x420351(0xee)]===0x4)return{'event':_0x4f1d75[0x0][_0x420351(0xf2)](_0x420351(0x10a),''),'id':_0x4f1d75[0x1][_0x420351(0xf2)](_0x420351(0xfe),''),'result':_0x4f1d75[0x2]['replace']('data:','')[_0x420351(0x102)](),'is_end':!![],'usage':(_0x361217=compilerMetaJsonStr(_0x4f1d75[0x3][_0x420351(0xf2)]('meta:','')))===null||_0x361217===void 0x0?void 0x0:_0x361217['usage']};}exports[_0x1dcce3(0xef)]=compilerStream;async function sendMessageFromZhipu(_0x3b3f62,{onProgress:_0x6f40a3,key:_0x1ca9a0,model:_0x1dcc88,temperature:temperature=0.95}){const _0xd30d1d=await generateToken(_0x1ca9a0);return new Promise((_0x122465,_0x1996b1)=>{const _0x1dc817=_0x1ba7,_0x54e4ec=_0x1dc817(0xf3)+_0x1dcc88+_0x1dc817(0xe7),_0x47d2e4={'method':_0x1dc817(0xf8),'url':_0x54e4ec,'responseType':_0x1dc817(0x109),'headers':{'Content-Type':_0x1dc817(0x10c),'Authorization':_0xd30d1d},'data':{'prompt':_0x3b3f62,'temperature':temperature}};axios(_0x47d2e4)[_0x1dc817(0xfc)](_0x28f789=>{const _0x26d33d=_0x1dc817,_0x3fa85a=_0x28f789[_0x26d33d(0xed)];let _0x225a18,_0x5ba764='';_0x3fa85a['on'](_0x26d33d(0xed),_0x56f657=>{const _0x334a9d=_0x26d33d,_0x54e302=_0x56f657['toString']()[_0x334a9d(0xe6)]('\x0a')[_0x334a9d(0x10d)](_0x166f05=>_0x166f05['trim']()!==''),_0x2b9baf=compilerStream(_0x54e302);if(!_0x2b9baf)return;const {id:_0x40a93d,result:_0x52cc80,is_end:_0x360266}=_0x2b9baf;_0x52cc80&&(_0x5ba764+=_0x52cc80['trim']()),_0x360266&&(_0x2b9baf[_0x334a9d(0x104)]=![],_0x225a18=_0x2b9baf,_0x225a18['text']=_0x5ba764),_0x6f40a3(_0x2b9baf);}),_0x3fa85a['on']('end',()=>{_0x122465(_0x225a18),_0x5ba764='';});})['catch'](_0x576362=>{const _0x366582=_0x1dc817;console['log'](_0x366582(0xe5),_0x576362);});});}exports[_0x1dcce3(0xe4)]=sendMessageFromZhipu;