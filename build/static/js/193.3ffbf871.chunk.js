(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[193],{1700:function(e,t,a){"use strict";a.r(t);var s=a(1),l=a(481),n=a(89),c=a(595),r=a(172),i=a(130),o=a(500),g=a.n(o),j=a(841),m=a(488),b=a.n(m),h=a(9);const d=()=>{const e=Object(i.b)(),t=Object(i.c)((e=>e.dataTables)),[a,l]=Object(s.useState)(1),[o,m]=Object(s.useState)(7),[d,p]=Object(s.useState)("");Object(s.useEffect)((()=>{e(Object(r.b)({page:a,perPage:o,q:d}))}),[e]);return Object(h.jsx)(s.Fragment,{children:Object(h.jsxs)(n.l,{children:[Object(h.jsx)(n.p,{className:"border-bottom",children:Object(h.jsx)(n.v,{tag:"h4",children:"Server Side"})}),Object(h.jsxs)(n.ib,{className:"mx-0 mt-1 mb-50",children:[Object(h.jsx)(n.B,{sm:"6",children:Object(h.jsxs)("div",{className:"d-flex align-items-center",children:[Object(h.jsx)(n.N,{for:"sort-select",children:"show"}),Object(h.jsxs)(n.K,{className:"dataTable-select",type:"select",id:"sort-select",value:o,onChange:t=>(t=>{e(Object(r.b)({page:a,perPage:parseInt(t.target.value),q:d})),m(parseInt(t.target.value))})(t),children:[Object(h.jsx)("option",{value:7,children:"7"}),Object(h.jsx)("option",{value:10,children:"10"}),Object(h.jsx)("option",{value:25,children:"25"}),Object(h.jsx)("option",{value:50,children:"50"}),Object(h.jsx)("option",{value:75,children:"75"}),Object(h.jsx)("option",{value:100,children:"100"})]}),Object(h.jsx)(n.N,{for:"sort-select",children:"entries"})]})}),Object(h.jsxs)(n.B,{className:"d-flex align-items-center justify-content-sm-end mt-sm-0 mt-1",sm:"6",children:[Object(h.jsx)(n.N,{className:"me-1",for:"search-input",children:"Search"}),Object(h.jsx)(n.K,{className:"dataTable-filter",type:"text",bsSize:"sm",id:"search-input",value:d,onChange:t=>{p(t.target.value),e(Object(r.b)({page:a,perPage:o,q:t.target.value}))}})]})]}),Object(h.jsx)("div",{className:"react-dataTable",children:Object(h.jsx)(b.a,{noHeader:!0,pagination:!0,paginationServer:!0,className:"react-dataTable",columns:c.h,sortIcon:Object(h.jsx)(j.a,{size:10}),paginationComponent:()=>{const s=Math.ceil(t.total/o);return Object(h.jsx)(g.a,{previousLabel:"",nextLabel:"",breakLabel:"...",pageCount:Math.ceil(s)||1,marginPagesDisplayed:2,pageRangeDisplayed:2,activeClassName:"active",forcePage:0!==a?a-1:0,onPageChange:t=>(t=>{e(Object(r.b)({page:t.selected+1,perPage:o,q:d})),l(t.selected+1)})(t),activeClassName:"active",pageClassName:"page-item",breakClassName:"page-item",nextLinkClassName:"page-link",pageLinkClassName:"page-link",breakLinkClassName:"page-link",previousLinkClassName:"page-link",nextClassName:"page-item next-item",previousClassName:"page-item prev-item",containerClassName:"pagination react-paginate separated-pagination pagination-sm justify-content-end pe-1 mt-1"})},data:(()=>{const e={q:d},a=Object.keys(e).some((function(t){return e[t].length>0}));return t.data.length>0?t.data:0===t.data.length&&a?[]:t.allData.slice(0,o)})()})})]})})};var p=Object(s.memo)(d),u=a(499),O=a.n(u);a(503);var x=()=>{const[e,t]=Object(s.useState)(""),[a,l]=Object(s.useState)(""),[r,i]=Object(s.useState)(""),[o,m]=Object(s.useState)(""),[d,p]=Object(s.useState)(0),[u,x]=Object(s.useState)(""),[N,C]=Object(s.useState)(""),[v,f]=Object(s.useState)([]),L=()=>a.length||r.length||u.length||o.length||N.length||e.length?v:c.d,w=e=>{const s=[];let l=[];e.map((e=>{const t=new Date(e),a=t.getFullYear();let l=(1+t.getMonth()).toString();l=l.length>1?l:"0".concat(l);let n=t.getDate().toString();return n=n.length>1?n:"0".concat(n),s.push("".concat(l,"/").concat(n,"/").concat(a)),!0})),t(e),e.length&&(l=(u.length||a.length||r.length||o.length||N.length?v:c.d).filter((e=>new Date(e.start_date).getTime()>=new Date(s[0]).getTime()&&new Date(e.start_date).getTime()<=new Date(s[1]).getTime())),f([...l]),t(e))};return Object(h.jsx)(s.Fragment,{children:Object(h.jsxs)(n.l,{children:[Object(h.jsx)(n.p,{className:"border-bottom",children:Object(h.jsx)(n.v,{tag:"h4",children:"Advance Search"})}),Object(h.jsx)(n.m,{children:Object(h.jsxs)(n.ib,{className:"mt-1 mb-50",children:[Object(h.jsxs)(n.B,{lg:"4",md:"6",className:"mb-1",children:[Object(h.jsx)(n.N,{className:"form-label",for:"name",children:"Name:"}),Object(h.jsx)(n.K,{id:"name",placeholder:"Bruce Wayne",value:a,onChange:t=>{const a=t.target.value;let s=[];l(a),a.length&&(s=(u.length||r.length||o.length||N.length||e.length?v:c.d).filter((e=>{const t=e.full_name.toLowerCase().startsWith(a.toLowerCase()),s=e.full_name.toLowerCase().includes(a.toLowerCase());return t||(!t&&s?s:null)})),f([...s]),l(a))}})]}),Object(h.jsxs)(n.B,{lg:"4",md:"6",className:"mb-1",children:[Object(h.jsx)(n.N,{className:"form-label",for:"email",children:"Email:"}),Object(h.jsx)(n.K,{type:"email",id:"email",placeholder:"Bwayne@email.com",value:u,onChange:t=>{const s=t.target.value;let l=[];x(s),s.length&&(l=(a.length||r.length||o.length||N.length||e.length?v:c.d).filter((e=>{const t=e.email.toLowerCase().startsWith(s.toLowerCase()),a=e.email.toLowerCase().includes(s.toLowerCase());return t||(!t&&a?a:null)})),f([...l]),x(s))}})]}),Object(h.jsxs)(n.B,{lg:"4",md:"6",className:"mb-1",children:[Object(h.jsx)(n.N,{className:"form-label",for:"post",children:"Post:"}),Object(h.jsx)(n.K,{id:"post",placeholder:"Web Designer",value:r,onChange:t=>{const s=t.target.value;let l=[];i(s),s.length&&(l=(u.length||a.length||o.length||N.length||e.length?v:c.d).filter((e=>{const t=e.post.toLowerCase().startsWith(s.toLowerCase()),a=e.post.toLowerCase().includes(s.toLowerCase());return t||(!t&&a?a:null)})),f([...l]),i(s))}})]}),Object(h.jsxs)(n.B,{lg:"4",md:"6",className:"mb-1",children:[Object(h.jsx)(n.N,{className:"form-label",for:"city",children:"City:"}),Object(h.jsx)(n.K,{id:"city",placeholder:"San Diego",value:o,onChange:t=>{const s=t.target.value;let l=[];m(s),s.length&&(l=(u.length||a.length||r.length||N.length||e.length?v:c.d).filter((e=>{const t=e.city.toLowerCase().startsWith(s.toLowerCase()),a=e.city.toLowerCase().includes(s.toLowerCase());return t||(!t&&a?a:null)})),f([...l]),m(s))}})]}),Object(h.jsxs)(n.B,{lg:"4",md:"6",className:"mb-1",children:[Object(h.jsx)(n.N,{className:"form-label",for:"date",children:"Date:"}),Object(h.jsx)(O.a,{className:"form-control",id:"date",value:e,options:{mode:"range",dateFormat:"m/d/Y"},onChange:e=>w(e)})]}),Object(h.jsxs)(n.B,{lg:"4",md:"6",className:"mb-1",children:[Object(h.jsx)(n.N,{className:"form-label",for:"salary",children:"Salary:"}),Object(h.jsx)(n.K,{id:"salary",placeholder:"10000",value:N,onChange:t=>{const s=t.target.value;let l=[];C(s),s.length&&(l=(u.length||a.length||r.length||o.length||e.length?v:c.d).filter((e=>{const t=e.salary.toLowerCase().startsWith(s.toLowerCase()),a=e.salary.toLowerCase().includes(s.toLowerCase());return t||(!t&&a?a:null)})),f([...l]),C(s))}})]})]})}),Object(h.jsx)("div",{className:"react-dataTable",children:Object(h.jsx)(b.a,{noHeader:!0,pagination:!0,columns:c.a,paginationPerPage:7,className:"react-dataTable",sortIcon:Object(h.jsx)(j.a,{size:10}),paginationDefaultPage:d+1,paginationComponent:()=>Object(h.jsx)(g.a,{previousLabel:"",nextLabel:"",forcePage:d,onPageChange:e=>(e=>p(e.selected))(e),pageCount:Math.ceil(L().length/7)||1,breakLabel:"...",pageRangeDisplayed:2,marginPagesDisplayed:2,activeClassName:"active",pageClassName:"page-item",breakClassName:"page-item",nextLinkClassName:"page-link",pageLinkClassName:"page-link",breakLinkClassName:"page-link",previousLinkClassName:"page-link",nextClassName:"page-item next-item",previousClassName:"page-item prev-item",containerClassName:"pagination react-paginate separated-pagination pagination-sm justify-content-end pe-1 mt-1"}),data:L()})})]})})};a(520);t.default=()=>Object(h.jsxs)(s.Fragment,{children:[Object(h.jsx)(l.a,{title:"Datatables Advance",data:[{title:"Datatables"},{title:"Datatables Advance"}]}),Object(h.jsxs)(n.ib,{children:[Object(h.jsx)(n.B,{sm:"12",children:Object(h.jsx)(p,{})}),Object(h.jsx)(n.B,{sm:"12",children:Object(h.jsx)(x,{})})]})]})}}]);
//# sourceMappingURL=193.3ffbf871.chunk.js.map