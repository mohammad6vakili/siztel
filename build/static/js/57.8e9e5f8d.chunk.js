(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[57],{1599:function(e,a,t){"use strict";t.r(a);var r=t(1),i=t(479),s=t(7),n=t(487),c=t.n(n),l=t(834),d=t(785),o=t(131),m=t(89),b=t(481),h=t(484),j=t(130),u=t(142),x=t(640),g=t(514),p=t(9);a.default=()=>{const{skin:e}=Object(h.a)(),a=Object(j.b)(),{createActionController:t,loadings:n}=(Object(s.f)(),Object(x.a)()),[O,f]=Object(r.useState)(null),[T,B]=Object(r.useState)({Identifier:"",BalanceId:"",BalanceType:"",Units:"",ExpiryTime:"",Filter:"",TimingTags:"",DestinationIds:"",RatingSubject:"",Categories:"",SharedGroups:"",BalanceWeight:"",ExtraParameters:"",BalanceBlocker:!1,BalanceDisabled:!1,Weight:0}),N=Object(j.c)((e=>e.actions.slots));return Object(p.jsxs)(r.Fragment,{children:[Object(p.jsx)(i.a,{title:"New Action",data:[{title:"New Action"}]}),Object(p.jsx)(m.H,{onSubmit:e=>{e.preventDefault(),window.scroll({top:0,behavior:"smooth"}),t.handleSubmit()},className:"d-flex flex-column align-items-center",children:Object(p.jsxs)(m.l,{className:"w-100",children:[Object(p.jsx)(m.p,{className:"border-bottom",children:Object(p.jsx)(m.v,{children:"New Action Form"})}),Object(p.jsxs)(m.m,{className:"pt-2",children:[Object(p.jsxs)(m.ib,{className:"border-bottom mb-1",children:[Object(p.jsxs)(m.B,{xs:"12",sm:"6",md:"4",className:"mb-1",children:[Object(p.jsx)(m.N,{className:"form-label",for:"TPid",children:"TPid"}),Object(p.jsx)(m.K,{id:"TPid",name:"TPid",value:t.values.TPid,onChange:t.handleChange,invalid:t.touched.TPid&&t.errors.TPid}),t.touched.TPid&&t.errors.TPid?Object(p.jsx)(m.I,{children:t.errors.TPid}):null]}),Object(p.jsxs)(m.B,{xs:"12",sm:"6",md:"4",className:"mb-1",children:[Object(p.jsx)(m.N,{className:"form-label",for:"ID",children:"ID"}),Object(p.jsx)(m.K,{id:"ID",name:"ID",value:t.values.ID,onChange:t.handleChange,invalid:t.touched.ID&&t.errors.ID}),t.touched.ID&&t.errors.ID?Object(p.jsx)(m.I,{children:t.errors.ID}):null]})]}),Object(p.jsxs)(m.ib,{children:[Object(p.jsx)(m.B,{xs:"12",children:Object(p.jsx)(m.v,{children:"Actions"})}),Object(p.jsxs)(m.B,{xs:"12",sm:"6",md:"3",className:"mb-1",children:[Object(p.jsx)(m.N,{className:"form-label",for:"Identifier",children:"Identifier"}),Object(p.jsx)(m.K,{value:T.Identifier,onChange:e=>B({...T,Identifier:e.target.value}),id:"Identifier",name:"Identifier"})]}),Object(p.jsxs)(m.B,{xs:"12",sm:"6",md:"3",className:"mb-1",children:[Object(p.jsx)(m.N,{className:"form-label",for:"BalanceId",children:"BalanceId"}),Object(p.jsx)(m.K,{id:"BalanceId",name:"BalanceId",value:T.BalanceId,onChange:e=>B({...T,BalanceId:e.target.value})})]}),Object(p.jsxs)(m.B,{xs:"12",sm:"6",md:"3",className:"mb-1",children:[Object(p.jsx)(m.N,{className:"form-label",for:"BalanceType",children:"BalanceType"}),Object(p.jsx)(m.K,{id:"BalanceType",name:"BalanceType",value:T.BalanceType,onChange:e=>B({...T,BalanceType:e.target.value})})]}),Object(p.jsxs)(m.B,{xs:"12",sm:"6",md:"3",className:"mb-1",children:[Object(p.jsx)(m.N,{className:"form-label",for:"Units",children:"Units"}),Object(p.jsx)(m.K,{id:"Units",name:"Units",value:T.Units,onChange:e=>B({...T,Units:e.target.value})})]}),Object(p.jsxs)(m.B,{xs:"12",sm:"6",md:"3",className:"mb-1",children:[Object(p.jsx)(m.N,{className:"form-label",for:"ExpiryTime",children:"ExpiryTime"}),Object(p.jsx)(g.a,{inputPlaceholder:"Click to open calendar",value:O,onChange:e=>{f(e),B({...T,ExpiryTime:"".concat(e.year,"-").concat(e.month,"-").concat(e.day,"T00:00:00Z")})}})]}),Object(p.jsxs)(m.B,{xs:"12",sm:"6",md:"3",className:"mb-1",children:[Object(p.jsx)(m.N,{className:"form-label",for:"Filter",children:"Filter"}),Object(p.jsx)(m.K,{id:"Filter",name:"Filter",value:T.Filter,onChange:e=>B({...T,Filter:e.target.value})})]}),Object(p.jsxs)(m.B,{xs:"12",sm:"6",md:"3",className:"mb-1",children:[Object(p.jsx)(m.N,{className:"form-label",for:"TimingTags",children:"TimingTags"}),Object(p.jsx)(m.K,{id:"TimingTags",name:"TimingTags",value:T.TimingTags,onChange:e=>B({...T,TimingTags:e.target.value})})]}),Object(p.jsxs)(m.B,{xs:"12",sm:"6",md:"3",className:"mb-1",children:[Object(p.jsx)(m.N,{className:"form-label",for:"DestinationIds",children:"DestinationIds"}),Object(p.jsx)(m.K,{id:"DestinationIds",name:"DestinationIds",value:T.DestinationIds,onChange:e=>B({...T,DestinationIds:e.target.value})})]}),Object(p.jsxs)(m.B,{xs:"12",sm:"6",md:"3",className:"mb-1",children:[Object(p.jsx)(m.N,{className:"form-label",for:"RatingSubject",children:"RatingSubject"}),Object(p.jsx)(m.K,{id:"RatingSubject",name:"RatingSubject",value:T.RatingSubject,onChange:e=>B({...T,RatingSubject:e.target.value})})]}),Object(p.jsxs)(m.B,{xs:"12",sm:"6",md:"3",className:"mb-1",children:[Object(p.jsx)(m.N,{className:"form-label",for:"Categories",children:"Categories"}),Object(p.jsx)(m.K,{id:"Categories",name:"Categories",value:T.Categories,onChange:e=>B({...T,Categories:e.target.value})})]}),Object(p.jsxs)(m.B,{xs:"12",sm:"6",md:"3",className:"mb-1",children:[Object(p.jsx)(m.N,{className:"form-label",for:"SharedGroups",children:"SharedGroups"}),Object(p.jsx)(m.K,{id:"SharedGroups",name:"SharedGroups",value:T.SharedGroups,onChange:e=>B({...T,SharedGroups:e.target.value})})]}),Object(p.jsxs)(m.B,{xs:"12",sm:"6",md:"3",className:"mb-1",children:[Object(p.jsx)(m.N,{className:"form-label",for:"BalanceWeight",children:"BalanceWeight"}),Object(p.jsx)(m.K,{id:"BalanceWeight",name:"BalanceWeight",value:T.BalanceWeight,onChange:e=>B({...T,BalanceWeight:e.target.value})})]}),Object(p.jsxs)(m.B,{xs:"12",sm:"6",md:"3",className:"mb-1",children:[Object(p.jsx)(m.N,{className:"form-label",for:"ExtraParameters",children:"ExtraParameters"}),Object(p.jsx)(m.K,{id:"ExtraParameters",name:"ExtraParameters",value:T.ExtraParameters,onChange:e=>B({...T,ExtraParameters:e.target.value})})]}),Object(p.jsxs)(m.B,{xs:"12",sm:"6",md:"3",className:"mb-1",children:[Object(p.jsx)(m.N,{className:"form-label",for:"Weight",children:"Weight"}),Object(p.jsx)(m.K,{type:"number",id:"Weight",name:"Weight",value:T.Weight,onChange:e=>B({...T,Weight:e.target.value})})]}),Object(p.jsxs)(m.B,{xs:"12",sm:"6",md:"3",className:"mb-1",children:[Object(p.jsx)(m.N,{className:"form-label",for:"BalanceBlocker",children:"BalanceBlocker"}),Object(p.jsx)("div",{className:"form-check",children:Object(p.jsx)(m.K,{id:"BalanceBlocker",name:"BalanceBlocker",type:"checkbox",checked:T.BalanceBlocker,onChange:e=>B({...T,BalanceBlocker:e.target.checked})})})]}),Object(p.jsxs)(m.B,{xs:"12",sm:"6",md:"3",className:"mb-1",children:[Object(p.jsx)(m.N,{className:"form-label",for:"BalanceDisabled",children:"BalanceDisabled"}),Object(p.jsx)("div",{className:"form-check",children:Object(p.jsx)(m.K,{id:"BalanceDisabled",name:"BalanceDisabled",checked:T.BalanceDisabled,type:"checkbox",onChange:e=>B({...T,BalanceDisabled:e.target.checked})})})]}),Object(p.jsx)(m.B,{xs:"12",sm:"6",md:"3",className:"mb-1 d-flex align-items-end",children:Object(p.jsx)(b.a,{onClick:()=>{let e=[...N];0===T.Identifier.length?o.b.error("Please enter Identifier."):0===T.BalanceId.length?o.b.error("Please enter BalanceId."):0===T.BalanceType.length?o.b.error("Please enter BalanceType."):0===T.Units.length?o.b.error("Please enter Units."):0===T.ExpiryTime.length?o.b.error("Please enter ExpiryTime."):0===T.Filter.length?o.b.error("Please enter Filter."):0===T.TimingTags.length?o.b.error("Please enter TimingTags."):0===T.DestinationIds.length?o.b.error("Please enter DestinationIds."):0===T.RatingSubject.length?o.b.error("Please enter RatingSubject."):0===T.Categories.length?o.b.error("Please enter Categories."):0===T.SharedGroups.length?o.b.error("Please enter SharedGroups."):0===T.BalanceWeight.length?o.b.error("Please enter BalanceWeight."):0===T.ExtraParameters.length?o.b.error("Please enter ExtraParameters."):(e.push({...T,id:326782382*Math.random()}),a(Object(u.d)(e)),B({Identifier:"",BalanceId:"",BalanceType:"",Units:"",ExpiryTime:"",Filter:"",TimingTags:"",DestinationIds:"",RatingSubject:"",Categories:"",SharedGroups:"",BalanceWeight:"",ExtraParameters:"",BalanceBlocker:!1,BalanceDisabled:!1,Weight:0}))},outline:!0,color:"primary",type:"button",children:"Add"})}),Object(p.jsx)(m.B,{xs:"12",children:Object(p.jsx)(c.a,{noDataComponent:Object(p.jsx)("div",{style:{margin:"24px 0"},children:"No Action Added Yet."}),noHeader:!0,columns:d.a,className:"react-dataTable",style:{background:"red"},sortIcon:Object(p.jsx)(l.a,{size:10}),data:N,theme:"dark"===e?"darkTheme":""})})]})]}),Object(p.jsx)(m.n,{className:"border-top d-flex justify-content-center",children:Object(p.jsx)(b.a,{loading:n.createAction,type:"submit",color:"primary",style:{minWidth:150},children:"Submit"})})]})})]})}},479:function(e,a,t){"use strict";var r=t(1),i=t(129),s=t(2),n=t.n(s),c=t(89),l=t(9);a.a=e=>{const{data:a,title:t}=e;return Object(l.jsx)("div",{className:"content-header row",children:Object(l.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2 w-100",children:Object(l.jsx)("div",{className:"row breadcrumbs-top",children:Object(l.jsxs)("div",{className:"col-12",children:[t?Object(l.jsx)("h2",{className:"content-header-title float-start mb-0",children:t}):"",Object(l.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(l.jsxs)(c.g,{children:[Object(l.jsx)(c.h,{tag:"li",children:Object(l.jsx)(i.b,{to:"/",children:"Dashboard"})}),a.map(((e,t)=>{const s=e.link?i.b:r.Fragment,d=a.length-1===t;return Object(l.jsx)(c.h,{tag:"li",active:!d,className:n()({"text-primary":!d}),children:Object(l.jsx)(s,{...e.link?{to:e.link}:{},children:e.title})},t)}))]})})]})})})})}},481:function(e,a,t){"use strict";var r=t(89),i=t.p+"static/media/button_loading.bbd49f26.svg",s=t(9);a.a=e=>{let{loading:a,children:t,...n}=e;return Object(s.jsxs)(r.i,{disabled:a,...n,children:[a?null:t,a?Object(s.jsx)("img",{width:14,src:i,alt:"loading"}):null]})}},482:function(e,a,t){"use strict";var r=t(4),i=t.n(r),s=t(1617);a.a=()=>{const e=i.a.create({baseURL:"localhost:8880/jsonrpc",headers:{Accept:"application/json"}});e.interceptors.response.use((e=>e),(async e=>{let{error:a,response:t}=e;s.a.error("Server Error!")}));return{httpService:e}}},483:function(e,a,t){"use strict";t.d(a,"a",(function(){return i})),t.d(a,"b",(function(){return s})),t.d(a,"e",(function(){return n})),t.d(a,"c",(function(){return c})),t.d(a,"d",(function(){return l}));var r=t(489);const i=r.b({TPid:r.d().required("The TPid field is required."),ID:r.d().required("The ID field is required.")}),s=r.b({TPid:r.d().required("The TPid field is required."),Tenant:r.d().required("The Tenant field is required."),ID:r.d().required("The ID field is required."),ActivationTime:r.d().required("The ActivationTime field is required."),ExpiryTime:r.d().required("The ExpiryTime field is required."),RunID:r.d().required("The RunID field is required."),FilterIDs:r.a().min(1).required("The FilterIDs field is required."),AttributeIDs:r.a().min(1).required("The AttributeIDs field is required.")}),n=r.b({TPid:r.d().required("The TPid field is required."),ID:r.d().required("The ID field is required."),MonthDays:r.d().required("The MonthDays field is required."),Months:r.d().required("The Months field is required."),Time:r.d().required("The Time field is required."),WeekDays:r.d().required("The WeekDays field is required."),Years:r.d().required("The Years field is required.")}),c=r.b({TPid:r.d().required("The TPid field is required."),ID:r.d().required("The ID field is required."),Prefixes:r.a().min(1).required("The Prefixes field is required.")}),l=r.b({TPid:r.d().required("The TPid field is required."),LoadId:r.d().required("The LoadId field is required."),Tenant:r.d().required("The Tenant field is required."),Category:r.d().required("The Category field is required."),Subject:r.d().required("The Subject field is required.")})},514:function(e,a,t){"use strict";t(515);var r=t(557),i=t.n(r),s=t(533),n=t(484),c=t(9);a.a=e=>{let{inputClassName:a,minimumDate:t,maximumDate:r,...l}=e;const{skin:d}=Object(n.a)();return Object(c.jsxs)("div",{className:"custom_datepicker_wrapper",children:[Object(c.jsx)(i.a,{colorPrimary:"#73bcf0",colorPrimaryLight:"#73bcf03b",inputClassName:"".concat(a,"\n          ").concat("light"===d?"custom_datepicker":"custom_datepicker_dark","\n        "),minimumDate:t,maximumDate:r,locale:"en",calendarPopperPosition:"top",calendarClassName:"responsive-calendar",...l}),Object(c.jsx)(s.b,{fontSize:20})]})}},515:function(e,a,t){},640:function(e,a,t){"use strict";var r=t(1),i=t(482),s=t(131),n=t(7),c=t(493),l=t(483),d=t(130);a.a=()=>{const e=Object(n.f)(),{httpService:a}=Object(i.a)(),[t,o]=Object(r.useState)({getActions:!1,createAction:!1,updateAction:!1,deleteAction:!1}),m=Object(d.c)((e=>e.actions.slots)),[b,h]=Object(r.useState)({current:1,total:1}),j=Object(c.a)({initialValues:{TPid:"",ID:"",Actions:[]},validationSchema:l.a,onSubmit:e=>{0===m.length?s.b.error("You must add at least one action."):u(e,m)}}),u=async(r,i)=>{const n=i.map((e=>{const{id:a,...t}=e;return t}));try{o({...t,createAction:!0});const i=await a.post("",{method:"APIerSv1.SetTPActions",params:[{TPid:r.TPid,ID:r.ID,Actions:n}]});o({...t,createAction:!1}),200===i.status&&(s.b.success("Successfully Created!"),e("/rules/actions"))}catch({err:c,response:l}){o({...t,createAction:!1})}},x=Object(c.a)({initialValues:{TPid:"",ID:"",Actions:[]},validationSchema:l.a,onSubmit:e=>{0===m.length?s.b.error("You must add at least one action."):g(e,m)}}),g=async(r,i)=>{const n=i.map((e=>{const{id:a,...t}=e;return t}));try{o({...t,updateAction:!0});const i=await a.post("",{method:"APIerSv1.SetTPActions",params:[{TPid:r.TPid,ID:r.ID,Actions:n}]});o({...t,updateAction:!1}),200===i.status&&(s.b.success("Successfully Updated!"),e("/rules/actions"))}catch({err:c,response:l}){o({...t,updateAction:!1})}};return{createActionController:j,updateActionController:x,loadings:t,paginates:b,setPaginates:h}}},785:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var r=t(89),i=t(130),s=t(142),n=t(9);var c=e=>{let{id:a}=e;const t=Object(i.b)(),c=Object(i.c)((e=>e.actions.slots));return Object(n.jsx)(r.i,{onClick:()=>t(Object(s.d)(c.filter((e=>e.id!==a)))),style:{padding:6},size:"sm",color:"danger",type:"button",children:"Delete"})};const l=[{name:"Identifier",minWidth:"100px",selector:e=>e.Identifier},{name:"BalanceId",minWidth:"100px",selector:e=>e.BalanceId},{name:"BalanceType",minWidth:"120px",selector:e=>e.BalanceType},{name:"Units",minWidth:"100px",selector:e=>e.Units},{name:"ExpiryTime",minWidth:"120px",selector:e=>e.ExpiryTime},{name:"Filter",minWidth:"100px",selector:e=>e.Filter},{name:"TimingTags",minWidth:"120px",selector:e=>e.TimingTags},{name:"DestinationIds",minWidth:"140px",selector:e=>e.DestinationIds},{name:"RatingSubject",minWidth:"130px",selector:e=>e.RatingSubject},{name:"Categories",minWidth:"100px",selector:e=>e.Categories},{name:"SharedGroups",minWidth:"130px",selector:e=>e.SharedGroups},{name:"BalanceWeight",minWidth:"130px",selector:e=>e.BalanceWeight},{name:"ExtraParameters",minWidth:"140px",selector:e=>e.ExtraParameters},{name:"BalanceBlocker",minWidth:"130px",selector:e=>e.BalanceBlocker,cell:e=>JSON.stringify(e.BalanceBlocker)},{name:"BalanceDisabled",minWidth:"140px",selector:e=>e.BalanceDisabled,cell:e=>JSON.stringify(e.BalanceDisabled)},{name:"Weight",minWidth:"100px",selector:e=>e.Weight},{name:"Actions",minWidth:"120px",maxWidth:"120px",selector:e=>e.id,cell:e=>Object(n.jsx)(c,{id:e.id})}]}}]);
//# sourceMappingURL=57.8e9e5f8d.chunk.js.map