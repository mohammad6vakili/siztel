(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[88],{1286:function(e,s,a){},1661:function(e,s,a){"use strict";a.r(s);var l=a(7),t=a(1),c=a(2),i=a.n(c),n=a(931),r=a(905),j=a(481),d=a(491),m=a(89),b=a(9);var o=e=>{const{mail:s,dispatch:a,selectMail:l,labelColors:t,updateMails:c,selectedMails:o,handleMailClick:h,handleMailReadUpdate:x,formatDateToMonthShort:O}=e;return Object(b.jsxs)("li",{onClick:()=>(s.id,h(s.id),void x([s.id],!0)),className:i()("d-flex user-mail",{"mail-read":s.isRead}),children:[Object(b.jsxs)("div",{className:"mail-left pe-50",children:[Object(b.jsx)(j.a,{img:s.from.avatar}),Object(b.jsxs)("div",{className:"user-action",children:[Object(b.jsxs)("div",{className:"form-check",children:[Object(b.jsx)(m.K,{type:"checkbox",id:"".concat(s.from.name,"-").concat(s.id),onChange:e=>e.stopPropagation(),checked:o.includes(s.id),onClick:e=>{a(l(s.id)),e.stopPropagation()}}),Object(b.jsx)(m.N,{onClick:e=>e.stopPropagation(),for:"".concat(s.from.name,"-").concat(s.id)})]}),Object(b.jsx)("div",{className:"email-favorite",onClick:e=>{e.stopPropagation(),a(c({emailIds:[s.id],dataToUpdate:{isStarred:!s.isStarred}}))},children:Object(b.jsx)(n.a,{size:14,className:i()({favorite:s.isStarred})})})]})]}),Object(b.jsxs)("div",{className:"mail-body",children:[Object(b.jsxs)("div",{className:"mail-details",children:[Object(b.jsxs)("div",{className:"mail-items",children:[Object(b.jsx)("h5",{className:"mb-25",children:s.from.name}),Object(b.jsx)("span",{className:"text-truncate",children:s.subject})]}),Object(b.jsxs)("div",{className:"mail-meta-item",children:[s.attachments&&s.attachments.length?Object(b.jsx)(r.a,{size:14}):null,(e=>{if(e&&e.length)return e.map((e=>Object(b.jsx)("span",{className:"bullet bullet-".concat(t[e]," bullet-sm mx-50")},e)))})(s.labels),Object(b.jsx)("span",{className:"mail-date",children:O(s.time)})]})]}),Object(b.jsx)("div",{className:"mail-message",children:Object(b.jsx)("p",{className:"text-truncate mb-0",children:Object(d.e)(s.message)})})]})]})},h=a(903),x=a(852),O=a(853),p=a(936),N=a(839),g=a(872),u=a(862),f=a(884),v=a(937),C=a(933),k=a(894),M=a(840),y=a(513),w=a.n(y);var z=e=>{const{mail:s,openMail:a,dispatch:l,labelColors:c,setOpenMail:o,updateMails:y,paginateMail:z,handleMailToTrash:S,handleFolderUpdate:P,handleLabelsUpdate:E,handleMailReadUpdate:D,formatDateToMonthShort:T}=e,[F,I]=Object(t.useState)(!1),U=e=>{return Object(b.jsxs)(m.l,{children:[Object(b.jsxs)(m.p,{className:"email-detail-head",children:[Object(b.jsxs)("div",{className:"user-details d-flex justify-content-between align-items-center flex-wrap",children:[Object(b.jsx)(j.a,{img:e.from.avatar,className:"me-75",imgHeight:"48",imgWidth:"48"}),Object(b.jsxs)("div",{className:"mail-items",children:[Object(b.jsx)("h5",{className:"mb-0",children:e.from.name}),Object(b.jsxs)(m.wb,{className:"email-info-dropup",children:[Object(b.jsx)(m.G,{className:"font-small-3 text-muted cursor-pointer",tag:"span",caret:!0,children:Object(b.jsx)("span",{className:"me-25",children:e.from.email})}),Object(b.jsx)(m.F,{children:Object(b.jsx)(m.mb,{className:"font-small-3",size:"sm",borderless:!0,children:Object(b.jsxs)("tbody",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{className:"text-end text-muted align-top",children:"From:"}),Object(b.jsx)("td",{children:e.from.email})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{className:"text-end text-muted align-top",children:"To:"}),Object(b.jsx)("td",{children:e.to[0].email})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{className:"text-end text-muted align-top",children:"Date:"}),Object(b.jsxs)("td",{children:[T(e.time),", ",T(e.time,!1)]})]})]})})})]})]})]}),Object(b.jsxs)("div",{className:"mail-meta-item d-flex align-items-center",children:[Object(b.jsx)("small",{className:"mail-date-time text-muted",children:Object(d.a)(e.time)}),Object(b.jsxs)(m.wb,{className:"ms-50",children:[Object(b.jsx)(m.G,{className:"cursor-pointer",tag:"span",children:Object(b.jsx)(h.a,{size:14})}),Object(b.jsxs)(m.F,{end:!0,children:[Object(b.jsxs)(m.E,{className:"d-flex align-items-center w-100",children:[Object(b.jsx)(x.a,{className:"me-50",size:14}),"Reply"]}),Object(b.jsxs)(m.E,{className:"d-flex align-items-center w-100",children:[Object(b.jsx)(O.a,{className:"me-50",size:14}),"Forward"]}),Object(b.jsxs)(m.E,{className:"d-flex align-items-center w-100",children:[Object(b.jsx)(p.a,{className:"me-50",size:14}),"Delete"]})]})]})]})]}),Object(b.jsx)(m.m,{className:"mail-message-wrapper pt-2",children:Object(b.jsx)("div",{className:"mail-message",dangerouslySetInnerHTML:{__html:e.message}})}),e.attachments&&e.attachments.length?Object(b.jsx)(m.n,{children:Object(b.jsxs)("div",{className:"mail-attachments",children:[Object(b.jsxs)("div",{className:"d-flex align-items-center mb-1",children:[Object(b.jsx)(r.a,{size:16}),Object(b.jsxs)("h5",{className:"fw-bolder text-body mb-0 ms-50",children:[e.attachments.length," Attachment"]})]}),Object(b.jsx)("div",{className:"d-flex flex-column",children:(s=e.attachments,s.map(((e,a)=>Object(b.jsxs)("a",{href:"/",onClick:e=>e.preventDefault(),className:i()({"mb-50":a+1!==s.length}),children:[Object(b.jsx)("img",{src:e.thumbnail,alt:e.fileName,width:"16",className:"me-50"}),Object(b.jsx)("span",{className:"text-muted fw-bolder align-text-top",children:e.fileName}),Object(b.jsx)("span",{className:"text-muted font-small-2 ms-25",children:"(".concat(e.size,")")})]},e.fileName))))})]})}):null]});var s},R=()=>{o(!1)},G=(e,s,a)=>{P(e,s,[a]),R()};return Object(b.jsx)("div",{className:i()("email-app-details",{show:a}),children:null!==s&&void 0!==s?Object(b.jsxs)(t.Fragment,{children:[Object(b.jsxs)("div",{className:"email-detail-header",children:[Object(b.jsxs)("div",{className:"email-header-left d-flex align-items-center",children:[Object(b.jsx)("span",{className:"go-back me-1",onClick:R,children:Object(b.jsx)(N.a,{size:20})}),Object(b.jsx)("h4",{className:"email-subject mb-0",children:s.subject})]}),Object(b.jsx)("div",{className:"email-header-right ms-2 ps-1",children:Object(b.jsxs)("ul",{className:"list-inline m-0",children:[Object(b.jsx)("li",{className:"list-inline-item me-1",children:Object(b.jsx)("span",{className:"action-icon favorite",onClick:()=>{l(y({emailIds:[s.id],dataToUpdate:{isStarred:!s.isStarred}}))},children:Object(b.jsx)(n.a,{size:18,className:i()({"text-warning fill-current":s.isStarred})})})}),Object(b.jsx)("li",{className:"list-inline-item me-1",children:Object(b.jsxs)(m.wb,{children:[Object(b.jsx)(m.G,{tag:"span",children:Object(b.jsx)(g.a,{size:18})}),Object(b.jsxs)(m.F,{end:!0,children:[Object(b.jsxs)(m.E,{tag:"a",href:"/",onClick:e=>G(e,"draft",s.id),className:"d-flex align-items-center",children:[Object(b.jsx)(u.a,{className:"me-50",size:18}),Object(b.jsx)("span",{children:"Draft"})]}),Object(b.jsxs)(m.E,{tag:"a",href:"/",onClick:e=>G(e,"spam",s.id),className:"d-flex align-items-center",children:[Object(b.jsx)(f.a,{className:"me-50",size:18}),Object(b.jsx)("span",{children:"Spam"})]}),Object(b.jsxs)(m.E,{tag:"a",href:"/",onClick:e=>G(e,"trash",s.id),className:"d-flex align-items-center",children:[Object(b.jsx)(v.a,{className:"me-50",size:18}),Object(b.jsx)("span",{children:"Trash"})]})]})]})}),Object(b.jsx)("li",{className:"list-inline-item me-1",children:Object(b.jsxs)(m.wb,{children:[Object(b.jsx)(m.G,{tag:"span",children:Object(b.jsx)(C.a,{size:18})}),Object(b.jsxs)(m.F,{end:!0,children:[Object(b.jsxs)(m.E,{tag:"a",href:"/",onClick:e=>E(e,"personal",[s.id]),className:"d-flex align-items-center",children:[Object(b.jsx)("span",{className:"bullet bullet-success bullet-sm me-50"}),Object(b.jsx)("span",{children:"Personal"})]}),Object(b.jsxs)(m.E,{tag:"a",href:"/",onClick:e=>E(e,"company",[s.id]),className:"d-flex align-items-center",children:[Object(b.jsx)("span",{className:"bullet bullet-primary bullet-sm me-50"}),Object(b.jsx)("span",{children:"Company"})]}),Object(b.jsxs)(m.E,{tag:"a",href:"/",onClick:e=>E(e,"important",[s.id]),className:"d-flex align-items-center",children:[Object(b.jsx)("span",{className:"bullet bullet-warning bullet-sm me-50"}),Object(b.jsx)("span",{children:"Important"})]}),Object(b.jsxs)(m.E,{tag:"a",href:"/",onClick:e=>E(e,"private",[s.id]),className:"d-flex align-items-center",children:[Object(b.jsx)("span",{className:"bullet bullet-danger bullet-sm me-50"}),Object(b.jsx)("span",{children:"Private"})]})]})]})}),Object(b.jsx)("li",{className:"list-inline-item me-1",children:Object(b.jsx)("span",{className:"action-icon",onClick:()=>{D([s.id],!1),R()},children:Object(b.jsx)(k.a,{size:18})})}),Object(b.jsx)("li",{className:"list-inline-item me-1",children:Object(b.jsx)("span",{className:"action-icon",onClick:()=>{S([s.id]),R()},children:Object(b.jsx)(v.a,{size:18})})}),Object(b.jsx)("li",{className:"list-inline-item email-prev",children:Object(b.jsx)("span",{className:i()({"action-icon":s.hasPreviousMail}),onClick:()=>s.hasPreviousMail?l(z({dir:"next",emailId:s.id})):null,children:Object(b.jsx)(N.a,{size:18,className:i()({"text-muted":!s.hasPreviousMail})})})}),Object(b.jsx)("li",{className:"list-inline-item email-next",children:Object(b.jsx)("span",{className:i()({"action-icon":s.hasNextMail}),onClick:()=>s.hasNextMail?l(z({dir:"previous",emailId:s.id})):null,children:Object(b.jsx)(M.a,{size:18,className:i()({"text-muted":!s.hasNextMail})})})})]})})]}),Object(b.jsxs)(w.a,{className:"email-scroll-area",options:{wheelPropagation:!1},children:[Object(b.jsx)(m.ib,{children:Object(b.jsx)(m.B,{sm:"12",children:Object(b.jsx)("div",{className:"email-label",children:(e=>{if(e&&e.length)return e.map((e=>Object(b.jsx)(m.f,{color:"light-".concat(c[e]),className:"me-50 text-capitalize",pill:!0,children:e},e)))})(s.labels)})})}),s.replies&&s.replies.length?Object(b.jsxs)(t.Fragment,{children:[!1===F?Object(b.jsx)(m.ib,{className:"mb-1",children:Object(b.jsx)(m.B,{sm:"12",children:Object(b.jsxs)("a",{className:"fw-bold",href:"/",onClick:e=>{e.preventDefault(),I(!0)},children:["View ",s.replies.length," Earlier Messages"]})})}):null,(e=>{if(e.length&&!0===F)return e.map(((e,s)=>Object(b.jsx)(m.ib,{children:Object(b.jsx)(m.B,{sm:"12",children:U(e)})},s)))})(s.replies)]}):null,Object(b.jsx)(m.ib,{children:Object(b.jsx)(m.B,{sm:"12",children:U(s)})}),Object(b.jsx)(m.ib,{children:Object(b.jsx)(m.B,{sm:"12",children:Object(b.jsx)(m.l,{children:Object(b.jsx)(m.m,{children:Object(b.jsxs)("h5",{className:"mb-0",children:["Click here to"," ",Object(b.jsx)("a",{href:"/",onClick:e=>e.preventDefault(),children:"Reply"})," ","or"," ",Object(b.jsx)("a",{href:"/",onClick:e=>e.preventDefault(),children:"Forward"})]})})})})})]})]}):null})},S=a(616),P=a(547),E=a(504),D=a(900),T=a(896),F=a(795),I=a(32),U=a(40),R=a(66),G=a(90),B=a(51),L=a(65);a(585),a(512);var A=e=>{const{composeOpen:s,toggleCompose:a}=e,[l,c]=Object(t.useState)(!1),[i,n]=Object(t.useState)(!1),o=[{value:"pheobe",label:"Pheobe Buffay",img:I.default},{value:"chandler",label:"Chandler Bing",img:U.default},{value:"ross",label:"Ross Geller",img:R.default},{value:"monica",label:"Monica Geller",img:G.default},{value:"joey",label:"Joey Tribbiani",img:B.default},{value:"Rachel",label:"Rachel Green",img:L.default}],x=e=>{let{data:s,...a}=e;return Object(b.jsx)(P.q.Option,{...a,children:Object(b.jsxs)("div",{className:"d-flex flex-wrap align-items-center",children:[Object(b.jsx)(j.a,{className:"my-0 me-50",size:"sm",img:s.img}),s.label]})})},O=e=>{e.preventDefault(),c(!l)},p=e=>{e.preventDefault(),n(!i)},N=e=>{e.preventDefault(),a()};return Object(b.jsxs)(m.Q,{scrollable:!0,fade:!1,keyboard:!1,backdrop:!1,id:"compose-mail",container:".content-body",className:"modal-lg",isOpen:s,contentClassName:"p-0",toggle:a,modalClassName:"modal-sticky",children:[Object(b.jsxs)("div",{className:"modal-header",children:[Object(b.jsx)("h5",{className:"modal-title",children:"Compose Mail"}),Object(b.jsxs)("div",{className:"modal-actions",children:[Object(b.jsx)("a",{href:"/",className:"text-body me-75",onClick:N,children:Object(b.jsx)(D.a,{size:14})}),Object(b.jsx)("a",{href:"/",className:"text-body me-75",onClick:e=>e.preventDefault(),children:Object(b.jsx)(T.a,{size:14})}),Object(b.jsx)("a",{href:"/",className:"text-body",onClick:N,children:Object(b.jsx)(F.a,{size:14})})]})]}),Object(b.jsx)(m.R,{className:"flex-grow-1 p-0",children:Object(b.jsxs)(m.H,{className:"compose-form",onSubmit:e=>e.preventDefault(),children:[Object(b.jsxs)("div",{className:"compose-mail-form-field",children:[Object(b.jsx)(m.N,{for:"email-to",className:"form-label",children:"To:"}),Object(b.jsx)("div",{className:"flex-grow-1",children:Object(b.jsx)(E.a,{isMulti:!0,id:"email-to",isClearable:!1,theme:d.h,options:o,className:"react-select select-borderless",classNamePrefix:"select",components:{Option:x}})}),Object(b.jsxs)("div",{children:[Object(b.jsx)("a",{href:"/",className:"toggle-cc text-body me-1",onClick:O,children:"Cc"}),Object(b.jsx)("a",{href:"/",className:"toggle-cc text-body",onClick:p,children:"Bcc"})]})]}),!0===l?Object(b.jsxs)("div",{className:"compose-mail-form-field cc-wrapper",children:[Object(b.jsx)(m.N,{for:"email-cc",className:"form-label",children:"Cc:"}),Object(b.jsx)("div",{className:"flex-grow-1",children:Object(b.jsx)(E.a,{isMulti:!0,id:"email-cc",isClearable:!1,theme:d.h,options:o,className:"react-select select-borderless",classNamePrefix:"select",components:{Option:x}})}),Object(b.jsx)("div",{children:Object(b.jsx)("a",{href:"/",className:"toggle-cc text-body",onClick:O,children:Object(b.jsx)(F.a,{size:14})})})]}):null,!0===i?Object(b.jsxs)("div",{className:"compose-mail-form-field cc-wrapper",children:[Object(b.jsx)(m.N,{for:"email-bcc",className:"form-label",children:"Bcc:"}),Object(b.jsx)("div",{className:"flex-grow-1",children:Object(b.jsx)(E.a,{isMulti:!0,id:"email-bcc",isClearable:!1,theme:d.h,options:o,className:"react-select select-borderless",classNamePrefix:"select",components:{Option:x}})}),Object(b.jsx)("div",{children:Object(b.jsx)("a",{href:"/",className:"toggle-cc text-body",onClick:p,children:Object(b.jsx)(F.a,{size:14})})})]}):null,Object(b.jsxs)("div",{className:"compose-mail-form-field",children:[Object(b.jsx)(m.N,{for:"email-subject",className:"form-label",children:"Subject:"}),Object(b.jsx)(m.K,{id:"email-subject",placeholder:"Subject"})]}),Object(b.jsx)("div",{id:"message-editor",children:Object(b.jsx)(S.Editor,{placeholder:"Message",toolbarClassName:"rounded-0",wrapperClassName:"toolbar-bottom",editorClassName:"rounded-0 border-0",toolbar:{options:["inline","textAlign"],inline:{inDropdown:!1,options:["bold","italic","underline","strikethrough"]}}})}),Object(b.jsxs)("div",{className:"compose-footer-wrapper",children:[Object(b.jsxs)("div",{className:"btn-wrapper d-flex align-items-center",children:[Object(b.jsxs)(m.tb,{direction:"up",className:"me-1",children:[Object(b.jsx)(m.i,{color:"primary",onClick:a,children:"Send"}),Object(b.jsx)(m.G,{className:"dropdown-toggle-split",color:"primary",caret:!0}),Object(b.jsx)(m.F,{end:!0,children:Object(b.jsx)(m.E,{href:"/",tag:"a",onClick:N,children:"Schedule Send"})})]}),Object(b.jsx)("div",{className:"email-attachement",children:Object(b.jsxs)(m.N,{className:"mb-0",for:"attach-email-item",children:[Object(b.jsx)(r.a,{className:"cursor-pointer ms-50",size:18}),Object(b.jsx)("input",{type:"file",name:"attach-email-item",id:"attach-email-item",hidden:!0})]})})]}),Object(b.jsxs)("div",{className:"footer-action d-flex align-items-center",children:[Object(b.jsxs)(m.wb,{className:"me-50",direction:"up",children:[Object(b.jsx)(m.G,{tag:"span",children:Object(b.jsx)(h.a,{className:"cursor-pointer",size:18})}),Object(b.jsxs)(m.F,{end:!0,children:[Object(b.jsx)(m.E,{href:"/",tag:"a",onClick:e=>e.preventDefault(),children:"Add Label"}),Object(b.jsx)(m.E,{href:"/",tag:"a",onClick:e=>e.preventDefault(),children:"Plain text mode"}),Object(b.jsx)(m.E,{divider:!0}),Object(b.jsx)(m.E,{href:"/",tag:"a",onClick:e=>e.preventDefault(),children:"Print"}),Object(b.jsx)(m.E,{href:"/",tag:"a",onClick:e=>e.preventDefault(),children:"Check Spelling"})]})]}),Object(b.jsx)(v.a,{className:"cursor-pointer",size:18,onClick:a})]})]})]})})]})},q=a(897),H=a(918);var K=e=>{const{query:s,store:a,openMail:l,setQuery:c,dispatch:i,selectMail:n,composeOpen:r,updateMails:j,setOpenMail:h,paginateMail:x,selectAllMail:O,toggleCompose:p,setSidebarOpen:N,updateMailLabel:M,resetSelectedMail:y,selectCurrentMail:S}=e,{mails:P,selectedMails:E}=a,D={personal:"success",company:"primary",important:"warning",private:"danger"},T=e=>{i(S(e)),h(!0)},F=function(e,s){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:E;e.preventDefault(),i(j({emailIds:a,dataToUpdate:{folder:s}})),i(y())},I=function(e,s){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:E;e.preventDefault(),i(M({emailIds:a,label:s})),i(y())},U=(e,s)=>{i(j({emailIds:e,dataToUpdate:{isRead:s}})).then((()=>i(y()))),i(O(!1))},R=e=>{i(j({emailIds:e,dataToUpdate:{folder:"trash"}})),i(y())};return Object(b.jsxs)(t.Fragment,{children:[Object(b.jsxs)("div",{className:"email-app-list",children:[Object(b.jsxs)("div",{className:"app-fixed-search d-flex align-items-center",children:[Object(b.jsx)("div",{className:"sidebar-toggle d-block d-lg-none ms-1",onClick:()=>N(!0),children:Object(b.jsx)(q.a,{size:"21"})}),Object(b.jsx)("div",{className:"d-flex align-content-center justify-content-between w-100",children:Object(b.jsxs)(m.L,{className:"input-group-merge",children:[Object(b.jsx)(m.M,{children:Object(b.jsx)(H.a,{className:"text-muted",size:14})}),Object(b.jsx)(m.K,{id:"email-search",placeholder:"Search email",value:s,onChange:e=>c(e.target.value)})]})})]}),Object(b.jsxs)("div",{className:"app-action",children:[Object(b.jsxs)("div",{className:"action-left form-check",children:[Object(b.jsx)(m.K,{type:"checkbox",id:"select-all",onChange:e=>{i(O(e.target.checked))},checked:E.length&&E.length===P.length}),Object(b.jsx)(m.N,{className:"form-check-label fw-bolder ps-25 mb-0",for:"select-all",children:"Select All"})]}),E.length?Object(b.jsx)("div",{className:"action-right",children:Object(b.jsxs)("ul",{className:"list-inline m-0",children:[Object(b.jsx)("li",{className:"list-inline-item me-1",children:Object(b.jsxs)(m.wb,{children:[Object(b.jsx)(m.G,{tag:"span",children:Object(b.jsx)(g.a,{size:18})}),Object(b.jsxs)(m.F,{end:!0,children:[Object(b.jsxs)(m.E,{tag:"a",href:"/",onClick:e=>F(e,"draft"),className:"d-flex align-items-center",children:[Object(b.jsx)(u.a,{className:"me-50",size:18}),Object(b.jsx)("span",{children:"Draft"})]}),Object(b.jsxs)(m.E,{tag:"a",href:"/",onClick:e=>F(e,"spam"),className:"d-flex align-items-center",children:[Object(b.jsx)(f.a,{className:"me-50",size:18}),Object(b.jsx)("span",{children:"Spam"})]}),Object(b.jsxs)(m.E,{tag:"a",href:"/",onClick:e=>F(e,"trash"),className:"d-flex align-items-center",children:[Object(b.jsx)(v.a,{className:"me-50",size:18}),Object(b.jsx)("span",{children:"Trash"})]})]})]})}),Object(b.jsx)("li",{className:"list-inline-item me-1",children:Object(b.jsxs)(m.wb,{children:[Object(b.jsx)(m.G,{tag:"span",children:Object(b.jsx)(C.a,{size:18})}),Object(b.jsxs)(m.F,{end:!0,children:[Object(b.jsxs)(m.E,{tag:"a",href:"/",onClick:e=>I(e,"personal"),className:"d-flex align-items-center",children:[Object(b.jsx)("span",{className:"bullet bullet-success bullet-sm me-50"}),Object(b.jsx)("span",{children:"Personal"})]}),Object(b.jsxs)(m.E,{tag:"a",href:"/",onClick:e=>I(e,"company"),className:"d-flex align-items-center",children:[Object(b.jsx)("span",{className:"bullet bullet-primary bullet-sm me-50"}),Object(b.jsx)("span",{children:"Company"})]}),Object(b.jsxs)(m.E,{tag:"a",href:"/",onClick:e=>I(e,"important"),className:"d-flex align-items-center",children:[Object(b.jsx)("span",{className:"bullet bullet-warning bullet-sm me-50"}),Object(b.jsx)("span",{children:"Important"})]}),Object(b.jsxs)(m.E,{tag:"a",href:"/",onClick:e=>I(e,"private"),className:"d-flex align-items-center",children:[Object(b.jsx)("span",{className:"bullet bullet-danger bullet-sm me-50"}),Object(b.jsx)("span",{children:"Private"})]})]})]})}),Object(b.jsx)("li",{className:"list-inline-item me-1",children:Object(b.jsx)("span",{className:"action-icon",onClick:()=>U(E,!1),children:Object(b.jsx)(k.a,{size:18})})}),Object(b.jsx)("li",{className:"list-inline-item",children:Object(b.jsx)("span",{className:"action-icon",onClick:()=>R(E),children:Object(b.jsx)(v.a,{size:18})})})]})}):null]}),Object(b.jsx)(w.a,{className:"email-user-list",options:{wheelPropagation:!1},children:P.length?Object(b.jsx)("ul",{className:"email-media-list",children:(()=>{if(P.length)return P.map(((e,s)=>Object(b.jsx)(o,{mail:e,dispatch:i,selectMail:n,updateMails:j,labelColors:D,selectedMails:E,handleMailClick:T,handleMailReadUpdate:U,formatDateToMonthShort:d.b},s)))})()}):Object(b.jsx)("div",{className:"no-results d-block",children:Object(b.jsx)("h5",{children:"No Items Found"})})})]}),Object(b.jsx)(z,{openMail:l,dispatch:i,mail:a.currentMail,labelColors:D,setOpenMail:h,updateMails:j,paginateMail:x,updateMailLabel:M,handleMailToTrash:R,handleFolderUpdate:F,handleLabelsUpdate:I,handleMailReadUpdate:U,formatDateToMonthShort:d.b}),Object(b.jsx)(A,{composeOpen:r,toggleCompose:p})]})},J=a(129),Q=a(919);var W=e=>{const{store:s,sidebarOpen:a,toggleCompose:t,dispatch:c,getMails:r,resetSelectedMail:j,setSidebarOpen:d,setOpenMail:o}=e,h=Object(l.g)(),x=e=>{o(!1),c(r({...s.params,folder:e})),c(j())},O=e=>{o(!1),c(r({...s.params,label:e})),c(j())},p=e=>!!(h.folder&&h.folder===e||h.label&&h.label===e);return Object(b.jsx)("div",{className:i()("sidebar-left",{show:a}),children:Object(b.jsx)("div",{className:"sidebar",children:Object(b.jsx)("div",{className:"sidebar-content email-app-sidebar",children:Object(b.jsxs)("div",{className:"email-app-menu",children:[Object(b.jsx)("div",{className:"form-group-compose text-center compose-btn",children:Object(b.jsx)(m.i,{className:"compose-email",color:"primary",block:!0,onClick:()=>{t(),d(!1)},children:"Compose"})}),Object(b.jsxs)(w.a,{className:"sidebar-menu-list",options:{wheelPropagation:!1},children:[Object(b.jsxs)(m.O,{tag:"div",className:"list-group-messages",children:[Object(b.jsxs)(m.P,{tag:J.b,to:"/apps/email/inbox",onClick:()=>x("inbox"),action:!0,active:!Object.keys(h).length||p("inbox"),children:[Object(b.jsx)(k.a,{size:18,className:"me-75"}),Object(b.jsx)("span",{className:"align-middle",children:"Inbox"}),s.emailsMeta.inbox?Object(b.jsx)(m.f,{className:"float-end",color:"light-primary",pill:!0,children:s.emailsMeta.inbox}):null]}),Object(b.jsxs)(m.P,{tag:J.b,to:"/apps/email/sent",onClick:()=>x("sent"),action:!0,active:p("sent"),children:[Object(b.jsx)(Q.a,{size:18,className:"me-75"}),Object(b.jsx)("span",{className:"align-middle",children:"Sent"})]}),Object(b.jsxs)(m.P,{tag:J.b,to:"/apps/email/draft",onClick:()=>x("draft"),action:!0,active:p("draft"),children:[Object(b.jsx)(u.a,{size:18,className:"me-75"}),Object(b.jsx)("span",{className:"align-middle",children:"Draft"}),s.emailsMeta.draft?Object(b.jsx)(m.f,{className:"float-end",color:"light-warning",pill:!0,children:s.emailsMeta.draft}):null]}),Object(b.jsxs)(m.P,{tag:J.b,to:"/apps/email/starred",onClick:()=>x("starred"),action:!0,active:p("starred"),children:[Object(b.jsx)(n.a,{size:18,className:"me-75"}),Object(b.jsx)("span",{className:"align-middle",children:"Starred"})]}),Object(b.jsxs)(m.P,{tag:J.b,to:"/apps/email/spam",onClick:()=>x("spam"),action:!0,active:p("spam"),children:[Object(b.jsx)(f.a,{size:18,className:"me-75"}),Object(b.jsx)("span",{className:"align-middle",children:"Spam"}),s.emailsMeta.spam?Object(b.jsx)(m.f,{className:"float-end",color:"light-danger",pill:!0,children:s.emailsMeta.spam}):null]}),Object(b.jsxs)(m.P,{tag:J.b,to:"/apps/email/trash",onClick:()=>x("trash"),action:!0,active:p("trash"),children:[Object(b.jsx)(v.a,{size:18,className:"me-75"}),Object(b.jsx)("span",{className:"align-middle",children:"Trash"})]})]}),Object(b.jsx)("h6",{className:"section-label mt-3 mb-1 px-2",children:"Labels"}),Object(b.jsxs)(m.O,{tag:"div",className:"list-group-labels",children:[Object(b.jsxs)(m.P,{tag:J.b,to:"/apps/email/label/personal",onClick:()=>O("personal"),active:p("personal"),action:!0,children:[Object(b.jsx)("span",{className:"bullet bullet-sm bullet-success me-1"}),"Personal"]}),Object(b.jsxs)(m.P,{tag:J.b,to:"/apps/email/label/company",onClick:()=>O("company"),active:p("company"),action:!0,children:[Object(b.jsx)("span",{className:"bullet bullet-sm bullet-primary me-1"}),"Company"]}),Object(b.jsxs)(m.P,{tag:J.b,to:"/apps/email/label/important",onClick:()=>O("important"),active:p("important"),action:!0,children:[Object(b.jsx)("span",{className:"bullet bullet-sm bullet-warning me-1"}),"Important"]}),Object(b.jsxs)(m.P,{tag:J.b,to:"/apps/email/label/private",onClick:()=>O("private"),active:p("private"),action:!0,children:[Object(b.jsx)("span",{className:"bullet bullet-sm bullet-danger me-1"}),"Private"]})]})]})]})})})})},_=a(130),V=a(169);a(1286);s.default=()=>{const[e,s]=Object(t.useState)(""),[a,c]=Object(t.useState)(!1),[n,r]=Object(t.useState)(!1),[j,d]=Object(t.useState)(!1),m=()=>d(!j),o=Object(_.b)(),h=Object(_.c)((e=>e.email)),x=Object(l.g)();return Object(t.useEffect)((()=>{o(Object(V.b)({q:e||"",folder:x.folder||"inbox",label:x.label||""}))}),[e,x.folder,x.label]),Object(b.jsxs)(t.Fragment,{children:[Object(b.jsx)(W,{store:h,dispatch:o,getMails:V.b,setOpenMail:c,sidebarOpen:n,toggleCompose:m,setSidebarOpen:r,resetSelectedMail:V.d}),Object(b.jsx)("div",{className:"content-right",children:Object(b.jsxs)("div",{className:"content-body",children:[Object(b.jsx)("div",{className:i()("body-content-overlay",{show:n}),onClick:()=>r(!1)}),Object(b.jsx)(K,{store:h,query:e,setQuery:s,dispatch:o,getMails:V.b,openMail:a,selectMail:V.g,setOpenMail:c,updateMails:V.i,composeOpen:j,paginateMail:V.c,selectAllMail:V.e,toggleCompose:m,setSidebarOpen:r,updateMailLabel:V.h,selectCurrentMail:V.f,resetSelectedMail:V.d})]})})]})}},481:function(e,s,a){"use strict";var l=a(1),t=a(2),c=a.n(t),i=a(89),n=a(9);const r=Object(l.forwardRef)(((e,s)=>{const{img:a,size:l,icon:t,color:r,status:j,badgeUp:d,content:m,tag:b,initials:o,imgWidth:h,className:x,badgeText:O,imgHeight:p,badgeColor:N,imgClassName:g,contentStyles:u,...f}=e;return Object(n.jsxs)(b,{className:c()("avatar",{[x]:x,["bg-".concat(r)]:r,["avatar-".concat(l)]:l}),ref:s,...f,children:[!1===a||void 0===a?Object(n.jsxs)("span",{className:c()("avatar-content",{"position-relative":d}),style:u,children:[o?(e=>{const s=[];return e.split(" ").forEach((e=>{s.push(e[0])})),s.join("")})(m):m,t||null,d?Object(n.jsx)(i.f,{color:N||"primary",className:"badge-sm badge-up",pill:!0,children:O||"0"}):null]}):Object(n.jsx)("img",{className:c()({[g]:g}),src:a,alt:"avatarImg",height:p&&!l?p:32,width:h&&!l?h:32}),j?Object(n.jsx)("span",{className:c()({["avatar-status-".concat(j)]:j,["avatar-status-".concat(l)]:l})}):null]})}));s.a=r,r.defaultProps={tag:"div"}},585:function(e,s,a){}}]);
//# sourceMappingURL=88.cd4bce51.chunk.js.map