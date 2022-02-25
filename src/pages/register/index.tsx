import React, { FormEvent, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import * as C from './styles'

export const Register = () => {
    const navigate = useNavigate()

    const [disabled, setDisebled] = useState(false)
    const [menssage, setMenssage] = useState('')

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    const handleSend = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (name && email && password && password2 && password === password2) {
            setDisebled(true)
            let data = `Nome: ${name}; E-mail: ${email}; Senha: ${password}`
            console.log(data)
            alert('Conta criada com sucesso!')
            navigate('/login')
            setName('')
            setEmail('')
            setPassword('')
            setPassword2('')

        } else if (!name) {
            setMenssage('Digite seu nome')
        } else if (!email) {
            setMenssage('Digite um e-mail válido')
        } else if (password !== password2) {
            setMenssage('As senhas precisam ser iguais.')
        } else if (!password || !password2) {
            setMenssage('As senhas são obrigatórias.')
        }
    }

    useEffect(() => {
        if (name || email || password || password2) {
            setMenssage('')
        }
    }, [name, email, password, password2])

    const handleBack = () => {
        navigate('/')
    }

    return (
        <C.Container>
            <div className="md:px-0 px-2 min-h-screen flex flex-col items-center justify-center ">

                <form className="md:w-96 text-white text-md font-bold text-center " onSubmit={handleSend}>
                    <h2 className="text-center text-3xl mb-8 tracking-widest">Criar Conta</h2>
                    {menssage &&
                        <div className="text-red-900 text-lg font-normal  my-2 bg-red-400 ">{menssage}</div>
                    }
                    <label className="flex items-center">
                        <input
                            className=" border-b text-sm placeholder:text-white placeholder:font-extralight border-white bg-transparent py-2 px-3  my-2 outline-none w-full"
                            type="text"
                            placeholder="Nome"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            tabIndex={0}
                            disabled={disabled}
                            autoFocus
                        /> <br />
                    </label>
                    <label className="flex items-center my-4">
                        <input
                            className="border-b text-sm placeholder:text-white placeholder:font-extralight border-white bg-transparent py-2 px-3  my-2 outline-none w-full"
                            type="email"
                            placeholder="E-mail"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            disabled={disabled}
                        /> <br />
                    </label>
                    <label className="flex items-center">
                        <input
                            className="border-b text-sm placeholder:text-white placeholder:font-extralight border-white bg-transparent py-2 px-3 my-2 outline-none w-full"
                            type="password"
                            placeholder="Senha"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            disabled={disabled}
                        /> <br />
                    </label>
                    <label className="flex items-center mt-4 text-left">
                        <input
                            className="border-b placeholder:text-white placeholder:font-extralight text-sm border-white bg-transparent py-2 px-3 my-2 outline-none w-full"
                            type="password"
                            placeholder="Confirmar Senha"
                            value={password2}
                            onChange={e => setPassword2(e.target.value)}
                            disabled={disabled}
                        /> <br />
                    </label>
                    <input
                        className=" py-1 px-2 my-8 rounded bg-blue-600 text-white text-lg cursor-pointer w-1/2 text-center hover:bg-blue-700"
                        type="submit"
                        value="Criar Conta"
                        disabled={disabled}
                    />
                    <footer className="flex items-center justify-center font-normal text-sm text-center"><p className="mr-3 md:mr-10 text-blue-400 cursor-pointer" onClick={handleBack}>voltar</p><p className="">Se já tem uma conta? <Link className="text-blue-400 hover:underline" to="/login"> clique aqui.</Link></p></footer>
                </form>

            </div>
        </C.Container>
    )
}