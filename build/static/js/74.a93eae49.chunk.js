(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[74],{1611:function(e,t,r){"use strict";r.r(t);var d=r(1),i=r(481),a=r(7),s=r(129),c=r(488),n=r.n(c),l=r(841),u=r(789),o=r(486),h=r(131),b=r(89),j=r(492),m=r(484),p=r(130),g=r(138),O=r(650),T=r(9);t.default=()=>{const{skin:e}=Object(m.a)(),t=Object(p.b)(),r=Object(a.f)(),[c]=Object(s.d)(),{getEntityById:S,updateSharedGroupController:x,loadings:f}=Object(O.a)(),[y,v]=Object(d.useState)({Account:"",Strategy:"",RatingSubject:""}),I=Object(p.c)((e=>e.app.getAllTpIdsLoading)),q=Object(p.c)((e=>e.app.selectedTpId)),D=Object(p.c)((e=>e.sharedGroups.slots));return Object(d.useEffect)((()=>{let e=c.get("entity_id");e?q&&S(e):r("/rules/shared_groups")}),[q]),Object(T.jsxs)(d.Fragment,{children:[Object(T.jsx)(i.a,{title:"Update Shared Group",data:[{title:"Update Shared Group"}]}),f.getEntityById?Object(T.jsx)(o.a,{}):null,I||f.getEntityById?null:Object(T.jsx)(b.H,{onSubmit:e=>{e.preventDefault(),window.scroll({top:0,behavior:"smooth"}),x.handleSubmit()},className:"d-flex flex-column align-items-center",children:Object(T.jsxs)(b.l,{className:"w-100",children:[Object(T.jsx)(b.p,{className:"border-bottom",children:Object(T.jsx)(b.v,{children:"Update Shared Group Form"})}),Object(T.jsxs)(b.m,{className:"pt-2",children:[Object(T.jsxs)(b.ib,{className:"border-bottom mb-1",children:[Object(T.jsxs)(b.B,{xs:"12",sm:"6",md:"4",className:"mb-1",children:[Object(T.jsx)(b.N,{className:"form-label",for:"TPid",children:"TPid"}),Object(T.jsx)(b.K,{id:"TPid",name:"TPid",disabled:!0,value:x.values.TPid,onChange:x.handleChange,invalid:x.touched.TPid&&x.errors.TPid}),x.touched.TPid&&x.errors.TPid?Object(T.jsx)(b.I,{children:x.errors.TPid}):null]}),Object(T.jsxs)(b.B,{xs:"12",sm:"6",md:"4",className:"mb-1",children:[Object(T.jsx)(b.N,{className:"form-label",for:"ID",children:"ID"}),Object(T.jsx)(b.K,{id:"ID",name:"ID",disabled:!0,value:x.values.ID,onChange:x.handleChange,invalid:x.touched.ID&&x.errors.ID}),x.touched.ID&&x.errors.ID?Object(T.jsx)(b.I,{children:x.errors.ID}):null]})]}),Object(T.jsxs)(b.ib,{children:[Object(T.jsx)(b.B,{xs:"12",children:Object(T.jsx)(b.v,{children:"Shared Groups"})}),Object(T.jsxs)(b.B,{xs:"12",sm:"6",md:"3",className:"mb-1",children:[Object(T.jsx)(b.N,{className:"form-label",for:"Account",children:"Account"}),Object(T.jsx)(b.K,{value:y.Account,onChange:e=>v({...y,Account:e.target.value}),id:"Account",name:"Account"})]}),Object(T.jsxs)(b.B,{xs:"12",sm:"6",md:"3",className:"mb-1",children:[Object(T.jsx)(b.N,{className:"form-label",for:"Strategy",children:"Strategy"}),Object(T.jsx)(b.K,{id:"Strategy",name:"Strategy",value:y.Strategy,onChange:e=>v({...y,Strategy:e.target.value})})]}),Object(T.jsxs)(b.B,{xs:"12",sm:"6",md:"3",className:"mb-1",children:[Object(T.jsx)(b.N,{className:"form-label",for:"RatingSubject",children:"RatingSubject"}),Object(T.jsx)(b.K,{id:"RatingSubject",name:"RatingSubject",value:y.RatingSubject,onChange:e=>v({...y,RatingSubject:e.target.value})})]}),Object(T.jsx)(b.B,{xs:"12",sm:"6",md:"3",className:"mb-1 d-flex align-items-end",children:Object(T.jsx)(j.a,{onClick:()=>{let e=[...D];0===y.Account.length?h.b.error("Please enter Account."):0===y.Strategy.length?h.b.error("Please enter Strategy."):0===y.RatingSubject.length?h.b.error("Please enter RatingSubject."):(e.push({...y,id:326782382*Math.random()}),t(Object(g.d)(e)),v({Account:"",Strategy:"",RatingSubject:""}))},outline:!0,color:"primary",type:"button",children:"Add"})}),Object(T.jsx)(b.B,{xs:"12",children:Object(T.jsx)(n.a,{noDataComponent:Object(T.jsx)("div",{style:{margin:"24px 0"},children:"No Shared Group Added Yet."}),noHeader:!0,columns:u.a,className:"react-dataTable",style:{background:"red"},sortIcon:Object(T.jsx)(l.a,{size:10}),data:D,theme:"dark"===e?"darkTheme":""})})]})]}),Object(T.jsx)(b.n,{className:"border-top d-flex justify-content-center",children:Object(T.jsx)(j.a,{loading:f.updateSharedGroup,type:"submit",color:"primary",style:{minWidth:150},children:"Submit"})})]})})]})}},481:function(e,t,r){"use strict";var d=r(1),i=r(129),a=r(2),s=r.n(a),c=r(89),n=r(9);t.a=e=>{const{data:t,title:r}=e;return Object(n.jsx)("div",{className:"content-header row",children:Object(n.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2 w-100",children:Object(n.jsx)("div",{className:"row breadcrumbs-top",children:Object(n.jsxs)("div",{className:"col-12",children:[r?Object(n.jsx)("h2",{className:"content-header-title float-start mb-0",children:r}):"",Object(n.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(n.jsxs)(c.g,{children:[Object(n.jsx)(c.h,{tag:"li",children:Object(n.jsx)(i.b,{to:"/",children:"Dashboard"})}),t.map(((e,r)=>{const a=e.link?i.b:d.Fragment,l=t.length-1===r;return Object(n.jsx)(c.h,{tag:"li",active:!l,className:s()({"text-primary":!l}),children:Object(n.jsx)(a,{...e.link?{to:e.link}:{},children:e.title})},r)}))]})})]})})})})}},483:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return a})),r.d(t,"f",(function(){return s})),r.d(t,"d",(function(){return c})),r.d(t,"e",(function(){return n})),r.d(t,"a",(function(){return l}));var d=r(490);const i=d.b({TPid:d.d().required("The TPid field is required."),ID:d.d().required("The ID field is required.")}),a=d.b({TPid:d.d().required("The TPid field is required."),Tenant:d.d().required("The Tenant field is required."),ID:d.d().required("The ID field is required."),ActivationTime:d.d().required("The ActivationTime field is required."),ExpiryTime:d.d().required("The ExpiryTime field is required."),RunID:d.d().required("The RunID field is required."),FilterIDs:d.a().min(1).required("The FilterIDs field is required."),AttributeIDs:d.a().min(1).required("The AttributeIDs field is required.")}),s=d.b({TPid:d.d().required("The TPid field is required."),ID:d.d().required("The ID field is required."),MonthDays:d.d().required("The MonthDays field is required."),Months:d.d().required("The Months field is required."),Time:d.d().required("The Time field is required."),WeekDays:d.d().required("The WeekDays field is required."),Years:d.d().required("The Years field is required.")}),c=d.b({TPid:d.d().required("The TPid field is required."),ID:d.d().required("The ID field is required."),Prefixes:d.a().min(1).required("The Prefixes field is required.")}),n=d.b({TPid:d.d().required("The TPid field is required."),LoadId:d.d().required("The LoadId field is required."),Tenant:d.d().required("The Tenant field is required."),Category:d.d().required("The Category field is required."),Subject:d.d().required("The Subject field is required.")}),l=d.b({Account:d.d().required("The Account field is required."),Tenant:d.d().required("The Tenant field is required."),ActionPlanIDs:d.b().nullable(!1).required("The ActionPlanIDs field is required."),ActionTriggerIDs:d.b().nullable(!1).required("The ActionTriggerIDs field is required."),Balances:d.a().min(1,"You should select a balance.").required("You should select a balance.")})},486:function(e,t,r){"use strict";r(1),r(487);var d=r(9);t.a=()=>Object(d.jsx)("div",{className:"linear-activity",children:Object(d.jsx)("div",{className:"indeterminate"})})},487:function(e,t,r){},650:function(e,t,r){"use strict";var d=r(1),i=r(494),a=r(130),s=r(493),c=r(131),n=r(7),l=r(483),u=r(138);t.a=()=>{const e=Object(a.b)(),t=Object(n.f)(),{httpService:r}=Object(s.a)(),[o,h]=Object(d.useState)({getSharedGroups:!1,getEntityById:!1,createSharedGroup:!1,updateSharedGroup:!1,deleteEntity:!1}),[b,j]=Object(d.useState)([]),m=Object(a.c)((e=>e.sharedGroups.slots)),p=Object(a.c)((e=>e.app.selectedTpId)),g=async()=>{let e=[];try{var t,d;h({...o,getSharedGroups:!0});const i=await r.post("",{method:"APIerSv1.GetTPSharedGroupIds",params:[{TPid:p}]});h({...o,getSharedGroups:!1}),null===i||void 0===i||null===(t=i.data)||void 0===t||null===(d=t.result)||void 0===d||d.map((t=>{e.push({ID:t})})),j(e)}catch({err:i,response:a}){h({...o,getSharedGroups:!1})}},O=Object(i.a)({initialValues:{TPid:p,ID:"",SharedGroups:[]},validationSchema:l.b,enableReinitialize:!0,onSubmit:e=>{0===m.length?c.b.error("You must add at least one shared group."):T(e,m)}}),T=async(d,i)=>{const a=i.map((e=>{const{id:t,...r}=e;return r}));try{h({...o,createSharedGroup:!0});const i=await r.post("",{method:"APIerSv1.SetTPSharedGroups",params:[{TPid:p,ID:d.ID,SharedGroups:a}]});h({...o,createSharedGroup:!1}),200===i.status&&(c.b.success("Successfully Created!"),t("/rules/shared_groups"),e(Object(u.d)([])))}catch({err:s,response:n}){h({...o,createSharedGroup:!1})}},S=Object(i.a)({initialValues:{TPid:p,ID:"",SharedGroups:[]},validationSchema:l.b,enableReinitialize:!0,onSubmit:e=>{0===m.length?c.b.error("You must add at least one shared group."):x(e,m)}}),x=async(d,i)=>{const a=i.map((e=>{const{id:t,...r}=e;return r}));try{h({...o,updateSharedGroup:!0});const i=await r.post("",{method:"APIerSv1.SetTPSharedGroups",params:[{TPid:p,ID:d.ID,SharedGroups:a}]});h({...o,updateSharedGroup:!1}),200===i.status&&(c.b.success("Successfully Updated!"),t("/rules/shared_groups"),e(Object(u.d)([])))}catch({err:s,response:n}){h({...o,updateSharedGroup:!1})}};return{getSharedGroups:g,getEntityById:async d=>{try{var i;h({...o,getEntityById:!0});const j=await r.post("",{method:"APIerSv1.GetTPSharedGroups",params:[{TPid:p,ID:d}]});var a,s,n,l,b;if(h({...o,getEntityById:!1}),"NOT_FOUND"===(null===j||void 0===j||null===(i=j.data)||void 0===i?void 0:i.error))c.b.error(null===j||void 0===j||null===(a=j.data)||void 0===a?void 0:a.error),t("/rules/shared_groups");else S.setFieldValue("ID",null===j||void 0===j||null===(s=j.data)||void 0===s||null===(n=s.result)||void 0===n?void 0:n.ID),e(Object(u.d)(null===j||void 0===j||null===(l=j.data)||void 0===l||null===(b=l.result)||void 0===b?void 0:b.SharedGroups))}catch({err:j,response:m}){h({...o,getEntityById:!1})}},createSharedGroupController:O,updateSharedGroupController:S,deleteEntity:async t=>{try{h({...o,deleteEntity:!0});await r.post("",{method:"APIerSv1.RemoveTPSharedGroups",params:[{TPid:p,ID:t}]});h({...o,deleteEntity:!1}),e(Object(u.b)(null)),c.b.success("Successfully Deleted."),g()}catch({err:d,response:i}){h({...o,deleteEntity:!1})}},listData:b,loadings:o}}},789:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var d=r(89),i=r(130),a=r(138),s=r(9);var c=e=>{let{id:t}=e;const r=Object(i.b)(),c=Object(i.c)((e=>e.sharedGroups.slots));return Object(s.jsx)(d.i,{onClick:()=>r(Object(a.d)(c.filter((e=>e.id!==t)))),style:{padding:6},size:"sm",color:"danger",type:"button",children:"Delete"})};const n=[{name:"Account",minWidth:"100px",selector:e=>e.Account},{name:"Strategy",minWidth:"100px",selector:e=>e.Strategy},{name:"RatingSubject",minWidth:"100px",selector:e=>e.RatingSubject},{name:"Actions",minWidth:"120px",maxWidth:"120px",selector:e=>e.id,cell:e=>Object(s.jsx)(c,{id:e.id})}]}}]);
//# sourceMappingURL=74.a93eae49.chunk.js.map