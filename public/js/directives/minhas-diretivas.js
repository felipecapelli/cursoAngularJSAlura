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