angular.module('SimpleFormsApp')
.component('regForm', {
  templateUrl: 'src/templates/reg.form.template.html',
  controller: RegistrationFormController
});

function RegistrationFormController() {
  var $ctrl = this;

  $ctrl.submit = function () {
    $ctrl.completed = true;
  };
}
