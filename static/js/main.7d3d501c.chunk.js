(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c=n(26),r=n(8),a=(n(36),n(37),n(3)),s=n(0),l=n(9),i=n(15),o=n(10),j=n.n(o),u="https://mate-academy.github.io/react_people-table/api/people.json",d=["16","17","18","19","20"],b=100,h=function(e){return e.Sort="sort",e.Order="order",e.Sex="sex",e.Query="query",e.Centuries="centuries",e}({}),O=function(e){return e.Name="name",e.Sex="sex",e.Born="born",e.Died="died",e}({}),m=function(e){return e.Asc="asc",e.Desc="desc",e}({}),x=function(e){return e.All="all",e.Female="f",e.Male="m",e}({});function p(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})}function f(e,t,n,c){var r=n.toLowerCase(),a=Object(l.a)(e);return t&&(a=a.filter((function(e){return e.sex===t}))),r&&(a=a.filter((function(e){var t=e.name,n=e.fatherName,c=e.motherName;return t.toLowerCase().includes(r)||(null===n||void 0===n?void 0:n.toLowerCase().includes(r))||(null===c||void 0===c?void 0:c.toLowerCase().includes(r))}))),c.length&&(a=a.filter((function(e){var t,n=e.born;return c.includes((t=n,Math.ceil(t/b)).toString())}))),a}var v=n(1),g=Object(s.memo)((function(){var e=Object(a.n)().search;return Object(v.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)("div",{className:"navbar-brand",children:[Object(v.jsx)(r.c,{to:"/",className:p,children:"Home"}),Object(v.jsx)(r.c,{to:{pathname:"people",search:e},className:p,children:"People"})]})})})})),N=function(){return Object(v.jsxs)("div",{"data-cy":"app",children:[Object(v.jsx)(g,{}),Object(v.jsx)("div",{className:"section",children:Object(v.jsx)("div",{className:"container",children:Object(v.jsx)(a.b,{})})})]})},y=function(){return Object(v.jsx)("h1",{className:"title",children:"Page not found"})},w=function(){return Object(v.jsx)("h1",{className:"title",children:"Home Page"})},S=n(5),P=n(4),k=n(7);function C(e){return new Promise((function(t){return setTimeout(t,e)}))}function A(){return(A=Object(k.a)(Object(P.a)().mark((function e(){return Object(P.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",C(500).then((function(){return fetch(u)})).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e,t){var n=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(S.a)(e,2),c=t[0],r=t[1];null===r?n.delete(c):Array.isArray(r)?(n.delete(c),r.forEach((function(e){n.append(c,e)}))):n.set(c,r)})),n.toString()}n(39);var L=function(){return Object(v.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(v.jsx)("div",{className:"Loader__content"})})},M=Object(s.memo)((function(e){var t=e.person,n=Object(a.n)().search,c=t.slug,s=t.name,l=t.sex;return Object(v.jsx)(r.b,{to:{pathname:"../".concat(c),search:n},className:j()({"has-text-danger":l===x.Female}),children:s})})),D=Object(s.memo)((function(e){var t=e.person,n=e.selectedPersonSlug,c=t.slug,r=t.sex,a=t.born,s=t.died,l=t.mother,i=t.motherName,o=t.father,u=t.fatherName;return Object(v.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":c===n}),children:[Object(v.jsx)("td",{children:Object(v.jsx)(M,{person:t})}),Object(v.jsx)("td",{children:r}),Object(v.jsx)("td",{children:a}),Object(v.jsx)("td",{children:s}),Object(v.jsx)("td",{children:l?Object(v.jsx)(M,{person:l}):null!==i&&void 0!==i?i:"-"}),Object(v.jsx)("td",{children:o?Object(v.jsx)(M,{person:o}):null!==u&&void 0!==u?u:"-"})]})})),E=n(27),Q=["children","params"],_=Object(s.memo)((function(e){var t=e.children,n=e.params,c=Object(E.a)(e,Q),a=Object(r.d)(),s=Object(S.a)(a,1)[0];return Object(v.jsx)(r.b,Object(i.a)(Object(i.a)({to:{search:F(s,n)}},c),{},{children:t}))})),R=Object(s.memo)((function(e){var t,n,c=e.field,a=Object(r.d)(),s=Object(S.a)(a,1)[0],l=null!==(t=s.get(h.Sort))&&void 0!==t?t:"",i=null!==(n=s.get(h.Order))&&void 0!==n?n:"",o={sort:null,order:null},u="fa-sort-down";return l!==c?(o.sort=c,u="fa-sort"):l!==c||i||(o.sort=c,o.order=m.Desc,u="fa-sort-up"),Object(v.jsx)(_,{params:o,children:Object(v.jsx)("span",{className:"icon",children:Object(v.jsx)("i",{className:j()("fas",u)})})})})),T=Object(s.memo)((function(e){var t=e.people,n=e.selectedPersonSlug;return Object(v.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{children:[Object.entries(O).map((function(e){var t=Object(S.a)(e,2),n=t[0],c=t[1];return Object(v.jsx)("th",{children:Object(v.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:[n,Object(v.jsx)(R,{field:c})]})},c)})),Object(v.jsx)("th",{children:"Mother"}),Object(v.jsx)("th",{children:"Father"})]})}),Object(v.jsx)("tbody",{children:t.map((function(e){return Object(v.jsx)(D,{person:e,selectedPersonSlug:n},e.slug)}))})]})})),B=Object(s.memo)((function(){var e,t,n,c=Object(r.d)(),a=Object(S.a)(c,2),s=a[0],i=a[1],o=null!==(e=s.get(h.Sex))&&void 0!==e?e:"",u=null!==(t=s.get(h.Query))&&void 0!==t?t:"",b=null!==(n=s.getAll(h.Centuries))&&void 0!==n?n:[];return Object(v.jsxs)("nav",{className:"panel",children:[Object(v.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(v.jsx)("p",{className:"panel-tabs","data-cy":"SexFilter",children:Object.entries(x).map((function(e){var t=Object(S.a)(e,2),n=t[0],c=t[1],r=c===x.All?!o:o===c,a=c===x.All?null:c;return Object(v.jsx)(_,{className:j()({"is-active":r}),params:{sex:a},children:n},c)}))}),Object(v.jsx)("div",{className:"panel-block",children:Object(v.jsxs)("p",{className:"control has-icons-left",children:[Object(v.jsx)("input",{type:"search","data-cy":"NameFilter",className:"input",placeholder:"Search",value:u,onChange:function(e){var t=new URLSearchParams(s),n=e.target.value;n?t.set(h.Query,n):t.delete(h.Query),i(t)}}),Object(v.jsx)("span",{className:"icon is-left",children:Object(v.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})})]})}),Object(v.jsx)("div",{className:"panel-block",children:Object(v.jsxs)("div",{className:"level is-flex-grow-1 is-mobile","data-cy":"CenturyFilter",children:[Object(v.jsx)("div",{className:"level-left",children:d.map((function(e){return Object(v.jsx)(_,{className:j()("button","mr-1",{"is-info":b.includes(e)}),params:{centuries:(t=b,n=e,t.includes(n)?t.filter((function(e){return e!==n})):[].concat(Object(l.a)(t),[n]))},children:e},e);var t,n}))}),Object(v.jsx)("div",{className:"level-right ml-4",children:Object(v.jsx)(_,{className:j()("button","is-success",{"is-outlined":!!b.length}),params:{centuries:null},children:"All"})})]})}),Object(v.jsx)("div",{className:"panel-block",children:Object(v.jsx)(_,{className:"button is-link is-outlined is-fullwidth",params:{sex:null,query:null,centuries:null},children:"Reset all filters"})})]})})),q=function(){var e,t,n,c,o,j=Object(s.useState)(!1),u=Object(S.a)(j,2),d=u[0],b=u[1],x=Object(s.useState)(!1),p=Object(S.a)(x,2),g=p[0],N=p[1],y=Object(s.useState)([]),w=Object(S.a)(y,2),P=w[0],k=w[1],C=Object(a.r)().slug,F=Object(r.d)(),M=Object(S.a)(F,1)[0],D=null!==(e=M.get(h.Sort))&&void 0!==e?e:"",E=null!==(t=M.get(h.Order))&&void 0!==t?t:"",Q=null!==(n=M.get(h.Sex))&&void 0!==n?n:"",_=null!==(c=M.get(h.Query))&&void 0!==c?c:"",R=null!==(o=M.getAll(h.Centuries))&&void 0!==o?o:[];Object(s.useEffect)((function(){b(!0),function(){return A.apply(this,arguments)}().then((function(e){return k(function(e){return e.map((function(t){var n=e.find((function(e){return e.name===t.motherName})),c=e.find((function(e){return e.name===t.fatherName}));return Object(i.a)(Object(i.a)({},t),{},{mother:n,father:c})}))}(e))})).catch((function(){return N(!0)})).finally((function(){return b(!1)}))}),[]);var q=Object(s.useMemo)((function(){return function(e,t,n){var c=n===m.Desc?-1:1,r=Object(l.a)(e);return t?r.sort((function(e,n){switch(t){case O.Name:return e.name.localeCompare(n.name)*c;case O.Sex:return e.sex.localeCompare(n.sex)*c;case O.Born:return(e.born-n.born)*c;case O.Died:return(e.died-n.died)*c;default:return 0}})):r}(P,D,E)}),[P,D,E]),H=Object(s.useMemo)((function(){return f(q,Q,_,R)}),[q,Q,_,R]),J=!d&&!g,U=!!P.length,I=!!H.length;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h1",{className:"title",children:"People Page"}),Object(v.jsx)("div",{className:"block",children:Object(v.jsxs)("div",{className:"columns is-desktop is-flex-direction-row-reverse",children:[Object(v.jsx)("div",{className:"column is-7-tablet is-narrow-desktop",children:Object(v.jsx)(B,{})}),Object(v.jsx)("div",{className:"column",children:Object(v.jsxs)("div",{className:"box table-container",children:[d&&Object(v.jsx)(L,{}),g&&Object(v.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),J&&Object(v.jsxs)(v.Fragment,{children:[U&&I&&Object(v.jsx)(T,{people:H,selectedPersonSlug:C}),U&&!I&&Object(v.jsx)("p",{children:"There are no people matching the current search criteria"}),!U&&Object(v.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"})]})]})})]})})]})},H=(n(40),function(){return Object(v.jsx)(a.e,{children:Object(v.jsxs)(a.c,{path:"/",element:Object(v.jsx)(N,{}),children:[Object(v.jsx)(a.c,{index:!0,element:Object(v.jsx)(w,{})}),Object(v.jsx)(a.c,{path:"people",children:Object(v.jsx)(a.c,{path:":slug?",element:Object(v.jsx)(q,{})})}),Object(v.jsx)(a.c,{path:"home",element:Object(v.jsx)(a.a,{to:"/",replace:!0})}),Object(v.jsx)(a.c,{path:"*",element:Object(v.jsx)(y,{})})]})})});Object(c.createRoot)(document.getElementById("root")).render(Object(v.jsx)(r.a,{children:Object(v.jsx)(H,{})}))}},[[41,1,2]]]);
//# sourceMappingURL=main.7d3d501c.chunk.js.map