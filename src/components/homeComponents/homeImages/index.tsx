import { Link } from 'react-router-dom'
import * as C from './styles'

export const HomeImages = () => {
    return (
        <C.Container>
            <div className="grid h-screen md:mt-0 mt-6 mb-20">
                <div className="topLeft overflow-hidden w-full flex col-start-1 md:col-end-5 col-end-7 row-start-1 md:row-end-3 row-end-2 ">
                    <div className='area1 md:py-0 py-2 md:pl-14 pl-4 text-white flex w-full h-auto'>
                        <div className=" h-full flex justify-center flex-col">
                            <p className='md:text-sm text-xs font-extralight md:mb-4 mb-2 md:flex hidden'>Mais de 200 produtos com desconto</p>
                            <h2 className='md:text-4xl text-lg md:font-bold font-semibold md:mb-4 mb-2'>CÂMERA NA PROMOÇÃO</h2>
                            <p className='flex flex-col'><span className='md:text-sm text-xs md:font-bold font-semibold'>A PARTIR DE <b className='text-yellow-500 md:text-2xl text-base'> R$ 299,99</b></span><button className='md:border-2 border md:text-sm text-xs md:mt-4 mt-2 md:w-44 w-32  md:font-bold font-semibold md:ml-0 ml-2 md:px-6 px-2  md:py-2 py-1 rounded hover:text-blue-800 hover:bg-white transition ease-out duration-150'><Link to='/productpage/id'>COMPRE AGORA</Link></button>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="topRight md:row-start-1 row-start-2  row-end-3  md:col-start-5 md:col-end-7 col-start-1 col-end-7 text-center text-white pt-6">
                    <p className='md:text-base text-sm mb-4 decoration-black'>TROQUE SEU TELEFONE POR ATÉ R$ 300,00</p>
                    <h2 className='md:text-3xl text-xl font-bold'>Novo Galaxy S9</h2>
                </div>
                <div className="text-white inline-block pl-12 flex flex-col justify-center bottomLeft col-start-1 md:col-end-4 col-end-7">
                    <h2 className='md:text-2xl text-lg mb-2 inline-block'>NIKON 850 <br /><b>Festa de lançamento</b></h2>
                    <span className='mb-2'>Evento grátis</span>
                    <b className='md:text-lg text-base'>R$ 299,99 <span className='text-gray-400 line-through ml-1'> R$ 400,99</span></b>
                </div>
                <div className="flex justify-center flex-col text-white pl-8 md:pl-12 bottomRight md:col-start-4 col-start-1 col-end-7">
                    <h2 className='md:text-xl text-sm font-bold'>Coleção de Airpods<br /><b className='md:text-2xl text-lg'>Recém chegadas</b></h2>
                    <p className='md:text-sm text-xs md:mb-3 mb-2'>Wireless, Effortiess, Magical</p>
                    <b className='md:text-xl text-lg'>Desconto de <span className='text-yellow-500 '>20%</span></b>
                </div>
            </div>
        </C.Container>
    )
}