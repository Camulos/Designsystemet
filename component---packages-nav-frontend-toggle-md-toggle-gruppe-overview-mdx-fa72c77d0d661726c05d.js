(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{"1g+j":function(e,t,n){},PZAg:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ToggleGruppePure=t.ToggleGruppe=t.ToggleKnapp=t.ToggleKnappPure=void 0;var a=n("pH4S");Object.defineProperty(t,"ToggleKnappPure",{enumerable:!0,get:function(){return r(a).default}});var i=n("bkH5");Object.defineProperty(t,"ToggleKnapp",{enumerable:!0,get:function(){return r(i).default}});var o=n("wtFO");Object.defineProperty(t,"ToggleGruppe",{enumerable:!0,get:function(){return r(o).default}});var l=n("s164");Object.defineProperty(t,"ToggleGruppePure",{enumerable:!0,get:function(){return r(l).default}})},bkH5:function(e,t,n){"use strict";var r=n("QKC2"),a=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return i(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=o(n("mXGw")),p=n("FdHq"),c=l(n("pH4S")),u=function(e){function t(t){var n;return(n=e.call(this,t)||this).handleClick=function(e){var t=!n.state.pressed;n.setState({pressed:t}),n.props.onClick&&n.props.onClick(e,t)},n.state={pressed:t.pressed},n}return r(t,e),t.prototype.render=function(){var e=(0,p.omit)(this.props,"children","pressed");return s.createElement(c.default,Object.assign({pressed:this.state.pressed},e,{onClick:this.handleClick}),this.props.children)},t}(s.Component);u.defaultProps={pressed:!1},t.default=u},dLUU:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return u}));var r,a=n("+I+c"),i=(n("mXGw"),n("/FXl")),o=n("PZAg"),l=["components"],s={ingress:'ToggleGruppe er en samling av flere <a href="/components/toggleknapp">ToggleKnapper</a>. ToggleGruppe tar seg også av styling av ToggleKnapper slik at disse står helt inntil hverandre.'},p=(r="Example",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),c={_frontmatter:s};function u(e){var t=e.components,n=Object(a.a)(e,l);return Object(i.b)("wrapper",Object.assign({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("nav",{className:"table-of-contents"},Object(i.b)("ol",{parentName:"nav",className:"toc-level toc-level-1"},Object(i.b)("li",{parentName:"ol",className:"toc-item toc-item-h2"},Object(i.b)("a",{parentName:"li",className:"toc-link toc-link-h2",href:"#normal"},"Normal")),Object(i.b)("li",{parentName:"ol",className:"toc-item toc-item-h2"},Object(i.b)("a",{parentName:"li",className:"toc-link toc-link-h2",href:"#multiselect"},"MultiSelect")),Object(i.b)("li",{parentName:"ol",className:"toc-item toc-item-h2"},Object(i.b)("a",{parentName:"li",className:"toc-link toc-link-h2",href:"#minst-én"},"Minst én")),Object(i.b)("li",{parentName:"ol",className:"toc-item toc-item-h2"},Object(i.b)("a",{parentName:"li",className:"toc-link toc-link-h2",href:"#kompakt"},"Kompakt")))),Object(i.b)("h2",{id:"normal"},"Normal"),Object(i.b)("p",null,"I default varianten kan man bare aktivere èn ToggleKnapp om gangen."),Object(i.b)(p,{mdxType:"Example"},Object(i.b)(o.ToggleGruppe,{defaultToggles:[{children:"Mandag",pressed:!0},{children:"Tirsdag"},{children:"Onsdag"}],mdxType:"ToggleGruppe"})),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'<ToggleGruppe\n  defaultToggles={[\n    { children: "Mandag", pressed: true },\n    { children: "Tirsdag" },\n    { children: "Onsdag" },\n  ]}\n/>\n')),Object(i.b)("h2",{id:"multiselect"},"MultiSelect"),Object(i.b)("p",null,"For å tillate flere aktive ToggleKnapper samtidig kan man bruke ",Object(i.b)("inlineCode",{parentName:"p"},"multiSelect")," propen."),Object(i.b)(p,{mdxType:"Example"},Object(i.b)(o.ToggleGruppe,{defaultToggles:[{children:"Mandag",pressed:!0},{children:"Tirsdag"},{children:"Onsdag"}],multiSelect:!0,mdxType:"ToggleGruppe"})),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'<ToggleGruppe\n  defaultToggles={[\n    { children: "Mandag", pressed: true },\n    { children: "Tirsdag" },\n    { children: "Onsdag" },\n  ]}\n  multiSelect\n/>\n')),Object(i.b)("h2",{id:"minst-én"},"Minst én"),Object(i.b)("p",null,"Bruk ",Object(i.b)("inlineCode",{parentName:"p"},"minstEn")," propen for å håndheve at det alltid må være èn ToggleKnapp som er valgt."),Object(i.b)(p,{mdxType:"Example"},Object(i.b)(o.ToggleGruppe,{defaultToggles:[{children:"Mandag"},{children:"Tirsdag"},{children:"Onsdag"}],minstEn:!0,mdxType:"ToggleGruppe"})),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'<ToggleGruppe\n  defaultToggles={[\n    { children: "Mandag" },\n    { children: "Tirsdag" },\n    { children: "Onsdag" },\n  ]}\n  minstEn\n/>\n')),Object(i.b)("h2",{id:"kompakt"},"Kompakt"),Object(i.b)("p",null,"ToggleGruppe støtter også en ",Object(i.b)("inlineCode",{parentName:"p"},"kompakt")," variant som kan passe bra hvis ToggleKnappene har lite tekstinnhold eller bare ikoner."),Object(i.b)(p,{mdxType:"Example"},Object(i.b)(o.ToggleGruppe,{defaultToggles:[{children:"B",pressed:!0},{children:Object(i.b)("em",{style:{paddingLeft:2,paddingRight:2}},"I")},{children:Object(i.b)("span",{style:{textDecoration:"underline"}},"U")}],multiSelect:!0,kompakt:!0,mdxType:"ToggleGruppe"})),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'<ToggleGruppe\n  defaultToggles={[\n    { children: "B", pressed: true },\n    { children: <em style={{ paddingLeft: 2, paddingRight: 2 }}>I</em> },\n    { children: <span style={{ textDecoration: "underline" }}>U</span> },\n  ]}\n  multiSelect\n  kompakt\n/>\n')))}u.isMDXComponent=!0},pH4S:function(e,t,n){"use strict";var r=n("QKC2"),a=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return i(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ToggleKnappPurePropsShape=void 0;var s=o(n("mXGw")),p=o(n("W0B4")),c=l(n("8Jek")),u=n("FdHq");n("1g+j");var d=function(e){function t(){return e.apply(this,arguments)||this}return r(t,e),t.prototype.render=function(){var e,t=(0,u.omit)(this.props,"children","pressed","kompakt","isRequired"),n=(0,u.guid)();return s.createElement("button",Object.assign({type:"button",id:n,className:(e=this.props,(0,c.default)("toggleKnapp",{"toggleKnapp--pressed":e.pressed,"toggleKnapp--kompakt":e.kompakt})),"aria-pressed":this.props.pressed},t),this.props.children)},t}(s.PureComponent);d.defaultProps={pressed:!1},t.ToggleKnappPurePropsShape=p.shape({children:p.oneOfType([p.arrayOf(p.node),p.node]),pressed:p.bool,kompakt:p.bool,onChange:p.func}).isRequired,t.default=d},s164:function(e,t,n){"use strict";var r=n("QKC2"),a=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return i(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=o(n("mXGw")),p=l(n("8Jek")),c=n("FdHq"),u=o(n("pH4S"));n("1g+j");var d=function(e){function t(){return e.apply(this,arguments)||this}return r(t,e),t.prototype.render=function(){var e=this,t=(0,c.omit)(this.props,"className","children","kompakt","toggles","defaultToggles");return s.createElement("div",Object.assign({className:(0,p.default)("toggleGruppe",this.props.className)},t),this.props.toggles.map((function(t,n){return s.createElement(u.default,Object.assign({key:(0,c.guid)(),kompakt:e.props.kompakt},t))})))},t}(s.PureComponent);t.default=d},wtFO:function(e,t,n){"use strict";var r=n("QKC2"),a=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return i(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=o(n("mXGw")),p=n("FdHq"),c=l(n("s164")),u=(n("pH4S"),function(e){function t(t){var n;return(n=e.call(this,t)||this).handleClick=function(e,t,r){"function"==typeof r&&r(e);var a=n.state.active.map((function(e,r,a){return n.props.multiSelect?n.props.minstEn&&1===a.filter(Boolean).length&&a.indexOf(!0)===t?e:r===t?!e:e:n.props.minstEn?r===t:r===t&&!e}));n.setState({active:a}),"function"==typeof n.props.onChange&&n.props.onChange(e,n.props.defaultToggles.map((function(e,t){return Object.assign(Object.assign({},e),{pressed:a[t]})})))},n.state={active:n.props.defaultToggles.map((function(e,t,r){return e.pressed||!!n.props.minstEn&&0===t&&r.every((function(e){return!e.pressed}))}))},n}return r(t,e),t.prototype.render=function(){var e=this,t=(0,p.omit)(this.props,"children","multiSelect","toggles","minstEn"),n=this.props.defaultToggles.map((function(t,n){return Object.assign(Object.assign({},t),{pressed:e.state.active[n],kompakt:e.props.kompakt,onClick:function(r){return e.handleClick(r,n,t.onClick)}})}));return s.createElement(c.default,Object.assign({},t,{toggles:n}))},t}(s.Component));t.default=u}}]);
//# sourceMappingURL=component---packages-nav-frontend-toggle-md-toggle-gruppe-overview-mdx-fa72c77d0d661726c05d.js.map