import * as C from './styles'

export const Modal = () => {
    return (
        <C.Container className='fixed hidden flex items-center justify-center top-0 right-0 bottom-0 left-0 bg-[rgba(0,0,0,0.4)]'>
            <section className='flex md:flex-row flex-col-reverse w-auto bg-white h-4/5 md:h-96 rounded-xl text-center'>
                <div className='woman md:h-full h-1/2 rounded-xl'></div>
                <div className='textModal h-full text-zinc-800 md:pr-4 md:mr-4 flex flex-col items-center justify-center'>
                    <div className='x md:ml-12 h-8 mr-4 md:-mt-12 lg:-mt-16 -mt-4 '><i className="icon ion-md-close text-3xl font-bold cursor-pointer hover:text-4xl transiton duration-150 ease-out hover:rotate-90"></i></div>
                    <h3 className='text-xl mt-6 font-bold mb-1'>DESCONTO DE <span className='text-blue-700'>20%</span></h3>
                    <h2 className='text-3xl font-bold mb-2'>Inscreva-se na <span className='font-black '>CATURA</span></h2>
                    <p className='text-zinc-500 text-sm leading-6 text-center mb-4'>Assine a newsletter Catura eCommerce para receber atualizações oportunas de seus produtos favoritos.</p>
                    <form className='w-full px-4' action="">
                        <p className='w-full flex rounded justify-between bg-white border border-zinc-800 mb-6'>
                            <input className='px-2 py-3 text-xs flex-1 outline-none rounded' type="email" placeholder='Digite seu e-mail aqui...' />
                            <button className='bg-zinc-800 text-white px-3'>Enviar</button>
                        </p>
                        <label className='text-xs w-full text-center flex justify-center cursor-pointer items-center' htmlFor="pop-up">
                            <input className='mr-2' type="checkbox" name="" id="pop-up" />
                            Não mostrar este pop-up novamente
                        </label>
                    </form>

                </div>
            </section>
        </C.Container>
    )
}