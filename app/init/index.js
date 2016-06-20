angular.module("iSaveApp").controller("indexCtrl", ["$scope", "$mdDialog", "$mdMedia", function ($scope, $mdDialog, $mdMedia) {
    $scope.alerts = [
        {id: 1, title: "Título ou nome do usuário", text: "Aqui vai o texto ou comentário da pessoa, ou mesmo um resumo do formulário que a pessoa preencheu. A imagem na lateral pode ser algum indicativo do nível de alerta usando cores (Até porque não faz muito sentido colocar a foto do usuário, e colocar uma miniatura do mapa é meio inviável para o protótipo). Se quiserem, dá pra colocar uma cor no background dado o nível de alerta."},
        {id: 2, title: "Título2 ou nome do usuário2", text: "Aqui vai o texto ou comentário da pessoa, ou mesmo um resumo do formulário que a pessoa preencheu. A imagem na lateral pode ser algum indicativo do nível de alerta usando cores (Até porque não faz muito sentido colocar a foto do usuário, e colocar uma miniatura do mapa é meio inviável para o protótipo). Se quiserem, dá pra colocar uma cor no background dado o nível de alerta."},
    ];

    $scope.asd = "TeStE!";

    function DialogPseudoController($scope, $mdDialog, item, bla) {
        $scope.item = item;
        $scope.bla = bla;
        $scope.hide = function() {
            $mdDialog.hide();
        };
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
        $scope.updated = function(attr) {
            $mdDialog.hide(attr);
        };
    }

    $scope.showAdvanced = function(ev, id) {
        console.log({"ev": ev, "id": id});
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
        $mdDialog.show({
            controller: DialogPseudoController,
            templateUrl: 'init/views/dialog.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            // fullscreen: useFullScreen,
            locals: {
                item: find_by_id($scope.alerts, id),
                bla: "bla bla"
            }
        })
        .then(function(attr) {
            // Atualiza usando o attr pra alguma coisa;
        }, function() {
            // Atualiza
        });

        $scope.$watch(function() {
            return $mdMedia('xs') || $mdMedia('sm');
        }, function(wantsFullScreen) {
            $scope.customFullscreen = (wantsFullScreen === true);
        });
    };

}]);