(function () {
"use strict";

angular.module('public')
.service('RegistrationService', RegistrationService);

function RegistrationService(){
  var service = this;
  var userInfo = [];

  service.register = function(userData){
    console.log(userData.firstName);
    console.log(userData.lastName);
    console.log(userData.email);
    console.log(userData.phone);
    console.log(userData.dish);
  }
}
})();
