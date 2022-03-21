import React from 'react'
import {useParams,useNavigate} from "react-router-dom"
import styles from "../CSS/InfoPage.module.css"
import InitialData from '../Data/InitialData';

export default function InfoPage() {

    const params = useParams();
    const navigate = useNavigate();
    const capital = localStorage.getItem("capital")

    const montoMinimo = InitialData.filter((e)=> e.nombre === params.nombreFondo)[0].monto 
    const tipoFondo = InitialData.filter((e)=>e.nombre === params.nombreFondo)[0].categoria
    const validacion = capital >=montoMinimo;

    const handleClick = () =>{
        navigate("/");
    }


    return (
        <div className={styles.container}>
                <img className={styles.logo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Btg-logo-blue.svg/1200px-Btg-logo-blue.svg.png" alt="" />
            <section>
                <article className={styles.article}>
                    <h2>{params.nombreFondo}</h2>
                    <p>Dolor exercitation consectetur laboris est dolore Lorem tempor qui veniam. Reprehenderit anim reprehenderit in aliquip adipisicing voluptate exercitation consequat.aliquip adipisicing voluptate exercitation consequat consequat</p>
                    <hgroup className={styles.valores_fondo}>

                        <h3 className={styles.categoria}>Categoria del fondo: <span className={styles.categoria_valor} >{tipoFondo}</span></h3>

                        <h3 className={styles.categoria}>Monto mínimo: <span className={styles.categoria_valor} >
                        {montoMinimo.toLocaleString("es-ES",{style:"currency",currency:"COP", minimumFractionDigits:0})}</span></h3>

                    </hgroup>
                    
                    {
                        validacion ? <h3 className={styles.capital_disponible}>Actualmente cuenta con capital para subscribirse a este fondo</h3>:<h3 className={styles.capital_no_disponible}>Actualmente no cuenta con capital para subscribirse a este fondo</h3>
                    }

                    <button className={styles.btn} onClick={handleClick}>Volver</button>
                </article>
                <img className={styles.imagen} src="https://www.dreamhost.com/blog/wp-content/uploads/2018/09/elements-web-design-opt-750x498.jpg" alt="" />
            </section>
        </div>
    )
}
