webpackJsonp([15,25],{522:function(e,t,n){"use strict";var i=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},r=n(112),_=n(752),s=n(171),h=n(725),o=n(553),c=n(113),l=n(63),a=n(704),p=n(116),u=n(645),d=n(52),w=function(e){function t(t){e.call(this,t,[a.PagChipNgFactory],[])}return i(t,e),Object.defineProperty(t.prototype,"_NgLocalization_5",{get:function(){return null==this.__NgLocalization_5&&(this.__NgLocalization_5=new l.NgLocaleLocalization(this.parent.get(p.LOCALE_ID))),this.__NgLocalization_5},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ROUTES_6",{get:function(){return null==this.__ROUTES_6&&(this.__ROUTES_6=[[{path:"",component:u.PagChip}]]),this.__ROUTES_6},enumerable:!0,configurable:!0}),t.prototype.createInternal=function(){return this._CommonModule_0=new s.CommonModule,this._MlChipMod_1=new h.MlChipMod,this._ViewSourceMod_2=new o.ViewSourceMod,this._RouterModule_3=new c.RouterModule(this.parent.get(c.ROUTER_FORROOT_GUARD,null)),this._PagChipMod_4=new _.PagChipMod,this._PagChipMod_4},t.prototype.getInternal=function(e,t){return e===s.CommonModule?this._CommonModule_0:e===h.MlChipMod?this._MlChipMod_1:e===o.ViewSourceMod?this._ViewSourceMod_2:e===c.RouterModule?this._RouterModule_3:e===_.PagChipMod?this._PagChipMod_4:e===l.NgLocalization?this._NgLocalization_5:e===d.ROUTES?this._ROUTES_6:t},t.prototype.destroyInternal=function(){},t}(r.NgModuleInjector);t.PagChipModNgFactory=new r.NgModuleFactory(w,_.PagChipMod)},545:function(e,t,n){"use strict";var i=function(){function e(){this.urlBaseRaw="https://raw.githubusercontent.com/YagoLopez/material-light/master/src/app/pages",this.urlBaseFormated="https://github.com/YagoLopez/material-light/blob/master/src/app/pages",this.features="resizable,scrollbars=yes,status=0,toolbar=0,menubar=0"}return e.prototype.viewRawSource=function(){window.open(this.urlBaseRaw+"/"+this.uri,"_blank",this.features)},e.prototype.viewFormatedSource=function(){window.open(this.urlBaseFormated+"/"+this.uri,"_blank",this.features)},e}();t.ViewSourceCmp=i},552:function(e,t,n){"use strict";var i=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},r=n(545),_=n(23),s=n(51),h=n(11),o=n(44),c=n(29),l=n(28),a=n(36),p=function(){function e(){this._changed=!1,this.context=new r.ViewSourceCmp,this._expr_0=_.UNINITIALIZED}return e.prototype.ngOnDetach=function(e,t,n){},e.prototype.ngOnDestroy=function(){},e.prototype.check_uri=function(e,t,n){(n||h.checkBinding(t,this._expr_0,e))&&(this._changed=!0,this.context.uri=e,this._expr_0=e)},e.prototype.ngDoCheck=function(e,t,n){var i=this._changed;return this._changed=!1,i},e.prototype.checkHost=function(e,t,n,i){},e.prototype.handleEvent=function(e,t){var n=!0;return n},e.prototype.subscribe=function(e,t){this._eventHandler=t},e}();t.Wrapper_ViewSourceCmp=p;var u=h.createRenderComponentType("",0,o.ViewEncapsulation.None,[],{}),d=function(e){function t(n,i,r,_){e.call(this,t,u,c.ViewType.HOST,n,i,r,_,l.ChangeDetectorStatus.CheckAlways)}return i(t,e),t.prototype.createInternal=function(e){return this._el_0=h.selectOrCreateRenderHostElement(this.renderer,"view-source",h.EMPTY_INLINE_ARRAY,e,null),this.compView_0=new x(this.viewUtils,this,0,this._el_0),this._ViewSourceCmp_0_3=new p,this.compView_0.create(this._ViewSourceCmp_0_3.context),this.init(this._el_0,this.renderer.directRenderer?null:[this._el_0],null),new a.ComponentRef_(0,this,this._el_0,this._ViewSourceCmp_0_3.context)},t.prototype.injectorGetInternal=function(e,t,n){return e===r.ViewSourceCmp&&0===t?this._ViewSourceCmp_0_3.context:n},t.prototype.detectChangesInternal=function(e){this._ViewSourceCmp_0_3.ngDoCheck(this,this._el_0,e),this.compView_0.internalDetectChanges(e)},t.prototype.destroyInternal=function(){this.compView_0.destroy()},t.prototype.visitRootNodesInternal=function(e,t){e(this._el_0,t)},t}(s.AppView);t.ViewSourceCmpNgFactory=new a.ComponentFactory("view-source",d,r.ViewSourceCmp);var w=[".btn-view-src[_ngcontent-%COMP%]{font-size: small; display: block; color: grey; border: 1px solid grey; \n    text-decoration: none; padding: 8px; border-radius: 2px; box-shadow: 1px 1px 5px lightgrey; margin: 10px}\n  .btn-view-src[_ngcontent-%COMP%]:active{background-color: lightgrey}  \n  .btn-view-src-container[_ngcontent-%COMP%]{padding: 25px; text-align: center; margin: auto; width: 68%}"],f=h.createRenderComponentType("",0,o.ViewEncapsulation.Emulated,w,{}),x=function(e){function t(n,i,r,_){e.call(this,t,f,c.ViewType.COMPONENT,n,i,r,_,l.ChangeDetectorStatus.CheckAlways)}return i(t,e),t.prototype.createInternal=function(e){var t=this.renderer.createViewRoot(this.parentElement);this._text_0=this.renderer.createText(t,"\n",null),this._text_1=this.renderer.createText(t,"\n",null),this._el_2=h.createRenderElement(this.renderer,t,"div",new h.InlineArray2(2,"class","btn-view-src-container"),null),this._text_3=this.renderer.createText(this._el_2,"\n  ",null),this._el_4=h.createRenderElement(this.renderer,this._el_2,"a",new h.InlineArray4(4,"class","btn-view-src","href","javascript:void(0)"),null),this._text_5=this.renderer.createText(this._el_4,"View raw source ⇒ ❐",null),this._text_6=this.renderer.createText(this._el_2,"\n  ",null),this._el_7=h.createRenderElement(this.renderer,this._el_2,"a",new h.InlineArray4(4,"class","btn-view-src","href","javascript:void(0)"),null),this._text_8=this.renderer.createText(this._el_7,"Formated source ⇒ ❐",null),this._text_9=this.renderer.createText(this._el_2,"\n",null),this._text_10=this.renderer.createText(t,"\n",null);var n=h.subscribeToRenderElement(this,this._el_4,new h.InlineArray2(2,"click",null),this.eventHandler(this.handleEvent_4)),i=h.subscribeToRenderElement(this,this._el_7,new h.InlineArray2(2,"click",null),this.eventHandler(this.handleEvent_7));return this.init(null,this.renderer.directRenderer?null:[this._text_0,this._text_1,this._el_2,this._text_3,this._el_4,this._text_5,this._text_6,this._el_7,this._text_8,this._text_9,this._text_10],[n,i]),null},t.prototype.handleEvent_4=function(e,t){this.markPathToRootAsCheckOnce();var n=!0;if("click"==e){var i=this.context.viewRawSource()!==!1;n=i&&n}return n},t.prototype.handleEvent_7=function(e,t){this.markPathToRootAsCheckOnce();var n=!0;if("click"==e){var i=this.context.viewFormatedSource()!==!1;n=i&&n}return n},t}(s.AppView);t.View_ViewSourceCmp0=x},553:function(e,t,n){"use strict";var i=function(){function e(){}return e}();t.ViewSourceMod=i},598:function(e,t,n){"use strict";var i=n(262),r=n(23),_=n(11),s=function(){function e(e,t,n,_){this._changed=!1,this.context=new i.NgClass(e,t,n,_),this._expr_0=r.UNINITIALIZED,this._expr_1=r.UNINITIALIZED}return e.prototype.ngOnDetach=function(e,t,n){},e.prototype.ngOnDestroy=function(){},e.prototype.check_klass=function(e,t,n){(n||_.checkBinding(t,this._expr_0,e))&&(this._changed=!0,this.context.klass=e,this._expr_0=e)},e.prototype.check_ngClass=function(e,t,n){(n||_.checkBinding(t,this._expr_1,e))&&(this._changed=!0,this.context.ngClass=e,this._expr_1=e)},e.prototype.ngDoCheck=function(e,t,n){var i=this._changed;return this._changed=!1,n||this.context.ngDoCheck(),i},e.prototype.checkHost=function(e,t,n,i){},e.prototype.handleEvent=function(e,t){var n=!0;return n},e.prototype.subscribe=function(e,t){this._eventHandler=t},e}();t.Wrapper_NgClass=s},620:function(e,t,n){"use strict";t.styles=[".mdl-chip[_ngcontent-%COMP%]{height:32px;font-family:Roboto,Helvetica,Arial,sans-serif;line-height:32px;padding:0 12px;border:0;border-radius:16px;background-color:#dedede;display:inline-block;color:rgba(0,0,0,.87);margin:2px 0;font-size:0;white-space:nowrap}.mdl-chip__action[_ngcontent-%COMP%], .mdl-chip__text[_ngcontent-%COMP%]{font-size:13px;vertical-align:middle;display:inline-block}.mdl-chip__action[_ngcontent-%COMP%]{height:24px;width:24px;background:transparent;opacity:.54;cursor:pointer;text-align:center;padding:0;margin:0 0 0 4px;text-decoration:none;color:rgba(0,0,0,.87);border:none;outline:none;overflow:hidden}.mdl-chip__contact[_ngcontent-%COMP%]{height:32px;width:32px;border-radius:16px;display:inline-block;vertical-align:middle;margin-right:8px;overflow:hidden;text-align:center;font-size:18px;line-height:32px}.mdl-chip[_ngcontent-%COMP%]:focus{outline:0;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)}.mdl-chip[_ngcontent-%COMP%]:active{background-color:#d6d6d6}.mdl-chip--deletable[_ngcontent-%COMP%]{padding-right:4px}.mdl-chip--contact[_ngcontent-%COMP%]{padding-left:0}"]},623:function(e,t,n){"use strict";var i=function(){function e(){this.visible=!0}return e.prototype.deleteChip=function(e){return this.visible=!this.visible,this.action?this.action():console.log("Chip deleted. No further action defined."),!1},e}();t.MlChip=i},624:function(e,t,n){"use strict";var i=function(){function e(){}return e}();t.MlChipButton=i},645:function(e,t,n){"use strict";var i=function(){function e(){}return e.prototype.deleteFn=function(){window.alert("Chip delete action executed")},e.prototype.onClickChip=function(){window.alert("Button Chip Clicked")},e}();t.PagChip=i},668:function(e,t,n){"use strict";var i=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},r=n(623),_=n(23),s=n(51),h=n(11),o=n(44),c=n(29),l=n(28),a=n(36),p=n(620),u=n(118),d=n(79),w=n(598),f=n(263),x=n(119),g=n(120),C=n(37),m=n(117),y=n(115),I=n(262),v=function(){function e(){this._changed=!1,this.context=new r.MlChip,this._expr_0=_.UNINITIALIZED,this._expr_1=_.UNINITIALIZED,this._expr_2=_.UNINITIALIZED,this._expr_3=_.UNINITIALIZED}return e.prototype.ngOnDetach=function(e,t,n){},e.prototype.ngOnDestroy=function(){},e.prototype.check_deletable=function(e,t,n){(n||h.checkBinding(t,this._expr_0,e))&&(this._changed=!0,this.context.deletable=e,this._expr_0=e)},e.prototype.check_img=function(e,t,n){(n||h.checkBinding(t,this._expr_1,e))&&(this._changed=!0,this.context.img=e,this._expr_1=e)},e.prototype.check_letter=function(e,t,n){(n||h.checkBinding(t,this._expr_2,e))&&(this._changed=!0,this.context.letter=e,this._expr_2=e)},e.prototype.check_action=function(e,t,n){(n||h.checkBinding(t,this._expr_3,e))&&(this._changed=!0,this.context.action=e,this._expr_3=e)},e.prototype.ngDoCheck=function(e,t,n){var i=this._changed;return this._changed=!1,i},e.prototype.checkHost=function(e,t,n,i){},e.prototype.handleEvent=function(e,t){var n=!0;return n},e.prototype.subscribe=function(e,t){this._eventHandler=t},e}();t.Wrapper_MlChip=v;var R=h.createRenderComponentType("",0,o.ViewEncapsulation.None,[],{}),V=function(e){function t(n,i,r,_){e.call(this,t,R,c.ViewType.HOST,n,i,r,_,l.ChangeDetectorStatus.CheckAlways)}return i(t,e),t.prototype.createInternal=function(e){return this._el_0=h.selectOrCreateRenderHostElement(this.renderer,"ml-chip",h.EMPTY_INLINE_ARRAY,e,null),this.compView_0=new A(this.viewUtils,this,0,this._el_0),this._MlChip_0_3=new v,this.compView_0.create(this._MlChip_0_3.context),this.init(this._el_0,this.renderer.directRenderer?null:[this._el_0],null),new a.ComponentRef_(0,this,this._el_0,this._MlChip_0_3.context)},t.prototype.injectorGetInternal=function(e,t,n){return e===r.MlChip&&0===t?this._MlChip_0_3.context:n},t.prototype.detectChangesInternal=function(e){this._MlChip_0_3.ngDoCheck(this,this._el_0,e),this.compView_0.internalDetectChanges(e)},t.prototype.destroyInternal=function(){this.compView_0.destroy()},t.prototype.visitRootNodesInternal=function(e,t){e(this._el_0,t)},t.prototype.visitProjectableNodesInternal=function(e,t,n,i){},t}(s.AppView);t.MlChipNgFactory=new a.ComponentFactory("ml-chip",V,r.MlChip);var T=[p.styles],M=function(e){function t(n,i,r,s,h){e.call(this,t,b,c.ViewType.EMBEDDED,n,i,r,s,l.ChangeDetectorStatus.CheckAlways,h),this._expr_2=_.UNINITIALIZED}return i(t,e),t.prototype.createInternal=function(e){return this._el_0=h.createRenderElement(this.renderer,null,"span",new h.InlineArray2(2,"class","mdl-chip__contact mdl-color--teal mdl-color-text--white"),null),this._text_1=this.renderer.createText(this._el_0,"",null),this.init(this._el_0,this.renderer.directRenderer?null:[this._el_0,this._text_1],null),null},t.prototype.detectChangesInternal=function(e){var t=h.inlineInterpolate(1,"",this.parentView.parentView.context.letter,"");h.checkBinding(e,this._expr_2,t)&&(this.renderer.setText(this._text_1,t),this._expr_2=t)},t.prototype.visitRootNodesInternal=function(e,t){e(this._el_0,t)},t}(s.AppView),N=function(e){function t(n,i,r,s,h){e.call(this,t,b,c.ViewType.EMBEDDED,n,i,r,s,l.ChangeDetectorStatus.CheckAlways,h),this._expr_1=_.UNINITIALIZED}return i(t,e),t.prototype.createInternal=function(e){return this._el_0=h.createRenderElement(this.renderer,null,"img",new h.InlineArray2(2,"class","mdl-chip__contact"),null),this.init(this._el_0,this.renderer.directRenderer?null:[this._el_0],null),null},t.prototype.detectChangesInternal=function(e){var t=this.parentView.parentView.context.img;h.checkBinding(e,this._expr_1,t)&&(this.renderer.setElementProperty(this._el_0,"src",this.viewUtils.sanitizer.sanitize(d.SecurityContext.URL,t)),this._expr_1=t)},t.prototype.visitRootNodesInternal=function(e,t){e(this._el_0,t)},t}(s.AppView),E=function(e){function t(n,i,r,_,s){e.call(this,t,b,c.ViewType.EMBEDDED,n,i,r,_,l.ChangeDetectorStatus.CheckAlways,s)}return i(t,e),t.prototype.createInternal=function(e){this._el_0=h.createRenderElement(this.renderer,null,"a",new h.InlineArray4(4,"class","mdl-chip__action","href","#"),null),this._text_1=this.renderer.createText(this._el_0,"\n    ",null),this._el_2=h.createRenderElement(this.renderer,this._el_0,"i",new h.InlineArray2(2,"class","material-icons"),null),this._text_3=this.renderer.createText(this._el_2,"cancel",null),this._text_4=this.renderer.createText(this._el_0,"\n  ",null);var t=h.subscribeToRenderElement(this,this._el_0,new h.InlineArray2(2,"click",null),this.eventHandler(this.handleEvent_0));return this.init(this._el_0,this.renderer.directRenderer?null:[this._el_0,this._text_1,this._el_2,this._text_3,this._text_4],[t]),null},t.prototype.visitRootNodesInternal=function(e,t){e(this._el_0,t)},t.prototype.handleEvent_0=function(e,t){this.markPathToRootAsCheckOnce();var n=!0;if("click"==e){var i=this.parentView.parentView.context.deleteChip(t)!==!1;n=i&&n}return n},t}(s.AppView),k=function(e){function t(n,i,r,_,s){e.call(this,t,b,c.ViewType.EMBEDDED,n,i,r,_,l.ChangeDetectorStatus.CheckAlways,s),this._map_22=h.pureProxy2(function(e,t){return{"mdl-chip--contact":e,"mdl-chip--deletable":t}})}return i(t,e),t.prototype.createInternal=function(e){return this._el_0=h.createRenderElement(this.renderer,null,"span",new h.InlineArray2(2,"class","mdl-chip"),null),this._NgClass_0_3=new w.Wrapper_NgClass(this.parentView.injectorGet(x.IterableDiffers,this.parentIndex),this.parentView.injectorGet(g.KeyValueDiffers,this.parentIndex),new C.ElementRef(this._el_0),this.renderer),this._text_1=this.renderer.createText(this._el_0,"\n  \n  ",null),this._anchor_2=this.renderer.createTemplateAnchor(this._el_0,null),this._vc_2=new u.ViewContainer(2,0,this,this._anchor_2),this._TemplateRef_2_5=new m.TemplateRef_(this,2,this._anchor_2),this._NgIf_2_6=new f.Wrapper_NgIf(this._vc_2.vcRef,this._TemplateRef_2_5),this._text_3=this.renderer.createText(this._el_0,"\n  \n  ",null),this._anchor_4=this.renderer.createTemplateAnchor(this._el_0,null),this._vc_4=new u.ViewContainer(4,0,this,this._anchor_4),this._TemplateRef_4_5=new m.TemplateRef_(this,4,this._anchor_4),this._NgIf_4_6=new f.Wrapper_NgIf(this._vc_4.vcRef,this._TemplateRef_4_5),this._text_5=this.renderer.createText(this._el_0,"\n  \n  ",null),this._el_6=h.createRenderElement(this.renderer,this._el_0,"span",new h.InlineArray2(2,"class","mdl-chip__text"),null),this._text_7=this.renderer.createText(this._el_6,"\n    ",null),this.projectNodes(this._el_6,0),this._text_8=this.renderer.createText(this._el_6,"\n  ",null),this._text_9=this.renderer.createText(this._el_0,"\n    \n  ",null),this._anchor_10=this.renderer.createTemplateAnchor(this._el_0,null),this._vc_10=new u.ViewContainer(10,0,this,this._anchor_10),this._TemplateRef_10_5=new m.TemplateRef_(this,10,this._anchor_10),this._NgIf_10_6=new f.Wrapper_NgIf(this._vc_10.vcRef,this._TemplateRef_10_5),this._text_11=this.renderer.createText(this._el_0,"\n",null),this.init(this._el_0,this.renderer.directRenderer?null:[this._el_0,this._text_1,this._anchor_2,this._text_3,this._anchor_4,this._text_5,this._el_6,this._text_7,this._text_8,this._text_9,this._anchor_10,this._text_11],null),null},t.prototype.injectorGetInternal=function(e,t,n){return e===m.TemplateRef&&2===t?this._TemplateRef_2_5:e===y.NgIf&&2===t?this._NgIf_2_6.context:e===m.TemplateRef&&4===t?this._TemplateRef_4_5:e===y.NgIf&&4===t?this._NgIf_4_6.context:e===m.TemplateRef&&10===t?this._TemplateRef_10_5:e===y.NgIf&&10===t?this._NgIf_10_6.context:e===I.NgClass&&0<=t&&t<=11?this._NgClass_0_3.context:n},t.prototype.detectChangesInternal=function(e){var t="mdl-chip";this._NgClass_0_3.check_klass(t,e,!1);var n=this._map_22(this.parentView.context.img||this.parentView.context.letter,this.parentView.context.deletable);this._NgClass_0_3.check_ngClass(n,e,!1),this._NgClass_0_3.ngDoCheck(this,this._el_0,e);var i=this.parentView.context.letter;this._NgIf_2_6.check_ngIf(i,e,!1),this._NgIf_2_6.ngDoCheck(this,this._anchor_2,e);var r=this.parentView.context.img;this._NgIf_4_6.check_ngIf(r,e,!1),this._NgIf_4_6.ngDoCheck(this,this._anchor_4,e);var _=this.parentView.context.deletable;this._NgIf_10_6.check_ngIf(_,e,!1),this._NgIf_10_6.ngDoCheck(this,this._anchor_10,e),this._vc_2.detectChangesInNestedViews(e),this._vc_4.detectChangesInNestedViews(e),this._vc_10.detectChangesInNestedViews(e)},t.prototype.destroyInternal=function(){this._vc_2.destroyNestedViews(),this._vc_4.destroyNestedViews(),this._vc_10.destroyNestedViews()},t.prototype.visitRootNodesInternal=function(e,t){e(this._el_0,t)},t.prototype.createEmbeddedViewInternal=function(e){return 2==e?new M(this.viewUtils,this,2,this._anchor_2,this._vc_2):4==e?new N(this.viewUtils,this,4,this._anchor_4,this._vc_4):10==e?new E(this.viewUtils,this,10,this._anchor_10,this._vc_10):null},t}(s.AppView),b=h.createRenderComponentType("",1,o.ViewEncapsulation.Emulated,T,{}),A=function(e){function t(n,i,r,_){e.call(this,t,b,c.ViewType.COMPONENT,n,i,r,_,l.ChangeDetectorStatus.CheckAlways)}return i(t,e),t.prototype.createInternal=function(e){var t=this.renderer.createViewRoot(this.parentElement);return this._text_0=this.renderer.createText(t,"\n\n",null),this._anchor_1=this.renderer.createTemplateAnchor(t,null),this._vc_1=new u.ViewContainer(1,null,this,this._anchor_1),this._TemplateRef_1_5=new m.TemplateRef_(this,1,this._anchor_1),this._NgIf_1_6=new f.Wrapper_NgIf(this._vc_1.vcRef,this._TemplateRef_1_5),this._text_2=this.renderer.createText(t,"\n\n",null),this.init(null,this.renderer.directRenderer?null:[this._text_0,this._anchor_1,this._text_2],null),null},t.prototype.injectorGetInternal=function(e,t,n){return e===m.TemplateRef&&1===t?this._TemplateRef_1_5:e===y.NgIf&&1===t?this._NgIf_1_6.context:n},t.prototype.detectChangesInternal=function(e){var t=this.context.visible;this._NgIf_1_6.check_ngIf(t,e,!1),this._NgIf_1_6.ngDoCheck(this,this._anchor_1,e),this._vc_1.detectChangesInNestedViews(e)},t.prototype.destroyInternal=function(){this._vc_1.destroyNestedViews()},t.prototype.createEmbeddedViewInternal=function(e){return 1==e?new k(this.viewUtils,this,1,this._anchor_1,this._vc_1):null},t}(s.AppView);t.View_MlChip0=A},669:function(e,t,n){"use strict";var i=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},r=n(624),_=n(51),s=n(11),h=n(44),o=n(29),c=n(28),l=n(36),a=n(620),p=function(){function e(){this._changed=!1,this.context=new r.MlChipButton}return e.prototype.ngOnDetach=function(e,t,n){},e.prototype.ngOnDestroy=function(){},e.prototype.ngDoCheck=function(e,t,n){var i=this._changed;return this._changed=!1,i},e.prototype.checkHost=function(e,t,n,i){},e.prototype.handleEvent=function(e,t){var n=!0;return n},e.prototype.subscribe=function(e,t){this._eventHandler=t},e}();t.Wrapper_MlChipButton=p;var u=s.createRenderComponentType("",0,h.ViewEncapsulation.None,[],{}),d=function(e){function t(n,i,r,_){e.call(this,t,u,o.ViewType.HOST,n,i,r,_,c.ChangeDetectorStatus.CheckAlways)}return i(t,e),t.prototype.createInternal=function(e){return this._el_0=s.selectOrCreateRenderHostElement(this.renderer,"ml-chip-button",s.EMPTY_INLINE_ARRAY,e,null),this.compView_0=new x(this.viewUtils,this,0,this._el_0),this._MlChipButton_0_3=new p,this.compView_0.create(this._MlChipButton_0_3.context),this.init(this._el_0,this.renderer.directRenderer?null:[this._el_0],null),new l.ComponentRef_(0,this,this._el_0,this._MlChipButton_0_3.context)},t.prototype.injectorGetInternal=function(e,t,n){return e===r.MlChipButton&&0===t?this._MlChipButton_0_3.context:n},t.prototype.detectChangesInternal=function(e){this._MlChipButton_0_3.ngDoCheck(this,this._el_0,e),this.compView_0.internalDetectChanges(e)},t.prototype.destroyInternal=function(){this.compView_0.destroy()},t.prototype.visitRootNodesInternal=function(e,t){e(this._el_0,t)},t.prototype.visitProjectableNodesInternal=function(e,t,n,i){},t}(_.AppView);t.MlChipButtonNgFactory=new l.ComponentFactory("ml-chip-button",d,r.MlChipButton);var w=[a.styles],f=s.createRenderComponentType("",1,h.ViewEncapsulation.Emulated,w,{}),x=function(e){function t(n,i,r,_){e.call(this,t,f,o.ViewType.COMPONENT,n,i,r,_,c.ChangeDetectorStatus.CheckAlways)}return i(t,e),t.prototype.createInternal=function(e){var t=this.renderer.createViewRoot(this.parentElement);return this._text_0=this.renderer.createText(t,"\n\n",null),this._el_1=s.createRenderElement(this.renderer,t,"button",new s.InlineArray4(4,"class","mdl-chip","type","button"),null),this._text_2=this.renderer.createText(this._el_1,"\n",null),this._el_3=s.createRenderElement(this.renderer,this._el_1,"span",new s.InlineArray2(2,"class","mdl-chip__text"),null),this.projectNodes(this._el_3,0),this._text_4=this.renderer.createText(this._el_1,"\n",null),this._text_5=this.renderer.createText(t,"\n\n",null),this.init(null,this.renderer.directRenderer?null:[this._text_0,this._el_1,this._text_2,this._el_3,this._text_4,this._text_5],null),null},t}(_.AppView);t.View_MlChipButton0=x},704:function(e,t,n){"use strict";var i=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},r=n(645),_=n(51),s=n(11),h=n(44),o=n(29),c=n(28),l=n(36),a=n(623),p=n(668),u=n(624),d=n(669),w=n(545),f=n(552),x=function(){function e(){this._changed=!1,this.context=new r.PagChip}return e.prototype.ngOnDetach=function(e,t,n){},e.prototype.ngOnDestroy=function(){},e.prototype.ngDoCheck=function(e,t,n){var i=this._changed;return this._changed=!1,i},e.prototype.checkHost=function(e,t,n,i){},e.prototype.handleEvent=function(e,t){var n=!0;return n},e.prototype.subscribe=function(e,t){this._eventHandler=t},e}();t.Wrapper_PagChip=x;var g=s.createRenderComponentType("",0,h.ViewEncapsulation.None,[],{}),C=function(e){function t(n,i,r,_){e.call(this,t,g,o.ViewType.HOST,n,i,r,_,c.ChangeDetectorStatus.CheckAlways)}return i(t,e),t.prototype.createInternal=function(e){return this._el_0=s.selectOrCreateRenderHostElement(this.renderer,"ng-component",s.EMPTY_INLINE_ARRAY,e,null),this.compView_0=new I(this.viewUtils,this,0,this._el_0),this._PagChip_0_3=new x,this.compView_0.create(this._PagChip_0_3.context),this.init(this._el_0,this.renderer.directRenderer?null:[this._el_0],null),new l.ComponentRef_(0,this,this._el_0,this._PagChip_0_3.context)},t.prototype.injectorGetInternal=function(e,t,n){return e===r.PagChip&&0===t?this._PagChip_0_3.context:n},t.prototype.detectChangesInternal=function(e){this._PagChip_0_3.ngDoCheck(this,this._el_0,e),this.compView_0.internalDetectChanges(e)},t.prototype.destroyInternal=function(){this.compView_0.destroy()},t.prototype.visitRootNodesInternal=function(e,t){e(this._el_0,t)},t}(_.AppView);t.PagChipNgFactory=new l.ComponentFactory("ng-component",C,r.PagChip);var m=[],y=s.createRenderComponentType("",0,h.ViewEncapsulation.None,m,{}),I=function(e){function t(n,i,r,_){e.call(this,t,y,o.ViewType.COMPONENT,n,i,r,_,c.ChangeDetectorStatus.CheckAlways)}return i(t,e),t.prototype.createInternal=function(e){var t=this.renderer.createViewRoot(this.parentElement);this._text_0=this.renderer.createText(t,"\n\n",null),this._el_1=s.createRenderElement(this.renderer,t,"h5",s.EMPTY_INLINE_ARRAY,null),this._text_2=this.renderer.createText(this._el_1,"Chip",null),this._text_3=this.renderer.createText(t,"\n\n",null),this._el_4=s.createRenderElement(this.renderer,t,"p",s.EMPTY_INLINE_ARRAY,null),this._el_5=s.createRenderElement(this.renderer,this._el_4,"ml-chip",s.EMPTY_INLINE_ARRAY,null),this.compView_5=new p.View_MlChip0(this.viewUtils,this,5,this._el_5),this._MlChip_5_3=new p.Wrapper_MlChip,this._text_6=this.renderer.createText(null,"Chip only text",null),this.compView_5.create(this._MlChip_5_3.context),this._text_7=this.renderer.createText(t,"\n\n",null),this._el_8=s.createRenderElement(this.renderer,t,"p",s.EMPTY_INLINE_ARRAY,null),this._el_9=s.createRenderElement(this.renderer,this._el_8,"ml-chip",new s.InlineArray2(2,"img","assets/img/user.jpg"),null),this.compView_9=new p.View_MlChip0(this.viewUtils,this,9,this._el_9),this._MlChip_9_3=new p.Wrapper_MlChip,this._text_10=this.renderer.createText(null,"Chip with contact image",null),this.compView_9.create(this._MlChip_9_3.context),this._text_11=this.renderer.createText(t,"\n\n",null),this._el_12=s.createRenderElement(this.renderer,t,"p",s.EMPTY_INLINE_ARRAY,null),this._el_13=s.createRenderElement(this.renderer,this._el_12,"ml-chip",new s.InlineArray2(2,"letter","A"),null),this.compView_13=new p.View_MlChip0(this.viewUtils,this,13,this._el_13),this._MlChip_13_3=new p.Wrapper_MlChip,this._text_14=this.renderer.createText(null,"Chip with contact letter",null),this.compView_13.create(this._MlChip_13_3.context),this._text_15=this.renderer.createText(t,"\n\n",null),this._el_16=s.createRenderElement(this.renderer,t,"p",s.EMPTY_INLINE_ARRAY,null),this._text_17=this.renderer.createText(this._el_16,"\n  ",null),this._el_18=s.createRenderElement(this.renderer,this._el_16,"ml-chip",new s.InlineArray4(4,"deletable","true","img","assets/img/user.jpg"),null),this.compView_18=new p.View_MlChip0(this.viewUtils,this,18,this._el_18),this._MlChip_18_3=new p.Wrapper_MlChip,this._text_19=this.renderer.createText(null,"\n    Image, deletable button and callback Fn\n  ",null),this.compView_18.create(this._MlChip_18_3.context),this._text_20=this.renderer.createText(this._el_16,"\n",null),this._text_21=this.renderer.createText(t,"\n\n",null),this._el_22=s.createRenderElement(this.renderer,t,"p",s.EMPTY_INLINE_ARRAY,null),this._el_23=s.createRenderElement(this.renderer,this._el_22,"ml-chip-button",s.EMPTY_INLINE_ARRAY,null),this.compView_23=new d.View_MlChipButton0(this.viewUtils,this,23,this._el_23),this._MlChipButton_23_3=new d.Wrapper_MlChipButton,this._text_24=this.renderer.createText(null,"Chip button, click me!",null),this.compView_23.create(this._MlChipButton_23_3.context),this._text_25=this.renderer.createText(t,"\n\n",null),this._el_26=s.createRenderElement(this.renderer,t,"view-source",new s.InlineArray2(2,"uri","chip/pagChip.ts"),null),this.compView_26=new f.View_ViewSourceCmp0(this.viewUtils,this,26,this._el_26),this._ViewSourceCmp_26_3=new f.Wrapper_ViewSourceCmp,this.compView_26.create(this._ViewSourceCmp_26_3.context),this._text_27=this.renderer.createText(t,"\n\n",null);var n=s.subscribeToRenderElement(this,this._el_23,new s.InlineArray2(2,"click",null),this.eventHandler(this.handleEvent_23));return this.init(null,this.renderer.directRenderer?null:[this._text_0,this._el_1,this._text_2,this._text_3,this._el_4,this._el_5,this._text_6,this._text_7,this._el_8,this._el_9,this._text_10,this._text_11,this._el_12,this._el_13,this._text_14,this._text_15,this._el_16,this._text_17,this._el_18,this._text_19,this._text_20,this._text_21,this._el_22,this._el_23,this._text_24,this._text_25,this._el_26,this._text_27],[n]),null},t.prototype.injectorGetInternal=function(e,t,n){return e===a.MlChip&&5<=t&&t<=6?this._MlChip_5_3.context:e===a.MlChip&&9<=t&&t<=10?this._MlChip_9_3.context:e===a.MlChip&&13<=t&&t<=14?this._MlChip_13_3.context:e===a.MlChip&&18<=t&&t<=19?this._MlChip_18_3.context:e===u.MlChipButton&&23<=t&&t<=24?this._MlChipButton_23_3.context:e===w.ViewSourceCmp&&26===t?this._ViewSourceCmp_26_3.context:n},t.prototype.detectChangesInternal=function(e){this._MlChip_5_3.ngDoCheck(this,this._el_5,e);var t="assets/img/user.jpg";this._MlChip_9_3.check_img(t,e,!1),this._MlChip_9_3.ngDoCheck(this,this._el_9,e);var n="A";this._MlChip_13_3.check_letter(n,e,!1),this._MlChip_13_3.ngDoCheck(this,this._el_13,e);var i="true";this._MlChip_18_3.check_deletable(i,e,!1);var r="assets/img/user.jpg";this._MlChip_18_3.check_img(r,e,!1);var _=this.context.deleteFn;this._MlChip_18_3.check_action(_,e,!1),this._MlChip_18_3.ngDoCheck(this,this._el_18,e),this._MlChipButton_23_3.ngDoCheck(this,this._el_23,e);var s="chip/pagChip.ts";this._ViewSourceCmp_26_3.check_uri(s,e,!1),this._ViewSourceCmp_26_3.ngDoCheck(this,this._el_26,e),this.compView_5.internalDetectChanges(e),this.compView_9.internalDetectChanges(e),this.compView_13.internalDetectChanges(e),this.compView_18.internalDetectChanges(e),this.compView_23.internalDetectChanges(e),this.compView_26.internalDetectChanges(e)},t.prototype.destroyInternal=function(){this.compView_5.destroy(),this.compView_9.destroy(),this.compView_13.destroy(),this.compView_18.destroy(),this.compView_23.destroy(),this.compView_26.destroy()},t.prototype.visitProjectableNodesInternal=function(e,t,n,i){5==e&&0==t&&n(this._text_6,i),9==e&&0==t&&n(this._text_10,i),13==e&&0==t&&n(this._text_14,i),18==e&&0==t&&n(this._text_19,i),23==e&&0==t&&n(this._text_24,i)},t.prototype.handleEvent_23=function(e,t){this.markPathToRootAsCheckOnce();var n=!0;if("click"==e){var i=this.context.onClickChip()!==!1;n=i&&n}return n},t}(_.AppView);t.View_PagChip0=I},725:function(e,t,n){"use strict";var i=function(){function e(){}return e}();t.MlChipMod=i},752:function(e,t,n){"use strict";var i=function(){function e(){}return e}();t.PagChipMod=i}});