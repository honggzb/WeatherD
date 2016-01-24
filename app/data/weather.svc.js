(function () {
    angular.module("app.data")
        .factory("weatherSvc",function($http,$q,weatherImgUrl){

            return{
                find: findByLocation,
                getCurrent: getCurrentWeather,
                getForecast: getForecastData,
                getWeatherImgUrl: getWeatherImgUrl
            };

            function findByLocation(location){
                var url = "http://api.openweathermap.org/data/2.5/find?q="+location+"&appid=44db6a862fba0b067b1930da0d769e98";
                var defer = $q.defer();
                $http.get(url)
                    .success(function(res){
                        defer.resolve(res);
                    })
                    .error(function(err){
                        defer.reject(err);
                    });
                return defer.promise;
            }

            function getCurrentWeather(id){
                var url = "http://api.openweathermap.org/data/2.5/weather?id="+id+"&appid=44db6a862fba0b067b1930da0d769e98";
                var defer = $q.defer();
                $http.get(url)
                    .success(function(res){
                        defer.resolve(res);
                    })
                    .error(function(err){
                        defer.reject(err);
                    });
                return defer.promise;
            }

            function getForecastData(id) {
                var url = "http://api.openweathermap.org/data/2.5/forecast/daily?id=" + id+"&appid=44db6a862fba0b067b1930da0d769e98";
                var defer = $q.defer();
                $http.get(url)
                    .success(function(res){
                        defer.resolve(res);
                    })
                    .error(function(err){
                        defer.reject(err);
                    });
                return defer.promise;
            }

            function getWeatherImgUrl(imgStr){
                return weatherImgUrl+imgStr+".png";
            }
        });
})();
