"use strict";(self.webpackChunktmp=self.webpackChunktmp||[]).push([[3868],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,g=d["".concat(p,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9064:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={sidebar_position:5},p="Plugin",c={unversionedId:"build-tool/plugin",id:"build-tool/plugin",title:"Plugin",description:"goctl supports custom plugins for api, so how do I customize a plugin? Take a look at an example of how to use it in the end below.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/build-tool/plugin.md",sourceDirName:"build-tool",slug:"/build-tool/plugin",permalink:"/zero-doc/en/docs/build-tool/plugin",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Build Model",permalink:"/zero-doc/en/docs/build-tool/model"},next:{title:"Template",permalink:"/zero-doc/en/docs/build-tool/template"}},u=[{value:"How to write custom plug-ins?",id:"how-to-write-custom-plug-ins",children:[],level:2}],s={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"plugin"},"Plugin"),(0,i.kt)("p",null,"goctl supports custom plugins for api, so how do I customize a plugin? Take a look at an example of how to use it in the end below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'$ goctl api plugin -p goctl-android="android -package com.tal" -api user.api -dir .\n')),(0,i.kt)("p",null,"The above command can be broken down into the following steps."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"goctl parses the api file"),(0,i.kt)("li",{parentName:"ul"},"goctl passes the parsed structure ApiSpec and parameters to the goctl-android executable"),(0,i.kt)("li",{parentName:"ul"},"goctl-android generates custom logic based on the ApiSpec structure.")),(0,i.kt)("p",null,'The first part of this command goctl api plugin -p is a fixed parameter, goctl-android="android -package com.tal" is the plugin parameter, where goctl-android is the plugin binary, android -package com.tal is the custom parameter of the plugin parameter, -api user.api -dir . is the goctl generic custom parameter.'),(0,i.kt)("h2",{id:"how-to-write-custom-plug-ins"},"How to write custom plug-ins?"),(0,i.kt)("p",null,"The go-zero framework includes a very simple custom plugin demo with the following code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="plugin.go"',title:'"plugin.go"'},'package main\n\nimport (\n    "fmt"\n    \n    "github.com/tal-tech/go-zero/tools/goctl/plugin"\n)\n\nfunc main() {\n    plugin, err := plugin.NewPlugin()\n    if err != nil {\n        panic(err)\n    }\n    if plugin.Api != nil {\n        fmt.Printf("api: %+v \\n", plugin.Api)\n    }\n    fmt.Printf("dir: %s \\n", plugin.Dir)\n    fmt.Println("Enjoy anything you want.")\n}\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"plugin, err := plugin.NewPlugin()")," This line of code serves to parse the data passed from goctl, which contains the following parts."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type Plugin struct {\n    Api   *spec.ApiSpec\n    Style string\n    Dir   string\n}\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Api: defines the structure data of the api file"),(0,i.kt)("p",{parentName:"div"},"Style: optional parameter that can be used to control the file naming convention"),(0,i.kt)("p",{parentName:"div"},"Dir: working directory"))),(0,i.kt)("p",null,"The complete plugin-based implementation of the android plugin demo project\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/zeromicro/goctl-android"},"https://github.com/zeromicro/goctl-android")))}d.isMDXComponent=!0}}]);