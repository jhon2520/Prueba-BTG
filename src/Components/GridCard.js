import React,{useEffect, useState} from 'react'
import {Link} from "react-router-dom"
import styles from "../CSS/GridCard.module.css"

export default function GridCard(props) {

    const [validacion, setValidacion] = useState(false)
    

//TODO:Esta validacion la debo hacer desde el grid y no desde aquí.

    useEffect(()=>{
        const valorMinimo = props.monto
        const capital = localStorage.getItem("capital");
        const validacion = valorMinimo <= capital
        setValidacion(validacion);

    },[])

    return (
        <>
            <div className={styles.card}>
                <div className={validacion === true ? styles.indicador_verde :styles.indicador_rojo}></div>
                <h3>{props.nombre}</h3>
                <hr/>
                <p>Consectetur ex dolor <span className={styles.span}> mollit non consectetur </span>deserunt. Aliqua proident elit aliqua eu adipisicing occaecat consequat mollit eu dolor ad excepteur tempor.</p>
                <h4>Valor de mínimo de inversión <span className={styles.monto}> {props.monto.toLocaleString("es-ES",{style:"currency",currency:"COP", minimumFractionDigits:0})}</span></h4>
                <Link className={styles.enlaces} to={`/fondos/${props.nombre}`}>Más información</Link>
            </div>
            

        </>

    )
}
