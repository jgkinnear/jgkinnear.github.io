(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{143:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(157),i=n(155);e.default=function(){return r.a.createElement(o.a,null,r.a.createElement(i.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},147:function(t,e,n){"use strict";n.d(e,"c",function(){return s}),n.d(e,"a",function(){return u}),n.d(e,"b",function(){return p});n(160);var a=n(161),r=n.n(a),o=12;function i(t){return r()(t)*o}function c(t){return i(t)+"px"}var l={typography:{color:"#403F41",popColor:"#738B7E",subtleColor:"#E6E5E5",fontSize:{"-2":c(-2),"-1":c(-1),0:c(0),1:c(1),2:c(2),3:c(3),4:c(4),5:c(5)}},spacings:{0:i(0)+"px",1:i(1)/4+"px",2:i(2)/4+"px",3:i(3)/4+"px",4:i(4)/4+"px",5:i(5)/4+"px"}};function s(t){return t&&l.typography[t]?l.typography[t]:l.typography}function u(t){return void 0===t&&(t=0),l.typography.fontSize[t]}function p(t){return void 0===t&&(t=0),l.spacings[t]}},149:function(t,e,n){"use strict";n(34);var a=n(74),r=n.n(a),o=n(0),i=n.n(o),c=n(148),l=n(147),s=c.b.h1.withConfig({displayName:"Heading__H1",componentId:"ww4wv3-0"})(["font-size:",";margin-top:",";margin-bottom:",";"],Object(l.a)(3),Object(l.b)(3),Object(l.b)(3)),u=c.b.h2.withConfig({displayName:"Heading__H2",componentId:"ww4wv3-1"})(["font-size:",";margin-top:",";margin-bottom:",";"],Object(l.a)(2),Object(l.b)(2),Object(l.b)(2)),p=c.b.h3.withConfig({displayName:"Heading__H3",componentId:"ww4wv3-2"})(["font-size:",";margin-top:",";margin-bottom:",";"],Object(l.a)(1),Object(l.b)(1),Object(l.b)(1)),d={1:s,2:u,3:p};e.a=function(t){var e=t.level,n=void 0===e?1:e,a=t.children,o=t.pop,c=r()(t,["level","children","pop"]),u=d[n]||s,p=Object.assign({},c);return o&&(p.style={color:Object(l.c)("popColor")}),i.a.createElement(u,p,a)}},150:function(t,e,n){var a;t.exports=(a=n(152))&&a.default||a},151:function(t,e,n){"use strict";n.d(e,"a",function(){return l});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=(n(33),n(150),r.a.createContext({})),l=function(t){return r.a.createElement(c.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},152:function(t,e,n){"use strict";n.r(e);n(34);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(55),l=n(2),s=function(t){var e=t.location,n=l.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=s},153:function(t,e,n){"use strict";var a=n(0),r=n.n(a),o=n(148),i=n(149),c=n(147),l=o.b.div.withConfig({displayName:"Me__Styled__Me",componentId:"sc-8y897i-0"})(["padding-top:",";"],Object(c.b)(5));o.b.img.withConfig({displayName:"Me__Styled__ProfileImage",componentId:"sc-8y897i-1"})(["position:relative;height:150px;width:150px;margin-right:10px;border-radius:50%;overflow:hidden;border:5px solid white;box-shadow:0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);transition:all 0.3s ease;"]);e.a=function(){return r.a.createElement(l,null,r.a.createElement(i.a,null,"Jason ",r.a.createElement("span",{style:{color:Object(c.c)("popColor"),fontSize:"inherit"}},"Kinnear")),r.a.createElement(i.a,{level:3},"Software Developer"))}},154:function(t){t.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},155:function(t,e,n){"use strict";var a=n(156),r=n(0),o=n.n(r),i=n(4),c=n.n(i),l=n(162),s=n.n(l);function u(t){var e=t.description,n=t.lang,r=t.meta,i=t.keywords,c=t.title,l=a.data.site,u=e||l.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},e.a=u},156:function(t){t.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},157:function(t,e,n){"use strict";var a=n(158),r=n.n(a),o=n(154),i=n(0),c=n.n(i),l=n(4),s=n.n(l),u=n(151),p=(n(159),n(149)),d=n(148),m=n(147),f=(n(153),["JavaScript","React","Redux","Styled-Components","EmotionJS","Lumen","Flux","Docker","Backbone","Laravel","API","GIT","Code Review","JIRA","BitBucket","GitHub","Reselect","MarionetteJS","Babel","ES6","ES5"]);var b=d.b.div.withConfig({displayName:"ThingsILike__Styled__ThingsILike",componentId:"sc-1uhp59g-0"})(["display:flex;justify-content:space-around;"]),g=Object(d.b)(p.a).withConfig({displayName:"ThingsILike__Styled__Heading",componentId:"sc-1uhp59g-1"})(["text-transform:uppercase;opacity:0.4;flex:0 0 auto;color:",";"],Object(m.c)("popColor")),y=function(){return c.a.createElement(b,null,function(t){for(var e,n,a=t.length;0!==a;)n=Math.floor(Math.random()*a),e=t[a-=1],t[a]=t[n],t[n]=e;return t}(f).map(function(t,e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(g,{level:3}," ",t," "),c.a.createElement(g,{level:3}," | "))}))};function h(){var t=r()(["\n  * {\n    color: ",";\n    font-family: 'Nunito Sans', 'Open Sans', sans-serif;\n    font-size: 12px;\n    font-weight: 300;\n  }\n\n\tp {\n\t\tmargin-top: 0;\n\t\tmargin-bottom: ",";\n\t}\n\n  body {\n    background-color: #fbfbfb;\n    border-top: 25px solid ",";\n    padding-top: 20px;\n  }\n"]);return h=function(){return t},t}var v=Object(d.a)(h(),Object(m.c)("color"),Object(m.b)(1),Object(m.c)("subtleColor")),w=function(t){var e=t.children;return c.a.createElement(u.a,{query:"86343720",render:function(t){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,c.a.createElement(v,null),c.a.createElement(y,null),c.a.createElement("main",null,e)))},data:o})};w.Panel=d.b.div.withConfig({displayName:"layout__Panel",componentId:"ii2kc2-0"})(["max-width:700px;margin:"," auto;padding-left:",";padding-right:",";"],Object(m.b)(5),Object(m.b)(5),Object(m.b)(5));var x=Object(d.b)(w.Panel).withConfig({displayName:"layout__Styled__LayoutSection",componentId:"ii2kc2-1"})(["margin-bottom:100px;"]);w.Section=function(t){var e=t.children,n=t.title;return c.a.createElement(x,null,c.a.createElement(p.a,{pop:!0,level:3},n),e)},w.propTypes={children:s.a.node.isRequired};e.a=w}}]);
//# sourceMappingURL=component---src-pages-404-js-3ecce5d1d0926d09fb5e.js.map