var minhaApp = angular.module('minhaApp', []);
 
minhaApp.controller('PessoaCtrl', function ($scope, $http) {
  $http.get('/umJson').success(function(data){
    $scope.pessoa_ = data;
    $scope.pessoas_ = [data, {nome: 'outraPessoa'}];
  });
});