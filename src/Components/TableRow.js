import React,{useEffect} from 'react'

export default function TableRow(props) {


    const handleDeleteData = () =>{
        props.deleteData(props.id);

        // sumar el valor del fondo que se eliminar
        let newData = props.fondos.filter((el)=>el.id !== props.id)
        let valor = 0;
        newData.forEach(e=>valor+=e.monto)
        props.setCapitalInicial((el)=>500000-valor)
    } 
    
    // useEffect(()=>{
        
    //     console.log(props.fondos)
        
    // },[props.fondos])
    

    return(
        <tr>
            <td>{props.nombre}</td>
            <td>{props.monto}</td>
            <td>{props.categoria}</td>
            <td><button onClick={handleDeleteData}>Desvincular Fondo</button></td>
        </tr>
    );

}
