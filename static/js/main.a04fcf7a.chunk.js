(this["webpackJsonptour-app"]=this["webpackJsonptour-app"]||[]).push([[0],{57:function(t,e,r){},62:function(t,e,r){"use strict";r.r(e);var n=r(0),a=r(16),c=r.n(a),s=r(88),o=r(43),i=r(32),j=r(31),u=Object(o.a)({palette:{primary:{light:"#6573c3",main:"#3f51b5",dark:"#2c387e",contrastText:"#fff"},secondary:{light:"#ffee33",main:"#ffea00",dark:"#b2a300",contrastText:"#000"},openTitle:i.a[400],protectedTitle:j.a[400],type:"light"}}),d=(r(57),r(35)),l=r.n(d),h=r(42),b=r(18),m=r(11),p=r(20),O=r(19),f=r(36),x=r(85),v=r(92),y=r(79),g=r(80),T=r(81),k=r(65),C=r(82),M=r(83),w=r(84),S=r(4),z=function(t){Object(p.a)(r,t);var e=Object(O.a)(r);function r(t){var n;return Object(b.a)(this,r),(n=e.call(this,t)).state={readMore:!1},n}return Object(m.a)(r,[{key:"render",value:function(){var t=this,e=this.props,r=e.id,n=e.image,a=e.info,c=e.price,s=e.name,o=e.removeTour;return Object(S.jsxs)(v.a,{children:[Object(S.jsxs)(y.a,{children:[Object(S.jsx)(g.a,{style:{height:"140px"},image:n,title:s}),Object(S.jsxs)(T.a,{children:[Object(S.jsx)(k.a,{gutterBottom:!0,variant:"button",component:"h4",children:s}),Object(S.jsxs)(k.a,{variant:"body2",color:"textSecondary",component:"p","data-test":"readmore-display",children:[this.state.readMore?a:"".concat(a.substring(0,200)),"...",Object(S.jsx)(C.a,{"data-test":"showmore-button",onClick:function(){return t.setState({readMore:!t.state.readMore})},children:this.state.readMore?"Show Less":"Read More"})]})]})]}),Object(S.jsxs)(M.a,{children:[Object(S.jsxs)(w.a,{size:"small",color:"primary",children:["$",c]}),Object(S.jsx)(w.a,{size:"small",color:"primary",onClick:function(){return o(r)},"data-test":"remove-tour",children:"Not interested"})]})]})}}]),r}(n.Component),B=function(t){Object(p.a)(r,t);var e=Object(O.a)(r);function r(){return Object(b.a)(this,r),e.apply(this,arguments)}return Object(m.a)(r,[{key:"render",value:function(){var t=this.props,e=t.tours,r=t.removeTour;return Object(S.jsx)(n.Fragment,{children:e.map((function(t){return Object(S.jsx)(x.a,{item:!0,xs:12,sm:6,md:4,children:Object(S.jsx)(z,Object(f.a)(Object(f.a)({},t),{},{removeTour:r}))},t.id)}))})}}]),r}(n.Component),I=r(86),J=r(90),D=r(87),E=function(){return Object(S.jsx)(I.a,{children:Object(S.jsx)(x.a,{container:!0,justifyContent:"center",alignItems:"center",children:Object(S.jsx)(x.a,{item:!0,children:Object(S.jsx)(J.a,{mt:30,children:Object(S.jsx)(D.a,{color:"primary"})})})})})},F=function(t){Object(p.a)(r,t);var e=Object(O.a)(r);function r(t){var n;return Object(b.a)(this,r),(n=e.call(this,t)).fetchTours=Object(h.a)(l.a.mark((function t(){var e,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://course-api.com/react-tours-project");case 2:return e=t.sent,t.next=5,e.json();case 5:r=t.sent,n.setState({loading:!1,tours:r});case 7:case"end":return t.stop()}}),t)}))),n.removeTour=function(t){var e=n.state.tours.filter((function(e){return e.id!==t}));n.setState({tours:e})},n.state={loading:!0,tours:[]},n}return Object(m.a)(r,[{key:"componentDidMount",value:function(){this.fetchTours()}},{key:"render",value:function(){var t=this.state,e=t.loading,r=t.tours;return Object(S.jsxs)(I.a,{"data-test":"component-app",children:[Object(S.jsx)(x.a,{container:!0,justifyContent:"center",children:Object(S.jsx)(x.a,{item:!0,xs:12,sm:6,md:4,children:Object(S.jsx)(J.a,{mb:10,mt:5,children:Object(S.jsx)(k.a,{variant:"h5",align:"center","data-test":"title-display",children:"Our Tours"})})})}),Object(S.jsx)(x.a,{container:!0,spacing:4,justifyContent:"center",children:e?Object(S.jsx)(E,{}):Object(S.jsx)(B,{tours:r,removeTour:this.removeTour})})]})}}]),r}(n.Component);c.a.render(Object(S.jsx)(s.a,{theme:u,children:Object(S.jsx)(F,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.a04fcf7a.chunk.js.map