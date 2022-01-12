import styled from 'styled-components';
import { theme } from '../../theme';
import {ReactComponent as svgMenu} from '../../images/menu.svg';

export const Navigation = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    background: ${theme.grisTransparente};
    padding: 18px 12px;
    color: ${ theme.blanco };

    ul{
        width: max-content;
        display: flex;
        gap: 20px;
        list-style: none;
        li{
            a{
                color: ${ theme.blanco };
                text-decoration: none;
                cursor: pointer;
                &:hover{
                    color: ${ theme.azulTransparente };
                }
            }
        }
    }

    button{
        width: max-content;
        background: transparent;
        border: none;
        color: ${theme.rojo};
        font-size: 16px;

        @media (max-width: 500px){
            display: ${ (props)=>props.visible === true ? 'block' : 'none' };
        }
    }
    

    @media (max-width: 500px){
        flex-direction: column;
        gap: 20px;
        transition: ease-in-out all .4s;
        padding: ${ (props)=> props.visible === true ? '18px 12px' : '0px' };
        height: ${ (props)=> props.visible === true ? '220px' : '0px' };

        ul{
            flex-direction: column;
            font-size: 18px;
            overflow: hidden;
        }
    }

`;

export const Svg = styled(svgMenu)`
    width: 40px;
    height: 40px;
    position: absolute;
    right: 10px;
    top: 10px;
    display: none;
    cursor: pointer;

    @media (max-width: 500px){
        display: block;
    }
`;