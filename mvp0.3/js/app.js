var app = angular.module('app',['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('home',{
      url:'/home',
      templateUrl:'paths/home.html'
    })
    .state('about',{
      url:'/about',
      templateUrl:'paths/about.html'
    })
    .state('contact',{
      url:'/contact',
      templateUrl:'paths/contact.html'
    })
    .state('projects',{
      url:'/projects',
      templateUrl:'paths/projects.html'
    })
})
.directive('name', function(){
  return {
    restrict:'E',
    link:function(scope,element,attribute){
      scope.fullName = attribute.first + " " + attribute.last
    },
    template:"<h1>{{fullName}}</h1>"
  }
})
.directive('another',function(){
  return {
    restrict: 'E',
    templateUrl: 'mathTemp.html',
    controller: function($scope){
      $scope.result = "";
      $scope.doMath = function(num1, num2){
        $scope.result = num1 * num2;
      }
    }
  }
})
