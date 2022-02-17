import { Link } from "react-router-dom"
import { MenuCart } from "../../components/menuCart"
import { Theme } from "../../components/theme"

export const Order = () => {
    let month = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    let date = new Date()
    let d = date.getDate()
    let m = date.getMonth()
    let y = date.getFullYear()
    let today = `${d} de ${month[m]}, ${y}`
    return (
        <Theme>
            <div className=" md:p-8 p-4">
                <MenuCart />
                <section className="flex items-center justify-between p-4 px-6 shadow-2xl m-auto mb-12 w-72 h-32">
                    <i className="icon ion-md-checkmark-circle mr-6 text-6xl text-blue-700"></i>
                    <div className="">
                        <h2 className="text-xl font-bold">OBRIGADO!</h2>
                        <p className="text-zinc-600 text-sm">Seu pedido foi recebido</p>
                    </div>
                </section>
                <ul className="flex flex-wrap m-auto w-full">
                    <li className="mb-4 md:border-r pr-5 mr-5">
                        <p className="text-sm text-zinc-600 mb-1">NÚMERO DO PEDIDO:</p>
                        <span className="font-semibold text-zinc-800 text-xl">4945</span>
                    </li>
                    <li className="mb-4  md:border-r pr-5 mr-5">
                        <p className="text-sm text-zinc-600 mb-1">STATUS:</p>
                        <span className="font-semibold text-zinc-800 text-xl">Processando</span>
                    </li>
                    <li className="mb-4  md:border-r pr-5 mr-5">
                        <p className="text-sm text-zinc-600 mb-1">DATA:</p>
                        <span className="font-semibold text-zinc-800 text-xl">{today}</span>
                    </li>
                    <li className="mb-4  md:border-r pr-5 mr-5">
                        <p className="text-sm text-zinc-600 mb-1">EMAIL:</p>
                        <span className="font-semibold text-zinc-800 text-xl">compras@gmail.com</span>
                    </li>
                    <li className="mb-4  md:border-r pr-5 mr-5">
                        <p className="text-sm text-zinc-600 mb-1">TOTAL:</p>
                        <span className="font-semibold text-zinc-800 text-xl">R$699,00</span>
                    </li>
                    <li className="mb-4 ">
                        <p className="text-sm text-zinc-600 mb-1">MÉTODO DE PAGAMENTO:</p>
                        <span className="font-semibold text-zinc-800 text-xl">Pagamento na Entrega</span>
                    </li>
                </ul>
                <h2 className="text-xl font-bold mt-16 mb-6">DETALHES DO PEDIDO</h2>
                <section className="border p-8 text-zinc-900 font-semibold">
                    <h3 className="text-lg">Produtos</h3>
                    <div className="flex justify-between text-sm text-zinc-700 border-t pt-6 items-center my-4">
                        <p className="font-medium">Headephone </p>
                        <span>R$199,99</span>
                    </div>
                    <div className="flex justify-between border-b my-4 pb-5 pt-2  items-center">
                        <p>Subtotal</p>
                        <span className="text-zinc-600 font-semibold text-sm">R$199,00</span>
                    </div>
                    <div className="flex justify-between border-b my-4 pb-5 pt-2 items-center">
                        <p>Frete</p>
                        <span className="text-zinc-600 font-semibold text-sm">Frete Grátis</span>
                    </div>
                    <div className="flex justify-between border-b my-4 pb-5 pt-2 items-center">
                        <p>Método de Pagamento</p>
                        <span className="text-zinc-600 font-semibold text-sm">Pagamento na Entrega</span>
                    </div>
                    <div className="flex justify-between mt-4 pt-2">
                        <p>Total</p>
                        <span className="text-zinc-800 font-bold text-xl">R$698,00</span>
                    </div>

                </section>
                <h2 className="mt-12 text-xl font-bold">Endereço de Cobrança</h2>
                <div className="flex flex-col leading-7 text-sm text-zinc-700 border-b pb-16">
                    <p>{'Flavio Brito'}</p>
                    <p>{'Catura'}</p>
                    <p>{'Rua das Flores'}</p>
                    <p>{'Centro, 333'}</p>
                    <p>{'39680-000'}</p>
                    <p className="mt-8">{'compra@gmail.com'}</p>
                </div>
                <Link className="w-44 mt-8 flex items-center justify-center px-3 py-2 rounded bg-zinc-800 text-white font-bold text-sm" to="/productpage/name"><span className="text-xl mr-2 ">&#8592;</span> <span>VOLTAR A LISTA</span></Link>

            </div>
        </Theme>
    )
}