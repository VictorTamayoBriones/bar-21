import styled from 'styled-components';
import { theme } from '../../theme';

export const Table = styled.table`
    width: 90%;
    margin: auto;
    border: ${ (props)=>props.border ? 'solid 1px ${ theme.moradoClaro }' : 'none' };
    border-radius: 5px;
    color: ${ theme.blanco };
    tr{
        &:nth-child(odd){
            background: ${ theme.grisTransparente };
        }
        td{
            padding: 5px;
        }
    }

    @media (max-width: 500px){
        width: 100%;
    }
`;