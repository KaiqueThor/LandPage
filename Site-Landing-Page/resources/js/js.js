$(document).ready(function(){
	// função para abrir menu e sumir no modo mobile
	$('.btn-menu').on('click', function(){
		toggleMenu($('.menus'));
	});
	$('.menus').before().on('click', function(){
		toggleMenu($('.menus'));
	});

	function toggleMenu(menu) {
		menu.toggleClass('active');
	}

// função da parte de videos da pagina HOME.PHP
	$('.videos .lista').slick({
		dots: true,						/*isso são as bolinhas do slider de videos*/
		infinite: false,				/*Não quer que seja infinito o slider*/
		autoPlay: false,				/*não reproduzir automatico*/
		speed: 300,						/*o tempo de mudança de um slider para o outro*/
		slidesToShow: 2,				/*a cada 2 slider exibidos*/
		slideToScroll: 1,				/*passar a cada 1 por vez pra frente*/
		arrows: false,					/*não aparecer setinhas no slider*/
		responsive: [
			{
				breakpoint: 768,		/*configuração de mobile*/
				settings: {
					slidesToShow: 1,
					slideToScroll: 1,
				}
			}
		]
	});

	$('.menus .menu ul li a').on('click', function(e){
		e.preventDefault();				/*estou desativando a opção nativa de recarregar a pagina ao clicar*/
		var id = $(this).attr('href'),	/*a variavel id vai ser oque esta dentro do href*/
		targetOffset = $('.'+id).offset().top;	/*pegando a altura do topo do site*/

		$('html, body').animate({
			scrollTop: targetOffset - 100			/*efeito animado para colocar o scroll no target a cima*/
		}, 500);
	});


});