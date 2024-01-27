"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[303],{256:function(e,t,r){r.d(t,{Hx:function(){return i},Y5:function(){return f},bI:function(){return p},uV:function(){return u},wr:function(){return s}});var n=r(861),c=r(757),a=r.n(c),o="a489cf0433455f138fd59ea00245d30d",u=function(){var e=(0,n.Z)(a().mark((function e(t){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(o));case 3:if(!(r=e.sent).ok){e.next=9;break}return e.next=7,r.json();case 7:return n=e.sent,e.abrupt("return",n.cast);case 9:e.next=15;break;case 11:throw e.prev=11,e.t0=e.catch(0),console.error("Error fetching movie cast:",e.t0),e.t0;case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(a().mark((function e(t){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(o));case 3:if(!(r=e.sent).ok){e.next=9;break}return e.next=7,r.json();case 7:return n=e.sent,e.abrupt("return",n.results);case 9:e.next=15;break;case 11:throw e.prev=11,e.t0=e.catch(0),console.error("Error fetching movie reviews:",e.t0),e.t0;case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=(0,n.Z)(a().mark((function e(){var t,r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(o));case 3:if(!(t=e.sent).ok){e.next=10;break}return e.next=7,t.json();case 7:return r=e.sent,n=r.results.filter((function(e){return e.title})),e.abrupt("return",n);case 10:e.next=16;break;case 12:throw e.prev=12,e.t0=e.catch(0),console.error("Error fetching trending movies:",e.t0),e.t0;case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(a().mark((function e(t){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(o));case 3:if(!(r=e.sent).ok){e.next=9;break}return e.next=7,r.json();case 7:return n=e.sent,e.abrupt("return",n);case 9:e.next=15;break;case 11:throw e.prev=11,e.t0=e.catch(0),console.error("Error fetching movie details:",e.t0),e.t0;case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(a().mark((function e(t){var r,n,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="https://api.themoviedb.org/3/search/movie?api_key=".concat(o,"&query=").concat(t),e.next=4,fetch(r);case 4:if(!(n=e.sent).ok){e.next=10;break}return e.next=8,n.json();case 8:return c=e.sent,e.abrupt("return",c.results);case 10:e.next=16;break;case 12:throw e.prev=12,e.t0=e.catch(0),console.error("Error fetching movies:",e.t0),e.t0;case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}()},230:function(e,t,r){r(791);var n=r(689),c=r(87),a=r(184);t.Z=function(e){var t=e.movies,r=(0,n.TH)();return(0,a.jsx)("ul",{children:t.map((function(e){return(0,a.jsx)("li",{children:(0,a.jsx)(c.rU,{to:{pathname:"/movies/".concat(e.id),state:{from:r}},children:(0,a.jsx)("h3",{children:e.title})})},e.id)}))})}},303:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var n=r(861),c=r(439),a=r(757),o=r.n(a),u=r(791),i=r(87),s=r(256),f=r(230),p=r(184),v=function(e){var t=e.onSearch,r=(0,u.useState)(""),n=(0,c.Z)(r,2),a=n[0],o=n[1];return(0,p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(a)},children:[(0,p.jsx)("input",{type:"text",placeholder:"Search for a movie...",value:a,onChange:function(e){o(e.target.value)}}),(0,p.jsx)("button",{type:"submit",children:"Search"})]})},h=function(){var e=(0,u.useState)([]),t=(0,c.Z)(e,2),r=t[0],a=t[1],h=(0,u.useState)(""),l=(0,c.Z)(h,2),x=l[0],d=l[1],m=(0,i.lr)(),k=(0,c.Z)(m,2),b=k[0],w=k[1];return(0,u.useEffect)((function(){var e=function(){var e=(0,n.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,""===x){e.next=7;break}return w({search:x}),e.next=5,(0,s.bI)(x);case 5:t=e.sent,a(t);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error("Error fetching movies:",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[b,x,w]),(0,p.jsxs)("div",{children:[(0,p.jsx)(v,{onSearch:function(e){d(e)}}),""!==x&&(0,p.jsx)(f.Z,{movies:r})]})}},861:function(e,t,r){function n(e,t,r,n,c,a,o){try{var u=e[a](o),i=u.value}catch(s){return void r(s)}u.done?t(i):Promise.resolve(i).then(n,c)}function c(e){return function(){var t=this,r=arguments;return new Promise((function(c,a){var o=e.apply(t,r);function u(e){n(o,c,a,u,i,"next",e)}function i(e){n(o,c,a,u,i,"throw",e)}u(void 0)}))}}r.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=303.505ecafe.chunk.js.map