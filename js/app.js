/**
 * Created by Sylvia on 12/7/15.
 */
var app = angular.module("wineManagerApp", []);
app.controller("winemanagerCtrl",function($scope, $http){

    function getWines() {
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
});