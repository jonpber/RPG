var heroHP = 0;
var heroBaseAttack = 0;
var heroAttackPower = 0;
var foeHP = 0;
var foeAttackPower = 0;
var fightAudio = new Audio("https://raw.githubusercontent.com/jonpber/RPG/master/assets/sounds/lsabhit.WAV");
var images = ['assets/images/back0.png',
		'assets/images/hoth.png',
		'assets/images/back.png',]
		
var imagePlace = 0;

var victorySound = new Audio ("assets/sounds/theme.mp3");
var lossSound = new Audio ("assets/sounds/imperial_march.wav");



$(function(){
	$(".characterChoice").on("click", "div", function(){
		heroHP = $(this).find(".HP").text();
		heroAttackPower = parseInt($(this).attr("data-attack"));
		heroBaseAttack = heroAttackPower;
		$(this).fadeOut("fast", function(){
			$(".YourChar").append(this);
			$("h3").toggle();
			var children = $(".characterChoice").children();
			for (var i = 0; i < children.length; i++){
				// $(children[i]).find("img").addClass("flipped");
				$(".EnemiesToAttack").append(children[i]);
			}
			$(this).fadeIn("fast");
		});

		// $(".EnemiesToAttack").append(".characterChoice").children();
	});

	$(".EnemiesToAttack").on("click", "div", function(){
		if ($(".Defender div").length === 0){
			foeHP = $(this).find(".HP").text();
			foeAttackPower = $(this).attr("data-counter");
			$(this).fadeOut("fast", function(){
				$(".Defender").append(this);
				$(".attackButton").show();
				$(this).fadeIn("fast");
			});

		}
		});

	function preload(arrayOfImages) {
	    $(arrayOfImages).each(function(){
	        $('<img/>')[0].src = this;
	        // Alternatively you could use:
	        // (new Image()).src = this;
	    });
	}

	preload(images)

	$(".attackButton").on("click", function(){
		$(".textArea").show();

		foeHP -= heroAttackPower;
		heroAttackPower += heroBaseAttack;
		$fightText = $(".fightInfo");

		if (foeHP > 0){
			fightAudio.play();
			$(".Defender div").find(".HP").text(foeHP);
			heroHP -= foeAttackPower;
			$(".YourChar div").find(".HP").text(heroHP);

			$($fightText).html("<p>You attacked for " + (heroAttackPower - heroBaseAttack) + " damage.</p><p>" + $(".Defender div").find(".name").text() + " attacked you for " + 
				foeAttackPower + " damage.</p>");

			if (heroHP <= 0){
				lossSound.play();
				$($fightText).text("You have been defeated. Game over.");
				$(".YourChar div").fadeOut("fast");
				$(".attackButton").hide();
				$(".restartButton").show();
			}


		} else {
			if ($(".Defender div").length > 0){
				fightAudio.play();
				$($fightText).text("You have defeated " + $(".Defender div").find(".name").text() + ".");
				$(".Defender div").fadeOut("fast", function(){
					$(".Defender").empty();
				});


			}

			if ($(".EnemiesToAttack div").length === 0){
				victorySound.play();
				$($fightText).text("You are victorious.")
				$(".attackButton").hide();
				$(".restartButton").show();
			}

		}

		});

	$(".restartButton").on("click", function(){
		// console.log(heroAttackPower, foeAttackPower);
		location.reload();

		});


	$("#theme1").on("click", function(){
		$("body").css("background-image", "url(" +images[0] + ")");
	});

	$("#theme2").on("click", function(){
		$("body").css("background-image", "url(" +images[1] + ")");
	});

	$("#theme3").on("click", function(){
		$("body").css("background-image", "url(" +images[2] + ")").css("background-color", "#8c4934");
	});



	$(".right").on("click", function(){
		imagePlace += 1;
		$("body").css("background-image", "url(" +images[imagePlace % images.length] + ")");

	});

	$("h2").on("click", function(){
		$(".abs").show();
		$("h2").hide();
	});

	$(".rightX").on("click", function(){
		$(".abs").hide();
		$("h2").show();
	});


});

