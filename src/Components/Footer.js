import React from 'react'
import styles from "../CSS/Footer.module.css"

export default function Footer() {
    return (
        <div className={styles.container}>
            <section className={styles.logos}>
                <img className={styles.logo_btg} src="https://www.btgpactual.com/mx/assets/images/our-dna/press/download/arquivo_marca_negativo.png" alt="" />
                <img className={styles.logo_in} src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
            </section>
            <hr className={styles.hr}/>
            <hgroup className={styles.grupoh}>
                <h3>Términos de uso</h3>
                <h3>Protección de datos</h3>
                <h3>Política de tarifas</h3>
                <h3>Atención al consumidor</h3>
            </hgroup>
            <hr className={styles.hr}/>
            <section className={styles.footer_final}>
                <h3>BTG Pactual. 2022</h3>
                <p>Esse officia officia ad ipsum do ea. Cupidatat sit enim qui eu ut exercitation in adipisicing sit velit dolore deserunt. Enim mollit ea in sunt non pariatur enim aliqua irure anim ex ut duis.</p>
            </section>

        </div>
    )
}
