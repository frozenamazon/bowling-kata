ddescribe('Unit: bowling kata service', function(){

	var bowlingGame;

	beforeEach(function(){
		var _bowlingKataService;

		module('Sample');

		inject(function(bowlingKataService){
			_bowlingKataService = bowlingKataService;
		});

		bowlingGame = new _bowlingKataService();

	});

	function rollsPerGame(n, pins){
		for (var i = 0; i < n; i++){
			bowlingGame.roll(pins);
		}
	}

	function rollStrike(){
		bowlingGame.roll(10);
	}

	function rollSpare(){
		bowlingGame.roll(5);
		bowlingGame.roll(5);
	}

	it('should handle gutter game', function(){
		rollsPerGame(20, 0);
		expect(bowlingGame.getScore()).toBe(0);
	});

	it('should handle all ones', function(){
		rollsPerGame(20, 1);
		expect(bowlingGame.getScore()).toBe(20);
	});

	it('should handle one spare', function(){
		rollsPerGame(16, 0);
		rollSpare();
		bowlingGame.roll(5);
		bowlingGame.roll(0);
		expect(bowlingGame.getScore()).toBe(20);
	});

	it('should handle one strike', function(){
		rollStrike();
		bowlingGame.roll(3);
		bowlingGame.roll(4);
		rollsPerGame(16, 0);
		expect(bowlingGame.getScore()).toBe(24);
	});

	it('should handle a perfect game', function(){
		rollsPerGame(12, 10);
		expect(bowlingGame.getScore()).toBe(300);
	});

});