(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{151:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return u})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return m})),r.d(t,"default",(function(){return d}));var n=r(1),a=r(9),o=(r(0),r(219)),i=r(223),c=r(222),s=r.n(c),u={last_modified_on:"2020-04-18",$schema:"/.meta/.schemas/guides.json",title:"Customizing routes",description:"How to set up routers in your project",series_position:4,author_github:"https://github.com/pjeziorowski",tags:["type: guide","domain: networking"]},l={categories:[{name:"advanced",title:"Advanced",description:"Go beyond the basics, become a Vector pro, and extract the full potential of Vector.",permalink:"/guides/advanced"}],coverLabel:"Customizing routes",description:"How to set up routers in your project",permalink:"/guides/advanced/customizing-routing",readingTime:"1 min read",seriesPosition:4,source:"@site/guides/advanced/customizing-routing.md",tags:[{label:"type: guide",permalink:"/guides/tags/type-guide"},{label:"domain: networking",permalink:"/guides/tags/domain-networking"}],title:"Customizing routes",truncated:!1,prevItem:{title:"Microservices",permalink:"/guides/advanced/microservices"}},m=[],p={rightToc:m};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)(s.a,{src:"/img/components.svg",mdxType:"SVG"}),"Installing Vector manually should be a last resort if Vector cannot be",Object(o.b)(i.a,{to:"/guides/getting-started/",mdxType:"Jump"},"Get started"))}d.isMDXComponent=!0},219:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return g}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},m=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=n,g=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return r?a.a.createElement(g,c({ref:t},u,{components:r})):a.a.createElement(g,c({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},223:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(220),i=r(218),c=r.n(i);r(131);t.a=function(e){var t=e.children,r=e.className,n=e.badge,i=e.leftIcon,s=e.rightIcon,u=e.size,l=e.target,m=e.to,p=c()("jump-to","jump-to--"+u,r),d=a.a.createElement("div",{className:"jump-to--inner"},a.a.createElement("div",{className:"jump-to--inner-2"},i&&a.a.createElement("div",{className:"jump-to--left"},a.a.createElement("i",{className:"feather icon-"+i})),a.a.createElement("div",{className:"jump-to--main"},n?a.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",t),a.a.createElement("div",{className:"jump-to--right"},a.a.createElement("i",{className:"feather icon-"+(s||"chevron-right")+" arrow"}))));return l?a.a.createElement("a",{href:m,target:l,className:p},d):a.a.createElement(o.a,{to:m,className:p},d)}}}]);