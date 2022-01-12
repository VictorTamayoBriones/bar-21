import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 50px;
    padding: 20px 50px;

    @media (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 600px){
        grid-template-columns: 1fr;
    }
`;