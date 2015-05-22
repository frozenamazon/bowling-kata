'use strict';

describe("Unit: configurationService", function(){
	var _configurationService;

	beforeEach(function(){
		//load modules
		module('Sample');

		//inject your service for testing.
        inject(function(configurationService) {
            _configurationService = configurationService;
        });
	});

});
