import { Routes, Route } from 'react-router-dom';
import {Home} from '../views/Home';
import {Login} from '../views/Login';
import { Productos } from '../views/Productos';
import { Ventas } from '../views/Ventas';
import { Reportes } from '../views/Reportes';
import { Usuarios } from '../views/Usuarios';
import { Dash } from '../views/Dashboard';
import { NewUser } from '../views/NewUser';
import { UsersList } from '../views/UsersList';

export const RoutesWeb = () =>{
    return(
        <Routes>
            <Route path="/" element={ <Home/> } />

            <Route path="/dashboard/*" element={ <Dash/> } >

                <Route path="productos" element={ <Productos/> } />
                <Route path="ventas" element={ <Ventas/> } />
                <Route path="reportes" element={ <Reportes/> } />

                <Route path="usuarios/*" element={ <Usuarios/> } >
                    <Route path="create-user" element={ <NewUser/> } />
                    <Route path="users-list" element={ <UsersList/> } />
                    <Route path=":id" element={ <NewUser/> } />
                </Route>

            </Route>

            <Route path="/login" element={ <Login/> } />
        </Routes>
    )
}