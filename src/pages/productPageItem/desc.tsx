import * as C from './descStyles'
import { Comment } from '../../components/comment'
import avatar from '../../images/avatar.jpg'
import size from '../../images/size.png'

export const Desc = () => {
    return (
        <C.Container className="questions__accordions md:px-6">
            <div className="question-answer__accordion md:px-6">
                <div className="question">
                    <h3 className="text-lg text-gray-800 py-3 font-semibold hover:text-blue-600 transition duration-150 ease-out hover:ease-in">
                        Descrição
                    </h3>
                    <i className="icon ion-md-checkmark text-xl text-gray-800"></i>
                </div>
                <div className="answer text-sm text-zinc-500 font-medium leading-6 mt-2 mb-12" >
                    <p>Praesent id enim sit amet.Tdio vulputate eleifend in in tortor. ellus massa. siti iMassa ristique sit amet condim vel, facilisis quimequistiqutiqu amet condim Dilisis Facilisis quis sapien. Praesent id enim sit amet.</p>
                    <ul className='my-6 '>
                        <li><i className="icon ion-md-checkmark text-md mr-2 text-gray-800"></i>Praesent id enim sit amet.Tdio vulputate</li>
                        <li><i className="icon ion-md-checkmark text-md mr-2 text-gray-800"></i>Eleifend in in tortor. ellus massa.Dristique sitii</li>
                        <li><i className="icon ion-md-checkmark text-md mr-2 text-gray-800"></i>Massa ristique sit amet condim vel</li>
                        <li><i className="icon ion-md-checkmark text-md mr-2 text-gray-800"></i>Dilisis Facilisis quis sapien.</li>
                    </ul>
                    <p> Praesent id enim sit amet Praesent id enim sit amet odio vulputate eleifend in in tortor. Sellus massa, tristique sitiismonec tellus massa, tristique sit amet condim vel, facilisis quimequistiqutiqu amet condim vel, facilisis Facilisis quis sapien. Praesent id enim sit amet odio vulputate odio vulputate eleifend in in tortor. Sellus massa, tristique sitiismonec tellus massa, tristique sit ametcdimel,facilisis quimequistiqutiqu amet condim vel, facilisis Facilisis quis sapien. Praesent id enim sit amet odio vulputate</p>
                </div>
            </div>

            <div className="question-answer__accordion md:px-6">
                <div className="question">
                    <h3 className="text-lg text-gray-800 py-3 font-semibold hover:text-blue-600 transition duration-150 ease-out hover:ease-in">
                        Informação Adicional
                    </h3>
                    <i className="icon ion-md-checkmark text-xl text-gray-800"></i>
                </div>
                <div className="answer py-10">
                    <span className='font-semibold'>Categoria:</span><span className='ml-16 text-sm'>Smarthphone</span>
                </div>
            </div>

            <div className="question-answer__accordion md:px-6">
                <div className="question">
                    <h3 className="text-lg text-gray-800 py-3 font-semibold hover:text-blue-600 transition duration-150 ease-out hover:ease-in">
                        Guia de Tamanhos
                    </h3>
                    <i className="icon ion-md-checkmark text-xl text-gray-800"></i>
                </div>
                <div className="answer mt-8 mb-6">
                    <div className='flex justify-center mb-6'>
                        <img src={size} alt="" />
                    </div>
                    <table className='w-full '>
                        <thead className='bg-zinc-300'>
                            <tr className='font-semibold text-zinc-600'>
                                <td className='md:py-6 py-2 px-2'>Tamanho</td>
                                <td >Peito</td>
                                <td>Cintura</td>
                                <td>Quadril</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='text-sm font-bold text-zinc-800'>
                                <td className='py-4 px-2'>XS</td>
                                <td>34-36</td>
                                <td>27-29</td>
                                <td>34.5-36.5</td>
                            </tr>
                            <tr className='text-sm font-bold text-zinc-800 bg-blue-100'>
                                <td className='py-4 px-2'>S</td>
                                <td>36-38</td>
                                <td>29-31</td>
                                <td>36.5-38.5</td>
                            </tr>
                            <tr className='text-sm font-bold text-zinc-800'>
                                <td className='py-4 px-2'>M</td>
                                <td>38-40</td>
                                <td>31-33</td>
                                <td>38.5-40.5</td>
                            </tr>
                            <tr className='text-sm font-bold text-zinc-800 bg-blue-100'>
                                <td className='py-4 px-2'>L</td>
                                <td>40-42</td>
                                <td>33-36</td>
                                <td>40.5-43.5</td>
                            </tr>
                            <tr className='text-sm font-bold text-zinc-800'>
                                <td className='py-4 px-2'>XL</td>
                                <td>42-45</td>
                                <td>36-40</td>
                                <td>43.5-47.5</td>
                            </tr>
                            <tr className='text-sm font-bold text-zinc-800 bg-blue-100'>
                                <td className='py-4 px-2'>XXL</td>
                                <td>45-48</td>
                                <td>40-44</td>
                                <td>47.5-51.5</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="question-answer__accordion md:px-6">
                <div className="question">
                    <h3 className="text-lg text-gray-800 py-3 font-semibold hover:text-blue-600 transition duration-150 ease-out hover:ease-in">
                        Avaliações
                    </h3>
                    <i className="icon ion-md-checkmark text-xl text-gray-800"></i>
                </div>
                <div className="answer ">
                    <Comment avatar={avatar} />
                    <h2 className='mt-16 text-2xl font-bold text-zinc-800'>Adicionar Avaliações</h2>
                    <p className='text-xs font-medium text-zinc-500 mb-14'>Seu endereço de e-mail não será publicado. Os campos obrigatórios estão marcados com *</p>
                    <div className='flex items-center'>
                        <i className='text-xs mr-2'>Sua avaliação *</i>
                        <div>
                            <i className="icon ion-md-star cursor-pointer text-xl text-zinc-500"></i>
                            <i className="icon ion-md-star cursor-pointer text-xl text-zinc-500 mx-1"></i>
                            <i className="icon ion-md-star cursor-pointer text-xl text-zinc-500"></i>
                            <i className="icon ion-md-star cursor-pointer text-xl text-zinc-500 mx-1"></i>
                            <i className="icon ion-md-star cursor-pointer text-xl text-zinc-500"></i>
                        </div>
                    </div>
                    <form className="mt-5 text-sm text-zinc-500" action="">
                        <textarea className="border p-3 h-36 w-full outline-none resize-none" placeholder="Comentário *"></textarea>
                        <p className="flex lg:flex-row flex-col mt-4 mb-6">
                            <input className="border p-3 lg:mb-0 mb-4 md:mr-6 w-full outline-none" type="text" placeholder="Nome *" />
                            <input className="border p-3 w-full outline-none" type="email" placeholder="E-mail *" />
                        </p>
                        <label className='text-xs flex items-center cursor-pointer'>
                            <input type="checkbox" className='mr-2 cursor-pointer' />
                            Salve meu nome, e-mail e site neste navegador para a próxima vez que eu comentar.
                        </label>
                        <button className="md:px-8 py-3 w-full md:w-1/2 flex justify-center font-semibold rounded bg-blue-700 mt-10 text-white flex items-center hover:bg-blue-600" type="submit"><span className='text-lg'>Enviar</span> <i className="icon ion-md-arrow-forward ml-4 text-xl text-white"></i></button>
                    </form>
                </div>
            </div>
        </C.Container>
    )
}