(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[159],{1674:function(t,o,e){"use strict";e.r(o);var n=e(1),l=e(89),i=e(249),c=e.n(i),r=e(485),s=e(481),a=e(9);var d=()=>Object(a.jsxs)("div",{className:"demo-inline-spacing",children:[Object(a.jsx)(l.i,{color:"primary",outline:!0,id:"positionTop",children:"Top"}),Object(a.jsx)(l.yb,{placement:"top",target:"positionTop",children:"Tooltip on Top"}),Object(a.jsx)(l.i,{color:"primary",outline:!0,id:"positionRight",children:"Right"}),Object(a.jsx)(l.yb,{placement:"right",target:"positionRight",children:"Tooltip on Right"}),Object(a.jsx)(l.i,{color:"primary",outline:!0,id:"positionBottom",children:"Bottom"}),Object(a.jsx)(l.yb,{placement:"bottom",target:"positionBottom",children:"Tooltip on Bottom"}),Object(a.jsx)(l.i,{color:"primary",outline:!0,id:"positionLeft",children:"Left"}),Object(a.jsx)(l.yb,{placement:"left",target:"positionLeft",children:"Tooltip on Left"})]});var p=()=>{const[t,o]=Object(n.useState)(!1);return Object(a.jsxs)(n.Fragment,{children:[Object(a.jsx)(l.i,{color:"primary",id:"ControlledExample",children:"Controlled"}),Object(a.jsx)(l.qb,{placement:"top",isOpen:t,target:"ControlledExample",toggle:()=>o(!t),children:"Hello World !"})]})};var j=()=>Object(a.jsxs)(n.Fragment,{children:[Object(a.jsx)(l.i,{color:"primary",id:"UnControlledExample",children:"Uncontrolled"}),Object(a.jsx)(l.yb,{placement:"top",target:"UnControlledExample",children:"Hello World !"})]});const m=Object(a.jsx)("pre",{children:Object(a.jsx)("code",{className:"language-jsx",children:"\nimport React, { useState } from 'react'\nimport { Button, Tooltip } from 'reactstrap'\n\nconst TooltipControlled = () => {\n  const [tooltipOpen, setTooltipOpen] = useState(false)\n\n  return (\n    <React.Fragment>\n      <Button color='primary' id='ControlledExample'>\n        Controlled\n      </Button>\n      <Tooltip\n        placement='top'\n        isOpen={tooltipOpen}\n        target='ControlledExample'\n        toggle={() => setTooltipOpen(!tooltipOpen)}\n      >\n        Hello World !\n      </Tooltip>\n    </React.Fragment>\n  )\n}\nexport default TooltipControlled\n"})}),b=Object(a.jsx)("pre",{children:Object(a.jsx)("code",{className:"language-jsx",children:"\n\nimport { Button, UncontrolledTooltip } from 'reactstrap'\n\nconst TooltipUncontrolled = () => {\n  return (\n    <React.Fragment>\n      <Button color='primary' id='UnControlledExample'>\n        Uncontrolled\n      </Button>\n      <UncontrolledTooltip placement='top' target='UnControlledExample'>\n        Hello World !\n      </UncontrolledTooltip>\n    </React.Fragment>\n  )\n}\nexport default TooltipUncontrolled\n"})}),h=Object(a.jsx)("pre",{children:Object(a.jsx)("code",{className:"language-jsx",children:"\n\nimport { Button, UncontrolledTooltip } from 'reactstrap'\n\nconst TooltipPosition = () => {\n  return (\n    <div className='demo-inline-spacing'>\n      <Button color='primary' outline id='positionTop'>\n        Top\n      </Button>\n      <UncontrolledTooltip placement='top' target='positionTop'>\n        Tooltip on Top\n      </UncontrolledTooltip>\n\n      <Button color='primary' outline id='positionRight'>\n        Right\n      </Button>\n      <UncontrolledTooltip placement='right' target='positionRight'>\n        Tooltip on Right\n      </UncontrolledTooltip>\n\n      <Button color='primary' outline id='positionBottom'>\n        Bottom\n      </Button>\n      <UncontrolledTooltip placement='bottom' target='positionBottom'>\n        Tooltip on Bottom\n      </UncontrolledTooltip>\n\n      <Button color='primary' outline id='positionLeft'>\n        Left\n      </Button>\n      <UncontrolledTooltip placement='left' target='positionLeft'>\n        Tooltip on Left\n      </UncontrolledTooltip>\n    </div>\n  )\n}\nexport default TooltipPosition\n"})});o.default=()=>(Object(n.useEffect)((()=>{c.a.highlightAll()}),[]),Object(a.jsxs)(n.Fragment,{children:[Object(a.jsx)(s.a,{title:"Tooltips",data:[{title:"Components"},{title:"Tooltips"}]}),Object(a.jsxs)(l.ib,{children:[Object(a.jsx)(l.B,{xl:"6",lg:"12",children:Object(a.jsxs)(r.a,{title:"Controlled Tooltip",code:m,children:[Object(a.jsxs)(l.u,{children:["For controlled tooltips you'll have to manage state of component.controlled tooltips require"," ",Object(a.jsx)("code",{children:"isOpen"})," and ",Object(a.jsx)("code",{children:"toggle"})," props to work."]}),Object(a.jsx)(p,{})]})}),Object(a.jsx)(l.B,{xl:"6",lg:"12",children:Object(a.jsxs)(r.a,{title:"Uncontrolled Tooltip",code:b,children:[Object(a.jsxs)(l.u,{children:["UncontrolledTooltip does not require ",Object(a.jsx)("code",{children:"isOpen"})," nor ",Object(a.jsx)("code",{children:"toggle"})," props to work.All you have to do is provide a valid target to tooltip."]}),Object(a.jsx)(j,{})]})})]}),Object(a.jsx)(l.ib,{children:Object(a.jsx)(l.B,{sm:"12",children:Object(a.jsxs)(r.a,{title:"Tooltip Positions",code:h,children:[Object(a.jsxs)(l.u,{className:"mb-0",children:["Use prop ",Object(a.jsx)("code",{children:"placement"})," to change position of tooltip."]}),Object(a.jsx)(d,{})]})})})]}))},481:function(t,o,e){"use strict";var n=e(1),l=e(129),i=e(2),c=e.n(i),r=e(89),s=e(9);o.a=t=>{const{data:o,title:e}=t;return Object(s.jsx)("div",{className:"content-header row",children:Object(s.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2 w-100",children:Object(s.jsx)("div",{className:"row breadcrumbs-top",children:Object(s.jsxs)("div",{className:"col-12",children:[e?Object(s.jsx)("h2",{className:"content-header-title float-start mb-0",children:e}):"",Object(s.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(s.jsxs)(r.g,{children:[Object(s.jsx)(r.h,{tag:"li",children:Object(s.jsx)(l.b,{to:"/",children:"Dashboard"})}),o.map(((t,e)=>{const i=t.link?l.b:n.Fragment,a=o.length-1===e;return Object(s.jsx)(r.h,{tag:"li",active:!a,className:c()({"text-primary":!a}),children:Object(s.jsx)(i,{...t.link?{to:t.link}:{},children:t.title})},e)}))]})})]})})})})}},485:function(t,o,e){"use strict";var n=e(1),l=e(852),i=e(89),c=e(9);o.a=t=>{const{title:o,children:e,noBody:r,code:s,iconCode:a}=t,[d,p]=Object(n.useState)(!1),j=a||Object(c.jsx)(l.a,{size:15}),m=r?n.Fragment:i.m;return Object(c.jsxs)(i.l,{className:"card-snippet",children:[Object(c.jsxs)(i.p,{children:[Object(c.jsx)(i.v,{tag:"h4",children:o}),Object(c.jsx)("div",{className:"views cursor-pointer",onClick:()=>p(!d),children:j})]}),Object(c.jsx)(m,{children:e}),Object(c.jsx)(i.C,{isOpen:d,children:Object(c.jsx)(i.m,{children:s})})]})}}}]);
//# sourceMappingURL=159.4e9e40d3.chunk.js.map