'use strict';const _0x326d83=_0x11dc;(function(_0x1c6f61,_0xa64783){const _0xd51b44=_0x11dc,_0x2f04bf=_0x1c6f61();while(!![]){try{const _0x470fd1=parseInt(_0xd51b44(0x8f))/0x1*(parseInt(_0xd51b44(0xc1))/0x2)+-parseInt(_0xd51b44(0xe8))/0x3+parseInt(_0xd51b44(0xf1))/0x4+-parseInt(_0xd51b44(0xc3))/0x5*(parseInt(_0xd51b44(0x80))/0x6)+parseInt(_0xd51b44(0xb0))/0x7*(parseInt(_0xd51b44(0xa4))/0x8)+-parseInt(_0xd51b44(0x91))/0x9+parseInt(_0xd51b44(0xd7))/0xa;if(_0x470fd1===_0xa64783)break;else _0x2f04bf['push'](_0x2f04bf['shift']());}catch(_0x73a082){_0x2f04bf['push'](_0x2f04bf['shift']());}}}(_0xf6e7,0x3529c));function _0xf6e7(){const _0x115616=['chatLogEntity','log','5pWZVGO','assign','3875994GZPGls','defineProperty','createdAt','HttpException','attachment;\x20filename=','取消推荐','fileInfo','getOwnPropertyDescriptor','../user/user.entity','Repository','metadata','querAllDrawLog','Injectable','querDrawLog','includes','chatlog','answer','extend','你删除的对话记录不存在、请检查！','132592hYQUNw','addRow','typeorm','提问问题','DeductionKey','findOne','PAINT_TYPE','ali','exportExcel','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','图片成功！','update','126qnQreO','@nine.com','chat.xlsx','__decorate','recDrawImg','model','CHAT_TYPE','write','saveChatLog','user','prompt','isGroup','columns','__param','UserEntity','exceljs','Not','4430sOaEqM','setHeader','3055IbNpyV','cos','chatGroupEntity','map','你操作的图片不存在、请检查！','删除对话记录成功！','decorate','findAndCount','maskEmail','userEntity','@nestjs/common','end','deleteChatLog','?imageView2/1/w/','tencent','Like','DALL-E2','Workbook','回答答案','ChatLogService','4014590QzJIlw','paintCount','__metadata','assistant','ChatGroupEntity','userId','chatList','dall-e-3','find','affected','type','parse','function','username','InjectRepository','用户名','BAD_REQUEST','587802MWPAkH','object','../chatGroup/chatGroup.entity','用户邮箱','design:paramtypes','@nestjs/typeorm','email','DESC','../../common/utils','1345368vAlemC','forEach','group','default','message_id','1992plNXJr','xlsx','querAllDrawLog\x20Json\x20parse\x20error','formatDate','当前页面已经没有东西可以删除了！','length','/q/55','?x-oss-process=image/resize,w_','components','./chatLog.entity','Content-Disposition','thumbImg','HttpStatus'];_0xf6e7=function(){return _0x115616;};return _0xf6e7();}var __decorate=this&&this[_0x326d83(0xb3)]||function(_0x32f6d8,_0x1a7abf,_0xbc0d31,_0x3c904a){const _0x264f07=_0x326d83;var _0x57879=arguments[_0x264f07(0x85)],_0x2492ac=_0x57879<0x3?_0x1a7abf:_0x3c904a===null?_0x3c904a=Object[_0x264f07(0x98)](_0x1a7abf,_0xbc0d31):_0x3c904a,_0x4378f5;if(typeof Reflect==='object'&&typeof Reflect['decorate']===_0x264f07(0xe3))_0x2492ac=Reflect[_0x264f07(0xc9)](_0x32f6d8,_0x1a7abf,_0xbc0d31,_0x3c904a);else{for(var _0x24f2f8=_0x32f6d8[_0x264f07(0x85)]-0x1;_0x24f2f8>=0x0;_0x24f2f8--)if(_0x4378f5=_0x32f6d8[_0x24f2f8])_0x2492ac=(_0x57879<0x3?_0x4378f5(_0x2492ac):_0x57879>0x3?_0x4378f5(_0x1a7abf,_0xbc0d31,_0x2492ac):_0x4378f5(_0x1a7abf,_0xbc0d31))||_0x2492ac;}return _0x57879>0x3&&_0x2492ac&&Object[_0x264f07(0x92)](_0x1a7abf,_0xbc0d31,_0x2492ac),_0x2492ac;},__metadata=this&&this[_0x326d83(0xd9)]||function(_0x437303,_0x4302cb){const _0xff5505=_0x326d83;if(typeof Reflect===_0xff5505(0xe9)&&typeof Reflect[_0xff5505(0x9b)]==='function')return Reflect[_0xff5505(0x9b)](_0x437303,_0x4302cb);},__param=this&&this[_0x326d83(0xbd)]||function(_0x5254d0,_0x15e217){return function(_0x202289,_0x5194ba){_0x15e217(_0x202289,_0x5194ba,_0x5254d0);};};function _0x11dc(_0x567ee5,_0x15538f){const _0xf6e78f=_0xf6e7();return _0x11dc=function(_0x11dc32,_0x465ebc){_0x11dc32=_0x11dc32-0x7c;let _0x33afd1=_0xf6e78f[_0x11dc32];return _0x33afd1;},_0x11dc(_0x567ee5,_0x15538f);}Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports[_0x326d83(0xd6)]=void 0x0;const common_1=require(_0x326d83(0xcd)),typeorm_1=require(_0x326d83(0xed)),chatLog_entity_1=require(_0x326d83(0x89)),typeorm_2=require(_0x326d83(0xa6)),balance_constant_1=require('../../common/constants/balance.constant'),user_entity_1=require(_0x326d83(0x99)),utils_1=require(_0x326d83(0xf0)),exceljs_1=require(_0x326d83(0xbf)),chatGroup_entity_1=require(_0x326d83(0xea));let ChatLogService=class ChatLogService{constructor(_0x397523,_0xada90,_0x2ba435){const _0x30d7d1=_0x326d83;this[_0x30d7d1(0x8d)]=_0x397523,this[_0x30d7d1(0xcc)]=_0xada90,this[_0x30d7d1(0xc5)]=_0x2ba435;}async[_0x326d83(0xb8)](_0x3d0164){const _0x2934dc=_0x326d83;return await this[_0x2934dc(0x8d)]['save'](_0x3d0164);}async[_0x326d83(0x9e)](_0x49bc31,_0x262b30){const _0x3dd309=_0x326d83,{id:_0x1a7881}=_0x49bc31['user'],{model:_0x4d10bb}=_0x262b30,_0x5df04c={'userId':_0x1a7881,'type':balance_constant_1[_0x3dd309(0xa8)][_0x3dd309(0xaa)]};_0x4d10bb&&(_0x5df04c[_0x3dd309(0xb5)]=_0x4d10bb,_0x4d10bb===_0x3dd309(0xd3)&&(_0x5df04c[_0x3dd309(0xb5)]=(0x0,typeorm_2['In'])(['DALL-E2',_0x3dd309(0xde)])));const _0xe5ffe5=await this[_0x3dd309(0x8d)][_0x3dd309(0xdf)]({'where':_0x5df04c,'order':{'id':_0x3dd309(0xef)},'select':['id',_0x3dd309(0xa1),'prompt',_0x3dd309(0x7f),_0x3dd309(0x7d),'model','extend',_0x3dd309(0xe1),_0x3dd309(0x97)]});return _0xe5ffe5[_0x3dd309(0x7c)](_0x3e4187=>{const _0xcbcde6=_0x3dd309;if(_0x3e4187['type']===_0xcbcde6(0xd8)){const _0x28c58a=_0x3e4187[_0xcbcde6(0xb5)]==='mj'?0x136:0xa0,_0x482083=_0x3e4187[_0xcbcde6(0xa1)][_0xcbcde6(0x9f)](_0xcbcde6(0xc4))?_0xcbcde6(0xd1):_0xcbcde6(0xab),_0x4627b9=_0x482083===_0xcbcde6(0xd1)?_0xcbcde6(0xd0)+_0x28c58a+_0xcbcde6(0x86):_0xcbcde6(0x87)+_0x28c58a;_0x3e4187['thumbImg']=_0x3e4187[_0xcbcde6(0xa1)]+_0x4627b9;try{_0x3e4187[_0xcbcde6(0x97)]=_0x3e4187['fileInfo']?JSON[_0xcbcde6(0xe2)](_0x3e4187[_0xcbcde6(0x97)]):null;}catch(_0x2c3d3b){_0x3e4187[_0xcbcde6(0x97)]={};}}}),_0xe5ffe5;}async[_0x326d83(0x9c)](_0x46cd35){const _0x5011f7=_0x326d83,{page:page=0x1,size:size=0x14,rec:_0xb3036f,userId:_0x48434b,model:_0x2f3255}=_0x46cd35,_0x149eb2={'type':balance_constant_1[_0x5011f7(0xa8)][_0x5011f7(0xaa)],'prompt':(0x0,typeorm_2[_0x5011f7(0xc0)])(''),'answer':(0x0,typeorm_2[_0x5011f7(0xc0)])('')};_0xb3036f&&Object['assign'](_0x149eb2,{'rec':_0xb3036f}),_0x48434b&&Object[_0x5011f7(0x90)](_0x149eb2,{'userId':_0x48434b});_0x2f3255&&(_0x149eb2[_0x5011f7(0xb5)]=_0x2f3255,_0x2f3255===_0x5011f7(0xd3)&&(_0x149eb2[_0x5011f7(0xb5)]=(0x0,typeorm_2['In'])([_0x5011f7(0xd3),'dall-e-3'])));const [_0x52a95e,_0x21dcbf]=await this[_0x5011f7(0x8d)][_0x5011f7(0xca)]({'order':{'id':_0x5011f7(0xef)},'skip':(page-0x1)*size,'take':size,'where':_0x149eb2});return _0x52a95e[_0x5011f7(0x7c)](_0x983f65=>{const _0x299b5a=_0x5011f7;var _0x1d48ce;if(_0x983f65[_0x299b5a(0xe1)]===_0x299b5a(0xd8)){const _0x2a793d=_0x983f65[_0x299b5a(0xb5)]==='mj'?0x136:0xa0,_0x149ce7=_0x983f65[_0x299b5a(0xa1)][_0x299b5a(0x9f)](_0x299b5a(0xc4))?_0x299b5a(0xd1):_0x299b5a(0xab),_0x441dbe=_0x149ce7===_0x299b5a(0xd1)?_0x299b5a(0xd0)+_0x2a793d+_0x299b5a(0x86):_0x299b5a(0x87)+_0x2a793d;_0x983f65[_0x299b5a(0x8b)]=_0x983f65[_0x299b5a(0xa1)]+_0x441dbe;try{const _0x2979e7=_0x983f65[_0x299b5a(0xa2)]?JSON[_0x299b5a(0xe2)](_0x983f65[_0x299b5a(0xa2)]):null;_0x2979e7&&(_0x2979e7?_0x983f65[_0x299b5a(0xbb)]=((_0x1d48ce=_0x2979e7===null||_0x2979e7===void 0x0?void 0x0:_0x2979e7['components'][0x0])===null||_0x1d48ce===void 0x0?void 0x0:_0x1d48ce[_0x299b5a(0x88)][_0x299b5a(0x85)])===0x5:_0x983f65[_0x299b5a(0xbb)]=![]);}catch(_0x297435){console[_0x299b5a(0x8e)](_0x299b5a(0x82),_0x297435);}}}),{'rows':_0x52a95e,'count':_0x21dcbf};}async[_0x326d83(0xb4)](_0x2ed387){const _0x1bf9d2=_0x326d83,{id:_0x417139}=_0x2ed387,_0x471a66=await this[_0x1bf9d2(0x8d)][_0x1bf9d2(0xa9)]({'where':{'id':_0x417139,'type':balance_constant_1[_0x1bf9d2(0xa8)][_0x1bf9d2(0xaa)]}});if(!_0x471a66)throw new common_1['HttpException']('你推荐的图片不存在、请检查！',common_1[_0x1bf9d2(0x8c)][_0x1bf9d2(0xe7)]);const _0x54224a=_0x471a66['rec']===0x1?0x0:0x1,_0x3cce40=await this['chatLogEntity'][_0x1bf9d2(0xaf)]({'id':_0x417139},{'rec':_0x54224a});if(_0x3cce40[_0x1bf9d2(0xe0)]>0x0)return(_0x54224a?'推荐':_0x1bf9d2(0x96))+_0x1bf9d2(0xae);throw new common_1[(_0x1bf9d2(0x94))](_0x1bf9d2(0xc7),common_1[_0x1bf9d2(0x8c)][_0x1bf9d2(0xe7)]);}async[_0x326d83(0xac)](_0x324bc0,_0x2ef52a){const _0x55b641=_0x326d83,_0xb0d4eb={'type':balance_constant_1[_0x55b641(0xa8)][_0x55b641(0xb6)]},{page:page=0x1,size:size=0x1e,prompt:_0x584c15,email:_0x31349d}=_0x324bc0;_0x584c15&&Object[_0x55b641(0x90)](_0xb0d4eb,{'prompt':(0x0,typeorm_2['Like'])('%'+_0x584c15+'%')});if(_0x31349d){const _0x2b9a3d=await this['userEntity'][_0x55b641(0xa9)]({'where':{'email':_0x31349d}});(_0x2b9a3d===null||_0x2b9a3d===void 0x0?void 0x0:_0x2b9a3d['id'])&&Object[_0x55b641(0x90)](_0xb0d4eb,{'userId':_0x2b9a3d['id']});}const [_0x588c6a,_0x66c4cf]=await this[_0x55b641(0x8d)][_0x55b641(0xca)]({'order':{'id':_0x55b641(0xef)},'skip':(page-0x1)*size,'take':size,'where':_0xb0d4eb}),_0x10a06c=_0x588c6a[_0x55b641(0xc6)](_0x33536d=>_0x33536d['userId']),_0x2a0ab1=await this[_0x55b641(0xcc)]['find']({'where':{'id':(0x0,typeorm_2['In'])(_0x10a06c)}}),_0x3a7cdc=_0x588c6a['map'](_0x63fc7=>{const _0x43a3b9=_0x55b641,_0x568406=_0x2a0ab1[_0x43a3b9(0xdf)](_0x217642=>_0x217642['id']===_0x63fc7['userId']);return{'username':_0x568406?_0x568406['username']:'','email':_0x568406?_0x568406[_0x43a3b9(0xee)]:'','prompt':_0x63fc7['prompt'],'answer':_0x63fc7[_0x43a3b9(0xa1)],'createdAt':(0x0,utils_1[_0x43a3b9(0x83)])(_0x63fc7[_0x43a3b9(0x93)])};}),_0x588c49=new exceljs_1[(_0x55b641(0x7e))][(_0x55b641(0xd4))](),_0x246601=_0x588c49['addWorksheet'](_0x55b641(0xa0));_0x246601[_0x55b641(0xbc)]=[{'header':_0x55b641(0xe6),'key':_0x55b641(0xe4),'width':0x14},{'header':_0x55b641(0xeb),'key':_0x55b641(0xee),'width':0x14},{'header':'提问时间','key':_0x55b641(0x93),'width':0x14},{'header':_0x55b641(0xa7),'key':_0x55b641(0xba),'width':0x50},{'header':_0x55b641(0xd5),'key':_0x55b641(0xa1),'width':0x96}],_0x3a7cdc['forEach'](_0x37753b=>_0x246601[_0x55b641(0xa5)](_0x37753b)),_0x2ef52a[_0x55b641(0xc2)]('Content-Type',_0x55b641(0xad)),_0x2ef52a[_0x55b641(0xc2)](_0x55b641(0x8a),_0x55b641(0x95)+_0x55b641(0xb2)),await _0x588c49[_0x55b641(0x81)][_0x55b641(0xb7)](_0x2ef52a),_0x2ef52a[_0x55b641(0xce)]();}async['querAllChatLog'](_0x5077a8,_0x2434e8){const _0x48a4ea=_0x326d83,{page:page=0x1,size:size=0x14,userId:_0x353b06,prompt:_0x25963b}=_0x5077a8,_0x481b55={'type':balance_constant_1['DeductionKey'][_0x48a4ea(0xb6)],'prompt':(0x0,typeorm_2[_0x48a4ea(0xc0)])('')};_0x353b06&&Object[_0x48a4ea(0x90)](_0x481b55,{'userId':_0x353b06}),_0x25963b&&Object[_0x48a4ea(0x90)](_0x481b55,{'prompt':(0x0,typeorm_2[_0x48a4ea(0xd2)])('%'+_0x25963b+'%')});const [_0x18e332,_0x5efac8]=await this[_0x48a4ea(0x8d)][_0x48a4ea(0xca)]({'order':{'id':_0x48a4ea(0xef)},'skip':(page-0x1)*size,'take':size,'where':_0x481b55}),_0x13004b=_0x18e332['map'](_0x1a72e9=>_0x1a72e9['userId']),_0x1eae48=await this[_0x48a4ea(0xcc)][_0x48a4ea(0xdf)]({'where':{'id':(0x0,typeorm_2['In'])(_0x13004b)},'select':['id',_0x48a4ea(0xe4),_0x48a4ea(0xee)]});return _0x18e332[_0x48a4ea(0x7c)](_0x3fe0fc=>{const _0x2923ea=_0x48a4ea,{username:_0x377daf,email:_0xca0fcb}=_0x1eae48[_0x2923ea(0xdf)](_0x2cb88b=>_0x2cb88b['id']===_0x3fe0fc[_0x2923ea(0xdc)])||{};_0x3fe0fc[_0x2923ea(0xe4)]=_0x377daf,_0x3fe0fc[_0x2923ea(0xee)]=_0xca0fcb;}),_0x2434e8['user']['role']!=='super'&&_0x18e332[_0x48a4ea(0x7c)](_0x799a9f=>_0x799a9f[_0x48a4ea(0xee)]=(0x0,utils_1[_0x48a4ea(0xcb)])(_0x799a9f[_0x48a4ea(0xee)])),_0x18e332[_0x48a4ea(0x7c)](_0x7112fe=>{const _0x4a2437=_0x48a4ea;!_0x7112fe[_0x4a2437(0xee)]&&(_0x7112fe['email']=(_0x7112fe===null||_0x7112fe===void 0x0?void 0x0:_0x7112fe[_0x4a2437(0xdc)])+_0x4a2437(0xb1)),!_0x7112fe['username']&&(_0x7112fe[_0x4a2437(0xe4)]='游客'+(_0x7112fe===null||_0x7112fe===void 0x0?void 0x0:_0x7112fe['userId']));}),{'rows':_0x18e332,'count':_0x5efac8};}async[_0x326d83(0xdd)](_0x438912,_0x160699){const _0x7b62ed=_0x326d83,{id:_0x684d97}=_0x438912[_0x7b62ed(0xb9)],{groupId:_0x5b8de3}=_0x160699,_0x1a2a45={'userId':_0x684d97,'isDelete':![]};_0x5b8de3&&Object[_0x7b62ed(0x90)](_0x1a2a45,{'groupId':_0x5b8de3});if(_0x5b8de3){const _0x2493bd=await this[_0x7b62ed(0xc5)]['count']({'where':{'isDelete':![]}});if(_0x2493bd===0x0)return[];}const _0x3ed078=await this['chatLogEntity']['find']({'where':_0x1a2a45});return _0x3ed078[_0x7b62ed(0xc6)](_0x48d373=>{const _0x1d4674=_0x7b62ed,{prompt:_0x407e39,role:_0xed6ed6,answer:_0x22d283,createdAt:_0x1cbac5,model:_0x170a94,conversationOptions:_0x176302,requestOptions:_0x20b99d,id:_0x23ca6a,imageUrl:_0x59ad25}=_0x48d373;let _0x44163c=null,_0x5547fa=null;try{_0x44163c=JSON[_0x1d4674(0xe2)](_0x176302),_0x5547fa=JSON['parse'](_0x20b99d);}catch(_0x45a066){}return{'chatId':_0x23ca6a,'dateTime':(0x0,utils_1[_0x1d4674(0x83)])(_0x1cbac5),'text':_0xed6ed6===_0x1d4674(0xb9)?_0x407e39:_0x22d283,'inversion':_0xed6ed6==='user','error':![],'conversationOptions':_0x44163c,'requestOptions':_0x5547fa,'imageUrl':_0x59ad25,'model':_0x170a94};});}async[_0x326d83(0xcf)](_0x31e663,_0x508bad){const _0x322f42=_0x326d83,{id:_0x13447b}=_0x31e663['user'],{id:_0x4405e3}=_0x508bad,_0x221294=await this[_0x322f42(0x8d)][_0x322f42(0xa9)]({'where':{'id':_0x4405e3,'userId':_0x13447b}});if(!_0x221294)throw new common_1['HttpException'](_0x322f42(0xa3),common_1[_0x322f42(0x8c)][_0x322f42(0xe7)]);const _0x2e6e02=await this[_0x322f42(0x8d)][_0x322f42(0xaf)]({'id':_0x4405e3},{'isDelete':!![]});if(_0x2e6e02[_0x322f42(0xe0)]>0x0)return _0x322f42(0xc8);else throw new common_1[(_0x322f42(0x94))](_0x322f42(0xa3),common_1[_0x322f42(0x8c)][_0x322f42(0xe7)]);}async['delByGroupId'](_0x1c4294,_0x2f787e){const _0x424313=_0x326d83,{groupId:_0x148e93}=_0x2f787e,{id:_0x1ca510}=_0x1c4294[_0x424313(0xb9)],_0x30894f=await this[_0x424313(0xc5)][_0x424313(0xa9)]({'where':{'id':_0x148e93,'userId':_0x1ca510}});if(!_0x30894f)throw new common_1[(_0x424313(0x94))](_0x424313(0xa3),common_1[_0x424313(0x8c)]['BAD_REQUEST']);const _0x4231a6=await this['chatLogEntity'][_0x424313(0xaf)]({'groupId':_0x148e93},{'isDelete':!![]});if(_0x4231a6['affected']>0x0)return _0x424313(0xc8);if(_0x4231a6[_0x424313(0xe0)]===0x0)throw new common_1['HttpException'](_0x424313(0x84),common_1[_0x424313(0x8c)][_0x424313(0xe7)]);}async['byAppId'](_0x5845be,_0xb8afea){const _0x3a9ef5=_0x326d83,{id:_0xe0cb19}=_0x5845be['user'],{appId:_0x2cbd12,page:page=0x1,size:size=0xa}=_0xb8afea,[_0x10b94b,_0x5443e7]=await this['chatLogEntity'][_0x3a9ef5(0xca)]({'where':{'userId':_0xe0cb19,'appId':_0x2cbd12,'role':_0x3a9ef5(0xda)},'order':{'id':_0x3a9ef5(0xef)},'take':size,'skip':(page-0x1)*size});return{'rows':_0x10b94b,'count':_0x5443e7};}};ChatLogService=__decorate([(0x0,common_1[_0x326d83(0x9d)])(),__param(0x0,(0x0,typeorm_1[_0x326d83(0xe5)])(chatLog_entity_1['ChatLogEntity'])),__param(0x1,(0x0,typeorm_1[_0x326d83(0xe5)])(user_entity_1[_0x326d83(0xbe)])),__param(0x2,(0x0,typeorm_1[_0x326d83(0xe5)])(chatGroup_entity_1[_0x326d83(0xdb)])),__metadata(_0x326d83(0xec),[typeorm_2['Repository'],typeorm_2['Repository'],typeorm_2[_0x326d83(0x9a)]])],ChatLogService),exports['ChatLogService']=ChatLogService;