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
                        <tr>
                            <img className={styles.img_no_fondos} src="https://cdn-icons-png.flaticon.com/512/4539/4539472.png" alt="" />
                            <td className={styles.no_fondos} colSpan="2">No tiene fondos actualmente, visitenos en <a target="_blank" rel='noreferrer' href="https://www.btgpactual.com.co/">https://www.btgpactual.com.co/</a>  si tienes dudas. Actualmente cuentas con un saldo de  500.000 COP para vincularte en nuevos fondos </td>
                        </tr>
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
