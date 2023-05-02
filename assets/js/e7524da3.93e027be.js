"use strict";(self.webpackChunksmart_documents=self.webpackChunksmart_documents||[]).push([[6069],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,g=d["".concat(p,".").concat(m)]||d[m]||s[m]||i;return r?n.createElement(g,l(l({ref:t},c),{},{components:r})):n.createElement(g,l({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3793:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const i={tag:"standard/project",order:2,title:"git \u5de5\u5177\u4e0e\u64cd\u4f5c",group:{title:"\u9879\u76ee"},nav:{title:"\u89c4\u8303"}},l=void 0,o={unversionedId:"git/standard-git",id:"git/standard-git",title:"git \u5de5\u5177\u4e0e\u64cd\u4f5c",description:"\u7edf\u4e00git\u5de5\u5177",source:"@site/documents/standard/git/standard-git.md",sourceDirName:"git",slug:"/git/standard-git",permalink:"/documents/standard/git/standard-git",draft:!1,tags:[],version:"current",frontMatter:{tag:"standard/project",order:2,title:"git \u5de5\u5177\u4e0e\u64cd\u4f5c",group:{title:"\u9879\u76ee"},nav:{title:"\u89c4\u8303"}},sidebar:"api",previous:{title:"git \u6587\u4ef6\u56de\u6eda",permalink:"/documents/standard/git/git-rollback"},next:{title:"git\u63d0\u4ea4\u89c4\u8303",permalink:"/documents/standard/git/standard-process"}},p={},u=[{value:"\u7edf\u4e00git\u5de5\u5177",id:"\u7edf\u4e00git\u5de5\u5177",level:2},{value:"\u76ee\u6807",id:"\u76ee\u6807",level:2},{value:"\u7b80\u5316\u64cd\u4f5c\u603b\u7ed3",id:"\u7b80\u5316\u64cd\u4f5c\u603b\u7ed3",level:2}],c={toc:u},d="wrapper";function s(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u7edf\u4e00git\u5de5\u5177"},"\u7edf\u4e00git\u5de5\u5177"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"git tortoisegit")),(0,a.kt)("p",null,"  \u539f\u56e0\uff1a\u7528\u522b\u7684\u5de5\u5177\uff0c\u81e3\u59be\u4e0d\u4f1a\uff1b\u51fa\u4e86\u95ee\u9898\uff0c\u81e3\u59be\u505a\u4e0d\u5230\u5440\u3002"),(0,a.kt)("h2",{id:"\u76ee\u6807"},"\u76ee\u6807"),(0,a.kt)("p",null,"  \u4e0d\u7ba1\u9047\u5230\u591a\u4e48\u5947\u8469\u7684\u573a\u666f\uff0c\u5408\u5e76\u90fd\u5e94\u8be5\u5728\u5206\u5206\u949f\u641e\u5b9a\uff0c\u4e0d\u7528\u601d\u8003\u3002"),(0,a.kt)("h2",{id:"\u7b80\u5316\u64cd\u4f5c\u603b\u7ed3"},"\u7b80\u5316\u64cd\u4f5c\u603b\u7ed3"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u628adevelop\u5206\u652f\u5408\u5e76\u5230develop_yours\u5206\u652f\u524d\uff0c\u8981\u8fd9\u6837\u505a\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"commit\u5e76push\u81ea\u5df1\u7684\u5206\u652f")),(0,a.kt)("li",{parentName:"ul"},"\u62c9\u53d6\u4ee3\u7801"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5408\u5e76\u9047\u5230\u51b2\u7a81\u65f6\uff0c\u8981\u8fd9\u6837\u505a\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u81ea\u5df1\u6ca1\u6539\u8fc7\u7684\u6587\u4ef6\uff0c\u91c7\u7528orgin/develop\u8fdc\u7aef\u5206\u652f")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u81ea\u5df1\u6539\u8fc7\u7684\u6587\u4ef6\uff0c\u4f18\u5148\u7528\u81ea\u5df1\u7684\uff0c\u5e76\u901a\u77e5\u4e00\u4e0b\u5bf9\u65b9\uff0c\u4ee5\u793a\u5c0a\u91cd")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"\u5408\u5e76\u4e0d\u5f53\uff0c\u53ef\u4ee5\u4f7f\u7528\u7ed3\u675f\u5408\u5e76\u64cd\u4f5c"),"\uff0c\u6216\u65b0\u5f00\u4e00\u4e2a\u6587\u4ef6\u3001\u514b\u9686\u4ee3\u7801\u3001\u91cd\u65b0\u6765\u8fc7\u3002")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5f53\u524d\u5206\u652f\u5f00\u53d1\u8fc7\u7a0b\u4e2d\uff0c\u4e0d\u8981\u5728\u6b64\u6587\u4ef6\u5939\u91cc\u5207\u6362\u5206\u652f"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u9700\u8981\u64cd\u4f5c\u5176\u4ed6\u5206\u652f\uff0c\u53e6\u5f00\u4e00\u4e2a\u6587\u4ef6\u5939"),(0,a.kt)("li",{parentName:"ul"},"\u56e0\u4e3a\u6b64\u5206\u652f\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u7684\u6539\u52a8\uff0c\u5f88\u5bb9\u6613\u4f1a\u88ab\u5e26\u5230\u5176\u4ed6\u5206\u652f")))))}s.isMDXComponent=!0}}]);