angular.module('meusServicos', ['ngResource'])
.factory('recursoFoto', function($resource){
    return $resource('v1/fotos/:fotoId', null,{                 //esse null seria se eu quisesse passar parametros da maneira antiga: http://endereco.com?atributo=valor
        update: {                                               //aqui foi chamado de update, mas pode dar o nome que quiser
            method: 'PUT'
        }
    })
})
.factory('cadastroDeFotos',['recursoFoto', '$q', '$rootScope', function(recursoFoto, $q, $rootScope){
    var servico = {};

    var evento = 'fotoCadastrada';

    servico.cadastrar = function(foto){
        return $q(function(resolve, reject){
            if(foto._id){ //------------------------------------ Se tem id é porque é uma alteração
                recursoFoto.update({fotoId : foto._id}, foto, function(){
                    $rootScope.$broadcast(evento);
                    resolve({
                        mensagem : 'Foto ' + foto.titulo + ' atualizada com sucesso!',
                        inclusao : false
                    });
                },function(erro){
                    console.log(erro);
                    reject({
                        mensagem: 'Não foi possível alterar a foto ' + foto.titulo
                    });
                });
            }else{
                recursoFoto.save(foto, function(){
                    $rootScope.$broadcast(evento);
                    resolve({
                        mensagem : 'Foto ' + foto.titulo + ' incluída com sucesso!',
                        inclusao : true
                    });
                }, function(erro){
                    console.log(erro);
                    reject({
                        mensagem: 'Não foi possível incluir a foto ' + foto.titulo
                    });
                });
            }
        });
    };

    return servico;
}]);