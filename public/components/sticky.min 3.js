/*! UIkit 2.25.0 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function(t){var i;window.UIkit&&(i=t(UIkit)),"function"==typeof define&&define.amd&&define("uikit-sticky",["uikit"],function(){return i||t(UIkit)})}(function(t){"use strict";function i(){var i=arguments.length?arguments:n;if(i.length&&!(e.scrollTop()<0))for(var o,a,r,h,p=e.scrollTop(),c=s.height(),l=e.height(),d=c-l,u=p>d?d-p:0,m=0;m<i.length;m++)if(h=i[m],h.element.is(":visible")&&!h.animate){if(h.check()){if(h.top<0?o=0:(r=h.element.outerHeight(),o=c-r-h.top-h.options.bottom-p-u,o=0>o?o+h.top:h.top),h.boundary&&h.boundary.length){var f=h.boundary.offset().top;a=h.boundtoparent?c-(f+h.boundary.outerHeight())+parseInt(h.boundary.css("padding-bottom")):c-f-parseInt(h.boundary.css("margin-top")),o=p+r>c-a-(h.top<0?0:h.top)?c-a-(p+r):o}if(h.currentTop!=o){if(h.element.css({position:"fixed",top:o,width:h.getWidthFrom.length?h.getWidthFrom.width():h.element.width()}),!h.init&&(h.element.addClass(h.options.clsinit),location.hash&&p>0&&h.options.target)){var g=t.$(location.hash);g.length&&setTimeout(function(t,i){return function(){i.element.width();var e=t.offset(),s=e.top+t.outerHeight(),n=i.element.offset(),o=i.element.outerHeight(),a=n.top+o;n.top<s&&e.top<a&&(p=e.top-o-i.options.target,window.scrollTo(0,p))}}(g,h),0)}h.element.addClass(h.options.clsactive).removeClass(h.options.clsinactive),h.element.trigger("active.uk.sticky"),h.element.css("margin",""),h.options.animation&&h.init&&!t.Utils.isInView(h.wrapper)&&h.element.addClass(h.options.animation),h.currentTop=o}}else null!==h.currentTop&&h.reset();h.init=!0}}var e=t.$win,s=t.$doc,n=[],o=1;return t.component("sticky",{defaults:{top:0,bottom:0,animation:"",clsinit:"uk-sticky-init",clsactive:"uk-active",clsinactive:"",getWidthFrom:"",showup:!1,boundary:!1,media:!1,target:!1,disabled:!1},boot:function(){t.$doc.on("scrolling.uk.document",function(t,e){e&&e.dir&&(o=e.dir.y,i())}),t.$win.on("resize orientationchange",t.Utils.debounce(function(){if(n.length){for(var t=0;t<n.length;t++)n[t].reset(!0);i()}},100)),t.ready(function(e){setTimeout(function(){t.$("[data-uk-sticky]",e).each(function(){var i=t.$(this);i.data("sticky")||t.sticky(i,t.Utils.options(i.attr("data-uk-sticky")))}),i()},0)})},init:function(){var i,a=this.options.boundary;this.wrapper=this.element.wrap('<div class="uk-sticky-placeholder"></div>').parent(),this.computeWrapper(),this.element.css("margin",0),a&&(a===!0||"!"===a[0]?(a=a===!0?this.wrapper.parent():this.wrapper.closest(a.substr(1)),i=!0):"string"==typeof a&&(a=t.$(a))),this.sticky={self:this,options:this.options,element:this.element,currentTop:null,wrapper:this.wrapper,init:!1,getWidthFrom:t.$(this.options.getWidthFrom||this.wrapper),boundary:a,boundtoparent:i,top:0,calcTop:function(){var i=this.options.top;if(this.options.top&&"string"==typeof this.options.top)if(this.options.top.match(/^(-|)(\d+)vh$/))i=window.innerHeight*parseInt(this.options.top,10)/100;else{var e=t.$(this.options.top).first();e.length&&e.is(":visible")&&(i=-1*(e.offset().top+e.outerHeight()-this.wrapper.offset().top))}this.top=i},reset:function(i){this.calcTop();var e=function(){this.element.css({position:"",top:"",width:"",left:"",margin:"0"}),this.element.removeClass([this.options.animation,"uk-animation-reverse",this.options.clsactive].join(" ")),this.element.addClass(this.options.clsinactive),this.element.trigger("inactive.uk.sticky"),this.currentTop=null,this.animate=!1}.bind(this);!i&&this.options.animation&&t.support.animation&&!t.Utils.isInView(this.wrapper)?(this.animate=!0,this.element.removeClass(this.options.animation).one(t.support.animation.end,function(){e()}).width(),this.element.addClass(this.options.animation+" uk-animation-reverse")):e()},check:function(){if(this.options.disabled)return!1;if(this.options.media)switch(typeof this.options.media){case"number":if(window.innerWidth<this.options.media)return!1;break;case"string":if(window.matchMedia&&!window.matchMedia(this.options.media).matches)return!1}var i=e.scrollTop(),n=s.height(),a=n-window.innerHeight,r=i>a?a-i:0,h=this.wrapper.offset().top,p=h-this.top-r,c=i>=p;return c&&this.options.showup&&(1==o&&(c=!1),-1==o&&!this.element.hasClass(this.options.clsactive)&&t.Utils.isInView(this.wrapper)&&(c=!1)),c}},this.sticky.calcTop(),n.push(this.sticky)},update:function(){i(this.sticky)},enable:function(){this.options.disabled=!1,this.update()},disable:function(t){this.options.disabled=!0,this.sticky.reset(t)},computeWrapper:function(){this.wrapper.css({height:-1==["absolute","fixed"].indexOf(this.element.css("position"))?this.element.outerHeight():"","float":"none"!=this.element.css("float")?this.element.css("float"):"",margin:this.element.css("margin")}),"fixed"==this.element.css("position")&&this.element.css({width:this.sticky.getWidthFrom.length?this.sticky.getWidthFrom.width():this.element.width()})}}),t.sticky});