import {Container} from './styles';

export function Textarea ({value, ...rest}){
    return(
        <Container 
        type="text"
        {...rest}
        >
            {value}
        </Container>
    )
}