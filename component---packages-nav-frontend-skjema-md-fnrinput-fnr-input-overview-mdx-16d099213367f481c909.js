(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{sMLx:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return c})),t.d(n,"default",(function(){return d}));var a,r=t("+I+c"),o=t("mXGw"),l=t.n(o),u=t("/FXl"),i=(t("X0E2"),t("xBFs")),s=function(){var e=Object(o.useState)(!1),n=e[0],t=e[1],a=Object(o.useState)(""),r=a[0],u=a[1],s=Object(o.useState)(!1),c=s[0],m=s[1];return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),m(!n)}(e)}},l.a.createElement(i.FnrInput,{label:"Fødselsnummer (11 siffer)",bredde:"S",value:r,onChange:function(e){return function(e){u(e.target.value),n&&c&&m(!1)}(e)},onValidate:function(e){return t(e)},feil:c&&!n?"Ugyldig fødselsnummer":void 0})))},c={ingress:'FnrInput er et vanlig nummerisk <a href="/components/input">Input</a>-felt som har innebygget funksjonalitet for validering av fødselsnummer.'},m=(a="Example",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(u.b)("div",e)}),b={_frontmatter:c};function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(u.b)("wrapper",Object.assign({},b,t,{components:n,mdxType:"MDXLayout"}),Object(u.b)("nav",{className:"table-of-contents"},Object(u.b)("ol",{parentName:"nav",className:"toc-level toc-level-1"})),Object(u.b)("p",null,"Komponenten bruker ",Object(u.b)("a",{parentName:"p",href:"https://github.com/navikt/fnrvalidator"},"@navikt/fnrvalidator")," internt for å validere brukers input."),Object(u.b)(m,{mdxType:"Example"},Object(u.b)(s,{mdxType:"FnrInputExample"})),Object(u.b)("pre",null,Object(u.b)("code",{parentName:"pre",className:"language-jsx"},'<form onSubmit={(e) => handleSubmit(e)}>\n  <FnrInput\n    label="Fødselsnummer (11 siffer)"\n    bredde="S"\n    value={value}\n    onChange={(e) => handleChange(e)}\n    onValidate={(val) => setValid(val)}\n    feil={submit && !valid ? "Ugyldig fødselsnummer" : undefined}\n  />\n</form>\n')))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---packages-nav-frontend-skjema-md-fnrinput-fnr-input-overview-mdx-16d099213367f481c909.js.map