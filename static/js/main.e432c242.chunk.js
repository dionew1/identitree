(this.webpackJsonpidentitree=this.webpackJsonpidentitree||[]).push([[0],{451:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(5),i=n.n(a),s=n(16),c=n.n(s),o=n(76),u=n.n(o),l=n(136),d=n(31),p=n(32),h=n(34),j=n(33),b=(n(135),n(139)),m=n.n(b).a.create({baseURL:"http://lovely-asa-tree.herokuapp.com/api/v1"}),f=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={term:""},e.onFormSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.term)},e}return Object(p.a)(n,[{key:"render",value:function(){var e=this;return Object(r.jsx)("div",{className:"ui segment",children:Object(r.jsx)("form",{onSubmit:this.onFormSubmit,className:"ui form",children:Object(r.jsxs)("div",{className:"field",children:[Object(r.jsx)("label",{children:"Which Tree Am I?"}),Object(r.jsx)("input",{type:"text",value:this.state.term,onChange:function(t){return e.setState({term:t.target.value})}})]})})})}}]),n}(i.a.Component),O=function(e){return Object(r.jsx)("div",{className:"ui active dimmer",children:Object(r.jsx)("div",{className:"ui big text loader",children:e.message})})};O.defaultProps={message:"Loading..."};var g=O,v=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"renderContent",value:function(){return Object(r.jsxs)(i.a.Fragment,{children:[Object(r.jsx)("div",{style:{display:this.props.isLoading?"block":"none"},children:Object(r.jsx)(g,{})}),Object(r.jsx)("img",{style:{display:this.props.isLoading?"none":"block",maxWidth:"500px"},width:"100%",src:this.props.result.image_url,alt:this.props.result.name,onLoad:this.props.imageLoaded})]})}},{key:"render",value:function(){return Object(r.jsxs)("div",{style:{display:"flex",alignItems:"center",flexDirection:"column",background:"rgba(115, 102, 217, 0.7)",padding:"5px",color:"#efefef"},children:[Object(r.jsx)("h2",{children:this.props.result.name}),this.renderContent(),Object(r.jsx)("p",{style:{padding:"10px 0",textAlign:"center"},children:this.props.result.description})]})}}]),n}(i.a.Component),x=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={result:{},isLoading:!0},e.onSearchSubmit=function(){var t=Object(l.a)(u.a.mark((function t(n){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.post("/trees/which-am-i",{name:n});case 2:r=t.sent,e.setState({result:r.data.result,isLoading:!0});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.imageLoaded=function(){e.setState({isLoading:!1})},e}return Object(p.a)(n,[{key:"renderTree",value:function(){if(0!==Object.keys(this.state.result).length)return Object(r.jsx)(v,{result:this.state.result,isLoading:this.state.isLoading,imageLoaded:this.imageLoaded})}},{key:"render",value:function(){return Object(r.jsxs)("div",{className:"ui container",style:{marginTop:"10px"},children:[Object(r.jsx)(f,{onSubmit:this.onSearchSubmit}),this.renderTree()]})}}]),n}(i.a.Component);c.a.render(Object(r.jsx)(x,{}),document.querySelector("#root"))}},[[451,1,2]]]);
//# sourceMappingURL=main.e432c242.chunk.js.map