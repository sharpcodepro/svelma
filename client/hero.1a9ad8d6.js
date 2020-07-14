import{c as s,d as t,b as n,A as a,B as e,x as r,l as i,u as c,s as o,y as l,h as p,e as h,J as u,f as d,g as f,i as m,m as y,H as $,k as b,r as v,t as g,a as k,G as E}from"./chunk.c4d20469.js";import{w as H}from"./chunk.6c9c176e.js";import"./chunk.0a41e55b.js";import{a as T}from"./chunk.b7a8adb2.js";import"./chunk.dd2f46e7.js";import{a as w}from"./chunk.e8e7c3d9.js";function j(s){var t,n,r,c,o,l,b,v,g,k,T;return{c(){t=h("section"),n=h("div"),r=h("div"),c=h("h1"),o=u("Title"),l=a(),b=h("h2"),v=u("Subtitle"),this.h()},l(s){t=d(s,"SECTION",{class:!0},!1);var a=f(t);n=d(a,"DIV",{class:!0},!1);var i=f(n);r=d(i,"DIV",{class:!0},!1);var h=f(r);c=d(h,"H1",{class:!0},!1);var u=f(c);o=e(u,"Title"),u.forEach(p),l=e(h,"\n            "),b=d(h,"H2",{class:!0},!1);var m=f(b);v=e(m,"Subtitle"),m.forEach(p),h.forEach(p),i.forEach(p),a.forEach(p),this.h()},h(){m(c,"class","title"),m(b,"class","subtitle"),m(r,"class","container"),m(n,"class","hero-body"),m(t,"class",g="hero "+s.type)},m(s,a){i(s,t,a),y(t,n),y(n,r),y(r,c),y(c,o),y(r,l),y(r,b),y(b,v),T=!0},p(s,n){T&&!s.type||g===(g="hero "+n.type)||m(t,"class",g)},i(s){T||(E(()=>{k||(k=$(t,H,{},!0)),k.run(1)}),T=!0)},o(s){k||(k=$(t,H,{},!1)),k.run(0),T=!1},d(s){s&&(p(t),k&&k.end())}}}function x(s){var t,n,r,l,$,k,E,H,T,w,x=s.type&&j(s);return{c(){t=h("div"),n=h("button"),r=u("Update Hero"),l=a(),$=h("br"),k=a(),E=h("br"),H=a(),x&&x.c(),this.h()},l(s){t=d(s,"DIV",{slot:!0},!1);var a=f(t);n=d(a,"BUTTON",{class:!0},!1);var i=f(n);r=e(i,"Update Hero"),i.forEach(p),l=e(a,"\n\n    "),$=d(a,"BR",{},!1),f($).forEach(p),k=e(a,"\n    "),E=d(a,"BR",{},!1),f(E).forEach(p),H=e(a,"\n\n    "),x&&x.l(a),a.forEach(p),this.h()},h(){m(n,"class","button is-primary"),m(t,"slot","preview"),w=b(n,"click",s.update)},m(s,a){i(s,t,a),y(t,n),y(n,r),y(t,l),y(t,$),y(t,k),y(t,E),y(t,H),x&&x.m(t,null),T=!0},p(s,n){n.type?x?(x.p(s,n),c(x,1)):((x=j(n)).c(),c(x,1),x.m(t,null)):x&&(v(),o(x,1,1,()=>{x=null}),g())},i(s){T||(c(x),T=!0)},o(s){o(x),T=!1},d(s){s&&p(t),x&&x.d(),w()}}}function B(s){return{c:k,l:k,m:k,p:k,i:k,o:k,d:k}}function I(s){var t,n,h=new T({props:{title:"Hero",subtitle:"Hero headers"}}),u=new w({props:{horizontal:!0,code:"<script>\n  import { slide } from 'svelte/transition'\n\n  const types = ['is-primary', 'is-success', 'is-danger', 'is-warning', 'is-info', 'is-link']\n  let type = 'is-primary'\n\n  async function update() {\n    type = ''\n\n    setTimeout(() => {\n      type = types[Math.floor(Math.random() * types.length)];\n    }, 1000)\n  }\n<\/script>\n\n<button class=\"button is-primary\" on:click={update}>Update Hero</button>\n\n<br />\n<br />\n\n{#if type}\n  <section class=\"hero {type}\" transition:slide>\n    <div class=\"hero-body\">\n      <div class=\"container\">\n        <h1 class=\"title\">\n          Title\n        </h1>\n        <h2 class=\"subtitle\">\n          Subtitle\n        </h2>\n      </div>\n    </div>\n  </section>\n{/if}",$$slots:{default:[B],preview:[x]},$$scope:{ctx:s}}});return{c(){h.$$.fragment.c(),t=a(),u.$$.fragment.c()},l(s){h.$$.fragment.l(s),t=e(s,"\n\n"),u.$$.fragment.l(s)},m(s,a){r(h,s,a),i(s,t,a),r(u,s,a),n=!0},p(s,t){var n={};(s.$$scope||s.type)&&(n.$$scope={changed:s,ctx:t}),u.$set(n)},i(s){n||(c(h.$$.fragment,s),c(u.$$.fragment,s),n=!0)},o(s){o(h.$$.fragment,s),o(u.$$.fragment,s),n=!1},d(s){l(h,s),s&&p(t),l(u,s)}}}function M(s,t,n){const a=["is-primary","is-success","is-danger","is-warning","is-info","is-link"];let e="is-primary";return{type:e,update:async function(){n("type",e=""),setTimeout(()=>{n("type",e=a[Math.floor(Math.random()*a.length)])},1e3)}}}export default class extends s{constructor(s){super(),t(this,s,M,I,n,[])}}
//# sourceMappingURL=hero.1a9ad8d6.js.map
