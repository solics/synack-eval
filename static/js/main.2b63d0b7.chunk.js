(this["webpackJsonpsynack-eval"]=this["webpackJsonpsynack-eval"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"SEARCH_GOOGLE_START",(function(){return h})),n.d(r,"SEARCH_GOOGLE_SUCCESS",(function(){return g})),n.d(r,"SEARCH_GOOGLE_FAIL",(function(){return f})),n.d(r,"SEARCH_GOOGLE_FINISH",(function(){return S})),n.d(r,"SEARCH_BING_START",(function(){return _})),n.d(r,"SEARCH_BING_SUCCESS",(function(){return v})),n.d(r,"SEARCH_BING_FAIL",(function(){return E})),n.d(r,"SEARCH_BING_FINISH",(function(){return A})),n.d(r,"SEARCH_ALL_START",(function(){return y})),n.d(r,"SEARCH_ALL_SUCCESS",(function(){return x})),n.d(r,"SEARCH_ALL_FAIL",(function(){return C})),n.d(r,"SEARCH_ALL_FINISH",(function(){return m})),n.d(r,"SET_SEARCH_ENGINE",(function(){return G})),n.d(r,"CLEAN_RESULTS",(function(){return R}));var c=n(2),a=n(0),s=n(7),o=n.n(s),i=n(5),u=n(12),l=n(4),j=n.n(l),p=n(6),b="SEARCH_GOOGLE",d="SEARCH_BING",O="SEARCH_ALL",h="".concat(b,"_START"),g="".concat(b,"_SUCCESS"),f="".concat(b,"_FAIL"),S="".concat(b,"_FINISH"),_="".concat(d,"_START"),v="".concat(d,"_SUCCESS"),E="".concat(d,"_FAIL"),A="".concat(d,"_FINISH"),y="".concat(O,"_START"),x="".concat(O,"_SUCCESS"),C="".concat(O,"_FAIL"),m="".concat(O,"_FINISH"),G="SET_SEARCH_ENGINE",R="CLEAN_RESULTS",I="https://www.googleapis.com/customsearch/v1?key=".concat("AIzaSyDKGV7naNqKQvkcbpl6-X4NgRO6eC3caQg","&cx=d4e34c3e52055c77a&q="),L=function(){var e=Object(p.a)(j.a.mark((function e(t,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,r){if("google"===t)try{window.fetch("".concat(I).concat(n)).then((function(e){return e.json()})).then((function(t){var n=[];t.items&&(n=t.items.map((function(e){return{snippet:e.snippet,title:e.title,displayLink:e.displayLink,link:e.link,id:e.cacheId||e.formattedUrl}}))),e(n)})).catch((function(e){return r(e)}))}catch(c){r(c)}else if("bing"===t)try{window.fetch("".concat("https://api.bing.microsoft.com/v7.0/search?q=").concat(n),{method:"GET",headers:{"Content-Type":"application/json","Ocp-Apim-Subscription-Key":"b89c6a5ac03843fc9f2e6f7727ace7ea"}}).then((function(e){return e.json()})).then((function(t){var n=[];t.webPages&&(n=t.webPages.value.map((function(e){return{snippet:e.snippet,title:e.name,displayLink:e.displayUrl,link:e.url,id:e.id}}))),e(n)})).catch((function(e){return r(e)}))}catch(c){r(c)}})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),N=function(){return function(){var e=Object(p.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:R});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};function H(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],s=t[1],o=Object(a.useState)("all"),l=Object(u.a)(o,2),b=l[0],d=l[1],O=Object(i.b)();return Object(c.jsx)("div",{className:"search-form",children:Object(c.jsxs)("form",{onSubmit:function(e){var t,c;e.preventDefault(),n&&O((t=n,c=b,function(){var e=Object(p.a)(j.a.mark((function e(n){var a,s,o,i,u;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n({type:G,payload:c}),a="google"===c,"all"!==c){e.next=34;break}return n({type:h}),n({type:_}),e.prev=6,e.next=9,L("google",t);case 9:s=e.sent,n({type:g,payload:s}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(6),n({type:f});case 16:return e.prev=16,n({type:S}),e.finish(16);case 19:return e.prev=19,e.next=22,L("bing",t);case 22:o=e.sent,n({type:v,payload:o}),e.next=29;break;case 26:e.prev=26,e.t1=e.catch(19),n({type:E});case 29:return e.prev=29,n({type:A}),e.finish(29);case 32:e.next=49;break;case 34:return n({type:r["SEARCH_".concat(i=a?"GOOGLE":"BING","_START")]}),e.prev=36,e.next=39,L(c,t);case 39:u=e.sent,n({type:r["SEARCH_".concat(i,"_SUCCESS")],payload:u}),e.next=46;break;case 43:e.prev=43,e.t2=e.catch(36),n({type:r["SEARCH_".concat(i,"_FAIL")]});case 46:return e.prev=46,n({type:r["SEARCH_".concat(i,"_FINISH")]}),e.finish(46);case 49:case"end":return e.stop()}}),e,null,[[6,13,16,19],[19,26,29,32],[36,43,46,49]])})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(c.jsxs)("div",{className:"search-form__inputs",children:[Object(c.jsx)("input",{onChange:function(e){s(e.target.value),e.target.value||O(N())},value:n,type:"text"}),Object(c.jsxs)("select",{defaultValue:b,onChange:function(e){d(e.target.value),O(N())},children:[Object(c.jsx)("option",{value:"all",children:"All"}),Object(c.jsx)("option",{value:"google",children:"Google"}),Object(c.jsx)("option",{value:"bing",children:"Bing"})]})]}),Object(c.jsx)("div",{className:"search-form__action",children:Object(c.jsx)("button",{type:"submit",children:"Search"})})]})})}function k(e){var t=e.item;return Object(c.jsx)("div",{className:"search-results__item",children:Object(c.jsxs)("a",{target:"_blank",rel:"noreferrer",href:t.link,children:[Object(c.jsx)("span",{className:"display-link",children:t.displayLink}),Object(c.jsx)("span",{className:"title-link",children:t.title}),Object(c.jsx)("p",{children:t.snippet})]})})}function T(e){var t=e.data,n=t.response,r=t.loading,a=t.error,s=!r&&!a&&n.length>0,o=!r&&!a&&!n.length;return Object(c.jsxs)("div",{className:"search-results",children:[Object(c.jsxs)("h3",{className:"search-results__title",children:[e.searchEngine," Results"]}),Object(c.jsxs)("div",{className:"search-results__content",children:[r&&Object(c.jsx)("div",{children:"Loading..."}),s&&n.map((function(e){return Object(c.jsx)(k,{item:e},e.id)})),o&&Object(c.jsx)("div",{children:"There's no results."}),a&&Object(c.jsx)("div",{children:"An error have ocurred."})]})]})}n(28);function B(){var e=Object(i.c)((function(e){return e.results})),t=e.resultsBing,n=e.resultsGoogle,r=e.searchEngine,a="google"===r,s="bing"===r,o="all"===r;return Object(c.jsxs)("div",{children:[Object(c.jsx)(H,{}),r&&(a||o)&&Object(c.jsx)(T,{searchEngine:"Google",data:n}),r&&(s||o)&&Object(c.jsx)(T,{searchEngine:"Bing",data:t})]})}var w=n(3),F=n(14),U=n(1),q={resultsGoogle:{response:[],loading:!1,error:!1},resultsBing:{response:[],loading:!1,error:!1},searchEngine:null},D=Object(w.combineReducers)({results:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return Object(U.a)(Object(U.a)({},e),{},{searchEngine:t.payload});case h:return Object(U.a)(Object(U.a)({},e),{},{resultsGoogle:Object(U.a)(Object(U.a)({},e.resultsGoogle),{},{loading:!0,response:[],error:!1}),resultsBing:Object(U.a)(Object(U.a)({},e.resultsBing),{},{response:[],error:!1})});case g:return Object(U.a)(Object(U.a)({},e),{},{resultsGoogle:Object(U.a)(Object(U.a)({},e.resultsGoogle),{},{response:t.payload})});case f:return Object(U.a)(Object(U.a)({},e),{},{resultsGoogle:Object(U.a)(Object(U.a)({},e.resultsGoogle),{},{error:!0})});case S:return Object(U.a)(Object(U.a)({},e),{},{resultsGoogle:Object(U.a)(Object(U.a)({},e.resultsGoogle),{},{loading:!1})});case _:return Object(U.a)(Object(U.a)({},e),{},{resultsBing:Object(U.a)(Object(U.a)({},e.resultsBing),{},{loading:!0,response:[],error:!1}),resultsGoogle:Object(U.a)(Object(U.a)({},e.resultsGoogle),{},{response:[],error:!1})});case v:return Object(U.a)(Object(U.a)({},e),{},{resultsBing:Object(U.a)(Object(U.a)({},e.resultsBing),{},{response:t.payload})});case E:return Object(U.a)(Object(U.a)({},e),{},{resultsBing:Object(U.a)(Object(U.a)({},e.resultsBing),{},{error:!0})});case A:return Object(U.a)(Object(U.a)({},e),{},{resultsBing:Object(U.a)(Object(U.a)({},e.resultsBing),{},{loading:!1})});case R:return Object(U.a)({},q);default:return e}}}),K=n(15),P=Object(w.createStore)(D,Object(F.composeWithDevTools)(Object(w.applyMiddleware)(K.a)));o.a.render(Object(c.jsx)(i.a,{store:P,children:Object(c.jsx)(B,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.2b63d0b7.chunk.js.map