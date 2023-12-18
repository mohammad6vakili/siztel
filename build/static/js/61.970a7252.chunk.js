(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[61],{1726:function(e,t,n){"use strict";n.r(t);var i=n(1),r=n(499),a=n(668),c=n(504),s=n(96),l=n(9),d=n(136),o=n(149),u=n(11),b=function(e){var t=e.row,n=Object(l.f)(),i=Object(d.b)();return Object(u.jsxs)("div",{className:"d-flex align-items-center",children:[Object(u.jsx)(s.i,{onClick:function(){i(Object(o.c)(t.ID)),i(Object(o.b)(1))},style:{marginRight:8},color:"danger",size:"sm",children:"Delete"}),Object(u.jsx)(s.i,{onClick:function(){n("/rules/action_plans/update?entity_id=".concat(t.ID))},style:{marginRight:8},color:"primary",size:"sm",children:"Update"})]})},j=[{name:"ID",minWidth:"100px",selector:function(e){return e.ID}},{name:"Operations",minWidth:"100px",selector:function(e){return e.ID},cell:function(e){return Object(u.jsx)(b,{row:e})}}],h=n(506),f=n.n(h),O=n(502),p=n(529);t.default=function(){var e=Object(O.a)().skin,t=Object(d.b)(),n=Object(l.f)(),b=Object(a.a)(),h=b.getActionPlans,m=b.deleteEntity,v=b.listData,T=b.loadings,q=Object(d.c)((function(e){return e.actionPlans.deleteModal})),P=Object(d.c)((function(e){return e.actionPlans.selectedEntity})),y=Object(d.c)((function(e){return e.app.getAllTpIdsLoading})),g=Object(d.c)((function(e){return e.app.selectedTpId}));return Object(i.useEffect)((function(){g&&h()}),[g]),Object(u.jsxs)(i.Fragment,{children:[Object(u.jsxs)(s.B,{className:"position-relative",xs:12,children:[Object(u.jsx)(r.a,{title:"Action Plans",data:[{title:"Action Plans"}]}),Object(u.jsx)(s.i,{onClick:function(){return n("/rules/action_plans/new")},color:"primary",style:{position:"absolute",right:0,top:0},children:"New Action Plan"})]}),y?Object(u.jsx)("div",{style:{width:"100%",height:"50vh"},className:"d-flex justify-content-center align-items-center",children:"Loading TPIds..."}):null,!y&&T.getActionPlans?Object(u.jsx)("div",{className:"datatable_loading_cover",children:Object(u.jsx)(c.a,{})}):null,y||T.getActionPlans?null:Object(u.jsx)(i.Fragment,{children:Object(u.jsx)(f.a,{noDataComponent:T.getActionPlans?"":Object(u.jsx)("div",{style:{margin:"24px 0"},children:"No Action Plan Founded!"}),noHeader:!0,columns:j,className:"react-dataTable",style:{background:"red"},data:v,theme:"dark"===e?"darkTheme":""})}),Object(u.jsx)(p.a,{visible:q,setVisible:o.b,title:"Are you sure you want to delete this action plan?",noAction:function(){return t(Object(o.b)(!1))},noColor:"secondary",noTitle:"Cancel",yesLoading:T.deleteEntity,yesAction:function(){return m(P)},yesColor:"danger",yesTitle:"Delete",type:"global"})]})}},499:function(e,t,n){"use strict";var i=n(21),r=n(1),a=n(135),c=n(2),s=n.n(c),l=n(96),d=n(11);t.a=function(e){var t=e.data,n=e.title;return Object(d.jsx)("div",{className:"content-header row",children:Object(d.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2 w-100",children:Object(d.jsx)("div",{className:"row breadcrumbs-top",children:Object(d.jsxs)("div",{className:"col-12",children:[n?Object(d.jsx)("h2",{className:"content-header-title float-start mb-0",children:n}):"",Object(d.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(d.jsxs)(l.g,{children:[Object(d.jsx)(l.h,{tag:"li",children:Object(d.jsx)(a.b,{to:"/",children:"Dashboard"})}),t.map((function(e,n){var c=e.link?a.b:r.Fragment,o=t.length-1===n;return Object(d.jsx)(l.h,{tag:"li",active:!o,className:s()({"text-primary":!o}),children:Object(d.jsx)(c,Object(i.a)(Object(i.a)({},e.link?{to:e.link}:{}),{},{children:e.title}))},n)}))]})})]})})})})}},501:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"f",(function(){return c})),n.d(t,"d",(function(){return s})),n.d(t,"e",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"g",(function(){return o}));var i=n(508),r=i.b({TPid:i.d().required("The TPid field is required."),ID:i.d().required("The ID field is required.")}),a=i.b({TPid:i.d().required("The TPid field is required."),Tenant:i.d().required("The Tenant field is required."),ID:i.d().required("The ID field is required."),ActivationTime:i.d().required("The ActivationTime field is required."),ExpiryTime:i.d().required("The ExpiryTime field is required."),RunID:i.d().required("The RunID field is required."),FilterIDs:i.a().min(1).required("The FilterIDs field is required."),AttributeIDs:i.a().min(1).required("The AttributeIDs field is required.")}),c=i.b({TPid:i.d().required("The TPid field is required."),ID:i.d().required("The ID field is required."),MonthDays:i.d().required("The MonthDays field is required."),Months:i.d().required("The Months field is required."),Time:i.d().required("The Time field is required."),WeekDays:i.d().required("The WeekDays field is required."),Years:i.d().required("The Years field is required.")}),s=i.b({TPid:i.d().required("The TPid field is required."),ID:i.d().required("The ID field is required."),Prefixes:i.a().min(1).required("The Prefixes field is required.")}),l=i.b({TPid:i.d().required("The TPid field is required."),LoadId:i.d().required("The LoadId field is required."),Tenant:i.d().required("The Tenant field is required."),Category:i.d().required("The Category field is required."),Subject:i.d().required("The Subject field is required.")}),d=i.b({Account:i.d().required("The Account field is required."),Tenant:i.d().required("The Tenant field is required."),ActionPlanIDs:i.b().nullable(!1).required("The ActionPlanIDs field is required."),ActionTriggerIDs:i.b().nullable(!1).required("The ActionTriggerIDs field is required."),Balances:i.a().min(1,"You should select a balance.").required("You should select a balance.")}),o=i.b({Account:i.d().required("The Account field is required."),Tenant:i.d().required("The Tenant field is required."),ActionTriggerIDs:i.b().nullable(!1).required("The ActionTriggerIDs field is required."),Balances:i.a().min(1,"You should select a balance.").required("You should select a balance.")})},504:function(e,t,n){"use strict";n(1),n(505);var i=n(11);t.a=function(){return Object(i.jsx)("div",{className:"linear-activity",children:Object(i.jsx)("div",{className:"indeterminate"})})}},505:function(e,t,n){},529:function(e,t,n){"use strict";var i=n(96),r=n(509),a=n(136),c=n(11);t.a=function(e){var t=e.visible,n=e.setVisible,s=e.title,l=e.noAction,d=e.noColor,o=e.noTitle,u=e.yesLoading,b=e.yesAction,j=e.yesColor,h=e.yesTitle,f=e.type,O=e.size,p=e.children,m=Object(a.b)();return Object(c.jsxs)(i.Q,{isOpen:1===t,size:O||"md",toggle:function(){"global"===f?m(n(null)):n(null)},className:"modal-dialog-centered",modalClassName:"modal-primary",children:[Object(c.jsx)(i.T,{toggle:function(){"global"===f?m(n(null)):n(null)},children:s}),Object(c.jsx)(i.R,{children:p}),Object(c.jsxs)(i.S,{className:"w-100 d-flex justify-content-center",children:[Object(c.jsx)(r.a,{onClick:l,style:{width:160},color:d||"danger",children:o}),Object(c.jsx)(r.a,{loading:u,onClick:b,style:{width:160},color:j||"success",children:h})]})]},1)}},668:function(e,t,n){"use strict";var i=n(137),r=n(4),a=n(21),c=n(7),s=n(16),l=n(1),d=n(512),o=n(136),u=n(511),b=n(138),j=n(9),h=n(501),f=n(149),O=["id"],p=["id"];t.a=function(){var e=Object(o.b)(),t=Object(j.f)(),n=Object(u.a)().httpService,m=Object(l.useState)({getActionPlans:!1,getEntityById:!1,createActionPlan:!1,updateActionPlan:!1,deleteEntity:!1}),v=Object(s.a)(m,2),T=v[0],q=v[1],P=Object(l.useState)([]),y=Object(s.a)(P,2),g=y[0],x=y[1],A=Object(o.c)((function(e){return e.actionPlans.slots})),I=Object(o.c)((function(e){return e.app.selectedTpId})),D=function(){var e=Object(c.a)(Object(r.a)().mark((function e(){var t,i,c,s;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.prev=1,q(Object(a.a)(Object(a.a)({},T),{},{getActionPlans:!0})),e.next=5,n.post("",{method:"APIerSv1.GetTPActionPlanIds",params:[{TPid:I}]});case 5:s=e.sent,q(Object(a.a)(Object(a.a)({},T),{},{getActionPlans:!1})),null===s||void 0===s||null===(i=s.data)||void 0===i||null===(c=i.result)||void 0===c||c.map((function(e){t.push({ID:e})})),x(t),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(1),e.t0.err,e.t0.response,q(Object(a.a)(Object(a.a)({},T),{},{getActionPlans:!1}));case 16:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}(),k=function(){var i=Object(c.a)(Object(r.a)().mark((function i(c){var s,l,d,o,u,j,h;return Object(r.a)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,q(Object(a.a)(Object(a.a)({},T),{},{getEntityById:!0})),i.next=4,n.post("",{method:"APIerSv1.GetTPActionPlan",params:[{TPid:I,ID:c}]});case 4:l=i.sent,q(Object(a.a)(Object(a.a)({},T),{},{getEntityById:!1})),"NOT_FOUND"===(null===l||void 0===l||null===(s=l.data)||void 0===s?void 0:s.error)?(b.b.error(null===l||void 0===l||null===(d=l.data)||void 0===d?void 0:d.error),t("/rules/action_plans")):(S.setFieldValue("ID",null===l||void 0===l||null===(o=l.data)||void 0===o||null===(u=o.result)||void 0===u?void 0:u.ID),e(Object(f.d)(null===l||void 0===l||null===(j=l.data)||void 0===j||null===(h=j.result)||void 0===h?void 0:h.ActionPlan))),i.next=14;break;case 9:i.prev=9,i.t0=i.catch(0),i.t0.err,i.t0.response,q(Object(a.a)(Object(a.a)({},T),{},{getEntityById:!1}));case 14:case"end":return i.stop()}}),i,null,[[0,9]])})));return function(e){return i.apply(this,arguments)}}(),w=Object(d.a)({initialValues:{TPid:I,ID:"",Actions:[]},validationSchema:h.b,enableReinitialize:!0,onSubmit:function(e){0===A.length?b.b.error("You must add at least one action plan."):N(e,A)}}),N=function(){var s=Object(c.a)(Object(r.a)().mark((function c(s,l){var d,o;return Object(r.a)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return d=l.map((function(e){e.id;return Object(i.a)(e,O)})),r.prev=1,q(Object(a.a)(Object(a.a)({},T),{},{createActionPlan:!0})),r.next=5,n.post("",{method:"APIerSv1.SetTPActionPlan",params:[{TPid:I,ID:s.ID,ActionPlan:d}]});case 5:o=r.sent,q(Object(a.a)(Object(a.a)({},T),{},{createActionPlan:!1})),200===o.status&&(b.b.success("Successfully Created!"),t("/rules/action_plans"),e(Object(f.d)([]))),r.next=15;break;case 10:r.prev=10,r.t0=r.catch(1),r.t0.err,r.t0.response,q(Object(a.a)(Object(a.a)({},T),{},{createActionPlan:!1}));case 15:case"end":return r.stop()}}),c,null,[[1,10]])})));return function(e,t){return s.apply(this,arguments)}}(),S=Object(d.a)({initialValues:{TPid:I,ID:"",Actions:[]},validationSchema:h.b,enableReinitialize:!0,onSubmit:function(e){0===A.length?b.b.error("You must add at least one action plan."):C(e,A)}}),C=function(){var s=Object(c.a)(Object(r.a)().mark((function c(s,l){var d,o;return Object(r.a)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return d=l.map((function(e){e.id;return Object(i.a)(e,p)})),r.prev=1,q(Object(a.a)(Object(a.a)({},T),{},{updateActionPlan:!0})),r.next=5,n.post("",{method:"APIerSv1.SetTPActionPlan",params:[{TPid:I,ID:s.ID,ActionPlan:d}]});case 5:o=r.sent,q(Object(a.a)(Object(a.a)({},T),{},{updateActionPlan:!1})),200===o.status&&(b.b.success("Successfully Updated!"),t("/rules/action_plans"),e(Object(f.d)([]))),r.next=15;break;case 10:r.prev=10,r.t0=r.catch(1),r.t0.err,r.t0.response,q(Object(a.a)(Object(a.a)({},T),{},{updateActionPlan:!1}));case 15:case"end":return r.stop()}}),c,null,[[1,10]])})));return function(e,t){return s.apply(this,arguments)}}(),E=function(){var t=Object(c.a)(Object(r.a)().mark((function t(i){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,q(Object(a.a)(Object(a.a)({},T),{},{deleteEntity:!0})),t.next=4,n.post("",{method:"APIerSv1.RemoveTPActionPlan",params:[{TPid:I,ID:i}]});case 4:t.sent,q(Object(a.a)(Object(a.a)({},T),{},{deleteEntity:!1})),e(Object(f.b)(null)),b.b.success("Successfully Deleted."),D(),t.next=16;break;case 11:t.prev=11,t.t0=t.catch(0),t.t0.err,t.t0.response,q(Object(a.a)(Object(a.a)({},T),{},{deleteEntity:!1}));case 16:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}();return{getActionPlans:D,getEntityById:k,createActionPlanController:w,updateActionPlanController:S,deleteEntity:E,listData:g,loadings:T}}}}]);
//# sourceMappingURL=61.970a7252.chunk.js.map