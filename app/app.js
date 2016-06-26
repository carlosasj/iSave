angular.module("iSaveApp", [
    "ngMaterial",
    "ngRoute",
    "ngAnimate",
    "GoogleMapsNative",
    "ui-notification"
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

    $mdThemingProvider.theme('nao_classificado')
        .primaryPalette('light-blue', {
                'default': '800',
                'hue-1': '200',
                'hue-2': '700',
                'hue-3': 'A200'
            }
        )
        .accentPalette('amber');

    $mdThemingProvider.theme('moderado').primaryPalette('amber', {'default': '500'});
    $mdThemingProvider.theme('alto').primaryPalette('deep-orange', {'default': '500'});
    $mdThemingProvider.theme('muito_alto').primaryPalette('red', {'default': '900'});

}]).run(['$rootScope', function($rootScope) {
    // console.log("RUN!");
}]);