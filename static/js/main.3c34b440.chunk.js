(this.webpackJsonpsvoyak=this.webpackJsonpsvoyak||[]).push([[0],{15:function(e,t,n){e.exports=n(26)},20:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(9),c=n.n(l),o=(n(20),n(21),n(13)),i=n(12),u=n(5),m=n(28),s=n(29),E=n(11),f=n(31),v=n(32),d=n(30),h=n(27),p=function(e){var t=e.gamers,n=(e.onAddPoints,e.onDeleteGamer),a=e.onChangePoints;return r.a.createElement(h.a,{hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null,"#"),r.a.createElement("th",null,"\u0418\u0433\u0440\u043e\u043a"),r.a.createElement("th",null,"\u0411\u0430\u043b\u043b\u044b"),r.a.createElement("th",null))),r.a.createElement("tbody",null,t.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,r.a.createElement(v.a,{variant:"danger",onClick:function(){return n(e.name)}},"x")),r.a.createElement("td",null,t+1),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.points),r.a.createElement("td",null,r.a.createElement(v.a,{onClick:function(){return a(e.name,"add")},variant:"success"},"+")," ",r.a.createElement(v.a,{onClick:function(){return a(e.name,"sub")},variant:"danger"},"-")))}))))};var k=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(""),h=Object(u.a)(c,2),k=h[0],g=h[1],b=Object(a.useState)(10),C=Object(u.a)(b,2),y=C[0],j=C[1],w=function(e){return y===e?"secondary":"light"};return r.a.createElement(m.a,null,r.a.createElement(s.a,{className:"mt-3"},r.a.createElement(E.a,{xs:3},r.a.createElement(f.a.Group,null,r.a.createElement(f.a.Control,{type:"text",value:k,onChange:function(e){g(e.target.value)}}))),r.a.createElement(E.a,null,r.a.createElement(v.a,{variant:"primary",onClick:function(){l([].concat(Object(i.a)(n),[{name:k,points:0}])),g("")}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")),r.a.createElement(E.a,null,r.a.createElement(d.a,{"aria-label":"Basic example",className:"float-right"},r.a.createElement(v.a,{variant:w(10),onClick:function(){return j(10)}},"10"),r.a.createElement(v.a,{variant:w(20),onClick:function(){return j(20)}},"20"),r.a.createElement(v.a,{variant:w(30),onClick:function(){return j(30)}},"30"),r.a.createElement(v.a,{variant:w(40),onClick:function(){return j(40)}},"40"),r.a.createElement(v.a,{variant:w(50),onClick:function(){return j(50)}},"50")))),r.a.createElement(s.a,{className:"mt-3"},r.a.createElement(E.a,null,r.a.createElement(p,{gamers:n,onChangePoints:function(e,t){if(y){var a=n.map((function(n){return n.name===e?Object(o.a)({},n,{points:"add"===t?n.points+y:n.points-y}):n})).sort((function(e,t){return t.points-e.points}));l(a)}},onDeleteGamer:function(e){var t=n.filter((function(t){return t.name!==e}));l(t)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.3c34b440.chunk.js.map