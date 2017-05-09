$(function(){
	$(".characterChoice").children().on("click", function(){
		$(".YourChar").append(this);
		// $(".EnemiesToAttack").append(".characterChoice").children();
		var children = $(".characterChoice").children();
		for (var i = 0; i < children.length; i++){
			$(".EnemiesToAttack").append(children[i]);
		}
	});
});

$(function(){
	$(".EnemiesToAttack").children().on("click", function(){
		$(".Defender").append(this);
	});
});


