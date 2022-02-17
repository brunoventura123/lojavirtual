type Props = {
    children: any
}

export const MyAccountModel = ({ children }: Props) => {
    return (
        <section className="border-t w-full px-2 md:px-10 ">
            <h2 className="text-center text-3xl font-bold mt-20 mb-10">Minha Conta</h2>
            {children}
        </section>
    )
}