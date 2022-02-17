import { Link } from "react-router-dom"
import { CartItem } from "../../components/cartItem"
import { MenuCart } from "../../components/menuCart"
import { Theme } from "../../components/theme"


export const PayCart = () => {
    const list = [1]
    return (
        <Theme>
            <div className="w-full lg:pl-8 px-4 md:pl-2 border-t mb-24">
                <MenuCart />
                <div className="flex lg:flex-row flex-col">

                    <section className="lg:w-4/6 lg:p-0 md:px-6 px-0 mb-8 w-full">
                        <table className='w-full'>
                            <thead className="text-md text-zinc-400 w-full border-b hidden md:block">
                                <th className='text-left font-semibold flex w-full justify-between px-3 py-2'><span className='w-2/3'>Produto</span><span className='w-1/3'>Preço</span><span className='w-1/3 mr-4'>Quantidade</span ><span className="w-1/6" >Subtotal</span></th>
                            </thead>
                            <tr className='md:border-b'>
                                {list.map((i, k) =>
                                    <td key={k}><CartItem /></td>
                                )}
                            </tr>
                        </table>

                        <div className="flex md:flex-row flex-col justify-between py-5">
                            <Link className="flex justify-center items-center py-3 md:mb-0 mb-4 px-5 rounded bg-zinc-800 text-white font-bold text-sm" to="/"><span className="lg:text-xl sm:text-sm mr-2 ">&#8592;</span> <span>CONTINUAR COMPRANDO</span></Link>
                            <button className="text-zinc-800 border border-zinc-800 rounded py-3 px-5  font-bold hover:text-white hover:bg-zinc-800 transition duration-150 ease-out">ATUALIZAR CARRINHO</button>
                        </div>
                        <section className=" mt-12 flex flex-col">
                            <h2 className="font-bold text-lg text-zinc-800 mb-10">CUPOM DE DESCONTO</h2>
                            <input className="text-sm md:w-full px-6 outline-none border-b pb-4" type="text" placeholder="Insira o seu cupom aqui..." />
                            <button className="text-zinc-800 border border-zinc-800 rounded py-3 px-5 font-bold w-full md:w-1/2 hover:text-white hover:bg-zinc-800 transition duration-150 ease-out mt-4">INSERIR CUPOM</button>
                        </section>
                    </section>

                    <section className="border lg:w-2/6 w-auto md:mx-4 mx-2 p-4 md:p-7 rounded">
                        <h2 className="font-bold text-lg text-zinc-800 border-b pb-6">TOTAIS DO CARRINHO</h2>
                        <div className="flex justify-between items-center border-b py-6 text-sm font-semibold text-zinc-800">
                            <p>Subtotal</p>
                            <span>R$398,00</span>
                        </div>
                        <form action="" className="flex flex-col text-zinc-600">
                            <h2 className="flex justify-between items-center py-6  font-semibold text-zinc-800">Calcular Frete</h2>
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
                            <h3 className="my-5">Envio para CA.</h3>
                            <select className="border px-2 py-2 outline-none rounded mb-4 text-sm " name="" id="">
                                <option value="">Estados Unidos</option>
                                <option value="">Brazil</option>
                                <option value="">Inglaterra</option>
                                <option value="">França</option>
                            </select>
                            <select className="border px-2 py-2 outline-none rounded mb-4 text-sm " name="" id="">
                                <option value="">Belo Horizonte</option>
                                <option value="">Bauru</option>
                                <option value="">Fortaleza</option>
                                <option value="">Brasilia</option>
                            </select>
                            <input className="border px-2 py-2 outline-none rounded mb-4 text-sm font-light" type="text" placeholder="Cidade" />
                            <input className="border px-2 py-2 outline-none rounded mb-4 text-sm font-light" type="text" placeholder="CEP" />
                            <button className="lg:w-2/3 text-zinc-800 border border-zinc-800 rounded py-3 px-2 font-semibold hover:text-white hover:bg-zinc-800 transition duration-150 ease-out mt-2">ATUALIZAR TOTAL</button>
                        </form>
                        <div className="flex justify-between items-center border-b py-6 font-semibold text-zinc-800">
                            <p>Total</p>
                            <span className="text-lg font-bold">R$398,00</span>
                        </div>
                        <button className="text-white w-full text-sm hover:opacity-90 rounded py-4 px-5 font-bold bg-zinc-800 transition duration-150 ease-out">FINALIZAR COMPRA</button>
                    </section>
                </div>
            </div>
        </Theme>
    )
}