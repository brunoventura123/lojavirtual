
import { Link } from 'react-router-dom'
import * as C from './styles'

export const EmphasisArea = () => {
    return (
        <C.Container className='w-full md:h-96 flex md:flex-row flex-col mt-20 text-white'>

            <div className='bg1 py-4 pl-16 pr-0 md:pr-14 flex flex-col items-start md:items-end justify-center w-full h-full bg-center bg-cover'>
                <h2 className='md:text-3xl text-2xl font-semibold w-full md:w-4/6'>Não perca <br />Ofertas especiais</h2>
                <p className=' md:text-sm text-xs w-2/3 mt-4'>Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nibh id elit.</p>
                <div className='flex w-2/3 mt-6 justify-start '><Link className='font-bold border-2 border-white rounded py-2 px-3 md:py-3 md:px-5 hover:text-blue-900 hover:bg-white' to="productpage/1">Compre agora</Link></div>
            </div>

            <div className='bg2 p-8 pl-16 pr-0 flex flex-col justify-center items-start w-full h-full bg-center bg-cover'>
                <h2 className='md:text-3xl text-2xl font-semibold'>Novidades <span>HD8</span> <br />para educação</h2>
                <p className='md:text-sm text-xs w-2/3 mt-4'>Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nibh id elit.</p>
                <div className='flex lg:w-1/2 mt-6 '><Link className='font-bold border-2 border-blue-900 rounded py-2 px-3 md:py-3 md:px-5 bg-blue-900 hover:bg-blue-800 hover:border-blue-800' to="productpageitem/1">Compre agora</Link></div>
            </div>

        </C.Container>
    )
}