import * as C from './styles'
import logo from '../../images/logo.png'
import card from '../../images/mater.png'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <C.Container>
            <section className="flex lg:flex-row lg:py-20 py-16 flex-col text-sm">
                <div className="md:w-96 w-auto flex-col flex m-auto p-6 mb-8 pt-4 text-center">
                    <Link className='m-auto' to="/"><img width="172px" height="50px" className='h-12 mb-4' src={logo} alt="Logo" /></Link>
                    <p className="text-[#999] text-center text-sm leading-7">Fringilla urna porttitor rhoncus dolor purus luctus
                        venenatis lectus magna fringilla diam maecenas
                        ultricies mi eget mauris. <br /> <br /> <a className='hover:text-white' href="mailto:brunoventura70@gmail.com">brunoventura70@gmail.com</a>
                    </p>
                </div>
                <div className="flex lg:flex-row m-auto w-full md:text-left text-center flex-col md:flex-row flex-1 justify-between px-6 flex-col ">
                    <div className="about mb-12 lg:text-left">
                        <h2 className='text-[#e1e1e1] mb-6 text-lg font-bold'>Sobre Nós</h2>
                        <ul className='text-[#999] leading-8'>
                            <li><Link to="">Sobre Nós</Link></li>
                            <li><Link to="">Histórico de Pedidos</Link></li>
                            <li><Link to="">Devoluções</Link></li>
                            <li><Link to="">Serviço Customizado</Link></li>
                            <li><Link to="">Termos & Condições</Link></li>
                        </ul>
                    </div>
                    <div className="service  lg:text-left mb-12">
                        <h2 className='text-[#e1e1e1] mb-6 text-lg font-bold'>Serviços Customizados</h2>
                        <ul className='text-[#999] leading-8'>
                            <li><Link to="">Métodos de Pagamentos</Link></li>
                            <li><Link to="">Garantia de dinheiro de volta!</Link></li>
                            <li><Link to="">Devoluções</Link></li>
                            <li><Link to="">Envio</Link></li>
                            <li><Link to="">Termos e Condições</Link></li>
                        </ul>
                    </div>
                    <div className="myAccount  lg:text-left mb-12">
                        <h2 className='text-[#e1e1e1] mb-6 text-lg font-bold'>Minha Conta</h2>
                        <ul className='text-[#999] leading-8'>
                            <li><Link to="">Entrar</Link></li>
                            <li><Link to="">Ver o Carrinho</Link></li>
                            <li><Link to="">Minha Lista de Desejos</Link></li>
                            <li><Link to="">Localize meus pedidos</Link></li>
                            <li><Link to="">Ajuda</Link></li>
                        </ul>
                    </div>
                </div>
            </section>

            <div className="credit flex-col md:flex-row m-auto w-full  py-8 border-t flex items-center justify-between text-[#999]">
                <div className="card">
                    <img width="160px" height="30px" src={card} alt="card" />
                </div>
                <div className="my-6 md:my-0">Feito por <a className='hover:text-blue-900' href="mailto:brunoventura70@gmail.com" title='Desenvolvedor'>Bruno Ventura</a></div>
                <div className="social">
                    <a href="https://web.facebook.com/caturafacil" title='facebook'><i className="icon ion-logo-facebook text-4xl rounded cursor-pointer hover:text-blue-800"></i></a>
                    <a href="https://www.linkedin.com/in/brunoventura6/" title='linkedin'><i className="icon ion-logo-linkedin text-4xl mx-4 cursor-pointer hover:text-blue-800"></i></a>
                    <a href="https://www.instagram.com/bv_dev/" title='instagram'><i className="icon ion-logo-instagram text-4xl cursor-pointer hover:text-blue-800"></i></a>
                </div>
            </div>
        </C.Container>
    )
}