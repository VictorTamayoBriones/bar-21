import { useParams, useNavigate } from 'react-router-dom';
import { Input } from "../../components/Inputs"
import { Button } from '../../components/Buttons';
import { FormUser, DualContainer } from "./style"
import { useEffect, useState } from 'react/cjs/react.development';
import axios from 'axios';

export const NewUser = () =>{
    const params = useParams();
    const navigate = useNavigate();

    const[userName, setUserName]=useState('');
    const[typeSelected, setTypeSelected]=useState('empleado');
    const[email, setEmail]=useState('');
    const[pass, setpass]=useState('');
    const[repeatPass, setRepeatPass]=useState('');
    const[editing, setEditing]=useState(false);
    const[idEditing, setIdEditing]=useState('');

    const handleChange = ({target:{value, name}})=>{
        if( name === 'userName' ){
            setUserName(value);
        }else if( name === 'typeSelected' ){
            setTypeSelected(value);
        }else if( name === 'email' ){
            setEmail(value);
        }else if( name === 'pass' ){
            setpass(value);
        }else if( name === 'repeatPass' ){
            setRepeatPass( value );
        }
    }

    const getData = async ()=>{
        const res = await axios.get(`http://localhost:4000/api/users/${idEditing}`)
        setUserName(res.data.userName);
        setTypeSelected(res.data.userType);
        setEmail(res.data.userEmail);
    }

    useEffect(()=>{

        if( params.id ){
            setEditing(true);
            setIdEditing(params.id);
        }

        if( editing ){
            getData();
        }

    },[editing]);

    const handleSubmit = async (e) =>{
        e.preventDefault();

        if( userName && typeSelected && email && pass && repeatPass ){
            if( pass === repeatPass ){

                const newUser = {
                    userName: userName,
                    userType: typeSelected,
                    userEmail: email,
                    userPass: pass
                }
                
                if( editing ){
                    await axios.put(`http://localhost:4000/api/users/${idEditing}`, newUser);
                }else{
                    await axios.post('http://localhost:4000/api/users', newUser);
                }

                setUserName('');
                setTypeSelected('empleado');
                setEmail('');
                setpass('');
                setRepeatPass('');

                navigate('/dashboard/usuarios/users-list');
            }
        }

    }

    return(
        <FormUser onSubmit={handleSubmit} >
            <DualContainer>
                <Input type='text' placeholder="Full Name" name='userName' value={userName} onChange={handleChange} />

                <select value={typeSelected} onChange={handleChange} name='typeSelected' >
                    <option value="empleado" >Empleado</option>
                    <option value="admin" >Administrador</option>
                </select>
            </DualContainer>

            <Input type="email" placeholder="Email" name='email' value={email} onChange={handleChange} />

            <DualContainer>
                <Input type="password" placeholder="Password" name='pass' value={pass} onChange={handleChange} />

                <Input type="password" placeholder="Repeat Password" name='repeatPass' value={repeatPass} onChange={handleChange} />
            </DualContainer>

            <Button>{ editing ? 'Update' : 'Save' }</Button>
        </FormUser>
    )
}