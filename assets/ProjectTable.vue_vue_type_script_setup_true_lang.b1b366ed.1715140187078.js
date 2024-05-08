import{d as N,I as E,b as o,c as u,w as t,nd as O,h as c,f as s,u as l,ap as P,e as r,t as m,g as d,al as j,kx as R,F as V,R as $,jk as D,nu as M,B as Y,nn as A,nk as F}from"./index-6388fb42.js";import{a as z,b as H,c as G,d as L}from"./index.b87509f5.1715140187078.js";import"./index.35e5e50d.1715140187078.js";import{_ as W}from"./index.c3a47271.1715140187078.js";import{g as q,_ as J}from"./file.f34d7eb2.1715140187078.js";import{E as _}from"./EditableCell.396deb00.1715140187078.js";const K={key:0,class:"flex items-center"},Q=["src"],X=["src"],Z={class:"ml-2 text-title text-base"},ie=N({__name:"ProjectTable",setup(ee){const b=[{title:"COMPANIES",dataIndex:"company"},{title:"BUDGET",dataIndex:"budget",customRender:({text:n})=>`$${n}`},{title:"STATUS",dataIndex:"status"},{title:"COMPLETION",dataIndex:"progress"},{title:"OPERATION",dataIndex:"operation",width:200,align:"center"}],g=E([{logo:"/src/assets/logo/shopify.svg",company:"shopify",budget:1200,status:1,progress:90},{logo:"/src/assets/logo/atlassian.svg",company:"atlassian",budget:1200,status:1,progress:90},{logo:"/src/assets/logo/invision.svg",company:"invision",budget:1200,status:1,progress:90},{logo:"/src/assets/logo/jira.svg",company:"jira",budget:1200,status:1,progress:90}]),f=n=>{switch(n){case-1:return"exception";case 0:return"pause";case 1:return"working";default:return"unknown"}};function v(n){n._edit=!1,M.success("修改成功")}function k(n,y){q(n).then(i=>{y.logo=i})}function x(){g.push({progress:10,_edit:!0})}return(n,y)=>{const i=Y,h=J,w=A,I=F,U=W,C=H,S=G,T=L,B=z;return o(),u(B,O({title:()=>"工程表格"},n.$attrs,{columns:b,dataSource:g,pagination:!1,rowClassName:"text-subtext"}),{bodyCell:t(({column:p,text:te,record:e})=>[p.dataIndex==="company"?(o(),c("div",K,[s(l(_),{options:{size:"small",format:"YYYY-MM-DD HH:mm",showTime:!0},edit:e._edit,value:e.company,"onUpdate:value":a=>e.company=a},{input:t(()=>[s(h,{"show-upload-list":!1,beforeUpload:a=>k(a,e)},{default:t(()=>[e.logo?(o(),c("img",{key:0,class:"h-8 rounded border border-dashed border-border p-0.5",src:e.logo},null,8,Q)):(o(),u(i,{key:1,loading:!1,type:"dashed"},{icon:t(()=>[s(l(P))]),_:1}))]),_:2},1032,["beforeUpload"]),s(w,{class:"ml-2",value:e.company,"onUpdate:value":a=>e.company=a},null,8,["value","onUpdate:value"])]),default:t(()=>[r("img",{class:"w-8 rounded",src:e.logo},null,8,X),r("span",Z,m(e.company),1)]),_:2},1032,["edit","value","onUpdate:value"])])):p.dataIndex==="budget"?(o(),u(l(_),{key:1,value:e.budget,"onUpdate:value":a=>e.budget=a,edit:e._edit,options:{prefix:"￥"}},{default:t(()=>[d(" ￥"+m(e.budget),1)]),_:2},1032,["value","onUpdate:value","edit"])):p.dataIndex==="status"?(o(),u(l(_),{key:2,edit:e._edit,value:e.status,"onUpdate:value":a=>e.status=a,type:"select",options:{options:[{label:"exception",value:-1},{label:"pause",value:0},{label:"working",value:1}],class:"w-24"}},{default:t(()=>[s(I,{color:"blue"},{text:t(()=>[r("span",null,m(f(e.status)),1)]),_:2},1024)]),_:2},1032,["edit","value","onUpdate:value"])):p.dataIndex==="progress"?(o(),u(l(_),{key:3,edit:e._edit,value:e.progress,"onUpdate:value":a=>e.progress=a,type:"slider",options:{tooltipVisible:!0}},{default:t(()=>[s(U,{strokeWidth:4,percent:e.progress,status:"exception"},null,8,["percent"])]),_:2},1032,["edit","value","onUpdate:value"])):p.dataIndex==="operation"?(o(),c(V,{key:4},[e._edit?(o(),u(i,{key:1,type:"link",onClick:a=>v(e)},{icon:t(()=>[s(l(R))]),default:t(()=>[d(" 保存 ")]),_:2},1032,["onClick"])):(o(),u(i,{key:0,type:"link",onClick:a=>e._edit=!0},{icon:t(()=>[s(l(j))]),default:t(()=>[d(" 编辑 ")]),_:2},1032,["onClick"]))],64)):$("",!0)]),summary:t(()=>[s(T,null,{default:t(()=>[s(S,null,{default:t(()=>[s(C,{colspan:"5"},{default:t(()=>[s(i,{size:"large",class:"w-full",type:"dashed",onClick:x},{default:t(()=>[s(l(D)),d(" 新增一列 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},16,["dataSource"])}}});export{ie as _};
//# sourceMappingURL=ProjectTable.vue_vue_type_script_setup_true_lang.b1b366ed.1715140187078.js.map
