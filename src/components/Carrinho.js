import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem,adicionarQuantidade,subtrairQuantidade, alternaCompra} from './actions/cartActions'
import { AiFillPlusCircle,AiFillMinusCircle } from 'react-icons/ai';

class Carrinho extends Component{

    //funções de controle de carrinho ao clique
    handleRemover = (id)=>{
        this.props.removerItem(id);
    }
    handleAdicionaQuantidade = (id)=>{
        this.props.adicionarQuantidade(id);
    }
    handleRemoveQuantidade = (id)=>{
        this.props.subtratirQuantidade(id);
    }
    handleAlternaCompra = (id)=>{
        this.props.alternaCompra(id);
    }
    
    render(){
      //responsável em mostrar o modal após finalizar compra
      let modalCompra = this.props.compraFinalizada ?
      (
          <div className=" top-0 z-20 w-full h-full absolute flex items-center justify-center bg-modal bg-opacity-50 bg-gray-500">
            <div className="rounded shadow p-8 m-4 max-w-xl max-h-full text-center bg-pink-200">
                <div className="mb-2">
                    <h1 className="font-sans text-2xl text-center text-gray-900 font-bold">Obrigado pela compra!</h1>
                </div>
                <div className="mb-4">
                    <p className="font-sans text-base text-center text-gray-900 ">Quer continuar comprando?</p>
                </div>
                <div className="flex justify-center">
                    <button  onClick={()=>{this.handleAlternaCompra()}} className="px-3 transition ease-in duration-100 uppercase rounded-full hover:bg-pink-700 hover:border-pink-700 hover:text-white border-2 border-gray-900 focus:outline-none font-sans">
                    <Link to="/">Voltar ao catálogo</Link>
                    </button>
                </div>
            </div>
          </div>
      ):
      (
        <div></div>
      )

      //Altera o título do carrinho com base em ter itens ou não
      let tituloCarrinho= this.props.items.length ?
            (  
              <thead>
                <tr className="w-1/4 h-12">
                  <th className="text-left font-sans my-4 text-4xl font-semibold dark:text-gray-400">Carrinho</th>
                </tr>
                <tr className="h-12 uppercase font-sans">
                  <th className="table-cell w-1/4"></th>
                  <th className="text-center font-sans w-1/4">Nome</th>
                  <th className="text-center w-1/4">
                    <span className="lg:hidden" title="Quantidade">Qtd</span>
                    <span className="hidden lg:inline">Quantidade</span>
                  </th>
                  <th className="hidden text-center md:table-cell ">Preço unitário</th>
                  <th className="text-center w-1/4">Preço total</th>
                </tr>
              </thead>
            ):
            (
              <thead>
                <tr className="h-12">
                    <th className=" pb-12 text-left font-sans my-4 text-4xl font-semibold dark:text-gray-400">Carrinho Vazio</th>
                </tr>
                <tr>
                    <button className="px-3 transition ease-in duration-100 uppercase rounded-full hover:bg-pink-700 hover:border-pink-700 hover:text-white border-2 border-gray-900 focus:outline-none font-sans">
                      <Link to="/">Voltar ao catálogo</Link>
                    </button>
                </tr>
             </thead>
            )


      //Altera o botão de finalizar compra caso o carrinho esteja vazio ou não
      let finalizarCompra= this.props.items.length ?
            (  
              <div>
                <div className="p-2 flex bg-pink-300 cursor-pointer border-b border-gray-100 px-12"  >
                        <div className="flex-auto text-sm md:w-32">
                            <div className="font-bold text-xl">Total</div>
                        </div>
                        <div className="flex flex-col md:w-18 font-bold text-2xl items-end">
                          R$ {this.props.total}</div>
                    </div>
                <div className="bg-pink-200 p-4 justify-center flex">
                    <button onClick={()=>{this.handleAlternaCompra()}} className="text-base  undefined  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                    hover:bg-pink-700 hover:text-teal-100 
                    bg-pink-100 
                    text-pink-700 
                    border duration-200 ease-in-out 
                    border-pink-600 transition">Finalizar compra</button>
                </div>
              </div>
            ):
            (
              <div className="bg-pink-200 p-4 justify-center flex">
                  <button className="text-base flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                  bg-gray-100 
                  text-gray-500 
                  border duration-200 ease-in-out 
                  border-gray-500 transition">Finalizar compra</button>
              </div> 
            )


        //Mostra os itens no carrinho, se não tiver items mostra padrão vazio
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                  let pokeatual = this.props.pokefadas.filter(v => v.id===item.id)[0];
                    return(
                          <tr>
                            <td className=" md:w-10 md:pl-10">
                              <img src={pokeatual.sprites.front_default} className="w-20 rounded" alt="Thumbnail"></img>
                            </td>
                            <td className="capitalize text-center">
                              <p>{pokeatual.name}</p>
                              <form action="" method="POST">
                                <button onClick={()=>{this.handleRemover(item.id)}} type="submit" className="text-gray-700 ">
                                  <small >(Remover item)</small>
                                </button>
                              </form>
                            </td>
                            <td className="justify-center md:flex mt-6">
                                <div className=" justify-center font-sans text-xl text-center">
                                  <AiFillPlusCircle onClick={()=>{this.handleAdicionaQuantidade(item.id)}} className=" inline"></AiFillPlusCircle>
                                  <div className=" px-1 md:px-3 inline">{item.quantidade}</div>
                                  <AiFillMinusCircle onClick={()=>{this.handleRemoveQuantidade(item.id)}} className=" inline"></AiFillMinusCircle>
                                </div>
                            </td>
                            <td className="text-center hidden md:table-cell">
                              <span className="font-sans text-xl ">
                                {item.id}
                              </span>
                            </td>
                            <td className="text-center">
                              <span className="font-sans text-xl ">
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


        //render responsável por mostra o resumo dos itens, se não tiver item, mostra vazio
        let addedItemsResumo = this.props.items.length ?
        (  
          this.props.items.map(item=>{
                return(
                  <div>
                    <div className="p-2 flex bg-pink-200 cursor-pointer border-b border-gray-100 px-12"  >
                        <div className="flex-auto text-sm md:w-32">
                            <div className="font-bold">{item.quantidade} produtos</div>
                        </div>
                        <div className="flex flex-col md:w-18 font-medium items-end">
                          R$ {item.quantidade*item.id}</div>
                    </div>
                    
                  </div>
                )
            })
        ):

         (
          <div className="px-2 py-10 flex bg-pink-200 cursor-pointer border-b border-gray-100"  >
              <div className="flex-auto text-sm w-32">
                  <div className="font-bold text-gray-600 text-center">-Vazio-</div>
              </div>
          </div>
         )



      //return de render principal, utilizando as outras partes. Tem duas versões, uma para telas maiores e outra para menores(celulares)
       return(
            <div>
                <div className="md:flex justify-center md:my-6">
                  {modalCompra}
                    <div className="md:flex md:flex-col md:w-3/4 p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:mr-8 md:ml-12">
                        <div className="flex-1">
                            <table className=" table-fixed w-full text-sm lg:text-base" cellspacing="0">
                            {tituloCarrinho}
                            <tbody>{addedItems}</tbody>
                            </table>
                        </div> 
                    </div>
                    <div className="rounded-b border-t-0 z-10 md:w-1/4 md:ml-0 ml-12 mr-12 mt-12 md:mt-0">
                        <div className="shadow-xl w-full">
                            <div className="p-2 md:flex bg-pink-200 cursor-pointer border-b border-gray-100 rounded-t"  >
                                <div className="md:flex-auto text-sm md:w-32">
                                    <div className="font-sans text-2xl text-center text-gray-900 font-bold">Resumo do carrinho</div>
                                </div>
                            </div>
                            {addedItemsResumo}
                            {finalizarCompra}
                        </div>
                    </div>
                  </div> 
              </div>
       )
    }
}
const mapStateToProps = (state)=>{
    return{
        items: state.cartReducer.itensNoCarrinho,
        total: state.cartReducer.total,
        pokefadas: state.pokeReducer.pokefadas,
        compraFinalizada: state.cartReducer.compraFinalizada,
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removerItem: (id)=>{dispatch(removeItem(id))},
        adicionarQuantidade: (id)=>{dispatch(adicionarQuantidade(id))},
        subtratirQuantidade: (id)=>{dispatch(subtrairQuantidade(id))},
        alternaCompra: ()=>{dispatch(alternaCompra())}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Carrinho)