(this["webpackJsonpgreen-data"]=this["webpackJsonpgreen-data"]||[]).push([[0],{22:function(e,t,s){},29:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s(0),i=s.n(a),n=s(5),r=s.n(n),l=(s(22),s(14)),o=s(3);var d=Object(o.b)(null,null)((function(e){var t=e.item,s=e.isActive,a=e.onClick;function i(e){e.preventDefault(),a()}return Object(c.jsxs)("tr",{className:"row border item ".concat(s?"border-primary":""),onClick:function(e){return i(e)},children:[Object(c.jsx)("td",{className:"col",children:t.FIO}),Object(c.jsx)("td",{className:"col",children:t.position}),Object(c.jsx)("td",{className:"col",children:t.birthDay}),Object(c.jsx)("td",{className:"col",children:t.sex?"\u041c":"\u0416"}),Object(c.jsx)("td",{className:"col",children:t.fired?"\u0423\u0432\u043e\u043b\u0435\u043d":"\u0420\u0430\u0431\u043e\u0442\u0430\u0435\u0442"})]})})),h=s(6),b="CREATE_NEW_USER",p="DELETE_USER",u="USER_INFO",j="CHANGE_INFO",m=function e(){Object(h.a)(this,e),this.id=Date.now().toString()+Math.random().toString(),this.FIO="\u041d\u0435 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043e",this.position="\u041d\u0435 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043e",this.birthDay="\u0433\u043e\u0434/\u043c\u0435\u0441\u044f\u0446/\u0434\u0435\u043d\u044c",this.sex=!0,this.fired=!1};function O(){return{type:b,payload:new m}}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:u,payload:e}}var x={createNewUser:O},v=Object(o.b)((function(e){return{items:e.items}}),x)((function(e){var t=e.items,s=e.active,a=e.setActive,i=Object(o.c)();return Object(c.jsxs)("table",{className:"table",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{className:"row  window__header",children:[Object(c.jsx)("th",{className:"col",children:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"}),Object(c.jsx)("th",{className:"col",children:"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c"}),Object(c.jsx)("th",{className:"col",children:"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f"}),Object(c.jsx)("th",{className:"col",children:"\u041f\u043e\u043b"}),Object(c.jsx)("th",{className:"col",children:"\u0420\u0430\u0431\u043e\u0442\u0435\u0442 \u043b\u0438"})]})}),Object(c.jsx)("tbody",{children:t.items.map((function(e,t){return Object(c.jsx)(d,{item:e,isActive:s===t,onClick:function(){return function(e,t){a(e),i(f(t))}(t,e)}},e.id)}))})]})})),y=s(7),N=s(2),g=s(13),k=s(16),U=s(15),D=["\u041d\u0435 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043e","\u0421\u0442\u0430\u0440\u0448\u0438\u0439 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a","\u041c\u043b\u0430\u0434\u0448\u0438\u0439 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a","\u042d\u0439\u0447\u0430\u0440","\u0423\u0431\u043e\u0440\u0449\u0438\u043a"],I=function(e){Object(k.a)(s,e);var t=Object(U.a)(s);function s(){var e;Object(h.a)(this,s);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).handleOptionChange=function(t){e.setState({selectedOption:t.target.value})},e.submitHandler=function(t){t.preventDefault();var s=e.props.createNewUser();e.props.userInfo(s.payload),e.props.setActive(e.props.items.items.length)},e.changeInputHandler=function(t){var s,c=t.target;e.setState((function(e){return Object(N.a)(Object(N.a)({},e),{},Object(y.a)({},c.name,"checkbox"===c.type||"radio"===c.type?c.checked:c.value))})),s="radio"===c.type?!e.props.items.activeUser.sex:"checkbox"===c.type?c.checked:c.value;var a={id:e.props.items.activeUser.id,box:c.name,newValue:s};e.props.changeInfo(a)},e.deleteUser=function(){e.props.deleteUser(e.props.items.activeUser),e.props.userInfo(),e.props.setActive(null)},e}return Object(g.a)(s,[{key:"render",value:function(){return Object(c.jsxs)("form",{onSubmit:this.submitHandler,children:[Object(c.jsx)("div",{className:"input-group mb-3",children:Object(c.jsx)("input",{type:"text",className:"form-control",placeholder:"\u0424\u0418\u041e",name:"FIO",onChange:this.changeInputHandler,value:this.props.items.activeUser.FIO||"",maxLength:"15",disabled:0===Object.keys(this.props.items.activeUser).length})}),Object(c.jsx)("select",{className:"form-select","aria-label":"Default select example",name:"position",onChange:this.changeInputHandler,value:this.props.items.activeUser.position||"",disabled:0===Object.keys(this.props.items.activeUser).length,children:D.map((function(e,t){return Object(c.jsx)("option",{value:e,children:e},t)}))}),Object(c.jsxs)("div",{className:"form-group ",children:[Object(c.jsx)("div",{className:"mb-3"}),Object(c.jsx)("input",{className:"form-control",type:"date",id:"example-date-input",name:"birthDay",onChange:this.changeInputHandler,value:this.props.items.activeUser.birthDay||"",disabled:0===Object.keys(this.props.items.activeUser).length,onKeyDown:function(e){return e.preventDefault()}})]}),Object(c.jsxs)("div",{className:"radio",children:[Object(c.jsxs)("div",{className:"form-check",children:[Object(c.jsx)("input",{className:"form-check-input",type:"radio",id:"flexRadioDefault1",name:"sex",onChange:this.changeInputHandler,checked:this.props.items.activeUser.sex||"",disabled:0===Object.keys(this.props.items.activeUser).length}),Object(c.jsx)("label",{className:"form-check-label",htmlFor:"flexRadioDefault1",children:"\u041c"})]}),Object(c.jsxs)("div",{className:"form-check radio_elem",children:[Object(c.jsx)("input",{className:"form-check-input ",type:"radio",id:"flexRadioDefault1",name:"sex",onChange:this.changeInputHandler,checked:!this.props.items.activeUser.sex||"",disabled:0===Object.keys(this.props.items.activeUser).length}),Object(c.jsx)("label",{className:"form-check-label",htmlFor:"flexRadioDefault1",children:"\u0416"})]})]}),Object(c.jsxs)("div",{className:"form-check checkbox",children:[Object(c.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexCheckDefault",name:"fired",onChange:this.changeInputHandler,checked:this.props.items.activeUser.fired||"",disabled:0===Object.keys(this.props.items.activeUser).length}),Object(c.jsx)("label",{className:"form-check-label",htmlFor:"flexCheckDefault",children:"\u0423\u0432\u043e\u043b\u0435\u043d"})]}),Object(c.jsxs)("div",{className:"buttons",children:[Object(c.jsx)("button",{type:"button",className:"btn btn-success",onClick:this.submitHandler,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u043e\u0433\u043e \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430"}),Object(c.jsx)("button",{type:"button",className:"btn btn-danger",onClick:this.deleteUser,disabled:0===Object.keys(this.props.items.activeUser).length,children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u0433\u043e \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430"})]})]})}}]),s}(i.a.Component),w={createNewUser:O,deleteUser:function(e){return{type:p,payload:e}},changeInfo:function(e){return{type:j,payload:e}},userInfo:f},E=Object(o.b)((function(e){return{items:e.items}}),w)(I);var C=function(){var e=i.a.useState(null),t=Object(l.a)(e,2),s=t[0],a=t[1];return Object(c.jsx)("div",{className:"wrapper",children:Object(c.jsxs)("div",{className:"windows",children:[Object(c.jsx)(v,{className:"EmployeeTable",active:s,setActive:a}),Object(c.jsx)(E,{className:"FormForEditing",active:s,setActive:a})]})})},_=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,30)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,n=t.getTTFB;s(e),c(e),a(e),i(e),n(e)}))},F=s(4),S={items:[{id:1,FIO:"\u0428\u043d\u0443\u0440\u043e\u0432 \u0412.\u0410",position:"\u0421\u0442\u0430\u0440\u0448\u0438\u0439 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a",birthDay:"1998-05-13",sex:!0,fired:!1},{id:2,FIO:"\u0422\u0435\u0440\u043a\u0438\u043d \u0410.\u0410",position:"\u041c\u043b\u0430\u0434\u0448\u0438\u0439 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a",birthDay:"1972-03-14",sex:!0,fired:!1},{id:3,FIO:"\u0421\u043c\u043e\u043b\u0438\u043d \u0423.\u0412",position:"\u042d\u0439\u0447\u0430\u0440",birthDay:"1956-07-22",sex:!1,fired:!0},{id:4,FIO:"\u0428\u0430\u0440\u0430\u043f\u043e\u0432\u0430 \u0417.\u0415",position:"\u0423\u0431\u043e\u0440\u0449\u0438\u043a",birthDay:"1923-07-22",sex:!1,fired:!1}],activeUser:{}},H=Object(F.b)({items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(N.a)(Object(N.a)({},e),{},{items:e.items.concat([t.payload])});case p:return Object(N.a)(Object(N.a)({},e),{},{items:e.items.filter((function(e){return e.id!==t.payload.id}))});case u:return Object(N.a)(Object(N.a)({},e),{},{activeUser:t.payload});case j:return Object(N.a)(Object(N.a)({},e),{},{items:e.items.map((function(e){return e.id===t.payload.id?(e[t.payload.box]=t.payload.newValue,e):e}))});default:return e}}}),A=Object(F.d)(H,Object(F.c)(window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),R=Object(c.jsx)(o.a,{store:A,children:Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(C,{})})});r.a.render(R,document.getElementById("root")),_()}},[[29,1,2]]]);
//# sourceMappingURL=main.a4285c79.chunk.js.map