import{o as s,c as i,w as t,e as v,t as h,g as F,h as q,a as e,i as A,j as g,k as w,l as D,m as R,n as E,r as I,p as M,q as P,s as k,F as y,u as j,v as G,x as z,y as W,b as _,z as H,A as J,B as o,C as K,D as b,d as V,E as N,M as B,G as T,H as Q,I as C,J as X,K as Y,L as Z,N as O,V as ee,f as te,O as L,P as ae,Q as le,R as se,S as ie,T as ne,U as oe,W as re,X as ue,Y as de}from"./index-7c8bc001.js";import{_ as ce,u as S}from"./LogoDark.vue_vue_type_script_setup_true_lang-4faa128a.js";import{m as $}from"./md5-c4ed0ff4.js";const me=[{title:"面板",icon:"mdi-view-dashboard",to:"/dashboard/default"},{title:"配置",icon:"mdi-cog",to:"/config"},{title:"插件",icon:"mdi-puzzle",to:"/extension"},{title:"控制台",icon:"mdi-console",to:"/console"}],fe={__name:"NavGroup",props:{item:Object},setup(a){const l=a;return(n,r)=>(s(),i(F,{color:"darkText",class:"smallCap"},{default:t(()=>[v(h(l.item.header),1)]),_:1}))}},U={__name:"NavItem",props:{item:Object,level:Number},setup(a){return(l,n)=>(s(),i(E,{to:a.item.type==="external"?"":a.item.to,href:a.item.type==="external"?a.item.to:"",rounded:"",class:"mb-1",color:"secondary",disabled:a.item.disabled,target:a.item.type==="external"?"_blank":""},q({prepend:t(()=>[a.item.icon?(s(),i(g,{key:0,color:a.item.iconColor,size:a.item.iconSize,class:"hide-menu",icon:a.item.icon},null,8,["color","size","icon"])):w("",!0)]),default:t(()=>[e(D,null,{default:t(()=>[v(h(a.item.title),1)]),_:1}),a.item.subCaption?(s(),i(R,{key:0,class:"text-caption mt-n1 hide-menu"},{default:t(()=>[v(h(a.item.subCaption),1)]),_:1})):w("",!0)]),_:2},[a.item.chip?{name:"append",fn:t(()=>[e(A,{color:a.item.chipColor,class:"sidebarchip hide-menu",size:a.item.chipIcon?"small":"default",variant:a.item.chipVariant,"prepend-icon":a.item.chipIcon},{default:t(()=>[v(h(a.item.chip),1)]),_:1},8,["color","size","variant","prepend-icon"])]),key:"0"}:void 0]),1032,["to","href","disabled","target"]))}},pe={__name:"IconSet",props:{item:Object,level:Number},setup(a){const l=a;return(n,r)=>l.level>0?(s(),i(I(l.item),{key:0,size:"5",fill:"currentColor","stroke-width":"1.5",class:"iconClass"})):(s(),i(I(l.item),{key:1,size:"20","stroke-width":"1.5",class:"iconClass"}))}},ve={__name:"NavCollapse",props:{item:Object,level:Number},setup(a){const l=a;return(n,r)=>{const u=M("NavCollapse",!0);return s(),i(G,{"no-action":""},{activator:t(({props:f})=>[e(E,P(f,{value:a.item.title,rounded:"",class:"mb-1",color:"secondary"}),{prepend:t(()=>[e(pe,{item:a.item.icon,level:a.level},null,8,["item","level"])]),default:t(()=>[e(D,{class:"mr-auto"},{default:t(()=>[v(h(a.item.title),1)]),_:1}),a.item.subCaption?(s(),i(R,{key:0,class:"text-caption mt-n1 hide-menu"},{default:t(()=>[v(h(a.item.subCaption),1)]),_:1})):w("",!0)]),_:2},1040,["value"])]),default:t(()=>[(s(!0),k(y,null,j(a.item.children,(f,d)=>(s(),k(y,{key:d},[f.children?(s(),i(u,{key:0,item:f,level:l.level+1},null,8,["item","level"])):(s(),i(U,{key:1,item:f,level:l.level+1},null,8,["item","level"]))],64))),128))]),_:1})}}},he={__name:"LogoMain",setup(a){return(l,n)=>(s(),i(ce))}},_e={class:"pa-5"},Ve={class:"pa-4 text-center"},be=z({__name:"VerticalSidebar",setup(a){const l=S(),n=W(me);return(r,u)=>{const f=M("perfect-scrollbar");return s(),i(K,{left:"",modelValue:o(l).Sidebar_drawer,"onUpdate:modelValue":u[0]||(u[0]=d=>o(l).Sidebar_drawer=d),elevation:"0","rail-width":"105","mobile-breakpoint":"960",app:"",class:"leftSidebar",rail:o(l).mini_sidebar,"expand-on-hover":""},{default:t(()=>[_("div",_e,[e(he)]),e(f,{class:"scrollnavbar"},{default:t(()=>[e(H,{class:"pa-4"},{default:t(()=>[(s(!0),k(y,null,j(n.value,(d,x)=>(s(),k(y,{key:x},[d.header?(s(),i(fe,{item:d,key:d.title},null,8,["item"])):d.divider?(s(),i(J,{key:1,class:"my-3"})):d.children?(s(),i(ve,{key:2,class:"leftPadding",item:d,level:0},null,8,["item"])):(s(),i(U,{key:3,item:d,class:"leftPadding"},null,8,["item"]))],64))),128))]),_:1}),_("div",Ve,[e(A,{color:"inputBorder",size:"small"},{default:t(()=>[v(" v1.0.0 ")]),_:1})])]),_:1})]),_:1},8,["modelValue","rail"])}}}),Ce=_("span",{class:"text-h5"},"密码修改",-1),ke=_("small",null,"如果是第一次修改密码，原密码请留空。",-1),ye=_("br",null,null,-1),xe=z({__name:"VerticalHeader",setup(a){const l=S();b(!1);let n=b(!1),r=b(""),u=b(""),f=b("");const d=p=>{window.open(p,"_blank")};function x(){r.value!=""&&(r.value=$.md5(r.value)),u.value=$.md5(u.value),se.post("/api/change_password",{password:r.value,new_password:u.value}).then(p=>{if(p.data.status=="error"){f.value=p.data.message,r.value="",u.value="";return}n.value=!n.value,f.value=p.data.message,setTimeout(()=>{ie().logout()},1e3)}).catch(p=>{console.log(p),f.value=p,r.value="",u.value=""})}return(p,c)=>(s(),i(le,{elevation:"0",height:"80"},{default:t(()=>[e(V,{class:"hidden-md-and-down text-secondary",color:"lightsecondary",icon:"",rounded:"sm",variant:"flat",onClick:c[0]||(c[0]=N(m=>o(l).SET_MINI_SIDEBAR(!o(l).mini_sidebar),["stop"])),size:"small"},{default:t(()=>[e(o(B),{size:"20","stroke-width":"1.5"})]),_:1}),e(V,{class:"hidden-lg-and-up text-secondary ms-3",color:"lightsecondary",icon:"",rounded:"sm",variant:"flat",onClick:N(o(l).SET_SIDEBAR_DRAWER,["stop"]),size:"small"},{default:t(()=>[e(o(B),{size:"20","stroke-width":"1.5"})]),_:1},8,["onClick"]),e(T),e(Q,{modelValue:o(n),"onUpdate:modelValue":c[4]||(c[4]=m=>C(n)?n.value=m:n=m),persistent:"",width:"700"},{activator:t(({props:m})=>[e(V,P({class:"profileBtn text-primary",color:"lightprimary",variant:"flat",rounded:"pill"},m),{default:t(()=>[e(g,{icon:"mdi-account-edit",size:"25"})]),_:2},1040)]),default:t(()=>[e(X,null,{default:t(()=>[e(Y,null,{default:t(()=>[Ce]),_:1}),e(Z,null,{default:t(()=>[e(O,null,{default:t(()=>[e(ee,null,{default:t(()=>[e(te,{cols:"12"},{default:t(()=>[e(L,{label:"原密码*",type:"password",modelValue:o(r),"onUpdate:modelValue":c[1]||(c[1]=m=>C(r)?r.value=m:r=m),required:""},null,8,["modelValue"]),e(L,{label:"新密码*",type:"password",modelValue:o(u),"onUpdate:modelValue":c[2]||(c[2]=m=>C(u)?u.value=m:u=m),required:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),ke,ye,_("small",null,h(o(f)),1)]),_:1}),e(ae,null,{default:t(()=>[e(T),e(V,{color:"blue-darken-1",variant:"text",onClick:c[3]||(c[3]=m=>C(n)?n.value=!1:n=!1)},{default:t(()=>[v(" 关闭 ")]),_:1}),e(V,{color:"blue-darken-1",variant:"text",onClick:x},{default:t(()=>[v(" 提交 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(V,{class:"profileBtn text-primary",color:"lightprimary",variant:"flat",onClick:c[5]||(c[5]=m=>d("https://github.com/Soulter/AstrBot")),rounded:"pill"},{default:t(()=>[e(g,{icon:"mdi-github",size:"25"})]),_:1})]),_:1}))}}),Se=z({__name:"FullLayout",setup(a){const l=S();return(n,r)=>(s(),i(de,null,{default:t(()=>[e(ne,{theme:"PurpleTheme",class:oe([o(l).fontTheme,o(l).mini_sidebar?"mini-sidebar":"",o(l).inputBg?"inputWithbg":""])},{default:t(()=>[e(be),e(xe),e(re,null,{default:t(()=>[e(O,{fluid:"",class:"page-wrapper"},{default:t(()=>[_("div",null,[e(o(ue))])]),_:1})]),_:1})]),_:1},8,["class"])]),_:1}))}});export{Se as default};