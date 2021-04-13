const precarregado = document.querySelector('.preloader');

window.addEventListener('load',function(){
	precarregado.style.opacity = '0';
	setTimeout(function(){
		precarregado.style.display = 'none';
	}, 300);
})

const menuMobileAtivador = document.querySelector('.menu-mobile i');

menuMobileAtivador.addEventListener('click',function(){
	const menus = document.querySelectorAll('#abrir li');
	let i;
	for(i = 0; i < menus.length; i++){
		menus[i].classList.toggle("open");
	}
	
})

	//slider
$(function(){
	var delay = 4000;
	var curIndex = 0;
	var amt;

	initSlider();
	autoPlay();

	function initSlider(){
		amt = $('.single-autor').length;
		var sizeContainer = 100 * amt;
		var sizeBoxSingle = 100 / amt;
		$('.single-autor').css('width',sizeBoxSingle+'%');
		$('.scroll-wrapper').css('width',sizeContainer+'%');
	
		for(var i=0; i< amt;i++){
			if(i==0){
				$('.slider-bullets').append('<span class="selected"></span>');
			}else{
				$('.slider-bullets').append('<span></span>');
			}
		}
	};

	function autoPlay(){
		setInterval(function(){
			curIndex++;
			if(curIndex == amt){
				curIndex = 0;
			}
			goNext(curIndex);
		},delay);
	}
	function goNext(curIndex){
		var offSetX = $('.single-autor').eq(curIndex).offset().left - $('.scroll-wrapper').offset().left;
		$('.slider-bullets span').removeClass('selected');
		$('.slider-bullets span').eq(curIndex).addClass('selected');
		$('.scroll-equipe').stop().animate({
			'scrollLeft':offSetX+'rem'
		})
	}
	$(window).resize(function(){
		$('.scroll-equipe').stop().animate({
			'scrollLeft':0
		})
	})
})
