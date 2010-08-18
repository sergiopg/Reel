/*
 Copyright (c) 2009-2010 Petr Vostrel (http://petr.vostrel.cz/)
 Dual licensed under the MIT (MIT-LICENSE.txt)
 and GPL (GPL-LICENSE.txt) licenses.

 http://jquery.vostrel.cz/reel
 Version: 1.1 RC
 Updated: 2010-08-14

 Requires jQuery 1.4.x
*/
(function(k,rb,Qa,o){function Ra(j){return"<"+j+"/>"}function $(j){return"."+j}function aa(j){return"url("+j+")"}function z(j){return+j.toFixed(4)}function O(j,a,t){return P(j,xa(a,t))}function Sa(j){function a(){k.fn[this]||(k.fn[this]=function(){return this})}k.each(j,a)}function ba(j,a){return A(j)*(a?-1:1)}function Q(j){return j.originalEvent.touches[0]}var Ta=k.reel={footage:6,frame:1,frames:36,hint:"",horizontal:true,hotspot:o,indicator:0,klass:"",loops:true,reversed:o,spacing:0,stitched:o,
suffix:"-reel",tooltip:"",area:o,brake:0.5,clickfree:false,couple:o,cw:false,delay:-1,dragable:true,graph:o,image:o,images:[],monitor:o,maximum:100,minimum:0,path:"",preloader:4,rebound:0.5,revolution:o,row:1,rows:0,speed:0,step:o,steps:o,tempo:25,timeout:2,throwable:true,value:o,wheelable:true};k.fn.reel=function(j){var a=k.extend({},Ta,j);j=function(g){var d=[];g.filter(Ua).each(function(){var c=k(this),m=a.images.length&&a.images||a.image||c.attr(ya),w=R(c.css(za)),u=R(c.css(Aa));!m||m==Ba||!w||
!u||d.push(c)});g.filter(Ca+$(H)).each(function(){d.push(k(this))});return k(d)}(this);var t=[];a.reversed&&(a.cw=true);a.tooltip&&(a.hint=a.tooltip);a.hotspot&&(a.area=a.hotspot);ca=ca||function g(){B.trigger(da);return setTimeout(g,1E3/a.tempo)}();j.each(function(){var g=k(this),d=function(e,b){g.data(e,b);g.trigger("store");return b},c=function(e){g.trigger("recall");return g.data(e)},m=function(e){Va||delete this;return e},w={setup:function(e){if(g.hasClass(H))return m.call(e);var b=g.attr(ya),
f=g.attr(Wa),i=g.attr("style"),h=a.images,l=a.stitched,q=a.loops,n={x:R(g.css(za)),y:R(g.css(Aa))},p={display:"block",width:n.x,height:n.y};p=g.attr({src:a.images?Xa:b}).bind(w).addClass(H).css(p);t.push(p[0]);d(ea,h.length&&h.length||a.image||b.replace(/^(.*)\.(jpg|jpeg|png|gif)$/,"$1"+a.suffix+".$2"));d(C,a.frame);d(Da,a.spacing);d(I,n);d(r,0);d(fa,a.steps||a.frames);d(S,a.revolution||l/2||n.x);d(Ea,Fa(d(T,h.length||a.frames)/a.footage));d(U,1/(c(T)-(q&&!l?0:1)));d(Ya,1/P(c(T),c(fa)));d(Ga,l-(q?
0:n.x));d(Ha,n.x-a.indicator);d(J,"#"+f+a.suffix);d(x,d(ga,a.speed)<0);d(D,0);d(v,(a.row-1)/(a.rows-1));d(E,a.value||0);d(V,ba(1,!a.cw&&!l));d(Ia,{src:b,style:i||Ba});ca&&B.bind(da,w.tick);m.call(e);g.trigger("start")},teardown:function(e){k(c(J)).remove();g.removeClass(H).unbind(s).unbind(w).attr(g.data(Ia)).enableTextSelect().removeData();W();B.unbind(X).unbind(Y).unbind(da,w.tick);m.call(e)},start:function(e){var b=c(I),f=c(T),i=P(f,c(fa));i=d(r,1/i*((a.step||a.frame)-1));d(C,i*f+1);f=c(ea);i=
a.images;f=!i.length?[f]:[].concat(i);g.attr("id");var h=g[0];h.frames=f.length;h.preloads=h.preloads||[];h.preloaded=h.preloaded||0;i=f.length!=h.preloads.length;var l=c(J).substr(1);l=k(K,{className:Za,id:l,css:{position:"relative",width:b.x}}).insertAfter(g);var q=k(K,{className:$a,css:{position:Z,left:0,top:-b.y,width:b.x,height:b.y,background:ha,opacity:0}}).appendTo(l);q=d(ia,k(a.area||q));var n=g.add(a.couple);ab?q.css({WebkitUserSelect:"none"}).bind(bb,function(p){n.trigger("down",[Q(p).clientX,
Q(p).clientY,true]);return false}).bind(cb,function(p){n.trigger("slide",[Q(p).clientX,Q(p).clientY,true]);return false}).bind(db,function(){n.trigger("up",[true]);return false}).bind(eb,function(){n.trigger("up",[true]);return false}):q.css({cursor:"url("+Ja+"), "+ja}).bind(Y,function(p){n.trigger("over",[p.pageX,p.pageY])}).bind(fb,function(p,gb){n.trigger("wheel",[gb]);return false}).bind(hb,function(){n.trigger("play")}).bind(a.clickfree?ib:jb,function(p){n.trigger("down",[p.clientX,p.clientY]);
return false}).bind(a.clickfree?kb:X,function(){n.trigger("up");return false}).disableTextSelect();a.hint&&q.attr(lb,a.hint);a.monitor&&l.append(ka=k(K,{className:mb,css:{position:Z,left:0,top:-b.y}}))||(ka=k());a.indicator&&l.append(Ka("x"));a.rows&&a.indicator&&l.append(Ka("y"));if(i)for(l.append(la=k(K,{className:nb,css:{position:Z,left:0,top:-a.preloader,height:a.preloader,backgroundColor:ha}}));f.length;){i=new Image;l=a.path+f.shift();k(i).load(function(){h.preloaded++;la.css({width:1/h.frames*
h.preloaded*b.x});h.frames==h.preloaded&&la.remove()});i.src=l;h.preloads.push(i)}a.delay>0&&y();a.value!=o&&g.trigger("valueChange",c(E));m.call(e);g.trigger(a.rows&&!a.stitched?"rowChange":"frameChange")},tick:function(e){var b=c(D);if(L){var f=z(b-ob*L);b=!(b*f<=0||b<A(f))&&d(D,b>A(c(ga))?f:(L=u=0))}ka.text(c(a.monitor));b&&L++;u&&u++;La(0);g[0].value!=c(E)&&g.trigger("valueChange",g[0].value);if(u&&!b)return m.call(e);if(c(ma))return m.call(e,y());f=c(V)*ba(1,c(x));b=(c(na)?b:A(c(ga))+b)/a.tempo;
d(r,c(r)-b*f);m.call(e);g.trigger("fractionChange")},play:function(e){var b=d(oa,true);d(na,!b);Ma();m.call(e)},pause:function(e){d(oa,false);y();m.call(e)},stop:function(e){var b=d(na,true);d(oa,!b);m.call(e)},down:function(e,b,f,i){if(!a.dragable)return m.call(e);d(ma,true);d(D,0);pa(b,f,c(r),c(S),c(v));qa=o;y();W();!i&&B.bind(Y,function(h){g.trigger("slide",[h.clientX,h.clientY]);m.call(h)}).css({cursor:aa(pb)+", "+ja})&&!a.clickfree&&B.bind(X,function(h){g.trigger("up");m.call(h)})&&c(ia);m.call(e)},
up:function(e,b){if(!a.dragable)return m.call(e);d(ma,false);var f=d(D,!a.throwable?0:A(F[0]+F[1]+F[2])/60);L=f?1:0;f?Ma():y();W();!b&&B.unbind(X).unbind(Y)&&c(ia).css({cursor:aa(Ja)+", "+ja});m.call(e)},slide:function(e,b,f){if(!a.dragable)return m.call(e);var i=c(S),h=c(Na),l=La(b-qa||0),q=d(r,Oa(b-h.x,c(ra),i,c(sa),c(ta),c(V)));l&&d(x,l<0);if(a.rows){l=c(I).y;var n=c(Pa),p=-n*l;d(v,z(k.reel.math.envelope(f-h.y,n,l,p,p+l,-1)))}!(q%1)&&!a.loops&&pa(b,f,q,i,c(v));y();qa=b;m.call(e);g.trigger("fractionChange")},
wheel:function(e,b){if(!a.wheelable)return m.call(e);var f=Fa(qb(A(b))/2);f=ba(f,b>0);b=0.2*c(S);pa(o,o,c(r),b,c(v));d(r,Oa(f,c(ra),b,c(sa),c(ta),c(V)));f&&d(x,f<0);d(D,0);y();m.call(e);g.trigger("fractionChange");return false},fractionChange:function(e,b,f){b=!b?c(r):d(r,b);b=a.loops?b-M(b):O(0,1,b);b=d(r,z(b));d(C,1+M(b/c(U)));d(E,z(k.reel.math.interpolate(b,a.minimum,a.maximum)));if(!a.loops&&a.rebound){!u&&!(b%1)?ua++:(ua=0);ua>=a.rebound*1E3/a.tempo&&d(x,!c(x))}m.call(e);f||g.trigger("valueChange");
g.trigger(a.rows&&!a.stitched?"rowChange":"frameChange")},rowChange:function(e,b){var f=M(c(r)/c(U))+1;b=d(v,O(0,1,z(b!=o?(b-1)/(a.rows-1):c(v))));d(C,f+(!a.rows?0:N(b*(a.rows-1))*a.frames));m.call(e);g.trigger("frameChange")},frameChange:function(e,b){var f=!b?c(r):d(r,z(c(U)*(b-1)));b=d(C,N(b?b:c(C)));var i=a.images,h=a.footage,l=a.horizontal;if(a.stitched)l=[-N(f*c(Ga))+G,0+G];else{var q=b%h-1;q=q<0?h-1:q;var n=M((b-0.1)/h);n+=a.rows?0:c(x)?0:c(Ea);h=c(I);var p=c(Da);n=n*((l?h.y:h.x)+p);q=q*((l?
h.x:h.y)+p);l=i.length?[0,0]:l?[-q+G,-n+G]:[-n+G,-q+G]}b=i[b-1]||c(ea);i=c(Ha);f=O(0,i,N(k.reel.math.interpolate(f,-1,i+2)));f=!a.cw||a.stitched?f:i-f;i={background:aa(a.path+b)+va+l.join(va)};a.images.length?g.attr({src:a.path+b}):g.css(i);k($(wa+".x"),c(J)).css({left:f});if(!a.rows)return m.call(e);f=c(I).y-a.indicator;b=O(0,f,N(k.reel.math.interpolate(c(v),-1,f+2)));k($(wa+".y"),c(J)).css({top:b-f-a.indicator});m.call(e)},valueChange:function(e,b){e=b!==o&&d(r,b/(a.maximum-a.minimum));g[0].value=
b===o?c(E):d(E,b);e===false||g.trigger("fractionChange",[o,true])}},u,L=0,Ma=function(){return u=0},y=function(){return u=-a.timeout*a.tempo},ka,la,Ka=function(e){return k(K,{className:[wa,e].join(va),css:{width:a.indicator,height:a.indicator,top:e=="y"?o:-a.indicator,left:e=="x"?o:0,position:Z,backgroundColor:ha}})},ua=0,qa=0,La=function(e){return F.push(e)&&F.shift()&&e},W=function(){return F=[0,0,0]},F=W(),ob=a.brake/a.tempo,Oa=a.graph||k.reel.math[a.loops?"hatch":"envelope"],pa=function(e,b,f,
i,h){d(ra,f);d(Pa,h);d(sa,a.loops?0:-f*i);d(ta,a.loops?i:i-f*i);return e&&d(Na,{x:e,y:b})||o};w.setup()});return k(t)};k.reel.math={envelope:function(j,a,t,g,d,c){return a+P(g,xa(d,-j*c))/t},hatch:function(j,a,t,g,d,c){j=(j<g?d:0)+j%d;j=a+-j*c/t;return j-M(j)},interpolate:function(j,a,t){return a+j*(t-a)}};Sa("mousewheel disableTextSelect enableTextSelect".split(/ /));var B=k(Qa),ab=/iphone|ipod|ipad|android/i.test(navigator.userAgent),Va=k.browser.msie,ja="ew-resize",ca,H="jquery-reel",Za=H+"-overlay",
wa="indicator",nb="preloader",mb="monitor",$a="interface",Xa="data:image/gif;base64,R0lGODlhCAAIAIAAAAAAAAAAACH5BAEAAAAALAAAAAAIAAgAAAIHhI+py+1dAAA7",Ja="data:image/gif;base64,R0lGODlhEAAQAJECAAAAAP///////wAAACH5BAEAAAIALAAAAAAQABAAQAI3lC8AeBDvgosQxQtne7yvLWGStVBelXBKqDJpNzLKq3xWBlU2nUs4C/O8cCvU0EfZGUwt19FYAAA7",pb="data:image/gif;base64,R0lGODlhEAAQAJECAAAAAP///////wAAACH5BAEAAAIALAAAAAAQABAAQAIslI95EB3MHECxNjBVdE/5b2zcRV1QBabqhwltq41St4hj5konmVioZ6OtEgUAOw==",N=Math.round,M=Math.floor,Fa=Math.ceil,
xa=Math.min,P=Math.max,A=Math.abs,qb=Math.sqrt,R=parseInt,ia="area",Ia="backup",x="backwards",U="bit",ma="clicked",Na="clicked_location",ra="clicked_on",Pa="clicked_row",V="cwish",I="dimensions",r="fraction",C="frame",T="frames",ta="hi",ea="image",Ha="indicator_travel",sa="lo",oa="playing",S="revolution",v="row",Ea="rows",Da="spacing",ga="speed",J="stage",fa="steps",Ga="stitched_travel",na="stopped",E="value",D="velocity",Ya="wheel_step",s=".reel",hb="dblclick"+s,jb="mousedown"+s,ib="mouseenter"+
s,kb="mouseleave"+s,Y="mousemove"+s,X="mouseup"+s,fb="mousewheel"+s,da="tick"+s,eb="touchcancel"+s,db="touchend"+s,bb="touchstart"+s,cb="touchmove"+s,Ba="",va=" ",Z="absolute",Ca="div",K=Ra(Ca),Aa="height",ha="#000",Wa="id",Ua="img",G="px",ya="src",lb="title",za="width"})(jQuery,window,document);
