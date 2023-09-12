import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export function ButtonText (){
    return (
        <Container>

            <div>
                <div className="iconLeft">
                    <Link to="/">
                        <FiArrowLeft/>Voltar
                    </Link>
                </div>
                
            </div>
    </Container>
)
}