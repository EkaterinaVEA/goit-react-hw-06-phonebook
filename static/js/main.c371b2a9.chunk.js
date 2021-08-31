(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{36:function(n,e,t){},59:function(n,e,t){"use strict";t.r(e);var r,a,o,c,i,s,l,d,b,p,j,u,x,f,m,h,g,O=t(0),v=t.n(O),y=t(14),k=t.n(y),w=t(7),C=t(25),z=(t(36),t(6)),F=t(2),A=t(3),L=A.a.section(r||(r=Object(F.a)(["\n  padding: 40px 0;\n"]))),B=A.a.h2(a||(a=Object(F.a)(["\n  margin: 0 auto 50px;\n  text-transform: capitalize;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 50px;\n  text-align: center;\n  color: #727273;\n"]))),N=t(1),S=function(n){var e=n.title,t=n.children;return Object(N.jsxs)(L,{children:[e&&Object(N.jsxs)(B,{children:[Object(N.jsx)(z.a,{}),e]}),t]})},D=A.a.div(o||(o=Object(F.a)(["\n  width: 900px;\n  display: flex;\n  justify-content: space-between;\n  margin: 0 auto;\n  padding: 30px;\n  border-radius: 20px;\n  box-shadow: -10px -10px 30px 0 #ffffff, 10px 10px 30px 0 #aeaec040;\n  background-color: #f0f0f3;\n  & h1,\n  h2 {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: #727273;\n    font-size: 28px;\n    margin-bottom: 50px;\n    margin-top: 0;\n    & svg {\n      margin-right: 15px;\n      color: #727273;\n    }\n  }\n"]))),J=A.a.div(c||(c=Object(F.a)(["\n  width: 450px;\n"]))),T=A.a.div(i||(i=Object(F.a)(["\n  width: 450px;\n"]))),Z=function(n){var e=n.children;return Object(N.jsx)(D,{children:e})},q=t(22),M=t(8),U=t(10),E=t.n(U),I={addContact:Object(M.b)("contacts/add",(function(n,e){return{payload:{id:E()(),name:n,number:e}}})),deleteContact:Object(M.b)("contacts/delete"),changeFilter:Object(M.b)("contacts/changeFilter")},P=A.a.form(s||(s=Object(F.a)(["\n  margin: 0 auto 50px;\n"]))),$=A.a.label(l||(l=Object(F.a)(["\n  position: absolute;\n  display: flex;\n  align-items: center;\n  font-weight: 500;\n  left: 0;\n  bottom: 5px;\n  margin-bottom: 10px;\n  cursor: text;\n  font-size: 20px;\n  color: var(--grey);\n\n  transition: color 250ms ease, transform 250ms ease;\n\n  & svg {\n    margin-right: 10px;\n    font-weight: 500;\n    transition: color 250ms ease, transform 250ms ease;\n  }\n"]))),G=A.a.input(d||(d=Object(F.a)(["\n  display: block;\n  width: 100%;\n  height: 50px;\n  padding-left: 30px;\n  border: none;\n  border-bottom: 1px solid var(--dark);\n  font-size: 20px;\n  color: var(--dark);\n  background-color: transparent;\n\n  &::placeholder {\n    opacity: 0;\n    color: var(--dark);\n    font-weight: 700;\n    transition: opacity 250ms ease;\n  }\n\n  &:focus {\n    outline: none;\n    border-color: var(--dark);\n    &::placeholder {\n      opacity: 0.7;\n      font-weight: 700;\n      transition-delay: 250ms;\n    }\n  }\n\n  &:focus + label,\n  &:not(:placeholder-shown) + label {\n    font-size: 0;\n    color: var(--dark);\n    & svg {\n      font-weight: 700;\n      color: var(--dark);\n    }\n  }\n"]))),H=A.a.button(b||(b=Object(F.a)(["\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 5px 10px;\n  cursor: pointer;\n  border: 1px solid #f0f0f3;\n  box-shadow: -10px -10px 30px 0 #ffffff, 10px 10px 30px 0 #aeaec040;\n  border-radius: 20px;\n  font-size: 20px;\n  text-transform: uppercase;\n  color: var(--dark);\n  background-color: transparent;\n  transition: all 250ms ease-in-out;\n  &:hover {\n    transform: scale(1.2);\n  }\n  & svg {\n    margin-right: 10px;\n  }\n"]))),K=A.a.div(p||(p=Object(F.a)(["\n  position: relative;\n  width: 400px;\n  margin-bottom: 50px;\n"]))),Q=function(){var n=Object(O.useState)(""),e=Object(q.a)(n,2),t=e[0],r=e[1],a=Object(O.useState)(""),o=Object(q.a)(a,2),c=o[0],i=o[1],s=Object(w.b)(),l=E()(),d=E()(),b=function(n){var e=n.currentTarget,t=e.name,a=e.value;switch(t){case"name":r(a);break;case"number":i(a);break;default:return}};return Object(N.jsxs)(P,{onSubmit:function(n){n.preventDefault(),s(I.addContact(t,c)),r(""),i("")},action:"",children:[Object(N.jsxs)(K,{children:[Object(N.jsx)(G,{onChange:b,id:l,type:"text",name:"name",value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",placeholder:"Name",autoComplete:"off",maxLength:"40",required:!0}),Object(N.jsxs)($,{htmlFor:l,children:[Object(N.jsx)(z.h,{size:"25"}),"Name"]})]}),Object(N.jsxs)(K,{children:[Object(N.jsx)(G,{onChange:b,id:d,type:"tel",name:"number",value:c,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",placeholder:"111-11-11",autoComplete:"off",maxLength:"15",required:!0}),Object(N.jsxs)($,{htmlFor:d,children:[Object(N.jsx)(z.d,{size:"25"}),"Number"]})]}),Object(N.jsxs)(H,{type:"submit",children:[Object(N.jsx)(z.f,{}),"Add contact"]})]})},R=A.a.li(j||(j=Object(F.a)(["\n  display: flex;\n  align-items: center;\n  width: 440px;\n  font-size: 20px;\n  margin: 0 auto;\n  padding: 10px 5px;\n  & span {\n    display: inline-flex;\n    align-items: center;\n    font-weight: 600;\n    color: var(--grey);\n    &:first-of-type {\n      color: var(--dark);\n      margin-right: 10px;\n    }\n    & svg {\n      margin-right: 15px;\n      color: var(--dark);\n    }\n  }\n  & svg {\n    color: var(--dark);\n  }\n"]))),V=A.a.button(u||(u=Object(F.a)(["\n  display: block;\n  margin-left: auto;\n  margin-right: 10px;\n  font-size: 16px;\n  padding: 5px;\n  color: var(--dark);\n  border: none;\n  border-radius: 20px;\n  cursor: pointer;\n  background-color: transparent;\n  transition: all 250ms ease;\n  &:hover {\n    border: 1px solid var(--dark);\n  }\n"]))),W=function(n){var e=n.name,t=n.number,r=n.onDeleteContact;return Object(N.jsxs)(R,{children:[Object(N.jsxs)("span",{children:[Object(N.jsx)(z.g,{size:"20"}),e,":"]}),Object(N.jsx)("span",{children:t}),Object(N.jsx)(V,{onClick:r,children:"delete"})]})},X=function(n){return n.contacts.filter},Y=function(n){return n.contacts.items},_=function(n){var e=Y(n),t=X(n);return e.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())||n.number.includes(t)}))},nn=A.a.ul(x||(x=Object(F.a)(["\n  border-radius: 4px;\n  overflow: hidden;\n"]))),en=function(){var n=Object(w.c)(_),e=Object(w.b)();return Object(N.jsx)(nn,{children:n.map((function(n){var t=n.name,r=n.number,a=n.id;return Object(N.jsx)(W,{name:t,number:r,id:a,onDeleteContact:function(){return e(I.deleteContact(a))}},a)}))})},tn=A.a.label(f||(f=Object(F.a)(["\n  position: absolute;\n  left: 0;\n  bottom: 5px;\n  display: flex;\n  align-items: center;\n  margin-bottom: 5px;\n  cursor: text;\n  font-size: 20px;\n  color: var(--grey);\n\n  transition: color 250ms ease-in-out, transform 250ms ease-in-out;\n  & svg {\n    margin-right: 10px;\n    transition: color 250ms ease-in-out, transform 250ms ease-in-out;\n  }\n"]))),rn=A.a.input(m||(m=Object(F.a)(["\n  display: block;\n  width: 100%;\n  height: 50px;\n  margin-bottom: 30px;\n  padding-left: 40px;\n  border: none;\n  border-bottom: 1px solid var(--dark);\n  font-size: 20px;\n  color: var(--dark);\n  background-color: transparent;\n  transition: all 250ms ease-in-out;\n  &::placeholder {\n    opacity: 0;\n    color: var(--dark);\n    transition: opacity 250ms ease;\n  }\n  &:focus {\n    outline: none;\n    border-bottom: 1px solid var(--dark);\n    &::placeholder {\n      opacity: 0.7;\n      transition-delay: 250ms;\n    }\n  }\n  &:focus + label,\n  &:not(:placeholder-shown) + label {\n    font-size: 0;\n    text-transform: uppercase;\n    font-weight: 600;\n    color: var(--dark);\n    & svg {\n      color: var(--dark);\n    }\n  }\n"]))),an=A.a.div(h||(h=Object(F.a)(["\n  position: relative;\n  width: 400px;\n  margin-bottom: 25px;\n"]))),on=function(){var n=E()(),e=Object(w.c)(X),t=Object(w.b)();return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)(an,{children:[Object(N.jsx)(rn,{id:n,name:"filter",onChange:function(n){return t(I.changeFilter(n.target.value))},type:"text",value:e,placeholder:"Name"}),Object(N.jsxs)(tn,{htmlFor:n,children:[Object(N.jsx)(z.c,{size:"30"}),"Find contact by name"]})]})})},cn=function(){var n=Object(w.c)(Y);return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)(S,{title:"Phone Book",children:Object(N.jsxs)(Z,{children:[Object(N.jsxs)(T,{children:[Object(N.jsxs)("h1",{children:[Object(N.jsx)(z.e,{})," Add Contact"]}),Object(N.jsx)(Q,{})]}),Object(N.jsxs)(J,{children:[Object(N.jsxs)("h2",{children:[Object(N.jsx)(z.b,{}),"Contacts"]}),Object(N.jsx)(on,{}),n.length>0&&Object(N.jsx)(en,{})]})]})})})},sn=t(16),ln=t(9),dn=t(26),bn=t.n(dn),pn=t(17),jn=t(4),un=t(21),xn=t.n(un),fn=Object(M.c)([],(g={},Object(pn.a)(g,I.addContact,(function(n,e){var t=e.payload;return function(n,e,t){var r=n.find((function(n){return n.name.toLowerCase()===e.toLowerCase()})),a=n.find((function(n){return n.number.replace(/[^0-9]/g,"")===t.replace(/[^0-9]/g,"")}));return r?(xn.a.fire({position:"center",icon:"error",title:"".concat(e.toUpperCase(),"\nis already in contacts!"),confirmButtonColor:"indianred"}),r):a?(xn.a.fire({position:"center",icon:"error",title:"This number is already in contacts as\n".concat(a.name.toUpperCase()),confirmButtonColor:"indianred"}),a):void 0}(n,t.name,t.number)?n:[].concat(Object(sn.a)(n),[t])})),Object(pn.a)(g,I.deleteContact,(function(n,e){var t=e.payload;return n.filter((function(n){return n.id!==t}))})),g)),mn=Object(M.c)("",Object(pn.a)({},I.changeFilter,(function(n,e){return e.payload}))),hn=Object(jn.b)({items:fn,filter:mn}),gn=Object(sn.a)(Object(M.d)({serializableCheck:{ignoredActions:[ln.a,ln.f,ln.b,ln.c,ln.d,ln.e]}})),On={key:"contacts",storage:bn.a,blacklist:["filter"]},vn=Object(M.a)({reducer:{contacts:Object(ln.g)(On,hn)},middleware:gn,devTools:!1}),yn={store:vn,persistor:Object(ln.h)(vn)};k.a.render(Object(N.jsx)(v.a.StrictMode,{children:Object(N.jsx)(w.a,{store:yn.store,children:Object(N.jsx)(C.a,{loading:null,persistor:yn.persistor,children:Object(N.jsx)(cn,{})})})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.c371b2a9.chunk.js.map