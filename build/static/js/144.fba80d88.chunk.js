(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[144],{1671:function(e,r,c){"use strict";c.r(r);var n=c(1),t=c(249),a=c.n(t),s=c(89),b=c(129),d=c(9);var m=()=>Object(d.jsxs)(n.Fragment,{children:[Object(d.jsxs)(s.g,{listClassName:"breadcrumb-slash",children:[Object(d.jsx)(s.h,{children:Object(d.jsx)(b.b,{to:"#",children:" Home "})}),Object(d.jsx)(s.h,{children:Object(d.jsx)(b.b,{to:"#",children:" Library "})}),Object(d.jsx)(s.h,{active:!0,children:Object(d.jsx)("span",{children:" Data "})})]}),Object(d.jsxs)(s.g,{listClassName:"breadcrumb-dots",children:[Object(d.jsx)(s.h,{children:Object(d.jsx)(b.b,{to:"#",children:" Home "})}),Object(d.jsx)(s.h,{children:Object(d.jsx)(b.b,{to:"#",children:" Library "})}),Object(d.jsx)(s.h,{active:!0,children:Object(d.jsx)("span",{children:" Data "})})]}),Object(d.jsxs)(s.g,{listClassName:"breadcrumb-dashes",children:[Object(d.jsx)(s.h,{children:Object(d.jsx)(b.b,{to:"#",children:" Home "})}),Object(d.jsx)(s.h,{children:Object(d.jsx)(b.b,{to:"#",children:" Library "})}),Object(d.jsx)(s.h,{active:!0,children:Object(d.jsx)("span",{children:" Data "})})]}),Object(d.jsxs)(s.g,{listClassName:"breadcrumb-pipes",children:[Object(d.jsx)(s.h,{children:Object(d.jsx)(b.b,{to:"#",children:" Home "})}),Object(d.jsx)(s.h,{children:Object(d.jsx)(b.b,{to:"#",children:" Library "})}),Object(d.jsx)(s.h,{active:!0,children:Object(d.jsx)("span",{children:" Data "})})]}),Object(d.jsxs)(s.g,{listClassName:"breadcrumb-chevron",children:[Object(d.jsx)(s.h,{children:Object(d.jsx)(b.b,{to:"#",children:" Home "})}),Object(d.jsx)(s.h,{children:Object(d.jsx)(b.b,{to:"#",children:" Library "})}),Object(d.jsx)(s.h,{active:!0,children:Object(d.jsx)("span",{children:" Data "})})]})]});var i=()=>Object(d.jsx)(n.Fragment,{children:Object(d.jsxs)(s.g,{children:[Object(d.jsx)(s.h,{children:Object(d.jsx)(b.b,{to:"#",children:" Home "})}),Object(d.jsx)(s.h,{children:Object(d.jsx)(b.b,{to:"#",children:" Library "})}),Object(d.jsx)(s.h,{active:!0,children:Object(d.jsx)("span",{children:" Data "})})]})}),j=c(481);var l=()=>Object(d.jsxs)(n.Fragment,{children:[Object(d.jsx)("div",{className:"d-flex justify-content-start breadcrumb-wrapper",children:Object(d.jsxs)(s.g,{className:"ms-1",children:[Object(d.jsx)(s.h,{children:Object(d.jsx)(b.b,{to:"#",children:" Home "})}),Object(d.jsx)(s.h,{children:Object(d.jsx)(b.b,{to:"#",children:" Library "})}),Object(d.jsx)(s.h,{children:Object(d.jsx)("span",{children:" Data "})})]})}),Object(d.jsx)("div",{className:"d-flex justify-content-center breadcrumb-wrapper my-1",children:Object(d.jsxs)(s.g,{children:[Object(d.jsx)(s.h,{children:Object(d.jsx)(b.b,{to:"#",children:" Home "})}),Object(d.jsx)(s.h,{children:Object(d.jsx)(b.b,{to:"#",children:" Library "})}),Object(d.jsx)(s.h,{children:Object(d.jsx)("span",{children:" Data "})})]})}),Object(d.jsx)("div",{className:"d-flex justify-content-end breadcrumb-wrapper",children:Object(d.jsxs)(s.g,{className:"me-1",children:[Object(d.jsx)(s.h,{children:Object(d.jsx)(b.b,{to:"#",children:" Home "})}),Object(d.jsx)(s.h,{children:Object(d.jsx)(b.b,{to:"#",children:" Library "})}),Object(d.jsx)(s.h,{className:"pe-1",children:Object(d.jsx)("span",{children:" Data "})})]})})]}),h=c(485);const u=Object(d.jsx)("pre",{children:Object(d.jsx)("code",{className:"language-jsx",children:"\n\nimport { Breadcrumb, BreadcrumbItem } from 'reactstrap'\nimport { Link } from 'react-router-dom'\n\nconst BreadcrumbsDefault = () => {\n  return (\n    <React.Fragment>\n      <Breadcrumb className='ms-1'>\n        <BreadcrumbItem>\n          <Link to='#'> Home </Link>\n        </BreadcrumbItem>\n        <BreadcrumbItem>\n          <Link to='#'> Library </Link>\n        </BreadcrumbItem>\n        <BreadcrumbItem active>\n          <span> Data </span>\n        </BreadcrumbItem>\n      </Breadcrumb>\n    </React.Fragment>\n  )\n}\nexport default BreadcrumbsDefault\n    "})}),o=Object(d.jsx)("pre",{children:Object(d.jsx)("code",{className:"language-jsx",children:"\n\nimport { Breadcrumb, BreadcrumbItem } from 'reactstrap'\nimport { Link } from 'react-router-dom'\n\nconst BreadcrumbsStyles = () => {\n  return (\n    <React.Fragment>\n      <Breadcrumb className='breadcrumb-slash'>\n        <BreadcrumbItem>\n          <Link to='#'> Home </Link>\n        </BreadcrumbItem>\n        <BreadcrumbItem>\n          <Link to='#'> Library </Link>\n        </BreadcrumbItem>\n        <BreadcrumbItem active>\n          <span> Data </span>\n        </BreadcrumbItem>\n      </Breadcrumb>\n\n      <Breadcrumb className='breadcrumb-dots'>\n        <BreadcrumbItem>\n          <Link to='#'> Home </Link>\n        </BreadcrumbItem>\n        <BreadcrumbItem>\n          <Link to='#'> Library </Link>\n        </BreadcrumbItem>\n        <BreadcrumbItem active>\n          <span> Data </span>\n        </BreadcrumbItem>\n      </Breadcrumb>\n\n      <Breadcrumb className='breadcrumb-dashes'>\n        <BreadcrumbItem>\n          <Link to='#'> Home </Link>\n        </BreadcrumbItem>\n        <BreadcrumbItem>\n          <Link to='#'> Library </Link>\n        </BreadcrumbItem>\n        <BreadcrumbItem active>\n          <span> Data </span>\n        </BreadcrumbItem>\n      </Breadcrumb>\n\n      <Breadcrumb className='breadcrumb-pipes'>\n        <BreadcrumbItem>\n          <Link to='#'> Home </Link>\n        </BreadcrumbItem>\n        <BreadcrumbItem>\n          <Link to='#'> Library </Link>\n        </BreadcrumbItem>\n        <BreadcrumbItem active>\n          <span> Data </span>\n        </BreadcrumbItem>\n      </Breadcrumb>\n\n      <Breadcrumb className='breadcrumb-chevron'>\n        <BreadcrumbItem>\n          <Link to='#'> Home </Link>\n        </BreadcrumbItem>\n        <BreadcrumbItem>\n          <Link to='#'> Library </Link>\n        </BreadcrumbItem>\n        <BreadcrumbItem active>\n          <span> Data </span>\n        </BreadcrumbItem>\n      </Breadcrumb>\n    </React.Fragment>\n  )\n}\nexport default BreadcrumbsStyles\n\n      "})}),x=Object(d.jsx)("pre",{children:Object(d.jsx)("code",{className:"language-jsx",children:"\n\nimport { Breadcrumb, BreadcrumbItem } from 'reactstrap'\nimport { Link } from 'react-router-dom'\n\nconst BreadcrumbsAlignment = () => {\n  return (\n    <React.Fragment>\n      <div className='justify-content-start breadcrumb-wrapper'>\n        <Breadcrumb className='ms-1'>\n          <BreadcrumbItem>\n            <Link to='#'> Home </Link>\n          </BreadcrumbItem>\n          <BreadcrumbItem>\n            <Link to='#'> Library </Link>\n          </BreadcrumbItem>\n          <BreadcrumbItem>\n            <span> Data </span>\n          </BreadcrumbItem>\n        </Breadcrumb>\n      </div>\n      <div className='justify-content-center breadcrumb-wrapper'>\n        <Breadcrumb>\n          <BreadcrumbItem>\n            <Link to='#'> Home </Link>\n          </BreadcrumbItem>\n          <BreadcrumbItem>\n            <Link to='#'> Library </Link>\n          </BreadcrumbItem>\n          <BreadcrumbItem>\n            <span> Data </span>\n          </BreadcrumbItem>\n        </Breadcrumb>\n      </div>\n      <div className='justify-content-end breadcrumb-wrapper'>\n        <Breadcrumb>\n          <BreadcrumbItem>\n            <Link to='#'> Home </Link>\n          </BreadcrumbItem>\n          <BreadcrumbItem>\n            <Link to='#'> Library </Link>\n          </BreadcrumbItem>\n          <BreadcrumbItem>\n            <span> Data </span>\n          </BreadcrumbItem>\n        </Breadcrumb>\n      </div>\n    </React.Fragment>\n  )\n}\nexport default BreadcrumbsAlignment\n\n      "})});r.default=()=>(Object(n.useEffect)((()=>{a.a.highlightAll()}),[]),Object(d.jsxs)(n.Fragment,{children:[Object(d.jsx)(j.a,{title:"Breadcrumbs",data:[{title:"Components"},{title:"Breadcrumbs"}]}),Object(d.jsxs)(s.ib,{children:[Object(d.jsx)(s.B,{sm:"12",children:Object(d.jsxs)("section",{id:"component-breadcrumbs",children:[Object(d.jsx)(h.a,{title:"Default",code:u,children:Object(d.jsx)(i,{})}),Object(d.jsxs)(h.a,{title:"Styles",code:o,children:[Object(d.jsxs)(s.u,{children:["These breadcrumbs are only for demo puropses. You can change breadcrumb seprator by changing"," ",Object(d.jsx)("code",{children:"$breadcrumb-divider"})," variable value in scss"]}),Object(d.jsx)(m,{})]})]})}),Object(d.jsx)(s.B,{sm:"12",children:Object(d.jsx)("section",{id:"breadcrumb-alignment",children:Object(d.jsxs)(h.a,{title:"Alignment",code:x,children:[Object(d.jsxs)(s.u,{children:["Use class ",Object(d.jsxs)("code",{children:[".justify-content-","{position}"]})," to align breadcrumb to desired position."]}),Object(d.jsx)(l,{})]})})})]})]}))},481:function(e,r,c){"use strict";var n=c(1),t=c(129),a=c(2),s=c.n(a),b=c(89),d=c(9);r.a=e=>{const{data:r,title:c}=e;return Object(d.jsx)("div",{className:"content-header row",children:Object(d.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2 w-100",children:Object(d.jsx)("div",{className:"row breadcrumbs-top",children:Object(d.jsxs)("div",{className:"col-12",children:[c?Object(d.jsx)("h2",{className:"content-header-title float-start mb-0",children:c}):"",Object(d.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(d.jsxs)(b.g,{children:[Object(d.jsx)(b.h,{tag:"li",children:Object(d.jsx)(t.b,{to:"/",children:"Dashboard"})}),r.map(((e,c)=>{const a=e.link?t.b:n.Fragment,m=r.length-1===c;return Object(d.jsx)(b.h,{tag:"li",active:!m,className:s()({"text-primary":!m}),children:Object(d.jsx)(a,{...e.link?{to:e.link}:{},children:e.title})},c)}))]})})]})})})})}},485:function(e,r,c){"use strict";var n=c(1),t=c(852),a=c(89),s=c(9);r.a=e=>{const{title:r,children:c,noBody:b,code:d,iconCode:m}=e,[i,j]=Object(n.useState)(!1),l=m||Object(s.jsx)(t.a,{size:15}),h=b?n.Fragment:a.m;return Object(s.jsxs)(a.l,{className:"card-snippet",children:[Object(s.jsxs)(a.p,{children:[Object(s.jsx)(a.v,{tag:"h4",children:r}),Object(s.jsx)("div",{className:"views cursor-pointer",onClick:()=>j(!i),children:l})]}),Object(s.jsx)(h,{children:c}),Object(s.jsx)(a.C,{isOpen:i,children:Object(s.jsx)(a.m,{children:d})})]})}}}]);
//# sourceMappingURL=144.fba80d88.chunk.js.map