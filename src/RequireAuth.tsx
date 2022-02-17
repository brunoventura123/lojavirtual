import { useNavigate } from 'react-router-dom'

type Props = {
    children: JSX.Element
}

export const RequireAuth = ({ children }: Props) => {
    const navigate = useNavigate()
    const isAuth = true
    if (isAuth) {
        return children;
    } else {
        navigate('/login')
        // abrir modal de login/register
        return null
    }

}