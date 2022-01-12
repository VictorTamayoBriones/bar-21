import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    transform: translateY(20px);
    .buttons{
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 20px;
        button{
            width: 20%;
            font-size: 20px;
            padding: 20px;
        }
    }

    @media (max-width: 850px){
        .buttons{
            button{
                width: 45%;
                font-size: 16px;
                padding: 5px;
            }
        }
    }

    @media (max-width: 500px){
        transform: translateY(65px);
    }
`;