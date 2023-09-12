import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Container, Content, Form } from './styles';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { MovieItem } from '../../components/MoviesItem';
import { Button } from '../../components/Button';


export function NewMovies (){
    return(
        <Container>
            <Header/>
            <Content>
                <ButtonText/>
                    <h1>Novo filme</h1>
                <Form>
                    <div className="inputs">
                        <Input
                        type="text"
                        placeholder="Título"
                        />

                        <Input
                        type="text"
                        placeholder="Sua nota (de 0 a 5)"
                        />
                    </div>
                    <Textarea
                        placeholder="Observações"
                    />
                </Form>

                <h2>Marcadores</h2>
                <div className="News">
                    <MovieItem
                    placeholder="React"
                    />
                    <MovieItem
                    placeholder="Novo Marcador"
                    isNew
                    />
                </div>
                <footer>
                    <Button title="Excluir filme" isNew/>
                    <Button title="Salvar alterações"/>
                </footer>
            </Content>
        </Container>
    )
}