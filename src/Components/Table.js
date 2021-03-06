import React,{useEffect, useState} from 'react'
import TableRow from './TableRow'
import styles from "../CSS/Table.module.css"
import { useNavigate } from 'react-router-dom'



export default function Table(props) {

    const navegate = useNavigate();
    
    const handleClick = (e)=>{
        navegate("/fondos/historico")
    }

    return (
        <div className={styles.tabla_container}>

        

            <h3>Tus Fondos Actuales</h3>
            {
                props.fondos.length === 0 ?
                <div className={styles.fila_no_datos}>
                        
                        <img src="https://cdn-icons-png.flaticon.com/512/4539/4539472.png" alt="" />
                        
                        <p>No tiene fondos actualmente, visitenos en <a target="_blank" rel='noreferrer' href="https://www.btgpactual.com.co/">https://www.btgpactual.com.co/</a>  si tienes dudas. Cuentas con un saldo de  500.000 COP para vincularte en nuevos fondos </p>
                        
                </div>
                    : <table className={styles.tabla}>
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
                        props.fondos.map((e)=>{
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
                                    setHistorico={props.setHistorico}
                                    />
                            )
                        })
                    }
                </tbody>
            </table>
            }
            <button className={styles.btn_historico} onClick={handleClick}>Ver Histórico</button>
        </div>
    )
}
