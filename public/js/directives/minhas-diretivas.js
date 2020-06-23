angular.module('minhasDiretivas', ['meusServicos'])
.directive('meuPainel', function(){
    var ddo = {};
    
    ddo.restrict = "AE";

    ddo.scope = {
        titulo: '@' //poderia ser @informa-titulo por exemplo, mas daí no html seria assim <meu-painel informa-titulo="meutituloqualquer">...
    };

    ddo.transclude = true;

    ddo.templateUrl = 'js/directives/meu-painel.html'

    return ddo;
})
.directive('minhaFoto', function(){
    var ddo = {};

    ddo.restrict = 'AE';

    ddo.scope = {
        url: '@url', //quando os nomes não iguais pode deixar só o @, aque eu fiz assim pra exemplificar
        titulo: '@titulo'
    };

    ddo.template = '<img class="img-responsive center-block" ng-src="{{url}}" alt="{{titulo}}">'; //ng-src pode ser usado no lugar de src, e o console apontar algum erro nesse sentido

    return ddo;
})
.directive('meuBotaoPerigo', function(){
    var ddo = {};

    ddo.restrict = 'E';

    ddo.scope = {
        nome: '@',  //recebe uma string
        acao: '&'   //recebe uma função
                    //tem o '=' também, que pode ser usado com o $watch no lugar de $on para ver se um atributo muda de valor no controler
    }

    ddo.template = '<button ng-click="acao(foto)" class="btn btn-danger btn-block">{{nome}}<button>';

    return ddo;
})
.directive('meuFocus', function(){
    var ddo = {};

    ddo.restrict = 'A';

    ddo.link = function(scope, element){ //a ordem os parametros aqui importa, escrever como está aqui (scope, element)
        scope.$on('fotoCadastrada', function(){
            element[0].focus();
        });
    }

    return ddo;

    /*
    
        ddo.scope = {
            focado : '='
        };
    
        ddo.link = function(scope, element) {
            
            scope.$watch('focado', function() {
                alert('mudei');
            });
        };

        O $watch é mais inteligente ainda, podemos receber o valor atual e o valor antes da mudança como parâmetros:

        ddo.link = function(scope, element) {
            scope.$watch('focado', function(novoValor, valorAntigo) {
                alert('mudei');
            });
        };
    */
})
.directive('meusTitulos', function(){
    var ddo = {};

    ddo.restrict = 'E';
    
    ddo.template = '<ul><li ng-repeat="titulo in titulos">{{titulo}}</li></ul>';

    ddo.controller = function($scope, recursoFoto) {
        recursoFoto.query(function(fotos){
            $scope.titulos = fotos.map(function(foto){
                return foto.titulo;
            });
        });
    };

    return ddo;
});