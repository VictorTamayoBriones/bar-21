import axios from 'axios'
import styled from 'styled-components';
import { theme } from '../../theme';
import { useNavigate } from 'react-router-dom';
import { Table } from '../../components/Table';
import { ReactComponent as PencilSvg } from '../../images/pencil.svg';
import { ReactComponent as TrashSvg } from '../../images/trash.svg';
import { useState, useEffect } from 'react/cjs/react.development';

export const UsersList=()=>{

    const navigate = useNavigate();

    const[users, setUsers]=useState([]);

    const getUsers = async ()=>{
        const res = await axios.get('http://localhost:4000/api/users');
        setUsers(res.data);
    }

    const handleClickEdit =(id)=>{
        navigate(`/dashboard/usuarios/${id}`);
    }

    const handleClickDelete = async (id)=>{
        await axios.delete(`http://localhost:4000/api/users/${id}`);
        getUsers();
    }

    useEffect(()=>{
        getUsers();
    }, [])

    return(
        <Table>
            <tbody>
                {
                    users.map(({userName, userType, _id})=>{
                        return(
                            <tr key={_id} >
                                <td>{ userName }</td>
                                <td>{ userType }</td>
                                <td>
                                    {
                                        userType === 'empleado' ? <> <EditSvg title='Edit' onClick={()=>handleClickEdit(_id)} /> <DeleteSvg title='Delete' onClick={()=>handleClickDelete(_id)} /> </> : <EditSvg title='Edit' onClick={()=>handleClickEdit(_id)}/>
                                    }
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    )
}

const EditSvg = styled(PencilSvg)`
    width: 22px;
    height: 22px;
    margin: 5px;
    color: #fff;
    cursor: pointer;
    &:hover{
        color: ${ theme.moradoClaro };
    }
`;

const DeleteSvg = styled(TrashSvg)`
    width: 22px;
    height: 22px;
    margin: 5px;
    transform: translateX(20px);
    color: #fff;
    cursor: pointer;
    &:hover{
        color: ${ theme.moradoClaro };
    }
`;