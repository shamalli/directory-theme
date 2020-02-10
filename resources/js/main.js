
(function($) {
	"use strict";
	
	$(function() {
		$("#mobile-trigger").click(function() {
			$("#mobile").slideToggle(500);
		});
		
		function fixSiteHeader() {
			if ($(".site-header.header-fixed").length) {
				var headerHeight = $('.site-header.header-fixed').outerHeight();
				$('.header-fixed-clone')
				.show()
				.css('height', headerHeight);
	
				if (window.innerHeight > 769) {
					$('.site-header.header-fixed').addClass('fixed');
				}
			}
		}
		
		fixSiteHeader();
		$(window).resize(function(){
			fixSiteHeader();
		});
		
		var removePreloader = function() {
			$('.preloader').css('opacity', 0);
	    	setTimeout(function() {
	    		$('.preloader').hide();
	    	}, 800);
		}
		removePreloader();
		
		$(".main-navigation ul.menu > li.menu-item-has-children > a").append("<i class='fa fa-angle-down'></i>");
		$(".main-navigation ul.menu ul li.menu-item-has-children > a").append("<i class='fa fa-angle-right'></i>");
	});
})(jQuery);
