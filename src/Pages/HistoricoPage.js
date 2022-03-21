import React,{useEffect} from 'react'
import styles from "../CSS/HistoricoPage.module.css"
import { useNavigate} from 'react-router-dom';

export default function HistoricoPage() {

    const historico = localStorage.getItem("historico");
    const obj = JSON.parse(historico);
    const navigate = useNavigate();

    const handleClick = () =>{
        navigate("/")
    }
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    return (
        <div className={styles.tabla_container}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Btg-logo-blue.svg/1200px-Btg-logo-blue.svg.png" alt="" />
            <h2>Histórico De Operaciones</h2>
        <table className={styles.tabla}>
            <thead>
                <tr>
                    <th>Fondo</th>
                    <th>Fecha Operación</th>
                    <th>id Operacion</th>
                    <th>Monto Vinculación</th>
                    <th>Categoria</th>
                    <th>Tipo Operación</th>
                </tr>
            </thead>
            <tbody>
                {
                    obj.map((el)=>{
                        return(
                            <tr className={styles.table_row} key={el.id}>
                                <td>{el.fondo}</td>
                                <td>{el.fecha}</td>
                                <td>{el.id}</td>
                                <td>{el.monto.toLocaleString("es-ES",{style:"currency",currency:"COP", minimumFractionDigits:0})}</td>
                                <td>{el.categoria}</td>
                                <td>{el.tipoOperacion}</td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
        <button onClick={handleClick} className={styles.btn}>Volver</button>
        </div>
    
    )
}
