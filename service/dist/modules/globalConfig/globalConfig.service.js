'use strict';const _0x208e93=_0x496e;(function(_0x3b4481,_0x78da6a){const _0x1badd4=_0x496e,_0x52195c=_0x3b4481();while(!![]){try{const _0x1d1b26=parseInt(_0x1badd4(0x26b))/0x1*(-parseInt(_0x1badd4(0x2ae))/0x2)+-parseInt(_0x1badd4(0x255))/0x3*(parseInt(_0x1badd4(0x2a0))/0x4)+-parseInt(_0x1badd4(0x296))/0x5*(-parseInt(_0x1badd4(0x1fc))/0x6)+parseInt(_0x1badd4(0x28b))/0x7*(-parseInt(_0x1badd4(0x206))/0x8)+-parseInt(_0x1badd4(0x233))/0x9*(-parseInt(_0x1badd4(0x242))/0xa)+parseInt(_0x1badd4(0x26f))/0xb+-parseInt(_0x1badd4(0x283))/0xc*(-parseInt(_0x1badd4(0x1f6))/0xd);if(_0x1d1b26===_0x78da6a)break;else _0x52195c['push'](_0x52195c['shift']());}catch(_0x3ed8a4){_0x52195c['push'](_0x52195c['shift']());}}}(_0x315f,0x18a63));var __decorate=this&&this['__decorate']||function(_0x3313b6,_0x3528d2,_0x144c67,_0x870b39){const _0x7f4c9e=_0x496e;var _0x2e7a3e=arguments[_0x7f4c9e(0x1f9)],_0x390c46=_0x2e7a3e<0x3?_0x3528d2:_0x870b39===null?_0x870b39=Object[_0x7f4c9e(0x1ef)](_0x3528d2,_0x144c67):_0x870b39,_0x59f0fa;if(typeof Reflect===_0x7f4c9e(0x247)&&typeof Reflect[_0x7f4c9e(0x241)]==='function')_0x390c46=Reflect[_0x7f4c9e(0x241)](_0x3313b6,_0x3528d2,_0x144c67,_0x870b39);else{for(var _0x2564e5=_0x3313b6[_0x7f4c9e(0x1f9)]-0x1;_0x2564e5>=0x0;_0x2564e5--)if(_0x59f0fa=_0x3313b6[_0x2564e5])_0x390c46=(_0x2e7a3e<0x3?_0x59f0fa(_0x390c46):_0x2e7a3e>0x3?_0x59f0fa(_0x3528d2,_0x144c67,_0x390c46):_0x59f0fa(_0x3528d2,_0x144c67))||_0x390c46;}return _0x2e7a3e>0x3&&_0x390c46&&Object['defineProperty'](_0x3528d2,_0x144c67,_0x390c46),_0x390c46;},__metadata=this&&this[_0x208e93(0x29f)]||function(_0x4ff2e6,_0x9d6038){const _0x20ea44=_0x208e93;if(typeof Reflect===_0x20ea44(0x247)&&typeof Reflect[_0x20ea44(0x269)]===_0x20ea44(0x285))return Reflect[_0x20ea44(0x269)](_0x4ff2e6,_0x9d6038);},__param=this&&this['__param']||function(_0x120ae4,_0x193769){return function(_0x414663,_0x27d9db){_0x193769(_0x414663,_0x27d9db,_0x120ae4);};};Object[_0x208e93(0x282)](exports,'__esModule',{'value':!![]}),exports['GlobalConfigService']=void 0x0;const models_service_1=require(_0x208e93(0x202)),chatLog_entity_1=require(_0x208e93(0x271)),common_1=require('@nestjs/common'),config_entity_1=require(_0x208e93(0x2a5)),typeorm_1=require(_0x208e93(0x252)),typeorm_2=require(_0x208e93(0x20e)),utils_1=require(_0x208e93(0x214)),axios_1=require(_0x208e93(0x1fd)),fs=require('fs'),packageJsonContent=fs['readFileSync'](_0x208e93(0x23e),_0x208e93(0x27f)),packageJson=JSON['parse'](packageJsonContent),version=packageJson[_0x208e93(0x22b)];console[_0x208e93(0x26d)](_0x208e93(0x288),version);let GlobalConfigService=class GlobalConfigService{constructor(_0x17f3bf,_0xac7234,_0x2b7dcc){const _0x22740e=_0x208e93;this['configEntity']=_0x17f3bf,this[_0x22740e(0x1f8)]=_0xac7234,this[_0x22740e(0x22a)]=_0x2b7dcc,this[_0x22740e(0x259)]={},this[_0x22740e(0x27a)]=!![];}async[_0x208e93(0x246)](){const _0x2c2563=_0x208e93;await this[_0x2c2563(0x224)]();}async[_0x208e93(0x24f)](_0x5cdeb5){const _0x2c5161=_0x208e93;if(_0x5cdeb5['length']===0x0)return;if(_0x5cdeb5['includes'](_0x2c5161(0x27e))&&_0x5cdeb5['length']===0x1)return this['wechatAccessToken'];if(_0x5cdeb5[_0x2c5161(0x248)](_0x2c5161(0x230))&&_0x5cdeb5['length']===0x1)return this[_0x2c5161(0x230)];if(_0x5cdeb5[_0x2c5161(0x1f9)]===0x1)return this['globalConfigs'][_0x5cdeb5[0x0]];else{const _0xee90b1={};return _0x5cdeb5['forEach'](_0x51b0fe=>_0xee90b1[_0x51b0fe]=this['globalConfigs'][_0x51b0fe]),_0xee90b1;}}async[_0x208e93(0x224)](){const _0x5ca842=_0x208e93,_0x4c55b1=await this['configEntity'][_0x5ca842(0x221)]();this[_0x5ca842(0x259)]=_0x4c55b1[_0x5ca842(0x268)]((_0x4141ad,_0x541bd3)=>{const _0x3eadd2=_0x5ca842;return _0x4141ad[_0x541bd3[_0x3eadd2(0x262)]]=_0x541bd3[_0x3eadd2(0x24c)],_0x4141ad;},{}),this[_0x5ca842(0x20b)]();}async[_0x208e93(0x20b)](_0x28da4b=!![]){const _0x41d5ce=_0x208e93,{baiduTextApiKey:_0x500bbe,baiduTextSecretKey:_0x2233c7}=await this[_0x41d5ce(0x24f)]([_0x41d5ce(0x219),_0x41d5ce(0x289)]);if(!_0x500bbe||!_0x2233c7){common_1[_0x41d5ce(0x205)]['error'](_0x41d5ce(0x2a7),'GlobalConfigService');return;}const _0x4f4c5e={'Content-Type':_0x41d5ce(0x267),'Accept':'application/json'},_0x10265c=_0x41d5ce(0x1ff)+_0x500bbe+_0x41d5ce(0x208)+_0x2233c7+_0x41d5ce(0x228);try{const _0x3f632=await axios_1[_0x41d5ce(0x253)][_0x41d5ce(0x24d)](_0x10265c,{'headers':_0x4f4c5e});this['globalConfigs'][_0x41d5ce(0x204)]=_0x3f632[_0x41d5ce(0x286)][_0x41d5ce(0x26c)];}catch(_0x37e9ba){if(_0x28da4b)common_1[_0x41d5ce(0x205)]['error']('百度敏感词配置检测失败，您的参数可能配置的不正确!','GlobalConfigService');else throw new common_1[(_0x41d5ce(0x223))](_0x37e9ba['response'][_0x41d5ce(0x286)]['error_description'],common_1['HttpStatus'][_0x41d5ce(0x287)]);}}async[_0x208e93(0x278)](_0x359ae6=![]){const _0x463d4a=_0x208e93,{wechatOfficialAppId:_0x4d383c,wechatOfficialAppSecret:_0x96b39d}=await this[_0x463d4a(0x24f)]([_0x463d4a(0x1f7),_0x463d4a(0x21e)]);if(!_0x4d383c||!_0x96b39d)return common_1['Logger']['error'](_0x463d4a(0x284),_0x463d4a(0x20a));this['wechatAccessToken']=await this['fetchBaseAccessToken'](_0x4d383c,_0x96b39d,_0x359ae6),this[_0x463d4a(0x230)]=await this['fetchJsapiTicket'](this[_0x463d4a(0x27e)]),common_1['Logger']['log'](_0x463d4a(0x27c)+this['wechatAccessToken'],_0x463d4a(0x20a));}async[_0x208e93(0x25f)](_0x5d1ad6,_0x1de045,_0x4c7a97=![]){const _0x370b14=_0x208e93;if(process[_0x370b14(0x21c)][_0x370b14(0x1fa)]===_0x370b14(0x235)){this['wechatAccessToken']='';return;}const {data:{errmsg:_0x188b42,access_token:_0x179a34}}=await axios_1[_0x370b14(0x253)][_0x370b14(0x229)](_0x370b14(0x239)+_0x5d1ad6+'&secret='+_0x1de045);if(_0x188b42){if(_0x4c7a97)common_1['Logger'][_0x370b14(0x254)](_0x370b14(0x290)+_0x188b42,_0x370b14(0x20a));else throw new common_1['HttpException'](_0x370b14(0x1f5),common_1[_0x370b14(0x2a8)][_0x370b14(0x287)]);return'';}return _0x179a34;}async[_0x208e93(0x240)](_0x5955ab){const _0x208ebc=_0x208e93;var _0x3783ef;if(process[_0x208ebc(0x21c)][_0x208ebc(0x1fa)]==='TRUE'){this[_0x208ebc(0x230)]='';return;}const _0x484085=await axios_1[_0x208ebc(0x253)][_0x208ebc(0x229)](_0x208ebc(0x260)+_0x5955ab+_0x208ebc(0x207));return(_0x3783ef=_0x484085===null||_0x484085===void 0x0?void 0x0:_0x484085[_0x208ebc(0x286)])===null||_0x3783ef===void 0x0?void 0x0:_0x3783ef[_0x208ebc(0x1fb)];}async[_0x208e93(0x270)](_0x423c2f){const {role:_0x2e2c0b}=_0x423c2f['user'];return this['globalConfigs'];}async[_0x208e93(0x24a)](_0x545f95,_0x118add){const _0x31ef80=_0x208e93,_0x3a360e=[_0x31ef80(0x22e),_0x31ef80(0x1f4),_0x31ef80(0x257),_0x31ef80(0x29c),_0x31ef80(0x28a),'firstRegisterSendStatus',_0x31ef80(0x215),_0x31ef80(0x236),_0x31ef80(0x22f),'firstRregisterSendDrawMjCount',_0x31ef80(0x234),'inviteGiveSendModel3Count','inviteGiveSendModel4Count',_0x31ef80(0x276),_0x31ef80(0x24b),_0x31ef80(0x232),_0x31ef80(0x2a1),_0x31ef80(0x20c),'clientLogoPath',_0x31ef80(0x2a3),_0x31ef80(0x251),_0x31ef80(0x21f),'robotAvatar',_0x31ef80(0x266),'buyCramiAddress',_0x31ef80(0x2ad),_0x31ef80(0x243),_0x31ef80(0x201),_0x31ef80(0x1f2),_0x31ef80(0x2a2),'payEpayStatus',_0x31ef80(0x28f),_0x31ef80(0x2a4),_0x31ef80(0x26e),_0x31ef80(0x261),_0x31ef80(0x225),_0x31ef80(0x216),_0x31ef80(0x26a),_0x31ef80(0x27d),'companyName',_0x31ef80(0x227),'phoneRegisterStatus',_0x31ef80(0x1f1),_0x31ef80(0x25d),_0x31ef80(0x238),_0x31ef80(0x20f),'wechatSilentLoginStatus',_0x31ef80(0x273),_0x31ef80(0x28d),_0x31ef80(0x2b0),_0x31ef80(0x25c),_0x31ef80(0x200),_0x31ef80(0x25a),'mjUseBaiduFy',_0x31ef80(0x263),_0x31ef80(0x291),'isVerifyEmail'],_0x13d344=await this[_0x31ef80(0x1f3)]['find']({'where':{'configKey':(0x0,typeorm_2['In'])(_0x3a360e)}}),{domain:_0x288cdd}=_0x545f95,_0x51ab15=this[_0x31ef80(0x259)][_0x31ef80(0x275)];_0x51ab15!==_0x288cdd&&(this[_0x31ef80(0x1fe)]({'configKey':_0x31ef80(0x275),'configVal':_0x288cdd,'status':0x1}),await this[_0x31ef80(0x224)]());const _0x1ecde6=_0x13d344['reduce']((_0x450341,_0x459934)=>{const _0x12bcfd=_0x31ef80;return _0x450341[_0x459934['configKey']]=_0x459934[_0x12bcfd(0x24c)],_0x450341;},{}),{wechatOfficialAppId:_0x1dd117,wechatOfficialAppSecret:_0x5f545b}=await this['getConfigs']([_0x31ef80(0x1f7),_0x31ef80(0x21e)]),_0x544afa=!!(_0x1dd117&&_0x5f545b);return Object[_0x31ef80(0x1ed)](Object[_0x31ef80(0x1ed)]({},_0x1ecde6),{'isUseWxLogin':_0x544afa});}async[_0x208e93(0x23d)](_0x25b754){const _0x2c420c=_0x208e93,{role:_0x466cb1}=_0x25b754[_0x2c420c(0x281)],_0x3af095=await this['configEntity'][_0x2c420c(0x221)]({'where':{'configKey':(0x0,typeorm_2[_0x2c420c(0x258)])('%'+_0x2c420c(0x237)+'%')}});if(_0x466cb1==='super')return _0x3af095;return _0x3af095[_0x2c420c(0x218)](_0x10845d=>{const _0x4fa7b0=_0x2c420c;return _0x10845d['configVal']=(0x0,utils_1[_0x4fa7b0(0x29b)])(_0x10845d['configVal']),_0x10845d;});}async[_0x208e93(0x2a6)](_0x18bf0d){const _0x1b46b6=_0x208e93,_0x3359d3=_0x18bf0d[_0x1b46b6(0x222)]['filter'](_0x5ca7c2=>_0x5ca7c2['configVal']),_0x3266c3=_0x3359d3[_0x1b46b6(0x218)](_0x2fa2eb=>_0x2fa2eb['configKey']);for(const [_0x2f0b2b,_0x4126d6]of _0x3359d3['entries']()){const {configKey:_0xf7e702,configVal:_0x40db87,status:_0x326e03}=_0x4126d6;await this['createOrUpdate']({'configKey':_0x1b46b6(0x231)+(_0x2f0b2b+0x1),'configVal':_0x40db87,'status':_0x326e03});}const _0x154e3d=await this[_0x1b46b6(0x1f3)][_0x1b46b6(0x221)]({'where':{'configKey':(0x0,typeorm_2['Like'])('%'+'chatGptKey'+'%')}}),_0x4c6518=_0x154e3d['map'](_0x3a99e0=>_0x3a99e0['configKey']);if(_0x4c6518[_0x1b46b6(0x1f9)]>_0x3266c3[_0x1b46b6(0x1f9)]){const _0x16d058=(0x0,utils_1['getDiffArray'])(_0x4c6518[_0x1b46b6(0x1f9)],_0x3266c3[_0x1b46b6(0x1f9)],_0x1b46b6(0x231));for(const _0x2cb3db of _0x16d058){await this[_0x1b46b6(0x1f3)]['delete']({'configKey':_0x2cb3db});}}return await this[_0x1b46b6(0x224)](),_0x1b46b6(0x299);}async['queryConfig'](_0x2f82b5,_0x4a101f){const _0x4cd04b=_0x208e93,{role:_0x4a8e73}=_0x4a101f[_0x4cd04b(0x281)],{keys:_0x50f7b3}=_0x2f82b5,_0x1cb0d0=await this[_0x4cd04b(0x1f3)][_0x4cd04b(0x221)]({'where':{'configKey':(0x0,typeorm_2['In'])(_0x50f7b3)}});return _0x4a8e73!==_0x4cd04b(0x212)&&_0x1cb0d0['forEach'](_0x2ff6d4=>{const _0x3ce841=_0x4cd04b;if(_0x2ff6d4[_0x3ce841(0x262)]['includes']('mj')||_0x2ff6d4[_0x3ce841(0x262)][_0x3ce841(0x248)](_0x3ce841(0x297))||_0x2ff6d4[_0x3ce841(0x262)][_0x3ce841(0x248)]('gpt')||_0x2ff6d4['configKey'][_0x3ce841(0x248)](_0x3ce841(0x20d))||_0x2ff6d4['configKey']['includes'](_0x3ce841(0x27b))||_0x2ff6d4[_0x3ce841(0x262)][_0x3ce841(0x248)](_0x3ce841(0x209))||_0x2ff6d4['configKey']['includes'](_0x3ce841(0x23b))||_0x2ff6d4[_0x3ce841(0x262)][_0x3ce841(0x248)](_0x3ce841(0x265))||_0x2ff6d4[_0x3ce841(0x262)][_0x3ce841(0x248)](_0x3ce841(0x23c))||_0x2ff6d4['configKey'][_0x3ce841(0x248)](_0x3ce841(0x29e))||_0x2ff6d4[_0x3ce841(0x262)]==='openaiBaseUrl'){const _0x529eb1=[_0x3ce841(0x279),_0x3ce841(0x245)];if(_0x529eb1[_0x3ce841(0x248)](_0x2ff6d4[_0x3ce841(0x262)]))return _0x2ff6d4['configVal']=(0x0,utils_1[_0x3ce841(0x29b)])(_0x2ff6d4['configVal'],'隐私内容、非超级管理员无权查看');const _0x2a89e0=[_0x3ce841(0x293),_0x3ce841(0x28f),'mjProxy'];!_0x2a89e0[_0x3ce841(0x248)](_0x2ff6d4['configKey'])&&!_0x2ff6d4['configKey'][_0x3ce841(0x248)]('Status')&&(_0x2ff6d4[_0x3ce841(0x24c)]=(0x0,utils_1[_0x3ce841(0x29b)])(_0x2ff6d4[_0x3ce841(0x24c)]));}}),_0x1cb0d0[_0x4cd04b(0x268)]((_0x5c32bd,_0x5f16bf)=>{const _0x9e1cbb=_0x4cd04b;return _0x5c32bd[_0x5f16bf[_0x9e1cbb(0x262)]]=_0x5f16bf[_0x9e1cbb(0x24c)],_0x5c32bd;},{});}[_0x208e93(0x21a)](){const _0x48d27b=_0x208e93,_0x48bc78=this['globalConfigs'][_0x48d27b(0x264)],_0x5dcf49=this[_0x48d27b(0x27a)];return!_0x5dcf49||Number(_0x48bc78)===0x1;}async[_0x208e93(0x280)](_0x486493){const _0x5d0064=_0x208e93;try{const {settings:_0x2cfce2}=_0x486493;for(const _0x40770d of _0x2cfce2){await this[_0x5d0064(0x1fe)](_0x40770d);}await this[_0x5d0064(0x224)]();const _0x8c0386=_0x2cfce2[_0x5d0064(0x218)](_0x54fbce=>_0x54fbce[_0x5d0064(0x262)]);return(_0x8c0386[_0x5d0064(0x248)]('baiduTextApiKey')||_0x8c0386[_0x5d0064(0x248)](_0x5d0064(0x289)))&&await this[_0x5d0064(0x20b)](![]),(_0x8c0386[_0x5d0064(0x248)](_0x5d0064(0x1f7))||_0x8c0386[_0x5d0064(0x248)](_0x5d0064(0x21e)))&&await this[_0x5d0064(0x278)](),'设置完成！';}catch(_0x2381c8){console[_0x5d0064(0x26d)]('error:\x20',_0x2381c8);}}async['createOrUpdate'](_0x5d176e){const _0x57b78c=_0x208e93;try{const {configKey:_0x4b9eaa,configVal:_0x3dac2b,status:status=0x1}=_0x5d176e,_0x2cb0e7=await this['configEntity'][_0x57b78c(0x295)]({'where':{'configKey':_0x4b9eaa}});if(_0x2cb0e7){const _0x4fed57=await this[_0x57b78c(0x1f3)]['update']({'configKey':_0x4b9eaa},{'configVal':_0x3dac2b,'status':status});}else{const _0x451acd=await this['configEntity']['save']({'configKey':_0x4b9eaa,'configVal':_0x3dac2b,'status':status});}}catch(_0x358913){console[_0x57b78c(0x26d)](_0x57b78c(0x28c),_0x358913);throw new common_1['HttpException']('设置配置信息错误！',common_1[_0x57b78c(0x2a8)][_0x57b78c(0x287)]);}}async['queryNotice'](){const _0x24a1af=_0x208e93;return await this['getConfigs']([_0x24a1af(0x250),_0x24a1af(0x2ab)]);}async[_0x208e93(0x292)](){const _0x2fe798=_0x208e93;return await this[_0x2fe798(0x24f)]([_0x2fe798(0x21b),'copyrightTitle']);}async[_0x208e93(0x29a)](){const _0x2ac609=_0x208e93,{payHupiStatus:payHupiStatus=0x0,payEpayStatus:payEpayStatus=0x0,payWechatStatus:payWechatStatus=0x0,payMpayStatus:payMpayStatus=0x0}=await this[_0x2ac609(0x24f)](['payHupiStatus',_0x2ac609(0x293),_0x2ac609(0x26e),_0x2ac609(0x2a4)]);if([payHupiStatus,payEpayStatus,payWechatStatus,payMpayStatus][_0x2ac609(0x203)](_0x3c16ba=>_0x3c16ba===0x0))throw new common_1[(_0x2ac609(0x223))](_0x2ac609(0x274),common_1[_0x2ac609(0x2a8)]['BAD_REQUEST']);if(Number(payWechatStatus)===0x1)return _0x2ac609(0x23c);if(Number(payEpayStatus)===0x1)return _0x2ac609(0x256);if(Number(payMpayStatus)===0x1)return _0x2ac609(0x23a);if(Number(payHupiStatus)===0x1)return _0x2ac609(0x2af);}async[_0x208e93(0x294)](){const _0x1248df=_0x208e93,{siteName:_0x4283a5,qqNumber:_0x39f019,vxNumber:_0x2f0e62,registerBaseUrl:_0x11641a,domain:_0x1a87f3}=await this['getConfigs']([_0x1248df(0x21f),'qqNumber',_0x1248df(0x22e),_0x1248df(0x2b1),_0x1248df(0x275)]);return{'siteName':_0x4283a5,'qqNumber':_0x39f019,'vxNumber':_0x2f0e62,'registerBaseUrl':_0x11641a,'domain':_0x1a87f3};}async[_0x208e93(0x22d)](){const _0x5582b2=_0x208e93,{phoneRegisterStatus:_0x180c5d,aliPhoneAccessKeyId:_0x5981be,aliPhoneAccessKeySecret:_0x29b71f,aliPhoneSignName:_0x5b44b1,aliPhoneTemplateCode:_0x347d21}=await this[_0x5582b2(0x24f)]([_0x5582b2(0x1ee),_0x5582b2(0x226),_0x5582b2(0x217),'aliPhoneSignName',_0x5582b2(0x298)]);if(Number(_0x180c5d)!==0x1)throw new common_1[(_0x5582b2(0x223))]('手机验证码功能暂未开放!',common_1[_0x5582b2(0x2a8)][_0x5582b2(0x287)]);return{'accessKeyId':_0x5981be,'accessKeySecret':_0x29b71f,'SignName':_0x5b44b1,'TemplateCode':_0x347d21};}['getNamespace'](){const _0x5124e0=_0x208e93;return process[_0x5124e0(0x21c)]['NAMESPACE']||_0x5124e0(0x210);}async['getSignatureGiftConfig'](){const _0x182ff7=_0x208e93,{signInStatus:signInStatus=0x0,signInModel3Count:signInModel3Count=0x0,signInModel4Count:signInModel4Count=0x0,signInMjDrawToken:signInMjDrawToken=0x0}=await this[_0x182ff7(0x24f)]([_0x182ff7(0x273),_0x182ff7(0x28d),_0x182ff7(0x2b0),_0x182ff7(0x25c)]);if(Number(signInStatus)!==0x1)throw new common_1[(_0x182ff7(0x223))]('签到功能暂未开放!',common_1[_0x182ff7(0x2a8)]['BAD_REQUEST']);return{'model3Count':Number(signInModel3Count),'model4Count':Number(signInModel4Count),'drawMjCount':Number(signInMjDrawToken)};}async[_0x208e93(0x29d)](){const _0x4322b6=_0x208e93,_0x26ca82=_0x4322b6(0x23f),_0x1c6d10=await fetch(_0x26ca82,{}),_0x382c0d=await _0x1c6d10[_0x4322b6(0x277)](),{success:success=!![],message:_0x5dd791}=_0x382c0d;common_1['Logger'][_0x4322b6(0x254)](_0x4322b6(0x211)),common_1[_0x4322b6(0x205)]['error'](_0x4322b6(0x244)),common_1['Logger'][_0x4322b6(0x254)](_0x4322b6(0x1f0)),common_1[_0x4322b6(0x205)][_0x4322b6(0x254)](_0x4322b6(0x1f0)),common_1['Logger']['debug'](_0x4322b6(0x2ac));}async[_0x208e93(0x220)](){const _0x55afd7=_0x208e93,{baiduTextStatus:baiduTextStatus=0x0,baiduTextAccessToken:_0x2dfa1a,nineaiBuiltInSensitiveStatus:nineaiBuiltInSensitiveStatus=0x0,nineaiBuiltInSensitiveApiBase:_0x4965e6,nineaiBuiltInSensitiveAuthKey:_0x12ae35}=await this[_0x55afd7(0x24f)]([_0x55afd7(0x2a9),_0x55afd7(0x204),_0x55afd7(0x2aa),_0x55afd7(0x213),_0x55afd7(0x25b)]);if(Number(baiduTextStatus)===0x1)return{'useType':_0x55afd7(0x27b),'baiduTextAccessToken':_0x2dfa1a};if(Number(nineaiBuiltInSensitiveStatus)===0x1)return{'useType':'nineai','nineaiBuiltInSensitiveApiBase':_0x4965e6,'nineaiBuiltInSensitiveAuthKey':_0x12ae35};return null;}};function _0x496e(_0x43ce14,_0x145772){const _0x315f09=_0x315f();return _0x496e=function(_0x496ee8,_0x524a92){_0x496ee8=_0x496ee8-0x1ed;let _0xf4527e=_0x315f09[_0x496ee8];return _0xf4527e;},_0x496e(_0x43ce14,_0x145772);}GlobalConfigService=__decorate([(0x0,common_1[_0x208e93(0x28e)])(),__param(0x0,(0x0,typeorm_1['InjectRepository'])(config_entity_1[_0x208e93(0x249)])),__param(0x1,(0x0,typeorm_1[_0x208e93(0x24e)])(chatLog_entity_1[_0x208e93(0x272)])),__metadata('design:paramtypes',[typeorm_2[_0x208e93(0x21d)],typeorm_2[_0x208e93(0x21d)],models_service_1[_0x208e93(0x25e)]])],GlobalConfigService),exports[_0x208e93(0x22c)]=GlobalConfigService;function _0x315f(){const _0x7ed70f=['getCopyright','payEpayStatus','getAuthInfo','findOne','13255oMlGtX','Key','aliPhoneTemplateCode','操作完成！','queryPayType','hideString','registerSendModel4Count','auth','mjProxyImgUrl','__metadata','4GaWPLS','invitedGuestSendDrawMjCount','payEpayApiPayUrl','clientFavoIconPath','payWechatStatus','./config.entity','setGptKeys','百度敏感词初始化失败，如果需要敏感检测、请前往后台系统配置!','HttpStatus','baiduTextStatus','nineaiBuiltInSensitiveStatus','noticeTitle','感谢您使用NineAi、祝您使用愉快~','mindDefaultData','11340EUOCCL','hupi','signInModel4Count','registerBaseUrl','assign','phoneRegisterStatus','getOwnPropertyDescriptor','缺失ip信息','emailRegisterStatus','payMpayChannel','configEntity','registerSendStatus','请配置正确的秘钥、当前秘钥检测不通过！','559oHIEMB','wechatOfficialAppId','chatLogEntity','length','ISDEV','ticket','138ybbwcz','axios','createOrUpdate','https://aip.baidubce.com/oauth/2.0/token?client_id=','appMenuHeaderTips','payEpayChannel','../models/models.service','every','baiduTextAccessToken','Logger','187624kfCpdW','&type=jsapi','&client_secret=','ali','OfficialService','initBaiduSensitive','clientHomePath','cos','typeorm','wechatRegisterStatus','NINEAI','请按要求填写正确的授权信息','super','nineaiBuiltInSensitiveApiBase','../../common/utils','firstRegisterSendRank','salesBaseRatio','aliPhoneAccessKeySecret','map','baiduTextApiKey','getNineAiToken','copyrightUrl','env','Repository','wechatOfficialAppSecret','siteName','getSensitiveConfig','find','configs','HttpException','initGetAllConfig','isShowAppCatIcon','aliPhoneAccessKeyId','filingNumber','&grant_type=client_credentials','get','modelsService','version','GlobalConfigService','getPhoneVerifyConfig','vxNumber','firstRregisterSendModel4Count','wechatJsapiTicket','chatGptKey:','invitedGuestSendModel4Count','9ljuMtr','inviteSendStatus','TRUE','firstRregisterSendModel3Count','chatGptKey','phoneLoginStatus','https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=','mpay','tencent','wechat','queryGptKeys','package.json','https://api.jiangly.com/api/permission/auth','fetchJsapiTicket','decorate','1626910akDZuL','baiduCode','请填写您的授权码','payWeChatPrivateKey','onModuleInit','object','includes','ConfigEntity','queryFrontConfig','invitedGuestSendModel3Count','configVal','post','InjectRepository','getConfigs','noticeInfo','isUseWxLogin','@nestjs/typeorm','default','error','256335RkGeuV','epay','registerSendModel3Count','Like','globalConfigs','appMenuHeaderBgUrl','nineaiBuiltInSensitiveAuthKey','signInMjDrawToken','emailLoginStatus','ModelsService','fetchBaseAccessToken','https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=','isAutoOpenNotice','configKey','mjHideNotBlock','MjdrawCount','pay','siteRobotName','application/json','reduce','metadata','salesSeniorRatio','12hGCGDn','access_token','log','payMpayStatus','286913KIDoox','queryAllConfig','../chatLog/chatLog.entity','ChatLogEntity','signInStatus','支付功能暂未开放!','domain','inviteGiveSendDrawMjCount','json','getWechatAccessToken','payWeChatPublicKey','nineAiToken','baidu','wechat\x20refresh\x20access_token\x20\x20==>\x20','salesAllowDrawMoney','wechatAccessToken','utf-8','setConfig','user','defineProperty','27492Xwwkrm','还未配置微信的appId和secret、配置后才可进行微信扫码登录！！！','function','data','BAD_REQUEST','\x20current\x20use\x20version\x20in\x20------>:\x20','baiduTextSecretKey','registerSendDrawMjCount','28lqfuFo','error:\x20','signInModel3Count','Injectable','payHupiStatus','获取微信access_token失败、错误信息：','mjHideWorkIn'];_0x315f=function(){return _0x7ed70f;};return _0x315f();}