import React from "react";
import style from "../styles/Nav.module.css"
import { Link } from "react-router-dom";
import { useLocation } from 'react-router';
import { useSelector } from "react-redux";
import { useState } from "react";
import {Sidebar} from "../sidebar/Sidebar"
export const Nav = (props) => {
    const [celular, setCelular] = useState(false)

    const location = useLocation()
const recetaid = useSelector(state => state.recetaid)

return (

<nav >
<div className={style.div}>
{
location.pathname === '/home' ? <button className={style.button2}>Inicio</button> : 
<Link to="/home"> <button className={style.button}>Inicio</button></Link>
}
 {
 location.pathname === '/create' ? <button className={style.button2}>Crear receta</button> 
 : 
<Link to="/create"> <button className={style.button}>Crear receta</button></Link>
}
                    
{
location.pathname === '/detail/' + recetaid.id  ?
<button className={style.buttoninfo2}>Informacion</button>
: 
<button className={style.buttoninfo}>Informacion</button>
}

{ location.pathname === '/create' ? null : !celular ?
<button className={style.celular} onClick={() => setCelular(!celular)}>|||</button> 
: <button className={style.celular} onClick={() => setCelular(!celular)}>X</button>
}
</div>

{celular ? <Sidebar/> : null}
</nav>
)}