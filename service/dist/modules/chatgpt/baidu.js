'use strict';const _0x1b0be7=_0xa55c;function _0xa55c(_0x3d8e21,_0x57c937){const _0x3780f1=_0x3780();return _0xa55c=function(_0xa55cda,_0x3c7e2e){_0xa55cda=_0xa55cda-0x1ac;let _0x26fb1c=_0x3780f1[_0xa55cda];return _0x26fb1c;},_0xa55c(_0x3d8e21,_0x57c937);}(function(_0x231a4d,_0x6aba17){const _0x22cffe=_0xa55c,_0x1b6987=_0x231a4d();while(!![]){try{const _0x39326f=parseInt(_0x22cffe(0x1b0))/0x1*(-parseInt(_0x22cffe(0x1ae))/0x2)+parseInt(_0x22cffe(0x1bb))/0x3*(parseInt(_0x22cffe(0x1b8))/0x4)+-parseInt(_0x22cffe(0x1b3))/0x5*(-parseInt(_0x22cffe(0x1b4))/0x6)+parseInt(_0x22cffe(0x1cc))/0x7*(parseInt(_0x22cffe(0x1ba))/0x8)+-parseInt(_0x22cffe(0x1b1))/0x9+parseInt(_0x22cffe(0x1c4))/0xa+-parseInt(_0x22cffe(0x1ce))/0xb;if(_0x39326f===_0x6aba17)break;else _0x1b6987['push'](_0x1b6987['shift']());}catch(_0x46bfb8){_0x1b6987['push'](_0x1b6987['shift']());}}}(_0x3780,0xc45d5));Object[_0x1b0be7(0x1ad)](exports,_0x1b0be7(0x1cf),{'value':!![]}),exports[_0x1b0be7(0x1c6)]=exports[_0x1b0be7(0x1c2)]=void 0x0;const axios=require(_0x1b0be7(0x1b2)),getApiModelMaps=()=>{const _0x38a5c0=_0x1b0be7;let _0x322e03={};const _0x8f7db2={'ERNIE-Bot':'completions','ERNIE-Bot-turbo':'eb-instant','BLOOMZ-7B':_0x38a5c0(0x1cb),'ERNIE-Bot-4':'completions_pro','Llama-2-7b-chat':'llama_2_7b','Llama-2-13b-chat':_0x38a5c0(0x1c0),'ChatGLM2-6B-32K':'chatglm2_6b_32k','Qianfan-Chinese-Llama-2-7B':_0x38a5c0(0x1af)};return Object[_0x38a5c0(0x1bf)](_0x8f7db2)['map'](_0xd626bd=>{_0x322e03[''+_0xd626bd['toLowerCase']()]=_0x8f7db2[_0xd626bd];}),_0x322e03;};function getAccessToken(_0x47be65,_0x27638a){const _0x3fc573=_0x1b0be7;let _0x360ddd=_0x3fc573(0x1cd)+_0x47be65+'&client_secret='+_0x27638a;return new Promise((_0x25b808,_0x353fc0)=>{const _0x214eeb=_0x3fc573;axios[_0x214eeb(0x1b7)](_0x360ddd)[_0x214eeb(0x1c9)](_0x1f89dc=>{const _0x34a041=_0x214eeb;_0x25b808(_0x1f89dc[_0x34a041(0x1c7)]['access_token']);})[_0x214eeb(0x1c5)](_0x2d0e28=>{_0x353fc0(_0x2d0e28);});});}exports[_0x1b0be7(0x1c2)]=getAccessToken;function sendMessageFromBaidu(_0x1e7c57,{onProgress:_0x45cb92,accessToken:_0x4fa339,model:_0x5e63c7,temperature:temperature=0.95}){const _0x11e896=_0x1b0be7,_0x5ef8ba=getApiModelMaps()[_0x5e63c7['trim']()[_0x11e896(0x1c1)]()];return new Promise((_0x367482,_0x26547b)=>{const _0x3d9260=_0x11e896,_0x477933=_0x3d9260(0x1be)+_0x5ef8ba+_0x3d9260(0x1c8)+_0x4fa339;var _0x362e0f={'method':_0x3d9260(0x1b6),'url':_0x477933,'responseType':_0x3d9260(0x1b5),'headers':{'Content-Type':_0x3d9260(0x1ac)},'data':{'stream':!![],'messages':_0x1e7c57}};axios(_0x362e0f)[_0x3d9260(0x1c9)](_0x41b35c=>{const _0x2b6a29=_0x3d9260,_0x2eee5a=_0x41b35c['data'];let _0x39d17e={},_0x3f0f48='',_0x11a04b='';_0x2eee5a['on'](_0x2b6a29(0x1c7),_0x5c4c3d=>{const _0x1b8b5c=_0x2b6a29,_0x535b7e=_0x5c4c3d[_0x1b8b5c(0x1bd)]()[_0x1b8b5c(0x1b9)]('\x0a\x0a')['filter'](_0xc4605b=>_0xc4605b['trim']()!=='');for(const _0x1d6396 of _0x535b7e){const _0x5d3421=_0x1d6396[_0x1b8b5c(0x1ca)]('data:\x20','');try{const _0x1c7812=_0x3f0f48+_0x5d3421,_0x6f6252=JSON[_0x1b8b5c(0x1bc)](_0x1c7812);_0x3f0f48='';const {is_end:_0x20bd21,result:_0x21e511}=_0x6f6252;_0x21e511&&(_0x11a04b+=_0x21e511),_0x20bd21&&(_0x39d17e=_0x6f6252,_0x39d17e['text']=_0x11a04b),_0x45cb92(_0x6f6252);}catch(_0x5020d8){_0x3f0f48=_0x5d3421;}}}),_0x2eee5a['on'](_0x2b6a29(0x1c3),()=>{_0x11a04b='',_0x3f0f48='',_0x367482(_0x39d17e);});})[_0x3d9260(0x1c5)](_0x3b7d54=>{_0x26547b(new Error(_0x3b7d54));});});}function _0x3780(){const _0x3caabf=['68CfxXzU','qianfan_chinese_llama_2_7b','3537cdeNsP','4073904SfsekQ','axios','413240zPHYLX','48NWEOtQ','stream','POST','post','12fdhutQ','split','75848kfiAkL','1130511ROmQPB','parse','toString','https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/','keys','llama_2_13b','toLowerCase','getAccessToken','end','8903940sikpDd','catch','sendMessageFromBaidu','data','?access_token=','then','replace','bloomz_7b1','1064Mmnsoj','https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=','30205758BKfZFf','__esModule','application/json','defineProperty'];_0x3780=function(){return _0x3caabf;};return _0x3780();}exports['sendMessageFromBaidu']=sendMessageFromBaidu;