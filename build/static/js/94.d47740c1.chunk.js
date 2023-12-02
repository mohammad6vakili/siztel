(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[94],{1606:function(e,i,r){"use strict";r.r(i);var t=r(1),s=r(479),d=r(7),n=r(129),a=r(131),c=r(89),l=r(481),o=r(643),u=r(597),b=r(9);i.default=()=>{const e=Object(d.f)(),[i]=Object(n.d)(),{updateDestinationController:r,loadings:h}=Object(o.a)(),[j,f]=Object(t.useState)("");return Object(t.useEffect)((()=>{let r=i.get("entity_id");r?a.b.success("You are in update mode for ".concat(r)):e("/rules/destinations")}),[]),Object(b.jsxs)(t.Fragment,{children:[Object(b.jsx)(s.a,{title:"Update Destination",data:[{title:"Update Destination"}]}),Object(b.jsx)(c.H,{onSubmit:e=>{e.preventDefault(),window.scroll({top:0,behavior:"smooth"}),r.handleSubmit()},className:"d-flex flex-column align-items-center",children:Object(b.jsxs)(c.l,{className:"w-100",children:[Object(b.jsx)(c.p,{className:"border-bottom",children:Object(b.jsx)(c.v,{children:"Update Destination Form"})}),Object(b.jsx)(c.m,{className:"pt-2",children:Object(b.jsxs)(c.ib,{children:[Object(b.jsxs)(c.B,{xs:"12",sm:"6",md:"4",className:"mb-1",children:[Object(b.jsx)(c.N,{className:"form-label",for:"TPid",children:"TPid"}),Object(b.jsx)(c.K,{id:"TPid",name:"TPid",value:r.values.TPid,onChange:r.handleChange,invalid:r.touched.TPid&&r.errors.TPid}),r.touched.TPid&&r.errors.TPid?Object(b.jsx)(c.I,{children:r.errors.TPid}):null]}),Object(b.jsxs)(c.B,{xs:"12",sm:"6",md:"4",className:"mb-1",children:[Object(b.jsx)(c.N,{className:"form-label",for:"ID",children:"ID"}),Object(b.jsx)(c.K,{id:"ID",name:"ID",value:r.values.ID,onChange:r.handleChange,invalid:r.touched.ID&&r.errors.ID}),r.touched.ID&&r.errors.ID?Object(b.jsx)(c.I,{children:r.errors.ID}):null]}),Object(b.jsxs)(c.B,{xs:"12",className:"mb-1",children:[Object(b.jsx)(c.N,{className:"form-label",for:"Prefixes",children:"Prefixes"}),Object(b.jsxs)("div",{className:"position-relative d-flex align-items-center",children:[Object(b.jsx)(c.K,{id:"Prefixes",name:"Prefixes",value:j,onChange:e=>f(e.target.value),invalid:r.touched.Prefixes&&r.errors.Prefixes}),Object(b.jsx)("button",{type:"button",style:{right:35,borderRadius:"50%",border:"none",background:"transparent",width:30,height:30,border:"1px solid rgba(200,200,200,.5)",fontSize:18,color:"#73bcf0",cursor:"pointer"},className:"position-absolute",onClick:()=>{if(0===j.length)a.b.error("Enter Filter ID value.");else{let e=[...r.values.Prefixes];e.push(j),r.setFieldValue("Prefixes",e),f("")}},children:"+"})]}),r.touched.Prefixes&&r.errors.Prefixes?Object(b.jsx)(c.I,{style:{display:"block"},children:r.errors.Prefixes}):null]}),r.values.Prefixes.map(((e,i)=>Object(b.jsxs)(c.B,{xs:"12",className:"mb-1 d-flex align-items-center",children:[Object(b.jsxs)("span",{children:[i+1," -"]}),Object(b.jsx)("span",{children:e}),Object(b.jsx)("button",{type:"button",style:{background:"transparent",border:"none",marginLeft:"auto"},onClick:()=>{let e=[...r.values.Prefixes];e=e.filter(((e,r)=>r!==i)),r.setFieldValue("Prefixes",e)},children:Object(b.jsx)(u.b,{style:{fontSize:14,color:"red"}})})]})))]})}),Object(b.jsx)(c.n,{className:"border-top d-flex justify-content-center",children:Object(b.jsx)(l.a,{loading:h.updateDestination,type:"submit",color:"primary",style:{minWidth:150},children:"Submit"})})]})})]})}},479:function(e,i,r){"use strict";var t=r(1),s=r(129),d=r(2),n=r.n(d),a=r(89),c=r(9);i.a=e=>{const{data:i,title:r}=e;return Object(c.jsx)("div",{className:"content-header row",children:Object(c.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2 w-100",children:Object(c.jsx)("div",{className:"row breadcrumbs-top",children:Object(c.jsxs)("div",{className:"col-12",children:[r?Object(c.jsx)("h2",{className:"content-header-title float-start mb-0",children:r}):"",Object(c.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(c.jsxs)(a.g,{children:[Object(c.jsx)(a.h,{tag:"li",children:Object(c.jsx)(s.b,{to:"/",children:"Dashboard"})}),i.map(((e,r)=>{const d=e.link?s.b:t.Fragment,l=i.length-1===r;return Object(c.jsx)(a.h,{tag:"li",active:!l,className:n()({"text-primary":!l}),children:Object(c.jsx)(d,{...e.link?{to:e.link}:{},children:e.title})},r)}))]})})]})})})})}},481:function(e,i,r){"use strict";var t=r(89),s=r.p+"static/media/button_loading.bbd49f26.svg",d=r(9);i.a=e=>{let{loading:i,children:r,...n}=e;return Object(d.jsxs)(t.i,{disabled:i,...n,children:[i?null:r,i?Object(d.jsx)("img",{width:14,src:s,alt:"loading"}):null]})}},482:function(e,i,r){"use strict";var t=r(4),s=r.n(t),d=r(1617);i.a=()=>{const e=s.a.create({baseURL:"localhost:8880/jsonrpc",headers:{Accept:"application/json"}});e.interceptors.response.use((e=>e),(async e=>{let{error:i,response:r}=e;d.a.error("Server Error!")}));return{httpService:e}}},483:function(e,i,r){"use strict";r.d(i,"a",(function(){return s})),r.d(i,"b",(function(){return d})),r.d(i,"e",(function(){return n})),r.d(i,"c",(function(){return a})),r.d(i,"d",(function(){return c}));var t=r(489);const s=t.b({TPid:t.d().required("The TPid field is required."),ID:t.d().required("The ID field is required.")}),d=t.b({TPid:t.d().required("The TPid field is required."),Tenant:t.d().required("The Tenant field is required."),ID:t.d().required("The ID field is required."),ActivationTime:t.d().required("The ActivationTime field is required."),ExpiryTime:t.d().required("The ExpiryTime field is required."),RunID:t.d().required("The RunID field is required."),FilterIDs:t.a().min(1).required("The FilterIDs field is required."),AttributeIDs:t.a().min(1).required("The AttributeIDs field is required.")}),n=t.b({TPid:t.d().required("The TPid field is required."),ID:t.d().required("The ID field is required."),MonthDays:t.d().required("The MonthDays field is required."),Months:t.d().required("The Months field is required."),Time:t.d().required("The Time field is required."),WeekDays:t.d().required("The WeekDays field is required."),Years:t.d().required("The Years field is required.")}),a=t.b({TPid:t.d().required("The TPid field is required."),ID:t.d().required("The ID field is required."),Prefixes:t.a().min(1).required("The Prefixes field is required.")}),c=t.b({TPid:t.d().required("The TPid field is required."),LoadId:t.d().required("The LoadId field is required."),Tenant:t.d().required("The Tenant field is required."),Category:t.d().required("The Category field is required."),Subject:t.d().required("The Subject field is required.")})},643:function(e,i,r){"use strict";var t=r(1),s=r(483),d=r(493),n=r(131),a=r(7),c=r(482);i.a=()=>{const e=Object(a.f)(),{httpService:i}=Object(c.a)(),[r,l]=Object(t.useState)({getDestinations:!1,createDestination:!1,updateDestination:!1,deleteDestination:!1}),[o,u]=Object(t.useState)({current:1,total:1}),b=Object(d.a)({initialValues:{TPid:"",ID:"",Prefixes:[]},validationSchema:s.c,onSubmit:e=>{h(e)}}),h=async t=>{try{l({...r,createDestination:!0});const s=await i.post("",{method:"APIerSv1.SetTPDestination",params:[{TPid:t.TPid,ID:t.ID,Prefixes:t.Prefixes}]});l({...r,createDestination:!1}),200===s.status&&(n.b.success("Successfully Created!"),e("/rules/destinations"))}catch({err:s,response:d}){l({...r,createDestination:!1})}},j=Object(d.a)({initialValues:{TPid:"",ID:"",Prefixes:[]},validationSchema:s.c,onSubmit:e=>{f(e)}}),f=async t=>{try{l({...r,updateDestination:!0});const s=await i.post("",{method:"APIerSv1.SetTPDestination",params:[{TPid:t.TPid,ID:t.ID,Prefixes:t.Prefixes}]});l({...r,updateDestination:!1}),200===s.status&&(n.b.success("Successfully Created!"),e("/rules/destinations"))}catch({err:s,response:d}){l({...r,updateDestination:!1})}};return{createDestinationController:b,updateDestinationController:j,loadings:r,paginates:o,setPaginates:u}}}}]);
//# sourceMappingURL=94.d47740c1.chunk.js.map