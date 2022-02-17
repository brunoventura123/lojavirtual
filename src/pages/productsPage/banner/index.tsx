import { Link } from 'react-router-dom'
import * as C from './styles'

type Props = {
    bannerImg: string
}

export const Banner = ({ bannerImg }: Props) => {
    return (
        <C.Container bannerImg={bannerImg} className="w-full h-80 mb-8 rounded">
            <div className='h-full flex flex-col justify-center pl-8 md:pl-32'>
                <h2 className='text-blue-800 font-bold text-xl md:text-3xl mb-1'>Desconto de 25%</h2>
                <h1 className='text-black text-2xl md:text-4xl font-bold mb-2'>CROMEBOOK SIMLICITY</h1>
                <p className='font-medium text-zinc-900 text-base md:text-lg mb-4'>Galaxy Style</p>
                <Link className="border-2 border-zinc-900 rounded font-semibold px-3 py-1 md:px-5 md:py-3 w-max hover:text-white hover:bg-zinc-900" to="/productpageitem/1">Compre agora</Link>
            </div>
        </C.Container>
    )
}