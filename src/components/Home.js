import React, { Component } from 'react';
import { connect } from 'react-redux'
import Carrinholateral from "./Carrinholateral"
import { addToCart } from './actions/cartActions'
import '../tailwind.output.css';

 class Home extends Component{
    
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }

    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <div class=" justify-start items-center w-64 mr-1 ml-1">
                    <div class="container p-2">
                        <div class="card flex flex-col justify-center p-6 bg-pink-200 rounded-lg shadow-2xl">
                            <div >
                                <p class="font-sans text-2xl text-center text-gray-900 bg-white rounded-full font-bold">{item.title}</p>
                            </div>
                            <div>
                                <img src={item.img}
                                    class="w-full object-cover object-center" />
                            </div>
                            <div class="prod-info grid gap-3">
                                {/* Esse código seria para colocar shiny no mesmo cartão do normal, mas por enquanto, não será usado
                                <div>
                                <ul class="flex flex-row justify-center items-center">
                                    <li class="mr-4 last:mr-0">
                                    <span
                                            class="hover:bg-pink-700 hover:text-white block border-2 border-gray-800 border-opacity-25 rounded-full transition ease-in duration-100">
                                        <a href="#blue" class="block rounded-full px-3 py-1">Normal</a>
                                    </span>
                                    </li>
                                    <li >
                                    <span
                                            class="hover:bg-pink-700 hover:text-white block border-2 border-gray-800 border-opacity-25 rounded-full transition ease-in duration-100">
                                        <a href="#blue" class="block rounded-full px-4 py-1">Shiny</a>
                                    </span>
                                    </li>
                                </ul>
                                </div> */}
                                <div class="flex flex-row justify-center items-center">
                                    <p class="font-bold text-xl text-black text-center">R$ {item.price}</p>
                                </div>
                                <div class="flex flex-row justify-between items-center">
                                <button
                                            class="px-3 transition ease-in duration-100 uppercase rounded-full hover:bg-pink-700 hover:border-pink-700 hover:text-white border-2 border-gray-900 focus:outline-none font-sans">Adicionar ao carrinho</button>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
            )
        })

        return(
            <div>
                <div class="flex px-12">
                    <h2 class="font-sans my-4 text-4xl font-semibold dark:text-gray-400">
                        Catálogo
                    </h2>
                </div>

                <div class="flex px-12 py-8">
                    <div class="flex w-3/4">
                        {itemList}
                    </div>
                    <div class="w-1/4">
                        <Carrinholateral></Carrinholateral>
                    </div>
                </div>
            </div>
        )
    }
}

  
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)