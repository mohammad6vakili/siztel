(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[59,11],{1601:function(e,t,r){"use strict";r.r(t);var i=r(1),s=r(479),a=r(89),n=r(131),c=r(597),l=r(481),d=r(641),o=r(514),u=r(9);t.default=()=>{const{createChargerController:e,loadings:t}=Object(d.a)(),[r,b]=Object(i.useState)(null),[h,m]=Object(i.useState)(null),[j,x]=Object(i.useState)(""),[T,p]=Object(i.useState)("");return Object(u.jsxs)(i.Fragment,{children:[Object(u.jsx)(s.a,{title:"New Charger",data:[{title:"New Charger"}]}),Object(u.jsx)(a.H,{onSubmit:t=>{t.preventDefault(),window.scroll({top:0,behavior:"smooth"}),e.handleSubmit()},className:"d-flex flex-column align-items-center",children:Object(u.jsxs)(a.l,{className:"w-100",children:[Object(u.jsx)(a.p,{className:"border-bottom",children:Object(u.jsx)(a.v,{children:"New Charger Form"})}),Object(u.jsx)(a.m,{className:"pt-2",children:Object(u.jsxs)(a.ib,{children:[Object(u.jsxs)(a.B,{xs:"12",sm:"6",md:"4",className:"mb-1",children:[Object(u.jsx)(a.N,{className:"form-label",for:"TPid",children:"TPid"}),Object(u.jsx)(a.K,{id:"TPid",name:"TPid",value:e.values.TPid,onChange:e.handleChange,invalid:e.touched.TPid&&e.errors.TPid}),e.touched.TPid&&e.errors.TPid?Object(u.jsx)(a.I,{children:e.errors.TPid}):null]}),Object(u.jsxs)(a.B,{xs:"12",sm:"6",md:"4",className:"mb-1",children:[Object(u.jsx)(a.N,{className:"form-label",for:"Tenant",children:"Tenant"}),Object(u.jsx)(a.K,{id:"Tenant",name:"Tenant",value:e.values.Tenant,onChange:e.handleChange,invalid:e.touched.Tenant&&e.errors.Tenant}),e.touched.Tenant&&e.errors.Tenant?Object(u.jsx)(a.I,{children:e.errors.Tenant}):null]}),Object(u.jsxs)(a.B,{xs:"12",sm:"6",md:"4",className:"mb-1",children:[Object(u.jsx)(a.N,{className:"form-label",for:"ID",children:"ID"}),Object(u.jsx)(a.K,{id:"ID",name:"ID",value:e.values.ID,onChange:e.handleChange,invalid:e.touched.ID&&e.errors.ID}),e.touched.ID&&e.errors.ID?Object(u.jsx)(a.I,{children:e.errors.ID}):null]}),Object(u.jsxs)(a.B,{xs:"12",sm:"6",md:"4",className:"mb-1",children:[Object(u.jsx)(a.N,{className:"form-label",for:"ActivationTime",children:"ActivationTime"}),Object(u.jsx)(o.a,{inputPlaceholder:"Click to open calendar",value:r,onChange:t=>{b(t),e.setFieldValue("ActivationTime","".concat(t.year,"-").concat(t.month,"-").concat(t.day,"T00:00:00Z"))},inputClassName:e.touched.ActivationTime&&e.errors.ActivationTime?"form_error":""}),e.touched.ActivationTime&&e.errors.ActivationTime?Object(u.jsx)(a.I,{style:{display:"block"},children:e.errors.ActivationTime}):null]}),Object(u.jsxs)(a.B,{xs:"12",sm:"6",md:"4",className:"mb-1",children:[Object(u.jsx)(a.N,{className:"form-label",for:"ExpiryTime",children:"ExpiryTime"}),Object(u.jsx)(o.a,{inputPlaceholder:"Click to open calendar",value:h,onChange:t=>{m(t),e.setFieldValue("ExpiryTime","".concat(t.year,"-").concat(t.month,"-").concat(t.day,"T00:00:00Z"))},inputClassName:e.touched.ExpiryTime&&e.errors.ExpiryTime?"form_error":""}),e.touched.ExpiryTime&&e.errors.ExpiryTime?Object(u.jsx)(a.I,{style:{display:"block"},children:e.errors.ExpiryTime}):null]}),Object(u.jsxs)(a.B,{xs:"12",sm:"6",md:"4",className:"mb-1",children:[Object(u.jsx)(a.N,{className:"form-label",for:"RunID",children:"RunID"}),Object(u.jsx)(a.K,{id:"RunID",name:"RunID",value:e.values.RunID,onChange:e.handleChange,invalid:e.touched.RunID&&e.errors.RunID}),e.touched.RunID&&e.errors.RunID?Object(u.jsx)(a.I,{children:e.errors.RunID}):null]}),Object(u.jsxs)(a.B,{xs:"12",sm:"6",md:"4",className:"mb-1",children:[Object(u.jsx)(a.N,{className:"form-label",for:"Weight",children:"Weight"}),Object(u.jsx)(a.K,{type:"number",id:"Weight",name:"Weight",value:e.values.Weight,onChange:e.handleChange})]}),Object(u.jsxs)(a.B,{xs:"12",className:"mb-1",children:[Object(u.jsx)(a.N,{className:"form-label",for:"FilterIDs",children:"FilterIDs"}),Object(u.jsxs)("div",{className:"position-relative d-flex align-items-center",children:[Object(u.jsx)(a.K,{id:"FilterIDs",name:"FilterIDs",value:j,onChange:e=>x(e.target.value),invalid:e.touched.FilterIDs&&e.errors.FilterIDs}),Object(u.jsx)("button",{type:"button",style:{right:35,borderRadius:"50%",border:"none",background:"transparent",width:30,height:30,border:"1px solid rgba(200,200,200,.5)",fontSize:18,color:"#73bcf0",cursor:"pointer"},className:"position-absolute",onClick:()=>{if(0===j.length)n.b.error("Enter Filter ID value.");else{let t=[...e.values.FilterIDs];t.push(j),e.setFieldValue("FilterIDs",t),x("")}},children:"+"})]}),e.touched.FilterIDs&&e.errors.FilterIDs?Object(u.jsx)(a.I,{style:{display:"block"},children:e.errors.FilterIDs}):null]}),e.values.FilterIDs.map(((t,r)=>Object(u.jsxs)(a.B,{xs:"12",className:"mb-1 d-flex align-items-center",children:[Object(u.jsxs)("span",{children:[r+1," -"]}),Object(u.jsx)("span",{children:t}),Object(u.jsx)("button",{type:"button",style:{background:"transparent",border:"none",marginLeft:"auto"},onClick:()=>{let t=[...e.values.FilterIDs];t=t.filter(((e,t)=>t!==r)),e.setFieldValue("FilterIDs",t)},children:Object(u.jsx)(c.b,{style:{fontSize:14,color:"red"}})})]}))),Object(u.jsxs)(a.B,{xs:"12",className:"mb-1",children:[Object(u.jsx)(a.N,{className:"form-label",for:"AttributeIDs",children:"AttributeIDs"}),Object(u.jsxs)("div",{className:"position-relative d-flex align-items-center",children:[Object(u.jsx)(a.K,{id:"AttributeIDs",name:"AttributeIDs",value:T,onChange:e=>p(e.target.value),invalid:e.touched.AttributeIDs&&e.errors.AttributeIDs}),Object(u.jsx)("button",{type:"button",style:{right:35,borderRadius:"50%",border:"none",background:"transparent",width:30,height:30,border:"1px solid rgba(200,200,200,.5)",color:"#73bcf0",fontSize:18,cursor:"pointer"},className:"position-absolute",onClick:()=>{if(0===T.length)n.b.error("Enter Attribute Id value.");else{let t=[...e.values.AttributeIDs];t.push(T),e.setFieldValue("AttributeIDs",t),p("")}},children:"+"})]}),e.touched.AttributeIDs&&e.errors.AttributeIDs?Object(u.jsx)(a.I,{style:{display:"block"},children:e.errors.AttributeIDs}):null]}),e.values.AttributeIDs.map(((t,r)=>Object(u.jsxs)(a.B,{xs:"12",className:"mb-1 d-flex align-items-center",children:[Object(u.jsxs)("span",{children:[r+1," -"]}),Object(u.jsx)("span",{children:t}),Object(u.jsx)("button",{type:"button",style:{background:"transparent",border:"none",marginLeft:"auto"},onClick:()=>{let t=[...e.values.AttributeIDs];t=t.filter(((e,t)=>t!==r)),e.setFieldValue("AttributeIDs",t)},children:Object(u.jsx)(c.b,{style:{fontSize:14,color:"red"}})})]})))]})}),Object(u.jsx)(a.n,{className:"border-top d-flex justify-content-center",children:Object(u.jsx)(l.a,{loading:t.createCharger,type:"submit",color:"primary",style:{minWidth:150},children:"Submit"})})]})})]})}},479:function(e,t,r){"use strict";var i=r(1),s=r(129),a=r(2),n=r.n(a),c=r(89),l=r(9);t.a=e=>{const{data:t,title:r}=e;return Object(l.jsx)("div",{className:"content-header row",children:Object(l.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2 w-100",children:Object(l.jsx)("div",{className:"row breadcrumbs-top",children:Object(l.jsxs)("div",{className:"col-12",children:[r?Object(l.jsx)("h2",{className:"content-header-title float-start mb-0",children:r}):"",Object(l.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(l.jsxs)(c.g,{children:[Object(l.jsx)(c.h,{tag:"li",children:Object(l.jsx)(s.b,{to:"/",children:"Dashboard"})}),t.map(((e,r)=>{const a=e.link?s.b:i.Fragment,d=t.length-1===r;return Object(l.jsx)(c.h,{tag:"li",active:!d,className:n()({"text-primary":!d}),children:Object(l.jsx)(a,{...e.link?{to:e.link}:{},children:e.title})},r)}))]})})]})})})})}},481:function(e,t,r){"use strict";var i=r(89),s=r.p+"static/media/button_loading.bbd49f26.svg",a=r(9);t.a=e=>{let{loading:t,children:r,...n}=e;return Object(a.jsxs)(i.i,{disabled:t,...n,children:[t?null:r,t?Object(a.jsx)("img",{width:14,src:s,alt:"loading"}):null]})}},482:function(e,t,r){"use strict";var i=r(4),s=r.n(i),a=r(1617);t.a=()=>{const e=s.a.create({baseURL:"localhost:8880/jsonrpc",headers:{Accept:"application/json"}});e.interceptors.response.use((e=>e),(async e=>{let{error:t,response:r}=e;a.a.error("Server Error!")}));return{httpService:e}}},483:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return a})),r.d(t,"e",(function(){return n})),r.d(t,"c",(function(){return c})),r.d(t,"d",(function(){return l}));var i=r(489);const s=i.b({TPid:i.d().required("The TPid field is required."),ID:i.d().required("The ID field is required.")}),a=i.b({TPid:i.d().required("The TPid field is required."),Tenant:i.d().required("The Tenant field is required."),ID:i.d().required("The ID field is required."),ActivationTime:i.d().required("The ActivationTime field is required."),ExpiryTime:i.d().required("The ExpiryTime field is required."),RunID:i.d().required("The RunID field is required."),FilterIDs:i.a().min(1).required("The FilterIDs field is required."),AttributeIDs:i.a().min(1).required("The AttributeIDs field is required.")}),n=i.b({TPid:i.d().required("The TPid field is required."),ID:i.d().required("The ID field is required."),MonthDays:i.d().required("The MonthDays field is required."),Months:i.d().required("The Months field is required."),Time:i.d().required("The Time field is required."),WeekDays:i.d().required("The WeekDays field is required."),Years:i.d().required("The Years field is required.")}),c=i.b({TPid:i.d().required("The TPid field is required."),ID:i.d().required("The ID field is required."),Prefixes:i.a().min(1).required("The Prefixes field is required.")}),l=i.b({TPid:i.d().required("The TPid field is required."),LoadId:i.d().required("The LoadId field is required."),Tenant:i.d().required("The Tenant field is required."),Category:i.d().required("The Category field is required."),Subject:i.d().required("The Subject field is required.")})},514:function(e,t,r){"use strict";r(515);var i=r(557),s=r.n(i),a=r(533),n=r(484),c=r(9);t.a=e=>{let{inputClassName:t,minimumDate:r,maximumDate:i,...l}=e;const{skin:d}=Object(n.a)();return Object(c.jsxs)("div",{className:"custom_datepicker_wrapper",children:[Object(c.jsx)(s.a,{colorPrimary:"#73bcf0",colorPrimaryLight:"#73bcf03b",inputClassName:"".concat(t,"\n          ").concat("light"===d?"custom_datepicker":"custom_datepicker_dark","\n        "),minimumDate:r,maximumDate:i,locale:"en",calendarPopperPosition:"top",calendarClassName:"responsive-calendar",...l}),Object(c.jsx)(a.b,{fontSize:20})]})}},515:function(e,t,r){},597:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return a}));var i=r(683);function s(e){return Object(i.a)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"}}]})(e)}function a(e){return Object(i.a)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"}}]})(e)}},641:function(e,t,r){"use strict";var i=r(1),s=r(483),a=r(493),n=r(131),c=r(7),l=r(482);t.a=()=>{const e=Object(c.f)(),{httpService:t}=Object(l.a)(),[r,d]=Object(i.useState)({getChargers:!1,createCharger:!1,updateCharger:!1,deleteCharger:!1}),[o,u]=Object(i.useState)({current:1,total:1}),b=Object(a.a)({initialValues:{TPid:"",Tenant:"",ID:"",ActivationTime:"",ExpiryTime:"",RunID:"",Weight:0,FilterIDs:[],AttributeIDs:[]},validationSchema:s.b,onSubmit:e=>{h(e)}}),h=async i=>{try{d({...r,createCharger:!0});const s=await t.post("",{method:"APIerSv1.SetTPCharger",params:[{TPid:i.TPid,Tenant:i.Tenant,ID:i.ID,FilterIDs:i.FilterIDs,ActivationInterval:{ActivationTime:i.ActivationTime,ExpiryTime:i.ExpiryTime},RunID:i.RunID,AttributeIDs:i.AttributeIDs,Weight:i.Weight}]});d({...r,createCharger:!1}),200===s.status&&(n.b.success("Successfully Created!"),e("/rules/chargers"))}catch({err:s,response:a}){d({...r,createCharger:!1})}},m=Object(a.a)({initialValues:{TPid:"",Tenant:"",ID:"",ActivationTime:"",ExpiryTime:"",RunID:"",Weight:0,FilterIDs:[],AttributeIDs:[]},validationSchema:s.b,onSubmit:e=>{j(e)}}),j=async i=>{try{d({...r,updateCharger:!0});const s=await t.post("",{method:"APIerSv1.SetTPCharger",params:[{TPid:i.TPid,Tenant:i.Tenant,ID:i.ID,FilterIDs:i.FilterIDs,ActivationInterval:{ActivationTime:i.ActivationTime,ExpiryTime:i.ExpiryTime},RunID:i.RunID,AttributeIDs:i.AttributeIDs,Weight:i.Weight}]});d({...r,updateCharger:!1}),200===s.status&&(n.b.success("Successfully Created!"),e("/rules/chargers"))}catch({err:s,response:a}){d({...r,updateCharger:!1})}};return{createChargerController:b,updateChargerController:m,loadings:r,paginates:o,setPaginates:u}}}}]);
//# sourceMappingURL=59.517d1f69.chunk.js.map