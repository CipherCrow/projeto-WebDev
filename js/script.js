const menuMobileAtivador = document.querySelector('.menu-mobile i');

menuMobileAtivador.addEventListener('click',function(){
	const menus = document.querySelectorAll('#abrir li');
	let i;
	for(i = 0; i < menus.length; i++){
		menus[i].classList.toggle("open");
	}
	
})
