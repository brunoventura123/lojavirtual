import { Link } from "react-router-dom"
import { MyAccountModel } from "."
import { MyAccountMenu } from "../../components/myAccountMenu"
import { Theme } from "../../components/theme"

export const Dashboard = () => {
    return (
        <Theme>
            <MyAccountModel>
                <section className="flex lg:flex-row flex-col w-full mb-20">
                    <MyAccountMenu />
                    <div className="flex-1 lg:mt-0 mt-8">
                        <div className="leading-8 p-0 md:p-6 pt-2 md:w-2/3 w-full text-sm text-zinc-500 mb-10">
                            <h3>Olá User (não é usuário? <Link className="text-blue-700" to="/register">Crie uma conta)</Link></h3>
                            <p>No painel da sua conta, você pode visualizar seus <Link className="text-blue-700" to="/myaccount/orders">pedidos recentes</Link>, gerenciar seus endereços de envio e cobrança, e edite sua senha e detalhes da conta.</p>
                        </div>
                        <Link className="px-4 py-3 hover:opacity-90 rounded bg-zinc-800 text-white md:ml-6" to="/">IR PARA LOJA <span className="text-xl">&#8594;</span></Link>
                    </div>
                </section>
            </MyAccountModel>
        </Theme>
    )
}