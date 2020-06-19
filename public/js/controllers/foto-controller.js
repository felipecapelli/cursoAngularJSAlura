angular.module('alurapic').controller('FotoController', function($scope, $http){
    $scope.foto = {};

    $scope.submeter = function(){
        if($scope.formulario.$valid){
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
});