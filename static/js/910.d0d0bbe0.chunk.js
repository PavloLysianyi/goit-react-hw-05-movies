"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[910,730],{910:function(e,r,t){t.r(r);var n=t(861),c=t(439),a=t(757),o=t.n(a),s=t(791),i=t(689),u=t(256),f=t(184);r.default=function(){var e=(0,i.UO)().movieId,r=(0,s.useState)([]),t=(0,c.Z)(r,2),a=t[0],p=t[1];return(0,s.useEffect)((function(){var r=function(){var r=(0,n.Z)(o().mark((function r(){var t;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,u.uV)(e);case 3:t=r.sent,p(t),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie cast:",r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();r()}),[e]),(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:"Cast"}),(0,f.jsx)("ul",{children:a.map((function(e){return(0,f.jsx)("li",{children:e.profile_path?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(e.profile_path),alt:"".concat(e.name," Profile")}),(0,f.jsx)("p",{children:e.name})]}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("img",{src:e.profile_path,alt:"".concat(e.name," Profile")}),(0,f.jsx)("p",{children:e.name})]})},e.id)}))})]})}},256:function(e,r,t){t.d(r,{Hx:function(){return i},Y5:function(){return f},bI:function(){return p},uV:function(){return s},wr:function(){return u}});var n=t(861),c=t(757),a=t.n(c),o="a489cf0433455f138fd59ea00245d30d",s=function(){var e=(0,n.Z)(a().mark((function e(r){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(r,"/credits?api_key=").concat(o));case 3:if(!(t=e.sent).ok){e.next=9;break}return e.next=7,t.json();case 7:return n=e.sent,e.abrupt("return",n.cast);case 9:e.next=15;break;case 11:throw e.prev=11,e.t0=e.catch(0),console.error("Error fetching movie cast:",e.t0),e.t0;case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(r){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(a().mark((function e(r){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(r,"/reviews?api_key=").concat(o));case 3:if(!(t=e.sent).ok){e.next=9;break}return e.next=7,t.json();case 7:return n=e.sent,e.abrupt("return",n.results);case 9:e.next=15;break;case 11:throw e.prev=11,e.t0=e.catch(0),console.error("Error fetching movie reviews:",e.t0),e.t0;case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(r){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(a().mark((function e(){var r,t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(o));case 3:if(!(r=e.sent).ok){e.next=10;break}return e.next=7,r.json();case 7:return t=e.sent,n=t.results.filter((function(e){return e.title})),e.abrupt("return",n);case 10:e.next=16;break;case 12:throw e.prev=12,e.t0=e.catch(0),console.error("Error fetching trending movies:",e.t0),e.t0;case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(a().mark((function e(r){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(r,"?api_key=").concat(o));case 3:if(!(t=e.sent).ok){e.next=9;break}return e.next=7,t.json();case 7:return n=e.sent,e.abrupt("return",n);case 9:e.next=15;break;case 11:throw e.prev=11,e.t0=e.catch(0),console.error("Error fetching movie details:",e.t0),e.t0;case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(a().mark((function e(r){var t,n,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="https://api.themoviedb.org/3/search/movie?api_key=".concat(o,"&query=").concat(r),e.next=4,fetch(t);case 4:if(!(n=e.sent).ok){e.next=10;break}return e.next=8,n.json();case 8:return c=e.sent,e.abrupt("return",c.results);case 10:e.next=16;break;case 12:throw e.prev=12,e.t0=e.catch(0),console.error("Error fetching movies:",e.t0),e.t0;case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(r){return e.apply(this,arguments)}}()},861:function(e,r,t){function n(e,r,t,n,c,a,o){try{var s=e[a](o),i=s.value}catch(u){return void t(u)}s.done?r(i):Promise.resolve(i).then(n,c)}function c(e){return function(){var r=this,t=arguments;return new Promise((function(c,a){var o=e.apply(r,t);function s(e){n(o,c,a,s,i,"next",e)}function i(e){n(o,c,a,s,i,"throw",e)}s(void 0)}))}}t.d(r,{Z:function(){return c}})}}]);
//# sourceMappingURL=910.d0d0bbe0.chunk.js.map