(function(){
	'use strict'

	/**
     * @ngdoc function
     * @name common.controllers.index
     * @description
     *
     * Main js file
     *
     *
     */
	
	var app = angular.module('Sample', []);

	app.controller('MainCtrl', ['$scope', function ($scope){

          var A ;
		
          
function solution(S) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    if(!S || (typeof S !== 'string') || (S === '')){
        return;
    }
    
    var splitBySpace = S.split(" ");
    var result = [];
    for(var i = 0; i < splitBySpace.length; i++){
        result.push(splitBySpace[i].split("").reverse().join(""));
    }
    
    return result.join(" ");
}


          console.log(solution(A));


	}]);

})();
