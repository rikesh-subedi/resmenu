'use strict';

angular.module('myApp.controllers', [])
  .controller('MainCtrl', ['$scope', '$rootScope', '$window', '$location', 'SendOrder',
    function($scope, $rootScope, $window, $location , SendOrder) {
      $rootScope.orderChecked=false;
      $scope.slide = '';
      $scope.currentPos=0;
      $rootScope.cart = {};
      $rootScope.back = function() {
        $scope.slide = 'slide-right';
        $window.history.back();
        console.log($location.path());
      }
      $rootScope.go = function(path) {
        $scope.slide = 'slide-left';
        $location.url(path);
      }
      $rootScope.goBack = function(path) {
        $scope.slide = 'slide-right';
        $location.url(path);
      }
      $rootScope.open = function(path) {
        console.log(path);
        $location.url(path);

      }
      $rootScope.goBack = function(path) {
        $location.url($rootScope.backbuttonpath);
      }

      $rootScope.goLeft = function(e) {
        //alert('goLft')
        //-webkit-transform: translate(-667px, 0px) translateZ(0px);
        $scope.currentPos = $scope.currentPos - 400;
        $scope.slideStyle = {
         "-webkit-transform": "translate(" + $scope.currentPos + "px, 0px) translateZ(0px)",
        "-webkit-transition": "1.5s cubic-bezier(.10, .57, .58, 1) all",
        "position":"relative"
        }
      }
      $scope.goRight = function(e) {
        if ($scope.currentPos < 0)
          $scope.currentPos = $scope.currentPos + 400;
        $scope.slideStyle = {
          "-webkit-transform": "translate(" + $scope.currentPos + "px, 0px) translateZ(0px)",
          "-webkit-transition": "1.5s cubic-bezier(.10, .57, .58, 1) all",
          "position":"relative"
        }

      }
      $rootScope.removeItem = function(i, list){
         var quantity = list[i].quantity;
         if(quantity > 1) list[i].quantity--;
         else{
           delete list[i];
         }
         var total = 0;
         for(var mm in list){
           total= total + list[mm].quantity*parseFloat(list[mm].menu_item_price || 0); 
         }
         $rootScope.finalTotalAmount = total.toFixed(2);
         
      }
      $rootScope.openEdit=function(path){
          $location.url(path);
          $rootScope.orderChecked = true;
      }
      $rootScope.sendOrder=function(item){
          $rootScope.orderChecked = false;
          var sOrder = new SendOrder(item)
          sOrder.$save();

      }
      $rootScope.cancelOrder=function(){
          $rootScope.orderChecked = false;
          for(var mm in $rootScope.cart){
           delete $rootScope.cart[mm];
         }
      }

    }
  ])
  .controller('MenuCategoryCtrl', ['$scope', 'MenuCategory',
    function($scope, MenuCategory) {
      $scope.menucat = MenuCategory.query();
    }
  ])
  .controller('MenuCtrl', ['$scope', '$rootScope', '$routeParams', 'MenuCategory',
    function($scope, $rootScope, $routeParams, MenuCategory) {
      //$scope.menus = MenuCategory.query({catid: $routeParams.catid});
      $scope.catid = $routeParams.catid;
      $scope.menucatname = $routeParams.catname;
      $scope.menutype = $rootScope.allData.menus[$scope.catid];
      $rootScope.backbuttondisplay = "visible";
      $rootScope.backbuttonpath = "/menus";
    }
  ])
  .controller('MenuListCtrl', ['$scope', '$rootScope', '$routeParams', 'MenuCategory',
    function($scope, $rootScope, $routeParams, MenuCategory) {
      //$scope.menus = MenuCategory.query({catid: $routeParams.catid});
      $scope.catid = $routeParams.catid;
      $scope.id = $routeParams.id;
      $scope.menuname = $routeParams.name;
      $scope.menutype = $rootScope.allData.menus[$scope.catid];
      $scope.menulist = $scope.menutype.menu_groups[$scope.id];
      $rootScope.backbuttondisplay = "visible";
      $rootScope.backbuttonpath = "/menus/" + $scope.catid + "/" + $scope.menutype.menu_name;
      $scope.orderNow = function(index, item_uid) {
        var menu_item = $scope.menulist.menu_items[index];
        var item_id = menu_item.item_uid;
        var ifExist = $rootScope.cart[item_id];
        if (!ifExist) {
          menu_item.quantity = 1;
          $rootScope.cart[item_id] = menu_item;
          $rootScope.cart.sort(function(a,b){

          })
        } else {
          $rootScope.cart[item_id].quantity++;
        }
        var total = 0;
         for(var mm in $rootScope.cart){
           total= total + $rootScope.cart[mm].quantity*parseFloat($rootScope.cart[mm].menu_item_price||0); 
         }
         $rootScope.finalTotalAmount = total.toFixed(2);

      }
    }
  ])
  .controller('EditListCtrl',['$scope', '$rootScope','SendOrder',function($scope,$rootScope,$SendOrder){
     
     //$scope.cart = $rootScope.cart;
  }])
  .controller('AllDataCtrl', ['$scope', '$rootScope', '$routeParams', 'AllData',
    function($scope, $rootScope, $routeParams, AllData) {
      AllData.get(function(data) {
        $scope.allData = data;
        $rootScope.allData = data;
      })
      $scope.menucatname = $routeParams.catname;
      $rootScope.backbuttondisplay = "hidden";
      $rootScope.backbuttonpath = "";
      //$rootScope.apply();
    }
  ])
  .controller('AccordionDemoCtrl', function($scope) {
    $scope.oneAtATime = true;

    $scope.groups = [{
      title: "Dynamic Group Header - 1",
      content: "Dynamic Group Body - 1"
    }, {
      title: "Dynamic Group Header - 2",
      content: "Dynamic Group Body - 2"
    }];

    $scope.items = ['Item 1', 'Item 2', 'Item 3'];

    $scope.addItem = function() {
      var newItemNo = $scope.items.length + 1;
      $scope.items.push('Item ' + newItemNo);
    };
  })

angular.module('filters', [])
  .filter('orderObjectBy', function() {
    return function(items, field, reverse) {
      var filtered = [];
      angular.forEach(items, function(item) {
        filtered.push(item);
      });
      filtered.sort(function(a, b) {
        return (a[field] > b[field]);
      });
      if (reverse) filtered.reverse();
      return filtered;
    };
  });
/*.controller('EmployeeListCtrl', ['$scope', 'Employee', function ($scope, Employee) {
        $scope.employees = Employee.query();
    }])
    .controller('EmployeeDetailCtrl', ['$scope', '$routeParams', 'Employee', function ($scope, $routeParams, Employee) {
        $scope.employee = Employee.get({employeeId: $routeParams.employeeId});
    }])
    .controller('ReportListCtrl', ['$scope', '$routeParams', 'Report', function ($scope, $routeParams, Report) {
        $scope.employees = Report.query({employeeId: $routeParams.employeeId});
    }]);*/