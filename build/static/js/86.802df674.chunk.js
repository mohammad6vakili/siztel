(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[86],{1543:function(e,t,c){"use strict";c.r(t);var s=c(129),a=c(1),l=c(4),i=c.n(l),n=c(2),r=c.n(n),d=c(898),j=c(748),b=c(481),o=c(480),h=c(89),m=(c(635),c(9));t.default=()=>{const[e,t]=Object(a.useState)(null);Object(a.useEffect)((()=>{i.a.get("/blog/list/data").then((e=>t(e.data)))}),[]);const c={Quote:"light-info",Fashion:"light-primary",Gaming:"light-danger",Video:"light-warning",Food:"light-success"};return Object(m.jsxs)(a.Fragment,{children:[Object(m.jsx)(o.a,{title:"Blog List",data:[{title:"Pages"},{title:"Blog"},{title:"List"}]}),Object(m.jsxs)("div",{className:"blog-wrapper",children:[Object(m.jsx)("div",{className:"content-detached content-left",children:Object(m.jsx)("div",{className:"content-body",children:null!==e?Object(m.jsxs)("div",{className:"blog-list-wrapper",children:[Object(m.jsx)(h.ib,{children:e.map((e=>Object(m.jsx)(h.B,{md:"6",children:Object(m.jsxs)(h.l,{children:[Object(m.jsx)(s.b,{to:"/pages/blog/detail/".concat(e.id),children:Object(m.jsx)(h.q,{className:"img-fluid",src:e.img,alt:e.title,top:!0})}),Object(m.jsxs)(h.m,{children:[Object(m.jsx)(h.v,{tag:"h4",children:Object(m.jsx)(s.b,{className:"blog-title-truncate text-body-heading",to:"/pages/blog/detail/".concat(e.id),children:e.title})}),Object(m.jsxs)("div",{className:"d-flex",children:[Object(m.jsx)(b.a,{className:"me-50",img:e.avatar,imgHeight:"24",imgWidth:"24"}),Object(m.jsxs)("div",{children:[Object(m.jsx)("small",{className:"text-muted me-25",children:"by"}),Object(m.jsx)("small",{children:Object(m.jsx)("a",{className:"text-body",href:"/",onClick:e=>e.preventDefault(),children:e.userFullName})}),Object(m.jsx)("span",{className:"text-muted ms-50 me-25",children:"|"}),Object(m.jsx)("small",{className:"text-muted",children:e.blogPosted})]})]}),Object(m.jsx)("div",{className:"my-1 py-25",children:e.tags.map(((t,s)=>Object(m.jsx)("a",{href:"/",onClick:e=>e.preventDefault(),children:Object(m.jsx)(h.f,{className:r()({"me-50":s!==e.tags.length-1}),color:c[t],pill:!0,children:t})},s)))}),Object(m.jsx)(h.u,{className:"blog-content-truncate",children:e.excerpt}),Object(m.jsx)("hr",{}),Object(m.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(m.jsxs)(s.b,{to:"/pages/blog/detail/".concat(e.id),children:[Object(m.jsx)(d.a,{size:15,className:"text-body me-50"}),Object(m.jsxs)("span",{className:"text-body fw-bold",children:[e.comment," Comments"]})]}),Object(m.jsx)(s.b,{className:"fw-bold",to:"/pages/blog/detail/".concat(e.id),children:"Read More"})]})]})]})},e.title)))}),Object(m.jsx)(h.ib,{children:Object(m.jsx)(h.B,{sm:"12",children:Object(m.jsxs)(h.bb,{className:"d-flex justify-content-center mt-2",children:[Object(m.jsx)(h.cb,{className:"prev-item",children:Object(m.jsx)(h.db,{href:"#",onClick:e=>e.preventDefault()})}),Object(m.jsx)(h.cb,{children:Object(m.jsx)(h.db,{href:"#",onClick:e=>e.preventDefault(),children:"1"})}),Object(m.jsx)(h.cb,{children:Object(m.jsx)(h.db,{href:"#",onClick:e=>e.preventDefault(),children:"2"})}),Object(m.jsx)(h.cb,{children:Object(m.jsx)(h.db,{href:"#",onClick:e=>e.preventDefault(),children:"3"})}),Object(m.jsx)(h.cb,{active:!0,children:Object(m.jsx)(h.db,{href:"#",onClick:e=>e.preventDefault(),children:"4"})}),Object(m.jsx)(h.cb,{children:Object(m.jsx)(h.db,{href:"#",onClick:e=>e.preventDefault(),children:"5"})}),Object(m.jsx)(h.cb,{children:Object(m.jsx)(h.db,{href:"#",onClick:e=>e.preventDefault(),children:"6"})}),Object(m.jsx)(h.cb,{children:Object(m.jsx)(h.db,{href:"#",onClick:e=>e.preventDefault(),children:"7"})}),Object(m.jsx)(h.cb,{className:"next-item",children:Object(m.jsx)(h.db,{href:"#",onClick:e=>e.preventDefault()})})]})})})]}):null})}),Object(m.jsx)(j.a,{})]})]})}},480:function(e,t,c){"use strict";var s=c(1),a=c(129),l=c(2),i=c.n(l),n=c(89),r=c(9);t.a=e=>{const{data:t,title:c}=e;return Object(r.jsx)("div",{className:"content-header row",children:Object(r.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2 w-100",children:Object(r.jsx)("div",{className:"row breadcrumbs-top",children:Object(r.jsxs)("div",{className:"col-12",children:[c?Object(r.jsx)("h2",{className:"content-header-title float-start mb-0",children:c}):"",Object(r.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(r.jsxs)(n.g,{children:[Object(r.jsx)(n.h,{tag:"li",children:Object(r.jsx)(a.b,{to:"/",children:"Dashboard"})}),t.map(((e,c)=>{const l=e.link?a.b:s.Fragment,d=t.length-1===c;return Object(r.jsx)(n.h,{tag:"li",active:!d,className:i()({"text-primary":!d}),children:Object(r.jsx)(l,{...e.link?{to:e.link}:{},children:e.title})},c)}))]})})]})})})})}},481:function(e,t,c){"use strict";var s=c(1),a=c(2),l=c.n(a),i=c(89),n=c(9);const r=Object(s.forwardRef)(((e,t)=>{const{img:c,size:s,icon:a,color:r,status:d,badgeUp:j,content:b,tag:o,initials:h,imgWidth:m,className:x,badgeText:O,imgHeight:g,badgeColor:u,imgClassName:p,contentStyles:v,...f}=e;return Object(n.jsxs)(o,{className:l()("avatar",{[x]:x,["bg-".concat(r)]:r,["avatar-".concat(s)]:s}),ref:t,...f,children:[!1===c||void 0===c?Object(n.jsxs)("span",{className:l()("avatar-content",{"position-relative":j}),style:v,children:[h?(e=>{const t=[];return e.split(" ").forEach((e=>{t.push(e[0])})),t.join("")})(b):b,a||null,j?Object(n.jsx)(i.f,{color:u||"primary",className:"badge-sm badge-up",pill:!0,children:O||"0"}):null]}):Object(n.jsx)("img",{className:l()({[p]:p}),src:c,alt:"avatarImg",height:g&&!s?g:32,width:m&&!s?m:32}),d?Object(n.jsx)("span",{className:l()({["avatar-status-".concat(d)]:d,["avatar-status-".concat(s)]:s})}):null]})}));t.a=r,r.defaultProps={tag:"div"}},635:function(e,t,c){},748:function(e,t,c){"use strict";var s=c(129),a=c(1),l=c(4),i=c.n(l),n=c(2),r=c.n(n),d=c(479),j=c(918),b=c(481),o=c(89),h=c(9);t.a=()=>{const[e,t]=Object(a.useState)(null);Object(a.useEffect)((()=>{i.a.get("/blog/list/data/sidebar").then((e=>t(e.data)))}),[]);const c={Quote:"light-info",Fashion:"light-primary",Gaming:"light-danger",Video:"light-warning",Food:"light-success"};return Object(h.jsx)("div",{className:"sidebar-detached sidebar-right",children:Object(h.jsx)("div",{className:"sidebar",children:Object(h.jsx)("div",{className:"blog-sidebar right-sidebar my-2 my-lg-0",children:Object(h.jsxs)("div",{className:"right-sidebar-content",children:[Object(h.jsx)("div",{className:"blog-search",children:Object(h.jsxs)(o.L,{className:"input-group-merge",children:[Object(h.jsx)(o.K,{placeholder:"Search here"}),Object(h.jsx)(o.M,{children:Object(h.jsx)(j.a,{size:14})})]})}),null!==e?Object(h.jsxs)(a.Fragment,{children:[Object(h.jsxs)("div",{className:"blog-recent-posts mt-3",children:[Object(h.jsx)("h6",{className:"section-label",children:"Recent Posts"}),Object(h.jsx)("div",{className:"mt-75",children:e.recentPosts.map(((t,c)=>Object(h.jsxs)("div",{className:r()("d-flex",{"mb-2":c!==e.recentPosts.length-1}),children:[Object(h.jsx)(s.b,{className:"me-2",to:"/pages/blog/detail/".concat(t.id),children:Object(h.jsx)("img",{className:"rounded",src:t.img,alt:t.title,width:"100",height:"70"})}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h6",{className:"blog-recent-post-title",children:Object(h.jsx)(s.b,{className:"text-body-heading",to:"/pages/blog/detail/".concat(t.id),children:t.title})}),Object(h.jsx)("div",{className:"text-muted mb-0",children:t.createdTime})]})]},c)))})]}),Object(h.jsxs)("div",{className:"blog-categories mt-3",children:[Object(h.jsx)("h6",{className:"section-label",children:"Categories"}),Object(h.jsx)("div",{className:"mt-1",children:e.categories.map(((t,s)=>{const a=d[t.icon];return Object(h.jsxs)("div",{className:r()("d-flex justify-content-start align-items-center",{"mb-75":s!==e.categories.length-1}),children:[Object(h.jsx)("a",{className:"me-75",href:"/",onClick:e=>e.preventDefault(),children:Object(h.jsx)(b.a,{className:"rounded",color:c[t.category],icon:Object(h.jsx)(a,{size:15})})}),Object(h.jsx)("a",{href:"/",onClick:e=>e.preventDefault(),children:Object(h.jsx)("div",{className:"blog-category-title text-body",children:t.category})})]},s)}))})]})]}):null]})})})})}}}]);
//# sourceMappingURL=86.802df674.chunk.js.map