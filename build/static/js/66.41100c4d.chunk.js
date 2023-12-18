(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[66],{1734:function(e,t,i){"use strict";i.r(t);var r=i(1),n=i(499),a=i(676),c=i(504),l=i(96),d=i(9),s=i(136),o=i(145),u=i(11),b=function(e){var t=e.row,i=Object(d.f)(),r=Object(s.b)();return Object(u.jsxs)("div",{className:"d-flex align-items-center",children:[Object(u.jsx)(l.i,{onClick:function(){r(Object(o.c)(t.ID)),r(Object(o.b)(1))},style:{marginRight:8},color:"danger",size:"sm",children:"Delete"}),Object(u.jsx)(l.i,{onClick:function(){i("/rules/rating_profiles/update?entity_id=".concat(t.ID))},style:{marginRight:8},color:"primary",size:"sm",children:"Update"})]})},j=[{name:"ID",minWidth:"100px",selector:function(e){return e.ID}},{name:"Operations",minWidth:"100px",selector:function(e){return e.ID},cell:function(e){return Object(u.jsx)(b,{row:e})}}],f=i(506),O=i.n(f),h=i(502),g=i(529);t.default=function(){var e=Object(h.a)().skin,t=Object(s.b)(),i=Object(d.f)(),b=Object(a.a)(),f=b.getRatingProfiles,v=b.deleteEntity,p=b.listData,T=b.loadings,m=Object(s.c)((function(e){return e.ratingProfiles.deleteModal})),P=Object(s.c)((function(e){return e.ratingProfiles.selectedEntity})),y=Object(s.c)((function(e){return e.app.getAllTpIdsLoading})),q=Object(s.c)((function(e){return e.app.selectedTpId}));return Object(r.useEffect)((function(){q&&f()}),[q]),Object(u.jsxs)(r.Fragment,{children:[Object(u.jsxs)(l.B,{className:"position-relative",xs:12,children:[Object(u.jsx)(n.a,{title:"Rating Profiles",data:[{title:"Rating Profiles"}]}),Object(u.jsx)(l.i,{onClick:function(){return i("/rules/rating_profiles/new")},color:"primary",style:{position:"absolute",right:0,top:0},children:"New Rating Profile"})]}),y?Object(u.jsx)("div",{style:{width:"100%",height:"50vh"},className:"d-flex justify-content-center align-items-center",children:"Loading TPIds..."}):null,!y&&T.getRatingProfiles?Object(u.jsx)("div",{className:"datatable_loading_cover",children:Object(u.jsx)(c.a,{})}):null,y||T.getRatingProfiles?null:Object(u.jsx)(r.Fragment,{children:Object(u.jsx)(O.a,{noDataComponent:T.getRatingProfiles?"":Object(u.jsx)("div",{style:{margin:"24px 0"},children:"No Rating Profile Founded!"}),noHeader:!0,columns:j,className:"react-dataTable",style:{background:"red"},data:p,theme:"dark"===e?"darkTheme":""})}),Object(u.jsx)(g.a,{visible:m,setVisible:o.b,title:"Are you sure you want to delete this rating profile?",noAction:function(){return t(Object(o.b)(!1))},noColor:"secondary",noTitle:"Cancel",yesLoading:T.deleteEntity,yesAction:function(){return v(P)},yesColor:"danger",yesTitle:"Delete",type:"global"})]})}},499:function(e,t,i){"use strict";var r=i(21),n=i(1),a=i(135),c=i(2),l=i.n(c),d=i(96),s=i(11);t.a=function(e){var t=e.data,i=e.title;return Object(s.jsx)("div",{className:"content-header row",children:Object(s.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2 w-100",children:Object(s.jsx)("div",{className:"row breadcrumbs-top",children:Object(s.jsxs)("div",{className:"col-12",children:[i?Object(s.jsx)("h2",{className:"content-header-title float-start mb-0",children:i}):"",Object(s.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(s.jsxs)(d.g,{children:[Object(s.jsx)(d.h,{tag:"li",children:Object(s.jsx)(a.b,{to:"/",children:"Dashboard"})}),t.map((function(e,i){var c=e.link?a.b:n.Fragment,o=t.length-1===i;return Object(s.jsx)(d.h,{tag:"li",active:!o,className:l()({"text-primary":!o}),children:Object(s.jsx)(c,Object(r.a)(Object(r.a)({},e.link?{to:e.link}:{}),{},{children:e.title}))},i)}))]})})]})})})})}},501:function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return a})),i.d(t,"f",(function(){return c})),i.d(t,"d",(function(){return l})),i.d(t,"e",(function(){return d})),i.d(t,"a",(function(){return s})),i.d(t,"g",(function(){return o}));var r=i(508),n=r.b({TPid:r.d().required("The TPid field is required."),ID:r.d().required("The ID field is required.")}),a=r.b({TPid:r.d().required("The TPid field is required."),Tenant:r.d().required("The Tenant field is required."),ID:r.d().required("The ID field is required."),ActivationTime:r.d().required("The ActivationTime field is required."),ExpiryTime:r.d().required("The ExpiryTime field is required."),RunID:r.d().required("The RunID field is required."),FilterIDs:r.a().min(1).required("The FilterIDs field is required."),AttributeIDs:r.a().min(1).required("The AttributeIDs field is required.")}),c=r.b({TPid:r.d().required("The TPid field is required."),ID:r.d().required("The ID field is required."),MonthDays:r.d().required("The MonthDays field is required."),Months:r.d().required("The Months field is required."),Time:r.d().required("The Time field is required."),WeekDays:r.d().required("The WeekDays field is required."),Years:r.d().required("The Years field is required.")}),l=r.b({TPid:r.d().required("The TPid field is required."),ID:r.d().required("The ID field is required."),Prefixes:r.a().min(1).required("The Prefixes field is required.")}),d=r.b({TPid:r.d().required("The TPid field is required."),LoadId:r.d().required("The LoadId field is required."),Tenant:r.d().required("The Tenant field is required."),Category:r.d().required("The Category field is required."),Subject:r.d().required("The Subject field is required.")}),s=r.b({Account:r.d().required("The Account field is required."),Tenant:r.d().required("The Tenant field is required."),ActionPlanIDs:r.b().nullable(!1).required("The ActionPlanIDs field is required."),ActionTriggerIDs:r.b().nullable(!1).required("The ActionTriggerIDs field is required."),Balances:r.a().min(1,"You should select a balance.").required("You should select a balance.")}),o=r.b({Account:r.d().required("The Account field is required."),Tenant:r.d().required("The Tenant field is required."),ActionTriggerIDs:r.b().nullable(!1).required("The ActionTriggerIDs field is required."),Balances:r.a().min(1,"You should select a balance.").required("You should select a balance.")})},504:function(e,t,i){"use strict";i(1),i(505);var r=i(11);t.a=function(){return Object(r.jsx)("div",{className:"linear-activity",children:Object(r.jsx)("div",{className:"indeterminate"})})}},505:function(e,t,i){},529:function(e,t,i){"use strict";var r=i(96),n=i(509),a=i(136),c=i(11);t.a=function(e){var t=e.visible,i=e.setVisible,l=e.title,d=e.noAction,s=e.noColor,o=e.noTitle,u=e.yesLoading,b=e.yesAction,j=e.yesColor,f=e.yesTitle,O=e.type,h=e.size,g=e.children,v=Object(a.b)();return Object(c.jsxs)(r.Q,{isOpen:1===t,size:h||"md",toggle:function(){"global"===O?v(i(null)):i(null)},className:"modal-dialog-centered",modalClassName:"modal-primary",children:[Object(c.jsx)(r.T,{toggle:function(){"global"===O?v(i(null)):i(null)},children:l}),Object(c.jsx)(r.R,{children:g}),Object(c.jsxs)(r.S,{className:"w-100 d-flex justify-content-center",children:[Object(c.jsx)(n.a,{onClick:d,style:{width:160},color:s||"danger",children:o}),Object(c.jsx)(n.a,{loading:u,onClick:b,style:{width:160},color:j||"success",children:f})]})]},1)}},676:function(e,t,i){"use strict";var r=i(137),n=i(4),a=i(21),c=i(7),l=i(16),d=i(1),s=i(512),o=i(136),u=i(511),b=i(138),j=i(9),f=i(501),O=i(145),h=["id"],g=["id"];t.a=function(){var e=Object(o.b)(),t=Object(j.f)(),i=Object(u.a)().httpService,v=Object(d.useState)({getRatingProfiles:!1,getEntityById:!1,createRatingProfile:!1,updateRatingProfile:!1,deleteEntity:!1}),p=Object(l.a)(v,2),T=p[0],m=p[1],P=Object(d.useState)([]),y=Object(l.a)(P,2),q=y[0],x=y[1],I=Object(o.c)((function(e){return e.ratingProfiles.slots})),R=Object(o.c)((function(e){return e.app.selectedTpId})),D=function(){var e=Object(c.a)(Object(n.a)().mark((function e(){var t,r,c,l;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.prev=1,m(Object(a.a)(Object(a.a)({},T),{},{getRatingProfiles:!0})),e.next=5,i.post("",{method:"APIerSv1.GetTPRatingProfileIds",params:[{TPid:R}]});case 5:l=e.sent,m(Object(a.a)(Object(a.a)({},T),{},{getRatingProfiles:!1})),null===l||void 0===l||null===(r=l.data)||void 0===r||null===(c=r.result)||void 0===c||c.map((function(e){t.push({ID:e})})),x(t),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(1),e.t0.err,e.t0.response,m(Object(a.a)(Object(a.a)({},T),{},{getRatingProfiles:!1}));case 16:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}(),A=function(){var r=Object(c.a)(Object(n.a)().mark((function r(c){var l,d,s,o,u,j,f,h,g,v,p,P,y,q,x;return Object(n.a)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,m(Object(a.a)(Object(a.a)({},T),{},{getEntityById:!0})),r.next=4,i.post("",{method:"APIerSv1.GetTPRatingProfile",params:[{TPid:R,RatingProfileID:c}]});case 4:d=r.sent,m(Object(a.a)(Object(a.a)({},T),{},{getEntityById:!1})),"NOT_FOUND"===(null===d||void 0===d||null===(l=d.data)||void 0===l?void 0:l.error)?(b.b.error(null===d||void 0===d||null===(s=d.data)||void 0===s?void 0:s.error),t("/rules/rating_profiles")):(k.setFieldValue("ID",null===d||void 0===d||null===(o=d.data)||void 0===o||null===(u=o.result)||void 0===u?void 0:u.ID),k.setFieldValue("LoadId",null===d||void 0===d||null===(j=d.data)||void 0===j||null===(f=j.result)||void 0===f?void 0:f.LoadId),k.setFieldValue("Tenant",null===d||void 0===d||null===(h=d.data)||void 0===h||null===(g=h.result)||void 0===g?void 0:g.Tenant),k.setFieldValue("Category",null===d||void 0===d||null===(v=d.data)||void 0===v||null===(p=v.result)||void 0===p?void 0:p.Category),k.setFieldValue("Subject",null===d||void 0===d||null===(P=d.data)||void 0===P||null===(y=P.result)||void 0===y?void 0:y.Subject),e(Object(O.d)(null===d||void 0===d||null===(q=d.data)||void 0===q||null===(x=q.result)||void 0===x?void 0:x.RatingPlanActivations))),r.next=14;break;case 9:r.prev=9,r.t0=r.catch(0),r.t0.err,r.t0.response,m(Object(a.a)(Object(a.a)({},T),{},{getEntityById:!1}));case 14:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(e){return r.apply(this,arguments)}}(),w=Object(s.a)({initialValues:{TPid:R,LoadId:"",Tenant:"",Category:"",Subject:"",Overwrite:!0,RatingPlanActivations:[],APIOpts:{}},validationSchema:f.e,enableReinitialize:!0,onSubmit:function(e){0===I.length?b.b.error("You must add at least one rating plan activation."):S(e,I)}}),S=function(){var l=Object(c.a)(Object(n.a)().mark((function c(l,d){var s,o;return Object(n.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s=d.map((function(e){e.id;return Object(r.a)(e,h)})),n.prev=1,m(Object(a.a)(Object(a.a)({},T),{},{createRatingProfile:!0})),n.next=5,i.post("",{method:"APIerSv1.SetTPRatingProfile",params:[{TPid:R,LoadId:l.LoadId,Tenant:l.Tenant,Category:l.Category,Subject:l.Subject,Overwrite:l.Overwrite,RatingPlanActivations:s,APIOpts:{}}]});case 5:o=n.sent,m(Object(a.a)(Object(a.a)({},T),{},{createRatingProfile:!1})),200===o.status&&(b.b.success("Successfully Created!"),t("/rules/rating_profiles"),e(Object(O.d)([]))),n.next=15;break;case 10:n.prev=10,n.t0=n.catch(1),n.t0.err,n.t0.response,m(Object(a.a)(Object(a.a)({},T),{},{createRatingProfile:!1}));case 15:case"end":return n.stop()}}),c,null,[[1,10]])})));return function(e,t){return l.apply(this,arguments)}}(),k=Object(s.a)({initialValues:{TPid:R,LoadId:"",Tenant:"",Category:"",Subject:"",Overwrite:!0,RatingPlanActivations:[],APIOpts:{}},validationSchema:f.e,enableReinitialize:!0,onSubmit:function(e){0===I.length?b.b.error("You must add at least one rating plan activation."):C(e,I)}}),C=function(){var l=Object(c.a)(Object(n.a)().mark((function c(l,d){var s,o;return Object(n.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s=d.map((function(e){e.id;return Object(r.a)(e,g)})),n.prev=1,m(Object(a.a)(Object(a.a)({},T),{},{updateRatingProfile:!0})),n.next=5,i.post("",{method:"APIerSv1.SetTPRatingProfile",params:[{TPid:R,LoadId:l.LoadId,Tenant:l.Tenant,Category:l.Category,Subject:l.Subject,Overwrite:l.Overwrite,RatingPlanActivations:s,APIOpts:{}}]});case 5:o=n.sent,m(Object(a.a)(Object(a.a)({},T),{},{updateRatingProfile:!1})),200===o.status&&(b.b.success("Successfully Updated!"),t("/rules/rating_profiles"),e(Object(O.d)([]))),n.next=15;break;case 10:n.prev=10,n.t0=n.catch(1),n.t0.err,n.t0.response,m(Object(a.a)(Object(a.a)({},T),{},{updateRatingProfile:!1}));case 15:case"end":return n.stop()}}),c,null,[[1,10]])})));return function(e,t){return l.apply(this,arguments)}}(),N=function(){var t=Object(c.a)(Object(n.a)().mark((function t(r){return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,m(Object(a.a)(Object(a.a)({},T),{},{deleteEntity:!0})),t.next=4,i.post("",{method:"APIerSv1.RemoveTPRatingProfile",params:[{TPid:R,RatingProfileID:r}]});case 4:t.sent,m(Object(a.a)(Object(a.a)({},T),{},{deleteEntity:!1})),e(Object(O.b)(null)),b.b.success("Successfully Deleted."),D(),t.next=16;break;case 11:t.prev=11,t.t0=t.catch(0),t.t0.err,t.t0.response,m(Object(a.a)(Object(a.a)({},T),{},{deleteEntity:!1}));case 16:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}();return{getRatingProfiles:D,getEntityById:A,createRatingProfileController:w,updateRatingProfileController:k,deleteEntity:N,listData:q,loadings:T}}}}]);
//# sourceMappingURL=66.41100c4d.chunk.js.map