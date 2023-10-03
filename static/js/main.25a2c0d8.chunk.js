(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c=n(26),r=n(8),a=(n(36),n(37),n(3)),s=n(0),l=n(9),i=n(15),o=n(10),j=n.n(o),u=function(e){return e.Sort="sort",e.Order="order",e.Sex="sex",e.Query="query",e.Centuries="centuries",e}({}),d=function(e){return e.Name="name",e.Sex="sex",e.Born="born",e.Died="died",e}({}),b=function(e){return e.Asc="asc",e.Desc="desc",e}({}),h=function(e){return e.All="all",e.Female="f",e.Male="m",e}({}),O=100;function m(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})}function x(e,t,n,c){var r=n.toLowerCase(),a=Object(l.a)(e);return t&&(a=a.filter((function(e){return e.sex===t}))),r&&(a=a.filter((function(e){var t=e.name,n=e.fatherName,c=e.motherName;return t.toLowerCase().includes(r)||(null===n||void 0===n?void 0:n.toLowerCase().includes(r))||(null===c||void 0===c?void 0:c.toLowerCase().includes(r))}))),c.length&&(a=a.filter((function(e){var t,n=e.born;return c.includes((t=n,Math.ceil(t/O)).toString())}))),a}var p=n(1),f=Object(s.memo)((function(){var e=Object(a.n)().search;return Object(p.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"navbar-brand",children:[Object(p.jsx)(r.c,{to:"/",className:m,children:"Home"}),Object(p.jsx)(r.c,{to:{pathname:"people",search:e},className:m,children:"People"})]})})})})),v=function(){return Object(p.jsxs)("div",{"data-cy":"app",children:[Object(p.jsx)(f,{}),Object(p.jsx)("div",{className:"section",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)(a.b,{})})})]})},g=function(){return Object(p.jsx)("h1",{className:"title",children:"Page not found"})},N=function(){return Object(p.jsx)("h1",{className:"title",children:"Home Page"})},y=n(5),w=n(4),S=n(7),P="https://mate-academy.github.io/react_people-table/api/people.json";function k(e){return new Promise((function(t){return setTimeout(t,e)}))}function C(){return(C=Object(S.a)(Object(w.a)().mark((function e(){return Object(w.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",k(500).then((function(){return fetch(P)})).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e,t){var n=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(y.a)(e,2),c=t[0],r=t[1];null===r?n.delete(c):Array.isArray(r)?(n.delete(c),r.forEach((function(e){n.append(c,e)}))):n.set(c,r)})),n.toString()}n(39);var F=function(){return Object(p.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(p.jsx)("div",{className:"Loader__content"})})},L=Object(s.memo)((function(e){var t=e.person,n=Object(a.n)().search,c=t.slug,s=t.name,l=t.sex;return Object(p.jsx)(r.b,{to:{pathname:"../".concat(c),search:n},className:j()({"has-text-danger":l===h.Female}),children:s})})),M=Object(s.memo)((function(e){var t=e.person,n=e.selectedPersonSlug,c=t.slug,r=t.sex,a=t.born,s=t.died,l=t.mother,i=t.motherName,o=t.father,u=t.fatherName;return Object(p.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":c===n}),children:[Object(p.jsx)("td",{children:Object(p.jsx)(L,{person:t})}),Object(p.jsx)("td",{children:r}),Object(p.jsx)("td",{children:a}),Object(p.jsx)("td",{children:s}),Object(p.jsx)("td",{children:l?Object(p.jsx)(L,{person:l}):null!==i&&void 0!==i?i:"-"}),Object(p.jsx)("td",{children:o?Object(p.jsx)(L,{person:o}):null!==u&&void 0!==u?u:"-"})]})})),D=n(27),E=["children","params"],Q=Object(s.memo)((function(e){var t=e.children,n=e.params,c=Object(D.a)(e,E),a=Object(r.d)(),s=Object(y.a)(a,1)[0];return Object(p.jsx)(r.b,Object(i.a)(Object(i.a)({to:{search:A(s,n)}},c),{},{children:t}))})),_=Object(s.memo)((function(e){var t,n,c=e.field,a=Object(r.d)(),s=Object(y.a)(a,1)[0],l=null!==(t=s.get(u.Sort))&&void 0!==t?t:"",i=null!==(n=s.get(u.Order))&&void 0!==n?n:"",o={sort:null,order:null},d="fa-sort-down";return l!==c?(o.sort=c,d="fa-sort"):l!==c||i||(o.sort=c,o.order=b.Desc,d="fa-sort-up"),Object(p.jsx)(Q,{params:o,children:Object(p.jsx)("span",{className:"icon",children:Object(p.jsx)("i",{className:j()("fas",d)})})})})),R=Object(s.memo)((function(e){var t=e.people,n=e.selectedPersonSlug;return Object(p.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object.entries(d).map((function(e){var t=Object(y.a)(e,2),n=t[0],c=t[1];return Object(p.jsx)("th",{children:Object(p.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:[n,Object(p.jsx)(_,{field:c})]})},c)})),Object(p.jsx)("th",{children:"Mother"}),Object(p.jsx)("th",{children:"Father"})]})}),Object(p.jsx)("tbody",{children:t.map((function(e){return Object(p.jsx)(M,{person:e,selectedPersonSlug:n},e.slug)}))})]})})),T=["16","17","18","19","20"],B=Object(s.memo)((function(){var e,t,n,c=Object(r.d)(),a=Object(y.a)(c,2),s=a[0],i=a[1],o=null!==(e=s.get(u.Sex))&&void 0!==e?e:"",d=null!==(t=s.get(u.Query))&&void 0!==t?t:"",b=null!==(n=s.getAll(u.Centuries))&&void 0!==n?n:[];return Object(p.jsxs)("nav",{className:"panel",children:[Object(p.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(p.jsx)("p",{className:"panel-tabs","data-cy":"SexFilter",children:Object.entries(h).map((function(e){var t=Object(y.a)(e,2),n=t[0],c=t[1],r=c===h.All?!o:o===c,a=c===h.All?null:c;return Object(p.jsx)(Q,{className:j()({"is-active":r}),params:{sex:a},children:n},c)}))}),Object(p.jsx)("div",{className:"panel-block",children:Object(p.jsxs)("p",{className:"control has-icons-left",children:[Object(p.jsx)("input",{type:"search","data-cy":"NameFilter",className:"input",placeholder:"Search",value:d,onChange:function(e){var t=new URLSearchParams(s),n=e.target.value;n?t.set(u.Query,n):t.delete(u.Query),i(t)}}),Object(p.jsx)("span",{className:"icon is-left",children:Object(p.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})})]})}),Object(p.jsx)("div",{className:"panel-block",children:Object(p.jsxs)("div",{className:"level is-flex-grow-1 is-mobile","data-cy":"CenturyFilter",children:[Object(p.jsx)("div",{className:"level-left",children:T.map((function(e){return Object(p.jsx)(Q,{className:j()("button","mr-1",{"is-info":b.includes(e)}),params:{centuries:(t=b,n=e,t.includes(n)?t.filter((function(e){return e!==n})):[].concat(Object(l.a)(t),[n]))},children:e},e);var t,n}))}),Object(p.jsx)("div",{className:"level-right ml-4",children:Object(p.jsx)(Q,{className:j()("button","is-success",{"is-outlined":!!b.length}),params:{centuries:null},children:"All"})})]})}),Object(p.jsx)("div",{className:"panel-block",children:Object(p.jsx)(Q,{className:"button is-link is-outlined is-fullwidth",params:{sex:null,query:null,centuries:null},children:"Reset all filters"})})]})})),q=function(){var e,t,n,c,o,j=Object(s.useState)(!1),h=Object(y.a)(j,2),O=h[0],m=h[1],f=Object(s.useState)(!1),v=Object(y.a)(f,2),g=v[0],N=v[1],w=Object(s.useState)([]),S=Object(y.a)(w,2),P=S[0],k=S[1],A=Object(a.r)().slug,L=Object(r.d)(),M=Object(y.a)(L,1)[0],D=null!==(e=M.get(u.Sort))&&void 0!==e?e:"",E=null!==(t=M.get(u.Order))&&void 0!==t?t:"",Q=null!==(n=M.get(u.Sex))&&void 0!==n?n:"",_=null!==(c=M.get(u.Query))&&void 0!==c?c:"",T=null!==(o=M.getAll(u.Centuries))&&void 0!==o?o:[];Object(s.useEffect)((function(){m(!0),function(){return C.apply(this,arguments)}().then((function(e){return k(function(e){return e.map((function(t){var n=e.find((function(e){return e.name===t.motherName})),c=e.find((function(e){return e.name===t.fatherName}));return Object(i.a)(Object(i.a)({},t),{},{mother:n,father:c})}))}(e))})).catch((function(){return N(!0)})).finally((function(){return m(!1)}))}),[]);var q=Object(s.useMemo)((function(){return function(e,t,n){var c=n===b.Desc?-1:1,r=Object(l.a)(e);return t?r.sort((function(e,n){switch(t){case d.Name:return e.name.localeCompare(n.name)*c;case d.Sex:return e.sex.localeCompare(n.sex)*c;case d.Born:return(e.born-n.born)*c;case d.Died:return(e.died-n.died)*c;default:return 0}})):r}(P,D,E)}),[P,D,E]),H=Object(s.useMemo)((function(){return x(q,Q,_,T)}),[q,Q,_,T]),J=!O&&!g,U=!!P.length,I=!!H.length;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{className:"title",children:"People Page"}),Object(p.jsx)("div",{className:"block",children:Object(p.jsxs)("div",{className:"columns is-desktop is-flex-direction-row-reverse",children:[Object(p.jsx)("div",{className:"column is-7-tablet is-narrow-desktop",children:Object(p.jsx)(B,{})}),Object(p.jsx)("div",{className:"column",children:Object(p.jsxs)("div",{className:"box table-container",children:[O&&Object(p.jsx)(F,{}),g&&Object(p.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),J&&Object(p.jsxs)(p.Fragment,{children:[U&&I&&Object(p.jsx)(R,{people:H,selectedPersonSlug:A}),U&&!I&&Object(p.jsx)("p",{children:"There are no people matching the current search criteria"}),!U&&Object(p.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"})]})]})})]})})]})},H=(n(40),function(){return Object(p.jsx)(a.e,{children:Object(p.jsxs)(a.c,{path:"/",element:Object(p.jsx)(v,{}),children:[Object(p.jsx)(a.c,{index:!0,element:Object(p.jsx)(N,{})}),Object(p.jsx)(a.c,{path:"people",children:Object(p.jsx)(a.c,{path:":slug?",element:Object(p.jsx)(q,{})})}),Object(p.jsx)(a.c,{path:"home",element:Object(p.jsx)(a.a,{to:"/",replace:!0})}),Object(p.jsx)(a.c,{path:"*",element:Object(p.jsx)(g,{})})]})})});Object(c.createRoot)(document.getElementById("root")).render(Object(p.jsx)(r.a,{children:Object(p.jsx)(H,{})}))}},[[41,1,2]]]);
//# sourceMappingURL=main.25a2c0d8.chunk.js.map