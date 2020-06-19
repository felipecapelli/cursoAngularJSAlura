angular.module('alurapic').controller('FotosController', function($scope, $http){
    $scope.fotos = [];
    $scope.filtro = '';

    $http.get('v1/fotos')
        .success(function(fotos){//pode usar o .then aqui tbm se quiser
            $scope.fotos = fotos;
        })
        .catch(function(erro){
            console.log(erro);
        });

    /*var promise = $http.get('v1/fotos');
    promise.then(function(retorno){
        $scope.fotos = retorno.data;
    }).catch(function(error){
        console.log(error);
    });*/

    $scope.remover = function(foto){
        $http.delete('v1/fotos/' + foto._id)
        .success(function(){
            var indiceFoto = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(indiceFoto, 1);
            $scope.mensagem = 'Foto ' + foto.titulo + ' foi removida com sucesso';
        })
        .error(function(erro){
            console.log(erro);
            $scope.mensagem = 'Não foi possível remover a foto' + foto.titulo;
        })
    };

});