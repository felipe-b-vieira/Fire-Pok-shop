import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem,addQuantity,subtractQuantity} from './actions/cartActions'
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
              
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                      
                      <div class="flex justify-center my-6">
                <div class="flex flex-col w-3/4 p-8 text-gray-800 bg-white shadow-lg pin-r pin-y mr-8 ml-12">
                    
                          <div class="flex-1">
                            <table class="w-full table-auto text-sm lg:text-base" cellspacing="0">
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
                              <tbody>
                                <tr>
                                  <td class="w-10 pl-10">
                                    <a href="#" >
                                      <img src="https://limg.app/i/Calm-Cormorant-Catholic-Pinball-Blaster-yM4oub.jpeg" class="w-20 rounded" alt="Thumbnail"></img>
                                    </a>
                                  </td>
                                  <td>
                                    <a href="#" class="text-center">
                                      <p>Earphone</p>
                                      <form action="" method="POST">
                                        <button type="submit" class="text-gray-700 ">
                                          <small>(Remover item)</small>
                                        </button>
                                      </form>
                                    </a>
                                  </td>
                                  <td class="justify-center md:flex mt-6">
                                    <div class="w-20 h-10">
                                      <div class="relative flex flex-row w-full h-8">
                                      <input type="number" value="2" 
                                        class="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black" />
                                      </div>
                                    </div>
                                  </td>
                                  <td class="text-center">
                                    <span class="font-sans text-xl ">
                                      10.00€
                                    </span>
                                  </td>
                                  <td class="text-center">
                                    <span class="font-sans text-xl ">
                                      20.00€
                                    </span>
                                  </td>
                                </tr> 
                                
                              </tbody>
                            </table>
                          </div>
                </div>
                <div class="rounded-b border-t-0 z-10 w-1/4 mr-12">
                    <div class="shadow-xl w-full">

                    <div class="p-2 flex bg-pink-200 cursor-pointer border-b border-gray-100 rounded-t"  >
                            <div class="flex-auto text-sm w-32">
                                <div class="font-sans text-2xl text-center text-gray-900 font-bold">Carrinho</div>
                            </div>
                        </div>
                        <div class="p-2 flex bg-pink-200 cursor-pointer border-b border-gray-100 px-12"  >
                            <div class="flex-auto text-sm w-32">
                                <div class="font-bold">2 produtos</div>
                            </div>
                            <div class="flex flex-col w-18 font-medium items-end">
                                $12.22</div>
                        </div>
                        
                        <div class="p-2 flex bg-pink-300 cursor-pointer border-b border-gray-100 px-12"  >
                            <div class="flex-auto text-sm w-32">
                                <div class="font-bold text-xl">Total</div>
                            </div>
                            <div class="flex flex-col w-18 font-bold text-2xl items-end">
                                $12.22</div>
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
                 </div>
        </div>      
                    )
                })
            ):

             (
                <p>Nothing.</p>
             )
       return(
            <div class="flex justify-center my-6">
                <div class="flex flex-col w-3/4 p-8 text-gray-800 bg-white shadow-lg pin-r pin-y mr-8 ml-12">
                    <div class="flex-1">
                        <table class="w-full text-sm lg:text-base" cellspacing="0">
                        <thead>
                            <tr class="h-12">
                                <th class=" pb-12 text-left font-sans my-4 text-4xl font-semibold dark:text-gray-400">Carrinho Vazio</th>
                            </tr>
                            <tr>
                                <button class="px-3 transition ease-in duration-100 uppercase rounded-full hover:bg-pink-700 hover:border-pink-700 hover:text-white border-2 border-gray-900 focus:outline-none font-sans"><a href="./">Voltar ao catálogo</a></button>
                            </tr>
                        </thead>
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
                        <div class="px-2 py-10 flex bg-pink-200 cursor-pointer border-b border-gray-100"  >
                            <div class="flex-auto text-sm w-32">
                                <div class="font-bold text-gray-600 text-center">-Vazio-</div>
                            </div>
                        </div>
                        <div class="bg-pink-200 p-4 justify-center flex">
                            <button class="text-base flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                            bg-gray-100 
                            text-gray-500 
                            border duration-200 ease-in-out 
                            border-gray-500 transition">Finalizar compra</button>
                        </div> 
                    </div>
                 </div>
        </div> 
            
       )
    }
}
const mapStateToProps = (state)=>{
    return{
        items: state.addedItems
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