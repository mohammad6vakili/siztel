(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[123],{1672:function(e,c,t){"use strict";t.r(c);var n=t(1),s=t(96),a=t(499),r=t(604),l=t(942),j=t(930),i=t(11),d=function(){return Object(i.jsxs)(s.l,{children:[Object(i.jsx)(s.p,{children:Object(i.jsx)(s.v,{tag:"h4",children:"Sizes"})}),Object(i.jsx)(s.m,{children:Object(i.jsxs)("div",{className:"d-flex flex-wrap",children:[Object(i.jsxs)("div",{className:"me-2",children:[Object(i.jsx)(s.N,{className:"form-label",for:"lg-number-input",children:"Large Input"}),Object(i.jsx)(r.a,{defaultValue:10,className:"input-lg",upHandler:Object(i.jsx)(l.a,{}),id:"lg-number-input",downHandler:Object(i.jsx)(j.a,{})})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)(s.N,{className:"form-label",for:"default-number-input",children:"Default Input"}),Object(i.jsx)(r.a,{defaultValue:10,upHandler:Object(i.jsx)(l.a,{}),id:"default-number-input",downHandler:Object(i.jsx)(j.a,{})})]})]})})]})},b=function(){return Object(i.jsxs)(s.l,{children:[Object(i.jsx)(s.p,{children:Object(i.jsx)(s.v,{tag:"h4",children:"Basic"})}),Object(i.jsx)(s.m,{children:Object(i.jsxs)("div",{className:"demo-inline-spacing",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)(s.N,{className:"form-label",for:"basic-number-input",children:"Basic Input"}),Object(i.jsx)(r.a,{id:"basic-number-input",defaultValue:10,upHandler:Object(i.jsx)(l.a,{}),downHandler:Object(i.jsx)(j.a,{})})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)(s.N,{className:"form-label",for:"disabled-number-input",children:"Disabled Input"}),Object(i.jsx)(r.a,{disabled:!0,defaultValue:10,upHandler:Object(i.jsx)(l.a,{}),downHandler:Object(i.jsx)(j.a,{}),id:"disabled-number-input"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)(s.N,{className:"form-label",for:"readOnly-number-input",children:"ReadOnly Input"}),Object(i.jsx)(r.a,{readOnly:!0,defaultValue:10,upHandler:Object(i.jsx)(l.a,{}),downHandler:Object(i.jsx)(j.a,{}),id:"readOnly-number-input"})]})]})})]})},u=function(){return Object(i.jsxs)(s.l,{children:[Object(i.jsx)(s.p,{children:Object(i.jsx)(s.v,{tag:"h4",children:"Min Max"})}),Object(i.jsx)(s.m,{children:Object(i.jsxs)("div",{children:[Object(i.jsx)(s.N,{className:"form-label",for:"min-max-number-input",children:"Min Max Input"}),Object(i.jsx)(r.a,{min:0,max:10,defaultValue:5,upHandler:Object(i.jsx)(l.a,{}),downHandler:Object(i.jsx)(j.a,{}),id:"min-max-number-input"})]})})]})},O=function(){return Object(i.jsxs)(s.l,{children:[Object(i.jsx)(s.p,{children:Object(i.jsx)(s.v,{tag:"h4",children:"Formatting"})}),Object(i.jsx)(s.m,{children:Object(i.jsxs)("div",{children:[Object(i.jsx)(s.N,{className:"form-label",for:"formatting-number-input",children:"Formatting Input"}),Object(i.jsx)(r.a,{parser:function(e){var c=e.toString().split(" ");return c[1]?c[1].replace(/,*/g,""):e},defaultValue:5,formatter:function(e){return"$ ".concat(e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))},upHandler:Object(i.jsx)(l.a,{}),downHandler:Object(i.jsx)(j.a,{}),id:"formatting-number-input"})]})})]})},x=["primary","secondary","success","danger","warning","info"],m=function(){return Object(i.jsxs)(s.l,{children:[Object(i.jsx)(s.p,{children:Object(i.jsx)(s.v,{tag:"h4",children:"Colors"})}),Object(i.jsx)(s.m,{children:Object(i.jsx)("div",{className:"demo-inline-spacing",children:x.map((function(e){return Object(i.jsxs)("div",{children:[Object(i.jsxs)(s.N,{className:"form-label text-capitalize",for:"".concat(e,"-number-input"),children:[e," Input"]}),Object(i.jsx)(r.a,{defaultValue:10,upHandler:Object(i.jsx)(l.a,{}),downHandler:Object(i.jsx)(j.a,{}),id:"".concat(e,"-number-input"),className:"input-".concat(e)})]},e)}))})})]})},o=function(){return Object(i.jsxs)(s.l,{children:[Object(i.jsx)(s.p,{children:Object(i.jsx)(s.v,{tag:"h4",children:"Decimal"})}),Object(i.jsx)(s.m,{children:Object(i.jsxs)("div",{children:[Object(i.jsx)(s.N,{className:"form-label",for:"decimal-number-input",children:"Decimal Input"}),Object(i.jsx)(r.a,{step:.1,defaultValue:10,upHandler:Object(i.jsx)(l.a,{}),downHandler:Object(i.jsx)(j.a,{}),id:"decimal-number-input"})]})})]})},h=t(16),p=function(){var e=Object(n.useState)(1),c=Object(h.a)(e,2),t=c[0],a=c[1],d=Object(n.useState)(!1),b=Object(h.a)(d,2),u=b[0],O=b[1],x=Object(n.useState)(!1),m=Object(h.a)(x,2),o=m[0],p=m[1];return Object(i.jsxs)(s.l,{children:[Object(i.jsx)(s.p,{children:Object(i.jsx)(s.v,{tag:"h4",children:"Controlled"})}),Object(i.jsxs)(s.m,{children:[Object(i.jsxs)("div",{children:[Object(i.jsx)(s.N,{className:"form-label",for:"controlled-number-input",children:"Controlled Input"}),Object(i.jsx)(r.a,{value:t,upHandler:Object(i.jsx)(l.a,{}),disabled:u,readOnly:o,downHandler:Object(i.jsx)(j.a,{}),id:"controlled-number-input",onChange:function(e){return a(e)}})]}),Object(i.jsxs)("div",{className:"demo-inline-spacing",children:[Object(i.jsx)(s.i,{size:"sm",color:"primary",onClick:function(){return O(!u)},children:"Toggle Disabled"}),Object(i.jsx)(s.i,{size:"sm",color:"primary",onClick:function(){return p(!o)},children:"Toggle ReadOnly"}),Object(i.jsx)(s.i,{size:"sm",color:"primary",onClick:function(){return a(10)},children:"Set Value to 10"})]})]})]})};t(745),c.default=function(){return Object(i.jsxs)(n.Fragment,{children:[Object(i.jsx)(a.a,{title:"Number Input",data:[{title:"Form Elements"},{title:"Number Input"}]}),Object(i.jsxs)(s.ib,{className:"match-height",children:[Object(i.jsx)(s.B,{md:"6",sm:"12",children:Object(i.jsx)(b,{})}),Object(i.jsx)(s.B,{md:"6",sm:"12",children:Object(i.jsx)(p,{})}),Object(i.jsx)(s.B,{md:"6",sm:"12",children:Object(i.jsx)(o,{})}),Object(i.jsx)(s.B,{md:"6",sm:"12",children:Object(i.jsx)(u,{})}),Object(i.jsx)(s.B,{md:"6",sm:"12",children:Object(i.jsx)(d,{})}),Object(i.jsx)(s.B,{md:"6",sm:"12",children:Object(i.jsx)(O,{})}),Object(i.jsx)(s.B,{xs:"12",children:Object(i.jsx)(m,{})})]})]})}},499:function(e,c,t){"use strict";var n=t(21),s=t(1),a=t(135),r=t(2),l=t.n(r),j=t(96),i=t(11);c.a=function(e){var c=e.data,t=e.title;return Object(i.jsx)("div",{className:"content-header row",children:Object(i.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2 w-100",children:Object(i.jsx)("div",{className:"row breadcrumbs-top",children:Object(i.jsxs)("div",{className:"col-12",children:[t?Object(i.jsx)("h2",{className:"content-header-title float-start mb-0",children:t}):"",Object(i.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(i.jsxs)(j.g,{children:[Object(i.jsx)(j.h,{tag:"li",children:Object(i.jsx)(a.b,{to:"/",children:"Dashboard"})}),c.map((function(e,t){var r=e.link?a.b:s.Fragment,d=c.length-1===t;return Object(i.jsx)(j.h,{tag:"li",active:!d,className:l()({"text-primary":!d}),children:Object(i.jsx)(r,Object(n.a)(Object(n.a)({},e.link?{to:e.link}:{}),{},{children:e.title}))},t)}))]})})]})})})})}},745:function(e,c,t){}}]);
//# sourceMappingURL=123.4cc564bd.chunk.js.map