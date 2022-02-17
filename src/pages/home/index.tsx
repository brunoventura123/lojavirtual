import { BlackFriday } from "../../components/homeComponents/blackFriday"
import { EmphasisArea } from "../../components/homeComponents/duoProduct"
import { HomeImages } from "../../components/homeComponents/homeImages"
import { LatestNew } from "../../components/homeComponents/latestNew"
import { ProductItem } from "../../components/productItem"
import { ImageBig } from "../../components/homeComponents/todayDeals/imageBig"
import { ImageSmall } from "../../components/homeComponents/todayDeals/imageSmall"
import { Menu } from '../../components/menu'
import { Link } from "react-router-dom"
import { Theme } from "../../components/theme"
import * as C from './styles'



export const Home = () => {
    let list = [1, 2, 3, 4, 5]
    let list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let list2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <Theme>
            <C.Container>
                <HomeImages />

                <div className="flex md:flex-row flex-col justify-between mx-8 mb-4">
                    <h2 className="text-base md:text-xl text-gray-900 font-bold">Melhores promoções do dia</h2>
                    <Link className="md:text-base text-sm font-semibold	flex items-center hover:text-blue-700" to="/productpage">Ver mais <i className="icon ion-md-arrow-forward md:text-xl text-base ml-2"></i></Link>
                </div>

                <div className=" mx-8 flex lg:flex-row flex-col">
                    <ImageBig view />
                    <ul className="flex-1 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid-rows-3">
                        {list1.map((i, k) =>
                            <li key={k} className=""><ImageSmall /></li>
                        )}
                    </ul>
                </div>

                <EmphasisArea />
                <div className="bg-gray-100 py-20 ">
                    <div className=" mx-8 flex flex-col ">
                        <div className="flex lg:flex-row flex-col justify-between items-center mb-6 ">
                            <h2 className="text-xl font-bold">Produtos em Destaque</h2>
                            <Menu />
                        </div>
                        <ul className="flex-1 grid lg:grid-cols-5 md:grid-cols-3 grid-rows-2 bg-white">
                            {list2.map((i, k) =>
                                <li key={k}>
                                    <ProductItem view={false} />
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className=" p-8 flex flex-col">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold ">Nosso destaque</h2>
                        <Link className="text-md font-semibold	flex items-center hover:text-blue-700" to="/productpage">Ver mais <i className="icon ion-md-arrow-forward text-xl ml-2"></i></Link>
                    </div>
                    <div className="flex lg:flex-row flex-col">
                        <ImageBig view={false} />
                        <ul className="flex-1 grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 grid-rows-3">
                            {list1.map((i, k) =>
                                <li key={k} className=""><ImageSmall /></li>
                            )}
                        </ul>
                    </div>
                </div>

                <BlackFriday />
                <div className="bg-gray-100 py-20 pt-16 ">
                    <div className=" mx-8 flex flex-col ">
                        <div className="flex justify-between items-center mb-6 ">
                            <h2 className="text-xl font-bold">Mais Vistos</h2>
                            <Link className="text-md font-semibold	flex items-center hover:text-blue-700" to="/productpage">Ver mais <i className="icon ion-md-arrow-forward text-xl ml-2"></i></Link>
                        </div>
                        <ul className="flex-1 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 grid-rows-1 bg-white">
                            {list.map((i, k) =>
                                <li key={k}>
                                    <ProductItem view={false} />
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className="pt-16 pb-24 px-8">
                    <h2 className="text-xl font-bold">Últimas Notícias</h2>
                    <div className="flex xl:flex-row flex-col">
                        <LatestNew />
                        <LatestNew />
                    </div>

                </div>
                {/*<LoginRegister show={false} />*/}
            </C.Container>
        </Theme>
    )
}