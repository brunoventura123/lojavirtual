import { Link } from 'react-router-dom'
import * as C from './styles'
import logo from '../../images/logo.png'
import { useEffect, useState } from 'react'
import { Cart } from '../cart'
import { NavBar } from '../navBar'
import React from 'react'



export const Header = () => {
    const [open, setOpen] = useState(false)
    const [close, setClose] = useState(false)

    return (
        <C.Container>
            <C.InfoArea>
                <div className='area'>
                    <div className='marquee'>
                        Seja Bem-vindo a Loja Catura! Boas Compras!
                    </div>
                    <nav className="info">
                        <ul>
                            <li className='cursor-pointer hover:opacity-90 md:flex hidden '><Link to="/panel">Painel</Link></li>
                            <li className='cursor-pointer hover:opacity-90 md:flex hidden'><Link to="/myaccount/dashboard">Minha Conta</Link></li>
                            <li className='md:flex hidden'><Link className='md:flex hidden' to="/contact"><i className="icon ion-md-pin contact"></i><span className='md:flex hidden'>Contato</span></Link></li>
                            <li className=' flex items-center justify-between md:flex hidden'><p className='cursor-pointer hover:opacity-80 flex items-center'><Link to="/login"><i className="icon ion-md-contact"></i>Entrar </Link></p></li>
                            <li className=' flex items-center justify-between md:flex hidden'> <p className='cursor-pointer hover:opacity-80 flex items-center'><Link to="/register"> Cadastrar</Link></p></li>

                        </ul>
                    </nav>
                </div>
            </C.InfoArea> <hr />
            <C.SearchArea >
                <div className='area'>
                    <i onClick={() => setClose(!close)} className="icon ion-md-list text-3xl mx-4 menuToggle"></i>
                    <Link to="/"><img width='100%' height='auto' src={logo} alt="Logo" /></Link>

                    <div className='w-1/3 flex items-center bg-white rounded md:flex hidden'><input className='w-full px-3 py-2 ml-2 outline-none bg-none text-zinc-600 text-sm md:flex hidden' type="text" name="search" placeholder='Pesquisar...' /><i className="icon ion-md-search text-zinc-600 pr-2 text-xl md:flex hidden"></i></div>

                    <div className="details">
                        <a href="/productpage" title='Ligar'><div className="phone"><i className="icon ion-md-call"></i><p className='close'><span>Ligue Agora: <br /><b>(33)99999-8888</b></span></p></div></a>
                        <Link className="heart md:flex hidden" to="/wishlist/1"><i className="icon ion-md-heart" title='Desejos'></i></Link>
                        <div onClick={() => setOpen(true)} className="cart" title='Carrinho'><p className='close'><span>Carrinho:<br /><b>R$297,00</b></span></p></div><i onClick={() => setOpen(true)} className="icon ion-md-cart text-2xl md:pr-8 cursor-pointer hover:opacity-80" title='Carrinho'></i>
                    </div>
                </div>
            </C.SearchArea>
            <NavBar openMenu={close} />
            <Cart move={open} />
        </C.Container>
    )
}