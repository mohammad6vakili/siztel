(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[100],{1549:function(e,t,s){"use strict";s.r(t);var c=s(7),a=s(129),l=s(1),n=s(4),r=s.n(n),i=s(479),d=s(2),o=s.n(d),j=s(480),b=s(749),h=s(89),m=(s(750),s(9));t.default=()=>{const[e,t]=Object(l.useState)(null),[s,n]=Object(l.useState)([]),[d,u]=Object(l.useState)("");Object(l.useEffect)((()=>{r.a.get("/faq/data/category").then((e=>t(e.data)))}),[]);const x=Object(c.g)(),O=e=>{let{item:t}=e;const s=i[t.icon];return Object(m.jsx)(h.B,{className:"kb-search-content",md:"4",sm:"6",children:Object(m.jsx)(h.l,{children:Object(m.jsxs)(h.m,{children:[Object(m.jsxs)("h6",{className:"kb-title",children:[Object(m.jsx)(s,{size:20,className:o()("me-50",{[t.iconColor]:t.iconColor})}),Object(m.jsxs)("span",{children:[t.title," ","(".concat(t.questions.length,")")]})]}),Object(m.jsx)(h.O,{className:"list-group-circle mt-2",children:t.questions.map((e=>Object(m.jsx)(h.P,{tag:a.b,to:"/pages/knowledge-base/".concat(x.category,"/").concat(e.slug),className:"text-body",children:e.question},e.id)))})]})})})};return Object(m.jsxs)(l.Fragment,{children:[Object(m.jsx)(j.a,{title:"Knowledge Base",data:[{title:"Pages"},{title:"Knowledge Base"},{title:"Category"}]}),Object(m.jsx)(b.a,{searchTerm:d,setSearchTerm:u,handleFilter:t=>{const s=t.target.value,c=t.target.value.toLowerCase();u(t.target.value);let a=[];s.length&&(a=e.filter((e=>e.title.toLowerCase().includes(c)||e.questions.filter((e=>e.question.toLowerCase().includes(c))).length))),n([...a])}}),null!==e?Object(m.jsx)("div",{id:"knowledge-base-category",children:Object(m.jsx)(h.ib,{className:"kb-search-content-info match-height",children:(d.length?s:e).map((e=>Object(m.jsx)(O,{item:e},e.id)))})}):null]})}},480:function(e,t,s){"use strict";var c=s(1),a=s(129),l=s(2),n=s.n(l),r=s(89),i=s(9);t.a=e=>{const{data:t,title:s}=e;return Object(i.jsx)("div",{className:"content-header row",children:Object(i.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2 w-100",children:Object(i.jsx)("div",{className:"row breadcrumbs-top",children:Object(i.jsxs)("div",{className:"col-12",children:[s?Object(i.jsx)("h2",{className:"content-header-title float-start mb-0",children:s}):"",Object(i.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(i.jsxs)(r.g,{children:[Object(i.jsx)(r.h,{tag:"li",children:Object(i.jsx)(a.b,{to:"/",children:"Dashboard"})}),t.map(((e,s)=>{const l=e.link?a.b:c.Fragment,d=t.length-1===s;return Object(i.jsx)(r.h,{tag:"li",active:!d,className:n()({"text-primary":!d}),children:Object(i.jsx)(l,{...e.link?{to:e.link}:{},children:e.title})},s)}))]})})]})})})})}},631:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/banner.06ea9907.png"},749:function(e,t,s){"use strict";var c=s(918),a=s(89),l=s(9);t.a=e=>{let{searchTerm:t,setSearchTerm:n,handleFilter:r}=e;return Object(l.jsx)("div",{id:"knowledge-base-search",children:Object(l.jsx)(a.l,{className:"knowledge-base-bg",style:{backgroundImage:"url(".concat(s(631).default,")")},children:Object(l.jsxs)(a.m,{className:"text-center",children:[Object(l.jsx)("h2",{className:"text-primary",children:"Dedicated Source Used on Website"}),Object(l.jsxs)(a.u,{className:"mb-2",children:["Popular searches: ",Object(l.jsx)("span",{className:"fw-bolder",children:"Sales automation, Email marketing"})]}),Object(l.jsx)(a.H,{className:"kb-search-input",onSubmit:e=>e.preventDefault(),children:Object(l.jsxs)(a.L,{className:"input-group-merge",children:[Object(l.jsx)(a.M,{children:Object(l.jsx)(c.a,{size:14})}),Object(l.jsx)(a.K,{value:t,onChange:e=>(e=>{r?r(e):n(e.target.value)})(e),placeholder:"Ask a question..."})]})})]})})})}},750:function(e,t,s){}}]);
//# sourceMappingURL=100.8e0cae58.chunk.js.map