import{c as e,d as t,b as n,A as r,e as s,J as a,B as o,f as l,g as c,h as i,i as u,a7 as p,l as f,m as h,a as m,a3 as d,a8 as v,K as g,z as _,x as b,D as E,E as y,u as S,s as $,y as P,q as A,p as C,F as j,Q as R,r as w,t as O,R as L}from"./chunk.c4d20469.js";import{a as N,b as D}from"./chunk.6c9c176e.js";import{a as x,b as I}from"./chunk.0a41e55b.js";const M={};function k(e){var t,n,d,v,g,_,b,E,y,S,$,P,A,C,j,R,w;return{c(){t=r(),n=s("nav"),d=s("div"),v=s("div"),g=s("a"),_=s("img"),b=a("\n        Svelma"),E=r(),y=s("a"),S=s("span"),$=s("i"),P=r(),A=s("div"),C=s("div"),j=s("a"),R=s("span"),w=s("i"),this.h()},l(e){t=o(e,"\n\n"),n=l(e,"NAV",{id:!0,class:!0},!1);var r=c(n);d=l(r,"DIV",{class:!0},!1);var s=c(d);v=l(s,"DIV",{class:!0},!1);var a=c(v);g=l(a,"A",{href:!0,class:!0},!1);var u=c(g);_=l(u,"IMG",{src:!0,class:!0,alt:!0},!1),c(_).forEach(i),b=o(u,"\n        Svelma"),u.forEach(i),E=o(a,"\n      "),y=l(a,"A",{class:!0,href:!0,target:!0},!1);var p=c(y);S=l(p,"SPAN",{class:!0,style:!0},!1);var f=c(S);$=l(f,"I",{class:!0},!1),c($).forEach(i),f.forEach(i),p.forEach(i),a.forEach(i),P=o(s,"\n    "),A=l(s,"DIV",{class:!0},!1);var h=c(A);C=l(h,"DIV",{class:!0},!1);var m=c(C);j=l(m,"A",{class:!0,href:!0,target:!0},!1);var O=c(j);R=l(O,"SPAN",{class:!0,style:!0},!1);var L=c(R);w=l(L,"I",{class:!0},!1),c(w).forEach(i),L.forEach(i),O.forEach(i),m.forEach(i),h.forEach(i),s.forEach(i),r.forEach(i),this.h()},h(){u(_,"src","svelma-logo.svg"),u(_,"class","logo svelte-d4dfyk"),u(_,"alt","Svelma: Bulma components for Svelte"),u(g,"href",e.rootUrl),u(g,"class","navbar-item brand svelte-d4dfyk"),u($,"class","fab fa-github-alt"),u(S,"class","icon"),p(S,"color","#333"),u(y,"class","navbar-item is-hidden-desktop"),u(y,"href",T),u(y,"target","_blank"),u(v,"class","navbar-brand svelte-d4dfyk"),u(w,"class","fab fa-lg fa-github-alt"),u(R,"class","icon"),p(R,"color","#333"),u(j,"class","navbar-item is-hidden-touch"),u(j,"href",T),u(j,"target","_blank"),u(C,"class","navbar-end"),u(A,"class","navbar-menu"),u(d,"class","container"),u(n,"id","navbar"),u(n,"class","navbar has-shadow is-spaced")},m(e,r){f(e,t,r),f(e,n,r),h(n,d),h(d,v),h(v,g),h(g,_),h(g,b),h(v,E),h(v,y),h(y,S),h(S,$),h(d,P),h(d,A),h(A,C),h(C,j),h(j,R),h(R,w)},p(e,t){},i:m,o:m,d(e){e&&(i(t),i(n))}}}const T="https://github.com/c0bra/svelma";function H(e,t,n){let{segment:r}=t;return e.$set=(e=>{"segment"in e&&n("segment",r=e.segment)}),{segment:r,rootUrl:"/svelma"}}class U extends e{constructor(e){super(),t(this,e,H,k,n,["segment"])}}var z="object"==typeof x&&x&&x.Object===Object&&x,B="object"==typeof self&&self&&self.Object===Object&&self,q=z||B||Function("return this")(),F=q.Symbol,K=Object.prototype,G=K.hasOwnProperty,V=K.toString,J=F?F.toStringTag:void 0;var Q=function(e){var t=G.call(e,J),n=e[J];try{e[J]=void 0;var r=!0}catch(e){}var s=V.call(e);return r&&(t?e[J]=n:delete e[J]),s},W=Object.prototype.toString;var X=function(e){return W.call(e)},Z="[object Null]",Y="[object Undefined]",ee=F?F.toStringTag:void 0;var te=function(e){return null==e?void 0===e?Y:Z:ee&&ee in Object(e)?Q(e):X(e)};var ne=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},re="[object AsyncFunction]",se="[object Function]",ae="[object GeneratorFunction]",oe="[object Proxy]";var le=function(e){if(!ne(e))return!1;var t=te(e);return t==se||t==ae||t==re||t==oe},ce=q["__core-js_shared__"],ie=function(){var e=/[^.]+$/.exec(ce&&ce.keys&&ce.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();var ue=function(e){return!!ie&&ie in e},pe=Function.prototype.toString;var fe=function(e){if(null!=e){try{return pe.call(e)}catch(e){}try{return e+""}catch(e){}}return""},he=/^\[object .+?Constructor\]$/,me=Function.prototype,de=Object.prototype,ve=me.toString,ge=de.hasOwnProperty,_e=RegExp("^"+ve.call(ge).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var be=function(e){return!(!ne(e)||ue(e))&&(le(e)?_e:he).test(fe(e))};var Ee=function(e,t){return null==e?void 0:e[t]};var ye=function(e,t){var n=Ee(e,t);return be(n)?n:void 0},Se=ye(Object,"create");var $e=function(){this.__data__=Se?Se(null):{},this.size=0};var Pe=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Ae="__lodash_hash_undefined__",Ce=Object.prototype.hasOwnProperty;var je=function(e){var t=this.__data__;if(Se){var n=t[e];return n===Ae?void 0:n}return Ce.call(t,e)?t[e]:void 0},Re=Object.prototype.hasOwnProperty;var we=function(e){var t=this.__data__;return Se?void 0!==t[e]:Re.call(t,e)},Oe="__lodash_hash_undefined__";var Le=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Se&&void 0===t?Oe:t,this};function Ne(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ne.prototype.clear=$e,Ne.prototype.delete=Pe,Ne.prototype.get=je,Ne.prototype.has=we,Ne.prototype.set=Le;var De=Ne;var xe=function(){this.__data__=[],this.size=0};var Ie=function(e,t){return e===t||e!=e&&t!=t};var Me=function(e,t){for(var n=e.length;n--;)if(Ie(e[n][0],t))return n;return-1},ke=Array.prototype.splice;var Te=function(e){var t=this.__data__,n=Me(t,e);return!(n<0||(n==t.length-1?t.pop():ke.call(t,n,1),--this.size,0))};var He=function(e){var t=this.__data__,n=Me(t,e);return n<0?void 0:t[n][1]};var Ue=function(e){return Me(this.__data__,e)>-1};var ze=function(e,t){var n=this.__data__,r=Me(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Be(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Be.prototype.clear=xe,Be.prototype.delete=Te,Be.prototype.get=He,Be.prototype.has=Ue,Be.prototype.set=ze;var qe=Be,Fe=ye(q,"Map");var Ke=function(){this.size=0,this.__data__={hash:new De,map:new(Fe||qe),string:new De}};var Ge=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ve=function(e,t){var n=e.__data__;return Ge(t)?n["string"==typeof t?"string":"hash"]:n.map};var Je=function(e){var t=Ve(this,e).delete(e);return this.size-=t?1:0,t};var Qe=function(e){return Ve(this,e).get(e)};var We=function(e){return Ve(this,e).has(e)};var Xe=function(e,t){var n=Ve(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Ze(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ze.prototype.clear=Ke,Ze.prototype.delete=Je,Ze.prototype.get=Qe,Ze.prototype.has=We,Ze.prototype.set=Xe;var Ye=Ze,et="__lodash_hash_undefined__";var tt=function(e){return this.__data__.set(e,et),this};var nt=function(e){return this.__data__.has(e)};function rt(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new Ye;++t<n;)this.add(e[t])}rt.prototype.add=rt.prototype.push=tt,rt.prototype.has=nt;var st=rt;var at=function(e,t,n,r){for(var s=e.length,a=n+(r?1:-1);r?a--:++a<s;)if(t(e[a],a,e))return a;return-1};var ot=function(e){return e!=e};var lt=function(e,t,n){for(var r=n-1,s=e.length;++r<s;)if(e[r]===t)return r;return-1};var ct=function(e,t,n){return t==t?lt(e,t,n):at(e,ot,n)};var it=function(e,t){return!(null==e||!e.length)&&ct(e,t,0)>-1};var ut=function(e,t,n){for(var r=-1,s=null==e?0:e.length;++r<s;)if(n(t,e[r]))return!0;return!1};var pt=function(e,t){for(var n=-1,r=null==e?0:e.length,s=Array(r);++n<r;)s[n]=t(e[n],n,e);return s};var ft=function(e){return function(t){return e(t)}};var ht=function(e,t){return e.has(t)},mt=200;var dt=function(e,t,n,r){var s=-1,a=it,o=!0,l=e.length,c=[],i=t.length;if(!l)return c;n&&(t=pt(t,ft(n))),r?(a=ut,o=!1):t.length>=mt&&(a=ht,o=!1,t=new st(t));e:for(;++s<l;){var u=e[s],p=null==n?u:n(u);if(u=r||0!==u?u:0,o&&p==p){for(var f=i;f--;)if(t[f]===p)continue e;c.push(u)}else a(t,p,r)||c.push(u)}return c};var vt=function(e,t){for(var n=-1,r=t.length,s=e.length;++n<r;)e[s+n]=t[n];return e};var gt=function(e){return null!=e&&"object"==typeof e},_t="[object Arguments]";var bt=function(e){return gt(e)&&te(e)==_t},Et=Object.prototype,yt=Et.hasOwnProperty,St=Et.propertyIsEnumerable,$t=bt(function(){return arguments}())?bt:function(e){return gt(e)&&yt.call(e,"callee")&&!St.call(e,"callee")},Pt=Array.isArray,At=F?F.isConcatSpreadable:void 0;var Ct=function(e){return Pt(e)||$t(e)||!!(At&&e&&e[At])};var jt=function e(t,n,r,s,a){var o=-1,l=t.length;for(r||(r=Ct),a||(a=[]);++o<l;){var c=t[o];n>0&&r(c)?n>1?e(c,n-1,r,s,a):vt(a,c):s||(a[a.length]=c)}return a};var Rt=function(e){return e};var wt=function(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)},Ot=Math.max;var Lt=function(e,t,n){return t=Ot(void 0===t?e.length-1:t,0),function(){for(var r=arguments,s=-1,a=Ot(r.length-t,0),o=Array(a);++s<a;)o[s]=r[t+s];s=-1;for(var l=Array(t+1);++s<t;)l[s]=r[s];return l[t]=n(o),wt(e,this,l)}};var Nt=function(e){return function(){return e}},Dt=function(){try{var e=ye(Object,"defineProperty");return e({},"",{}),e}catch(e){}}(),xt=Dt?function(e,t){return Dt(e,"toString",{configurable:!0,enumerable:!1,value:Nt(t),writable:!0})}:Rt,It=800,Mt=16,kt=Date.now;var Tt=function(e){var t=0,n=0;return function(){var r=kt(),s=Mt-(r-n);if(n=r,s>0){if(++t>=It)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}(xt);var Ht=9007199254740991;var Ut=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=Ht};var zt=function(e){return null!=e&&Ut(e.length)&&!le(e)};var Bt=function(e){return gt(e)&&zt(e)},qt=function(e,t){return Tt(Lt(e,t,Rt),e+"")}(function(e,t){return Bt(e)?dt(e,jt(t,1,Bt,!0)):[]});const{Object:Ft}=v;function Kt(e,t,n){const r=Ft.create(e);return r.fc=t[n],r}function Gt(e,t,n){const r=Ft.create(e);return r.c=t[n],r}function Vt(e,t,n){const r=Ft.create(e);return r.c=t[n],r}function Jt(e){var t,n,p,d,v=e.c+"";return{c(){t=s("li"),n=s("a"),p=a(v),d=r(),this.h()},l(e){t=l(e,"LI",{class:!0},!1);var r=c(t);n=l(r,"A",{href:!0},!1);var s=c(n);p=o(s,v),s.forEach(i),d=o(r,"\n      "),r.forEach(i),this.h()},h(){u(n,"href","bulma/"+e.c.toLowerCase()),u(t,"class","svelte-4nh9hb")},m(e,r){f(e,t,r),h(t,n),h(n,p),h(t,d)},p:m,d(e){e&&i(t)}}}function Qt(e){var t,n,r,p=e.c+"";return{c(){t=s("a"),n=a(p),this.h()},l(e){t=l(e,"A",{href:!0},!1);var r=c(t);n=o(r,p),r.forEach(i),this.h()},h(){u(t,"href",r="components/"+e.c.toLowerCase())},m(e,r){f(e,t,r),h(t,n)},p(e,s){e.components&&p!==(p=s.c+"")&&g(n,p),e.components&&r!==(r="components/"+s.c.toLowerCase())&&u(t,"href",r)},d(e){e&&i(t)}}}function Wt(e){for(var t,n,p,m,v=e.c+"",_=e.formComponents,b=[],E=0;E<_.length;E+=1)b[E]=Xt(Kt(e,_,E));return{c(){t=s("p"),n=a(v),p=r(),m=s("ul");for(var e=0;e<b.length;e+=1)b[e].c();this.h()},l(e){t=l(e,"P",{},!1);var r=c(t);n=o(r,v),r.forEach(i),p=o(e,"\n          "),m=l(e,"UL",{class:!0},!1);for(var s=c(m),a=0;a<b.length;a+=1)b[a].l(s);s.forEach(i),this.h()},h(){u(m,"class","svelte-4nh9hb")},m(e,r){f(e,t,r),h(t,n),f(e,p,r),f(e,m,r);for(var s=0;s<b.length;s+=1)b[s].m(m,null)},p(e,t){if(e.components&&v!==(v=t.c+"")&&g(n,v),e.formComponents){_=t.formComponents;for(var r=0;r<_.length;r+=1){const n=Kt(t,_,r);b[r]?b[r].p(e,n):(b[r]=Xt(n),b[r].c(),b[r].m(m,null))}for(;r<b.length;r+=1)b[r].d(1);b.length=_.length}},d(e){e&&(i(t),i(p),i(m)),d(b,e)}}}function Xt(e){var t,n,p,d,v=e.fc+"";return{c(){t=s("li"),n=s("a"),p=a(v),d=r(),this.h()},l(e){t=l(e,"LI",{class:!0},!1);var r=c(t);n=l(r,"A",{href:!0},!1);var s=c(n);p=o(s,v),s.forEach(i),d=o(r,"\n              "),r.forEach(i),this.h()},h(){u(n,"href","components/"+e.fc.toLowerCase()),u(t,"class","svelte-4nh9hb")},m(e,r){f(e,t,r),h(t,n),h(n,p),h(t,d)},p:m,d(e){e&&i(t)}}}function Zt(e){var t,n;function a(e,t){return"Form"===t.c?Wt:Qt}var p=a(0,e),m=p(e);return{c(){t=s("li"),m.c(),n=r(),this.h()},l(e){t=l(e,"LI",{class:!0},!1);var r=c(t);m.l(r),n=o(r,"\n      "),r.forEach(i),this.h()},h(){u(t,"class","svelte-4nh9hb")},m(e,r){f(e,t,r),m.m(t,null),h(t,n)},p(e,r){p===(p=a(0,r))&&m?m.p(e,r):(m.d(1),(m=p(r))&&(m.c(),m.m(t,n)))},d(e){e&&i(t),m.d()}}}function Yt(e){for(var t,n,p,v,g,_,b,E,y,S,$,P,A,C,j,R,w,O,L,N,D,x,I,M,k=e.bulmaElements,T=[],H=0;H<k.length;H+=1)T[H]=Jt(Vt(e,k,H));var U=e.components,z=[];for(H=0;H<U.length;H+=1)z[H]=Zt(Gt(e,U,H));return{c(){t=s("div"),n=r(),p=s("aside"),v=s("p"),g=a("Installation"),_=r(),b=s("ul"),E=s("li"),y=s("a"),S=a("Start"),$=r(),P=s("p"),A=a("Bulma Elements"),C=r(),j=s("ul"),R=s("li"),w=s("a"),O=a("Intro"),L=r();for(var e=0;e<T.length;e+=1)T[e].c();N=r(),D=s("p"),x=a("Svelma Components"),I=r(),M=s("ul");for(e=0;e<z.length;e+=1)z[e].c();this.h()},l(e){t=l(e,"DIV",{class:!0},!1),c(t).forEach(i),n=o(e,"\n"),p=l(e,"ASIDE",{class:!0},!1);var r=c(p);v=l(r,"P",{class:!0},!1);var s=c(v);g=o(s,"Installation"),s.forEach(i),_=o(r,"\n  "),b=l(r,"UL",{class:!0},!1);var a=c(b);E=l(a,"LI",{class:!0},!1);var u=c(E);y=l(u,"A",{href:!0},!1);var f=c(y);S=o(f,"Start"),f.forEach(i),u.forEach(i),a.forEach(i),$=o(r,"\n  "),P=l(r,"P",{class:!0},!1);var h=c(P);A=o(h,"Bulma Elements"),h.forEach(i),C=o(r,"\n  "),j=l(r,"UL",{class:!0},!1);var m=c(j);R=l(m,"LI",{class:!0},!1);var d=c(R);w=l(d,"A",{href:!0},!1);var k=c(w);O=o(k,"Intro"),k.forEach(i),d.forEach(i),L=o(m,"\n    ");for(var H=0;H<T.length;H+=1)T[H].l(m);m.forEach(i),N=o(r,"\n  "),D=l(r,"P",{class:!0},!1);var U=c(D);x=o(U,"Svelma Components"),U.forEach(i),I=o(r,"\n  "),M=l(r,"UL",{class:!0},!1);var B=c(M);for(H=0;H<z.length;H+=1)z[H].l(B);B.forEach(i),r.forEach(i),this.h()},h(){u(t,"class","sidebar-bg svelte-4nh9hb"),u(v,"class","sidebar-label svelte-4nh9hb"),u(y,"href","install"),u(E,"class","svelte-4nh9hb"),u(b,"class","svelte-4nh9hb"),u(P,"class","sidebar-label svelte-4nh9hb"),u(w,"href","bulma/intro"),u(R,"class","svelte-4nh9hb"),u(j,"class","svelte-4nh9hb"),u(D,"class","sidebar-label svelte-4nh9hb"),u(M,"class","svelte-4nh9hb"),u(p,"class","sidebar svelte-4nh9hb")},m(e,r){f(e,t,r),f(e,n,r),f(e,p,r),h(p,v),h(v,g),h(p,_),h(p,b),h(b,E),h(E,y),h(y,S),h(p,$),h(p,P),h(P,A),h(p,C),h(p,j),h(j,R),h(R,w),h(w,O),h(j,L);for(var s=0;s<T.length;s+=1)T[s].m(j,null);h(p,N),h(p,D),h(D,x),h(p,I),h(p,M);for(s=0;s<z.length;s+=1)z[s].m(M,null)},p(e,t){if(e.bulmaElements){k=t.bulmaElements;for(var n=0;n<k.length;n+=1){const r=Vt(t,k,n);T[n]?T[n].p(e,r):(T[n]=Jt(r),T[n].c(),T[n].m(j,null))}for(;n<T.length;n+=1)T[n].d(1);T.length=k.length}if(e.components||e.formComponents){U=t.components;for(n=0;n<U.length;n+=1){const r=Gt(t,U,n);z[n]?z[n].p(e,r):(z[n]=Zt(r),z[n].c(),z[n].m(M,null))}for(;n<z.length;n+=1)z[n].d(1);z.length=U.length}},i:m,o:m,d(e){e&&(i(t),i(n),i(p)),d(T,e),d(z,e)}}}function en(e,t,n){const r=["Input","Field","Switch"].sort();let s=["Form",...Object.keys(N)].sort();return n("components",s=qt(s,[...r,"Tab","Taglist"])),{formComponents:r,components:s,bulmaElements:["Media","Table","Hero","Tiles"].sort()}}class tn extends e{constructor(e){super(),t(this,e,en,Yt,n,[])}}function nn(e){var t,n,a,p,m,d,v,g,A,C,j,R,w=new U({props:{segment:e.segment}}),O=new tn({});const L=e.$$slots.default,N=_(L,e,null);return{c(){t=s("meta"),n=s("meta"),a=s("meta"),p=s("meta"),m=s("meta"),d=r(),w.$$.fragment.c(),v=r(),g=s("main"),A=s("section"),O.$$.fragment.c(),C=r(),j=s("div"),N&&N.c(),this.h()},l(e){t=l(e,"META",{property:!0,content:!0},!1),c(t).forEach(i),n=l(e,"META",{property:!0,content:!0},!1),c(n).forEach(i),a=l(e,"META",{property:!0,content:!0},!1),c(a).forEach(i),p=l(e,"META",{property:!0,content:!0},!1),c(p).forEach(i),m=l(e,"META",{property:!0,content:!0},!1),c(m).forEach(i),d=o(e,"\n\n"),w.$$.fragment.l(e),v=o(e,"\n\n"),g=l(e,"MAIN",{},!1);var r=c(g);A=l(r,"SECTION",{class:!0},!1);var s=c(A);O.$$.fragment.l(s),C=o(s,"\n\n    "),j=l(s,"DIV",{class:!0},!1);var u=c(j);N&&N.l(u),u.forEach(i),s.forEach(i),r.forEach(i),this.h()},h(){document.title="Svelma",u(t,"property","og:site_name"),u(t,"content","Svelma"),u(n,"property","og:image"),u(n,"content","https://c0bra.github.io/svelma/svelma-logo.png"),u(a,"property","og:image:width"),u(a,"content","200"),u(p,"property","og:image:height"),u(p,"content","200"),u(m,"property","og:url"),u(m,"content",e.url),u(j,"class","docs-main svelte-87wm4"),u(A,"class","docs svelte-87wm4")},m(e,r){h(document.head,t),h(document.head,n),h(document.head,a),h(document.head,p),h(document.head,m),f(e,d,r),b(w,e,r),f(e,v,r),f(e,g,r),h(g,A),b(O,A,null),h(A,C),h(A,j),N&&N.m(j,null),R=!0},p(e,t){R&&!e.url||u(m,"content",t.url);var n={};e.segment&&(n.segment=t.segment),w.$set(n),N&&N.p&&e.$$scope&&N.p(E(L,t,e,null),y(L,t,null))},i(e){R||(S(w.$$.fragment,e),S(O.$$.fragment,e),S(N,e),R=!0)},o(e){$(w.$$.fragment,e),$(O.$$.fragment,e),$(N,e),R=!1},d(e){i(t),i(n),i(a),i(p),i(m),e&&i(d),P(w,e),e&&(i(v),i(g)),P(O),N&&N.d(e)}}}function rn(e,t,n){const{page:r}=Wn();let s,{segment:a}=t;r.subscribe(({path:e})=>{n("url",s="https://c0bra.github.io"+`/svelma/${e}`.replace(/\/\//g,"/").replace(/([^\/]$)/,"$1/"))});let{$$slots:o={},$$scope:l}=t;return e.$set=(e=>{"segment"in e&&n("segment",a=e.segment),"$$scope"in e&&n("$$scope",l=e.$$scope)}),{segment:a,url:s,$$slots:o,$$scope:l}}class sn extends e{constructor(e){super(),t(this,e,rn,nn,n,["segment"])}}function an(e){var t,n,r=e.error.stack+"";return{c(){t=s("pre"),n=a(r)},l(e){t=l(e,"PRE",{},!1);var s=c(t);n=o(s,r),s.forEach(i)},m(e,r){f(e,t,r),h(t,n)},p(e,t){e.error&&r!==(r=t.error.stack+"")&&g(n,r)},d(e){e&&i(t)}}}function on(e){var t,n,p,d,v,_,b,E,y,S=e.error.message+"";document.title=t=e.status;var $=e.dev&&e.error.stack&&an(e);return{c(){n=r(),p=s("h1"),d=a(e.status),v=r(),_=s("p"),b=a(S),E=r(),$&&$.c(),y=A(),this.h()},l(t){n=o(t,"\n\n"),p=l(t,"H1",{class:!0},!1);var r=c(p);d=o(r,e.status),r.forEach(i),v=o(t,"\n\n"),_=l(t,"P",{class:!0},!1);var s=c(_);b=o(s,S),s.forEach(i),E=o(t,"\n\n"),$&&$.l(t),y=A(),this.h()},h(){u(p,"class","svelte-8od9u6"),u(_,"class","svelte-8od9u6")},m(e,t){f(e,n,t),f(e,p,t),h(p,d),f(e,v,t),f(e,_,t),h(_,b),f(e,E,t),$&&$.m(e,t),f(e,y,t)},p(e,n){e.status&&t!==(t=n.status)&&(document.title=t),e.status&&g(d,n.status),e.error&&S!==(S=n.error.message+"")&&g(b,S),n.dev&&n.error.stack?$?$.p(e,n):(($=an(n)).c(),$.m(y.parentNode,y)):$&&($.d(1),$=null)},i:m,o:m,d(e){e&&(i(n),i(p),i(v),i(_),i(E)),$&&$.d(e),e&&i(y)}}}function ln(e,t,n){let{status:r,error:s}=t;return e.$set=(e=>{"status"in e&&n("status",r=e.status),"error"in e&&n("error",s=e.error)}),{status:r,error:s,dev:!1}}class cn extends e{constructor(e){super(),t(this,e,ln,on,n,["status","error"])}}function un(e){var t,n,r=[e.level1.props],s=e.level1.component;function a(e){let t={};for(var n=0;n<r.length;n+=1)t=C(t,r[n]);return{props:t}}if(s)var o=new s(a());return{c(){o&&o.$$.fragment.c(),t=A()},l(e){o&&o.$$.fragment.l(e),t=A()},m(e,r){o&&b(o,e,r),f(e,t,r),n=!0},p(e,n){var l=e.level1?j(r,[n.level1.props]):{};if(s!==(s=n.level1.component)){if(o){w();const e=o;$(e.$$.fragment,1,0,()=>{P(e,1)}),O()}s?((o=new s(a())).$$.fragment.c(),S(o.$$.fragment,1),b(o,t.parentNode,t)):o=null}else s&&o.$set(l)},i(e){n||(o&&S(o.$$.fragment,e),n=!0)},o(e){o&&$(o.$$.fragment,e),n=!1},d(e){e&&i(t),o&&P(o,e)}}}function pn(e){var t,n=new cn({props:{error:e.error,status:e.status}});return{c(){n.$$.fragment.c()},l(e){n.$$.fragment.l(e)},m(e,r){b(n,e,r),t=!0},p(e,t){var r={};e.error&&(r.error=t.error),e.status&&(r.status=t.status),n.$set(r)},i(e){t||(S(n.$$.fragment,e),t=!0)},o(e){$(n.$$.fragment,e),t=!1},d(e){P(n,e)}}}function fn(e){var t,n,r,s,a=[pn,un],o=[];function l(e,t){return t.error?0:1}return t=l(0,e),n=o[t]=a[t](e),{c(){n.c(),r=A()},l(e){n.l(e),r=A()},m(e,n){o[t].m(e,n),f(e,r,n),s=!0},p(e,s){var c=t;(t=l(0,s))===c?o[t].p(e,s):(w(),$(o[c],1,1,()=>{o[c]=null}),O(),(n=o[t])||(n=o[t]=a[t](s)).c(),S(n,1),n.m(r.parentNode,r))},i(e){s||(S(n),s=!0)},o(e){$(n),s=!1},d(e){o[t].d(e),e&&i(r)}}}function hn(e){var t,n=[{segment:e.segments[0]},e.level0.props];let r={$$slots:{default:[fn]},$$scope:{ctx:e}};for(var s=0;s<n.length;s+=1)r=C(r,n[s]);var a=new sn({props:r});return{c(){a.$$.fragment.c()},l(e){a.$$.fragment.l(e)},m(e,n){b(a,e,n),t=!0},p(e,t){var r=e.segments||e.level0?j(n,[e.segments&&{segment:t.segments[0]},e.level0&&t.level0.props]):{};(e.$$scope||e.error||e.status||e.level1)&&(r.$$scope={changed:e,ctx:t}),a.$set(r)},i(e){t||(S(a.$$.fragment,e),t=!0)},o(e){$(a.$$.fragment,e),t=!1},d(e){P(a,e)}}}function mn(e,t,n){let{stores:r,error:s,status:a,segments:o,level0:l,level1:c=null}=t;return R(M,r),e.$set=(e=>{"stores"in e&&n("stores",r=e.stores),"error"in e&&n("error",s=e.error),"status"in e&&n("status",a=e.status),"segments"in e&&n("segments",o=e.segments),"level0"in e&&n("level0",l=e.level0),"level1"in e&&n("level1",c=e.level1)}),{stores:r,error:s,status:a,segments:o,level0:l,level1:c}}class dn extends e{constructor(e){super(),t(this,e,mn,hn,n,["stores","error","status","segments","level0","level1"])}}const vn=[/^\/components\/jsdocs\/?$/,/^\/components\/([^\/]+?).json$/,/^\/blog.json$/,/^\/blog\/([^\/]+?).json$/],gn=[{js:()=>import("./index.2fbcd367.js"),css:["index.2fbcd367.css","chunk.6c9c176e.css"]},{js:()=>import("./notification.b713e01e.js"),css:["chunk.6c9c176e.css","chunk.dd2f46e7.css","chunk.e8e7c3d9.css","chunk.b8eb06d4.css"]},{js:()=>import("./collapse.481f4023.js"),css:["chunk.6c9c176e.css","chunk.dd2f46e7.css","chunk.e8e7c3d9.css","chunk.b8eb06d4.css"]},{js:()=>import("./progress.86ba222a.js"),css:["chunk.6c9c176e.css","chunk.dd2f46e7.css","chunk.e8e7c3d9.css"]},{js:()=>import("./snackbar.359fe405.js"),css:["snackbar.359fe405.css","chunk.6c9c176e.css","chunk.dd2f46e7.css","chunk.e8e7c3d9.css","chunk.b8eb06d4.css"]},{js:()=>import("./message.017624b5.js"),css:["chunk.6c9c176e.css","chunk.dd2f46e7.css","chunk.e8e7c3d9.css"]},{js:()=>import("./tooltip.91a0f9a2.js"),css:["tooltip.91a0f9a2.css","chunk.6c9c176e.css","chunk.dd2f46e7.css","chunk.e8e7c3d9.css","chunk.b8eb06d4.css"]},{js:()=>import("./button.bc64cd31.js"),css:["button.bc64cd31.css","chunk.6c9c176e.css","chunk.dd2f46e7.css","chunk.e8e7c3d9.css","chunk.b8eb06d4.css"]},{js:()=>import("./dialog.d0aac3cf.js"),css:["chunk.6c9c176e.css","chunk.dd2f46e7.css","chunk.e8e7c3d9.css","chunk.b8eb06d4.css"]},{js:()=>import("./select.18094c4c.js"),css:["select.18094c4c.css","chunk.6c9c176e.css","chunk.dd2f46e7.css","chunk.e8e7c3d9.css","chunk.b8eb06d4.css"]},{js:()=>import("./switch.7f31b00f.js"),css:["chunk.6c9c176e.css","chunk.dd2f46e7.css","chunk.e8e7c3d9.css","chunk.b8eb06d4.css"]},{js:()=>import("./field.2192cf90.js"),css:["chunk.6c9c176e.css","chunk.dd2f46e7.css","chunk.e8e7c3d9.css","chunk.b8eb06d4.css"]},{js:()=>import("./input.74cd783a.js"),css:["chunk.6c9c176e.css","chunk.dd2f46e7.css","chunk.e8e7c3d9.css","chunk.b8eb06d4.css"]},{js:()=>import("./modal.1156a3ec.js"),css:["chunk.6c9c176e.css","chunk.dd2f46e7.css","chunk.e8e7c3d9.css"]},{js:()=>import("./toast.ad971b02.js"),css:["toast.ad971b02.css","chunk.6c9c176e.css","chunk.dd2f46e7.css","chunk.e8e7c3d9.css","chunk.b8eb06d4.css"]},{js:()=>import("./icon.a7ec47cf.js"),css:["chunk.6c9c176e.css","chunk.dd2f46e7.css","chunk.e8e7c3d9.css"]},{js:()=>import("./tabs.5cc358c2.js"),css:["chunk.6c9c176e.css","chunk.dd2f46e7.css","chunk.e8e7c3d9.css","chunk.b8eb06d4.css"]},{js:()=>import("./tag.61efa232.js"),css:["tag.61efa232.css","chunk.6c9c176e.css","chunk.dd2f46e7.css","chunk.e8e7c3d9.css","chunk.b8eb06d4.css"]},{js:()=>import("./index.d988970e.js"),css:["chunk.6c9c176e.css","chunk.dd2f46e7.css"]},{js:()=>import("./about.ac46df75.js"),css:[]},{js:()=>import("./intro.1b1694c8.js"),css:[]},{js:()=>import("./media.200aad15.js"),css:["chunk.6c9c176e.css","chunk.dd2f46e7.css","chunk.e8e7c3d9.css"]},{js:()=>import("./table.a1738dea.js"),css:["chunk.6c9c176e.css","chunk.dd2f46e7.css","chunk.e8e7c3d9.css"]},{js:()=>import("./tiles.4f55169e.js"),css:["tiles.4f55169e.css","chunk.6c9c176e.css","chunk.dd2f46e7.css","chunk.e8e7c3d9.css"]},{js:()=>import("./hero.1a9ad8d6.js"),css:["chunk.6c9c176e.css","chunk.dd2f46e7.css","chunk.e8e7c3d9.css"]},{js:()=>import("./index.7ba096dd.js"),css:["index.7ba096dd.css"]},{js:()=>import("./[slug].ccf6e58e.js"),css:["[slug].ccf6e58e.css"]}],_n=(e=>[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/components\/notification\/?$/,parts:[null,{i:1}]},{pattern:/^\/components\/collapse\/?$/,parts:[null,{i:2}]},{pattern:/^\/components\/progress\/?$/,parts:[null,{i:3}]},{pattern:/^\/components\/snackbar\/?$/,parts:[null,{i:4}]},{pattern:/^\/components\/message\/?$/,parts:[null,{i:5}]},{pattern:/^\/components\/tooltip\/?$/,parts:[null,{i:6}]},{pattern:/^\/components\/button\/?$/,parts:[null,{i:7}]},{pattern:/^\/components\/dialog\/?$/,parts:[null,{i:8}]},{pattern:/^\/components\/select\/?$/,parts:[null,{i:9}]},{pattern:/^\/components\/switch\/?$/,parts:[null,{i:10}]},{pattern:/^\/components\/field\/?$/,parts:[null,{i:11}]},{pattern:/^\/components\/input\/?$/,parts:[null,{i:12}]},{pattern:/^\/components\/modal\/?$/,parts:[null,{i:13}]},{pattern:/^\/components\/toast\/?$/,parts:[null,{i:14}]},{pattern:/^\/components\/icon\/?$/,parts:[null,{i:15}]},{pattern:/^\/components\/tabs\/?$/,parts:[null,{i:16}]},{pattern:/^\/components\/tag\/?$/,parts:[null,{i:17}]},{pattern:/^\/install\/?$/,parts:[{i:18}]},{pattern:/^\/about\/?$/,parts:[{i:19}]},{pattern:/^\/bulma\/intro\/?$/,parts:[null,{i:20}]},{pattern:/^\/bulma\/media\/?$/,parts:[null,{i:21}]},{pattern:/^\/bulma\/table\/?$/,parts:[null,{i:22}]},{pattern:/^\/bulma\/tiles\/?$/,parts:[null,{i:23}]},{pattern:/^\/bulma\/hero\/?$/,parts:[null,{i:24}]},{pattern:/^\/blog\/?$/,parts:[{i:25}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:26,params:t=>({slug:e(t[1])})}]}])(decodeURIComponent);const bn="undefined"!=typeof __SAPPER__&&__SAPPER__;let En,yn,Sn,$n=!1,Pn=[],An="{}";const Cn={page:D({}),preloading:D(null),session:D(bn&&bn.session)};let jn,Rn;Cn.session.subscribe(async e=>{if(jn=e,!$n)return;Rn=!0;const t=Mn(new URL(location.href)),n=yn={},{redirect:r,props:s,branch:a}=await Un(t);n===yn&&await Hn(r,a,s,t.page)});let wn,On=null;let Ln,Nn=1;const Dn="undefined"!=typeof history?history:{pushState:(e,t,n)=>{},replaceState:(e,t,n)=>{},scrollRestoration:""},xn={};function In(e){const t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(e=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));"string"==typeof t[n]&&(t[n]=[t[n]]),"object"==typeof t[n]?t[n].push(r):t[n]=r}),t}function Mn(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(bn.baseUrl))return null;let t=e.pathname.slice(bn.baseUrl.length);if(""===t&&(t="/"),!vn.some(e=>e.test(t)))for(let n=0;n<_n.length;n+=1){const r=_n[n],s=r.pattern.exec(t);if(s){const n=In(e.search),a=r.parts[r.parts.length-1],o=a.params?a.params(s):{},l={path:t,query:n,params:o};return{href:e.href,route:r,match:s,page:l}}}}function kn(){return{x:pageXOffset,y:pageYOffset}}async function Tn(e,t,n,r){if(t)Ln=t;else{const e=kn();xn[Ln]=e,t=Ln=++Nn,xn[Ln]=n?e:{x:0,y:0}}Ln=t,En&&Cn.preloading.set(!0);const s=On&&On.href===e.href?On.promise:Un(e);On=null;const a=yn={},{redirect:o,props:l,branch:c}=await s;if(a===yn&&(await Hn(o,c,l,e.page),document.activeElement&&document.activeElement.blur(),!n)){let e=xn[t];if(r){const t=document.getElementById(r.slice(1));t&&(e={x:0,y:t.getBoundingClientRect().top})}xn[Ln]=e,e&&scrollTo(e.x,e.y)}}async function Hn(e,t,n,r){if(e)return function(e,t={replaceState:!1}){const n=Mn(new URL(e,document.baseURI));return n?(Dn[t.replaceState?"replaceState":"pushState"]({id:Ln},"",e),Tn(n,null).then(()=>{})):(location.href=e,new Promise(e=>{}))}(e.location,{replaceState:!0});if(Cn.page.set(r),Cn.preloading.set(!1),En)En.$set(n);else{n.stores={page:{subscribe:Cn.page.subscribe},preloading:{subscribe:Cn.preloading.subscribe},session:Cn.session},n.level0={props:await Sn};const e=document.querySelector("#sapper-head-start"),t=document.querySelector("#sapper-head-end");if(e&&t){for(;e.nextSibling!==t;)Bn(e.nextSibling);Bn(e),Bn(t)}En=new dn({target:wn,props:n,hydrate:!0})}Pn=t,An=JSON.stringify(r.query),$n=!0,Rn=!1}async function Un(e){const{route:t,page:n}=e,r=n.path.split("/").filter(Boolean);let s=null;const a={error:null,status:200,segments:[r[0]]},o={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(s&&(s.statusCode!==e||s.location!==t))throw new Error("Conflicting redirects");s={statusCode:e,location:t}},error:(e,t)=>{a.error="string"==typeof t?new Error(t):t,a.status=e}};let l;Sn||(Sn=bn.preloaded[0]||async function({path:e}){return{url:"https://c0bra.github.io"+`/svelma/${e}`.replace(/\/\//g,"/").replace(/([^\/]$)/,"$1/")}}.call(o,{path:n.path,query:n.query,params:{}},jn));let c=1;try{const s=JSON.stringify(n.query),i=t.pattern.exec(n.path);let u=!1;l=await Promise.all(t.parts.map(async(t,l)=>{const p=r[l];if(function(e,t,n,r){if(r!==An)return!0;const s=Pn[e];return!!s&&(t!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0)}(l,p,i,s)&&(u=!0),a.segments[c]=r[l+1],!t)return{segment:p};const f=c++;if(!Rn&&!u&&Pn[l]&&Pn[l].part===t.i)return Pn[l];u=!1;const{default:h,preload:m}=await function(e){const t="string"==typeof e.css?[]:e.css.map(zn);return t.unshift(e.js()),Promise.all(t).then(e=>e[0])}(gn[t.i]);let d;return d=$n||!bn.preloaded[l+1]?m?await m.call(o,{path:n.path,query:n.query,params:t.params?t.params(e.match):{}},jn):{}:bn.preloaded[l+1],a[`level${f}`]={component:h,props:d,segment:p,match:i,part:t.i}}))}catch(e){a.error=e,a.status=500,l=[]}return{redirect:s,props:a,branch:l}}function zn(e){const t=`client/${e}`;if(!document.querySelector(`link[href="${t}"]`))return new Promise((e,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=t,r.onload=(()=>e()),r.onerror=n,document.head.appendChild(r)})}function Bn(e){e.parentNode.removeChild(e)}function qn(e){const t=Mn(new URL(e,document.baseURI));if(t)return On&&e===On.href||function(e,t){On={href:e,promise:t}}(e,Un(t)),On.promise}let Fn;function Kn(e){clearTimeout(Fn),Fn=setTimeout(()=>{Gn(e)},20)}function Gn(e){const t=Jn(e.target);t&&"prefetch"===t.rel&&qn(t.href)}function Vn(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;const t=Jn(e.target);if(!t)return;if(!t.href)return;const n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(n?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(n?t.target.baseVal:t.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const a=Mn(s);if(a){Tn(a,null,t.hasAttribute("sapper-noscroll"),s.hash),e.preventDefault(),Dn.pushState({id:Ln},"",s.href)}}function Jn(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function Qn(e){if(xn[Ln]=kn(),e.state){const t=Mn(new URL(location.href));t?Tn(t,e.state.id):location.href=location.href}else(function(e){Ln=e})(Nn=Nn+1),Dn.replaceState({id:Ln},"",location.href)}const Wn=()=>L(M);I.registerLanguage("bash",function(e){var t={className:"variable",variants:[{begin:/\$[\w\d#@][\w\d_]*/},{begin:/\$\{(.*?)}/}]},n={className:"string",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,t,{className:"variable",begin:/\$\(/,end:/\)/,contains:[e.BACKSLASH_ESCAPE]}]};return{aliases:["sh","zsh"],lexemes:/\b-?[a-z\._]+\b/,keywords:{keyword:"if then else elif fi for while in do done case esac function",literal:"true false",built_in:"break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",_:"-ne -eq -lt -gt -f -d -e -s -l -a"},contains:[{className:"meta",begin:/^#![^\n]+sh\s*$/,relevance:10},{className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[e.inherit(e.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0},e.HASH_COMMENT_MODE,n,{className:"string",begin:/'/,end:/'/},t]}}),I.registerLanguage("xml",function(e){var t={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:"[A-Za-z0-9\\._:-]+",relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/},{begin:/'/,end:/'/},{begin:/[^\s"'=<>`]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist"],case_insensitive:!0,contains:[{className:"meta",begin:"<!DOCTYPE",end:">",relevance:10,contains:[{begin:"\\[",end:"\\]"}]},e.COMMENT("\x3c!--","--\x3e",{relevance:10}),{begin:"<\\!\\[CDATA\\[",end:"\\]\\]>",relevance:10},{className:"meta",begin:/<\?xml/,end:/\?>/,relevance:10},{begin:/<\?(php)?/,end:/\?>/,subLanguage:"php",contains:[{begin:"/\\*",end:"\\*/",skip:!0},{begin:'b"',end:'"',skip:!0},{begin:"b'",end:"'",skip:!0},e.inherit(e.APOS_STRING_MODE,{illegal:null,className:null,contains:null,skip:!0}),e.inherit(e.QUOTE_STRING_MODE,{illegal:null,className:null,contains:null,skip:!0})]},{className:"tag",begin:"<style(?=\\s|>|$)",end:">",keywords:{name:"style"},contains:[t],starts:{end:"</style>",returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:"<script(?=\\s|>|$)",end:">",keywords:{name:"script"},contains:[t],starts:{end:"<\/script>",returnEnd:!0,subLanguage:["actionscript","javascript","handlebars","xml"]}},{className:"tag",begin:"</?",end:"/?>",contains:[{className:"name",begin:/[^\/><\s]+/,relevance:0},t]}]}}),I.registerLanguage("javascript",function(e){var t="[A-Za-z$_][0-9A-Za-z$_]*",n={keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},r={className:"number",variants:[{begin:"\\b(0[bB][01]+)"},{begin:"\\b(0[oO][0-7]+)"},{begin:e.C_NUMBER_RE}],relevance:0},s={className:"subst",begin:"\\$\\{",end:"\\}",keywords:n,contains:[]},a={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,s]};s.contains=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,a,r,e.REGEXP_MODE];var o=s.contains.concat([e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]);return{aliases:["js","jsx"],keywords:n,contains:[{className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},{className:"meta",begin:/^#!/,end:/$/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,a,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,r,{begin:/[{,]\s*/,relevance:0,contains:[{begin:t+"\\s*:",returnBegin:!0,relevance:0,contains:[{className:"attr",begin:t,relevance:0}]}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.REGEXP_MODE,{className:"function",begin:"(\\(.*?\\)|"+t+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:t},{begin:/\(\s*\)/},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:n,contains:o}]}]},{begin:/</,end:/(\/\w+|\w+\/)>/,subLanguage:"xml",contains:[{begin:/<\w+\s*\/>/,skip:!0},{begin:/<\w+/,end:/(\/\w+|\w+\/)>/,skip:!0,contains:[{begin:/<\w+\s*\/>/,skip:!0},"self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/\{/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:t}),{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,contains:o}],illegal:/\[|%/},{begin:/\$[(.]/},e.METHOD_GUARD,{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"\[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"constructor get set",end:/\{/,excludeEnd:!0}],illegal:/#(?!!)/}}),function(e){var t;"scrollRestoration"in Dn&&(Dn.scrollRestoration="manual"),t=e.target,wn=t,addEventListener("click",Vn),addEventListener("popstate",Qn),addEventListener("touchstart",Gn),addEventListener("mousemove",Kn),Promise.resolve().then(()=>{const{hash:e,href:t}=location;Dn.replaceState({id:Nn},"",t);const n=new URL(location.href);if(bn.error)return function(e){const{pathname:t,search:n}=location,{session:r,preloaded:s,status:a,error:o}=bn;Sn||(Sn=s&&s[0]),Hn(null,[],{error:o,status:a,session:r,level0:{props:Sn},level1:{props:{status:a,error:o},component:cn},segments:s},{path:t,query:In(n),params:{}})}();const r=Mn(n);return r?Tn(r,Nn,!0,e):void 0})}({target:document.querySelector("#sapper")});
//# sourceMappingURL=client.3dc85ed1.js.map
