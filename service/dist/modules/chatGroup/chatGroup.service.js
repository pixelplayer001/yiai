'use strict';function _0x1a9c(_0x271ed2,_0x4f1669){const _0x23ef48=_0x23ef();return _0x1a9c=function(_0x1a9c2f,_0x11d8c7){_0x1a9c2f=_0x1a9c2f-0x134;let _0x3cc9d6=_0x23ef48[_0x1a9c2f];return _0x3cc9d6;},_0x1a9c(_0x271ed2,_0x4f1669);}const _0x4eaf34=_0x1a9c;function _0x23ef(){const _0x1dc163=['object','ChatGroupService','filter','__decorate','appEntity','assign','create','删除失败！','findOne','appId','非法操作、您在使用一个未启用的应用！','map','308UQehPA','Repository','管理员未配置任何AI模型、请先联系管理员开通聊天模型配置！','getBaseConfig','222380cnFOhX','getGroupInfoFromId','2206442LJVsYb','affected','count','log','getOwnPropertyDescriptor','InjectRepository','stringify','delAll','BAD_REQUEST','find','@nestjs/typeorm','20704LzRwvR','../models/models.service','删除成功','__esModule','function','@nestjs/common','appLogo','save','请先选择一个对话或者新加一个对话再操作！','config','keyType','design:paramtypes','query','includes','coverImg','length','chatGroupEntity','Injectable','modelsService','defineProperty','更新对话失败！','metadata','243UUtzOR','HttpStatus','typeorm','del','DESC','177746HororJ','35ljeIMw','update','isSticky','645124XsobMX','title','1431JwUsUB','ChatGroupEntity','220350HGIRgp','2428rwhfIR','非法操作、您在使用一个不存在的应用！','HttpException','decorate','user'];_0x23ef=function(){return _0x1dc163;};return _0x23ef();}(function(_0x2ec1db,_0xbfb3af){const _0x2776e0=_0x1a9c,_0x4cd66d=_0x2ec1db();while(!![]){try{const _0x4c254d=parseInt(_0x2776e0(0x175))/0x1+parseInt(_0x2776e0(0x179))/0x2+parseInt(_0x2776e0(0x135))/0x3*(-parseInt(_0x2776e0(0x138))/0x4)+-parseInt(_0x2776e0(0x176))/0x5*(parseInt(_0x2776e0(0x137))/0x6)+-parseInt(_0x2776e0(0x14f))/0x7+-parseInt(_0x2776e0(0x15a))/0x8*(parseInt(_0x2776e0(0x170))/0x9)+-parseInt(_0x2776e0(0x14d))/0xa*(-parseInt(_0x2776e0(0x149))/0xb);if(_0x4c254d===_0xbfb3af)break;else _0x4cd66d['push'](_0x4cd66d['shift']());}catch(_0x2e0309){_0x4cd66d['push'](_0x4cd66d['shift']());}}}(_0x23ef,0x2eb2c));var __decorate=this&&this[_0x4eaf34(0x140)]||function(_0x577d1e,_0x5673e7,_0x37b826,_0x3873fa){const _0x1347a2=_0x4eaf34;var _0xb22b00=arguments['length'],_0x56af6e=_0xb22b00<0x3?_0x5673e7:_0x3873fa===null?_0x3873fa=Object[_0x1347a2(0x153)](_0x5673e7,_0x37b826):_0x3873fa,_0x17a1f5;if(typeof Reflect==='object'&&typeof Reflect['decorate']===_0x1347a2(0x15e))_0x56af6e=Reflect[_0x1347a2(0x13b)](_0x577d1e,_0x5673e7,_0x37b826,_0x3873fa);else{for(var _0xbc578c=_0x577d1e[_0x1347a2(0x169)]-0x1;_0xbc578c>=0x0;_0xbc578c--)if(_0x17a1f5=_0x577d1e[_0xbc578c])_0x56af6e=(_0xb22b00<0x3?_0x17a1f5(_0x56af6e):_0xb22b00>0x3?_0x17a1f5(_0x5673e7,_0x37b826,_0x56af6e):_0x17a1f5(_0x5673e7,_0x37b826))||_0x56af6e;}return _0xb22b00>0x3&&_0x56af6e&&Object['defineProperty'](_0x5673e7,_0x37b826,_0x56af6e),_0x56af6e;},__metadata=this&&this['__metadata']||function(_0x9f3bb7,_0x251082){const _0xaaed92=_0x4eaf34;if(typeof Reflect===_0xaaed92(0x13d)&&typeof Reflect[_0xaaed92(0x16f)]===_0xaaed92(0x15e))return Reflect['metadata'](_0x9f3bb7,_0x251082);},__param=this&&this['__param']||function(_0x20cc6f,_0x14d901){return function(_0x422f25,_0x4fe059){_0x14d901(_0x422f25,_0x4fe059,_0x20cc6f);};};Object[_0x4eaf34(0x16d)](exports,_0x4eaf34(0x15d),{'value':!![]}),exports['ChatGroupService']=void 0x0;const common_1=require(_0x4eaf34(0x15f)),chatGroup_entity_1=require('./chatGroup.entity'),typeorm_1=require(_0x4eaf34(0x159)),typeorm_2=require(_0x4eaf34(0x172)),app_entity_1=require('../app/app.entity'),models_service_1=require(_0x4eaf34(0x15b));let ChatGroupService=class ChatGroupService{constructor(_0x3b22f6,_0x1e3b01,_0x2f8850){const _0x44b5c8=_0x4eaf34;this[_0x44b5c8(0x16a)]=_0x3b22f6,this[_0x44b5c8(0x141)]=_0x1e3b01,this[_0x44b5c8(0x16c)]=_0x2f8850;}async[_0x4eaf34(0x143)](_0x50dbb5,_0x1134a4){const _0x48b069=_0x4eaf34,{id:_0x498132}=_0x1134a4['user'],{appId:_0x404942}=_0x50dbb5,_0x4b00f9={'title':'新对话','userId':_0x498132};if(_0x404942){const _0x2f1dc2=await this[_0x48b069(0x141)][_0x48b069(0x145)]({'where':{'id':_0x404942}});if(!_0x2f1dc2)throw new common_1[(_0x48b069(0x13a))](_0x48b069(0x139),common_1[_0x48b069(0x171)][_0x48b069(0x157)]);else{const {status:_0x49bd59,name:_0x249894}=_0x2f1dc2,_0x1ed629=await this[_0x48b069(0x16a)][_0x48b069(0x151)]({'where':{'userId':_0x498132,'appId':_0x404942,'isDelete':![]}});if(_0x1ed629>0x0)throw new common_1[(_0x48b069(0x13a))]('当前应用已经开启了一个对话无需新建了！',common_1['HttpStatus'][_0x48b069(0x157)]);if(![0x1,0x3,0x4,0x5][_0x48b069(0x167)](_0x49bd59))throw new common_1[(_0x48b069(0x13a))](_0x48b069(0x147),common_1[_0x48b069(0x171)][_0x48b069(0x157)]);_0x249894&&(_0x4b00f9[_0x48b069(0x134)]=_0x249894),_0x404942&&(_0x4b00f9[_0x48b069(0x146)]=_0x404942);}}const _0x50e2ab=await this[_0x48b069(0x16c)][_0x48b069(0x14c)](_0x404942);_0x404942&&(_0x50e2ab[_0x48b069(0x146)]=_0x404942);if(!_0x50e2ab)throw new common_1[(_0x48b069(0x13a))](_0x48b069(0x14b),common_1['HttpStatus']['BAD_REQUEST']);return await this[_0x48b069(0x16a)][_0x48b069(0x161)](Object[_0x48b069(0x142)](Object[_0x48b069(0x142)]({},_0x4b00f9),{'config':JSON[_0x48b069(0x155)](_0x50e2ab)}));}async[_0x4eaf34(0x166)](_0x27027e){const _0x43e877=_0x4eaf34;try{const {id:_0x5c80fb}=_0x27027e[_0x43e877(0x13c)],_0x18dc9b={'userId':_0x5c80fb,'isDelete':![]},_0x2337ff=await this['chatGroupEntity']['find']({'where':_0x18dc9b,'order':{'isSticky':_0x43e877(0x174),'id':_0x43e877(0x174)}}),_0x59c6b1=_0x2337ff[_0x43e877(0x13f)](_0x31deb9=>_0x31deb9[_0x43e877(0x146)])['map'](_0x4a837c=>_0x4a837c[_0x43e877(0x146)]),_0x19c1ea=await this[_0x43e877(0x141)][_0x43e877(0x158)]({'where':{'id':(0x0,typeorm_2['In'])(_0x59c6b1)}});return _0x2337ff[_0x43e877(0x148)](_0x1a0b28=>{const _0x996800=_0x43e877;var _0x3615cb;return _0x1a0b28[_0x996800(0x160)]=(_0x3615cb=_0x19c1ea['find'](_0x995822=>_0x995822['id']===_0x1a0b28[_0x996800(0x146)]))===null||_0x3615cb===void 0x0?void 0x0:_0x3615cb[_0x996800(0x168)],_0x1a0b28;});}catch(_0x123a62){console[_0x43e877(0x152)]('error:\x20',_0x123a62);}}async[_0x4eaf34(0x177)](_0x345285,_0xabcc25){const _0x31a93c=_0x4eaf34,{title:_0x529df4,isSticky:_0x2b7e95,groupId:_0x587da0,config:_0x2a0774}=_0x345285,{id:_0x31a0a9}=_0xabcc25[_0x31a93c(0x13c)],_0x1dc06c=await this[_0x31a93c(0x16a)][_0x31a93c(0x145)]({'where':{'id':_0x587da0,'userId':_0x31a0a9}});if(!_0x1dc06c)throw new common_1[(_0x31a93c(0x13a))](_0x31a93c(0x162),common_1['HttpStatus'][_0x31a93c(0x157)]);const {appId:_0x53d624}=_0x1dc06c;if(_0x53d624&&!_0x529df4)try{const _0x47aa2e=JSON['parse'](_0x2a0774);if(Number(_0x47aa2e[_0x31a93c(0x164)])!==0x1)throw new common_1[(_0x31a93c(0x13a))]('应用对话名称不能修改哟！',common_1[_0x31a93c(0x171)][_0x31a93c(0x157)]);}catch(_0x512a61){}const _0x44657f={};_0x529df4&&(_0x44657f[_0x31a93c(0x134)]=_0x529df4),typeof _0x2b7e95!=='undefined'&&(_0x44657f[_0x31a93c(0x178)]=_0x2b7e95),_0x2a0774&&(_0x44657f[_0x31a93c(0x163)]=_0x2a0774);const _0x2ec87c=await this[_0x31a93c(0x16a)]['update']({'id':_0x587da0},_0x44657f);if(_0x2ec87c['affected'])return!![];else throw new common_1[(_0x31a93c(0x13a))](_0x31a93c(0x16e),common_1[_0x31a93c(0x171)][_0x31a93c(0x157)]);}async[_0x4eaf34(0x173)](_0x250ae1,_0x503ac6){const _0x481692=_0x4eaf34,{groupId:_0x27e92a}=_0x250ae1,{id:_0x50150b}=_0x503ac6[_0x481692(0x13c)],_0x7bac0e=await this[_0x481692(0x16a)]['findOne']({'where':{'id':_0x27e92a,'userId':_0x50150b}});if(!_0x7bac0e)throw new common_1[(_0x481692(0x13a))]('非法操作、您在删除一个非法资源！',common_1[_0x481692(0x171)][_0x481692(0x157)]);const _0x2f2942=await this['chatGroupEntity'][_0x481692(0x177)]({'id':_0x27e92a},{'isDelete':!![]});if(_0x2f2942['affected'])return'删除成功';else throw new common_1[(_0x481692(0x13a))](_0x481692(0x144),common_1[_0x481692(0x171)][_0x481692(0x157)]);}async[_0x4eaf34(0x156)](_0x2d0880){const _0x16080f=_0x4eaf34,{id:_0x1702d1}=_0x2d0880['user'],_0x326cb7=await this['chatGroupEntity'][_0x16080f(0x177)]({'userId':_0x1702d1,'isSticky':![],'isDelete':![]},{'isDelete':!![]});if(_0x326cb7[_0x16080f(0x150)])return _0x16080f(0x15c);else throw new common_1[(_0x16080f(0x13a))]('删除失败！',common_1[_0x16080f(0x171)][_0x16080f(0x157)]);}async[_0x4eaf34(0x14e)](_0x3fc500){const _0x4494cb=_0x4eaf34;if(!_0x3fc500)return;return await this[_0x4494cb(0x16a)][_0x4494cb(0x145)]({'where':{'id':_0x3fc500}});}};ChatGroupService=__decorate([(0x0,common_1[_0x4eaf34(0x16b)])(),__param(0x0,(0x0,typeorm_1[_0x4eaf34(0x154)])(chatGroup_entity_1[_0x4eaf34(0x136)])),__param(0x1,(0x0,typeorm_1[_0x4eaf34(0x154)])(app_entity_1['AppEntity'])),__metadata(_0x4eaf34(0x165),[typeorm_2[_0x4eaf34(0x14a)],typeorm_2[_0x4eaf34(0x14a)],models_service_1['ModelsService']])],ChatGroupService),exports[_0x4eaf34(0x13e)]=ChatGroupService;