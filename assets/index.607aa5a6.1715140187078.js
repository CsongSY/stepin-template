import{s as D,c as R,S as c,a as h}from"./index.d6e2489a.1715140187078.js";import{oa as x,ob as H,aD as E,d as F,aA as I,G as C,o as M,nO as P,J as b,f as A,Y as v,aG as O}from"./index-6388fb42.js";function U(n,t,r){n=x(n),t=H(t);var e=t?D(n):0;return t&&e<t?R(t-e,r)+n:n}var $=[["Y",1e3*60*60*24*365],["M",1e3*60*60*24*30],["D",1e3*60*60*24],["H",1e3*60*60],["m",1e3*60],["s",1e3],["S",1]];function y(n,t){var r=n,e=/\[[^\]]*]/g,d=(t.match(e)||[]).map(function(i){return i.slice(1,-1)}),o=t.replace(e,"[]"),m=$.reduce(function(i,l){var w=E(l,2),p=w[0],u=w[1];if(i.indexOf(p)!==-1){var a=Math.floor(r/u);return r-=a*u,i.replace(new RegExp("".concat(p,"+"),"g"),function(f){var g=f.length;return U(a.toString(),g,"0")})}return i},o),s=0;return m.replace(e,function(){var i=d[s];return s+=1,i})}function L(n,t){var r=t.format,e=r===void 0?"":r,d=new Date(n).getTime(),o=Date.now(),m=Math.max(d-o,0);return y(m,e)}var N=1e3/30;function T(n){return new Date(n).getTime()}var _=function(){return v(v({},h()),{},{value:[Number,String,Object],format:String,onFinish:Function,onChange:Function})};const j=F({compatConfig:{MODE:3},name:"AStatisticCountdown",props:I(_(),{format:"HH:mm:ss"}),setup:function(t,r){var e=r.emit,d=r.slots,o=C(),m=C(),s=function(){var a=t.value,f=T(a);f>=Date.now()?i():l()},i=function(){if(!o.value){var a=T(t.value);o.value=setInterval(function(){m.value.$forceUpdate(),a>Date.now()&&e("change",a-Date.now()),s()},N)}},l=function(){var a=t.value;if(o.value){clearInterval(o.value),o.value=void 0;var f=T(a);f<Date.now()&&e("finish")}},w=function(a){var f=a.value,g=a.config,S=t.format;return L(f,v(v({},g),{},{format:S}))},p=function(a){return a};return M(function(){s()}),P(function(){s()}),b(function(){l()}),function(){var u=t.value;return A(c,v({ref:m},v(v({},O(t,["onFinish","onChange"])),{},{value:u,valueRender:p,formatter:w})),d)}}});c.Countdown=j;c.install=function(n){return n.component(c.name,c),n.component(c.Countdown.name,c.Countdown),n};c.Countdown;
//# sourceMappingURL=index.607aa5a6.1715140187078.js.map
