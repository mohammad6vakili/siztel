(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[72],{1395:function(e,s,t){},1641:function(e,s,t){"use strict";t.r(s);var c=t(1),a=t(4),l=t.n(a),i=t(575),r=t(480),n=t(89),j=t(2),d=t.n(j),m=t(481),b=t(9);var o=e=>{let{data:s}=e;return Object(b.jsx)(n.l,{children:Object(b.jsxs)(n.m,{children:[Object(b.jsx)("h5",{className:"mb-1",children:"Polls"}),Object(b.jsx)(n.u,{className:"mb-0",children:"Who is the best actor in Marvel Cinematic Universe?"}),s.map(((e,s)=>Object(b.jsxs)("div",{className:"profile-polls-info mt-2",children:[Object(b.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(b.jsxs)("div",{className:"form-check",children:[Object(b.jsx)(n.K,{type:"radio",name:"polls",id:"radio-".concat(e.name.toLowerCase())}),Object(b.jsx)(n.N,{className:"form-check-label",for:"radio-".concat(e.name.toLowerCase()),children:e.name})]}),Object(b.jsx)("div",{className:"text-end",children:e.result})]}),Object(b.jsx)(n.hb,{className:"my-50",value:e.result.replace("%"," ").trim()}),Object(b.jsx)("div",{className:d()("avatar-group",{"mt-1":s>0,"my-1":0===s}),children:e.votedUser.map((e=>Object(b.jsxs)(c.Fragment,{children:[Object(b.jsx)(m.a,{imgWidth:"26",imgHeight:"26",img:e.img,className:"pull-up",id:e.username.toLowerCase().split(" ").join("-")}),Object(b.jsx)(n.yb,{target:e.username.toLowerCase().split(" ").join("-"),placement:"top",children:e.username})]},e.username)))})]},e.name)))]})})};var x=e=>{let{data:s}=e;return Object(b.jsx)(n.l,{children:Object(b.jsxs)(n.m,{children:[Object(b.jsx)("h5",{className:"mb-75",children:"About"}),Object(b.jsx)(n.u,{children:s.about}),Object(b.jsxs)("div",{className:"mt-2",children:[Object(b.jsx)("h5",{className:"mb-75",children:"Joined:"}),Object(b.jsx)(n.u,{children:s.joined})]}),Object(b.jsxs)("div",{className:"mt-2",children:[Object(b.jsx)("h5",{className:"mb-75",children:"Lives:"}),Object(b.jsx)(n.u,{children:s.lives})]}),Object(b.jsxs)("div",{className:"mt-2",children:[Object(b.jsx)("h5",{className:"mb-75",children:"Email:"}),Object(b.jsx)(n.u,{children:s.email})]}),Object(b.jsxs)("div",{className:"mt-2",children:[Object(b.jsx)("h5",{className:"mb-75",children:"Website:"}),Object(b.jsx)(n.u,{children:s.website})]})]})})},h=t(879),O=t(898),u=t(921);var N=e=>{let{data:s}=e;return s.map((e=>Object(b.jsx)(n.l,{className:"post",children:Object(b.jsxs)(n.m,{children:[Object(b.jsxs)("div",{className:"d-flex justify-content-start align-items-center mb-1",children:[Object(b.jsx)(m.a,{className:"me-1",img:e.avatar,imgHeight:"50",imgWidth:"50"}),Object(b.jsxs)("div",{className:"profile-user-info",children:[Object(b.jsx)("h6",{className:"mb-0",children:e.username}),Object(b.jsx)("small",{className:"text-muted",children:e.postTime})]})]}),Object(b.jsx)(n.u,{children:e.postText}),e.postImg?Object(b.jsx)("img",{src:e.postImg,alt:e.username,className:"img-fluid rounded mb-75"}):e.postVid?Object(b.jsx)("iframe",{src:"https://www.youtube.com/embed/6stlCkUDG_s",className:"w-100 rounded height-250 mb-50 border-0"}):null,Object(b.jsxs)(n.ib,{className:"d-flex justify-content-start align-items-center flex-wrap pb-50 post-actions",children:[Object(b.jsxs)(n.B,{className:"d-flex justify-content-between justify-content-sm-start mb-2",sm:"6",children:[Object(b.jsxs)("div",{className:"d-flex align-items-center text-muted text-nowrap cursor-pointer",children:[Object(b.jsx)(h.a,{size:18,className:d()("me-50",{"profile-likes":!0===e.youLiked})}),Object(b.jsx)("span",{children:e.likes})]}),Object(b.jsxs)("div",{className:"d-flex align-items-center",children:[Object(b.jsx)("div",{className:"avatar-group ms-1",children:e.likedUsers.map((e=>Object(b.jsxs)(c.Fragment,{children:[Object(b.jsx)(m.a,{className:"pull-up",img:e.avatar,id:e.username.toLowerCase().split(" ").join("-"),imgHeight:"26",imgWidth:"26"}),Object(b.jsx)(n.yb,{target:e.username.toLowerCase().split(" ").join("-"),placement:"top",children:e.username})]},e.username)))}),Object(b.jsxs)("a",{href:"/",className:"text-muted text-nowrap ms-50",onClick:e=>e.preventDefault(),children:["+",e.likedCount," more"]})]})]}),Object(b.jsxs)(n.B,{className:"d-flex justify-content-between justify-content-sm-end align-items-center mb-2",sm:"6",children:[Object(b.jsxs)("a",{href:"/",className:"text-nowrap",onClick:e=>e.preventDefault(),children:[Object(b.jsx)(O.a,{size:18,className:"text-body me-50"}),Object(b.jsx)("span",{className:"text-muted me-1",children:e.comments})]}),Object(b.jsxs)("a",{href:"/",className:"text-nowrap share-post",onClick:e=>e.preventDefault(),children:[Object(b.jsx)(u.a,{size:18,className:"text-body mx-50"}),Object(b.jsx)("span",{className:"text-muted me-1",children:e.share})]})]})]}),e.detailedComments.map((e=>Object(b.jsxs)("div",{className:"d-flex align-items-start mb-1",children:[Object(b.jsx)(m.a,{img:e.avatar,className:"mt-25 me-75",imgHeight:"34",imgWidth:"34"}),Object(b.jsxs)("div",{className:"profile-user-info w-100",children:[Object(b.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[Object(b.jsx)("h6",{className:"mb-0",children:e.username}),Object(b.jsxs)("a",{href:"/",onClick:e=>e.preventDefault(),children:[Object(b.jsx)(h.a,{size:18,className:d()("text-body",{"profile-likes":!0===e.youLiked})}),Object(b.jsx)("span",{className:"align-middle ms-25 text-muted",children:e.commentsLikes})]})]}),Object(b.jsx)("small",{children:e.comment})]})]},e.username))),Object(b.jsxs)("fieldset",{className:"form-label-group mb-50",children:[Object(b.jsx)(n.N,{className:"form-check-label",for:"add-comment-".concat(e.username),children:"Add Comment"}),Object(b.jsx)(n.K,{id:"add-comment-".concat(e.username),type:"textarea",rows:"3",placeholder:"Add Comment"})]}),Object(b.jsx)(n.i,{color:"primary",size:"sm",children:"Post Comment"})]})},e.username)))},p=t(818),f=t(916),g=t(884),v=t(882),w=t(947),k=t(863);var y=e=>{let{data:s}=e;const[t,a]=Object(c.useState)(!1);return Object(b.jsxs)(n.l,{className:"profile-header mb-2",children:[Object(b.jsx)(n.q,{src:s.coverImg,alt:"User Profile Image",top:!0}),Object(b.jsx)("div",{className:"position-relative",children:Object(b.jsxs)("div",{className:"profile-img-container d-flex align-items-center",children:[Object(b.jsx)("div",{className:"profile-img",children:Object(b.jsx)("img",{className:"rounded img-fluid",src:s.avatar,alt:"Card image"})}),Object(b.jsxs)("div",{className:"profile-title ms-3",children:[Object(b.jsx)("h2",{className:"text-white",children:s.username}),Object(b.jsx)("p",{className:"text-white",children:s.designation})]})]})}),Object(b.jsx)("div",{className:"profile-header-nav",children:Object(b.jsxs)(n.X,{container:!1,className:"justify-content-end justify-content-md-between w-100",expand:"md",light:!0,children:[Object(b.jsx)(n.i,{color:"",className:"btn-icon navbar-toggler",onClick:()=>a(!t),children:Object(b.jsx)(p.a,{size:21})}),Object(b.jsx)(n.C,{isOpen:t,navbar:!0,children:Object(b.jsxs)("div",{className:"profile-tabs d-flex justify-content-between flex-wrap mt-1 mt-md-0",children:[Object(b.jsxs)(n.U,{className:"mb-0",pills:!0,children:[Object(b.jsx)(n.V,{children:Object(b.jsxs)(n.W,{className:"fw-bold",active:!0,children:[Object(b.jsx)("span",{className:"d-none d-md-block",children:"Feed"}),Object(b.jsx)(f.a,{className:"d-block d-md-none",size:14})]})}),Object(b.jsx)(n.V,{children:Object(b.jsxs)(n.W,{className:"fw-bold",children:[Object(b.jsx)("span",{className:"d-none d-md-block",children:"About"}),Object(b.jsx)(g.a,{className:"d-block d-md-none",size:14})]})}),Object(b.jsx)(n.V,{children:Object(b.jsxs)(n.W,{className:"fw-bold",children:[Object(b.jsx)("span",{className:"d-none d-md-block",children:"Photos"}),Object(b.jsx)(v.a,{className:"d-block d-md-none",size:14})]})}),Object(b.jsx)(n.V,{children:Object(b.jsxs)(n.W,{className:"fw-bold",children:[Object(b.jsx)("span",{className:"d-none d-md-block",children:"Friends"}),Object(b.jsx)(w.a,{className:"d-block d-md-none",size:14})]})})]}),Object(b.jsxs)(n.i,{color:"primary",children:[Object(b.jsx)(k.a,{className:"d-block d-md-none",size:14}),Object(b.jsx)("span",{className:"fw-bold d-none d-md-block",children:"Edit"})]})]})})]})})]})},C=t(835),z=t(931);var W=e=>{let{data:s}=e;return Object(b.jsx)(n.l,{children:Object(b.jsxs)(n.m,{children:[Object(b.jsx)("h5",{children:"Twitter Feeds"}),s.map(((e,s)=>Object(b.jsxs)("div",{className:d()("profile-twitter-feed",{"mt-1":0===s,"mt-2":0!==s}),children:[Object(b.jsxs)("div",{className:"d-flex justify-content-start align-items-center mb-1",children:[Object(b.jsx)(m.a,{className:"me-1",img:e.imgUrl,imgHeight:"40",imgWidth:"40"}),Object(b.jsxs)("div",{className:"profile-user-info",children:[Object(b.jsx)("h6",{className:"mb-0",children:e.title}),Object(b.jsxs)("a",{href:"/",onClick:e=>e.preventDefault(),children:[Object(b.jsxs)("small",{className:"text-muted",children:["@",e.id]}),Object(b.jsx)(C.a,{size:14})]})]}),Object(b.jsx)("div",{className:"profile-star ms-auto",children:Object(b.jsx)(z.a,{size:18,className:d()("cursor-pointer",{"profile-favorite":!0===e.favorite})})})]}),Object(b.jsx)(n.u,{className:"mb-50",children:e.desc}),Object(b.jsx)("a",{href:"/",onClick:e=>e.preventDefault(),children:Object(b.jsx)("small",{children:e.tags})})]},s)))]})})};var L=e=>{let{data:s}=e;return Object(b.jsx)(n.l,{children:Object(b.jsxs)(n.m,{children:[Object(b.jsx)("h5",{className:"mb-0",children:"Latest Photos"}),Object(b.jsx)(n.ib,{children:s.map(((e,s)=>Object(b.jsx)(n.B,{md:"4",xs:"6",className:"profile-latest-img",children:Object(b.jsx)("a",{href:"/",onClick:e=>e.preventDefault(),children:Object(b.jsx)("img",{className:"img-fluid rounded",src:e.img,alt:"latest-photo"})})},s)))})]})})};var P=e=>{let{data:s}=e;return Object(b.jsx)(n.l,{children:Object(b.jsxs)(n.m,{className:"profile-suggestion",children:[Object(b.jsx)("h5",{className:"mb-2",children:"Suggested Pages"}),s.map(((e,t)=>Object(b.jsxs)("div",{className:d()("d-flex justify-content-start align-items-center",{"mb-1":t!==s.length-1}),children:[Object(b.jsx)(m.a,{className:"me-1",img:e.avatar,imgHeight:40,imgWidth:40}),Object(b.jsxs)("div",{className:"profile-user-info",children:[Object(b.jsx)("h6",{className:"mb-0",children:e.username}),Object(b.jsx)("small",{className:"text-muted",children:e.subtitle})]}),Object(b.jsx)("div",{className:"profile-star ms-auto",children:Object(b.jsx)(z.a,{size:18,className:d()("cursor-pointer",{"profile-favorite":!0===e.favorite})})})]},t)))]})})},F=t(944);var D=e=>{let{data:s}=e;return Object(b.jsx)(n.l,{children:Object(b.jsxs)(n.m,{children:[Object(b.jsx)("h5",{children:"Suggestions"}),s.map(((e,s)=>Object(b.jsxs)("div",{className:d()("d-flex justify-content-start align-items-center",{"mt-2":0===s,"mt-1":0!==s}),children:[Object(b.jsx)(m.a,{className:"me-75",img:e.avatar,imgHeight:"40",imgWidth:"40"}),Object(b.jsxs)("div",{className:"profile-user-info",children:[Object(b.jsx)("h6",{className:"mb-0",children:e.name}),Object(b.jsx)("small",{className:"text-muted",children:e.mutualFriend})]}),Object(b.jsx)("div",{className:"ms-auto",children:Object(b.jsx)(n.i,{className:"btn-icon",color:"primary",size:"sm",children:Object(b.jsx)(F.a,{size:14})})})]},s)))]})})};t(1395);s.default=()=>{const[e,s]=Object(c.useState)(null),[t,a]=Object(c.useState)(!1);return Object(c.useEffect)((()=>{l.a.get("/profile/data").then((e=>s(e.data)))}),[]),Object(b.jsxs)(c.Fragment,{children:[Object(b.jsx)(r.a,{title:"Profile",data:[{title:"Profile"}]}),null!==e?Object(b.jsxs)("div",{id:"user-profile",children:[Object(b.jsx)(n.ib,{children:Object(b.jsx)(n.B,{sm:"12",children:Object(b.jsx)(y,{data:e.header})})}),Object(b.jsxs)("section",{id:"profile-info",children:[Object(b.jsxs)(n.ib,{children:[Object(b.jsxs)(n.B,{lg:{size:3,order:1},sm:{size:12},xs:{order:2},children:[Object(b.jsx)(x,{data:e.userAbout}),Object(b.jsx)(P,{data:e.suggestedPages}),Object(b.jsx)(W,{data:e.twitterFeeds})]}),Object(b.jsx)(n.B,{lg:{size:6,order:2},sm:{size:12},xs:{order:1},children:Object(b.jsx)(N,{data:e.post})}),Object(b.jsxs)(n.B,{lg:{size:3,order:3},sm:{size:12},xs:{order:3},children:[Object(b.jsx)(L,{data:e.latestPhotos}),Object(b.jsx)(D,{data:e.suggestions}),Object(b.jsx)(o,{data:e.polls})]})]}),Object(b.jsx)(n.ib,{children:Object(b.jsx)(n.B,{className:"text-center",sm:"12",children:Object(b.jsx)(n.i,{color:"primary",className:"border-0 mb-1 profile-load-more",size:"sm",onClick:()=>{a(!0),setTimeout((()=>{a(!1)}),2e3)},children:Object(b.jsx)(i.a,{blocking:t,overlayColor:"rgba(255,255,255, .5)",children:Object(b.jsx)("span",{children:" Load More"})})})})})]})]}):null]})}},480:function(e,s,t){"use strict";var c=t(1),a=t(129),l=t(2),i=t.n(l),r=t(89),n=t(9);s.a=e=>{const{data:s,title:t}=e;return Object(n.jsx)("div",{className:"content-header row",children:Object(n.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2 w-100",children:Object(n.jsx)("div",{className:"row breadcrumbs-top",children:Object(n.jsxs)("div",{className:"col-12",children:[t?Object(n.jsx)("h2",{className:"content-header-title float-start mb-0",children:t}):"",Object(n.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(n.jsxs)(r.g,{children:[Object(n.jsx)(r.h,{tag:"li",children:Object(n.jsx)(a.b,{to:"/",children:"Dashboard"})}),s.map(((e,t)=>{const l=e.link?a.b:c.Fragment,j=s.length-1===t;return Object(n.jsx)(r.h,{tag:"li",active:!j,className:i()({"text-primary":!j}),children:Object(n.jsx)(l,{...e.link?{to:e.link}:{},children:e.title})},t)}))]})})]})})})})}},481:function(e,s,t){"use strict";var c=t(1),a=t(2),l=t.n(a),i=t(89),r=t(9);const n=Object(c.forwardRef)(((e,s)=>{const{img:t,size:c,icon:a,color:n,status:j,badgeUp:d,content:m,tag:b,initials:o,imgWidth:x,className:h,badgeText:O,imgHeight:u,badgeColor:N,imgClassName:p,contentStyles:f,...g}=e;return Object(r.jsxs)(b,{className:l()("avatar",{[h]:h,["bg-".concat(n)]:n,["avatar-".concat(c)]:c}),ref:s,...g,children:[!1===t||void 0===t?Object(r.jsxs)("span",{className:l()("avatar-content",{"position-relative":d}),style:f,children:[o?(e=>{const s=[];return e.split(" ").forEach((e=>{s.push(e[0])})),s.join("")})(m):m,a||null,d?Object(r.jsx)(i.f,{color:N||"primary",className:"badge-sm badge-up",pill:!0,children:O||"0"}):null]}):Object(r.jsx)("img",{className:l()({[p]:p}),src:t,alt:"avatarImg",height:u&&!c?u:32,width:x&&!c?x:32}),j?Object(r.jsx)("span",{className:l()({["avatar-status-".concat(j)]:j,["avatar-status-".concat(c)]:c})}):null]})}));s.a=n,n.defaultProps={tag:"div"}},575:function(e,s,t){"use strict";var c=t(1),a=t(2),l=t.n(a),i=t(89),r=(t(632),t(9));const n=e=>{const{children:s,blocking:t,loader:a,className:i,tag:n,overlayColor:j}=e,d=n;return Object(r.jsxs)(d,{className:l()("ui-loader",{[i]:i,show:t}),children:[s,t?Object(r.jsxs)(c.Fragment,{children:[Object(r.jsx)("div",{className:"overlay",...t&&j?{style:{backgroundColor:j}}:{}}),Object(r.jsx)("div",{className:"loader",children:a})]}):null]})};s.a=n,n.defaultProps={tag:"div",blocking:!1,loader:Object(r.jsx)(i.jb,{color:"primary"})}},632:function(e,s,t){}}]);
//# sourceMappingURL=72.b03ac708.chunk.js.map