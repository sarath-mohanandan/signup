(this["webpackJsonptalent-login"]=this["webpackJsonptalent-login"]||[]).push([[0],{100:function(e,t,n){},206:function(e,t,n){},209:function(e,t,n){},210:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(26),c=n.n(s),i=(n(100),n(27)),l=n.n(i),o=n(41),m=n(93),u=n(218),d=n(214),j=n(21),b=function(){return j.a().shape({first_name:j.b().required("First Name  is mandatory"),last_name:j.b().required("Last Name  is mandatory"),username:j.b().required("User Name  is mandatory"),email:j.b().required("Email is mandatory").email("Invalid email"),password:j.b().required("Password  is mandatory"),timezone:j.b().required("Time zone  is mandatory")})},h=n(2),p=function(e){var t=e.onSubmit,n=e.initialValues,a=void 0===n?{}:n;return Object(h.jsx)(m.a,{initialValues:a,validationSchema:b,onSubmit:t,children:function(e){var t=e.values,n=e.errors,a=e.touched,r=e.handleChange,s=e.handleBlur,c=e.handleSubmit;e.isSubmitting;return Object(h.jsxs)(u.a,{className:"form",onSubmit:c,children:[Object(h.jsxs)(u.a.Group,{className:"md-4 ",children:[Object(h.jsx)(u.a.Label,{children:"First Name*"}),Object(h.jsx)(u.a.Control,{type:"text",name:"first_name",value:t.first_name,placeholder:"First Name",onChange:r,onBlur:s}),n.first_name&&a.first_name?Object(h.jsx)("div",{children:n.first_name}):null]}),Object(h.jsxs)(u.a.Group,{children:[Object(h.jsx)(u.a.Label,{children:"Last Name*"}),Object(h.jsx)(u.a.Control,{type:"text",name:"last_name",value:t.last_name,placeholder:"Last Name",onChange:r,onBlur:s}),n.first_name&&a.first_name?Object(h.jsx)("div",{children:n.first_name}):null]}),Object(h.jsxs)(u.a.Group,{children:[Object(h.jsx)(u.a.Label,{children:"Email*"}),Object(h.jsx)(u.a.Control,{type:"email",name:"email",value:t.email,placeholder:"Email",onChange:r,onBlur:s}),n.first_name&&a.first_name?Object(h.jsx)("div",{children:n.first_name}):null]}),Object(h.jsxs)(u.a.Group,{children:[Object(h.jsx)(u.a.Label,{children:"Username*"}),Object(h.jsx)(u.a.Control,{type:"text",name:"username",value:t.username,placeholder:"name@example.com",onChange:r,onBlur:s}),n.first_name&&a.first_name?Object(h.jsx)("div",{children:n.first_name}):null]}),Object(h.jsxs)(u.a.Group,{children:[Object(h.jsx)(u.a.Label,{children:"Time Zone*"}),Object(h.jsxs)(u.a.Control,{as:"select",name:"timezone",value:t.timezone,placeholder:"name@example.com",onChange:r,onBlur:s,children:[Object(h.jsx)("option",{children:"America/New_York"}),Object(h.jsx)("option",{children:"India/Koltata"})]}),n.timezone&&a.timezone?Object(h.jsx)("div",{children:n.timezone}):null]}),Object(h.jsxs)(u.a.Group,{children:[Object(h.jsx)(u.a.Label,{children:"Password*"}),Object(h.jsx)(u.a.Control,{type:"password",name:"password",value:t.password,placeholder:"password",onChange:r,onBlur:s}),n.password&&a.password?Object(h.jsx)("div",{children:n.password}):null]}),Object(h.jsx)("div",{className:"btn-wrap mt-2 d-flex justify-content-center align-items-center",children:Object(h.jsx)(d.a,{variant:"primary",type:"submit",children:"Submit"})})]})}})},x=n(5),f=n(94),O=function(e){var t=e.path,n=e.body,a=Object(f.a)(e,["path","body"]);return fetch("".concat("https://apidev.fanconvo.com/api/v3").concat(t),Object(x.a)({body:n?JSON.stringify(n):null,headers:{"Content-Type":"application/json"}},a)).then((function(e){return e.json()})).catch((function(e){return e}))},g=n(215),v=function(){var e=function(){var e=Object(o.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={path:"/sign-up/fan",method:"POST",body:t},e.prev=1,e.next=4,O(n);case 4:(a=e.sent)&&(200!==a.code&&alert("signup error"),a.message&&alert(a.message)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("err",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)(g.a,{className:"signup-container d-flex flex-column align-items-center justify-content-center",children:[Object(h.jsx)("h3",{className:"title mt-2",children:"Create Your Fan Account "}),Object(h.jsx)(p,{initialValues:{first_name:"Test user",last_name:"Testing",username:"tester-ht",email:"tester-ht@gmail.com",password:"Password12#",timezone:"America/New_York",captcha:!0},onSubmit:e})]})},y=function(){var e=function(){var e=Object(o.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={path:"/sign-up/talent",method:"POST",body:t},e.prev=1,e.next=4,O(n);case 4:200!==(a=e.sent).code&&alert("signup error"),a.message&&alert(a.message),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("err",e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)(g.a,{className:"signup-container d-flex flex-column align-items-center justify-content-center",children:[Object(h.jsx)("h3",{className:"title mt-2",children:"Create Your Talent Account"}),Object(h.jsx)(p,{initialValues:{first_name:"Test user",last_name:"Testing",username:"tester-ht",email:"tester-ht@gmail.com",password:"Password12#",timezone:"America/New_York",captcha:!0},onSubmit:e})]})},N=n(217),w=n(61),_=n(216),C=n(90),S=n.p+"static/media/Fanconvo-header-logo.c4ba8d22.png",T=(n(206),function(){return Object(h.jsxs)(g.a,{className:"header",children:[Object(h.jsx)(_.a,{className:"mt-2",children:Object(h.jsxs)(C.a,{className:"d-flex justify-content-between",children:[Object(h.jsx)("img",{className:"logo",src:S,alt:"logo"}),Object(h.jsx)("span",{children:"Signup Login"})]})}),Object(h.jsx)(_.a,{})]})});var L=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(g.a,{children:[Object(h.jsx)(T,{}),Object(h.jsx)(g.a,{className:"form-tabs",children:Object(h.jsxs)(N.a,{defaultActiveKey:"fan",className:"form-tabs",id:"uncontrolled-tab",children:[Object(h.jsx)(w.a,{eventKey:"fan",className:"custom-tab",title:"FAN SIGNUP",children:Object(h.jsx)(v,{})}),Object(h.jsx)(w.a,{eventKey:"talent",title:"TALENT SIGNUP",children:Object(h.jsx)(g.a,{className:"App",children:Object(h.jsx)(y,{})})})]})})]})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,219)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))};n(208),n(209);c.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(L,{})}),document.getElementById("root")),F()}},[[210,1,2]]]);
//# sourceMappingURL=main.0517671a.chunk.js.map