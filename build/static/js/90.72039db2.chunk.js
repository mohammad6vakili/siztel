(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[90],{1590:function(e,t,i){"use strict";i.r(t);var r=i(1),n=i(480),d=i(488),s=i.n(d),a=i(838),c=i(779),l=i(131),o=i(89),u=i(482),b=i(484),m=i(130),h=i(141),j=i(637),T=i(9);t.default=()=>{const{skin:e}=Object(b.a)(),t=Object(m.b)(),{createActionPlanController:i,loadings:d}=Object(j.a)(),[x,O]=Object(r.useState)({ActionsId:"",TimingId:"",Weight:0}),I=Object(m.c)((e=>e.actionPlans.slots));return Object(r.useEffect)((()=>{t(Object(h.d)([]))}),[]),Object(T.jsxs)(r.Fragment,{children:[Object(T.jsx)(n.a,{title:"New Action Plan",data:[{title:"New Action Plan"}]}),Object(T.jsx)(o.H,{onSubmit:e=>{e.preventDefault(),window.scroll({top:0,behavior:"smooth"}),i.handleSubmit()},className:"d-flex flex-column align-items-center",children:Object(T.jsxs)(o.l,{className:"w-100",children:[Object(T.jsx)(o.p,{className:"border-bottom",children:Object(T.jsx)(o.v,{children:"New Action Plan Form"})}),Object(T.jsxs)(o.m,{className:"pt-2",children:[Object(T.jsxs)(o.ib,{className:"border-bottom mb-1",children:[Object(T.jsxs)(o.B,{xs:"12",sm:"6",md:"4",className:"mb-1",children:[Object(T.jsx)(o.N,{className:"form-label",for:"TPid",children:"TPid"}),Object(T.jsx)(o.K,{id:"TPid",name:"TPid",disabled:!0,value:i.values.TPid,onChange:i.handleChange,invalid:i.touched.TPid&&i.errors.TPid}),i.touched.TPid&&i.errors.TPid?Object(T.jsx)(o.I,{children:i.errors.TPid}):null]}),Object(T.jsxs)(o.B,{xs:"12",sm:"6",md:"4",className:"mb-1",children:[Object(T.jsx)(o.N,{className:"form-label",for:"ID",children:"ID"}),Object(T.jsx)(o.K,{id:"ID",name:"ID",value:i.values.ID,onChange:i.handleChange,invalid:i.touched.ID&&i.errors.ID}),i.touched.ID&&i.errors.ID?Object(T.jsx)(o.I,{children:i.errors.ID}):null]})]}),Object(T.jsxs)(o.ib,{children:[Object(T.jsx)(o.B,{xs:"12",children:Object(T.jsx)(o.v,{children:"Actions"})}),Object(T.jsxs)(o.B,{xs:"12",sm:"6",md:"3",className:"mb-1",children:[Object(T.jsx)(o.N,{className:"form-label",for:"ActionsId",children:"ActionsId"}),Object(T.jsx)(o.K,{value:x.ActionsId,onChange:e=>O({...x,ActionsId:e.target.value}),id:"ActionsId",name:"ActionsId"})]}),Object(T.jsxs)(o.B,{xs:"12",sm:"6",md:"3",className:"mb-1",children:[Object(T.jsx)(o.N,{className:"form-label",for:"TimingId",children:"TimingId"}),Object(T.jsx)(o.K,{id:"TimingId",name:"TimingId",value:x.TimingId,onChange:e=>O({...x,TimingId:e.target.value})})]}),Object(T.jsxs)(o.B,{xs:"12",sm:"6",md:"3",className:"mb-1",children:[Object(T.jsx)(o.N,{className:"form-label",for:"Weight",children:"Weight"}),Object(T.jsx)(o.K,{type:"number",id:"Weight",name:"Weight",value:x.Weight,onChange:e=>O({...x,Weight:parseFloat(e.target.value)})})]}),Object(T.jsx)(o.B,{xs:"12",sm:"6",md:"3",className:"mb-1 d-flex align-items-end",children:Object(T.jsx)(u.a,{onClick:()=>{let e=[...I];0===x.ActionsId.length?l.b.error("Please enter ActionsId."):0===x.TimingId.length?l.b.error("Please enter TimingId."):(e.push({...x,id:326782382*Math.random()}),t(Object(h.d)(e)),O({ActionsId:"",TimingId:"",Weight:0}))},outline:!0,color:"primary",type:"button",children:"Add"})}),Object(T.jsx)(o.B,{xs:"12",children:Object(T.jsx)(s.a,{noDataComponent:Object(T.jsx)("div",{style:{margin:"24px 0"},children:"No Action Plan Added Yet."}),noHeader:!0,columns:c.a,className:"react-dataTable",style:{background:"red"},sortIcon:Object(T.jsx)(a.a,{size:10}),data:I,theme:"dark"===e?"darkTheme":""})})]})]}),Object(T.jsx)(o.n,{className:"border-top d-flex justify-content-center",children:Object(T.jsx)(u.a,{loading:d.createActionPlan,type:"submit",color:"primary",style:{minWidth:150},children:"Submit"})})]})})]})}},480:function(e,t,i){"use strict";var r=i(1),n=i(129),d=i(2),s=i.n(d),a=i(89),c=i(9);t.a=e=>{const{data:t,title:i}=e;return Object(c.jsx)("div",{className:"content-header row",children:Object(c.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2 w-100",children:Object(c.jsx)("div",{className:"row breadcrumbs-top",children:Object(c.jsxs)("div",{className:"col-12",children:[i?Object(c.jsx)("h2",{className:"content-header-title float-start mb-0",children:i}):"",Object(c.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(c.jsxs)(a.g,{children:[Object(c.jsx)(a.h,{tag:"li",children:Object(c.jsx)(n.b,{to:"/",children:"Dashboard"})}),t.map(((e,i)=>{const d=e.link?n.b:r.Fragment,l=t.length-1===i;return Object(c.jsx)(a.h,{tag:"li",active:!l,className:s()({"text-primary":!l}),children:Object(c.jsx)(d,{...e.link?{to:e.link}:{},children:e.title})},i)}))]})})]})})})})}},482:function(e,t,i){"use strict";var r=i(89),n=i.p+"static/media/button_loading.bbd49f26.svg",d=i(9);t.a=e=>{let{loading:t,children:i,...s}=e;return Object(d.jsxs)(r.i,{disabled:t,...s,children:[t?null:i,t?Object(d.jsx)("img",{width:14,src:n,alt:"loading"}):null]})}},483:function(e,t,i){"use strict";i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return d})),i.d(t,"e",(function(){return s})),i.d(t,"c",(function(){return a})),i.d(t,"d",(function(){return c}));var r=i(490);const n=r.b({TPid:r.d().required("The TPid field is required."),ID:r.d().required("The ID field is required.")}),d=r.b({TPid:r.d().required("The TPid field is required."),Tenant:r.d().required("The Tenant field is required."),ID:r.d().required("The ID field is required."),ActivationTime:r.d().required("The ActivationTime field is required."),ExpiryTime:r.d().required("The ExpiryTime field is required."),RunID:r.d().required("The RunID field is required."),FilterIDs:r.a().min(1).required("The FilterIDs field is required."),AttributeIDs:r.a().min(1).required("The AttributeIDs field is required.")}),s=r.b({TPid:r.d().required("The TPid field is required."),ID:r.d().required("The ID field is required."),MonthDays:r.d().required("The MonthDays field is required."),Months:r.d().required("The Months field is required."),Time:r.d().required("The Time field is required."),WeekDays:r.d().required("The WeekDays field is required."),Years:r.d().required("The Years field is required.")}),a=r.b({TPid:r.d().required("The TPid field is required."),ID:r.d().required("The ID field is required."),Prefixes:r.a().min(1).required("The Prefixes field is required.")}),c=r.b({TPid:r.d().required("The TPid field is required."),LoadId:r.d().required("The LoadId field is required."),Tenant:r.d().required("The Tenant field is required."),Category:r.d().required("The Category field is required."),Subject:r.d().required("The Subject field is required.")})},637:function(e,t,i){"use strict";var r=i(1),n=i(495),d=i(130),s=i(493),a=i(131),c=i(7),l=i(483),o=i(141);t.a=()=>{const e=Object(d.b)(),t=Object(c.f)(),{httpService:i}=Object(s.a)(),[u,b]=Object(r.useState)({getActionPlans:!1,getEntityById:!1,createActionPlan:!1,updateActionPlan:!1,deleteEntity:!1}),[m,h]=Object(r.useState)([]),j=Object(d.c)((e=>e.actionPlans.slots)),T=Object(d.c)((e=>e.app.selectedTpId)),x=async()=>{let e=[];try{var t,r;b({...u,getActionPlans:!0});const n=await i.post("",{method:"APIerSv1.GetTPActionPlanIds",params:[{TPid:T}]});b({...u,getActionPlans:!1}),null===n||void 0===n||null===(t=n.data)||void 0===t||null===(r=t.result)||void 0===r||r.map((t=>{e.push({ID:t})})),h(e)}catch({err:n,response:d}){b({...u,getActionPlans:!1})}},O=Object(n.a)({initialValues:{TPid:T,ID:"",Actions:[]},validationSchema:l.a,enableReinitialize:!0,onSubmit:e=>{0===j.length?a.b.error("You must add at least one action plan."):I(e,j)}}),I=async(r,n)=>{const d=n.map((e=>{const{id:t,...i}=e;return i}));try{b({...u,createActionPlan:!0});const n=await i.post("",{method:"APIerSv1.SetTPActionPlan",params:[{TPid:T,ID:r.ID,ActionPlan:d}]});b({...u,createActionPlan:!1}),200===n.status&&(a.b.success("Successfully Created!"),t("/rules/action_plans"),e(Object(o.d)([])))}catch({err:s,response:c}){b({...u,createActionPlan:!1})}},P=Object(n.a)({initialValues:{TPid:T,ID:"",Actions:[]},validationSchema:l.a,enableReinitialize:!0,onSubmit:e=>{0===j.length?a.b.error("You must add at least one action plan."):g(e,j)}}),g=async(r,n)=>{const d=n.map((e=>{const{id:t,...i}=e;return i}));try{b({...u,updateActionPlan:!0});const n=await i.post("",{method:"APIerSv1.SetTPActionPlan",params:[{TPid:T,ID:r.ID,ActionPlan:d}]});b({...u,updateActionPlan:!1}),200===n.status&&(a.b.success("Successfully Updated!"),t("/rules/action_plans"),e(Object(o.d)([])))}catch({err:s,response:c}){b({...u,updateActionPlan:!1})}};return{getActionPlans:x,getEntityById:async r=>{try{var n;b({...u,getEntityById:!0});const h=await i.post("",{method:"APIerSv1.GetTPActionPlan",params:[{TPid:T,ID:r}]});var d,s,c,l,m;if(b({...u,getEntityById:!1}),"NOT_FOUND"===(null===h||void 0===h||null===(n=h.data)||void 0===n?void 0:n.error))a.b.error(null===h||void 0===h||null===(d=h.data)||void 0===d?void 0:d.error),t("/rules/action_plans");else P.setFieldValue("ID",null===h||void 0===h||null===(s=h.data)||void 0===s||null===(c=s.result)||void 0===c?void 0:c.ID),e(Object(o.d)(null===h||void 0===h||null===(l=h.data)||void 0===l||null===(m=l.result)||void 0===m?void 0:m.ActionPlan))}catch({err:h,response:j}){b({...u,getEntityById:!1})}},createActionPlanController:O,updateActionPlanController:P,deleteEntity:async t=>{try{b({...u,deleteEntity:!0});await i.post("",{method:"APIerSv1.RemoveTPActionPlan",params:[{TPid:T,ID:t}]});b({...u,deleteEntity:!1}),e(Object(o.b)(null)),a.b.success("Successfully Deleted."),x()}catch({err:r,response:n}){b({...u,deleteEntity:!1})}},listData:m,loadings:u}}},779:function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));var r=i(89),n=i(130),d=i(141),s=i(9);var a=e=>{let{id:t}=e;const i=Object(n.b)(),a=Object(n.c)((e=>e.actionPlans.slots));return Object(s.jsx)(r.i,{onClick:()=>i(Object(d.d)(a.filter((e=>e.id!==t)))),style:{padding:6},size:"sm",color:"danger",type:"button",children:"Delete"})};const c=[{name:"ActionsId",minWidth:"100px",selector:e=>e.ActionsId},{name:"TimingId",minWidth:"100px",selector:e=>e.TimingId},{name:"Weight",minWidth:"100px",selector:e=>e.Weight},{name:"Actions",minWidth:"120px",maxWidth:"120px",selector:e=>e.id,cell:e=>Object(s.jsx)(a,{id:e.id})}]}}]);
//# sourceMappingURL=90.72039db2.chunk.js.map