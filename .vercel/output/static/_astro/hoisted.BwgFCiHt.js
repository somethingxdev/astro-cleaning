import"./hoisted.DX6NTj3C.js";function Ot(t){return typeof t=="number"}function It(t){return typeof t=="string"}function ht(t){return typeof t=="boolean"}function _t(t){return Object.prototype.toString.call(t)==="[object Object]"}function z(t){return Math.abs(t)}function Ft(t){return Math.sign(t)}function ut(t,e){return z(t-e)}function ln(t,e){if(t===0||e===0||z(t)<=z(e))return 0;const s=ut(z(t),z(e));return z(s/t)}function at(t){return ft(t).map(Number)}function J(t){return t[gt(t)]}function gt(t){return Math.max(0,t.length-1)}function Mt(t,e){return e===gt(t)}function Gt(t,e=0){return Array.from(Array(t),(s,r)=>e+r)}function ft(t){return Object.keys(t)}function Kt(t,e){return[t,e].reduce((s,r)=>(ft(r).forEach(i=>{const n=s[i],o=r[i],u=_t(n)&&_t(o);s[i]=u?Kt(n,o):o}),s),{})}function Dt(t,e){return typeof e.MouseEvent<"u"&&t instanceof e.MouseEvent}function un(t,e){const s={start:r,center:i,end:n};function r(){return 0}function i(c){return n(c)/2}function n(c){return e-c}function o(c,l){return It(t)?s[t](c):t(e,c,l)}return{measure:o}}function dt(){let t=[];function e(i,n,o,u={passive:!0}){let c;if("addEventListener"in i)i.addEventListener(n,o,u),c=()=>i.removeEventListener(n,o,u);else{const l=i;l.addListener(o),c=()=>l.removeListener(o)}return t.push(c),r}function s(){t=t.filter(i=>i())}const r={add:e,clear:s};return r}function an(t,e,s,r){const i=dt(),n=1e3/60;let o=null,u=0,c=0;function l(){i.add(t,"visibilitychange",()=>{t.hidden&&d()})}function h(){x(),i.clear()}function a(m){if(!c)return;o||(o=m);const f=m-o;for(o=m,u+=f;u>=n;)s(n),u-=n;const S=u/n;r(S),c&&e.requestAnimationFrame(a)}function g(){c||(c=e.requestAnimationFrame(a))}function x(){e.cancelAnimationFrame(c),o=null,u=0,c=0}function d(){o=null,u=0}return{init:l,destroy:h,start:g,stop:x,update:()=>s(n),render:r}}function fn(t,e){const s=e==="rtl",r=t==="y",i=r?"y":"x",n=r?"x":"y",o=!r&&s?-1:1,u=h(),c=a();function l(d){const{height:p,width:m}=d;return r?p:m}function h(){return r?"top":s?"right":"left"}function a(){return r?"bottom":s?"left":"right"}function g(d){return d*o}return{scroll:i,cross:n,startEdge:u,endEdge:c,measureSize:l,direction:g}}function it(t=0,e=0){const s=z(t-e);function r(l){return l<t}function i(l){return l>e}function n(l){return r(l)||i(l)}function o(l){return n(l)?r(l)?t:e:l}function u(l){return s?l-s*Math.ceil((l-e)/s):l}return{length:s,max:e,min:t,constrain:o,reachedAny:n,reachedMax:i,reachedMin:r,removeOffset:u}}function Xt(t,e,s){const{constrain:r}=it(0,t),i=t+1;let n=o(e);function o(g){return s?z((i+g)%i):r(g)}function u(){return n}function c(g){return n=o(g),a}function l(g){return h().set(u()+g)}function h(){return Xt(t,u(),s)}const a={get:u,set:c,add:l,clone:h};return a}function dn(t,e,s,r,i,n,o,u,c,l,h,a,g,x,d,p,m,f,S){const{cross:b,direction:A}=t,M=["INPUT","SELECT","TEXTAREA"],F={passive:!1},E=dt(),T=dt(),I=it(50,225).constrain(x.measure(20)),B={mouse:300,touch:400},D={mouse:500,touch:600},q=d?43:25;let Q=!1,Y=0,v=0,P=!1,L=!1,w=!1,O=!1;function k(y){if(!S)return;function C(U){(ht(S)||S(y,U))&&W(U)}const G=e;E.add(G,"dragstart",U=>U.preventDefault(),F).add(G,"touchmove",()=>{},F).add(G,"touchend",()=>{}).add(G,"touchstart",C).add(G,"mousedown",C).add(G,"touchcancel",R).add(G,"contextmenu",R).add(G,"click",tt,!0)}function N(){E.clear(),T.clear()}function H(){const y=O?s:e;T.add(y,"touchmove",$,F).add(y,"touchend",R).add(y,"mousemove",$,F).add(y,"mouseup",R)}function _(y){const C=y.nodeName||"";return M.includes(C)}function j(){return(d?D:B)[O?"mouse":"touch"]}function K(y,C){const G=a.add(Ft(y)*-1),U=h.byDistance(y,!d).distance;return d||z(y)<I?U:m&&C?U*.5:h.byIndex(G.get(),0).distance}function W(y){const C=Dt(y,r);O=C,w=d&&C&&!y.buttons&&Q,Q=ut(i.get(),o.get())>=2,!(C&&y.button!==0)&&(_(y.target)||(P=!0,n.pointerDown(y),l.useFriction(0).useDuration(0),i.set(o),H(),Y=n.readPoint(y),v=n.readPoint(y,b),g.emit("pointerDown")))}function $(y){if(!Dt(y,r)&&y.touches.length>=2)return R(y);const G=n.readPoint(y),U=n.readPoint(y,b),Z=ut(G,Y),nt=ut(U,v);if(!L&&!O&&(!y.cancelable||(L=Z>nt,!L)))return R(y);const et=n.pointerMove(y);Z>p&&(w=!0),l.useFriction(.3).useDuration(.75),u.start(),i.add(A(et)),y.preventDefault()}function R(y){const G=h.byDistance(0,!1).index!==a.get(),U=n.pointerUp(y)*j(),Z=K(A(U),G),nt=ln(U,Z),et=q-10*nt,ot=f+nt/50;L=!1,P=!1,T.clear(),l.useDuration(et).useFriction(ot),c.distance(Z,!d),O=!1,g.emit("pointerUp")}function tt(y){w&&(y.stopPropagation(),y.preventDefault(),w=!1)}function X(){return P}return{init:k,destroy:N,pointerDown:X}}function pn(t,e){let r,i;function n(a){return a.timeStamp}function o(a,g){const d=`client${(g||t.scroll)==="x"?"X":"Y"}`;return(Dt(a,e)?a:a.touches[0])[d]}function u(a){return r=a,i=a,o(a)}function c(a){const g=o(a)-o(i),x=n(a)-n(r)>170;return i=a,x&&(r=a),g}function l(a){if(!r||!i)return 0;const g=o(i)-o(r),x=n(a)-n(r),d=n(a)-n(i)>170,p=g/x;return x&&!d&&z(p)>.1?p:0}return{pointerDown:u,pointerMove:c,pointerUp:l,readPoint:o}}function gn(){function t(s){const{offsetTop:r,offsetLeft:i,offsetWidth:n,offsetHeight:o}=s;return{top:r,right:i+n,bottom:r+o,left:i,width:n,height:o}}return{measure:t}}function mn(t){function e(r){return t*(r/100)}return{measure:e}}function Sn(t,e,s,r,i,n,o){const u=[t].concat(r);let c,l,h=[],a=!1;function g(m){return i.measureSize(o.measure(m))}function x(m){if(!n)return;l=g(t),h=r.map(g);function f(S){for(const b of S){if(a)return;const A=b.target===t,M=r.indexOf(b.target),F=A?l:h[M],E=g(A?t:r[M]);if(z(E-F)>=.5){m.reInit(),e.emit("resize");break}}}c=new ResizeObserver(S=>{(ht(n)||n(m,S))&&f(S)}),s.requestAnimationFrame(()=>{u.forEach(S=>c.observe(S))})}function d(){a=!0,c&&c.disconnect()}return{init:x,destroy:d}}function hn(t,e,s,r,i,n){let o=0,u=0,c=i,l=n,h=t.get(),a=0;function g(F){const E=F/1e3,T=c*E,I=r.get()-t.get(),B=!c;let D=0;return B?(o=0,s.set(r),t.set(r),D=I):(s.set(t),o+=I/T,o*=l,h+=o,t.add(o*E),D=h-a),u=Ft(D),a=h,M}function x(){const F=r.get()-e.get();return z(F)<.001}function d(){return c}function p(){return u}function m(){return o}function f(){return b(i)}function S(){return A(n)}function b(F){return c=F,M}function A(F){return l=F,M}const M={direction:p,duration:d,velocity:m,seek:g,settled:x,useBaseFriction:S,useBaseDuration:f,useFriction:A,useDuration:b};return M}function yn(t,e,s,r,i){const n=i.measure(10),o=i.measure(50),u=it(.1,.99);let c=!1;function l(){return!(c||!t.reachedAny(s.get())||!t.reachedAny(e.get()))}function h(x){if(!l())return;const d=t.reachedMin(e.get())?"min":"max",p=z(t[d]-e.get()),m=s.get()-e.get(),f=u.constrain(p/o);s.subtract(m*f),!x&&z(m)<n&&(s.set(t.constrain(s.get())),r.useDuration(25).useBaseFriction())}function a(x){c=!x}return{shouldConstrain:l,constrain:h,toggleActive:a}}function bn(t,e,s,r,i){const n=it(-e+t,0),o=a(),u=h(),c=g();function l(d,p){return ut(d,p)<1}function h(){const d=o[0],p=J(o),m=o.lastIndexOf(d),f=o.indexOf(p)+1;return it(m,f)}function a(){return s.map((d,p)=>{const{min:m,max:f}=n,S=n.constrain(d),b=!p,A=Mt(s,p);return b?f:A||l(m,S)?m:l(f,S)?f:S}).map(d=>parseFloat(d.toFixed(3)))}function g(){if(e<=t+i)return[n.max];if(r==="keepSnaps")return o;const{min:d,max:p}=u;return o.slice(d,p)}return{snapsContained:c,scrollContainLimit:u}}function xn(t,e,s){const r=e[0],i=s?r-t:J(e);return{limit:it(i,r)}}function vn(t,e,s,r){const n=e.min+.1,o=e.max+.1,{reachedMin:u,reachedMax:c}=it(n,o);function l(g){return g===1?c(s.get()):g===-1?u(s.get()):!1}function h(g){if(!l(g))return;const x=t*(g*-1);r.forEach(d=>d.add(x))}return{loop:h}}function En(t){const{max:e,length:s}=t;function r(n){const o=n-e;return s?o/-s:0}return{get:r}}function Ln(t,e,s,r,i){const{startEdge:n,endEdge:o}=t,{groupSlides:u}=i,c=a().map(e.measure),l=g(),h=x();function a(){return u(r).map(p=>J(p)[o]-p[0][n]).map(z)}function g(){return r.map(p=>s[n]-p[n]).map(p=>-z(p))}function x(){return u(l).map(p=>p[0]).map((p,m)=>p+c[m])}return{snaps:l,snapsAligned:h}}function Tn(t,e,s,r,i,n){const{groupSlides:o}=i,{min:u,max:c}=r,l=h();function h(){const g=o(n),x=!t||e==="keepSnaps";return s.length===1?[n]:x?g:g.slice(u,c).map((d,p,m)=>{const f=!p,S=Mt(m,p);if(f){const b=J(m[0])+1;return Gt(b)}if(S){const b=gt(n)-J(m)[0]+1;return Gt(b,J(m)[0])}return d})}return{slideRegistry:l}}function In(t,e,s,r,i){const{reachedAny:n,removeOffset:o,constrain:u}=r;function c(d){return d.concat().sort((p,m)=>z(p)-z(m))[0]}function l(d){const p=t?o(d):u(d),m=e.map((S,b)=>({diff:h(S-p,0),index:b})).sort((S,b)=>z(S.diff)-z(b.diff)),{index:f}=m[0];return{index:f,distance:p}}function h(d,p){const m=[d,d+s,d-s];if(!t)return d;if(!p)return c(m);const f=m.filter(S=>Ft(S)===p);return f.length?c(f):J(m)-s}function a(d,p){const m=e[d]-i.get(),f=h(m,p);return{index:d,distance:f}}function g(d,p){const m=i.get()+d,{index:f,distance:S}=l(m),b=!t&&n(m);if(!p||b)return{index:f,distance:d};const A=e[f]-S,M=d+h(A,0);return{index:f,distance:M}}return{byDistance:g,byIndex:a,shortcut:h}}function Dn(t,e,s,r,i,n,o){function u(a){const g=a.distance,x=a.index!==e.get();n.add(g),g&&(r.duration()?t.start():(t.update(),t.render(1),t.update())),x&&(s.set(e.get()),e.set(a.index),o.emit("select"))}function c(a,g){const x=i.byDistance(a,g);u(x)}function l(a,g){const x=e.clone().set(a),d=i.byIndex(x.get(),g);u(d)}return{distance:c,index:l}}function Pn(t,e,s,r,i,n,o,u){const c={passive:!0,capture:!0};let l=0;function h(x){if(!u)return;function d(p){if(new Date().getTime()-l>10)return;o.emit("slideFocusStart"),t.scrollLeft=0;const S=s.findIndex(b=>b.includes(p));Ot(S)&&(i.useDuration(0),r.index(S,0),o.emit("slideFocus"))}n.add(document,"keydown",a,!1),e.forEach((p,m)=>{n.add(p,"focus",f=>{(ht(u)||u(x,f))&&d(m)},c)})}function a(x){x.code==="Tab"&&(l=new Date().getTime())}return{init:h}}function lt(t){let e=t;function s(){return e}function r(c){e=o(c)}function i(c){e+=o(c)}function n(c){e-=o(c)}function o(c){return Ot(c)?c:c.get()}return{get:s,set:r,add:i,subtract:n}}function Yt(t,e){const s=t.scroll==="x"?n:o,r=e.style;let i=!1;function n(a){return`translate3d(${a}px,0px,0px)`}function o(a){return`translate3d(0px,${a}px,0px)`}function u(a){i||(r.transform=s(t.direction(a)))}function c(a){i=!a}function l(){i||(r.transform="",e.getAttribute("style")||e.removeAttribute("style"))}return{clear:l,to:u,toggleActive:c}}function An(t,e,s,r,i,n,o,u,c){const h=at(i),a=at(i).reverse(),g=f().concat(S());function x(E,T){return E.reduce((I,B)=>I-i[B],T)}function d(E,T){return E.reduce((I,B)=>x(I,T)>0?I.concat([B]):I,[])}function p(E){return n.map((T,I)=>({start:T-r[I]+.5+E,end:T+e-.5+E}))}function m(E,T,I){const B=p(T);return E.map(D=>{const q=I?0:-s,Q=I?s:0,Y=I?"end":"start",v=B[D][Y];return{index:D,loopPoint:v,slideLocation:lt(-1),translate:Yt(t,c[D]),target:()=>u.get()>v?q:Q}})}function f(){const E=o[0],T=d(a,E);return m(T,s,!1)}function S(){const E=e-o[0]-1,T=d(h,E);return m(T,-s,!0)}function b(){return g.every(({index:E})=>{const T=h.filter(I=>I!==E);return x(T,e)<=.1})}function A(){g.forEach(E=>{const{target:T,translate:I,slideLocation:B}=E,D=T();D!==B.get()&&(I.to(D),B.set(D))})}function M(){g.forEach(E=>E.translate.clear())}return{canLoop:b,clear:M,loop:A,loopPoints:g}}function On(t,e,s){let r,i=!1;function n(c){if(!s)return;function l(h){for(const a of h)if(a.type==="childList"){c.reInit(),e.emit("slidesChanged");break}}r=new MutationObserver(h=>{i||(ht(s)||s(c,h))&&l(h)}),r.observe(t,{childList:!0})}function o(){r&&r.disconnect(),i=!0}return{init:n,destroy:o}}function Fn(t,e,s,r){const i={};let n=null,o=null,u,c=!1;function l(){u=new IntersectionObserver(d=>{c||(d.forEach(p=>{const m=e.indexOf(p.target);i[m]=p}),n=null,o=null,s.emit("slidesInView"))},{root:t.parentElement,threshold:r}),e.forEach(d=>u.observe(d))}function h(){u&&u.disconnect(),c=!0}function a(d){return ft(i).reduce((p,m)=>{const f=parseInt(m),{isIntersecting:S}=i[f];return(d&&S||!d&&!S)&&p.push(f),p},[])}function g(d=!0){if(d&&n)return n;if(!d&&o)return o;const p=a(d);return d&&(n=p),d||(o=p),p}return{init:l,destroy:h,get:g}}function Mn(t,e,s,r,i,n){const{measureSize:o,startEdge:u,endEdge:c}=t,l=s[0]&&i,h=d(),a=p(),g=s.map(o),x=m();function d(){if(!l)return 0;const S=s[0];return z(e[u]-S[u])}function p(){if(!l)return 0;const S=n.getComputedStyle(J(r));return parseFloat(S.getPropertyValue(`margin-${c}`))}function m(){return s.map((S,b,A)=>{const M=!b,F=Mt(A,b);return M?g[b]+h:F?g[b]+a:A[b+1][u]-S[u]}).map(z)}return{slideSizes:g,slideSizesWithGaps:x,startGap:h,endGap:a}}function Nn(t,e,s,r,i,n,o,u,c){const{startEdge:l,endEdge:h,direction:a}=t,g=Ot(s);function x(f,S){return at(f).filter(b=>b%S===0).map(b=>f.slice(b,b+S))}function d(f){return f.length?at(f).reduce((S,b,A)=>{const M=J(S)||0,F=M===0,E=b===gt(f),T=i[l]-n[M][l],I=i[l]-n[b][h],B=!r&&F?a(o):0,D=!r&&E?a(u):0,q=z(I-D-(T+B));return A&&q>e+c&&S.push(b),E&&S.push(f.length),S},[]).map((S,b,A)=>{const M=Math.max(A[b-1]||0);return f.slice(M,S)}):[]}function p(f){return g?x(f,s):d(f)}return{groupSlides:p}}function wn(t,e,s,r,i,n,o){const{align:u,axis:c,direction:l,startIndex:h,loop:a,duration:g,dragFree:x,dragThreshold:d,inViewThreshold:p,slidesToScroll:m,skipSnaps:f,containScroll:S,watchResize:b,watchSlides:A,watchDrag:M,watchFocus:F}=n,E=2,T=gn(),I=T.measure(e),B=s.map(T.measure),D=fn(c,l),q=D.measureSize(I),Q=mn(q),Y=un(u,q),v=!a&&!!S,P=a||!!S,{slideSizes:L,slideSizesWithGaps:w,startGap:O,endGap:k}=Mn(D,I,B,s,P,i),N=Nn(D,q,m,a,I,B,O,k,E),{snaps:H,snapsAligned:_}=Ln(D,Y,I,B,N),j=-J(H)+J(w),{snapsContained:K,scrollContainLimit:W}=bn(q,j,_,S,E),$=v?K:_,{limit:R}=xn(j,$,a),tt=Xt(gt($),h,a),X=tt.clone(),V=at(s),y=({dragHandler:st,scrollBody:vt,scrollBounds:Et,options:{loop:mt}},Lt)=>{mt||Et.constrain(st.pointerDown()),vt.seek(Lt)},C=({scrollBody:st,translate:vt,location:Et,offsetLocation:mt,scrollLooper:Lt,slideLooper:nn,dragHandler:en,animation:on,eventHandler:Bt,scrollBounds:sn,options:{loop:kt}},Ht)=>{const Vt=st.settled(),rn=!sn.shouldConstrain(),zt=kt?Vt:Vt&&rn;zt&&!en.pointerDown()&&(on.stop(),Bt.emit("settle")),zt||Bt.emit("scroll");const cn=Et.get()*Ht+et.get()*(1-Ht);mt.set(cn),kt&&(Lt.loop(st.direction()),nn.loop()),vt.to(mt.get())},G=an(r,i,st=>y(xt,st),st=>C(xt,st)),U=.68,Z=$[tt.get()],nt=lt(Z),et=lt(Z),ot=lt(Z),rt=lt(Z),ct=hn(nt,ot,et,rt,g,U),yt=In(a,$,j,R,rt),bt=Dn(G,tt,X,ct,yt,rt,o),Nt=En(R),wt=dt(),Wt=Fn(e,s,o,p),{slideRegistry:Ct}=Tn(v,S,$,W,N,V),tn=Pn(t,s,Ct,bt,ct,wt,o,F),xt={ownerDocument:r,ownerWindow:i,eventHandler:o,containerRect:I,slideRects:B,animation:G,axis:D,dragHandler:dn(D,t,r,i,rt,pn(D,i),nt,G,bt,ct,yt,tt,o,Q,x,d,f,U,M),eventStore:wt,percentOfView:Q,index:tt,indexPrevious:X,limit:R,location:nt,offsetLocation:ot,previousLocation:et,options:n,resizeHandler:Sn(e,o,i,s,D,b,T),scrollBody:ct,scrollBounds:yn(R,ot,rt,ct,Q),scrollLooper:vn(j,R,ot,[nt,ot,et,rt]),scrollProgress:Nt,scrollSnapList:$.map(Nt.get),scrollSnaps:$,scrollTarget:yt,scrollTo:bt,slideLooper:An(D,q,j,L,w,H,$,ot,s),slideFocus:tn,slidesHandler:On(e,o,A),slidesInView:Wt,slideIndexes:V,slideRegistry:Ct,slidesToScroll:N,target:rt,translate:Yt(D,e)};return xt}function Cn(){let t={},e;function s(l){e=l}function r(l){return t[l]||[]}function i(l){return r(l).forEach(h=>h(e,l)),c}function n(l,h){return t[l]=r(l).concat([h]),c}function o(l,h){return t[l]=r(l).filter(a=>a!==h),c}function u(){t={}}const c={init:s,emit:i,off:o,on:n,clear:u};return c}const Bn={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function kn(t){function e(n,o){return Kt(n,o||{})}function s(n){const o=n.breakpoints||{},u=ft(o).filter(c=>t.matchMedia(c).matches).map(c=>o[c]).reduce((c,l)=>e(c,l),{});return e(n,u)}function r(n){return n.map(o=>ft(o.breakpoints||{})).reduce((o,u)=>o.concat(u),[]).map(t.matchMedia)}return{mergeOptions:e,optionsAtMedia:s,optionsMediaQueries:r}}function Hn(t){let e=[];function s(n,o){return e=o.filter(({options:u})=>t.optionsAtMedia(u).active!==!1),e.forEach(u=>u.init(n,t)),o.reduce((u,c)=>Object.assign(u,{[c.name]:c}),{})}function r(){e=e.filter(n=>n.destroy())}return{init:s,destroy:r}}function St(t,e,s){const r=t.ownerDocument,i=r.defaultView,n=kn(i),o=Hn(n),u=dt(),c=Cn(),{mergeOptions:l,optionsAtMedia:h,optionsMediaQueries:a}=n,{on:g,off:x,emit:d}=c,p=D;let m=!1,f,S=l(Bn,St.globalOptions),b=l(S),A=[],M,F,E;function T(){const{container:V,slides:y}=b;F=(It(V)?t.querySelector(V):V)||t.children[0];const G=It(y)?F.querySelectorAll(y):y;E=[].slice.call(G||F.children)}function I(V){const y=wn(t,F,E,r,i,V,c);if(V.loop&&!y.slideLooper.canLoop()){const C=Object.assign({},V,{loop:!1});return I(C)}return y}function B(V,y){m||(S=l(S,V),b=h(S),A=y||A,T(),f=I(b),a([S,...A.map(({options:C})=>C)]).forEach(C=>u.add(C,"change",D)),b.active&&(f.translate.to(f.location.get()),f.animation.init(),f.slidesInView.init(),f.slideFocus.init(X),f.eventHandler.init(X),f.resizeHandler.init(X),f.slidesHandler.init(X),f.options.loop&&f.slideLooper.loop(),F.offsetParent&&E.length&&f.dragHandler.init(X),M=o.init(X,A)))}function D(V,y){const C=N();q(),B(l({startIndex:C},V),y),c.emit("reInit")}function q(){f.dragHandler.destroy(),f.eventStore.clear(),f.translate.clear(),f.slideLooper.clear(),f.resizeHandler.destroy(),f.slidesHandler.destroy(),f.slidesInView.destroy(),f.animation.destroy(),o.destroy(),u.clear()}function Q(){m||(m=!0,u.clear(),q(),c.emit("destroy"),c.clear())}function Y(V,y,C){!b.active||m||(f.scrollBody.useBaseFriction().useDuration(y===!0?0:b.duration),f.scrollTo.index(V,C||0))}function v(V){const y=f.index.add(1).get();Y(y,V,-1)}function P(V){const y=f.index.add(-1).get();Y(y,V,1)}function L(){return f.index.add(1).get()!==N()}function w(){return f.index.add(-1).get()!==N()}function O(){return f.scrollSnapList}function k(){return f.scrollProgress.get(f.location.get())}function N(){return f.index.get()}function H(){return f.indexPrevious.get()}function _(){return f.slidesInView.get()}function j(){return f.slidesInView.get(!1)}function K(){return M}function W(){return f}function $(){return t}function R(){return F}function tt(){return E}const X={canScrollNext:L,canScrollPrev:w,containerNode:R,internalEngine:W,destroy:Q,off:x,on:g,emit:d,plugins:K,previousScrollSnap:H,reInit:p,rootNode:$,scrollNext:v,scrollPrev:P,scrollProgress:k,scrollSnapList:O,scrollTo:Y,selectedScrollSnap:N,slideNodes:tt,slidesInView:_,slidesNotInView:j};return B(e,s),setTimeout(()=>c.emit("init"),0),X}St.globalOptions=void 0;const Vn=(t,e,s)=>{const r=()=>{t.canScrollPrev()?e.removeAttribute("disabled"):e.setAttribute("disabled","disabled"),t.canScrollNext()?s.removeAttribute("disabled"):s.setAttribute("disabled","disabled")};return t.on("select",r).on("init",r).on("reInit",r),()=>{e.removeAttribute("disabled"),s.removeAttribute("disabled")}},zn=(t,e,s)=>{const r=()=>{t.scrollPrev()},i=()=>{t.scrollNext()};e.addEventListener("click",r,!1),s.addEventListener("click",i,!1);const n=Vn(t,e,s);return()=>{n(),e.removeEventListener("click",r,!1),s.removeEventListener("click",i,!1)}},_n=(t,e)=>{let s=[];const r=()=>{e.innerHTML=t.scrollSnapList().map(()=>'<button class="embla__dot" type="button"></button>').join("");const n=o=>{t.scrollTo(o)};s=Array.from(e.querySelectorAll(".embla__dot")),s.forEach((o,u)=>{o.addEventListener("click",()=>n(u),!1)})},i=()=>{const n=t.previousScrollSnap(),o=t.selectedScrollSnap();s[n].classList.remove("embla__dot--selected"),s[o].classList.add("embla__dot--selected")};return t.on("init",r).on("reInit",r).on("init",i).on("reInit",i).on("select",i),()=>{e.innerHTML=""}};function jt(t,e,s){return Math.min(Math.max(t,e),s)}function Tt(t){return typeof t=="number"&&!isNaN(t)}function Jt(t={}){const i=16.666666666666668;let n,o=[],u,c=0,l=0,h=0,a=!1,g,x;function d(v){n=v;const P=n.selectedScrollSnap(),{scrollBody:L,containerRect:w,axis:O}=n.internalEngine(),k=O.measureSize(w);u=jt(k*.75,200,500),a=!1,o=n.scrollSnapList().map((N,H)=>H===P?1:0),g=L.settled,x=n.scrollProgress,L.settled=q,n.scrollProgress=Q,n.on("select",b).on("slideFocus",m).on("pointerDown",S).on("pointerUp",f),M(),m()}function p(){const{scrollBody:v}=n.internalEngine();v.settled=g,n.scrollProgress=x,n.off("select",b).off("slideFocus",m).off("pointerDown",S).off("pointerUp",f),n.slideNodes().forEach(P=>{const L=P.style;L.opacity="",L.transform="",L.pointerEvents="",P.getAttribute("style")||P.removeAttribute("style")})}function m(){const v=n.selectedScrollSnap();E(v,1)}function f(){a=!1}function S(){a=!1,c=0,l=0}function b(){const v=n.internalEngine().scrollBody.duration();l=v?0:1,a=!0,v||m()}function A(v){const{axis:P}=n.internalEngine();return`translate${P.scroll.toUpperCase()}(${P.direction(v)}px)`}function M(){const{translate:v,slideLooper:P}=n.internalEngine();v.clear(),v.toggleActive(!1),P.loopPoints.forEach(({translate:L})=>{L.clear(),L.toggleActive(!1)})}function F(v){const{scrollSnaps:P,location:L,target:w}=n.internalEngine();!Tt(v)||o[v]<.5||(L.set(P[v]),w.set(L))}function E(v,P){n.scrollSnapList().forEach((w,O)=>{const k=Math.abs(P),N=o[O],H=O===v,_=H?N+k:N-k,j=jt(_,0,1);o[O]=j;const K=H&&a,W=n.previousScrollSnap();K&&(o[W]=1-j),H&&I(v,j),T(O)})}function T(v){const P=n.internalEngine().slideRegistry[v],{scrollSnaps:L,containerRect:w}=n.internalEngine(),O=o[v];P.forEach(k=>{const N=n.slideNodes()[k].style,H=parseFloat(O.toFixed(2)),_=H>0,j=_?L[v]:w.width+2,K=A(j);_&&(N.transform=K),N.opacity=H.toString(),N.pointerEvents=O>.5?"auto":"none",_||(N.transform=K)})}function I(v,P){const{index:L,dragHandler:w,scrollSnaps:O}=n.internalEngine(),k=w.pointerDown(),N=1/(O.length-1);let H=v,_=k?n.selectedScrollSnap():n.previousScrollSnap();if(k&&H===_){const W=Math.sign(c)*-1;H=_,_=L.clone().set(_).add(W).get()}const j=_*N,K=(H-_)*N;h=j+K*P}function B(){const{dragHandler:v,index:P,scrollBody:L}=n.internalEngine(),w=n.selectedScrollSnap();if(!v.pointerDown())return w;const O=Math.sign(L.velocity()),k=Math.sign(c),N=P.clone().set(w).add(O*-1).get();return!O||!k?null:k===O?N:w}function D(v){const{dragHandler:P,scrollBody:L}=v.internalEngine(),w=i/1e3,O=P.pointerDown(),k=L.velocity()*w,N=L.duration(),H=B(),_=!Tt(H);if(O){if(!k)return;c+=k,l=Math.abs(k/u),F(H)}if(!O){if(!N||_)return;l+=(1-o[H])/N,l*=.68}_||E(H,l)}function q(){const{target:v,location:P}=n.internalEngine(),L=v.get()-P.get(),w=Math.abs(L)>=1,O=B(),k=!Tt(O);return D(n),k||w?!1:o[O]>.999}function Q(){return h}return{name:"fade",options:t,init:d,destroy:p}}Jt.globalOptions=void 0;const qt={slidesToScroll:"auto",align:"start"},Zt=document.querySelector(".embla"),Rt=Zt.querySelector(".embla__viewport"),Ut=document.querySelector(".embla__button--prev"),$t=document.querySelector(".embla__button--next"),Qt=document.querySelector(".embla__dots");let pt;Zt.hasAttribute("data-fade")?pt=St(Rt,qt,[Jt()]):pt=St(Rt,qt);let Pt=null,At=null;Ut&&$t&&(Pt=zn(pt,Ut,$t));Qt&&(At=_n(pt,Qt));pt.on("destroy",()=>{Pt&&Pt(),At&&At()});
