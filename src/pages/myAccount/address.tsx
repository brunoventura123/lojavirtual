import { Link } from "react-router-dom"
import { MyAccountModel } from "."
import { MyAccountMenu } from "../../components/myAccountMenu"
import { Theme } from "../../components/theme"

export const Address = () => {
    return (
        <Theme>
            <MyAccountModel>
                <section className="flex overflow-x-hidden lg:flex-row flex-col mb-20">
                    <MyAccountMenu />
                    <div className="flex-1 mt-10 lg:mt-4 md:px-0 px-4 md:pl-8">
                        <p className="text-zinc-600 text-sm">Os endereços a seguir serão usados na página de checkout por padrão.</p>
                        <section className="flex md:flex-row flex-col justify-between w-full mt-8">
                            <div className="leading-8 md:mb-0 mb-6 text-zinc-600 text-sm w-1/2">
                                <h2 className="font-semibold text-zinc-800 text-lg mb-6">ENDEREÇO DE COBRANÇA</h2>
                                <p>Marcelo</p>
                                <p>Catura</p>
                                <p>Rua das Pérolas</p>
                                <p>Centro, 39680-000</p>
                                <button className="text-yellow-400 font-semibold text-base mt-2">Editar <span>&#9998;</span></button>
                            </div>
                            <div className="text-left w-1/2 leading-8">
                                <h2 className="font-semibold text-zinc-800 text-lg mb-6">ENDEREÇO DE ENTREGA</h2>
                                <p className="text-zinc-600 text-sm">Você ainda não configurou este tipo de endereço.</p>
                                <button className="text-yellow-400 font-semibold text-base mt-2">Editar <span>&#9998;</span></button>
                            </div>
                        </section>

                    </div>
                </section>
            </MyAccountModel>
        </Theme>
    )
}