app.controller('OffersCtrl', function ($scope, configService, $http) {
        $scope.svp = configService.get(3).value;
        $scope.wcfservice = configService.get(0).value;
        $scope.horse_offers_list = [{}];
        $http.get($scope.wcfservice + 'get_offers_list?', { params: { svp: $scope.svp  }}).success(function (data, status) {
            $scope.horse_offers_list = data;
        });
});
