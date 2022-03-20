import React from 'react'
import InitialData from '../Data/InitialData'
import GridCard from './GridCard';
import styles from "../CSS/Grid.module.css"


export default function Grid() {
    return (
        <div className={styles.grid}>
            <h2>Conoce nuestros fondos</h2>
            {
                InitialData.map((e)=>{
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
    )
}
