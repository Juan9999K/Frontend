import React from "react";
import img from "../../img/7iJL-unscreen.gif"
import style from "../styles/Error.module.css"
import { Link } from "react-router-dom";
export const Error = () =>{


    return(
        <div className={style.div}>
        <img  src={img}></img>
        <Link to="/home"><button className={style.h1}>Ir al inicio</button></Link>

        </div>
    )
}