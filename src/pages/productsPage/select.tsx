export const Select = () => {
    return (
        <div className="flex lg:flex-row flex-col lg:items-center justify-between mb-6">
            <div className="flex lg:flex-row flex-col lg:mb-0 mb-4">
                <select className="border border-gray-300 py-2 px-3 text-xs rounded bg-transparent mr-5 outline-none lg:mb-0 mb-2">
                    <option selected>Tamanho</option>
                    <option>Extra Grande</option>
                    <option>Grande</option>
                    <option>Médio</option>
                    <option>Pequeno</option>
                </select>
                <select className="border border-gray-300 py-2 px-3 text-xs rounded bg-transparent mr-5 outline-none lg:mb-0 mb-2">
                    <option selected>Cor</option>
                    <option>Preto</option>
                    <option>Azul</option>
                    <option>Marrom</option>
                    <option>Verde</option>
                </select>
                <select className="border border-gray-300 py-2 px-3 text-xs rounded bg-transparent mr-5 outline-none lg:mb-0 mb-2">
                    <option selected>Preço</option>
                    <option>R$ 0,00 - R$ 50,00</option>
                    <option>R$ 51,00 - R$ 200,00</option>
                    <option>R$ 201 - R$999,00</option>
                    <option>R$ 1000,00 ...</option>
                </select>
                <select className="border border-gray-300 py-2 px-3 text-xs rounded bg-transparent mr-5 outline-none lg:mb-0 mb-2">
                    <option selected>Ordenar</option>
                    <option>Padrão</option>
                    <option>Mais Popular</option>
                    <option>Classificação Média</option>
                    <option>Mais Recentes</option>
                    <option>Menor Preço</option>
                    <option>Maior Preço</option>
                </select>
            </div>
            <div className="">
                <span>Mostrar: </span>
                <select className="border border-gray-300 py-2 px-3 text-xs rounded bg-transparent mr-5 outline-none">
                    <option>12</option>
                    <option>24</option>
                    <option>36</option>
                </select>
            </div>
        </div>
    )
}