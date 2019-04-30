(function () {
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope) {
  var messageNoData = "Please enter data first.";
  var messageOK = "Enjoy!";
  var messageKO = "Too much!";
  $scope.displayMessage = function () {
    if (!$scope.lunchMenu){
        $scope.message = messageNoData
    }else{
        var numberOfDishes = getNumberOfDishes($scope.lunchMenu);
        if (numberOfDishes == 0) {
          $scope.message = messageNoData
        } else if (numberOfDishes <= 3) {
          $scope.message = messageOK;
        } else {
          $scope.message = messageKO;
        }
      }
      return;
  };
}

function getNumberOfDishes(dishes){
  var elements = dishes.split(',');
  return elements.length;
}

})();
