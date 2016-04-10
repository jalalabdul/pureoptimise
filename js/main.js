
function main() {

(function () {
   'use strict';

  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });
 
    /*====================================
    Show Menu on Book
    ======================================*/
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 100;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    });
    
    /*====================================
    Toggle Email Form
    ======================================*/
    
    $('#toggle1').click(function() {
	$('.toggle1').slideToggle('fast');
	return false;
    });

    
  	/*====================================
    Hiring Ribbon
    ======================================*/
    /*====================================
    Hiring Ribbon
    ======================================*/
    window.onscroll = function (e) {
        var wPosition = window.pageYOffset;
        var startRange = document.getElementById('team-section').offsetTop - 200;
        var endRange = document.getElementById('contact-section').offsetTop;
        if(wPosition > startRange && wPosition < endRange)
        {
        document.getElementById('hiring').style.opacity="1";
        }
        else
        {
        document.getElementById('hiring').style.opacity="0";
        }    
    };

  	/*====================================
    WOW JS
    ======================================*/	

	new WOW().init();
	//smoothScroll
	smoothScroll.init();

	
}());


}
main();