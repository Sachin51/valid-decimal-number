(function () {
  angular.module('myApp', ['focus.invalid.field'])
    .controller('myCtrl', ['$scope', function ($scope) {

      $scope.inputNumberNoDecimal = 99;
	  $scope.inputNumberOneDecimal = 99.9;
	  $scope.inputNumberTwoDecimal = 99.99;
	  $scope.inputNumberThreeDecimal = 99.999;
  }])
})();
