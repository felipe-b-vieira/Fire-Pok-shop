import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem,addQuantity,subtractQuantity} from './actions/cartActions'
import { AiFillPlusCircle,AiFillMinusCircle } from 'react-icons/ai';
class Cart extends Component{

    //to remove the item completely
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }
    render(){
         
      let tituloCarrinho= this.props.items.length ?
            (  
              <thead>
                <tr class="h-12">
                  <th class="text-left font-sans my-4 text-4xl font-semibold dark:text-gray-400">Carrinho</th>
                </tr>
                <tr class="h-12 uppercase font-sans">
                  <th class="hidden md:table-cell"></th>
                  <th class="text-center font-sans">Nome</th>
                  <th class="text-center pl-5 lg:pl-0">
                    <span class="lg:hidden" title="Quantidade">Qtd</span>
                    <span class="hidden lg:inline">Quantidade</span>
                  </th>
                  <th class="hidden text-center md:table-cell">Preço unitário</th>
                  <th class="text-center">Preço total</th>
                </tr>
              </thead>
            ):
            (
              <thead>
                <tr class="h-12">
                    <th class=" pb-12 text-left font-sans my-4 text-4xl font-semibold dark:text-gray-400">Carrinho Vazio</th>
                </tr>
                <tr>
                    <button class="px-3 transition ease-in duration-100 uppercase rounded-full hover:bg-pink-700 hover:border-pink-700 hover:text-white border-2 border-gray-900 focus:outline-none font-sans"><a href="./">Voltar ao catálogo</a></button>
                </tr>
             </thead>
            )



      let finalizarCompra= this.props.items.length ?
            (  
              <div>
                <div class="p-2 flex bg-pink-300 cursor-pointer border-b border-gray-100 px-12"  >
                        <div class="flex-auto text-sm w-32">
                            <div class="font-bold text-xl">Total</div>
                        </div>
                        <div class="flex flex-col w-18 font-bold text-2xl items-end">
                          {this.props.total}</div>
                    </div>
                <div class="bg-pink-200 p-4 justify-center flex">
                    <button class="text-base  undefined  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                    hover:bg-pink-700 hover:text-teal-100 
                    bg-pink-100 
                    text-pink-700 
                    border duration-200 ease-in-out 
                    border-pink-600 transition">Finalizar compra</button>
                </div>
              </div>
            ):
            (
              <div class="bg-pink-200 p-4 justify-center flex">
                  <button class="text-base flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                  bg-gray-100 
                  text-gray-500 
                  border duration-200 ease-in-out 
                  border-gray-500 transition">Finalizar compra</button>
              </div> 
            )



        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                  let pokeatual = this.props.pokefadas.filter(v => v.id===item.id)[0];
                    return(
                          <tr>
                            <td class="w-10 pl-10">
                              <a href="#" >
                                <img src={pokeatual.sprites.front_default} class="w-20 rounded" alt="Thumbnail"></img>
                              </a>
                            </td>
                            <td>
                              <a href="#" class="text-center">
                                <p class="capitalize">{pokeatual.name}</p>
                                <form action="" method="POST">
                                  <button onClick={()=>{this.handleRemove(item.id)}} type="submit" class="text-gray-700 ">
                                    <small >(Remover item)</small>
                                  </button>
                                </form>
                              </a>
                            </td>
                            <td class="justify-center md:flex mt-6">
                                <div class=" justify-center font-sans text-xl text-center">
                                  <AiFillPlusCircle onClick={()=>{this.handleAddQuantity(item.id)}} class=" inline"></AiFillPlusCircle>
                                  <div class="px-3 inline">{item.quantidade}</div>
                                  <AiFillMinusCircle onClick={()=>{this.handleSubtractQuantity(item.id)}} class=" inline"></AiFillMinusCircle>
                                </div>
                            </td>
                            <td class="text-center">
                              <span class="font-sans text-xl ">
                                {item.id}
                              </span>
                            </td>
                            <td class="text-center">
                              <span class="font-sans text-xl ">
                                {item.id * item.quantidade}
                              </span>
                            </td>
                          </tr> 
                    )
                })
            ):
            (
              <div></div>
            )
             
        let addedItemsResumo = this.props.items.length ?
        (  
          this.props.items.map(item=>{
                return(
                  <div>
                    <div class="p-2 flex bg-pink-200 cursor-pointer border-b border-gray-100 px-12"  >
                        <div class="flex-auto text-sm w-32">
                            <div class="font-bold">{item.quantidade} produtos</div>
                        </div>
                        <div class="flex flex-col w-18 font-medium items-end">
                          R$ {item.quantidade*item.id}</div>
                    </div>
                    
                  </div>
                )
            })
        ):

         (
          <div class="px-2 py-10 flex bg-pink-200 cursor-pointer border-b border-gray-100"  >
              <div class="flex-auto text-sm w-32">
                  <div class="font-bold text-gray-600 text-center">-Vazio-</div>
              </div>
          </div>
         )




       return(
            <div class="flex justify-center my-6">
                <div class="flex flex-col w-3/4 p-8 text-gray-800 bg-white shadow-lg pin-r pin-y mr-8 ml-12">
                    <div class="flex-1">
                        <table class="w-full text-sm lg:text-base" cellspacing="0">
                        {tituloCarrinho}
                        <tbody>{addedItems}</tbody>
                        </table>
                    </div> 
                </div>
                <div class="rounded-b border-t-0 z-10 w-1/4 mr-12">
                    <div class="shadow-xl w-full">
                        <div class="p-2 flex bg-pink-200 cursor-pointer border-b border-gray-100 rounded-t"  >
                            <div class="flex-auto text-sm w-32">
                                <div class="font-sans text-2xl text-center text-gray-900 font-bold">Resumo do carrinho</div>
                            </div>
                        </div>
                        {addedItemsResumo}
                        {finalizarCompra}
                    </div>
                 </div>
        </div> 
            
       )
    }
}
const mapStateToProps = (state)=>{
    return{
        items: state.cartReducer.addedItems,
        total: state.cartReducer.total,
        pokefadas: state.pokeReducer.pokefadas,
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)