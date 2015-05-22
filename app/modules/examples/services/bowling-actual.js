(function(){
	'use strict'

	var app = angular.module('Sample');
	app.service('bowlingService', function(){
		var bowlingGame = function(scoreSheet){
		}

		bowlingGame.prototype.score = function(scoreSheet){

			var totalScore = 0;
			var scoreIndex = 0;

			function isSpare(score){
				return (score === '/');
			}

			function isStrike(score){
				return (score  === 'X');
			}

			function isBlank(score){
				return (score === '-');
			}

			for(var i = 0; i < 10; i++){

				if(isBlank(scoreSheet.charAt(scoreIndex))){
					totalScore += 0;
					if(isBlank(scoreSheet.charAt(scoreIndex + 1))){
						totalScore += 0;
					}
					else if(isSpare(scoreSheet.charAt(scoreIndex + 1))){
						totalScore += 10; //include bonus
						if(isStrike(scoreSheet.charAt(scoreIndex + 2))){
							totalScore += 10; //bonus for spare 
						}
						else{
							totalScore += Number(scoreSheet.charAt(scoreIndex + 2)); //bonus for spare 
						}
					}
					else{
						totalScore += Number(scoreSheet.charAt(scoreIndex + 1));
					}
					scoreIndex += 2;
				}

				else if(isStrike(scoreSheet.charAt(scoreIndex))){
					var bonus1 = isStrike(scoreSheet.charAt(scoreIndex + 1)) ? 10 : Number(scoreSheet.charAt(scoreIndex + 1));
					var bonus2 = 0;

					if(isStrike(scoreSheet.charAt(scoreIndex + 2))){
						bonus2 = 10;
					}
					else if(isSpare(scoreSheet.charAt(scoreIndex + 2))){
						bonus1 = 0; //reset bonus1, include in bonus 2
						bonus2 = 10;
					}
					else{
						bonus2 = Number(scoreSheet.charAt(scoreIndex + 2));
					}

					totalScore += 10 + bonus1 + bonus2;//10 + bonus 1 + bonus 2					
					scoreIndex ++;
				}

				else{
					if(isSpare(scoreSheet.charAt(scoreIndex + 1))){

						var bonusForSpare = 0;
						if(isStrike(scoreSheet.charAt(scoreIndex + 2))){
							bonusForSpare = 10;
						}
						else{
							bonusForSpare = Number(scoreSheet.charAt(scoreIndex + 2));
						}
						totalScore += 10 + bonusForSpare; //score for this frame and bonus
					}
					else{
						totalScore += Number(scoreSheet.charAt(scoreIndex)) + Number(scoreSheet.charAt(scoreIndex + 1));
					}
					scoreIndex += 2;
				}

			}		

			return totalScore;
		};

		return bowlingGame;
	});
})();