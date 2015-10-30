app.config(function ($routeProvider) {
 $routeProvider
   .when('/user', {
     templateUrl: 'pages/user.html',
     controller:'shipsController',

   })
    .when('/', {
     templateUrl: 'pages/home.html',
     controller:'shipsController',

   })
   .otherwise({redirectTo: '/home'});
});
