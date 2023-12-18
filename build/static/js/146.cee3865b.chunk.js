(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[146],{1695:function(e,r,c){"use strict";c.r(r);var n=c(1),t=c(257),a=c.n(t),s=c(96),b=c(135),d=c(11),i=function(){return Object(d.jsxs)(n.Fragment,{children:[Object(d.jsxs)(s.g,{listClassName:"breadcrumb-slash",children:[Object(d.jsx)(s.h,{children:Object(d.jsx)(b.b,{to:"#",children:" Home "})}),Object(d.jsx)(s.h,{children:Object(d.jsx)(b.b,{to:"#",children:" Library "})}),Object(d.jsx)(s.h,{active:!0,children:Object(d.jsx)("span",{children:" Data "})})]}),Object(d.jsxs)(s.g,{listClassName:"breadcrumb-dots",children:[Object(d.jsx)(s.h,{children:Object(d.jsx)(b.b,{to:"#",children:" Home "})}),Object(d.jsx)(s.h,{children:Object(d.jsx)(b.b,{to:"#",children:" Library "})}),Object(d.jsx)(s.h,{active:!0,children:Object(d.jsx)("span",{children:" Data "})})]}),Object(d.jsxs)(s.g,{listClassName:"breadcrumb-dashes",children:[Object(d.jsx)(s.h,{children:Object(d.jsx)(b.b,{to:"#",children:" Home "})}),Object(d.jsx)(s.h,{children:Object(d.jsx)(b.b,{to:"#",children:" Library "})}),Object(d.jsx)(s.h,{active:!0,children:Object(d.jsx)("span",{children:" Data "})})]}),Object(d.jsxs)(s.g,{listClassName:"breadcrumb-pipes",children:[Object(d.jsx)(s.h,{children:Object(d.jsx)(b.b,{to:"#",children:" Home "})}),Object(d.jsx)(s.h,{children:Object(d.jsx)(b.b,{to:"#",children:" Library "})}),Object(d.jsx)(s.h,{active:!0,children:Object(d.jsx)("span",{children:" Data "})})]}),Object(d.jsxs)(s.g,{listClassName:"breadcrumb-chevron",children:[Object(d.jsx)(s.h,{children:Object(d.jsx)(b.b,{to:"#",children:" Home "})}),Object(d.jsx)(s.h,{children:Object(d.jsx)(b.b,{to:"#",children:" Library "})}),Object(d.jsx)(s.h,{active:!0,children:Object(d.jsx)("span",{children:" Data "})})]})]})},m=function(){return Object(d.jsx)(n.Fragment,{children:Object(d.jsxs)(s.g,{children:[Object(d.jsx)(s.h,{children:Object(d.jsx)(b.b,{to:"#",children:" Home "})}),Object(d.jsx)(s.h,{children:Object(d.jsx)(b.b,{to:"#",children:" Library "})}),Object(d.jsx)(s.h,{active:!0,children:Object(d.jsx)("span",{children:" Data "})})]})})},j=c(499),l=function(){return Object(d.jsxs)(n.Fragment,{children:[Object(d.jsx)("div",{className:"d-flex justify-content-start breadcrumb-wrapper",children:Object(d.jsxs)(s.g,{className:"ms-1",children:[Object(d.jsx)(s.h,{children:Object(d.jsx)(b.b,{to:"#",children:" Home "})}),Object(d.jsx)(s.h,{children:Object(d.jsx)(b.b,{to:"#",children:" Library "})}),Object(d.jsx)(s.h,{children:Object(d.jsx)("span",{children:" Data "})})]})}),Object(d.jsx)("div",{className:"d-flex justify-content-center breadcrumb-wrapper my-1",children:Object(d.jsxs)(s.g,{children:[Object(d.jsx)(s.h,{children:Object(d.jsx)(b.b,{to:"#",children:" Home "})}),Object(d.jsx)(s.h,{children:Object(d.jsx)(b.b,{to:"#",children:" Library "})}),Object(d.jsx)(s.h,{children:Object(d.jsx)("span",{children:" Data "})})]})}),Object(d.jsx)("div",{className:"d-flex justify-content-end breadcrumb-wrapper",children:Object(d.jsxs)(s.g,{className:"me-1",children:[Object(d.jsx)(s.h,{children:Object(d.jsx)(b.b,{to:"#",children:" Home "})}),Object(d.jsx)(s.h,{children:Object(d.jsx)(b.b,{to:"#",children:" Library "})}),Object(d.jsx)(s.h,{className:"pe-1",children:Object(d.jsx)("span",{children:" Data "})})]})})]})},u=c(503),h=Object(d.jsx)("pre",{children:Object(d.jsx)("code",{className:"language-jsx",children:"\n\nimport { Breadcrumb, BreadcrumbItem } from 'reactstrap'\nimport { Link } from 'react-router-dom'\n\nconst BreadcrumbsDefault = () => {\n  return (\n    <React.Fragment>\n      <Breadcrumb className='ms-1'>\n        <BreadcrumbItem>\n          <Link to='#'> Home </Link>\n        </BreadcrumbItem>\n        <BreadcrumbItem>\n          <Link to='#'> Library </Link>\n        </BreadcrumbItem>\n        <BreadcrumbItem active>\n          <span> Data </span>\n        </BreadcrumbItem>\n      </Breadcrumb>\n    </React.Fragment>\n  )\n}\nexport default BreadcrumbsDefault\n    "})}),o=Object(d.jsx)("pre",{children:Object(d.jsx)("code",{className:"language-jsx",children:"\n\nimport { Breadcrumb, BreadcrumbItem } from 'reactstrap'\nimport { Link } from 'react-router-dom'\n\nconst BreadcrumbsStyles = () => {\n  return (\n    <React.Fragment>\n      <Breadcrumb className='breadcrumb-slash'>\n        <BreadcrumbItem>\n          <Link to='#'> Home </Link>\n        </BreadcrumbItem>\n        <BreadcrumbItem>\n          <Link to='#'> Library </Link>\n        </BreadcrumbItem>\n        <BreadcrumbItem active>\n          <span> Data </span>\n        </BreadcrumbItem>\n      </Breadcrumb>\n\n      <Breadcrumb className='breadcrumb-dots'>\n        <BreadcrumbItem>\n          <Link to='#'> Home </Link>\n        </BreadcrumbItem>\n        <BreadcrumbItem>\n          <Link to='#'> Library </Link>\n        </BreadcrumbItem>\n        <BreadcrumbItem active>\n          <span> Data </span>\n        </BreadcrumbItem>\n      </Breadcrumb>\n\n      <Breadcrumb className='breadcrumb-dashes'>\n        <BreadcrumbItem>\n          <Link to='#'> Home </Link>\n        </BreadcrumbItem>\n        <BreadcrumbItem>\n          <Link to='#'> Library </Link>\n        </BreadcrumbItem>\n        <BreadcrumbItem active>\n          <span> Data </span>\n        </BreadcrumbItem>\n      </Breadcrumb>\n\n      <Breadcrumb className='breadcrumb-pipes'>\n        <BreadcrumbItem>\n          <Link to='#'> Home </Link>\n        </BreadcrumbItem>\n        <BreadcrumbItem>\n          <Link to='#'> Library </Link>\n        </BreadcrumbItem>\n        <BreadcrumbItem active>\n          <span> Data </span>\n        </BreadcrumbItem>\n      </Breadcrumb>\n\n      <Breadcrumb className='breadcrumb-chevron'>\n        <BreadcrumbItem>\n          <Link to='#'> Home </Link>\n        </BreadcrumbItem>\n        <BreadcrumbItem>\n          <Link to='#'> Library </Link>\n        </BreadcrumbItem>\n        <BreadcrumbItem active>\n          <span> Data </span>\n        </BreadcrumbItem>\n      </Breadcrumb>\n    </React.Fragment>\n  )\n}\nexport default BreadcrumbsStyles\n\n      "})}),x=Object(d.jsx)("pre",{children:Object(d.jsx)("code",{className:"language-jsx",children:"\n\nimport { Breadcrumb, BreadcrumbItem } from 'reactstrap'\nimport { Link } from 'react-router-dom'\n\nconst BreadcrumbsAlignment = () => {\n  return (\n    <React.Fragment>\n      <div className='justify-content-start breadcrumb-wrapper'>\n        <Breadcrumb className='ms-1'>\n          <BreadcrumbItem>\n            <Link to='#'> Home </Link>\n          </BreadcrumbItem>\n          <BreadcrumbItem>\n            <Link to='#'> Library </Link>\n          </BreadcrumbItem>\n          <BreadcrumbItem>\n            <span> Data </span>\n          </BreadcrumbItem>\n        </Breadcrumb>\n      </div>\n      <div className='justify-content-center breadcrumb-wrapper'>\n        <Breadcrumb>\n          <BreadcrumbItem>\n            <Link to='#'> Home </Link>\n          </BreadcrumbItem>\n          <BreadcrumbItem>\n            <Link to='#'> Library </Link>\n          </BreadcrumbItem>\n          <BreadcrumbItem>\n            <span> Data </span>\n          </BreadcrumbItem>\n        </Breadcrumb>\n      </div>\n      <div className='justify-content-end breadcrumb-wrapper'>\n        <Breadcrumb>\n          <BreadcrumbItem>\n            <Link to='#'> Home </Link>\n          </BreadcrumbItem>\n          <BreadcrumbItem>\n            <Link to='#'> Library </Link>\n          </BreadcrumbItem>\n          <BreadcrumbItem>\n            <span> Data </span>\n          </BreadcrumbItem>\n        </Breadcrumb>\n      </div>\n    </React.Fragment>\n  )\n}\nexport default BreadcrumbsAlignment\n\n      "})});r.default=function(){return Object(n.useEffect)((function(){a.a.highlightAll()}),[]),Object(d.jsxs)(n.Fragment,{children:[Object(d.jsx)(j.a,{title:"Breadcrumbs",data:[{title:"Components"},{title:"Breadcrumbs"}]}),Object(d.jsxs)(s.ib,{children:[Object(d.jsx)(s.B,{sm:"12",children:Object(d.jsxs)("section",{id:"component-breadcrumbs",children:[Object(d.jsx)(u.a,{title:"Default",code:h,children:Object(d.jsx)(m,{})}),Object(d.jsxs)(u.a,{title:"Styles",code:o,children:[Object(d.jsxs)(s.u,{children:["These breadcrumbs are only for demo puropses. You can change breadcrumb seprator by changing"," ",Object(d.jsx)("code",{children:"$breadcrumb-divider"})," variable value in scss"]}),Object(d.jsx)(i,{})]})]})}),Object(d.jsx)(s.B,{sm:"12",children:Object(d.jsx)("section",{id:"breadcrumb-alignment",children:Object(d.jsxs)(u.a,{title:"Alignment",code:x,children:[Object(d.jsxs)(s.u,{children:["Use class ",Object(d.jsxs)("code",{children:[".justify-content-","{position}"]})," to align breadcrumb to desired position."]}),Object(d.jsx)(l,{})]})})})]})]})}},499:function(e,r,c){"use strict";var n=c(21),t=c(1),a=c(135),s=c(2),b=c.n(s),d=c(96),i=c(11);r.a=function(e){var r=e.data,c=e.title;return Object(i.jsx)("div",{className:"content-header row",children:Object(i.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2 w-100",children:Object(i.jsx)("div",{className:"row breadcrumbs-top",children:Object(i.jsxs)("div",{className:"col-12",children:[c?Object(i.jsx)("h2",{className:"content-header-title float-start mb-0",children:c}):"",Object(i.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(i.jsxs)(d.g,{children:[Object(i.jsx)(d.h,{tag:"li",children:Object(i.jsx)(a.b,{to:"/",children:"Dashboard"})}),r.map((function(e,c){var s=e.link?a.b:t.Fragment,m=r.length-1===c;return Object(i.jsx)(d.h,{tag:"li",active:!m,className:b()({"text-primary":!m}),children:Object(i.jsx)(s,Object(n.a)(Object(n.a)({},e.link?{to:e.link}:{}),{},{children:e.title}))},c)}))]})})]})})})})}},503:function(e,r,c){"use strict";var n=c(16),t=c(1),a=c(879),s=c(96),b=c(11);r.a=function(e){var r=e.title,c=e.children,d=e.noBody,i=e.code,m=e.iconCode,j=Object(t.useState)(!1),l=Object(n.a)(j,2),u=l[0],h=l[1],o=m||Object(b.jsx)(a.a,{size:15}),x=d?t.Fragment:s.m;return Object(b.jsxs)(s.l,{className:"card-snippet",children:[Object(b.jsxs)(s.p,{children:[Object(b.jsx)(s.v,{tag:"h4",children:r}),Object(b.jsx)("div",{className:"views cursor-pointer",onClick:function(){return h(!u)},children:o})]}),Object(b.jsx)(x,{children:c}),Object(b.jsx)(s.C,{isOpen:u,children:Object(b.jsx)(s.m,{children:i})})]})}}}]);
//# sourceMappingURL=146.cee3865b.chunk.js.map