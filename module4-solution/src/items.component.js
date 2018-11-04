angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/templates/item_details.template.html',
  bindings: {
    items: '<',
    title: '@'
  }
});
