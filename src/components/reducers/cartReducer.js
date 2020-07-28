import { connect } from 'react-redux'
import Item1 from '../../images/sylveon.png'
import Item2 from '../../images/clefable.png'
import Item1S from '../../images/sylveonshiny.png'
import Item2S from '../../images/clefableshiny.png'
import { ADICIONAR_PARA_CARRINHO,REMOVER_ITEM,SUB_QUANTIDADE,ADD_QUANTIDADE, ALTERNA_COMPRA } from '../actions/action-types/cart-actions'

const initState = {
    itensNoCarrinho:[],
    total: 0,
    compraFinalizada : false,

}

//Componentes de controle do carrinho
const cartReducer= (state = initState,action)=>{
   
    //adiciona produto no carrinho e ajusta quantidade e preço
    if(action.type === ADICIONAR_PARA_CARRINHO){
         let itemExistente= state.itensNoCarrinho.find(item=> action.id === item.id)
         if(itemExistente)
         {
            itemExistente.quantidade += 1 
             return{
                    ...state,
                    itensNoCarrinho: [...state.itensNoCarrinho],
                    total: state.total + itemExistente.id
                }
        }
         else{
             
            let novoItem = {id:action.id,quantidade:1}
            let novoTotal = state.total + novoItem.id 
            
            return{
                ...state,
                itensNoCarrinho: [...state.itensNoCarrinho, novoItem],
                total : novoTotal
            }
            
        }
    }
    //remove item do carrinho
    if(action.type === REMOVER_ITEM){
        let itemParaRemover= state.itensNoCarrinho.find(item=> action.id === item.id)
        let novosItens = state.itensNoCarrinho.filter(item=> action.id !== item.id)
        
        let novoTotal = state.total - (itemParaRemover.id * itemParaRemover.quantidade )
        console.log(itemParaRemover)
        return{
            ...state,
            itensNoCarrinho: novosItens,
            total: novoTotal
        }
    }

    //adiciona +1 a quantidade do item no carrinho
    if(action.type=== ADD_QUANTIDADE){
        let addedItem = state.itensNoCarrinho.find(item=> item.id === action.id)
          addedItem.quantidade += 1 
          let novoTotal = state.total + addedItem.id
          return{
              ...state,
              total: novoTotal
          }
    }
    //Remove em 1 a quantidade no carrinho e remove o item se necessário
    if(action.type=== SUB_QUANTIDADE){  
        let addedItem = state.itensNoCarrinho.find(item=> item.id === action.id) 
        if(addedItem.quantidade === 1){
            let novosItens = state.itensNoCarrinho.filter(item=>item.id !== action.id)
            let novoTotal = state.total - addedItem.id
            return{
                ...state,
                itensNoCarrinho: novosItens,
                total: novoTotal
            }
        }
        else {
            addedItem.quantidade -= 1
            let novoTotal = state.total - addedItem.id
            return{
                ...state,
                total: novoTotal
            }
        }
        
    }
    
    //ele alterna entre estado de compra finalizada ou não. Isso serve para limpar o carrinho e mostrar um Modal de finalização.
    if(action.type=== ALTERNA_COMPRA){  
        console.log(state.compraFinalizada)
        return{
            ...state,
            itensNoCarrinho : [],
            compraFinalizada : !state.compraFinalizada
        }
        
    }
    return state
}

export default cartReducer