(this.webpackJsonpabout_movies=this.webpackJsonpabout_movies||[]).push([[0],{12:function(e,t,a){e.exports={card_movie_container:"MainPage_card_movie_container__2Eg7U",topbar_title:"MainPage_topbar_title__RZgMJ",card_movie_about:"MainPage_card_movie_about__NiIry",card_movie_body:"MainPage_card_movie_body__3r6Mi",card_movie_vote:"MainPage_card_movie_vote__1lq7k",card_movie_poster:"MainPage_card_movie_poster__1aJNf",card_movie_vote_star:"MainPage_card_movie_vote_star__cMyMU",card_movie_overview:"MainPage_card_movie_overview__36Ovc",card_movie_title:"MainPage_card_movie_title__1nlxC"}},15:function(e,t,a){e.exports={container:"App_container__eys76",footer:"App_footer__lRWTY",error_none:"App_error_none__1nh_K",error_block:"App_error_block__2sUbb"}},44:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var i=a(0),s=a(20),r=a.n(s),c=(a(44),a(3)),n=a(13),o=a(10),l=a(18),_=a(19),d=a.n(_),m=a(26),j=a(29),b=a(9),u=a(38),f=a.n(u).a.create({baseURL:"https://api.themoviedb.org/3/movie/"}),v=function(e){return f.get("https://api.themoviedb.org/3/movie/popular?api_key=a2df3d1a7611194432bbdf1fc80540f2&language=en-US&page=".concat(e)).then((function(e){return e.data}))},O=function(e){return f.get("".concat(e,"?api_key=a2df3d1a7611194432bbdf1fc80540f2&language=en-US")).then((function(e){return e.data}))},p={films:[],isLoading:!1,filmDetails:null,currentPage:1,fetchingScroll:!0,totalCount:0,error:null},h=function(e){return{type:"films/GET_ALL_FILMS",films:e}},g=function(e){return{type:"films/GET_FILM_DETAILS",filmDetails:e}},x=function(e){return{type:"films/SET_TOTAL_COUNT",totalCount:e}},N=function(e){return{type:"films/SET_CURRENT_PAGE",currentPage:e}},E=function(e){return{type:"films/SET_ERROR",error:e}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"films/GET_ALL_FILMS":return Object(b.a)(Object(b.a)({},e),{},{films:[].concat(Object(j.a)(e.films),Object(j.a)(t.films))});case"films/TOOGLE_IS_LOADING":return Object(b.a)(Object(b.a)({},e),{},{isLoading:t.isLoading});case"films/GET_FILM_DETAILS":return Object(b.a)(Object(b.a)({},e),{},{filmDetails:t.filmDetails});case"films/SET_TOTAL_COUNT":return Object(b.a)(Object(b.a)({},e),{},{totalCount:t.totalCount});case"films/SET_CURRENT_PAGE":return Object(b.a)(Object(b.a)({},e),{},{currentPage:e.currentPage+1});case"films/SET_ERROR":return Object(b.a)(Object(b.a)({},e),{},{error:t.error});default:return e}},w=function(e){return e.films.films},T=function(e){return e.films.filmDetails},y=function(e){return e.films.currentPage},P=function(e){return e.films.totalCount},L=function(e){return e.films.error},D=a(12),M=a.n(D),I=a(15),F=a.n(I),A=a(1),R=function(){var e=Object(o.c)(L);return Object(A.jsx)("div",{className:e?F.a.error_block:F.a.error_none,children:e&&e})},k=function(){var e=Object(o.b)(),t=Object(o.c)(y),a=Object(o.c)(w),s=Object(o.c)(P),r=Object(i.useState)(!0),c=Object(l.a)(r,2),_=c[0],j=c[1],b=function(e){e.target.documentElement.scrollHeight-(e.target.documentElement.scrollTop+window.innerHeight)<100&&a.length<s&&j(!0)};Object(i.useEffect)((function(){return document.addEventListener("scroll",b),function(){document.removeEventListener("scroll",b)}}),[b]);var u=function(e){sessionStorage.setItem("scrollPosition",window.pageYOffset)};return Object(i.useEffect)((function(){var i;localStorage.setItem("films",JSON.stringify(a)),_&&(e((i=t,function(){var e=Object(m.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v(i);case 3:a=e.sent,t(h(a.results)),t(x(a.total_results)),t(N(i)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t(E("Error getting the list of movies! Please, try again."));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())),function(){var e=sessionStorage.getItem("scrollPosition");e&&(window.scrollTo(0,parseInt(e)),sessionStorage.removeItem("scrollPosition"))}(),j(!1))}),[a,_]),Object(A.jsxs)("div",{className:M.a.card_movie_container,children:[Object(A.jsx)("div",{className:M.a.topbar_title,children:"Movie"}),Object(A.jsx)(R,{}),a?a.map((function(e,t){return Object(A.jsxs)("div",{children:[" ",Object(A.jsxs)(n.b,{to:"/details/"+e.id,children:[Object(A.jsxs)("div",{onClick:u,className:M.a.card_movie_body,children:[Object(A.jsx)("div",{className:M.a.card_movie_poster,children:Object(A.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path),alt:e.title})}),Object(A.jsxs)("div",{className:M.a.card_movie_about,children:[Object(A.jsx)("div",{className:M.a.card_movie_title,children:e.title}),Object(A.jsxs)("div",{className:M.a.card_movie_vote,children:[Object(A.jsx)("span",{className:M.a.card_movie_vote_star,children:Object(A.jsx)("i",{className:"fas fa-star"})}),e.vote_average]}),Object(A.jsx)("div",{className:M.a.card_movie_overview,children:e.overview})]})]})," "]})," "]},t)})):null]})},C=a(23),G=a(39),U=Object(C.b)({films:S}),J=Object(C.c)(U,Object(C.a)(G.a)),q=a(8),H=a.n(q),Y=function(){var e=Object(o.b)(),t=Object(o.c)(T),a=Object(i.useState)(0),s=Object(l.a)(a,2),r=s[0],_=s[1],j=Object(i.useState)(0),b=Object(l.a)(j,2),u=b[0],f=b[1],v=Object(c.f)().pathname,p=Number(v.substring(9)),h=JSON.parse(localStorage.getItem("films"));return Object(i.useEffect)((function(){e(function(e){return function(){var t=Object(m.a)(d.a.mark((function t(a){var i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O(e);case 3:i=t.sent,a(g(i)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a(E("Error getting the movie descriptions! Please, try again."));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(p)),h.forEach((function(e,t){e.id===p&&(_(t-1),f(t+1))}))}),[p]),Object(A.jsxs)("div",{children:[Object(A.jsx)("div",{className:H.a.prev_button,children:Object(A.jsx)(n.b,{to:"/films",children:Object(A.jsx)("i",{className:"fas fa-chevron-left"})})}),Object(A.jsx)(R,{}),t&&Object(A.jsxs)("div",{children:[Object(A.jsxs)("div",{className:H.a.details_poster,children:[Object(A.jsxs)("div",{className:H.a.details_poster_prev,children:[h[r]&&Object(A.jsx)(n.b,{to:"/details/"+h[r].id,children:Object(A.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(h[r].poster_path),alt:h[r].title})}),"  "]}),Object(A.jsxs)("span",{children:[" ",Object(A.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(t.poster_path),alt:t.title})," "]}),Object(A.jsxs)("div",{className:H.a.details_poster_next,children:[" ",h[u]&&Object(A.jsx)(n.b,{to:"/details/"+h[u].id,children:Object(A.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(h[u].poster_path),alt:h[u].title})})]})]}),Object(A.jsx)("div",{className:H.a.details_title,children:t.title}),Object(A.jsxs)("div",{className:H.a.details_common_info,children:[Object(A.jsx)("span",{children:t.release_date}),Object(A.jsx)("span",{className:H.a.details_common_info_dot,children:Object(A.jsx)("i",{className:"fas fa-circle"})}),Object(A.jsxs)("span",{children:[String(t.runtime).charAt(0),"h ",String(t.runtime).substr(1),"m"]}),Object(A.jsx)("span",{className:H.a.details_common_info_dot,children:Object(A.jsx)("i",{className:"fas fa-circle"})}),Object(A.jsxs)("span",{children:[Object(A.jsx)("span",{className:H.a.details_common_info_star,children:Object(A.jsx)("i",{className:"fas fa-star"})}),Object(A.jsx)("span",{className:H.a.details_common_info_votu,children:t.vote_average})]})]}),Object(A.jsxs)("div",{className:H.a.details_tagline,children:[Object(A.jsx)("span",{children:"Tagline:"}),t.tagline]}),Object(A.jsx)("div",{className:H.a.details_overview,children:t.overview})]})]})},z=Object(c.g)((function(){return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)("div",{className:F.a.container,children:[Object(A.jsx)(c.b,{exact:!0,path:"/",render:function(){return Object(A.jsx)(c.a,{to:"/films"})}}),Object(A.jsx)(c.b,{path:"/films",render:function(){return Object(A.jsx)(k,{})}}),Object(A.jsx)(c.b,{path:"/details/:filmId?",render:function(){return Object(A.jsx)(Y,{})}})]}),Object(A.jsxs)("div",{className:F.a.footer,children:[Object(A.jsx)("div",{children:Object(A.jsx)("i",{className:"fas fa-video"})}),"Movie"]})]})})),B=function(){return Object(A.jsx)(z,{})},K=function(){return Object(A.jsx)(n.a,{basename:"/about-movies",children:Object(A.jsx)(o.a,{store:J,children:Object(A.jsx)(B,{})})})};r.a.render(Object(A.jsx)(K,{}),document.getElementById("root"))},8:function(e,t,a){e.exports={prev_button:"FilmsDetails_prev_button__3Hi7l",details_poster:"FilmsDetails_details_poster__1yAG7",details_poster_prev:"FilmsDetails_details_poster_prev__1oRE0",details_poster_next:"FilmsDetails_details_poster_next__1rmgf",details_title:"FilmsDetails_details_title__16qXG",details_common_info:"FilmsDetails_details_common_info__1R6ub",details_common_info_star:"FilmsDetails_details_common_info_star__2r1ci",details_common_info_votu:"FilmsDetails_details_common_info_votu__3q-zr",details_common_info_dot:"FilmsDetails_details_common_info_dot__1ySQU",details_tagline:"FilmsDetails_details_tagline__3h4Pr",details_overview:"FilmsDetails_details_overview__1G1lo"}}},[[70,1,2]]]);
//# sourceMappingURL=main.93ede12c.chunk.js.map