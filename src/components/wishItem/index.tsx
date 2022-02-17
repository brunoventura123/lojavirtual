import { Link } from "react-router-dom"
import jack from '../../images/jack.jpg'

export const WishItem = () => {
    return (
        <div className="flex md:flex-row flex-col justify-between items-center md:border-0 border md:mb-0 mb-2 p-4 lg:p-8 text-sm w-full">
            <div className="flex md:flex-row flex-col items-center">
                <Link to=""><img className="md:w-12 w-16 md:mr-6 md:mb-0 mr-0 mb-2" src={jack} alt="" /></Link>
                <Link to="" className="md:ml-4 ml-0 hover:text-blue-700">iPhone X Pro</Link>
            </div>
            <b className="text-zinc-900">R$98,00 - R$199,00</b>
            <span className="text-blue-700 md:pl-24 md:mb-0 mb-2">Em Estoque</span>
            <div className="flex md:flex-row flex-col md:items-center font-bold">
                <Link className="bg-blue-600 text-white px-3 py-1 lg:px-6 lg:py-3 md:mb-0 mb-2 font-semibold hover:opacity-90" to="">Adicionar ao Carrinho</Link>
                <i className="icon ion-md-close bg-red-700 text-white md:ml-6 lg:ml-16  rounded-full px-2 py-1  text-xs text-center cursor-pointer"></i>
            </div>
        </div>
    )
}