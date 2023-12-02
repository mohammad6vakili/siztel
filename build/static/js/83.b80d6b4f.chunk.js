(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[83],{1614:function(e,r,t){"use strict";t.r(r);var i=t(1),d=t(479),a=t(7),s=t(129),c=t(487),n=t.n(c),l=t(834),o=t(790),u=t(131),h=t(89),b=t(481),j=t(484),m=t(130),p=t(141),x=t(647),g=t(9);r.default=()=>{const{skin:e}=Object(j.a)(),r=Object(m.b)(),t=Object(a.f)(),[c]=Object(s.d)(),{updateSharedGroupController:O,loadings:S}=Object(x.a)(),[f,T]=Object(i.useState)({Account:"",Strategy:"",RatingSubject:""}),q=Object(m.c)((e=>e.sharedGroups.slots));return Object(i.useEffect)((()=>{let e=c.get("entity_id");e?u.b.success("You are in update mode for ".concat(e)):t("/rules/shared_groups")}),[]),Object(g.jsxs)(i.Fragment,{children:[Object(g.jsx)(d.a,{title:"Update Shared Group",data:[{title:"Update Shared Group"}]}),Object(g.jsx)(h.H,{onSubmit:e=>{e.preventDefault(),window.scroll({top:0,behavior:"smooth"}),O.handleSubmit()},className:"d-flex flex-column align-items-center",children:Object(g.jsxs)(h.l,{className:"w-100",children:[Object(g.jsx)(h.p,{className:"border-bottom",children:Object(g.jsx)(h.v,{children:"Update Shared Group Form"})}),Object(g.jsxs)(h.m,{className:"pt-2",children:[Object(g.jsxs)(h.ib,{className:"border-bottom mb-1",children:[Object(g.jsxs)(h.B,{xs:"12",sm:"6",md:"4",className:"mb-1",children:[Object(g.jsx)(h.N,{className:"form-label",for:"TPid",children:"TPid"}),Object(g.jsx)(h.K,{id:"TPid",name:"TPid",value:O.values.TPid,onChange:O.handleChange,invalid:O.touched.TPid&&O.errors.TPid}),O.touched.TPid&&O.errors.TPid?Object(g.jsx)(h.I,{children:O.errors.TPid}):null]}),Object(g.jsxs)(h.B,{xs:"12",sm:"6",md:"4",className:"mb-1",children:[Object(g.jsx)(h.N,{className:"form-label",for:"ID",children:"ID"}),Object(g.jsx)(h.K,{id:"ID",name:"ID",value:O.values.ID,onChange:O.handleChange,invalid:O.touched.ID&&O.errors.ID}),O.touched.ID&&O.errors.ID?Object(g.jsx)(h.I,{children:O.errors.ID}):null]})]}),Object(g.jsxs)(h.ib,{children:[Object(g.jsx)(h.B,{xs:"12",children:Object(g.jsx)(h.v,{children:"Shared Groups"})}),Object(g.jsxs)(h.B,{xs:"12",sm:"6",md:"3",className:"mb-1",children:[Object(g.jsx)(h.N,{className:"form-label",for:"Account",children:"Account"}),Object(g.jsx)(h.K,{value:f.Account,onChange:e=>T({...f,Account:e.target.value}),id:"Account",name:"Account"})]}),Object(g.jsxs)(h.B,{xs:"12",sm:"6",md:"3",className:"mb-1",children:[Object(g.jsx)(h.N,{className:"form-label",for:"Strategy",children:"Strategy"}),Object(g.jsx)(h.K,{id:"Strategy",name:"Strategy",value:f.Strategy,onChange:e=>T({...f,Strategy:e.target.value})})]}),Object(g.jsxs)(h.B,{xs:"12",sm:"6",md:"3",className:"mb-1",children:[Object(g.jsx)(h.N,{className:"form-label",for:"RatingSubject",children:"RatingSubject"}),Object(g.jsx)(h.K,{id:"RatingSubject",name:"RatingSubject",value:f.RatingSubject,onChange:e=>T({...f,RatingSubject:e.target.value})})]}),Object(g.jsx)(h.B,{xs:"12",sm:"6",md:"3",className:"mb-1 d-flex align-items-end",children:Object(g.jsx)(b.a,{onClick:()=>{let e=[...q];0===f.Account.length?u.b.error("Please enter Account."):0===f.Strategy.length?u.b.error("Please enter Strategy."):0===f.RatingSubject.length?u.b.error("Please enter RatingSubject."):(e.push({...f,id:326782382*Math.random()}),r(Object(p.d)(e)),T({Account:"",Strategy:"",RatingSubject:""}))},outline:!0,color:"primary",type:"button",children:"Add"})}),Object(g.jsx)(h.B,{xs:"12",children:Object(g.jsx)(n.a,{noDataComponent:Object(g.jsx)("div",{style:{margin:"24px 0"},children:"No Shared Group Added Yet."}),noHeader:!0,columns:o.a,className:"react-dataTable",style:{background:"red"},sortIcon:Object(g.jsx)(l.a,{size:10}),data:q,theme:"dark"===e?"darkTheme":""})})]})]}),Object(g.jsx)(h.n,{className:"border-top d-flex justify-content-center",children:Object(g.jsx)(b.a,{loading:S.updateSharedGroup,type:"submit",color:"primary",style:{minWidth:150},children:"Submit"})})]})})]})}},479:function(e,r,t){"use strict";var i=t(1),d=t(129),a=t(2),s=t.n(a),c=t(89),n=t(9);r.a=e=>{const{data:r,title:t}=e;return Object(n.jsx)("div",{className:"content-header row",children:Object(n.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2 w-100",children:Object(n.jsx)("div",{className:"row breadcrumbs-top",children:Object(n.jsxs)("div",{className:"col-12",children:[t?Object(n.jsx)("h2",{className:"content-header-title float-start mb-0",children:t}):"",Object(n.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(n.jsxs)(c.g,{children:[Object(n.jsx)(c.h,{tag:"li",children:Object(n.jsx)(d.b,{to:"/",children:"Dashboard"})}),r.map(((e,t)=>{const a=e.link?d.b:i.Fragment,l=r.length-1===t;return Object(n.jsx)(c.h,{tag:"li",active:!l,className:s()({"text-primary":!l}),children:Object(n.jsx)(a,{...e.link?{to:e.link}:{},children:e.title})},t)}))]})})]})})})})}},481:function(e,r,t){"use strict";var i=t(89),d=t.p+"static/media/button_loading.bbd49f26.svg",a=t(9);r.a=e=>{let{loading:r,children:t,...s}=e;return Object(a.jsxs)(i.i,{disabled:r,...s,children:[r?null:t,r?Object(a.jsx)("img",{width:14,src:d,alt:"loading"}):null]})}},482:function(e,r,t){"use strict";var i=t(4),d=t.n(i),a=t(1617);r.a=()=>{const e=d.a.create({baseURL:"localhost:8880/jsonrpc",headers:{Accept:"application/json"}});e.interceptors.response.use((e=>e),(async e=>{let{error:r,response:t}=e;a.a.error("Server Error!")}));return{httpService:e}}},483:function(e,r,t){"use strict";t.d(r,"a",(function(){return d})),t.d(r,"b",(function(){return a})),t.d(r,"e",(function(){return s})),t.d(r,"c",(function(){return c})),t.d(r,"d",(function(){return n}));var i=t(489);const d=i.b({TPid:i.d().required("The TPid field is required."),ID:i.d().required("The ID field is required.")}),a=i.b({TPid:i.d().required("The TPid field is required."),Tenant:i.d().required("The Tenant field is required."),ID:i.d().required("The ID field is required."),ActivationTime:i.d().required("The ActivationTime field is required."),ExpiryTime:i.d().required("The ExpiryTime field is required."),RunID:i.d().required("The RunID field is required."),FilterIDs:i.a().min(1).required("The FilterIDs field is required."),AttributeIDs:i.a().min(1).required("The AttributeIDs field is required.")}),s=i.b({TPid:i.d().required("The TPid field is required."),ID:i.d().required("The ID field is required."),MonthDays:i.d().required("The MonthDays field is required."),Months:i.d().required("The Months field is required."),Time:i.d().required("The Time field is required."),WeekDays:i.d().required("The WeekDays field is required."),Years:i.d().required("The Years field is required.")}),c=i.b({TPid:i.d().required("The TPid field is required."),ID:i.d().required("The ID field is required."),Prefixes:i.a().min(1).required("The Prefixes field is required.")}),n=i.b({TPid:i.d().required("The TPid field is required."),LoadId:i.d().required("The LoadId field is required."),Tenant:i.d().required("The Tenant field is required."),Category:i.d().required("The Category field is required."),Subject:i.d().required("The Subject field is required.")})},647:function(e,r,t){"use strict";var i=t(1),d=t(493),a=t(130),s=t(482),c=t(131),n=t(7),l=t(483);r.a=()=>{const e=Object(n.f)(),{httpService:r}=Object(s.a)(),[t,o]=Object(i.useState)({getSharedGroups:!1,createSharedGroup:!1,updateSharedGroup:!1,deleteSharedGroup:!1}),[u,h]=Object(i.useState)({current:1,total:1}),b=Object(a.c)((e=>e.sharedGroups.slots)),j=Object(d.a)({initialValues:{TPid:"",ID:"",SharedGroups:[]},validationSchema:l.a,onSubmit:e=>{0===b.length?c.b.error("You must add at least one shared group."):m(e,b)}}),m=async(i,d)=>{const a=d.map((e=>{const{id:r,...t}=e;return t}));try{o({...t,createSharedGroup:!0});const d=await r.post("",{method:"APIerSv1.SetTPSharedGroups",params:[{TPid:i.TPid,ID:i.ID,SharedGroups:a}]});o({...t,createSharedGroup:!1}),200===d.status&&(c.b.success("Successfully Created!"),e("/rules/shared_groups"))}catch({err:s,response:n}){o({...t,createSharedGroup:!1})}},p=Object(d.a)({initialValues:{TPid:"",ID:"",SharedGroups:[]},validationSchema:l.a,onSubmit:e=>{0===b.length?c.b.error("You must add at least one shared group."):x(e,b)}}),x=async(i,d)=>{const a=d.map((e=>{const{id:r,...t}=e;return t}));try{o({...t,updateSharedGroup:!0});const d=await r.post("",{method:"APIerSv1.SetTPSharedGroups",params:[{TPid:i.TPid,ID:i.ID,SharedGroups:a}]});o({...t,updateSharedGroup:!1}),200===d.status&&(c.b.success("Successfully Updated!"),e("/rules/shared_groups"))}catch({err:s,response:n}){o({...t,updateSharedGroup:!1})}};return{createSharedGroupController:j,updateSharedGroupController:p,loadings:t,paginates:u,setPaginates:h}}},790:function(e,r,t){"use strict";t.d(r,"a",(function(){return n}));var i=t(89),d=t(130),a=t(141),s=t(9);var c=e=>{let{id:r}=e;const t=Object(d.b)(),c=Object(d.c)((e=>e.sharedGroups.slots));return Object(s.jsx)(i.i,{onClick:()=>t(Object(a.d)(c.filter((e=>e.id!==r)))),style:{padding:6},size:"sm",color:"danger",type:"button",children:"Delete"})};const n=[{name:"Account",minWidth:"100px",selector:e=>e.Account},{name:"Strategy",minWidth:"100px",selector:e=>e.Strategy},{name:"RatingSubject",minWidth:"100px",selector:e=>e.RatingSubject},{name:"Actions",minWidth:"120px",maxWidth:"120px",selector:e=>e.id,cell:e=>Object(s.jsx)(c,{id:e.id})}]}}]);
//# sourceMappingURL=83.b80d6b4f.chunk.js.map