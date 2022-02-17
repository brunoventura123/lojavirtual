import { MenuCart } from "../../components/menuCart"
import { Theme } from "../../components/theme"

export const Checkout = () => {
    return (
        <Theme>
            <div className="w-full md:px-8 px-4">
                <MenuCart />
                <form method="post" action="#" className="flex  lg:flex-row flex-col">
                    <section className="lg:w-3/5 w-full text-sm text-zinc-500 md:pr-4 mb-8 md:mb-24">
                        <h2 className="font-bold text-lg text-zinc-800 mb-4">DETALHES DE FATURA</h2>
                        <div className="flex md:flex-row flex-col">
                            <label className="md:w-1/2 w-full md:mr-4 mb-4" htmlFor="name">
                                Primeiro Nome * <br />
                                <input className="border w-full mt-2 text-xs p-3 outline-none focus:border-zinc-800 rounded trasition duration-150 ease-out" type="text" name="name" />
                            </label>
                            <label className="md:w-1/2 mb-4" htmlFor="lastName">
                                Último Nome * <br />
                                <input className="border w-full mt-2 text-xs p-3 outline-none focus:border-zinc-800 rounded trasition duration-150 ease-out" type="text" name="lastName" />
                            </label>
                        </div>
                        <label className="" htmlFor="companyName">
                            Nome da Empresa (opcional)
                            <input className="border w-full mt-2 mb-4 text-xs p-3 outline-none focus:border-zinc-800 rounded trasition duration-150 ease-out" type="text" name="companyName" />
                        </label>
                        <label className="md:w-1/2 mr-4 my-4" htmlFor="country">
                            País / Região *
                            <select className="border w-full mt-2 mb-4 text-xs p-3 outline-none focus:border-zinc-800 rounded trasition duration-150 ease-out" name="country" id="">
                                <option value="Brasil">Brasil</option>
                                <option value="Estados Unidos">Estados Unidos</option>
                            </select>
                        </label>
                        <label className="md:w-1/2 mr-4 mb-4" htmlFor="street">
                            Endereço *
                            <input className="border  w-full mb-4 mt-2 text-xs p-3 outline-none focus:border-zinc-800 rounded trasition duration-150 ease-out" type="text" name="street" placeholder="Nome da rua e número da casa" />
                        </label>
                        <input className="border  w-full mb-4 mt-2 text-xs p-3 outline-none focus:border-zinc-800 rounded trasition duration-150 ease-out" type="text" placeholder="Apartamento, etc (opcional)" />
                        <div className="flex md:flex-row flex-col">
                            <label className="md:w-1/2 md:mr-4 mb-4" htmlFor="city">
                                Cidade *
                                <input className="border w-full mt-2 text-xs p-3 outline-none focus:border-zinc-800 rounded trasition duration-150 ease-out" type="text" name="city" />
                            </label>
                            <label className="md:w-1/2 mb-4" htmlFor="">
                                Estado *
                                <input className="border w-full mt-2 text-xs p-3 outline-none focus:border-zinc-800 rounded trasition duration-150 ease-out" type="text" name="state" />

                            </label>
                        </div>
                        <div className="flex md:flex-row flex-col">
                            <label className="md:w-1/2 md:mr-4 mb-4" htmlFor="city">
                                CEP *
                                <input className="border w-full mt-2 text-xs p-3 outline-none focus:border-zinc-800 rounded trasition duration-150 ease-out" type="text" name="cep" />
                            </label>
                            <label className="md:w-1/2 mb-4" htmlFor="">
                                Telefone *
                                <input className="border w-full mt-2 text-xs p-3 outline-none focus:border-zinc-800 rounded trasition duration-150 ease-out" type="text" name="phone" />

                            </label>
                        </div>
                        <label className="md:w-1/2 mr-4 mb-4" htmlFor="email">
                            E-mail *
                            <input className="border w-full mt-2 text-xs p-3 outline-none focus:border-zinc-800 rounded trasition duration-150 ease-out" type="email" name="email" />
                        </label>
                        <label className="cursor-pointer mr-4 mb-6 mt-8 flex items-center w-full justify-start" htmlFor="create">
                            <input className="mr-2 text-xs outline-none focus:border-zinc-800 rounded trasition duration-150 ease-out" type="checkbox" id="create" />
                            Criar uma Conta?
                        </label>
                        <label className="cursor-pointer mr-4 mb-4 flex items-center w-full justify-start" htmlFor="diferent">
                            <input className=" mr-2 text-xs outline-none focus:border-zinc-800 rounded trasition duration-150 ease-out" type="checkbox" id="diferent" />
                            Enviar para um endereço diferente?
                        </label>
                        <h2 className="font-bold text-lg text-zinc-800 mb-4 mt-8">INFORMÇÃO ADICIONAL</h2>
                        <label htmlFor="info">
                            Informações de Pedidos (Adicional)
                            <textarea className="border h-32 resizing-none w-full mt-2 text-xs p-3 outline-none focus:border-zinc-800 rounded trasition duration-150 ease-out" name="notes" placeholder="Notas do pedido ou informções adicionais de entrega"></textarea>
                        </label>
                    </section>

                    <section className="lg:w-2/5 w-full border p-8 md:mb-0 mb-6 h-full">
                        <h2 className="font-bold text-lg text-zinc-800 border-b pb-4">SEUS PEDIDOS</h2>
                        <h3 className="my-4 font-semibold">Produtos</h3>
                        <div className="flex justify-between text-sm text-zinc-700 border-b pb-4 items-center my-4">
                            <p>Headephone </p>
                            <span>R$199,99</span>
                        </div>
                        <div className="flex justify-between text-zinc-700 border-b my-4 pb-5 pt-2 font-bold  items-center">
                            <p>Subtotal</p>
                            <span>R$199,00</span>
                        </div>

                        <h2 className="font-semibold text-lg text-zinc-800 mb-4">Calcular Frete</h2>
                        <div className="flex flex-col text-sm text-zinc-600 leading-8">
                            <label id="shipping" className="cursor-pointer">
                                <input className="mr-2" type="radio" name="shipping" id="" />
                                Taxa fixa
                            </label>
                            <label id="shipping" className="cursor-pointer">
                                <input className="mr-2" type="radio" name="shipping" id="" />
                                Frete Grátis
                            </label>
                            <label id="shipping" className="cursor-pointer">
                                <input className="mr-2" type="radio" name="shipping" id="" />
                                Retirada Local
                            </label>
                        </div>
                        <div className="flex justify-between my-4 border-b border-t py-5 font-semibold">
                            <p>Total</p>
                            <span className="text-blue-700 font-bold text-xl">R$698,00</span>
                        </div>

                        <h3 className="my-5 font-semibold">Formas de Pagamento</h3>
                        <div className="flex flex-col text-sm text-zinc-600 leading-8">
                            <label id="pay" className="cursor-pointer">
                                <input className="mr-2" type="radio" name="pay" id="pay" />
                                Verificar pagamentos
                            </label>
                            <label id="pay" className="cursor-pointer pb-6 border-b">
                                <input className="mr-2" type="radio" name="pay" id="pay" />
                                Pagamento na Entrega <br />
                                <p className="leading-5 text-xs ml-6">Por favor, envie um cheque para Nome da Loja, Rua da Loja, Cidade da Loja, Estado/Condado da Loja, Código Postal da Loja.</p>
                            </label>
                        </div>
                        <label className="text-sm text-zinc-600 flex items-center mt-4 mb-8 cursor-pointer" htmlFor="read">
                            <input className="mr-2" type="checkbox" name="" id="read" />
                            <p>Li e concordo com os termos e condições do site</p>
                        </label>
                        <button className="text-white w-full text-sm hover:opacity-90 rounded py-4 px-5 font-bold bg-zinc-800 transition duration-150 ease-out">FINALIZAR COMPRA</button>

                    </section>
                </form>
            </div>
        </Theme>
    )
}