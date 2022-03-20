import React from 'react'
import {Link} from "react-router-dom"
import styles from "../CSS/GridCard.module.css"

export default function GridCard(props) {
    return (
        <div className={styles.card}>
            <h3>{props.nombre}</h3>
            <hr/>
            <p>Consectetur ex dolor <span className={styles.span}> mollit non consectetur </span>deserunt. Aliqua proident elit aliqua eu adipisicing occaecat consequat mollit eu dolor ad excepteur tempor.</p>
            <h4>Valor de mínimo de inversión {props.monto}</h4>
            <Link className={styles.enlaces} to={`/fondos/${props.nombre}`}>Más información</Link>
        </div>
    )
}
