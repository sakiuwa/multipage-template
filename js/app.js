// Create app
var myApp = angular.module('myApp', ['ui.router'])
// Configure app
myApp.config(function($stateProvider) {
// Configure states for "home", "content" and "about"
    $stateProvider.state('home', {
        url:'/',
        templateUrl: 'templates/home.html',
        controller: 'HomeController',
    })
    .state('about', {
        url:'/about',
        templateUrl: 'templates/about.html',
        controller: 'AboutController',
    })
    .state('content', {
        url:'/content',
        templateUrl: 'templates/content.html',
        controller: 'ContentController',
    })
});
myApp.controller('HomeController', function($scope){
    $scope.number = 0;
})
.controller('AboutController', function($scope){
    $scope.about = "Good morning sleepy heads";
})
.controller('ContentController', function($scope){
    $scope.url = "http://cdn.m3q.jp/upload/2014/11/7/l_2014-11-7_7b890881d49a84e9eeec801aacc3716a.jpg";
})
