import { Card, CardData, CardImage } from "../Card"
import { Container } from "./style"
import { Button } from '../Buttons';
import Promo from '../../images/PromoCaguama.jpg';
import Cantaritos from '../../images/cantaritos.jpg';
import Micheladas from '../../images/micheladas.jpg';
import Smirnoff from '../../images/smirnoff.jpg';

export const ShowProductos = () =>{
    return(
        <Container>
            <Card>
                <CardImage src={ Promo } />
                <CardData>
                    <h3>Promo Caguama</h3>
                    <p>$120</p>
                    <p className="existencia" >Exist: 30</p>
                    <Button>Details of product</Button>
                </CardData>
            </Card>
            <Card>
                <CardImage src={ Cantaritos } />
                <CardData>
                    <h3>Cantarito</h3>
                    <p>$50</p>
                    <p className="existencia" >Exist: 100</p>
                    <Button>Details of product</Button>
                </CardData>
            </Card>
            <Card>
                <CardImage src={ Micheladas } />
                <CardData>
                    <h3>Michelada</h3>
                    <p>$50</p>
                    <p className="existencia" >Exist: 100</p>
                    <Button>Details of product</Button>
                </CardData>
            </Card>
            <Card>
                <CardImage src={ Smirnoff } />
                <CardData>
                    <h3>Smirnoff</h3>
                    <p>$280</p>
                    <p className="existencia" >Exist: 5</p>
                    <Button>Details of product</Button>
                </CardData>
            </Card>
        </Container>
    )
}