(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[122],{1666:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(96),r=a(16),s=a(517),l=a.n(s),i=a(11),j=function(){var e=Object(c.useState)(new Date),t=Object(r.a)(e,2),a=t[0],s=t[1];return Object(i.jsxs)(c.Fragment,{children:[Object(i.jsx)(n.N,{className:"form-label",id:"timepicker",children:"Basic 24hrs"}),Object(i.jsx)(l.a,{className:"form-control",value:a,id:"timepicker",options:{enableTime:!0,noCalendar:!0,dateFormat:"H:i",time_24hr:!0},onChange:function(e){return s(e)}})]})},m=function(){var e=Object(c.useState)(new Date),t=Object(r.a)(e,2),a=t[0],s=t[1];return Object(i.jsxs)(c.Fragment,{children:[Object(i.jsx)(n.N,{className:"form-label",for:"range-picker",children:"Range"}),Object(i.jsx)(l.a,{value:a,id:"range-picker",className:"form-control",onChange:function(e){return s(e)},options:{mode:"range",defaultDate:["2020-02-01","2020-02-15"]}})]})},b=function(){var e=Object(c.useState)(new Date),t=Object(r.a)(e,2),a=t[0],s=t[1];return Object(i.jsxs)(c.Fragment,{children:[Object(i.jsx)(n.N,{className:"form-label",for:"inline-picker",children:"Inline"}),Object(i.jsx)(l.a,{className:"form-control",value:a,options:{inline:!0},onChange:function(e){return s(e)}})]})},o=function(){var e=Object(c.useState)(new Date),t=Object(r.a)(e,2),a=t[0],s=t[1];return Object(i.jsxs)(c.Fragment,{children:[Object(i.jsx)(n.N,{className:"form-label",for:"default-picker",children:"Default"}),Object(i.jsx)(l.a,{className:"form-control",value:a,onChange:function(e){return s(e)},id:"default-picker"})]})},d=function(){var e=Object(c.useState)(new Date),t=Object(r.a)(e,2),a=t[0],s=t[1];return Object(i.jsxs)(c.Fragment,{children:[Object(i.jsx)(n.N,{className:"form-label",for:"date-time-picker",children:"Date & Time"}),Object(i.jsx)(l.a,{value:a,"data-enable-time":!0,id:"date-time-picker",className:"form-control",onChange:function(e){return s(e)}})]})},u=function(){var e=Object(c.useState)(new Date),t=Object(r.a)(e,2),a=t[0],s=t[1];return Object(i.jsxs)(c.Fragment,{children:[Object(i.jsx)(n.N,{className:"form-label",for:"multi-dates-picker",children:"Multiple Dates"}),Object(i.jsx)(l.a,{value:a,id:"multi-dates-picker",className:"form-control",options:{mode:"multiple"},onChange:function(e){return s(e)}})]})},O=function(){var e=Object(c.useState)(new Date),t=Object(r.a)(e,2),a=t[0],s=t[1];return Object(i.jsxs)(c.Fragment,{children:[Object(i.jsx)(n.N,{className:"form-label",for:"hf-picker",children:"Human Friendly"}),Object(i.jsx)(l.a,{value:a,id:"hf-picker",className:"form-control",onChange:function(e){return s(e)},options:{altInput:!0,altFormat:"F j, Y",dateFormat:"Y-m-d"}})]})},h=function(){var e=Object(c.useState)(new Date),t=Object(r.a)(e,2),a=t[0],s=t[1];return Object(i.jsxs)(c.Fragment,{children:[Object(i.jsx)(n.N,{className:"form-label",for:"disabled-picker",children:"Disabled Range"}),Object(i.jsx)(l.a,{value:a,id:"disabled-picker",className:"form-control",onChange:function(e){return s(e)},options:{dateFormat:"Y-m-d",disable:[{from:new Date,to:new Date((new Date).getTime()+432e6)}]}})]})},x=a(499);a(520),t.default=function(){return Object(i.jsxs)(c.Fragment,{children:[Object(i.jsx)(x.a,{title:"Date & Time Picker",data:[{title:"Form Elements"},{title:"Date & Time Picker"}]}),Object(i.jsxs)(n.l,{children:[Object(i.jsx)(n.p,{children:Object(i.jsx)(n.v,{tag:"h4",children:"Flatpickr"})}),Object(i.jsx)(n.m,{children:Object(i.jsxs)(n.ib,{children:[Object(i.jsx)(n.B,{md:"6",sm:"12",className:"mb-1",children:Object(i.jsx)(o,{})}),Object(i.jsx)(n.B,{md:"6",sm:"12",className:"mb-1",children:Object(i.jsx)(j,{})}),Object(i.jsx)(n.B,{md:"6",sm:"12",className:"mb-1",children:Object(i.jsx)(d,{})}),Object(i.jsx)(n.B,{md:"6",sm:"12",className:"mb-1",children:Object(i.jsx)(u,{})}),Object(i.jsx)(n.B,{md:"6",sm:"12",className:"mb-1",children:Object(i.jsx)(m,{})}),Object(i.jsx)(n.B,{md:"6",sm:"12",className:"mb-1",children:Object(i.jsx)(O,{})}),Object(i.jsx)(n.B,{md:"6",sm:"12",className:"mb-1",children:Object(i.jsx)(h,{})}),Object(i.jsx)(n.B,{md:"6",sm:"12",className:"mb-1",children:Object(i.jsx)(b,{})})]})})]})]})}},499:function(e,t,a){"use strict";var c=a(21),n=a(1),r=a(135),s=a(2),l=a.n(s),i=a(96),j=a(11);t.a=function(e){var t=e.data,a=e.title;return Object(j.jsx)("div",{className:"content-header row",children:Object(j.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2 w-100",children:Object(j.jsx)("div",{className:"row breadcrumbs-top",children:Object(j.jsxs)("div",{className:"col-12",children:[a?Object(j.jsx)("h2",{className:"content-header-title float-start mb-0",children:a}):"",Object(j.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(j.jsxs)(i.g,{children:[Object(j.jsx)(i.h,{tag:"li",children:Object(j.jsx)(r.b,{to:"/",children:"Dashboard"})}),t.map((function(e,a){var s=e.link?r.b:n.Fragment,m=t.length-1===a;return Object(j.jsx)(i.h,{tag:"li",active:!m,className:l()({"text-primary":!m}),children:Object(j.jsx)(s,Object(c.a)(Object(c.a)({},e.link?{to:e.link}:{}),{},{children:e.title}))},a)}))]})})]})})})})}},520:function(e,t,a){}}]);
//# sourceMappingURL=122.6004c0af.chunk.js.map