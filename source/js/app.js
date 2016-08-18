function openOffcanvas(element){
	element.addClass('open-menu');
}

function hideOffcanvas(element){
	element.removeClass('open-menu');
}

$('.open-off').on('click', function(){
	openOffcanvas($('html'));
});

$('html,body').on('swiperight', function(){
	openOffcanvas($("html"));
});

$('html,body').on('swipeleft', function(){
	hideOffcanvas($("html"));
});

$("html,body").on("click", function(e){
	if(this === e.target)
		hideOffcanvas($("html"));
});

