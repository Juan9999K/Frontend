import React from "react";
import img from "../../img/5gVO-unscreen.gif"
import style from "../styles/SinRecetas.module.css"
export const SinRecetas = () =>{

    const aux =() =>{
        window.location.reload()
    }
    return(
        <div className={style.div}>
        <img className={style.image} src={img}></img>
        <button onClick={() => aux()} className={style.h1}>Recargar filtros</button>

        </div>
    )
}