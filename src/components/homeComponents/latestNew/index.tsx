import { Link } from "react-router-dom"

import * as C from './styles'

export const LatestNew = () => {
    return (
        <C.Container>
            <div className="flex flex-col md:flex-row items-center h-auto mt-4 overflow-x-hidden overflow-y-hidden ">
                <div className="img rounded-md mr-6 mb-8"></div>
                <div className="text-sm font-semibold text-[#555] pl-6 lg:w-1/2 md:px-0 px-10">
                    <p>Em 02 de Mar de 2022 | 1 Comentário</p>
                    <p className="mb-4 mt-1 text-black font-bold hover:text-blue-600 cursor-pointer">O melhor da tecnologia em 2022</p>
                    <p className="mb-4 text-sm leading-6 font-medium">Um texto falando sobre as melhores tecnologias deste ano, para você fazer muitas compras ascertivas.</p>
                    <Link className="text-blue-700 font-bold flex items-center hover:text-blue-500 w-1/3" to="/">Leia Mais <i className="icon ion-md-arrow-forward text-xl ml-2"></i></Link>
                </div>
            </div>
        </C.Container>
    )
}