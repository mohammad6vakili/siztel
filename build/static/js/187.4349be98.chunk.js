(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[187],{1632:function(e,t,l){"use strict";l.r(t);var i=l(1),n=l.n(i),r=l(89),o=l(538);function s(e){return s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var l=0;l<t.length;l++){var i=t[l];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function b(e,t,l){return t&&c(e.prototype,t),l&&c(e,l),e}function u(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function j(){return j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e},j.apply(this,arguments)}function d(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{},i=Object.keys(l);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(l).filter((function(e){return Object.getOwnPropertyDescriptor(l,e).enumerable})))),i.forEach((function(t){u(e,t,l[t])}))}return e}function h(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}function f(e,t){return f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},f(e,t)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?m(e):t}var O={display:"inline-block",borderRadius:"50%",border:"5px double white",width:30,height:30},x={empty:d({},O,{backgroundColor:"#ccc"}),full:d({},O,{backgroundColor:"black"}),placeholder:d({},O,{backgroundColor:"red"})},v=function(e){return n.a.isValidElement(e)?e:"object"===s(e)&&null!==e?n.a.createElement("span",{style:e}):"[object String]"===Object.prototype.toString.call(e)?n.a.createElement("span",{className:e}):void 0},g=function(e){function t(){return a(this,t),y(this,p(t).apply(this,arguments))}return h(t,e),b(t,[{key:"render",value:function(){var e,t=this.props,l=t.index,i=t.inactiveIcon,r=t.activeIcon,o=t.percent,s=t.direction,a=t.readonly,c=t.onClick,b=t.onMouseMove,j=v(i),d=o<100?{}:{visibility:"hidden"},h=v(r),p=(u(e={display:"inline-block",position:"absolute",overflow:"hidden",top:0},"rtl"===s?"right":"left",0),u(e,"width","".concat(o,"%")),e),f={cursor:a?"inherit":"pointer",display:"inline-block",position:"relative"};function m(e){b&&b(l,e)}function y(e){c&&(e.preventDefault(),c(l,e))}return n.a.createElement("span",{style:f,onClick:y,onMouseMove:m,onTouchMove:m,onTouchEnd:y},n.a.createElement("span",{style:d},j),n.a.createElement("span",{style:p},h))}}]),t}(n.a.PureComponent),k=function(e){function t(e){var l;return a(this,t),(l=y(this,p(t).call(this,e))).state={displayValue:l.props.value,interacting:!1},l.onMouseLeave=l.onMouseLeave.bind(m(m(l))),l.symbolMouseMove=l.symbolMouseMove.bind(m(m(l))),l.symbolClick=l.symbolClick.bind(m(m(l))),l}return h(t,e),b(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=this.props.value!==e.value;this.setState((function(l){return{displayValue:t?e.value:l.displayValue}}))}},{key:"componentDidUpdate",value:function(e,t){if(e.value===this.props.value)return t.interacting&&!this.state.interacting?this.props.onHover():void(this.state.interacting&&this.props.onHover(this.state.displayValue))}},{key:"symbolClick",value:function(e,t){var l=this.calculateDisplayValue(e,t);this.props.onClick(l,t)}},{key:"symbolMouseMove",value:function(e,t){var l=this.calculateDisplayValue(e,t);this.setState({interacting:!this.props.readonly,displayValue:l})}},{key:"onMouseLeave",value:function(){this.setState({displayValue:this.props.value,interacting:!1})}},{key:"calculateDisplayValue",value:function(e,t){var l=this.calculateHoverPercentage(t),i=Math.ceil(l%1*this.props.fractions)/this.props.fractions,n=Math.pow(10,3),r=e+(Math.floor(l)+Math.floor(i*n)/n);return r>0?r>this.props.totalSymbols?this.props.totalSymbols:r:1/this.props.fractions}},{key:"calculateHoverPercentage",value:function(e){var t=e.nativeEvent.type.indexOf("touch")>-1?e.nativeEvent.type.indexOf("touchend")>-1?e.changedTouches[0].clientX:e.touches[0].clientX:e.clientX,l=e.target.getBoundingClientRect(),i="rtl"===this.props.direction?l.right-t:t-l.left;return i<0?0:i/l.width}},{key:"render",value:function(){var e,t=this.props,l=t.readonly,i=t.quiet,r=t.totalSymbols,o=t.value,s=t.placeholderValue,a=t.direction,c=t.emptySymbol,b=t.fullSymbol,u=t.placeholderSymbol,h=t.className,p=t.id,f=t.style,m=t.tabIndex,y=this.state,O=y.displayValue,x=y.interacting,v=[],k=[].concat(c),S=[].concat(b),C=[].concat(u),w=0!==s&&0===o&&!x;e=w?s:i?o:O;for(var M=Math.floor(e),V=0;V<r;V++){var z=void 0;z=V-M<0?100:V-M===0?100*(e-V):0,v.push(n.a.createElement(g,j({key:V,index:V,readonly:l,inactiveIcon:k[V%k.length],activeIcon:w?C[V%S.length]:S[V%S.length],percent:z,direction:a},!l&&{onClick:this.symbolClick,onMouseMove:this.symbolMouseMove,onTouchMove:this.symbolMouseMove,onTouchEnd:this.symbolClick})))}return n.a.createElement("span",j({id:p,style:d({},f,{display:"inline-block",direction:a}),className:h,tabIndex:m,"aria-label":this.props["aria-label"]},!l&&{onMouseLeave:this.onMouseLeave}),v)}}]),t}(n.a.PureComponent);function S(){}S._name="react_rating_noop";var C=function(e){function t(e){var l;return a(this,t),(l=y(this,p(t).call(this,e))).state={value:e.initialRating},l.handleClick=l.handleClick.bind(m(m(l))),l.handleHover=l.handleHover.bind(m(m(l))),l}return h(t,e),b(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.setState({value:e.initialRating})}},{key:"handleClick",value:function(e,t){var l=this,i=this.translateDisplayValueToValue(e);this.props.onClick(i),this.state.value!==i&&this.setState({value:i},(function(){return l.props.onChange(l.state.value)}))}},{key:"handleHover",value:function(e){var t=void 0===e?e:this.translateDisplayValueToValue(e);this.props.onHover(t)}},{key:"translateDisplayValueToValue",value:function(e){var t=e*this.props.step+this.props.start;return t===this.props.start?t+1/this.props.fractions:t}},{key:"tranlateValueToDisplayValue",value:function(e){return void 0===e?0:(e-this.props.start)/this.props.step}},{key:"render",value:function(){var e=this.props,t=e.step,l=e.emptySymbol,i=e.fullSymbol,r=e.placeholderSymbol,o=e.readonly,s=e.quiet,a=e.fractions,c=e.direction,b=e.start,u=e.stop,j=e.id,d=e.className,h=e.style,p=e.tabIndex;return n.a.createElement(k,{id:j,style:h,className:d,tabIndex:p,"aria-label":this.props["aria-label"],totalSymbols:function(e,t,l){return Math.floor((t-e)/l)}(b,u,t),value:this.tranlateValueToDisplayValue(this.state.value),placeholderValue:this.tranlateValueToDisplayValue(this.props.placeholderRating),readonly:o,quiet:s,fractions:a,direction:c,emptySymbol:l,fullSymbol:i,placeholderSymbol:r,onClick:this.handleClick,onHover:this.handleHover})}}]),t}(n.a.PureComponent);C.defaultProps={start:0,stop:5,step:1,readonly:!1,quiet:!1,fractions:1,direction:"ltr",onHover:S,onClick:S,onChange:S,emptySymbol:x.empty,fullSymbol:x.full,placeholderSymbol:x.placeholder};var w=C,M=l(934),V=l(9);var z=e=>{let{filledColor:t,dir:l}=e;return Object(V.jsxs)(r.l,{children:[Object(V.jsx)(r.p,{children:Object(V.jsx)(r.v,{tag:"h4",children:"Basic"})}),Object(V.jsx)(r.m,{children:Object(V.jsx)(w,{direction:l,initialRating:2,emptySymbol:Object(V.jsx)(M.a,{size:32,fill:"#babfc7",stroke:"#babfc7"}),fullSymbol:Object(V.jsx)(M.a,{size:32,fill:t,stroke:t})})})]})};var N=e=>{let{filledColor:t,dir:l}=e;return Object(V.jsxs)(r.l,{children:[Object(V.jsx)(r.p,{children:Object(V.jsx)(r.v,{tag:"h4",children:"Sizes"})}),Object(V.jsxs)(r.m,{children:[Object(V.jsx)("h6",{children:"Large"}),Object(V.jsx)(w,{direction:l,emptySymbol:Object(V.jsx)(M.a,{size:42,fill:"#babfc7",stroke:"#babfc7"}),fullSymbol:Object(V.jsx)(M.a,{size:42,fill:t,stroke:t})}),Object(V.jsx)("h6",{className:"mt-2",children:"Default"}),Object(V.jsx)(w,{direction:l,emptySymbol:Object(V.jsx)(M.a,{size:32,fill:"#babfc7",stroke:"#babfc7"}),fullSymbol:Object(V.jsx)(M.a,{size:32,fill:t,stroke:t})}),Object(V.jsx)("h6",{className:"mt-2",children:"Small"}),Object(V.jsx)(w,{direction:l,emptySymbol:Object(V.jsx)(M.a,{size:20,fill:"#babfc7",stroke:"#babfc7"}),fullSymbol:Object(V.jsx)(M.a,{size:20,fill:t,stroke:t})})]})]})};var R=e=>{let{filledColor:t,dir:l}=e;const[n,r]=Object(i.useState)(0);return Object(V.jsxs)(i.Fragment,{children:[Object(V.jsx)(w,{direction:l,id:"ratings-hover",initialRating:n,onHover:e=>(e=>{void 0!==e&&r(e)})(e),onChange:e=>r(e),emptySymbol:Object(V.jsx)(M.a,{size:32,fill:"#babfc7",stroke:"#babfc7"}),fullSymbol:Object(V.jsx)(M.a,{size:32,fill:t,stroke:t})}),Object(V.jsx)("div",{className:"counter-wrapper mt-1",children:Object(V.jsxs)("span",{className:"fw-bold",children:["Ratings: ",n]})})]})};var E=e=>{let{filledColor:t,dir:l}=e;return Object(V.jsxs)(r.l,{children:[Object(V.jsx)(r.p,{children:Object(V.jsx)(r.v,{tag:"h4",children:"Events"})}),Object(V.jsx)(r.m,{children:Object(V.jsxs)(r.ib,{children:[Object(V.jsxs)(r.B,{md:"6",className:"d-flex flex-column align-items-start mb-md-0 mb-1",children:[Object(V.jsx)(r.u,{className:"fw-semibold mb-25",children:"On Change"}),Object(V.jsx)(w,{direction:l,onChange:e=>alert(e),emptySymbol:Object(V.jsx)(M.a,{size:32,fill:"#babfc7",stroke:"#babfc7"}),fullSymbol:Object(V.jsx)(M.a,{size:32,fill:t,stroke:t})})]}),Object(V.jsxs)(r.B,{md:"6",className:"d-flex flex-column align-items-start",children:[Object(V.jsx)(r.u,{className:"fw-semibold mb-25",children:"On Hover"}),Object(V.jsx)(R,{filledColor:t,dir:l})]})]})})]})};var P=e=>Object(V.jsxs)(r.l,{children:[Object(V.jsx)(r.p,{children:Object(V.jsx)(r.v,{tag:"h4",children:"Numbers"})}),Object(V.jsx)(r.m,{children:Object(V.jsx)(w,{direction:e.dir,emptySymbol:Object(V.jsx)("span",{className:"font-medium-3 me-50",children:"-"}),fullSymbol:[1,2,3,4,5].map((e=>Object(V.jsx)("span",{className:"font-medium-3 me-50",children:e})))})})]});var T=e=>{let{filledColor:t,dir:l}=e;return Object(V.jsxs)(r.l,{children:[Object(V.jsx)(r.p,{children:Object(V.jsx)(r.v,{tag:"h4",children:"Readonly"})}),Object(V.jsx)(r.m,{children:Object(V.jsx)(w,{readonly:!0,direction:l,initialRating:2,emptySymbol:Object(V.jsx)(M.a,{size:32,fill:"#babfc7",stroke:"#babfc7"}),fullSymbol:Object(V.jsx)(M.a,{size:32,fill:t,stroke:t})})})]})},_=l(814),B=l(851),D=l(849),H=l(850),I=l(848);var L=e=>{let{dir:t}=e;return Object(V.jsxs)(r.l,{children:[Object(V.jsx)(r.p,{children:Object(V.jsx)(r.v,{tag:"h4",children:"Custom SVG"})}),Object(V.jsx)(r.m,{children:Object(V.jsx)(w,{emptySymbol:Object(V.jsx)(_.a,{size:32,stroke:"#babfc7"}),fullSymbol:[Object(V.jsx)(B.a,{size:32,stroke:"#babfc7"}),Object(V.jsx)(D.a,{size:32,stroke:"#babfc7"}),Object(V.jsx)(H.a,{size:32,stroke:"#babfc7"}),Object(V.jsx)(I.a,{size:32,stroke:"#babfc7"})],stop:4,direction:t})})]})};var F=e=>{let{filledColor:t,dir:l}=e;return Object(V.jsxs)(r.l,{children:[Object(V.jsx)(r.p,{children:Object(V.jsx)(r.v,{tag:"h4",children:"Fractional"})}),Object(V.jsx)(r.m,{children:Object(V.jsx)(w,{fractions:2,direction:l,initialRating:2.5,emptySymbol:Object(V.jsx)(M.a,{size:32,fill:"#babfc7",stroke:"#babfc7"}),fullSymbol:Object(V.jsx)(M.a,{size:32,fill:t,stroke:t})})})]})};var q=e=>{let{filledColor:t,dir:l}=e;const[n,o]=Object(i.useState)(0);return Object(V.jsxs)(r.l,{children:[Object(V.jsx)(r.p,{children:Object(V.jsx)(r.v,{tag:"h4",children:"Controlled Ratings"})}),Object(V.jsxs)(r.m,{children:[Object(V.jsx)(w,{direction:l,initialRating:n,onChange:e=>o(e),emptySymbol:Object(V.jsx)(M.a,{size:32,fill:"#babfc7",stroke:"#babfc7"}),fullSymbol:Object(V.jsx)(M.a,{size:32,fill:t,stroke:t})}),Object(V.jsxs)("div",{className:"demo-inline-spacing",children:[Object(V.jsx)(r.i,{color:"primary",onClick:()=>o(0),outline:!0,children:"Reset"}),Object(V.jsx)(r.i,{color:"primary",onClick:()=>alert(n),outline:!0,children:"Get Ratings"}),Object(V.jsx)(r.i,{color:"primary",onClick:()=>o(3),outline:!0,children:"Set Ratings to 3"})]})]})]})},A=l(495),U=l(142);t.default=()=>{const[e]=Object(o.a)(),t=Object(i.useContext)(U.a);return Object(V.jsxs)(i.Fragment,{children:[Object(V.jsx)(A.a,{title:"React Rating",subTitle:"A rating react component with custom symbols",link:"https://github.com/dreyescat/react-rating"}),Object(V.jsxs)(r.ib,{className:"match-height",children:[Object(V.jsx)(r.B,{lg:6,xs:12,children:Object(V.jsx)(z,{dir:e?"rtl":"ltr",filledColor:t.colors.warning.main})}),Object(V.jsx)(r.B,{lg:6,xs:12,children:Object(V.jsx)(T,{dir:e?"rtl":"ltr",filledColor:t.colors.warning.main})}),Object(V.jsx)(r.B,{lg:6,xs:12,children:Object(V.jsx)(F,{dir:e?"rtl":"ltr",filledColor:t.colors.warning.main})}),Object(V.jsx)(r.B,{lg:6,xs:12,children:Object(V.jsx)(L,{dir:e?"rtl":"ltr",filledColor:t.colors.warning.main})}),Object(V.jsx)(r.B,{lg:6,xs:12,children:Object(V.jsx)(P,{dir:e?"rtl":"ltr",filledColor:t.colors.warning.main})}),Object(V.jsx)(r.B,{lg:6,xs:12,children:Object(V.jsx)(E,{dir:e?"rtl":"ltr",filledColor:t.colors.warning.main})}),Object(V.jsx)(r.B,{lg:6,xs:12,children:Object(V.jsx)(q,{dir:e?"rtl":"ltr",filledColor:t.colors.warning.main})}),Object(V.jsx)(r.B,{lg:6,xs:12,children:Object(V.jsx)(N,{dir:e?"rtl":"ltr",filledColor:t.colors.warning.main})})]})]})}},495:function(e,t,l){"use strict";var i=l(89),n=l(9);t.a=e=>Object(n.jsx)(i.ib,{className:"mb-2",children:Object(n.jsxs)(i.B,{sm:"12",className:"ms-50",children:[Object(n.jsx)("p",{className:"font-medium-5 mt-1 extension-title","data-tour":"extension-title",children:e.title}),e.link?Object(n.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:e.subTitle}):Object(n.jsx)("p",{className:"text-primary",children:e.subTitle})]})})}}]);
//# sourceMappingURL=187.4349be98.chunk.js.map