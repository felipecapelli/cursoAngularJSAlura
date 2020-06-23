angular.module('alurapic').controller('FotoController', function($scope, $routeParams, recursoFoto, cadastroDeFotos ){
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
            cadastroDeFotos.cadastrar($scope.foto)
            .then(function(dados){
                $scope.mensagem = dados.mensagem; //console.log($scope.formulario.titulo.$name);//se quiser também pode acessar o item do formulario pelo name, sem precisar usar o data binding com ng-model
                
                if(dados.inclusao) $scope.foto = {}
                
                $scope.formulario.$setPristine();//impede que a validação do formulario seja disparada depois de salvar
            })
            .catch(function(){
                $scope.mensagem = dados.mensagem;
            });            
        }
    }
});