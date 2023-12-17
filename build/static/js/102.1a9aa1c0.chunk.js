(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[102],{1716:function(e,c,s){"use strict";s.r(c);var t=s(1),a=s(481),r=s(2),n=s.n(r),l=s(578),d=s(841),i=s(798),o=s(918),j=s(89),b=s(9);var h=e=>{const{title:c,actions:s,children:a,collapseIcon:r,reloadIcon:h,removeIcon:x,endReload:O}=e,[m,u]=Object(t.useState)(!1),[p,v]=Object(t.useState)(!0),[g,N]=Object(t.useState)(!0),f={collapse:r||d.a,remove:x||i.a,reload:h||o.a},C=e=>{switch(e){case"collapse":return v(!p);case"remove":return N(!1);case"reload":return u(!0)}},y=()=>{u(!1)};Object(t.useEffect)((()=>{m&&O(y)}));const k="collapse"===s||s.includes("collapse")?j.C:t.Fragment,w="reload"===s||s.includes("reload")?l.a:t.Fragment;return Object(b.jsx)(w,{..."reload"===s||s.includes("reload")?{blocking:m}:{},children:Object(b.jsxs)(j.l,{className:n()("card-action",{"d-none":!g}),children:[Object(b.jsxs)(j.p,{children:[Object(b.jsx)(j.v,{tag:"h4",children:c}),Object(b.jsx)("div",{className:"action-icons",children:(()=>{if(Array.isArray(s))return s.map(((e,c)=>{const t=f[e];return Object(b.jsx)(t,{className:n()("cursor-pointer",{"me-50":c<s.length-1}),size:15,onClick:()=>C(e)},c)}));{const e=f[s];return Object(b.jsx)(e,{className:"cursor-pointer",size:15,onClick:()=>C(s)})}})()})]}),Object(b.jsx)(k,{..."collapse"===s||s.includes("collapse")?{isOpen:p}:{},children:a})]})})};c.default=()=>Object(b.jsxs)(t.Fragment,{children:[Object(b.jsx)(a.a,{title:"Card Actions",data:[{title:"Cards"},{title:"Card Actions"}]}),Object(b.jsx)(j.ib,{children:Object(b.jsx)(j.B,{sm:"12",children:Object(b.jsx)(h,{title:"Card Actions",actions:["collapse","reload","remove"],endReload:e=>{setTimeout((()=>e()),2e3)},children:Object(b.jsx)(j.m,{className:"pt-0",children:Object(b.jsxs)(j.mb,{responsive:!0,bordered:!0,children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Action"}),Object(b.jsx)("th",{children:"Icon"}),Object(b.jsx)("th",{children:"Details"})]})}),Object(b.jsxs)("tbody",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Collapse"}),Object(b.jsx)("td",{className:"text-center",children:Object(b.jsx)(d.a,{className:"collapse-icon",size:15})}),Object(b.jsx)("td",{children:" Collapse card content using collapse action."})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Refresh Content"}),Object(b.jsx)("td",{className:"text-center",children:Object(b.jsx)(o.a,{size:15})}),Object(b.jsx)("td",{children:"Refresh your card content using refresh action."})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Remove Card"}),Object(b.jsx)("td",{className:"text-center",children:Object(b.jsx)(i.a,{size:15})}),Object(b.jsx)("td",{children:" Remove card from page using remove card action"})]})]})]})})})})}),Object(b.jsxs)(j.ib,{children:[Object(b.jsx)(j.B,{md:"6",sm:"12",children:Object(b.jsx)(h,{title:"Collapse",actions:"collapse",children:Object(b.jsxs)(j.m,{className:"pt-0",children:[Object(b.jsxs)(j.u,{children:["You can create a collapsible content by using our ",Object(b.jsx)("code",{children:"CardAction"})," component and by passing prop"," ",Object(b.jsx)("code",{children:"actions='collapse'"}),"."]}),Object(b.jsxs)(j.u,{className:"mb-0",children:["Click on ",Object(b.jsx)(d.a,{size:15})," to see card collapse in action"]})]})})}),Object(b.jsx)(j.B,{md:"6",sm:"12",children:Object(b.jsx)(h,{title:"Reload",actions:"reload",endReload:e=>{setTimeout((()=>e()),2e3)},children:Object(b.jsxs)(j.m,{className:"pt-0",children:[Object(b.jsxs)(j.u,{children:["To create a re-loadable card pass prop ",Object(b.jsx)("code",{children:"actions='reload'"})," and pass prop"," ",Object(b.jsx)("code",{children:"endReload"})," to end the loading."]}),Object(b.jsxs)(j.u,{className:"mb-0",children:["Click on ",Object(b.jsx)(o.a,{size:15})," to see card refresh in action"]})]})})}),Object(b.jsx)(j.B,{md:"6",sm:"12",children:Object(b.jsx)(h,{title:"Remove",actions:"remove",children:Object(b.jsxs)(j.m,{className:"pt-0",children:[Object(b.jsxs)(j.u,{children:["You can add refresh content action to card by adding class ",Object(b.jsx)("code",{children:".card-reload"})," with your card tag, and add conditional spinner into card body to show when card is refreshing."]}),Object(b.jsxs)(j.u,{className:"mb-0",children:["Click on ",Object(b.jsx)(o.a,{size:15})," to see card refresh in action"]})]})})})]})]})},481:function(e,c,s){"use strict";var t=s(1),a=s(129),r=s(2),n=s.n(r),l=s(89),d=s(9);c.a=e=>{const{data:c,title:s}=e;return Object(d.jsx)("div",{className:"content-header row",children:Object(d.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2 w-100",children:Object(d.jsx)("div",{className:"row breadcrumbs-top",children:Object(d.jsxs)("div",{className:"col-12",children:[s?Object(d.jsx)("h2",{className:"content-header-title float-start mb-0",children:s}):"",Object(d.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(d.jsxs)(l.g,{children:[Object(d.jsx)(l.h,{tag:"li",children:Object(d.jsx)(a.b,{to:"/",children:"Dashboard"})}),c.map(((e,s)=>{const r=e.link?a.b:t.Fragment,i=c.length-1===s;return Object(d.jsx)(l.h,{tag:"li",active:!i,className:n()({"text-primary":!i}),children:Object(d.jsx)(r,{...e.link?{to:e.link}:{},children:e.title})},s)}))]})})]})})})})}},578:function(e,c,s){"use strict";var t=s(1),a=s(2),r=s.n(a),n=s(89),l=(s(635),s(9));const d=e=>{const{children:c,blocking:s,loader:a,className:n,tag:d,overlayColor:i}=e,o=d;return Object(l.jsxs)(o,{className:r()("ui-loader",{[n]:n,show:s}),children:[c,s?Object(l.jsxs)(t.Fragment,{children:[Object(l.jsx)("div",{className:"overlay",...s&&i?{style:{backgroundColor:i}}:{}}),Object(l.jsx)("div",{className:"loader",children:a})]}):null]})};c.a=d,d.defaultProps={tag:"div",blocking:!1,loader:Object(l.jsx)(n.jb,{color:"primary"})}},635:function(e,c,s){}}]);
//# sourceMappingURL=102.1a9aa1c0.chunk.js.map