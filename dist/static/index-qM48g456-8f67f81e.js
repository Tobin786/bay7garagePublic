import{S as ve,E as Pe,o as Ie,l as we,r as x,m as U,n as q,p as J,u as A,q as be,s as ue,t as L,j as o,L as F,v as H,w as _e,x as je,y as de,z as Se,F as ke,G as Ce,H as z,I as Re,J as W,K as Ee,M as Te,N as De,h as ze,O as Le,Q as Me,e as Oe,R as Ne,T as Ve,U as pe,V as Ae,W as T,X as $,Y as N,Z as fe,$ as Be,a0 as K,a1 as Z,a2 as ee,g as V,a3 as R,a4 as he,B as We,a5 as $e,P as Ge,c as Fe,k as He,a6 as te,a7 as Ke,a8 as Ue,a9 as ne,aa as Y,ab as qe,ac as Je,ad as Ye,ae as Qe,af as Xe,ag as Ze,ah as et,ai as M,aj as tt,ak as nt,al as at,am as rt,an as st,ao as ot}from"./sanity-86760c69.js";function me(e,n){var t=typeof n=="object";return new Promise(function(r,c){var f=new ve({next:function(i){r(i),f.unsubscribe()},error:c,complete:function(){t?r(n.defaultValue):c(new Pe)}});e.subscribe(f)})}function it(){return Ie(function(e,n){var t,r=!1;e.subscribe(we(n,function(c){var f=t;t=c,r&&n.next([f,c]),r=!0}))})}const lt=[];function ct(e){const{children:n,flatIndex:t,index:r,params:c,payload:f,siblingIndex:i}=e,{navigate:l,navigateIntent:a,resolvePathFromState:s}=U(),p=q(),{panes:u,expand:P}=ze(),h=x.useMemo(()=>(p==null?void 0:p.panes)||lt,[p==null?void 0:p.panes]),y=x.useMemo(()=>u==null?void 0:u[u.length-2],[u]),g=r-1,j=x.useCallback(m=>{const d=h[g]||[],I=d[i],k=m(d,I),E=[...h.slice(0,g),k,...h.slice(g+1)];return{...p||{},panes:E}},[g,h,p,i]),v=x.useCallback(m=>{const d=j(m);return setTimeout(()=>l(d),0),d},[j,l]),w=x.useCallback(m=>{const d=j((I,k)=>[...I.slice(0,i),{...k,params:m},...I.slice(i+1)]);return s(d)},[j,s,i]),S=x.useCallback(m=>{v((d,I)=>[...d.slice(0,i),{...I,payload:m},...d.slice(i+1)])},[v,i]),b=x.useCallback(m=>{v((d,I)=>[...d.slice(0,i),{...I,params:m},...d.slice(i+1)])},[v,i]),_=x.useCallback(m=>{let{id:d,parentRefPath:I,type:k,template:E}=m;l({panes:[...h.slice(0,g+1),[{id:d,params:{template:E.id,parentRefPath:Le(I),type:k},payload:E.params}]]})},[g,l,h]),C=x.useMemo(()=>({index:t,groupIndex:g,siblingIndex:i,payload:f,params:c,hasGroupSiblings:h[g]?h[g].length>1:!1,groupLength:h[g]?h[g].length:0,routerPanesState:h,ChildLink:Me,BackLink:Oe,ReferenceChildLink:Ne,handleEditReference:_,ParameterizedLink:Ve,replaceCurrent:function(){let m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};v(()=>[{id:m.id||"",payload:m.payload,params:m.params||{}}])},closeCurrent:()=>{v((m,d)=>m.length>1?m.filter(I=>I!==d):m)},closeCurrentAndAfter:function(){(arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0)&&y&&P(y.element),l({panes:[...h.slice(0,g)]},{replace:!0})},duplicateCurrent:m=>{v((d,I)=>{const k={...I,payload:(m==null?void 0:m.payload)||I.payload,params:(m==null?void 0:m.params)||I.params};return[...d.slice(0,i),k,...d.slice(i)]})},setView:m=>{const d=pe(c,"view");return b(m?{...d,view:m}:d)},setParams:b,setPayload:S,createPathWithParams:w,navigateIntent:a}),[t,g,i,f,c,h,_,b,S,w,a,v,y,l,P]);return o.jsx(Ae.Provider,{value:C,children:n})}class D extends Error{constructor(n){let{message:t,context:r,helpId:c,cause:f}=n;super(t),this.context=r,this.helpId=c,this.cause=f}}const ae=new WeakMap;function B(e){const n=ae.get(e);if(n)return n;const t=rt();return ae.set(e,t),t}const re=new WeakMap;function xe(e,n){const t=re.get(e)||new Map;if(t){const f=t.get(n);if(f)return f}const r=e[n];if(typeof r!="function")throw new Error("Expected property `".concat(n,"` to be a function but got ").concat(typeof r," instead."));const c=r.bind(e);return t.set(n,c),re.set(e,t),c}const ut=e=>!!e&&typeof(e==null?void 0:e.then)=="function",dt=e=>J(e)?typeof e.serialize=="function":!1,pt=e=>(n,t,r)=>{try{return e(n,t,r)}catch(c){throw c instanceof D?c:new D({message:typeof(c==null?void 0:c.message)=="string"?c.message:"",context:t,cause:c})}},ft=e=>function(){return e(...arguments).pipe(st(1),ot())};function ye(e){const n=pt(ft(e((t,r,c)=>{if(!t)throw new D({message:"Pane returned no child",context:r,helpId:"structure-item-returned-no-child"});return ut(t)||Ze(t)?et(t).pipe(Y(f=>n(f,r,c))):dt(t)?n(t.serialize(r),r,c):typeof t=="function"?n(t(r.id,r),r,c):M(t)})));return n}async function ht(e){const n=new Map,r=ye(a=>(s,p,u)=>{const P=s&&"".concat(B(s),"-").concat(p.path.join("__")),h=P&&n.get(P);if(h)return h;const y=a(s,p,u);return P&&n.set(P,y),y}),c=[[{id:"__edit__".concat(e.params.id),params:{...pe(e.params,["id"]),type:e.params.type},payload:e.payload}]];async function f(a){let{currentId:s,flatIndex:p,intent:u,params:P,parent:h,path:y,payload:g,unresolvedPane:j,levelIndex:v,structureContext:w}=a;var S;if(!j)return[];const{id:b,type:_,...C}=P,d=await me(r(j,{id:s,splitIndex:0,parent:h,path:y,index:p,params:{},payload:void 0,structureContext:w},p));return d.type==="document"&&d.id===b?[{panes:[...y.slice(0,y.length-1).map(I=>[{id:I}]),[{id:b,params:C,payload:g}]],depthIndex:y.length,levelIndex:v}]:(S=d.canHandleIntent)!=null&&S.call(d,u,P,{pane:d,index:p})||d.type==="documentList"&&d.schemaTypeName===_&&d.options.filter==="_type == $type"?[{panes:[...y.map(I=>[{id:I}]),[{id:P.id,params:C,payload:g}]],depthIndex:y.length,levelIndex:v}]:d.type==="list"&&d.child&&d.items?(await Promise.all(d.items.map((I,k)=>I.type==="divider"?Promise.resolve([]):f({currentId:I._id||I.id,flatIndex:p+1,intent:u,params:P,parent:d,path:[...y,I.id],payload:g,unresolvedPane:typeof d.child=="function"?xe(d,"child"):d.child,levelIndex:k,structureContext:w})))).flat():[]}const l=(await f({currentId:"root",flatIndex:0,levelIndex:0,intent:e.intent,params:e.params,parent:null,path:[],payload:e.payload,unresolvedPane:e.rootPaneNode,structureContext:e.structureContext})).sort((a,s)=>a.depthIndex===s.depthIndex?a.levelIndex-s.levelIndex:a.depthIndex-s.depthIndex)[0];return l?l.panes:c}const mt=(e,n)=>{const t=e.replace(/^__edit__/,""),{params:r,payload:c,structureContext:{resolveDocumentNode:f}}=n,{type:i,template:l}=r;if(!i)throw new Error("Document type for document with ID ".concat(t," was not provided in the router params."));let a=f({schemaType:i,documentId:t}).id("editor");return l&&(a=a.initialValueTemplate(l,c)),a.serialize()};function xt(e){var n,t;return"contextHash(".concat(JSON.stringify({id:e.id,parentId:parent&&B(parent),path:e.path,index:e.index,splitIndex:e.splitIndex,serializeOptionsIndex:(n=e.serializeOptions)==null?void 0:n.index,serializeOptionsPath:(t=e.serializeOptions)==null?void 0:t.path}),")")}const se=e=>{const n={type:e.type,id:e.routerPaneSibling.id,params:e.routerPaneSibling.params||{},payload:e.routerPaneSibling.payload||null,flatIndex:e.flatIndex,groupIndex:e.groupIndex,siblingIndex:e.siblingIndex,path:e.path,paneNode:e.type==="resolvedMeta"?B(e.paneNode):null};return"metaHash(".concat(JSON.stringify(n),")")};function O(e){let{unresolvedPane:n,flattenedRouterPanes:t,parent:r,path:c,resolvePane:f,structureContext:i}=e;const[l,...a]=t,s=a[0],p={id:l.routerPaneSibling.id,splitIndex:l.siblingIndex,parent:r,path:[...c,l.routerPaneSibling.id],index:l.flatIndex,params:l.routerPaneSibling.params||{},payload:l.routerPaneSibling.payload,structureContext:i};try{return f(n,p,l.flatIndex).pipe(Y(u=>{const P={type:"resolvedMeta",...l,paneNode:u,path:p.path},h=a.map((g,j)=>({type:"loading",path:[...p.path,...a.slice(j).map((S,b)=>"[".concat(g.flatIndex+b,"]"))],paneNode:null,...g}));if(!a.length)return M([P]);let y;return s!=null&&s.routerPaneSibling.id.startsWith("__edit__")?y=O({unresolvedPane:mt,flattenedRouterPanes:a,parent:r,path:p.path,resolvePane:f,structureContext:i}):l.groupIndex===(s==null?void 0:s.groupIndex)?y=O({unresolvedPane:n,flattenedRouterPanes:a,parent:r,path:c,resolvePane:f,structureContext:i}):y=O({unresolvedPane:typeof u.child=="function"?xe(u,"child"):u.child,flattenedRouterPanes:a,parent:u,path:p.path,resolvePane:f,structureContext:i}),tt(M([P,...h]),y.pipe(T(g=>[P,...g])))}))}catch(u){if(u instanceof D&&(u.context&&console.warn("Pane resolution error at index ".concat(u.context.index).concat(u.context.splitIndex>0?" for split pane index ".concat(u.context.splitIndex):"",": ").concat(u.message).concat(u.helpId?" - see ".concat(he(u.helpId)):""),u),u.helpId==="structure-item-returned-no-child"))return M([]);throw u}}function yt(e){let{routerPanesStream:n,rootPaneNode:t,initialCacheState:r={cacheKeysByFlatIndex:[],flattenedRouterPanes:[],resolvedPaneCache:new Map,resolvePane:()=>nt},structureContext:c}=e;return n.pipe(T(i=>[[{id:"root"}],...i]),T(i=>i.flatMap((a,s)=>a.map((p,u)=>({routerPaneSibling:p,groupIndex:s,siblingIndex:u}))).map((a,s)=>({...a,flatIndex:s}))),Ue([]),it(),T(i=>{let[l,a]=i;for(let s=0;s<a.length;s++){const p=l[s],u=a[s];if(!H(p,u))return{flattenedRouterPanes:a,diffIndex:s}}return{flattenedRouterPanes:a,diffIndex:a.length}}),ne((i,l)=>{const{cacheKeysByFlatIndex:a,resolvedPaneCache:s}=i,{flattenedRouterPanes:p,diffIndex:u}=l,P=a.slice(0,u+1),h=a.slice(u+1),y=new Set(P.flatMap(v=>Array.from(v))),g=h.flatMap(v=>Array.from(v)).filter(v=>!y.has(v));for(const v of g)s.delete(v);return{flattenedRouterPanes:p,cacheKeysByFlatIndex:a,resolvedPaneCache:s,resolvePane:ye(v=>(w,S,b)=>{const _=w&&"".concat(B(w),"-").concat(xt(S)),C=_&&s.get(_);if(C)return C;const m=v(w,S,b);if(!_)return m;const d=a[b]||new Set;return d.add(_),a[b]=d,s.set(_,m),m})}},r),Y(i=>{let{flattenedRouterPanes:l,resolvePane:a}=i;return O({unresolvedPane:t,flattenedRouterPanes:l,parent:null,path:[],resolvePane:a,structureContext:c})})).pipe(ne((i,l)=>l.map((a,s)=>{const p=i[s];return!p||a.type!=="loading"?a:p.routerPaneSibling.id===a.routerPaneSibling.id?p:a}),[]),qe((i,l)=>{if(i.length!==l.length)return!1;for(let a=0;a<l.length;a++){const s=i[a],p=l[a];if(se(s)!==se(p))return!1}return!0}))}function gt(){const e=x.useMemo(()=>new Je(1),[]),n=x.useMemo(()=>e.asObservable().pipe(T(r=>(r==null?void 0:r.panes)||[])),[e]),{state:t}=U();return x.useEffect(()=>{e.next(t)},[t,e]),n}function vt(){const[e,n]=x.useState();if(e)throw e;const{structureContext:t,rootPaneNode:r}=A(),[c,f]=x.useState({paneDataItems:[],resolvedPanes:[],routerPanes:[]}),i=gt();return x.useEffect(()=>{const a=yt({rootPaneNode:r,routerPanesStream:i,structureContext:t}).pipe(T(s=>{const p=s.reduce((h,y)=>{const g=h[y.groupIndex]||[];return g[y.siblingIndex]=y.routerPaneSibling,h[y.groupIndex]=g,h},[]),u=p.length,P=s.map(h=>{var y;const{groupIndex:g,flatIndex:j,siblingIndex:v,routerPaneSibling:w,path:S}=h,b=w.id,_=p[g+1];return{active:g===u-2,childItemId:(y=_==null?void 0:_[0].id)!=null?y:null,index:j,itemId:w.id,groupIndex:g,key:"".concat(h.type==="loading"?"unknown":h.paneNode.id,"-").concat(b,"-").concat(v),pane:h.type==="loading"?z:h.paneNode,params:w.params||{},path:S.join(";"),payload:w.payload,selected:j===s.length-1,siblingIndex:v}});return{paneDataItems:P,routerPanes:p,resolvedPanes:P.map(h=>h.pane)}})).subscribe({next:s=>f(s),error:s=>n(s)});return()=>a.unsubscribe()},[r,i,t]),c}async function Pt(e,n,t){if(n&&t)return{id:n,type:t};if(!n&&t)return{id:Ye(),type:t};if(n&&!t){const r=await me(e.resolveTypeForDocument(n));return{id:n,type:r}}throw new D({message:"Neither document `id` or `type` was provided when trying to resolve intent."})}const It={},wt=x.memo(function(){const{navigate:n}=U(),t=q(x.useCallback(a=>{const s=typeof a.intent=="string"?a.intent:void 0;return s?{intent:s,params:J(a.params)?a.params:It,payload:a.payload}:void 0},[])),{rootPaneNode:r,structureContext:c}=A(),f=be(),[i,l]=x.useState(null);if(i)throw i;return x.useEffect(()=>{if(t){const{intent:a,params:s,payload:p}=t;let u=!1;async function P(){const{id:h,type:y}=await Pt(f,typeof s.id=="string"?s.id:void 0,typeof s.type=="string"?s.type:void 0);if(u)return;const g=await ht({intent:a,params:{...s,id:h,type:y},payload:p,rootPaneNode:r,structureContext:c});u||n({panes:g},{replace:!0})}return P().catch(l),()=>{u=!0}}},[f,t,n,r,c]),null});var oe=Object.freeze,bt=Object.defineProperty,_t=(e,n)=>oe(bt(e,"raw",{value:oe(n||e.slice())})),ie;const jt=ue.span(ie||(ie=_t([`
  &:not(:last-child)::after {
    content: ' ➝ ';
    opacity: 0.5;
  }
`])));function St(e){return e.replace(/\(\.\.\.\)\./g,`(...)
  .`).replace(/__WEBPACK_IMPORTED_MODULE_\d+_+/g,"").replace(/___default\./g,".").replace(new RegExp(" \\(https?:\\/\\/".concat(window.location.host),"g")," (")}function kt(e){let{error:n}=e;if(!(n instanceof D))throw n;const{cause:t}=n,r=(t==null?void 0:t.stack)||n.stack,c=r&&!(t instanceof $)&&!n.message.includes("Module build failed:"),f=t instanceof $?t.path:[],i=t instanceof $&&t.helpId||n.helpId,l=x.useCallback(()=>{window.location.reload()},[]);return o.jsx(N,{height:"fill",overflow:"auto",padding:4,sizing:"border",tone:"critical",children:o.jsxs(fe,{children:[o.jsx(Be,{as:"h2",children:"Encountered an error while reading structure"}),o.jsxs(N,{marginTop:4,padding:4,radius:2,overflow:"auto",shadow:1,tone:"inherit",children:[f.length>0&&o.jsxs(K,{space:2,children:[o.jsx(Z,{children:"Structure path"}),o.jsx(ee,{children:f.slice(1).map((a,s)=>o.jsx(jt,{children:a},"".concat(a,"-").concat(s)))})]}),o.jsxs(K,{marginTop:4,space:2,children:[o.jsx(Z,{children:"Error"}),o.jsx(ee,{children:c?St(r):n.message})]}),i&&o.jsx(V,{marginTop:4,children:o.jsx(R,{children:o.jsx("a",{href:he(i),rel:"noopener noreferrer",target:"_blank",children:"View documentation"})})}),o.jsx(V,{marginTop:4,children:o.jsx(We,{text:"Reload",icon:$e,tone:"primary",onClick:l})})]})]})})}function Ct(e){const{isSelected:n,pane:t,paneKey:r}=e,c=J(t)&&t.type||null;return o.jsxs(Ge,{id:r,selected:n,children:[o.jsx(Fe,{title:"Unknown pane type"}),o.jsx(He,{children:o.jsx(V,{padding:4,children:typeof c=="string"?o.jsxs(R,{as:"p",muted:!0,children:["Structure item of type ",o.jsx("code",{children:c})," is not a known entity."]}):o.jsxs(R,{as:"p",muted:!0,children:["Structure item is missing required ",o.jsx("code",{children:"type"})," property."]})})})]})}const Rt={component:x.lazy(()=>L(()=>import("./index-qgADrliN-8ceb056e.js"),["static/index-qgADrliN-8ceb056e.js","static/sanity-86760c69.js"])),document:x.lazy(()=>L(()=>import("./pane-fPuNka0U-84f63baf.js"),["static/pane-fPuNka0U-84f63baf.js","static/sanity-86760c69.js"])),documentList:x.lazy(()=>L(()=>import("./pane-N0i7rs1r-b108d1bd.js"),["static/pane-N0i7rs1r-b108d1bd.js","static/sanity-86760c69.js"])),list:x.lazy(()=>L(()=>import("./index-guK25TNU-a30dbb95.js"),["static/index-guK25TNU-a30dbb95.js","static/sanity-86760c69.js"]))},Et=x.memo(function(n){const{active:t,childItemId:r,groupIndex:c,index:f,itemId:i,pane:l,paneKey:a,params:s,payload:p,path:u,selected:P,siblingIndex:h}=n,y=Rt[l.type]||Ct;return o.jsx(ct,{flatIndex:f,index:c,params:s,payload:p,siblingIndex:h,children:o.jsx(x.Suspense,{fallback:o.jsx(F,{paneKey:a,path:u,selected:P}),children:o.jsx(y,{childItemId:r||"",index:f,itemId:i,isActive:t,isSelected:P,paneKey:a,pane:l})})})},(e,n)=>{let{params:t={},payload:r=null,...c}=e,{params:f={},payload:i=null,...l}=n;if(!H(t,f)||!H(r,i))return!1;const a=new Set([...Object.keys(c),...Object.keys(l)]);for(const s of a)if(c[s]!==l[s])return!1;return!0});function Tt(){return o.jsx(N,{height:"fill",children:o.jsx(te,{align:"center",height:"fill",justify:"center",padding:4,sizing:"border",children:o.jsx(fe,{width:0,children:o.jsx(N,{padding:4,radius:2,shadow:1,tone:"caution",children:o.jsxs(te,{children:[o.jsx(V,{children:o.jsx(R,{size:1,children:o.jsx(Ke,{})})}),o.jsxs(K,{flex:1,marginLeft:3,space:3,children:[o.jsx(R,{as:"h1",size:1,weight:"bold",children:"No document types"}),o.jsx(R,{as:"p",muted:!0,size:1,children:"Please define at least one document type in your schema."}),o.jsx(R,{as:"p",muted:!0,size:1,children:o.jsx("a",{href:"https://www.sanity.io/docs/create-a-schema-and-configure-sanity-studio",target:"_blank",rel:"noreferrer",children:"Learn how to add a document type →"})})]})]})})})})})}const Dt=e=>{const{documentId:n,documentType:t}=e,r=Qe(n,t),c=de(),f=!(r!=null&&r.published)&&!(r!=null&&r.draft),i=(r==null?void 0:r.draft)||(r==null?void 0:r.published),l=c.get(t),{value:a,isLoading:s}=Xe({enabled:!0,schemaType:l,value:i}),p=f?"New ".concat((l==null?void 0:l.title)||(l==null?void 0:l.name)):(a==null?void 0:a.title)||"Untitled",u=r.ready&&!s,P=ge(p);return x.useEffect(()=>{u&&(document.title=P)},[p,u,P]),null},G=e=>{const{title:n}=e,t=ge(n);return x.useEffect(()=>{document.title=t},[t,n]),null},zt=e=>{const{resolvedPanes:n}=e;if(!(n!=null&&n.length))return null;const t=n[n.length-1];return Mt(t)?o.jsx(G,{}):Lt(t)?t!=null&&t.title?o.jsx(G,{title:t.title}):o.jsx(Dt,{documentId:t.options.id,documentType:t.options.type}):o.jsx(G,{title:t==null?void 0:t.title})};function ge(e){const n=A().structureContext.title;return[e,n].filter(t=>t).join(" | ")}function Lt(e){return e!==z&&e.type==="document"}function Mt(e){return e===z}var le=Object.freeze,Ot=Object.defineProperty,Nt=(e,n)=>le(Ot(e,"raw",{value:le(n||e.slice())})),ce;const Vt=ue(at)(ce||(ce=Nt([`
  min-height: 100%;
  min-width: 320px;
`]))),At=_e("mod+s"),Bt=x.memo(function(n){let{onPaneChange:t}=n;var r;const{push:c}=je(),f=de(),{layoutCollapsed:i,setLayoutCollapsed:l}=A(),{paneDataItems:a,resolvedPanes:s}=vt(),p=q(x.useCallback(v=>typeof v.intent=="string",[])),{sanity:{media:u}}=Se(),[P,h]=x.useState(null),y=x.useCallback(()=>l(!0),[l]),g=x.useCallback(()=>l(!1),[l]);return x.useEffect(()=>{s.length&&t(s)},[t,s]),x.useEffect(()=>{const v=w=>{At(w)&&(w.preventDefault(),c({closable:!0,id:"auto-save-message",status:"info",title:"Your work is automatically saved!",duration:4e3}))};return window.addEventListener("keydown",v),()=>window.removeEventListener("keydown",v)},[c]),((r=f._original)==null?void 0:r.types.some(ke))?o.jsxs(Ce,{element:P||null,children:[o.jsxs(Vt,{flex:1,height:i?void 0:"fill",minWidth:u[1],onCollapse:y,onExpand:g,children:[a.map(v=>{let{active:w,childItemId:S,groupIndex:b,itemId:_,key:C,pane:m,index:d,params:I,path:k,payload:E,siblingIndex:Q,selected:X}=v;return o.jsx(x.Fragment,{children:m===z?o.jsx(F,{paneKey:C,path:k,selected:X}):o.jsx(Et,{active:w,groupIndex:b,index:d,pane:m,childItemId:S,itemId:_,paneKey:C,params:I,payload:E,path:k,selected:X,siblingIndex:Q})},"".concat(m===z?"loading":m.type,"-").concat(d))}),a.length<=1&&p&&o.jsx(F,{paneKey:"intent-resolver"})]}),o.jsx(zt,{resolvedPanes:s}),o.jsx("div",{"data-portal":"",ref:h})]}):o.jsx(Tt,{})});function $t(e){let{tool:{options:n}}=e;const{unstable_sources:t}=Re(),[r]=t,{source:c,defaultDocumentNode:f,structure:i}=n||{};x.useEffect(()=>(W([]),()=>W([])),[]);const[{error:l},a]=x.useState({error:null});return l?o.jsx(kt,{error:l}):o.jsx(Ee,{onCatch:a,children:o.jsx(Te,{name:c||r.name,children:o.jsxs(De,{defaultDocumentNode:f,structure:i,children:[o.jsx(Bt,{onPaneChange:W}),o.jsx(wt,{})]})})})}export{$t as default};
