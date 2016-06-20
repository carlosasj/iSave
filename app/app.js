angular.module("iSaveApp", [
    "ngMaterial",
    "ngRoute",
    "ngAnimate",
    "GoogleMapsNative"
]).config(["$mdThemingProvider", "$mdIconProvider", function($mdThemingProvider, $mdIconProvider){
    $mdThemingProvider.theme('default')
        .primaryPalette('light-blue', {
                'default': '800',
                'hue-1': '200',
                'hue-2': '700',
                'hue-3': 'A200'
            }
        )
        .accentPalette('amber');
}]).run(['$rootScope', function($rootScope) {
    // console.log("RUN!");
}]);