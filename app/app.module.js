(function(){
    var name ="weatherApp",
        requires = [
            "app.shell",
            "app.search",
            "app.weather",
            "app.component",
            "app.data",
            "app.forecast"
        ];
    // Initial route update doesn't happen if ngView in a template loaded by ngInclude
    // https://github.com/angular/angular.js/issues/1213
    angular.module(name, requires)
        .run(['$route',function($route){
            $route.reload();
        }]);

})();
