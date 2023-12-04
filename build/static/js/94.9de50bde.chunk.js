(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[94],{1608:function(e,r,t){"use strict";t.r(r);var d=t(1),i=t(480),a=t(488),s=t.n(a),c=t(838),n=t(786),l=t(131),o=t(89),u=t(482),h=t(484),b=t(130),j=t(138),m=t(646),p=t(9);r.default=()=>{const{skin:e}=Object(h.a)(),r=Object(b.b)(),{createSharedGroupController:t,loadings:a}=Object(m.a)(),[S,x]=Object(d.useState)({Account:"",Strategy:"",RatingSubject:""}),O=Object(b.c)((e=>e.sharedGroups.slots));return Object(d.useEffect)((()=>{r(Object(j.d)([]))}),[]),Object(p.jsxs)(d.Fragment,{children:[Object(p.jsx)(i.a,{title:"New Shared Group",data:[{title:"New Shared Group"}]}),Object(p.jsx)(o.H,{onSubmit:e=>{e.preventDefault(),window.scroll({top:0,behavior:"smooth"}),t.handleSubmit()},className:"d-flex flex-column align-items-center",children:Object(p.jsxs)(o.l,{className:"w-100",children:[Object(p.jsx)(o.p,{className:"border-bottom",children:Object(p.jsx)(o.v,{children:"New Shared Group Form"})}),Object(p.jsxs)(o.m,{className:"pt-2",children:[Object(p.jsxs)(o.ib,{className:"border-bottom mb-1",children:[Object(p.jsxs)(o.B,{xs:"12",sm:"6",md:"4",className:"mb-1",children:[Object(p.jsx)(o.N,{className:"form-label",for:"TPid",children:"TPid"}),Object(p.jsx)(o.K,{id:"TPid",name:"TPid",disabled:!0,value:t.values.TPid,onChange:t.handleChange,invalid:t.touched.TPid&&t.errors.TPid}),t.touched.TPid&&t.errors.TPid?Object(p.jsx)(o.I,{children:t.errors.TPid}):null]}),Object(p.jsxs)(o.B,{xs:"12",sm:"6",md:"4",className:"mb-1",children:[Object(p.jsx)(o.N,{className:"form-label",for:"ID",children:"ID"}),Object(p.jsx)(o.K,{id:"ID",name:"ID",value:t.values.ID,onChange:t.handleChange,invalid:t.touched.ID&&t.errors.ID}),t.touched.ID&&t.errors.ID?Object(p.jsx)(o.I,{children:t.errors.ID}):null]})]}),Object(p.jsxs)(o.ib,{children:[Object(p.jsx)(o.B,{xs:"12",children:Object(p.jsx)(o.v,{children:"Shared Groups"})}),Object(p.jsxs)(o.B,{xs:"12",sm:"6",md:"3",className:"mb-1",children:[Object(p.jsx)(o.N,{className:"form-label",for:"Account",children:"Account"}),Object(p.jsx)(o.K,{value:S.Account,onChange:e=>x({...S,Account:e.target.value}),id:"Account",name:"Account"})]}),Object(p.jsxs)(o.B,{xs:"12",sm:"6",md:"3",className:"mb-1",children:[Object(p.jsx)(o.N,{className:"form-label",for:"Strategy",children:"Strategy"}),Object(p.jsx)(o.K,{id:"Strategy",name:"Strategy",value:S.Strategy,onChange:e=>x({...S,Strategy:e.target.value})})]}),Object(p.jsxs)(o.B,{xs:"12",sm:"6",md:"3",className:"mb-1",children:[Object(p.jsx)(o.N,{className:"form-label",for:"RatingSubject",children:"RatingSubject"}),Object(p.jsx)(o.K,{id:"RatingSubject",name:"RatingSubject",value:S.RatingSubject,onChange:e=>x({...S,RatingSubject:e.target.value})})]}),Object(p.jsx)(o.B,{xs:"12",sm:"6",md:"3",className:"mb-1 d-flex align-items-end",children:Object(p.jsx)(u.a,{onClick:()=>{let e=[...O];0===S.Account.length?l.b.error("Please enter Account."):0===S.Strategy.length?l.b.error("Please enter Strategy."):0===S.RatingSubject.length?l.b.error("Please enter RatingSubject."):(e.push({...S,id:326782382*Math.random()}),r(Object(j.d)(e)),x({Account:"",Strategy:"",RatingSubject:""}))},outline:!0,color:"primary",type:"button",children:"Add"})}),Object(p.jsx)(o.B,{xs:"12",children:Object(p.jsx)(s.a,{noDataComponent:Object(p.jsx)("div",{style:{margin:"24px 0"},children:"No Shared Group Added Yet."}),noHeader:!0,columns:n.a,className:"react-dataTable",style:{background:"red"},sortIcon:Object(p.jsx)(c.a,{size:10}),data:O,theme:"dark"===e?"darkTheme":""})})]})]}),Object(p.jsx)(o.n,{className:"border-top d-flex justify-content-center",children:Object(p.jsx)(u.a,{loading:a.createSharedGroup,type:"submit",color:"primary",style:{minWidth:150},children:"Submit"})})]})})]})}},480:function(e,r,t){"use strict";var d=t(1),i=t(129),a=t(2),s=t.n(a),c=t(89),n=t(9);r.a=e=>{const{data:r,title:t}=e;return Object(n.jsx)("div",{className:"content-header row",children:Object(n.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2 w-100",children:Object(n.jsx)("div",{className:"row breadcrumbs-top",children:Object(n.jsxs)("div",{className:"col-12",children:[t?Object(n.jsx)("h2",{className:"content-header-title float-start mb-0",children:t}):"",Object(n.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(n.jsxs)(c.g,{children:[Object(n.jsx)(c.h,{tag:"li",children:Object(n.jsx)(i.b,{to:"/",children:"Dashboard"})}),r.map(((e,t)=>{const a=e.link?i.b:d.Fragment,l=r.length-1===t;return Object(n.jsx)(c.h,{tag:"li",active:!l,className:s()({"text-primary":!l}),children:Object(n.jsx)(a,{...e.link?{to:e.link}:{},children:e.title})},t)}))]})})]})})})})}},482:function(e,r,t){"use strict";var d=t(89),i=t.p+"static/media/button_loading.bbd49f26.svg",a=t(9);r.a=e=>{let{loading:r,children:t,...s}=e;return Object(a.jsxs)(d.i,{disabled:r,...s,children:[r?null:t,r?Object(a.jsx)("img",{width:14,src:i,alt:"loading"}):null]})}},483:function(e,r,t){"use strict";t.d(r,"a",(function(){return i})),t.d(r,"b",(function(){return a})),t.d(r,"e",(function(){return s})),t.d(r,"c",(function(){return c})),t.d(r,"d",(function(){return n}));var d=t(490);const i=d.b({TPid:d.d().required("The TPid field is required."),ID:d.d().required("The ID field is required.")}),a=d.b({TPid:d.d().required("The TPid field is required."),Tenant:d.d().required("The Tenant field is required."),ID:d.d().required("The ID field is required."),ActivationTime:d.d().required("The ActivationTime field is required."),ExpiryTime:d.d().required("The ExpiryTime field is required."),RunID:d.d().required("The RunID field is required."),FilterIDs:d.a().min(1).required("The FilterIDs field is required."),AttributeIDs:d.a().min(1).required("The AttributeIDs field is required.")}),s=d.b({TPid:d.d().required("The TPid field is required."),ID:d.d().required("The ID field is required."),MonthDays:d.d().required("The MonthDays field is required."),Months:d.d().required("The Months field is required."),Time:d.d().required("The Time field is required."),WeekDays:d.d().required("The WeekDays field is required."),Years:d.d().required("The Years field is required.")}),c=d.b({TPid:d.d().required("The TPid field is required."),ID:d.d().required("The ID field is required."),Prefixes:d.a().min(1).required("The Prefixes field is required.")}),n=d.b({TPid:d.d().required("The TPid field is required."),LoadId:d.d().required("The LoadId field is required."),Tenant:d.d().required("The Tenant field is required."),Category:d.d().required("The Category field is required."),Subject:d.d().required("The Subject field is required.")})},646:function(e,r,t){"use strict";var d=t(1),i=t(495),a=t(130),s=t(493),c=t(131),n=t(7),l=t(483),o=t(138);r.a=()=>{const e=Object(a.b)(),r=Object(n.f)(),{httpService:t}=Object(s.a)(),[u,h]=Object(d.useState)({getSharedGroups:!1,getEntityById:!1,createSharedGroup:!1,updateSharedGroup:!1,deleteEntity:!1}),[b,j]=Object(d.useState)([]),m=Object(a.c)((e=>e.sharedGroups.slots)),p=Object(a.c)((e=>e.app.selectedTpId)),S=async()=>{let e=[];try{var r,d;h({...u,getSharedGroups:!0});const i=await t.post("",{method:"APIerSv1.GetTPSharedGroupIds",params:[{TPid:p}]});h({...u,getSharedGroups:!1}),null===i||void 0===i||null===(r=i.data)||void 0===r||null===(d=r.result)||void 0===d||d.map((r=>{e.push({ID:r})})),j(e)}catch({err:i,response:a}){h({...u,getSharedGroups:!1})}},x=Object(i.a)({initialValues:{TPid:p,ID:"",SharedGroups:[]},validationSchema:l.a,enableReinitialize:!0,onSubmit:e=>{0===m.length?c.b.error("You must add at least one shared group."):O(e,m)}}),O=async(d,i)=>{const a=i.map((e=>{const{id:r,...t}=e;return t}));try{h({...u,createSharedGroup:!0});const i=await t.post("",{method:"APIerSv1.SetTPSharedGroups",params:[{TPid:p,ID:d.ID,SharedGroups:a}]});h({...u,createSharedGroup:!1}),200===i.status&&(c.b.success("Successfully Created!"),r("/rules/shared_groups"),e(Object(o.d)([])))}catch({err:s,response:n}){h({...u,createSharedGroup:!1})}},g=Object(i.a)({initialValues:{TPid:p,ID:"",SharedGroups:[]},validationSchema:l.a,enableReinitialize:!0,onSubmit:e=>{0===m.length?c.b.error("You must add at least one shared group."):T(e,m)}}),T=async(d,i)=>{const a=i.map((e=>{const{id:r,...t}=e;return t}));try{h({...u,updateSharedGroup:!0});const i=await t.post("",{method:"APIerSv1.SetTPSharedGroups",params:[{TPid:p,ID:d.ID,SharedGroups:a}]});h({...u,updateSharedGroup:!1}),200===i.status&&(c.b.success("Successfully Updated!"),r("/rules/shared_groups"),e(Object(o.d)([])))}catch({err:s,response:n}){h({...u,updateSharedGroup:!1})}};return{getSharedGroups:S,getEntityById:async d=>{try{var i;h({...u,getEntityById:!0});const j=await t.post("",{method:"APIerSv1.GetTPSharedGroups",params:[{TPid:p,ID:d}]});var a,s,n,l,b;if(h({...u,getEntityById:!1}),"NOT_FOUND"===(null===j||void 0===j||null===(i=j.data)||void 0===i?void 0:i.error))c.b.error(null===j||void 0===j||null===(a=j.data)||void 0===a?void 0:a.error),r("/rules/shared_groups");else g.setFieldValue("ID",null===j||void 0===j||null===(s=j.data)||void 0===s||null===(n=s.result)||void 0===n?void 0:n.ID),e(Object(o.d)(null===j||void 0===j||null===(l=j.data)||void 0===l||null===(b=l.result)||void 0===b?void 0:b.SharedGroups))}catch({err:j,response:m}){h({...u,getEntityById:!1})}},createSharedGroupController:x,updateSharedGroupController:g,deleteEntity:async r=>{try{h({...u,deleteEntity:!0});await t.post("",{method:"APIerSv1.RemoveTPSharedGroups",params:[{TPid:p,ID:r}]});h({...u,deleteEntity:!1}),e(Object(o.b)(null)),c.b.success("Successfully Deleted."),S()}catch({err:d,response:i}){h({...u,deleteEntity:!1})}},listData:b,loadings:u}}},786:function(e,r,t){"use strict";t.d(r,"a",(function(){return n}));var d=t(89),i=t(130),a=t(138),s=t(9);var c=e=>{let{id:r}=e;const t=Object(i.b)(),c=Object(i.c)((e=>e.sharedGroups.slots));return Object(s.jsx)(d.i,{onClick:()=>t(Object(a.d)(c.filter((e=>e.id!==r)))),style:{padding:6},size:"sm",color:"danger",type:"button",children:"Delete"})};const n=[{name:"Account",minWidth:"100px",selector:e=>e.Account},{name:"Strategy",minWidth:"100px",selector:e=>e.Strategy},{name:"RatingSubject",minWidth:"100px",selector:e=>e.RatingSubject},{name:"Actions",minWidth:"120px",maxWidth:"120px",selector:e=>e.id,cell:e=>Object(s.jsx)(c,{id:e.id})}]}}]);
//# sourceMappingURL=94.9de50bde.chunk.js.map