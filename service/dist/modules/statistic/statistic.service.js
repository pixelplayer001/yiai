'use strict';const _0x20f47f=_0x1e41;(function(_0x3b569e,_0x1f59d1){const _0x34e200=_0x1e41,_0xc48ca8=_0x3b569e();while(!![]){try{const _0xf4fedb=-parseInt(_0x34e200(0xd9))/0x1+parseInt(_0x34e200(0x96))/0x2*(parseInt(_0x34e200(0x107))/0x3)+-parseInt(_0x34e200(0x10d))/0x4*(-parseInt(_0x34e200(0xd5))/0x5)+parseInt(_0x34e200(0xeb))/0x6*(parseInt(_0x34e200(0x9a))/0x7)+-parseInt(_0x34e200(0xa9))/0x8*(parseInt(_0x34e200(0xb4))/0x9)+parseInt(_0x34e200(0x105))/0xa+-parseInt(_0x34e200(0xbe))/0xb;if(_0xf4fedb===_0x1f59d1)break;else _0xc48ca8['push'](_0xc48ca8['shift']());}catch(_0x17536a){_0xc48ca8['push'](_0xc48ca8['shift']());}}}(_0x2c50,0x92f12));function _0x1e41(_0x205fd0,_0x1d0762){const _0x2c50f7=_0x2c50();return _0x1e41=function(_0x1e41ed,_0x2d5192){_0x1e41ed=_0x1e41ed-0x95;let _0x134125=_0x2c50f7[_0x1e41ed];return _0x134125;},_0x1e41(_0x205fd0,_0x1d0762);}var __decorate=this&&this[_0x20f47f(0xe2)]||function(_0x7b5d7f,_0x205a58,_0x459ba3,_0x38868f){const _0x21f6da=_0x20f47f;var _0x127772=arguments[_0x21f6da(0xba)],_0x253956=_0x127772<0x3?_0x205a58:_0x38868f===null?_0x38868f=Object[_0x21f6da(0xbb)](_0x205a58,_0x459ba3):_0x38868f,_0x2b2783;if(typeof Reflect===_0x21f6da(0xee)&&typeof Reflect[_0x21f6da(0xec)]===_0x21f6da(0xfa))_0x253956=Reflect[_0x21f6da(0xec)](_0x7b5d7f,_0x205a58,_0x459ba3,_0x38868f);else{for(var _0x41a1ef=_0x7b5d7f[_0x21f6da(0xba)]-0x1;_0x41a1ef>=0x0;_0x41a1ef--)if(_0x2b2783=_0x7b5d7f[_0x41a1ef])_0x253956=(_0x127772<0x3?_0x2b2783(_0x253956):_0x127772>0x3?_0x2b2783(_0x205a58,_0x459ba3,_0x253956):_0x2b2783(_0x205a58,_0x459ba3))||_0x253956;}return _0x127772>0x3&&_0x253956&&Object[_0x21f6da(0x9e)](_0x205a58,_0x459ba3,_0x253956),_0x253956;},__metadata=this&&this[_0x20f47f(0xd2)]||function(_0x34c995,_0x4db586){const _0x4c8cd4=_0x20f47f;if(typeof Reflect===_0x4c8cd4(0xee)&&typeof Reflect['metadata']==='function')return Reflect[_0x4c8cd4(0x104)](_0x34c995,_0x4db586);},__param=this&&this['__param']||function(_0x315e72,_0x35f931){return function(_0x399dde,_0x1d5cb2){_0x35f931(_0x399dde,_0x1d5cb2,_0x315e72);};};Object[_0x20f47f(0x9e)](exports,'__esModule',{'value':!![]}),exports['StatisticService']=void 0x0;const common_1=require(_0x20f47f(0xa0)),typeorm_1=require(_0x20f47f(0xcf)),user_entity_1=require(_0x20f47f(0xf7)),typeorm_2=require(_0x20f47f(0x10c)),chatLog_entity_1=require(_0x20f47f(0xfe)),balance_constant_1=require(_0x20f47f(0xbd)),date_1=require('../../common/utils/date'),axios_1=require(_0x20f47f(0xe7)),config_entity_1=require(_0x20f47f(0x101)),order_entity_1=require(_0x20f47f(0xac)),midjourney_entity_1=require(_0x20f47f(0xc5)),midjourney_constant_1=require(_0x20f47f(0xb7));let StatisticService=class StatisticService{constructor(_0x54015f,_0x44ccce,_0x467bc5,_0x513425,_0x252446){const _0x17dbaa=_0x20f47f;this['userEntity']=_0x54015f,this[_0x17dbaa(0xc2)]=_0x44ccce,this[_0x17dbaa(0xdc)]=_0x467bc5,this['orderEntity']=_0x513425,this[_0x17dbaa(0xf8)]=_0x252446;}async[_0x20f47f(0xd4)](){const _0x15feea=_0x20f47f,_0x159f6d=await this[_0x15feea(0xda)](),_0x27c1ad=await this['countNewUsersToday'](),_0x8984f=await this[_0x15feea(0xb5)](),_0x5ecfbb=await this['countNewChatsToday'](),_0x48e6a9=await this['countDraws'](),_0x2cdaf1=await this[_0x15feea(0xa1)](),_0x2cbe80=await this[_0x15feea(0xfb)](),_0x38d0ca=await this[_0x15feea(0xdd)](),_0x5f18a0=await this[_0x15feea(0xfc)]();return{'userCount':_0x159f6d,'newUserCount':_0x27c1ad,'chatCount':_0x8984f,'newChatCount':_0x5ecfbb,'drawCount':_0x48e6a9,'newDrawCount':_0x2cbe80+_0x2cdaf1,'orderCount':_0x38d0ca,'newOrderCount':_0x5f18a0};}async[_0x20f47f(0xf4)]({days:days=0x7}){const _0x3a491b=_0x20f47f,_0x132cfc=await this[_0x3a491b(0xc1)](days),_0xb04656=await this[_0x3a491b(0xf3)](days),_0x1d5a81=await this[_0x3a491b(0x100)](days);return{'date':_0x132cfc['map'](_0xc07b43=>_0xc07b43[_0x3a491b(0xc3)]),'chat':_0x132cfc['map'](_0x198def=>_0x198def[_0x3a491b(0xaf)]),'draw':_0xb04656[_0x3a491b(0xc6)]((_0x52018d,_0x4933c5)=>{const _0x529786=_0x3a491b;return _0x52018d[_0x529786(0xaf)]+_0x1d5a81[_0x4933c5][_0x529786(0xaf)];})};}async[_0x20f47f(0xb1)]({days:days=0x7}){const _0x350ed4=_0x20f47f,_0xd61dd9=await this[_0x350ed4(0xcd)](days);return _0xd61dd9;}async[_0x20f47f(0xda)](){const _0x188270=_0x20f47f,_0x2d1de3=await this[_0x188270(0xf5)][_0x188270(0x95)]();return _0x2d1de3;}async[_0x20f47f(0xd7)](){const _0x2f7ddf=_0x20f47f,_0x4d350c=new Date();_0x4d350c['setHours'](0x0,0x0,0x0,0x0);const _0x5d9918=new Date(_0x4d350c[_0x2f7ddf(0x97)]()+0x18*0x3c*0x3c*0x3e8),_0x5391b2=this[_0x2f7ddf(0xf5)][_0x2f7ddf(0xea)](_0x2f7ddf(0xb0)),_0x438214=await _0x5391b2[_0x2f7ddf(0x108)]('user.createdAt\x20>=\x20:today',{'today':_0x4d350c})[_0x2f7ddf(0xdb)](_0x2f7ddf(0xd0),{'tomorrow':_0x5d9918})[_0x2f7ddf(0xcc)]();return _0x438214;}async[_0x20f47f(0xb5)](){const _0x587bef=_0x20f47f,_0x11ed81=await this[_0x587bef(0xc2)]['count']({'where':{'type':balance_constant_1['DeductionKey'][_0x587bef(0xf0)]}});return _0x11ed81;}async[_0x20f47f(0xe4)](){const _0x39a6d9=_0x20f47f,_0x5a2f36=new Date();_0x5a2f36[_0x39a6d9(0xe9)](0x0,0x0,0x0,0x0);const _0x1b1e2e=new Date(_0x5a2f36['getTime']()+0x18*0x3c*0x3c*0x3e8),_0x535bae=this[_0x39a6d9(0xc2)][_0x39a6d9(0xea)]('chatLog'),_0x4c7a0a=await _0x535bae['where'](_0x39a6d9(0xae),{'type':balance_constant_1['DeductionKey'][_0x39a6d9(0xf0)]})['andWhere'](_0x39a6d9(0x9f),{'today':_0x5a2f36})[_0x39a6d9(0xdb)]('chatLog.createdAt\x20<\x20:tomorrow',{'tomorrow':_0x1b1e2e})[_0x39a6d9(0xcc)]();return _0x4c7a0a;}async[_0x20f47f(0xb8)](){const _0x5953c6=_0x20f47f,_0x1c32ab=await this[_0x5953c6(0xc2)]['count']({'where':{'type':balance_constant_1[_0x5953c6(0xd8)]['PAINT_TYPE']}});return _0x1c32ab;}async[_0x20f47f(0xa1)](){const _0x47000c=_0x20f47f,_0x1254c5=new Date();_0x1254c5[_0x47000c(0xe9)](0x0,0x0,0x0,0x0);const _0x2be697=new Date(_0x1254c5[_0x47000c(0x97)]()+0x18*0x3c*0x3c*0x3e8),_0xf34ef0=this[_0x47000c(0xc2)]['createQueryBuilder'](_0x47000c(0x98)),_0x52b3a9=await _0xf34ef0[_0x47000c(0x108)](_0x47000c(0xae),{'type':balance_constant_1[_0x47000c(0xd8)][_0x47000c(0xa6)]})['andWhere'](_0x47000c(0x9f),{'today':_0x1254c5})[_0x47000c(0xdb)](_0x47000c(0xef),{'tomorrow':_0x2be697})[_0x47000c(0xcc)]();return _0x52b3a9;}async[_0x20f47f(0xfb)](){const _0x24aa67=_0x20f47f,_0x26303e=new Date();_0x26303e['setHours'](0x0,0x0,0x0,0x0);const _0x1beefa=new Date(_0x26303e[_0x24aa67(0x97)]()+0x18*0x3c*0x3c*0x3e8),_0x2cb4d4=this[_0x24aa67(0xf8)][_0x24aa67(0xea)]('midjourney'),_0x3ffb83=await _0x2cb4d4[_0x24aa67(0x108)](_0x24aa67(0xd3),{'today':_0x26303e})['andWhere'](_0x24aa67(0x99),{'tomorrow':_0x1beefa})[_0x24aa67(0xcc)]();return _0x3ffb83;}async[_0x20f47f(0xc1)](_0x5b992e){const _0x388ffd=_0x20f47f;var _0x5996f2,_0x29f8dd;const _0x3dabe9=new Date();_0x3dabe9['setHours'](0x0,0x0,0x0,0x0);const _0xf2d75d=new Date(_0x3dabe9['getTime']()-(_0x5b992e-0x1)*0x18*0x3c*0x3c*0x3e8),_0x34040a=this[_0x388ffd(0xc2)][_0x388ffd(0xea)]('chatlog'),_0x552b89=await _0x34040a['select'](_0x388ffd(0xc8))['where'](_0x388ffd(0xe3),{'type':balance_constant_1[_0x388ffd(0xd8)][_0x388ffd(0xf0)]})[_0x388ffd(0xdb)]('chatlog.createdAt\x20>=\x20:startDate',{'startDate':_0xf2d75d})[_0x388ffd(0xde)](_0x388ffd(0xc3))[_0x388ffd(0xe5)](_0x388ffd(0xc3))['getRawMany'](),_0x5121e0=[],_0x3642d3=_0xf2d75d;for(let _0x61ef90=0x0;_0x61ef90<_0x5b992e;_0x61ef90++){const _0x18ac61=(0x0,date_1[_0x388ffd(0xe8)])(new Date(_0x3642d3),_0x388ffd(0xff)),_0x6524cf=(_0x29f8dd=(_0x5996f2=_0x552b89[_0x388ffd(0xb2)](_0x267873=>(0x0,date_1[_0x388ffd(0xe8)])(new Date(_0x267873[_0x388ffd(0xc3)]),_0x388ffd(0xff))===_0x18ac61))===null||_0x5996f2===void 0x0?void 0x0:_0x5996f2[_0x388ffd(0x95)])!==null&&_0x29f8dd!==void 0x0?_0x29f8dd:0x0;_0x6524cf>0x0?_0x5121e0['push']({'date':_0x18ac61,'value':Number(_0x6524cf)}):_0x5121e0[_0x388ffd(0x10b)]({'date':_0x18ac61,'value':0x0}),_0x3642d3[_0x388ffd(0xf1)](_0x3642d3['getDate']()+0x1);}return _0x5121e0;}async[_0x20f47f(0xf3)](_0x267801){const _0x224543=_0x20f47f;var _0x3ace28,_0x4e32cf;const _0x272033=new Date();_0x272033[_0x224543(0xe9)](0x0,0x0,0x0,0x0);const _0x93708e=new Date(_0x272033[_0x224543(0x97)]()-(_0x267801-0x1)*0x18*0x3c*0x3c*0x3e8),_0x3e22bf=this[_0x224543(0xc2)][_0x224543(0xea)](_0x224543(0xab)),_0x387e0c=await _0x3e22bf['select'](_0x224543(0xc8))[_0x224543(0x108)]('chatlog.type\x20=\x20:type',{'type':balance_constant_1['DeductionKey'][_0x224543(0xa6)]})[_0x224543(0xdb)](_0x224543(0xbf),{'startDate':_0x93708e})[_0x224543(0xde)](_0x224543(0xc3))[_0x224543(0xe5)](_0x224543(0xc3))[_0x224543(0xbc)](),_0x442170=[],_0x2016ee=_0x93708e;for(let _0x449410=0x0;_0x449410<_0x267801;_0x449410++){const _0x202a35=(0x0,date_1[_0x224543(0xe8)])(new Date(_0x2016ee),'M.DD'),_0x3ca121=(_0x4e32cf=(_0x3ace28=_0x387e0c[_0x224543(0xb2)](_0x3b5a63=>(0x0,date_1[_0x224543(0xe8)])(new Date(_0x3b5a63[_0x224543(0xc3)]),_0x224543(0xff))===_0x202a35))===null||_0x3ace28===void 0x0?void 0x0:_0x3ace28[_0x224543(0x95)])!==null&&_0x4e32cf!==void 0x0?_0x4e32cf:0x0;_0x3ca121>0x0?_0x442170[_0x224543(0x10b)]({'date':_0x202a35,'value':Number(_0x3ca121)}):_0x442170['push']({'date':_0x202a35,'value':0x0}),_0x2016ee[_0x224543(0xf1)](_0x2016ee[_0x224543(0xa5)]()+0x1);}return _0x442170;}async['countMjDrawsByTimeRange'](_0x48c354){const _0x519d72=_0x20f47f;var _0x45db5c,_0x26b7a5;const _0x75246d=new Date();_0x75246d['setHours'](0x0,0x0,0x0,0x0);const _0x46714d=new Date(_0x75246d[_0x519d72(0x97)]()-(_0x48c354-0x1)*0x18*0x3c*0x3c*0x3e8),_0x590ba8=this[_0x519d72(0xf8)][_0x519d72(0xea)]('midjourney'),_0x5ab5c6=await _0x590ba8[_0x519d72(0xe1)](_0x519d72(0x103))[_0x519d72(0x108)]('midjourney.status\x20=\x20:status',{'status':midjourney_constant_1['MidjourneyStatusEnum'][_0x519d72(0xa4)]})[_0x519d72(0xdb)](_0x519d72(0xa3),{'startDate':_0x46714d})[_0x519d72(0xde)](_0x519d72(0xc3))[_0x519d72(0xe5)](_0x519d72(0xc3))['getRawMany'](),_0x5f3268=[],_0x51cb2b=_0x46714d;for(let _0x449118=0x0;_0x449118<_0x48c354;_0x449118++){const _0xc606e2=(0x0,date_1[_0x519d72(0xe8)])(new Date(_0x51cb2b),_0x519d72(0xff)),_0x324481=(_0x26b7a5=(_0x45db5c=_0x5ab5c6[_0x519d72(0xb2)](_0x1a45e2=>(0x0,date_1[_0x519d72(0xe8)])(new Date(_0x1a45e2[_0x519d72(0xc3)]),_0x519d72(0xff))===_0xc606e2))===null||_0x45db5c===void 0x0?void 0x0:_0x45db5c[_0x519d72(0x95)])!==null&&_0x26b7a5!==void 0x0?_0x26b7a5:0x0;_0x324481>0x0?_0x5f3268['push']({'date':_0xc606e2,'value':Number(_0x324481)}):_0x5f3268[_0x519d72(0x10b)]({'date':_0xc606e2,'value':0x0}),_0x51cb2b[_0x519d72(0xf1)](_0x51cb2b[_0x519d72(0xa5)]()+0x1);}return _0x5f3268;}async['getBaiduStatistics'](_0x649a70){const _0x5e6bc8=_0x20f47f;var _0x194a6b,_0x59f5c8;const _0xeb9a10=(0x0,date_1[_0x5e6bc8(0xe8)])(new Date(),'YYYYMMDD'),_0x7f8606=(0x0,date_1['formatDate'])(new Date(Date[_0x5e6bc8(0x9d)]()-Number(_0x649a70-0x1)*0x18*0x3c*0x3c*0x3e8),_0x5e6bc8(0xf6)),_0x13156e=_0x5e6bc8(0xb6),_0x3429d8=_0x5e6bc8(0xce),_0x4a2d5c=await this['configEntity'][_0x5e6bc8(0xb2)]({'where':{'configKey':(0x0,typeorm_2['In'])(['baiduToken',_0x5e6bc8(0xc0)])}}),_0x324c94=(_0x194a6b=_0x4a2d5c[_0x5e6bc8(0xb2)](_0x75348b=>_0x75348b[_0x5e6bc8(0xd6)]===_0x5e6bc8(0xc0)))===null||_0x194a6b===void 0x0?void 0x0:_0x194a6b[_0x5e6bc8(0xad)],_0x49db97=(_0x59f5c8=_0x4a2d5c[_0x5e6bc8(0xb2)](_0x1ba5e5=>_0x1ba5e5['configKey']===_0x5e6bc8(0xd1)))===null||_0x59f5c8===void 0x0?void 0x0:_0x59f5c8[_0x5e6bc8(0xad)];if(!_0x324c94||!_0x49db97)return[];if(!_0x324c94)throw new common_1[(_0x5e6bc8(0xf9))](_0x5e6bc8(0x106),common_1['HttpStatus'][_0x5e6bc8(0xdf)]);if(!_0x49db97)throw new common_1['HttpException'](_0x5e6bc8(0xc7),common_1['HttpStatus'][_0x5e6bc8(0xdf)]);const _0x43f737='https://openapi.baidu.com/rest/2.0/tongji/report/getData?access_token='+_0x49db97+_0x5e6bc8(0xc4)+_0x324c94+'&method='+_0x3429d8+_0x5e6bc8(0xed)+_0x7f8606+_0x5e6bc8(0x10a)+_0xeb9a10+_0x5e6bc8(0x109)+_0x13156e,_0x5720ee=await axios_1[_0x5e6bc8(0xe0)][_0x5e6bc8(0xa2)](_0x43f737),{error_code:_0x2deff5,message:_0x5cf532}=_0x5720ee[_0x5e6bc8(0xc9)];if(_0x2deff5===0x6f)throw new common_1[(_0x5e6bc8(0xf9))](_0x5cf532||_0x5e6bc8(0xa7),common_1['HttpStatus'][_0x5e6bc8(0xdf)]);if(_0x2deff5&&_0x2deff5!==0xc8)throw new common_1[(_0x5e6bc8(0xf9))](_0x5cf532||_0x5e6bc8(0x102),common_1['HttpStatus'][_0x5e6bc8(0xdf)]);return _0x5720ee[_0x5e6bc8(0xc9)][_0x5e6bc8(0xf2)];}async[_0x20f47f(0xdd)](){const _0x114310=_0x20f47f,_0x51968d=await this[_0x114310(0xcb)][_0x114310(0x95)]();return _0x51968d;}async[_0x20f47f(0xfc)](){const _0x418919=_0x20f47f,_0x252485=new Date();_0x252485[_0x418919(0xe9)](0x0,0x0,0x0,0x0);const _0x1532c0=new Date(_0x252485[_0x418919(0x97)]()+0x18*0x3c*0x3c*0x3e8),_0x2ba70d=this['orderEntity'][_0x418919(0xea)]('order'),_0x26256e=await _0x2ba70d[_0x418919(0x108)](_0x418919(0xa8),{'today':_0x252485})['andWhere']('order.createdAt\x20<\x20:tomorrow',{'tomorrow':_0x1532c0})[_0x418919(0xcc)]();return _0x26256e;}};function _0x2c50(){const _0x3f8b59=['countMjDrawsByTimeRange','../globalConfig/config.entity','获取百度统计数据失败','DATE(midjourney.createdAt)\x20as\x20date,\x20COUNT(*)\x20as\x20count','metadata','1194810fwQepA','请先配置百度统计siteId','6549UGsnMX','where','&metrics=','&end_date=','push','typeorm','32oSHAlO','Injectable','count','478EEUaTI','getTime','chatLog','midjourney.createdAt\x20<\x20:tomorrow','3928316SqejZN','InjectRepository','StatisticService','now','defineProperty','chatLog.createdAt\x20>=\x20:today','@nestjs/common','countNewDrawsToday','get','midjourney.createdAt\x20>=\x20:startDate','DRAWED','getDate','PAINT_TYPE','百度授权码过期','order.createdAt\x20>=\x20:today','8fqDHmu','design:paramtypes','chatlog','../order/order.entity','configVal','chatLog.type\x20=\x20:type','value','user','getBaiduVisit','find','Repository','9114030ShhVCc','countChats','pv_count,visitor_count,ip_count,bounce_ratio,avg_visit_time','../../common/constants/midjourney.constant','countDraws','MidjourneyEntity','length','getOwnPropertyDescriptor','getRawMany','../../common/constants/balance.constant','389290KwNYkH','chatlog.createdAt\x20>=\x20:startDate','baiduSiteId','countChatsByTimeRange','chatLogEntity','date','&site_id=','../midjourney/midjourney.entity','map','请先配置百度统计accessToken','DATE(chatlog.createdAt)\x20as\x20date,\x20COUNT(*)\x20as\x20count','data','UserEntity','orderEntity','getCount','getBaiduStatistics','overview/getTimeTrendRpt','@nestjs/typeorm','user.createdAt\x20<\x20:tomorrow','baiduToken','__metadata','midjourney.createdAt\x20>=\x20:today','getBaseStatistic','32225zLSocB','configKey','countNewUsersToday','DeductionKey','165220bETeqU','countUsers','andWhere','configEntity','countOrders','groupBy','BAD_REQUEST','default','select','__decorate','chatlog.type\x20=\x20:type','countNewChatsToday','orderBy','ConfigEntity','axios','formatDate','setHours','createQueryBuilder','12aectjN','decorate','&start_date=','object','chatLog.createdAt\x20<\x20:tomorrow','CHAT_TYPE','setDate','result','countDrawsByTimeRange','getChatStatistic','userEntity','YYYYMMDD','../user/user.entity','midjourneyEntity','HttpException','function','countNewMidhourneysToday','countNewOrdersToday','ChatLogEntity','../chatLog/chatLog.entity','M.DD'];_0x2c50=function(){return _0x3f8b59;};return _0x2c50();}StatisticService=__decorate([(0x0,common_1[_0x20f47f(0x10e)])(),__param(0x0,(0x0,typeorm_1[_0x20f47f(0x9b)])(user_entity_1[_0x20f47f(0xca)])),__param(0x1,(0x0,typeorm_1['InjectRepository'])(chatLog_entity_1[_0x20f47f(0xfd)])),__param(0x2,(0x0,typeorm_1[_0x20f47f(0x9b)])(config_entity_1[_0x20f47f(0xe6)])),__param(0x3,(0x0,typeorm_1[_0x20f47f(0x9b)])(order_entity_1['OrderEntity'])),__param(0x4,(0x0,typeorm_1[_0x20f47f(0x9b)])(midjourney_entity_1[_0x20f47f(0xb9)])),__metadata(_0x20f47f(0xaa),[typeorm_2[_0x20f47f(0xb3)],typeorm_2[_0x20f47f(0xb3)],typeorm_2[_0x20f47f(0xb3)],typeorm_2[_0x20f47f(0xb3)],typeorm_2[_0x20f47f(0xb3)]])],StatisticService),exports[_0x20f47f(0x9c)]=StatisticService;