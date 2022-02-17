import { Link } from 'react-router-dom'
import phone from '../../../images/phone.png'
type Props = {
    view: boolean
}

export const ImageBig = ({ view }: Props) => {
    const productImgNewSale = phone
    return (
        <Link to='/productpage/id' className='flex lg:flex-col border cursor-pointer hover:border-blue-600'>
            {/* product image area, photo big */}
            {view &&
                <div className="flex flex-col p-4 w-4/12 text-center">
                    <span className="bg-blue-700 text-xs font-bold text-white py-1 block px-3 rounded">NOVO</span>
                    <span className="mt-1 bg-yellow-500 text-xs font-bold text-zinc-900 py-1 block pr-3 pl-2 rounded">PROMO</span>
                </div>
            }
            <div className='px-4 w-full items-center flex flex-col'>
                <div className='max-w-80 hover:scale-110 duration-100' ><img width="250px" height="300px" src={productImgNewSale} alt="productImgNewSale" /></div>
                <div className='text-center flex flex-col items-center w-full justify-center pb-4'>
                    <span className='text-xl font-bold lg:text-sm hover:text-blue-600'>Black Speaker</span>
                    <p className='mt-2 text-lg lg:text-sm font-semibold '>R$ 600,00 - R$ 699,00</p>
                </div>
            </div>
        </Link>
    )
}