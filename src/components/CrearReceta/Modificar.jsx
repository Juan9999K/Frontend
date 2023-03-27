import React from "react";
import { useState, useEffect } from "react";
import * as actions from "../../redux/actions";
import Style from "../styles/CrearReceta.module.css"
import { useForm } from "./useForm";


export const Modificar = (props) => {

  const {handleCheckChange, handleChange, handleSubmitUpdate,setInput, input, errorInput, dietas, dispatch, actions, id, recetaId } = useForm()


useEffect(() => {
    dispatch(actions.RecetaID(id));
    setInput({
      name: recetaId?.name,
      summary: recetaId?.summary,
      healthScore: recetaId?.healthScore,
      image: recetaId?.image,
      diets:recetaId?.diets,
      steps: recetaId?.steps
    })
    }, [])

  useEffect(() => {
    if(!dietas.lenth)
    dispatch(actions.TraerDietas());
  }, [dispatch]);

  return (
<div className={Style.alrededor}>

    <div>
      <h1 className={Style.title}>Modificar Recetas</h1>
      <br/>

      

      <form onSubmit={() => handleSubmitUpdate()}>
      <div className={Style.div}>
        <div className={Style.divizq}>
          <label className={Style.label}>Nombre del plato:</label>
          <br/>

          <input type="text"
          placeholder={recetaId?.name}
        name="name"  value={input.name}  className={Style.input} onChange={(e) => handleChange(e)} />
                  { errorInput.name ? <p>{errorInput.name}</p> : <p> {" "}</p>}


          <label className={Style.label}>Descripcion:</label>
          <br/>
          
          <textarea className={Style.textaerea} type="text" name="summary"  value={input.summary} onChange={(e) => handleChange(e)} />
          { input.summary.length ? errorInput.summary && (<p>{errorInput.summary}</p> ) : <p></p>}
          <br/>

          <label className={Style.label}>Puntaje nutricional:</label>
          <br/>

          <input type="text" name="healthScore"   value={input.healthScore} onChange={(e) => handleChange(e)} />
          { input.healthScore.length ? errorInput.healthScore && (<p>{errorInput.healthScore}</p>) : <p></p>}
          <br/>

          <label className={Style.label}>Imagen:</label>
          <br/>

          <input type="text" name="image" className={Style.input} placeholder="¿Quieres modificar la foto de tu receta?" value={input.image} onChange={(e) => handleChange(e)} />
          { input.image.length ? errorInput.image && (<p>{errorInput.image}</p>) : <p></p>}


          <label className={Style.label}>Pasos de preparacion:</label>
          <br/>
          <textarea type="text" name="steps" className={Style.textaerea} value={input.steps} onChange={(e) => handleChange(e)} />
          { errorInput.steps && (<p>{errorInput.steps}</p>)}
          <br/>
          </div>
          <div className={Style.divderecho}>
          <label className={Style.label}>Tipo de dieta:</label>
          <br/>

          <div className={Style.diets}>
     
          {dietas?.map((diet) => {
  return (
    <div key={diet.name}>
      <input
        type="checkbox"
        id={diet.id}
        value={diet.name}
        onChange={handleCheckChange}
        checked={input.diets.includes(diet.name)}
        />
      <label >
        {diet.name}
      </label>
    </div>
  );
})}
                          { errorInput.diets && (<p>{errorInput.diets}</p>)}

          </div>

        </div>

        </div>

        {(!Object.entries(errorInput).length) ?
      
  <button className={Style.button2} type='submit' >Modificar Receta</button>
 : ( <div><button className={Style.button2} type='submit'   disabled>Modificar Receta</button>
  <p ></p></div>)
            }
      </form>
   
    </div>

    </div>
  );
};