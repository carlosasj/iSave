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
        },
        {
            id: 3,
            level: "muito_alto",
            latlong: [-22.002435, -47.88715],
            title: "Incêndio no meu prédio!!!",
            description: "Tem um incêndio no meu prédio, 3 apartamentos estão em chamas!!!",
            type: "incendio",
            date: "2016-06-23",
            inplace: true,
            photo: "http://s.glbimg.com/jo/g1/f/original/2011/12/21/vilaisabel.jpg",
            highlight: false
        },
        {
            id: 4,
            level: "moderado",
            latlong: [-22.016813, -47.912140],
            title: "Alagamento na Av Sãocarlense",
            description: "A Av Trabalhador Sãocarlense está alagada na altura do cristo, não dá pra passar agora",
            type: "inundacao",
            date: "2016-06-22",
            inplace: false,
            photo: "http://www.afolha.com.br/files/image/photo/153/noticia_f54c353f9d2c4ded52200f028d6b011e.jpg",
            highlight: false
        },
        {
            id: 5,
            level: "alto",
            latlong: [-22.016813, -47.912140],
            title: "Buraco na pista aumentando",
            description: "A chuva abriu um buraco na Miguel Petroni e ele parece estar aumentando",
            type: "deslizamento",
            date: "2016-06-22",
            inplace: true,
            photo: "http://tasabendo.com.br/wp-content/uploads/2015/07/buraco-na-pista.jpg",
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