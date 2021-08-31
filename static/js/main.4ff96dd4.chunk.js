(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{36:function(n,e,t){},59:function(n,e,t){"use strict";t.r(e);var r,a,o,i,c,s,l,d,b,p,u,j,x=t(0),f=t.n(x),m=t(14),h=t.n(m),g=t(7),O=t(26),v=(t(36),t(6)),y=t(2),k=t(3),w=k.a.section(r||(r=Object(y.a)(["\n  padding: 40px 0;\n"]))),C=k.a.h2(a||(a=Object(y.a)(["\n  margin: 0 auto 50px;\n  text-transform: capitalize;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 50px;\n  text-align: center;\n  color: #727273;\n"]))),z=t(1),F=function(n){var e=n.title,t=n.children;return Object(z.jsxs)(w,{children:[e&&Object(z.jsxs)(C,{children:[Object(z.jsx)(v.a,{}),e]}),t]})},A=k.a.div(o||(o=Object(y.a)(["\n  width: 900px;\n  display: flex;\n  justify-content: space-between;\n  margin: 0 auto;\n  padding: 30px;\n  border-radius: 20px;\n  box-shadow: -10px -10px 30px 0 #ffffff, 10px 10px 30px 0 #aeaec040;\n  background-color: #f0f0f3;\n  & h1,\n  h2 {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: #727273;\n    font-size: 28px;\n    margin-bottom: 50px;\n    margin-top: 0;\n    & svg {\n      margin-right: 15px;\n      color: #727273;\n    }\n  }\n"]))),L=k.a.div(i||(i=Object(y.a)(["\n  width: 450px;\n"]))),B=k.a.div(c||(c=Object(y.a)(["\n  width: 450px;\n"]))),N=function(n){var e=n.children;return Object(z.jsx)(A,{children:e})},S=t(23),T=t(8),q=t(10),D=t.n(q),J={addContact:Object(T.b)("contacts/add",(function(n,e){return{payload:{id:D()(),name:n,number:e}}})),deleteContact:Object(T.b)("contacts/delete"),changeFilter:Object(T.b)("contacts/changeFilter")},Z=k.a.form(s||(s=Object(y.a)(["\n  margin: 0 auto 50px;\n"]))),M=k.a.label(l||(l=Object(y.a)(["\n  position: absolute;\n  display: flex;\n  align-items: center;\n  font-weight: 500;\n  left: 0;\n  bottom: 5px;\n  margin-bottom: 10px;\n  cursor: text;\n  font-size: 20px;\n  color: var(--grey);\n\n  transition: color 250ms ease, transform 250ms ease;\n\n  & svg {\n    margin-right: 10px;\n    font-weight: 500;\n    transition: color 250ms ease, transform 250ms ease;\n  }\n"]))),U=k.a.input(d||(d=Object(y.a)(["\n  display: block;\n  width: 100%;\n  height: 50px;\n  padding-left: 30px;\n  border: none;\n  border-bottom: 1px solid var(--dark);\n  font-size: 20px;\n  color: var(--dark);\n  background-color: transparent;\n\n  &::placeholder {\n    opacity: 0;\n    color: var(--dark);\n    font-weight: 700;\n    transition: opacity 250ms ease;\n  }\n\n  &:focus {\n    outline: none;\n    border-color: var(--dark);\n    &::placeholder {\n      opacity: 0.7;\n      font-weight: 700;\n      transition-delay: 250ms;\n    }\n  }\n\n  &:focus + label,\n  &:not(:placeholder-shown) + label {\n    font-size: 0;\n    color: var(--dark);\n    & svg {\n      font-weight: 700;\n      color: var(--dark);\n    }\n  }\n"]))),E=k.a.button(b||(b=Object(y.a)(["\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 5px 10px;\n  cursor: pointer;\n  border: 1px solid #f0f0f3;\n  box-shadow: -10px -10px 30px 0 #ffffff, 10px 10px 30px 0 #aeaec040;\n  border-radius: 20px;\n  font-size: 20px;\n  text-transform: uppercase;\n  color: var(--dark);\n  background-color: transparent;\n  transition: all 250ms ease-in-out;\n  &:hover {\n    transform: scale(1.2);\n  }\n  & svg {\n    margin-right: 10px;\n  }\n"]))),I=k.a.div(p||(p=Object(y.a)(["\n  position: relative;\n  width: 400px;\n  margin-bottom: 50px;\n"]))),P=function(){var n=Object(x.useState)(""),e=Object(S.a)(n,2),t=e[0],r=e[1],a=Object(x.useState)(""),o=Object(S.a)(a,2),i=o[0],c=o[1],s=Object(g.b)(),l=D()(),d=D()(),b=function(n){var e=n.currentTarget,t=e.name,a=e.value;switch(t){case"name":r(a);break;case"number":c(a);break;default:return}};return Object(z.jsxs)(Z,{onSubmit:function(n){n.preventDefault(),s(J.addContact(t,i)),r(""),c("")},action:"",children:[Object(z.jsxs)(I,{children:[Object(z.jsx)(U,{onChange:b,id:l,type:"text",name:"name",value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",placeholder:"Name",autoComplete:"off",maxLength:"40",required:!0}),Object(z.jsxs)(M,{htmlFor:l,children:[Object(z.jsx)(v.h,{size:"25"}),"Name"]})]}),Object(z.jsxs)(I,{children:[Object(z.jsx)(U,{onChange:b,id:d,type:"tel",name:"number",value:i,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",placeholder:"111-11-11",autoComplete:"off",maxLength:"15",required:!0}),Object(z.jsxs)(M,{htmlFor:d,children:[Object(z.jsx)(v.d,{size:"25"}),"Number"]})]}),Object(z.jsxs)(E,{type:"submit",children:[Object(z.jsx)(v.f,{}),"Add contact"]})]})},R=t(20),$=t.n(R),G=k.a.li(u||(u=Object(y.a)(["\n  display: flex;\n  align-items: center;\n  width: 440px;\n  font-size: 20px;\n  margin: 0 auto;\n  padding: 10px 5px;\n  & span {\n    display: inline-flex;\n    align-items: center;\n    font-weight: 600;\n    color: var(--grey);\n    &:first-of-type {\n      color: var(--dark);\n      margin-right: 10px;\n    }\n    & svg {\n      margin-right: 15px;\n      color: var(--dark);\n    }\n  }\n  & svg {\n    color: var(--dark);\n  }\n"]))),H=k.a.button(j||(j=Object(y.a)(["\n  display: block;\n  margin-left: auto;\n  margin-right: 10px;\n  font-size: 16px;\n  padding: 5px;\n  color: var(--dark);\n  border: none;\n  border-radius: 20px;\n  cursor: pointer;\n  background-color: transparent;\n  transition: all 250ms ease;\n  &:hover {\n    border: 1px solid var(--dark);\n  }\n"])));H.propTypes={onClick:$.a.func.isRequired};var K,Q,V,W,X,Y=function(n){var e=n.name,t=n.number,r=n.onDeleteContact;return Object(z.jsxs)(G,{children:[Object(z.jsxs)("span",{children:[Object(z.jsx)(v.g,{size:"20"}),e,":"]}),Object(z.jsx)("span",{children:t}),Object(z.jsx)(H,{onClick:r,children:"delete"})]})},_=function(n){return n.contacts.filter},nn=function(n){return n.contacts.items},en=function(n){var e=nn(n),t=_(n);return e.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())||n.number.includes(t)}))},tn=k.a.ul(K||(K=Object(y.a)(["\n  border-radius: 4px;\n  overflow: hidden;\n"]))),rn=function(){var n=Object(g.c)(en),e=Object(g.b)();return Object(z.jsx)(tn,{children:n.map((function(n){var t=n.name,r=n.number,a=n.id;return Object(z.jsx)(Y,{name:t,number:r,id:a,onDeleteContact:function(){return e(J.deleteContact(a))}},a)}))})},an=k.a.label(Q||(Q=Object(y.a)(["\n  position: absolute;\n  left: 0;\n  bottom: 5px;\n  display: flex;\n  align-items: center;\n  margin-bottom: 5px;\n  cursor: text;\n  font-size: 20px;\n  color: var(--grey);\n\n  transition: color 250ms ease-in-out, transform 250ms ease-in-out;\n  & svg {\n    margin-right: 10px;\n    transition: color 250ms ease-in-out, transform 250ms ease-in-out;\n  }\n"]))),on=k.a.input(V||(V=Object(y.a)(["\n  display: block;\n  width: 100%;\n  height: 50px;\n  margin-bottom: 30px;\n  padding-left: 40px;\n  border: none;\n  border-bottom: 1px solid var(--dark);\n  font-size: 20px;\n  color: var(--dark);\n  background-color: transparent;\n  transition: all 250ms ease-in-out;\n  &::placeholder {\n    opacity: 0;\n    color: var(--dark);\n    transition: opacity 250ms ease;\n  }\n  &:focus {\n    outline: none;\n    border-bottom: 1px solid var(--dark);\n    &::placeholder {\n      opacity: 0.7;\n      transition-delay: 250ms;\n    }\n  }\n  &:focus + label,\n  &:not(:placeholder-shown) + label {\n    font-size: 0;\n    text-transform: uppercase;\n    font-weight: 600;\n    color: var(--dark);\n    & svg {\n      color: var(--dark);\n    }\n  }\n"]))),cn=k.a.div(W||(W=Object(y.a)(["\n  position: relative;\n  width: 400px;\n  margin-bottom: 25px;\n"]))),sn=function(){var n=D()(),e=Object(g.c)(_),t=Object(g.b)();return Object(z.jsx)(z.Fragment,{children:Object(z.jsxs)(cn,{children:[Object(z.jsx)(on,{id:n,name:"filter",onChange:function(n){return t(J.changeFilter(n.target.value))},type:"text",value:e,placeholder:"Name"}),Object(z.jsxs)(an,{htmlFor:n,children:[Object(z.jsx)(v.c,{size:"30"}),"Find contact by name"]})]})})},ln=function(){var n=Object(g.c)(nn);return Object(z.jsx)(z.Fragment,{children:Object(z.jsx)(F,{title:"Phone Book",children:Object(z.jsxs)(N,{children:[Object(z.jsxs)(B,{children:[Object(z.jsxs)("h1",{children:[Object(z.jsx)(v.e,{})," Add Contact"]}),Object(z.jsx)(P,{})]}),Object(z.jsxs)(L,{children:[Object(z.jsxs)("h2",{children:[Object(z.jsx)(v.b,{}),"Contacts"]}),Object(z.jsx)(sn,{}),n.length>0&&Object(z.jsx)(rn,{})]})]})})})},dn=t(16),bn=t(9),pn=t(27),un=t.n(pn),jn=t(17),xn=t(4),fn=t(22),mn=t.n(fn),hn=Object(T.c)([],(X={},Object(jn.a)(X,J.addContact,(function(n,e){var t=e.payload;return function(n,e,t){var r=n.find((function(n){return n.name.toLowerCase()===e.toLowerCase()})),a=n.find((function(n){return n.number.replace(/[^0-9]/g,"")===t.replace(/[^0-9]/g,"")}));return r?(mn.a.fire({position:"center",icon:"error",title:"".concat(e.toUpperCase(),"\nis already in contacts!"),confirmButtonColor:"indianred"}),r):a?(mn.a.fire({position:"center",icon:"error",title:"This number is already in contacts as\n".concat(a.name.toUpperCase()),confirmButtonColor:"indianred"}),a):void 0}(n,t.name,t.number)?n:[].concat(Object(dn.a)(n),[t])})),Object(jn.a)(X,J.deleteContact,(function(n,e){var t=e.payload;return n.filter((function(n){return n.id!==t}))})),X)),gn=Object(T.c)("",Object(jn.a)({},J.changeFilter,(function(n,e){return e.payload}))),On=Object(xn.b)({items:hn,filter:gn}),vn=Object(dn.a)(Object(T.d)({serializableCheck:{ignoredActions:[bn.a,bn.f,bn.b,bn.c,bn.d,bn.e]}})),yn={key:"contacts",storage:un.a,blacklist:["filter"]},kn=Object(T.a)({reducer:{contacts:Object(bn.g)(yn,On)},middleware:vn,devTools:!1}),wn={store:kn,persistor:Object(bn.h)(kn)};h.a.render(Object(z.jsx)(f.a.StrictMode,{children:Object(z.jsx)(g.a,{store:wn.store,children:Object(z.jsx)(O.a,{loading:null,persistor:wn.persistor,children:Object(z.jsx)(ln,{})})})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.4ff96dd4.chunk.js.map