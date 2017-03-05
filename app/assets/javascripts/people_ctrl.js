(function(){
  "use strict";

  angular.module("app").controller("peopleCtrl", function($scope, $http){
    $scope.message = "hello, world";

    $scope.setup = function() {
      $http.get("/api/v1/people.json").then(function(response){
        $scope.people = response.data;
      });
    };

    $scope.addPerson = function(name, bio){
      var params = {
        name: name,
        bio: bio,
        bioVisible: false
      };
      $http.post("/api/v1/people.json", params).then(function(response){
        $scope.people.push(params);
      }, function(error) {
        console.log(error);
        $scope.errors = error.data.errors;
      });
    };

    $scope.deletePerson = function(person){
      $http.delete("/api/v1/people/"+person.id+".json").then(function(response){
        var index = $scope.people.indexOf(person);
        $scope.people.splice(index, 1);
      });
    };

    $scope.toggleBio = function(person){
      // person = person object that i clicked on
      person.bioVisible = !person.bioVisible;
    };

    $scope.toggleOrder = function(attribute){
      //order is ascending when descending is false
      //order is descending when descending is true

      //if passed in attribute is the same as orderAttribute 
      if(attribute != $scope.orderAttribute){
        $scope.descending = false; //ascending order
      }
      else {
        $scope.descending = !$scope.descending; //the opposite
      }

      $scope.orderAttribute = attribute; //string 'name'
      getSortIcon($scope.orderA);
    };

    $scope.getSortIcon = function(inputOrderAttribute) {
      if(inputOrderAttribute == $scope.orderAttribute){
        $scope.sortIcon =  '^';
      } 
      else {
        $scope.sortIcon = 'v';
      }
    };

  });
}());