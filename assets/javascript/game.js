var heroHP = 0;
var heroBaseAttack = 0;
var heroAttackPower = 0;
var foeHP = 0;
var foeAttackPower = 0;


$(function(){
	$(".characterChoice").on("click", "div", function(){
		heroHP = $(this).find(".HP").text();
		heroAttackPower = parseInt($(this).find(".attack").text());
		heroBaseAttack = heroAttackPower;
		$(".YourChar").append(this);
		// $(".EnemiesToAttack").append(".characterChoice").children();
		var children = $(".characterChoice").children();
		for (var i = 0; i < children.length; i++){
			$(".EnemiesToAttack").append(children[i]);
		}
	});
});

$(function(){
	$(".EnemiesToAttack").on("click", "div", function(){
		if ($(".Defender div").length === 0){
			foeHP = $(this).find(".HP").text();
			foeAttackPower = $(this).find(".counter").text();
			$(".Defender").append(this);
			$(".attackButton").show();
		}
		});
});

$(function(){
	$(".attackButton").on("click", function(){
		// console.log(heroAttackPower, foeAttackPower);
		foeHP -= heroAttackPower;
		heroAttackPower += heroBaseAttack;

		if (foeHP > 0){
			$(".Defender div").find(".HP").text(foeHP);
			heroHP -= foeAttackPower;
			$(".YourChar div").find(".HP").text(heroHP);


		} else {
			$(".Defender").empty();
		}

		});
});

// $(function(){
// 	$(".Defender").on("click", "div", function(){
// 		$(".Defender").empty();
// 		});
// });


