import styled from 'styled-components';
import { theme } from '../../theme';

export const Button = styled.button`
    width: ${ (props)=> props.medium ? '80%' : '100%' };
    background: ${ theme.moradoClaro };
    color: ${ theme.blanco };
    border: none;
    border-radius: 5px;
    padding: 5px;
    font-size: 16px;
    letter-spacing: .5px;
    cursor: pointer;
    transition: ease all .2s;
    &:hover{
        background: ${ theme.moradoClaroTransparente };
    }
`;