import * as C from './styles'

type Props = {
    cov: string,
    title: string,
    email: string,
    phone: string
}

export const OurStore = ({ cov, title, email, phone }: Props) => {
    return (
        <C.Container className='md:mr-4' banner={cov}>
            <div className='city w-72 h-72 text-white flex justify-center items-center text-center'>
                <div className='areaall'>
                    <h2 className='mb-3 font-bold text-xl'>{title}</h2>
                    <div className='areablack'>
                        <p className='mb-1'>{email}</p>
                        <p>Telefone: {phone}</p>
                        <div className='mt-2 flex justify-center'>
                            <i className="icon ion-logo-facebook mr-3 ml-3 text-xl hover:scale-125 transition duration-300 ease-in-out cursor-pointer  rounded-full"></i>
                            <i className="icon ion-logo-twitter mr-3 ml-3 text-xl hover:scale-125 transition duration-300 ease-in-out cursor-pointer  rounded-full"></i>
                            <i className="icon ion-logo-linkedin  mr-3 ml-3 text-xl hover:scale-125 transition duration-300 ease-in-out cursor-pointer  rounded-full"></i>

                        </div>
                    </div>

                </div>
            </div>
        </C.Container>
    )
}