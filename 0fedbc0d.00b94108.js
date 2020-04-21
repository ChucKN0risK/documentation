/*! For license information please see 0fedbc0d.00b94108.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{153:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return d})),a.d(t,"rightToc",(function(){return m})),a.d(t,"default",(function(){return g}));var n=a(1),o=a(9),r=(a(0),a(247)),l=a(248),i=a(265),c=a(260),s=a(261),p=a(262),u=a(253),b={last_modified_on:"2020-04-21",$schema:"/.meta/.schemas/guides.json",title:"Deploy Spring Boot with PostgreSQL on Qovery",description:"How to deploy a Spring Boot application with the PostgreSQL database on Qovery",author_github:"https://github.com/evoxmusic",tags:["type: tutorial","framework: springboot","language: java","database: postgresql"],hide_pagination:!0},d={categories:[{name:"tutorial",title:"Tutorial",description:"Simple step-by-step tutorials.",permalink:"/guides/tutorial"}],coverLabel:"Deploy Spring Boot with PostgreSQL on Qovery",description:"How to deploy a Spring Boot application with the PostgreSQL database on Qovery",permalink:"/guides/tutorial/deploy-spring-boot-with-postgresql",readingTime:"7 min read",source:"@site/guides/tutorial/deploy-spring-boot-with-postgresql.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"framework: springboot",permalink:"/guides/tags/framework-springboot"},{label:"language: java",permalink:"/guides/tags/language-java"},{label:"database: postgresql",permalink:"/guides/tags/database-postgresql"}],title:"Deploy Spring Boot with PostgreSQL on Qovery",truncated:!1,prevItem:{title:"Deploy Node.JS with PostgreSQL on Qovery",permalink:"/guides/tutorial/deploy-node-js-with-postgresql"},nextItem:{title:"GraphQL API with Hasura",permalink:"/guides/tutorial/graphql-api-with-hasura"}},m=[{value:"Sign up",id:"sign-up",children:[{value:"Install the CLI!",id:"install-the-cli",children:[]},{value:"Sign Up",id:"sign-up-1",children:[]},{value:"Authorize Qovery",id:"authorize-qovery",children:[]}]},{value:"Get the Spring Boot sample application (Optional)",id:"get-the-spring-boot-sample-application-optional",children:[]},{value:"Deployment",id:"deployment",children:[{value:"Configure your project",id:"configure-your-project",children:[]},{value:"Connect your application to PostgreSQL",id:"connect-your-application-to-postgresql",children:[]},{value:"Deploy your application",id:"deploy-your-application",children:[]}]},{value:"Bonuses (optional)",id:"bonuses-optional",children:[{value:"Test the Spring Boot application locally",id:"test-the-spring-boot-application-locally",children:[]},{value:"Deploy the application on a staging environment",id:"deploy-the-application-on-a-staging-environment",children:[]}]},{value:"Conclusion",id:"conclusion",children:[]}],h={rightToc:m};function g(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},h,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://aws.amazon.com"}),"AWS")," (Amazon Web Services) is a fantastic and reliable cloud service provider. AWS, like ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.google.com"}),"GCP")," (Google Cloud Platform) and Microsoft ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://azure.microsoft.com"}),"Azure"),", provides everything you need to host an application without having to worry about running the underlying servers and network configuration."),Object(r.b)("p",null,"However, deploying an application on any of these Cloud provider presents some challenges. The typical deployment workflow looks like this: write code, push it to Git, compile code, deploy code, validate your changes, and repeat. Developers thus not only have to do all of this manually, but they also have to configure tons of services (VPC, database, cache, DNS, CDN, etc.) to make their application live on the web."),Object(r.b)("p",null,"Qovery solves this problem by combining the reliability of AWS, and the simplicity of Heroku to augment the developer experience."),Object(r.b)("p",null,"In this blog post, I will show you how Qovery improves the developer experience to deploy staging and production ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://spring.io/projects/spring-boot"}),"Spring Boot")," application with ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.postgresql.org"}),"PostgreSQL")," database on Qovery. You will be able to focus on writing the best code instead of managing complex services."),Object(r.b)(p.a,{name:"guide",mdxType:"Assumptions"},Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Your Operating System is MacOS / Windows / Linux"),Object(r.b)("li",{parentName:"ul"},"You have a Github account"))),Object(r.b)("h2",{id:"sign-up"},"Sign up"),Object(r.b)("p",null,"Sign up using the ",Object(r.b)("strong",{parentName:"p"},"Qovery CLI"),", it's very simple!"),Object(r.b)("h3",{id:"install-the-cli"},"Install the CLI!"),Object(r.b)(c.a,{centered:!0,className:"rounded",defaultValue:"linux",placeholder:"Please select your OS",select:!1,size:null,values:[{group:"Platforms",label:"Linux",value:"linux"},{group:"Platforms",label:"MacOS",value:"macos"},{group:"Platforms",label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(r.b)(s.a,{value:"linux",mdxType:"TabItem"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Download and install Qovery CLI on every Linux distribution")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"curl -s https://get.qovery.com | sudo bash\n"))),Object(r.b)(s.a,{value:"macos",mdxType:"TabItem"},Object(r.b)(c.a,{centered:!0,className:"rounded",defaultValue:"homebrew",values:[{label:"Homebrew",value:"homebrew"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},Object(r.b)(s.a,{value:"homebrew",mdxType:"TabItem"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"The common solution to install a command line binary on the MacOS is to use ",Object(r.b)("a",Object(n.a)({parentName:"strong"},{href:"https://brew.sh/"}),"Homebrew"),".")),Object(r.b)(i.a,{headingDepth:3,mdxType:"Steps"},Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("h3",Object(n.a)({parentName:"li"},{id:"add-qovery-brew-repository"}),"Add Qovery brew repository"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"brew tap Qovery/qovery-cli\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("h3",Object(n.a)({parentName:"li"},{id:"install-the-cli-1"}),"Install the CLI"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"brew install qovery-cli\n")))))),Object(r.b)(s.a,{value:"manual",mdxType:"TabItem"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Install the Qovery CLI on MacOS manually")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"curl -s https://get.qovery.com | bash\n"))))),Object(r.b)(s.a,{value:"windows",mdxType:"TabItem"},Object(r.b)(c.a,{centered:!0,className:"rounded",defaultValue:"scoop",values:[{label:"Scoop",value:"scoop"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},Object(r.b)(s.a,{value:"scoop",mdxType:"TabItem"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"The classic way to install binaries on Windows is to use ",Object(r.b)("a",Object(n.a)({parentName:"strong"},{href:"https://brew.sh/"}),"Scoop"),".")),Object(r.b)(i.a,{headingDepth:3,mdxType:"Steps"},Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("h3",Object(n.a)({parentName:"li"},{id:"add-qovery-bucket"}),"Add Qovery bucket"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"scoop bucket add qovery https://github.com/Qovery/scoop-qovery-cli\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("h3",Object(n.a)({parentName:"li"},{id:"install-the-cli-2"}),"Install the CLI"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"scoop install qovery-cli\n")))))),Object(r.b)(s.a,{value:"manual",mdxType:"TabItem"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"}," Install the Qovery CLI on Windows manually by downloading the ",Object(r.b)("a",Object(n.a)({parentName:"strong"},{href:"https://github.com/Qovery/qovery-cli/releases"}),"latest realease")," and uncompressing its content to\n",Object(r.b)("inlineCode",{parentName:"strong"},"C:\\Windows"),".")))))),Object(r.b)("h3",{id:"sign-up-1"},"Sign Up"),Object(r.b)("p",null,"After the Qovery CLI is installed, run the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"qovery auth\n")),Object(r.b)("p",null,"A browser window with sign-in options will open."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/qovery_signup.svg",alt:"Qovery Sign-up page"})),Object(r.b)("p",null,"Choose one of the options (e.g. ",Object(r.b)("strong",{parentName:"p"},"Github"),") to authenticate."),Object(r.b)("h3",{id:"authorize-qovery"},"Authorize Qovery"),Object(r.b)("p",null,"Qovery needs access to your account to be able to clone your repository for future application builds."),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/apps/qovery/installations/new"}),"Click here")," to authorize Qovery to clone and build your applications."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/github-connect.png",alt:"Connect Github"})),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},'That\'s it! You should see "Authentication successful. You can close this window." message.')),Object(r.b)("h2",{id:"get-the-spring-boot-sample-application-optional"},"Get the Spring Boot sample application (Optional)"),Object(r.b)("p",null,"Get a local copy of the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Qovery/simple-example-with-postgresql"}),"Spring Boot sample project")," by forking the project."),Object(r.b)("h2",{id:"deployment"},"Deployment"),Object(r.b)("h3",{id:"configure-your-project"},"Configure your project"),Object(r.b)("p",null,"To deploy your Spring Boot application connected to a PostgreSQL database, you need to have a ",Object(r.b)("inlineCode",{parentName:"p"},".qovery.yml")," file, and a ",Object(r.b)("inlineCode",{parentName:"p"},"Dockerfile")," (provided in the sample project) at the root of your project."),Object(r.b)(u.a,{mdxType:"Alert"},"The .qovery.yml file indicates all the dependencies that your application needs (e.g., PostgreSQL) to work smoothly"),Object(r.b)("p",null,"Here we will use PostgreSQL v11.5"),Object(r.b)("p",null,"To create the ",Object(r.b)("inlineCode",{parentName:"p"},".qovery.yml")," file, run the following command:\u200d\u200d"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Interactive command to generate the .qovery.yml\n$ qovery init\n")),Object(r.b)("p",null,"Which creates the ",Object(r.b)("inlineCode",{parentName:"p"},".qovery.yml")," file at the root of your project directory"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ cat .qovery.yml\n")),Object(r.b)("p",null,"Output"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'application:\n  name: my-application\n  project: my-project\n  cloud_region: aws/us-west-2\n  publicly_accessible: true\ndatabases:\n- type: postgresql\n  version: "11.5"\n  name: my-db\nrouters:\n- name: main\n  routes:\n  - application_name: my-application\n    paths:\n    - /\n')),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/apps/qovery/installations/new"}),"Authorize the Qovery Github application")," to get access to your Github account. Once done, you need to commit and push the ",Object(r.b)("inlineCode",{parentName:"p"},".qovery.yml")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Dockerfile")," file to deploy your app."),Object(r.b)("h3",{id:"connect-your-application-to-postgresql"},"Connect your application to PostgreSQL"),Object(r.b)("p",null,"Credentials of your database are available through environment variables. Qovery injects environment variables at the runtime.\nTo list all the environment variables available for your application, execute"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# List all environment variables\n$ qovery project env list\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"SCOPE    | KEY                                                      | VALUE\nBUILT_IN | QOVERY_JSON_B64                                          | <base64>\nBUILT_IN | QOVERY_BRANCH_NAME                                       | master\nBUILT_IN | QOVERY_IS_PRODUCTION                                     | true\nBUILT_IN | QOVERY_MY_APPLICATION_HOSTNAME                           | <hidden>\nBUILT_IN | QOVERY_DATABASE_MY_DB_DATABASE                           | <hidden>\nBUILT_IN | QOVERY_DATABASE_MY_DB_PASSWORD                           | <hidden>\nBUILT_IN | QOVERY_DATABASE_MY_DB_USERNAME                           | <hidden>\nBUILT_IN | QOVERY_DATABASE_MY_DB_PORT                               | <hidden>\nBUILT_IN | QOVERY_DATABASE_MY_DB_FQDN                               | <hidden>\nBUILT_IN | QOVERY_DATABASE_MY_DB_HOST                               | <hidden>\nBUILT_IN | QOVERY_DATABASE_MY_DB_CONNECTION_URI_WITHOUT_CREDENTIALS | <hidden>\nBUILT_IN | QOVERY_DATABASE_MY_DB_CONNECTION_URI                     | <hidden>\nBUILT_IN | QOVERY_DATABASE_MY_DB_VERSION                            | 11.5\nBUILT_IN | QOVERY_DATABASE_MY_DB_TYPE                               | PostgreSQL\nBUILT_IN | QOVERY_DATABASE_MY_DB_NAME                               | my-db\n")),Object(r.b)("h3",{id:"deploy-your-application"},"Deploy your application"),Object(r.b)("p",null,"Congratulations, you are finally ready to deploy your application. Now, execute the following commands:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ git add .qovery.yml Dockerfile\n$ git commit -m \u201cadd .qovery.yml and Dockerfile\u201d\n$ git push -u origin qovery\n")),Object(r.b)("p",null,"Voila! Qovery is now deploying your app!"),Object(r.b)("p",null,"See the deployment status by executing"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Show your deployment status\n$ qovery status\n")),Object(r.b)("p",null,"Output"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"BRANCH NAME | STATUS  | ENDPOINTS                                   | APPLICATIONS    | DATABASES\nmaster      | running | https://main-abcdefgh12345678-gtw.qovery.io | my-application  | my-db\n\nAPPLICATION NAME  | STATUS  | DATABASES\nmy-application    | running | my-db\n\nDATABASE NAME    | STATUS  | TYPE       | VERSION | ENDPOINT | PORT     | USERNAME | PASSWORD | APPLICATIONS\nmy-db            | running | POSTGRESQL      | 11.5     | <hidden> | <hidden> | <hidden> | <hidden> | my-application\n")),Object(r.b)("h2",{id:"bonuses-optional"},"Bonuses (optional)"),Object(r.b)("h3",{id:"test-the-spring-boot-application-locally"},"Test the Spring Boot application locally"),Object(r.b)("p",null,"The Qovery motto is: if your application runs locally, then your application will run on Qovery. To test if your application is running locally, execute the following command:"),Object(r.b)(u.a,{mdxType:"Alert"},"The Docker runtime is required"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery run\n")),Object(r.b)("p",null,"Note: ",Object(r.b)("inlineCode",{parentName:"p"},"qovery run")," connects your application to the PostgreSQL database on Qovery."),Object(r.b)("h3",{id:"deploy-the-application-on-a-staging-environment"},"Deploy the application on a staging environment"),Object(r.b)("p",null,"Qovery has a compelling feature known as \u201cenvironment\u201d. Qovery supports the deployment of isolated development environments from your branches, complete with exact copies of all of your data. The Environment is useful for testing changes in isolation before merging them."),Object(r.b)("p",null,"So, do you want to create a new feature, fix a bug, or make modifications without impacting the production or any other important environment? Type the following commands:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ git checkout -b feat_foo\n$ git push -u origin feat_foo\n\n# show deployment status\n$ qovery status\n")),Object(r.b)("p",null,"Output"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"BRANCH NAME | STATUS  | ENDPOINTS                                   | APPLICATIONS    | DATABASES\nfeat_foo    | running | https://main-yenr7erjbs87dk4m-gtw.qovery.io | my-application  | my-db\n\nAPPLICATION NAME              | STATUS  | DATABASES\ndocker-simple-example-laravel | running | my-db\n\nDATABASE NAME  | STATUS  | TYPE       | VERSION | ENDPOINT | PORT     | USERNAME | PASSWORD | APPLICATIONS\nmy-db          | running | PostgreSQL      | 11.5     | <hidden> | <hidden> | <hidden> | <hidden> | my-application\n")),Object(r.b)(l.a,{to:"/guides/advanced/using-multiple-environments",mdxType:"Jump"},"Multiple Environments"),Object(r.b)("h2",{id:"conclusion"},"Conclusion"),Object(r.b)("p",null,"Qovery bring to developers, the full power of simplicity and flexibility while deploying applications. Any developer can now take advantage of the most popular Cloud providers in seconds instead of days."),Object(r.b)("p",null,"Accelerate your development and start using Qovery today. Let us know what you think about it on ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://twitter.com/qovery_"}),"Twitter"),", or by ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://discord.qovery.com"}),"Discord"),"."),Object(r.b)(l.a,{to:"/guides/tutorial/",mdxType:"Jump"},"Tutorial"))}g.isMDXComponent=!0},244:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var l=o.apply(null,n);l&&e.push(l)}else if("object"===r)for(var i in n)a.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},246:function(e,t,a){"use strict";var n=a(1),o=a(0),r=a.n(o),l=a(39),i=a(249),c=a(28),s=a.n(c);t.a=function(e){var t,a=e.to,c=e.href,p=a||c,u=Object(i.a)(p),b=Object(o.useRef)(!1),d=s.a.canUseIntersectionObserver;return Object(o.useEffect)((function(){return!d&&u&&window.docusaurus.prefetch(p),function(){d&&t&&t.disconnect()}}),[p,d,u]),p&&u?r.a.createElement(l.b,Object(n.a)({},e,{onMouseEnter:function(){b.current||(window.docusaurus.preload(p),b.current=!0)},innerRef:function(e){var a,n;d&&e&&u&&(a=e,n=function(){window.docusaurus.prefetch(p)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){a===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(a),t.disconnect(),n())}))}))).observe(a))},to:p})):r.a.createElement("a",Object(n.a)({},e,{href:p}))}},248:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(246),l=a(244),i=a.n(l);a(131);t.a=function(e){var t=e.children,a=e.className,n=e.badge,l=e.leftIcon,c=e.rightIcon,s=e.size,p=e.target,u=e.to,b=i()("jump-to","jump-to--"+s,a),d=o.a.createElement("div",{className:"jump-to--inner"},o.a.createElement("div",{className:"jump-to--inner-2"},l&&o.a.createElement("div",{className:"jump-to--left"},o.a.createElement("i",{className:"feather icon-"+l})),o.a.createElement("div",{className:"jump-to--main"},n?o.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",t),o.a.createElement("div",{className:"jump-to--right"},o.a.createElement("i",{className:"feather icon-"+(c||"chevron-right")+" arrow"}))));return p?o.a.createElement("a",{href:u,target:p,className:b},d):o.a.createElement(r.a,{to:u,className:b},d)}},249:function(e,t,a){"use strict";function n(e){return!1===/^(https?:|\/\/)/.test(e)}a.d(t,"a",(function(){return n}))},251:function(e,t,a){var n=a(26).f,o=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in o||a(10)&&n(o,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},253:function(e,t,a){"use strict";a(255);var n=a(0),o=a.n(n),r=a(244),l=a.n(r);a(132);t.a=function(e){var t=e.children,a=e.classNames,n=e.fill,r=e.icon,i=e.type,c=null;switch(i){case"danger":c="alert-triangle";break;case"success":c="check-circle";break;case"warning":c="alert-triangle";break;default:c="info"}return o.a.createElement("div",{className:l()(a,"alert","alert--"+i,{"alert--fill":n,"alert--icon":!1!==r}),role:"alert"},!1!==r&&o.a.createElement("i",{className:l()("feather","icon-"+(r||c))}),t)}},255:function(e,t,a){var n=a(12);n(n.P,"Array",{fill:a(256)}),a(75)("fill")},256:function(e,t,a){"use strict";var n=a(27),o=a(77),r=a(24);e.exports=function(e){for(var t=n(this),a=r(t.length),l=arguments.length,i=o(l>1?arguments[1]:void 0,a),c=l>2?arguments[2]:void 0,s=void 0===c?a:o(c,a);s>i;)t[i++]=e;return t}},260:function(e,t,a){"use strict";var n=a(1),o=(a(268),a(254),a(52),a(25),a(19),a(20),a(0)),r=a.n(o),l=a(291),i=a(244),c=a.n(i),s=a(259),p=a.n(s),u=a(290),b=37,d=39;function m(e){var t=e.block,a=e.centered,n=e.changeSelectedValue,o=e.className,l=e.handleKeydown,i=e.style,s=e.values,p=e.selectedValue,u=e.tabRefs;return r.a.createElement("div",{className:a?"tabs--centered":null},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:c()("tabs",o,{"tabs--block":t}),style:i},s.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":p===t,className:c()("tab-item",{"tab-item--active":p===t}),key:t,ref:function(e){return u.push(e)},onKeyDown:function(e){return l(u,e.target,e)},onFocus:function(){return n(t)},onClick:function(){return n(t)}},a)}))))}function h(e){var t=e.placeholder,a=e.selectedValue,n=e.changeSelectedValue,o=e.size,i=e.values,c=i;if(c[0].group){var s=_.groupBy(c,"group");c=Object.keys(s).map((function(e){return{label:e,options:s[e]}}))}return r.a.createElement(l.a,{className:"react-select-container react-select--"+o,classNamePrefix:"react-select",options:c,isClearable:a,placeholder:t,value:i.find((function(e){return e.value==a})),onChange:function(e){return n(e?e.value:null)}})}t.a=function(e){e.block,e.centered;var t=e.children,a=e.defaultValue,l=e.groupId,i=e.label,c=e.placeholder,s=e.select,g=e.size,y=(e.style,e.values),O=e.urlKey,v=Object(u.a)(),j=v.tabGroupChoices,f=v.setTabGroupChoices,N=Object(o.useState)(a),w=N[0],T=N[1];if(null!=l){var S=j[l];null!=S&&S!==w&&T(S)}var A=function(e){T(e),null!=l&&f(l,e)},E=[],I=function(e,t,a){switch(a.keyCode){case d:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}};return Object(o.useEffect)((function(){if("undefined"!=typeof window&&window.location&&O){var e=p.a.parse(window.location.search);e[O]&&T(e[O])}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"margin-bottom--"+(g||"md")},i&&r.a.createElement("div",{className:"margin-vert--sm"},i),y.length>1&&(s?r.a.createElement(h,Object(n.a)({changeSelectedValue:A,handleKeydown:I,placeholder:c,selectedValue:w,size:g,tabRefs:E},e)):r.a.createElement(m,Object(n.a)({changeSelectedValue:A,handleKeydown:I,selectedValue:w,tabRefs:E},e)))),o.Children.toArray(t).filter((function(e){return e.props.value===w}))[0])}},261:function(e,t,a){"use strict";var n=a(0),o=a.n(n);t.a=function(e){return o.a.createElement(o.a.Fragment,null,e.children)}},262:function(e,t,a){"use strict";a(251);var n=a(0),o=a.n(n),r=a(253);t.a=function(e){var t=e.children,a=e.name;return o.a.createElement(r.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},o.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",a||"page"," assumes the following:"),t)}},265:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=(a(244),a(259)),l=a.n(r);a(137);t.a=function(e){var t=e.children,a=e.headingDepth,r="undefined"!=typeof window?window.location:null,i={title:"Tutorial on "+r+" failed",body:"The tutorial on:\n\n"+r+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},c="https://github.com/qovery/documentation/issues/new?"+l.a.stringify(i),s=Object(n.useState)(null),p=s[0],u=s[1];return o.a.createElement("div",{className:"steps steps--h"+a},t,!p&&o.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",o.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return u("yes")}},"Yes"),"\xa0\xa0",o.a.createElement("a",{href:c,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==p&&o.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",o.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}}}]);