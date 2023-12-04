(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[150],{1665:function(e,o,t){"use strict";t.r(o);var r=t(1),n=t(89),c=t(485),i=t(480),l=t(9);var a=()=>Object(l.jsxs)("div",{className:"demo-inline-spacing",children:[Object(l.jsx)(n.i,{color:"primary",outline:!0,id:"popFocus",children:"Focus"}),Object(l.jsxs)(n.xb,{trigger:"focus",placement:"top",target:"popFocus",children:[Object(l.jsx)(n.gb,{children:"Focus Trigger"}),Object(l.jsx)(n.fb,{children:"Focusing on the trigging element makes this popover appear. Blurring (clicking away) makes it disappear. You cannot select this text as the popover will disappear when you try."})]}),Object(l.jsx)(n.i,{color:"primary",outline:!0,id:"popClick",children:"Click"}),Object(l.jsxs)(n.xb,{trigger:"click",placement:"top",target:"popClick",children:[Object(l.jsx)(n.gb,{children:"Click Trigger"}),Object(l.jsx)(n.fb,{children:"Clicking on the triggering element makes this popover appear. Clicking on it again will make it disappear. You can select this text, but clicking away (somewhere other than the triggering element) will not dismiss this popover."})]}),Object(l.jsx)(n.i,{trigger:"legacy",color:"primary",outline:!0,id:"popLegacy",children:"Legacy"}),Object(l.jsxs)(n.xb,{placement:"top",target:"popLegacy",children:[Object(l.jsx)(n.gb,{children:"Legacy Trigger"}),Object(l.jsx)(n.fb,{children:'Legacy is a reactstrap special trigger value (outside of bootstrap\'s spec/standard). Before reactstrap correctly supported click and focus, it had a hybrid which was very useful and has been brought back as trigger="legacy". One advantage of the legacy trigger is that it allows the popover text to be selected while also closing when clicking outside the triggering element and popover itself.'})]})]});var p=()=>Object(l.jsxs)("div",{className:"demo-inline-spacing",children:[Object(l.jsx)(n.i,{color:"primary",outline:!0,id:"popTop",children:"Top"}),Object(l.jsxs)(n.xb,{placement:"top",target:"popTop",children:[Object(l.jsx)(n.gb,{children:"Popover Top"}),Object(l.jsx)(n.fb,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cumque."})]}),Object(l.jsx)(n.i,{color:"primary",outline:!0,id:"popRight",children:"Right"}),Object(l.jsxs)(n.xb,{placement:"right",target:"popRight",children:[Object(l.jsx)(n.gb,{children:"Popover Right"}),Object(l.jsx)(n.fb,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cumque."})]}),Object(l.jsx)(n.i,{color:"primary",outline:!0,id:"popBottom",children:"Bottom"}),Object(l.jsxs)(n.xb,{placement:"bottom",target:"popBottom",children:[Object(l.jsx)(n.gb,{children:"Popover Bottom"}),Object(l.jsx)(n.fb,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cumque."})]}),Object(l.jsx)(n.i,{color:"primary",outline:!0,id:"popLeft",children:"Left"}),Object(l.jsxs)(n.xb,{placement:"left",target:"popLeft",children:[Object(l.jsx)(n.gb,{children:"Popover Left"}),Object(l.jsx)(n.fb,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cumque."})]})]});var s=()=>{const[e,o]=Object(r.useState)(!1);return Object(l.jsxs)(r.Fragment,{children:[Object(l.jsx)(n.i,{color:"primary",outline:!0,id:"controlledPopover",children:"Controlled"}),Object(l.jsxs)(n.eb,{placement:"top",isOpen:e,target:"controlledPopover",toggle:()=>o(!e),children:[Object(l.jsx)(n.gb,{children:"Controlled Popover"}),Object(l.jsx)(n.fb,{children:"Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie."})]})]})};var d=()=>Object(l.jsxs)(r.Fragment,{children:[Object(l.jsx)(n.i,{color:"primary",outline:!0,id:"uncontrolledPopover",children:"Uncontrolled"}),Object(l.jsxs)(n.xb,{placement:"top",target:"uncontrolledPopover",children:[Object(l.jsx)(n.gb,{children:"Uncontrolled Popover"}),Object(l.jsx)(n.fb,{children:"Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie."})]})]}),g=t(248),j=t.n(g);const m=Object(l.jsx)("pre",{children:Object(l.jsx)("code",{className:"language-jsx",children:"\nimport React, { useState } from 'react'\nimport { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap'\n\nconst PopoverControlled = () => {\n  const [popoverOpen, setPopoverOpen] = useState(false)\n\n  return (\n    <React.Fragment>\n      <Button color='primary' outline id='controlledPopover'>\n        Controlled\n      </Button>\n      <Popover\n        placement='top'\n        target='controlledPopover'\n        isOpen={popoverOpen}\n        toggle={() => setPopoverOpen(!popoverOpen)}\n      >\n        <PopoverHeader>Controlled Popover</PopoverHeader>\n        <PopoverBody>\n          Macaroon chocolate candy. I love carrot cake gingerbread cake lemon\n          drops. Muffin sugar plum marzipan pie.\n        </PopoverBody>\n      </Popover>\n    </React.Fragment>\n  )\n}\nexport default PopoverControlled\n"})}),u=Object(l.jsx)("pre",{children:Object(l.jsx)("code",{className:"language-jsx",children:"\n\nimport {\n  Button,\n  UncontrolledPopover,\n  PopoverHeader,\n  PopoverBody\n} from 'reactstrap'\n\nconst PopoverUncontrolled = () => {\n  return (\n    <React.Fragment>\n      <Button color='primary' outline id='uncontrolledPopover'>\n        Uncontrolled\n      </Button>\n      <UncontrolledPopover placement='top' target='uncontrolledPopover'>\n        <PopoverHeader>Uncontrolled Popover</PopoverHeader>\n        <PopoverBody>\n          Macaroon chocolate candy. I love carrot cake gingerbread cake lemon\n          drops. Muffin sugar plum marzipan pie.\n        </PopoverBody>\n      </UncontrolledPopover>\n    </React.Fragment>\n  )\n}\nexport default PopoverUncontrolled\n"})}),h=Object(l.jsx)("pre",{children:Object(l.jsx)("code",{className:"language-jsx",children:"\n\nimport { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap'\n\nconst PopoverPositions = () => {\n  return (\n    <div className='demo-inline-spacing'>\n      <Button color='primary' outline id='popTop'>\n        Top\n      </Button>\n      <UncontrolledPopover placement='top' target='popTop'>\n        <PopoverHeader>Popover Top</PopoverHeader>\n        <PopoverBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cumque.</PopoverBody>\n      </UncontrolledPopover>\n\n      <Button color='primary' outline id='popRight'>\n        Right\n      </Button>\n      <UncontrolledPopover placement='right' target='popRight'>\n        <PopoverHeader>Popover Right</PopoverHeader>\n        <PopoverBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cumque.</PopoverBody>\n      </UncontrolledPopover>\n\n      <Button color='primary' outline id='popBottom'>\n        Bottom\n      </Button>\n      <UncontrolledPopover placement='bottom' target='popBottom'>\n        <PopoverHeader>Popover Bottom</PopoverHeader>\n        <PopoverBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cumque.</PopoverBody>\n      </UncontrolledPopover>\n\n      <Button color='primary' outline id='popLeft'>\n        Left\n      </Button>\n      <UncontrolledPopover placement='left' target='popLeft'>\n        <PopoverHeader>Popover Left</PopoverHeader>\n        <PopoverBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cumque.</PopoverBody>\n      </UncontrolledPopover>\n    </div>\n  )\n}\n\nexport default PopoverPositions\n"})}),b=Object(l.jsx)("pre",{children:Object(l.jsx)("code",{className:"language-jsx",children:"\n\nimport { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap'\n\nconst PopoverTriggers = () => {\n  return (\n    <div className='demo-inline-spacing'>\n      <Button color='primary' outline id='popFocus'>\n        Focus\n      </Button>\n      <UncontrolledPopover trigger='focus' placement='top' target='popFocus'>\n        <PopoverHeader>Focus Trigger</PopoverHeader>\n        <PopoverBody>\n          Focusing on the trigging element makes this popover appear. Blurring (clicking away) makes it disappear. You\n          cannot select this text as the popover will disappear when you try.\n        </PopoverBody>\n      </UncontrolledPopover>\n\n      <Button color='primary' outline id='popClick'>\n        Click\n      </Button>\n      <UncontrolledPopover trigger='click' placement='top' target='popClick'>\n        <PopoverHeader>Click Trigger</PopoverHeader>\n        <PopoverBody>\n          Clicking on the triggering element makes this popover appear. Clicking on it again will make it disappear. You\n          can select this text, but clicking away (somewhere other than the triggering element) will not dismiss this\n          popover.\n        </PopoverBody>\n      </UncontrolledPopover>\n\n      <Button trigger='legacy' color='primary' outline id='popLegacy'>\n        Legacy\n      </Button>\n      <UncontrolledPopover placement='top' target='popLegacy'>\n        <PopoverHeader>Legacy Trigger</PopoverHeader>\n        <PopoverBody>\n          Legacy is a reactstrap special trigger value (outside of bootstrap's spec/standard). Before reactstrap\n          correctly supported click and focus, it had a hybrid which was very useful and has been brought back as\n          trigger=\"legacy\". One advantage of the legacy trigger is that it allows the popover text to be selected while\n          also closing when clicking outside the triggering element and popover itself.\n        </PopoverBody>\n      </UncontrolledPopover>\n    </div>\n  )\n}\nexport default PopoverTriggers\n"})});o.default=()=>(Object(r.useEffect)((()=>{j.a.highlightAll()}),[]),Object(l.jsxs)(r.Fragment,{children:[Object(l.jsx)(i.a,{title:"Popovers",data:[{title:"Components"},{title:"Popovers"}]}),Object(l.jsxs)(n.ib,{children:[Object(l.jsx)(n.B,{md:"6",sm:"12",children:Object(l.jsxs)(c.a,{title:"Controlled Popover",code:m,children:[Object(l.jsxs)(n.u,{children:["For controlled Popover you'll have to manage state of component. Controlled Popover require"," ",Object(l.jsx)("code",{children:"isOpen"})," and ",Object(l.jsx)("code",{children:"toggle"})," props to work."]}),Object(l.jsx)(s,{})]})}),Object(l.jsx)(n.B,{md:"6",sm:"12",children:Object(l.jsxs)(c.a,{title:"Uncontrolled Popover",code:u,children:[Object(l.jsx)(n.u,{children:"You can create an uncontrolled popover without having to manage state. All you have to do is wrap your content inside UncontrolledPopover tag."}),Object(l.jsx)(d,{})]})})]}),Object(l.jsxs)(n.ib,{children:[Object(l.jsx)(n.B,{sm:"12",children:Object(l.jsxs)(c.a,{title:"Popover Positions",code:h,children:[Object(l.jsxs)(n.u,{className:"mb-0",children:["Use prop ",Object(l.jsx)("code",{children:"placement"})," to place you popover at desired position."]}),Object(l.jsx)(p,{})]})}),Object(l.jsx)(n.B,{sm:"12",children:Object(l.jsxs)(c.a,{title:"Popover Triggers",code:b,children:[Object(l.jsxs)(n.u,{className:"mb-0",children:["Use prop ",Object(l.jsx)("code",{children:"trigger"})," for various trigger options. Trigger each popover to see information about the trigger."]}),Object(l.jsx)(a,{})]})})]})]}))},480:function(e,o,t){"use strict";var r=t(1),n=t(129),c=t(2),i=t.n(c),l=t(89),a=t(9);o.a=e=>{const{data:o,title:t}=e;return Object(a.jsx)("div",{className:"content-header row",children:Object(a.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2 w-100",children:Object(a.jsx)("div",{className:"row breadcrumbs-top",children:Object(a.jsxs)("div",{className:"col-12",children:[t?Object(a.jsx)("h2",{className:"content-header-title float-start mb-0",children:t}):"",Object(a.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(a.jsxs)(l.g,{children:[Object(a.jsx)(l.h,{tag:"li",children:Object(a.jsx)(n.b,{to:"/",children:"Dashboard"})}),o.map(((e,t)=>{const c=e.link?n.b:r.Fragment,p=o.length-1===t;return Object(a.jsx)(l.h,{tag:"li",active:!p,className:i()({"text-primary":!p}),children:Object(a.jsx)(c,{...e.link?{to:e.link}:{},children:e.title})},t)}))]})})]})})})})}},485:function(e,o,t){"use strict";var r=t(1),n=t(849),c=t(89),i=t(9);o.a=e=>{const{title:o,children:t,noBody:l,code:a,iconCode:p}=e,[s,d]=Object(r.useState)(!1),g=p||Object(i.jsx)(n.a,{size:15}),j=l?r.Fragment:c.m;return Object(i.jsxs)(c.l,{className:"card-snippet",children:[Object(i.jsxs)(c.p,{children:[Object(i.jsx)(c.v,{tag:"h4",children:o}),Object(i.jsx)("div",{className:"views cursor-pointer",onClick:()=>d(!s),children:g})]}),Object(i.jsx)(j,{children:t}),Object(i.jsx)(c.C,{isOpen:s,children:Object(i.jsx)(c.m,{children:a})})]})}}}]);
//# sourceMappingURL=150.a0292a0a.chunk.js.map