angular.module('alurapic').controller('FotoController', function($scope, $http, $routeParams){
    $scope.foto = {};

    if($routeParams.fotoId){
        $http.get('v1/fotos/'+ $routeParams.fotoId)
        .success(function(foto){
            $scope.foto = foto;
        })
        .error(function(erro){
            console.log(erro);
            $scope.mensagem = 'Não foi possível obter a foto de ID ' + $routeParams.fotoId;
        });
    }

    $scope.submeter = function(){
        if($scope.formulario.$valid){
            if($scope.foto._id){
                $http.put('v1/fotos/' + $scope.foto._id, $scope.foto)
                .success(function(){
                    $scope.mensagem = 'A foto ' + $scope.foto + ' foi alterada com sucesso';
                })
                .error(function(error){
                    console.log(error);
                    $scope.mensagem = 'Não foi Possível alterar a foto '+ $scope.foto.titulo;
                })
            }else{
                $http.post('v1/fotos', $scope.foto)
                .success(function(){
                    $scope.foto = {};
                    $scope.mensagem = 'Foto Cadastrada com sucesso';
                    //console.log($scope.formulario.titulo.$name);//se quiser também pode acessar o item do formulario pelo name, sem precisar usar o data binding com ng-model
                })
                .error(function(erro){
                    $scope.mensagem = 'Não foi possível incluir a foto';
                    console.log(erro);
                });
            }
        }
    }
});