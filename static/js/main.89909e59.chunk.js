(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{13:function(t,e,c){},14:function(t,e,c){},16:function(t,e,c){"use strict";c.r(e);var o=c(1),n=c.n(o),s=c(7),a=c.n(s),d=(c(13),c(3)),i=(c(14),c(8)),l=c(0),u=function(t){console.log(t);return Object(l.jsx)("div",{children:Object(l.jsxs)("form",{children:[Object(l.jsx)("input",{onChange:function(e){t.setInputText(e.target.value)},type:"text",value:t.inputText,className:"todo-input"}),Object(l.jsx)("button",{className:"todo-button",type:"submit",onClick:function(e){e.preventDefault(),t.setTodos([].concat(Object(i.a)(t.todos),[{text:t.inputText,completed:!1,id:1e3*Math.random()}])),t.setInputText("")},children:Object(l.jsx)("i",{className:"fas fa-plus-square"})}),Object(l.jsx)("div",{className:"select",children:Object(l.jsxs)("select",{name:"todos",className:"filter-todo",onChange:function(e){t.setStatus(e.target.value)},children:[Object(l.jsx)("option",{value:"all",children:"All"}),Object(l.jsx)("option",{value:"completed",children:"Completed"}),Object(l.jsx)("option",{value:"uncompleted",children:"Uncompleted"})]})})]})})},r=c(6),j=function(t){return Object(l.jsxs)("div",{className:"todo",children:[Object(l.jsx)("li",{className:"todo-item ".concat(t.todo.completed?"completed":""),children:t.text}),Object(l.jsx)("button",{onClick:function(){t.setTodos(t.todos.map((function(e){return e.id===t.todo.id?Object(r.a)(Object(r.a)({},e),{},{completed:!e.completed}):e})))},className:"complete-btn",children:Object(l.jsx)("i",{className:"fas fa-check"})}),Object(l.jsx)("button",{className:"trash-btn",onClick:function(){t.setTodos(t.todos.filter((function(e){return e.id!==t.todo.id})))},children:Object(l.jsx)("i",{className:"fas fa-trash"})})]})},b=function(t){return Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"todo-container",children:Object(l.jsx)("ul",{className:"todo-list",children:t.filteredTodos.map((function(e){return Object(l.jsx)(j,{todo:e,setTodos:t.setTodos,todos:t.todos,text:e.text},e.id)}))})})})};var p=function(){var t=Object(o.useState)(""),e=Object(d.a)(t,2),c=e[0],n=e[1],s=Object(o.useState)([]),a=Object(d.a)(s,2),i=a[0],r=a[1],j=Object(o.useState)("all"),p=Object(d.a)(j,2),f=p[0],O=p[1],x=Object(o.useState)([]),m=Object(d.a)(x,2),h=m[0],T=m[1];Object(o.useEffect)((function(){v()}),[i,f]);var v=function(){switch(f){case"completed":T(i.filter((function(t){return!0===t.completed})));break;case"uncompleted":T(i.filter((function(t){return!1===t.completed})));break;default:T(i)}};return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("header",{children:Object(l.jsx)("h1",{children:"Thackeray's Todo App"})}),Object(l.jsx)(u,{setInputText:n,todos:i,setTodos:r,inputText:c,setStatus:O}),Object(l.jsx)(b,{setTodos:r,filteredTodos:h,todos:i})]})},f=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(e){var c=e.getCLS,o=e.getFID,n=e.getFCP,s=e.getLCP,a=e.getTTFB;c(t),o(t),n(t),s(t),a(t)}))};a.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.89909e59.chunk.js.map