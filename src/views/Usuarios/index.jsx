import { Button } from '../../components/Buttons';
import { Outlet, useNavigate } from 'react-router-dom';
import { Buttons, Container } from './style'

export const Usuarios = () =>{
    
    const navigate = useNavigate();

    return(
        <Container>
            <Buttons>
                <Button small mr  onClick={()=>{navigate('create-user')}} >Nuevo Usuario</Button>
                <Button small mr  onClick={()=>{navigate('users-list')}} >Lisat de Usuarios</Button>
            </Buttons>
            <Outlet/>
        </Container>
    )
}