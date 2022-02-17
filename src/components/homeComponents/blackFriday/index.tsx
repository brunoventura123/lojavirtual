import { Link } from 'react-router-dom'
import * as C from './styles'
export const BlackFriday = () => {
    return (
        <C.Container className='h-auto mt-12 xl:p-10 p-4 text-white'>
            <div className='flex flex-col xl:flex-row xl:justify-between justify-center items-center h-full'>
                <h2 className='md:text-3xl text-xl italic '><b>BLACK</b> FRIDAY</h2>
                <p className='md:text-3xl text-lg text-center italic xl:my-0 my-4 xl:ml-48'>COMPRE OS <b>ELETRÔNICOS QUE VOCÊ AMA</b> </p>
                <button className='bg-blue-700  rounded font-semibold md:px-6 px-3 py-2 hover:bg-blue-600 md:py-3'><Link to='/productpage/id'>Comprar agora</Link></button>
            </div>
        </C.Container>
    )
}