import { Header } from "../header"
import { Footer } from '../footer'
import { Subscribe } from '../subscribe'
import { Up } from "../up"
import { Modal } from "../modal"

type Props = {
    children: any
}

export const Theme = ({ children }: Props) => {
    return (
        <>
            <Header />
            <div>
                {children}
            </div>
            <Subscribe />
            <Footer />
            <Modal />
            <Up />
        </>
    )
}