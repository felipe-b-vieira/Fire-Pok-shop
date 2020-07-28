## Fairy PokéShop

Projeto em ReactJs que busca ser uma loja de venda de Pokémon ligada a pokeapi(https://pokeapi.co/).

Versão 1.0 apresentando as seguintes funcionalidades:

    Catálogo de produtos
    Carrinho lateral
    Resumo do carrinho(Na página do carrinho)
    2 lojas com estilos e tipos diferentes de Pokémon(Essa é a do tipo fada)
    Botão de finalizar compra, reiniciando o processo de compra
    Modal de obrigado ao finalizar compra

O Header apresentado no site consta com uma barra de pesquisa mas não foi implementada.

## Detalhes da implementação

Em relação a implementação do catálogo, ele é feito todo de uma vez, o que pode ser alterado de maneira a carregar várias páginas. No entanto, isso pode ser diferente por causa de como a API é feita, passando a listagem de todos os pokémon de mesmo tipo. Mas como temos um limite não muito alto na quantidade recebida, não é tanto problema.

Em relação a aguardar a requisição API, é necessário uma espera para a toda informação ser carregada. Para isso foi feito um loop a cada segundo até as informações serem carregadas. Caso não tenha sido carregada em 10 segundos, significa que teve problema nas requisições API e cancela o loading. Poderia ser implementado de melhor maneira e avisar caso tenha algum problema.

##React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Para executar e começar o código, executar `npm start`
