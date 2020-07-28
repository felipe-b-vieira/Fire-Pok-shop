import { connect } from 'react-redux'
import { LOAD } from '../actions/pokeActions'

const initState = {
    pokefadasurls: [],
    pokefadas: [],
    loading:true,

}


//função principal para recuperar todos os pokemons tipo fada e suas urls
function fetchFairyType(state){
    const url = "https://pokeapi.co/api/v2/type/10";
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        state.pokefadasurls = data.pokemon;
        return gerapoke(state);
    })
    return(state)
}
//função para realmente pegar as informações dos pokemons do tipo fada
function gerapoke (state) {

    //usa promises para pegar tudo e depois atualizar
    const promises = [];
    state.pokefadasurls.map(pokeatual => {
        promises.push(fetch(pokeatual.pokemon.url).then(response => response.json()));
    })
    // depois de tudo ser feito, salva as informações e gera o catálogo
    Promise.all(promises).then((responses) => {
        state.pokefadas = responses
        state.loading = false
        return state
    })

}

//o action serve só para avisar que teve mudança e verificar o loading para saber se ainda está carregando ou não
const pokeReducer= (state = initState,action)=>{
    if(action.type===LOAD){
      return{
        ...state,
        loading : state.loading
      }
    }
    return fetchFairyType(state);
}

export default pokeReducer