'use strict';

describe("Unit: bowling", function(){
	var game, _bowlingService;

	beforeEach(function(){
		//load modules
		module('Sample');

		//inject your service for testing.
        inject(function(bowlingService) {
            _bowlingService = bowlingService;
        });

        game = new _bowlingService();
	});

    function rollMany (n, pins) {
        for (var i = 0; i < n; i++) {
            game.roll(pins)
        }
    }

    function rollSpare() {
        game.roll(5);
        game.roll(5);
    }

    function rollStrike() {
        game.roll(10);
    }

    it("should handle gutter game", function() {
        rollMany(20, 0);
        expect(game.score()).toBe(0);
    });

    it("should handle all ones", function() {
        rollMany(20, 1);
        expect(game.score()).toBe(20);
    });

    it("should handle one spare", function() {
        rollSpare();
        game.roll(3);
        rollMany(17, 0);
        expect(game.score()).toBe(16);
    });

    it("should handle one strike", function() {
        rollStrike();
        game.roll(3);
        game.roll(4);
        rollMany(16, 0);
        expect(game.score()).toBe(24);
    });

    it("should handle a perfect game", function() {
        rollMany(12, 10);
        expect(game.score()).toBe(300);
    });

});