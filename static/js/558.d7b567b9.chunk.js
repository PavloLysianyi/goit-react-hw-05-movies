"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[558],{558:function(e,t,n){n.r(t);var r=n(861),c=n(439),i=n(757),o=n.n(i),a=n(791),s=n(87),u=n(184);t.default=function(){var e=(0,a.useState)(""),t=(0,c.Z)(e,2),n=t[0],i=t[1],f=(0,a.useState)([]),h=(0,c.Z)(f,2),v=h[0],l=h[1];(0,a.useEffect)((function(){var e=function(){var e=(0,r.Z)(o().mark((function e(){var t,r,c,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="a489cf0433455f138fd59ea00245d30d",r=n?"https://api.themoviedb.org/3/search/movie?api_key=".concat(t,"&query=").concat(n):"https://api.themoviedb.org/3/trending/all/day?api_key=".concat(t),e.next=5,fetch(r);case 5:if(!(c=e.sent).ok){e.next=11;break}return e.next=9,c.json();case 9:i=e.sent,l(i.results);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.error("Error fetching movies:",e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]);return(0,u.jsxs)("div",{children:[(0,u.jsx)("h2",{children:n?"Search Results":"Trending Movies"}),(0,u.jsx)("input",{type:"text",placeholder:"Search for a movie...",value:n,onChange:function(e){i(e.target.value)}}),(0,u.jsx)("ul",{children:v.map((function(e){return(0,u.jsx)("li",{children:(0,u.jsx)(s.rU,{to:"/goit-react-hw-05-movies/movies/".concat(e.id),children:e.title})},e.id)}))})]})}},861:function(e,t,n){function r(e,t,n,r,c,i,o){try{var a=e[i](o),s=a.value}catch(u){return void n(u)}a.done?t(s):Promise.resolve(s).then(r,c)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(c,i){var o=e.apply(t,n);function a(e){r(o,c,i,a,s,"next",e)}function s(e){r(o,c,i,a,s,"throw",e)}a(void 0)}))}}n.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=558.d7b567b9.chunk.js.map