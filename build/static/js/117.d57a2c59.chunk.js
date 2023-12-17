(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[117],{1602:function(e,i,t){"use strict";t.r(i);var r=t(1),s=t(481),d=t(7),n=t(131),a=t(89),l=t(492),c=t(646),o=t(559),u=t(9);i.default=()=>{Object(d.f)();const{createDestinationController:e,loadings:i}=Object(c.a)(),[t,b]=Object(r.useState)("");return Object(u.jsxs)(r.Fragment,{children:[Object(u.jsx)(s.a,{title:"New Destination",data:[{title:"New Destination"}]}),Object(u.jsx)(a.H,{onSubmit:i=>{i.preventDefault(),window.scroll({top:0,behavior:"smooth"}),e.handleSubmit()},className:"d-flex flex-column align-items-center",children:Object(u.jsxs)(a.l,{className:"w-100",children:[Object(u.jsx)(a.p,{className:"border-bottom",children:Object(u.jsx)(a.v,{children:"New Destination Form"})}),Object(u.jsx)(a.m,{className:"pt-2",children:Object(u.jsxs)(a.ib,{children:[Object(u.jsxs)(a.B,{xs:"12",sm:"6",md:"4",className:"mb-1",children:[Object(u.jsx)(a.N,{className:"form-label",for:"TPid",children:"TPid"}),Object(u.jsx)(a.K,{id:"TPid",name:"TPid",disabled:!0,value:e.values.TPid,onChange:e.handleChange,invalid:e.touched.TPid&&e.errors.TPid}),e.touched.TPid&&e.errors.TPid?Object(u.jsx)(a.I,{children:e.errors.TPid}):null]}),Object(u.jsxs)(a.B,{xs:"12",sm:"6",md:"4",className:"mb-1",children:[Object(u.jsx)(a.N,{className:"form-label",for:"ID",children:"ID"}),Object(u.jsx)(a.K,{id:"ID",name:"ID",value:e.values.ID,onChange:e.handleChange,invalid:e.touched.ID&&e.errors.ID}),e.touched.ID&&e.errors.ID?Object(u.jsx)(a.I,{children:e.errors.ID}):null]}),Object(u.jsxs)(a.B,{xs:"12",className:"mb-1",children:[Object(u.jsx)(a.N,{className:"form-label",for:"Prefixes",children:"Prefixes"}),Object(u.jsxs)("div",{className:"position-relative d-flex align-items-center",children:[Object(u.jsx)(a.K,{id:"Prefixes",name:"Prefixes",value:t,onChange:e=>b(e.target.value),invalid:e.touched.Prefixes&&e.errors.Prefixes}),Object(u.jsx)("button",{type:"button",style:{right:35,borderRadius:"50%",border:"none",background:"transparent",width:30,height:30,border:"1px solid rgba(200,200,200,.5)",fontSize:18,color:"#73bcf0",cursor:"pointer"},className:"position-absolute",onClick:()=>{if(0===t.length)n.b.error("Enter Filter ID value.");else{let i=[...e.values.Prefixes];i.push(t),e.setFieldValue("Prefixes",i),b("")}},children:"+"})]}),e.touched.Prefixes&&e.errors.Prefixes?Object(u.jsx)(a.I,{style:{display:"block"},children:e.errors.Prefixes}):null]}),e.values.Prefixes.map(((i,t)=>Object(u.jsxs)(a.B,{xs:"12",className:"mb-1 d-flex align-items-center",children:[Object(u.jsxs)("span",{children:[t+1," -"]}),Object(u.jsx)("span",{children:i}),Object(u.jsx)("button",{type:"button",style:{background:"transparent",border:"none",marginLeft:"auto"},onClick:()=>{let i=[...e.values.Prefixes];i=i.filter(((e,i)=>i!==t)),e.setFieldValue("Prefixes",i)},children:Object(u.jsx)(o.b,{style:{fontSize:14,color:"red"}})})]})))]})}),Object(u.jsx)(a.n,{className:"border-top d-flex justify-content-center",children:Object(u.jsx)(l.a,{loading:i.createDestination,type:"submit",color:"primary",style:{minWidth:150},children:"Submit"})})]})})]})}},481:function(e,i,t){"use strict";var r=t(1),s=t(129),d=t(2),n=t.n(d),a=t(89),l=t(9);i.a=e=>{const{data:i,title:t}=e;return Object(l.jsx)("div",{className:"content-header row",children:Object(l.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2 w-100",children:Object(l.jsx)("div",{className:"row breadcrumbs-top",children:Object(l.jsxs)("div",{className:"col-12",children:[t?Object(l.jsx)("h2",{className:"content-header-title float-start mb-0",children:t}):"",Object(l.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(l.jsxs)(a.g,{children:[Object(l.jsx)(a.h,{tag:"li",children:Object(l.jsx)(s.b,{to:"/",children:"Dashboard"})}),i.map(((e,t)=>{const d=e.link?s.b:r.Fragment,c=i.length-1===t;return Object(l.jsx)(a.h,{tag:"li",active:!c,className:n()({"text-primary":!c}),children:Object(l.jsx)(d,{...e.link?{to:e.link}:{},children:e.title})},t)}))]})})]})})})})}},483:function(e,i,t){"use strict";t.d(i,"b",(function(){return s})),t.d(i,"c",(function(){return d})),t.d(i,"f",(function(){return n})),t.d(i,"d",(function(){return a})),t.d(i,"e",(function(){return l})),t.d(i,"a",(function(){return c}));var r=t(490);const s=r.b({TPid:r.d().required("The TPid field is required."),ID:r.d().required("The ID field is required.")}),d=r.b({TPid:r.d().required("The TPid field is required."),Tenant:r.d().required("The Tenant field is required."),ID:r.d().required("The ID field is required."),ActivationTime:r.d().required("The ActivationTime field is required."),ExpiryTime:r.d().required("The ExpiryTime field is required."),RunID:r.d().required("The RunID field is required."),FilterIDs:r.a().min(1).required("The FilterIDs field is required."),AttributeIDs:r.a().min(1).required("The AttributeIDs field is required.")}),n=r.b({TPid:r.d().required("The TPid field is required."),ID:r.d().required("The ID field is required."),MonthDays:r.d().required("The MonthDays field is required."),Months:r.d().required("The Months field is required."),Time:r.d().required("The Time field is required."),WeekDays:r.d().required("The WeekDays field is required."),Years:r.d().required("The Years field is required.")}),a=r.b({TPid:r.d().required("The TPid field is required."),ID:r.d().required("The ID field is required."),Prefixes:r.a().min(1).required("The Prefixes field is required.")}),l=r.b({TPid:r.d().required("The TPid field is required."),LoadId:r.d().required("The LoadId field is required."),Tenant:r.d().required("The Tenant field is required."),Category:r.d().required("The Category field is required."),Subject:r.d().required("The Subject field is required.")}),c=r.b({Account:r.d().required("The Account field is required."),Tenant:r.d().required("The Tenant field is required."),ActionPlanIDs:r.b().nullable(!1).required("The ActionPlanIDs field is required."),ActionTriggerIDs:r.b().nullable(!1).required("The ActionTriggerIDs field is required."),Balances:r.a().min(1,"You should select a balance.").required("You should select a balance.")})},646:function(e,i,t){"use strict";var r=t(1),s=t(483),d=t(494),n=t(131),a=t(7),l=t(493),c=t(130),o=t(148);i.a=()=>{const e=Object(c.b)(),i=Object(a.f)(),{httpService:t}=Object(l.a)(),[u,b]=Object(r.useState)({getDestinations:!1,getEntityById:!1,createDestination:!1,updateDestination:!1,deleteEntity:!1}),[h,j]=Object(r.useState)([]),f=Object(c.c)((e=>e.app.selectedTpId)),m=async()=>{let e=[];try{var i,r;b({...u,getDestinations:!0});const s=await t.post("",{method:"APIerSv1.GetTPDestinationIDs",params:[{TPid:f}]});b({...u,getDestinations:!1}),null===s||void 0===s||null===(i=s.data)||void 0===i||null===(r=i.result)||void 0===r||r.map((i=>{e.push({ID:i})})),j(e)}catch({err:s,response:d}){b({...u,getDestinations:!1})}},x=Object(d.a)({initialValues:{TPid:f,ID:"",Prefixes:[]},validationSchema:s.d,enableReinitialize:!0,onSubmit:e=>{T(e)}}),T=async e=>{try{b({...u,createDestination:!0});const r=await t.post("",{method:"APIerSv1.SetTPDestination",params:[{TPid:f,ID:e.ID,Prefixes:e.Prefixes}]});b({...u,createDestination:!1}),200===r.status&&(n.b.success("Successfully Created!"),i("/rules/destinations"))}catch({err:r,response:s}){b({...u,createDestination:!1})}},D=Object(d.a)({initialValues:{TPid:f,ID:"",Prefixes:[]},validationSchema:s.d,enableReinitialize:!0,onSubmit:e=>{P(e)}}),P=async e=>{try{b({...u,updateDestination:!0});const r=await t.post("",{method:"APIerSv1.SetTPDestination",params:[{TPid:f,ID:e.ID,Prefixes:e.Prefixes}]});b({...u,updateDestination:!1}),200===r.status&&(n.b.success("Successfully Created!"),i("/rules/destinations"))}catch({err:r,response:s}){b({...u,updateDestination:!1})}};return{getDestinations:m,getEntityById:async e=>{try{var r;b({...u,getEntityById:!0});const o=await t.post("",{method:"APIerSv1.GetTPDestination",params:[{TPid:f,ID:e}]});var s,d,a,l,c;if(b({...u,getEntityById:!1}),"NOT_FOUND"===(null===o||void 0===o||null===(r=o.data)||void 0===r?void 0:r.error))n.b.error(null===o||void 0===o||null===(s=o.data)||void 0===s?void 0:s.error),i("/rules/destinations");else D.setFieldValue("ID",null===o||void 0===o||null===(d=o.data)||void 0===d||null===(a=d.result)||void 0===a?void 0:a.ID),D.setFieldValue("Prefixes",null===o||void 0===o||null===(l=o.data)||void 0===l||null===(c=l.result)||void 0===c?void 0:c.Prefixes)}catch({err:o,response:h}){b({...u,getEntityById:!1})}},createDestinationController:x,updateDestinationController:D,deleteEntity:async i=>{try{b({...u,deleteEntity:!0});await t.post("",{method:"APIerSv1.RemoveTPDestination",params:[{TPid:f,ID:i}]});b({...u,deleteEntity:!1}),e(Object(o.b)(null)),n.b.success("Successfully Deleted."),m()}catch({err:r,response:s}){b({...u,deleteEntity:!1})}},listData:h,loadings:u}}}}]);
//# sourceMappingURL=117.d57a2c59.chunk.js.map