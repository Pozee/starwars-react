(this["webpackJsonpreact-starwars"]=this["webpackJsonpreact-starwars"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),l=a.n(c),o=(a(14),a(15),a(4)),i=a.n(o),s=a(8),u=a(7),m=a(1),p=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(m.a)(l,2),p=o[0],h=o[1],E=Object(n.useState)(!1),f=Object(m.a)(E,2),b=f[0],d=f[1],y=Object(n.useState)([]),v=Object(m.a)(y,2),w=v[0],g=v[1],j=[],k=[],N=Object(n.useState)(""),O=Object(m.a)(N,2),C=O[0],x=O[1],S=Object(n.useState)(""),_=Object(m.a)(S,2),A=_[0],B=_[1],F=Object(n.useState)(""),L=Object(m.a)(F,2),q=L[0],J=L[1];function W(){return I.apply(this,arguments)}function I(){return(I=Object(u.a)(i.a.mark((function e(){var t,a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t="https://swapi.dev/api/people/?page=1",a=!0;case 2:if(!a){e.next=13;break}return e.next=5,fetch(t);case 5:return n=e.sent,e.next=8,n.json();case 8:(r=e.sent).next||(a=!1),a&&(t=r.next.replace("http","https"),r.results.map((function(e){return j.push(e)}))),e.next=2;break;case 13:K();case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function K(){return k=(k=[].concat(j)).filter((function(e){return!!e.name.toLowerCase().includes(p)||(!!e.birth_year.toLowerCase().includes(p)||!!e.eye_color.toLowerCase().includes(p))})),c(k)}function M(e){var t={name:e.name,birth_year:e.birth_year,eye_color:e.eye_color};g((function(e){return[].concat(Object(s.a)(e),[t])}))}var P=a.map((function(e,t){return r.a.createElement("div",{className:"result-container",key:e.name+t},r.a.createElement("p",{className:"name"},e.name),r.a.createElement("span",{onClick:function(){return M(e)},role:"img","aria-label":"add as favorite",className:"favorite grow active"},"\u2b50"),r.a.createElement("p",{className:"eye-color"},"Eye color: ",r.a.createElement("span",null,e.eye_color)),r.a.createElement("p",{className:"birth-year"},"Birth year: ",r.a.createElement("span",null,e.birth_year)))})),T=w.map((function(e){return r.a.createElement("div",{className:"result-container",key:e.name},r.a.createElement("p",{className:"name"},e.name),r.a.createElement("span",{onClick:function(){return function(e){g(w.filter((function(t){return t.name!==e.name})))}(e)},role:"img","aria-label":"add as favorite",className:"favorite grow active"},"\u274c"),r.a.createElement("p",{className:"eye-color"},"Eye color: ",r.a.createElement("span",null,e.eye_color)),r.a.createElement("p",{className:"birth-year"},"Birth year: ",r.a.createElement("span",null,e.birth_year)))})),$="Add own favorite";return b&&($="Show results"),r.a.createElement("div",{className:"search-bar"},r.a.createElement("input",{onKeyPress:function(e){"Enter"===e.key&&W()},value:p,onChange:function(e){return h(e.target.value.toLowerCase())},type:"text",placeholder:"Type a search value e.g Skywalker"}),r.a.createElement("button",{onClick:W},"Search"),r.a.createElement("button",{onClick:function(){return d(!b)}},$),b?r.a.createElement("div",null,r.a.createElement("h2",null,"Add your own favorite:"),r.a.createElement("div",{className:"form-container"},r.a.createElement("label",{htmlFor:"name"},"Name: ",r.a.createElement("br",null),r.a.createElement("input",{required:!0,id:"name",type:"text",onChange:function(e){return x(e.target.value)}})),r.a.createElement("label",{htmlFor:"birth"},"Birth year: ",r.a.createElement("br",null),r.a.createElement("input",{required:!0,id:"birth",type:"text",onChange:function(e){return B(e.target.value)}})),r.a.createElement("label",{htmlFor:"eye"},"Eye color: ",r.a.createElement("br",null),r.a.createElement("input",{required:!0,id:"eye",type:"text",onChange:function(e){return J(e.target.value)}})),r.a.createElement("button",{onClick:function(){M({name:C,birth_year:A,eye_color:q})},disabled:""===C||""===q||""===A},"Add"))):r.a.createElement("div",null,P),w.length>0?r.a.createElement("div",{className:"favorites"},r.a.createElement("h1",null,"Favorites"),T):null)};var h=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"Star wars information")),r.a.createElement("main",null,r.a.createElement(p,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.cec7205c.chunk.js.map