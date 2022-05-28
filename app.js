var app = angular.module('searchApp', []);

app.controller('searchCtrl', function($scope, $http) {

  $scope.results = '';
  var url = 'https://restcountries.com/v2/all';
  $http.get(url).success(
    function(data) {
      $scope.results = data;
    });
    /*
    $q.when(axios.get(url)).then((data) => {
      $scope.results = data;
    });
    I couldn't get it work, eventually
    */ 

  $scope.getCurrentTime = function(timezone) {
      return (new moment().zone(timezone).format("HH:mm"));
  };

});