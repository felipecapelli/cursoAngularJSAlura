angular.module('alurapic').controller('FotoController', function($scope, $http, $routeParams, recursoFoto){
    $scope.foto = {};
    $scope.mensagem = '';
    
    if($routeParams.fotoId){

        recursoFoto.get({fotoId: $routeParams.fotoId}, function(foto){
            $scope.foto = foto;
        }, function(erro){
            console.log(erro);
            $scope.mensagem = 'Não foi possível obter a foto de ID ' + $routeParams.fotoId;
        });
        
    }

    $scope.submeter = function(){
        if($scope.formulario.$valid){
            if($scope.foto._id){
                recursoFoto.update({fotoId: $scope.foto._id}, $scope.foto, function(){
                    $scope.mensagem = 'A foto ' + $scope.foto.titulo + ' foi alterada com sucesso';
                }, function(){
                    $scope.mensagem = 'Não foi Possível alterar a foto '+ $scope.foto.titulo;
                });
            }else{
                recursoFoto.save($scope.foto, function(){
                    $scope.foto = {};
                    $scope.mensagem = 'Foto Cadastrada com sucesso';
                    //console.log($scope.formulario.titulo.$name);//se quiser também pode acessar o item do formulario pelo name, sem precisar usar o data binding com ng-model
                }, function(erro){
                    $scope.mensagem = 'Não foi possível incluir a foto';
                    console.log(erro);
                });
            }
            $scope.formulario.$setPristine();//impede que a validação do formulario seja disparada depois de salvar
        }
    }
});