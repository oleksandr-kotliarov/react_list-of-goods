(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{14:function(t,e,s){},16:function(t,e,s){"use strict";s.r(e);var n,r=s(3),i=s.n(r),o=s(4),c=s(5),a=s(8),u=s(6),l=s(7),d=s(1),b=s.n(d),h=(s(13),s(14),s(0)),p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPABET=1]="ALPABET",t[t.LENGTH=2]="LENGTH"}(n||(n={}));var m=function(t){Object(a.a)(s,t);var e=Object(u.a)(s);function s(){var t;Object(o.a)(this,s);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={isStarted:!1,isReversed:!1,sortType:n.NONE},t.showList=function(){t.setState((function(t){return{isStarted:!t.isStarted}}))},t.setSortType=function(e){t.setState({sortType:e})},t.setReverse=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.setDefault=function(){t.setState({isReversed:!1,sortType:n.NONE})},t}return Object(c.a)(s,[{key:"render",value:function(){var t=this,e=this.state,s=e.isStarted,r=e.isReversed,i=e.sortType,o=function(t,e,s){var r=Object(l.a)(t);return e!==n.NONE&&r.sort((function(t,s){switch(e){case n.ALPABET:return t.localeCompare(s);case n.LENGTH:return t.length-s.length;default:return 0}})),s?r.reverse():r}(p,i,r);return Object(h.jsx)("div",{className:"App block box",children:s?Object(h.jsxs)("div",{className:"block",children:[Object(h.jsx)("button",{type:"button",onClick:function(){return t.setSortType(n.ALPABET)},className:"button is-primary is-light is-rounded mx-2",children:"Sort alphabetically"}),Object(h.jsx)("button",{type:"button",onClick:function(){return t.setSortType(n.LENGTH)},className:"button is-primary is-light is-rounded mx-2",children:"Sort by length"}),Object(h.jsx)("button",{type:"button",onClick:this.setReverse,className:"button is-primary is-light is-rounded mx-2",children:"Reverse"}),Object(h.jsx)("button",{type:"button",onClick:this.setDefault,className:"button is-primary is-light is-rounded mx-2",children:"Reset"}),Object(h.jsx)("ul",{className:"Goods table",children:o.map((function(t){return Object(h.jsx)("li",{className:"Goods__item subtitle is-5",children:t},t)}))})]}):Object(h.jsx)("button",{type:"button",onClick:this.showList,className:"button is-success is-rounded",children:"Start"})})}}]),s}(b.a.Component);i.a.render(Object(h.jsx)(m,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.1356feeb.chunk.js.map