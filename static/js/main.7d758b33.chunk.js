(this["webpackJsonpaffiliate-react"]=this["webpackJsonpaffiliate-react"]||[]).push([[0],{356:function(e,t,a){},357:function(e,t,a){},437:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(15),o=a.n(c),r=(a(356),a(334)),s=a(335),l=a(339),d=a(338),h=(a(357),a(14));function b(e){var t=e.title;return Object(h.jsx)("div",{children:Object(h.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(h.jsxs)("div",{className:"container-fluid",children:[Object(h.jsx)("a",{className:"navbar-brand",href:"#",children:t}),Object(h.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(h.jsx)("span",{className:"navbar-toggler-icon"})}),Object(h.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(h.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("a",{className:"nav-link",href:"#",children:"Link"})}),Object(h.jsxs)("li",{className:"nav-item dropdown",children:[Object(h.jsx)("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Dropdown"}),Object(h.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"dropdown-item",href:"#",children:"Action"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"dropdown-item",href:"#",children:"Another action"})}),Object(h.jsx)("li",{children:Object(h.jsx)("hr",{className:"dropdown-divider"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"dropdown-item",href:"#",children:"Something else here"})})]})]}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("a",{className:"nav-link disabled",href:"#",tabindex:"-1","aria-disabled":"true",children:"Disabled"})})]}),Object(h.jsxs)("form",{className:"d-flex",children:[Object(h.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(h.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]})]})]})})})}var j=a(227),u=a(131),f=a.n(u),m=(a(220),function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),i=t[0],c=t[1],o=Object(n.useState)([]),r=Object(j.a)(o,2),s=r[0],l=r[1];Object(n.useEffect)((function(){(e=a(220))({method:"post",url:"https://welcomecure.com/DataProvider/API/Affiliate/AffDoctorPatientlist",headers:{UserName:"WelcomeWebApi",Password:"welcomecure123",Authorization:"Basic WDVPMFgxSDIwSWo3WjI2WXJhanowZGFpcmNpczczbnk3MjNmYzlUM3U3WktaTnZIaW5WbmNTbWt0V1FuM3BYQTdUd1hWZ2d6ckNkOlRVakxoTzVqNGFOM1V0bzYydDkzaHZ5ZDlNNktEUg=="},data:t=""}).then((function(e){c(e.data.Data.AccessToken)})).catch((function(e){console.log(e)}));var e=a(220),t=JSON.stringify({StartRow:0,PageSize:1e5,SearchText1:"",SearchText2:"",SearchText3:"",SearchText4:"",_ContactType:"",UserId:1222290});e({method:"post",url:"https://welcomecure.com/DataProvider/API/Affiliate/AffDoctorPatientlist",headers:{"Content-Type":"application/json",UserName:"WelcomeWebApi",Password:"welcomecure123",AccessToken:{tempdata:i}},data:t}).then((function(e){console.log(JSON.stringify(e.data)),l(e.data.Data)})).catch((function(e){console.log(e)}))}),[]);return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(f.a,{title:"Doctor Patients List",data:s,columns:[{title:"Patient Name",field:"Name"},{title:"Patient Reg No.",field:"PatientNo"},{title:"Email Id",field:"EmailId"},{title:"Mobile No.",field:"MobileNo"}],options:{search:!0,filtering:!0,exportButton:!0}})})}),p=function(){return Object(h.jsx)("div",{children:Object(h.jsx)(f.a,{title:"Patient List",data:[{name:"Pratik",age:22},{name:"john",age:26},{name:"Balaram",age:27}],columns:[{title:"Patient Name",field:"name"},{title:"Age",field:"age"}],options:{search:!0,filtering:!0,exportButton:!0}})})},v=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state={users:null,Calls:null},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(b,{title:"Affiliate Header"}),Object(h.jsx)(m,{}),Object(h.jsx)(p,{}),Object(h.jsx)("h1",{className:"text-center",children:"Fetch Data From Get Api Url"})]})}}]),a}(n.Component),g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function x(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/AffiliateReactProject",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/AffiliateReactProject","/service-worker.js");g?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):x(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):x(t,e)}))}}()}},[[437,1,3]]]);
//# sourceMappingURL=main.7d758b33.chunk.js.map