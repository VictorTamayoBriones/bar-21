import { Search } from '../../components/Search';
import { ShowProductos } from '../../components/ShowProductos';
import { Container } from './style';

export const Productos = () => {
    return(
        <Container>
            <Search/>
            <ShowProductos/>
        </Container>
    )
}