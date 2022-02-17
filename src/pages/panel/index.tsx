import { Link } from "react-router-dom"
import cel from '../../images/cel.jpg'

export const Panel = () => {
    const list = [1, 2, 3, 4, 5, 6, 7]
    return (
        <div className="p-10">
            <h1 className="text-2xl font-bold text-center mb-8">Painel de Controle</h1>
            <section className="flex">
                <form action="" className="w-2/3 m-auto mr-2 border border-blue-800 p-4 flex flex-col">
                    <h2 className="text-xl font-bold mb-2">Adicionar Produto</h2>
                    <input className="border border-blue-500 p-2 outline-none rounded mb-6" type="text" placeholder="Nome do produto" />
                    <input className="border border-blue-500 p-2 outline-none rounded mb-6" type="file" placeholder="Imagens do produto" />
                    <select className="border border-blue-500 p-2 outline-none rounded mb-6" placeholder="Categoria">
                        <option value="">Mobile</option>
                        <option value="">Camera e Fotos</option>
                        <option value="">Portáteis</option>
                        <option value="">Computadores e Tablets</option>
                        <option value="">Cozinha</option>
                        <option value="">Eletrônicos</option>
                        <option value="">Jogos</option>
                    </select>
                    <input className="border border-blue-500 p-2 outline-none rounded mb-6" type="text" placeholder="Preço" />
                    <textarea className="border border-blue-500 p-2 outline-none rounded mb-6" placeholder="Descrição"></textarea>
                    <input className="border border-blue-500 p-2 outline-none rounded" type="number" placeholder="Quantidade" />
                    <button className="bg-blue-800 text-white px-4 py-3 rounded mt-4 hover:opacity-90">Adicionar</button>
                </form>

                <form action="" className="w-2/3 m-auto border border-blue-800 p-4 flex flex-col">
                    <h2 className="text-xl flex items-center font-bold mb-2"><span>Editar Produto</span> <p className="text-sm text-zinc-600 font-light ml-2">(Selecione um produto na tabela abaixo para editar)</p></h2>
                    <input className="border border-blue-500 p-2 outline-none rounded mb-6" type="text" placeholder="Nome do produto" />
                    <input className="border border-blue-500 p-2 outline-none rounded mb-6" type="file" placeholder="Imagens do produto" />
                    <select className="border border-blue-500 p-2 outline-none rounded mb-6" placeholder="Categoria">
                        <option value="">Mobile</option>
                        <option value="">Camera e Fotos</option>
                        <option value="">Portáteis</option>
                        <option value="">Computadores e Tablets</option>
                        <option value="">Cozinha</option>
                        <option value="">Eletrônicos</option>
                        <option value="">Jogos</option>
                    </select>
                    <input className="border border-blue-500 p-2 outline-none rounded mb-6" type="text" placeholder="Preço" />
                    <textarea className="border border-blue-500 p-2 outline-none rounded mb-6" placeholder="Descrição"></textarea>
                    <input className="border border-blue-500 p-2 outline-none rounded" type="number" placeholder="Quantidade" />
                    <button className="bg-blue-800 text-white px-4 py-3 rounded mt-4 hover:opacity-90">Salvar</button>

                </form>
            </section>
            <div className="my-16 ">
                <form className="border-2 border-blue-700  w-1/2 flex" action="" method="post">
                    <input className="flex-1 outline-none px-3 py-2" type="text" placeholder="Procurar produto..." />
                    <button className="bg-blue-700 text-white px-3">Pesquisar</button>
                </form>
            </div>
            <section className="mt-10 w-full">
                <h2 className="text-2xl mb-4 text-center w-full flex items-center font-bold mb-2">Tabela de Produtos</h2>
                <table className=" w-full">
                    <tr className="border bg-zinc-200">
                        <th className="p-4">Produto</th>
                        <th>Imagens</th>
                        <th>Categoria</th>
                        <th>Preço</th>
                        <th>Descrição</th>
                        <th>Quantidade</th>
                        <th>Ação</th>
                    </tr>
                    {list.map((i, k) =>
                        <tr key={k} className="border">
                            <td className="p-4 text-center">Galaxy s9</td>
                            <td>
                                <div className="grid gap-2">
                                    <img width={50} src={cel} alt="" />
                                </div>
                            </td>
                            <td>Mobile</td>
                            <td>R$ 3.500,00</td>
                            <td className="text-center">Celular de última geração</td>
                            <td className="text-center">24</td>
                            <td className="text-center"><button className="text-green-800 font-bold mr-3">Editar</button><button className="text-red-600 font-bold">Excluir</button></td>
                        </tr>
                    )}
                </table>
            </section>
            <div className="flex justify-between mt-10 pb-20">
                <p>Mostrando 1 - 100 de {list.length} produtos.</p>
                <div >
                    <ul className="flex">
                        {list.map((i, k) =>
                            <li className="border px-3 mr-1 cursor-pointer hover:border-blue-700">{k + 1}</li>

                        )}

                    </ul>
                </div>
            </div>
            <p className="mt-20"><Link className="bg-blue-700 px-5 py-3 text-white font-bold rounded fixed hover:bg-blue-800 shadow-lg shadow-black bottom-2 right-2" to="/">IR PARA O SITE</Link></p>
        </div>
    )
}