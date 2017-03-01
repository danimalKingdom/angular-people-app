(function(){
  "use strict";

  angular.module("app").controller("peopleCtrl", function($scope){
    $scope.message = "hello, world";
    $scope.people = [
      {
        name: "wen",
        bio: "awesome person/coder",
        bioVisible: false
      },
      {
        name: "annie",
        bio: "second awesome person/coder",
        bioVisible: false
      },
      {
        name: "jenilee",
        bio: "most awesome person/coder",
        bioVisible: false
      }
    ];

    $scope.peopleCount = $scope.people.length;

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