"use strict";(self.webpackChunktmp=self.webpackChunktmp||[]).push([[5635],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),g=u(r),d=o,m=g["".concat(l,".").concat(d)]||g[d]||p[d]||a;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},8273:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return g}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={sidebar_position:3},l="Build API",u={unversionedId:"quick-start/build-api",id:"quick-start/build-api",title:"Build API",description:"Create greet service",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/quick-start/build-api.md",sourceDirName:"quick-start",slug:"/quick-start/build-api",permalink:"/zero-doc/en/docs/quick-start/build-api",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Build Tool",permalink:"/zero-doc/en/docs/quick-start/build-tool"},next:{title:"Build RPC",permalink:"/zero-doc/en/docs/quick-start/build-rpc"}},s=[{value:"Create greet service",id:"create-greet-service",children:[],level:3},{value:"Writing logic",id:"writing-logic",children:[],level:3},{value:"Start and access the service",id:"start-and-access-the-service",children:[],level:3},{value:"Source Code",id:"source-code",children:[],level:3}],p={toc:s};function g(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"build-api"},"Build API"),(0,a.kt)("h3",{id:"create-greet-service"},"Create greet service"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd ~/go-zero-demo\n$ go mod init go-zero-demo\n$ goctl api new greet\nDone.\n")),(0,a.kt)("p",null,"Take a look at the structure of the ",(0,a.kt)("inlineCode",{parentName:"p"},"greet")," service"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd greet\n$ tree\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},".\n\u251c\u2500\u2500 etc\n\u2502\xa0\xa0 \u2514\u2500\u2500 greet-api.yaml\n\u251c\u2500\u2500 greet.api\n\u251c\u2500\u2500 greet.go\n\u2514\u2500\u2500 internal\n    \u251c\u2500\u2500 config\n    \u2502\xa0\xa0 \u2514\u2500\u2500 config.go\n    \u251c\u2500\u2500 handler\n    \u2502\xa0\xa0 \u251c\u2500\u2500 greethandler.go\n    \u2502\xa0\xa0 \u2514\u2500\u2500 routes.go\n    \u251c\u2500\u2500 logic\n    \u2502\xa0\xa0 \u2514\u2500\u2500 greetlogic.go\n    \u251c\u2500\u2500 svc\n    \u2502\xa0\xa0 \u2514\u2500\u2500 servicecontext.go\n    \u2514\u2500\u2500 types\n        \u2514\u2500\u2500 types.go\n")),(0,a.kt)("p",null,"As you can see from the above directory structure, the ",(0,a.kt)("inlineCode",{parentName:"p"},"greet"),' service is small, but it has all the "guts". Next we can write the business code in ',(0,a.kt)("inlineCode",{parentName:"p"},"greetlogic.go"),"."),(0,a.kt)("h3",{id:"writing-logic"},"Writing logic"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim ~/go-zero-demo/greet/internal/logic/greetlogic.go \n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func (l *GreetLogic) Greet(req types.Request) (*types.Response, error) {\n    return &types.Response{\n        Message: "Hello go-zero",\n    }, nil\n}\n')),(0,a.kt)("h3",{id:"start-and-access-the-service"},"Start and access the service"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Start-up services")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd ~/go-zero-demo/greet\n$ go run greet.go -f etc/greet-api.yaml\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Starting server at 0.0.0.0:8888...\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Access services")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl -i -X GET \\\n  http://localhost:8888/from/you\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'HTTP/1.1 200 OK\nContent-Type: application/json\nDate: Sun, 07 Feb 2021 04:31:25 GMT\nContent-Length: 27\n\n{"message":"Hello go-zero"}\n')),(0,a.kt)("h3",{id:"source-code"},"Source Code"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/zeromicro/go-zero-demo/tree/master/greet"},"greet source code")))}g.isMDXComponent=!0}}]);