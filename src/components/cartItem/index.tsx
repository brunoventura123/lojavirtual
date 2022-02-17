import { Link } from "react-router-dom"
import cel from '../../images/cel.svg'

export const CartItem = () => {
    return (
        <div className="flex md:flex-row flex-col md:border-0 border  justify-between items-center p-4 md:p-8 pr-2 my-2 text-sm w-auto">
            {/* product item for cart area */}
            <div className="flex items-center md:w-2/6 md:mb-0 mb-4">
                <Link to=""><img width='' height='' className="w-12 mr-6" src={cel} alt="" /></Link>
                <Link to="" className="ml-4 hover:text-blue-700">iPhone X Pro</Link>
            </div>
            <b className="text-zinc-900 md:mr-10 md:mb-0 mb-4">R$199,00</b>
            <div className="text-blue-700">
                <div className='text-zinc-800 md:mb-0 mb-6'>
                    <span className='border rounded-tl rounded-bl text-md px-2 py-2 cursor-pointer'>-</span>
                    <span className='border border-l-0 border-r-0 text-md px-5 py-2'>1</span>
                    <span className='border text-md px-2 py-2 rounded-tr rounded-br cursor-pointer'>+</span>
                </div>
            </div>
            <div className="flex items-center font-bold">
                <span>R$199,00</span>
                <i className="icon ion-md-close ml-8 rounded-full px-2 py-1 bg-red-700 text-white text-xs cursor-pointer"></i>
            </div>
        </div>
    )
}