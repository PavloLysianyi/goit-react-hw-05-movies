"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[357],{357:function(e,n,r){r.r(n);var t=r(861),c=r(439),i=r(757),s=r.n(i),a=r(791),o=r(689),u=r(256),f=r(184);n.default=function(){var e=(0,o.UO)().movieId,n=(0,a.useState)([]),r=(0,c.Z)(n,2),i=r[0],h=r[1];return(0,a.useEffect)((function(){var n=function(){var n=(0,t.Z)(s().mark((function n(){var r,t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(u.q));case 3:if(!(r=n.sent).ok){n.next=9;break}return n.next=7,r.json();case 7:t=n.sent,h(t.results);case 9:n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.error("Error fetching movie reviews:",n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(){return n.apply(this,arguments)}}();n()}),[e]),(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:"Reviews"}),i.length>0?(0,f.jsx)("ul",{children:i.map((function(e){return(0,f.jsxs)("li",{children:[(0,f.jsx)("p",{children:e.author}),(0,f.jsx)("p",{children:e.content})]},e.id)}))}):(0,f.jsx)("p",{children:"No reviews available for this movie."})]})}},256:function(e,n,r){r.d(n,{q:function(){return t}});var t="a489cf0433455f138fd59ea00245d30d"}}]);
//# sourceMappingURL=357.0435ccf0.chunk.js.map