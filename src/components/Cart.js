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
                        <div class="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
                          <div class="flex-1">
                            <table class="w-full text-sm lg:text-base" cellspacing="0">
                              <thead>
                                <tr class="h-12 uppercase">
                                  <th class="hidden md:table-cell"></th>
                                  <th class="text-left">Product</th>
                                  <th class="lg:text-right text-left pl-5 lg:pl-0">
                                    <span class="lg:hidden" title="Quantity">Qtd</span>
                                    <span class="hidden lg:inline">Quantity</span>
                                  </th>
                                  <th class="hidden text-right md:table-cell">Unit price</th>
                                  <th class="text-right">Total price</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td class="hidden pb-4 md:table-cell">
                                    <a href="#">
                                      <img src="https://limg.app/i/Calm-Cormorant-Catholic-Pinball-Blaster-yM4oub.jpeg" class="w-20 rounded" alt="Thumbnail"></img>
                                    </a>
                                  </td>
                                  <td>
                                    <a href="#">
                                      <p class="mb-2 md:ml-4">Earphone</p>
                                      <form action="" method="POST">
                                        <button type="submit" class="text-gray-700 md:ml-4">
                                          <small>(Remove item)</small>
                                        </button>
                                      </form>
                                    </a>
                                  </td>
                                  <td class="justify-center md:justify-end md:flex mt-6">
                                    <div class="w-20 h-10">
                                      <div class="relative flex flex-row w-full h-8">
                                      <input type="number" value="2" 
                                        class="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black" />
                                      </div>
                                    </div>
                                  </td>
                                  <td class="hidden text-right md:table-cell">
                                    <span class="text-sm lg:text-base font-medium">
                                      10.00€
                                    </span>
                                  </td>
                                  <td class="text-right">
                                    <span class="text-sm lg:text-base font-medium">
                                      20.00€
                                    </span>
                                  </td>
                                </tr> 
                                <tr>
                                  <td class="hidden pb-4 md:table-cell">
                                    <a href="#">
                                      <img src="https://limg.app/i/Cute-Constrictor-Super-Sexy-Military-Enforcer-W7mvBp.png" class="w-20 rounded" alt="Thumbnail" />
                                    </a>
                                  </td>
                                  <td>
                                    <p class="mb-2 md:ml-4">Tesla Model 3</p>
                                    <form action="" method="POST">
                                      <button type="submit" class="text-gray-700 md:ml-4">
                                        <small>(Remove item)</small>
                                      </button>
                                    </form>
                                  </td>
                                  <td class="justify-center md:justify-end md:flex md:mt-4">
                                  <div class="w-20 h-10">
                                    <div class="relative flex flex-row w-full h-8">
                                    <input type="number" value="3" 
                                      class="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black" />
                                    </div>
                                  </div>
                                  </td>
                                  <td class="hidden text-right md:table-cell">
                                    <span class="text-sm lg:text-base font-medium">
                                      49,600.01€
                                    </span>
                                  </td>
                                  <td class="text-right">
                                    <span class="text-sm lg:text-base font-medium">
                                      148,800.03€
                                    </span>
                                  </td>
                                </tr> 
                                <tr>
                                  <td class="hidden pb-4 md:table-cell">
                                    <a href="#">
                                      <img src="https://limg.app/i/Successful-Spider-Biblical-Mutant---Total-War-lKoE7D.jpeg" class="w-20 rounded" alt="Thumbnail"/>
                                    </a>
                                  </td>
                                  <td>
                                    <p class="mb-2 md:ml-4">Bic 4 colour pen</p>
                                    <form action="" method="POST">
                                      <button type="submit" class="text-gray-700 md:ml-4">
                                        <small>(Remove item)</small>
                                      </button>
                                    </form>
                                  </td>
                                  <td class="justify-center md:justify-end md:flex md:mt-8">
                                  <div class="w-20 h-10">
                                    <div class="relative flex flex-row w-full h-8">
                                    <input type="number" value="5" 
                                      class="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black" />
                                    </div>
                                  </div>
                      
                                  </td>
                                  <td class="hidden text-right md:table-cell">
                                    <span class="text-sm lg:text-base font-medium">
                                      1.50€
                                    </span>
                                  </td>
                                  <td class="text-right">
                                    <span class="text-sm lg:text-base font-medium">
                                      7.50€
                                    </span>
                                  </td>
                                </tr> 
                              </tbody>
                            </table>
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