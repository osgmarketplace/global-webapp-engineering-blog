"use strict";(self.webpackChunkglobal_webapp_engineering_blog=self.webpackChunkglobal_webapp_engineering_blog||[]).push([[631],{3905:function(e,n,t){t.d(n,{Zo:function(){return g},kt:function(){return b}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},g=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),u=p(t),b=o,m=u["".concat(c,".").concat(b)]||u[b]||s[b]||a;return t?r.createElement(m,i(i({ref:n},g),{},{components:t})):r.createElement(m,i({ref:n},g))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},25:function(e,n){n.Z=function(e){return"/global-webapp-engineering-blog/img/"+e}},5419:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return g},toc:function(){return s},default:function(){return b}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=t(25),l=["components"],c={title:"Clean Code - Book Review",description:"Improving the Design of Existing Code",tags:["backend","book","code-quality","frontend","learning","maintenance","not-recommended-learning"],author:"Derek Kershner",author_title:"CTO",author_url:"https://github.com/dkershner6",author_image_url:"https://avatars.githubusercontent.com/u/25798427?v=4"},p="Refactoring",g={permalink:"/global-webapp-engineering-blog/2021/08/19/clean-code-book",editUrl:"https://github.com/obfns/global-webapp-engineering-blog/tree/main/blog/2021-08-19-clean-code-book.md",source:"@site/blog/2021-08-19-clean-code-book.md",title:"Clean Code - Book Review",description:"Improving the Design of Existing Code",date:"2021-08-19T00:00:00.000Z",formattedDate:"August 19, 2021",tags:[{label:"backend",permalink:"/global-webapp-engineering-blog/tags/backend"},{label:"book",permalink:"/global-webapp-engineering-blog/tags/book"},{label:"code-quality",permalink:"/global-webapp-engineering-blog/tags/code-quality"},{label:"frontend",permalink:"/global-webapp-engineering-blog/tags/frontend"},{label:"learning",permalink:"/global-webapp-engineering-blog/tags/learning"},{label:"maintenance",permalink:"/global-webapp-engineering-blog/tags/maintenance"},{label:"not-recommended-learning",permalink:"/global-webapp-engineering-blog/tags/not-recommended-learning"}],readingTime:.71,truncated:!0,prevItem:{title:"The DynamoDB Book - Book Review",permalink:"/global-webapp-engineering-blog/2021/08/20/dynamodb-book"},nextItem:{title:"Refactoring - Book Review",permalink:"/global-webapp-engineering-blog/2021/08/18/refactoring-book"}},s=[{value:"Why not?",id:"why-not",children:[]},{value:"Engineer Reactions",id:"engineer-reactions",children:[]}],u={toc:s};function b(e){var n=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"by Robert C. Martin"),(0,a.kt)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",overflow:"hidden"}},(0,a.kt)("img",{src:(0,i.Z)("cleancode.jpg"),height:"250"})),(0,a.kt)("h2",{id:"why-not"},"Why not?"),(0,a.kt)("p",null,"This book is actually quite good, and has a fantastic mindset when implementing its concepts."),(0,a.kt)("p",null,"The book is very similar to ",(0,a.kt)("a",{parentName:"p",href:"2021/08/18/refactoring-book"},"Refactoring"),", except for these differences:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"It is older (the second edition of Refactoring is from 2018)."),(0,a.kt)("li",{parentName:"ol"},"It is denser (it spends significantly more time on each refactoring)."),(0,a.kt)("li",{parentName:"ol"},"It has fewer refactorings (but covers the most important)."),(0,a.kt)("li",{parentName:"ol"},"It uses Java for examples rather than JavaScript.")),(0,a.kt)("p",null,"If you know both Java and JavaScript, that last one may not matter, but having to translate the examples while reading causes extra strain. Even without that reason, however, I would still recommend ",(0,a.kt)("a",{parentName:"p",href:"2021/08/18/refactoring-book"},"Refactoring"),"."),(0,a.kt)("h2",{id:"engineer-reactions"},"Engineer Reactions"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Feel free to post comments")))}b.isMDXComponent=!0}}]);