import { Banner } from "./banner"
import { ProductItem } from "../../components/productItem"
import { Select } from "./select"
import bg from '../../images/notebook.jpg'
import { Theme } from "../../components/theme"

export const ProductPage = () => {
    const list = [1, 2, 3, 4, 5]
    const page = list.length / 3
    return (
        <Theme>
            <div className="md:px-8 px-2 bg-slate-50 pt-6">
                <Banner bannerImg={bg} />
                <Select />
                <ul className="grid lg:grid-cols-5 md:grid-cols-3 bg-white">
                    {list.map((i, k) =>
                        <li className=""><ProductItem view={false} /></li>
                    )}
                </ul>
                <div className="flex lg:flex-row flex-col justify-between mt-10 pb-20">
                    <p>Mostrando 1 - 14 de {list.length} produtos.</p>
                    <div className="lg:mt-0 mt-4">
                        <ul className="flex">
                            {list.map((i, k) =>
                                <li className="border px-3 mr-1 cursor-pointer hover:border-blue-700">{k + 1}</li>

                            )}

                        </ul>
                    </div>
                </div>
            </div>
        </Theme>
    )
}