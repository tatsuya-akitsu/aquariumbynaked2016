$("head").append('<style type="text/css">#container { display: none; } #fade, #loader { display: block; }</style>'),jQuery.event.add(window,"load",function(){var e=$("#container").height();$("#fade").css("height",e).delay(900).fadeOut(800),$("#loader").delay(600).fadeOut(300),$("#container").css("display","block")});