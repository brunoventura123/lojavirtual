import { FormEvent, useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import * as C from './styles'

export const Login = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [disabled, setDisebled] = useState(false)
    const [rememberPassword, setRememberPassword] = useState(false)
    const [menssage, setMenssage] = useState('')
    const [error, setError] = useState('')

    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (email && password) {
            setDisebled(true)
            navigate('/')
        } else {
            setMenssage('Preencha os campos!')
        }
    }

    useEffect(() => {
        if (email || password) {
            setMenssage('')
        }
    }, [email, password])

    const handleBack = () => {
        navigate('/')
    }

    return (
        <C.Container >
            <div className="md:px-0 px-2 min-h-screen flex flex-col items-center justify-center ">

                <form className=" md:w-96 text-white text-md font-bold text-center" onSubmit={handleLogin}>

                    <h2 className="text-center text-3xl mb-8 tracking-widest">Login</h2>
                    {menssage &&
                        <div className="text-red-900 text-lg font-normal  my-2 bg-red-400 ">{menssage}</div>
                    }
                    <label className="flex items-center">
                        <input
                            className="border-b text-sm placeholder:font-extralight placeholder:text-white border-white bg-transparent py-2 px-3 ml-2 my-8 outline-none w-full"
                            type="email"
                            placeholder="E-mail"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            disabled={disabled}
                            autoFocus
                        /> <br />
                    </label>
                    <label className="flex items-center">
                        <input
                            className="border-b text-sm placeholder:font-extralight border-bottom placeholder:text-white border-white bg-transparent py-2 px-3 ml-1 outline-none w-full"
                            type="password"
                            placeholder="Senha"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            disabled={disabled}
                        /> <br />
                    </label>
                    <div className="mt-8 font-normal text-left pl-4 ">
                        <label className="cursor-pointer text-sm font-extralight" htmlFor="save">

                            <input
                                className="cursor-pointer mr-2"
                                type="checkbox"
                                id="save"
                                checked={rememberPassword}
                                onChange={() => setRememberPassword(!rememberPassword)}
                            />
                            Lembrar Senha
                        </label>
                    </div>
                    <div className="flex flex-col items-center mt-8">
                        <input disabled={disabled} className=" py-1 px-2 my-8 rounded bg-blue-600 text-white text-lg cursor-pointer w-1/2 text-center hover:bg-blue-700" type="submit" value="Login" />
                    </div>
                    <footer className="flex items-center justify-center font-normal text-sm text-center"><p className="mr-2 md:mr-10 text-blue-400 cursor-pointer" onClick={handleBack}>voltar</p><p className="font-normal text-sm text-center ">Para criar uma conta <Link className="text-blue-400 hover:underline" to="/register">clique aqui.</Link></p></footer>

                </form>

            </div>
        </C.Container>
    )
}