(this.webpackJsonpmdn_react=this.webpackJsonpmdn_react||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(7),s=n.n(a),l=(n(14),n(4)),i=n(8),r=n(2),o=n(9),d=n(0);var u=function(e){var t=Object(c.useState)(!1),n=Object(r.a)(t,2),a=n[0],s=n[1],l=Object(c.useState)(""),i=Object(r.a)(l,2),o=i[0],u=i[1],b=Object(c.useRef)(null),j=Object(c.useRef)(null),m=function(e){var t=Object(c.useRef)();return Object(c.useEffect)((function(){t.current=e})),t.current}(a),f=Object(d.jsxs)("form",{className:"stack-small",onSubmit:function(t){t.preventDefault(),e.editTask(e.id,o),u(""),s(!1)},children:[Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsxs)("label",{className:"todo-label",htmlFor:e.id,children:["New name for ",e.name]}),Object(d.jsx)("input",{id:e.id,className:"todo-text",type:"text",onChange:function(e){u(e.target.value)},ref:b})]}),Object(d.jsxs)("div",{className:"btn-group",children:[Object(d.jsxs)("button",{type:"button",className:"btn todo-cancel",onClick:function(){return s(!1)},children:["Cancel",Object(d.jsxs)("span",{className:"visually-hidden",children:["renaming ",e.name]})]}),Object(d.jsxs)("button",{type:"submit",className:"btn btn__primary todo-edit",children:["Save",Object(d.jsxs)("span",{className:"visually-hidden",children:["new name for ",e.name]})]})]})]}),p=Object(d.jsxs)("div",{className:"stack-small",children:[Object(d.jsxs)("div",{className:"c-cb",children:[Object(d.jsx)("input",{id:e.id,type:"checkbox",defaultChecked:e.completed,onChange:function(){return e.toggleTaskCompleted(e.id)}}),Object(d.jsx)("label",{className:"todo-label",htmlFor:e.id,children:e.name})]}),Object(d.jsxs)("div",{className:"btn-group",children:[Object(d.jsxs)("button",{type:"button",className:"btn",onClick:function(){return s(!0)},ref:j,children:["Edit ",Object(d.jsx)("span",{className:"visually-hidden",children:e.name})]}),Object(d.jsxs)("button",{type:"button",className:"btn btn__danger",onClick:function(){return e.deleteTask(e.id)},children:["Delete ",Object(d.jsx)("span",{className:"visually-hidden",children:e.name})]})]})]});return Object(c.useEffect)((function(){a&&!m&&b.current.focus(),m&&!a&&j.current.focus()}),[a]),Object(d.jsx)("li",{className:"todo",children:a?f:p})};var b=function(e){var t=Object(c.useState)(""),n=Object(r.a)(t,2),a=n[0],s=n[1];return Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.addTask(a),s("")},children:[Object(d.jsx)("h2",{className:"label-wrapper",children:Object(d.jsx)("label",{htmlFor:"new-todo-input",className:"label__lg",children:"What needs to be done?"})}),Object(d.jsx)("input",{type:"text",id:"new-todo-input",className:"input input__lg",name:"text",autoComplete:"off",value:a,onChange:function(e){s(e.target.value)}}),Object(d.jsx)("button",{type:"submit",className:"btn btn__primary btn__lg",children:"Add"})]})};var j=function(e){return Object(d.jsxs)("button",{type:"button",className:"btn toggle-btn","aria-pressed":"true",onClick:function(){return e.setFilter(e.name)},children:[Object(d.jsx)("span",{className:"visually-hidden",children:"Show "}),Object(d.jsxs)("span",{children:[e.name," "]}),Object(d.jsx)("span",{className:"visually-hidden",children:" tasks"})]})},m={All:function(){return!0},Active:function(e){return!e.completed},Completed:function(e){return e.completed}},f=Object.keys(m);var p=function(e){var t=Object(c.useState)(e.tasks),n=Object(r.a)(t,2),a=n[0],s=n[1],p=Object(c.useState)("All"),O=Object(r.a)(p,2),h=O[0],x=O[1],v=Object(c.useRef)(null),g=function(e){var t=Object(c.useRef)();return Object(c.useEffect)((function(){t.current=e})),t.current}(a.length);function N(e){var t=a.filter((function(t){return e!==t.id}));s(t)}function k(e,t){var n=a.map((function(n){return e==n.id?Object(l.a)(Object(l.a)({},n),{},{name:t}):n}));s(n)}function y(e){var t=a.map((function(t){return e==t.id?Object(l.a)(Object(l.a)({},t),{},{completed:!t.completed}):t}));s(t)}var _=f.map((function(e){return Object(d.jsx)(j,{name:e,isPressed:e===h,setFilter:x},e)})),C=a.filter(m[h]).map((function(e){return Object(d.jsx)(u,{name:e.name,completed:e.completed,id:e.id,toggleCompleted:y,deleteTask:N,editTask:k},e.id)})),S=a.length>1?"tasks":"task",w="".concat(a.length," ").concat(S," remaining");return Object(c.useEffect)((function(){a.length-g===-1&&v.current.focus()}),[a.length,g]),Object(d.jsxs)("div",{className:"todoapp stack-large",children:[Object(d.jsx)("h1",{children:"TodoMatic"}),Object(d.jsx)(b,{addTask:function(e){var t={id:"todo-"+Object(o.a)(),name:e,completed:!1};s([].concat(Object(i.a)(a),[t]))}}),Object(d.jsx)("div",{className:"filters btn-group stack-exception",children:_}),Object(d.jsx)("h2",{id:"list-heading",tabIndex:"-1",ref:v,children:w}),Object(d.jsx)("ul",{role:"list",className:"todo-list stack-large stack-exception","aria-labelledby":"list-heading",children:C})]})};s.a.render(Object(d.jsx)(p,{tasks:[{id:"todo-0",name:"Eat",completed:!0},{id:"todo-1",name:"Sleep",completed:!1},{id:"todo-2",name:"Repeat",completed:!1}]}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.baa4d42e.chunk.js.map