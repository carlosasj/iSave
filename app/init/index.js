angular.module("iSaveApp").controller("indexCtrl", ["$scope", "$mdDialog", "$mdMedia", "Notification", function ($scope, $mdDialog, $mdMedia, Notification) {
    $scope.colors = {
        'nao_classificado': "#03A9F4",
        'moderado': "#FFC107",
        'alto': "#FF5722",
        'muito_alto': "#B71C1C"
    };

    $scope.alerts = [
        {
            id: 1,
            level: "moderado",
            latlong: [-22.000378654576043, -47.89410384814454],
            title: "Pista interditada",
            description: "Houve um deslizamento nessa pista e o trânsito está horrível!",
            type: "deslizamento",
            date: "2016-06-27",
            inplace: true,
            photo: "http://g1.globo.com/Noticias/Brasil/foto/0,,15724247-EX,00.jpg",
            highlight: false
        },
        {
            id: 2,
            level: "alto",
            latlong: [-22.011276388956176, -47.88116645812988],
            title: "Destruiu a casa",
            description: "O barranco deslizou e destruiu uma parte da casa.",
            type: "deslizamento",
            date: "2016-06-27",
            inplace: true,
            photo: "http://portal.pmf.sc.gov.br/arquivos/imagens/18_01_2010_13_59_e6234913adde5d509213f340949e8dd9.jpg",
            highlight: false
        }
    ];

    $scope.highlight = function (id, state) {
        find_by_id($scope.alerts, id).highlight = state;
    };

    $scope.cot = function (original, changed, watch) {
        // COT = Change On True
        return (watch)? changed : original;
    };


    function DialogPseudoController($scope, $mdDialog, item, $father) {
        $scope.item = item;
        $scope.colors = $father.colors;
        $scope.levels = [
            {key: 'nao_classificado', value: 'Não classificado'},
            {key: 'moderado', value: 'Moderado'},
            {key: 'alto', value: 'Alto'},
            {key: 'muito_alto', value: 'Muito alto'}
        ];

        $scope.fields = [""];

        $scope.updateFields = function (id) {
            if($scope.fields[id]) {
                if (($scope.fields.length - 1) == id)
                    $scope.fields.push("");
            }
        };

        $scope.removeField = function (id) {
            if ($scope.fields[id])
                $scope.fields.splice(id, 1);
        };

        $scope.hide = function() {
            $mdDialog.hide();
        };
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
        $scope.ask_more = function() {
            Notification.success("Pedido de mais informações enviado com sucesso.");
            $mdDialog.hide();
        };
        $scope.alert_nearby = function() {
            Notification.success("Os usuários próximos foram alertados.");
            $mdDialog.hide();
        };
    }

    $scope.showAdvanced = function(ev, id) {
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
                $father: $scope
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