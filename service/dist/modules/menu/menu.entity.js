'use strict';var _0x24382c=_0x5d80;(function(_0x6fba6c,_0x1b0574){var _0x528e4e=_0x5d80,_0xc39b2a=_0x6fba6c();while(!![]){try{var _0x3f8808=-parseInt(_0x528e4e(0xe6))/0x1+-parseInt(_0x528e4e(0xef))/0x2+-parseInt(_0x528e4e(0xfe))/0x3*(-parseInt(_0x528e4e(0xf3))/0x4)+-parseInt(_0x528e4e(0xe8))/0x5+-parseInt(_0x528e4e(0xfa))/0x6*(-parseInt(_0x528e4e(0xee))/0x7)+parseInt(_0x528e4e(0x104))/0x8+-parseInt(_0x528e4e(0xe3))/0x9*(-parseInt(_0x528e4e(0xe7))/0xa);if(_0x3f8808===_0x1b0574)break;else _0xc39b2a['push'](_0xc39b2a['shift']());}catch(_0xc00d40){_0xc39b2a['push'](_0xc39b2a['shift']());}}}(_0x4cf5,0x6d22d));var __decorate=this&&this[_0x24382c(0xf8)]||function(_0x497602,_0x4cbcd9,_0x3ac1ea,_0x21a9bd){var _0x7db487=_0x24382c,_0x26e25b=arguments[_0x7db487(0x10a)],_0x210a2a=_0x26e25b<0x3?_0x4cbcd9:_0x21a9bd===null?_0x21a9bd=Object[_0x7db487(0xec)](_0x4cbcd9,_0x3ac1ea):_0x21a9bd,_0x3ba58a;if(typeof Reflect===_0x7db487(0xe5)&&typeof Reflect[_0x7db487(0x108)]===_0x7db487(0xe4))_0x210a2a=Reflect[_0x7db487(0x108)](_0x497602,_0x4cbcd9,_0x3ac1ea,_0x21a9bd);else{for(var _0x47a756=_0x497602[_0x7db487(0x10a)]-0x1;_0x47a756>=0x0;_0x47a756--)if(_0x3ba58a=_0x497602[_0x47a756])_0x210a2a=(_0x26e25b<0x3?_0x3ba58a(_0x210a2a):_0x26e25b>0x3?_0x3ba58a(_0x4cbcd9,_0x3ac1ea,_0x210a2a):_0x3ba58a(_0x4cbcd9,_0x3ac1ea))||_0x210a2a;}return _0x26e25b>0x3&&_0x210a2a&&Object['defineProperty'](_0x4cbcd9,_0x3ac1ea,_0x210a2a),_0x210a2a;},__metadata=this&&this[_0x24382c(0x101)]||function(_0x362ccf,_0x4846d4){var _0x3543b4=_0x24382c;if(typeof Reflect==='object'&&typeof Reflect['metadata']===_0x3543b4(0xe4))return Reflect[_0x3543b4(0xeb)](_0x362ccf,_0x4846d4);};Object[_0x24382c(0xfc)](exports,'__esModule',{'value':!![]}),exports[_0x24382c(0x102)]=void 0x0;const typeorm_1=require('typeorm'),baseEntity_1=require(_0x24382c(0x10b));function _0x5d80(_0x2f6985,_0x3597f7){var _0x4cf5a5=_0x4cf5();return _0x5d80=function(_0x5d80b5,_0x2c0492){_0x5d80b5=_0x5d80b5-0xe3;var _0x571860=_0x4cf5a5[_0x5d80b5];return _0x571860;},_0x5d80(_0x2f6985,_0x3597f7);}let MenuEntity=class MenuEntity extends baseEntity_1[_0x24382c(0x100)]{};__decorate([(0x0,typeorm_1[_0x24382c(0xf0)])({'comment':_0x24382c(0xf4),'length':0x40,'default':null}),__metadata(_0x24382c(0xe9),String)],MenuEntity[_0x24382c(0x105)],_0x24382c(0x103),void 0x0),__decorate([(0x0,typeorm_1[_0x24382c(0xf0)])({'comment':_0x24382c(0xf1),'length':0x40}),__metadata(_0x24382c(0xe9),String)],MenuEntity[_0x24382c(0x105)],_0x24382c(0xff),void 0x0),__decorate([(0x0,typeorm_1[_0x24382c(0xf0)])({'comment':'菜单图标\x20icon图标名称'}),__metadata(_0x24382c(0xe9),String)],MenuEntity[_0x24382c(0x105)],'menuIcon',void 0x0),__decorate([(0x0,typeorm_1[_0x24382c(0xf0)])({'comment':_0x24382c(0xfd)}),__metadata(_0x24382c(0xe9),String)],MenuEntity[_0x24382c(0x105)],_0x24382c(0x109),void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':_0x24382c(0xf5),'default':0x1}),__metadata(_0x24382c(0xe9),Number)],MenuEntity[_0x24382c(0x105)],'menuType',void 0x0),__decorate([(0x0,typeorm_1[_0x24382c(0xf0)])({'comment':_0x24382c(0x10c),'default':0x1}),__metadata(_0x24382c(0xe9),Number)],MenuEntity[_0x24382c(0x105)],_0x24382c(0x10d),void 0x0),__decorate([(0x0,typeorm_1[_0x24382c(0xf0)])({'comment':_0x24382c(0x107),'default':null}),__metadata(_0x24382c(0xe9),String)],MenuEntity['prototype'],_0x24382c(0xea),void 0x0),__decorate([(0x0,typeorm_1[_0x24382c(0xf0)])({'comment':'排序ID','default':0x64}),__metadata(_0x24382c(0xe9),Number)],MenuEntity[_0x24382c(0x105)],_0x24382c(0xf9),void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':_0x24382c(0xf6),'default':0x1}),__metadata(_0x24382c(0xe9),Boolean)],MenuEntity['prototype'],'isShow',void 0x0),__decorate([(0x0,typeorm_1[_0x24382c(0xf0)])({'comment':'是否跳转到新窗口\x200不跳转\x201跳转\x20仅设置为iframe窗口时候有效','default':0x0}),__metadata(_0x24382c(0xe9),Boolean)],MenuEntity[_0x24382c(0x105)],_0x24382c(0xfb),void 0x0),__decorate([(0x0,typeorm_1[_0x24382c(0xf0)])({'comment':_0x24382c(0xf2),'default':0x0}),__metadata(_0x24382c(0xe9),Boolean)],MenuEntity[_0x24382c(0x105)],_0x24382c(0xed),void 0x0),MenuEntity=__decorate([(0x0,typeorm_1[_0x24382c(0x106)])({'name':_0x24382c(0xf7)})],MenuEntity),exports[_0x24382c(0x102)]=MenuEntity;function _0x4cf5(){var _0x138e58=['order','30NJSMiA','isJump','defineProperty','菜单文字提示信息','3hTRyqo','menuPath','BaseEntity','__metadata','MenuEntity','menuName','6400400VaILio','prototype','Entity','菜单加载地址：\x20系统菜单|自定义菜单','decorate','menuTipText','length','../../common/entity/baseEntity','菜单平台：\x200：移动端\x201：pc端','menuPlatform','131049dPyLSi','function','object','870397NnNDNv','20FLxsbT','313085UuxdHB','design:type','menuIframeUrl','metadata','getOwnPropertyDescriptor','isNeedAuth','973504MlePxC','766046Qlmlcq','Column','菜单路径、跳转的系统路径','是否权限\x20登录才可以访问','954104zeMTpl','菜单名称','菜单类型：\x20系统预设|自定义菜单','是否显示\x201：是|0：不是','menu','__decorate'];_0x4cf5=function(){return _0x138e58;};return _0x4cf5();}