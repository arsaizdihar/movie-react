(this["webpackJsonpmovie-react"]=this["webpackJsonpmovie-react"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var i=c(0),s=c.n(i),n=c(9),a=c.n(n),l=c(6),r=c(2),o=(c(14),c(4)),j=c(5),d=c(1),b=Object(i.createContext)({}),h=function(e){var t=e.children,c=Object(i.useState)(null),s=Object(j.a)(c,2),n=s[0],a=s[1],l=Object(i.useState)([]),r=Object(j.a)(l,2),h=r[0],u=r[1];Object(i.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/popular?api_key=d04742a1e9e55575ea0a3bb3c47a88c5").then((function(e){return e.json()})).then((function(e){var t=JSON.parse(localStorage.getItem("wishlist")||"[]");u(e.results.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{wishlist:t.includes(e.id)})})))}))}),[]);var O=Object(i.useRef)(null);Object(i.useEffect)((function(){document.body.classList.toggle("overlay-active",null!==n)}),[n]);return Object(d.jsxs)(b.Provider,{value:{movie:n,setMovie:a,movies:h,setMovies:u},children:[t,n&&Object(d.jsx)("div",{className:"overlay",onClick:function(e){var t=e.clientX,c=e.clientY,i=O.current;if(i){var s=i.getBoundingClientRect(),n=s.left,l=s.top,r=s.right,o=s.bottom;if(n<=t&&r>=t&&l<=c&&o>=c)return;a(null)}},children:Object(d.jsx)("div",{className:"movie-detail-container",children:Object(d.jsxs)("div",{className:"movie-detail",ref:O,children:[Object(d.jsx)("button",{className:"love-icon ".concat(n.wishlist?"love-icon-check":""),onClick:function(){if(n){var e=!n.wishlist;a(Object(o.a)(Object(o.a)({},n),{},{wishlist:e})),u(h.map((function(t){return t.id===n.id?Object(o.a)(Object(o.a)({},t),{},{wishlist:e}):t})));var t=JSON.parse(localStorage.getItem("wishlist")||"[]");e?t.push(n.id):t.splice(t.indexOf(n.id),1),localStorage.setItem("wishlist",JSON.stringify(t))}},children:Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:Object(d.jsx)("path",{fillRule:"evenodd",d:"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",clipRule:"evenodd"})})}),Object(d.jsx)("h2",{className:"detail-title",children:n.title}),Object(d.jsx)("h4",{className:"rating",children:n.vote_average}),Object(d.jsx)("img",{src:"https://image.tmdb.org/t/p/w400".concat(n.backdrop_path),alt:n.title,className:"poster"}),Object(d.jsx)("p",{className:"detail-description",children:n.overview}),Object(d.jsx)("button",{className:"detail-close",onClick:function(){return a(null)},children:"CLOSE"})]})})})]})},u=function(e){var t=Object(i.useContext)(b).setMovie;return Object(d.jsxs)("div",{className:"card-container",children:[Object(d.jsx)("div",{className:"glow"}),Object(d.jsxs)("button",{className:"card",onClick:function(){return t(e)},children:[Object(d.jsx)("h3",{className:"movie-title",children:e.title}),Object(d.jsx)("h4",{className:"rating",children:e.vote_average}),Object(d.jsx)("img",{src:"https://image.tmdb.org/t/p/w400".concat(e.backdrop_path),alt:e.title,className:"poster",loading:"lazy"})]})]})},O=function(){var e=Object(i.useContext)(b).movies;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{className:"title",children:"Most Popular Movie List"}),Object(d.jsx)("div",{className:"wishlist",children:Object(d.jsx)(l.b,{to:"/movie-react/wishlist",children:"Wishlist"})}),Object(d.jsx)("div",{id:"movies",children:e.map((function(e){return Object(i.createElement)(u,Object(o.a)(Object(o.a)({},e),{},{key:e.id}))}))})]})})},m=function(){var e=Object(i.useContext)(b).movies;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{className:"title",children:"Wishlist"}),Object(d.jsx)("div",{className:"wishlist",children:Object(d.jsx)(l.b,{to:"/movie-react",children:"back"})}),Object(d.jsx)("div",{id:"movies",children:e.map((function(e){return e.wishlist&&Object(i.createElement)(u,Object(o.a)(Object(o.a)({},e),{},{key:e.id}))}))})]})})};var v=function(){return Object(d.jsx)(h,{children:Object(d.jsx)(l.a,{children:Object(d.jsxs)(r.c,{children:[Object(d.jsx)(r.a,{path:"/movie-react",element:Object(d.jsx)(O,{})}),Object(d.jsx)(r.a,{path:"/movie-react/wishlist",element:Object(d.jsx)(m,{})})]})})})},x=(c(16),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,18)).then((function(t){var c=t.getCLS,i=t.getFID,s=t.getFCP,n=t.getLCP,a=t.getTTFB;c(e),i(e),s(e),n(e),a(e)}))});a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root")),x()}},[[17,1,2]]]);
//# sourceMappingURL=main.f6252faa.chunk.js.map