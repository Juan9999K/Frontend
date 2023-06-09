import * as actions from "../../redux/actions"
import { useDispatch, useSelector } from "react-redux";


export const useFilter = (props) =>{

    const dispatch = useDispatch();
    const recetas2 = useSelector(state => state.recetas2)

    const seleccionadas = useSelector(state => state.seleccionadas)
    const search = useSelector(state => state.search)

    const HandleSort = (e) =>{
        e.preventDefault()
        dispatch(actions.OrdPorNombre(e.target.value))
        dispatch(actions.cambiarPag(1))
    
    }

    const handleChange2 = (e) => {

        const name = e.target.value
        const buscar = seleccionadas.find(ele => ele === name)
        if(buscar){
          dispatch(actions.setSeleccionadas(seleccionadas.filter(dietas => dietas !== name)))
          props.setCheckboxState(seleccionadas.filter(dietas => dietas !== name))
        }else{
          dispatch(actions.setSeleccionadas([...seleccionadas, e.target.value]))
      }
      };
      
     const filtroDietas = (seleccionadas, dietas) =>{
        for(const id of seleccionadas){
          const result = dietas?.find((ele) => ele === id)
          if(!result) return false
            }
        return true
       } 
       const filtro = recetas2?.filter((ele) => filtroDietas(seleccionadas, ele.diets) && ele.name.toLowerCase().includes(search) ) 
      
    //barrra de busqueda
    const handleChange =(e) => { 
        e.preventDefault() 
        dispatch(actions.setSearch(e.target.value))
    }

    const handleClick = () => {
        window.location.reload();
    }
    

    const filter = (e) =>{
        e.preventDefault()
        dispatch(actions.filterH(e.target.value))
        dispatch(actions.cambiarPag(1))
    }

    return {HandleSort, recetas2, seleccionadas, search, dispatch, actions, handleChange2, filtroDietas, handleChange, filtro, handleClick, filter}
}