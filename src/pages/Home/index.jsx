import { Button } from "../../components/Button";
import { IoIosAdd } from "react-icons/io";
import { Link } from 'react-router-dom';
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";

import { Container, Content } from "./styles";



export function Home (){

    return(
        <Container>
           <Header/>
           <main>
            <Content>
                <header>
                    <h2>Meus filmes</h2>
                    <div>
                        <Link to="/newmovies">   
                        <Button 
                        icon={IoIosAdd}
                        title="Adicionar filme"
                        /></Link>
                    </div>
                </header>
                <Section
                title="Fratura"

                />
                 <Section
                title="Fratura"
                
                />
                 <Section
                title="Fratura"
                
                />
                 <Section
                title="Fratura"
                
                />
            </Content>
           </main>
        </Container>
    )
}