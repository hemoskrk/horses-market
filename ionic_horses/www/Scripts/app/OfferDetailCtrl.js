


app.controller('OfferDetailCtrl', function ($scope, configService, $http, $location, $stateParams) {
    $scope.wcfservice = configService.get(0).value;
    $scope.svp = configService.get(3).value;
    $scope.Offer_details = {};
    $http.get($scope.wcfservice + 'get_Offer_Details?', { params: { svp: $scope.svp, offer_id: $stateParams.OffId } }).success(function (data, status) {
        $scope.Offer_details = data;
        });
 
});
