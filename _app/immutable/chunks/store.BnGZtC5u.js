import{I as k,J as A,K as D,L as C,M as P,D as V,N as E,C as $,O as B,P as W,Q as T,R as y,G as I,H as j,A as p,U as q,V as z,W as G,X as J,Y as K,Z as Q,B as U,w as X,p as Z,z as N,a as F,d as x,x as R,e as ee,_ as re,$ as te,h as ae,a0 as se}from"./runtime.CT0AoZrr.js";import{b as ne}from"./disclose-version.DzVrfM89.js";const ie=new Set,L=new Set;function g(e){var O;var r=this,s=r.ownerDocument,a=e.type,u=((O=e.composedPath)==null?void 0:O.call(e))||[],t=u[0]||e.target,c=0,b=e.__root;if(b){var d=u.indexOf(b);if(d!==-1&&(r===document||r===window)){e.__root=r;return}var l=u.indexOf(r);if(l===-1)return;d<=l&&(c=d)}if(t=u[c]||e.target,t!==r){k(e,"currentTarget",{configurable:!0,get(){return t||s}});var m=P,o=V;A(null),D(null);try{for(var n,i=[];t!==null;){var f=t.assignedSlot||t.parentNode||t.host||null;try{var _=t["__"+a];if(_!==void 0&&!t.disabled)if(C(_)){var[M,...Y]=_;M.apply(t,[e,...Y])}else _.call(t,e)}catch(v){n?i.push(v):n=v}if(e.cancelBubble||f===r||f===null)break;t=f}if(n){for(let v of i)queueMicrotask(()=>{throw v});throw n}}finally{e.__root=r,delete e.currentTarget,A(m),D(o)}}}const ue=["touchstart","touchmove"];function oe(e){return ue.includes(e)}function _e(e,r){var s=r==null?"":typeof r=="object"?r+"":r;s!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=s,e.nodeValue=s==null?"":s+"")}function fe(e,r){return H(e,r)}function be(e,r){E(),r.intro=r.intro??!1;const s=r.target,a=N,u=p;try{for(var t=$(s);t&&(t.nodeType!==8||t.data!==B);)t=W(t);if(!t)throw T;y(!0),I(t),j();const c=H(e,{...r,anchor:t});if(p===null||p.nodeType!==8||p.data!==q)throw z(),T;return y(!1),c}catch(c){if(c===T)return r.recover===!1&&G(),E(),J(s),y(!1),fe(e,r);throw c}finally{y(a),I(u)}}const h=new Map;function H(e,{target:r,anchor:s,props:a={},events:u,context:t,intro:c=!0}){E();var b=new Set,d=o=>{for(var n=0;n<o.length;n++){var i=o[n];if(!b.has(i)){b.add(i);var f=oe(i);r.addEventListener(i,g,{passive:f});var _=h.get(i);_===void 0?(document.addEventListener(i,g,{passive:f}),h.set(i,1)):h.set(i,_+1)}}};d(K(ie)),L.add(d);var l=void 0,m=Q(()=>{var o=s??r.appendChild(U());return X(()=>{if(t){Z({});var n=x;n.c=t}u&&(a.$$events=u),N&&ne(o,null),l=e(o,a)||{},N&&(V.nodes_end=p),t&&F()}),()=>{var f;for(var n of b){r.removeEventListener(n,g);var i=h.get(n);--i===0?(document.removeEventListener(n,g),h.delete(n)):h.set(n,i)}L.delete(d),S.delete(l),o!==s&&((f=o.parentNode)==null||f.removeChild(o))}});return S.set(l,m),l}let S=new WeakMap;function he(e){const r=S.get(e);r&&r()}function ce(e,r,s){if(e==null)return r(void 0),R;const a=ee(()=>e.subscribe(r,s));return a.unsubscribe?()=>a.unsubscribe():a}let w=!1;function pe(e,r,s){const a=s[r]??(s[r]={store:null,source:te(void 0),unsubscribe:R});if(a.store!==e)if(a.unsubscribe(),a.store=e??null,e==null)a.source.v=void 0,a.unsubscribe=R;else{var u=!0;a.unsubscribe=ce(e,t=>{u?a.source.v=t:se(a.source,t)}),u=!1}return ae(a.source)}function ve(){const e={};return re(()=>{for(var r in e)e[r].unsubscribe()}),e}function ye(e){var r=w;try{return w=!1,[e(),w]}finally{w=r}}export{_e as a,pe as b,ye as c,be as h,fe as m,ve as s,he as u};
