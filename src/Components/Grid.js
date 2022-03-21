import React,{useState,useEffect} from 'react'
import InitialData from '../Data/InitialData'
import GridCard from './GridCard';
import styles from "../CSS/Grid.module.css"



export default function Grid() {

    const [fondosToRender,SetFondosToRender] = useState(InitialData);
    const [filtro, setFiltro]= useState("Todos")

    const handleChance = (e) =>{
        setFiltro(e.target.value)
    }

    useEffect(()=>{
        if(filtro === "Todos"){
            SetFondosToRender(InitialData)
            return
        }
        SetFondosToRender(InitialData.filter((el)=>el.categoria === filtro))
    },[filtro])

    return (
        <div className={styles.grid}>

            <div className={styles.container_sup}>
                <h2>Conoce nuestros fondos</h2>
                
                <h3>filtrar por categoría &#9654;</h3>
                <select name='filtro' onChange={handleChance}>
                    <option value="Todos">Todos</option>
                    <option value="FPV">FPV</option>
                    <option value="FIC">FIC</option>
                </select>
            </div>
            <div className={styles.container_inf}>
                {
                    fondosToRender.map((e)=>{
                        return(
                            <GridCard
                                key={e.id}
                                nombre={e.nombre}
                                monto={e.monto}
                            />
                        );
                    })
                }
            </div>
        </div>
    )
}
