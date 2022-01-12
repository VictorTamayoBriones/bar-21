import { Table } from "../Table"
import { Input } from '../Inputs';
import { Button } from '../Buttons';
import { Container } from "./style";

export const NewVenta = () =>{
    return(
        <Container>
            <Table border={false} >
                <tr>
                    <td><Input type="text" placeholder="Producto" /></td>
                    <td><Input type="text" placeholder="Cantidad" /></td>
                    <td><Input type="text" placeholder="$" /></td>
                </tr>
                <tr>
                    <td><Input type="text" placeholder="Producto" /></td>
                    <td><Input type="text" placeholder="Cantidad" /></td>
                    <td><Input type="text" placeholder="$" /></td>
                </tr>
                <tr>
                    <td><Input type="text" placeholder="Producto" /></td>
                    <td><Input type="text" placeholder="Cantidad" /></td>
                    <td><Input type="text" placeholder="$" /></td>
                </tr>
                <tr>
                    <td><Input type="text" placeholder="Producto" /></td>
                    <td><Input type="text" placeholder="Cantidad" /></td>
                    <td><Input type="text" placeholder="$" /></td>
                </tr>
                <tr>
                    <td><Input type="text" placeholder="Producto" /></td>
                    <td><Input type="text" placeholder="Cantidad" /></td>
                    <td><Input type="text" placeholder="$" /></td>
                </tr>
                <tr>
                    <td><Input type="text" placeholder="Producto" /></td>
                    <td><Input type="text" placeholder="Cantidad" /></td>
                    <td><Input type="text" placeholder="$" /></td>
                </tr>
            </Table>
            <Button>Registar Venta</Button>
        </Container>
    )
}