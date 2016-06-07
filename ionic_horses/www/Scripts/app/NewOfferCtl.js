


app.controller('NewOfferCtl', function ($scope, configService, $http, $location) {

    $scope.svp = configService.get(3).value;
    $scope.pic_pos="";
        $scope.upload_pic_pos = "";
        $scope.uploaded_pics = {pic1:'',pic2:'',pic3:'',pic4:'',pic5:'',vid:''};
        $scope.wcfservice = configService.get(0).value;
        $scope.upload_service = configService.get(1).value;
        uploaded_pic_url = configService.get(2).value;
        upload_service = $scope.upload_service;
        



        $http.get($scope.wcfservice + 'get_horses_category?', { params: { svp: $scope.svp } }).success(function (data, status) {
            debugger
            $scope.horses_types = data.horses_types;
            $scope.horses_category = data.horses_category;
            $scope.horses_ages = data.horses_ages;
            $scope.horses_cities = data.horses_cities;
            $scope.horses_colors = data.horses_colors;
            $scope.horses_heights = data.horses_heights;
            
        }).error(function(data,status){
            alert($scope.wcfservice + 'get_horses_category?svp=' + $scope.svp)
        });
   // $.get($scope.wcfservice + 'get_horses_category?', {svp : $scope.svp}
   //    , function (data) {
           
   //        $scope.horses_types = data.horses_types;
   //        $scope.horses_category = data.horses_category;
   //        $scope.horses_ages = data.horses_ages;
   //        $scope.horses_cities = data.horses_cities;
   //        $scope.horses_colors = data.horses_colors;      
   //    }
   //).done(function () {
   //})
   //       .fail(function () {
   //           alert("فشل الاتصال بالخادم");
   //       })
   //       .always(function () {
   //       });






    $(function () {
        var d = new Date();
        $scope.date_years = [];
        var pos = 0;
        var pos1 = 0;
        var pos2 = 0;
        $scope.date_months = [];
        $scope.date_dayes = [];
        for (var i = d.getFullYear() ; i >= 1950; i--) {
            $scope.date_years[pos] = i.toString();
            pos++;
        }
        for (var i = 1 ; i <= 12; i++) {
            $scope.date_months[pos1] = i.toString();
            pos1++;
        }
        for (var i = 1 ; i <= 31; i++) {
            $scope.date_dayes[pos2] = i.toString();
            pos2++;
        }
        
    })
    $scope.horse_status = { name: 'لقاح' };
   // $scope.horse_birth_day = { day: "1", month: "1", year: "2016" };
    
   // $scope.horse_birth_day = $scope.horse_birth_day + "/" + $scope.horse_birth_month + "/" + $scope.horse_birth_year;
    //note geo_location not consumed yet
    $scope.pic_thumb = "../../img/pic_thumb.png";
    $scope.New_Offer_parms = { svp: $scope.svp, User_ID: 1, sex: 'null', female_status: null, type: null, color: null, category: null, age: null, birth_day: null, horse_name: null, f_name: null, m_name: null, manual_age: null, height: null, bugs_notes: null, soom: null, had: null, behave: null, quality: null, city: null, geo_location: null, pics: null, vid: "../../img/vid_thumb.png", defect_condition: null, defect_note: null };

   // $scope.New_Offer_parms = { pic1: src = "http://localhost/horese_uploaded_pics/pic_thumb.png" };

    $scope.post_new_offer = function () {
        if (!$("#upload_pic_pos_img_1")[0].src.match("pic_thumb.png")) { 
            $scope.New_Offer_parms.pics = $("#upload_pic_pos_img_1")[0].src;
        } 
        if (!$("#upload_pic_pos_img_2")[0].src.match("pic_thumb.png")) {
            $scope.New_Offer_parms.pics=$scope.New_Offer_parms.pics+","+ $("#upload_pic_pos_img_2")[0].src;
        } 
        if (!$("#upload_pic_pos_img_3")[0].src.match("pic_thumb.png")) {
            $scope.New_Offer_parms.pics = $scope.New_Offer_parms.pics + "," + $("#upload_pic_pos_img_3")[0].src;
        } 
        if (!$("#upload_pic_pos_img_4")[0].src.match("pic_thumb.png")) {
            $scope.New_Offer_parms.pics = $scope.New_Offer_parms.pics + "," + $("#upload_pic_pos_img_4")[0].src;
        } 
        if (!$("#upload_pic_pos_img_5")[0].src.match("pic_thumb.png")) {
            $scope.New_Offer_parms.pics = $scope.New_Offer_parms.pics + "," + $("#upload_pic_pos_img_5")[0].src;
        } 
        if (!$("#upload_pic_pos_vid")[0].src.match("vid_thumb.png")) {
            $scope.New_Offer_parms.vid = $("#upload_pic_pos_vid")[0].src;
        } else { $scope.New_Offer_parms.vid = null; }
        if ($("#birth_day").val() && $("#birth_month").val() && $("#birth_year").val()) {
            $scope.New_Offer_parms.birth_day = $("#birth_day").val().trim() + "/" + $("#birth_month").val().trim() + "/" + $("#birth_year").val().trim();
        }
     
  //      $.get($scope.wcfservice + 'post_new_offer?', $scope.New_Offer_parms
  //    , function (data) {
          
        
  //    }
  //).done(function () {
  //})
  //       .fail(function () {
  //           alert("فشل الاتصال بالخادم");
  //       })
  //       .always(function () {
  //       });

        $http.get($scope.wcfservice + 'post_new_offer?', { params: $scope.New_Offer_parms }).success(function (data, status) {
            if (data.match("1")) {
                alert("تم نشر العرض بنجاح");
                $location.path("/tab/Offers");
            } else {
                alert("حدث خطأ, برجاء المحاولة لاحقا");
            }

        });



    }





    //var app = angular.module('AngularJSapp', ['ngAnimate']);
    //$scope.horse_status_isCollapsed = false;
    //$scope.isCollapsed = false;
    //$scope.horse_status_Check = true;
    //$scope.toogle_horse_status = function () {

        
    //    $scope.toogle_horse_selectedItem;
    //    if ($scope.toogle_horse_selectedItem == "حصان") {
    //        $scope.horse_status_Check = true;
    //    }
    //    else {
    //        $scope.horse_status_Check = false;
    //    }

    //}
    //$scope.geolocatecity = geolocatecity;
    //$scope.geolocatecountry = geolocatecountry;
    ////$scope.onTouchstart = function($event) {
    ////}
    $scope.new_offer_div1myCheck = false;
    $scope.new_offer_div2myCheck = true;
    $scope.new_offer_div3myCheck = true;
    $scope.new_offer_div4myCheck = true;
    $scope.new_offer_div5myCheck = true;
    $scope.next_div = function (div_no) {
        if (div_no=='2') {
        $scope.new_offer_div2myCheck = false;
        $scope.new_offer_div1myCheck = true;
        }
        else if (div_no == '3')
        {
            $scope.new_offer_div3myCheck = false;
            $scope.new_offer_div2myCheck = true;
        }
        else if (div_no == '4') {
            $scope.new_offer_div4myCheck = false;
            $scope.new_offer_div3myCheck = true;
        }
        else if (div_no == '5') {
            $scope.new_offer_div5myCheck = false;
            $scope.new_offer_div4myCheck = true;
        }
    }
    $scope.prev_div = function (div_no) {
        if (div_no == '1') {
            $scope.new_offer_div2myCheck = true;
            $scope.new_offer_div1myCheck = false;
        }
        else  if (div_no == '2') {
            $scope.new_offer_div3myCheck = true;
            $scope.new_offer_div2myCheck = false;
        }
        else if (div_no == '3') {
            $scope.new_offer_div4myCheck = true;
            $scope.new_offer_div3myCheck = false;
        }
        else if (div_no == '4') {
            $scope.new_offer_div5myCheck = true;
            $scope.new_offer_div4myCheck = false;
        }
    }
    $scope.upload_pic_click = function (pos) {
        upload_pic_pos = pos;
        $("#file_Upload_pic").click();
    }
    // $scope.upload_pic = 
 






});
var upload_pic_pos, uploaded_pic_url, upload_service = '';
function upload_pic() {

            var client = new XMLHttpRequest();
            var file = $("#file_Upload_pic")[0];
            var url = upload_service;
            client.open("post", url, true);
            /* Create a FormData instance */
            var formData = new FormData();
            /* Add the file */
                formData.append("upload", file.files[0]);
            // client.setRequestHeader("Content-Type", "multipart/form-data");
            client.send(formData);  /* Send to server */
            ///* Check the response status */  
            client.onreadystatechange = function (e) {
                if (client.readyState == 4 && client.status == 200) {
                    if (client.statusText == "OK") {
                        var x = jQuery.parseJSON(client.responseText).returnString;
                        var x_path = uploaded_pic_url + x;
                        if (!(x == "لا يوجد ملف لرفعه")) { 
                   if (upload_pic_pos == '1') {
                            $("#upload_pic_pos_img_1")[0].src = x_path;
                            uploaded_pics.pic1 = x;
                        }
                        else if (upload_pic_pos == '2') {
                            $("#upload_pic_pos_img_2")[0].src = x_path;
                            uploaded_pics.pic2 = x;
                        }
                        else if (upload_pic_pos == '3') {
                            $("#upload_pic_pos_img_3")[0].src = x_path;
                            uploaded_pics.pic3 = x;
                        }
                        else if (upload_pic_pos == '4') {
                            $("#upload_pic_pos_img_4")[0].src = x_path;
                            uploaded_pics.pic4 = x;
                        }
                        else if (upload_pic_pos == '5') {
                            $("#upload_pic_pos_img_5")[0].src = x_path;
                            uploaded_pics.pic5 = x;
                         }

                        else if (upload_pic_pos == '6') {
                        //    $("#upload_pic_pos_img_5")[0].src = x_path;
                            uploaded_pics.vid = x;
                        }
                        }

                    }
                }
            }
    }