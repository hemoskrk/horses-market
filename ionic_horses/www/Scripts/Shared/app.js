var app = angular.module('AngularJSapp', ['ngRoute', 'ngMaterial', 'ngMessages']);


app.config(function ($routeProvider) {
    $routeProvider
    // route for the home page
    .when('/', { templateUrl: 'Views/home.html', controller: 'homeCtl' })
          // route for the home page
    .when('/Offer_Demand', { templateUrl: 'Views/Offer_and_Demand/Offer.html',controller: 'offerCtl'})
    // route for feedback page
    .when('/feedback', { templateUrl: 'Views/feedbackPage.html', controller: 'feedbackCtl' })
    // route for new complaint page
    .when('/newComplaint', { templateUrl: 'Views/genComplaintPage.html', controller: 'complaintCtl' })
    //route for help page
    .when('/help', { templateUrl: 'Views/helpPage.html', controller: 'helpCtl' })
    //route for user profile page
    .when('/userProfile', { templateUrl: 'Views/userPage.html', controller: 'userCtl' })
    //route for mao page
    .when('/map', { templateUrl: 'Views/mapPage.html', controller: 'mapCtl' })

    .when('/main', { templateUrl: 'Views/main.html', controller: 'main-controller' })
    // route for defult page
    .otherwise({ redirectTo: '/' });
});

