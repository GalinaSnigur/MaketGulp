'use strict';

$(document).ready(function() {
	$(".menu_button").click(function(){
		$(".menu ul").slideToggle(3000);
	});

	//Карусель
	var owl = $(".carousel");
	owl.owlCarousel({
		items : 2,
		margin: 10,
		autoplay: true,
		autoHeight : true
	});

	$(".next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev");
	});

	//Аjax отправка форм
	$(".fancybox").fancybox();

	$("#callback").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку! Скоро мы с Вами свяжемся!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		  });
		return false;
	    });

    });



