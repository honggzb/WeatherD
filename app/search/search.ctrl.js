(function () {
    angular.module("app.search")
        .controller("Search", function ($scope, weatherSvc) {
            $scope.cities = null;

            $scope.$on("search",search);
            function search(evt,data){
                //console.log(data.str);
                weatherSvc.find(data.str)
                    .then(
                        function(res){
                            //console.log(res);
                            $scope.cities = res.list;
                        },
                        function(err){
                            console.log("error finding citis: "+err);
                        }
                    )
            }

        });
})();