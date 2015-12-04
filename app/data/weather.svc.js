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
                var url = "http://api.openweathermap.org/data/2.5/find?q="+location+"&appid=2de143494c0b295cca9337e1e96b00e0";
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
                var url = "http://api.openweathermap.org/data/2.5/weather?id="+id+"&appid=2de143494c0b295cca9337e1e96b00e0";
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
                var url = "http://api.openweathermap.org/data/2.5/forecast/daily?id=" + id+"&appid=2de143494c0b295cca9337e1e96b00e0";
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