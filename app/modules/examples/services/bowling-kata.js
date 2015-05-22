(function(){
	var app = angular.module('Sample');
	app.factory('bowlingKataService', function(){
		

		var bowlingKata = function(){
			this.rolls = 0;
			this.scores = [];
		}

		bowlingKata.prototype.roll = function(pins){
			this.scores[this.rolls] = pins;
			this.rolls++;
		}

		bowlingKata.prototype.getScore = function(){
			var _totalScore = 0;
			var _index = 0;
			var self = this;

			function isStrike(){
				return (self.scores[_index] === 10);
			}

			function isSpare(){
				return ((self.scores[_index] + self.scores[_index + 1]) === 10);
			}

			function strikeBonus(){
				return (self.scores[_index + 1] + self.scores[_index + 2]);
			}

			function spareBonus(){
				return (self.scores[_index + 2]);
			}

			function scoreInOneFrame(){
				return (self.scores[_index] + self.scores[_index + 1]);
			}

			for(var i = 0; i < 10; i++){
				if(isStrike()){
					_totalScore += 10 + strikeBonus();
					_index += 1;
				}
				else if(isSpare()){
					_totalScore += 10 + spareBonus();
					_index += 2;
				}
				else{
					_totalScore += scoreInOneFrame();
					_index += 2;
				}
			}

			return _totalScore;
		}

		return bowlingKata;

	});
})();