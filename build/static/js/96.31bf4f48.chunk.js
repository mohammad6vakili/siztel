(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[96],{1574:function(e,t,c){"use strict";c.r(t);var a=c(16),s=c(135),n=c(1),r=c(5),l=c.n(r),i=c(499),d=c(781),b=c(96),j=(c(782),c(11));t.default=function(){var e=Object(n.useState)(null),t=Object(a.a)(e,2),c=t[0],r=t[1],o=Object(n.useState)(""),h=Object(a.a)(o,2),u=h[0],m=h[1];Object(n.useEffect)((function(){l.a.get("/faq/data/knowledge_base").then((function(e){return r(e.data)}))}),[]);var x=function(e){var t=e.item;return Object(j.jsx)(b.B,{className:"kb-search-content",md:"4",sm:"6",children:Object(j.jsx)(b.l,{children:Object(j.jsxs)(s.b,{to:"/pages/knowledge-base/".concat(t.category),children:[Object(j.jsx)(b.q,{src:t.img,alt:"knowledge-base-image",top:!0}),Object(j.jsxs)(b.m,{className:"text-center",children:[Object(j.jsx)("h4",{children:t.title}),Object(j.jsx)("p",{className:"text-body mt-1 mb-0",children:t.desc})]})]})})},t.id)};return Object(j.jsxs)(n.Fragment,{children:[Object(j.jsx)(i.a,{title:"Knowledge Base",data:[{title:"Pages"},{title:"Knowledge Base"}]}),Object(j.jsx)(d.a,{searchTerm:u,setSearchTerm:m}),null!==c?Object(j.jsx)("div",{id:"knowledge-base-content",children:Object(j.jsx)(b.ib,{className:"kb-search-content-info match-height",children:c.map((function(e){var t=e.title.toLowerCase().includes(u.toLowerCase()),c=e.desc.toLowerCase().includes(u.toLowerCase());return u.length<1||t||c?Object(j.jsx)(x,{item:e},e.id):null}))})}):null]})}},499:function(e,t,c){"use strict";var a=c(21),s=c(1),n=c(135),r=c(2),l=c.n(r),i=c(96),d=c(11);t.a=function(e){var t=e.data,c=e.title;return Object(d.jsx)("div",{className:"content-header row",children:Object(d.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2 w-100",children:Object(d.jsx)("div",{className:"row breadcrumbs-top",children:Object(d.jsxs)("div",{className:"col-12",children:[c?Object(d.jsx)("h2",{className:"content-header-title float-start mb-0",children:c}):"",Object(d.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(d.jsxs)(i.g,{children:[Object(d.jsx)(i.h,{tag:"li",children:Object(d.jsx)(n.b,{to:"/",children:"Dashboard"})}),t.map((function(e,c){var r=e.link?n.b:s.Fragment,b=t.length-1===c;return Object(d.jsx)(i.h,{tag:"li",active:!b,className:l()({"text-primary":!b}),children:Object(d.jsx)(r,Object(a.a)(Object(a.a)({},e.link?{to:e.link}:{}),{},{children:e.title}))},c)}))]})})]})})})})}},662:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/banner.06ea9907.png"},781:function(e,t,c){"use strict";var a=c(948),s=c(96),n=c(11);t.a=function(e){var t=e.searchTerm,r=e.setSearchTerm,l=e.handleFilter;return Object(n.jsx)("div",{id:"knowledge-base-search",children:Object(n.jsx)(s.l,{className:"knowledge-base-bg",style:{backgroundImage:"url(".concat(c(662).default,")")},children:Object(n.jsxs)(s.m,{className:"text-center",children:[Object(n.jsx)("h2",{className:"text-primary",children:"Dedicated Source Used on Website"}),Object(n.jsxs)(s.u,{className:"mb-2",children:["Popular searches: ",Object(n.jsx)("span",{className:"fw-bolder",children:"Sales automation, Email marketing"})]}),Object(n.jsx)(s.H,{className:"kb-search-input",onSubmit:function(e){return e.preventDefault()},children:Object(n.jsxs)(s.L,{className:"input-group-merge",children:[Object(n.jsx)(s.M,{children:Object(n.jsx)(a.a,{size:14})}),Object(n.jsx)(s.K,{value:t,onChange:function(e){return function(e){l?l(e):r(e.target.value)}(e)},placeholder:"Ask a question..."})]})})]})})})}},782:function(e,t,c){}}]);
//# sourceMappingURL=96.31bf4f48.chunk.js.map