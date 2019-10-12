/*Autoscroll*/
const auto = true;
const intervalTime = 5000;
let slideInterval;

new fullpage('#fullpage', {
    autoScrolling: true,
    navigation:true,
    onLeave: (origin,destination,direction)=>{
        const section = destination.item;
        const title = section.querySelector('h1');
        const tl = new TimelineMax({ delay:0.5});
        tl.fromTo(title,0.5, {y: '50', opacity: 0}, { y : 0, opacity : 1 });

        if(destination.index === 1){
            const chairs = document.querySelectorAll ('.chair');
            const description = document.querySelector('.description');

            tl.fromTo(chairs, 0.7, {x: "100%"}, {x: "-35%"})
         /*Ako oces text da dobije animacija (ovaj red)*/   .fromTo(description , 0.5, {y: '50', opacity: 0}, { y : 0, opacity : 1 } )
            .fromTo(chairs[0], 1, {opacity:1}, {opacity: 1})
            .fromTo(chairs[1], 1, {opacity:0}, {opacity: 1})
            .fromTo(chairs[2], 1, {opacity:0}, {opacity: 1})
        }
    } 
});
(function($) { "use strict";

	$(function() {
		var header = $(".start-style");
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
		
			if (scroll >= 10) {
				header.removeClass('start-style').addClass("scroll-on");
			} else {
				header.removeClass("scroll-on").addClass('start-style');
			}
		});
	});		
		
	//Animation
	
	$(document).ready(function() {
		$('body.hero-anime').removeClass('hero-anime');
	});

	//Menu On Hover
		
	$('body').on('mouseenter mouseleave','.nav-item',function(e){
			if ($(window).width() > 750) {
				var _d=$(e.target).closest('.nav-item');_d.addClass('show');
				setTimeout(function(){
				_d[_d.is(':hover')?'addClass':'removeClass']('show');
				},1);
			}
	});	
  })(jQuery); 

  //Auto Slide
  if (auto) {
	  //Run next slide at interval time
	  slideInterval = setInterval(nextSlide, intervalTime)
  }