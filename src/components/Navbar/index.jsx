import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Navigation, Svg } from './style'

export const Navbar = () => {

    const [visible, setVisible]=useState(false);

    return(
        <Navigation visible={ visible } >
            <ul>
                <li><NavLink className={ ({isActive}) => (isActive ? 'active' : '' ) } to="/dashboard/productos" >Productos</NavLink></li>
                <li><NavLink className={ ({isActive}) => (isActive ? 'active' : '' ) } to="/dashboard/ventas">Ventas</NavLink></li>
                <li><NavLink className={ ({isActive}) => (isActive ? 'active' : '' ) } to="/dashboard/reportes">Reportes</NavLink></li>
                <li><NavLink className={ ({isActive}) => (isActive ? 'active' : '' ) } to="/dashboard/usuarios/users-list">Usuarios</NavLink></li>
            </ul>
            <button>Cerrar Sesión</button>
            <Svg onClick={ ()=>setVisible(!visible) } />
        </Navigation>
    )
}

