(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{27:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(21),s=n.n(r),o=(n(27),n(0)),i=function(){return Object(o.jsx)("h2",{children:"Expense Tracker"})},u=n(4),l=n.n(u),j=n(10),d=n(5),b=n(22),O=n(3),p=function(e,t){switch(t.type){case"GET_TRANSACTIONS":return Object(O.a)(Object(O.a)({},e),{},{loading:!1,transactions:t.payload});case"DELETE_TRANSACTION":return Object(O.a)(Object(O.a)({},e),{},{transactions:e.transactions.filter((function(e){return e._id!==t.payload}))});case"ADD_TRANSACTION":return Object(O.a)(Object(O.a)({},e),{},{transactions:[].concat(Object(b.a)(e.transactions),[t.payload])});case"TRANSACTION_ERROR":return Object(O.a)(Object(O.a)({},e),{},{error:t.payload});default:return e}},x=n(11),h=n.n(x),f={transactions:[],error:null,loading:!0},m=Object(c.createContext)(f),v=function(e){var t=e.children,n=Object(c.useReducer)(p,f),a=Object(d.a)(n,2),r=a[0],s=a[1];function i(){return(i=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("/api/v1/transactions");case 3:t=e.sent,s({type:"GET_TRANSACTIONS",payload:t.data.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),s({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function u(){return(u=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.delete("/api/v1/transactions/".concat(t));case 3:s({type:"DELETE_TRANSACTION",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),s({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function b(){return(b=Object(j.a)(l.a.mark((function e(t){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,h.a.post("/api/v1/transactions",t,n);case 4:c=e.sent,s({type:"ADD_TRANSACTION",payload:c.data.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),s({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}return Object(o.jsx)(m.Provider,{value:{transactions:r.transactions,deleteTransaction:function(e){return u.apply(this,arguments)},addTransaction:function(e){return b.apply(this,arguments)},getTransactions:function(){return i.apply(this,arguments)},error:r.error,loading:r.loading},children:t})},N=function(){var e=Object(c.useContext)(m).transactions.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h4",{children:"Your Balance"}),Object(o.jsxs)("h1",{children:["$",e.toFixed(2)]})]})},T=function(){var e=Object(c.useContext)(m).transactions.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0),n=-1*e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0);return Object(o.jsxs)("div",{className:"inc-exp-container",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h4",{children:"Income"}),Object(o.jsxs)("p",{className:"money plus",children:["$",t.toFixed(2)]})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h4",{children:"Expense"}),Object(o.jsxs)("p",{className:"money minus",children:["$",n.toFixed(2)]})]})]})},y=function(e){var t=e.transaction,n=Object(c.useContext)(m).deleteTransaction,a=t.amount<0?"":"+";return Object(o.jsxs)("li",{className:t.amount<0?"minus":"plus",children:[t.text,Object(o.jsx)("br",{}),a,"$",t.amount,Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),t.note,Object(o.jsx)("button",{onClick:function(){return n(t._id)},className:"delete-btn",children:"x"})]})},A=function(){var e=Object(c.useContext)(m),t=e.transactions,n=e.getTransactions;return Object(c.useEffect)((function(){n()}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h3",{children:"History"}),Object(o.jsx)("ul",{className:"list",children:t.map((function(e){return Object(o.jsx)(y,{transaction:e},e._id)}))})]})},C=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(d.a)(r,2),i=s[0],u=s[1],l=Object(c.useState)(0),j=Object(d.a)(l,2),b=j[0],O=j[1],p=Object(c.useContext)(m).addTransaction;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h3",{children:"Add New"}),Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={id:Math.floor(1e8*Math.random()),text:n,amount:+b,note:i};p(t),a(""),u(""),O(0)},children:[Object(o.jsxs)("div",{className:"form-control",children:[Object(o.jsx)("label",{htmlFor:"text",children:"Item"}),Object(o.jsx)("input",{type:"text",value:n,onChange:function(e){return a(e.target.value)},placeholder:"Enter Text"})]}),Object(o.jsxs)("div",{className:"form-control",children:[Object(o.jsx)("label",{htmlFor:"amount",children:"Amount"}),Object(o.jsx)("p",{children:"+ For Income"}),Object(o.jsx)("p",{children:"- For Expense"}),Object(o.jsx)("input",{type:"number",value:b,onChange:function(e){return O(e.target.value)},placeholder:"Enter Amount"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"notes",children:"Notes"})," ",Object(o.jsx)("br",{}),Object(o.jsx)("textarea",{className:"form-control textarea",type:"text",value:i,onChange:function(e){u(e.target.value)},placeholder:"Add Notes"})]}),Object(o.jsx)("button",{className:"btn",children:"Add Transaction"})]})]})};n(48);var g=function(){return Object(o.jsx)(v,{children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("div",{className:"contain-upper",children:[Object(o.jsxs)("div",{className:"contain-left",children:[Object(o.jsx)(i,{}),Object(o.jsx)(N,{}),Object(o.jsx)(T,{})]}),Object(o.jsx)("div",{className:"contain-right",children:Object(o.jsx)(C,{})})]}),Object(o.jsx)("div",{className:"contain-lower",children:Object(o.jsx)(A,{})})]})})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root")),R()}},[[49,1,2]]]);
//# sourceMappingURL=main.acf71608.chunk.js.map