(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[62],{1727:function(e,t,r){"use strict";r.r(t);var i=r(1),n=r(499),c=r(669),a=r(504),s=r(96),d=r(9),l=r(506),o=r.n(l),u=r(136),b=r(148),j=r(11),g=function(e){var t=e.row,r=Object(d.f)(),i=Object(u.b)();return Object(j.jsxs)("div",{className:"d-flex align-items-center",children:[Object(j.jsx)(s.i,{onClick:function(){i(Object(b.c)(null===t||void 0===t?void 0:t.ID)),i(Object(b.b)(1))},style:{marginRight:8},color:"danger",size:"sm",children:"Delete"}),Object(j.jsx)(s.i,{onClick:function(){r("/rules/action_triggers/update?entity_id=".concat(t.ID))},style:{marginRight:8},color:"primary",size:"sm",children:"Update"})]})},h=[{name:"TPid",minWidth:"100px",selector:function(e){return e.ID}},{name:"Operations",minWidth:"100px",selector:function(e){return e.ID},cell:function(e){return Object(j.jsx)(g,{row:e})}}],f=r(502),T=r(529);t.default=function(){var e=Object(f.a)().skin,t=Object(u.b)(),r=Object(d.f)(),l=Object(c.a)(),g=l.getActionTriggers,O=l.deleteEntity,p=l.listData,m=l.loadings,v=Object(u.c)((function(e){return e.actionTriggers.deleteModal})),q=Object(u.c)((function(e){return e.actionTriggers.selectedEntity})),y=Object(u.c)((function(e){return e.app.getAllTpIdsLoading})),x=Object(u.c)((function(e){return e.app.selectedTpId}));return Object(i.useEffect)((function(){x&&g()}),[x]),Object(j.jsxs)(i.Fragment,{children:[Object(j.jsxs)(s.B,{className:"position-relative",xs:12,children:[Object(j.jsx)(n.a,{title:"Action Triggers",data:[{title:"Action Triggers"}]}),Object(j.jsx)(s.i,{onClick:function(){return r("/rules/action_triggers/new")},color:"primary",style:{position:"absolute",right:0,top:0},children:"New Action Trigger"})]}),y?Object(j.jsx)("div",{style:{width:"100%",height:"50vh"},className:"d-flex justify-content-center align-items-center",children:"Loading TPIds..."}):null,!y&&m.getActionTriggers?Object(j.jsx)("div",{className:"datatable_loading_cover",children:Object(j.jsx)(a.a,{})}):null,y||m.getActionTriggers?null:Object(j.jsx)(i.Fragment,{children:Object(j.jsx)(o.a,{noDataComponent:m.getActionTriggers?"":Object(j.jsx)("div",{style:{margin:"24px 0"},children:"No Action Trigger Founded!"}),noHeader:!0,columns:h,className:"react-dataTable",style:{background:"red"},data:p,theme:"dark"===e?"darkTheme":""})}),Object(j.jsx)(T.a,{visible:v,setVisible:b.b,title:"Are you sure you want to delete this action trigger?",noAction:function(){return t(Object(b.b)(!1))},noColor:"secondary",noTitle:"Cancel",yesLoading:m.deleteEntity,yesAction:function(){return O(q)},yesColor:"danger",yesTitle:"Delete",type:"global"})]})}},499:function(e,t,r){"use strict";var i=r(21),n=r(1),c=r(135),a=r(2),s=r.n(a),d=r(96),l=r(11);t.a=function(e){var t=e.data,r=e.title;return Object(l.jsx)("div",{className:"content-header row",children:Object(l.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2 w-100",children:Object(l.jsx)("div",{className:"row breadcrumbs-top",children:Object(l.jsxs)("div",{className:"col-12",children:[r?Object(l.jsx)("h2",{className:"content-header-title float-start mb-0",children:r}):"",Object(l.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(l.jsxs)(d.g,{children:[Object(l.jsx)(d.h,{tag:"li",children:Object(l.jsx)(c.b,{to:"/",children:"Dashboard"})}),t.map((function(e,r){var a=e.link?c.b:n.Fragment,o=t.length-1===r;return Object(l.jsx)(d.h,{tag:"li",active:!o,className:s()({"text-primary":!o}),children:Object(l.jsx)(a,Object(i.a)(Object(i.a)({},e.link?{to:e.link}:{}),{},{children:e.title}))},r)}))]})})]})})})})}},501:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return c})),r.d(t,"f",(function(){return a})),r.d(t,"d",(function(){return s})),r.d(t,"e",(function(){return d})),r.d(t,"a",(function(){return l})),r.d(t,"g",(function(){return o}));var i=r(508),n=i.b({TPid:i.d().required("The TPid field is required."),ID:i.d().required("The ID field is required.")}),c=i.b({TPid:i.d().required("The TPid field is required."),Tenant:i.d().required("The Tenant field is required."),ID:i.d().required("The ID field is required."),ActivationTime:i.d().required("The ActivationTime field is required."),ExpiryTime:i.d().required("The ExpiryTime field is required."),RunID:i.d().required("The RunID field is required."),FilterIDs:i.a().min(1).required("The FilterIDs field is required."),AttributeIDs:i.a().min(1).required("The AttributeIDs field is required.")}),a=i.b({TPid:i.d().required("The TPid field is required."),ID:i.d().required("The ID field is required."),MonthDays:i.d().required("The MonthDays field is required."),Months:i.d().required("The Months field is required."),Time:i.d().required("The Time field is required."),WeekDays:i.d().required("The WeekDays field is required."),Years:i.d().required("The Years field is required.")}),s=i.b({TPid:i.d().required("The TPid field is required."),ID:i.d().required("The ID field is required."),Prefixes:i.a().min(1).required("The Prefixes field is required.")}),d=i.b({TPid:i.d().required("The TPid field is required."),LoadId:i.d().required("The LoadId field is required."),Tenant:i.d().required("The Tenant field is required."),Category:i.d().required("The Category field is required."),Subject:i.d().required("The Subject field is required.")}),l=i.b({Account:i.d().required("The Account field is required."),Tenant:i.d().required("The Tenant field is required."),ActionPlanIDs:i.b().nullable(!1).required("The ActionPlanIDs field is required."),ActionTriggerIDs:i.b().nullable(!1).required("The ActionTriggerIDs field is required."),Balances:i.a().min(1,"You should select a balance.").required("You should select a balance.")}),o=i.b({Account:i.d().required("The Account field is required."),Tenant:i.d().required("The Tenant field is required."),ActionTriggerIDs:i.b().nullable(!1).required("The ActionTriggerIDs field is required."),Balances:i.a().min(1,"You should select a balance.").required("You should select a balance.")})},504:function(e,t,r){"use strict";r(1),r(505);var i=r(11);t.a=function(){return Object(i.jsx)("div",{className:"linear-activity",children:Object(i.jsx)("div",{className:"indeterminate"})})}},505:function(e,t,r){},529:function(e,t,r){"use strict";var i=r(96),n=r(509),c=r(136),a=r(11);t.a=function(e){var t=e.visible,r=e.setVisible,s=e.title,d=e.noAction,l=e.noColor,o=e.noTitle,u=e.yesLoading,b=e.yesAction,j=e.yesColor,g=e.yesTitle,h=e.type,f=e.size,T=e.children,O=Object(c.b)();return Object(a.jsxs)(i.Q,{isOpen:1===t,size:f||"md",toggle:function(){"global"===h?O(r(null)):r(null)},className:"modal-dialog-centered",modalClassName:"modal-primary",children:[Object(a.jsx)(i.T,{toggle:function(){"global"===h?O(r(null)):r(null)},children:s}),Object(a.jsx)(i.R,{children:T}),Object(a.jsxs)(i.S,{className:"w-100 d-flex justify-content-center",children:[Object(a.jsx)(n.a,{onClick:d,style:{width:160},color:l||"danger",children:o}),Object(a.jsx)(n.a,{loading:u,onClick:b,style:{width:160},color:j||"success",children:g})]})]},1)}},669:function(e,t,r){"use strict";var i=r(137),n=r(4),c=r(21),a=r(7),s=r(16),d=r(1),l=r(501),o=r(136),u=r(138),b=r(512),j=r(511),g=r(9),h=r(148),f=["id"],T=["id"];t.a=function(){var e=Object(o.b)(),t=Object(g.f)(),r=Object(j.a)().httpService,O=Object(d.useState)({getActionTriggers:!1,getEntityById:!1,createActionTrigger:!1,updateActionTrigger:!1,deleteEntity:!1}),p=Object(s.a)(O,2),m=p[0],v=p[1],q=Object(d.useState)([]),y=Object(s.a)(q,2),x=y[0],A=y[1],I=Object(o.c)((function(e){return e.actionTriggers.slots})),D=Object(o.c)((function(e){return e.app.selectedTpId})),P=function(){var e=Object(a.a)(Object(n.a)().mark((function e(){var t,i,a,s;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.prev=1,v(Object(c.a)(Object(c.a)({},m),{},{getActionTriggers:!0})),e.next=5,r.post("",{method:"APIerSv1.GetTPActionTriggerIds",params:[{TPid:D}]});case 5:s=e.sent,v(Object(c.a)(Object(c.a)({},m),{},{getActionTriggers:!1})),null===s||void 0===s||null===(i=s.data)||void 0===i||null===(a=i.result)||void 0===a||a.map((function(e){t.push({ID:e})})),A(t),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(1),e.t0.err,e.t0.response,v(Object(c.a)(Object(c.a)({},m),{},{getActionTriggers:!1}));case 16:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}(),k=function(){var i=Object(a.a)(Object(n.a)().mark((function i(a){var s,d,l,o,b,j,g;return Object(n.a)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,v(Object(c.a)(Object(c.a)({},m),{},{getEntityById:!0})),i.next=4,r.post("",{method:"APIerSv1.GetTPActionTriggers",params:[{TPid:D,ID:a}]});case 4:d=i.sent,v(Object(c.a)(Object(c.a)({},m),{},{getEntityById:!1})),"NOT_FOUND"===(null===d||void 0===d||null===(s=d.data)||void 0===s?void 0:s.error)?(u.b.error(null===d||void 0===d||null===(l=d.data)||void 0===l?void 0:l.error),t("/rules/action_triggers")):(S.setFieldValue("ID",null===d||void 0===d||null===(o=d.data)||void 0===o||null===(b=o.result)||void 0===b?void 0:b.ID),e(Object(h.d)(null===d||void 0===d||null===(j=d.data)||void 0===j||null===(g=j.result)||void 0===g?void 0:g.ActionTriggers))),i.next=14;break;case 9:i.prev=9,i.t0=i.catch(0),i.t0.err,i.t0.response,v(Object(c.a)(Object(c.a)({},m),{},{getEntityById:!1}));case 14:case"end":return i.stop()}}),i,null,[[0,9]])})));return function(e){return i.apply(this,arguments)}}(),w=Object(b.a)({initialValues:{TPid:D,ID:"",Actions:[]},validationSchema:l.b,enableReinitialize:!0,onSubmit:function(e){0===I.length?u.b.error("You must add at least one action trigger."):N(e,I)}}),N=function(){var s=Object(a.a)(Object(n.a)().mark((function a(s,d){var l,o;return Object(n.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l=d.map((function(e){e.id;return Object(i.a)(e,f)})),n.prev=1,v(Object(c.a)(Object(c.a)({},m),{},{createActionTrigger:!0})),n.next=5,r.post("",{method:"APIerSv1.SetTPActionTriggers",params:[{TPid:D,ID:s.ID,ActionTriggers:l}]});case 5:o=n.sent,v(Object(c.a)(Object(c.a)({},m),{},{createActionTrigger:!1})),200===o.status&&(u.b.success("Successfully Created!"),t("/rules/action_triggers"),e(Object(h.d)([]))),n.next=15;break;case 10:n.prev=10,n.t0=n.catch(1),n.t0.err,n.t0.response,v(Object(c.a)(Object(c.a)({},m),{},{createActionTrigger:!1}));case 15:case"end":return n.stop()}}),a,null,[[1,10]])})));return function(e,t){return s.apply(this,arguments)}}(),S=Object(b.a)({initialValues:{TPid:D,ID:"",Actions:[]},validationSchema:l.b,enableReinitialize:!0,onSubmit:function(e){0===I.length?u.b.error("You must add at least one action trigger."):C(e,I)}}),C=function(){var s=Object(a.a)(Object(n.a)().mark((function a(s,d){var l,o;return Object(n.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l=d.map((function(e){e.id;return Object(i.a)(e,T)})),n.prev=1,v(Object(c.a)(Object(c.a)({},m),{},{updateActionTrigger:!0})),n.next=5,r.post("",{method:"APIerSv1.SetTPActionTriggers",params:[{TPid:D,ID:s.ID,ActionTriggers:l}]});case 5:o=n.sent,v(Object(c.a)(Object(c.a)({},m),{},{updateActionTrigger:!1})),200===o.status&&(u.b.success("Successfully Updated!"),t("/rules/action_triggers"),e(Object(h.d)([]))),n.next=15;break;case 10:n.prev=10,n.t0=n.catch(1),n.t0.err,n.t0.response,v(Object(c.a)(Object(c.a)({},m),{},{updateActionTrigger:!1}));case 15:case"end":return n.stop()}}),a,null,[[1,10]])})));return function(e,t){return s.apply(this,arguments)}}(),E=function(){var t=Object(a.a)(Object(n.a)().mark((function t(i){return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,v(Object(c.a)(Object(c.a)({},m),{},{deleteEntity:!0})),t.next=4,r.post("",{method:"APIerSv1.RemoveTPActionTriggers",params:[{TPid:D,ID:i}]});case 4:t.sent,v(Object(c.a)(Object(c.a)({},m),{},{deleteEntity:!1})),e(Object(h.b)(null)),u.b.success("Successfully Deleted."),P(),t.next=16;break;case 11:t.prev=11,t.t0=t.catch(0),t.t0.err,t.t0.response,v(Object(c.a)(Object(c.a)({},m),{},{deleteEntity:!1}));case 16:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}();return{getActionTriggers:P,getEntityById:k,createActionTriggerController:w,updateActionTriggerController:S,deleteEntity:E,listData:x,loadings:m}}}}]);
//# sourceMappingURL=62.9cf43f2f.chunk.js.map