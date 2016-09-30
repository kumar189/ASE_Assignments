angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('login', {
    url: '/page2',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('general_API', {
    url: '/page4',
    templateUrl: 'templates/general_API.html',
    controller: 'general_APICtrl'
  })

  .state('signup', {
    url: '/page5',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('user_created_success', {
    url: '/page6',
    templateUrl: 'templates/user_created_success.html',
    controller: 'user_created_successCtrl'
  })

  .state('web_Service', {
    url: '/page7',
    templateUrl: 'templates/web_Service.html',
    controller: 'web_ServiceCtrl'
  })

  .state('home', {
    url: '/page8',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

$urlRouterProvider.otherwise('/page2')

  

});