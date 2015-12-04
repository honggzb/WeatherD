(function () {
    angular.module("app.weather")
        .controller("Weather", function ($scope, $routeParams, weatherSvc) {
            $scope.current = null;
            $scope.getTime = getTime;

            if($routeParams.id != undefined ){
                getCurrent($routeParams.id);
            }

            function getCurrent(id){
                weatherSvc.getCurrent(id)
                    .then(
                        function(res){
                            //console.log(res);
                            $scope.current = res;
                        },
                        function(err){
                            console.log("error loading current city: "+err);
                        }
                )
            }

            function getTime(dt){
                return new Date(dt*1000);
            }
        });
})();