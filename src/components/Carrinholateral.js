import React from 'react';
import { Link } from 'react-router-dom'
import '../tailwind.output.css';

 const Carrinholateral = ()=>{
    return(
        <div class="flex h-64">
                <div class="w-full  rounded-b border-t-0 z-10 ">
                    <div class="shadow-xl w-full">
                        
                        <div class="p-2 flex bg-pink-200 cursor-pointer border-b border-gray-100 rounded-t"  >
                            <div class="flex-auto text-sm w-32">
                                <div class="font-sans text-2xl text-center text-gray-900 font-bold">Carrinho</div>
                            </div>
                        </div>
                        <div class="p-2 flex bg-pink-200 hover:bg-gray-100 cursor-pointer border-b border-gray-100"  >
                            <div class="p-2 w-12"><img src="https://dummyimage.com/50x50/bababa/0011ff&amp;text=50x50" alt="img product"></img></div>
                            <div class="flex-auto text-sm w-32">
                                <div class="font-bold">Product 1</div>
                                <div class="text-black">Qt: 2</div>
                            </div>
                            <div class="flex flex-col w-18 font-medium items-end">
                                <div class="w-4 h-4 hover:bg-red-200 rounded-full cursor-pointer text-red-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2 ">
                                        <polyline points="3 6 5 6 21 6"></polyline>
                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                        <line x1="10" y1="11" x2="10" y2="17"></line>
                                        <line x1="14" y1="11" x2="14" y2="17"></line>
                                    </svg>
                                </div>
                                $12.22</div>
                        </div>
                        <div class="bg-pink-200 p-4 justify-center flex">
                            <button class="text-base  undefined  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                            hover:bg-pink-700 hover:text-teal-100 
                            bg-pink-100 
                            text-pink-700 
                            border duration-200 ease-in-out 
                            border-pink-600 transition">Checkout $36.66</button>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Carrinholateral;