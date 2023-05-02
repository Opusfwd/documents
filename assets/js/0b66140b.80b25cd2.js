"use strict";(self.webpackChunksmart_documents=self.webpackChunksmart_documents||[]).push([[8005],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>k});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),c=u(n),s=a,k=c["".concat(p,".").concat(s)]||c[s]||m[s]||l;return n?r.createElement(k,o(o({ref:e},d),{},{components:n})):r.createElement(k,o({ref:e},d))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[c]="string"==typeof t?t:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},640:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={tag:"introduction/introduction",order:1,title:"VSCode Configuration",group:{title:"\u5f00\u53d1\u73af\u5883",order:0},nav:{title:"\u89c4\u8303"}},o=void 0,i={unversionedId:"index",id:"index",title:"VSCode Configuration",description:"\u8d44\u6e90\u4e0b\u8f7d",source:"@site/documents/standard/index.md",sourceDirName:".",slug:"/",permalink:"/standard/",draft:!1,tags:[],version:"current",frontMatter:{tag:"introduction/introduction",order:1,title:"VSCode Configuration",group:{title:"\u5f00\u53d1\u73af\u5883",order:0},nav:{title:"\u89c4\u8303"}},sidebar:"api",previous:{title:"git\u63d0\u4ea4\u89c4\u8303",permalink:"/standard/git/standard-process"},next:{title:"ES6",permalink:"/standard/introduction-es6"}},p={},u=[{value:"\u8d44\u6e90\u4e0b\u8f7d",id:"\u8d44\u6e90\u4e0b\u8f7d",level:2},{value:"VSCode \u914d\u7f6e",id:"vscode-\u914d\u7f6e",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2}],d={toc:u},c="wrapper";function m(t){let{components:e,...n}=t;return(0,a.kt)(c,(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u8d44\u6e90\u4e0b\u8f7d"},"\u8d44\u6e90\u4e0b\u8f7d"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"IDE\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"VSCode"))),(0,a.kt)("h2",{id:"vscode-\u914d\u7f6e"},"VSCode \u914d\u7f6e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5fc5\u5907\u63d2\u4ef6"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7528\u9014"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EditorConfig for VS Code"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7f16\u8f91\u5668\u914d\u7f6e ",(0,a.kt)("a",{parentName:"td",href:"https://www.jianshu.com/p/00ac7bd5e74e"},".editorConfig"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ESLint"),(0,a.kt)("td",{parentName:"tr",align:null},"js\u3001ts \u4ee3\u7801\u89c4\u8303")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"stylelint"),(0,a.kt)("td",{parentName:"tr",align:null},"css\u3001less \u4ee3\u7801\u89c4\u8303")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Prettier"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4ee3\u7801\u683c\u5f0f\u5316")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"GitLens"),(0,a.kt)("td",{parentName:"tr",align:null},"Git \u5de5\u5177\uff0c\u7528\u4e8e\u51b2\u7a81\u5904\u7406\u65f6\u66f4\u6613\u9605\u8bfb")))),(0,a.kt)("br",null),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53ef\u9009\u63d2\u4ef6"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7528\u9014"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Chinese (Simplified) Language Pack"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4e2d\u6587\u5305")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TabNine"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4eba\u5de5\u667a\u80fd\u4ee3\u7801\u63d0\u793a\uff0c\u63d0\u9ad8\u5f00\u53d1\u6548\u7387")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Markdown All in One"),(0,a.kt)("td",{parentName:"tr",align:null},"Markdown \u5b9e\u65f6\u9884\u89c8")))),(0,a.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Ctrl + , \u8fdb\u5165\u8bbe\u7f6e\uff0c\u5f00\u542f VsCode \u81ea\u5e26\u7684 JS \u548c TS \u6821\u9a8c"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"javascript.validate.enable: true"),(0,a.kt)("li",{parentName:"ul"},"typescript.validate.enable: true"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u9700\u8981\u5728 VsCode \u5e95\u90e8\u72b6\u6001\u680f\u624b\u52a8\u5f00\u542f ESLint")))}m.isMDXComponent=!0}}]);