(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n.n(r),s=n(9),a=n.n(s),i=n(3),o=n.n(i),u=n(5),l=n(4),b=n(10),j=n(2),f=(n(16),n.p+"static/media/barrel3.2efe95e2.png"),O=n(0);var d=function(t){var e=t.position,n=t.go,r=t.name,c=t.animation;return Object(O.jsx)("img",{src:f,alt:"barrel",onClick:n,style:{top:e.top,left:e.left,animation:c},className:"barrel",name:r})};var p=function(t){var e=Object(r.useState)(t.top),n=Object(j.a)(e,2),c=n[0],s=n[1];return Object(r.useEffect)((function(){s(t.top)}),[t.top]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h2",{children:"Top 20"}),Object(O.jsx)("ul",{id:"leader-board",children:c.map((function(t){return Object(O.jsxs)("li",{children:[Object(O.jsx)("b",{children:t.name})," ",t.score]},t._id)}))}),Object(O.jsx)("button",{onClick:function(){return t.displayTop20(!1)},children:"\u041d\u0430\u0437\u0430\u0434"})]})};var h=function(t){var e="solid black 3px";return Object(O.jsxs)("div",{className:"starting-screen",children:[Object(O.jsx)("h2",{children:"\u0421\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u044c"}),Object(O.jsxs)("div",{className:"difficulty",children:[Object(O.jsx)("button",{style:t.style.easy,onClick:function(){t.startingBarrels(3),t.borders({easy:{border:e}}),t.setDifficulty(1)},children:"\u041b\u0435\u0433\u043a\u0430\u044f"}),Object(O.jsx)("button",{style:t.style.normal,onClick:function(){t.startingBarrels(6),t.borders({normal:{border:e}}),t.setDifficulty(2)},children:"\u041d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u0430\u044f"}),Object(O.jsx)("button",{style:t.style.hard,onClick:function(){t.startingBarrels(10),t.borders({hard:{border:e}}),t.setDifficulty(3)},children:"\u0421\u043b\u043e\u0436\u043d\u0430\u044f"}),Object(O.jsx)("button",{onClick:function(){return t.changeDisplay(!0)},children:"\u041d\u0430\u0437\u0430\u0434"})]})]})};var m=function(t){var e=Object(r.useState)(!0),n=Object(j.a)(e,2),c=n[0],s=n[1];return c?Object(O.jsxs)("div",{className:"starting-screen",children:[Object(O.jsx)("h2",{children:"\u041e\u043f\u0446\u0438\u0438"}),Object(O.jsx)("button",{onClick:function(){return s(!1)},children:"\u0421\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u044c"}),Object(O.jsx)("button",{disabled:!0,children:"\u0417\u0432\u0443\u043a"}),Object(O.jsx)("button",{disabled:!0,children:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"}),Object(O.jsx)("button",{onClick:function(){return t.changeOptions(!1)},children:"\u041d\u0430\u0437\u0430\u0434"})]}):Object(O.jsx)(h,{changeDisplay:s,startingBarrels:t.startingBarrels,borders:t.borders,style:t.style,setDifficulty:t.setDifficulty})};var y=function(t){var e=Object(r.useState)(!1),n=Object(j.a)(e,2),c=n[0],s=n[1];return c?Object(O.jsx)(m,{changeOptions:s,startingBarrels:t.startingBarrels,borders:t.borders,style:t.style,setDifficulty:t.setDifficulty}):t.showTop20?Object(O.jsx)(p,{top:t.top,displayTop20:t.displayTop20}):Object(O.jsxs)("div",{className:"starting-screen",children:[Object(O.jsx)("button",{onClick:function(){var e;if(!t.playerName){var n=prompt("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0438\u043a");e=n||"\u0413\u043e\u0441\u0442\u044c",t.setName((function(t){return Object(l.a)(Object(l.a)({},t),{},{name:e})}))}t.setVisibility(!0),t.shuffle()},children:"\u041d\u0430\u0447\u0430\u0442\u044c \u0438\u0433\u0440\u0443"}),Object(O.jsx)("button",{onClick:function(){return t.displayTop20(!0)},children:"\u0422\u043e\u043f 20"}),Object(O.jsx)("button",{onClick:function(){return s(!0)},children:"\u041e\u043f\u0446\u0438\u0438"})]})};function x(t,e){return!!t.some((function(t){return e.left<t.left+50&&e.left+50>t.left&&e.top<t.top+50&&e.top+50>t.top}))}function v(){return{top:Math.floor(450*Math.random()),left:Math.floor(450*Math.random())}}function g(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=v();x(t,e);)e=v();return e}function k(t){for(var e=[],n=0;n<t;n++)e.push(g(e));return e}var S="/api";function C(){return(C=Object(u.a)(o.a.mark((function t(e){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(S,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});case 3:if(201!==(n=t.sent).status){t.next=8;break}return t.next=7,n.json();case 7:return t.abrupt("return",t.sent);case 8:return t.abrupt("return",null);case 11:t.prev=11,t.t0=t.catch(0),console.error(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}function T(){return w.apply(this,arguments)}function w(){return(w=Object(u.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(S);case 3:return e=t.sent,t.next=6,e.json();case 6:return t.abrupt("return",t.sent);case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}function D(t){var e=t.resetGame;return Object(O.jsx)("button",{onClick:e,children:"\u041d\u043e\u0432\u0430\u044f \u0418\u0433\u0440\u0430"})}var N=function(){var t=Object(r.useState)(3),e=Object(j.a)(t,2),n=e[0],c=e[1],s=Object(r.useState)(!1),a=Object(j.a)(s,2),i=a[0],f=a[1],h=Object(r.useState)(""),m=Object(j.a)(h,2),x=m[0],v=m[1],S=Object(r.useState)(!1),w=Object(j.a)(S,2),N=w[0],B=w[1],E=Object(r.useState)(!1),M=Object(j.a)(E,2),J=M[0],F=M[1],G=Object(r.useState)(!1),I=Object(j.a)(G,2),V=I[0],P=I[1],_=Object(r.useState)("\u041d\u0430\u0439\u0434\u0438 \u0432\u0435\u0441\u0435\u043b\u0443\u044e \u0431\u043e\u0447\u043a\u0443!"),q=Object(j.a)(_,2),z=q[0],A=q[1],H=Object(r.useState)(!1),K=Object(j.a)(H,2),L=K[0],Q=K[1],R=Object(r.useState)({easy:{border:"solid black 3px"},normal:{},hard:{}}),U=Object(j.a)(R,2),W=U[0],X=U[1],Y=Object(r.useState)({name:"",score:0}),Z=Object(j.a)(Y,2),$=Z[0],tt=Z[1],et=Object(r.useState)({visibility:"hidden"}),nt=Object(j.a)(et,2),rt=nt[0],ct=nt[1],st=Object(r.useState)(1),at=Object(j.a)(st,2),it=at[0],ot=at[1],ut=Object(r.useState)([]),lt=Object(j.a)(ut,2),bt=lt[0],jt=lt[1],ft=Object(r.useState)(!1),Ot=Object(j.a)(ft,2),dt=Ot[0],pt=Ot[1],ht=Object(r.useState)(k(n)),mt=Object(j.a)(ht,2),yt=mt[0],xt=mt[1];function vt(){xt((function(t){return k(t.length)}))}function gt(){f(!0),P(!0),A("\u041d\u0430\u0439\u0434\u0438 \u0432\u0435\u0441\u0435\u043b\u0443\u044e \u0431\u043e\u0447\u043a\u0443!");for(var t=0;t<n;t++)setTimeout(vt,1e3*(3+t));setTimeout((function(){return F(!0)}),1e3*(n+3)),setTimeout((function(){return f(!1)}),3e3)}function kt(t){0===parseInt(t.target.name)?(A("\u0423\u0433\u0430\u0434\u0430\u043b!"),F(!1),xt((function(t){return[].concat(Object(b.a)(t),[g(t)])})),tt((function(t){return Object(l.a)(Object(l.a)({},t),{},{score:$.score+=yt.length*it})})),gt()):(t.target.style.backgroundColor="red",t.target.parentElement.firstChild.style.backgroundColor="yellow",A("\u0422\u044b \u043f\u0440\u043e\u0438\u0433\u0440\u0430\u043b!"),F(!1),Q(!0),function(t){return C.apply(this,arguments)}($).then((function(t){return t?jt(t):null})),setTimeout((function(){confirm("\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0442\u043e\u043f 20?")&&pt(!0)}),1e3))}function St(t){return ct(t?{visibility:""}:{visibility:"hidden"})}var Ct=Object(r.useCallback)(Object(u.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T();case 2:e=t.sent,jt(e);case 4:case"end":return t.stop()}}),t)}))),[]);return Object(r.useEffect)((function(){xt(k(n))}),[n]),Object(r.useEffect)((function(){v(i?"blink 0.5s 6 alternate ease-in-out":"")}),[i]),Object(r.useEffect)((function(){Ct()}),[Ct]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h2",{children:z}),Object(O.jsx)("h2",{style:rt,children:"".concat($.name," \u041e\u0447\u043a\u0438: ").concat($.score)}),Object(O.jsx)("div",{id:"map",children:dt?Object(O.jsx)(p,{top:bt,displayTop20:pt}):V?yt.map((function(t,e){return 0===e?Object(O.jsx)(d,{position:yt[e],go:J?kt:null,name:e,animation:x},e):Object(O.jsx)(d,{position:yt[e],go:J?kt:null,name:e},e)})):Object(O.jsx)(y,{shuffle:gt,startingBarrels:c,borders:X,style:W,setName:tt,setVisibility:St,playerName:$.name,setDifficulty:ot,top:bt,showTop20:dt,displayTop20:pt})}),(J||L)&&Object(O.jsx)(D,{gameStatus:J,gameOver:L,resetGame:function(){F(!1),P(!1),xt(k(n)),A("\u041d\u0430\u0439\u0434\u0438 \u0432\u0435\u0441\u0435\u043b\u0443\u044e \u0431\u043e\u0447\u043a\u0443!"),B(!N),St(!1),tt((function(t){return Object(l.a)(Object(l.a)({},t),{},{score:0})})),Q(!1),pt(!1)}})]})};a.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(N,{})}),document.getElementById("grid"))}},[[18,1,2]]]);
//# sourceMappingURL=main.ba6f3751.chunk.js.map