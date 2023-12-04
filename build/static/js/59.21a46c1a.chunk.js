(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[59],{1702:function(e,t,i){"use strict";i.r(t);var r=i(1),s=i(480),c=i(639),d=i(486),n=i(89),a=i(484),l=i(488),o=i.n(l),u=i(7),b=i(130),h=i(139),j=i(9);var m=e=>{let{row:t}=e;const i=Object(u.f)(),r=Object(b.b)();return Object(j.jsxs)("div",{className:"d-flex align-items-center",children:[Object(j.jsx)(n.i,{onClick:()=>{r(Object(h.c)(t.ID)),r(Object(h.b)(1))},style:{marginRight:8},color:"danger",size:"sm",children:"Delete"}),Object(j.jsx)(n.i,{onClick:()=>{i("/rules/actions/update?entity_id=".concat(t.ID))},style:{marginRight:8},color:"primary",size:"sm",children:"Update"})]})};const T=[{name:"ID",minWidth:"100px",selector:e=>e.ID},{name:"Operations",minWidth:"100px",selector:e=>e.ID,cell:e=>Object(j.jsx)(m,{row:e})}];var O=i(510);t.default=()=>{const{skin:e}=Object(a.a)(),t=Object(u.f)(),i=Object(b.b)(),{getActions:l,deleteAction:m,listData:p,loadings:v}=Object(c.a)(),g=Object(b.c)((e=>e.actions.selectedEntity)),A=Object(b.c)((e=>e.actions.deleteModal)),f=Object(b.c)((e=>e.app.getAllTpIdsLoading)),y=Object(b.c)((e=>e.app.selectedTpId));return Object(r.useEffect)((()=>{y&&l()}),[y]),Object(j.jsxs)(r.Fragment,{children:[Object(j.jsxs)(n.B,{className:"position-relative",xs:12,children:[Object(j.jsx)(s.a,{title:"Actions",data:[{title:"Actions"}]}),Object(j.jsx)(n.i,{onClick:()=>t("/rules/actions/new"),color:"primary",style:{position:"absolute",right:0,top:0},children:"New Action"})]}),f?Object(j.jsx)("div",{style:{width:"100%",height:"50vh"},className:"d-flex justify-content-center align-items-center",children:"Loading TPIds..."}):null,!f&&v.getActions?Object(j.jsx)("div",{className:"datatable_loading_cover",children:Object(j.jsx)(d.a,{})}):null,f||v.getActions?null:Object(j.jsx)(r.Fragment,{children:Object(j.jsx)(o.a,{noDataComponent:v.getActions?"":Object(j.jsx)("div",{style:{margin:"24px 0"},children:"No Charger Founded!"}),noHeader:!0,columns:T,className:"react-dataTable",style:{background:"red"},data:p,theme:"dark"===e?"darkTheme":""})}),Object(j.jsx)(O.a,{visible:A,setVisible:h.b,title:"Are you sure you want to delete this action?",noAction:()=>i(Object(h.b)(!1)),noColor:"secondary",noTitle:"Cancel",yesLoading:v.deleteAction,yesAction:()=>m(g),yesColor:"danger",yesTitle:"Delete",type:"global"})]})}},480:function(e,t,i){"use strict";var r=i(1),s=i(129),c=i(2),d=i.n(c),n=i(89),a=i(9);t.a=e=>{const{data:t,title:i}=e;return Object(a.jsx)("div",{className:"content-header row",children:Object(a.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2 w-100",children:Object(a.jsx)("div",{className:"row breadcrumbs-top",children:Object(a.jsxs)("div",{className:"col-12",children:[i?Object(a.jsx)("h2",{className:"content-header-title float-start mb-0",children:i}):"",Object(a.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(a.jsxs)(n.g,{children:[Object(a.jsx)(n.h,{tag:"li",children:Object(a.jsx)(s.b,{to:"/",children:"Dashboard"})}),t.map(((e,i)=>{const c=e.link?s.b:r.Fragment,l=t.length-1===i;return Object(a.jsx)(n.h,{tag:"li",active:!l,className:d()({"text-primary":!l}),children:Object(a.jsx)(c,{...e.link?{to:e.link}:{},children:e.title})},i)}))]})})]})})})})}},482:function(e,t,i){"use strict";var r=i(89),s=i.p+"static/media/button_loading.bbd49f26.svg",c=i(9);t.a=e=>{let{loading:t,children:i,...d}=e;return Object(c.jsxs)(r.i,{disabled:t,...d,children:[t?null:i,t?Object(c.jsx)("img",{width:14,src:s,alt:"loading"}):null]})}},483:function(e,t,i){"use strict";i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return c})),i.d(t,"e",(function(){return d})),i.d(t,"c",(function(){return n})),i.d(t,"d",(function(){return a}));var r=i(490);const s=r.b({TPid:r.d().required("The TPid field is required."),ID:r.d().required("The ID field is required.")}),c=r.b({TPid:r.d().required("The TPid field is required."),Tenant:r.d().required("The Tenant field is required."),ID:r.d().required("The ID field is required."),ActivationTime:r.d().required("The ActivationTime field is required."),ExpiryTime:r.d().required("The ExpiryTime field is required."),RunID:r.d().required("The RunID field is required."),FilterIDs:r.a().min(1).required("The FilterIDs field is required."),AttributeIDs:r.a().min(1).required("The AttributeIDs field is required.")}),d=r.b({TPid:r.d().required("The TPid field is required."),ID:r.d().required("The ID field is required."),MonthDays:r.d().required("The MonthDays field is required."),Months:r.d().required("The Months field is required."),Time:r.d().required("The Time field is required."),WeekDays:r.d().required("The WeekDays field is required."),Years:r.d().required("The Years field is required.")}),n=r.b({TPid:r.d().required("The TPid field is required."),ID:r.d().required("The ID field is required."),Prefixes:r.a().min(1).required("The Prefixes field is required.")}),a=r.b({TPid:r.d().required("The TPid field is required."),LoadId:r.d().required("The LoadId field is required."),Tenant:r.d().required("The Tenant field is required."),Category:r.d().required("The Category field is required."),Subject:r.d().required("The Subject field is required.")})},486:function(e,t,i){"use strict";i(1),i(487);var r=i(9);t.a=()=>Object(r.jsx)("div",{className:"linear-activity",children:Object(r.jsx)("div",{className:"indeterminate"})})},487:function(e,t,i){},510:function(e,t,i){"use strict";var r=i(89),s=i(482),c=i(130),d=i(9);t.a=e=>{let{visible:t,setVisible:i,title:n,noAction:a,noColor:l,noTitle:o,yesLoading:u,yesAction:b,yesColor:h,yesTitle:j,type:m,size:T,children:O}=e;const p=Object(c.b)();return Object(d.jsxs)(r.Q,{isOpen:1===t,size:T||"md",toggle:()=>{"global"===m?p(i(null)):i(null)},className:"modal-dialog-centered",modalClassName:"modal-primary",children:[Object(d.jsx)(r.T,{toggle:()=>{"global"===m?p(i(null)):i(null)},children:n}),Object(d.jsx)(r.R,{children:O}),Object(d.jsxs)(r.S,{className:"w-100 d-flex justify-content-center",children:[Object(d.jsx)(s.a,{onClick:a,style:{width:160},color:l||"danger",children:o}),Object(d.jsx)(s.a,{loading:u,onClick:b,style:{width:160},color:h||"success",children:j})]})]},1)}},639:function(e,t,i){"use strict";var r=i(1),s=i(493),c=i(131),d=i(7),n=i(495),a=i(483),l=i(130),o=i(139);t.a=()=>{const e=Object(l.b)(),t=Object(d.f)(),{httpService:i}=Object(s.a)(),[u,b]=Object(r.useState)({getActions:!1,getActionById:!1,createAction:!1,updateAction:!1,deleteAction:!1}),[h,j]=Object(r.useState)([]),m=Object(l.c)((e=>e.actions.slots)),T=Object(l.c)((e=>e.app.selectedTpId)),O=async()=>{let e=[];try{var t,r;b({...u,getActions:!0});const s=await i.post("",{method:"APIerSv1.GetTPActionIds",params:[{TPid:T}]});b({...u,getActions:!1}),null===s||void 0===s||null===(t=s.data)||void 0===t||null===(r=t.result)||void 0===r||r.map((t=>{e.push({ID:t})})),j(e)}catch({err:s,response:c}){b({...u,getActions:!1})}},p=Object(n.a)({initialValues:{TPid:T,ID:"",Actions:[]},validationSchema:a.a,enableReinitialize:!0,onSubmit:e=>{0===m.length?c.b.error("You must add at least one action."):v(e,m)}}),v=async(r,s)=>{const d=s.map((e=>{const{id:t,...i}=e;return i}));try{b({...u,createAction:!0});const s=await i.post("",{method:"APIerSv1.SetTPActions",params:[{TPid:T,ID:r.ID,Actions:d}]});b({...u,createAction:!1}),200===s.status&&(c.b.success("Successfully Created!"),t("/rules/actions"),e(Object(o.d)([])))}catch({err:n,response:a}){b({...u,createAction:!1})}},g=Object(n.a)({initialValues:{TPid:T,ID:"",Actions:[]},validationSchema:a.a,enableReinitialize:!0,onSubmit:e=>{0===m.length?c.b.error("You must add at least one action."):A(e,m)}}),A=async(r,s)=>{const d=s.map((e=>{const{id:t,...i}=e;return i}));try{b({...u,updateAction:!0});const s=await i.post("",{method:"APIerSv1.SetTPActions",params:[{TPid:T,ID:r.ID,Actions:d}]});b({...u,updateAction:!1}),200===s.status&&(c.b.success("Successfully Updated!"),t("/rules/actions"),e(Object(o.d)([])))}catch({err:n,response:a}){b({...u,updateAction:!1})}};return{getActions:O,getActionById:async r=>{try{var s;b({...u,getActionById:!0});const j=await i.post("",{method:"APIerSv1.GetTPActions",params:[{TPid:T,ID:r}]});var d,n,a,l,h;if(b({...u,getActionById:!1}),"NOT_FOUND"===(null===j||void 0===j||null===(s=j.data)||void 0===s?void 0:s.error))c.b.error(null===j||void 0===j||null===(d=j.data)||void 0===d?void 0:d.error),t("/rules/actions");else g.setFieldValue("ID",null===j||void 0===j||null===(n=j.data)||void 0===n||null===(a=n.result)||void 0===a?void 0:a.ID),e(Object(o.d)(null===j||void 0===j||null===(l=j.data)||void 0===l||null===(h=l.result)||void 0===h?void 0:h.Actions))}catch({err:j,response:m}){b({...u,getActionById:!1})}},createActionController:p,updateActionController:g,deleteAction:async t=>{try{b({...u,deleteAction:!0});await i.post("",{method:"APIerSv1.RemoveTPActions",params:[{TPid:T,ID:t}]});b({...u,deleteAction:!1}),e(Object(o.b)(null)),c.b.success("Successfully Deleted."),O()}catch({err:r,response:s}){b({...u,deleteAction:!1})}},listData:h,loadings:u}}}}]);
//# sourceMappingURL=59.21a46c1a.chunk.js.map