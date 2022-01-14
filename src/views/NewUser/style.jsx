import styled from 'styled-components';
import { theme } from '../../theme';

export const FormUser = styled.form`
    width: 60%;
    height: max-content;
    padding: 20px;
    display: flex;
    flex-direction: column;
    background: ${ theme.grisTransparente };
    border: solid 1px ${ theme.moradoClaro };
    border-radius: 5px;
    transform: translateY(50px);
    gap: 40px;
`;

export const DualContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    input, select{
        width: 45%;
    }

`;