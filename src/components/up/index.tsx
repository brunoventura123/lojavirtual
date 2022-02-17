import { useEffect } from "react"

export const Up = () => {
    useEffect(() => {
        let scrolls = document.querySelector('.scroll') as HTMLHtmlElement
        scrolls.style.display = 'none'
    }, [])
    function decidir() {
        let scrolls = document.querySelector('.scroll') as HTMLHtmlElement
        if (window.scrollY > 500) {
            scrolls.style.display = 'block'
        } else {
            scrolls.style.display = 'none'
        }
    }
    window.addEventListener('scroll', decidir)

    function subirTela() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <div onClick={subirTela}
            className="scroll bg-white text-black fixed bottom-10 right-10 md:p-3 md:px-5 py-1 px-3 rounded cursor-pointer shadow-lg">
            <i
                className="icon ion-md-arrow-up md:text-4xl text-2xl text-zinc-800">
            </i>
        </div>
    )
}