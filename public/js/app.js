'use strict';
angular.module('myApp', [
    'ngTouch',
    'ngRoute',
    'ngAnimate',
    'myApp.controllers',
    'myApp.restServices',
    'myApp.postServices',
    'myApp.directives',
    'ui.bootstrap',
    ],function($httpProvider){
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
}).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/menus', {templateUrl: 'partials/all-data.html', controller: 'AllDataCtrl'});
    $routeProvider.when('/menus/:catid/:catname', {templateUrl: 'partials/menu.html', controller: 'MenuCtrl'});
    $routeProvider.when('/contact', {templateUrl: 'partials/employee-list.html', controller: 'EmployeeListCtrl'});
    $routeProvider.when('/menulist/:catid/:id/:name',{templateUrl: 'partials/menu-list.html', controller: 'MenuListCtrl'});
    $routeProvider.when('/edit',{templateUrl: 'partials/edit-details.html', controller: 'EditListCtrl'});

    //$routeProvider.when('/employees/:employeeId', {templateUrl: 'partials/employee-detail.html', controller: 'EmployeeDetailCtrl'});
    //$routeProvider.when('/employees/:employeeId/reports', {templateUrl: 'partials/report-list.html', controller: 'ReportListCtrl'});
    $routeProvider.otherwise({redirectTo: '/menus'});
}]);
angular.module('filters',[])
   .filter('orderObjectBy', function() {
  return function(items, field, reverse) {
    var filtered = [];
    angular.forEach(items, function(item) {
      filtered.push(item);
    });
    filtered.sort(function (a, b) {
      return (a[field] > b[field]);
    });
    if(reverse) filtered.reverse();
    return filtered;
  };
});