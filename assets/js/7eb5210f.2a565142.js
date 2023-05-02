"use strict";(self.webpackChunksmart_documents=self.webpackChunksmart_documents||[]).push([[900],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),l=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,g=u["".concat(i,".").concat(m)]||u[m]||d[m]||r;return n?o.createElement(g,s(s({ref:t},p),{},{components:n})):o.createElement(g,s({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:a,s[1]=c;for(var l=2;l<r;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5246:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:1},s="postman \u83b7\u53d6 token \u8bbe\u7f6e",c={unversionedId:"ProjectDevelopment/postman",id:"ProjectDevelopment/postman",title:"postman \u83b7\u53d6 token \u8bbe\u7f6e",description:"\u5bf9\u6b64\u6587\u7ae0 \u6709\u4efb\u4f55\u95ee\u9898\u53ef\u8054\u7cfb Daniel Wu",source:"@site/documents/cube/ProjectDevelopment/postman.md",sourceDirName:"ProjectDevelopment",slug:"/ProjectDevelopment/postman",permalink:"/documents/cube/ProjectDevelopment/postman",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"api",previous:{title:"\u9879\u76ee\u5f00\u53d1",permalink:"/documents/cube/ProjectDevelopment/"}},i={},l=[{value:"First time login",id:"first-time-login",level:2},{value:"Subsequent login",id:"subsequent-login",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"postman-\u83b7\u53d6-token-\u8bbe\u7f6e"},"postman \u83b7\u53d6 token \u8bbe\u7f6e"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5bf9\u6b64\u6587\u7ae0 \u6709\u4efb\u4f55\u95ee\u9898\u53ef\u8054\u7cfb Daniel Wu")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u63a5\u53e3\u7684\u8c03\u8bd5\u4e2d\u9700\u8981\u4f7f\u7528 postman \u8fdb\u884c\u8c03\u8bd5\uff0c\u9996\u5148\u9700\u8981\u8fdb\u884c token \u7684\u8bbe\u7f6e\nPS: Client ID, Client Secret. \u8fd9\u4e24\u4e2a\u9700\u8981\u627e Tony \u83b7\u53d6")),(0,a.kt)("p",null,"For login credentials, please refer to Cube Link Reference"),(0,a.kt)("p",null,"Since token validation has been implemented in cube-api-gateway, it requires legitimate access_token to request resources from backend. Below are the instructions for how to test Cube backend using postman."),(0,a.kt)("h2",{id:"first-time-login"},"First time login"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click on collection title and you will see ",(0,a.kt)("strong",{parentName:"li"},"Authorization")," config tab")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u56fe\u7247",src:n(7673).Z,width:"291",height:"381"}),"\n",(0,a.kt)("img",{alt:"\u56fe\u7247",src:n(8842).Z,width:"616",height:"191"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Set configs as pic (copy the values below)")),(0,a.kt)("p",null,"Callback URL: th.com.fwd.cube.sit://login/okta"),(0,a.kt)("p",null,"Auth URL: ",(0,a.kt)("a",{parentName:"p",href:"https://iam.uat.fwd.co.th/auth/realms/insurance/protocol/openid-connect/auth?kc_idp_hint=fwd-agent"},"https://iam.uat.fwd.co.th/auth/realms/insurance/protocol/openid-connect/auth?kc_idp_hint=fwd-agent")),(0,a.kt)("p",null,"Access Token URL: ",(0,a.kt)("a",{parentName:"p",href:"https://iam.uat.fwd.co.th/auth/realms/insurance/protocol/openid-connect/token"},"https://iam.uat.fwd.co.th/auth/realms/insurance/protocol/openid-connect/token")),(0,a.kt)("p",null,"Client ID: \u9700\u8981\u8054\u7cfb Tony \u83b7\u53d6"),(0,a.kt)("p",null,"Client Secret: \u9700\u8981\u8054\u7cfb Tony \u83b7"),(0,a.kt)("p",null,"Scope: openid offline_access"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u56fe\u7247",src:n(2227).Z,width:"765",height:"624"}),"\n",(0,a.kt)("img",{alt:"\u56fe\u7247",src:n(6035).Z,width:"748",height:"591"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Press on Get New Access Token at the bottom to start authentication\n",(0,a.kt)("img",{alt:"\u56fe\u7247",src:n(6254).Z,width:"168",height:"46"}))),(0,a.kt)("p",null,"4.Enter credentials and OTP\n",(0,a.kt)("img",{alt:"\u56fe\u7247",src:n(427).Z,width:"1602",height:"1206"}),"\n",(0,a.kt)("img",{alt:"\u56fe\u7247",src:n(6672).Z,width:"1588",height:"1188"})),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Click on Proceed and Use Toke\n",(0,a.kt)("img",{alt:"\u56fe\u7247",src:n(8796).Z,width:"802",height:"461"}),"\nThen you should be able to set the access token for your collection. If you see 401 unauthorized error it should be your access token expired. Please click on Get New Access Token again to retrieve a new access token. For HTTP request please set Authorization type as Inherit auth from parent\n",(0,a.kt)("img",{alt:"\u56fe\u7247",src:n(5280).Z,width:"353",height:"193"}))),(0,a.kt)("h2",{id:"subsequent-login"},"Subsequent login"),(0,a.kt)("p",null,"You may click on ",(0,a.kt)("strong",{parentName:"p"},"Get New Access Token")," button again, it will automatically finish authentication if current session is not expired. You may also use the refresh token to refresh and get a new access token."),(0,a.kt)("p",null,"Url: ",(0,a.kt)("a",{parentName:"p",href:"https://iam.uat.fwd.co.th/auth/realms/insurance/protocol/openid-connect/token"},"https://iam.uat.fwd.co.th/auth/realms/insurance/protocol/openid-connect/token")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u56fe\u7247",src:n(5630).Z,width:"1356",height:"514"}),"\n",(0,a.kt)("img",{alt:"\u56fe\u7247",src:n(1216).Z,width:"1796",height:"780"})),(0,a.kt)("p",null,"After getting the new access_token please go back to collection authentication tab and paste the new token in Access Token field for it to be reflected to postman HTTP requests"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u56fe\u7247",src:n(398).Z,width:"1116",height:"444"})))}d.isMDXComponent=!0},7673:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/1_1-c7dd7b39fd7417eadcdffd2bebbd058b.png"},5630:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/1_10-455e2812e72a3439eb960d540e0454a7.png"},1216:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/1_11-0de429eb0e579a16b7a54c1d5f8679a7.png"},398:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/1_12-1f619bf83ebfb216b7cb5211811eea40.png"},8842:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/1_2-a490500130141dcb217f43d17112cb10.png"},2227:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/1_3-bfd929eaafb71388a9c92a9e4e8cfac0.png"},6035:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/1_4-e9a4da267860f6129e677736ae8ebaab.png"},6254:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,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"},427:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/1_6-ca2587a1a3fef12d2e23e89b91dc2f23.png"},6672:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/1_7-efdb11fa35b0396f3c13a0336ab9552e.png"},8796:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/1_8-75a0367538dfa53396f32e01cbbd2388.png"},5280:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/1_9-e48de12831115a107ca1417c80e9ccac.png"}}]);