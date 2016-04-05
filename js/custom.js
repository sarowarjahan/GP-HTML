// JavaScript Document
$(document).ready(function(){
	
	$('.dropdown').hover(function() {
		$(this).addClass('open');
	},
	function() {
		$(this).removeClass('open');
	});
	
	/*==================================== equal height ====================================*/
	
	$(".one-third .info").responsiveEqualHeightGrid();
	
	/*=================================== Back to Top ======================================*/
	/*============================== Back to top =========================*/
	$("#back-top").hide();
	$(function(){
		$(window).scroll(function(){
			if($(this).scrollTop()>0){
				$('#back-top').fadeIn();
			}
			else{$('#back-top').fadeOut();
			}
		});
	
	$('#back-top a').click(function(){$('body,html').animate({scrollTop:0},800);
		return false;
		});
	});
	
});




