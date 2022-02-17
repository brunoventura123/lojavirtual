import { OurStore } from "../../components/ourStore"
import * as C from './styles'
import sp from '../../images/sp.jpg'
import bh from '../../images/bh.jpg'
import cur from '../../images/cur.jpg'
import rj from '../../images/rj.jpg'
import { Theme } from "../../components/theme"

export const Contact = () => {

    const info = [
        { cover: sp, title: 'São Paulo', email: 'cidademaravilha@gmail.com', phone: '(33) 99999-9999' },
        { cover: bh, title: 'Belo Horizonte', email: 'cidademaravilha@gmail.com', phone: '(33) 99999-9999' },
        { cover: cur, title: 'Curitiba', email: 'cidademaravilha@gmail.com', phone: '(33) 99999-9999' },
        { cover: rj, title: 'Rio de Janeiro', email: 'cidademaravilha@gmail.com', phone: '(33) 99999-9999' },
    ]

    return (
        <Theme>
            <C.Container>
                <div className="banner h-72 border pt-8 flex justify-center items-center">
                    <h2 className="md:text-6xl text-4xl text-white font-semibold">Contato</h2>
                </div>
                <div className="lg:px-8 md:px-4 pt-20">
                    <div className="flex md:flex-row flex-col mb-28">

                        <div className="flex lg:flex-col md:flex-row flex-col bg-zinc-100 lg:w-96 w-full justify-between p-6 pr-16 text-sm lg:mb-0 mb-6">
                            <div className="mb-7">
                                <h2 className="font-semibold mb-2 text-xl">Endereço</h2>
                                <p className="leading-6 text-zinc-500">1600 Amphitheatre Parkway <br />New York WC1 1BA</p>
                            </div>
                            <div className="mb-7">
                                <h2 className="font-semibold mb-2 text-xl">Número de Telefone</h2>
                                <p className="leading-6 text-zinc-500">(11) 99999-9999<br />(21) 88888-8888</p>
                            </div>
                            <div className="">
                                <h2 className="font-semibold mb-2 text-xl">Suporte</h2>
                                <p className="leading-6 text-zinc-500">suporte@gmail.com<br />ajuda@hotmail.com<br />Oferta</p>
                            </div>
                        </div>

                        <div className="lg:px-8 px-4 pt-2 w-full">
                            <h2 className="text-2xl font-bold mb-2">Vamos nos Conectar</h2>
                            <p className="text-xs text-zinc-600">Seu endereço de e-mail não será publicado. Os campos obrigatórios estão marcados com *</p>
                            <form className="mt-7 text-sm text-zinc-500" action="">
                                <textarea className="border p-3 h-36 w-full outline-none resize-none" placeholder="Comentário *"></textarea>
                                <p className="flex lg:flex-row flex-col mt-4">
                                    <input className="border p-3 mr-6 lg:mb-0 mb-4 w-full outline-none" type="text" placeholder="Nome *" />
                                    <input className="border p-3 w-full outline-none" type="email" placeholder="E-mail *" />
                                </p>
                                <button className="px-10 py-4 font-semibold rounded bg-gray-900 mt-10 text-white flex items-center hover:opacity-90" type="submit"><span>Postar Comentário</span> <i className="icon ion-md-arrow-forward ml-4 text-xl text-white"></i></button>
                            </form>
                        </div>
                    </div>

                    <div className="mb-6 ">
                        <h2 className="text-center font-bold text-3xl mb-10">NOSSAS LOJAS</h2>
                        <div className="flex flex-wrap justify-center">
                            {info.map((i, k) =>
                                <OurStore key={k} cov={i.cover} title={i.title} email={i.email} phone={i.phone} />

                            )}
                        </div>
                    </div>
                    <div className="py-6 w-full">
                        <iframe className="border-0 w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.76457410638!2d2.276994756943471!3d48.858946581500916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2zUGFyaXMsIEZyYW7Dp2E!5e0!3m2!1spt-BR!2sbr!4v1643913108953!5m2!1spt-BR!2sbr" width="600" height="450" loading="lazy"></iframe>
                    </div>
                </div>
            </C.Container>
        </Theme>
    )
}