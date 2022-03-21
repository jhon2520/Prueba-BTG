import React from 'react'
import styles from "../CSS/TableRow.module.css"


export default function TableRow(props) {


    const handleDeleteData = () =>{

        let borrarData = window.confirm("¿Desea desvincularse de este fondo?");
        if(borrarData){

        
            props.deleteData(props.id);
            
            // sumar el valor del fondo que se eliminar
            let newData = props.fondos.filter((el)=>el.id !== props.id)
            let valor = 0;
            newData.forEach(e=>valor+=e.monto)
            props.setCapitalInicial((el)=>500000-valor);
            
            window.alert(`El valor de vinculación fueron devueltos a su capital`)

        }
        else{
            return;
        }
    } 
    
    return(
        <>
        <tr className={styles.table_row}>
            <td>{props.nombre}</td>
            <td>{props.monto}</td>
            <td>{props.categoria}</td>
            <td><button className={styles.btn} onClick={handleDeleteData}>Desvincular Fondo</button></td>
        </tr>
        </>
    );

}
