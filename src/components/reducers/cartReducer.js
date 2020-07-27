import { connect } from 'react-redux'
import Item1 from '../../images/sylveon.png'
import Item2 from '../../images/clefable.png'
import Item1S from '../../images/sylveonshiny.png'
import Item2S from '../../images/clefableshiny.png'
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY } from '../actions/action-types/cart-actions'

const initState = {
    addedItems:[],
    total: 0,

}

const cartReducer= (state = initState,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            existed_item.quantidade += 1 
             return{
                ...state,
                 total: state.total + existed_item.id
                  }
        }
         else{
             
            let addedItem = {id:action.id,quantidade:0}
            
            //calculating the total
            let newTotal = state.total + addedItem.id 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.id * itemToRemove.quantidade )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    // //INSIDE CART COMPONENT
    // if(action.type=== ADD_QUANTITY){
    //     let addedItem = state.items.find(item=> item.id === action.id)
    //       addedItem.quantity += 1 
    //       let newTotal = state.total + addedItem.price
    //       return{
    //           ...state,
    //           total: newTotal
    //       }
    // }
    // if(action.type=== SUB_QUANTITY){  
    //     let addedItem = state.items.find(item=> item.id === action.id) 
    //     //if the qt == 0 then it should be removed
    //     if(addedItem.quantity === 1){
    //         let new_items = state.addedItems.filter(item=>item.id !== action.id)
    //         let newTotal = state.total - addedItem.price
    //         return{
    //             ...state,
    //             addedItems: new_items,
    //             total: newTotal
    //         }
    //     }
    //     else {
    //         addedItem.quantity -= 1
    //         let newTotal = state.total - addedItem.price
    //         return{
    //             ...state,
    //             total: newTotal
    //         }
    //     }
        
    // }
    return state
}

export default cartReducer