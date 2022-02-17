import { Theme } from '../../components/theme'
import { WishItem } from '../../components/wishItem'

export const WhishList = () => {

    const list = [1, 2, 3, 4, 5]

    return (
        <Theme>
            <div className='md:px-8 px-4 md:py-24 py-8 w-full'>
                <table className='w-full'>
                    <tr className="text-xl w-full md:flex hidden border-b">
                        <th className='text-left font-medium flex w-full justify-between px-3 py-2'><span className='w-1/3'>Produtos</span><span className='w-1/3'>Preço</span><span className='w-1/3 mr-4'>Em Estoque</span ><span className="w-1/6" ></span></th>
                    </tr>
                    {list.map((i, k) =>

                        <tr key={k} className='md:border-b'>
                            <td><WishItem /></td>
                        </tr>
                    )}
                </table>
                <div className='flex md:flex-row flex-col mt-6'>
                    <span className='font-bold text-lg'>Compartilhar:</span>
                    <div className='ml-3'>
                        <i className="icon ion-logo-facebook mr-6 text-xl hover:opacity-80 cursor-pointer text-blue-800 rounded-full"></i>
                        <i className="icon ion-logo-twitter mr-6 text-xl hover:opacity-80 cursor-pointer text-blue-500 rounded-full"></i>
                        <i className="icon ion-logo-pinterest mr-6 text-xl hover:opacity-80 cursor-pointer text-red-800 rounded-full"></i>
                        <i className="icon ion-logo-googleplus mr-6 text-xl hover:opacity-80 cursor-pointer text-red-500 rounded-full"></i>
                        <i className="icon ion-logo-whatsapp mr-6 text-xl hover:opacity-80 cursor-pointer text-green-600 rounded-full"></i>
                    </div>
                </div>
            </div>
        </Theme>
    )
}