(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{"0Q93":function(e,t,n){"use strict";var r=n("QKC2"),a=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||a(t,e,n)},o=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.defaultRules=void 0;var u=n("mXGw"),c=n("RL/p"),l=n("Z2x/"),s=n("RL/p");Object.defineProperty(t,"LinebreakRule",{enumerable:!0,get:function(){return s.LinebreakRule}}),Object.defineProperty(t,"HighlightRule",{enumerable:!0,get:function(){return s.HighlightRule}}),Object.defineProperty(t,"createDynamicHighlightingRule",{enumerable:!0,get:function(){return s.createDynamicHighlightingRule}}),Object.defineProperty(t,"BoldRule",{enumerable:!0,get:function(){return s.BoldRule}}),i(n("Z2x/"),t),t.defaultRules=[l.LinkRule,c.LinebreakRule,l.ParagraphRule];var p=function(e){function t(){return e.apply(this,arguments)||this}return r(t,e),t.prototype.render=function(){var e=this.props,t=e.as,n=e.children,r=e.ingenFormattering,a=e.rules,i=o(e,["as","children","ingenFormattering","rules"]);if(r)return u.createElement("div",Object.assign({},i),n);var l=c.parse(n,a),s=c.build(l,a);return u.createElement(t,i,s)},t}(u.Component);p.defaultProps={as:"div",ingenFormattering:!1,rules:t.defaultRules},t.default=p},"11ZY":function(e,t,n){var r=n("Hvpk"),a=n("nRc6"),i=n("gDYM"),o=n("ujzH");e.exports=r?Object.defineProperties:function(e,t){i(e);for(var n,r=o(t),u=r.length,c=0;u>c;)a.f(e,n=r[c++],t[n]);return e}},"3I4I":function(e,t,n){"use strict";var r=n("h/Mk"),a=n("zrDt"),i=n("a72Q"),o=function(e,t,n,u,c,l,s,p){for(var f,m=c,b=0,g=!!s&&i(s,p,3);b<u;){if(b in n){if(f=g?g(n[b],b,t):n[b],l>0&&r(f))m=o(e,t,f,a(f.length),m,l-1)-1;else{if(m>=9007199254740991)throw TypeError("Exceed the acceptable array length");e[m]=f}m++}b++}return m};e.exports=o},"9pAD":function(e,t,n){var r=n("Qean");e.exports=function(e){return Object(r(e))}},DrPB:function(e,t,n){"use strict";n("SJSz"),n("RsBt");var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},a=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),a=0;for(t=0;t<n;t++)for(var i=arguments[t],o=0,u=i.length;o<u;o++,a++)r[a]=i[o];return r};Object.defineProperty(t,"__esModule",{value:!0});var i=n("mXGw"),o=n("vXy6"),u=n("F2uH");function c(e,t){return u.flatMap(e,(function(e){return l(e,t)}))}function l(e,t,n){if(void 0===n&&(n=!0),"string"==typeof e){var r=function(e,t){return t.map((function(t){var n=u.match(t.regex,e);return n?{match:n,rule:t}:null})).filter((function(e){return e})).reduce(u.minBy((function(e){return e?e.match.index:Number.MAX_SAFE_INTEGER})),null)}(e,t);if(!r)return[e];var i=function(e,t){var n=t.match.index,r=t.match.index+t.match.fullmatch.length;return[[e.slice(0,n)],[e.slice(r)]]}(e,r).map((function(e){return c(e,t)})),o=i[0],s=i[1],p=function(e,t,n){var r=e.rule.parse(e.match);return n?l(r,t.filter((function(t){return t!==e.rule}))):[r]}(r,t,n);return a(o,p,s)}return[{name:e.name,content:c(e.content,t)}]}function s(e){return"string"==typeof e?0===e.length?[]:[e]:[{name:e.name,content:u.flatMap(e.content,s)}]}t.parse=function(e,t){var n=e.trim().replace(/\r/g,""),r=function(e){return{blockRules:e.filter((function(e){return e.scope===o.RuleScope.BLOCK})),inlineRules:e.filter((function(e){return e.scope===o.RuleScope.INLINE}))}}(t),a=r.blockRules,i=r.inlineRules,c=[n],p=u.flatMap(c,(function(e){return l(e,a,!1)})),f=u.flatMap(p,(function(e){return l(e,i)}));return u.flatMap(f,s)},t.build=function(e,t){var n=t.reduce((function(e,t){var n;return r(r({},e),((n={})[t.name]=t,n))}),{}),a=e.map((function(t,a){return function e(t,n,a,o){var u;if("string"==typeof a)return a;var c=n[a.name].react(a,t),l=0===(null===(u=c.children)||void 0===u?void 0:u.length)||0===a.content.length?void 0:c.children||a.content.map((function(r,a){return e(t,n,r,a)}));return i.createElement(c.type,r(r({},c.props),{key:o}),l)}(e,n,t,a)}));return i.createElement(i.Fragment,{},a)}},F2uH:function(e,t,n){"use strict";n("SJSz"),n("RsBt"),Object.defineProperty(t,"__esModule",{value:!0}),t.match=function(e,t){var n=e.exec(t);return n?{fullmatch:n[0],capture:n.slice(1),index:n.index,input:n.input}:null},t.minBy=function(e){return function(t,n){return null===t?n:e(t)<e(n)?t:n}},t.getText=function e(t){return"string"==typeof t?t:Array.isArray(t)?t.map(e).join(""):t.content.map(e).join("")},t.flatMap=function(e,t){var n;return(n=Array.prototype).concat.apply(n,e.map(t))}},Mbqk:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return p}));var r,a=n("+I+c"),i=(n("mXGw"),n("/FXl")),o=n("0Q93"),u=n.n(o),c={ingress:"Tekstområde er en ren teknisk komponent som lar utviklere parse tekst (strings), og automatisk rendre HTML-markup med f.eks. avsnitt og lenker."},l=(r="Example",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),s={_frontmatter:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("nav",{className:"table-of-contents"},Object(i.b)("ol",Object.assign({parentName:"nav"},{className:"toc-level toc-level-1"}),Object(i.b)("li",Object.assign({parentName:"ol"},{className:"toc-item toc-item-h2"}),Object(i.b)("a",Object.assign({parentName:"li"},{className:"toc-link toc-link-h2",href:"#standard-bruk"}),"Standard bruk")),Object(i.b)("li",Object.assign({parentName:"ol"},{className:"toc-item toc-item-h2"}),Object(i.b)("a",Object.assign({parentName:"li"},{className:"toc-link toc-link-h2",href:"#avansert-bruk"}),"Avansert bruk")))),Object(i.b)("h2",{id:"standard-bruk"},"Standard bruk"),Object(i.b)("p",null,"Standard oppsettet håndterer avsnitt, linjeskift og lenker.\nKomponent har som mål at struktur av tekst visuelt beholdes, dvs linjeskift i input-teksten ivaretas av komponenten."),Object(i.b)(l,{mdxType:"Example"},Object(i.b)(u.a,{mdxType:"Tekstomrade"},"En komponent som tar ansvar for å brekke opp \ntekst i avsnitt, og \nlegge til lenker.\n\nVi kan f.eks lenke til www.nav.no, og ha flere lenker på samme linje. (Les mer her; https://nav.no)")),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"<Tekstomrade>\n  {`En komponent som tar ansvar for å brekke opp \\ntekst i avsnitt, og \\nlegge til lenker.\\n\\nVi kan f.eks lenke til www.nav.no, og ha flere lenker på samme linje. (Les mer her; https://nav.no)`}\n</Tekstomrade>\n")),Object(i.b)("h2",{id:"avansert-bruk"},"Avansert bruk"),Object(i.b)("p",null,"Komponenten er regel-basert, og åpner opp for at konsumenter kan lage sine egne rendering-regler ved behov.\nFor å endre reglene som er aktive kan man sende inn en liste av regler man ønsker via ",Object(i.b)("inlineCode",{parentName:"p"},"rules"),"-propen."),Object(i.b)(l,{mdxType:"Example"},Object(i.b)(u.a,{rules:[o.HighlightRule,o.BoldRule,Object(o.createDynamicHighlightingRule)(["ruk"])],mdxType:"Tekstomrade"},"*Vi* kan bruke helt egne regler _her_")),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'import Tekstomrade, {\n  createDynamicHighlightingRule,\n  HighlightRule,\n  BoldRule,\n} from "nav-frontend-tekstomrade";\n\n<Tekstomrade\n  rules={[HighlightRule, BoldRule, createDynamicHighlightingRule(["ruk"])]}\n>\n  {`*Vi* kan bruke helt egne regler _her_`}\n</Tekstomrade>;\n')),Object(i.b)("p",null,"Komponenten kommer med ett sett av ferdig-implementerte regler;"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"LinebreakRule")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ParagraphRule")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"HighlightRule")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"createDynamicHighlightingRule")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"BoldRule")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"LinkRule"))),Object(i.b)("p",null,"For dokumentasjon av regel-utvikling se ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/navikt/textparser"}),"parser biblioteket")))}p.isMDXComponent=!0},OsNz:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("vXy6"),a=n("F2uH");function i(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}t.LinebreakRule={name:"Linebreak",scope:r.RuleScope.INLINE,regex:/\n(?!\n)/,parse:function(e){return{name:this.name,content:[]}},react:function(e){return{type:"br"}}},t.ParagraphRule={name:"Paragraph",scope:r.RuleScope.BLOCK,regex:/((?:.|\s)+?)(?:\n{2,}|$)/,parse:function(e){return{name:this.name,content:[e.capture[0]]}},react:function(e){return{type:"p"}}},t.HighlightRule={name:"Highlight",scope:r.RuleScope.INLINE,regex:/\*([^*]+?)\*(?!\*)/,parse:function(e){return{name:this.name,content:[e.capture[0]]}},react:function(e){return{type:"em"}}},t.createDynamicHighlightingRule=function(e){var t=e.filter((function(e){return e.length>0})).map(i).join("|"),n=t.length>0?RegExp("(\\b\\S*(?:"+t+")\\S*\\b)","i"):/\\u0000/;return{name:"DynamicHighlight",scope:r.RuleScope.INLINE,regex:n,parse:function(e){return{name:this.name,content:[e.capture[0]]}},react:function(e){return{type:"em"}}}},t.BoldRule={name:"Bold",scope:r.RuleScope.INLINE,regex:/_([^_]+?)_(?!_)/,parse:function(e){return{name:this.name,content:[e.capture[0]]}},react:function(e){return{type:"b"}}},t.LinkRule={name:"Link",scope:r.RuleScope.INLINE,regex:/((?:[\w-]+:\/\/?|www(?:-\w+)?\.)[^\s()<>]+\w)/,startsWithHttp:/^(https?):\/\/.*$/,parse:function(e){return{name:this.name,content:[e.capture[0]]}},react:function(e){var t=a.getText(e);return{type:"a",props:{href:this.startsWithHttp.test(t)?t:"https://"+t,target:"_blank",rel:"noopener"}}}}},R1TW:function(e,t,n){var r=n("UVdV");e.exports=r("document","documentElement")},"RL/p":function(e,t,n){"use strict";function r(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),r(n("DrPB")),r(n("vXy6")),r(n("OsNz"));var a=n("F2uH");t.Utils=a},RsBt:function(e,t,n){n("d5e9")("flatMap")},SJSz:function(e,t,n){"use strict";var r=n("JRM0"),a=n("3I4I"),i=n("9pAD"),o=n("zrDt"),u=n("jmUq"),c=n("iSxr");r({target:"Array",proto:!0},{flatMap:function(e){var t,n=i(this),r=o(n.length);return u(e),(t=c(n,0)).length=a(t,n,n,r,0,1,e,arguments.length>1?arguments[1]:void 0),t}})},"Z2x/":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LinkRule=t.ParagraphRule=void 0;var r=n("RL/p"),a=n("b4v9"),i=n("jPj1"),o=n("F2uH");t.ParagraphRule=Object.assign(Object.assign({},r.ParagraphRule),{react:function(e,t){return{props:t.indexOf(e)===t.length-1?void 0:{className:"blokk-xs"},type:i.Normaltekst}}}),t.LinkRule=Object.assign(Object.assign({},r.LinkRule),{react:function(e){var t=o.getText(e),n=this.startsWithHttp.test(t)?t:"https://"+t;return{type:a.default,props:{href:n,target:"_blank"}}}})},a72Q:function(e,t,n){var r=n("jmUq");e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,a){return e.call(t,n,r,a)}}return function(){return e.apply(t,arguments)}}},d5e9:function(e,t,n){var r=n("GHf2"),a=n("w/Ji"),i=n("nRc6"),o=r("unscopables"),u=Array.prototype;null==u[o]&&i.f(u,o,{configurable:!0,value:a(null)}),e.exports=function(e){u[o][e]=!0}},"h/Mk":function(e,t,n){var r=n("fSIz");e.exports=Array.isArray||function(e){return"Array"==r(e)}},iSxr:function(e,t,n){var r=n("fT8P"),a=n("h/Mk"),i=n("GHf2")("species");e.exports=function(e,t){var n;return a(e)&&("function"!=typeof(n=e.constructor)||n!==Array&&!a(n.prototype)?r(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},ujzH:function(e,t,n){var r=n("8OJN"),a=n("ek/P");e.exports=Object.keys||function(e){return r(e,a)}},vXy6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.BLOCK=0]="BLOCK",e[e.INLINE=1]="INLINE"}(t.RuleScope||(t.RuleScope={}))},"w/Ji":function(e,t,n){var r,a=n("gDYM"),i=n("11ZY"),o=n("ek/P"),u=n("s3NK"),c=n("R1TW"),l=n("HRgQ"),s=n("3pC9"),p=s("IE_PROTO"),f=function(){},m=function(e){return"<script>"+e+"<\/script>"},b=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(a){}var e,t;b=r?function(e){e.write(m("")),e.close();var t=e.parentWindow.Object;return e=null,t}(r):((t=l("iframe")).style.display="none",c.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(m("document.F=Object")),e.close(),e.F);for(var n=o.length;n--;)delete b.prototype[o[n]];return b()};u[p]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(f.prototype=a(e),n=new f,f.prototype=null,n[p]=e):n=b(),void 0===t?n:i(n,t)}}}]);
//# sourceMappingURL=component---packages-nav-frontend-tekstomrade-md-tekstomrade-overview-mdx-ab96af6abedb9adc7cf3.js.map