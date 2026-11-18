console.log("script.js conectado!")

const input = document.getElementById("input_bar")
const botao = document.querySelector(".search_button")
const resultadoAtual = document.getElementById("resultado_atual")
const historicoDiv = document.getElementById("historico")

async function buscarCep(cep) {
   const url = `https://viacep.com.br/ws/${cep}/json/`
   const resposta = await fetch(url)
   const dados = await resposta.json()
   return dados
}

function mostrarResultado(dados, destino) {
   const resultado = document.createElement("div")
   resultado.className = "resultado"
   resultado.innerHTML = `
      <ul>
         <li>CEP: ${dados.cep}</li>
         <li>Logradouro: ${dados.logradouro}</li>
         <li>Complemento: ${dados.complemento}</li>
         <li>Bairro: ${dados.bairro}</li>
         <li>Cidade: ${dados.localidade}</li>
         <li>UF: ${dados.uf}</li>
         <li>Estado: ${dados.estado}</li>
         <li>IBGE: ${dados.ibge}</li>
         <li>DDD: ${dados.ddd}</li>
         <li>SIAFI: ${dados.siafi}</li>
      </ul>
   `
   destino.appendChild(resultado)
}

function carregarHistorico() {
   return JSON.parse(localStorage.getItem("historico")) || []
}

function salvarNoHistorico(dados) {
   const historico = carregarHistorico()
   historico.push(dados)
   localStorage.setItem("historico", JSON.stringify(historico))
}

function mostrarHistorico() {
   const historico = carregarHistorico()
   historicoDiv.innerHTML = ""

   if (historico.length === 0) {
      historicoDiv.textContent = "Nenhuma busca ainda."
      return
   }

   historico.reverse()
   historico.forEach((dados) => mostrarResultado(dados, historicoDiv))
}

botao.addEventListener("click", async () => {
   const cep = input.value.replace(/\D/g, "")

   if (cep.length !== 8) {
      resultadoAtual.textContent = "Digite um CEP com 8 números."
      return
   }

   try {
      const dados = await buscarCep(cep)

      if (dados.erro) {
         resultadoAtual.textContent = "CEP não encontrado."
         return
      }

      resultadoAtual.innerHTML = ""
      mostrarResultado(dados, resultadoAtual)

      salvarNoHistorico(dados)
      mostrarHistorico()
   } catch (erro) {
      resultadoAtual.textContent = "Erro ao buscar. Verifique sua conexão."
   }
})
