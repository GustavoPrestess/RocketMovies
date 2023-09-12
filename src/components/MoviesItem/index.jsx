import { FiPlus, FiX } from 'react-icons/fi'

import { Container } from './styles'


export function MovieItem ({isNew, value, Onclick, ...rest}){
    return(
        <Container 
        isNew={isNew}
        >
            <input 
            type="text"
            value={value}
            readOnly={!isNew} //Se não for novo link não deixe editar
            {...rest}
            />
            <button
                type='button'
                Onclick={Onclick}
            >
                {isNew ? <FiPlus/> : <FiX/> }
            </button>
        </Container>
    )
}