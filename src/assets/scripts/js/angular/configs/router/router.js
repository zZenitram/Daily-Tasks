app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'pages/home/home.html',
            controller: 'controller.home'
        })

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});