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
		$("h3").toggle();
		var children = $(".characterChoice").children();
		for (var i = 0; i < children.length; i++){
			$(children[i]).find("img").addClass("flipped");
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
		$(".textArea").show();

		foeHP -= heroAttackPower;
		heroAttackPower += heroBaseAttack;
		$fightText = $(".fightInfo");

		if (foeHP > 0){
			$(".Defender div").find(".HP").text(foeHP);
			heroHP -= foeAttackPower;
			$(".YourChar div").find(".HP").text(heroHP);

			$($fightText).html("<p>You attacked for " + (heroAttackPower - heroBaseAttack) + " damage.</p><p>" + $(".Defender div").find(".name").text() + " attacked you for " + 
				foeAttackPower + " damage.</p>");

			if (heroHP <= 0){
				$($fightText).text("You have been defeated. Game over.");
				$(".attackButton").hide();
				$(".restartButton").show();
			}


		} else {
			if ($(".Defender div").length > 0){
				$($fightText).text("You have defeated " + $(".Defender div").find(".name").text() + ".");
				$(".Defender").empty();
			}

			if ($(".EnemiesToAttack div").length === 0){
				$($fightText).text("You are victorious.")
				$(".attackButton").hide();
				$(".restartButton").show();
			}

		}

		});
});

$(function(){
	$(".restartButton").on("click", function(){
		// console.log(heroAttackPower, foeAttackPower);
		location.reload();

		});
});


// $(function(){
// 	$(".Defender").on("click", "div", function(){
// 		$(".Defender").empty();
// 		});
// });


