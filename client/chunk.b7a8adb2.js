import{c as t,d as e,b as s,e as a,A as i,J as l,f as n,g as r,h as o,B as c,i as u,m as h,l as p,K as b,a as d}from"./chunk.c4d20469.js";function m(t){var e,s,m,E,f,T,y,v,w,A;return{c(){e=a("meta"),s=a("meta"),m=a("meta"),E=i(),f=a("header"),T=a("h1"),y=l(t.title),v=i(),w=a("h2"),A=l(t.subtitle),this.h()},l(a){e=n(a,"META",{property:!0,content:!0},!1),r(e).forEach(o),s=n(a,"META",{property:!0,content:!0},!1),r(s).forEach(o),m=n(a,"META",{property:!0,content:!0},!1),r(m).forEach(o),E=c(a,"\n\n\n"),f=n(a,"HEADER",{class:!0},!1);var i=r(f);T=n(i,"H1",{class:!0},!1);var l=r(T);y=c(l,t.title),l.forEach(o),v=c(i,"\n  "),w=n(i,"H2",{class:!0},!1);var u=r(w);A=c(u,t.subtitle),u.forEach(o),i.forEach(o),this.h()},h(){u(e,"property","og:type"),u(e,"content","article"),u(s,"property","og:title"),u(s,"content",t.newTitle),u(m,"property","og:description"),u(m,"content",t.subtitle),u(T,"class","title"),u(w,"class","subtitle"),u(f,"class","header")},m(t,a){h(document.head,e),h(document.head,s),h(document.head,m),p(t,E,a),p(t,f,a),h(f,T),h(T,y),h(f,v),h(f,w),h(w,A)},p(t,e){t.newTitle&&u(s,"content",e.newTitle),t.subtitle&&u(m,"content",e.subtitle),t.title&&b(y,e.title),t.subtitle&&b(A,e.subtitle)},i:d,o:d,d(t){o(e),o(s),o(m),t&&(o(E),o(f))}}}function E(t,e,s){let a,{title:i,subtitle:l}=e;return t.$set=(t=>{"title"in t&&s("title",i=t.title),"subtitle"in t&&s("subtitle",l=t.subtitle)}),t.$$.update=((t={title:1})=>{t.title&&s("newTitle",a=`${i} | Svelma`)}),{title:i,subtitle:l,newTitle:a}}class f extends t{constructor(t){super(),e(this,t,E,m,s,["title","subtitle"])}}export{f as a};
//# sourceMappingURL=chunk.b7a8adb2.js.map
