import React from 'react';
import { Link } from 'react-router-dom'
import '../tailwind.output.css';
import logo from '../images/fairylogo.png'
 const Navbar = ()=>{
     //Navbar do site. Na ordem apresentada é: Logo, barra de pesquisa(Não está ativa) e menu
    return(
            <nav class="flex items-center bg-pink-400 p-2">
                
                <div class="flex">
                    <img src={logo} class="h-12 mr-6 ml-6 md:mr-12 md:ml-12"></img>
                </div>

                <div class="hidden md:flex flex-1 mr-3">
                    <form class="w-full" method="GET">
                        <div class="relative text-black">
                            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </span>
                            <input type="search" name="busca" class="w-full py-2 placeholder-black text-base bg-pink-200 rounded-md pl-10 focus:outline-none focus:bg-white" placeholder="Pesquisar..." autocomplete="off"></input>
                        </div>
                    </form>
                </div>
                <div class="flex-1 mr-3">
                    <nav class="flex-grow flex justify-end flex-row">
                        <Link to="/"><div class="px-4 py-2 mt-2 mr-2 text-sm font-semibold bg-pink-200 rounded-lg md:mt-0 md:ml-4 hover:text-white hover:bg-pink-700 focus:outline-none focus:shadow-outline">Catálogo</div></Link>
                        <Link to="/cart"><div class="px-4 py-2 mt-2 text-sm font-semibold bg-pink-200 rounded-lg md:mt-0 md:ml-4 hover:text-white hover:bg-pink-700 focus:outline-none focus:shadow-outline">Carrinho</div></Link>
                    </nav>
                </div>
            </nav>  
    )
}

export default Navbar;