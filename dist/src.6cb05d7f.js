parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./..\\fonts\\Metropolis-Bold_0.otf":[["Metropolis-Bold_0.230fc24b.otf","A5cB"],"A5cB"],"./..\\fonts\\Metropolis-Medium_0.otf":[["Metropolis-Medium_0.7bad1f6b.otf","ZHbQ"],"ZHbQ"],"./..\\fonts\\Metropolis-Regular_0.otf":[["Metropolis-Regular_0.fa17dd96.otf","E9fz"],"E9fz"],"./..\\fonts\\NexaRustSans-Black_0.otf":[["NexaRustSans-Black_0.aa758e9f.otf","JDtj"],"JDtj"],"./..\\img\\Blurquersbackground.svg":[["Blurquersbackground.354efa27.svg","nlYB"],"nlYB"],"./..\\img\\icons\\quote.svg":[["quote.876cc819.svg","jMO9"],"jMO9"],"./..\\img\\icons\\rightarrow.svg":[["rightarrow.55b53328.svg","Ock5"],"Ock5"],"./..\\img\\icons\\leftarrow.svg":[["leftarrow.88990761.svg","eqwc"],"eqwc"]}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss");var e=$(".active"),t=$(".testimonial-wrapper"),a=$(".testimonial .prev"),o=$(".testimonial  .next");function n(){TweenMax.set(t.not(e),{autoAlpha:0}),TweenMax.set(a,{autoAlpha:.2})}function r(e,n,r){var i=new TimelineLite,s=e.find(".testimonial-wrapper .text"),l=n.find(".testimonial-wrapper .text"),p=e.find(".testimonial-wrapper img"),c=n.find(".testimonial-wrapper img"),u=n.index(),m=t.length;console.log(u),0!==n.length&&i.set(n,{autoAlpha:1,className:"+=active"}).set(e,{className:"-=active"}).to(s,.65,{y:"+=40px",ease:Power3.easeInOut},.5).to(p,.65,{backgroundPosition:"bottom",ease:Power3.easeInOut},0).to(r,1,{y:"-=100%",ease:Power3.easeInOut},0).fromTo(l,.65,{y:"-=120px"},{y:0,ease:Power1.easeInOut},"-=0.7").fromTo(c,.65,{backgroundPosition:"top"},{backgroundPosition:"bottom",ease:Power3.easeInOut},"-=0.7"),TweenMax.set(a,{autoAlpha:1}),u===m-1&&TweenMax.to(o,.3,{autoAlpha:.2,ease:Linear.easeNone})}function i(e,n,r){var i=new TimelineLite,s=e.find(".testimonial-wrapper .text"),l=n.find(".testimonial-wrapper .text"),p=e.find(".testimonial-wrapper img"),c=n.find(".testimonial-wrapper img"),u=n.index();t.length;0!==n.length&&i.set(n,{autoAlpha:1,className:"+=active"}).set(e,{className:"-=active"}).to(s,.65,{y:"-=10px",ease:Power3.easeInOut},.5).to(p,.65,{backgroundPosition:"top",ease:Power3.easeInOut},0).to(r,1,{y:"+=100%",ease:Power3.easeInOut},0).fromTo(l,.65,{y:"+=120px"},{y:0,ease:Power1.easeInOut},"-=0.7").fromTo(c,.65,{backgroundPosition:"bottom"},{backgroundPosition:"top",ease:Power3.easeInOut},"-=0.7"),TweenMax.set(o,{autoAlpha:1}),0===u&&TweenMax.to(a,.3,{autoAlpha:.2,ease:Linear.easeNone})}n(),o.click(function(e){e.preventDefault(),r($(".testimonial-wrapper.active"),$(".testimonial-wrapper.active").next(".testimonial-wrapper"),$(".testimonial-wrapper"))}),a.click(function(e){e.preventDefault(),i($(".testimonial-wrapper.active"),$(".testimonial-wrapper.active").prev(".testimonial-wrapper"),$(".testimonial-wrapper"))});var s=$(".active"),l=$(".gallery-wrapper"),p=$(" .gallery .prev"),c=$(" .gallery .next");function u(){TweenMax.set(l.not(s),{autoAlpha:0}),TweenMax.set(p,{autoAlpha:.2})}function m(e,t,a){var o=new TimelineLite,n=e.find("gallery-wrapper .img-text"),r=t.find("gallery-wrapper .img-text"),i=e.find("gallery-wrapper video"),s=t.find("gallery-wrapper video"),u=t.index(),m=l.length;console.log(u),0!==t.length&&o.set(t,{autoAlpha:1,className:"+=active"}).set(e,{className:"-=active"}).to(n,.65,{y:"+=40px",ease:Power3.easeInOut},.5).to(i,.65,{backgroundPosition:"bottom",ease:Power3.easeInOut},0).to(a,1,{y:"-=110%",ease:Power3.easeInOut},0).fromTo(r,.65,{y:"-=120px"},{y:0,ease:Power1.easeInOut},"-=0.7").fromTo(s,.65,{backgroundPosition:"top"},{backgroundPosition:"bottom",ease:Power3.easeInOut},"-=0.7"),TweenMax.set(p,{autoAlpha:1}),u===m-1&&TweenMax.to(c,.3,{autoAlpha:.2,ease:Linear.easeNone})}function g(e,t,a){var o=new TimelineLite,n=e.find(".gallery-wrapper .img-text"),r=t.find("gallery-wrapper .img-text"),i=e.find("gallery-wrapper video"),s=t.find("gallery-wrapper video"),u=t.index();l.length;0!==t.length&&o.set(t,{autoAlpha:1,className:"+=active"}).set(e,{className:"-=active"}).to(n,.65,{y:"-=10px",ease:Power3.easeInOut},.5).to(i,.65,{backgroundPosition:"top",ease:Power3.easeInOut},0).to(a,1,{y:"+=110%",ease:Power3.easeInOut},0).fromTo(r,.65,{y:"+=120px"},{y:0,ease:Power1.easeInOut},"-=0.7").fromTo(s,.65,{backgroundPosition:"bottom"},{backgroundPosition:"top",ease:Power3.easeInOut},"-=0.7"),TweenMax.set(c,{autoAlpha:1}),0===u&&TweenMax.to(p,.3,{autoAlpha:.2,ease:Linear.easeNone})}function w(){var e=new TimelineLite;document.querySelector(".contact").getBoundingClientRect().top<=window.innerHeight/1.2?e.to(".contact .contact-container",2,{yPercent:0,opacity:1,stagger:.2,delay:1},"-=1"):e.to(".contact .contact-container",1,{yPercent:7,opacity:0,stagger:.2,delay:0},"-=1")}u(),c.click(function(e){e.preventDefault(),m($(".gallery-wrapper.active"),$(".gallery-wrapper.active").next(".gallery-wrapper"),$(".gallery-wrapper"))}),p.click(function(e){e.preventDefault(),g($(".gallery-wrapper.active"),$(".gallery-wrapper.active").prev(".gallery-wrapper"),$(".gallery-wrapper"))}),window.addEventListener("scroll",w),document.addEventListener("DOMContentLoaded",function(){var e=new ScrollMagic.Controller,t=new TimelineMax;t.from(".team-wrapper .creative:nth-of-type(1)",2,{top:"70px",opacity:0,ease:"none",autoAlpha:0},"-=2").from(".team-wrapper .creative:nth-of-type(2)",2,{bottom:"70px",opacity:0,ease:"none",autoAlpha:0},"-=2").from(".team-wrapper .creative:nth-of-type(3)",2,{bottom:"70px",opacity:0,ease:"none",autoAlpha:0},"-=2").from(".team-wrapper .creative:nth-of-type(4)",2,{top:"70px",opacity:0,ease:"none",autoAlpha:0},"-=2");new ScrollMagic.Scene({triggerElement:".team",duration:"200%",triggerHook:0,pin:!0}).setTween(t).setPin(".team").addTo(e)}),document.addEventListener("DOMContentLoaded",function(){var e=new ScrollMagic.Controller,t=new TimelineMax;t.from(".about .about-container",2,{top:"70px",opacity:0,ease:"none",autoAlpha:0},"-=2").from(".about svg",2,{transform:"translatex(-200px)",opacity:0,ease:"none",autoAlpha:0},"-=2").from(".about .container .container-fluid .img3",2,{transform:"skewx(20deg)",xPercent:20,opacity:0,ease:"none",autoAlpha:0},"-=1").from(".about .container .container-fluid .img-left",2,{transform:"skewx(20deg)",xPercent:20,opacity:0,ease:"none",autoAlpha:0},"-=1");new ScrollMagic.Scene({triggerElement:".about",duration:"200%",triggerHook:0,pin:!0,scrub:!0}).setTween(t).setPin(".about").addTo(e)});var d=$(".globNav"),f=$(".custom-menu");if(f.length){var y=$("*[toggle-menu]"),v=1,x=$(".menu-image img"),h=$(".menu-image .overlay-image"),P=$(".custom-menu ul li a"),T=$(".navigation .custom-menu .menu-container .other ul  "),b=P.outerHeight(),O=new TimelineMax({pause:!0});function I(){O.reversed(!O.reversed())}O.set(P,{y:b}),O.to(f,v/2,{width:"100%",ease:Power3.easeInOut}),O.to(".trans1",.2,{left:"0%",ease:Expo.easeInOut,delay:0}),O.to(".trans2",.2,{left:"0%",ease:Expo.easeInOut,delay:0}),O.to(h,v,{width:0,ease:Power3.easeInOut}),O.to(x,v,{scale:1,ease:Power3.easeInOut},"-="+v),O.staggerTo(P,v,{y:0,opacity:1,ease:Power3.easeInOut},.09,"-="+v),O.staggerTo(T,v,{y:15,opacity:1,delay:.5,ease:Power3.easeInOut},.5,"-="+v),O.reverse(),y.on("click",function(){I(),y.toggleClass("active"),f.toggleClass("active")})}$(document).on("click"," .custom-menu ul li a",function(){O.reverse(),$(".custom-menu").toggleClass("active"),y.toggleClass("active")});var A=document.querySelectorAll(".social .icons a"),k=document.querySelectorAll(".online a");A.forEach(function(e){e.target="_blank"}),k.forEach(function(e){e.target="_blank"});
},{"./sass/main.scss":"clu1"}]},{},["Focm"], null)
//# sourceMappingURL=src.6cb05d7f.js.map