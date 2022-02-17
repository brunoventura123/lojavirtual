import { MyAccountModel } from "."
import { MyAccountMenu } from "../../components/myAccountMenu"
import { Theme } from "../../components/theme"

export const Account = () => {
    return (
        <Theme>
            <MyAccountModel>
                <section className="overflow-x-hidden flex lg:flex-row flex-col mb-20">
                    <MyAccountMenu />
                    <div className="w-full lg:pl-8 flex-1 lg:mt-4 mt-10">
                        <form className="text-zinc-500 text-sm" action="">
                            <p className="w-full flex md:flex-row flex-col mb-4">
                                <label className="w-full mr-4" htmlFor="firstName">
                                    Primeiro Nome *<br />
                                    <input className="border py-3 px-3 mt-1 rounded outline-none w-full mr-4 focus:border-zinc-800" type="text" />
                                </label>
                                <label className="w-full" htmlFor="firstName">
                                    Último Nome *<br />
                                    <input className="border py-3 px-3 mt-1 rounded outline-none w-full mr-4 focus:border-zinc-800" type="text" />
                                </label>
                            </p>
                            <label className="" htmlFor="">
                                Nome de exibição *
                                <input className="border py-3 px-3 mt-1 rounded outline-none w-full mr-4 focus:border-zinc-800" type="text" />
                                <p className="text-xs mb-4">Será assim que seu nome será exibido na seção da conta e nas avaliações</p>
                            </label>
                            <label className="mt-4" htmlFor="">
                                Endereço de E-mail *
                                <input className="border mb-4 py-3 px-3 mt-1 rounded outline-none w-full mr-4 focus:border-zinc-800" type="email" />
                            </label>

                            <fieldset className="border mt-16 md:p-6 p-3">
                                <legend className="text-zinc-800">Trocar a Senha</legend>
                                <label className="w-full" htmlFor="">
                                    Senha atual (deixe em branco para não alterar)
                                    <input className="border mb-4 py-3 px-3 mt-1 rounded outline-none w-full mr-4 focus:border-zinc-800" type="password" />
                                </label>
                                <label className="" htmlFor="">
                                    Nova senha (deixe em branco para não alterar)
                                    <input className="border mb-4 py-3 px-3 mt-1 rounded outline-none w-full mr-4 focus:border-zinc-800" type="password" />
                                </label>
                                <label className="" htmlFor="">
                                    Confirme a nova senha
                                    <input className="border mb-2 py-3 px-3 mt-1 rounded outline-none w-full mr-4 focus:border-zinc-800" type="password" />
                                </label>
                            </fieldset>
                            <button className="mt-8 px-5 py-4 bg-blue-700 text-white font-bold hover:bg-blue-600 transition duration-150 ease-out">SALVAR MUDANÇAS</button>
                        </form>
                    </div>
                </section>
            </MyAccountModel>
        </Theme>
    )
}