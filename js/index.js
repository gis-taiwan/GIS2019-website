(function ($) {
  "use strict";
    
  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, #mobile-nav');
  var main_nav_height = $('#header').outerHeight();

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();
  
    nav_sections.each(function() {
      var top = $(this).offset().top - main_nav_height,
          bottom = top + $(this).outerHeight();
  
      if (cur_pos >= top && cur_pos <= bottom) {
          if($(this).is($('#contact'))){
              $('#here').removeClass('menu-active menu-item-active');
              $('#contact_nav').addClass('menu-active menu-item-active');
          }
          else{
              $('#contact_nav').removeClass('menu-active menu-item-active');
              $('#here').addClass('menu-active menu-item-active');
          }
      }
    });
  });
})(jQuery);


/*
eventStart holds final date
GMT-0800 = Pacific Standard Time
GMT-0700 = Mountain Standard Time (Arizona)
GMT-0600 = Central Standard Time
GMT-0500 = Eastern Standard Time
plus 1 for Daylight Savings
*/
var eventStart = new Date(Date.parse('07/08/2019 8:00 am'));
/* 
timeToEvent = function name
eventStart = countdown date 
timeRemaining = countdown date minus current date OR deadline minus today
seconds, minutes, hours, days = timeRemaining converted to time
*/
function timeToEvent(eventStart) {
  var timeRemaining = Date.parse(eventStart) - Date.parse(new Date());
  var days = Math.floor(timeRemaining/(1000*60*60*24));
  var hours = Math.floor((timeRemaining/(1000*60*60))%24);
  var minutes = Math.floor((timeRemaining/ 1000/60)%60);
  var seconds = Math.floor((timeRemaining/1000)%60);
  return {
    'totalTime': timeRemaining,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}
/* 
beginCountdown = function name
id = id in CSS
eventStart = countdown date 
counter = div with id that will hold countdown clock
daysElement, hoursElement, minutesElement, secondsElement = html elements that will hold parts of the countdown based on querySelector
*/
function beginCountdown(id, eventStart) {
  var counter = document.getElementById(id);
  var daysElement = counter.querySelector('.days');
  var hoursElement = counter.querySelector('.hours');
  var minutesElement = counter.querySelector('.minutes');
  var secondsElement = counter.querySelector('.seconds');

  function updateCountdown() {
    var timeRemaining = timeToEvent(eventStart);
    //slice = limits number of digits to two so you don't get 023 hours...
    daysElement.innerHTML = timeRemaining.days;
    hoursElement.innerHTML = ('0' + timeRemaining.hours).slice(-2);
    minutesElement.innerHTML = ('0' + timeRemaining.minutes).slice(-2);
    secondsElement.innerHTML = ('0' + timeRemaining.seconds).slice(-2);
    //stops countdown at less than or zero
    if (timeRemaining.totalTime <= 0) {
      //clearInterval(timeinterval);
      document.getElementById("countdownElement").innerHTML = "#SteubieLoneStar";
      document.getElementById("countdownElement").style.fontSize = "2em";
      document.getElementById("countdownElement").style.padding = "2rem 0rem";
    }
  }
  updateCountdown();
  var timeinterval = setInterval(updateCountdown, 1000); //1000 = 1sec
}
beginCountdown('countdownElement', eventStart);

$(function() {
	var timelineBlocks = $('.timeline-item'),
		offset = 0.8;

	//hide timeline blocks which are outside the viewport
	hideBlocks(timelineBlocks, offset);

	//on scolling, show/animate timeline blocks when entering the viewport
	$(window).on('scroll', function(){
		(!window.requestAnimationFrame) 
			? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
			: window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
	});

	function hideBlocks(blocks, offset) {
		blocks.each(function(){
		    ($(this).offset().top > $(window).scrollTop() + $(window).height() * offset) && $(this).find('.timeline-icon, .timeline-content').addClass('is-hidden');
		});
	}

	function showBlocks(blocks, offset) {
		blocks.each(function(){
		    ($(this).offset().top <= $(window).scrollTop() + $(window).height() * offset && $(this).find('.timeline-icon').hasClass('is-hidden')) && $(this).find('.timeline-icon, .timeline-content').removeClass('is-hidden').addClass('animate-it');

		});
	}
});
