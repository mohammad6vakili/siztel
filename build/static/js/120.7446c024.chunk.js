(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[120],{1646:function(e,c,t){"use strict";t.r(c);var s=t(1),a=t(89),n=t(480),l=t(577),j=t(912),r=t(900),i=t(9);var d=()=>Object(i.jsxs)(a.l,{children:[Object(i.jsx)(a.p,{children:Object(i.jsx)(a.v,{tag:"h4",children:"Sizes"})}),Object(i.jsx)(a.m,{children:Object(i.jsxs)("div",{className:"d-flex flex-wrap",children:[Object(i.jsxs)("div",{className:"me-2",children:[Object(i.jsx)(a.N,{className:"form-label",for:"lg-number-input",children:"Large Input"}),Object(i.jsx)(l.a,{defaultValue:10,className:"input-lg",upHandler:Object(i.jsx)(j.a,{}),id:"lg-number-input",downHandler:Object(i.jsx)(r.a,{})})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)(a.N,{className:"form-label",for:"default-number-input",children:"Default Input"}),Object(i.jsx)(l.a,{defaultValue:10,upHandler:Object(i.jsx)(j.a,{}),id:"default-number-input",downHandler:Object(i.jsx)(r.a,{})})]})]})})]});var b=()=>Object(i.jsxs)(a.l,{children:[Object(i.jsx)(a.p,{children:Object(i.jsx)(a.v,{tag:"h4",children:"Basic"})}),Object(i.jsx)(a.m,{children:Object(i.jsxs)("div",{className:"demo-inline-spacing",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)(a.N,{className:"form-label",for:"basic-number-input",children:"Basic Input"}),Object(i.jsx)(l.a,{id:"basic-number-input",defaultValue:10,upHandler:Object(i.jsx)(j.a,{}),downHandler:Object(i.jsx)(r.a,{})})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)(a.N,{className:"form-label",for:"disabled-number-input",children:"Disabled Input"}),Object(i.jsx)(l.a,{disabled:!0,defaultValue:10,upHandler:Object(i.jsx)(j.a,{}),downHandler:Object(i.jsx)(r.a,{}),id:"disabled-number-input"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)(a.N,{className:"form-label",for:"readOnly-number-input",children:"ReadOnly Input"}),Object(i.jsx)(l.a,{readOnly:!0,defaultValue:10,upHandler:Object(i.jsx)(j.a,{}),downHandler:Object(i.jsx)(r.a,{}),id:"readOnly-number-input"})]})]})})]});var x=()=>Object(i.jsxs)(a.l,{children:[Object(i.jsx)(a.p,{children:Object(i.jsx)(a.v,{tag:"h4",children:"Min Max"})}),Object(i.jsx)(a.m,{children:Object(i.jsxs)("div",{children:[Object(i.jsx)(a.N,{className:"form-label",for:"min-max-number-input",children:"Min Max Input"}),Object(i.jsx)(l.a,{min:0,max:10,defaultValue:5,upHandler:Object(i.jsx)(j.a,{}),downHandler:Object(i.jsx)(r.a,{}),id:"min-max-number-input"})]})})]});var O=()=>Object(i.jsxs)(a.l,{children:[Object(i.jsx)(a.p,{children:Object(i.jsx)(a.v,{tag:"h4",children:"Formatting"})}),Object(i.jsx)(a.m,{children:Object(i.jsxs)("div",{children:[Object(i.jsx)(a.N,{className:"form-label",for:"formatting-number-input",children:"Formatting Input"}),Object(i.jsx)(l.a,{parser:e=>{const c=e.toString().split(" ");if(!c[1])return e;return c[1].replace(/,*/g,"")},defaultValue:5,formatter:e=>"$ ".concat(e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),upHandler:Object(i.jsx)(j.a,{}),downHandler:Object(i.jsx)(r.a,{}),id:"formatting-number-input"})]})})]});const m=["primary","secondary","success","danger","warning","info"];var u=()=>Object(i.jsxs)(a.l,{children:[Object(i.jsx)(a.p,{children:Object(i.jsx)(a.v,{tag:"h4",children:"Colors"})}),Object(i.jsx)(a.m,{children:Object(i.jsx)("div",{className:"demo-inline-spacing",children:m.map((e=>Object(i.jsxs)("div",{children:[Object(i.jsxs)(a.N,{className:"form-label text-capitalize",for:"".concat(e,"-number-input"),children:[e," Input"]}),Object(i.jsx)(l.a,{defaultValue:10,upHandler:Object(i.jsx)(j.a,{}),downHandler:Object(i.jsx)(r.a,{}),id:"".concat(e,"-number-input"),className:"input-".concat(e)})]},e)))})})]});var h=()=>Object(i.jsxs)(a.l,{children:[Object(i.jsx)(a.p,{children:Object(i.jsx)(a.v,{tag:"h4",children:"Decimal"})}),Object(i.jsx)(a.m,{children:Object(i.jsxs)("div",{children:[Object(i.jsx)(a.N,{className:"form-label",for:"decimal-number-input",children:"Decimal Input"}),Object(i.jsx)(l.a,{step:.1,defaultValue:10,upHandler:Object(i.jsx)(j.a,{}),downHandler:Object(i.jsx)(r.a,{}),id:"decimal-number-input"})]})})]});var o=()=>{const[e,c]=Object(s.useState)(1),[t,n]=Object(s.useState)(!1),[d,b]=Object(s.useState)(!1);return Object(i.jsxs)(a.l,{children:[Object(i.jsx)(a.p,{children:Object(i.jsx)(a.v,{tag:"h4",children:"Controlled"})}),Object(i.jsxs)(a.m,{children:[Object(i.jsxs)("div",{children:[Object(i.jsx)(a.N,{className:"form-label",for:"controlled-number-input",children:"Controlled Input"}),Object(i.jsx)(l.a,{value:e,upHandler:Object(i.jsx)(j.a,{}),disabled:t,readOnly:d,downHandler:Object(i.jsx)(r.a,{}),id:"controlled-number-input",onChange:e=>c(e)})]}),Object(i.jsxs)("div",{className:"demo-inline-spacing",children:[Object(i.jsx)(a.i,{size:"sm",color:"primary",onClick:()=>n(!t),children:"Toggle Disabled"}),Object(i.jsx)(a.i,{size:"sm",color:"primary",onClick:()=>b(!d),children:"Toggle ReadOnly"}),Object(i.jsx)(a.i,{size:"sm",color:"primary",onClick:()=>c(10),children:"Set Value to 10"})]})]})]})};t(713);c.default=()=>Object(i.jsxs)(s.Fragment,{children:[Object(i.jsx)(n.a,{title:"Number Input",data:[{title:"Form Elements"},{title:"Number Input"}]}),Object(i.jsxs)(a.ib,{className:"match-height",children:[Object(i.jsx)(a.B,{md:"6",sm:"12",children:Object(i.jsx)(b,{})}),Object(i.jsx)(a.B,{md:"6",sm:"12",children:Object(i.jsx)(o,{})}),Object(i.jsx)(a.B,{md:"6",sm:"12",children:Object(i.jsx)(h,{})}),Object(i.jsx)(a.B,{md:"6",sm:"12",children:Object(i.jsx)(x,{})}),Object(i.jsx)(a.B,{md:"6",sm:"12",children:Object(i.jsx)(d,{})}),Object(i.jsx)(a.B,{md:"6",sm:"12",children:Object(i.jsx)(O,{})}),Object(i.jsx)(a.B,{xs:"12",children:Object(i.jsx)(u,{})})]})]})},480:function(e,c,t){"use strict";var s=t(1),a=t(129),n=t(2),l=t.n(n),j=t(89),r=t(9);c.a=e=>{const{data:c,title:t}=e;return Object(r.jsx)("div",{className:"content-header row",children:Object(r.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2 w-100",children:Object(r.jsx)("div",{className:"row breadcrumbs-top",children:Object(r.jsxs)("div",{className:"col-12",children:[t?Object(r.jsx)("h2",{className:"content-header-title float-start mb-0",children:t}):"",Object(r.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(r.jsxs)(j.g,{children:[Object(r.jsx)(j.h,{tag:"li",children:Object(r.jsx)(a.b,{to:"/",children:"Dashboard"})}),c.map(((e,t)=>{const n=e.link?a.b:s.Fragment,i=c.length-1===t;return Object(r.jsx)(j.h,{tag:"li",active:!i,className:l()({"text-primary":!i}),children:Object(r.jsx)(n,{...e.link?{to:e.link}:{},children:e.title})},t)}))]})})]})})})})}},713:function(e,c,t){}}]);
//# sourceMappingURL=120.7446c024.chunk.js.map