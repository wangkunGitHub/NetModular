(window.webpackJsonp=window.webpackJsonp||[]).push([["admin.permission"],{"354f":function(e,l,t){"use strict";var o={mixins:[t("68f2").b.select],data:function(){return{action:$api.admin.moduleInfo.select}}},n=t("2877"),a=Object(n.a)(o,void 0,void 0,!1,null,null,null);l.a=a.exports},c4c8:function(e,l,t){"use strict";t.r(l);var o=t("1643"),n=[{name:"id",label:"编号",show:!1,width:260},{name:"name",label:"名称"},{name:"moduleName",label:"所属模块"},{name:"moduleCode",label:"模块编码",show:!1},{name:"controller",label:"控制器"},{name:"action",label:"方法"},{name:"httpMethodName",label:"请求方法"},{name:"code",label:"唯一编码",width:"300"},{name:"creator",label:"创建人",width:100,show:!1},{name:"createdTime",label:"创建时间",width:150,show:!1}],a=t("354f"),r=$api.admin.permission,i=$api.admin.system,s={name:o.default.name,components:{ModuleInfoSelect:a.a},data:function(){return{list:{title:o.default.title,cols:n,labelWidth:"70px",noOperation:!0,action:r.query,advanced:{enabled:!0,width:"400px"},model:{moduleCode:"",name:"",controller:"",action:""},loading:!1},buttons:o.default.buttons}},methods:{refresh:function(){this.$refs.list.refresh()},sync:function(){var e=this;this._confirm("您确认要同步权限信息吗","同步权限信息").then((function(){e.list.loading=!0,r.sync().then((function(){e.list.loading=!1,e._success("同步成功"),e.refresh()}))}))},getAllControllerAction:function(){return i.getAllController({module:this.list.model.moduleCode})},getAllAction:function(){var e=this.list.model;return i.getAllAction({module:e.moduleCode,controller:e.controller})},onModuleChange:function(){this.$refs.controllerSelect.refresh()},onControllerChange:function(){this.$refs.actionSelect.refresh()}}},c=t("2877"),u=Object(c.a)(s,(function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("nm-container",[t("nm-list",e._b({ref:"list",scopedSlots:e._u([{key:"querybar",fn:function(){return[t("el-form-item",{attrs:{label:"名称：",prop:"name"}},[t("el-input",{attrs:{clearable:""},model:{value:e.list.model.name,callback:function(l){e.$set(e.list.model,"name",l)},expression:"list.model.name"}})],1)]},proxy:!0},{key:"querybar-advanced",fn:function(){return[t("el-row",[t("el-col",{attrs:{span:20,offset:1}},[t("el-form-item",{attrs:{label:"模块：",prop:"moduleCode"}},[t("module-info-select",{on:{change:e.onModuleChange},model:{value:e.list.model.moduleCode,callback:function(l){e.$set(e.list.model,"moduleCode",l)},expression:"list.model.moduleCode"}})],1),t("el-form-item",{attrs:{label:"控制器：",prop:"controller"}},[t("nm-select",{ref:"controllerSelect",attrs:{method:e.getAllControllerAction},on:{change:e.onControllerChange},scopedSlots:e._u([{key:"default",fn:function(l){var o=l.options;return e._l(o,(function(l){return t("el-option",{key:l.value,attrs:{label:l.label,value:l.value}},[t("span",[e._v(e._s(l.label)+"("+e._s(l.value)+")")])])}))}}]),model:{value:e.list.model.controller,callback:function(l){e.$set(e.list.model,"controller",l)},expression:"list.model.controller"}})],1),t("el-form-item",{attrs:{label:"方法：",prop:"action"}},[t("nm-select",{ref:"actionSelect",attrs:{method:e.getAllAction},scopedSlots:e._u([{key:"default",fn:function(l){var o=l.options;return e._l(o,(function(l){return t("el-option",{key:l.value,attrs:{label:l.label,value:l.value}},[t("span",[e._v(e._s(l.label)+"("+e._s(l.value)+")")])])}))}}]),model:{value:e.list.model.action,callback:function(l){e.$set(e.list.model,"action",l)},expression:"list.model.action"}})],1)],1)],1)]},proxy:!0},{key:"querybar-buttons",fn:function(){return[t("nm-button",e._b({on:{click:e.sync}},"nm-button",e.buttons.sync,!1))]},proxy:!0},{key:"col-moduleName",fn:function(l){var o=l.row;return[t("span",[e._v(e._s(o.moduleName+"("+o.moduleCode+")"))])]}}])},"nm-list",e.list,!1))],1)}),[],!1,null,null,null);l.default=u.exports}}]);