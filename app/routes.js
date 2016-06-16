angular.module("iSaveApp")
    .config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "index.html",
                controller: "indexCtrl"
            })
            // .when("/contacts/", {
            //     redirectTo: "/"
            // })
            // .when("/newAccount/", {
            //     templateUrl: "templates/pages/authenticate/newAccount.html",
            //     controller: "newAccountCtrl"
            // })
            // .when("/expanded/", {
            //     templateUrl: "templates/pages/contacts/expanded.html",
            //     controller: "contactsCtrl"
            // })
            // .when("/contacts/new/", {
            //     templateUrl: "templates/pages/contacts/edit.html",
            //     controller: 'contactsNewCtrl'
            // })
            // .when("/contacts/:id/", {
            //     templateUrl: "templates/pages/contacts/details.html",
            //     controller: 'contactsDetailsCtrl'
            // })
            // .when("/contacts/:id/edit/", {
            //     templateUrl: "templates/pages/contacts/edit.html",
            //     controller: 'contactsEditCtrl'
            // })
            // .when("/groups/", {
            //     templateUrl: "templates/pages/groups/index.html",
            //     controller: "groupsCtrl"
            // })
            // .when("/groups/new/", {
            //     templateUrl: "templates/pages/groups/edit.html",
            //     controller: "groupsNewCtrl"
            // })
            // .when("/groups/:id/", {
            //     templateUrl: "templates/pages/groups/details.html",
            //     controller: "groupsDetailsCtrl"
            // })
            // .when("/groups/:id/edit/", {
            //     templateUrl: "templates/pages/groups/edit.html",
            //     controller: 'groupsEditCtrl'
            // })
            // .when("/login/", {
            //     templateUrl: "templates/pages/authenticate/login.html",
            //     controller: "loginController"
            // })
            // .when("/logout/", {
            //     templateUrl: "templates/pages/authenticate/login.html",
            //     controller: "logoutController"
            // })
            // .when("/welcome", {
            //     templateUrl: "templates/pages/authenticate/social_auth.html",
            //     controller: "socialAuthCtrl"
            // })
            // .when("/activate", {
            //     templateUrl: "templates/pages/contacts/index.html",
            //     controller: "activateCtrl"
            // })
            .otherwise({
                redirectTo: "/"
            });

        $locationProvider.html5Mode(true);
    }]);
