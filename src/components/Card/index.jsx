import styled from 'styled-components';
import { theme } from '../../theme';

export const Card = styled.div`
    width: 100%;
    height: max-content;
    background: ${ theme.moradoOscuro };
    border-radius: 8px;
    color: ${ theme.blanco };
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    box-shadow: 0px 0px 10px 5px ${ theme.moradoClaroTransparente };
    overflow: hidden;
`;

export const CardImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    grid-row-start: 1;
    grid-row-end: 4;
`;

export const CardData = styled.div`
    width: 100%;
    display: grid;
    padding: 10px;
    gap: 10px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    h3, button{
        grid-column-start: 1;
        grid-column-end: 3;
    }
    .existencia{
        color: ${ theme.verde };
    }
`;