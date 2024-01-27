"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[266],{256:function(e,r,t){t.d(r,{Hx:function(){return u},Y5:function(){return f},bI:function(){return p},uV:function(){return i},wr:function(){return s}});var n=t(861),c=t(757),o=t.n(c),a="a489cf0433455f138fd59ea00245d30d",i=function(){var e=(0,n.Z)(o().mark((function e(r){var t,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(r,"/credits?api_key=").concat(a));case 3:if(!(t=e.sent).ok){e.next=9;break}return e.next=7,t.json();case 7:return n=e.sent,e.abrupt("return",n.cast);case 9:e.next=15;break;case 11:throw e.prev=11,e.t0=e.catch(0),console.error("Error fetching movie cast:",e.t0),e.t0;case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(r){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(o().mark((function e(r){var t,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(r,"/reviews?api_key=").concat(a));case 3:if(!(t=e.sent).ok){e.next=9;break}return e.next=7,t.json();case 7:return n=e.sent,e.abrupt("return",n.results);case 9:e.next=15;break;case 11:throw e.prev=11,e.t0=e.catch(0),console.error("Error fetching movie reviews:",e.t0),e.t0;case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(r){return e.apply(this,arguments)}}(),s=function(){var e=(0,n.Z)(o().mark((function e(){var r,t,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(a));case 3:if(!(r=e.sent).ok){e.next=10;break}return e.next=7,r.json();case 7:return t=e.sent,n=t.results.filter((function(e){return e.title})),e.abrupt("return",n);case 10:e.next=16;break;case 12:throw e.prev=12,e.t0=e.catch(0),console.error("Error fetching trending movies:",e.t0),e.t0;case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(o().mark((function e(r){var t,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(r,"?api_key=").concat(a));case 3:if(!(t=e.sent).ok){e.next=9;break}return e.next=7,t.json();case 7:return n=e.sent,e.abrupt("return",n);case 9:e.next=15;break;case 11:throw e.prev=11,e.t0=e.catch(0),console.error("Error fetching movie details:",e.t0),e.t0;case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(o().mark((function e(r){var t,n,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="https://api.themoviedb.org/3/search/movie?api_key=".concat(a,"&query=").concat(r),e.next=4,fetch(t);case 4:if(!(n=e.sent).ok){e.next=10;break}return e.next=8,n.json();case 8:return c=e.sent,e.abrupt("return",c.results);case 10:e.next=16;break;case 12:throw e.prev=12,e.t0=e.catch(0),console.error("Error fetching movies:",e.t0),e.t0;case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(r){return e.apply(this,arguments)}}()},266:function(e,r,t){t.r(r);var n=t(861),c=t(439),o=t(757),a=t.n(o),i=t(791),u=t(256),s=t(230),f=t(184);r.default=function(){var e=(0,i.useState)([]),r=(0,c.Z)(e,2),t=r[0],o=r[1];return(0,i.useEffect)((function(){var e=function(){var e=(0,n.Z)(a().mark((function e(){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.wr)();case 3:r=e.sent,o(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching trending movies:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:"Trending Movies"}),(0,f.jsx)(s.Z,{movies:t})]})}},230:function(e,r,t){t(791);var n=t(689),c=t(87),o=t(184);r.Z=function(e){var r=e.movies,t=(0,n.TH)();return(0,o.jsx)("ul",{children:r.map((function(e){return(0,o.jsx)("li",{children:(0,o.jsx)(c.rU,{to:{pathname:"/movies/".concat(e.id),state:{from:t}},children:(0,o.jsx)("h3",{children:e.title})})},e.id)}))})}},861:function(e,r,t){function n(e,r,t,n,c,o,a){try{var i=e[o](a),u=i.value}catch(s){return void t(s)}i.done?r(u):Promise.resolve(u).then(n,c)}function c(e){return function(){var r=this,t=arguments;return new Promise((function(c,o){var a=e.apply(r,t);function i(e){n(a,c,o,i,u,"next",e)}function u(e){n(a,c,o,i,u,"throw",e)}i(void 0)}))}}t.d(r,{Z:function(){return c}})}}]);
//# sourceMappingURL=266.750d8215.chunk.js.map