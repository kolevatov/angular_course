(function () {
"use strict";

angular.module('public')
.controller('InfoFormController', InfoFormController);

InfoFormController.$inject = ['RegistrationService'];
function InfoFormController(RegistrationService) {
  var $ctrl = this;

  $ctrl.isRegistered = RegistrationService.isRegistered;
  $ctrl.user = RegistrationService.userInfo;
  $ctrl.dishItem = RegistrationService.dishItem;
}

})();
