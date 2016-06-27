angular.module("iSaveApp").controller("indexCtrl", ["$scope", "$mdDialog", "$mdMedia", "Notification", function ($scope, $mdDialog, $mdMedia, Notification) {
    $scope.colors = {
        'nao_classificado': "#03A9F4",
        'moderado': "#FFC107",
        'alto': "#FF5722",
        'muito_alto': "#B71C1C"
    };

    $scope.data = {
        cb_nao_classificado: true,
        cb_moderado: true,
        cb_alto: true,
        cb_muito_alto: true,
        cb_inplace: true,
        cb_notinplace: true,
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
            date: "2016-06-26",
            inplace: true,
            photo: "http://s.glbimg.com/jo/g1/f/original/2011/12/21/vilaisabel.jpg",
            highlight: false
        },
        {
            id: 4,
            level: "moderado",
            latlong: [-22.016813, -47.912140],
            title: "Alagamento perto do shopping",
            description: "A Av Francisco Pereira Lopes está alagada na altura do cristo, não dá pra passar agora",
            type: "inundacao",
            date: "2016-06-26",
            inplace: false,
            photo: "http://www.afolha.com.br/files/image/photo/153/noticia_f54c353f9d2c4ded52200f028d6b011e.jpg",
            highlight: false
        },
        {
            id: 5,
            level: "alto",
            latlong: [-21.993409, -47.918425],
            title: "Buraco na pista aumentando",
            description: "A chuva abriu um buraco na Miguel Petroni e ele parece estar aumentando '-'",
            type: "deslizamento",
            date: "2016-06-25",
            inplace: true,
            photo: "http://tasabendo.com.br/wp-content/uploads/2015/07/buraco-na-pista.jpg",
            highlight: false
        },
        {
            id: 6,
            level: "moderado",
            latlong: [-22.004391, -47.890703],
            title: "Deslizamento na av trab são-carlense",
            description: "Teve um deslizamento de terra na trabalhador são-carlense, precisa dar a volta pela episcopal",
            type: "deslizamento",
            date: "2016-06-24",
            inplace: false,
            photo: "http://midia.gruposinos.com.br/_midias/jpg/2015/07/15/20150715092601-919576.jpg",
            highlight: false
        },
        {
            id: 7,
            level: "muito_alto",
            latlong: [-22.018944, -47.889824],
            title: "Terreno vazio em chamas",
            description: "Alguém jogou entulho em um terreno perto de casa e colocou fogo, e esse fogo está se espalhando. Muito. To com medo...",
            type: "incendio",
            date: "2016-06-24",
            inplace: true,
            photo: "http://s2.glbimg.com/g_8-OgqqeQfPWW7ZdclDci6w7Xs=/620x465/s.glbimg.com/jo/g1/f/original/2015/04/14/fogo2_1.png",
            highlight: false
        },
        {
            id: 8,
            level: "alto",
            latlong: [-22.021288, -47.884651],
            title: "Pista cedeu",
            description: "A pista cedeu neste ponto e um carro caiu no buraco",
            type: "incendio",
            date: "2016-06-23",
            inplace: true,
            photo: "http://www.alagoas24horas.com.br/wp-content/uploads/2009/01/dceaeac9bbda4fb39cd57ef115020ca7_segunda.jpg",
            highlight: false
        },
        {
            id: 9,
            level: "muito_alto",
            latlong: [-22.024618, -47.917510],
            title: "ALAGOU TUDO",
            description: "GENTE A ÁGUA TÁ LEVANDO TUDO AJUDA AQUI RÁPIDO",
            type: "inundacao",
            date: "2016-06-22",
            inplace: true,
            photo: "http://imgsapp.diariodepernambuco.com.br/app/noticia_127983242361/2015/06/30/583864/20150630094830937031u.jpg",
            highlight: false
        },
        {
            id: 10,
            level: "alto",
            latlong: [-22.034961, -47.899421],
            title: "Dois ônibus se chocaram",
            description: "Dois ônibus se chocaram e os bombeiros fecharam a pista pois há risco de explosão",
            type: "outros",
            date: "2016-06-21",
            inplace: true,
            photo: "http://portalplantaopolicial.com.br/system/timeposts/covers/000/000/016/thumb/unnamed_%2812%29.jpg?1410499146",
            highlight: false
        },
        {
            id: 11,
            level: "moderado",
            latlong: [-22.016739, -47.906350],
            title: "Está alagado na frente do SESC",
            description: "A Av. Comendador Alfredo Maffei alagou na altura do SESC, precisa dar a volta por trás do SESC",
            type: "inundacao",
            date: "2016-06-21",
            inplace: true,
            photo: "http://og.infg.com.br/in/2999930-cc3-f29/FT1500A/550/Eu-Reporter-pista-alagada-na-Estrada-do-Rio-Morto-Foto-do-leitor-Marcos-Jose-dos-Santos.jpg",
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