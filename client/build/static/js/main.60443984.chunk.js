(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),i=n(9),a=n.n(i),s=n(5),o=n.n(s),u=n(8),l=n(3),b=n(10),j=n(2),f=(n(16),n.p+"static/media/barrel3.2efe95e2.png"),O=n(0);var d=function(t){var e=t.position,n=t.go,c=t.name,r=t.animation;return Object(O.jsx)("img",{src:f,alt:"barrel",onClick:n,style:{top:e.top,left:e.left,animation:r},className:"barrel",name:c})};var p=function(t){var e=Object(c.useState)(t.top),n=Object(j.a)(e,2),r=n[0],i=n[1];return Object(c.useEffect)((function(){i(t.top)}),[t.top]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h2",{children:"Top 20"}),Object(O.jsx)("ul",{id:"leader-board",children:r.map((function(t){return Object(O.jsxs)("li",{children:[Object(O.jsx)("b",{children:t.name})," ",t.score]},t._id)}))}),Object(O.jsx)("button",{onClick:function(){return t.displayTop20(!1)},children:"\u041d\u0430\u0437\u0430\u0434"})]})};var h=function(t){var e="solid black 3px";return Object(O.jsxs)("div",{className:"starting-screen",children:[Object(O.jsx)("h2",{children:"\u0421\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u044c"}),Object(O.jsxs)("div",{className:"difficulty",children:[Object(O.jsx)("button",{style:t.style.easy,onClick:function(){t.gameDifficulty(3),t.borders({easy:{border:e}}),t.setDifficulty(1)},children:"\u041b\u0435\u0433\u043a\u0430\u044f"}),Object(O.jsx)("button",{style:t.style.normal,onClick:function(){t.gameDifficulty(6),t.borders({normal:{border:e}}),t.setDifficulty(2)},children:"\u041d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u0430\u044f"}),Object(O.jsx)("button",{style:t.style.hard,onClick:function(){t.gameDifficulty(10),t.borders({hard:{border:e}}),t.setDifficulty(3)},children:"\u0421\u043b\u043e\u0436\u043d\u0430\u044f"}),Object(O.jsx)("button",{onClick:function(){return t.changeDisplay()},children:"\u041d\u0430\u0437\u0430\u0434"})]})]})};var m=function(t){var e=Object(c.useState)(!0),n=Object(j.a)(e,2),r=n[0],i=n[1];return r?Object(O.jsxs)("div",{className:"starting-screen",children:[Object(O.jsx)("h2",{children:"\u041e\u043f\u0446\u0438\u0438"}),Object(O.jsx)("button",{onClick:function(){return i(!1)},children:"\u0421\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u044c"}),Object(O.jsx)("button",{disabled:!0,children:"\u0417\u0432\u0443\u043a"}),Object(O.jsx)("button",{disabled:!0,children:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"}),Object(O.jsx)("button",{onClick:function(){return t.changeOptions(!1)},children:"\u041d\u0430\u0437\u0430\u0434"})]}):Object(O.jsx)(h,{changeDisplay:function(){i(!0)},gameDifficulty:t.gameDifficulty,borders:t.borders,style:t.style,setDifficulty:t.setDifficulty})};var y=function(t){var e=Object(c.useState)(!1),n=Object(j.a)(e,2),r=n[0],i=n[1];function a(t){i(t)}return r?Object(O.jsx)(m,{changeOptions:a,gameDifficulty:t.gameDifficulty,borders:t.borders,style:t.style,setDifficulty:t.setDifficulty}):t.showTop20?Object(O.jsx)(p,{top:t.top,displayTop20:t.displayTop20}):Object(O.jsxs)("div",{className:"starting-screen",children:[Object(O.jsx)("button",{onClick:function(){var e;if(!t.playerName){var n=prompt("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0438\u043a");e=n||"\u0413\u043e\u0441\u0442\u044c",t.setName(e)}t.setVisibility(!0),t.shuffle()},children:"\u041d\u0430\u0447\u0430\u0442\u044c \u0438\u0433\u0440\u0443"}),Object(O.jsx)("button",{onClick:function(){return t.displayTop20(!0)},children:"\u0422\u043e\u043f 20"}),Object(O.jsx)("button",{onClick:function(){return a(!0)},children:"\u041e\u043f\u0446\u0438\u0438"})]})};function x(){return{top:Math.floor(450*Math.random()),left:Math.floor(450*Math.random())}}function v(t){for(var e=[],n=function(t){var n=x();!function t(){!function(t,e){return!!t.some((function(t){return e.left<t.left+50&&e.left+50>t.left&&e.top<t.top+50&&e.top+50>t.top}))}(e,n)?e.push(n):(n=x(),t())}()},c=0;c<t;c++)n();return e}var g=function(){var t=Object(c.useState)(3),e=Object(j.a)(t,2),n=e[0],r=e[1],i=Object(c.useState)(!1),a=Object(j.a)(i,2),s=a[0],f=a[1],h=Object(c.useState)(""),m=Object(j.a)(h,2),x=m[0],g=m[1],k=Object(c.useState)(!1),S=Object(j.a)(k,2),D=S[0],C=S[1],T=Object(c.useState)(!1),N=Object(j.a)(T,2),w=N[0],M=N[1],E=Object(c.useState)(!1),J=Object(j.a)(E,2),F=J[0],I=J[1],V=Object(c.useState)("\u041d\u0430\u0439\u0434\u0438 \u0432\u0435\u0441\u0435\u043b\u0443\u044e \u0431\u043e\u0447\u043a\u0443!"),B=Object(j.a)(V,2),P=B[0],_=B[1],q=Object(c.useState)(!1),z=Object(j.a)(q,2),A=z[0],G=z[1],H=Object(c.useState)({easy:{border:"solid black 3px"},normal:{},hard:{}}),K=Object(j.a)(H,2),L=K[0],Q=K[1],R=Object(c.useState)({name:"",score:0}),U=Object(j.a)(R,2),W=U[0],X=U[1],Y=Object(c.useState)({visibility:"hidden"}),Z=Object(j.a)(Y,2),$=Z[0],tt=Z[1],et=Object(c.useState)(1),nt=Object(j.a)(et,2),ct=nt[0],rt=nt[1],it=Object(c.useState)([]),at=Object(j.a)(it,2),st=at[0],ot=at[1],ut=Object(c.useState)(!1),lt=Object(j.a)(ut,2),bt=lt[0],jt=lt[1],ft=Object(c.useState)(v(n)),Ot=Object(j.a)(ft,2),dt=Ot[0],pt=Ot[1];function ht(){pt((function(t){return v(t.length)}))}function mt(){f(!0),I(!0),_("\u041d\u0430\u0439\u0434\u0438 \u0432\u0435\u0441\u0435\u043b\u0443\u044e \u0431\u043e\u0447\u043a\u0443!");for(var t=0;t<n;t++)setTimeout(ht,1e3*(3+t));setTimeout((function(){return M(!0)}),1e3*(n+3)),setTimeout((function(){return f(!1)}),3e3)}function yt(t){0===parseInt(t.target.name)?(_("\u0423\u0433\u0430\u0434\u0430\u043b!"),M(!1),pt((function(t){return[].concat(Object(b.a)(t),[{top:Math.floor(450*Math.random()),left:Math.floor(450*Math.random())}])})),X((function(t){return Object(l.a)(Object(l.a)({},t),{},{score:W.score+=(dt.length-1)*ct})})),mt()):(t.target.style.backgroundColor="red",t.target.parentElement.firstChild.style.backgroundColor="yellow",_("\u0422\u044b \u043f\u0440\u043e\u0438\u0433\u0440\u0430\u043b!"),M(!1),G(!0),Object(u.a)(o.a.mark((function t(){var e,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/api",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(W)});case 3:return e=t.sent,t.next=6,e.json();case 6:n=t.sent,ot(n),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))(),setTimeout((function(){confirm("\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0442\u043e\u043f 20?")&&jt(!0)}),2e3))}function xt(){M(!1),I(!1),pt(v(n)),_("\u041d\u0430\u0439\u0434\u0438 \u0432\u0435\u0441\u0435\u043b\u0443\u044e \u0431\u043e\u0447\u043a\u0443!"),C(!D),St(!1),X((function(t){return Object(l.a)(Object(l.a)({},t),{},{score:0})})),G(!1),jt(!1)}function vt(t){r(t)}function gt(t){Q(t)}function kt(t){X((function(e){return Object(l.a)(Object(l.a)({},e),{},{name:t})}))}function St(t){return tt(t?{visibility:""}:{visibility:"hidden"})}var Dt=Object(c.useCallback)(Object(u.a)(o.a.mark((function t(){var e,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/api");case 3:return e=t.sent,t.next=6,e.json();case 6:n=t.sent,ot(n),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])}))),[]);function Ct(t){jt(t)}return Object(c.useEffect)((function(){pt(v(n))}),[n]),Object(c.useEffect)((function(){g(s?"blink 0.5s 6 alternate ease-in-out":"")}),[s]),Object(c.useEffect)((function(){Dt()}),[Dt]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h2",{children:P}),Object(O.jsx)("h2",{style:$,children:"".concat(W.name," \u041e\u0447\u043a\u0438: ").concat(W.score)}),Object(O.jsx)("div",{id:"map",children:bt?Object(O.jsx)(p,{top:st,displayTop20:Ct}):F?dt.map((function(t,e){return 0===e?Object(O.jsx)(d,{position:dt[e],go:w?yt:null,name:e,animation:x},e):Object(O.jsx)(d,{position:dt[e],go:w?yt:null,name:e},e)})):Object(O.jsx)(y,{shuffle:mt,gameDifficulty:vt,borders:gt,style:L,setName:kt,setVisibility:St,playerName:W.name,setDifficulty:rt,top:st,showTop20:bt,displayTop20:Ct})}),function(){if(w||A)return Object(O.jsx)("button",{onClick:xt,children:"\u041d\u043e\u0432\u0430\u044f \u0418\u0433\u0440\u0430"})}()]})};a.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(g,{})}),document.getElementById("grid"))}},[[18,1,2]]]);
//# sourceMappingURL=main.60443984.chunk.js.map