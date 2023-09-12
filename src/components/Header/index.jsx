import { FiSearch } from 'react-icons/fi';
import { RiShutDownLine} from 'react-icons/ri';
import { Link } from 'react-router-dom';

import { Input } from "../../components/Input";
import { Container, Profile } from "./styles";



export function Header (){
    return(
        <Container>
            <h1>RocketMovies</h1>
            <Input
            type="text"
            placeholder="Pesquisar pelo título"
            icon={FiSearch}
            />
            <Profile>
                <div>
                    <strong>Gustavo Prestes</strong>
                    <Link to="/"><RiShutDownLine/>Sair</Link>
                </div>
                <img 
                src="https://github.com/GustavoPrestess.png"
                alt="Foto Perfil" 
                />
            </Profile>
        </Container>
    )  
}