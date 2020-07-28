
import { ADICIONAR_PARA_CARRINHO,REMOVER_ITEM,SUB_QUANTIDADE,ADD_QUANTIDADE,ALTERNA_COMPRA} from './action-types/cart-actions'

//ação para adicionar ao carrinho
export const adicionaAoCarrinho= (id)=>{
    return{
        type: ADICIONAR_PARA_CARRINHO,
        id
    }
}
//ação de remover item
export const removeItem=(id)=>{
    return{
        type: REMOVER_ITEM,
        id
    }
}
//ação de subtrair quantidade de item
export const subtrairQuantidade=(id)=>{
    return{
        type: SUB_QUANTIDADE,
        id
    }
}
//ação de adição a quantidade de item
export const adicionarQuantidade=(id)=>{
    return{
        type: ADD_QUANTIDADE,
        id
    }
}
//ação de alternar entre compra finalizada ou não
export const alternaCompra=()=>{
    return{
        type: ALTERNA_COMPRA,
    }
}
