import React from 'react'
import TableRow from './TableRow'
import styles from "../CSS/Table.module.css"

export default function Table(props) {

    // const montoARetornar = props.fondos.filter((e)=>e.nombre === props.fondo.nombre)
 
    return (
        <div className={styles.tabla_container}>
            <h3>Tus Fondos Actuales</h3>
            <table className={styles.tabla}>

                <thead>
                    <tr>
                        <th>Fondo</th>
                        <th>Valor Vinculación</th>
                        <th>Tipo De Fondo</th>
                        <th>Quitar Fondo</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        
                        props.fondos.length === 0 ?
                        <tr><td colSpan="3">No tiene fondos actualmente</td></tr>
                        : props.fondos.map((e)=>{
                            return(
                                <TableRow
                                    id={e.id}
                                    nombre={e.nombre}
                                    monto={e.monto}
                                    categoria={e.categoria}
                                    deleteData={props.deleteData}
                                    key={e.id}
                                    fondos={props.fondos}
                                    setCapitalInicial={props.setCapitalInicial}
                                    capitalInicial={props.capitalInicial}
                                    />
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}
