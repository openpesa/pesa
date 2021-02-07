(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{88:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return i})),n.d(e,"metadata",(function(){return b})),n.d(e,"toc",(function(){return c})),n.d(e,"default",(function(){return p}));var r=n(3),a=n(7),l=(n(0),n(91)),i={id:"configuration",title:"Configuration"},b={unversionedId:"guide/configuration",id:"guide/configuration",isDocsHomePage:!1,title:"Configuration",description:"Options",source:"@site/docs/guide/configuration.md",slug:"/guide/configuration",permalink:"/php-pesa/guide/configuration",editUrl:"https://github.com/openpesa/php-pesa/edit/main/docs/guide/configuration.md",version:"current",sidebar:"someSidebar",previous:{title:"Installation",permalink:"/php-pesa/guide/installation"},next:{title:"PSR Compliance",permalink:"/php-pesa/guide/psr_compliance"}},c=[{value:"Options",id:"options",children:[]},{value:"Http Client Options",id:"http-client-options",children:[]}],o={toc:c};function p(t){var e=t.components,n=Object(a.a)(t,["components"]);return Object(l.b)("wrapper",Object(r.a)({},o,n,{components:e,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"options"},"Options"),Object(l.b)("p",null,"With simplicity in mind, php-pesa sdk is also flexible allowing several configutation to fine tune to your needs."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Attribute"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Data type"),Object(l.b)("th",{parentName:"tr",align:null},"Default value"),Object(l.b)("th",{parentName:"tr",align:null},"Available options"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"market"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"TZN"),Object(l.b)("td",{parentName:"tr",align:null},"TZN,GHA")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"currency"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"TZS"),Object(l.b)("td",{parentName:"tr",align:null},"TZS,GHS")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"api_key"),Object(l.b)("td",{parentName:"tr",align:null},"\u2705"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"null"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"public_key"),Object(l.b)("td",{parentName:"tr",align:null},"\u2705"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"null"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"enviroment"),Object(l.b)("td",{parentName:"tr",align:null},"\u2705"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"sandbox"),Object(l.b)("td",{parentName:"tr",align:null})))),Object(l.b)("h2",{id:"http-client-options"},"Http Client Options"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Attribute"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"default value"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"header"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c"),Object(l.b)("td",{parentName:"tr",align:null},"{}")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"origin"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c"),Object(l.b)("td",{parentName:"tr",align:null},"*")))))}p.isMDXComponent=!0},91:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return O}));var r=n(0),a=n.n(r);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=a.a.createContext({}),p=function(t){var e=a.a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):b(b({},e),t)),n},u=function(t){var e=p(t.components);return a.a.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},m=a.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,o=c(t,["components","mdxType","originalType","parentName"]),u=p(n),m=r,O=u["".concat(i,".").concat(m)]||u[m]||d[m]||l;return n?a.a.createElement(O,b(b({ref:e},o),{},{components:n})):a.a.createElement(O,b({ref:e},o))}));function O(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var b={};for(var c in e)hasOwnProperty.call(e,c)&&(b[c]=e[c]);b.originalType=t,b.mdxType="string"==typeof t?t:r,i[1]=b;for(var o=2;o<l;o++)i[o]=n[o];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);