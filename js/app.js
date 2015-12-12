/**
 * Created by Sylvia on 12/7/15.
 */
var app = angular.module("wineApp", []);
app.controller("wineCtrl",function($scope) {
    $http.get("http://daretodiscover.herokuapp.com/wines")
        .success(function(wines) {
            $scope.wines = wines;
        })
        .error(function() {
            alert("Error getting wine data.");
        });
});
    /*function getWines() {
        $http.get("http://daretodiscover.herokuapp.com/wines")
            .success(function (wines) {
                //$scope.wines = wines;
                console.log(wines);
            })
            .error(function () {
                alert("error getting data");
            });
        }
    getWines();
});*/