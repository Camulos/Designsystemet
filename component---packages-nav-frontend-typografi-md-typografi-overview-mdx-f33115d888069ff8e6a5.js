(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{"6aFe":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return o}));var s,r=n("+I+c"),l=(n("mXGw"),n("/FXl")),a=n("jPj1"),b=n("QS/n"),d=n.n(b),i={ingress:"Typografi-pakken vår består av flere tekstkomponenter med forhåndsbestemt størrelse og styling."},p=(s="Example",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",e)}),m={_frontmatter:i};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object.assign({},m,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("nav",{className:"table-of-contents"},Object(l.b)("ol",{parentName:"nav",className:"toc-level toc-level-1"},Object(l.b)("li",{parentName:"ol",className:"toc-item toc-item-h2"},Object(l.b)("a",{parentName:"li",className:"toc-link toc-link-h2",href:"#nytt-typografi-oppsett-beta"},"Nytt typografi-oppsett (beta)")),Object(l.b)("li",{parentName:"ol",className:"toc-item toc-item-h2"},Object(l.b)("a",{parentName:"li",className:"toc-link toc-link-h2",href:"#bruk-av-typografi-i-prosjekter"},"Bruk av Typografi i prosjekter")),Object(l.b)("li",{parentName:"ol",className:"toc-item toc-item-h2"},Object(l.b)("a",{parentName:"li",className:"toc-link toc-link-h2",href:"#alle-vekter"},"Alle vekter")),Object(l.b)("li",{parentName:"ol",className:"toc-item toc-item-h2"},Object(l.b)("a",{parentName:"li",className:"toc-link toc-link-h2",href:"#selvbestemt-html-tag"},"Selvbestemt HTML-tag")))),Object(l.b)("h2",{id:"nytt-typografi-oppsett-beta"},"Nytt typografi-oppsett (beta)"),Object(l.b)("p",null,"Vi har nå en ny og forbedret typografi-løsning for både react og css i beta. Vi anbefaler\nalle å ta en titt på dette og ta den i bruk hvis ønskelig."),Object(l.b)("p",null,"For nå kan man finne dokumentasjon om hvordan man tar denne i bruk her:"),Object(l.b)(d.a,{href:"https://navikt.github.io/Designsystemet/?path=/story/ds-react-typography-intro--page",className:"resource-link",border:!0,mdxType:"Lenkepanel"},"Typografi storybook"),Object(l.b)("h2",{id:"bruk-av-typografi-i-prosjekter"},"Bruk av Typografi i prosjekter"),Object(l.b)("p",null,"For å sikre at prosjektet ditt får riktig typografi bruker typografi-komponenten vår denne CSS-klassen fra ",Object(l.b)("inlineCode",{parentName:"p"},"nav-frontend-typografi-style"),"."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-css"},".app {\n  .typo-normal-mixin();\n  color: @navMorkGra;\n  font-family: @font-family;\n  line-height: @line-height-base;\n}\n")),Object(l.b)("p",null,"Det antas da at prosjektet er pakket inn under CSS-klassen ",Object(l.b)("inlineCode",{parentName:"p"},".app")," å disse blir da lagt til der. Hvis dette ikke er tilfellet i prosjektet ditt,\nkan det være greit å legge til manuelt da man sikrer at hele prosjektet får riktig typografi.\nDette kan gjøres ved å legge til"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-less"},'@import (reference) "~nav-frontend-typografi-style/src/index.less";\n')),Object(l.b)("p",null,"i ønsket less fil og da legge til klassen ",Object(l.b)("inlineCode",{parentName:"p"},"app")," på elementet som pakker in prosjektet ditt."),Object(l.b)("h2",{id:"alle-vekter"},"Alle vekter"),Object(l.b)(p,{mdxType:"Example"},Object(l.b)(a.Sidetittel,{mdxType:"Sidetittel"},"Sidetittel"),Object(l.b)(a.Undertekst,{mdxType:"Undertekst"},"Font size: 40px"),Object(l.b)(a.Undertekst,{mdxType:"Undertekst"},"Line height: 44px"),Object(l.b)(a.Undertekst,{mdxType:"Undertekst"},"Font weight: 600 semi bold")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},'<Sidetittel>Sidetittel</Sidetittel>\n<h1 className="typo-sidetittel">Sidetittel</h1>\n')),Object(l.b)(p,{mdxType:"Example"},Object(l.b)(a.Innholdstittel,{mdxType:"Innholdstittel"},"Innholdstittel"),Object(l.b)(a.Undertekst,{mdxType:"Undertekst"},"Font size: 32px"),Object(l.b)(a.Undertekst,{mdxType:"Undertekst"},"Line height: 36px"),Object(l.b)(a.Undertekst,{mdxType:"Undertekst"},"Font weight: 600 semi bold")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},'<Innholdstittel>Innholdstittel</Innholdstittel>\n<h1 className="typo-innholdstittel">Innholdstittel</h1>\n')),Object(l.b)(p,{mdxType:"Example"},Object(l.b)(a.Systemtittel,{mdxType:"Systemtittel"},"Systemtittel"),Object(l.b)(a.Undertekst,{mdxType:"Undertekst"},"Font size: 24px"),Object(l.b)(a.Undertekst,{mdxType:"Undertekst"},"Line height: 28px"),Object(l.b)(a.Undertekst,{mdxType:"Undertekst"},"Font weight: 600 semi bold")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},'<Systemtittel>Systemtittel</Systemtittel>\n<h2 className="typo-systemtittel">Systemtittel</h2>\n')),Object(l.b)(p,{mdxType:"Example"},Object(l.b)(a.Undertittel,{mdxType:"Undertittel"},"Undertittel"),Object(l.b)(a.Undertekst,{mdxType:"Undertekst"},"Font size: 20px"),Object(l.b)(a.Undertekst,{mdxType:"Undertekst"},"Line height: 25px"),Object(l.b)(a.Undertekst,{mdxType:"Undertekst"},"Font weight: 600 semi bold")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},'<Undertittel>Undertittel</Undertittel>\n<h2 className="typo-undertittel">Undertittel</h2>\n')),Object(l.b)(p,{mdxType:"Example"},Object(l.b)(a.Ingress,{mdxType:"Ingress"},"Ingress"),Object(l.b)(a.Undertekst,{mdxType:"Undertekst"},"Font size: 18px"),Object(l.b)(a.Undertekst,{mdxType:"Undertekst"},"Line height: 26px"),Object(l.b)(a.Undertekst,{mdxType:"Undertekst"},"Font weight: 400 regular")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},'<Ingress>Ingress</Ingress>\n<p className="typo-ingress">Ingress</p>\n')),Object(l.b)(p,{mdxType:"Example"},Object(l.b)(a.Element,{mdxType:"Element"},"Element"),Object(l.b)(a.Undertekst,{mdxType:"Undertekst"},"Font size: 16px"),Object(l.b)(a.Undertekst,{mdxType:"Undertekst"},"Line height: 22px"),Object(l.b)(a.Undertekst,{mdxType:"Undertekst"},"Font weight: 600 semi bold")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},'<Element>Element</Element>\n<p className="typo-element">Element</p>\n')),Object(l.b)(p,{mdxType:"Example"},Object(l.b)(a.Feilmelding,{mdxType:"Feilmelding"},"Feilmelding"),Object(l.b)(a.Undertekst,{mdxType:"Undertekst"},"Font size: 16px"),Object(l.b)(a.Undertekst,{mdxType:"Undertekst"},"Line height: 22px"),Object(l.b)(a.Undertekst,{mdxType:"Undertekst"},"Font weight: 600 semi bold")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},'<Feilmelding>Feilmelding</Feilmelding>\n<p className="typo-feilmelding">Feilmelding</p>\n')),Object(l.b)(p,{mdxType:"Example"},Object(l.b)(a.Normaltekst,{mdxType:"Normaltekst"},"Normaltekst"),Object(l.b)(a.Undertekst,{mdxType:"Undertekst"},"Font size: 16px"),Object(l.b)(a.Undertekst,{mdxType:"Undertekst"},"Line height: 22px"),Object(l.b)(a.Undertekst,{mdxType:"Undertekst"},"Font weight: 400 regular")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},'<Normaltekst>Normaltekst</Normaltekst>\n<p className="typo-normal">Normaltekst</p>\n')),Object(l.b)(p,{mdxType:"Example"},Object(l.b)(a.Undertekst,{mdxType:"Undertekst"},"Undertekst"),Object(l.b)(a.Undertekst,{mdxType:"Undertekst"},"Font size: 14px"),Object(l.b)(a.Undertekst,{mdxType:"Undertekst"},"Line height: 20px"),Object(l.b)(a.Undertekst,{mdxType:"Undertekst"},"Font weight: 400 regular")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},'<Undertekst>Undertekst</Undertekst>\n<p className="typo-undertekst">Undertekst</p>\n')),Object(l.b)(p,{mdxType:"Example"},Object(l.b)(a.UndertekstBold,{mdxType:"UndertekstBold"},"UndertekstBold"),Object(l.b)(a.Undertekst,{mdxType:"Undertekst"},"Font size: 14px"),Object(l.b)(a.Undertekst,{mdxType:"Undertekst"},"Line height: 20px"),Object(l.b)(a.Undertekst,{mdxType:"Undertekst"},"Font weight: 600 semi bold")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},'<UndertekstBold>UndertekstBold</UndertekstBold>\n<p className="typo-undertekst-bold">UndertekstBold</p>\n')),Object(l.b)("h2",{id:"selvbestemt-html-tag"},"Selvbestemt HTML-tag"),Object(l.b)("p",null,"Du kan selv bestemme hvilken HTML-tag de forskjellige typografi-vektene skal bruke. For eksempel kan du overstyre ",Object(l.b)("inlineCode",{parentName:"p"},"h1"),"-defaulten for\n",Object(l.b)("inlineCode",{parentName:"p"},"Sidetittel")," med ",Object(l.b)("inlineCode",{parentName:"p"},"h4")," slik:"),Object(l.b)(p,{mdxType:"Example"},Object(l.b)(a.Sidetittel,{tag:"h4",mdxType:"Sidetittel"},"Sidetittel")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},'<Sidetittel tag="h4">Sidetittel</Sidetittel>\n')))}o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---packages-nav-frontend-typografi-md-typografi-overview-mdx-f33115d888069ff8e6a5.js.map