(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[76],{1635:function(e,t,r){"use strict";r.r(t);var a=r(21),n=r(139),i=r(16),c=r(1),d=r(499),s=r(9),u=r(135),l=r(506),o=r.n(l),b=r(868),j=r(817),h=r(504),p=r(138),O=r(96),m=r(509),f=r(502),v=r(136),x=r(146),T=r(677),g=r(11);t.default=function(){var e=Object(f.a)().skin,t=Object(v.b)(),r=Object(s.f)(),l=Object(u.d)(),S=Object(i.a)(l,1)[0],q=Object(T.a)(),y=q.getEntityById,I=q.updateSharedGroupController,D=q.loadings,P=Object(c.useState)({Account:"",Strategy:"",RatingSubject:""}),G=Object(i.a)(P,2),A=G[0],N=G[1],k=Object(v.c)((function(e){return e.app.getAllTpIdsLoading})),w=Object(v.c)((function(e){return e.app.selectedTpId})),B=Object(v.c)((function(e){return e.sharedGroups.slots}));return Object(c.useEffect)((function(){var e=S.get("entity_id");e?w&&y(e):r("/rules/shared_groups")}),[w]),Object(g.jsxs)(c.Fragment,{children:[Object(g.jsx)(d.a,{title:"Update Shared Group",data:[{title:"Update Shared Group"}]}),D.getEntityById?Object(g.jsx)(h.a,{}):null,k||D.getEntityById?null:Object(g.jsx)(O.H,{onSubmit:function(e){e.preventDefault(),window.scroll({top:0,behavior:"smooth"}),I.handleSubmit()},className:"d-flex flex-column align-items-center",children:Object(g.jsxs)(O.l,{className:"w-100",children:[Object(g.jsx)(O.p,{className:"border-bottom",children:Object(g.jsx)(O.v,{children:"Update Shared Group Form"})}),Object(g.jsxs)(O.m,{className:"pt-2",children:[Object(g.jsxs)(O.ib,{className:"border-bottom mb-1",children:[Object(g.jsxs)(O.B,{xs:"12",sm:"6",md:"4",className:"mb-1",children:[Object(g.jsx)(O.N,{className:"form-label",for:"TPid",children:"TPid"}),Object(g.jsx)(O.K,{id:"TPid",name:"TPid",disabled:!0,value:I.values.TPid,onChange:I.handleChange,invalid:I.touched.TPid&&I.errors.TPid}),I.touched.TPid&&I.errors.TPid?Object(g.jsx)(O.I,{children:I.errors.TPid}):null]}),Object(g.jsxs)(O.B,{xs:"12",sm:"6",md:"4",className:"mb-1",children:[Object(g.jsx)(O.N,{className:"form-label",for:"ID",children:"ID"}),Object(g.jsx)(O.K,{id:"ID",name:"ID",disabled:!0,value:I.values.ID,onChange:I.handleChange,invalid:I.touched.ID&&I.errors.ID}),I.touched.ID&&I.errors.ID?Object(g.jsx)(O.I,{children:I.errors.ID}):null]})]}),Object(g.jsxs)(O.ib,{children:[Object(g.jsx)(O.B,{xs:"12",children:Object(g.jsx)(O.v,{children:"Shared Groups"})}),Object(g.jsxs)(O.B,{xs:"12",sm:"6",md:"3",className:"mb-1",children:[Object(g.jsx)(O.N,{className:"form-label",for:"Account",children:"Account"}),Object(g.jsx)(O.K,{value:A.Account,onChange:function(e){return N(Object(a.a)(Object(a.a)({},A),{},{Account:e.target.value}))},id:"Account",name:"Account"})]}),Object(g.jsxs)(O.B,{xs:"12",sm:"6",md:"3",className:"mb-1",children:[Object(g.jsx)(O.N,{className:"form-label",for:"Strategy",children:"Strategy"}),Object(g.jsx)(O.K,{id:"Strategy",name:"Strategy",value:A.Strategy,onChange:function(e){return N(Object(a.a)(Object(a.a)({},A),{},{Strategy:e.target.value}))}})]}),Object(g.jsxs)(O.B,{xs:"12",sm:"6",md:"3",className:"mb-1",children:[Object(g.jsx)(O.N,{className:"form-label",for:"RatingSubject",children:"RatingSubject"}),Object(g.jsx)(O.K,{id:"RatingSubject",name:"RatingSubject",value:A.RatingSubject,onChange:function(e){return N(Object(a.a)(Object(a.a)({},A),{},{RatingSubject:e.target.value}))}})]}),Object(g.jsx)(O.B,{xs:"12",sm:"6",md:"3",className:"mb-1 d-flex align-items-end",children:Object(g.jsx)(m.a,{onClick:function(){var e=Object(n.a)(B);0===A.Account.length?p.b.error("Please enter Account."):0===A.Strategy.length?p.b.error("Please enter Strategy."):0===A.RatingSubject.length?p.b.error("Please enter RatingSubject."):(e.push(Object(a.a)(Object(a.a)({},A),{},{id:326782382*Math.random()})),t(Object(x.d)(e)),N({Account:"",Strategy:"",RatingSubject:""}))},outline:!0,color:"primary",type:"button",children:"Add"})}),Object(g.jsx)(O.B,{xs:"12",children:Object(g.jsx)(o.a,{noDataComponent:Object(g.jsx)("div",{style:{margin:"24px 0"},children:"No Shared Group Added Yet."}),noHeader:!0,columns:j.a,className:"react-dataTable",style:{background:"red"},sortIcon:Object(g.jsx)(b.a,{size:10}),data:B,theme:"dark"===e?"darkTheme":""})})]})]}),Object(g.jsx)(O.n,{className:"border-top d-flex justify-content-center",children:Object(g.jsx)(m.a,{loading:D.updateSharedGroup,type:"submit",color:"primary",style:{minWidth:150},children:"Submit"})})]})})]})}},499:function(e,t,r){"use strict";var a=r(21),n=r(1),i=r(135),c=r(2),d=r.n(c),s=r(96),u=r(11);t.a=function(e){var t=e.data,r=e.title;return Object(u.jsx)("div",{className:"content-header row",children:Object(u.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2 w-100",children:Object(u.jsx)("div",{className:"row breadcrumbs-top",children:Object(u.jsxs)("div",{className:"col-12",children:[r?Object(u.jsx)("h2",{className:"content-header-title float-start mb-0",children:r}):"",Object(u.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(u.jsxs)(s.g,{children:[Object(u.jsx)(s.h,{tag:"li",children:Object(u.jsx)(i.b,{to:"/",children:"Dashboard"})}),t.map((function(e,r){var c=e.link?i.b:n.Fragment,l=t.length-1===r;return Object(u.jsx)(s.h,{tag:"li",active:!l,className:d()({"text-primary":!l}),children:Object(u.jsx)(c,Object(a.a)(Object(a.a)({},e.link?{to:e.link}:{}),{},{children:e.title}))},r)}))]})})]})})})})}},501:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return i})),r.d(t,"f",(function(){return c})),r.d(t,"d",(function(){return d})),r.d(t,"e",(function(){return s})),r.d(t,"a",(function(){return u})),r.d(t,"g",(function(){return l}));var a=r(508),n=a.b({TPid:a.d().required("The TPid field is required."),ID:a.d().required("The ID field is required.")}),i=a.b({TPid:a.d().required("The TPid field is required."),Tenant:a.d().required("The Tenant field is required."),ID:a.d().required("The ID field is required."),ActivationTime:a.d().required("The ActivationTime field is required."),ExpiryTime:a.d().required("The ExpiryTime field is required."),RunID:a.d().required("The RunID field is required."),FilterIDs:a.a().min(1).required("The FilterIDs field is required."),AttributeIDs:a.a().min(1).required("The AttributeIDs field is required.")}),c=a.b({TPid:a.d().required("The TPid field is required."),ID:a.d().required("The ID field is required."),MonthDays:a.d().required("The MonthDays field is required."),Months:a.d().required("The Months field is required."),Time:a.d().required("The Time field is required."),WeekDays:a.d().required("The WeekDays field is required."),Years:a.d().required("The Years field is required.")}),d=a.b({TPid:a.d().required("The TPid field is required."),ID:a.d().required("The ID field is required."),Prefixes:a.a().min(1).required("The Prefixes field is required.")}),s=a.b({TPid:a.d().required("The TPid field is required."),LoadId:a.d().required("The LoadId field is required."),Tenant:a.d().required("The Tenant field is required."),Category:a.d().required("The Category field is required."),Subject:a.d().required("The Subject field is required.")}),u=a.b({Account:a.d().required("The Account field is required."),Tenant:a.d().required("The Tenant field is required."),ActionPlanIDs:a.b().nullable(!1).required("The ActionPlanIDs field is required."),ActionTriggerIDs:a.b().nullable(!1).required("The ActionTriggerIDs field is required."),Balances:a.a().min(1,"You should select a balance.").required("You should select a balance.")}),l=a.b({Account:a.d().required("The Account field is required."),Tenant:a.d().required("The Tenant field is required."),ActionTriggerIDs:a.b().nullable(!1).required("The ActionTriggerIDs field is required."),Balances:a.a().min(1,"You should select a balance.").required("You should select a balance.")})},504:function(e,t,r){"use strict";r(1),r(505);var a=r(11);t.a=function(){return Object(a.jsx)("div",{className:"linear-activity",children:Object(a.jsx)("div",{className:"indeterminate"})})}},505:function(e,t,r){},677:function(e,t,r){"use strict";var a=r(137),n=r(4),i=r(21),c=r(7),d=r(16),s=r(1),u=r(512),l=r(136),o=r(511),b=r(138),j=r(9),h=r(501),p=r(146),O=["id"],m=["id"];t.a=function(){var e=Object(l.b)(),t=Object(j.f)(),r=Object(o.a)().httpService,f=Object(s.useState)({getSharedGroups:!1,getEntityById:!1,createSharedGroup:!1,updateSharedGroup:!1,deleteEntity:!1}),v=Object(d.a)(f,2),x=v[0],T=v[1],g=Object(s.useState)([]),S=Object(d.a)(g,2),q=S[0],y=S[1],I=Object(l.c)((function(e){return e.sharedGroups.slots})),D=Object(l.c)((function(e){return e.app.selectedTpId})),P=function(){var e=Object(c.a)(Object(n.a)().mark((function e(){var t,a,c,d;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.prev=1,T(Object(i.a)(Object(i.a)({},x),{},{getSharedGroups:!0})),e.next=5,r.post("",{method:"APIerSv1.GetTPSharedGroupIds",params:[{TPid:D}]});case 5:d=e.sent,T(Object(i.a)(Object(i.a)({},x),{},{getSharedGroups:!1})),null===d||void 0===d||null===(a=d.data)||void 0===a||null===(c=a.result)||void 0===c||c.map((function(e){t.push({ID:e})})),y(t),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(1),e.t0.err,e.t0.response,T(Object(i.a)(Object(i.a)({},x),{},{getSharedGroups:!1}));case 16:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}(),G=function(){var a=Object(c.a)(Object(n.a)().mark((function a(c){var d,s,u,l,o,j,h;return Object(n.a)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,T(Object(i.a)(Object(i.a)({},x),{},{getEntityById:!0})),a.next=4,r.post("",{method:"APIerSv1.GetTPSharedGroups",params:[{TPid:D,ID:c}]});case 4:s=a.sent,T(Object(i.a)(Object(i.a)({},x),{},{getEntityById:!1})),"NOT_FOUND"===(null===s||void 0===s||null===(d=s.data)||void 0===d?void 0:d.error)?(b.b.error(null===s||void 0===s||null===(u=s.data)||void 0===u?void 0:u.error),t("/rules/shared_groups")):(k.setFieldValue("ID",null===s||void 0===s||null===(l=s.data)||void 0===l||null===(o=l.result)||void 0===o?void 0:o.ID),e(Object(p.d)(null===s||void 0===s||null===(j=s.data)||void 0===j||null===(h=j.result)||void 0===h?void 0:h.SharedGroups))),a.next=14;break;case 9:a.prev=9,a.t0=a.catch(0),a.t0.err,a.t0.response,T(Object(i.a)(Object(i.a)({},x),{},{getEntityById:!1}));case 14:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}(),A=Object(u.a)({initialValues:{TPid:D,ID:"",SharedGroups:[]},validationSchema:h.b,enableReinitialize:!0,onSubmit:function(e){0===I.length?b.b.error("You must add at least one shared group."):N(e,I)}}),N=function(){var d=Object(c.a)(Object(n.a)().mark((function c(d,s){var u,l;return Object(n.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u=s.map((function(e){e.id;return Object(a.a)(e,O)})),n.prev=1,T(Object(i.a)(Object(i.a)({},x),{},{createSharedGroup:!0})),n.next=5,r.post("",{method:"APIerSv1.SetTPSharedGroups",params:[{TPid:D,ID:d.ID,SharedGroups:u}]});case 5:l=n.sent,T(Object(i.a)(Object(i.a)({},x),{},{createSharedGroup:!1})),200===l.status&&(b.b.success("Successfully Created!"),t("/rules/shared_groups"),e(Object(p.d)([]))),n.next=15;break;case 10:n.prev=10,n.t0=n.catch(1),n.t0.err,n.t0.response,T(Object(i.a)(Object(i.a)({},x),{},{createSharedGroup:!1}));case 15:case"end":return n.stop()}}),c,null,[[1,10]])})));return function(e,t){return d.apply(this,arguments)}}(),k=Object(u.a)({initialValues:{TPid:D,ID:"",SharedGroups:[]},validationSchema:h.b,enableReinitialize:!0,onSubmit:function(e){0===I.length?b.b.error("You must add at least one shared group."):w(e,I)}}),w=function(){var d=Object(c.a)(Object(n.a)().mark((function c(d,s){var u,l;return Object(n.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u=s.map((function(e){e.id;return Object(a.a)(e,m)})),n.prev=1,T(Object(i.a)(Object(i.a)({},x),{},{updateSharedGroup:!0})),n.next=5,r.post("",{method:"APIerSv1.SetTPSharedGroups",params:[{TPid:D,ID:d.ID,SharedGroups:u}]});case 5:l=n.sent,T(Object(i.a)(Object(i.a)({},x),{},{updateSharedGroup:!1})),200===l.status&&(b.b.success("Successfully Updated!"),t("/rules/shared_groups"),e(Object(p.d)([]))),n.next=15;break;case 10:n.prev=10,n.t0=n.catch(1),n.t0.err,n.t0.response,T(Object(i.a)(Object(i.a)({},x),{},{updateSharedGroup:!1}));case 15:case"end":return n.stop()}}),c,null,[[1,10]])})));return function(e,t){return d.apply(this,arguments)}}(),B=function(){var t=Object(c.a)(Object(n.a)().mark((function t(a){return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,T(Object(i.a)(Object(i.a)({},x),{},{deleteEntity:!0})),t.next=4,r.post("",{method:"APIerSv1.RemoveTPSharedGroups",params:[{TPid:D,ID:a}]});case 4:t.sent,T(Object(i.a)(Object(i.a)({},x),{},{deleteEntity:!1})),e(Object(p.b)(null)),b.b.success("Successfully Deleted."),P(),t.next=16;break;case 11:t.prev=11,t.t0=t.catch(0),t.t0.err,t.t0.response,T(Object(i.a)(Object(i.a)({},x),{},{deleteEntity:!1}));case 16:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}();return{getSharedGroups:P,getEntityById:G,createSharedGroupController:A,updateSharedGroupController:k,deleteEntity:B,listData:q,loadings:x}}},817:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var a=r(96),n=r(136),i=r(146),c=r(11),d=function(e){var t=e.id,r=Object(n.b)(),d=Object(n.c)((function(e){return e.sharedGroups.slots}));return Object(c.jsx)(a.i,{onClick:function(){return r(Object(i.d)(d.filter((function(e){return e.id!==t}))))},style:{padding:6},size:"sm",color:"danger",type:"button",children:"Delete"})},s=[{name:"Account",minWidth:"100px",selector:function(e){return e.Account}},{name:"Strategy",minWidth:"100px",selector:function(e){return e.Strategy}},{name:"RatingSubject",minWidth:"100px",selector:function(e){return e.RatingSubject}},{name:"Actions",minWidth:"120px",maxWidth:"120px",selector:function(e){return e.id},cell:function(e){return Object(c.jsx)(d,{id:e.id})}}]}}]);
//# sourceMappingURL=76.0a69d85b.chunk.js.map