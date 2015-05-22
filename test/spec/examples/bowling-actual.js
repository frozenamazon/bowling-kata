describe('Unit: Bowling game', function(){
	var bowlingGame;

	beforeEach(function(){
		var _bowlingService;
		module('Sample');

		inject( function(bowlingService){
			_bowlingService = bowlingService;
		});

		bowlingGame = new _bowlingService();

	});

	it('should have a gutter case', function(){
		var result = bowlingGame.score('--------------------');//-------- balls
		expect(result).toBe(0);
	});

	it('should have scores and calculate the total', function(){
		var result = bowlingGame.score('11111111111111111111');//-------- balls
		expect(result).toBe(20);
	});

	it('should cater for spares and bonus based on next roll', function(){
		var result = bowlingGame.score('5/611111111111111111');//-------- balls
		expect(result).toBe(39);// 16 + 6 + 17
	});

	it('should cater for strikes and bonus based on next two rolls', function(){
		var result = bowlingGame.score('X611111111111111111');//-------- balls
		expect(result).toBe(40);//10 +6 +1 +6 +17
	});

	it('should cater for a strike after a spare', function(){
		var result = bowlingGame.score('X6/1111111111111111');//-------- balls
		expect(result).toBe(47);//10 + 10(bonus strike) + 10 + 1 (bonus strike) + 16
	});

	it('should cater for gutter ball, spare, strike', function(){
		var result = bowlingGame.score('-/X-/X-/X-/X-/X-/');//-------- balls
		expect(result).toBe(200);
	});

	it('should cater for multiple spares and spare on the last frame', function(){
		var result = bowlingGame.score('5/5/5/5/5/5/5/5/5/5/5');//-------- balls
		expect(result).toBe(150);
	});

	it('should cater for PERFECT game', function(){
		var result = bowlingGame.score('XXXXXXXXXXXX');//-------- balls
		expect(result).toBe(300);
	});

});