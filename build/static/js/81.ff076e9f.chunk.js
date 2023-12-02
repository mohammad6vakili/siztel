(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[81],{1610:function(e,t,i){"use strict";i.r(t);var a=i(1),r=i(479),n=i(7),s=i(129),d=i(487),c=i.n(d),l=i(834),o=i(788),u=i(131),b=i(89),h=i(481),m=i(484),j=i(130),g=i(139),x=i(645),T=i(9);t.default=()=>{const{skin:e}=Object(m.a)(),t=Object(j.b)(),i=Object(n.f)(),[d]=Object(s.d)(),{updateRatingPlanController:O,loadings:f}=Object(x.a)(),[p,P]=Object(a.useState)({DestinationRatesId:"",TimingId:"",Weight:0}),I=Object(j.c)((e=>e.ratingPlans.slots));return Object(a.useEffect)((()=>{let e=d.get("entity_id");e?u.b.success("You are in update mode for ".concat(e)):i("/rules/rating_plans")}),[]),Object(T.jsxs)(a.Fragment,{children:[Object(T.jsx)(r.a,{title:"Update Rating Plan",data:[{title:"Update Rating Plan"}]}),Object(T.jsx)(b.H,{onSubmit:e=>{e.preventDefault(),window.scroll({top:0,behavior:"smooth"}),O.handleSubmit()},className:"d-flex flex-column align-items-center",children:Object(T.jsxs)(b.l,{className:"w-100",children:[Object(T.jsx)(b.p,{className:"border-bottom",children:Object(T.jsx)(b.v,{children:"Update Rating Plan Form"})}),Object(T.jsxs)(b.m,{className:"pt-2",children:[Object(T.jsxs)(b.ib,{className:"border-bottom mb-1",children:[Object(T.jsxs)(b.B,{xs:"12",sm:"6",md:"4",className:"mb-1",children:[Object(T.jsx)(b.N,{className:"form-label",for:"TPid",children:"TPid"}),Object(T.jsx)(b.K,{id:"TPid",name:"TPid",value:O.values.TPid,onChange:O.handleChange,invalid:O.touched.TPid&&O.errors.TPid}),O.touched.TPid&&O.errors.TPid?Object(T.jsx)(b.I,{children:O.errors.TPid}):null]}),Object(T.jsxs)(b.B,{xs:"12",sm:"6",md:"4",className:"mb-1",children:[Object(T.jsx)(b.N,{className:"form-label",for:"ID",children:"ID"}),Object(T.jsx)(b.K,{id:"ID",name:"ID",value:O.values.ID,onChange:O.handleChange,invalid:O.touched.ID&&O.errors.ID}),O.touched.ID&&O.errors.ID?Object(T.jsx)(b.I,{children:O.errors.ID}):null]})]}),Object(T.jsxs)(b.ib,{children:[Object(T.jsx)(b.B,{xs:"12",children:Object(T.jsx)(b.v,{children:"Rating Plan Bindings"})}),Object(T.jsxs)(b.B,{xs:"12",sm:"6",md:"3",className:"mb-1",children:[Object(T.jsx)(b.N,{className:"form-label",for:"DestinationRatesId",children:"DestinationRatesId"}),Object(T.jsx)(b.K,{value:p.DestinationRatesId,onChange:e=>P({...p,DestinationRatesId:e.target.value}),id:"DestinationRatesId",name:"DestinationRatesId"})]}),Object(T.jsxs)(b.B,{xs:"12",sm:"6",md:"3",className:"mb-1",children:[Object(T.jsx)(b.N,{className:"form-label",for:"TimingId",children:"TimingId"}),Object(T.jsx)(b.K,{id:"TimingId",name:"TimingId",value:p.TimingId,onChange:e=>P({...p,TimingId:e.target.value})})]}),Object(T.jsxs)(b.B,{xs:"12",sm:"6",md:"3",className:"mb-1",children:[Object(T.jsx)(b.N,{className:"form-label",for:"Weight",children:"Weight"}),Object(T.jsx)(b.K,{id:"Weight",name:"Weight",value:p.Weight,onChange:e=>P({...p,Weight:e.target.value})})]}),Object(T.jsx)(b.B,{xs:"12",sm:"6",md:"3",className:"mb-1 d-flex align-items-end",children:Object(T.jsx)(h.a,{onClick:()=>{let e=[...I];0===p.DestinationRatesId.length?u.b.error("Please enter DestinationRatesId."):0===p.TimingId.length?u.b.error("Please enter TimingId."):(e.push({...p,id:326782382*Math.random()}),t(Object(g.d)(e)),P({DestinationRatesId:"",TimingId:"",Weight:0}))},outline:!0,color:"primary",type:"button",children:"Add"})}),Object(T.jsx)(b.B,{xs:"12",children:Object(T.jsx)(c.a,{noDataComponent:Object(T.jsx)("div",{style:{margin:"24px 0"},children:"No Rating Plan Bindings Added Yet."}),noHeader:!0,columns:o.a,className:"react-dataTable",style:{background:"red"},sortIcon:Object(T.jsx)(l.a,{size:10}),data:I,theme:"dark"===e?"darkTheme":""})})]})]}),Object(T.jsx)(b.n,{className:"border-top d-flex justify-content-center",children:Object(T.jsx)(h.a,{loading:f.updateRatingPlan,type:"submit",color:"primary",style:{minWidth:150},children:"Submit"})})]})})]})}},479:function(e,t,i){"use strict";var a=i(1),r=i(129),n=i(2),s=i.n(n),d=i(89),c=i(9);t.a=e=>{const{data:t,title:i}=e;return Object(c.jsx)("div",{className:"content-header row",children:Object(c.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2 w-100",children:Object(c.jsx)("div",{className:"row breadcrumbs-top",children:Object(c.jsxs)("div",{className:"col-12",children:[i?Object(c.jsx)("h2",{className:"content-header-title float-start mb-0",children:i}):"",Object(c.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(c.jsxs)(d.g,{children:[Object(c.jsx)(d.h,{tag:"li",children:Object(c.jsx)(r.b,{to:"/",children:"Dashboard"})}),t.map(((e,i)=>{const n=e.link?r.b:a.Fragment,l=t.length-1===i;return Object(c.jsx)(d.h,{tag:"li",active:!l,className:s()({"text-primary":!l}),children:Object(c.jsx)(n,{...e.link?{to:e.link}:{},children:e.title})},i)}))]})})]})})})})}},481:function(e,t,i){"use strict";var a=i(89),r=i.p+"static/media/button_loading.bbd49f26.svg",n=i(9);t.a=e=>{let{loading:t,children:i,...s}=e;return Object(n.jsxs)(a.i,{disabled:t,...s,children:[t?null:i,t?Object(n.jsx)("img",{width:14,src:r,alt:"loading"}):null]})}},482:function(e,t,i){"use strict";var a=i(4),r=i.n(a),n=i(1617);t.a=()=>{const e=r.a.create({baseURL:"localhost:8880/jsonrpc",headers:{Accept:"application/json"}});e.interceptors.response.use((e=>e),(async e=>{let{error:t,response:i}=e;n.a.error("Server Error!")}));return{httpService:e}}},483:function(e,t,i){"use strict";i.d(t,"a",(function(){return r})),i.d(t,"b",(function(){return n})),i.d(t,"e",(function(){return s})),i.d(t,"c",(function(){return d})),i.d(t,"d",(function(){return c}));var a=i(489);const r=a.b({TPid:a.d().required("The TPid field is required."),ID:a.d().required("The ID field is required.")}),n=a.b({TPid:a.d().required("The TPid field is required."),Tenant:a.d().required("The Tenant field is required."),ID:a.d().required("The ID field is required."),ActivationTime:a.d().required("The ActivationTime field is required."),ExpiryTime:a.d().required("The ExpiryTime field is required."),RunID:a.d().required("The RunID field is required."),FilterIDs:a.a().min(1).required("The FilterIDs field is required."),AttributeIDs:a.a().min(1).required("The AttributeIDs field is required.")}),s=a.b({TPid:a.d().required("The TPid field is required."),ID:a.d().required("The ID field is required."),MonthDays:a.d().required("The MonthDays field is required."),Months:a.d().required("The Months field is required."),Time:a.d().required("The Time field is required."),WeekDays:a.d().required("The WeekDays field is required."),Years:a.d().required("The Years field is required.")}),d=a.b({TPid:a.d().required("The TPid field is required."),ID:a.d().required("The ID field is required."),Prefixes:a.a().min(1).required("The Prefixes field is required.")}),c=a.b({TPid:a.d().required("The TPid field is required."),LoadId:a.d().required("The LoadId field is required."),Tenant:a.d().required("The Tenant field is required."),Category:a.d().required("The Category field is required."),Subject:a.d().required("The Subject field is required.")})},645:function(e,t,i){"use strict";var a=i(1),r=i(493),n=i(130),s=i(482),d=i(131),c=i(7),l=i(483);t.a=()=>{const e=Object(c.f)(),{httpService:t}=Object(s.a)(),[i,o]=Object(a.useState)({getRatingPlans:!1,createRatingPlan:!1,updateRatingPlan:!1,deleteRatingPlan:!1}),[u,b]=Object(a.useState)({current:1,total:1}),h=Object(n.c)((e=>e.ratingPlans.slots)),m=Object(r.a)({initialValues:{TPid:"",ID:"",RatingPlanBindings:[]},validationSchema:l.a,onSubmit:e=>{0===h.length?d.b.error("You must add at least one rating plan bindings."):j(e,h)}}),j=async(a,r)=>{const n=r.map((e=>{const{id:t,...i}=e;return i}));try{o({...i,createRatingPlan:!0});const r=await t.post("",{method:"APIerSv1.SetTPRatingPlan",params:[{TPid:a.TPid,ID:a.ID,RatingPlanBindings:n}]});o({...i,createRatingPlan:!1}),200===r.status&&(d.b.success("Successfully Created!"),e("/rules/rating_plans"))}catch({err:s,response:c}){o({...i,createRatingPlan:!1})}},g=Object(r.a)({initialValues:{TPid:"",ID:"",RatingPlanBindings:[]},validationSchema:l.a,onSubmit:e=>{0===h.length?d.b.error("You must add at least one rating plan bindings."):x(e,h)}}),x=async(a,r)=>{const n=r.map((e=>{const{id:t,...i}=e;return i}));try{o({...i,updateRatingPlan:!0});const r=await t.post("",{method:"APIerSv1.SetTPRatingPlan",params:[{TPid:a.TPid,ID:a.ID,RatingPlanBindings:n}]});o({...i,updateRatingPlan:!1}),200===r.status&&(d.b.success("Successfully Updated!"),e("/rules/rating_plans"))}catch({err:s,response:c}){o({...i,updateRatingPlan:!1})}};return{createRatingPlanController:m,updateRatingPlanController:g,loadings:i,paginates:u,setPaginates:b}}},788:function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));var a=i(89),r=i(130),n=i(139),s=i(9);var d=e=>{let{id:t}=e;const i=Object(r.b)(),d=Object(r.c)((e=>e.ratingPlans.slots));return Object(s.jsx)(a.i,{onClick:()=>i(Object(n.d)(d.filter((e=>e.id!==t)))),style:{padding:6},size:"sm",color:"danger",type:"button",children:"Delete"})};const c=[{name:"DestinationRatesId",minWidth:"100px",selector:e=>e.DestinationRatesId},{name:"TimingId",minWidth:"100px",selector:e=>e.TimingId},{name:"Weight",minWidth:"100px",selector:e=>e.Weight},{name:"Actions",minWidth:"120px",maxWidth:"120px",selector:e=>e.id,cell:e=>Object(s.jsx)(d,{id:e.id})}]}}]);
//# sourceMappingURL=81.ff076e9f.chunk.js.map