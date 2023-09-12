import { AiFillStar } from 'react-icons/ai';
import { Tags } from '../../components/Tag';

import { Container } from "./styles";


export function Section ({title, children}){
    return(
        <Container>
            <h2>{title}</h2>
            {children}
            <div className="icon">
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
            </div>
            <p>
            Em Fratura, Ray (Sam Worthington) está viajando pelo país com a família. 
            Quando ele para em uma área de descanso da estrada, Peri (Lucy Capri) cai e quebra o 
            braço. Depois de uma corrida frenética para o hospital e um confronto com a enfermeira, 
            Ray finalmente consegue ser atendido. Enquanto sua esposa Joanne (Lily Rabe) e a filha 
            descem para uma ressonância magnética, Ray, exausto, desmaia em uma cadeira no saguão. 
            Ao acordar, eles descobrem que não têm nenhum registro no hospital, como se nunca tivessem 
            passado por lá.
            </p>
            <div className="tags">
                <Tags title="Suspense psicológico"/>
                <Tags title="Suspense"/>
                <Tags title="Ação"/>
            </div>
        </Container>
    )
}