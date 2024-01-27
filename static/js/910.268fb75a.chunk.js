"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[910,730],{910:function(e,t,r){r.r(t);var n=r(861),c=r(439),a=r(757),o=r.n(a),s=r(791),u=r(689),i=r(256),f=r(184);t.default=function(){var e=(0,u.UO)().movieId,t=(0,s.useState)([]),r=(0,c.Z)(t,2),a=r[0],p=r[1];(0,s.useEffect)((function(){var t=function(){var t=(0,n.Z)(o().mark((function t(){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,i.uV)(e);case 3:r=t.sent,p(r),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("Error fetching movie cast:",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]);return(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:"Cast"}),(0,f.jsx)("ul",{children:a.map((function(e){return(0,f.jsxs)("li",{children:[(0,f.jsx)("img",{src:e.profile_path?"https://image.tmdb.org/t/p/w200/".concat(e.profile_path):"https://placekitten.com/200/300",alt:"".concat(e.name," Profile")}),(0,f.jsx)("p",{children:e.name})]},e.id)}))})]})}},256:function(e,t,r){r.d(t,{Hx:function(){return u},Y5:function(){return f},bI:function(){return p},uV:function(){return s},wr:function(){return i}});var n=r(861),c=r(757),a=r.n(c),o="a489cf0433455f138fd59ea00245d30d",s=function(){var e=(0,n.Z)(a().mark((function e(t){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(o));case 3:if(!(r=e.sent).ok){e.next=9;break}return e.next=7,r.json();case 7:return n=e.sent,e.abrupt("return",n.cast);case 9:e.next=15;break;case 11:throw e.prev=11,e.t0=e.catch(0),console.error("Error fetching movie cast:",e.t0),e.t0;case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(a().mark((function e(t){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(o));case 3:if(!(r=e.sent).ok){e.next=9;break}return e.next=7,r.json();case 7:return n=e.sent,e.abrupt("return",n.results);case 9:e.next=15;break;case 11:throw e.prev=11,e.t0=e.catch(0),console.error("Error fetching movie reviews:",e.t0),e.t0;case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(a().mark((function e(){var t,r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(o));case 3:if(!(t=e.sent).ok){e.next=10;break}return e.next=7,t.json();case 7:return r=e.sent,n=r.results.filter((function(e){return e.title})),e.abrupt("return",n);case 10:e.next=16;break;case 12:throw e.prev=12,e.t0=e.catch(0),console.error("Error fetching trending movies:",e.t0),e.t0;case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(a().mark((function e(t){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(o));case 3:if(!(r=e.sent).ok){e.next=9;break}return e.next=7,r.json();case 7:return n=e.sent,e.abrupt("return",n);case 9:e.next=15;break;case 11:throw e.prev=11,e.t0=e.catch(0),console.error("Error fetching movie details:",e.t0),e.t0;case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(a().mark((function e(t){var r,n,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="https://api.themoviedb.org/3/search/movie?api_key=".concat(o,"&query=").concat(t),e.next=4,fetch(r);case 4:if(!(n=e.sent).ok){e.next=10;break}return e.next=8,n.json();case 8:return c=e.sent,e.abrupt("return",c.results);case 10:e.next=16;break;case 12:throw e.prev=12,e.t0=e.catch(0),console.error("Error fetching movies:",e.t0),e.t0;case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}()},861:function(e,t,r){function n(e,t,r,n,c,a,o){try{var s=e[a](o),u=s.value}catch(i){return void r(i)}s.done?t(u):Promise.resolve(u).then(n,c)}function c(e){return function(){var t=this,r=arguments;return new Promise((function(c,a){var o=e.apply(t,r);function s(e){n(o,c,a,s,u,"next",e)}function u(e){n(o,c,a,s,u,"throw",e)}s(void 0)}))}}r.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=910.268fb75a.chunk.js.map