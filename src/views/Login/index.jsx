import { Container, LoginContainer } from "./style"
import Image from '../../images/loginImg.png';
import { Input } from "../../components/Inputs";
import { Button } from "../../components/Buttons";
import { useState } from "react/cjs/react.development";

export const Login = () => {

    const[user, setUser]=useState('');
    const[pass, setPass]=useState('');

    const handleInputChange = ({target:{name, value}})=> {
        if( name === 'user' ){
            setUser(value);
        }else if( name === 'pass' ){
            setPass(value);
        }
    }

    return(
        <Container>
            <LoginContainer>
                <img src={ Image } alt="bar 21 xalpa" title="bar 21 xalpa" />
                    
                <form>
                    <h2>Sig in</h2>
                    <Input onChange={handleInputChange} type="text" placeholder="Usuario" name="user" required />
                    <Input onChange={handleInputChange} type="password" placeholder="Contraseña" name="pass" required />
                    <Button>Sig in</Button>
                </form>
            </LoginContainer>
        </Container>
    )
}