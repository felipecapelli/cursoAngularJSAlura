angular.module('meusServicos', ['ngResource'])
.factory('recursoFoto', function($resource){
    return $resource('v1/fotos/:fotoId', null,{                 //esse null seria se eu quisesse passar parametros da maneira antiga: http://endereco.com?atributo=valor
        update: {                                               //aqui foi chamado de update, mas pode dar o nome que quiser
            method: 'PUT'
        }
    })
});