(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[48],{1520:function(e){e.exports=JSON.parse("{}")},1703:function(e,t,i){"use strict";i.r(t);var r=i(1),a=i(480),s=i(640),d=i(484),n=i(486),l=i(488),c=i.n(l),o=i(89),u=i(7),h=i(130),b=i(145),j=i(9);var g=e=>{let{row:t}=e;const i=Object(u.f)(),r=Object(h.b)();return Object(j.jsxs)("div",{className:"d-flex align-items-center",children:[Object(j.jsx)(o.i,{onClick:()=>{r(Object(b.c)(t.ID)),r(Object(b.b)(1))},style:{marginRight:8},color:"danger",size:"sm",children:"Delete"}),Object(j.jsx)(o.i,{onClick:()=>{i("/rules/chargers/update?entity_id=".concat(t.ID))},style:{marginRight:8},color:"primary",size:"sm",children:"Update"})]})};const m=[{name:"ID",minWidth:"100px",selector:e=>e.ID},{name:"Operations",minWidth:"100px",selector:e=>e.ID,cell:e=>Object(j.jsx)(g,{row:e})}];i(1520);var T=i(510);t.default=()=>{const e=Object(h.b)(),t=Object(u.f)(),{skin:i}=Object(d.a)(),{getChargers:l,deleteEntity:g,listData:y,loadings:v}=Object(s.a)(),p=Object(h.c)((e=>e.chargers.deleteModal)),I=Object(h.c)((e=>e.chargers.selectedEntity)),O=Object(h.c)((e=>e.app.getAllTpIdsLoading)),D=Object(h.c)((e=>e.app.selectedTpId));return Object(r.useEffect)((()=>{D&&l()}),[D]),Object(j.jsxs)(r.Fragment,{children:[Object(j.jsxs)(o.B,{className:"position-relative",xs:12,children:[Object(j.jsx)(a.a,{title:"Chargers",data:[{title:"Chargers"}]}),Object(j.jsx)(o.i,{onClick:()=>t("/rules/chargers/new"),color:"primary",style:{position:"absolute",right:0,top:0},children:"New Charger"})]}),Object(j.jsxs)("div",{className:"react-dataTable mv_datatable_container",children:[O?Object(j.jsx)("div",{style:{width:"100%",height:"50vh"},className:"d-flex justify-content-center align-items-center",children:"Loading TPIds..."}):null,!O&&v.getChargers?Object(j.jsx)("div",{className:"datatable_loading_cover",children:Object(j.jsx)(n.a,{})}):null,O||v.getChargers?null:Object(j.jsx)(r.Fragment,{children:Object(j.jsx)(c.a,{noDataComponent:v.getChargers?"":Object(j.jsx)("div",{style:{margin:"24px 0"},children:"No Charger Founded!"}),noHeader:!0,columns:m,className:"react-dataTable",style:{background:"red"},data:y,theme:"dark"===i?"darkTheme":""})}),Object(j.jsx)(T.a,{visible:p,setVisible:b.b,title:"Are you sure you want to delete this charger?",noAction:()=>e(Object(b.b)(!1)),noColor:"secondary",noTitle:"Cancel",yesLoading:v.deleteEntity,yesAction:()=>g(I),yesColor:"danger",yesTitle:"Delete",type:"global"})]})]})}},480:function(e,t,i){"use strict";var r=i(1),a=i(129),s=i(2),d=i.n(s),n=i(89),l=i(9);t.a=e=>{const{data:t,title:i}=e;return Object(l.jsx)("div",{className:"content-header row",children:Object(l.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2 w-100",children:Object(l.jsx)("div",{className:"row breadcrumbs-top",children:Object(l.jsxs)("div",{className:"col-12",children:[i?Object(l.jsx)("h2",{className:"content-header-title float-start mb-0",children:i}):"",Object(l.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(l.jsxs)(n.g,{children:[Object(l.jsx)(n.h,{tag:"li",children:Object(l.jsx)(a.b,{to:"/",children:"Dashboard"})}),t.map(((e,i)=>{const s=e.link?a.b:r.Fragment,c=t.length-1===i;return Object(l.jsx)(n.h,{tag:"li",active:!c,className:d()({"text-primary":!c}),children:Object(l.jsx)(s,{...e.link?{to:e.link}:{},children:e.title})},i)}))]})})]})})})})}},482:function(e,t,i){"use strict";var r=i(89),a=i.p+"static/media/button_loading.bbd49f26.svg",s=i(9);t.a=e=>{let{loading:t,children:i,...d}=e;return Object(s.jsxs)(r.i,{disabled:t,...d,children:[t?null:i,t?Object(s.jsx)("img",{width:14,src:a,alt:"loading"}):null]})}},483:function(e,t,i){"use strict";i.d(t,"a",(function(){return a})),i.d(t,"b",(function(){return s})),i.d(t,"e",(function(){return d})),i.d(t,"c",(function(){return n})),i.d(t,"d",(function(){return l}));var r=i(490);const a=r.b({TPid:r.d().required("The TPid field is required."),ID:r.d().required("The ID field is required.")}),s=r.b({TPid:r.d().required("The TPid field is required."),Tenant:r.d().required("The Tenant field is required."),ID:r.d().required("The ID field is required."),ActivationTime:r.d().required("The ActivationTime field is required."),ExpiryTime:r.d().required("The ExpiryTime field is required."),RunID:r.d().required("The RunID field is required."),FilterIDs:r.a().min(1).required("The FilterIDs field is required."),AttributeIDs:r.a().min(1).required("The AttributeIDs field is required.")}),d=r.b({TPid:r.d().required("The TPid field is required."),ID:r.d().required("The ID field is required."),MonthDays:r.d().required("The MonthDays field is required."),Months:r.d().required("The Months field is required."),Time:r.d().required("The Time field is required."),WeekDays:r.d().required("The WeekDays field is required."),Years:r.d().required("The Years field is required.")}),n=r.b({TPid:r.d().required("The TPid field is required."),ID:r.d().required("The ID field is required."),Prefixes:r.a().min(1).required("The Prefixes field is required.")}),l=r.b({TPid:r.d().required("The TPid field is required."),LoadId:r.d().required("The LoadId field is required."),Tenant:r.d().required("The Tenant field is required."),Category:r.d().required("The Category field is required."),Subject:r.d().required("The Subject field is required.")})},486:function(e,t,i){"use strict";i(1),i(487);var r=i(9);t.a=()=>Object(r.jsx)("div",{className:"linear-activity",children:Object(r.jsx)("div",{className:"indeterminate"})})},487:function(e,t,i){},510:function(e,t,i){"use strict";var r=i(89),a=i(482),s=i(130),d=i(9);t.a=e=>{let{visible:t,setVisible:i,title:n,noAction:l,noColor:c,noTitle:o,yesLoading:u,yesAction:h,yesColor:b,yesTitle:j,type:g,size:m,children:T}=e;const y=Object(s.b)();return Object(d.jsxs)(r.Q,{isOpen:1===t,size:m||"md",toggle:()=>{"global"===g?y(i(null)):i(null)},className:"modal-dialog-centered",modalClassName:"modal-primary",children:[Object(d.jsx)(r.T,{toggle:()=>{"global"===g?y(i(null)):i(null)},children:n}),Object(d.jsx)(r.R,{children:T}),Object(d.jsxs)(r.S,{className:"w-100 d-flex justify-content-center",children:[Object(d.jsx)(a.a,{onClick:l,style:{width:160},color:c||"danger",children:o}),Object(d.jsx)(a.a,{loading:u,onClick:h,style:{width:160},color:b||"success",children:j})]})]},1)}},640:function(e,t,i){"use strict";var r=i(1),a=i(483),s=i(495),d=i(131),n=i(7),l=i(493),c=i(130),o=i(145);t.a=()=>{const e=Object(c.b)(),t=Object(n.f)(),{httpService:i}=Object(l.a)(),[u,h]=Object(r.useState)({getChargers:!1,getEntityById:!1,createCharger:!1,updateCharger:!1,deleteEntity:!1}),[b,j]=Object(r.useState)([]),g=Object(c.c)((e=>e.app.selectedTpId)),m=async()=>{let e=[];try{var t,r;h({...u,getChargers:!0});const a=await i.post("",{method:"APIerSv1.GetTPChargerIDs",params:[{TPid:g}]});h({...u,getChargers:!1}),null===a||void 0===a||null===(t=a.data)||void 0===t||null===(r=t.result)||void 0===r||r.map((t=>{e.push({ID:t})})),j(e)}catch({err:a,response:s}){h({...u,getChargers:!1})}},T=Object(s.a)({initialValues:{TPid:g,Tenant:"",ID:"",ActivationTime:"",ExpiryTime:"",RunID:"",Weight:0,FilterIDs:[],AttributeIDs:[]},validationSchema:a.b,enableReinitialize:!0,onSubmit:e=>{y(e)}}),y=async e=>{try{h({...u,createCharger:!0});const r=await i.post("",{method:"APIerSv1.SetTPCharger",params:[{TPid:g,Tenant:e.Tenant,ID:e.ID,FilterIDs:e.FilterIDs,ActivationInterval:{ActivationTime:e.ActivationTime,ExpiryTime:e.ExpiryTime},RunID:e.RunID,AttributeIDs:e.AttributeIDs,Weight:e.Weight}]});h({...u,createCharger:!1}),200===r.status&&(d.b.success("Successfully Created!"),t("/rules/chargers"))}catch({err:r,response:a}){h({...u,createCharger:!1})}},v=Object(s.a)({initialValues:{TPid:g,Tenant:"",ID:"",ActivationTime:"",ExpiryTime:"",RunID:"",Weight:0,FilterIDs:[],AttributeIDs:[]},validationSchema:a.b,enableReinitialize:!0,onSubmit:e=>{p(e)}}),p=async e=>{try{h({...u,updateCharger:!0});const r=await i.post("",{method:"APIerSv1.SetTPCharger",params:[{TPid:g,Tenant:e.Tenant,ID:e.ID,FilterIDs:e.FilterIDs,ActivationInterval:{ActivationTime:e.ActivationTime,ExpiryTime:e.ExpiryTime},RunID:e.RunID,AttributeIDs:e.AttributeIDs,Weight:e.Weight}]});h({...u,updateCharger:!1}),200===r.status&&(d.b.success("Successfully Created!"),t("/rules/chargers"))}catch({err:r,response:a}){h({...u,updateCharger:!1})}};return{getChargers:m,getEntityById:async e=>{try{var r;h({...u,getEntityById:!0});const l=await i.post("",{method:"APIerSv1.GetTPCharger",params:[{TPid:g,ID:e}]});var a,s,n;if(h({...u,getEntityById:!1}),"NOT_FOUND"===(null===l||void 0===l||null===(r=l.data)||void 0===r?void 0:r.error))d.b.error(null===l||void 0===l||null===(a=l.data)||void 0===a?void 0:a.error),t("/rules/chargers");else v.setFieldValue("ID",null===l||void 0===l||null===(s=l.data)||void 0===s||null===(n=s.result)||void 0===n?void 0:n.ID)}catch({err:l,response:c}){h({...u,getEntityById:!1})}},createChargerController:T,updateChargerController:v,deleteEntity:async t=>{try{h({...u,deleteEntity:!0});await i.post("",{method:"APIerSv1.RemoveTPCharger",params:[{TPid:g,ID:t}]});h({...u,deleteEntity:!1}),e(Object(o.b)(null)),d.b.success("Successfully Deleted."),m()}catch({err:r,response:a}){h({...u,deleteEntity:!1})}},listData:b,loadings:u}}}}]);
//# sourceMappingURL=48.601c2604.chunk.js.map