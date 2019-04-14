(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return i}),n.d(t,"pageQuery",function(){return c});var a=n(0),r=n.n(a),o=n(157);function i(e){var t=e.data.markdownRemark,n=t.frontmatter,a=t.html;return r.a.createElement(o.a,{className:"blog-post-container"},r.a.createElement(o.a.Panel,null,r.a.createElement("div",{className:"blog-post"},r.a.createElement("h1",null,n.title),r.a.createElement("h2",null,n.date),r.a.createElement("div",{className:"blog-post-content",dangerouslySetInnerHTML:{__html:a}}))))}var c="1647851348"},147:function(e,t,n){"use strict";n.d(t,"c",function(){return u}),n.d(t,"a",function(){return p}),n.d(t,"b",function(){return d});n(160);var a=n(161),r=n.n(a),o=12;function i(e){return r()(e)*o}function c(e){return i(e)+"px"}var l={typography:{color:"#403F41",popColor:"#738B7E",subtleColor:"#E6E5E5",fontSize:{"-2":c(-2),"-1":c(-1),0:c(0),1:c(1),2:c(2),3:c(3),4:c(4),5:c(5)}},spacings:{0:i(0)+"px",1:i(1)/4+"px",2:i(2)/4+"px",3:i(3)/4+"px",4:i(4)/4+"px",5:i(5)/4+"px"}};function u(e){return e&&l.typography[e]?l.typography[e]:l.typography}function p(e){return void 0===e&&(e=0),l.typography.fontSize[e]}function d(e){return void 0===e&&(e=0),l.spacings[e]}},149:function(e,t,n){"use strict";n(34);var a=n(74),r=n.n(a),o=n(0),i=n.n(o),c=n(148),l=n(147),u=c.b.h1.withConfig({displayName:"Heading__H1",componentId:"ww4wv3-0"})(["font-size:",";margin-top:",";margin-bottom:",";"],Object(l.a)(3),Object(l.b)(3),Object(l.b)(3)),p=c.b.h2.withConfig({displayName:"Heading__H2",componentId:"ww4wv3-1"})(["font-size:",";margin-top:",";margin-bottom:",";"],Object(l.a)(2),Object(l.b)(2),Object(l.b)(2)),d=c.b.h3.withConfig({displayName:"Heading__H3",componentId:"ww4wv3-2"})(["font-size:",";margin-top:",";margin-bottom:",";"],Object(l.a)(1),Object(l.b)(1),Object(l.b)(1)),s={1:u,2:p,3:d};t.a=function(e){var t=e.level,n=void 0===t?1:t,a=e.children,o=e.pop,c=r()(e,["level","children","pop"]),p=s[n]||u,d=Object.assign({},c);return o&&(d.style={color:Object(l.c)("popColor")}),i.a.createElement(p,d,a)}},150:function(e,t,n){var a;e.exports=(a=n(152))&&a.default||a},151:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=(n(33),n(150),r.a.createContext({})),l=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},152:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(55),l=n(2),u=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},153:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(148),i=n(149),c=n(147),l=o.b.div.withConfig({displayName:"Me__Styled__Me",componentId:"sc-8y897i-0"})(["padding-top:",";"],Object(c.b)(5));o.b.img.withConfig({displayName:"Me__Styled__ProfileImage",componentId:"sc-8y897i-1"})(["position:relative;height:150px;width:150px;margin-right:10px;border-radius:50%;overflow:hidden;border:5px solid white;box-shadow:0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);transition:all 0.3s ease;"]);t.a=function(){return r.a.createElement(l,null,r.a.createElement(i.a,null,"Jason ",r.a.createElement("span",{style:{color:Object(c.c)("popColor"),fontSize:"inherit"}},"Kinnear")),r.a.createElement(i.a,{level:3},"Software Developer"))}},154:function(e){e.exports={data:{site:{siteMetadata:{title:"Jason Kinnear - Software Developer"}}}}},157:function(e,t,n){"use strict";var a=n(158),r=n.n(a),o=n(154),i=n(0),c=n.n(i),l=n(4),u=n.n(l),p=n(151),d=(n(159),n(149)),s=n(148),m=n(147),f=(n(153),["JavaScript","React","Redux","Styled-Components","EmotionJS","Lumen","Flux","Docker","Backbone","Laravel","API","GIT","Code Review","JIRA","BitBucket","GitHub","Reselect","MarionetteJS","Babel","ES6","ES5"]);var b=s.b.div.withConfig({displayName:"ThingsILike__Styled__ThingsILike",componentId:"sc-1uhp59g-0"})(["display:flex;justify-content:space-around;"]),g=Object(s.b)(d.a).withConfig({displayName:"ThingsILike__Styled__Heading",componentId:"sc-1uhp59g-1"})(["text-transform:uppercase;opacity:0.4;flex:0 0 auto;color:",";"],Object(m.c)("popColor")),h=function(){return c.a.createElement(b,null,function(e){for(var t,n,a=e.length;0!==a;)n=Math.floor(Math.random()*a),t=e[a-=1],e[a]=e[n],e[n]=t;return e}(f).map(function(e,t){return c.a.createElement(c.a.Fragment,null,c.a.createElement(g,{level:3}," ",e," "),c.a.createElement(g,{level:3}," | "))}))};function y(){var e=r()(["\n  * {\n    color: ",";\n    font-family: 'Nunito Sans', 'Open Sans', sans-serif;\n    font-size: 12px;\n    font-weight: 300;\n  }\n\n\tp {\n\t\tmargin-top: 0;\n\t\tmargin-bottom: ",";\n\t}\n\n  body {\n    background-color: #fbfbfb;\n    border-top: 25px solid ",";\n    padding-top: 20px;\n  }\n"]);return y=function(){return e},e}var v=Object(s.a)(y(),Object(m.c)("color"),Object(m.b)(1),Object(m.c)("subtleColor")),w=function(e){var t=e.children;return c.a.createElement(p.a,{query:"86343720",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,c.a.createElement(v,null),c.a.createElement(h,null),c.a.createElement("main",null,t)))},data:o})};w.Panel=s.b.div.withConfig({displayName:"layout__Panel",componentId:"ii2kc2-0"})(["max-width:700px;margin:"," auto;padding-left:",";padding-right:",";"],Object(m.b)(5),Object(m.b)(5),Object(m.b)(5));var E=Object(s.b)(w.Panel).withConfig({displayName:"layout__Styled__LayoutSection",componentId:"ii2kc2-1"})(["margin-bottom:100px;"]);w.Section=function(e){var t=e.children,n=e.title;return c.a.createElement(E,null,c.a.createElement(d.a,{pop:!0,level:3},n),t)},w.propTypes={children:u.a.node.isRequired};t.a=w}}]);
//# sourceMappingURL=component---src-templates-blog-template-js-ca2456fb64a5e1a143d8.js.map