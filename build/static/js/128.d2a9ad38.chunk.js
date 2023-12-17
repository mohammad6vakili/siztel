(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[128],{1661:function(t,e,n){"use strict";n.r(e);var i=n(1),o=n(495),s=n(89),c=n(528),r=n.n(c),l=n(529),a=n.n(l),m=n(9);const u=a()(r.a);var b=()=>Object(m.jsxs)(s.l,{children:[Object(m.jsx)(s.p,{children:Object(m.jsx)(s.v,{tag:"h4",children:"Types"})}),Object(m.jsxs)(s.m,{children:[Object(m.jsx)(s.u,{className:"mb-0",children:'SweetAlert comes with 4 built-in types which will show a corresponding icon animation: "warning", "error", "success" and "info".'}),Object(m.jsxs)("div",{className:"demo-inline-spacing",children:[Object(m.jsx)(s.i,{color:"success",onClick:()=>u.fire({title:"Good job!",text:"You clicked the button!",icon:"success",customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1}),outline:!0,children:"Success"}),Object(m.jsx)(s.i,{color:"danger",onClick:()=>u.fire({title:"Error!",text:" You clicked the button!",icon:"error",customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1}),outline:!0,children:"Error"}),Object(m.jsx)(s.i,{color:"warning",onClick:()=>u.fire({title:"Warning!",text:" You clicked the button!",icon:"warning",customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1}),outline:!0,children:"Warning"}),Object(m.jsx)(s.i,{color:"info",onClick:()=>u.fire({title:"Info!",text:"You clicked the button!",icon:"info",customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1}),outline:!0,children:"Info"}),Object(m.jsx)(s.i,{onClick:()=>u.fire({title:"Question?",text:" You clicked the button!",icon:"question",customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1}),outline:!0,children:"Question"})]})]})]}),j=n(938),d=n(937);const h=a()(r.a);var x=()=>Object(m.jsxs)(s.l,{children:[Object(m.jsx)(s.p,{children:Object(m.jsx)(s.v,{tag:"h4",children:"Basic"})}),Object(m.jsxs)(s.m,{children:[Object(m.jsx)(s.u,{className:"mb-0",children:"SweetAlert automatically centers itself on the page and looks great no matter if you're using a desktop computer, mobile or tablet. It's even highly customizable, as you can see below!"}),Object(m.jsxs)("div",{className:"demo-inline-spacing",children:[Object(m.jsx)(s.i,{color:"primary",onClick:()=>h.fire({title:"Any fool can use a computer",customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1}),outline:!0,children:"Basic"}),Object(m.jsx)(s.i,{color:"primary",onClick:()=>h.fire({title:"The Internet?,",text:"That thing is still around?",customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1}),outline:!0,children:"With Title"}),Object(m.jsx)(s.i,{color:"primary",onClick:()=>h.fire({icon:"error",title:"Oops...",text:"Something went wrong!",footer:'<a href="#">Why do I have this issue?</a>',customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1}),outline:!0,children:"With Footer"}),Object(m.jsx)(s.i,{color:"primary",onClick:()=>h.fire({title:"<strong>HTML <u>example</u></strong>",icon:"info",html:'You can use <b>bold text</b>, <a href="https://pixinvent.com/" target="_blank">links</a> and other HTML tags',showCloseButton:!0,showCancelButton:!0,focusConfirm:!1,confirmButtonText:Object(m.jsxs)("span",{className:"align-middle",children:[Object(m.jsx)(j.a,{className:"me-50",size:15}),Object(m.jsx)("span",{className:"align-middle",children:"Great!"})]}),cancelButtonText:Object(m.jsx)(d.a,{size:15}),customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1}),outline:!0,children:"HTML"})]})]})]}),p=n(251);const f=a()(r.a);var O=()=>Object(m.jsxs)(s.l,{children:[Object(m.jsx)(s.p,{children:Object(m.jsx)(s.v,{tag:"h4",children:"Options"})}),Object(m.jsx)(s.m,{children:Object(m.jsxs)("div",{className:"demo-inline-spacing",children:[Object(m.jsx)(s.i,{color:"primary",onClick:()=>f.fire({title:"Sweet!",text:"Modal with a custom image.",imageUrl:p.default,imageWidth:300,imageHeight:200,imageAlt:"Custom image",customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1}),outline:!0,children:"Image"}),Object(m.jsx)(s.i,{color:"primary",onClick:()=>{let t;r.a.fire({title:"Auto close alert!",html:"I will close in <b></b> seconds.",timerProgressBar:!0,timer:2e3,didOpen(){r.a.showLoading();const e=r.a.getHtmlContainer().querySelector("b");t=setInterval((()=>{e.textContent=r.a.getTimerLeft()}),100)},willClose(){clearInterval(t)}}).then((function(t){t.dismiss===r.a.DismissReason.timer&&console.log("I was closed by the timer")}))},outline:!0,children:"Timeout"}),Object(m.jsx)(s.i,{color:"primary",onClick:()=>f.fire({backdrop:!0,title:"Click outside to close!",text:"This is a cool message!",allowOutsideClick:!0,customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1}),outline:!0,children:"Click Outside"}),Object(m.jsx)(s.i,{color:"primary",onClick:()=>{f.fire({title:"Search for a user",input:"text",customClass:{input:"mx-3",confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ms-1"},buttonsStyling:!1,inputAttributes:{autocapitalize:"off"},showCancelButton:!0,confirmButtonText:"Look up",showLoaderOnConfirm:!0,preConfirm:t=>fetch("//api.github.com/users/".concat(t)).then((function(t){if(!t.ok)throw new Error(t.statusText);return t.json()})).catch((function(t){f.showValidationMessage("Request failed:  ".concat(t))}))}).then((function(t){t.value&&f.fire({title:"".concat(t.value.login,"'s avatar"),imageUrl:t.value.avatar_url,customClass:{confirmButton:"btn btn-primary"}})}))},outline:!0,children:"Ajax"})]})})]});const C=a()(r.a);var g=()=>Object(m.jsxs)(s.l,{children:[Object(m.jsx)(s.p,{children:Object(m.jsx)(s.v,{tag:"h4",children:"Callback"})}),Object(m.jsx)(s.m,{children:Object(m.jsxs)(s.ib,{children:[Object(m.jsxs)(s.B,{className:"mb-2 mb-md-0",md:"6",sm:"12",children:[Object(m.jsx)("h5",{className:"mb-1",children:"Confirm Button Text"}),Object(m.jsx)(s.i,{color:"primary",onClick:()=>C.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1}).then((function(t){t.value&&C.fire({icon:"success",title:"Deleted!",text:"Your file has been deleted.",customClass:{confirmButton:"btn btn-success"}})})),outline:!0,children:"Confirm Text"})]}),Object(m.jsxs)(s.B,{md:"6",sm:"12",children:[Object(m.jsx)("h5",{className:"mb-1",children:"Confirm Button Color"}),Object(m.jsx)(s.i,{color:"primary",onClick:()=>C.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ms-1"},buttonsStyling:!1}).then((function(t){t.value?C.fire({icon:"success",title:"Deleted!",text:"Your file has been deleted.",customClass:{confirmButton:"btn btn-success"}}):t.dismiss===C.DismissReason.cancel&&C.fire({title:"Cancelled",text:"Your imaginary file is safe :)",icon:"error",customClass:{confirmButton:"btn btn-success"}})})),outline:!0,children:"Confirm & cancel"})]})]})})]});const y=a()(r.a);var B=()=>Object(m.jsxs)(s.l,{children:[Object(m.jsx)(s.p,{children:Object(m.jsx)(s.v,{tag:"h4",children:"Position"})}),Object(m.jsxs)(s.m,{children:[Object(m.jsxs)(s.u,{className:"mb-0",children:["You can specify position of your alert with"," ",Object(m.jsx)("code",{children:"position : top-start | top-end | bottom-start | bottom-end "})," "]}),Object(m.jsxs)("div",{className:"demo-inline-spacing",children:[Object(m.jsx)(s.i,{color:"primary",onClick:()=>y.fire({position:"top-start",icon:"success",title:"Your work has been saved",showConfirmButton:!1,timer:1500}),outline:!0,children:"Top Start"}),Object(m.jsx)(s.i,{color:"primary",onClick:()=>y.fire({position:"top-end",icon:"success",title:"Your work has been saved",showConfirmButton:!1,timer:1500}),outline:!0,children:"Top End"}),Object(m.jsx)(s.i,{color:"primary",onClick:()=>y.fire({position:"bottom-start",icon:"success",title:"Your work has been saved",showConfirmButton:!1,timer:1500}),outline:!0,children:"Bottom Start"}),Object(m.jsx)(s.i,{color:"primary",onClick:()=>y.fire({position:"bottom-end",icon:"success",title:"Your work has been saved",showConfirmButton:!1,timer:1500}),outline:!0,children:"Bottom End"})]})]})]});const k=a()(r.a);var w=()=>Object(m.jsxs)(s.l,{children:[Object(m.jsx)(s.p,{children:Object(m.jsx)(s.v,{tag:"h4",children:"Animations"})}),Object(m.jsxs)(s.m,{children:[Object(m.jsxs)(s.u,{className:"mb-0",children:["Use ",Object(m.jsx)("code",{children:"popup"})," inside ",Object(m.jsx)("code",{children:"showClass"})," parameter to add animation to your alert."]}),Object(m.jsxs)("div",{className:"demo-inline-spacing",children:[Object(m.jsx)(s.i,{color:"primary",onClick:()=>k.fire({title:"Bounce In Animation",customClass:{confirmButton:"btn btn-primary"},showClass:{popup:"animate__animated animate__bounceIn"},buttonsStyling:!1}),outline:!0,children:"Bounce In"}),Object(m.jsx)(s.i,{color:"primary",onClick:()=>k.fire({title:"Fade In Animation",customClass:{confirmButton:"btn btn-primary"},showClass:{popup:"animate__animated animate__fadeIn"},buttonsStyling:!1}),outline:!0,children:"Fade In"}),Object(m.jsx)(s.i,{color:"primary",onClick:()=>k.fire({title:"Flip In Animation",customClass:{confirmButton:"btn btn-primary"},showClass:{popup:"animate__animated animate__flipInX"},buttonsStyling:!1}),outline:!0,children:"Flip In"}),Object(m.jsx)(s.i,{color:"primary",onClick:()=>k.fire({title:"Tada Animation",customClass:{confirmButton:"btn btn-primary"},showClass:{popup:"animate__animated animate__tada"},buttonsStyling:!1}),outline:!0,children:"Tada"}),Object(m.jsx)(s.i,{color:"primary",onClick:()=>k.fire({title:"Shake Animation",customClass:{confirmButton:"btn btn-primary"},showClass:{popup:"animate__animated animate__shakeX"},buttonsStyling:!1}),outline:!0,children:"Shake"})]})]})]});n(958),n(593);e.default=()=>Object(m.jsxs)(i.Fragment,{children:[Object(m.jsx)(o.a,{title:"Sweet Alerts2",subTitle:"A React implementation of SweetAlert2",link:"https://github.com/sweetalert2/sweetalert2-react-content"}),Object(m.jsxs)(s.ib,{children:[Object(m.jsx)(s.B,{sm:"12",children:Object(m.jsx)(x,{})}),Object(m.jsx)(s.B,{sm:"12",children:Object(m.jsx)(B,{})}),Object(m.jsx)(s.B,{sm:"12",children:Object(m.jsx)(w,{})}),Object(m.jsx)(s.B,{sm:"12",children:Object(m.jsx)(b,{})}),Object(m.jsx)(s.B,{sm:"12",children:Object(m.jsx)(O,{})}),Object(m.jsx)(s.B,{sm:"12",children:Object(m.jsx)(g,{})})]})]})},495:function(t,e,n){"use strict";var i=n(89),o=n(9);e.a=t=>Object(o.jsx)(i.ib,{className:"mb-2",children:Object(o.jsxs)(i.B,{sm:"12",className:"ms-50",children:[Object(o.jsx)("p",{className:"font-medium-5 mt-1 extension-title","data-tour":"extension-title",children:t.title}),t.link?Object(o.jsx)("a",{href:t.link,target:"_blank",rel:"noopener noreferrer",children:t.subTitle}):Object(o.jsx)("p",{className:"text-primary",children:t.subTitle})]})})},593:function(t,e,n){}}]);
//# sourceMappingURL=128.d2a9ad38.chunk.js.map