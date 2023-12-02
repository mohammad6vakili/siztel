(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[121],{1629:function(e,s,t){"use strict";t.r(s);var a=t(1),c=t(89),r=t(479),l=t(502),n=t.n(l),i=t(899),o=t(838),d=t(9);var j=e=>{const s={chart:{height:300,type:"radar",dropShadow:{enabled:!0,blur:8,left:1,top:1,opacity:.2},toolbar:{show:!1},offsetY:5},stroke:{width:0},dataLabels:{background:{foreColor:["#ebe9f1"]}},legend:{show:!1},colors:[e.primary,e.info],plotOptions:{radar:{polygons:{strokeColors:["#ebe9f1","transparent","transparent","transparent","transparent","transparent"],connectorColors:"transparent"}}},fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:[e.primary,e.info],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},labels:["Jan","Feb","Mar","Apr","May","Jun"],markers:{size:0},yaxis:{show:!1},grid:{show:!1,padding:{bottom:-27}}};return Object(d.jsxs)(c.l,{children:[Object(d.jsxs)(c.p,{className:"d-flex justify-content-between align-items-start pb-1",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)(c.v,{className:"mb-25",tag:"h4",children:"Sales"}),Object(d.jsx)(c.u,{children:"Last 6 months"})]}),Object(d.jsxs)(c.wb,{className:"chart-dropdown",children:[Object(d.jsx)(c.G,{color:"",className:"bg-transparent btn-sm border-0 p-50",children:Object(d.jsx)(i.a,{size:18,className:"cursor-pointer"})}),Object(d.jsxs)(c.F,{end:!0,children:[Object(d.jsx)(c.E,{className:"w-100",children:"Last 28 Days"}),Object(d.jsx)(c.E,{className:"w-100",children:"Last Month"}),Object(d.jsx)(c.E,{className:"w-100",children:"Last Year"})]})]})]}),Object(d.jsxs)(c.m,{children:[Object(d.jsx)("div",{className:"d-inline-block me-1",children:Object(d.jsxs)("div",{className:"d-flex align-items-center",children:[Object(d.jsx)(o.a,{size:13,className:"text-primary me-50"}),Object(d.jsx)("h6",{className:"mb-0",children:"Sales"})]})}),Object(d.jsx)("div",{className:"d-inline-block",children:Object(d.jsxs)("div",{className:"d-flex align-items-center",children:[Object(d.jsx)(o.a,{size:13,className:"text-info me-50"}),Object(d.jsx)("h6",{className:"mb-0",children:"Visits"})]})}),Object(d.jsx)(n.a,{options:s,series:[{name:"Sales",data:[90,50,86,40,100,20]},{name:"Visit",data:[70,75,70,76,20,85]}],type:"radar",height:300})]})]})},b=t(798);var m=e=>{const s={chart:{toolbar:{show:!1},zoom:{enabled:!1},type:"line",dropShadow:{enabled:!0,top:18,left:2,blur:5,opacity:.2},offsetX:-10},stroke:{curve:"smooth",width:4},grid:{borderColor:"#ebe9f1",padding:{top:-20,bottom:5,left:20}},legend:{show:!1},colors:["#df87f2"],fill:{type:"gradient",gradient:{shade:"dark",inverseColors:!1,gradientToColors:[e.primary],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},xaxis:{labels:{offsetY:5,style:{colors:"#b9b9c3",fontSize:"0.857rem",fontFamily:"Montserrat"}},axisTicks:{show:!1},categories:["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"],axisBorder:{show:!1},tickPlacement:"on"},yaxis:{tickAmount:5,labels:{style:{colors:"#b9b9c3",fontSize:"0.857rem",fontFamily:"Montserrat"},formatter:e=>e>999?"".concat((e/1e3).toFixed(1),"k"):e}},tooltip:{x:{show:!1}}};return Object(d.jsxs)(c.l,{children:[Object(d.jsxs)(c.p,{className:"align-items-start",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)(c.v,{className:"mb-25",tag:"h4",children:"Sales"}),Object(d.jsx)(c.u,{className:"mb-0",children:"2020 Total Sales: 12.84k"})]}),Object(d.jsx)(b.a,{size:18,className:"text-muted cursor-pointer"})]}),Object(d.jsx)(c.m,{className:"pb-0",children:Object(d.jsx)(n.a,{options:s,series:[{name:"Sales",data:[140,180,150,205,160,295,125,255,205,305,240,295]}],type:"line",height:240})})]})},h=t(4),x=t.n(h);var p=e=>{const[s,t]=Object(a.useState)(null);Object(a.useEffect)((()=>{x.a.get("/card/card-analytics/revenue").then((e=>t(e.data)))}),[]);const r={chart:{toolbar:{show:!1},zoom:{enabled:!1},type:"line",offsetX:-10},stroke:{curve:"smooth",dashArray:[0,12],width:[4,3]},legend:{show:!1},colors:["#d0ccff","#ebe9f1"],fill:{type:"gradient",gradient:{shade:"dark",inverseColors:!1,gradientToColors:[e.primary,"#ebe9f1"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},xaxis:{labels:{style:{colors:"#b9b9c3",fontSize:"1rem"}},axisTicks:{show:!1},categories:["01","05","09","13","17","21","26","31"],axisBorder:{show:!1},tickPlacement:"on"},yaxis:{tickAmount:5,labels:{style:{colors:"#b9b9c3",fontSize:"1rem"},formatter:e=>e>999?"".concat((e/1e3).toFixed(0),"k"):e}},grid:{borderColor:"#e7eef7",padding:{top:-20,bottom:-10,left:20}},tooltip:{x:{show:!1}}};return null!==s?Object(d.jsxs)(c.l,{children:[Object(d.jsxs)(c.p,{children:[Object(d.jsx)(c.v,{tag:"h4",children:"Revenue"}),Object(d.jsx)(b.a,{size:18,className:"text-muted cursor-pointer"})]}),Object(d.jsxs)(c.m,{children:[Object(d.jsxs)("div",{className:"d-flex justify-content-start mb-3",children:[Object(d.jsxs)("div",{className:"me-2",children:[Object(d.jsx)(c.u,{className:"mb-50",children:"This Month"}),Object(d.jsxs)("h3",{className:"fw-bolder",children:[Object(d.jsx)("sup",{className:"font-medium-1 fw-bold me-25",children:"$"}),Object(d.jsx)("span",{className:"text-primary",children:"86,589"})]})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)(c.u,{className:"mb-50",children:"Last Month"}),Object(d.jsxs)("h3",{className:"fw-bolder",children:[Object(d.jsx)("sup",{className:"font-medium-1 fw-bold me-25",children:"$"}),Object(d.jsx)("span",{children:"73,683"})]})]})]}),Object(d.jsx)(n.a,{options:r,series:[{name:"This Month",data:[45e3,47e3,44800,47500,45500,48e3,46500,48600]},{name:"Last Month",data:[46e3,48e3,45500,46600,44500,46500,45e3,47e3]}],type:"line",height:240})]})]}):null};var O=e=>{let{success:s}=e;const t={chart:{toolbar:{show:!1}},dataLabels:{enabled:!1},legend:{show:!1},comparedResult:[2,-3,8],labels:["App","Service","Product"],stroke:{width:0},colors:["#28c76f66","#28c76f33",s],grid:{padding:{right:-20,bottom:-8,left:-20}},plotOptions:{pie:{startAngle:-10,donut:{labels:{show:!0,name:{offsetY:15},value:{offsetY:-15,formatter:e=>"".concat(parseInt(e)," %")},total:{show:!0,offsetY:15,label:"App",formatter:()=>"53%"}}}}},responsive:[{breakpoint:1325,options:{chart:{height:100}}},{breakpoint:1200,options:{chart:{height:120}}},{breakpoint:1065,options:{chart:{height:100}}},{breakpoint:992,options:{chart:{height:120}}}]};return Object(d.jsx)(c.l,{className:"earnings-card",children:Object(d.jsx)(c.m,{children:Object(d.jsxs)(c.ib,{children:[Object(d.jsxs)(c.B,{xs:"6",children:[Object(d.jsx)(c.v,{className:"mb-1",children:"Earnings"}),Object(d.jsx)("div",{className:"font-small-2",children:"This Month"}),Object(d.jsx)("h5",{className:"mb-1",children:"$4055.56"}),Object(d.jsxs)(c.u,{className:"text-muted font-small-2",children:[Object(d.jsx)("span",{className:"fw-bolder",children:"68.2%"}),Object(d.jsx)("span",{children:" more earnings than last month."})]})]}),Object(d.jsx)(c.B,{xs:"6",children:Object(d.jsx)(n.a,{options:t,series:[53,16,31],type:"donut",height:120})})]})})})},g=t(2),u=t.n(g),f=t(478);var N=e=>{const[s,t]=Object(a.useState)(null);Object(a.useEffect)((()=>{x.a.get("/card/card-analytics/customers").then((e=>t(e.data)))}),[]);const r={chart:{toolbar:{show:!1}},labels:["New","Returning","Referrals"],dataLabels:{enabled:!1},legend:{show:!1},stroke:{width:4},colors:[e.primary,e.warning,e.danger]};return null!==s?Object(d.jsxs)(c.l,{children:[Object(d.jsxs)(c.p,{className:"align-items-end",children:[Object(d.jsx)(c.v,{tag:"h4",children:"Customers"}),Object(d.jsxs)(c.wb,{className:"chart-dropdown",children:[Object(d.jsx)(c.G,{color:"",className:"bg-transparent btn-sm border-0 p-50",children:"Last 7 days"}),Object(d.jsx)(c.F,{end:!0,children:s.last_days.map((e=>Object(d.jsx)(c.E,{className:"w-100",children:e},e)))})]})]}),Object(d.jsxs)(c.m,{children:[Object(d.jsx)(n.a,{options:r,series:[690,258,149],type:"pie",height:325}),Object(d.jsx)("div",{className:"pt-25",children:s.listData.map(((e,t)=>{const a=f[e.icon];return Object(d.jsxs)("div",{className:u()("d-flex justify-content-between",{"mb-1":t!==s.listData.length-1}),children:[Object(d.jsxs)("div",{className:"d-flex align-items-center",children:[Object(d.jsx)(a,{size:15,className:u()({[e.iconColor]:e.iconColor})}),Object(d.jsx)("span",{className:"fw-bold ms-75",children:e.text})]}),Object(d.jsx)("span",{children:e.result})]},t)}))})]})]}):null},y=t(490);var w=e=>{const[s,t]=Object(a.useState)(null);Object(a.useEffect)((()=>(x.a.get("/card/card-analytics/avg-sessions").then((e=>t(e.data))),()=>t(null))),[]);const r={chart:{sparkline:{enabled:!0},toolbar:{show:!1}},grid:{show:!1,padding:{left:0,right:0}},states:{hover:{filter:"none"}},colors:["#ebf0f7","#ebf0f7",e.primary,"#ebf0f7","#ebf0f7","#ebf0f7"],plotOptions:{bar:{columnWidth:"45%",distributed:!0,borderRadius:[10]}},tooltip:{x:{show:!1}},xaxis:{type:"numeric"}};return null!==s?Object(d.jsx)(c.l,{children:Object(d.jsxs)(c.m,{children:[Object(d.jsxs)(c.ib,{className:"pb-50",children:[Object(d.jsxs)(c.B,{sm:{size:6,order:1},xs:{order:2},className:"d-flex justify-content-between flex-column mt-lg-0 mt-2",children:[Object(d.jsxs)("div",{className:"session-info mb-1 mb-lg-0",children:[Object(d.jsx)("h2",{className:"fw-bold mb-25",children:Object(y.g)(s.sessions)}),Object(d.jsx)(c.u,{className:"fw-bold mb-2",children:"Avg Sessions"}),Object(d.jsxs)("h5",{className:"font-medium-2",children:[Object(d.jsx)("span",{className:"text-success me-50",children:s.growth}),Object(d.jsx)("span",{className:"fw-normal",children:"vs last 7 days"})]})]}),Object(d.jsx)(c.i,{color:"primary",children:"View Details"})]}),Object(d.jsxs)(c.B,{sm:{size:6,order:2},xs:{order:1},className:"d-flex justify-content-between flex-column text-end",children:[Object(d.jsxs)(c.wb,{className:"chart-dropdown",children:[Object(d.jsx)(c.G,{color:"",className:"bg-transparent btn-sm border-0 p-50",children:"Last 7 days"}),Object(d.jsx)(c.F,{end:!0,children:s.last_days.map((e=>Object(d.jsx)(c.E,{className:"w-100",children:e},e)))})]}),Object(d.jsx)(n.a,{options:r,series:[{name:"Sessions",data:[75,125,225,175,125,75,25]}],type:"bar",height:200})]})]}),Object(d.jsx)("hr",{}),Object(d.jsxs)(c.ib,{className:"pt-50",children:[Object(d.jsxs)(c.B,{className:"mb-2",md:"6",sm:"12",children:[Object(d.jsxs)("p",{className:"mb-50",children:["Goal: $",s.goal]}),Object(d.jsx)(c.hb,{className:"avg-session-progress mt-25",value:"50"})]}),Object(d.jsxs)(c.B,{className:"mb-2",md:"6",sm:"12",children:[Object(d.jsxs)("p",{className:"mb-50",children:["Users: ",Object(y.g)(s.users)]}),Object(d.jsx)(c.hb,{className:"avg-session-progress progress-bar-warning mt-25",value:"60"})]}),Object(d.jsxs)(c.B,{md:"6",sm:"12",children:[Object(d.jsxs)("p",{className:"mb-50",children:["Retention: ",s.retention,"%"]}),Object(d.jsx)(c.hb,{className:"avg-session-progress progress-bar-danger mt-25",value:"70"})]}),Object(d.jsxs)(c.B,{md:"6",sm:"12",children:[Object(d.jsxs)("p",{className:"mb-50",children:["Duration: ",s.duration,"yr"]}),Object(d.jsx)(c.hb,{className:"avg-session-progress progress-bar-success mt-25",value:"80"})]})]})]})}):null},v=t(876);var k=e=>{const[s,t]=Object(a.useState)(null);Object(a.useEffect)((()=>(x.a.get("/card/card-analytics/goal-overview").then((e=>t(e.data))),()=>t(null))),[]);const r={chart:{sparkline:{enabled:!0},dropShadow:{enabled:!0,blur:3,left:1,top:1,opacity:.1}},colors:["#51e5a8"],plotOptions:{radialBar:{offsetY:10,startAngle:-150,endAngle:150,hollow:{size:"77%"},track:{background:"#ebe9f1",strokeWidth:"50%"},dataLabels:{name:{show:!1},value:{color:"#5e5873",fontFamily:"Montserrat",fontSize:"2.86rem",fontWeight:"600"}}}},fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:[e.success],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{lineCap:"round"},grid:{padding:{bottom:30}}};return null!==s?Object(d.jsxs)(c.l,{children:[Object(d.jsxs)(c.p,{children:[Object(d.jsx)(c.v,{tag:"h4",children:"Goal Overview"}),Object(d.jsx)(v.a,{size:18,className:"text-muted cursor-pointer"})]}),Object(d.jsx)(c.m,{className:"p-0",children:Object(d.jsx)(n.a,{options:r,series:[83],type:"radialBar",height:245})}),Object(d.jsxs)(c.ib,{className:"border-top text-center mx-0",children:[Object(d.jsxs)(c.B,{xs:"6",className:"border-end py-1",children:[Object(d.jsx)(c.u,{className:"text-muted mb-0",children:"Completed"}),Object(d.jsx)("h3",{className:"fw-bolder mb-0",children:s.completed})]}),Object(d.jsxs)(c.B,{xs:"6",className:"py-1",children:[Object(d.jsx)(c.u,{className:"text-muted mb-0",children:"In Progress"}),Object(d.jsx)("h3",{className:"fw-bolder mb-0",children:s.inProgress})]})]})]}):null};var z=e=>{const[s,t]=Object(a.useState)(null);Object(a.useEffect)((()=>{x.a.get("/card/card-analytics/product-orders").then((e=>t(e.data)))}),[]);const r={labels:["Finished","Pending","Rejected"],plotOptions:{radialBar:{size:150,hollow:{size:"20%"},track:{strokeWidth:"100%",margin:15},dataLabels:{value:{fontSize:"1rem",colors:"#5e5873",fontWeight:"500",offsetY:5},total:{show:!0,label:"Total",fontSize:"1.286rem",colors:"#5e5873",fontWeight:"500",formatter:()=>42459}}}},colors:[e.primary,e.warning,e.danger],stroke:{lineCap:"round"},chart:{height:355,dropShadow:{enabled:!0,blur:3,left:1,top:1,opacity:.1}}};return null!==s?Object(d.jsxs)(c.l,{children:[Object(d.jsxs)(c.p,{children:[Object(d.jsx)(c.v,{tag:"h4",children:"Product Orders"}),Object(d.jsxs)(c.wb,{className:"chart-dropdown",children:[Object(d.jsx)(c.G,{color:"",className:"bg-transparent btn-sm border-0 p-50",children:"Last 7 days"}),Object(d.jsx)(c.F,{end:!0,children:s.last_days.map((e=>Object(d.jsx)(c.E,{className:"w-100",children:e},e)))})]})]}),Object(d.jsxs)(c.m,{children:[Object(d.jsx)(n.a,{options:r,series:[70,52,26],type:"radialBar",height:325}),Object(d.jsxs)("div",{className:"d-flex justify-content-between mb-1",children:[Object(d.jsxs)("div",{className:"d-flex align-items-center",children:[Object(d.jsx)(o.a,{size:15,className:"text-primary"}),Object(d.jsx)("span",{className:"fw-bold ms-75",children:"Finished"})]}),Object(d.jsx)("span",{children:s.chart_info.finished})]}),Object(d.jsxs)("div",{className:"d-flex justify-content-between mb-1",children:[Object(d.jsxs)("div",{className:"d-flex align-items-center",children:[Object(d.jsx)(o.a,{size:15,className:"text-warning"}),Object(d.jsx)("span",{className:"fw-bold ms-75",children:"Pending"})]}),Object(d.jsx)("span",{children:s.chart_info.pending})]}),Object(d.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(d.jsxs)("div",{className:"d-flex align-items-center",children:[Object(d.jsx)(o.a,{size:15,className:"text-danger"}),Object(d.jsx)("span",{className:"fw-bold ms-75",children:"Rejected"})]}),Object(d.jsx)("span",{children:s.chart_info.rejected})]})]})]}):null};var B=e=>{const[s,t]=Object(a.useState)(null);Object(a.useEffect)((()=>(x.a.get("/card/card-analytics/revenue-report").then((e=>t(e.data))),()=>t(null))),[]);const r={chart:{stacked:!0,type:"bar",toolbar:{show:!1}},grid:{padding:{top:-20,bottom:-10},yaxis:{lines:{show:!1}}},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"],labels:{style:{colors:"#b9b9c3",fontSize:"0.86rem"}},axisTicks:{show:!1},axisBorder:{show:!1}},legend:{show:!1},dataLabels:{enabled:!1},colors:[e.primary,e.warning],plotOptions:{bar:{columnWidth:"17%",borderRadius:[5]},distributed:!0},yaxis:{labels:{style:{colors:"#b9b9c3",fontSize:"0.86rem"}}}},l={chart:{toolbar:{show:!1},zoom:{enabled:!1},type:"line",sparkline:{enabled:!0}},stroke:{curve:"smooth",dashArray:[0,5],width:[2]},colors:[e.primary,"#dcdae3"],tooltip:{enabled:!1}};return null!==s?Object(d.jsx)(c.l,{className:"card-revenue-budget",children:Object(d.jsxs)(c.ib,{className:"mx-0",children:[Object(d.jsxs)(c.B,{className:"revenue-report-wrapper",md:"8",xs:"12",children:[Object(d.jsxs)("div",{className:"d-sm-flex justify-content-between align-items-center mb-3",children:[Object(d.jsx)(c.v,{className:"mb-50 mb-sm-0",children:"Revenue Report"}),Object(d.jsxs)("div",{className:"d-flex align-items-center",children:[Object(d.jsxs)("div",{className:"d-flex align-items-center me-2",children:[Object(d.jsx)("span",{className:"bullet bullet-primary me-50 cursor-pointer"}),Object(d.jsx)("span",{children:"Earning"})]}),Object(d.jsxs)("div",{className:"d-flex align-items-center",children:[Object(d.jsx)("span",{className:"bullet bullet-warning me-50 cursor-pointer"}),Object(d.jsx)("span",{children:"Expense"})]})]})]}),Object(d.jsx)(n.a,{id:"revenue-report-chart",type:"bar",height:"230",options:r,series:[{name:"Earning",data:[95,177,284,256,105,63,168,218,72]},{name:"Expense",data:[-145,-80,-60,-180,-100,-60,-85,-75,-100]}]})]}),Object(d.jsxs)(c.B,{className:"budget-wrapper",md:"4",xs:"12",children:[Object(d.jsxs)(c.tb,{children:[Object(d.jsx)(c.G,{className:"budget-dropdown",outline:!0,color:"primary",size:"sm",caret:!0,children:"2020"}),Object(d.jsx)(c.F,{children:s.years.map((e=>Object(d.jsx)(c.E,{className:"w-100",children:e},e)))})]}),Object(d.jsxs)("h2",{className:"mb-25",children:["$",s.price]}),Object(d.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(d.jsx)("span",{className:"fw-bolder me-25",children:"Budget:"}),Object(d.jsx)("span",{children:s.budget})]}),Object(d.jsx)(n.a,{id:"budget-chart",type:"line",height:"80",options:l,series:[{data:[61,48,69,52,60,40,79,60,59,43,62]},{data:[20,10,30,15,23,0,25,15,20,5,27]}]}),Object(d.jsx)(c.i,{color:"primary",children:"Increase Budget"})]})]})}):null};var S=e=>{const[s,t]=Object(a.useState)(null);Object(a.useEffect)((()=>(x.a.get("/card/card-analytics/support-tracker").then((e=>t(e.data))),()=>t(null))),[]);const r={plotOptions:{radialBar:{size:150,offsetY:20,startAngle:-150,endAngle:150,hollow:{size:"65%"},track:{background:"#fff",strokeWidth:"100%"},dataLabels:{name:{offsetY:-5,fontFamily:"Montserrat",fontSize:"1rem"},value:{offsetY:15,fontFamily:"Montserrat",fontSize:"1.714rem"}}}},colors:[e.danger],fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:[e.primary],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{dashArray:8},labels:["Completed Tickets"]};return null!==s?Object(d.jsxs)(c.l,{children:[Object(d.jsxs)(c.p,{className:"pb-0",children:[Object(d.jsx)(c.v,{tag:"h4",children:s.title}),Object(d.jsxs)(c.wb,{className:"chart-dropdown",children:[Object(d.jsx)(c.G,{color:"",className:"bg-transparent btn-sm border-0 p-50",children:"Last 7 days"}),Object(d.jsx)(c.F,{end:!0,children:s.last_days.map((e=>Object(d.jsx)(c.E,{className:"w-100",children:e},e)))})]})]}),Object(d.jsxs)(c.m,{children:[Object(d.jsxs)(c.ib,{children:[Object(d.jsxs)(c.B,{sm:"2",className:"d-flex flex-column flex-wrap text-center",children:[Object(d.jsx)("h1",{className:"font-large-2 fw-bolder mt-2 mb-0",children:s.totalTicket}),Object(d.jsx)(c.u,{children:"Tickets"})]}),Object(d.jsx)(c.B,{sm:"10",className:"d-flex justify-content-center",children:Object(d.jsx)(n.a,{options:r,series:[83],type:"radialBar",height:270,id:"support-tracker-card"})})]}),Object(d.jsxs)("div",{className:"d-flex justify-content-between mt-1",children:[Object(d.jsxs)("div",{className:"text-center",children:[Object(d.jsx)(c.u,{className:"mb-50",children:"New Tickets"}),Object(d.jsx)("span",{className:"font-large-1 fw-bold",children:s.newTicket})]}),Object(d.jsxs)("div",{className:"text-center",children:[Object(d.jsx)(c.u,{className:"mb-50",children:"Open Tickets"}),Object(d.jsx)("span",{className:"font-large-1 fw-bold",children:s.openTicket})]}),Object(d.jsxs)("div",{className:"text-center",children:[Object(d.jsx)(c.u,{className:"mb-50",children:"Response Time"}),Object(d.jsxs)("span",{className:"font-large-1 fw-bold",children:[s.responseTime,"d"]})]})]})]})]}):null},T=t(820),C=t(817);var F=e=>{const[s,t]=Object(a.useState)(null);Object(a.useEffect)((()=>{x.a.get("/card/card-analytics/sessions-device").then((e=>t(e.data)))}),[]);const r={chart:{toolbar:{show:!1}},labels:["Desktop","Mobile","Tablet"],dataLabels:{enabled:!1},legend:{show:!1},comparedResult:[2,-3,8],stroke:{width:0},colors:[e.primary,e.warning,e.danger]};return null!==s?Object(d.jsxs)(c.l,{children:[Object(d.jsxs)(c.p,{className:"align-items-end",children:[Object(d.jsx)(c.v,{tag:"h4",children:"Session By Device"}),Object(d.jsxs)(c.wb,{className:"chart-dropdown",children:[Object(d.jsx)(c.G,{color:"",className:"bg-transparent btn-sm border-0 p-50",children:"Last 7 days"}),Object(d.jsx)(c.F,{end:!0,children:s.last_days.map((e=>Object(d.jsx)(c.E,{className:"w-100",children:e},e)))})]})]}),Object(d.jsxs)(c.m,{children:[Object(d.jsx)(n.a,{className:"my-1",options:r,series:[58.6,34.9,6.5],type:"donut",height:300}),s.chart_info.map(((e,t)=>{const a=f[e.icon];return Object(d.jsxs)("div",{className:u()("d-flex justify-content-between",{"mb-1":t!==s.chart_info.length-1}),children:[Object(d.jsxs)("div",{className:"d-flex align-items-center",children:[Object(d.jsx)(a,{size:17,className:u()({[e.iconColor]:e.iconColor})}),Object(d.jsx)("span",{className:"fw-bold ms-75 me-25",children:e.name}),Object(d.jsxs)("span",{children:["- ",e.usage,"%"]})]}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("span",{children:[e.upDown,"%"]}),e.upDown>0?Object(d.jsx)(T.a,{size:14,className:"ms-25 text-success"}):Object(d.jsx)(C.a,{size:14,className:"ms-25 text-danger"})]})]},t)}))]})]}):null},E=t(134);t(751);s.default=()=>{const e=Object(a.useContext)(E.a);return Object(d.jsxs)(a.Fragment,{children:[Object(d.jsx)(r.a,{title:"Analytics Cards",data:[{title:"Cards"},{title:"Analytics Actions"}]}),Object(d.jsxs)(c.ib,{className:"match-height",children:[Object(d.jsx)(c.B,{lg:"6",sm:"12",children:Object(d.jsx)(S,{primary:e.colors.primary.main,danger:e.colors.danger.main})}),Object(d.jsx)(c.B,{lg:"6",sm:"12",children:Object(d.jsx)(w,{primary:e.colors.primary.main})})]}),Object(d.jsxs)(c.ib,{className:"match-height",children:[Object(d.jsx)(c.B,{lg:"8",sm:"12",children:Object(d.jsx)(B,{primary:e.colors.primary.main,warning:e.colors.warning.main})}),Object(d.jsx)(c.B,{lg:"4",sm:"12",children:Object(d.jsx)(k,{success:e.colors.success.main})})]}),Object(d.jsxs)(c.ib,{className:"match-height",children:[Object(d.jsx)(c.B,{lg:"8",sm:"12",children:Object(d.jsx)(p,{primary:e.colors.primary.main})}),Object(d.jsx)(c.B,{lg:"4",sm:"12",children:Object(d.jsx)(j,{primary:e.colors.primary.main,info:e.colors.info.main})})]}),Object(d.jsxs)(c.ib,{className:"match-height",children:[Object(d.jsx)(c.B,{lg:"8",sm:"12",children:Object(d.jsxs)(c.ib,{className:"match-height",children:[Object(d.jsx)(c.B,{sm:"12",children:Object(d.jsx)(m,{primary:e.colors.primary.main})}),Object(d.jsx)(c.B,{md:"6",sm:"12",children:Object(d.jsx)(F,{primary:e.colors.primary.main,warning:e.colors.warning.main,danger:e.colors.danger.main})}),Object(d.jsx)(c.B,{md:"6",sm:"12",children:Object(d.jsx)(N,{primary:e.colors.primary.main,warning:e.colors.warning.main,danger:e.colors.danger.main})})]})}),Object(d.jsx)(c.B,{lg:"4",sm:"12",children:Object(d.jsxs)(c.ib,{className:"match-height",children:[Object(d.jsx)(c.B,{sm:"12",children:Object(d.jsx)(z,{primary:e.colors.primary.main,warning:e.colors.warning.main,danger:e.colors.danger.main})}),Object(d.jsx)(c.B,{sm:"12",children:Object(d.jsx)(O,{success:e.colors.success.main})})]})})]})]})}},479:function(e,s,t){"use strict";var a=t(1),c=t(129),r=t(2),l=t.n(r),n=t(89),i=t(9);s.a=e=>{const{data:s,title:t}=e;return Object(i.jsx)("div",{className:"content-header row",children:Object(i.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2 w-100",children:Object(i.jsx)("div",{className:"row breadcrumbs-top",children:Object(i.jsxs)("div",{className:"col-12",children:[t?Object(i.jsx)("h2",{className:"content-header-title float-start mb-0",children:t}):"",Object(i.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(i.jsxs)(n.g,{children:[Object(i.jsx)(n.h,{tag:"li",children:Object(i.jsx)(c.b,{to:"/",children:"Dashboard"})}),s.map(((e,t)=>{const r=e.link?c.b:a.Fragment,o=s.length-1===t;return Object(i.jsx)(n.h,{tag:"li",active:!o,className:l()({"text-primary":!o}),children:Object(i.jsx)(r,{...e.link?{to:e.link}:{},children:e.title})},t)}))]})})]})})})})}},751:function(e,s,t){}}]);
//# sourceMappingURL=121.6bd86aa1.chunk.js.map