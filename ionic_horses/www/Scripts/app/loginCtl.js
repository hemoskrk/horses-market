
//var app = angular.module('starter', []);
//app.controller('homeCtl', function ($scope) {
//    $scope.firstname = "John";
//    $scope.lastname = "Doe";
//});

app.controller('loginCtl', function ($scope, $timeout) {

    $scope.login_hide_for_animate = true;
debugger;
  //  var app = angular.module('AngularJSapp', []);

 
        
    
    $timeout(function () {
            $scope.login_hide_for_animate = false;
            $scope.load_anim_bounceIn = 'load_anim_bounceIn';
            $scope.load_anim_zoomIn = 'load_anim_zoomIn';

    }, 600);
    

    
   //  $scope.wcfservice="http://localhost/DomainWrapper.horsesService/service.svc/";
    $scope.Offer_Demand = 'عرض';

    $scope.map_location = 'تحديد الموقع';
    $scope.map_loaded = false;
  //  $scope.geolocatecity = "جدة";
  //  $scope.geolocatecountry = "sa";
    //load_language();
    //function load_language() {       
    //    default_language = $.jStorage.get("lang");
    //    //message
    //    $scope.RequiredMessage = eval('requiredMessage.' + default_language);
    //    //feed back page
    //    $scope.lblContactUsHeader = eval('lblContactUsHeader.' + default_language);
    //    $scope.lblMessageTitle = eval('lblMessageTitle.' + default_language);
    //    $scope.lblMessageType = eval('lblMessageType.' + default_language);
    //    $scope.lblMessageContent = eval('lblMessageContent.' + default_language);
    //    $scope.btnSendFeedback = eval('btnSendFeedback.' + default_language);
    //    //user profile page
    //    $scope.userProfile = eval('userLbl.' + default_language);
    //    $scope.nameLbl = eval('nameLbl.' + default_language);
    //    $scope.nidLbl = eval('nidLbl.' + default_language);
    //    $scope.mobLbl = eval('mobLbl.' + default_language);
    //    $scope.emailLbl = eval('emailLbl.' + default_language);
    //    $scope.userSaveBtn = eval('saveLbl.' + default_language);
    //    if (default_language == 'english') {
    //        $scope.NationMinLength = 'National id has to be 10 characters long.';
    //        $scope.NationMaxlength = 'National id has to be less than 10 characters long.';
    //        $scope.MobileMinLength = 'Mobile number has to be 10 characters long.';
    //        $scope.MobileMaxlength = 'Mobile number has to be less than 10 characters long.';
    //        $scope.EmailMessage = 'Your email must be between 10 and 100 characters long and look like an e-mail address.';
    //    }
    //    else {
    //        $scope.NationMinLength = 'الهوية الوطنية يجب أن تكون 10 حرفا';
    //        $scope.NationMaxlength = 'الهوية الوطنية يجب أن تكون أقل من 10 حرفا';
    //        $scope.MobileMinLength = 'رقم الجوال يجب أن يكون 10 حرفا.';
    //        $scope.MobileMaxlength = 'رقم الجوال يجب أن يكون أقل من 10 حرفا.';
    //        $scope.EmailMessage = 'يجب أن يكون البريد الإلكتروني بين 10 و 100 حرفا، ويكون بصيغة البريد الإلكتروني.';
    //    }
    //    //help page
    //    $scope.helpLbl = eval('helpLbl.' + default_language);
    //    //new complaint page
    //    $scope.comPageHeder = eval('hederCatLbl.' + default_language);
    //    $scope.CEbtn = eval('ceBtnTitle.' + default_language);
    //    $scope.comCatLbl = eval('slctCatLbl.' + default_language);
    //    $scope.comSubCatLbl = eval('slctSubCatLbl.' + default_language);
    //    $scope.compLctLbl = eval('compLctLbl.' + default_language);
    //    $scope.compDsrLbl = eval('compDsrLbl.' + default_language);        
    //    if (default_language == 'english') {
    //        $scope.CompBtnVal = 'Send';
    //        $scope.EnLang = true;
    //    }
    //    else {
    //        $scope.CompBtnVal = 'إرســــال';
    //        $scope.EnLang = false;
    //    }
    //    //map page
    //}

    //$scope.switch_language = function () {
    //    debugger;
    //    if (default_language == 'english')
    //        $.jStorage.set("lang", 'arabic');
    //    else
    //        $.jStorage.set("lang", 'english');
    //    load_language();
    //}
});


//app.constant('appName', 'Application Name');
