(this.webpackJsonpexampleproject=this.webpackJsonpexampleproject||[]).push([[0],{384:function(t,a,e){},540:function(t,a,e){"use strict";e.r(a);var n=e(9),i=e(0),r=e.n(i),s=e(16),c=e.n(s),u=(e(384),e(26)),h=e(29),o=e(28),l=e(27),d=e(247),b=e.n(d),p=function(t){var a=[{media:t._media,varianza:t._varianza,desviacion:t._desviacion}];return Object(n.jsx)("div",{children:Object(n.jsx)(b.a,{title:"Propiedades",data:a,columns:[{title:"Media",field:"media"},{title:"Varianza",field:"varianza"},{title:"Desviaci\xf3n T\xedpica",field:"desviacion"}],style:{width:"800px",margin:"10px",input:{margin:10}},options:{search:!1,paging:!1}})})},v=e(253),j=e(317),f=function(t){Object(o.a)(e,t);var a=Object(l.a)(e);function e(){return Object(u.a)(this,e),a.apply(this,arguments)}return Object(h.a)(e,[{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsxs)(v.a,{onChange:this.props.handleChange,options:this.props.options,fullWidth:!0,children:[Object(n.jsx)(j.a,{value:"B",children:"Binomial"}),Object(n.jsx)(j.a,{value:"BN1",children:"Binomial Negativa (v1)"}),Object(n.jsx)(j.a,{value:"BN2",children:"Binomial Negativa (v2)"}),Object(n.jsx)(j.a,{value:"G",children:"Geom\xe9trica"}),Object(n.jsx)(j.a,{value:"Pc",children:"Pascal"}),Object(n.jsx)(j.a,{value:"H",children:"Hipergeom\xe9trica"}),Object(n.jsx)(j.a,{value:"P",children:"Poisson"})]})})}}]),e}(i.Component),g=e(329),m=function(t){Object(o.a)(e,t);var a=Object(l.a)(e);function e(){return Object(u.a)(this,e),a.apply(this,arguments)}return Object(h.a)(e,[{key:"clamp",value:function(t,a,e){return t<=a?a:t>=e?e:t}},{key:"render",value:function(){var t=this;return Object(n.jsx)(g.a,{id:"margin-none",label:this.props.label,variant:"outlined",helperText:this.props.helpText,defaultValue:this.props.defaultValue,type:"number",InputLabelProps:{shrink:!0},onInput:function(a){a.target.value=t.clamp(a.target.value,t.props.min,t.props.max)},inputProps:{step:this.props.step},style:{width:"200px",margin:"10px",input:{margin:10}},onChange:this.props.handleChange})}}]),e}(i.Component),O=e(20),x=e.n(O),k=e(36),y=e(31),P=function(t){Object(o.a)(e,t);var a=Object(l.a)(e);function e(){return Object(u.a)(this,e),a.call(this)}return Object(h.a)(e,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsxs)("b",{children:["Distribuci\xf3n ",this.props.name,": ",this.props.descripcion]}),Object(n.jsx)(p,{_media:this.props.media,_varianza:this.props.varianza,_desviacion:this.props.desviacion})]})}}]),e}(i.Component),N=e(369),w=function(t){Object(o.a)(e,t);var a=Object(l.a)(e);function e(){return Object(u.a)(this,e),a.apply(this,arguments)}return Object(h.a)(e,[{key:"render",value:function(){return Object(n.jsx)("div",{style:{height:"250px",width:"500px"},children:Object(n.jsx)(N.Bar,{data:this.props.data,options:{legend:{display:!1},responsive:!0,title:{text:"FUNCI\xd3N DISTRIBUCI\xd3N",display:!0},scales:{yAxes:[{ticks:{autoSkip:!0,beginAtZero:!0,min:0}}]}}})})}}]),e}(r.a.Component),C=function t(a){return a>=1?a*t(a-1):1},z=function(t,a){var e=C(t)/(C(a)*C(t-a));return console.log(t+" , "+a+" = "+e),e},S={labels:[],datasets:[{backgroundColor:"rgba(75,192,192, 0.6)",highlightStroke:"rgba(220,220,220,1)",borderWidth:0,data:[]}]},M=function(t){Object(o.a)(e,t);var a=Object(l.a)(e);function e(t){var n;return Object(u.a)(this,e),(n=a.call(this,t)).changeP=function(){var t=Object(k.a)(x.a.mark((function t(a){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setState({p:Number(a.target.value)});case 2:case"end":return t.stop()}}),t,this)})));return function(a){return t.apply(this,arguments)}}(),n.changeN=function(){var t=Object(k.a)(x.a.mark((function t(a){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setState({n:Number(a.target.value)});case 2:case"end":return t.stop()}}),t,this)})));return function(a){return t.apply(this,arguments)}}(),n.changeN=n.changeN.bind(Object(y.a)(n)),n.changeP=n.changeP.bind(Object(y.a)(n)),n.state={name:"Binomial",p:0,n:0,media:0,varianza:0,desviacion:0},n}return Object(h.a)(e,[{key:"componentDidUpdate",value:function(t,a){if(a.p!==this.state.p||a.n!==this.state.n){this.setState({media:this.calcularMedia(),varianza:this.calcularVarianza(),desviacion:this.calcularDesviacion()}),S.labels=Array.from(Array(this.state.n+1).keys());var e=this.calcularFuncion();S.datasets=[{backgroundColor:"rgba(75,192,192, 0.6)",highlightStroke:"rgba(220,220,220,1)",borderWidth:0,data:e}]}}},{key:"calcularMedia",value:function(){return this.state.n*this.state.p}},{key:"calcularVarianza",value:function(){return this.state.n*this.state.p*(1-this.state.p)}},{key:"calcularDesviacion",value:function(){return Math.pow(this.state.n*this.state.p*(1-this.state.p),.5)}},{key:"calcularFuncion",value:function(){for(var t=[],a=0;a<=this.state.n;a++){var e=this.calcularProbabilidad(a);t.push(Number(e))}return t}},{key:"calcularProbabilidad",value:function(t){return z(this.state.n,t)*Math.pow(this.state.p,t)*Math.pow(1-this.state.p,this.state.n-t)}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(m,{label:"n",min:0,max:9999999,defaultValue:0,helpText:"Poblaci\xf3n",step:"1",handleChange:this.changeN}),Object(n.jsx)(m,{label:"p",min:0,max:1,step:"0.1",defaultValue:0,helpText:"Probabilidad",handleChange:this.changeP}),Object(n.jsx)(P,{name:this.state.name,media:this.state.media,varianza:this.state.varianza,desviacion:this.state.desviacion}),Object(n.jsx)(w,{data:S})]})}}]),e}(i.Component),V={labels:[],datasets:[{backgroundColor:"rgba(75,192,192, 0.6)",highlightStroke:"rgba(220,220,220,1)",borderWidth:0,data:[]}]},D=function(t){Object(o.a)(e,t);var a=Object(l.a)(e);function e(t){var n;return Object(u.a)(this,e),(n=a.call(this,t)).changeP=function(){var t=Object(k.a)(x.a.mark((function t(a){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setState({p:Number(a.target.value)});case 2:case"end":return t.stop()}}),t,this)})));return function(a){return t.apply(this,arguments)}}(),n.changeR=function(){var t=Object(k.a)(x.a.mark((function t(a){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setState({r:Number(a.target.value)});case 2:case"end":return t.stop()}}),t,this)})));return function(a){return t.apply(this,arguments)}}(),n.changeR=n.changeR.bind(Object(y.a)(n)),n.changeP=n.changeP.bind(Object(y.a)(n)),n.state={name:"Binomial Negativa (v1)",descripcion:"N\xfamero de fracasos antes del k-\xe9simo \xe9xito.",p:0,r:0,media:0,varianza:0,desviacion:0},n}return Object(h.a)(e,[{key:"componentDidUpdate",value:function(t,a){var e=this;if(a.p!==this.state.p||a.r!==this.state.r){this.setState({media:this.calcularMedia(),varianza:this.calcularVarianza(),desviacion:this.calcularDesviacion()}),V.labels=Array(3*this.state.r-this.state.r-1).fill().map((function(t,a){return e.state.r-1+a}));var n=this.calcularFuncion();V.datasets=[{backgroundColor:"rgba(75,192,192, 0.6)",highlightStroke:"rgba(220,220,220,1)",borderWidth:0,data:n}]}}},{key:"calcularMedia",value:function(){return this.state.r*(1-this.state.p)/this.state.p}},{key:"calcularVarianza",value:function(){return this.state.r*(1-this.state.p)/Math.pow(this.state.p,2)}},{key:"calcularDesviacion",value:function(){return Math.pow(this.state.r*(1-this.state.p)/Math.pow(this.state.p,2),.5)}},{key:"calcularFuncion",value:function(){for(var t=[],a=this.state.r-1;a<=3*this.state.r;a++){var e=this.calcularProbabilidad(a);t.push(Number(e))}return t}},{key:"calcularProbabilidad",value:function(t){return z(t+this.state.r-1,t)*Math.pow(this.state.p,this.state.r)*Math.pow(1-this.state.p,t)}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(m,{label:"p",min:0,max:1,step:"0.1",defaultValue:0,helpText:"Probabilidad",handleChange:this.changeP}),Object(n.jsx)(m,{label:"r",min:1,max:999999,step:"1",defaultValue:1,helpText:"N\xba \xe9xito",handleChange:this.changeR}),Object(n.jsx)(P,{descripcion:this.state.descripcion,name:this.state.name,media:this.state.media,varianza:this.state.varianza,desviacion:this.state.desviacion}),Object(n.jsx)(w,{data:V})]})}}]),e}(i.Component),B={labels:[],datasets:[{backgroundColor:"rgba(75,192,192, 0.6)",highlightStroke:"rgba(220,220,220,1)",borderWidth:0,data:[]}]},F=function(t){Object(o.a)(e,t);var a=Object(l.a)(e);function e(t){var n;return Object(u.a)(this,e),(n=a.call(this,t)).changeP=function(){var t=Object(k.a)(x.a.mark((function t(a){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setState({p:Number(a.target.value)});case 2:case"end":return t.stop()}}),t,this)})));return function(a){return t.apply(this,arguments)}}(),n.changeR=function(){var t=Object(k.a)(x.a.mark((function t(a){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setState({r:Number(a.target.value)});case 2:case"end":return t.stop()}}),t,this)})));return function(a){return t.apply(this,arguments)}}(),n.changeR=n.changeR.bind(Object(y.a)(n)),n.changeP=n.changeP.bind(Object(y.a)(n)),n.state={name:"Binomial Negativa (v2)",p:0,r:0,media:0,varianza:0,desviacion:0},n}return Object(h.a)(e,[{key:"componentDidUpdate",value:function(t,a){var e=this;if(a.p!==this.state.p||a.r!==this.state.r){this.setState({media:this.calcularMedia(),varianza:this.calcularVarianza(),desviacion:this.calcularDesviacion()}),B.labels=Array(3*this.state.r-this.state.r).fill().map((function(t,a){return e.state.r+a}));var n=this.calcularFuncion();B.datasets=[{backgroundColor:"rgba(75,192,192, 0.6)",highlightStroke:"rgba(220,220,220,1)",borderWidth:0,data:n}]}}},{key:"calcularMedia",value:function(){return this.state.r/this.state.p}},{key:"calcularVarianza",value:function(){return this.state.r/Math.pow(this.state.p,2)}},{key:"calcularDesviacion",value:function(){return Math.pow(this.state.r/Math.pow(this.state.p,2),.5)}},{key:"calcularFuncion",value:function(){for(var t=[],a=this.state.r;a<=3*this.state.r;a++){var e=this.calcularProbabilidad(a);t.push(Number(e))}return t}},{key:"calcularProbabilidad",value:function(t){return z(t-1,t-this.state.r)*Math.pow(this.state.p,this.state.r)*Math.pow(1-this.state.p,t-+this.state.r)}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(m,{label:"p",min:0,max:1,step:"0.1",defaultValue:0,helpText:"Probabilidad",handleChange:this.changeP}),Object(n.jsx)(m,{label:"r",min:1,max:999999,step:"1",defaultValue:0,helpText:"N\xba \xe9xito",handleChange:this.changeR}),Object(n.jsx)(P,{name:this.state.name,media:this.state.media,varianza:this.state.varianza,desviacion:this.state.desviacion}),Object(n.jsx)(w,{data:B})]})}}]),e}(i.Component),T={labels:[],datasets:[{backgroundColor:"rgba(75,192,192, 0.6)",highlightStroke:"rgba(220,220,220,1)",borderWidth:0,data:[]}]},W=function(t){Object(o.a)(e,t);var a=Object(l.a)(e);function e(t){var n;return Object(u.a)(this,e),(n=a.call(this,t)).changeP=function(){var t=Object(k.a)(x.a.mark((function t(a){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setState({p:Number(a.target.value)});case 2:case"end":return t.stop()}}),t,this)})));return function(a){return t.apply(this,arguments)}}(),n.changePuntos=function(){var t=Object(k.a)(x.a.mark((function t(a){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setState({nPoints:Number(a.target.value)});case 2:case"end":return t.stop()}}),t,this)})));return function(a){return t.apply(this,arguments)}}(),n.changeP=n.changeP.bind(Object(y.a)(n)),n.changePuntos=n.changePuntos.bind(Object(y.a)(n)),n.state={name:"Geom\xe9trica",p:0,media:0,varianza:0,desviacion:0,nPoints:1},n}return Object(h.a)(e,[{key:"componentDidUpdate",value:function(t,a){if(a.p!==this.state.p||a.nPoints!==this.state.nPoints){this.setState({media:this.calcularMedia(),varianza:this.calcularVarianza(),desviacion:this.calcularDesviacion()}),T.labels=Array.from(Array(this.state.nPoints).keys());var e=this.calcularFuncion();T.datasets=[{backgroundColor:"rgba(75,192,192, 0.6)",highlightStroke:"rgba(220,220,220,1)",borderWidth:0,data:e}]}}},{key:"calcularMedia",value:function(){return(1-this.state.p)/this.state.p}},{key:"calcularVarianza",value:function(){return(1-this.state.p)/Math.pow(this.state.p,2)}},{key:"calcularDesviacion",value:function(){return Math.pow((1-this.state.p)/Math.pow(this.state.p,2),.5)}},{key:"calcularFuncion",value:function(){for(var t=[],a=0;a<=this.state.nPoints;a++){var e=this.calcularProbabilidad(a);t.push(Number(e))}return t}},{key:"calcularProbabilidad",value:function(t){return Math.pow(1-this.state.p,t)*this.state.p}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(m,{label:"p",min:0,max:1,step:"0.1",defaultValue:0,helpText:"Probabilidad",handleChange:this.changeP}),Object(n.jsx)(P,{name:this.state.name,media:this.state.media,varianza:this.state.varianza,desviacion:this.state.desviacion}),Object(n.jsxs)("span",{children:[" ",Object(n.jsx)(w,{data:T})]}),Object(n.jsx)(m,{label:"Puntos a calcular",min:0,max:999999,step:"1",defaultValue:1,handleChange:this.changePuntos})]})}}]),e}(i.Component),A={labels:[],datasets:[{backgroundColor:"rgba(75,192,192, 0.6)",highlightStroke:"rgba(220,220,220,1)",borderWidth:0,data:[]}]},R=function(t){Object(o.a)(e,t);var a=Object(l.a)(e);function e(t){var n;return Object(u.a)(this,e),(n=a.call(this,t)).changeN=function(){var t=Object(k.a)(x.a.mark((function t(a){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setState({N:Number(a.target.value)});case 2:case"end":return t.stop()}}),t,this)})));return function(a){return t.apply(this,arguments)}}(),n.changen=function(){var t=Object(k.a)(x.a.mark((function t(a){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setState({n:Number(a.target.value)});case 2:case"end":return t.stop()}}),t,this)})));return function(a){return t.apply(this,arguments)}}(),n.changek=function(){var t=Object(k.a)(x.a.mark((function t(a){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setState({k:Number(a.target.value)});case 2:case"end":return t.stop()}}),t,this)})));return function(a){return t.apply(this,arguments)}}(),n.changeN=n.changeN.bind(Object(y.a)(n)),n.changen=n.changen.bind(Object(y.a)(n)),n.changek=n.changek.bind(Object(y.a)(n)),n.state={name:"Hipergeom\xe9trica",N:0,n:0,k:0,media:0,varianza:0,desviacion:0},n}return Object(h.a)(e,[{key:"componentDidUpdate",value:function(t,a){if(a.N!==this.state.N||a.n!==this.state.n||a.k!==this.state.k){this.setState({media:this.calcularMedia(),varianza:this.calcularVarianza(),desviacion:this.calcularDesviacion()}),A.labels=Array.from(Array(this.state.n+1).keys());var e=this.calcularFuncion();A.datasets=[{backgroundColor:"rgba(75,192,192, 0.6)",highlightStroke:"rgba(220,220,220,1)",borderWidth:0,data:e}]}}},{key:"calcularMedia",value:function(){return this.state.k*this.state.n/this.state.N}},{key:"calcularVarianza",value:function(){return this.state.k*this.state.n/this.state.N*(1-this.state.k/this.state.N)*((this.state.N-this.state.n)/(this.state.N-1))}},{key:"calcularDesviacion",value:function(){return Math.pow(this.state.k*this.state.n/this.state.N*(1-this.state.k/this.state.N)*((this.state.N-this.state.n)/(this.state.N-1)),.5)}},{key:"calcularFuncion",value:function(){for(var t=[],a=0;a<=this.state.n;a++){var e=this.calcularProbabilidad(a);t.push(Number(e))}return t}},{key:"calcularProbabilidad",value:function(t){return z(this.state.k,t)*z(this.state.N-this.state.k,this.state.n-t)/z(this.state.N,this.state.n)}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(m,{label:"N",min:0,max:1e5,step:"1",defaultValue:0,helpText:"Poblaci\xf3n original",handleChange:this.changeN}),Object(n.jsx)(m,{label:"n",min:0,max:1e5,step:"1",defaultValue:0,helpText:"Extracci\xf3n",handleChange:this.changen}),Object(n.jsx)(m,{label:"k",min:0,max:1e5,step:"1",defaultValue:0,helpText:"Poblaci\xf3n marcada",handleChange:this.changek}),Object(n.jsx)(P,{name:this.state.name,media:this.state.media,varianza:this.state.varianza,desviacion:this.state.desviacion}),Object(n.jsxs)("span",{children:[" ",Object(n.jsx)(w,{data:A})]})]})}}]),e}(i.Component),I={labels:[],datasets:[{backgroundColor:"rgba(75,192,192, 0.6)",highlightStroke:"rgba(220,220,220,1)",borderWidth:0,data:[]}]},U=function(t){Object(o.a)(e,t);var a=Object(l.a)(e);function e(t){var n;return Object(u.a)(this,e),(n=a.call(this,t)).changeP=function(){var t=Object(k.a)(x.a.mark((function t(a){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setState({p:Number(a.target.value)});case 2:case"end":return t.stop()}}),t,this)})));return function(a){return t.apply(this,arguments)}}(),n.changePuntos=function(){var t=Object(k.a)(x.a.mark((function t(a){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setState({nPoints:Number(a.target.value)});case 2:case"end":return t.stop()}}),t,this)})));return function(a){return t.apply(this,arguments)}}(),n.changeP=n.changeP.bind(Object(y.a)(n)),n.changePuntos=n.changePuntos.bind(Object(y.a)(n)),n.state={name:"Pascal",p:0,media:0,varianza:0,desviacion:0,nPoints:1},n}return Object(h.a)(e,[{key:"componentDidUpdate",value:function(t,a){if(a.p!==this.state.p||a.nPoints!==this.state.nPoints){this.setState({media:this.calcularMedia(),varianza:this.calcularVarianza(),desviacion:this.calcularDesviacion()}),I.labels=Array.from(Array(this.state.nPoints).keys());var e=this.calcularFuncion();I.datasets=[{backgroundColor:"rgba(75,192,192, 0.6)",highlightStroke:"rgba(220,220,220,1)",borderWidth:0,data:e}]}}},{key:"calcularMedia",value:function(){return 1/this.state.p}},{key:"calcularVarianza",value:function(){return(1-this.state.p)/Math.pow(this.state.p,2)}},{key:"calcularDesviacion",value:function(){return Math.pow((1-this.state.p)/Math.pow(this.state.p,2),.5)}},{key:"calcularFuncion",value:function(){for(var t=[],a=0;a<=this.state.nPoints;a++){var e=this.calcularProbabilidad(a);t.push(Number(e))}return t}},{key:"calcularProbabilidad",value:function(t){return Math.pow(1-this.state.p,t-1)*this.state.p}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(m,{label:"p",min:0,max:1,step:"0.1",defaultValue:0,helpText:"Probabilidad",handleChange:this.changeP}),Object(n.jsx)(P,{name:this.state.name,media:this.state.media,varianza:this.state.varianza,desviacion:this.state.desviacion}),Object(n.jsxs)("span",{children:[" ",Object(n.jsx)(w,{data:I})]}),Object(n.jsx)(m,{label:"Puntos a calcular",min:0,max:999999,step:"1",defaultValue:1,handleChange:this.changePuntos})]})}}]),e}(i.Component),_=function(t){Object(o.a)(e,t);var a=Object(l.a)(e);function e(){var t;return Object(u.a)(this,e),(t=a.call(this)).name="Poisson",t}return e}(P),H=function(t){Object(o.a)(e,t);var a=Object(l.a)(e);function e(){var t;return Object(u.a)(this,e),(t=a.call(this)).changeDistribution=function(a){t.setState({distribution:a.target.value})},t.ShowDistribution=function(){return"B"===t.state.distribution?Object(n.jsx)(M,{}):"BN1"===t.state.distribution?Object(n.jsx)(D,{}):"BN2"===t.state.distribution?Object(n.jsx)(F,{}):"G"===t.state.distribution?Object(n.jsx)(W,{}):"Pc"===t.state.distribution?Object(n.jsx)(U,{}):"H"===t.state.distribution?Object(n.jsx)(R,{}):"P"===t.state.distribution?Object(n.jsx)(_,{}):Object(n.jsx)("p",{children:"Selecciona distribuci\xf3n..."})},t.state={distribution:null},t}return Object(h.a)(e,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"PROB",children:[Object(n.jsx)(f,{handleChange:this.changeDistribution,options:this.options}),Object(n.jsx)(this.ShowDistribution,{})]})}}]),e}(r.a.Component),E=r.a.createElement("h1",{className:"greeting"},"Hello, world!");c.a.render(E,document.getElementById("root"));var G=H,L=function(t){t&&t instanceof Function&&e.e(6).then(e.bind(null,944)).then((function(a){var e=a.getCLS,n=a.getFID,i=a.getFCP,r=a.getLCP,s=a.getTTFB;e(t),n(t),i(t),r(t),s(t)}))};c.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(G,{})}),document.getElementById("root")),L()}},[[540,1,2]]]);
//# sourceMappingURL=main.696d0438.chunk.js.map