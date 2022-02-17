import { Link } from "react-router-dom"

export const MenuCart = () => {
    return (
        <ul className="lg:w-4/6 sm:w-full m-auto flex flex-wrap justify-evenly items-center  md:text-xl sm:text-base  font-bold text-zinc-500 py-10">
            <li><Link className="hover:text-blue-700 " to="/paycart">1. CARRINHO</Link><span className="ml-6 text-zinc-300">&#10148;</span></li>
            <li><Link className="hover:text-blue-700 " to="/checkout">2. CHECKOUT</Link><span className="ml-6 text-zinc-300">&#10148;</span></li>
            <li><Link className="hover:text-blue-700 " to="/order">3. FINALIZAR PEDIDO</Link></li>
        </ul>
    )
}