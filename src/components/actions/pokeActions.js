export const LOAD = "LOAD";

export const updateState= ()=>{
    return{
        type: LOAD
    }
}
// export const LOADING = "LOADING";
// export const SUCCESS = "SUCCESS";
// export const FAILURE = "FAILURE";


// //função principal para recuperar todos os pokemons tipo fada e suas urls
// function fetchFairyType(){
//     const url = "https://pokeapi.co/api/v2/type/18";
//     fetch(url)
//     .then(response => response.json())
//     .then(data =>{
//         return gerapoke(data.pokemon);
//     })
//     return 
// }
// //função para realmente pegar as informações dos pokemons do tipo fada
// function gerapoke (pokefadasurls) {

//     //usa promises para pegar tudo e depois atualizar
//     const promises = [];
//     pokefadasurls.map(pokeatual => {
//         promises.push(fetch(pokeatual.pokemon.url).then(response => response.json()));
//     })
//     // depois de tudo ser feito, salva as informações e gera o catálogo
//     Promise.all(promises).then((responses) => {
//         return responses
//     })

// }

// export const getPokes = () => dispatch => {
//     dispatch({ type: LOADING })
//     fetchFairyType()
//     .then(res => dispatch({ type: SUCCESS, payload: res}))
//     .catch(err => dispatch({ type: FAILURE, payload: err}))
// }
