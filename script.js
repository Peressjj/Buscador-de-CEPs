console.log("script.js conectado!")

let cepInserida

async function buscarCep(cep) {
   const url = `https://viacep.com.br/ws/${cep}/json/`
   const resposta = await fetch(url);
   const dados = await resposta.json()

   return dados
}

const dados = await buscarCep(cepInserida)
console.log(dados);

const informacoes = {
   cep: undefined,
   logradouro: undefined,
   complemento: undefined,
   bairro: undefined,
   cidade: undefined,
   uf: undefined,
   estado: undefined,
   ibge: undefined,
   ddd: undefined,
   siafi: undefined
}