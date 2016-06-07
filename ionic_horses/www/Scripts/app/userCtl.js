app.controller('userCtl', function ($scope) {    
    $scope.FullName = '';
    $scope.NationID = '';
    $scope.Mobile = '';
    $scope.Email = '';

    //Save user profile
    $scope.SaveUserProfile = function () {                
        $.jStorage.set("UserName", $scope.FullName);
        $.jStorage.set("NID", $scope.NationID);
        $.jStorage.set("Mobile", $scope.Mobile);
        $.jStorage.set("Email", $scope.Email);
        if (default_language == 'english')
            toastr.success('User profile saved successfully');
        else
            toastr.success('تم حفظ البيانات بنجاح');
        

        window.location = '#/';
    };
});