import { Reporte } from "../../components/Reporte"
import { Container } from './style';
import styled from 'styled-components';
import { theme } from '../../theme';
import { ReactComponent as FileSvg } from "../../images/file-pdf.svg";

export const Reportes = () =>{
    return(
        <Container>
            <Reporte>
                <p>Generar Reporte de ventas</p>
                <p>Mayo - Agosto de 2022</p>
                <PdfFile/>
            </Reporte>
            <Reporte>
                <p>Generar Reporte de ventas</p>
                <p>Mayo - Agosto de 2022</p>
                <PdfFile/>
            </Reporte>
            <Reporte>
                <p>Generar Reporte de ventas</p>
                <p>Mayo - Agosto de 2022</p>
                <PdfFile/>
            </Reporte>
            <Reporte>
                <p>Generar Reporte de ventas</p>
                <p>Mayo - Agosto de 2022</p>
                <PdfFile/>
            </Reporte>
        </Container>
    )
}

const PdfFile = styled(FileSvg)`
    width: 60px;
    height: 60px;
    color: ${ theme.moradoOscuro };
    position: absolute;
    bottom: 12px;
    right: 12px;
    transition: ease all .5s;
`;