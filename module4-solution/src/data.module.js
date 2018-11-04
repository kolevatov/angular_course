(function () {
'use strict';

angular.module('data', [])
.constant('categoriesUrl', 'https://davids-restaurant.herokuapp.com/categories.json')
.constant('itemsUrl', 'https://davids-restaurant.herokuapp.com/menu_items.json?category=');

})();
