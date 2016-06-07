angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('PetService', function() {
  // Might use a resource here that returns a JSON array
    debugger;
  // Some fake testing data
  var pets = [
    { id: 0, title: 'اختبار 1', description: 'معروض للبيع 1' },
    { id: 1, title: 'اختبار 2', description: 'معروض للبيع 2.' },
    { id: 2, title: 'اختبار 3', description: 'معروض للبيع 3.' },
    { id: 3, title: 'اختبار 4', description: 'معروض للبيع 4.' }
  ];

  return {
    all: function() {
      return pets;
    },
    get: function(petId) {
      // Simple index lookup
      return pets[petId];
    }
  }
})



.factory('configService', function () {
    var hostname = "localhost";
   // hostname="23.92.60.153";
    var config = [
      { id: 0, key: 'wcfservice', value: 'http://' + hostname + '/DomainWrapper.horsesService/service.svc/' },
      { id: 1, key: 'upload_service', value: 'http://' + hostname + '/DomainWrapper.horsesService/picUploadHandler.ashx' },
      { id: 2, key: 'uploaded_pic_url', value: 'http://' + hostname + '/horese_uploaded_pics/' },
      { id: 3, key: 'service_password', value: 'please_dont_touch_me' }
    ];

    return {
        all: function() {
            return config;
        },
        get: function(configId) {
            // Simple index lookup
            return config[configId];
        }
    }
})


.factory('namingService', function () {
   
    var nameing = [
        { id: 0, En_name: 'Offer', Ar_name: 'عرض' },
        { id: 0, En_name: 'Offers', Ar_name: 'عروض' },
        { id: 0, En_name: 'Home', Ar_name: 'الرئيسية' },
        { id: 0, En_name: 'Demand', Ar_name: 'طلب' },
        { id: 0, En_name: 'Demands', Ar_name: 'طلبات' },
        { id: 0, En_name: 'Me', Ar_name: 'بياناتي' },
        { id: 0, En_name: 'Login', Ar_name: 'الدخول' }

    ];

    return {
        all: function () {
            return nameing;
        },
        get: function (nameId) {
            // Simple index lookup
            return nameing[nameId];
        }
    }
});
