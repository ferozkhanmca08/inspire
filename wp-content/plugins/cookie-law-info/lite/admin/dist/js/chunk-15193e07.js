(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15193e07"],{"13e6":function(t,e,i){},"250b":function(t,e,i){"use strict";i("e7be")},"2a50":function(t,e,i){"use strict";i("3c33")},3337:function(t,e,i){"use strict";var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"cky-empty-state"},[e("cky-icon",{attrs:{icon:t.icon,width:t.width,height:t.height}}),e("p",{staticClass:"cky-empty-message"},[t._v(t._s(t.emptyMessage))])],1)},a=[],s=i("1f3d"),n={name:"empty",components:{CkyIcon:s["a"]},props:{emptyMessage:{type:String,default:""},icon:{type:String,default:"blank"},width:{type:String,default:"60px"},height:{type:String,default:"60px"}}},c=n,r=i("2877"),l=Object(r["a"])(c,o,a,!1,null,null,null);e["a"]=l.exports},"3c33":function(t,e,i){},"40a1":function(t,e,i){"use strict";var o=function(){var t=this,e=t._self._c;return e("cky-modal",{ref:"CkyHeadsUpPopup",staticClass:"cky-headsup-popup",on:{close:t.clearHeadsUpPopup},scopedSlots:t._u([{key:"header",fn:function(){return[e("h4",[t._v(" "+t._s(t.header)+" ")])]},proxy:!0},{key:"body",fn:function(){return[e("p",{domProps:{innerHTML:t._s(t.body)}})]},proxy:!0},{key:"footer",fn:function(){return[e("div",{staticClass:"cky-app-modal-actions cky-justify-end"},[e("button",{staticClass:"cky-button cky-button-outline-secondary",on:{click:t.closePopup}},[t._v(" "+t._s(t.cancelBtn)+" ")]),e("cky-button",{staticClass:"cky-button-danger",nativeOn:{click:function(e){return t.confirmDelete.apply(null,arguments)}}},[t._v(" "+t._s(t.confirmBtn)+" ")])],1)]},proxy:!0}])})},a=[],s=i("8a80"),n={name:"CkyHeadsUpPopup",components:{CkyModal:s["a"]},props:{header:{type:String,required:!0},body:{type:String,required:!0},cancelBtn:{type:String,required:!0},confirmBtn:{type:String,required:!0}},methods:{clearHeadsUpPopup(){this.$emit("clear")},closePopup(){this.$refs.CkyHeadsUpPopup.close(),this.clearHeadsUpPopup()},confirmDelete(){this.$emit("deleteItem")},show(){this.$refs.CkyHeadsUpPopup.show()}}},c=n,r=i("2877"),l=Object(r["a"])(c,o,a,!1,null,null,null);e["a"]=l.exports},"76e6":function(t,e,i){"use strict";i.d(e,"a",(function(){return j}));var o,a=Symbol(),s=Symbol(),n=Symbol(),c=Symbol(),r=function(t){return"frag"in t},l={get:function(){return this[s]||this.parentElement},configurable:!0},u=function(t,e){s in t||(t[s]=e,Object.defineProperty(t,"parentNode",l))},d={get:function(){var t=this.parentNode.childNodes,e=t.indexOf(this);return e>-1&&t[e+1]||null}},k=function(t){n in t||(t[n]=!0,Object.defineProperty(t,"nextSibling",d))},y=function(t,e){while(t.parentNode!==e){var i=t,o=i.parentNode;o&&(t=o)}return t},p=function(t){if(!o){var e=Object.getOwnPropertyDescriptor(Node.prototype,"childNodes");o=e.get}var i=o.apply(t),a=Array.from(i).map((function(e){return y(e,t)}));return a.filter((function(t,e){return t!==a[e-1]}))},h={get:function(){return this.frag||p(this)}},g={get:function(){return this.childNodes[0]||null}};function f(){return this.childNodes.length>0}var v=function(t){c in t||(t[c]=!0,Object.defineProperties(t,{childNodes:h,firstChild:g}),t.hasChildNodes=f)};function C(){var t;(t=this.frag[0]).before.apply(t,arguments)}function b(){var t=this.frag,e=t.splice(0,t.length);e.forEach((function(t){t.remove()}))}var m=function t(e){var i;return(i=Array.prototype).concat.apply(i,e.map((function(e){return r(e)?t(e.frag):e})))},_=function(t,e){var i=t[a];e.before(i),u(i,t),t.frag.unshift(i)};function w(t){if(r(this)){var e=this.frag.indexOf(t);if(e>-1){var i=this.frag.splice(e,1),o=i[0];0===this.frag.length&&_(this,o),t.remove()}}else{var a=p(this),s=a.indexOf(t);s>-1&&t.remove()}return t}function $(t,e){var i=this,o=t.frag||[t];if(r(this)){if(t[s]===this&&t.parentElement)return t;var a=this.frag;if(e){var n=a.indexOf(e);n>-1&&(a.splice.apply(a,[n,0].concat(o)),e.before.apply(e,o))}else{var c=a[a.length-1];a.push.apply(a,o),c.after.apply(c,o)}O(this)}else e?this.childNodes.includes(e)&&e.before.apply(e,o):this.append.apply(this,o);o.forEach((function(t){u(t,i)}));var l=o[o.length-1];return k(l),t}function x(t){if(t[s]===this&&t.parentElement)return t;var e=this.frag,i=e[e.length-1];return i.after(t),u(t,this),O(this),e.push(t),t}var O=function(t){var e=t[a];t.frag[0]===e&&(t.frag.shift(),e.remove())},T={set:function(t){var e=this;if(this.frag[0]!==this[a]&&this.frag.slice().forEach((function(t){return e.removeChild(t)})),t){var i=document.createElement("div");i.innerHTML=t,Array.from(i.childNodes).forEach((function(t){e.appendChild(t)}))}},get:function(){return""}},S={inserted:function(t){var e=t.parentNode,i=t.nextSibling,o=t.previousSibling,s=Array.from(t.childNodes),n=document.createComment("");0===s.length&&s.push(n),t.frag=s,t[a]=n;var c=document.createDocumentFragment();c.append.apply(c,m(s)),t.replaceWith(c),s.forEach((function(e){u(e,t),k(e)})),v(t),Object.assign(t,{remove:b,appendChild:x,insertBefore:$,removeChild:w,before:C}),Object.defineProperty(t,"innerHTML",T),e&&(Object.assign(e,{removeChild:w,insertBefore:$}),u(t,e),v(e)),i&&k(t),o&&k(o)},unbind:function(t){t.remove()}},j={name:"Fragment",directives:{frag:S},render:function(t){return t("div",{directives:[{name:"frag"}]},this.$slots["default"])}}},"943d":function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"cky-section cky-section-cookies cky-zero--padding cky-zero--margin"},[e("cky-connect-success"),e("div",{staticClass:"cky-section-header cky-align-center cky-justify-between"}),e("div",{staticClass:"cky-section-content"},[e("div",{staticClass:"cky-row"},[e("div",{staticClass:"cky-col-12"},[e("div",{staticClass:"cky-nav-tab cky-horizontal-tab cky-nav-tab-manage-cookies",attrs:{role:"navigation"}},[e("div",{staticClass:"cky-nav-tabs-container cky-justify-between"},[e("ul",{staticClass:"cky-horizontal-tabs"},[e("li",{staticClass:"cky-nav-tab-item active"},[e("button",{staticClass:"cky-nav-tab-button cky-center"},[e("span",{staticClass:"cky-nav-tab-item-title"},[t._v(" "+t._s(t.$i18n.__("Cookie List","cookie-law-info"))+" ")])])]),e("li",{staticClass:"cky-nav-tab-item cky-center"},[e("cky-popper",{attrs:{content:t.$i18n.__("To access this feature, connect to a CookieYes free account.","cookie-law-info"),position:"right"}},[e("button",{staticClass:"cky-nav-tab-button cky-disabled",attrs:{disabled:!0}},[e("span",{staticClass:"cky-nav-tab-item-title"},[t._v(" "+t._s(t.$i18n.__("Scan History","cookie-law-info"))+" ")])])])],1)]),e("cky-feature",{attrs:{disabled:!0,description:t.$i18n.__("Initiate an automatic scan of your website and generate a detailed cookie list by connecting to the CookieYes web app.","cookie-law-info"),name:"custom_branding",target:"cky-cookies-scanner-btn",position:"left"}},[e("button",{staticClass:"cky-button",attrs:{id:"cky-cookies-scanner-btn"}},[t._v(" "+t._s(t.$i18n.__("Scan website for cookies","cookie-law-info"))+" ")])])],1),e("div",{staticClass:"cky-nav-tab-content-container"},[e("tab-cookies")],1)])])])])],1)},a=[],s=i("2f62"),n=function(){var t=this,e=t._self._c;return e("fragment",[e("div",{staticClass:"cky-nav-tab-section cky-nav-tab-section-cookies"},[t.isLoaded?e("cky-nav-tabs",{attrs:{onTabChange:t.loadCookies}},t._l(t.categories,(function(i){return e("cky-nav-tab",{key:i.id,class:[{"cky-app-rtl":t.isRTLLanguage(t.language)}],attrs:{title:i.name[t.language],subTitle:t.getCookiesCountText(i.cookie_list),meta:i}},[e("div",{staticClass:"cky-nav-tab-section"},[e("div",{staticClass:"cky-justify-between cky-row cky-cookie-list-title"},[e("div",{staticClass:"cky-col-4 cky-align-center"},[e("h4",{staticClass:"cky-cookies-header"},[t._v(" "+t._s(t.$i18n.__("Cookie List","cookie-law-info"))+" ")]),e("button",{staticClass:"cky-add-cookie-button cky-button cky-button-outline",on:{click:function(e){return t.openCookieModal()}}},[t._v(" "+t._s(t.$i18n.__(" + Add Cookie","cookie-law-info"))+" ")])]),e("div",{staticClass:"cky-col-8 cky-align-center cky-justify-end"},[e("h5",{staticClass:"cky-cookies-header cky-language-label"},[t._v(" "+t._s(t.$i18n.__("Edit content in: ","cookie-law-info"))+" ")]),e("cky-select",{attrs:{id:"cky-dropdown-languages",options:t.selectedLanguages,label:"name",tag:"code"},model:{value:t.language,callback:function(e){t.language=e},expression:"language"}})],1)]),e("div",{staticClass:"cky-nav-tab-section-header cky-align-center cky-justify-between"},[e("div",{staticClass:"cky-nav-tab-section-title"},[e("div",{staticClass:"cky-cookies-title"},[e("h5",[t._v(" "+t._s(i.name[t.language])+" ")]),e("cky-popper",{attrs:{content:t.$i18n.__("Edit category","cookie-law-info")}},[e("button",{staticClass:"cky-button-no-style",on:{click:function(e){return t.openCookieCategoryModal(i)}}},[e("cky-icon",{attrs:{width:"14px",icon:"edit",color:"#000000"}})],1)])],1),e("div",{staticClass:"cky-category-description"},[t._v(" "+t._s(t.strippedContent(i.description[t.language]))+" ")])])]),e("div",{staticClass:"cky-nav-tab-section-content"},[e("cky-cookies-table",{attrs:{cookies:i.cookie_list,language:t.language},on:{createEditCookie:t.openCookieModal,deleteCookie:t.deleteCookieConfirmation}})],1)])])})),1):e("div",{staticClass:"cky-nav-tab cky-vertical-tab"},[e("div",{staticClass:"cky-nav-tabs-container"},[e("ul",{staticClass:"cky-vertical-tabs",staticStyle:{padding:"15px"}},[e("li",[e("cky-card-loader")],1),e("li",[e("cky-card-loader")],1)])]),e("div",{staticClass:"cky-nav-tab-content-container"},[e("div",{staticClass:"cky-nav-tab-content"},[e("cky-card-loader"),e("cky-card-loader")],1)])])],1),e("cky-modal",{ref:"ckyCookieModal",class:["cky-app-modal-cookies",{"cky-app-rtl":t.isRTLLanguage(t.language)}],on:{close:t.clearCookieModal},scopedSlots:t._u([{key:"header",fn:function(){return[t.cookie.id?e("h4",[t._v(" "+t._s(t.$i18n.__("Edit Cookie","cookie-law-info"))+" ")]):e("h4",[t._v(" "+t._s(t.$i18n.__("New Cookie","cookie-law-info"))+" ")])]},proxy:!0},{key:"body",fn:function(){return[e("div",{staticClass:"cky-row"},[e("div",{staticClass:"cky-col-6"},[e("div",{staticClass:"cky-form-group"},[e("label",{staticClass:"cky-label"},[t._v(t._s(t.$i18n.__("Cookie ID","cookie-law-info"))+" "),e("span",{staticClass:"cky-required"})]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.currentCookie.name,expression:"currentCookie.name"}],staticClass:"cky-form-control",attrs:{type:"text"},domProps:{value:t.currentCookie.name},on:{input:function(e){e.target.composing||t.$set(t.currentCookie,"name",e.target.value)}}}),t.errors.cookie.id?e("div",{staticClass:"cky-input-error-alert",attrs:{show:""}},[t._v(" "+t._s(t.$i18n.__("Cookie ID is required","cookie-law-info"))+" ")]):t._e()])]),e("div",{staticClass:"cky-col-6"},[e("div",{staticClass:"cky-form-group"},[e("label",{staticClass:"cky-label"},[t._v(" "+t._s(t.$i18n.__("Domain","cookie-law-info"))+" "),e("span",{staticClass:"cky-required"})]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.currentCookie.domain,expression:"currentCookie.domain"}],staticClass:"cky-form-control",attrs:{type:"text"},domProps:{value:t.currentCookie.domain},on:{input:function(e){e.target.composing||t.$set(t.currentCookie,"domain",e.target.value)}}}),t.errors.cookie.domain?e("div",{staticClass:"cky-input-error-alert",attrs:{show:""}},[t._v(" "+t._s(t.$i18n.__("Domain is required","cookie-law-info"))+" ")]):t._e()])])]),e("div",{staticClass:"cky-row"},[e("div",{staticClass:"cky-col-6"},[e("div",{staticClass:"cky-form-group"},[e("label",{staticClass:"cky-label"},[t._v(" "+t._s(t.$i18n.__("Duration","cookie-law-info"))+" "),e("span",{staticClass:"cky-required"})]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.currentCookie.duration[t.language],expression:"currentCookie.duration[language]"}],staticClass:"cky-form-control",attrs:{type:"text",required:""},domProps:{value:t.currentCookie.duration[t.language]},on:{input:function(e){e.target.composing||t.$set(t.currentCookie.duration,t.language,e.target.value)}}}),t.errors.cookie.duration?e("div",{staticClass:"cky-input-error-alert",attrs:{show:""}},[t._v(" "+t._s(t.$i18n.__("Duration is required","cookie-law-info"))+" ")]):t._e()])]),e("div",{staticClass:"cky-col-6"},[e("div",{staticClass:"cky-form-group"},[e("label",{staticClass:"cky-label"},[t._v(" "+t._s(t.$i18n.__("Category","cookie-law-info"))+" "),e("span",{staticClass:"cky-required"})]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.currentCookie.category,expression:"currentCookie.category"}],ref:"ckyDropDownCategories",staticClass:"cky-select",attrs:{id:"cky-dropdown-categories",disabled:t.disabled},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.currentCookie,"category",e.target.multiple?i:i[0])}}},t._l(t.cookieGroups,(function(i){return e("option",{key:i.id,domProps:{value:i.id}},[t._v(" "+t._s(i.name[t.language])+" ")])})),0)])])]),e("div",{staticClass:"cky-row"},[e("div",{staticClass:"cky-col-12"},[e("div",{staticClass:"cky-form-group"},[e("label",{staticClass:"cky-label"},[t._v(t._s(t.$i18n.__("Description","cookie-law-info"))+" "),e("span",{staticClass:"cky-required"})]),e("wp-editor",{attrs:{language:t.language,height:"100"},model:{value:t.currentCookie.description[t.language],callback:function(e){t.$set(t.currentCookie.description,t.language,e)},expression:"currentCookie.description[language]"}}),t.errors.cookie.description?e("div",{staticClass:"cky-input-error-alert",attrs:{show:""}},[t._v(" "+t._s(t.$i18n.__("Description is required","cookie-law-info"))+" ")]):t._e()],1)])]),e("div",{staticClass:"cky-row"},[e("div",{staticClass:"cky-col-12"},[e("cky-accordion",{attrs:{name:"cookies"}},[e("cky-accordion-item",[e("template",{slot:"cky-accordion-trigger"},[e("label",{staticClass:"cky-app-accordion-title"},[t._v("Advanced Options")])]),e("template",{slot:"cky-accordion-content"},[e("label",{staticClass:"cky-label",attrs:{for:""}},[t._v(" "+t._s(t.$i18n.__("Script URL Pattern","cookie-law-info"))+" "),e("cky-popper",{attrs:{content:t.$i18n.__("Our auto-blocking mechanism will use the Script URL Pattern to identify the third-party script (setting a cookie) by purpose category, and consequently, the associated cookie will be automatically blocked prior to receiving user consent for the respective category.","cookie-law-info"),position:"right"}})],1),e("div",{staticClass:"cky-help-text"},[e("p",[t._v(" "+t._s(t.$i18n.__("URL pattern for blocking the third-party script settings of this cookie","cookie-law-info"))+" ")])]),e("cky-notice",{attrs:{type:"warning"}},[e("p",[t._v(" If the third-party script setting this cookie is <script async src='https://www.google-analytics.com/analytics.js'><\/script> then you can specify its \"Script URL Pattern\" as "),e("b",[t._v("google-analytics.com")])])]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.currentCookie.url_pattern,expression:"currentCookie.url_pattern"}],staticClass:"cky-form-control",attrs:{type:"text",placeholder:"Please enter a valid Script URL Pattern. Eg:- google-analytics.com"},domProps:{value:t.currentCookie.url_pattern},on:{input:function(e){e.target.composing||t.$set(t.currentCookie,"url_pattern",e.target.value)}}})],1)],2)],1)],1)])]},proxy:!0},{key:"footer",fn:function(){return[e("div",{staticClass:"cky-app-modal-actions cky-justify-end"},[e("button",{staticClass:"cky-button cky-button-outline-secondary",on:{click:t.closeCookieModal}},[t._v(" "+t._s(t.$i18n.__("Cancel","cookie-law-info"))+" ")]),e("cky-button",{ref:"ckyButtonCreateEditCookie",staticClass:"cky-button-primary",nativeOn:{click:function(e){return t.addOrEditCookie.apply(null,arguments)}}},[t._v(" "+t._s(t.$i18n.__("Save Changes","cookie-law-info"))+" ")])],1)]},proxy:!0}])}),e("cky-modal",{ref:"ckyCookieCategoryModal",class:["cky-app-modal-cookies-categories",{"cky-app-rtl":t.isRTLLanguage(t.language)}],on:{close:t.clearCategoryModal},scopedSlots:t._u([{key:"header",fn:function(){return[e("h4",[t._v(" "+t._s(t.$i18n.__("Edit Category","cookie-law-info"))+" ")])]},proxy:!0},t.isCategoryLoaded?{key:"body",fn:function(){return[e("div",{staticClass:"cky-row"},[e("div",{staticClass:"cky-col-12"},[e("div",{staticClass:"cky-form-group"},[e("label",{staticClass:"cky-label"},[t._v(t._s(t.$i18n.__("Name","cookie-law-info"))+" "),e("span",{staticClass:"cky-required"})]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.currentCategory.name[t.language],expression:"currentCategory.name[language]"}],staticClass:"cky-form-control",attrs:{type:"text",required:""},domProps:{value:t.currentCategory.name[t.language]},on:{input:function(e){e.target.composing||t.$set(t.currentCategory.name,t.language,e.target.value)}}}),t.errors.category.name?e("div",{staticClass:"cky-input-error-alert",attrs:{show:""}},[t._v(" "+t._s(t.$i18n.__("Name is required","cookie-law-info"))+" ")]):t._e()])]),e("div",{staticClass:"cky-col-6"})]),e("div",{staticClass:"cky-row"},[e("div",{staticClass:"cky-col-12"},[e("div",{staticClass:"cky-form-group"},[e("label",{staticClass:"cky-label"},[t._v(t._s(t.$i18n.__("Description","cookie-law-info"))+" "),e("span",{staticClass:"cky-required"})]),e("wp-editor",{attrs:{language:t.language,height:"100"},model:{value:t.currentCategory.description[t.language],callback:function(e){t.$set(t.currentCategory.description,t.language,e)},expression:"currentCategory.description[language]"}}),t.errors.category.description?e("div",{staticClass:"cky-input-error-alert",attrs:{show:""}},[t._v(" "+t._s(t.$i18n.__("Description is required","cookie-law-info"))+" ")]):t._e()],1)])])]},proxy:!0}:null,{key:"footer",fn:function(){return[e("div",{staticClass:"cky-app-modal-actions cky-justify-end"},[e("button",{staticClass:"cky-button cky-button-outline-secondary",on:{click:t.closeCookieCategoryModal}},[t._v(" "+t._s(t.$i18n.__("Cancel","cookie-law-info"))+" ")]),e("cky-button",{ref:"ckyButtonCreateEditCookieCategory",staticClass:"cky-button-primary",nativeOn:{click:function(e){return t.addOrEditCookieCategory.apply(null,arguments)}}},[t._v(" "+t._s(t.$i18n.__("Save Changes","cookie-law-info"))+" ")])],1)]},proxy:!0}],null,!0)},[t._v(" > ")]),e("CkyHeadsUpPopup",{ref:"ckyHeadsUpPopup",attrs:{header:this.messages.header,body:this.bodyContent,cancelBtn:this.messages.cancelBtn,confirmBtn:this.messages.confirmBtn},on:{deleteItem:t.deleteCookie,clear:t.clearHeadsUpPopup}})],1)},c=[],r=i("a2b6"),l=i("1f3d"),u=function(){var t=this,e=t._self._c;return e("div",{class:t.tabClass,attrs:{role:"navigation"}},[e("div",{staticClass:"cky-nav-tabs-container"},[e("ul",{class:t.tabItemClass},t._l(t.tabs,(function(i,o){return e("li",{directives:[{name:"show",rawName:"v-show",value:i.title,expression:"tab.title"}],key:i.key,class:["cky-nav-tab-item",{active:i.isActive},{valid:o<t.activeTabIndex}],attrs:{index:o}},[e("button",{staticClass:"cky-nav-tab-button",class:{"cky-nav-tab-has-subtitle":!0===t.hasSubTitle(i)},on:{click:function(e){return t.navigateToTab(o)}}},[e("span",{staticClass:"cky-nav-tab-item-title"},[t._v(" "+t._s(i.title)+" ")]),e("span",{staticClass:"cky-nav-tab-sub-title",attrs:{"v-if":t.hasSubTitle(i)}},[t._v(t._s(i.subTitle))]),"step"===t.type&&i.step?e("span",{staticClass:"cky-nav-tab-icon"},[t._v(t._s(i.step))]):t._e()])])})),0)]),e("div",{staticClass:"cky-nav-tab-content-container"},[t._t("default")],2)])},d=[],k={name:"CkyNavTabs",props:{onTabChange:{type:Function},type:{type:String,default:"vertical"}},data(){return{activeTabIndex:0,actualIndex:1,rawTabs:[]}},created(){this.rawTabs=this.$children},methods:{setActiveTab(t){this.tabs.forEach(e=>{e.isActive=e.title===t.title})},navigateToTab(t){this.changeTab(this.activeTabIndex,t)},changeTab(t,e){let i=this.tabs[t],o=this.tabs[e];i&&(i.isActive=!1),o&&(o.isActive=!0,this.runCallback(o)),this.activeTabIndex=e},getActiveTab(){let t=!1;return this.tabs.forEach(e=>{!0===e.isActive&&(t=e)}),t},setDefaultActiveTab(){this.tabs[0]&&(this.tabs[0].isActive=!0)},hasSubTitle(t){return!!t.subTitle},runCallback(t){this.onTabChange&&this.onTabChange(t)}},mounted(){this.setDefaultActiveTab(),this.runCallback(this.getActiveTab())},computed:{tabClass(){return{"cky-nav-tab":!0,"cky-vertical-tab":"vertical"===this.type,"cky-horizontal-tab":"horizontal"===this.type}},tabItemClass(){return{"cky-vertical-tabs":"vertical"===this.type,"cky-horizontal-tabs":"horizontal"===this.type,"cky-step-tabs":"step"===this.type}},tabCount(){return this.tabs.length},isLastTab(){return this.activeTabIndex===this.tabCount-1},tabs(){const t=this.rawTabs;let e=1;return t.map((function(t){return""!=t.title&&(t.step=e,e+=1),t})),t}}},y=k,p=i("2877"),h=Object(p["a"])(y,u,d,!1,null,null,null),g=h.exports,f=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"cky-nav-tab-content"},[t._t("default")],2)},v=[],C={name:"CkyNavTab",props:{title:{type:String,required:!0},subTitle:{type:String,default:""},selected:{type:Boolean,default:!1},icon:{type:[Boolean,String],default:!1},meta:{type:[Array,String,Object],default:()=>({})}},data(){return{isActive:!1,iconClass:""}},computed:{href(){return"#"+this.title.toLowerCase().replace(/ /g,"-")}},mounted(){this.isActive=this.selected,this.iconClass=this.icon}},b=C,m=Object(p["a"])(b,f,v,!1,null,null,null),_=m.exports,w=function(){var t=this,e=t._self._c;return e("div",[t.cookies.length?[e("div",{staticClass:"cky-cookie-list"},[t.discovered.length?e("div",[e("label",{staticClass:"cky-cookie-type-title"},[t._v(" "+t._s(t.$i18n.__("Discovered Cookies","cookie-law-info"))+" ")]),t._l(t.discovered,(function(i,o){return e("div",{key:o,staticClass:"cky-row cky-justify-between cky-align-center cky-cookie-details"},[e("div",{staticClass:"cky-cookie-details-content cky-col-10"},[e("table",[e("tbody",[e("tr",[e("th",[t._v(t._s(t.$i18n.__("Cookie","cookie-law-info")))]),e("td",[t._v(t._s(i.name))])]),e("tr",[e("th",[t._v(t._s(t.$i18n.__("Duration","cookie-law-info")))]),e("td",[t._v(t._s(i.duration[t.language]))])]),e("tr",[e("th",[t._v(t._s(t.$i18n.__("Description","cookie-law-info")))]),e("td",[t._v(t._s(i.description[t.language]))])])])])]),e("div",{staticClass:"cky-cookie-details-actions cky-col-2 cky-justify-end"},[e("button",{staticClass:"cky-button-no-style"},[e("cky-icon",{staticClass:"cky-nav-tab-button-icon",attrs:{icon:"edit",height:"14"},on:{click:function(e){return t.openCookieModal(i)}}})],1),e("button",{staticClass:"cky-button-no-style"},[e("cky-icon",{staticClass:"cky-nav-tab-button-icon",attrs:{icon:"trash",height:"14",color:"#eb4034"},on:{click:function(e){return t.deleteCookie(i)}}})],1)])])}))],2):t._e(),t.selfDeclared.length?e("div",[e("label",{staticClass:"cky-cookie-type-title"},[t._v(" "+t._s(t.$i18n.__("Self-declared Cookies","cookie-law-info"))+" ")]),t._l(t.selfDeclared,(function(i,o){return e("div",{key:o,staticClass:"cky-row cky-justify-between cky-align-center cky-cookie-details"},[e("div",{staticClass:"cky-cookie-details-content cky-col-10"},[e("table",[e("tbody",[e("tr",[e("th",[t._v(t._s(t.$i18n.__("Cookie","cookie-law-info")))]),e("td",[t._v(t._s(i.name))])]),e("tr",[e("th",[t._v(t._s(t.$i18n.__("Duration","cookie-law-info")))]),e("td",[t._v(t._s(i.duration[t.language]))])]),e("tr",[e("th",[t._v(t._s(t.$i18n.__("Description","cookie-law-info")))]),e("td",[t._v(t._s(t.strippedContent(i.description[t.language])))])])])])]),e("div",{staticClass:"cky-cookie-details-actions cky-col-2 cky-justify-end"},[e("cky-popper",{attrs:{content:t.$i18n.__("Edit cookie","cookie-law-info")}},[e("button",{staticClass:"cky-button-no-style"},[e("cky-icon",{staticClass:"cky-nav-tab-button-icon",attrs:{icon:"edit",height:"14px",color:"#000000"},on:{click:function(e){return t.openCookieModal(i)}}})],1)]),e("cky-popper",{attrs:{content:t.$i18n.__("Delete cookie","cookie-law-info")}},[e("button",{staticClass:"cky-button-no-style"},[e("cky-icon",{staticClass:"cky-nav-tab-button-icon",attrs:{icon:"trash",height:"14px",color:"#eb4034"},on:{click:function(e){return t.deleteCookie(i)}}})],1)])],1)])}))],2):t._e()])]:[e("div",{staticClass:"cky-empty-place-holder-container"},[e("div",{staticClass:"cky-emply-placeholder"},[e("cky-empty",{attrs:{height:"100px",width:"100px",emptyMessage:t.$i18n.__("No cookies found for this category!","cookie-law-info")}})],1)])]],2)},$=[],x=i("3337"),O={name:"CkyCookiesTable",components:{CkyIcon:l["a"],CkyEmpty:x["a"]},props:{cookies:{type:[Array,Object]},language:String},data(){return{isModalVisible:!1,checkedItems:[],currentCookieAction:""}},methods:{openCookieModal(t){this.$emit("createEditCookie",t)},deleteCookie(t){this.$emit("deleteCookie",t)},closeModal(){this.isModalVisible=!1},strippedContent(t){return t?t.replace(/(<([^>]+)>)/gi,""):""}},computed:{selectAll:{get:function(){return!!this.cookies.length&&(!!this.cookies&&this.checkedItems.length==this.cookies.length)},set:function(t){var e=[];t&&this.cookies.forEach((function(t){e.push(t.id)})),this.checkedItems=e}},discovered:function(){return this.cookies.filter(t=>1==t.discovered)},selfDeclared:function(){return this.cookies.filter(t=>0==t.discovered)}}},T=O,S=(i("e6b3"),Object(p["a"])(T,w,$,!1,null,"68059496",null)),j=S.exports,L=i("a9e4"),N=i("8a80"),E=i("a9f4"),P=i("b02b"),M=i("462b"),I=function(){var t=this,e=t._self._c;return e("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedOption,expression:"selectedOption"}],staticClass:"cky-select",on:{input:e=>{t.$emit("input",e.target.value)},change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedOption=e.target.multiple?i:i[0]}}},t._l(t.options,(function(i){return e("option",{key:t.getOptionKey(i),domProps:{value:t.getOptionKey(i)}},[t._v(" "+t._s(t.getOptionLabel(i))+" ")])})),0)},A=[],D={name:"CkySelect",props:{value:null,options:{type:[Object,Array],required:!0},placeholder:{type:String,Default:""},label:{type:String,default:"label"},tag:{type:String,default:"id"}},data(){return{selectedOption:null}},mounted(){this.selectedOption=this.value},methods:{getOptionLabel(t){return"object"===typeof t?t[this.label]?t[this.label]:console.warn(`[vue-select warn]: Label key "option.${this.label}" does not exist in options object ${JSON.stringify(t)}.\n`):t},getOptionKey(t){return"object"===typeof t?Object.prototype.hasOwnProperty.call(t,this.tag)?t[this.tag]:console.warn(`[vue-select warn]: Label key "option.${this.tag}" does not exist in options object ${JSON.stringify(t)}.\n`):t}},watch:{value:function(t){this.selectedOption=t}}},q=D,H=Object(p["a"])(q,I,A,!1,null,null,null),B=H.exports,U=i("17aa"),F=i("df44"),z=i("76e6"),R=i("40a1"),V={name:"TabCookies",components:{CkyIcon:l["a"],CkyNavTab:_,CkyNavTabs:g,CkyCookiesTable:j,CkyModal:N["a"],CkyHeadsUpPopup:R["a"],CkyAccordion:E["a"],CkyAccordionItem:P["a"],CkyNotice:M["a"],CkySelect:B,CkyCardLoader:U["a"],WpEditor:F["a"],Fragment:z["a"]},data(){return{cookie:{},category:{},categoryCookies:[],cookies:[],cookieName:!1,cookieId:!1,currentTab:"layout",cookieCategories:[],loading:!1,currentLanguage:"",errors:{cookie:{id:!1,domain:!1,duration:!1,description:!1},category:{name:!1,description:!1}},messages:{header:this.$i18n.__("Delete cookie?","cookie-law-info"),cancelBtn:this.$i18n.__("Cancel","cookie-law-info"),confirmBtn:this.$i18n.__("Delete cookie","cookie-law-info")}}},async mounted(){this.loadItems(!0)},methods:{async loadItems(t=!1){try{this.loading=t,await this.$store.dispatch("cookies/reInit"),this.loading=!1}catch(e){console.error(e),this.$root.$emit("triggerNotification",{type:"error",message:this.$i18n.__("An unexpected error occurred please try reloading the page or logging in again.","cookie-law-info")})}},async addOrEditCookie(){this.$refs.ckyButtonCreateEditCookie.startLoading();try{let t={};const e=this.currentCookie;this.resetErrors("cookie");const i=this.validateCookieFields(e);i&&(t=e.id>0?await L["a"].updateCookie(e.id,e):await L["a"].createCookie(e),t&&(await this.loadItems(),this.closeCookieModal(),this.$root.$emit("triggerNotification",{type:"success",message:this.$i18n.__("Successfully updated","cookie-law-info")})))}catch(t){this.$root.$emit("triggerNotification",{type:"error",message:this.$i18n.__("Problem occurred while saving your settings. Please try again later!","cookie-law-info")})}this.$refs.ckyButtonCreateEditCookie.stopLoading()},async addOrEditCookieCategory(){this.$refs.ckyButtonCreateEditCookieCategory.startLoading();try{let t={};const e=this.currentCategory;this.resetErrors("category");const i=this.validateCategoryFields(e);i&&(t=e.id?await L["a"].updateCookieCategory(e.id,e):await L["a"].createCookieCategory(e),t&&await this.loadItems(),this.$refs.ckyCookieCategoryModal.close(),this.$root.$emit("triggerNotification",{type:"success",message:this.$i18n.__("Successfully updated","cookie-law-info")}))}catch(t){this.$root.$emit("triggerNotification",{type:"error",message:this.$i18n.__("Problem occurred while saving your settings. Please try again later!","cookie-law-info")})}this.$refs.ckyButtonCreateEditCookieCategory.stopLoading()},loadCookies(t){this.category=Object(r["a"])(t.meta)},openCookieModal(t={}){this.cookie=Object(r["a"])(t),this.$refs.ckyCookieModal.show()},openCookieCategoryModal(t){this.category=Object(r["a"])(t),this.$refs.ckyCookieCategoryModal.show()},closeCookieModal(){this.$refs.ckyCookieModal.close(),this.clearCookieModal()},clearCookieModal(){this.cookie={},this.resetErrors("cookie")},closeCookieCategoryModal(){this.$refs.ckyCookieCategoryModal.close(),this.clearCategoryModal()},clearCategoryModal(){this.resetErrors("category")},deleteCookieConfirmation(t){this.cookieName=t.name,this.cookieId=t.id,this.$refs.ckyHeadsUpPopup.show()},async deleteCookie(){if(this.cookieId){let t=await L["a"].deleteCookie(this.cookieId);t.id>0?(this.$root.$emit("triggerNotification",{type:"success",message:this.$i18n.__("Successfully deleted the cookie","cookie-law-info")}),await this.loadItems()):this.$root.$emit("triggerNotification",{type:"error",message:this.$i18n.__("Failed","cookie-law-info")})}this.$refs.ckyHeadsUpPopup.closePopup()},getCookiesCountText(t){let e=t.length;return"("+e+")"},getLanguageContents(t){let e={};return this.selectedLanguages.forEach(i=>{let o=i.code;e[o]=t&&Object.prototype.hasOwnProperty.call(t,o)?t[o]:""}),e},strippedContent(t){return t?t.replace(/(<([^>]+)>)/gi,""):""},resetErrors(t){Object.keys(this.errors[t]).forEach(e=>{this.errors[t][e]=!1})},validateCookieFields(t){return this.errors.cookie.id=!(t.name&&t.name.trim()),this.errors.cookie.domain=!(t.domain&&t.domain.trim()),this.errors.cookie.duration=!(t.duration[this.language]&&t.duration[this.language].trim()),this.errors.cookie.description=!(t.description[this.language]&&t.description[this.language].trim()),!this.errors.cookie.id&&!this.errors.cookie.domain&&!this.errors.cookie.duration&&!this.errors.cookie.description},validateCategoryFields(t){return this.errors.category.name=!(t.name[this.language]&&t.name[this.language].trim()),this.errors.category.description=!(t.description[this.language]&&t.description[this.language].trim()),!this.errors.category.name&&!this.errors.category.description},clearHeadsUpPopup(){this.cookieName=!1,this.cookieId=!1}},computed:{bodyContent(){return this.$i18n.sprintf(this.$i18n.__("The cookie <b>%s</b> will be permanently deleted. This cookie will no longer be displayed on your cookie list nor be blocked prior to receiving user consent.","cookie-law-info"),this.cookieName)},cookieGroups(){return this.$store.state.cookies.items},currentCookie:{get(){const t=Object(r["a"])(this.cookie);return t.description=this.getLanguageContents(this.cookie.description),t.category=this.cookie.category?this.cookie.category:this.category.id,t.duration=this.getLanguageContents(this.cookie.duration),t},set(t){this.cookie=Object(r["a"])(t)}},currentCategory:{get(){const t=Object(r["a"])(this.category);return t.name=this.getLanguageContents(this.category.name),t.description=this.getLanguageContents(this.category.description),t},set(t){this.category=Object(r["a"])(t)}},disabled:function(){return!this.cookie.id},categories:function(){return this.cookieGroups},selectedLanguages(){const t=this.$store.state.languages.selected,e=this.$store.state.languages.available,i=e.filter((function(e){return t.indexOf(e.code)>-1}));return i},language:{get(){return this.currentLanguage&&this.currentLanguage||this.$store.state.languages.default},set(t){this.currentLanguage=t}},isLoaded(){return!this.loading&&!!this.categories.length},isCategoryLoaded(){return!!this.category.id}}},J=V,G=(i("2a50"),i("250b"),Object(p["a"])(J,n,c,!1,null,"6c398710",null)),K=G.exports,W=function(){var t=this,e=t._self._c;return e("div",{class:t.featureClass},[e("cky-connect-success"),e("cky-popper",{attrs:{position:t.position,isScrollable:t.isScrollable}},[e("div",{staticClass:"cky-feature-content"},[t._t("default")],2),e("template",{slot:"content"},[e("div",{staticClass:"cky-feature-disabled-notice",attrs:{"data-target":t.target}},[e("div",{staticClass:"cky-feature-disabled-notice-content"},[t.options.account.connected?t._e():[e("p",[t._v(" "+t._s(t.description)+" ")]),e("button",{staticClass:"cky-button",on:{click:function(e){return t.handleNavigate()}}},[t._v(" "+t._s(t.$i18n.__("Connect to Web App","cookie-law-info"))+" ")])]],2)])])],2)],1)},Y=[],Q=i("c068"),X=i("919d"),Z={name:"CkyFeature",mixins:[Q["a"]],components:{CkyConnectSuccess:X["a"]},props:{disabled:{type:Boolean,default:!1},name:{type:String,default:""},target:{type:String},requiredPlan:{type:String},position:{type:String,default:"right"},description:{type:String,required:!0,default:""},isScrollable:{type:Boolean,default:!1}},data(){return{hover:!1,hoverInner:!1}},mounted(){},computed:{featureClass(){return{"cky-feature":!0,"cky-feature-disabled":!0===this.disabled,"cky-feature-position-center":"center"===this.position,"cky-feature-position-left":"left"===this.position}},...Object(s["d"])("settings",["options","info"]),connected(){return!!this.options.account.connected}},methods:{handleNavigate(){document.body.classList.remove("cky-app-modal-open"),this.$router.push("dashboard/plans")}}},tt=Z,et=(i("f225"),Object(p["a"])(tt,W,Y,!1,null,null,null)),it=et.exports,ot=i("bde3"),at={name:"CkyCookies",mixins:[ot["a"]],components:{TabCookies:K,CkyFeature:it,CkyConnectSuccess:X["a"]},data(){return{tabs:[{id:"cookies",title:this.$i18n.__("Cookie List","cookie-law-info"),icon:!1},{id:"scanner",title:this.$i18n.__("Scan History","cookie-law-info"),icon:!1}],currentTab:"cookies",scannerModalHeadingText:"",scannerModalContentText:"",lastScanId:0}},computed:{...Object(s["d"])("settings",["options","info"]),connected(){return!!this.options.account.connected},currentTabComponent:function(){return"tab-"+this.currentTab.toLowerCase()},account(){return this.getOption("account")}},methods:{showIcon(t){return!!t.icon},changeTab(t=!1){if(t){const e=this.$router.getRouteByName("cookies");this.currentTab=t,e.query.tab=t,this.$router.push({name:e.name,query:e.query})}else{const t=this.$route.query.tab||"cookies";this.currentTab=t}}},async mounted(){this.changeTab()}},st=at,nt=(i("cf17"),Object(p["a"])(st,o,a,!1,null,null,null));e["default"]=nt.exports},bde3:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var o=i("87ea");const a={data(){return{checkFocusTimer:0,hidden:"hidden",visibilityChange:"visibilitychange",hasFocus:!1}},components:{},computed:{account(){return Object(o["e"])("account")}},mounted(){this.initialize()},beforeDestroy(){document.removeEventListener(this.visibilityChange,this.handleVisibilityChange)},methods:{initialize(){!0!==this.account.connected&&("undefined"!==typeof document.hidden?(this.hidden="hidden",this.visibilityChange="visibilitychange"):"undefined"!==typeof document.msHidden?(this.hidden="msHidden",this.visibilityChange="msvisibilitychange"):"undefined"!==typeof document.webkitHidden&&(this.hidden="webkitHidden",this.visibilityChange="webkitvisibilitychange"),document.addEventListener(this.visibilityChange,this.handleVisibilityChange,!1))},handleVisibilityChange(){document[this.hidden]||this.checkForScreenChange()},async checkForScreenChange(){await Object(o["j"])(),this.account.connected&&(document.removeEventListener(this.visibilityChange,this.handleVisibilityChange),this.$router.redirectToDashboard(this.$route.name))}}}},cf17:function(t,e,i){"use strict";i("fe2b")},e6b3:function(t,e,i){"use strict";i("fd79")},e7be:function(t,e,i){},f225:function(t,e,i){"use strict";i("13e6")},fd79:function(t,e,i){},fe2b:function(t,e,i){}}]);