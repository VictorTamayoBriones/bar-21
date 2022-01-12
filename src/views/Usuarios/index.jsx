import styled from 'styled-components';
import { theme } from '../../theme';
import { Table } from '../../components/Table';
import { ReactComponent as PencilSvg } from '../../images/pencil.svg';
import { ReactComponent as TrashSvg } from '../../images/trash.svg';

export const Usuarios = () =>{
    return(
        <Table>
            <tr>
                <td>Jose Ramon Hernandez Muñoz</td>
                <td>Empleado</td>
                <td>
                    <EditSvg title='Edit' />
                    <DeleteSvg title='Delete' />
                </td>
            </tr>
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