(this["webpackJsonpsynack-eval"]=this["webpackJsonpsynack-eval"]||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n(0),a=n(7),s=n.n(a),o=n(12),i=n(3),l=n(4),u=n.n(l),j=n(6),b="SEARCH_GOOGLE",p="SEARCH_BING",O="SEARCH_ALL",g="".concat(b,"_START"),h="".concat(b,"_SUCCESS"),d="".concat(b,"_FAIL"),f="".concat(b,"_FINISH"),v="".concat(p,"_START"),y="".concat(p,"_SUCCESS"),x="".concat(p,"_FAIL"),m="".concat(p,"_FINISH"),_=("".concat(O,"_START"),"".concat(O,"_SUCCESS"),"".concat(O,"_FAIL"),"".concat(O,"_FINISH"),"SET_SEARCH_ENGINE"),S="CLEAN_RESULTS",k="https://www.googleapis.com/customsearch/v1?key=".concat("AIzaSyDKGV7naNqKQvkcbpl6-X4NgRO6eC3caQg","&cx=d4e34c3e52055c77a&q="),E=function(){var e=Object(j.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,c){if("google"===t)try{window.fetch("".concat(k).concat(n)).then((function(e){return e.json()})).then((function(t){var n=[];t.items&&(n=t.items.map((function(e){return{snippet:e.snippet,title:e.title,displayLink:e.displayLink,link:e.link,id:e.cacheId}}))),e(n)})).catch((function(e){return c(e)}))}catch(r){c(r)}else if("bing"===t)try{window.fetch("".concat("https://api.bing.microsoft.com/v7.0/search?q=").concat(n),{method:"GET",headers:{"Content-Type":"application/json","Ocp-Apim-Subscription-Key":"b89c6a5ac03843fc9f2e6f7727ace7ea"}}).then((function(e){return e.json()})).then((function(t){var n=[];t.webPages&&(n=t.webPages.value.map((function(e){return{snippet:e.snippet,title:e.name,displayLink:e.displayUrl,link:e.url,id:e.id}}))),e(n)})).catch((function(e){return c(e)}))}catch(r){c(r)}})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),G=function(){return function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:S});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},w=function(){var e=Object(r.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)("all"),l=Object(o.a)(s,2),b=l[0],p=l[1],O=Object(i.b)();return Object(c.jsx)("div",{className:"search-form",children:Object(c.jsxs)("form",{onSubmit:function(e){var t,c;e.preventDefault(),n&&O((t=n,c=b,function(){var e=Object(j.a)(u.a.mark((function e(n){var r,a,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n({type:_,payload:c}),"google"!==c&&"bing"!==c){e.next=18;break}return n({type:"google"===c?g:v}),e.prev=3,e.next=6,E(c,t);case 6:r=e.sent,n({type:"google"===c?h:y,payload:r}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),n({type:"google"===c?d:x});case 13:return e.prev=13,n({type:"google"===c?f:m}),e.finish(13);case 16:e.next=46;break;case 18:return n({type:g}),n({type:v}),e.prev=20,e.next=23,E("google",t);case 23:a=e.sent,n({type:h,payload:a}),e.next=30;break;case 27:e.prev=27,e.t1=e.catch(20),n({type:d});case 30:return e.prev=30,n({type:f}),e.finish(30);case 33:return e.prev=33,e.next=36,E("bing",t);case 36:s=e.sent,n({type:y,payload:s}),e.next=43;break;case 40:e.prev=40,e.t2=e.catch(33),n({type:x});case 43:return e.prev=43,n({type:m}),e.finish(43);case 46:case"end":return e.stop()}}),e,null,[[3,10,13,16],[20,27,30,33],[33,40,43,46]])})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(c.jsxs)("div",{className:"search-form__inputs",children:[Object(c.jsx)("input",{onChange:function(e){a(e.target.value),e.target.value||O(G())},value:n,type:"text"}),Object(c.jsxs)("select",{defaultValue:b,onChange:function(e){p(e.target.value),O(G())},children:[Object(c.jsx)("option",{value:"all",children:"All"}),Object(c.jsx)("option",{value:"google",children:"Google"}),Object(c.jsx)("option",{value:"bing",children:"Bing"})]})]}),Object(c.jsx)("div",{className:"search-form__action",children:Object(c.jsx)("button",{type:"submit",children:"Search"})})]})})},N=function(e){var t=e.item;return Object(c.jsx)("div",{className:"search-results__item",children:Object(c.jsxs)("a",{target:"_blank",rel:"noreferrer",href:t.link,children:[Object(c.jsx)("span",{className:"display-link",children:t.displayLink}),Object(c.jsx)("span",{className:"title-link",children:t.title}),Object(c.jsx)("p",{children:t.snippet})]})})},A=function(e){var t=e.data,n=t.response,r=t.loading,a=t.error;return Object(c.jsxs)("div",{className:"search-results",children:[Object(c.jsxs)("h3",{className:"search-results__title",children:[e.searchEngine," Results"]}),Object(c.jsxs)("div",{className:"search-results__content",children:[r&&Object(c.jsx)("div",{children:"Loading..."}),!r&&!a&&n.length>0&&n.map((function(e){return Object(c.jsx)(N,{item:e},e.cacheId)})),!r&&!a&&0===n.length&&Object(c.jsx)("div",{children:"There's no results."}),a&&Object(c.jsx)("div",{children:"An error have ocurred."})]})]})},B=(n(27),function(){var e=Object(i.c)((function(e){return e.results.resultsBing})),t=Object(i.c)((function(e){return e.results.resultsGoogle})),n=Object(i.c)((function(e){return e.results.searchEngine}));return Object(c.jsxs)("div",{children:[Object(c.jsx)(w,{}),n&&("google"===n||"all"===n)&&Object(c.jsx)(A,{searchEngine:"Google",data:t}),n&&("bing"===n||"all"===n)&&Object(c.jsx)(A,{searchEngine:"Bing",data:e})]})}),C=n(5),I=n(1),L={resultsGoogle:{response:[],loading:!1,error:!1},resultsBing:{response:[],loading:!1,error:!1},searchEngine:null},T=Object(C.c)({results:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(I.a)(Object(I.a)({},e),{},{searchEngine:t.payload});case g:return Object(I.a)(Object(I.a)({},e),{},{resultsGoogle:Object(I.a)(Object(I.a)({},e.resultsGoogle),{},{loading:!0,response:[],error:!1}),resultsBing:Object(I.a)(Object(I.a)({},e.resultsBing),{},{response:[],error:!1})});case h:return Object(I.a)(Object(I.a)({},e),{},{resultsGoogle:Object(I.a)(Object(I.a)({},e.resultsGoogle),{},{response:t.payload})});case d:return Object(I.a)(Object(I.a)({},e),{},{resultsGoogle:Object(I.a)(Object(I.a)({},e.resultsGoogle),{},{error:!0})});case f:return Object(I.a)(Object(I.a)({},e),{},{resultsGoogle:Object(I.a)(Object(I.a)({},e.resultsGoogle),{},{loading:!1})});case v:return Object(I.a)(Object(I.a)({},e),{},{resultsBing:Object(I.a)(Object(I.a)({},e.resultsBing),{},{loading:!0,response:[],error:!1}),resultsGoogle:Object(I.a)(Object(I.a)({},e.resultsGoogle),{},{response:[],error:!1})});case y:return Object(I.a)(Object(I.a)({},e),{},{resultsBing:Object(I.a)(Object(I.a)({},e.resultsBing),{},{response:t.payload})});case x:return Object(I.a)(Object(I.a)({},e),{},{resultsBing:Object(I.a)(Object(I.a)({},e.resultsBing),{},{error:!0})});case m:return Object(I.a)(Object(I.a)({},e),{},{resultsBing:Object(I.a)(Object(I.a)({},e.resultsBing),{},{loading:!1})});case S:return Object(I.a)({},L);default:return e}}}),R=n(14),H=Object(C.d)(T,Object(C.a)(R.a));s.a.render(Object(c.jsx)(i.a,{store:H,children:Object(c.jsx)(B,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.09431c77.chunk.js.map