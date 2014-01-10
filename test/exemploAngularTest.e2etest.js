describe('MyApp', function() {
  
  beforeEach(function() {
    browser.get('http://localhost:3000/angular');
  });

  it('should filter results', function() {
    var repeater = by.repeater('umaPessoa in pessoas_');
    var primeiraIteracao = repeater.row(1);
    var bindingUmaPessoa = primeiraIteracao.column('umaPessoa');
    var elementoFinder = element(bindingUmaPessoa);
    var innerHtml = elementoFinder.getInnerHtml();
    innerHtml.then(function(a){
      expect(a).toEqual('iterando: {"nome":"outraPessoa"}');
    });
  });
});