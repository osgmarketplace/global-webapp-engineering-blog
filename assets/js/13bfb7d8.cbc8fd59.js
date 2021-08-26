"use strict";(self.webpackChunkglobal_webapp_engineering_blog=self.webpackChunkglobal_webapp_engineering_blog||[]).push([[147],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return g}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},b=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=u(t),g=a,d=b["".concat(s,".").concat(g)]||b[g]||c[g]||o;return t?r.createElement(d,i(i({ref:n},p),{},{components:t})):r.createElement(d,i({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=b;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"},25:function(e,n){n.Z=function(e){return"/global-webapp-engineering-blog/img/"+e}},6571:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return g}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=t(25),l=["components"],s={title:"The DynamoDB Book - Book Review",description:"Supercharge your Data Modeling",tags:["backend","book","databases","fundamentals","learning","recommended-learning-fundamentals"],author:"Derek Kershner",author_title:"CTO",author_url:"https://github.com/dkershner6",author_image_url:"https://avatars.githubusercontent.com/u/25798427?v=4"},u="The DynamoDB Book",p={permalink:"/global-webapp-engineering-blog/2021/08/20/dynamodb-book",editUrl:"https://github.com/obfns/global-webapp-engineering-blog/tree/main/blog/2021-08-20-dynamodb-book.md",source:"@site/blog/2021-08-20-dynamodb-book.md",title:"The DynamoDB Book - Book Review",description:"Supercharge your Data Modeling",date:"2021-08-20T00:00:00.000Z",formattedDate:"August 20, 2021",tags:[{label:"backend",permalink:"/global-webapp-engineering-blog/tags/backend"},{label:"book",permalink:"/global-webapp-engineering-blog/tags/book"},{label:"databases",permalink:"/global-webapp-engineering-blog/tags/databases"},{label:"fundamentals",permalink:"/global-webapp-engineering-blog/tags/fundamentals"},{label:"learning",permalink:"/global-webapp-engineering-blog/tags/learning"},{label:"recommended-learning-fundamentals",permalink:"/global-webapp-engineering-blog/tags/recommended-learning-fundamentals"}],readingTime:1.555,truncated:!0,nextItem:{title:"Clean Code - Book Review",permalink:"/global-webapp-engineering-blog/2021/08/19/clean-code-book"}},c=[{value:"TLDR",id:"tldr",children:[]},{value:"Why?",id:"why",children:[]}],b={toc:c};function g(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"by Alex DeBrie"),(0,o.kt)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",overflow:"hidden"}},(0,o.kt)("img",{src:(0,i.Z)("dynamodbbook.png"),height:"250"})),(0,o.kt)("h2",{id:"tldr"},"TLDR"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This book aims to help you data model for DynamoDB. This is a worthy adversary, your attention to detail up front is well-warranted."),(0,o.kt)("li",{parentName:"ul"},"The rules posited in this book are the impetus for the patterns behind our own models. The explanations are very detailed and easy to follow."),(0,o.kt)("li",{parentName:"ul"},"AWS-Famous Rick Houlihan approves, the godfather of hideous, but effective data modeling (yes, this book will feel gross at first).")),(0,o.kt)("h2",{id:"why"},"Why?"),(0,o.kt)("p",null,"Using key-value stores are all about consistency (as is any database actually, but simple databases are far less forgiving of inconsistencies). This book establishes reasonable, practiced patterns that will help you from making simple mistakes in your data modeling journey."),(0,o.kt)("p",null,"In addition, DynamoDB has some of its own quirks (things like Billing), and it talks about all of them in great detail."),(0,o.kt)("p",null,"One of my favorite parts of this book is when it talks about optimizations NOT being worth it, and to favor simplicity in these cases."))}g.isMDXComponent=!0}}]);