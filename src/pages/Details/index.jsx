
import { AiFillStar, AiOutlineClockCircle } from 'react-icons/ai';

import { Header } from '../../components/Header';
import { Tags } from '../../components/Tag';
import { ButtonText } from '../../components/ButtonText';

import { Container, Content } from './styles';


export function Details (){
    return(
        <Container>
            <Header/>
            <main>
                <Content>
                    <ButtonText/>
                    <div>
                        <h1>Fratura</h1>
                        <div className="iconStar">
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        </div>
                    </div>
                    
                    <div className="info">
                        <div className="user">
                            <div className="icon">
                                <img src="https://github.com/GustavoPrestess.png" alt="foto usuário" />
                            </div>
                            <span>Por Gustavo Prestes</span>
                        </div>

                        <div className="date">
                            <div className="icon">
                                <AiOutlineClockCircle/>
                            </div>
                            <span>10/09/22 às 14:00</span>
                        </div>
                    </div>

                    <Tags title="Suspense psicológico"/>
                    <Tags title="Suspense"/>
                    <Tags title="Ação"/>

                    <div className="text">
                        <p>
                            O longa se passa na jornada de Ray (Sam Worthington), que viaja com sua
                            esposa e filha para a casa dos sogros para o dia de Ação de Graças. 
                            Ao parar em um posto de gasolina beira de estrada, a sua filha acaba 
                            caindo em um canteiro de obras e ao tentar salvá-la, Ray também sofre 
                            uma queda.
                        </p>
                        <p>
                            Após o acidente, a família resolve procurar um hospital para verificar 
                            se realmente está tudo bem com a menina, que reclama de muita dor em seu 
                            braço. Porém, ao descer para realização de uma ressonância magnética, 
                            mãe e filha somem dentro do hospital e dos registros de entrada. 
                            Começa aí uma frenética busca pelo paradeiro da família de Ray, 
                            que desconfia que o hospital e seus funcionários escondem algo muito estranho dele.
                        </p>

                    </div>
                </Content>
            </main>
        </Container>
    )
}