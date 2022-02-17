import { Link } from 'react-router-dom'
import * as C from './styles'

export const NotFound = () => {
    return (
        <C.Container>
            <div className="frem">
                <p>404</p>
                <h2>Parece que você está perdido</h2>
                <h5>a página que você está procurando não está disponível!</h5>
                <Link to="/">Voltar ao Início</Link>
            </div>
        </C.Container>
    )
}