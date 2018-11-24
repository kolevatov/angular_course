(function () {
"use strict";

angular.module('public')
.controller('RegistrationFormController', RegistrationFormController);

RegistrationFormController.$inject = ['RegistrationService', 'MenuService'];
function RegistrationFormController(RegistrationService, MenuService) {
  var $ctrl = this;

  $ctrl.submit = function () {

    MenuService.getItem($ctrl.user.dish).then(function(response){
      $ctrl.dishItem = response;

      RegistrationService.register($ctrl.user, $ctrl.dishItem);
      $ctrl.completed = 'OK';
    })
    .catch(function (error){
      $ctrl.completed = 'FAIL';
    })

  };
}

})();
