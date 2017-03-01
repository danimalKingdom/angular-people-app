(function(){
  "use strict";

  angular.module("app").controller("peopleCtrl", function($scope, $http){
    $scope.message = "hello, world";

    $scope.setup = function() {
      $http.get("/api/v1/people.json").then(function(response){
        $scope.people = response.data;
        $scope.peopleCount = $scope.people.length;
      });
    };

    $scope.addPerson = function(name, bio){
      var newPerson = {
        name: name,
        bio: bio,
        bioVisible: false
      };
      $scope.people.push(newPerson);
      $scope.peopleCount = $scope.people.length;
    };

    $scope.deletePerson = function(index){
      $scope.people.splice(index, 1);
    };

    $scope.toggleBio = function(person){
      // person = person object that i clicked on
      person.bioVisible = !person.bioVisible;
    };


  });
}());