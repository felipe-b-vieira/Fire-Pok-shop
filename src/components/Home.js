import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'
import '../tailwind.output.css';

 class Home extends Component{
    
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }

    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <div class="w-screen h-screen flex justify-center items-center">
                    <div class="container mx-auto max-w-sm w-full p-4 sm:w-1/2">
                        <div class="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
                        <div class="prod-title">
                            <p class="text-2xl uppercase text-gray-900 font-bold">{item.title}</p>
                            <p class="uppercase text-sm text-gray-400">
                            {item.desc}
                            </p>
                        </div>
                        <div class="prod-img">
                            <img src={item.img}
                                class="w-full object-cover object-center" />
                        </div>
                        <div class="prod-info grid gap-10">
                            <div>
                            <ul class="flex flex-row justify-center items-center">
                                <li class="mr-4 last:mr-0">
                                <span
                                        class="block p-1 border-2 border-gray-500 rounded-full transition ease-in duration-300">
                                    <a href="#blue" class="block w-6 h-6 bg-blue-900 rounded-full"></a>
                                </span>
                                </li>
                                <li class="mr-4 last:mr-0">
                                <span
                                        class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                    <a href="#yellow" class="block w-6 h-6 bg-yellow-500 rounded-full"></a>
                                </span>
                                </li>
                                <li class="mr-4 last:mr-0">
                                <span
                                        class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                    <a href="#red" class="block w-6 h-6 bg-red-500 rounded-full"></a>
                                </span>
                                </li>
                                <li class="mr-4 last:mr-0">
                                <span
                                        class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                    <a href="#green" class="block w-6 h-6 bg-green-500 rounded-full"></a>
                                </span>
                                </li>
                            </ul>
                            </div>
                            <div class="flex flex-col md:flex-row justify-between items-center text-gray-900">
                            <p class="font-bold text-xl">R$ {item.price}</p>
                            <button
                                    class="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Add
                                to cart</button>
                            </div>
                        </div>
                        </div>
                    </div>
                 </div>
            )
        })

        return(
            <div className="container">
                <h3 className="center">Our items</h3>
                <div className="box">
                    {itemList}
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