$(function(){
	$(".character").click(function(){
		$(".YourChar").append(this);
		$(this).removeClass("character");
		$(this).addClass("hero");
		$("EnemiesToAttack").append(".character");
		$(".character").addClass("enemy");
		$(".character").removeClass("character");
	});
});

$(function(){
	$(".enemy").click(function(){
		$(".Defender").append(this);
		$(this).removeClass("enemy");
		$(this).addClass("defender");
	});
});


