import { ProductItem } from '../../components/productItem'
import * as C from './styles'
import cel from '../../images/cel.jpg'
import { Link } from 'react-router-dom'
import { Desc } from './desc'
import { Theme } from '../../components/theme'

export const ProductPageItem = () => {
    const list = [1, 2, 3, 4, 5]
    return (
        <Theme>
            <C.Container className='bg-gray-100 pb-14'>
                <div className='flex lg:flex-row flex-col mb-24 p-4 md:p-8 md:pr-6 relative'>
                    <div className="imagesArea h-screen overflow-auto lg:w-1/2">
                        <div className="slider bg-white p-12 mb-6">
                            <div className='image text-center'><img src={cel} alt="" /></div>
                        </div>
                        <div className="slider bg-white p-12 mb-6">
                            <div className='image '><img src={cel} alt="" /></div>
                        </div>
                        <div className="slider bg-white p-12 mb-6">
                            <div className='image '><img src={cel} alt="" /></div>
                        </div>
                    </div>
                    <div className="info lg:w-1/2">
                        <div className='md:p-6 text-zinc-500'>
                            <div className='border-b pb-8'>
                                <h2 className='font-bold text-2xl text-gray-900 mb-2'>Black Speaker</h2>
                                <p className='text-xs font-semibold mb-3'>SKU: 1234567893-2CATEGORIES: Accessories, Mobile, Speaker</p>
                                <span className='text-3xl text-yellow-500 font-bold'>R$99,99 - R$199,99</span>
                                <div className='flex items-center mt-2'>
                                    <div className='mr-2 text-xl'>
                                        <i className="icon ion-md-star cursor-pointer"></i>
                                        <i className="icon ion-md-star cursor-pointer mx-1"></i>
                                        <i className="icon ion-md-star cursor-pointer"></i>
                                        <i className="icon ion-md-star cursor-pointer mx-1"></i>
                                        <i className="icon ion-md-star cursor-pointer"></i>
                                    </div>
                                    <p className='text-xs hover:text-blue-700 cursor-pointer'>(1 avaliação)</p>
                                </div>
                                <p className='text-sm font-medium leading-6 my-4 mb-6'>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus liberpuro ate vol faucibus adipiscing.</p>
                                <p className='text-zinc-900'>Size: <span className='border px-2 py-1 text-gray-700 cursor-pointer hover:border-gray-900 transition duration-150 ease-out ml-2 md:ml-8 text-sm mr-2 md:mr-4'>XG</span><span className='border px-3 py-1 text-gray-700 cursor-pointer hover:border-gray-900 transition duration-150 ease-out ml-2 text-sm mr-2 md:mr-4'>G</span><span className='border px-3 py-1 text-gray-700 cursor-pointer hover:border-gray-900 transition duration-150 ease-out ml-2 text-sm mr-2 md:mr-4'>M</span><span className='border px-3 py-1 text-gray-700 cursor-pointer hover:border-gray-900 transition duration-150 ease-out ml-2 text-sm mr-2 md:mr-4'>P</span></p>
                            </div>
                            <div className='my-8 flex items-center pb-8 border-b'>
                                <div className='text-zinc-800 '>
                                    <span className='border border-zinc-500 rounded-tl rounded-bl text-xl px-2 py-2 cursor-pointer'>-</span>
                                    <span className='border border-l-0 border-r-0 border-zinc-500 text-xl px-5 py-2'>1</span>
                                    <span className='border border-zinc-500 text-xl px-2 py-2 rounded-tr rounded-br cursor-pointer'>+</span>
                                </div>
                                <button className='ml-4 bg-blue-600 rounded font-medium hover:opacity-90 text-white text-sm px-3 py-3 md:px-6 md:py-2 flex items-center'><i className="icon ion-md-gift text-2xl mr-2 md:flex hidden"></i> <span>Adicionar ao Carrinho</span></button>
                            </div>
                            <div className='flex md:flex-row flex-col items-center'>
                                <div className='text-gray-400 md:pr-2 border-zinc-400 md:border-r'>
                                    <i className="icon ion-logo-facebook mr-6 text-xl hover:opacity-80 cursor-pointer hover:text-blue-800 rounded-full "></i>
                                    <i className="icon ion-logo-twitter mr-6 text-xl hover:opacity-80 cursor-pointer hover:text-blue-500 rounded-full"></i>
                                    <i className="icon ion-logo-pinterest mr-6 text-xl hover:opacity-80 cursor-pointer hover:text-red-800 rounded-full"></i>
                                </div>
                                <Link to="" className='md:pl-6 text-sm hover:text-blue-700'><i className="icon ion-md-heart text-lg mr-2"></i> <span>Add a Lista de Desejos</span></Link>
                            </div>
                        </div>
                        <Desc />
                    </div>
                </div>

                <h2 className='text-xl text-center font-bold'>Produtos Relacionados</h2>
                <div className='bg-white mx-8 mt-6 grid lg:grid-cols-5 md:grid-cols-3'>
                    {list.map((i, k) =>
                        <ProductItem view={false} />
                    )}
                </div>
            </C.Container>
        </Theme>
    )
}