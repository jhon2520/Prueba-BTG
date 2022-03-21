import React from 'react'
import styles from "../CSS/TableRow.module.css"
import initialDB from '../Data/InitialData';


export default function TableRow(props) {


    const handleDeleteData = () =>{

        let borrarData = window.confirm("¿Desea desvincularse de este fondo?");
        if(borrarData){

        
            props.deleteData(props.id);
            
            // sumar el valor del fondo que se eliminar
            let oldData = props.fondos;
            let newData = props.fondos.filter((el)=>el.id !== props.id)
            let fondoEliminado = oldData.filter(({id:id})=>!newData.some(({id:id2})=>id2 === id))
            let valor = 0;
            newData.forEach(e=>valor+=e.monto)
            props.setCapitalInicial((el)=>500000-valor);

    
            props.setHistorico((i)=>[...i,{
                fecha: `${new Date().toISOString().slice(0,10)}  ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
                id:Date.now(),
                tipoOperacion:"Cancelación",
                fondo:fondoEliminado[0].nombre,
                monto:fondoEliminado[0].monto,
                categoria:fondoEliminado[0].categoria,
            }])
            
            // window.alert(`El valor de vinculación fueron devueltos a su capital`)

        }
        else{
            return;
        }
    } 
    
    return(
        <>
        <tr className={styles.table_row}>
            <td>{props.nombre}</td>
            <td>{props.monto.toLocaleString("es-ES",{style:"currency",currency:"COP", minimumFractionDigits:0})}</td>
            <td>{props.categoria}</td>
            <td><button className={styles.btn} onClick={handleDeleteData}>Desvincular Fondo</button></td>
        </tr>
        </>
    );

}
