const Service = require('./service');
const sinon = require('sinon')

const BASE_URL_1 = 'https://swapi.dev/api/planets/1/'
const BASE_URL_2 = 'https://swapi.dev/api/planets/2/'

const mocks = {
  tatooine: require('./mocks/tatooine.json'),
  alderaan: require('./mocks/alderaan.json')
}


;(async () => {

  /* {
    Sem usar stub, dessa forma batemos na API externa, isso pode gerar custos
    const service = new Service();
    const withoutStub = await service.makeRequest(BASE_URL_2)
    console.log(JSON.stringify(withoutStub))
  } */

  const service = new Service()
  const stub = sinon.stub(service, service.makeRequest.name)

  stub
    .withArgs(BASE_URL_1)
    .resolves(mocks.tatooine)
  stub
    .withArgs(BASE_URL_2)
    .resolves(mocks.alderaan)
})()

/* Cria uma pasta e joga o retorno da funcao no arquivo: "node service.test.js > mocks/tatooine.json" */