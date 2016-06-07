var app=angular.module('starter.controllers', []);


// A simple controller that fetches a list of data from a service
app.controller('PetIndexCtrl', function ($scope, PetService) {
    debugger;
    // "Pets" is a service returning mock data (services.js)
    $scope.pets = PetService.all();
});


// A simple controller that shows a tapped item's data
app.controller('PetDetailCtrl', function ($scope, $stateParams, PetService) {
    // "Pets" is a service returning mock data (services.js)
    $scope.pet = PetService.get($stateParams.petId);
});

