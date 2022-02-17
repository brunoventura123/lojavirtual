


export const Menu = () => {

    return (
        <div className="overflow-auto mt-6 lg:mt-0">
            <ul className="flex md:flex-row flex-col leading-8 md:leading-0  text-xs text-[#555] font-bold">
                <li id="1" className="text-blue-700 mr-4 hover:text-blue-700 cursor-pointer pb-1 border-b border-b-1 border-blue-700 ">TODOS</li>
                <li id="2" className="mr-4 hover:text-blue-700 cursor-pointer">MOBILE</li>
                <li id="3" className="mr-4 hover:text-blue-700 cursor-pointer">HEADPHONE</li>
                <li id="4" className="mr-4 hover:text-blue-700 cursor-pointer">CÂMERA</li>
                <li id="5" className="mr-4 hover:text-blue-700 cursor-pointer">DRONE</li>
                <li id="6" className="mr-4 hover:text-blue-700 cursor-pointer">ALTO FALANTE</li>
            </ul>
        </div>
    )
}