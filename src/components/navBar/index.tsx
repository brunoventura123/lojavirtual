import { ReactElement, ReactHTML, ReactHTMLElement, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { JsxAttributeLike, JsxChild } from 'typescript'
import * as C from './styles'

type Props = {
    openMenu: boolean
}

export const NavBar = ({ openMenu }: Props) => {


    return (
        <C.Container className='menus' open={openMenu}>
            <nav className="menu">
                <ul className="menuItems">
                    <li>
                        <Link to="/productpage/mobile" className="item flex justify-center">
                            <i className="icon ion-md-tablet-portrait"></i>
                            <p className="title">Telefone Mobile<br />& Acessórios</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/productpage/camera" className="item flex justify-center">
                            <i className="icon ion-md-camera"></i>
                            <p className="title">Câmera, Foto <br />& Acessórios</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/productpage/portable" className="item flex justify-center">
                            <i className="icon ion-md-headset"></i>
                            <p className="title">Portáteis<br />Headphone</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/productpage/computers" className="item flex justify-center">
                            <i className="icon ion-md-desktop"></i>
                            <p className="title">Computadores<br />& Tablets</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/productpage/home" className="item flex justify-center">
                            <i className="icon ion-md-cafe"></i>
                            <p className="title">Casa, Cozinha<br />& Eletrônicos</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/productpage/video" className="item flex justify-center">
                            <i className="icon ion-md-laptop"></i>
                            <p className="title">Casa Vídeo<br />& Theater</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/productpage/gaming" className="item flex justify-center">
                            <i className="icon ion-md-baseball"></i>
                            <p className="title">Jogos &<br /> Acessórios</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/productpage/browse" className="item flex justify-center">
                            <i className="icon ion-md-more"></i>
                            <p className="title">Navegar<br />Mais</p>
                        </Link>
                    </li>
                </ul>
            </nav>
        </C.Container>
    )
}