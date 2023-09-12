import { Container } from "./styles";

export function Button ({icon:Icon, title, isNew, loading = false, ...rest }){


    return(
        <Container
        isNew={isNew}
        type="button"
        disabled={loading}
        {...rest}
        
        >
            {Icon && <Icon size={26}/>}
            {title}
        </Container>
    )
}