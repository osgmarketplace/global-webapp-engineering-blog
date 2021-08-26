"use strict";(self.webpackChunkglobal_webapp_engineering_blog=self.webpackChunkglobal_webapp_engineering_blog||[]).push([[729],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return b}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),g=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=g(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=g(t),b=o,d=s["".concat(c,".").concat(b)]||s[b]||u[b]||a;return t?r.createElement(d,i(i({ref:n},p),{},{components:t})):r.createElement(d,i({ref:n},p))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=s;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var g=2;g<a;g++)i[g]=t[g];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},25:function(e,n){n.Z=function(e){return"/global-webapp-engineering-blog/img/"+e}},8993:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return g},metadata:function(){return p},toc:function(){return u},default:function(){return b}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=t(25),l=["components"],c={title:"Refactoring - Book Review",description:"Improving the Design of Existing Code",tags:["backend","book","code-quality","frontend","fundamentals","learning","maintenance","recommended-learning-fundamentals"],author:"Derek Kershner",author_title:"CTO",author_url:"https://github.com/dkershner6",author_image_url:"https://avatars.githubusercontent.com/u/25798427?v=4"},g="Refactoring",p={permalink:"/global-webapp-engineering-blog/2021/08/18/refactoring-book",editUrl:"https://github.com/obfns/global-webapp-engineering-blog/tree/main/blog/2021-08-18-refactoring-book.md",source:"@site/blog/2021-08-18-refactoring-book.md",title:"Refactoring - Book Review",description:"Improving the Design of Existing Code",date:"2021-08-18T00:00:00.000Z",formattedDate:"August 18, 2021",tags:[{label:"backend",permalink:"/global-webapp-engineering-blog/tags/backend"},{label:"book",permalink:"/global-webapp-engineering-blog/tags/book"},{label:"code-quality",permalink:"/global-webapp-engineering-blog/tags/code-quality"},{label:"frontend",permalink:"/global-webapp-engineering-blog/tags/frontend"},{label:"fundamentals",permalink:"/global-webapp-engineering-blog/tags/fundamentals"},{label:"learning",permalink:"/global-webapp-engineering-blog/tags/learning"},{label:"maintenance",permalink:"/global-webapp-engineering-blog/tags/maintenance"},{label:"recommended-learning-fundamentals",permalink:"/global-webapp-engineering-blog/tags/recommended-learning-fundamentals"}],readingTime:1.69,truncated:!0,prevItem:{title:"Clean Code - Book Review",permalink:"/global-webapp-engineering-blog/2021/08/19/clean-code-book"},nextItem:{title:"Building Microservices - Book Review",permalink:"/global-webapp-engineering-blog/2021/08/17/building-microservices-book"}},u=[{value:"TLDR",id:"tldr",children:[]},{value:"Why?",id:"why",children:[]}],s={toc:u};function b(e){var n=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"by Martin Fowler, with Kent Beck"),(0,a.kt)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",overflow:"hidden"}},(0,a.kt)("img",{src:(0,i.Z)("refactoring.jpg"),height:"250"})),(0,a.kt)("h2",{id:"tldr"},"TLDR"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This book aims to help you produce code that easier to understand (by humans)"),(0,a.kt)("li",{parentName:"ul"},"It uses JavaScript for its examples, as opposed to most books that use Java."),(0,a.kt)("li",{parentName:"ul"},"It does a fantastic job of explaining both the why and how of each pattern, and the list is very comprehensive.")),(0,a.kt)("h2",{id:"why"},"Why?"),(0,a.kt)("p",null,"This book correctly identifies code smells and which pattern to implement for each. Following the advice will undoubtably lift your code quality, improving the lives of you and your fellow developers. It also discusses unit testing, and how correctly organized code vastly simplifies the process of Test Driven Development."))}b.isMDXComponent=!0}}]);