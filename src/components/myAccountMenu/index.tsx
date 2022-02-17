import { Link } from "react-router-dom"

export const MyAccountMenu = () => {
    return (
        <nav className="lg:w-80 w-full">
            <ul className="flex justify-between md:flex-row lg:flex-col flex-col font-semibold text-zinc-800 ">
                <li className="border-b py-4 pl-2"><Link className=" hover:text-blue-700" to="/myaccount/dashboard">Painel</Link></li>
                <li className="border-b py-4 pl-2"><Link className=" hover:text-blue-700" to="/myaccount/orders">Pedidos</Link></li>
                <li className="border-b py-4 pl-2"><Link className=" hover:text-blue-700" to="/myaccount/download">Downloads</Link></li>
                <li className="border-b py-4 pl-2"><Link className=" hover:text-blue-700" to="/myaccount/address">Endereço</Link></li>
                <li className="border-b py-4 pl-2"><Link className=" hover:text-blue-700" to="/myaccount/account">Detalhes da Conta</Link></li>
                <li className="border-b py-4 pl-2"><Link className=" hover:text-blue-700" to="/">Sair</Link></li>
            </ul>
        </nav>
    )
}