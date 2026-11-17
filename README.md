<p align="center">
  <img src="./assets/banner.png" alt="Banner do Buscador de CEPs" width="100%">
</p>


# Buscador de CEPs:
Projeto simples que consulta um CEP digitado pelo usuário e mostra o endereço correspondente, usando uma API pública.


## Funcionalidades:
- Busca de endereço a partir de um CEP
- Exibição de logradouro, bairro, cidade e estado
- Tratamento de CEP inválido ou não encontrado


## Tecnologias:
- HTML
- CSS
- JavaScript
- [API ViaCEP](https://viacep.com.br/)


## Como funciona:
O usuário digita o CEP e o JavaScript faz uma requisição (`fetch`) para a API, que devolve os dados do endereço em formato JSON. Esses dados são exibidos na tela.

```
https://viacep.com.br/ws/{CEP}/json/
```


## Como executar:
1. Clone o repositório:
   ```bash
   git clone https://github.com/Peressjj/Buscador-de-CEPs.git
   ```
2. Entre na pasta do projeto:
   ```bash
   cd Buscador-de-CEPs
   ```
3. Abra o arquivo `index.html` no navegador (ou use a extensão Live Server do VS Code).


## Autor:

Feito por [Peressjj](https://github.com/Peressjj)