app.controller('feedbackCtl', function ($timeout, $scope) {
    GetMessageTypes();
    $scope.MessageTitle;
    $scope.SelectedType;
    $scope.MessageContent;

    $scope.GetMessageTypes = function () {
        $scope.ComplaintsOpt = eval('lblComplaintsOpt.' + default_language);
        $scope.InquiryOpt = eval('lblInquiryOpt.' + default_language);
        $scope.SuggestionOpt = eval('lblSuggestionOpt.' + default_language);
        $scope.RequestOpt = eval('lblRequestOpt.' + default_language);
        $scope.InvitationOpt = eval('lblInvitationOpt.' + default_language);
        $scope.ComplimentOpt = eval('lblComplimentOpt.' + default_language);

        $scope.MessageTypes = [$scope.ComplaintsOpt, $scope.InquiryOpt, $scope.SuggestionOpt, $scope.RequestOpt, $scope.InvitationOpt, $scope.ComplimentOpt]
    };
    $scope.loadMessageTypes = function () {
        return $timeout(function () {
            $scope.MessageTypes = $scope.MessageTypes;
        }, 650);
    };
    $scope.SendMessage = function () {
        if ($.jStorage.get("UserName") != "" && $.jStorage.get("NID") != "" && $.jStorage.get("Mobile") != "" && $.jStorage.get("Email") != "") {
            $.ajax({
                type: "POST",
                url: "http://maps.jeddah.gov.sa/WCFService/JSonPerson.svc/sendEmail",
                data: {
                    Name: $.jStorage.get("UserName"),
                    ID: $.jStorage.get("NID"),
                    Mobile: $.jStorage.get("Mobile"),
                    Email: $.jStorage.get("Email"),
                    MessageContent: $scope.MessageContent,
                    MessageType: $scope.SelectedType
                },
                contentType: "json",
                dataType: "jsonp",
                processdata: false,
                timeout: 60000,
                //async: false,
                success: function (data) {
                    if (default_language == 'english')
                        toastr.success('Message send successfuly.');
                    else
                        toastr.success('تم إرسال الرسالة بنجاح');
                    
                    window.location = '#/';
                },
                error: function (data) {
                    toastr.error('Error.');
                }
            });
        }
        else {
            if (default_language == 'english')
                toastr.error('You must fill your profile befor sen message');
            else
                toastr.error('لا بد من ملاء بياناتك حتى تتمكن من الإرسال ');
        }

    };
    
});