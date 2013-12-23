'use strict';

angular.module('myApp.restServices', ['ngResource'])
    .factory('Employee', ['$resource',
        function ($resource) {
            return $resource('/employees/:employeeId', {});
        }])

    .factory('Report', ['$resource',
        function ($resource) {
            return $resource('/employees/:employeeId/reports', {});
        }])
    .factory('MenuCategory', ['$resource',
        function ($resource) {
            return $resource('/menucategory/:catid', {});
        }])
    .factory('AllData', ['$resource',function ($resource){
         return $resource('/alldata', {});
    }])
    .factory('SendOrder', ['$resource', function ($resource){
        return $resource('/edit',{userId:'@userId', cardId:'@cardId'},{
            'order':{ method: 'POST', params:{ valid:true}}
        })
    }])
angular.module('myApp.postServices',['ngResource'])
    
    