(this.webpackJsonpexampleproject=this.webpackJsonpexampleproject||[]).push([[0],{375:function(t,a){},396:function(t,a,e){},559:function(t,a,e){"use strict";e.r(a);var n=e(8),i=e(0),r=e.n(i),s=e(17),c=e.n(s),o=(e(396),e(23)),u=e(24),h=e(26),l=e(25),d=e(249),p=e.n(d),b=function(t){var a=[{media:t._media,varianza:t._varianza,desviacion:t._desviacion,descripcion:t._descripcion}];return Object(n.jsx)("div",{children:Object(n.jsx)(p.a,{title:"Propiedades",data:a,columns:[{title:"Descripci\xf3n",field:"descripcion"},{title:"Media",field:"media"},{title:"Varianza",field:"varianza"},{title:"Desviaci\xf3n T\xedpica",field:"desviacion"}],style:{margin:"10px",input:{margin:10}},options:{search:!1,paging:!1}})})},g=e(254),v=e(320),j=function(t){Object(h.a)(e,t);var a=Object(l.a)(e);function e(){return Object(o.a)(this,e),a.apply(this,arguments)}return Object(u.a)(e,[{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsxs)(g.a,{onChange:this.props.handleChange,options:this.props.options,fullWidth:!0,children:[Object(n.jsx)(v.a,{value:"B",children:"Binomial"}),Object(n.jsx)(v.a,{value:"BN1",children:"Binomial Negativa (v1)"}),Object(n.jsx)(v.a,{value:"BN2",children:"Binomial Negativa (v2)"}),Object(n.jsx)(v.a,{value:"G",children:"Geom\xe9trica"}),Object(n.jsx)(v.a,{value:"Pc",children:"Pascal"}),Object(n.jsx)(v.a,{value:"H",children:"Hipergeom\xe9trica"}),Object(n.jsx)(v.a,{value:"P",children:"Poisson"})]})})}}]),e}(i.Component),f=e(333),m=function(t){Object(h.a)(e,t);var a=Object(l.a)(e);function e(){return Object(o.a)(this,e),a.apply(this,arguments)}return Object(u.a)(e,[{key:"clamp",value:function(t,a,e){return t<=a?a:t>=e?e:t}},{key:"render",value:function(){var t=this;return Object(n.jsx)(f.a,{id:"margin-none",label:this.props.label,variant:"outlined",helperText:this.props.helpText,defaultValue:this.props.defaultValue,type:"number",InputLabelProps:{shrink:!0},onInput:function(a){a.target.value=t.clamp(a.target.value,t.props.min,t.props.max)},inputProps:{step:this.props.step},style:{width:"200px",margin:"10px",input:{margin:10}},onChange:this.props.handleChange,error:this.props.error})}}]),e}(i.Component),x=e(16),O=e.n(x),k=e(27),y=e(21),P=function(t){Object(h.a)(e,t);var a=Object(l.a)(e);function e(){return Object(o.a)(this,e),a.call(this)}return Object(u.a)(e,[{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsx)(b,{_descripcion:this.props.descripcion,_media:this.props.media,_varianza:this.props.varianza,_desviacion:this.props.desviacion})})}}]),e}(i.Component),N=e(374),w=function(t){Object(h.a)(e,t);var a=Object(l.a)(e);function e(){return Object(o.a)(this,e),a.apply(this,arguments)}return Object(u.a)(e,[{key:"render",value:function(){return Object(n.jsx)("div",{style:{float:"left",display:"flex",justifyContent:"space-between"},children:Object(n.jsx)("span",{children:Object(n.jsx)("div",{style:{width:"500px"},children:Object(n.jsx)(N.Bar,{data:this.props.data,options:{legend:{display:!1},responsive:!0,title:{text:"FUNCI\xd3N DISTRIBUCI\xd3N",display:!0},scales:{yAxes:[{ticks:{autoSkip:!0,beginAtZero:!0,min:0}}]}}})})})})}}]),e}(r.a.Component),C=e(375),R=e.n(C),S=function t(a){return a>=1?a*t(a-1):1},z=function(t,a){var e=S(t)/(S(a)*S(t-a));return console.log(t+" , "+a+" = "+e),e},M=e(376),D=e(593),A=function(t){Object(h.a)(e,t);var a=Object(l.a)(e);function e(){return Object(o.a)(this,e),a.apply(this,arguments)}return Object(u.a)(e,[{key:"render",value:function(){return Object(n.jsxs)("div",{style:{float:"right",alignContent:"center",verticalAlign:"middle",padding:"50px",display:"flex"},children:[Object(n.jsxs)("p",{children:["PROB: ",this.props.result]}),Object(n.jsx)(D.a,Object(M.a)({style:{width:"200px"},min:this.props.min,max:this.props.max,value:this.props.range,onChange:this.props.handleChange,valueLabelDisplay:"auto","aria-labelledby":"range-slider"},"valueLabelDisplay","on"))]})}}]),e}(i.Component),V={labels:[],datasets:[{backgroundColor:"rgba(75,192,192, 0.6)",highlightStroke:"rgba(220,220,220,1)",borderWidth:0,data:[]}]},T=function(t){Object(h.a)(e,t);var a=Object(l.a)(e);function e(t){var n;return Object(o.a)(this,e),(n=a.call(this,t)).changeRange=function(){var t=Object(k.a)(O.a.mark((function t(a,e){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setState({probRange:e});case 2:case"end":return t.stop()}}),t,this)})));return function(a,e){return t.apply(this,arguments)}}(),n.changeP=function(){var t=Object(k.a)(O.a.mark((function t(a){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setState({p:Number(a.target.value)});case 2:case"end":return t.stop()}}),t,this)})));return function(a){return t.apply(this,arguments)}}(),n.changeN=function(){var t=Object(k.a)(O.a.mark((function t(a){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setState({n:Number(a.target.value)});case 2:case"end":return t.stop()}}),t,this)})));return function(a){return t.apply(this,arguments)}}(),n.changeN=n.changeN.bind(Object(y.a)(n)),n.changeP=n.changeP.bind(Object(y.a)(n)),n.changeRange=n.changeRange.bind(Object(y.a)(n)),n.state={name:"Binomial",descripcion:"N\xfamero de \xe9xitos en n pruebas.",p:0,n:0,media:0,varianza:0,desviacion:0,probRange:[0,0],probabilidad:0},n}return Object(u.a)(e,[{key:"componentDidUpdate",value:function(t,a){if(a.p!==this.state.p||a.n!==this.state.n||a.probRange!==this.state.probRange){this.setState({media:this.calcularMedia(),varianza:this.calcularVarianza(),desviacion:this.calcularDesviacion()}),V.labels=Array.from(Array(this.state.n+1).keys());var e=this.calcularFuncion();V.datasets=[{backgroundColor:"rgba(75,192,192, 0.6)",highlightStroke:"rgba(220,220,220,1)",borderWidth:0,data:e}];var n=0;console.log("CALCULANDO ENTRE "+this.state.probRange[0]+" Y "+this.state.probRange[1]);for(var i=this.state.probRange[0];i<=this.state.probRange[1];i++)console.log(this.calcularProbabilidad(i)),n+=this.calcularProbabilidad(i);console.log("RES= "+n),this.setState({probabilidad:n})}}},{key:"calcularMedia",value:function(){return this.state.n*this.state.p}},{key:"calcularVarianza",value:function(){return this.state.n*this.state.p*(1-this.state.p)}},{key:"calcularDesviacion",value:function(){return Math.pow(this.state.n*this.state.p*(1-this.state.p),.5)}},{key:"calcularFuncion",value:function(){for(var t=[],a=0;a<=this.state.n;a++){var e=this.calcularProbabilidad(a);t.push(Number(e))}return t}},{key:"calcularProbabilidad",value:function(t){return z(this.state.n,t)*Math.pow(this.state.p,t)*Math.pow(1-this.state.p,this.state.n-t)}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(m,{label:"n",min:0,max:9999999,defaultValue:0,helpText:"Pruebas",step:"1",handleChange:this.changeN}),Object(n.jsx)(m,{label:"p",min:0,max:1,step:"0.1",defaultValue:0,helpText:"Probabilidad \xe9xito",handleChange:this.changeP}),Object(n.jsx)(P,{name:this.state.name,descripcion:this.state.descripcion,media:this.state.media,varianza:this.state.varianza,desviacion:this.state.desviacion}),Object(n.jsx)(w,{data:V}),Object(n.jsx)(A,{result:this.state.probabilidad,min:0,max:this.state.n,range:this.state.probRange,handleChange:this.changeRange}),Object(n.jsx)(R.a,{})]})}}]),e}(i.Component),F=function(t){Object(h.a)(e,t);var a=Object(l.a)(e);function e(){return Object(o.a)(this,e),a.apply(this,arguments)}return Object(u.a)(e,[{key:"clamp",value:function(t,a,e){return t<=a?a:t>=e?e:t}},{key:"render",value:function(){return Object(n.jsx)(D.a,{width:200,defaultValue:this.props.default,step:this.props.step,marks:!0,min:this.props.min,max:this.props.max,onChange:this.props.handleChange,valueLabelDisplay:"auto",style:{height:"225px",margin:"10px",input:{margin:10}},orientation:"vertical"})}}]),e}(i.Component),B={labels:[],datasets:[{backgroundColor:"rgba(75,192,192, 0.6)",highlightStroke:"rgba(220,220,220,1)",borderWidth:0,data:[]}]},E=function(t){Object(h.a)(e,t);var a=Object(l.a)(e);function e(t){var n;return Object(o.a)(this,e),(n=a.call(this,t)).changeRange=function(){var t=Object(k.a)(O.a.mark((function t(a,e){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setState({probRange:e});case 2:case"end":return t.stop()}}),t,this)})));return function(a,e){return t.apply(this,arguments)}}(),n.changeP=function(){var t=Object(k.a)(O.a.mark((function t(a){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setState({p:Number(a.target.value)});case 2:case"end":return t.stop()}}),t,this)})));return function(a){return t.apply(this,arguments)}}(),n.changeR=function(){var t=Object(k.a)(O.a.mark((function t(a){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setState({r:Number(a.target.value)});case 2:case"end":return t.stop()}}),t,this)})));return function(a){return t.apply(this,arguments)}}(),n.changePuntos=function(){var t=Object(k.a)(O.a.mark((function t(a,e){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setState({nPoints:Number(e)});case 2:case"end":return t.stop()}}),t,this)})));return function(a,e){return t.apply(this,arguments)}}(),n.changeR=n.changeR.bind(Object(y.a)(n)),n.changeP=n.changeP.bind(Object(y.a)(n)),n.changeRange=n.changeRange.bind(Object(y.a)(n)),n.changePuntos=n.changePuntos.bind(Object(y.a)(n)),n.state={name:"Binomial Negativa (v1)",descripcion:"N\xfamero de fracasos ANTES del k-\xe9simo \xe9xito.",p:0,r:1,media:0,varianza:0,nPoints:1,desviacion:0,probRange:[0,0],probabilidad:0},n}return Object(u.a)(e,[{key:"componentDidUpdate",value:function(t,a){if(a.p!==this.state.p||a.nPoints!==this.state.nPoints||a.r!==this.state.r||a.probRange!==this.state.probRange){this.setState({media:this.calcularMedia(),varianza:this.calcularVarianza(),desviacion:this.calcularDesviacion()}),B.labels=Array.from(Array(this.state.nPoints).keys());var e=this.calcularFuncion();B.datasets=[{backgroundColor:"rgba(75,192,192, 0.6)",highlightStroke:"rgba(220,220,220,1)",borderWidth:0,data:e}];var n=0;console.log("CALCULANDO ENTRE "+this.state.probRange[0]+" Y "+this.state.probRange[1]);for(var i=this.state.probRange[0];i<=this.state.probRange[1];i++)console.log(this.calcularProbabilidad(i)),n+=this.calcularProbabilidad(i);console.log("RES= "+n),this.setState({probabilidad:n})}}},{key:"calcularMedia",value:function(){return this.state.r*(1-this.state.p)/this.state.p}},{key:"calcularVarianza",value:function(){return this.state.r*(1-this.state.p)/Math.pow(this.state.p,2)}},{key:"calcularDesviacion",value:function(){return Math.pow(this.state.r*(1-this.state.p)/Math.pow(this.state.p,2),.5)}},{key:"calcularFuncion",value:function(){for(var t=[],a=this.state.r-1;a<=this.state.nPoints;a++){var e=this.calcularProbabilidad(a);t.push(Number(e))}return t}},{key:"calcularProbabilidad",value:function(t){return z(t+this.state.r-1,t)*Math.pow(this.state.p,this.state.r)*Math.pow(1-this.state.p,t)}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(m,{label:"p",min:0,max:1,step:"0.1",defaultValue:0,helpText:"Probabilidad \xe9xito",handleChange:this.changeP}),Object(n.jsx)(m,{label:"k",min:1,max:999999,step:"1",defaultValue:1,helpText:"N\xba \xe9xito",handleChange:this.changeR}),Object(n.jsx)(P,{descripcion:this.state.descripcion,name:this.state.name,media:this.state.media,varianza:this.state.varianza,desviacion:this.state.desviacion}),Object(n.jsx)(w,{data:B}),Object(n.jsx)(F,{min:0,max:100,default:1,step:1,handleChange:this.changePuntos}),Object(n.jsx)(A,{result:this.state.probabilidad,min:0,max:this.state.nPoints-1,range:this.state.probRange,handleChange:this.changeRange})]})}}]),e}(i.Component),L={labels:[],datasets:[{backgroundColor:"rgba(75,192,192, 0.6)",highlightStroke:"rgba(220,220,220,1)",borderWidth:0,data:[]}]},W=function(t){Object(h.a)(e,t);var a=Object(l.a)(e);function e(t){var n;return Object(o.a)(this,e),(n=a.call(this,t)).changeRange=function(){var t=Object(k.a)(O.a.mark((function t(a,e){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setState({probRange:e});case 2:case"end":return t.stop()}}),t,this)})));return function(a,e){return t.apply(this,arguments)}}(),n.changeP=function(){var t=Object(k.a)(O.a.mark((function t(a){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setState({p:Number(a.target.value)});case 2:case"end":return t.stop()}}),t,this)})));return function(a){return t.apply(this,arguments)}}(),n.changeR=function(){var t=Object(k.a)(O.a.mark((function t(a){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setState({r:Number(a.target.value)});case 2:case"end":return t.stop()}}),t,this)})));return function(a){return t.apply(this,arguments)}}(),n.changePuntos=function(){var t=Object(k.a)(O.a.mark((function t(a,e){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setState({nPoints:Number(e)});case 2:case"end":return t.stop()}}),t,this)})));return function(a,e){return t.apply(this,arguments)}}(),n.changeR=n.changeR.bind(Object(y.a)(n)),n.changeP=n.changeP.bind(Object(y.a)(n)),n.changeRange=n.changeRange.bind(Object(y.a)(n)),n.changePuntos=n.changePuntos.bind(Object(y.a)(n)),n.state={name:"Binomial Negativa (v2)",descripcion:"N\xfamero de fracasos HASTA el k-\xe9simo \xe9xito.",p:0,r:1,media:0,nPoints:1,varianza:0,desviacion:0,probRange:[0,0],probabilidad:0},n}return Object(u.a)(e,[{key:"componentDidUpdate",value:function(t,a){var e=this;if(a.p!==this.state.p||a.nPoints!==this.state.nPoints||a.r!==this.state.r||a.probRange!==this.state.probRange){this.setState({media:this.calcularMedia(),varianza:this.calcularVarianza(),desviacion:this.calcularDesviacion()}),L.labels=Array(this.state.nPoints-this.state.r+1).fill().map((function(t,a){return e.state.r+a}));var n=this.calcularFuncion();L.datasets=[{backgroundColor:"rgba(75,192,192, 0.6)",highlightStroke:"rgba(220,220,220,1)",borderWidth:0,data:n}];var i=0;console.log("CALCULANDO ENTRE "+this.state.probRange[0]+" Y "+this.state.probRange[1]);for(var r=this.state.probRange[0];r<=this.state.probRange[1];r++)console.log(this.calcularProbabilidad(r)),i+=this.calcularProbabilidad(r);console.log("RES= "+i),this.setState({probabilidad:i})}}},{key:"calcularMedia",value:function(){return this.state.r/this.state.p}},{key:"calcularVarianza",value:function(){return this.state.r/Math.pow(this.state.p,2)}},{key:"calcularDesviacion",value:function(){return Math.pow(this.state.r/Math.pow(this.state.p,2),.5)}},{key:"calcularFuncion",value:function(){for(var t=[],a=this.state.r;a<=this.state.nPoints;a++){var e=this.calcularProbabilidad(a);t.push(Number(e))}return t}},{key:"calcularProbabilidad",value:function(t){return z(t-1,t-this.state.r)*Math.pow(this.state.p,this.state.r)*Math.pow(1-this.state.p,t-+this.state.r)}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(m,{label:"p",min:0,max:1,step:"0.1",defaultValue:0,helpText:"Probabilidad \xe9xito",handleChange:this.changeP}),Object(n.jsx)(m,{label:"k",min:1,max:999999,step:"1",defaultValue:1,helpText:"N\xba \xe9xito",handleChange:this.changeR}),Object(n.jsx)(P,{name:this.state.name,descripcion:this.state.descripcion,media:this.state.media,varianza:this.state.varianza,desviacion:this.state.desviacion}),Object(n.jsx)(w,{data:L}),Object(n.jsx)(F,{min:0,max:100,default:1,step:1,handleChange:this.changePuntos}),Object(n.jsx)(A,{result:this.state.probabilidad,min:this.state.r,max:this.state.nPoints,range:this.state.probRange,handleChange:this.changeRange})]})}}]),e}(i.Component),U={labels:[],datasets:[{backgroundColor:"rgba(75,192,192, 0.6)",highlightStroke:"rgba(220,220,220,1)",borderWidth:0,data:[]}]},I=function(t){Object(h.a)(e,t);var a=Object(l.a)(e);function e(t){var n;return Object(o.a)(this,e),(n=a.call(this,t)).changeP=function(){var t=Object(k.a)(O.a.mark((function t(a){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setState({p:Number(a.target.value)});case 2:case"end":return t.stop()}}),t,this)})));return function(a){return t.apply(this,arguments)}}(),n.changePuntos=function(){var t=Object(k.a)(O.a.mark((function t(a,e){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setState({nPoints:Number(e)});case 2:case"end":return t.stop()}}),t,this)})));return function(a,e){return t.apply(this,arguments)}}(),n.changeP=n.changeP.bind(Object(y.a)(n)),n.changePuntos=n.changePuntos.bind(Object(y.a)(n)),n.state={name:"Geom\xe9trica",descripcion:"N\xba de fracasos ANTES del primer \xe9xito.",p:0,media:0,varianza:0,desviacion:0,nPoints:1},n}return Object(u.a)(e,[{key:"componentDidUpdate",value:function(t,a){if(a.p!==this.state.p||a.nPoints!==this.state.nPoints){this.setState({media:this.calcularMedia(),varianza:this.calcularVarianza(),desviacion:this.calcularDesviacion()}),U.labels=Array.from(Array(this.state.nPoints).keys());var e=this.calcularFuncion();U.datasets=[{backgroundColor:"rgba(75,192,192, 0.6)",highlightStroke:"rgba(220,220,220,1)",borderWidth:0,data:e}]}}},{key:"calcularMedia",value:function(){return(1-this.state.p)/this.state.p}},{key:"calcularVarianza",value:function(){return(1-this.state.p)/Math.pow(this.state.p,2)}},{key:"calcularDesviacion",value:function(){return Math.pow((1-this.state.p)/Math.pow(this.state.p,2),.5)}},{key:"calcularFuncion",value:function(){for(var t=[],a=0;a<=this.state.nPoints;a++){var e=this.calcularProbabilidad(a);t.push(Number(e))}return t}},{key:"calcularProbabilidad",value:function(t){return Math.pow(1-this.state.p,t)*this.state.p}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(m,{label:"p",min:0,max:1,step:"0.1",defaultValue:0,helpText:"Probabilidad \xe9xito",handleChange:this.changeP}),Object(n.jsx)(P,{name:this.state.name,descripcion:this.state.descripcion,media:this.state.media,varianza:this.state.varianza,desviacion:this.state.desviacion}),Object(n.jsxs)("span",{children:[" ",Object(n.jsx)(w,{data:U})]}),Object(n.jsx)(F,{min:0,max:40,default:1,step:1,handleChange:this.changePuntos})]})}}]),e}(i.Component),_={labels:[],datasets:[{backgroundColor:"rgba(75,192,192, 0.6)",highlightStroke:"rgba(220,220,220,1)",borderWidth:0,data:[]}]},H=function(t){Object(h.a)(e,t);var a=Object(l.a)(e);function e(t){var n;return Object(o.a)(this,e),(n=a.call(this,t)).changeN=function(){var t=Object(k.a)(O.a.mark((function t(a){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setState({N:Number(a.target.value)});case 2:case"end":return t.stop()}}),t,this)})));return function(a){return t.apply(this,arguments)}}(),n.changen=function(){var t=Object(k.a)(O.a.mark((function t(a){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setState({n:Number(a.target.value)});case 2:case"end":return t.stop()}}),t,this)})));return function(a){return t.apply(this,arguments)}}(),n.changek=function(){var t=Object(k.a)(O.a.mark((function t(a){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setState({k:Number(a.target.value)});case 2:case"end":return t.stop()}}),t,this)})));return function(a){return t.apply(this,arguments)}}(),n.changeN=n.changeN.bind(Object(y.a)(n)),n.changen=n.changen.bind(Object(y.a)(n)),n.changek=n.changek.bind(Object(y.a)(n)),n.state={name:"Hipergeom\xe9trica",descripcion:"N\xba de \xe9xitos tras n extracciones sin reemplazamiento de una poblaci\xf3n de tama\xf1o N, con k individuos de una clase (\xe9xito) y N-k de otra (fracaso).",N:0,n:0,k:0,media:0,varianza:0,desviacion:0},n}return Object(u.a)(e,[{key:"componentDidUpdate",value:function(t,a){if(a.N!==this.state.N||a.n!==this.state.n||a.k!==this.state.k){this.setState({media:this.calcularMedia(),varianza:this.calcularVarianza(),desviacion:this.calcularDesviacion()});var e=this.state.n,n=this.state.k;_.labels=Array(n-e+1).fill().map((function(t,a){return e+a}));var i=this.calcularFuncion();_.datasets=[{backgroundColor:"rgba(75,192,192, 0.6)",highlightStroke:"rgba(220,220,220,1)",borderWidth:0,data:i}]}}},{key:"calcularMedia",value:function(){return this.state.k*this.state.n/this.state.N}},{key:"calcularVarianza",value:function(){return this.state.k*this.state.n/this.state.N*(1-this.state.k/this.state.N)*((this.state.N-this.state.n)/(this.state.N-1))}},{key:"calcularDesviacion",value:function(){return Math.pow(this.state.k*this.state.n/this.state.N*(1-this.state.k/this.state.N)*((this.state.N-this.state.n)/(this.state.N-1)),.5)}},{key:"calcularFuncion",value:function(){for(var t=[],a=0;a<=this.state.n;a++){var e=this.calcularProbabilidad(a);t.push(Number(e))}return t}},{key:"calcularProbabilidad",value:function(t){return z(this.state.k,t)*z(this.state.N-this.state.k,this.state.n-t)/z(this.state.N,this.state.n)}},{key:"render",value:function(){var t=this.state.N<this.state.n,a=this.state.n<this.state.k,e=t|a;return Object(n.jsxs)("div",{children:[Object(n.jsx)(m,{error:t,label:"N",min:0,max:1e5,step:"1",defaultValue:0,helpText:"Poblaci\xf3n original",handleChange:this.changeN}),Object(n.jsx)(m,{error:e,label:"n",min:0,max:1e5,step:"1",defaultValue:0,helpText:"Extracci\xf3n",handleChange:this.changen}),Object(n.jsx)(m,{error:a,label:"k",min:0,max:1e5,step:"1",defaultValue:0,helpText:"Poblaci\xf3n marcada",handleChange:this.changek}),Object(n.jsx)(P,{name:this.state.name,descripcion:this.state.descripcion,media:this.state.media,varianza:this.state.varianza,desviacion:this.state.desviacion}),Object(n.jsxs)("span",{children:[" ",Object(n.jsx)(w,{data:_})]})]})}}]),e}(i.Component),G={labels:[],datasets:[{backgroundColor:"rgba(75,192,192, 0.6)",highlightStroke:"rgba(220,220,220,1)",borderWidth:0,data:[]}]},Y=function(t){Object(h.a)(e,t);var a=Object(l.a)(e);function e(t){var n;return Object(o.a)(this,e),(n=a.call(this,t)).changeRange=function(){var t=Object(k.a)(O.a.mark((function t(a,e){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setState({probRange:e});case 2:case"end":return t.stop()}}),t,this)})));return function(a,e){return t.apply(this,arguments)}}(),n.changeP=function(){var t=Object(k.a)(O.a.mark((function t(a){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setState({p:Number(a.target.value)});case 2:case"end":return t.stop()}}),t,this)})));return function(a){return t.apply(this,arguments)}}(),n.changePuntos=function(){var t=Object(k.a)(O.a.mark((function t(a,e){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setState({nPoints:Number(e)});case 2:case"end":return t.stop()}}),t,this)})));return function(a,e){return t.apply(this,arguments)}}(),n.changeP=n.changeP.bind(Object(y.a)(n)),n.changePuntos=n.changePuntos.bind(Object(y.a)(n)),n.changeRange=n.changeRange.bind(Object(y.a)(n)),n.state={name:"Pascal",descripcion:"N\xba de fracasos HASTA el primer \xe9xito.",p:0,media:0,varianza:0,desviacion:0,nPoints:1,probRange:[0,0],probabilidad:0},n}return Object(u.a)(e,[{key:"componentDidUpdate",value:function(t,a){if(a.p!==this.state.p||a.nPoints!==this.state.nPoints||a.probRange!==this.state.probRange){this.setState({media:this.calcularMedia(),varianza:this.calcularVarianza(),desviacion:this.calcularDesviacion()}),G.labels=Array.from(Array(this.state.nPoints).keys());var e=this.calcularFuncion();G.datasets=[{backgroundColor:"rgba(75,192,192, 0.6)",highlightStroke:"rgba(220,220,220,1)",borderWidth:0,data:e}];var n=0;console.log("CALCULANDO ENTRE "+this.state.probRange[0]+" Y "+this.state.probRange[1]);for(var i=this.state.probRange[0];i<=this.state.probRange[1];i++)console.log(this.calcularProbabilidad(i)),n+=this.calcularProbabilidad(i);console.log("RES= "+n),this.setState({probabilidad:n})}}},{key:"calcularMedia",value:function(){return 1/this.state.p}},{key:"calcularVarianza",value:function(){return(1-this.state.p)/Math.pow(this.state.p,2)}},{key:"calcularDesviacion",value:function(){return Math.pow((1-this.state.p)/Math.pow(this.state.p,2),.5)}},{key:"calcularFuncion",value:function(){for(var t=[],a=0;a<=this.state.nPoints;a++){var e=this.calcularProbabilidad(a);t.push(Number(e))}return t}},{key:"calcularProbabilidad",value:function(t){return Math.pow(1-this.state.p,t-1)*this.state.p}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(m,{label:"p",min:0,max:1,step:"0.1",defaultValue:0,helpText:"Probabilidad \xe9xito",handleChange:this.changeP}),Object(n.jsx)(P,{name:this.state.name,descripcion:this.state.descripcion,media:this.state.media,varianza:this.state.varianza,desviacion:this.state.desviacion}),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(w,{data:G}),Object(n.jsx)(F,{min:0,max:40,default:1,step:1,handleChange:this.changePuntos}),Object(n.jsx)(A,{result:this.state.probabilidad,min:0,max:this.state.nPoints,range:this.state.probRange,handleChange:this.changeRange})]})]})}}]),e}(i.Component),J={labels:[],datasets:[{backgroundColor:"rgba(75,192,192, 0.6)",highlightStroke:"rgba(220,220,220,1)",borderWidth:0,data:[]}]},q=function(t){Object(h.a)(e,t);var a=Object(l.a)(e);function e(t){var n;return Object(o.a)(this,e),(n=a.call(this,t)).changeL=function(){var t=Object(k.a)(O.a.mark((function t(a){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setState({l:Number(a.target.value)});case 2:case"end":return t.stop()}}),t,this)})));return function(a){return t.apply(this,arguments)}}(),n.changePuntos=function(){var t=Object(k.a)(O.a.mark((function t(a,e){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setState({nPoints:Number(e)});case 2:case"end":return t.stop()}}),t,this)})));return function(a,e){return t.apply(this,arguments)}}(),n.changeL=n.changeL.bind(Object(y.a)(n)),n.changePuntos=n.changePuntos.bind(Object(y.a)(n)),n.state={name:"Poisson",descripcion:"N\xfamero de veces que ocurre un suceso RARO por unidades de tiempo.",l:0,media:0,varianza:0,desviacion:0,nPoints:1},n}return Object(u.a)(e,[{key:"componentDidUpdate",value:function(t,a){if(a.l!==this.state.l||a.nPoints!==this.state.nPoints){this.setState({media:this.calcularMedia(),varianza:this.calcularVarianza(),desviacion:this.calcularDesviacion()}),J.labels=Array.from(Array(this.state.nPoints).keys());var e=this.calcularFuncion();J.datasets=[{backgroundColor:"rgba(75,192,192, 0.6)",highlightStroke:"rgba(220,220,220,1)",borderWidth:0,data:e}]}}},{key:"calcularMedia",value:function(){return this.state.l}},{key:"calcularVarianza",value:function(){return this.state.l}},{key:"calcularDesviacion",value:function(){return Math.pow(this.state.l,.5)}},{key:"calcularFuncion",value:function(){for(var t=[],a=0;a<=this.state.nPoints;a++){var e=this.calcularProbabilidad(a);t.push(Number(e))}return t}},{key:"calcularProbabilidad",value:function(t){return Math.exp(-this.state.l)*Math.pow(this.state.l,t)/S(t)}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(m,{label:"\u03bb",min:0,max:999999,step:"0.1",defaultValue:0,helpText:"Proporci\xf3n",handleChange:this.changeL}),Object(n.jsx)(P,{name:this.state.name,descripcion:this.state.descripcion,media:this.state.media,varianza:this.state.varianza,desviacion:this.state.desviacion}),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("span",{children:[" ",Object(n.jsx)(w,{data:J})," "]}),Object(n.jsx)(F,{min:0,max:70,default:1,step:1,handleChange:this.changePuntos})]})]})}}]),e}(i.Component),Z=function(t){Object(h.a)(e,t);var a=Object(l.a)(e);function e(){var t;return Object(o.a)(this,e),(t=a.call(this)).changeDistribution=function(a){t.setState({distribution:a.target.value})},t.ShowDistribution=function(){return"B"===t.state.distribution?Object(n.jsx)(T,{}):"BN1"===t.state.distribution?Object(n.jsx)(E,{}):"BN2"===t.state.distribution?Object(n.jsx)(W,{}):"G"===t.state.distribution?Object(n.jsx)(I,{}):"Pc"===t.state.distribution?Object(n.jsx)(Y,{}):"H"===t.state.distribution?Object(n.jsx)(H,{}):"P"===t.state.distribution?Object(n.jsx)(q,{}):Object(n.jsx)("p",{children:"Selecciona distribuci\xf3n..."})},t.state={distribution:null},t}return Object(u.a)(e,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"PROB",children:[Object(n.jsx)(j,{handleChange:this.changeDistribution,options:this.options}),Object(n.jsx)(this.ShowDistribution,{})]})}}]),e}(r.a.Component),K=r.a.createElement("h1",{className:"greeting"},"Hello, world!");c.a.render(K,document.getElementById("root"));var Q=Z,X=function(t){t&&t instanceof Function&&e.e(6).then(e.bind(null,965)).then((function(a){var e=a.getCLS,n=a.getFID,i=a.getFCP,r=a.getLCP,s=a.getTTFB;e(t),n(t),i(t),r(t),s(t)}))};c.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(Q,{})}),document.getElementById("root")),X()}},[[559,1,2]]]);
//# sourceMappingURL=main.0f6eb6c7.chunk.js.map