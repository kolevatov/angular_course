(function () {
"use strict";

angular.module('public')
.controller('RegistrationFormController', RegistrationFormController);

RegistrationFormController.$inject = ['RegistrationService'];
function RegistrationFormController(RegistrationService) {
  var $ctrl = this;

  $ctrl.submit = function () {
    RegistrationService.register($ctrl.user);
    $ctrl.completed = true;
  };
}

})();
