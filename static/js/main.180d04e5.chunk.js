(this["webpackJsonptodo-coil"]=this["webpackJsonptodo-coil"]||[]).push([[0],{31:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c,r,a,o,i,s,j,b,l,u,d,O,g,f=n(0),x=n.n(f),h=n(14),p=n.n(h),m=n(7),v=n(8),y=n(9),w=(n(31),n(5)),C=n(6),k=n(3),S="categories",N=localStorage.getItem(S),T=N?JSON.parse(N):["Todo","Doing","Done"],I=Object(m.b)({key:"categories",default:T}),J=Object(m.c)({key:"persistentCategories",get:function(e){return(0,e.get)(I)},set:function(e,t){(0,e.set)(I,t),localStorage.setItem(S,JSON.stringify(t))}}),A="todo",D=localStorage.getItem(A),F=D?JSON.parse(D):[],_=Object(m.b)({key:"todos",default:F}),B=Object(m.c)({key:"persistentTodos",get:function(e){return(0,e.get)(_)},set:function(e,t){(0,e.set)(_,t),localStorage.setItem(A,JSON.stringify(t))}}),E="_ALL",q=Object(m.b)({key:"todoFilter",default:E}),L=Object(m.c)({key:"todoFiltered",get:function(e){var t=e.get,n=t(_),c=t(q);return c===E?n:n.filter((function(e){return e.category===c}))}}),V=n(18),M=n(2),W=v.c.form(c||(c=Object(y.a)(["\n  display: flex;\n"]))),z=v.c.input(r||(r=Object(y.a)(["\n  flex-grow: 1;\n"]))),G=function(){var e=Object(m.f)(B),t=Object(m.e)(J),n=Object(m.e)(q),c=t[0],r=n===E?c:n,a=Object(V.a)(),o=a.register,i=a.handleSubmit,s=a.setValue;return Object(M.jsxs)(W,{onSubmit:i((function(t){var n=t.todo;e((function(e){return[].concat(Object(C.a)(e),[{id:Date.now(),text:n,category:r}])})),s("todo","")})),children:[Object(M.jsx)(z,Object(w.a)(Object(w.a)({},o("todo",{required:"Todo is empty"})),{},{placeholder:"Write a Todo"})),Object(M.jsx)("button",{children:"Add"})]})},H=n(4),K=n.n(H),P=n(10),Q=v.c.form(a||(a=Object(y.a)(["\n  input {\n    width: 100%;\n    border: 0;\n  }\n"]))),R=function(e){var t,n=e.onSubmit,c=Object(V.a)({mode:"onChange"}),r=c.register,a=c.handleSubmit,o=c.reset,i=c.setError,s=c.formState.errors,j=function(){var e=Object(P.a)(K.a.mark((function e(t){var c;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.newCategoryName,e.prev=1,e.next=4,n(c);case 4:o(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),i("newCategoryName",{message:e.t0.message});case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(Q,{onSubmit:a(j),children:Object(M.jsx)("input",Object(w.a)({},r("newCategoryName",{required:"The field is empty",pattern:{value:/[^_].*/,message:"Category name can't be started with _"}})))}),(null===s||void 0===s||null===(t=s.newCategoryName)||void 0===t?void 0:t.message)&&Object(M.jsx)("span",{children:s.newCategoryName.message})]})},U=v.c.li(o||(o=Object(y.a)(["\n  background-color: ",";\n  margin: 10px 0;\n  display: flex;\n"])),(function(e){return e.theme.secondBgColor})),X=v.c.span(i||(i=Object(y.a)(["\n  flex-grow: 1;\n  margin-left: 6px;\n"]))),Y=v.c.button(s||(s=Object(y.a)(["\n  border: 0;\n  border-radius: 5px;\n  background-color: transparent;\n  padding: 2px 3px;\n\n  &:hover {\n    background-color: rgba(0, 255, 0, 0.5);\n  }\n"]))),Z=v.c.div(j||(j=Object(y.a)(["\n  width: 80px;\n  & > * {\n    width: 100%;\n    border: 0;\n  }\n"]))),$=function(e){var t=Object(m.d)(B),n=Object(k.a)(t,2),c=n[0],r=n[1],a=Object(m.d)(J),o=Object(k.a)(a,2),i=o[0],s=o[1],j=Object(m.f)(q),b=Object(f.useState)(!1),l=Object(k.a)(b,2),u=l[0],d=l[1],O=e.category,g=e.text,x=e.id,h=c.findIndex((function(e){return e.id===x})),p="_new",v=function(t){var n=Object(w.a)(Object(w.a)({},e),{},{category:t});r([].concat(Object(C.a)(c.slice(0,h)),[n],Object(C.a)(c.slice(h+1))))},y=function(){var e=Object(P.a)(K.a.mark((function e(){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r([].concat(Object(C.a)(c.slice(0,h)),Object(C.a)(c.slice(h+1))));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(P.a)(K.a.mark((function e(t){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!i.includes(t)){e.next=4;break}throw new Error("Category already exists");case 4:v(t),s((function(e){return[].concat(Object(C.a)(e),[t])})),j(t),d(!1);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(M.jsxs)(U,{className:"".concat(O),children:[Object(M.jsx)(X,{children:g}),u?Object(M.jsx)(Z,{children:Object(M.jsx)(R,{onSubmit:S})}):Object(M.jsx)(Z,{children:Object(M.jsxs)("select",{name:"category",onChange:function(e){var t=e.target.value;t===p?d(!0):v(t)},defaultValue:e.category,children:[i.map((function(e){return Object(M.jsx)("option",{value:e,children:e},e)})),Object(M.jsx)("option",{value:p,children:"Create a new category..."},p)]})}),Object(M.jsx)(Y,{onClick:y,children:"\ud83d\uddd1"})]})},ee=v.c.div(b||(b=Object(y.a)(["\n  margin: 10px auto;\n  max-width: 200px;\n  flex-flow: column;\n  align-items: center;\n"]))),te=v.c.ul(l||(l=Object(y.a)(["\n  width: 100%;\n"]))),ne=v.c.div(u||(u=Object(y.a)(["\n  margin: 10px 0;\n"]))),ce=v.c.select(d||(d=Object(y.a)(["\n  display: block;\n  margin: 0 auto;\n"]))),re=v.c.div(O||(O=Object(y.a)(["\n  display: flex;\n  justify-content: center;\n"]))),ae=function(){var e=Object(m.e)(L),t=Object(m.d)(J),n=Object(k.a)(t,2),c=n[0],r=n[1],a=Object(m.d)(q),o=Object(k.a)(a,2),i=o[0],s=o[1];return Object(M.jsxs)(ee,{children:[Object(M.jsx)(G,{}),Object(M.jsx)(ne,{children:Object(M.jsxs)(ce,{value:i,onChange:function(e){var t=e.target.value;s(t)},children:[Object(M.jsx)("option",{value:E,children:"All"},E),c.map((function(e){return Object(M.jsx)("option",{value:e,children:e},e)}))]})}),Object(M.jsx)(te,{children:e.length?e.map((function(e){return Object(M.jsx)($,Object(w.a)({},e),e.id)})):i===E?Object(M.jsx)(re,{children:Object(M.jsx)("p",{children:"Create a new todo!"})}):Object(M.jsx)(re,{children:Object(M.jsx)("button",{onClick:function(){var e=c.indexOf(i);-1!==e&&(s(E),r([].concat(Object(C.a)(c.slice(0,e)),Object(C.a)(c.slice(e+1)))))},children:"Delete this category"})})})]})},oe=Object(v.b)(g||(g=Object(y.a)(["\n\nbody {\n  background-color: ",";\n  color:","\n}\n"])),(function(e){return e.theme.bgColor}),(function(e){return e.theme.darkTextColor}));var ie=function(){return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(oe,{}),Object(M.jsx)(ae,{})]})};p.a.render(Object(M.jsx)(x.a.StrictMode,{children:Object(M.jsx)(m.a,{children:Object(M.jsx)(v.a,{theme:{bgColor:"rgba(189, 195, 199, 0.5)",secondAccentColor:"rgba(241, 196, 15, 0.5)",secondBgColor:"white",primaryColor:"#e67e22",whiteColor:"white",darkTextColor:"#2c3e50",accentColor:"#e74c3c"},children:Object(M.jsx)(ie,{})})})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.180d04e5.chunk.js.map