function closeMenu(){TweenMax.to(overlay,.2,{display:"none",opacity:0,delay:.2}),TweenMax.to(menuContent,.3,{opacity:0,onComplete:function(){TweenMax.to(menuInner,.2,{width:0,padding:0,onComplete:function(){menuInner.removeClass("active")}})}}),TweenMax.to(contactForm,.2,{width:0}),burger.toggleClass("closed"),burger.toggleClass("open"),contactForm.removeClass("active"),burger.removeClass("white"),menuIsOpen=!1}var menuIsOpen=!1,burger=$(".menu .burger"),overlay=$(".overlay"),menuInner=$(".menu .inner"),menuContent=$(".menu .inner .menu-content"),messageUs=$(".message-us"),contactForm=$(".contact-form"),cancelForm=$(".cancel-form"),contentlist=$(".content-list"),height=menuContent.height();overlay.on("click",function(e){closeMenu()}),burger.on("click",function(e){burger.prop("disabled",!0),setTimeout(function(){burger.prop("disabled",!1)},400),e.stopPropagation,!1===menuIsOpen?(TweenMax.set(overlay,{display:"block",opacity:1}),menuInner.addClass("active"),TweenMax.to(menuInner,.3,{width:"50%",padding:0,onComplete:function(){TweenMax.to(menuContent,.3,{opacity:1})}}),burger.toggleClass("closed"),burger.toggleClass("open"),menuIsOpen=!0):closeMenu()}),contentlist.on("click",function(e){burger.prop("disabled",!0),setTimeout(function(){burger.prop("disabled",!1)},400),e.stopPropagation,!1===menuIsOpen?(TweenMax.set(overlay,{display:"block",opacity:1}),menuInner.addClass("active"),TweenMax.to(menuInner,.3,{width:"50%",padding:0,onComplete:function(){TweenMax.to(menuContent,.3,{opacity:1})}}),burger.toggleClass("closed"),burger.toggleClass("open"),menuIsOpen=!0):closeMenu()}),messageUs.on("click",function(e){contactForm.toggleClass("active"),burger.addClass("white"),TweenMax.to(menuInner,.3,{width:"100%",padding:0,onComplete:function(){TweenMax.to(menuContent,.3,{opacity:1})}}),TweenMax.to(contactForm,.3,{width:"80%"})}),cancelForm.on("click",function(e){burger.removeClass("white"),TweenMax.to(contactForm,.3,{width:0}),TweenMax.to(menuInner,.3,{width:"50%"}),$("#enquiry_form").reset()});