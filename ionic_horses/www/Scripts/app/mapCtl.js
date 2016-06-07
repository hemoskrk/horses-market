app.controller('mapCtl', function ($scope) {
    
   

    var markersArray = [];
    var geolocate;


    //var mapOptions = {
    //    zoom: 4,
    //    center: new google.maps.LatLng(40.0000, -98.0000),
    //    mapTypeId: google.maps.MapTypeId.TERRAIN
    //}
    //$scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);


   


    var mapOptions = {
        center: new google.maps.LatLng(21.74946846823927, 39.602809046196235),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    navigator.geolocation.getCurrentPosition(function (position) {
        geolocate = new google.maps.LatLng({ lat: position.coords.latitude, lng: position.coords.longitude });
        $scope.map.setCenter(geolocate);
        $scope.map.setZoom(17);
        show_popup_marker(geolocate, true);
    });









    google.maps.event.addListener($scope.map, 'click', get_location);
     function get_location(evt) {
        













        clear_markers()
        geolocate = new google.maps.LatLng({ lat: evt.latLng.lat(), lng: evt.latLng.lng() });






     //   $scope.map.setCenter(geolocate);
        $scope.map.setZoom(17);
        show_popup_marker(geolocate, false);
    }
    function show_popup_marker(geolocate, firsttime) {

        //new google.maps.Geocoder().geocode({ 'latLng': geolocate }, function (results, status) {
        //    if (status == google.maps.GeocoderStatus.OK) {
        //        if (results[1]) {
        //            var country = null, countryCode = null, city = null, cityAlt = null;
        //            var c, lc, component;
        //            for (var r = 0, rl = results.length; r < rl; r += 1) {
        //                var result = results[r];

        //                if (!city && result.types[0] === 'locality') {
        //                    for (c = 0, lc = result.address_components.length; c < lc; c += 1) {
        //                        component = result.address_components[c];

        //                        if (component.types[0] === 'locality') {
        //                            city = component.long_name;
        //                            break;
        //                        }
        //                    }
        //                }
        //                else if (!city && !cityAlt && result.types[0] === 'administrative_area_level_1') {
        //                    for (c = 0, lc = result.address_components.length; c < lc; c += 1) {
        //                        component = result.address_components[c];

        //                        if (component.types[0] === 'administrative_area_level_1') {
        //                            cityAlt = component.long_name;
        //                            break;
        //                        }
        //                    }
        //                } else if (!country && result.types[0] === 'country') {
        //                    country = result.address_components[0].long_name;
        //                    countryCode = result.address_components[0].short_name;
        //                }

        //                if (city && country) {
        //                    break;
        //                }
        //            }

        //            geolocatecity = city;
        //            geolocatecountry = country;

        //            //  console.log("City: " + city + ", City2: " + cityAlt + ", Country: " + country + ", Country Code: " + countryCode);
        //        }
        //    }
        //});

        $scope.lat=geolocate.lat();
        $scope.lng = geolocate.lng();
            
        $scope.lat ;
         $scope.lng;


        var marker = new google.maps.Marker({
            position: geolocate,
            map: $scope.map
        });
        markersArray.push(marker);
        var content = '<div id="iw-container" >' +
           '<div class="iw-title">لتأكيد الموقع اضغط على السهم‎</div>' +
           '<div class="iw-content" >' +
//
            ' <a id="approved" style="cursor:pointer;"onclick="approve_location(' + $scope.lat + ',' + $scope.lng + ')">تأكيد إختيار الموقع >>  ' +
                '<span class="glyphicon glyphicon-map-marker"></span>' +
              "  </a>" +
           '</div>' +
           '<div class="iw-bottom-gradient"></div>' +
         '</div>';
        var tol = 0;
        //if (firsttime == false) {
            tol = -90;
        //}
        //else {
        //    tol = -116;
        //}
        var infowindow = new google.maps.InfoWindow({
            content: content,
            pixelOffset: new google.maps.Size(tol, 15)
        });
   
        infowindow.open($scope.map, marker);
        google.maps.event.addListener($scope.map, 'click', function () {
            infowindow.close();
        });
        google.maps.event.addListener(infowindow, 'domready', function () {

            // Reference to the DIV that wraps the bottom of infowindow
            var iwOuter = $('.gm-style-iw');

            /* Since this div is in a position prior to .gm-div style-iw.
             * We use jQuery and create a iwBackground variable,
             * and took advantage of the existing reference .gm-style-iw for the previous div with .prev().
            */
            var iwBackground = iwOuter.prev();

            // Removes background shadow DIV
            iwBackground.children(':nth-child(2)').css({ 'display': 'none' });

            // Removes white background DIV
            iwBackground.children(':nth-child(4)').css({ 'display': 'none' });

            // Moves the infowindow 115px to the right.
            iwOuter.parent().parent().css({ left: '115px' });

            // Moves the shadow of the arrow 76px to the left margin.
            iwBackground.children(':nth-child(1)').attr('style', function (i, s) { return s + 'left: 76px !important;' });

            // Moves the arrow 76px to the left margin.
            iwBackground.children(':nth-child(3)').attr('style', function (i, s) { return s + 'left: 76px !important;' });

            // Changes the desired tail shadow color.
            iwBackground.children(':nth-child(3)').find('div').children().css({ 'box-shadow': 'rgba(72, 181, 233, 0.6) 0px 1px 6px', 'z-index': '1' });

            // Reference to the div that groups the close button elements.
            var iwCloseBtn = iwOuter.next();

            // Apply the desired effect to the close button
            iwCloseBtn.css({ 'display': 'none', opacity: '1', right: '38px', top: '3px', border: '7px solid #48b5e9', 'border-radius': '13px', 'box-shadow': '0 0 5px #3990B9' });

            // If the content of infowindow not exceed the set maximum height, then the gradient is removed.
            if ($('.iw-content').height() < 140) {
                $('.iw-bottom-gradient').css({ display: 'none' });
            }

            // The API automatically applies 0.7 opacity to the button after the mouseout event. This function reverses this event to the desired value.
            iwCloseBtn.mouseout(function () {
                $(this).css({ opacity: '0' });
            });
        });
     
    }
    function clear_markers() {
        for (var i = 0; i < markersArray.length; i++) {
            markersArray[i].setMap(null);
        }
        markersArray.length = 0;
    }
    function approve_location() {
        debugger;
        lat;
        lng;
        var lat = geolocate.lat();
        var lng = geolocate.lng();

    }




});

