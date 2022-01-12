import styled from 'styled-components';
import { theme } from '../../theme';

export const Input = styled.input`
    width: ${ (props)=> props.medium === true ? '80%' : '100%' };
    color: #fff;
    background: none;
    border: none;
    border-bottom: solid 1px #fff;
    padding: 5px 1px;
    letter-spacing: .5px;
    outline: none;
    font-size: 18px;
    transition: ease border-bottom .3s;
    &:focus{
        border-bottom: solid 1px ${ theme.moradoClaro };
    }
`;