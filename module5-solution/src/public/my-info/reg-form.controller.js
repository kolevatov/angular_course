(function () {
"use strict";

angular.module('public')
.controller('RegistrationFormController', RegistrationFormController);

function RegistrationFormController() {
  var $ctrl = this;

  $ctrl.submit = function () {
    $ctrl.completed = true;
  };
}

})();
