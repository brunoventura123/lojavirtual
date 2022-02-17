import { Link } from "react-router-dom"
import { MyAccountModel } from "."
import { MyAccountMenu } from "../../components/myAccountMenu"
import { Theme } from "../../components/theme"

export const Download = () => {
    return (
        <Theme>
            <MyAccountModel>
                <section className="flex lg:flex-row flex-col mb-20">
                    <MyAccountMenu />
                    <div className="lg:mt-4 mt-8 pl-8">
                        <p className="text-sm text-zinc-700 mb-6">Ainda não há downloads disponíveis.</p>
                        <Link to="/productpage/mobile" className="font-bold text-blue-700 text-sm">VER PRODUTOS <span className="text-xl">&#8594;</span></Link>
                    </div>
                </section>
            </MyAccountModel>
        </Theme>
    )
}