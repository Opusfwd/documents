"use strict";(self.webpackChunksmart_documents=self.webpackChunksmart_documents||[]).push([[7270],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=i,f=c["".concat(u,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2793:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const o={},a=void 0,l={unversionedId:"underWriteMe/enquiryDefinition",id:"underWriteMe/enquiryDefinition",title:"enquiryDefinition",description:"enquiryDefinition",source:"@site/documents/smart/underWriteMe/enquiryDefinition.md",sourceDirName:"underWriteMe",slug:"/underWriteMe/enquiryDefinition",permalink:"/documents/smart/underWriteMe/enquiryDefinition",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"deployments",permalink:"/documents/smart/underWriteMe/deployments"},next:{title:"getPreUWSubmission",permalink:"/documents/smart/underWriteMe/getPreUWSubmission"}},u={},p=[{value:"enquiryDefinition",id:"enquirydefinition",level:3}],s={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"enquirydefinition"},"enquiryDefinition"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"API")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Config.UWWSERVER + '/enquiryDefinition' + \"/FWD_MY_IFA/IFA_Rulebook_V1b\""))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Header")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"userId: 'svc_smart'"),(0,i.kt)("li",{parentName:"ul"},"token: '44181e1f9e27a8012df8537fb56cb6e484e05f83',"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"downloadFile")," "),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"const dir = RNFS.DocumentDirectoryPath;\nconst downloadDest = `${dir}/${(Math.random() * 10000000) | 0}.zip`;\nconst fromUrl = APIS.downloadRuleZip.remoteUrl + rule;\nconst ret = RNFS.downloadFile({\n  fromUrl,\n  toFile: downloadDest,\n  headers: HEADER,\n  background: true,\n  progressDivider: 5,\n  begin: res => {\n    console.log('registerRule begin: ', res);\n  },\n  progress: res => {\n    console.log('registerRule progress: ', res);\n  },\n});\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Response")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"{\n    statusCode: 200\n}\n")))))}m.isMDXComponent=!0}}]);