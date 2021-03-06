(function(){
    'use strict';

    angular
        .module('reading-ninja.components')
        .service('homeService', homeService);

    function homeService($q, $http){
        var self = this;
        var apiKey = '6042153d3d8a41f08706b599e117da85';

        self.getArticles = function(params) {
            var deferred = $q.defer();
            var request;

            params['api-key'] = apiKey;
            request = {
                url: 'https://api.nytimes.com/svc/search/v2/articlesearch.json',
                method: 'GET',
                params: params
            };

            $http(request)
                .success(function (result) {
                    deferred.resolve(result);
                })
                .error(function(error) {
                    deferred.reject(error);
                });

            return deferred.promise;
        };

        self.getArticleOfTheDay = function() {
            var deferred = $q.defer();
            var request;

            var params = {};
            params['api-key'] = apiKey;
            request = {
                url: 'http://api.nytimes.com/svc/mostpopular/v2/mostviewed/movies,fashion/30.json',
                method: 'GET',
                params: params
            };

            $http(request)
                .success(function (result) {
                    deferred.resolve(result);
                })
                .error(function(error) {
                    deferred.reject(error);
                });

            return deferred.promise;
        };

        self.getArticlesMostPopular = function(categories) {
            var deferred = $q.defer();
            var request;

            var params = {};
            params['api-key'] = apiKey;
            request = {
                url: 'http://api.nytimes.com/svc/mostpopular/v2/mostviewed/' + categories + '/30.json',
                method: 'GET',
                params: params
            };

            $http(request)
                .success(function (result) {
                    deferred.resolve(result);
                })
                .error(function(error) {
                    deferred.reject(error);
                });

            return deferred.promise;
        };
        

        return self;

    }

})();