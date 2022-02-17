import { useState } from 'react'
import { Link } from 'react-router-dom'
import cel from '../../images/cel.svg'
import * as C from './styles'

type Props = {
    move: boolean
}

export const Cart = ({ move }: Props) => {
    const [close, setClose] = useState(move)

    const handleCart = () => {
        setClose(false)
    }

    return (
        <C.Container cart={close} className={`fixed overflow-hidden z-10 bg-[rgba(0,0,0,0.5)] top-0 left-0 bottom-0 right-0 flex justify-end transition duration-150 ease-out`}>
            {/* cart area wich product image, desc, price end buttons for checkout end view cart */}

            <section className="cart p-6 bg-white text-zinc-800 transition duration-150 ease-out">
                <div className="flex justify-between pb-4">
                    <h2 className="font-bold text-lg">Carrinho</h2>
                    <p onClick={handleCart} className="text-xs flex items-center hover:text-blue-700 cursor-pointer"><span >FECHAR</span> <i className="icon ion-md-arrow-forward ml-2 text-lg"></i></p>
                </div>
                <section className="border-b border-t py-8 flex justify-between items-center">
                    <img className='w-16' width='' height='' src={cel} alt="" />
                    <div>
                        <p className="text-xs text-zinc-500 font-bold">Headphone Avançado</p>
                        <span className="text-zinc-400 font-light leading-8">1 X</span> <span className="text-md font-medium">R$199,00</span>
                    </div>
                    <i className="icon ion-md-close border rounded-full w-6 h-6 text-center cursor-pointer"></i>
                </section>
                <div className='flex justify-between py-4 border-b text-sm'>
                    <p className='text-zinc-600'>Subtotal:</p>
                    <span className='font-bold text-lg'>R$199,00</span>
                </div>
                <div className='flex flex-col justify-center pt-6'>
                    <Link to="/paycart" className='border-b-2 cursor-pointer hover:text-blue-700 transition duration-150 ease-out  m-auto border-blue-700 text-sm text-center mb-4 font-bold'>Ver Carrinho</Link>
                    <Link to="/checkout" className='py-3 rounded px-4 bg-gray-900 text-white font-semibold hover:bg-gray-800 text-center'>Ir para o Checkout</Link>
                </div>
            </section>
        </C.Container>
    )
}