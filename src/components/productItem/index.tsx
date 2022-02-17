import { Link } from 'react-router-dom'
import cel from '../../images/cel.svg'
import * as C from './styles'

type Props = {
    view: boolean
}

export const ProductItem = ({ view }: Props) => {
    const id = '1'
    const productImgNewSale = cel
    return (
        <C.Container className='border cursor-pointer hover:border-blue-600 '>
            <Link to={`/productpageitem/${id}`}>
                {view &&
                    <div className="flex flex-col p-4 w-4/12 text-center">
                        <p className="bg-blue-700 text-xs font-bold text-white py-1 block px-3 rounded">NOVO</p>
                        <p className="mt-1 bg-yellow-500 text-xs font-bold text-zinc-900 py-1 block pr-3 pl-2 rounded">PROMO</p>
                    </div>
                }
                <div className='px-4 overflow-hidden'><img width='172px' height='225px' className='hover:scale-110 duration-150' src={productImgNewSale} alt="" /></div>
                <div className='area h-14 '>
                    <div className='button z-10 bg-blue-700 hover:bg-blue-600 text-white text-center py-4 font-bold hidden'>Detalhes</div>
                </div>
                <div className='text-center pb-4 '>
                    <span className='text-sm hover:text-blue-600'>Black Speaker</span>
                    <p className='mt-2 text-sm font-semibold '>R$ 600,00 - R$ 699,00</p>
                </div>
            </Link>
        </C.Container>
    )
}