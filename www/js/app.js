// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.auth'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleLightContent();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            //signup first
            .state('login', {
                url: '/login',
                templateUrl: 'templates/loginSignup.html',
                controller: 'loginSignupCtrl'
            })

            // setup an abstract state for the tabs directive
            .state('tab', {
                url: "/tab",
                abstract: true,
                templateUrl: "templates/tabs.html"
            })

            // Each tab has its own nav history stack:

            .state('tab.dash', {
                url: '/dash',
                views: {
                    'tab-dash': {
                        templateUrl: 'templates/tab-dash.html',
                        controller: 'DashCtrl'
                    }
                }
            })

            .state('tab.stat', {
                url: '/stat',
                views: {
                    'tab-dash': {
                        templateUrl: 'templates/stat-page.html',
                        controller: 'StatCtrl'
                    }
                }
            })

            .state('tab.wiki', {
                url: '/wiki',
                views: {
                    'tab-wiki': {
                        templateUrl: 'templates/tab-wiki.html',
                        controller: 'WikiCtrl'
                    }
                }
            })

            .state('tab.wikipage', {
                url: '/wpage',
                views: {
                    'tab-wiki': {
                        templateUrl: 'templates/wiki-page.html',
                        controller: 'WikiPageCtrl'
                    }
                }
            })


            .state('tab.adddel', {
                url: '/adddel',
                views: {
                    'tab-adddel': {
                        templateUrl: 'templates/tab-adddel.html',
                        controller: 'AddDelCtrl'
                    }
                }
            })

            .state('tab.myapps', {
                url: '/myapps',
                views: {
                    'tab-adddel': {
                        templateUrl: 'templates/tab-myapps.html',
                        controller: 'MyAppsCtrl'
                    }
                }
            })

            .state('tab.settings', {
                url: '/settings',
                views: {
                    'tab-settings': {
                        templateUrl: 'templates/tab-settings.html',
                        controller: 'SettingsCtrl'
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        var loggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
        console.log(loggedIn);
        $urlRouterProvider.otherwise(loggedIn ? '/tab/dash' : '/login');
    });
