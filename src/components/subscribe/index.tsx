import { useEffect, useState } from "react"

export const Subscribe = () => {

    return (
        <div className={` transition duration-150 ease-out bg-[#0063d1] lg:px-8 px-2  h-auto lg:py-8 py-3`}>
            <div className="flex h-auto md:w-auto lg:flex-row flex-col xl:justify-between text-white md:px-14 px-6 py-4">
                <div className="">
                    <h2 className="md:text-xl text-lg font-bold">INSCREVA-SE NO NEWSLETTER</h2>
                    <p className="md:text-sm">Mantenha-se atualizado sobre os mais novos produtos & ofertas</p>
                </div>
                <form className="flex w-full md:w-auto flex-col md:flex-row lg:w-1/2 lg:mt-0 mt-4 bg-white justify-between rounded lg:ml-6">
                    <input className="pr-2 flex-1 text-sm italic text-gray-800 outline-none lg:py-0 py-2 md:px-4 px-2" type="text" placeholder="Digite seu e-mail..." />
                    <button className="flex  justify-center items-center bg-black md:rounded-tr md:rounded-br md:text-sm text-xs font-bold md:w-auto md:px-3 md:py-0 py-3 px-3 hover:opacity-90 ">INSCREVA-SE <i className="icon ion-md-arrow-forward ml-2 md:text-xl text-sm text-white"></i></button>
                </form>
            </div>
        </div>
    )
}