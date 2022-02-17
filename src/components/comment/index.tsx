type Props = {
    avatar: string
}

export const Comment = ({ avatar }: Props) => {
    return (
        <article className="mt-6 md:px-6">
            <div className="flex md:flex-row flex-col">
                <div className="w-16 md:mb-0 mb-2"><img width='' height='' className="w-20 h-16 md:w-14 md:h-14" src={avatar} alt="people comment avatar" /></div>
                <div className="flex-1 flex md:flex-row flex-col items-end flex justify-between">
                    <div className="md:ml-4 ml-0 text-gray-600 text-sm leading-3 pb-1">
                        <span>22 de setembro de 2022 - 19:33:45</span>
                        <h4 className="text-lg font-bold text-zinc-800">Rafael Nadal</h4>
                    </div>
                    <div className="">
                        <i className="icon ion-md-star cursor-pointer text-xl text-zinc-500"></i>
                        <i className="icon ion-md-star cursor-pointer text-xl text-zinc-500 my-1"></i>
                        <i className="icon ion-md-star cursor-pointer text-xl text-zinc-500"></i>
                        <i className="icon ion-md-star cursor-pointer text-xl text-zinc-500 my-1"></i>
                        <i className="icon ion-md-star cursor-pointer text-xl text-zinc-500"></i>
                    </div>
                </div>
            </div>
            <p className="text-sm text-zinc-500 md:w-4/5 md:mr-7 m-auto leading-7 font-medium">Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.</p>
        </article>
    )
}