(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[49],{1423:function(e,t,n){window,e.exports=function(e,t){return r={},n.m=a=[function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){e.exports=n(3)},function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),c=function(e){var t,n=null;return document.implementation&&document.implementation.createHTMLDocument&&((t=document.implementation.createHTMLDocument("foo")).documentElement.innerHTML=e,n=t.getElementsByTagName("body")[0]),n},i=function(e,t,n){var a,c=e.textContent;return""===c.trim()?{chunk:(a=n,{text:" ",inlines:[new r.OrderedSet],entities:[a],blocks:[]})}:{chunk:{text:c,inlines:Array(c.length).fill(t),entities:Array(c.length).fill(n),blocks:[]}}},l=function(){return{text:"\n",inlines:[new r.OrderedSet],entities:new Array(1),blocks:[]}},s=function(){return{text:"",inlines:[],entities:[],blocks:[]}},o=function(e,t){return{text:"",inlines:[],entities:[],blocks:[{type:e,depth:0,data:t||new r.Map({})}]}},d=function(e,t,n){return{text:"\r",inlines:[],entities:[],blocks:[{type:e,depth:Math.max(0,Math.min(4,t)),data:n||new r.Map({})}]}},u=function(e){return{text:"\r ",inlines:[new r.OrderedSet],entities:[e],blocks:[{type:"atomic",depth:0,data:new r.Map({})}]}},b=function(e,t){return{text:e.text+t.text,inlines:e.inlines.concat(t.inlines),entities:e.entities.concat(t.entities),blocks:e.blocks.concat(t.blocks)}},m=new r.Map({"header-one":{element:"h1"},"header-two":{element:"h2"},"header-three":{element:"h3"},"header-four":{element:"h4"},"header-five":{element:"h5"},"header-six":{element:"h6"},"unordered-list-item":{element:"li",wrapper:"ul"},"ordered-list-item":{element:"li",wrapper:"ol"},blockquote:{element:"blockquote"},code:{element:"pre"},atomic:{element:"figure"},unstyled:{element:"p",aliasedElements:["div"]}}),h={code:"CODE",del:"STRIKETHROUGH",em:"ITALIC",strong:"BOLD",ins:"UNDERLINE",sub:"SUBSCRIPT",sup:"SUPERSCRIPT"};function j(e){return e.style.textAlign?new r.Map({"text-align":e.style.textAlign}):e.style.marginLeft?new r.Map({"margin-left":e.style.marginLeft}):void 0}var f=function(e){var t=void 0;if(e instanceof HTMLAnchorElement){var n={};t=e.dataset&&void 0!==e.dataset.mention?(n.url=e.href,n.text=e.innerHTML,n.value=e.dataset.value,a.Entity.__create("MENTION","IMMUTABLE",n)):(n.url=e.getAttribute&&e.getAttribute("href")||e.href,n.title=e.innerHTML,n.targetOption=e.target,a.Entity.__create("LINK","MUTABLE",n))}return t};n.d(t,"default",(function(){return v}));var g=" ",p=new RegExp("&nbsp;","g"),O=!0;function x(e,t,n,r,c,g){var p=e.nodeName.toLowerCase();if(g){var v=g(p,e);if(v){var y=a.Entity.__create(v.type,v.mutability,v.data||{});return{chunk:u(y)}}}if("#text"===p&&"\n"!==e.textContent)return i(e,t,c);if("br"===p)return{chunk:l()};if("img"===p&&e instanceof HTMLImageElement){var N={};N.src=e.getAttribute&&e.getAttribute("src")||e.src,N.alt=e.alt,N.height=e.style.height,N.width=e.style.width,e.style.float&&(N.alignment=e.style.float);var k=a.Entity.__create("IMAGE","MUTABLE",N);return{chunk:u(k)}}if("video"===p&&e instanceof HTMLVideoElement){var w={};w.src=e.getAttribute&&e.getAttribute("src")||e.src,w.alt=e.alt,w.height=e.style.height,w.width=e.style.width,e.style.float&&(w.alignment=e.style.float);var E=a.Entity.__create("VIDEO","MUTABLE",w);return{chunk:u(E)}}if("iframe"===p&&e instanceof HTMLIFrameElement){var M={};M.src=e.getAttribute&&e.getAttribute("src")||e.src,M.height=e.height,M.width=e.width;var S=a.Entity.__create("EMBEDDED_LINK","MUTABLE",M);return{chunk:u(S)}}var C,T=function(e,t){var n=m.filter((function(n){return n.element===e&&(!n.wrapper||n.wrapper===t)||n.wrapper===e||n.aliasedElements&&-1<n.aliasedElements.indexOf(e)})).keySeq().toSet().toArray();if(1===n.length)return n[0]}(p,r);T&&("ul"===p||"ol"===p?(r=p,n+=1):("unordered-list-item"!==T&&"ordered-list-item"!==T&&(r="",n=-1),O?(C=o(T,j(e)),O=!1):C=d(T,n,j(e)))),C=C||s(),t=function(e,t,n){var a,r=h[e];if(r)a=n.add(r).toOrderedSet();else if(t instanceof HTMLElement){var c=t;a=(a=n).withMutations((function(e){var t=c.style.color,n=c.style.backgroundColor,a=c.style.fontSize,r=c.style.fontFamily.replace(/^"|"$/g,""),i=c.style.fontWeight,l=c.style.textDecoration,s=c.style.fontStyle;t&&e.add("color-".concat(t.replace(/ /g,""))),n&&e.add("bgcolor-".concat(n.replace(/ /g,""))),a&&e.add("fontsize-".concat(a.replace(/px$/g,""))),r&&e.add("fontfamily-".concat(r)),"bold"===i&&e.add(h.strong),"underline"===l&&e.add(h.ins),"italic"===s&&e.add(h.em)})).toOrderedSet()}return a}(p,e,t);for(var L=e.firstChild;L;){var A=x(L,t,n,r,f(L)||c,g).chunk;C=b(C,A),L=L.nextSibling}return{chunk:C}}function v(e,t){var n,i,l,s=(n=t,i=e.trim().replace(p,g),(l=c(i))?(O=!0,{chunk:x(l,new r.OrderedSet,-1,"",void 0,n).chunk}):null);if(s){var o=s.chunk,d=new r.OrderedMap({});o.entities&&o.entities.forEach((function(e){e&&(d=d.set(e,a.Entity.__get(e)))}));var u=0;return{contentBlocks:o.text.split("\r").map((function(e,t){var n=u+e.length,c=o&&o.inlines.slice(u,n),i=o&&o.entities.slice(u,n),l=new r.List(c.map((function(e,t){var n={style:e,entity:null};return i[t]&&(n.entity=i[t]),a.CharacterMetadata.create(n)})));return u=n,new a.ContentBlock({key:Object(a.genKey)(),type:o&&o.blocks[t]&&o.blocks[t].type||"unstyled",depth:o&&o.blocks[t]&&o.blocks[t].depth,data:o&&o.blocks[t]&&o.blocks[t].data||new r.Map({}),text:e,characterList:l})})),entityMap:d}}return null}}],n.c=r,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2);function n(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return a[e].call(t.exports,t,t.exports,n),t.l=!0,t.exports}var a,r}(n(514),n(644))},1424:function(e,t,n){},1570:function(e,t,n){"use strict";n.r(t);var a=n(16),r=n(1),c=n(5),i=n.n(c),l=n(518),s=n(1423),o=n.n(s),d=n(643),u=n(644),b=n(500),m=n(499),h=n(510),j=n(96),f=(n(613),n(1424),n(533),n(666),n(11));t.default=function(){var e=o()("\n  <p>Cupcake ipsum dolor sit. Amet dessert donut candy chocolate bar cotton dessert candy chocolate. Candy muffin danish. Macaroon brownie jelly beans marzipan cheesecake oat cake. Carrot cake macaroon chocolate cake. Jelly brownie jelly. Marzipan pie sweet roll.</p>\n  <p>Liquorice drag\xe9e cake chupa chups pie cotton candy jujubes bear claw sesame snaps. Fruitcake chupa chups chocolate bonbon lemon drops croissant caramels lemon drops. Candy jelly cake marshmallow jelly beans drag\xe9e macaroon. Gummies sugar plum fruitcake. Candy canes candy cupcake caramels cotton candy jujubes fruitcake.</p>\n  "),t=u.ContentState.createFromBlockArray(e.contentBlocks),n=u.EditorState.createWithContent(t),c=Object(r.useState)(null),s=Object(a.a)(c,2),g=s[0],p=s[1],O=Object(r.useState)(""),x=Object(a.a)(O,2),v=x[0],y=x[1],N=Object(r.useState)(""),k=Object(a.a)(N,2),w=k[0],E=k[1],M=Object(r.useState)(""),S=Object(a.a)(M,2),C=S[0],T=S[1],L=Object(r.useState)(n),A=Object(a.a)(L,2),B=A[0],_=A[1],I=Object(r.useState)([]),D=Object(a.a)(I,2),H=D[0],P=D[1],F=Object(r.useState)(null),U=Object(a.a)(F,2),R=U[0],K=U[1],z=Object(r.useState)("banner.jpg"),q=Object(a.a)(z,2),W=q[0],G=q[1];Object(r.useEffect)((function(){i.a.get("/blog/list/data/edit").then((function(e){p(e.data),y(e.data.blogTitle),E(e.data.slug),P(e.data.blogCategories),K(e.data.featuredImage),T(e.data.status)}))}),[]);return Object(f.jsxs)("div",{className:"blog-edit-wrapper",children:[Object(f.jsx)(m.a,{title:"Blog Edit",data:[{title:"Pages"},{title:"Blog"},{title:"Edit"}]}),null!==g?Object(f.jsx)(j.ib,{children:Object(f.jsx)(j.B,{sm:"12",children:Object(f.jsx)(j.l,{children:Object(f.jsxs)(j.m,{children:[Object(f.jsxs)("div",{className:"d-flex",children:[Object(f.jsx)("div",{children:Object(f.jsx)(b.a,{className:"me-75",img:g.avatar,imgWidth:"38",imgHeight:"38"})}),Object(f.jsxs)("div",{children:[Object(f.jsx)("h6",{className:"mb-25",children:g.userFullName}),Object(f.jsx)(j.u,{children:g.createdTime})]})]}),Object(f.jsx)(j.H,{className:"mt-2",onSubmit:function(e){return e.preventDefault()},children:Object(f.jsxs)(j.ib,{children:[Object(f.jsxs)(j.B,{md:"6",className:"mb-2",children:[Object(f.jsx)(j.N,{className:"form-label",for:"blog-edit-title",children:"Title"}),Object(f.jsx)(j.K,{id:"blog-edit-title",value:v,onChange:function(e){return y(e.target.value)}})]}),Object(f.jsxs)(j.B,{md:"6",className:"mb-2",children:[Object(f.jsx)(j.N,{className:"form-label",for:"blog-edit-category",children:"Category"}),Object(f.jsx)(l.a,{id:"blog-edit-category",isClearable:!1,theme:h.h,value:H,isMulti:!0,name:"colors",options:[{value:"fashion",label:"Fashion"},{value:"gaming",label:"Gaming"},{value:"quote",label:"Quote"},{value:"video",label:"Video"},{value:"food",label:"Food"}],className:"react-select",classNamePrefix:"select",onChange:function(e){return P(e)}})]}),Object(f.jsxs)(j.B,{md:"6",className:"mb-2",children:[Object(f.jsx)(j.N,{className:"form-label",for:"blog-edit-slug",children:"Slug"}),Object(f.jsx)(j.K,{id:"blog-edit-slug",value:w,onChange:function(e){return E(e.target.value)}})]}),Object(f.jsxs)(j.B,{md:"6",className:"mb-2",children:[Object(f.jsx)(j.N,{className:"form-label",for:"blog-edit-status",children:"Status"}),Object(f.jsxs)(j.K,{type:"select",id:"blog-edit-status",value:C,onChange:function(e){return T(e.target.value)},children:[Object(f.jsx)("option",{value:"Published",children:"Published"}),Object(f.jsx)("option",{value:"Pending",children:"Pending"}),Object(f.jsx)("option",{value:"Draft",children:"Draft"})]})]}),Object(f.jsxs)(j.B,{sm:"12",className:"mb-2",children:[Object(f.jsx)(j.N,{className:"form-label",children:"Content"}),Object(f.jsx)(d.Editor,{editorState:B,onEditorStateChange:function(e){return _(e)}})]}),Object(f.jsx)(j.B,{className:"mb-2",sm:"12",children:Object(f.jsxs)("div",{className:"border rounded p-2",children:[Object(f.jsx)("h4",{className:"mb-1",children:"Featured Image"}),Object(f.jsxs)("div",{className:"d-flex flex-column flex-md-row",children:[Object(f.jsx)("img",{className:"rounded me-2 mb-1 mb-md-0",src:R,alt:"featured img",width:"170",height:"110"}),Object(f.jsxs)("div",{children:[Object(f.jsx)("small",{className:"text-muted",children:"Required image resolution 800x400, image size 10mb."}),Object(f.jsx)("p",{className:"my-50",children:Object(f.jsx)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:"C:/fakepath/".concat(W)})}),Object(f.jsx)("div",{className:"d-inline-block",children:Object(f.jsx)("div",{className:"mb-0",children:Object(f.jsx)(j.K,{type:"file",id:"exampleCustomFileBrowser",name:"customFile",onChange:function(e){var t=new FileReader,n=e.target.files;G(n[0].name),t.onload=function(){K(t.result)},t.readAsDataURL(n[0])},accept:".jpg, .png, .gif"})})})]})]})]})}),Object(f.jsxs)(j.B,{className:"mt-50",children:[Object(f.jsx)(j.i,{color:"primary",className:"me-1",children:"Save Changes"}),Object(f.jsx)(j.i,{color:"secondary",outline:!0,children:"Cancel"})]})]})})]})})})}):null]})}},499:function(e,t,n){"use strict";var a=n(21),r=n(1),c=n(135),i=n(2),l=n.n(i),s=n(96),o=n(11);t.a=function(e){var t=e.data,n=e.title;return Object(o.jsx)("div",{className:"content-header row",children:Object(o.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2 w-100",children:Object(o.jsx)("div",{className:"row breadcrumbs-top",children:Object(o.jsxs)("div",{className:"col-12",children:[n?Object(o.jsx)("h2",{className:"content-header-title float-start mb-0",children:n}):"",Object(o.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(o.jsxs)(s.g,{children:[Object(o.jsx)(s.h,{tag:"li",children:Object(o.jsx)(c.b,{to:"/",children:"Dashboard"})}),t.map((function(e,n){var i=e.link?c.b:r.Fragment,d=t.length-1===n;return Object(o.jsx)(s.h,{tag:"li",active:!d,className:l()({"text-primary":!d}),children:Object(o.jsx)(i,Object(a.a)(Object(a.a)({},e.link?{to:e.link}:{}),{},{children:e.title}))},n)}))]})})]})})})})}},500:function(e,t,n){"use strict";var a=n(21),r=n(31),c=n(137),i=n(1),l=n(2),s=n.n(l),o=n(96),d=n(11),u=["img","size","icon","color","status","badgeUp","content","tag","initials","imgWidth","className","badgeText","imgHeight","badgeColor","imgClassName","contentStyles"],b=Object(i.forwardRef)((function(e,t){var n,i,l=e.img,b=e.size,m=e.icon,h=e.color,j=e.status,f=e.badgeUp,g=e.content,p=e.tag,O=e.initials,x=e.imgWidth,v=e.className,y=e.badgeText,N=e.imgHeight,k=e.badgeColor,w=e.imgClassName,E=e.contentStyles,M=Object(c.a)(e,u);return Object(d.jsxs)(p,Object(a.a)(Object(a.a)({className:s()("avatar",(n={},Object(r.a)(n,v,v),Object(r.a)(n,"bg-".concat(h),h),Object(r.a)(n,"avatar-".concat(b),b),n)),ref:t},M),{},{children:[!1===l||void 0===l?Object(d.jsxs)("span",{className:s()("avatar-content",{"position-relative":f}),style:E,children:[O?function(e){var t=[];return e.split(" ").forEach((function(e){t.push(e[0])})),t.join("")}(g):g,m||null,f?Object(d.jsx)(o.f,{color:k||"primary",className:"badge-sm badge-up",pill:!0,children:y||"0"}):null]}):Object(d.jsx)("img",{className:s()(Object(r.a)({},w,w)),src:l,alt:"avatarImg",height:N&&!b?N:32,width:x&&!b?x:32}),j?Object(d.jsx)("span",{className:s()((i={},Object(r.a)(i,"avatar-status-".concat(j),j),Object(r.a)(i,"avatar-status-".concat(b),b),i))}):null]}))}));t.a=b,b.defaultProps={tag:"div"}},613:function(e,t,n){},666:function(e,t,n){}}]);
//# sourceMappingURL=49.73411d27.chunk.js.map