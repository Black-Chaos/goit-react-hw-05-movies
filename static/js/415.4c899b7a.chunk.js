"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{737:function(n,e,t){t.d(e,{T:function(){return c}});var i=t(683),a=t(671),r=t(144),s=t(243);s.Z.defaults.baseURL="https://api.themoviedb.org/3/",s.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YjQyODlmMDBlMjE1NTE5MjQzODVjOTFkNGIwMTEzZSIsInN1YiI6IjY1MmJmMGM5MGNiMzM1MTZmNzQ3YzkzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VA4_81qNBPKQAKwMfUNWZXjuauQkEzVz0KQ7-yzUX58";var c=function(){function n(){(0,a.Z)(this,n),this.config={params:{query:"",page:1}}}return(0,r.Z)(n,[{key:"setSearchQuestion",value:function(n){this.config.params.query=n,this.config.params.page=1}},{key:"getTrending",value:function(){var n=this;return(0,s.Z)("trending/movie/day",this.config).then((function(e){var t=e.data;return n.config.params.page+=1,t}))}},{key:"searchMovies",value:function(){var n=this;return(0,s.Z)("search/movie",this.config).then((function(e){var t=e.data;return n.config.params.page+=1,t}))}},{key:"getMovieDetails",value:function(n){return(0,s.Z)("movie/".concat(n)).then((function(n){return n.data}))}},{key:"getMovieCredits",value:function(n){return(0,s.Z)("movie/".concat(n,"/credits")).then((function(n){return n.data}))}},{key:"getMovieReviews",value:function(n){return(0,s.Z)("movie/".concat(n,"/reviews")).then((function(n){return n.data}))}},{key:"setParams",value:function(n){this.config.params=(0,i.Z)((0,i.Z)({},this.config.params),n)}},{key:"setConfig",value:function(n){for(var e in n)this.config[e]=(0,i.Z)((0,i.Z)({},this.config[e]),n[e])}}]),n}()},977:function(n,e,t){t.d(e,{O:function(){return l}});var i,a,r=t(168),s=t(867),c=s.ZP.ul(i||(i=(0,r.Z)(["\ndisplay: grid;\ngrid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\ngap: 20px;\n"]))),o=t(689),u=t(87),h=s.ZP.li(a||(a=(0,r.Z)(["\n  border: 1px solid gray;\n\n  a {\n    padding: 8px;\n    display: grid;\n    gap: 8px;\n  }\n\n  .thumb {\n    height: 300px;\n  }\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n"]))),f=t(184);function d(n){var e=n.data,t=e.id,i=e.poster_path,a=e.title,r=(0,o.TH)();return(0,f.jsx)(h,{children:(0,f.jsxs)(u.rU,{to:"/movies/".concat(t),state:{from:r},children:[(0,f.jsx)("div",{className:"thumb",children:(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w400"+i,alt:"poster"})}),(0,f.jsx)("h2",{children:a})]})})}function l(n){var e=n.data;return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(c,{children:e.map((function(n){return(0,f.jsx)(d,{data:n},"".concat(n.id).concat(n.title))}))})})}},415:function(n,e,t){t.r(e),t.d(e,{default:function(){return d}});var i=t(861),a=t(439),r=t(757),s=t.n(r),c=t(737),o=t(977),u=t(791),h=t(184),f=new c.T;function d(){var n=(0,u.useState)([]),e=(0,a.Z)(n,2),t=e[0],r=e[1],c=(0,u.useState)(null),d=(0,a.Z)(c,2),l=d[0],g=d[1];return(0,u.useEffect)((function(){function n(){return(n=(0,i.Z)(s().mark((function n(){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,f.getTrending();case 3:e=n.sent,r(e.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),g(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,h.jsxs)(h.Fragment,{children:[t.length>0&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h1",{className:"section-title",children:"Trending today"}),(0,h.jsx)(o.O,{data:t})]}),l&&(0,h.jsx)("h1",{children:"Oooops... Please reload page"})]})}}}]);
//# sourceMappingURL=415.4c899b7a.chunk.js.map