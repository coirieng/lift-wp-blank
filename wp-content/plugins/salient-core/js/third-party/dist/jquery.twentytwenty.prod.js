"use strict";!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(i,e){var r=6,a=i.event.add,o=i.event.remove,c=function(t,e,n){i.event.trigger(e,n,t)},d=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t,e){return window.setTimeout(function(){t()},25)},s={textarea:!0,input:!0,select:!0,button:!0},u={move:"mousemove",cancel:"mouseup dragstart",end:"mouseup"},f="touchmove",m="touchend",t="touchend";function n(t){var n=t,i=!1,a=!1;function e(t){i?(n(),d(e),i=!(a=!0)):a=!1}this.kick=function(t){i=!0,a||e()},this.end=function(t){var e=n;t&&(a?(n=i?function(){e(),t()}:t,i=!0):t())}}function v(){return!0}function p(){return!1}function g(t){t.preventDefault()}function l(t){s[t.target.tagName.toLowerCase()]||t.preventDefault()}function h(t,e){var n,i;if(t.identifiedTouch)return t.identifiedTouch(e);for(n=-1,i=t.length;++n<i;)if(t[n].identifier===e)return t[n]}function w(t,e){var n=h(t.changedTouches,e.identifier);if(n&&(n.pageX!==e.pageX||n.pageY!==e.pageY))return n}function y(t){k(t,t.data,t,X)}function Y(t){X()}function X(){o(document,u.move,y),o(document,u.cancel,Y)}function T(t){var e=t.data,n=w(t,e);n&&k(t,e,n,_)}function S(t){var e=t.data;h(t.changedTouches,e.identifier)&&_(e.identifier)}function _(t){o(document,"."+t,T),o(document,"."+t,S)}function k(t,e,n,i){var a=n.pageX-e.startX,o=n.pageY-e.startY;a*a+o*o<r*r||function(t,e,n,i,a,o){var r,d;e.target;r=t.targetTouches,d=t.timeStamp-e.timeStamp,e.type="movestart",e.distX=i,e.distY=a,e.deltaX=i,e.deltaY=a,e.pageX=n.pageX,e.pageY=n.pageY,e.velocityX=i/d,e.velocityY=a/d,e.targetTouches=r,e.finger=r?r.length:1,e._handled=x,e._preventTouchmoveDefault=function(){t.preventDefault()},c(e.target,e),o(e.identifier)}(t,e,n,a,o,i)}function x(){return this._handled=v,!1}function C(t){t._handled()}function D(t){var e=t.data.timer;(t.data.touch=t).data.timeStamp=t.timeStamp,e.kick()}function b(t){var e=t.data.event,n=t.data.timer;o(document,u.move,D),o(document,u.end,b),F(e,n,function(){setTimeout(function(){o(e.target,"click",p)},0)})}function q(t){var e=t.data.event,n=t.data.timer,i=w(t,e);i&&(t.preventDefault(),e.targetTouches=t.targetTouches,t.data.touch=i,t.data.timeStamp=t.timeStamp,n.kick())}function A(t){var e,n=t.data.event,i=t.data.timer;h(t.changedTouches,n.identifier)&&(e=n,o(document,"."+e.identifier,q),o(document,"."+e.identifier,A),F(n,i))}function F(t,e,n){e.end(function(){return t.type="moveend",c(t.target,t),n&&n()})}i.event.special.movestart={setup:function(t,e,n){return a(this,"movestart.move",C),!0},teardown:function(t){return o(this,"dragstart drag",g),o(this,"mousedown touchstart",l),o(this,"movestart",C),!0},add:function(t){"move"!==t.namespace&&"moveend"!==t.namespace&&(a(this,"dragstart."+t.guid+" drag."+t.guid,g,e,t.selector),a(this,"mousedown."+t.guid,l,e,t.selector))},remove:function(t){"move"!==t.namespace&&"moveend"!==t.namespace&&(o(this,"dragstart."+t.guid+" drag."+t.guid),o(this,"mousedown."+t.guid))},_default:function(o){var r,d;o._handled()&&(r={target:o.target,startX:o.startX,startY:o.startY,pageX:o.pageX,pageY:o.pageY,distX:o.distX,distY:o.distY,deltaX:o.deltaX,deltaY:o.deltaY,velocityX:o.velocityX,velocityY:o.velocityY,timeStamp:o.timeStamp,identifier:o.identifier,targetTouches:o.targetTouches,finger:o.finger},d={event:r,timer:new n(function(t){var e,n,i,a;e=r,n=d.touch,i=d.timeStamp,a=i-e.timeStamp,e.type="move",e.distX=n.pageX-e.startX,e.distY=n.pageY-e.startY,e.deltaX=n.pageX-e.pageX,e.deltaY=n.pageY-e.pageY,e.velocityX=.3*e.velocityX+.7*e.deltaX/a,e.velocityY=.3*e.velocityY+.7*e.deltaY/a,e.pageX=n.pageX,e.pageY=n.pageY,c(o.target,r)}),touch:e,timeStamp:e},o.identifier===e?(a(o.target,"click",p),a(document,u.move,D,d),a(document,u.end,b,d)):(o._preventTouchmoveDefault(),a(document,f+"."+o.identifier,q,d),a(document,t+"."+o.identifier,A,d)))}},i.event.special.move={setup:function(){a(this,"movestart.move",i.noop)},teardown:function(){o(this,"movestart.move",i.noop)}},i.event.special.moveend={setup:function(){a(this,"movestart.moveend",i.noop)},teardown:function(){o(this,"movestart.moveend",i.noop)}},a(document,"mousedown.move",function(t){var e,n;1!==(e=t).which||e.ctrlKey||e.altKey||(n={target:t.target,startX:t.pageX,startY:t.pageY,timeStamp:t.timeStamp},a(document,u.move,y,n),a(document,u.cancel,Y,n))}),a(document,"touchstart.move",function(t){var e,n;s[t.target.tagName.toLowerCase()]||(n={target:(e=t.changedTouches[0]).target,startX:e.pageX,startY:e.pageY,timeStamp:t.timeStamp,identifier:e.identifier},a(document,f+"."+e.identifier,T,n),a(document,m+"."+e.identifier,S,n))}),"function"==typeof Array.prototype.indexOf&&function(t){for(var e=["changedTouches","targetTouches"],n=e.length;n--;)-1===t.event.props.indexOf(e[n])&&t.event.props.push(e[n])}(i)}),function(v){v.fn.twentytwenty=function(m){m=v.extend({default_offset_pct:.5,orientation:"horizontal"},m);return this.each(function(){var e=m.default_offset_pct,r=v(this),d=m.orientation,t="vertical"===d?"down":"left",n="vertical"===d?"up":"right";r.wrap("<div class='twentytwenty-wrapper twentytwenty-"+d+"'></div>"),r.append("<div class='twentytwenty-overlay'></div>");var c=r.find("img:first"),i=r.find("img:last");r.append("<div class='twentytwenty-handle'></div>");var s=r.find(".twentytwenty-handle");s.append("<span class='twentytwenty-"+t+"-arrow'></span>"),s.append("<span class='twentytwenty-"+n+"-arrow'></span>"),r.addClass("twentytwenty-container"),c.addClass("twentytwenty-before"),i.addClass("twentytwenty-after");var a=r.find(".twentytwenty-overlay");a.append("<div class='twentytwenty-before-label'></div>"),a.append("<div class='twentytwenty-after-label'></div>");function o(t){var e,n,i,a,o=(e=t,n=c.width(),i=c.height(),{w:n+"px",h:i+"px",cw:e*n+"px",ch:e*i+"px"});s.css("vertical"===d?"top":"left","vertical"===d?o.ch:o.cw),a=o,"vertical"===d?c.css("clip","rect(0,"+a.w+","+a.ch+",0)"):c.css("clip","rect(0,"+a.cw+","+a.h+",0)"),r.css("height",a.h)}v(window).on("resize.twentytwenty",function(t){o(e)});var u=0,f=0;s.on("movestart",function(t){((t.distX>t.distY&&t.distX<-t.distY||t.distX<t.distY&&t.distX>-t.distY)&&"vertical"!==d||(t.distX<t.distY&&t.distX<-t.distY||t.distX>t.distY&&t.distX>-t.distY)&&"vertical"===d)&&t.preventDefault(),r.addClass("active"),u=r.offset().left,offsetY=r.offset().top,f=c.width(),imgHeight=c.height()}),s.on("moveend",function(t){r.removeClass("active")}),s.on("move",function(t){r.hasClass("active")&&((e="vertical"===d?(t.pageY-offsetY)/imgHeight:(t.pageX-u)/f)<0&&(e=0),1<e&&(e=1),o(e))}),r.find("img").on("mousedown",function(t){t.preventDefault()}),v(window).trigger("resize.twentytwenty")})}}(jQuery);