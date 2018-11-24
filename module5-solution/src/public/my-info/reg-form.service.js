(function () {
"use strict";

angular.module('public')
.service('RegistrationService', RegistrationService);

function RegistrationService(){
  var service = this;
  var userInfo = [];
  var isRegistered = false;

  service.register = function(userData, dishItem){
    service.userInfo = userData;
    service.dishItem = dishItem;
    service.isRegistered = true;
  }
}
})();
