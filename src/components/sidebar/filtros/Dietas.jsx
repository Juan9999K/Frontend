import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../redux/actions";
import style from "../../styles/Dietas.module.css"

export const Dietas = (props) => {


  const dietas = useSelector((state) => state.dietas);
  const seleccionadas = useSelector(state => state.seleccionadas)

  const dispatch = useDispatch();

  useEffect(() => {
    if(!dietas.length){
    dispatch(actions.TraerDietas());
  }
  }, [dispatch, dietas.length]);

  return (
    <div className={style.diets}>
     
      {dietas?.map((diet) => {
        return (
          <div key={diet.name}>
            <input
              className={style.checkbox}
              type="checkbox"
              id={diet.id}
              checked={seleccionadas.includes(diet.name)}
              value={diet.name}
              name={diet.id}
              onChange={(e) =>  props.handleChange2(e)}
            />
            <label htmlFor={diet.id} className={style.name}>
              {diet.name}
            </label>
          </div>
        );
      })}
    </div>
  );
};