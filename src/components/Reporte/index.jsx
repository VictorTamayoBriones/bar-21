import styled from 'styled-components';
import { theme } from '../../theme';

export const Reporte = styled.div`
    width: 30%;
    height: max-content;
    background: ${ theme.moradoClaro };
    border-radius: 5px;
    padding: 12px;
    position: relative;
    transition: ease all .5s;
    cursor: pointer;
    p{
        font-size: 18px;
        color: ${ theme.blanco };
        margin-bottom: 8px;
        position: relative;
        z-index: 1;
    }
    &:hover{
        box-shadow: 0px 0px 9px 5px ${ theme.moradoClaroTransparente };
        svg{
            color: ${theme.blanco};
            transform: scale(1.1) translate3d(-15px, 0px, 0px);
        }
    }
`;