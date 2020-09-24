/*! For license information please see 209dc929.b4747405.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{171:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(1),r=a(9),o=(a(0),a(309)),i=a(314),s={last_modified_on:"2020-05-26",$schema:"/.meta/.schemas/guides.json",title:"GraphQL API with Hasura",description:"How to build and deploy realtime GraphQL APIs in a few minutes",author_github:"https://github.com/pjeziorowski",tags:["type: tutorial","framework: hasura","database: postgresql"],hide_pagination:!0},l={categories:[{name:"tutorial",title:"Tutorial",description:"Simple step-by-step tutorials.",permalink:"/guides/tutorial"}],coverLabel:"GraphQL API with Hasura",description:"How to build and deploy realtime GraphQL APIs in a few minutes",permalink:"/guides/tutorial/graphql-api-with-hasura",readingTime:"7 min read",source:"@site/guides/tutorial/graphql-api-with-hasura.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"framework: hasura",permalink:"/guides/tags/framework-hasura"},{label:"database: postgresql",permalink:"/guides/tags/database-postgresql"}],title:"GraphQL API with Hasura",truncated:!1,prevItem:{title:"Feedback - Kotlin on the server-side - the good, and the bad",permalink:"/guides/engineering/feedback-kotlin-on-the-server-side"},nextItem:{title:"helm-freeze - manage Helm Charts and Repositories with ease",permalink:"/guides/engineering/helm-freeze-manage-helm-charts-with-ease"}},c=[{value:"First, why to use GraphQL?",id:"first-why-to-use-graphql",children:[]},{value:"Productivity boosting tools",id:"productivity-boosting-tools",children:[{value:"Why Hasura?",id:"why-hasura",children:[]},{value:"Why Qovery?",id:"why-qovery",children:[]}]},{value:"Hasura deployment on Qovery",id:"hasura-deployment-on-qovery",children:[]},{value:"Creating realtime GraphQL APIs",id:"creating-realtime-graphql-apis",children:[]},{value:"Testing GraphQL APIs",id:"testing-graphql-apis",children:[]},{value:"GraphQL realtime APIs",id:"graphql-realtime-apis",children:[]},{value:"Conclusions",id:"conclusions",children:[]}],u={rightToc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Before we dive deep into details, I'll ",Object(o.b)("strong",{parentName:"p"},"quickly describe the tools I used")," to build and deploy a realtime GraphQL API and tell you ",Object(o.b)("strong",{parentName:"p"},"why you should fall in love with GraphQL")," and all the tools I used."),Object(o.b)("h2",{id:"first-why-to-use-graphql"},"First, why to use GraphQL?"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"GraphQL")," is a query language for APIs and a runtime for fulfilling those queries with existing data. GraphQL provides a ",Object(o.b)("strong",{parentName:"p"},"schema")," that describes the API and allows clients (e.g. your frontend or mobile application) to easily fetch data they want and nothing more."),Object(o.b)("p",null,"Here is what you get from using GraphQL instead of standard RESTful APIs:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"GraphQL queries get exactly what you need, nothing more and nothing less"),Object(o.b)("li",{parentName:"ul"},"Instead of making multiple requests to fetch required data, you make just one request to one endpoint"),Object(o.b)("li",{parentName:"ul"},"GraphQL schema is typed, what makes the contract between frontend and backend clear and understandable")),Object(o.b)("p",null,"If you are a frontend engineer, ",Object(o.b)("strong",{parentName:"p"},"you will not like to consume other APIs than GraphQL after trying it out"),". It makes your life so much more pleasurable and easy."),Object(o.b)("p",null,"You don't need to know GraphQL to follow this article. All you need to know is that GraphQL allows you to define contract between frontend and backend and do operations on the data you are interested in."),Object(o.b)("h2",{id:"productivity-boosting-tools"},"Productivity boosting tools"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Hasura")," is an open source engine that connects to your databases & microservices and auto-generates a production-ready GraphQL backend. By using Hasura in conjunction with ",Object(o.b)("strong",{parentName:"p"},"Qovery")," (platform that combines the power of Kubernetes, the reliability of AWS and the simplicity of Heroku to allow developers deploy their apps with pleasure), you get a ",Object(o.b)("strong",{parentName:"p"},"blazing fast, auto-scallable and extensible solution to quickly build your applications"),"."),Object(o.b)("h3",{id:"why-hasura"},"Why Hasura?"),Object(o.b)("p",null,"Consuming GraphQL APIs is a pleasure. We'd like to have more GraphQL APIs. But those APIs do not come out of nowhere. Somebody has to implement them first - the data won't just flow out of the database through the schema to your frontend automagically, right? Well... with Hasura it will!"),Object(o.b)("p",null,"Hasura allows you to bootstrap a realtime GraphQL API in seconds by simply modeling your data. Hasura will do the hard work of translating your needs into queries to the database and translating them to GraphQL schema. Thanks to this, all you need to do is to define the data you want to store in the database - Hasura will do the rest."),Object(o.b)("p",null,"This is unbelievable how much time it saves. If you don't believe, try implementing a GraphQL server yourself - with all the featuers and options that Hasura offers."),Object(o.b)("p",null,"If you have doubts about flexibility - you don't have to worry. If you need to perform a very custom business logic, you can implement this part in any language you want and connect it to Hasura engine. This way you will not only save a lot of time, but also have flexibility to write your custom code if needed."),Object(o.b)("h3",{id:"why-qovery"},"Why Qovery?"),Object(o.b)("p",null,"Managing infrastructure is hard and takes time. ",Object(o.b)("strong",{parentName:"p"},"Developers want to focus on building their apps instead of wasting time on managing servers or databases"),". Qovery is tool that does it all for you - all you have to do is to write your application code. It's ",Object(o.b)("strong",{parentName:"p"},"powered by Docker and Kubernetes ")," underneath, so you get all the benefits of using those modern tools without the complexity and costs of learning and managing them."),Object(o.b)("p",null,"Qovery is also a great fit for Hasura - its ",Object(o.b)("strong",{parentName:"p"},"free plan allows you to deploy Hasura and database for free, without any limits, performance degradations or putting your app to sleep")," like it's done on other platforms."),Object(o.b)("p",null,"If you have any questions regarding this post or other things, feel free to reach me on ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://discord.qovery.com"}),"Discord"),"."),Object(o.b)("h2",{id:"hasura-deployment-on-qovery"},"Hasura deployment on Qovery"),Object(o.b)("p",null,"Deploying Hasura on Qovery is really easy. All you have to do is to bootstrap a project using Qovery CLI in a Git repository & export environment variables required by Hasura."),Object(o.b)("p",null,"1/ Bootstrap a project with Qovery CLI (the script will ask you for project and application name, which you can choose as you like)"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"qovery init -t hasura\n")),Object(o.b)("p",null,"2/ Commit and push your changes"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),'git add .\ngit commit -m "Deploy Hasura on Qovery"\ngit push -u origin master\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Well done!")," After pushing changes, Postgres and Hasura deployment will start. You can use ",Object(o.b)("inlineCode",{parentName:"p"},"\u200dqovery status --watch")," to track the progress. Once the deployment is done, you\u2019ll see your Hasura application URL in the status:\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://uploads-ssl.webflow.com/5de176c0d41c9b4a1dbbb0aa/5e8d9e3c75a7e46396d483d9_status.png",alt:"Qovery Status"}))),Object(o.b)("h2",{id:"creating-realtime-graphql-apis"},"Creating realtime GraphQL APIs"),Object(o.b)("p",null,"Navigate to your Hasura application URL and choose Data tab in the console:\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://uploads-ssl.webflow.com/5de176c0d41c9b4a1dbbb0aa/5e8d9e5e4788f066d395e4ac_data-tab.png",alt:"Hasura Console"})),"\nIn this section we'll configure our data model. Now, click on the ",Object(o.b)("strong",{parentName:"p"},"Create Table")," button."),Object(o.b)("p",null,'You\u2019ll see the table creator. We are going to create a simple "Todo" items table. We\'ll name it "todos" and the table will contain three columns:'),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},'id - unique identifier of given "Todo" item'),Object(o.b)("li",{parentName:"ul"},"title"),Object(o.b)("li",{parentName:"ul"},'description - optional description of "Todo" item')),Object(o.b)("p",null,"Fill the form as in the screenshots below to prepare the table."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://uploads-ssl.webflow.com/5de176c0d41c9b4a1dbbb0aa/5e8d9eccfd0cf4040e3017ff_table-name.png",alt:"Table"})),"\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://uploads-ssl.webflow.com/5de176c0d41c9b4a1dbbb0aa/5e8d9edd3f6105fd73982190_table-columns.png",alt:"Table"}))),Object(o.b)("p",null,"At the end, we should specify our id column as a Primary Key.\u200d"),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://uploads-ssl.webflow.com/5de176c0d41c9b4a1dbbb0aa/5e8d9ef4d87c6c421133c2e7_primary-key.png",alt:"Primary Key"}))),Object(o.b)("p",null,"The table is ready to be created. Click ",Object(o.b)("strong",{parentName:"p"},"Add Table")," button at the bottom of the page."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Voila!")," The table has been created in Postgres and Hasura has exposed GraphQL APIs to interact with our data."),Object(o.b)("h2",{id:"testing-graphql-apis"},"Testing GraphQL APIs"),Object(o.b)("p",null,"To test the GraphQL API, navigate to the GraphiQL tab and run the following query:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),"mutation query {\n  todos {\n    id\n    title\n    description\n  }\n}\n")),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://uploads-ssl.webflow.com/5de176c0d41c9b4a1dbbb0aa/5e8da0edcf123c19f5918594_graphiql.png",alt:"GraphiQL"})),'\nAs you can see, Hasura returned an empty array of "Todo" items. Let\u2019s add a "Todo" item by executing the following query:'),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),'mutation {\n  insert_todos(objects:[\n    {\n      title: "My first TODO"\n      description: "It\'s very important TODO item"\n    }\n  ]) {\n    affected_rows\n  }\n}\n')),Object(o.b)("p",null,"After you run the above query, in the response you'll see information about one affected row. Congrats! You have created a first \"Todo\" item. Let's now move further to a more interesting topic."),Object(o.b)("h2",{id:"graphql-realtime-apis"},"GraphQL realtime APIs"),Object(o.b)("p",null,"It's time to use a realtime GraphQL APIs - ",Object(o.b)("strong",{parentName:"p"},"GraphQL Subscriptions"),". Subscription allows you to fetch data and get updates about any changes that occur in data you are interested in."),Object(o.b)("p",null,"In the GraphiQL, run the following query:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),"subscription {\n  todos {\n    id\n    title\n    description\n  }\n}\n")),Object(o.b)("p",null,"In the response in the right-hand of console you'll see a \"Todo\" item you have created previously. That's great. Let's now test if the subscription really works - open one more Hasura console in a separate browser tab and navigate to GraphiQL."),Object(o.b)("p",null,"Execute the following query a few times:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),'mutation {\n  insert_todos(objects:[\n    {\n      title: "Another TODO to test subscriptions"\n      description: "Subscriptions!"\n    }\n  ]) {\n    affected_rows\n  }\n}\n')),Object(o.b)("p",null,'At the same time, keep an eye at the subscription. Each and every newly created "Todo" item automagically appears in the subscription response!'),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://uploads-ssl.webflow.com/5de176c0d41c9b4a1dbbb0aa/5e8d9de17e6837d53983c32f_subscription.gif",alt:"Realtime GraphQL"}))),Object(o.b)("h2",{id:"conclusions"},"Conclusions"),Object(o.b)("p",null,"By following this article you quickly deployed a realtime GraphQL backend using Qovery, Hasura and Postgres database."),Object(o.b)("p",null,"Using this stack saves you tons of time. Deploying it on Qovery is extremely easy. We take care of your application and your database. With Qovery and Hasura all you have to do to expose quality, realtime GraphQL backend is just a few clicks. After minutes your application is ready - define your data schema and expose GraphQL API to the world!"),Object(o.b)(i.a,{to:"/guides/tutorial/",mdxType:"Jump"},"Tutorial"))}p.isMDXComponent=!0},308:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var i=r.apply(null,n);i&&e.push(i)}else if("object"===o)for(var s in n)a.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},309:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s({},t,{},e)),a},p=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(a),d=n,h=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return a?r.a.createElement(h,s({ref:t},c,{components:a})):r.a.createElement(h,s({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},311:function(e,t,a){"use strict";var n=a(1),r=a(0),o=a.n(r),i=a(39),s=a(315),l=a(27),c=a.n(l);t.a=function(e){var t,a=e.to,l=e.href,u=a||l,p=Object(s.a)(u),b=Object(r.useRef)(!1),d=c.a.canUseIntersectionObserver;return Object(r.useEffect)((function(){return!d&&p&&window.docusaurus.prefetch(u),function(){d&&t&&t.disconnect()}}),[u,d,p]),u&&p?o.a.createElement(i.b,Object(n.a)({},e,{onMouseEnter:function(){b.current||(window.docusaurus.preload(u),b.current=!0)},innerRef:function(e){var a,n;d&&e&&p&&(a=e,n=function(){window.docusaurus.prefetch(u)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){a===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(a),t.disconnect(),n())}))}))).observe(a))},to:u})):o.a.createElement("a",Object(n.a)({},e,{href:u}))}},314:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(311),i=a(308),s=a.n(i);a(132);t.a=function(e){var t=e.children,a=e.className,n=e.badge,i=e.leftIcon,l=e.rightIcon,c=e.size,u=e.target,p=e.to,b=s()("jump-to","jump-to--"+c,a),d=r.a.createElement("div",{className:"jump-to--inner"},r.a.createElement("div",{className:"jump-to--inner-2"},i&&r.a.createElement("div",{className:"jump-to--left"},r.a.createElement("i",{className:"feather icon-"+i})),r.a.createElement("div",{className:"jump-to--main"},n?r.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",t),r.a.createElement("div",{className:"jump-to--right"},r.a.createElement("i",{className:"feather icon-"+(l||"chevron-right")+" arrow"}))));return u?r.a.createElement("a",{href:p,target:u,className:b},d):r.a.createElement(o.a,{to:p,className:b},d)}},315:function(e,t,a){"use strict";function n(e){return!1===/^(https?:|\/\/)/.test(e)}a.d(t,"a",(function(){return n}))}}]);