import { useState } from "react";
import { Button } from "../../components/Buttons"
import { Container } from "./style"
import { NewVenta } from '../../components/NewVenta';
import { VentasDelDia } from "../../components/VentasDelDia";

export const Ventas = () =>{

    const[viewSection, setViewSection ]=useState(false);

    const handleClick = ({target:{name}}) => {
        if( name === 'newVenta' ){
            setViewSection('newVenta');

        }else if( name === 'ventaDia' ){
            setViewSection('ventaDia');

        }else{
            setViewSection(false);
        }
    }

    return(
        <Container>
            <div className="buttons">
                <Button name="newVenta" onClick={handleClick} >Nueva venta</Button>
                <Button name="ventaDia" onClick={handleClick} >Ventas del día</Button>
            </div>
            { viewSection === 'newVenta' ? <NewVenta/> : '' }
            { viewSection === 'ventaDia' ? <VentasDelDia/> : '' }
        </Container>
    )
}