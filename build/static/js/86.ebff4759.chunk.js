(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[86],{1572:function(e,t,s){"use strict";s.r(t);var n=s(1),c=s(771),l=s.n(c),r=s(131),a=s(682),i=s(855),j=s(491),o=s(89),h=(s(746),s(9));t.default=()=>{const[e,t]=Object(n.useState)(""),[s,c]=Object(n.useState)(""),[b,d]=Object(n.useState)([]),[u,x]=Object(n.useState)([]),{getRootProps:m,getInputProps:O}=Object(a.a)({multiple:!1,onDrop:e=>{const s=new FileReader;s.onload=function(){const n=s.result,c=l.a.read(n,{type:"binary"});c.SheetNames.forEach((function(s){((e,s)=>{d(e),t(s)})(l.a.utils.sheet_to_row_object_array(c.Sheets[s]),e[0].name)}))},e.length&&e[0].name.endsWith("xlsx")?s.readAsBinaryString(e[0]):r.b.error((()=>Object(h.jsxs)("p",{className:"mb-0",children:["You can only upload ",Object(h.jsx)("span",{className:"fw-bolder",children:".xlsx"}),", ",Object(h.jsx)("span",{className:"fw-bolder",children:".xls"})," &"," ",Object(h.jsx)("span",{className:"fw-bolder",children:".csv"})," Files!."]})),{style:{minWidth:"380px"}})}}),p=b.length?b.map(((e,t)=>0===t?[...Object.keys(e)]:null)):[],f=s.length?u:b.length&&!s.length?b:null;return Object(h.jsxs)(n.Fragment,{children:[Object(h.jsx)(j.a,{title:"XLSX",subTitle:"Xlsx is a parser and writer for various spreadsheet formats",link:"https://github.com/SheetJS/sheetjs"}),Object(h.jsxs)(o.ib,{className:"import-component",children:[Object(h.jsx)(o.B,{sm:"12",children:Object(h.jsx)(o.l,{children:Object(h.jsx)(o.m,{children:Object(h.jsx)(o.ib,{children:Object(h.jsx)(o.B,{sm:"12",children:Object(h.jsxs)("div",{...m({className:"dropzone"}),children:[Object(h.jsx)("input",{...O()}),Object(h.jsxs)("div",{className:"d-flex align-items-center justify-content-center flex-column",children:[Object(h.jsx)(i.a,{size:64}),Object(h.jsx)("h5",{children:"Drop Files here or click to upload"}),Object(h.jsxs)("p",{className:"text-secondary",children:["Drop files here or click"," ",Object(h.jsx)("a",{href:"/",onClick:e=>e.preventDefault(),children:"browse"})," ","thorough your machine"]})]})]})})})})})}),b.length?Object(h.jsx)(o.B,{sm:"12",children:Object(h.jsxs)(o.l,{children:[Object(h.jsxs)(o.p,{className:"justify-content-between flex-wrap",children:[Object(h.jsx)(o.v,{tag:"h4",children:e}),Object(h.jsxs)("div",{className:"d-flex align-items-center justify-content-end",children:[Object(h.jsx)(o.N,{for:"search-input",className:"me-1",children:"Search"}),Object(h.jsx)(o.K,{id:"search-input",type:"text",bsSize:"sm",value:s,onChange:e=>(e=>{const t=b;let s=[];const n=e.target.value;if(c(n),!n.length)return null;s=t.filter((e=>{const t=Object.keys(e),s=t.filter((t=>e[t].toString().toLowerCase().startsWith(n.toLowerCase()))),c=t.filter((t=>e[t].toString().toLowerCase().includes(n.toLowerCase())));return s.length?e[s]:!s&&c.length?e[c]:null})),x(s),c(n)})(e)})]})]}),Object(h.jsxs)(o.mb,{className:"table-hover-animation",responsive:!0,children:[Object(h.jsx)("thead",{children:Object(h.jsx)("tr",{children:p.length?p[0].map(((e,t)=>Object(h.jsx)("th",{children:e},t))):null})}),Object(h.jsx)("tbody",{children:null!==f&&f.length?f.map(((e,t)=>{const s=Object.keys(e).map(((t,s)=>Object(h.jsx)("td",{children:e[t]},s)));return Object(h.jsx)("tr",{children:s},t)})):null})]})]})}):null]})]})}},491:function(e,t,s){"use strict";var n=s(89),c=s(9);t.a=e=>Object(c.jsx)(n.ib,{className:"mb-2",children:Object(c.jsxs)(n.B,{sm:"12",className:"ms-50",children:[Object(c.jsx)("p",{className:"font-medium-5 mt-1 extension-title","data-tour":"extension-title",children:e.title}),e.link?Object(c.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:e.subTitle}):Object(c.jsx)("p",{className:"text-primary",children:e.subTitle})]})})},681:function(e,t){},746:function(e,t,s){},772:function(e,t){},773:function(e,t){}}]);
//# sourceMappingURL=86.ebff4759.chunk.js.map