var app = angular.module("testTask", []);

app.controller('productsCtrl', ['$scope', '$filter', function ($scope, $filter) {
    var vm = this;
    vm.items = [];
    $scope.data = {
        "items": [
            {
                "type" : "Child",
                "img" : "item1",
                "price" : "3.20",
                "name" : "T-SHIRT",
                "options": ["Size", "S", "M", "L", "XL"]
            }
            ,{
                "type" : "Child",
                "img" : "item2",
                "price" : "13.30",
                "name" : "Pants FORCLAZ",
                "options": ["Size", "M", "XL"]
            }
            ,{
                "type" : "Men",
                "img" : "item1",
                "price" : "5.00",
                "name" : "T-SHIRT",
                "options": ["Size", "XL"]
            }
            ,{
                "type" : "Women",
                "img" : "item2",
                "price" : "3.21",
                "name" : "T-SHIRT",
                "options":  ["Size", "S", "M", "L", "XL"]
            }
            ,{
                "type" : "Women",
                "img" : "item3",
                "price" : "31",
                "name" : "backpack",
                "options": ["color", "red", "blue", "black"]
            }
            , {
                "type" : "Other",
                "img" : "item3",
                "price" : "0",
                "name" : "car",
                "options": ["color", "red", "blue", "black"]
            }
        ]
    };

    $scope.showCategory = {
        "men" : true,
        "women" : true,
        "child": false
    };

    $scope.resetFilter = function() {
        $scope.showCategory = {
            "men" : true,
            "women" : true,
            "child": true
        };
    };

    $scope.$watch('showCategory', function(newValue) {
        vm.items = [];
        var items = angular.copy($scope.data.items);
        for (var i = 0; i < items.length; i++){
            var is_exist = filterCategory(items[i]);
            if (typeof is_exist === 'object'){
                vm.items.push(is_exist);
            }
        }
    }, true);


    function filterCategory(obj) {
        var exportObj = '';
        var catName = [obj.type.toLowerCase()];

        if (catName in $scope.showCategory) {
            if ($scope.showCategory[catName]) {
                exportObj = obj;
            }
        }
        return exportObj;
    };




    $scope.changeFilter  = function (obj) {
        return !$scope.showCategory[obj];
    }

}]);


app.controller('menuCtrl', ['$scope', function ($scope) {

    $scope.data = {
        "footerMenu" : [
            {
                "name": "Credits",
                "link": "https://softswiss.com/",
                "title": "credits"
            },
            {
                "name": "Privacy",
                "link": "https://softswiss.com/",
                "title": "privacy"
            },
            {
                "name": "About",
                "link": "https://www.softswiss.com/about-us/",
                "title": "about us"
            },
            {
                "name": "Contact",
                "link": "https://www.softswiss.com/contact-us/",
                "title": "contact us"
            }
        ]};

}]);