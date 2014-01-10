describe('MinhaApp controllers', function() {
 
  describe('PessoaCtrl', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(function(){
      module('minhaApp');
    });

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('/umJson').
          respond({ nome: 'teste!', data: 'umaData', nascidoEm: {cidade: 'TestCity', estado: 'Hell'}});
      scope = $rootScope.$new();
      ctrl = $controller('PessoaCtrl', {
        $scope: scope
      });
    }));

    it('should do somehting', function () {
      expect(scope.pessoa_).toBeUndefined();
      $httpBackend.flush();
      expect(scope.pessoa_).toEqual({ nome: 'teste!', data: 'umaData', nascidoEm: {cidade: 'TestCity', estado: 'Hell'}});
    });
  });
});