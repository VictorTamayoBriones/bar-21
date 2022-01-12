import styled from 'styled-components';
import { theme } from '../../theme';


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LoginContainer = styled.div`
    width: 70%;
    height: 70vh;
    display: flex;
    border: solid 1px ${ theme.moradoClaro };
    border-radius: 8px;
    box-shadow: 0px 0px 9px 2px ${ theme.moradoClaroTransparente };
    overflow: hidden;
    animation: example 8s infinite;

    img{
        width: 50%;
        height: 70vh;
        object-fit: cover;
    }

    form{
        width: 40%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        padding: 60px 0px;
        gap: 60px;
        h2{
            color: #fff;
            letter-spacing: 1.3px;
            font-size: 30px;
        }
    }

    @media (max-width: 1000px){
        width: 95%;
        display: block;
        position: relative;

        img{
            width: 100%;
            position: relative;
            opacity: .2;
            z-index: 1;
        }
        form{
            width: 80%;
            left: 10%;
            position: absolute;
            top: 0;
            z-index: 2;
        }
    }

    @keyframes example{
        0% { box-shadow: 0px 0px 9px 2px ${ theme.moradoClaroTransparente }; }
        25% { box-shadow: 0px 0px 9px 2px ${ theme.azulTransparente }; }
        50% { box-shadow: 0px 0px 9px 2px ${ theme.moradoClaroTransparente }; }
        75% { box-shadow: 0px 0px 9px 2px ${ theme.azulTransparente }; }
        100% { box-shadow: 0px 0px 9px 2px ${ theme.moradoClaroTransparente }; }
    }
`;