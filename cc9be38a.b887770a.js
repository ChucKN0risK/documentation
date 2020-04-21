(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{218:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return d}));var n=a(1),l=a(9),o=(a(0),a(243)),r=a(251),c=a(252),i={last_modified_on:"2020-04-21",$schema:"/.meta/.schemas/guides.json",title:"Hello World. Deploy your first application.",description:"How to deploy your first application with Qovery",series_position:1,author_github:"https://github.com/evoxmusic",tags:["type: guide"]},s={categories:[{name:"getting-started",title:"Getting Started",description:"Take Qovery from zero to production in under 10 minutes.",permalink:"/guides/getting-started"}],coverLabel:"Hello World. Deploy your first application.",description:"How to deploy your first application with Qovery",permalink:"/guides/getting-started/deploy-your-first-application",readingTime:"2 min read",seriesPosition:1,source:"@site/guides/getting-started/deploy-your-first-application.md",tags:[{label:"type: guide",permalink:"/guides/tags/type-guide"}],title:"Hello World. Deploy your first application.",truncated:!1,nextItem:{title:"Adding a database",permalink:"/guides/getting-started/adding-a-database"}},u=[{value:"Tutorial",id:"tutorial",children:[{value:"Install the CLI",id:"install-the-cli",children:[]},{value:"Sign up",id:"sign-up",children:[]}]},{value:"Next Steps",id:"next-steps",children:[]}],b={rightToc:u};function d(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Qovery is a straightforward way to deploy any application. In this guide, we'll deploy a Hello World ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://nodejs.org"}),"Node.JS")," application and touch on some basic concepts."),Object(o.b)("h2",{id:"tutorial"},"Tutorial"),Object(o.b)("h3",{id:"install-the-cli"},"Install the CLI"),Object(o.b)(r.a,{centered:!0,className:"rounded",defaultValue:"linux",placeholder:"Select your OS",select:!1,size:null,values:[{group:"Platforms",label:"Linux",value:"linux"},{group:"Platforms",label:"MacOS",value:"macos"},{group:"Platforms",label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"linux",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Download and install Qovery CLI on every Linux distribution\ncurl -s https://get.qovery.com | sudo bash\n"))),Object(o.b)(c.a,{value:"macos",mdxType:"TabItem"},Object(o.b)(r.a,{centered:!0,className:"rounded",defaultValue:"homebrew",values:[{label:"Homebrew",value:"homebrew"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"homebrew",mdxType:"TabItem"},Object(o.b)("p",null,"The common solution to install a command line binary on the MacOS is to use ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://brew.sh/"}),"Homebrew"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Add Qovery brew repository\nbrew tap Qovery/qovery-cli\n\n# Install the CLI\nbrew install qovery-cli\n"))),Object(o.b)(c.a,{value:"manual",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Install the Qovery CLI on MacOS manually\ncurl -s https://get.qovery.com | bash\n"))))),Object(o.b)(c.a,{value:"windows",mdxType:"TabItem"},Object(o.b)(r.a,{centered:!0,className:"rounded",defaultValue:"scoop",values:[{label:"Scoop",value:"scoop"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"scoop",mdxType:"TabItem"},Object(o.b)("p",null,"The classic way to install binaries on Windows is to use ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://brew.sh/"}),"Scoop"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Add Qovery bucket\nscoop bucket add qovery https://github.com/Qovery/scoop-qovery-cli\n\n# Install the CLI\nscoop install qovery-cli\n"))),Object(o.b)(c.a,{value:"manual",mdxType:"TabItem"},Object(o.b)("p",null,"Install the Qovery CLI on Windows manually by downloading the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Qovery/qovery-cli/releases"}),"latest realease"),", and uncompress its content to\n",Object(o.b)("inlineCode",{parentName:"p"},"C:\\Windows"),"."))))),Object(o.b)("h3",{id:"sign-up"},"Sign up"),Object(o.b)("p",null,"To sign up, run the following command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"qovery auth\n")),Object(o.b)("p",null,"Your browser window with sign-in options will open."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/qovery_signup.svg",alt:"Qovery Sign-up page"})),Object(o.b)("p",null,"Note: Qovery needs access to your account to be able to clone your repository for future application builds."),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/apps/qovery/installations/new"}),"Click here")," to authorize Qovery to clone and build your applications."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/github-connect.png",alt:"Connect Github"})),Object(o.b)("p",null,"Congratulations, you are logged-in."),Object(o.b)("h2",{id:"next-steps"},"Next Steps"),Object(o.b)("p",null,"If you expected something more interesting to happen then that's on you. The text came out unchanged because we didn't ask Vector to change it, we can remedy that by following the next guide in the series."))}d.isMDXComponent=!0},251:function(e,t,a){"use strict";var n=a(1),l=(a(259),a(250),a(52),a(25),a(19),a(20),a(0)),o=a.n(l),r=a(266),c=a(240),i=a.n(c),s=a(264),u=a.n(s),b=a(265),d=37,p=39;function m(e){var t=e.block,a=e.centered,n=e.changeSelectedValue,l=e.className,r=e.handleKeydown,c=e.style,s=e.values,u=e.selectedValue,b=e.tabRefs;return o.a.createElement("div",{className:a?"tabs--centered":null},o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:i()("tabs",l,{"tabs--block":t}),style:c},s.map((function(e){var t=e.value,a=e.label;return o.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":u===t,className:i()("tab-item",{"tab-item--active":u===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:function(e){return r(b,e.target,e)},onFocus:function(){return n(t)},onClick:function(){return n(t)}},a)}))))}function h(e){var t=e.placeholder,a=e.selectedValue,n=e.changeSelectedValue,l=e.size,c=e.values,i=c;if(i[0].group){var s=_.groupBy(i,"group");i=Object.keys(s).map((function(e){return{label:e,options:s[e]}}))}return o.a.createElement(r.a,{className:"react-select-container react-select--"+l,classNamePrefix:"react-select",options:i,isClearable:a,placeholder:t,value:c.find((function(e){return e.value==a})),onChange:function(e){return n(e?e.value:null)}})}t.a=function(e){e.block,e.centered;var t=e.children,a=e.defaultValue,r=e.groupId,c=e.label,i=e.placeholder,s=e.select,g=e.size,y=(e.style,e.values),v=e.urlKey,f=Object(b.a)(),O=f.tabGroupChoices,j=f.setTabGroupChoices,w=Object(l.useState)(a),T=w[0],N=w[1];if(null!=r){var x=O[r];null!=x&&x!==T&&N(x)}var I=function(e){N(e),null!=r&&j(r,e)},C=[],k=function(e,t,a){switch(a.keyCode){case p:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case d:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}};return Object(l.useEffect)((function(){if("undefined"!=typeof window&&window.location&&v){var e=u.a.parse(window.location.search);e[v]&&N(e[v])}}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"margin-bottom--"+(g||"md")},c&&o.a.createElement("div",{className:"margin-vert--sm"},c),y.length>1&&(s?o.a.createElement(h,Object(n.a)({changeSelectedValue:I,handleKeydown:k,placeholder:i,selectedValue:T,size:g,tabRefs:C},e)):o.a.createElement(m,Object(n.a)({changeSelectedValue:I,handleKeydown:k,selectedValue:T,tabRefs:C},e)))),l.Children.toArray(t).filter((function(e){return e.props.value===T}))[0])}},252:function(e,t,a){"use strict";var n=a(0),l=a.n(n);t.a=function(e){return l.a.createElement(l.a.Fragment,null,e.children)}}}]);