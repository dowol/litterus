import{h as F,r as i,j as t,o as U,L as y,S as D,i as E}from"./vendor-DSTNHnPn.js";import{s as l,A as M,T as O,a as S,B as R,D as P,L as A,b as C,c as $,I as w,C as W,d as V,e as u,f as z,S as k,F as B,P as H,h as I,i as v,j as q,k as J}from"./mui-Y_vgnCaU.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const p of a.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&c(p)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}})();const j=F(e=>({text:"",fontSize:32,fontStyle:"normal",fontWeight:400,setText(o){e(o?{text:o}:{text:""})},setFontSize:o=>{e({fontSize:o})},setFontStyle:o=>{e({fontStyle:o})},setFontWeight(o){e({fontWeight:o})}})),K=l(M)`
    position: sticky;
    top: 0;
`,G=l(O)`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    
    label {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
        flex-grow: 1;
    }
    
    * {
        color: white;
    }
`,Q=l("input")`
    width: 100%;
    font-size: 1rem;
    border: 0;
    border-radius: 0;
    border-bottom: 1px solid lightgray;
    padding: .25rem .375rem;
    white-space: nowrap;
    resize: none;
    font-family: system-ui;
    line-height: 1.2;
    height: 1.25rem;
    background-color: transparent;

    &:focus {
        outline: 0;
    }

    &::placeholder {
        font-style: italic;
        color: lightgray;
    }
`;function X(){const e=j(r=>r.setText),o=i.useCallback(r=>{r.currentTarget.value=r.currentTarget.value.replaceAll(/\n+/g," "),console.log(r.currentTarget.value),e(r.currentTarget.value)},[]);return t.jsx(K,{children:t.jsxs(G,{children:[t.jsx(S,{component:"h1",variant:"h6",translate:"no",children:"Litterus"}),t.jsxs("label",{children:[t.jsx(R,{}),t.jsx(Q,{placeholder:"Write a sample text here.",onInput:o,autoComplete:"on",type:"text"})]})]})})}const f=F((e,o)=>({fontList:[],current:"",metadataOpen:!1,add(r){const c=URL.createObjectURL(r);return e(({fontList:n})=>({fontList:[...n,c]})),c},remove(r){URL.canParse(r)||(r=`blob:${location.origin}/${r}`),e(({fontList:c})=>({fontList:c.filter(n=>n!==r)})),URL.revokeObjectURL(r)},setCurrent(r){e({current:r})},openMetadata(){e({metadataOpen:!0})},closeMetadata(){e({metadataOpen:!1})}}));async function Y(e){try{const o=await U.load(e),r={fontName:o.names.fontFamily.en,subFamilyName:o.names.fontSubfamily?.en,weight:o.tables.os2.usWeightClass,style:o.tables.os2.fsSelection&1?"italic":"normal",localizedName:o.names.fontFamily,copyright:o.names.copyright?.en,version:o.names.version.en,designer:o.names.designer?.en};return r.weight<=250&&(/Thin$/i.test(r.fontName)?r.weight=100:/ExtraLight$/i.test(r.fontName)&&(r.weight=200)),r}catch(o){return console.error(o),null}}const N={100:"Thin",200:"ExtraLight",300:"Light",400:"Regular",500:"Medium",600:"SemiBold",700:"Bold",800:"ExtraBold",900:"Black"},Z=l(P)`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
`,m=l(A)`
    display: flex;
    flex-flow: column-reverse nowrap;

    .MuiListItemText-primary {
        border-left: .125rem solid lightgray;
        padding-left: .375rem;
    }

    .MuiListItemText-secondary {
        font-family: monospace;
    }
`,_=l(C)`
    background-color: whitesmoke;
    overflow-y: auto;
`,h=t.jsx(k,{variant:"rectangular"});function ee(){const[e,o]=i.useState(null),r=f(a=>a.current),c=f(a=>a.metadataOpen),n=f(a=>a.closeMetadata);return i.useEffect(()=>{o(JSON.parse(sessionStorage.getItem(r)||"null"))},[r]),t.jsxs($,{open:c,onClose:n,children:[t.jsxs(Z,{component:"div",children:[t.jsx(S,{component:"h2",variant:"h5",children:"Font Metadata"}),t.jsx(w,{onClick:n,children:t.jsx(W,{})})]}),t.jsx(V,{component:"section",elevation:2,id:"font-metadata",children:t.jsxs("article",{children:[t.jsx(i.Activity,{mode:e?"visible":"hidden",children:t.jsxs(_,{children:[t.jsx(u,{children:t.jsx(m,{secondary:"Font Name",primary:e?.fontName??h})}),t.jsx(u,{children:t.jsx(m,{secondary:"Font Weight",primary:e?`${e.weight} / ${N[e.weight]}`:h})}),t.jsx(u,{children:t.jsx(m,{secondary:"Font Style",primary:e?e.style.charAt(0).toUpperCase()+e.style.slice(1):h})}),e?.version&&t.jsx(u,{children:t.jsx(m,{secondary:"Version",primary:t.jsx(y,{children:e?.version??h})})}),e?.designer&&t.jsx(u,{children:t.jsx(m,{secondary:"Author",primary:t.jsx(y,{children:e.designer})})}),e?.copyright&&t.jsx(u,{children:t.jsx(m,{secondary:"Copyright",primary:t.jsx(y,{children:e.copyright})})})]})}),t.jsx(i.Activity,{mode:e?"hidden":"visible",children:t.jsx(z,{severity:"error",children:"This is an error Alert."})})]})})]})}const te=l("div")`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    column-gap: 1.5rem;
    border: 1px dashed gray;
    border-radius: .5rem;
    margin: .5rem;
    position: sticky;
    bottom: 0;
    background-color: rgba(245, 245, 245, 87.5%);
    
    flex-grow: 1;

    svg {
        width: 2rem;
        height: 2rem;
    }

    p.prompt {
        font-size: 1.125rem;
        text-align: center;
        
        strong {
            text-transform: uppercase;
        }
    }

    input[type=file] {
        display: none;
    }
`,L=["otf","ttf","woff","woff2"];function ne(){const e=i.useRef(null),o=f(s=>s.add),r=i.useCallback(s=>{s.stopPropagation(),s.isPropagationStopped()&&e.current.click()},[]),c=i.useCallback(s=>{s.preventDefault(),s.stopPropagation()},[]),n=i.useCallback(s=>{s.preventDefault(),s.stopPropagation()},[]),a=i.useCallback(s=>{s.preventDefault(),s.stopPropagation()},[]),p=i.useCallback(s=>{s.preventDefault(),s.stopPropagation(),[...s.dataTransfer.files].forEach(o)},[]),x=i.useCallback(s=>{s.currentTarget.files&&s.currentTarget.files.length>0?[...s.currentTarget.files].forEach(o):console.warn("No font files were selected.")},[]);return t.jsxs(te,{onClick:r,onDragEnter:c,onDragLeave:n,onDragOver:a,onDrop:p,onDoubleClick:r,children:[t.jsx(B,{}),t.jsxs("p",{className:"prompt",children:[t.jsx("strong",{children:"Click or Drop font files here"}),t.jsx("br",{}),"to load your fonts ",t.jsx("br",{}),t.jsxs("small",{children:[t.jsx("strong",{children:L.map(s=>s.toUpperCase()).join(", ")+" "}),"types of file are supported."]})]}),t.jsx("input",{type:"file",onChange:x,multiple:!0,accept:L.map(s=>"."+s).join(","),ref:e})]})}function oe(e){return new URL(e.toString(),"blob:"+location.origin).toString()}function re(e){return e.startsWith("blob:")?e.substring(e.lastIndexOf("/")+1):void 0}const se={getURL:oe,getUUID:re},ae=l(H)`
    margin: .5rem;
    padding: .375rem .75rem;
    overflow-x: hidden;

    & p.sample-text {
        text-align: left;
        unicode-bidi: isolate;
        margin: 0;
        text-wrap: nowrap;

        overflow-x: hidden;
        padding: 0 .25rem;
        user-select: none;
        
        &.empty-sample-text {
            color: gray;
        }
    }
`,ie=l("div")`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
`,le=l("div")`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
`,ce=l("h6")`
    font-weight: 200;
    margin: 0;
    font-size: 1rem;
    border-bottom: 1px solid gray;
    padding: 0 .375rem;

    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: flex-start;
    gap: .25rem;
`,de=l("strong")`
    text-transform: uppercase;
    font-weight: 700;
    font-style: italic;
`,fe=l(I)``,pe=l(I)`
    font-style: italic;
`;function ue({src:e,family:o}){e||="";const r=i.useMemo(()=>se.getUUID(e),[e]),c=f(d=>d.remove),[n,a]=i.useState(null),p=f(d=>d.setCurrent),x=f(d=>d.openMetadata),s=i.useCallback(()=>{c(e),sessionStorage.removeItem(e),URL.revokeObjectURL(e)},[]),b=i.useCallback(()=>{p(e),x()},[]);return i.useEffect(()=>{let d;return Y(e).then(g=>{a(g),sessionStorage.setItem(e,JSON.stringify(g)),d=new FontFace(g.fontName,`url('${e}')`,{style:g.style.toString(),weight:g.weight.toString()}),document.fonts.add(d),d.load().catch(T=>console.error(T))}),()=>void(d&&document.fonts.delete(d))},[]),t.jsxs(ae,{component:"li",sx:{"& p.sample-text":{fontFamily:o||`${n?.fontName&&`'${n.fontName}'`}, system-ui, sans-serif`,fontWeight:n?.weight.toString(),fontStyle:n?.style.toString()}},elevation:2,id:r?"font_"+r:void 0,children:[t.jsxs(ie,{children:[t.jsxs(ce,{translate:"no",children:[t.jsx(de,{children:o||(n?.fontName??t.jsx(k,{variant:"rectangular"}))}),n?.weight&&t.jsx(fe,{label:`${n.weight} · ${N[n.weight]}`,size:"small"}),n?.style==="italic"&&t.jsx(pe,{label:"italic",size:"small"})]}),t.jsxs(le,{children:[t.jsx(v,{title:`View Metadata of ${n?.fontName} ${n?.subFamilyName}`,arrow:!0,children:t.jsx(w,{onClick:b,children:t.jsx(q,{})})}),t.jsx(v,{title:`Unload ${n?.fontName} ${n?.subFamilyName}`,arrow:!0,children:t.jsx(w,{onClick:s,children:t.jsx(J,{})})})]})]}),t.jsx(me,{})]})}function me(){const e=j(o=>o.text);return t.jsx("p",{className:"sample-text"+(e?"":" empty-sample-text"),translate:"no",children:e||"Sample text will be displayed here."})}const ge=l("article")`
    display: flex;
    flex-flow: column nowrap;
    align-items: stretch;
    justify-content: space-between;

    @media (min-width: 1024px) {
        width: 960px;
        margin: auto;
    }

    flex-grow: 1;

    ul {
        overflow-x: hidden;
        overflow-y: auto;
    }
`;function he(){const e=i.useRef(null),o=f(n=>n.fontList),r=j(n=>n.fontSize),c=i.useCallback(()=>{const n=D.create(e.current,{animation:150,handle:".sample-text"});return()=>{n.destroy()}},[]);return t.jsxs(ge,{ref:c,children:[t.jsx(C,{ref:e,sx:{"& p.sample-text":{fontSize:r}},children:o.map(n=>i.createElement(ue,{src:n,key:n}))}),t.jsx(ne,{})]})}const xe=l("div")`
    display: flex;
    flex-flow: column nowrap;
    align-items: stretch;
    justify-content: flex-start;
    width: 100vw;
    height: 100vh;
`,ye=l("div")`
    flex-grow: 1;
    
    display: flex;
    flex-flow: column nowrap;
    align-items: stretch;
    justify-content: stretch;
`;function we(){return t.jsxs(xe,{children:[t.jsx(X,{}),t.jsxs(ye,{children:[t.jsx(ee,{}),t.jsx(he,{})]})]})}if("serviceWorker"in navigator)navigator.serviceWorker.register("/sw.js").then(e=>{console.log(e)}).catch(e=>{console.error(e)});else{class e extends Error{code;constructor(){super(),this.code="EUNSUPPORTEDENV",this.message=`Litterus can't be run on your browser due to technical problem.
Please upgrade your browser as latest version.`,this.cause="ServiceWorker not available"}}throw new e}window.addEventListener("storage",e=>{e.key?.startsWith("font:")&&e.oldValue&&URL.revokeObjectURL(e.oldValue)});E.createRoot(document.querySelector(".app-root")).render(t.jsx(i.StrictMode,{children:t.jsx(we,{})}));
