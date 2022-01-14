import styled from 'styled-components';
import { theme } from '../../theme';

export const Button = styled.button`
    width: ${ (props)=> {
        if( props.small ){
            return '20%'
        }else if( props.medium ){
            return '80%'
        }else{
            return '100%'
        }
    }};
    background: ${ theme.moradoClaro };
    color: ${ theme.blanco };
    margin-right: ${ (props)=> props.mr ? '65px' :'0px' };
    border: none;
    border-radius: 5px;
    padding: 5px;
    font-size: 16px;
    letter-spacing: .5px;
    cursor: pointer;
    transition: ease all .2s;
    &:hover{
        background: ${ theme.moradoClaroHover };
        box-shadow: 0px 0px 9px 5px ${ theme.moradoClaroTransparente };
    }
`;