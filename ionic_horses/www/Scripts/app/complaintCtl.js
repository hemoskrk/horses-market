app.controller('complaintCtl', function ($timeout, $scope) {
    var maps;
    var marker;
    var platform = "";
    var googleMap = true;
    var mapClick;
    var _userRatingValue;
    var DevicePlatform = "";
    var DeviceVersion = "";
    var DeviceModel = "";

    getMap();
    GetAllCategories();           
    $scope.categories = null;
    $scope.subCategories = null;
    $scope.complaintlocation = '';
    $scope.complaintDescription = '';
   
    //Get all categories
    function GetAllCategories() {               
        $.ajax({
            type: "POST", //GET or POST or PUT or DELETE verb
            url: "http://maps.jeddah.gov.sa/WCFService/JSonPerson.svc/getParentCats",
            //data: reqData, //Data sent to server
            contentType: "json", // content type sent to server
            dataType: "jsonp", //Expected data format from server
            processdata: false, //True or False
            timeout: 60000,



            //async: false,
            success: function (data) {
                debugger;
                $scope.categories = data;
            },
            error: function (data) {
                toastr.error('Error in getting categories records');
            }
        });
    }
    $scope.loadCategories = function () {
        // Use timeout to simulate a 650ms request.
        return $timeout(function () {                    
            $scope.categories = $scope.categories;
        }, 650);
    };
    //Get all subcategories by category  id
    $scope.GetCubCategories = function () {
        debugger;
        var crsId = $scope.SelectedCategory.id;
        //alert(crsId);
        $.ajax({
            type: "POST", //GET or POST or PUT or DELETE verb
            url: "http://maps.jeddah.gov.sa/WCFService/JSonPerson.svc/getSubCats?parentID=" + crsId,
            //data: crsId,//JSON.stringify(crsId), //Data sent to server
            contentType: "json", // content type sent to server
            dataType: "jsonp", //Expected data format from server
            processdata: false, //True or False
            timeout: 60000,



            //async: false,
            success: function (data) {
                debugger;
                $scope.subCategories = data;
            },
            error: function (data) {
                toastr.error('Error in getting categories records');
            }
        });
    }
    $scope.loadSubCategories = function () {
        // Use timeout to simulate a 650ms request.
        return $timeout(function () {
            debugger;
            $scope.subCategories = $scope.subCategories;
        }, 650);
    };           
    //Save complaint
    $scope.SaveComplaint = function () {
        toastr.success('wait for image from main page');
        window.location = '#/';
    };
    //Get map and indentify task
    function getMap() {
        esri.config.defaults.io.proxyUrl = "http://maps1.jeddah.gov.sa/proxy/proxy.ashx";
        if (maps == null) {
            var mapOption = {
                center: new google.maps.LatLng(21.5018418, 39.1675561),
                zoom: 16,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                zoomControl: false,
                streetViewControl: false,
                panControl: false                                      
            };
            maps = new google.maps.Map(document.getElementById("map"), mapOption);
        }
       
    }    
    function executeIdentifyTask(evt) {
        var PROJCS = new esri.SpatialReference('PROJCS["WGS_84_UTM_zone_37N",GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Transverse_Mercator"],PARAMETER["false_easting",500000.0],PARAMETER["false_northing",0.0],PARAMETER["central_meridian",39.0],PARAMETER["scale_factor",0.9996],PARAMETER["latitude_of_origin",0.0],UNIT["Meter",1.0]]');
        debugger;
        identifyTask = new esri.tasks.IdentifyTask("http://maps1.jeddah.gov.sa/arcgis/rest/services/JeddahBaseMap_New/MapServer");
        identifyParams = new esri.tasks.IdentifyParameters();
        identifyParams.tolerance = 50;
        identifyParams.returnGeometry = false;
        identifyParams.layerIds = [10, 8, 6, 7];
        identifyParams.layerOption = esri.tasks.IdentifyParameters.LAYER_OPTION_ALL;
        //identifyParams.width = map.width;
        //identifyParams.height = map.height;

        //var X = map.latLng.lat().toFixed(6);
        //var Y = map.latLng.lng().toFixed(6);               


        ToUTM(evt.latLng.lat(), evt.latLng.lng());
        var x = Number(X);
        var y = Number(Y);

        // getting Zone
        var zone_selected = Math.floor((evt.latLng.lng() + 180.0) / 6) + 1;
        var points = new esri.geometry.Point(x, y, PROJCS);
        var extent = new esri.geometry.Extent(x - 150, y - 150, x + 150, y + 150, PROJCS)
        //----------------------------------                                

        identifyParams.geometry = points;
        identifyParams.mapExtent = extent;

        //var deferred = identifyTask.execute(identifyParams, successResult,fail);

        var deferred = identifyTask.execute(identifyParams);

        deferred.addCallback(function (response) {

            console.log(response);
            if (response != "") {
                for (var i in response) {
                    if (response[i].layerId == 10) {
                        if (response[i].value != "undefined") {
                            SUBMUN = response[i].value;

                            $("#slctSUBMUNId").val(response[i].feature.attributes['رقم البلدية الفرعية']);
                        }
                        else {
                            SUBMUN = "البلدية غير معرفه";
                            $("#slctSUBMUNId").val("0");

                        }

                    }
                    if (response[i].layerId == 8) {
                        if (response[i].value != "undefined") {

                            DIST = response[i].value;

                            $("#slctDISTId").val(response[i].feature.attributes['رقم الحي']);
                        }
                        else {
                            DIST = "الحي غير معرف";
                            $("#slctDISTId").val("0");

                        }
                    }

                    if (response[i].layerId == 7) {

                        subDIST = response[i].value;
                        $("#slctsubDISTId").val(response[i].feature.attributes['رقم الحي الفرعي']);


                    }


                    if (DIST == null) { DIST = "الحي الرئيسي غير معرف"; $("#slctDISTId").val("0"); }
                    if (subDIST == null) { subDIST = "الحي الفرعي غير معرف"; $("#slctsubDISTId").val("0"); }



                    if (response[i].layerId == 6) {
                        STRT = response[i].value;
                        $("#slctSTRTName").val(STRT);
                        $("#slctSTRTId").val(response[i].feature.attributes['رقم الشارع']);
                        STRT = ($.trim(STRT) != "") ? " / " + STRT : "";
                    }

                }

                if ($("#slctCompNameId").val() != "") {
                    $("#mapLocLbl").html(eval('confLocLbl.' + default_language));
                    $("#slctMapLocationList").html("<a class='ui-btn-icon-right ui-icon-carat-r'>" + SUBMUN + " / " + DIST + " / " + subDIST + STRT + "</a>");
                } else {
                    $("#mapLocLbl").html(eval('locInfoLbl.' + default_language));
                    $("#slctMapLocationList").html(SUBMUN + " / " + DIST + " / " + subDIST + STRT);
                }

                if (marker != null)
                    marker.setMap(null);


                marker = new google.maps.Marker({
                    position: evt.latLng,
                    animation: google.maps.Animation.DROP,
                    map: maps
                });
                if (platform == 'iOS')
                    $("#slctMapLocation").popup("open", {
                        x: evt.pixel.x, //evt.latLng.lng().toFixed(10) ,
                        y: evt.pixel.y + 65 // evt.latLng.lat().toFixed(10) 
                    });
                else
                    $("#slctMapLocation").popup("open", {
                        x: evt.pixel.x, //evt.latLng.lng().toFixed(10) ,
                        y: evt.pixel.y + 45 // evt.latLng.lat().toFixed(10) 
                    });
            }
            else {
                $("#mapLocLbl").html(eval('locInfoLbl.' + default_language));
                $("#slctMapLocationList").html(eval('outOfJedLbl.' + default_language));
            }
        });


        latlon = new Array(2);
        //UTMXYToLatLon(evt.mapPoint.x, evt.mapPoint.y, 37, false, latlon);
        $("#GPSLon").val(x);
        $("#GPSLat").val(y);
    }
   
});