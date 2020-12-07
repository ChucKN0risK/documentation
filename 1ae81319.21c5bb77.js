(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{164:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return d})),a.d(t,"rightToc",(function(){return m})),a.d(t,"default",(function(){return g}));var n=a(1),o=a(9),r=(a(0),a(332)),i=a(333),l=a(335),c=a(346),p=a(343),s=a(344),u=a(339),b={last_modified_on:"2020-10-12",$schema:"/.meta/.schemas/guides.json",title:"Migrating application from Heroku to Qovery",description:"Tutorial how to migrate a webapp connected to PostgreSQL database from Heroku to Qovery",author_github:"https://github.com/pjeziorowski",tags:["type: tutorial"],hide_pagination:!0},d={categories:[{name:"tutorial",title:"Tutorial",description:"Simple step-by-step tutorials.",permalink:"/guides/tutorial"}],coverLabel:"Migrating application from Heroku to Qovery",description:"Tutorial how to migrate a webapp connected to PostgreSQL database from Heroku to Qovery",permalink:"/guides/tutorial/migrate-webapp-from-heroku-to-qovery",readingTime:"6 min read",source:"@site/guides/tutorial/migrate-webapp-from-heroku-to-qovery.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"}],title:"Migrating application from Heroku to Qovery",truncated:!1,prevItem:{title:"Managing env variables",permalink:"/guides/advanced/managing-environment-variables"},nextItem:{title:"Simplest way to deploy your Deno application with MongoDB database on AWS",permalink:"/guides/tutorial/simplest-way-to-deploy-deno-with-database"}},m=[{value:"Deploying the sample application to Heroku",id:"deploying-the-sample-application-to-heroku",children:[]},{value:"Migrating the application from Heroku to Qovery",id:"migrating-the-application-from-heroku-to-qovery",children:[{value:"Dockerize the application",id:"dockerize-the-application",children:[]},{value:"Initialize Qovery",id:"initialize-qovery",children:[]},{value:"Deploy the application to Qovery",id:"deploy-the-application-to-qovery",children:[]},{value:"Migrate PostgreSQL data",id:"migrate-postgresql-data",children:[]}]},{value:"What&#39;s next",id:"whats-next",children:[]}],h={rightToc:m};function g(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},h,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This tutorial describes how to migrate your web application running on Heroku to Qovery. In the article, you learn how to\nmigrate a Node.js application connected to Heroku Postgres as a backing service on the Heroku platform. It covers all required\nsteps you need to take to deploy your application on Qovery and transfer your data from Heroku Postgres to the database managed\nby Qovery."),Object(r.b)("p",null,"The application is a simple Node.js ",Object(r.b)("em",{parentName:"p"},"Todo")," web app that uses PostgreSQL as a persistence layer."),Object(r.b)(u.a,{name:"guide",mdxType:"Assumptions"},Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You are familiar with Heroku basics, have a Heroku account and access to Heroku CLI"),Object(r.b)("li",{parentName:"ul"},"You have a Qovery account and access to Qovery CLI"),Object(r.b)("li",{parentName:"ul"},"You have a ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com"}),"Github")," account")),Object(r.b)("p",null,"If you have not installed the Qovery CLI yet, you can see steps to do it ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/using-qovery/interface/cli/#first-usage"}),"here"),".")),Object(r.b)("hr",null),Object(r.b)(p.a,{centered:!0,className:"rounded",defaultValue:"deploy",placeholder:"Don't deploy sample application",select:!1,size:null,values:[{group:"Platforms",label:"I don't want to deploy the sample application",value:"dontDeploy"},{group:"Platforms",label:"I want to deploy the sample application",value:"deploy"}],mdxType:"Tabs"},Object(r.b)(s.a,{value:"dontDeploy",mdxType:"TabItem"},Object(r.b)("p",null,"If you have an existing app, you do not have to deploy our sample application to benefit from this guide.\nOtherwise, you can try to deploy and migrate our sample application to get experience.")),Object(r.b)(s.a,{value:"deploy",mdxType:"TabItem"},Object(r.b)("h2",{id:"deploying-the-sample-application-to-heroku"},"Deploying the sample application to Heroku"),Object(r.b)(c.a,{headingDepth:3,mdxType:"Steps"},Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Log in to Heroku using the CLI:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"heroku login --interactive\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Clone the application repository:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/qovery/migrate-webapp-from-heroku-to-qovery.git\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Move to the directory of the cloned repository:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"cd migrate-webapp-from-heroku-to-qovery\n")),Object(r.b)("p",{parentName:"li"},"The repository is made of a few simple components:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"index.js")," - Node.js script for setting up the web application."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"package.json")," - File determining app's dependencies."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Procfile")," - File required to run the app on Heroku. It determines the command executed on the application startup."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"views")," - Directory with the HTML served by the app."))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Create a Heroku app:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"heroku create\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Add Heroku PostgreSQL to your application:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"heroku addons:create heroku-postgresql:hobby-dev\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Deploy the application:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"git push heroku master\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Check your application URL:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"heroku info\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"In the browser, navigate to your application's URL - you'll see a simple view with a ",Object(r.b)("em",{parentName:"p"},"Todo")," app:"),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/todo-app-example.png",alt:"Connect Github"}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Create a few ",Object(r.b)("em",{parentName:"p"},"Todo")," tasks in the UI to make sure you have sample data in the database.")))))),Object(r.b)("h2",{id:"migrating-the-application-from-heroku-to-qovery"},"Migrating the application from Heroku to Qovery"),Object(r.b)(i.a,{mdxType:"Alert"},Object(r.b)("p",null,"Contents of the ",Object(r.b)("inlineCode",{parentName:"p"},"Dockerfile")," and ",Object(r.b)("inlineCode",{parentName:"p"},".qovery.yml")," assumes that you migrate our sample application")),Object(r.b)("h3",{id:"dockerize-the-application"},"Dockerize the application"),Object(r.b)("p",null,"As Qovery uses Docker for the runtime of applications, you need first to Dockerize the application. To do so,\ncreate a file named ",Object(r.b)("inlineCode",{parentName:"p"},"Dockerfile")," in the root of application repository with the following content:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-dockerfile",metastring:'title="Dockerfile"',title:'"Dockerfile"'}),'FROM node:10-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm install\nCOPY . /app\nEXPOSE 8080\nCMD ["npm", "start"]\n')),Object(r.b)("p",null,"If you want to learn more about Docker, you can read our introductory article:"),Object(r.b)(l.a,{to:"/guides/tutorial/how-to-deploy-a-docker-container/",mdxType:"Jump"},"Docker Containers"),Object(r.b)("h3",{id:"initialize-qovery"},"Initialize Qovery"),Object(r.b)("p",null,"To set up the application for Qovery deployment with a PostgreSQL database, create a ",Object(r.b)("inlineCode",{parentName:"p"},".qovery.yml")," file in the root of the project with the following content:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml",metastring:'title=".qovery.yml"',title:'".qovery.yml"'}),'application:\n  name: node-todo-app\n  project: migrate-from-heroku\n  publicly_accessible: true\ndatabases:\n- type: postgresql\n  version: "11.5"\n  name: my-postgresql-database\nrouters:\n- name: main\n  routes:\n  - application_name: node-todo-app\n    paths:\n    - /\n')),Object(r.b)(i.a,{mdxType:"Alert"},Object(r.b)("p",null,"For your future projects, you can use the ",Object(r.b)("inlineCode",{parentName:"p"},"qovery init")," command instead to configure your application.")),Object(r.b)("p",null,"The sample application uses ",Object(r.b)("inlineCode",{parentName:"p"},"DATABASE_URL")," environment variable to connect to PostgreSQL. To provide your app\nwith correct database URL, create a ",Object(r.b)("inlineCode",{parentName:"p"},".env")," file in the root of application repository with this content:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-plain",metastring:'title=".env"',title:'".env"'}),"DATABASE_URL=$QOVERY_DATABASE_MY_POSTGRESQL_DATABASE_CONNECTION_URI\n")),Object(r.b)("p",null,"Adding this file populates the ",Object(r.b)("inlineCode",{parentName:"p"},"DATABASE_URL")," environment variable (that is consumed often on Heroku)\nwith database URL provided by Qovery."),Object(r.b)("h3",{id:"deploy-the-application-to-qovery"},"Deploy the application to Qovery"),Object(r.b)("p",null,"All you need to do to deploy the application to Qovery is to commit and push a repository containing ",Object(r.b)("inlineCode",{parentName:"p"},"Dockerfile")," and ",Object(r.b)("inlineCode",{parentName:"p"},".qovery.yml")," to Github.\nQovery needs access to this repository to build and deploy the application."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/new"}),"Create a Github repository"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Remove current git configuration from the repository you cloned:"))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"rm -rf .git\n")),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"Initialize a new repository and commit all files:")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'git init\ngit add .\ngit commit -m "Deploying to Qovery"\n')),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"Push the local repository to the newly created Github repo (replace placeholders in the code below):")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git remote add origin https://github.com/$YOUR_NAME/$YOUR_REPOSITORY_NAME.git\ngit push -u origin master\n")),Object(r.b)("p",null,"Good job! It's all you need to do to deploy your application with a database to Qovery.\nTo confirm that your application is, in fact, deploying, run ",Object(r.b)("inlineCode",{parentName:"p"},"qovery status"),"."),Object(r.b)("p",null,"The output of the above command could look like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Output"',title:'"Output"'}),"BRANCH NAME       | STATUS  | ENDPOINTS                                   | APPLICATIONS    | DATABASES\nmaster            | running | https:/your.app.url.qovery.io               | node-todo-app   | my-postgresql-database\n\nAPPLICATION NAME  | STATUS  | DATABASES\nnode-todo-app     | running | my-postgresql-database\n\nDATABASE NAME            | STATUS  | TYPE         | VERSION  | ENDPOINT | PORT     | USERNAME | PASSWORD | APPLICATIONS\nmy-postgresql-database   | running | POSTGRESQL   | 11.5     | <hidden> | <hidden> | <hidden> | <hidden> | node-todo-app\n")),Object(r.b)("p",null,"The application should be deployed in a few minutes. When it's status is ",Object(r.b)("inlineCode",{parentName:"p"},"running"),", open the browser\nusing address specified in the ",Object(r.b)("inlineCode",{parentName:"p"},"ENDPOINTS")," section of ",Object(r.b)("inlineCode",{parentName:"p"},"qovery status")," output."),Object(r.b)("p",null,"You should see the same application you previously deployed to Heroku, yet without the data from the database."),Object(r.b)("h3",{id:"migrate-postgresql-data"},"Migrate PostgreSQL data"),Object(r.b)("p",null,"There are multiple paths you could take to migrate your data from Heroku Postgres to Qovery.\nFor production usage for the shortest downtime you would probably want to configure Qovery PostgreSQL as a replica to\nthe database on Heroku, and making it the primary instance after migration. Heroku does not support this in its free\ntier, so for the purpose of the example, we take a simpler path and use different tools to migrate the data."),Object(r.b)(i.a,{mdxType:"Alert"},Object(r.b)("p",null,"To run the migration successfully, you need a ",Object(r.b)("inlineCode",{parentName:"p"},"psql")," PostgreSQL client installed on your machine.")),Object(r.b)("p",null,"First, dump the data from your Heroku Postgres:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"heroku pg:backups:download -a YOUR_APPLICATION_NAME\nheroku pg:backups:capture -a YOUR_APPLICATION_NAME\n")),Object(r.b)("p",null,"It results in creating a new ",Object(r.b)("inlineCode",{parentName:"p"},"latest.dump")," file, which you use to transfer data to Qovery."),Object(r.b)("p",null,"To migrate the data to Qovery, run (replace all placeholders with values you get from running ",Object(r.b)("inlineCode",{parentName:"p"},"qovery application env list -c"),"):"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"pg_restore -v -h $DATABASE_HOST -U $DATABASE_USER -d postgres latest.dump --no-owner\n")),Object(r.b)("p",null,"In the browser, navigate to your application URL deployed on Qovery. Now you should see all the data you had in your database hosted on Heroku. Well done!"),Object(r.b)("h2",{id:"whats-next"},"What's next"),Object(r.b)(l.a,{to:"/guides/getting-started/setting-custom-domain",mdxType:"Jump"},"Setting Custom Domain"),Object(r.b)(l.a,{to:"/guides/advanced/using-multiple-environments",mdxType:"Jump"},"Using Multiple Environments"))}g.isMDXComponent=!0},333:function(e,t,a){"use strict";a(338);var n=a(0),o=a.n(n),r=a(331),i=a.n(r);a(131);t.a=function(e){var t=e.children,a=e.classNames,n=e.fill,r=e.icon,l=e.type,c=null;switch(l){case"danger":c="alert-triangle";break;case"success":c="check-circle";break;case"warning":c="alert-triangle";break;default:c="info"}return o.a.createElement("div",{className:i()(a,"alert","alert--"+l,{"alert--fill":n,"alert--icon":!1!==r}),role:"alert"},!1!==r&&o.a.createElement("i",{className:i()("feather","icon-"+(r||c))}),t)}},334:function(e,t,a){"use strict";var n=a(1),o=a(0),r=a.n(o),i=a(39),l=a(336),c=a(24),p=a.n(c);t.a=function(e){var t,a=e.to,c=e.href,s=a||c,u=Object(l.a)(s),b=Object(o.useRef)(!1),d=p.a.canUseIntersectionObserver;return Object(o.useEffect)((function(){return!d&&u&&window.docusaurus.prefetch(s),function(){d&&t&&t.disconnect()}}),[s,d,u]),s&&u?r.a.createElement(i.b,Object(n.a)({},e,{onMouseEnter:function(){b.current||(window.docusaurus.preload(s),b.current=!0)},innerRef:function(e){var a,n;d&&e&&u&&(a=e,n=function(){window.docusaurus.prefetch(s)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){a===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(a),t.disconnect(),n())}))}))).observe(a))},to:s})):r.a.createElement("a",Object(n.a)({},e,{href:s}))}},335:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(334),i=a(331),l=a.n(i);a(132);t.a=function(e){var t=e.children,a=e.className,n=e.badge,i=e.leftIcon,c=e.rightIcon,p=e.size,s=e.target,u=e.to,b=l()("jump-to","jump-to--"+p,a),d=o.a.createElement("div",{className:"jump-to--inner"},o.a.createElement("div",{className:"jump-to--inner-2"},i&&o.a.createElement("div",{className:"jump-to--left"},o.a.createElement("i",{className:"feather icon-"+i})),o.a.createElement("div",{className:"jump-to--main"},n?o.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",t),o.a.createElement("div",{className:"jump-to--right"},o.a.createElement("i",{className:"feather icon-"+(c||"chevron-right")+" arrow"}))));return s?o.a.createElement("a",{href:u,target:s,className:b},d):o.a.createElement(r.a,{to:u,className:b},d)}},336:function(e,t,a){"use strict";function n(e){return!1===/^(https?:|\/\/)/.test(e)}a.d(t,"a",(function(){return n}))},337:function(e,t,a){var n=a(25).f,o=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in o||a(10)&&n(o,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},339:function(e,t,a){"use strict";a(337);var n=a(0),o=a.n(n),r=a(333);t.a=function(e){var t=e.children,a=e.name;return o.a.createElement(r.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},o.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",a||"page"," assumes the following:"),t)}},343:function(e,t,a){"use strict";var n=a(1),o=(a(349),a(345),a(52),a(28),a(20),a(19),a(0)),r=a.n(o),i=a(351),l=a(331),c=a.n(l),p=a(342),s=a.n(p),u=a(350),b=37,d=39;function m(e){var t=e.block,a=e.centered,n=e.changeSelectedValue,o=e.className,i=e.handleKeydown,l=e.style,p=e.values,s=e.selectedValue,u=e.tabRefs;return r.a.createElement("div",{className:a?"tabs--centered":null},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:c()("tabs",o,{"tabs--block":t}),style:l},p.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":s===t,className:c()("tab-item",{"tab-item--active":s===t}),key:t,ref:function(e){return u.push(e)},onKeyDown:function(e){return i(u,e.target,e)},onFocus:function(){return n(t)},onClick:function(){return n(t)}},a)}))))}function h(e){var t=e.placeholder,a=e.selectedValue,n=e.changeSelectedValue,o=e.size,l=e.values,c=l;if(c[0].group){var p=_.groupBy(c,"group");c=Object.keys(p).map((function(e){return{label:e,options:p[e]}}))}return r.a.createElement(i.a,{className:"react-select-container react-select--"+o,classNamePrefix:"react-select",options:c,isClearable:a,placeholder:t,value:l.find((function(e){return e.value==a})),onChange:function(e){return n(e?e.value:null)}})}t.a=function(e){e.block,e.centered;var t=e.children,a=e.defaultValue,i=e.groupId,l=e.label,c=e.placeholder,p=e.select,g=e.size,y=(e.style,e.values),O=e.urlKey,f=Object(u.a)(),j=f.tabGroupChoices,v=f.setTabGroupChoices,N=Object(o.useState)(a),k=N[0],w=N[1];if(null!=i){var T=j[i];null!=T&&T!==k&&w(T)}var E=function(e){w(e),null!=i&&v(i,e)},A=[],S=function(e,t,a){switch(a.keyCode){case d:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}};return Object(o.useEffect)((function(){if("undefined"!=typeof window&&window.location&&O){var e=s.a.parse(window.location.search);e[O]&&w(e[O])}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"margin-bottom--"+(g||"md")},l&&r.a.createElement("div",{className:"margin-vert--sm"},l),y.length>1&&(p?r.a.createElement(h,Object(n.a)({changeSelectedValue:E,handleKeydown:S,placeholder:c,selectedValue:k,size:g,tabRefs:A},e)):r.a.createElement(m,Object(n.a)({changeSelectedValue:E,handleKeydown:S,selectedValue:k,tabRefs:A},e)))),o.Children.toArray(t).filter((function(e){return e.props.value===k}))[0])}},344:function(e,t,a){"use strict";var n=a(0),o=a.n(n);t.a=function(e){return o.a.createElement(o.a.Fragment,null,e.children)}},346:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=(a(331),a(342)),i=a.n(r);a(133);t.a=function(e){var t=e.children,a=e.headingDepth,r=e.hideFeedbackQuestion,l="undefined"!=typeof window?window.location:null,c={title:"Tutorial on "+l+" failed",body:"The tutorial on:\n\n"+l+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},p="https://github.com/qovery/documentation/issues/new?"+i.a.stringify(c),s=Object(n.useState)(null),u=s[0],b=s[1];return o.a.createElement("div",{className:"steps steps--h"+a},t,!r&&!u&&o.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",o.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return b("yes")}},"Yes"),"\xa0\xa0",o.a.createElement("a",{href:p,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==u&&o.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",o.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}}}]);