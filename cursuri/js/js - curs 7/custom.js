$(document).ready(function(){
	
	$('#adauga').click(function(){
		$('#patrat').addClass('doi');
	});
	$('#elimina').click(function(){
		$('#patrat').removeClass('unu doi');
	});
	$('#toggle').click(function(){
		$('#patrat').toggleClass('doi');
	});
	$('#adauga-trans').click(function(){
		$('.unu').toggleClass('doi');		
	});
	
	// cod specific pentru pagina animate1.html
	if($('.animate1').length){
		$('.unu').click(function(){
			$(this).animate({
				'width': '400px',
				'height': '400px',
				//'background-color': 'red'
			}, 1000, function(){
				$(this).css({'background-color':'red'})
			});
		});
	}
	// cod specific pentru pagina animate2.html
	if($('.animate2').length){
		$('.doi').click(function(){
			if($('.unu').hasClass('deschis')){
				$('.unu').animate({'width':'0'}, 500,
					function(){
						$('.unu').removeClass('deschis');
					}
				);
			} else {
				$('.unu').animate({'width':'200px'}, 500,
					function(){
						$('.unu').addClass('deschis');
					}
				);
			}
			
		});
	}
	
	// cod specific pentru pagina animate3.html - galeria...
	if($('.animate3').length){
		
		// galeria este declansata de click pe div
		/*$('.galerie').click(function(){
			$('.galerie img:eq(1)').animate({
				'left': 0
			}, 500, function (){
				$('.galerie img:eq(0)').css({'left':'-400px'})
				$('.galerie').append($('.galerie img:eq(0)'))
			});
		});*/
		
		//galeria este declansata automat la fiecare 2 secunde
		var x = setInterval(function(){
			$('.galerie img:eq(1)').animate({
				'left': 0
			}, 500, function (){
				$('.galerie img:eq(0)').css({'left':'-400px'})
				$('.galerie').append($('.galerie img:eq(0)'))
			});
		}, 2000)
			
		$('.galerie').mouseover(function(){
			clearInterval(x);
		});
		
	} // end cod specific animate4.html
	
	$('.to-top').click(function(){
		$('html').animate({
			scrollTop : 0
		}, 400)
	})
	$('.s1').click(function(){
		var pozDorita = $('#sectiune-about').offset().top;
		$('html').animate({
			scrollTop : pozDorita
		}, 400)
	})
	
	
	
});
