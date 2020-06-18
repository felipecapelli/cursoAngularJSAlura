angular.module('minhasDiretivas', [])
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

//exercicio, não estou usando no projeto
.directive('minhaFoto', function(){
    var ddo = {};

    ddo.restrict = 'AE';

    ddo.scope = {
        url: '@url',
        titulo: '@titulo'
    };

    ddo.template = '<img class="img-responsive center-block" ng-src="{{url}}" alt="{{titulo}}">'; //ng-src pode ser usado no lugar de src, e o console apontar algum erro nesse sentido

    return ddo;
})