import { Link } from 'react-router-dom'
import phone from '../../../images/phone.png'

export const ImageSmall = () => {
    const productImgNewSale = phone
    return (
        <Link to='/productpage/id' className='border cursor-pointer hover:border-blue-600 h-full flex items-center p-4'>
            {/* product image area, image small */}
            <div className=''>
                <img className='hover:scale-110 duration-100 w-20' width="80px" height="96px" src={productImgNewSale} alt="productImgNewSale" />
            </div>
            <div className='ml-6'>
                <span className='text-sm hover:text-blue-600'>Black Speaker</span>
                <p className='mt-2 text-sm font-semibold'>R$ 600,00 - R$ 699,00</p>
            </div>
        </Link>
    )
}