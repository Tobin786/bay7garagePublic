import{s as j,j as t,P as b,_ as P,u as g,f as L,c as w,d as k,B,e as A,A as C,h as T,r as v,g as D,i as O,k as S,C as H}from"./sanity-86760c69.js";const W=o=>{let{index:n,menuItems:a,menuItemGroups:i,title:r}=o;const{features:c}=g(),{collapsed:l,isLast:p}=L(),u=p&&!l?-1:0;return t.jsx(w,{actions:t.jsx(k,{menuItems:a,menuItemGroups:i}),backButton:c.backButton&&n>0&&t.jsx(B,{as:A,"data-as":"a",icon:C,mode:"bleed"}),tabIndex:u,title:r})};var x=Object.freeze,E=Object.defineProperty,G=(o,n)=>x(E(o,"raw",{value:x(n||o.slice())})),I;const R=j.hr(I||(I=G([`
  background-color: var(--card-border-color);
  height: 1px;
  margin: 0;
  border: none;
`])));function z(o){const{childItemId:n,items:a,isActive:i,layout:r,showIcons:c,title:l}=o,{collapsed:p}=T(),u=v.useCallback(e=>{var s;return((s=a==null?void 0:a.find((d,f)=>f===e))==null?void 0:s.type)==="divider"},[a]),h=v.useCallback(e=>{var s;const d=(s=e.displayOptions)==null?void 0:s.showIcon;return typeof d<"u"?d!==!1:c!==!1},[c]),m=v.useCallback((e,s)=>{const{virtualIndex:d}=s;if(e.type==="divider")return t.jsx(D,{marginTop:1,marginBottom:2,children:t.jsx(R,{})},"divider-".concat(d));const f=!i&&n===e.id,y=i&&n===e.id,_=e._id&&e.schemaType?{_id:e._id,_type:e.schemaType.name,title:e.title}:void 0;return t.jsx(O,{icon:h(e)?e.icon:!1,id:e.id,layout:r,marginBottom:1,pressed:f,schemaType:e.schemaType,selected:y,title:e.title,value:_},e.id)},[n,i,r,h]);return t.jsx(S,{overflow:p?"hidden":"auto",children:a&&a.length>0&&t.jsx(H,{activeItemDataAttr:"data-hovered",ariaLabel:"List of ".concat(l),canReceiveFocus:!0,focusRingOffset:-3,getItemDisabled:u,itemHeight:51,items:a,onlyShowSelectionWhenActive:!0,padding:2,paddingBottom:1,renderItem:m,wrapAround:!1})})}function K(o){const{childItemId:n,index:a,isActive:i,isSelected:r,pane:c,paneKey:l}=o,{defaultLayout:p,displayOptions:u,items:h,menuItems:m,menuItemGroups:e,title:s}=c,d=(u==null?void 0:u.showIcons)!==!1;return t.jsxs(b,{currentMaxWidth:350,"data-testid":"desk-tool-list-pane","data-ui":"ListPane",id:l,maxWidth:640,minWidth:320,selected:r,children:[P,t.jsx(W,{index:a,menuItems:m,menuItemGroups:e,title:s}),t.jsx(z,{childItemId:n,isActive:i,items:h,layout:p,showIcons:d,title:s},l)]})}export{K as default};
