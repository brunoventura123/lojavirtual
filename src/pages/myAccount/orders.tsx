import { MyAccountModel } from "."
import { MyAccountMenu } from "../../components/myAccountMenu"
import { Theme } from "../../components/theme"

export const Orders = () => {
    const list = [
        { order: '#4566', date: '24 de Janeiro, 2022', status: 'Em Espera', total: 'R$900,00 de 5 itens', action: 'ver' },
        { order: '#4566', date: '24 de Janeiro, 2022', status: 'Em Espera', total: 'R$900,00 de 5 itens', action: 'ver' },
        { order: '#4566', date: '24 de Janeiro, 2022', status: 'Em Espera', total: 'R$900,00 de 5 itens', action: 'ver' },
    ]
    return (
        <Theme>
            <MyAccountModel>
                <section className="flex lg:flex-row flex-col w-full mb-20">
                    <MyAccountMenu />
                    <div className="overflow-x-auto w-full m-auto md:mt-0 mt-8 md:p-6 p-2 flex-1">
                        <table className="border md:w-full w-max">
                            <tr className="w-full bg-zinc-100 text-left">
                                <th className="p-4">Pedido</th>
                                <th>Data</th>
                                <th>Status</th>
                                <th>Total</th>
                                <th>Ação</th>
                            </tr>
                            {list.map((i, k) =>
                                <tr className="w-auto text-sm text-zinc-600 hover:bg-zinc-100" key={k}>
                                    <td className="px-4 text-zinc-800 py-5">{i.order}</td>
                                    <td>{i.date}</td>
                                    <td ><span className="md:mx-0 mx-2 bg-zinc-300 rounded p-1 text-xs text-zinc-800">{i.status}</span></td>
                                    <td >{i.total}</td>
                                    <td className="md:px-0 px-4 text-blue-700 text-center font-semibold text-lg cursor-pointer">{i.action}</td>
                                </tr>
                            )}
                        </table>
                    </div>

                </section>
            </MyAccountModel>
        </Theme>
    )
}