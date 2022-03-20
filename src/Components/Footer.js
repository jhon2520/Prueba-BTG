import React from 'react'
import styles from "../CSS/Footer.module.css"

export default function Footer() {
    return (
        <div>
            <section className={styles.logos}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Btg-logo-blue.svg/1200px-Btg-logo-blue.svg.png" alt="" />
                <img src="https://image.similarpng.com/very-thumbnail/2020/07/Linkedin-logo-on-transparent-Background-PNG-.png" alt="" />
            </section>
            <hr/>
            <hgroup>
                <h3>Termminos de uso</h3>
                <h3>Protección de datos</h3>
                <h3>Politica de tarifas</h3>
                <h3>Atención al consumidor</h3>
            </hgroup>
            <hr/>
            <section>
                <h3>BTG Pactual. 2022</h3>
                <p>Esse officia officia ad ipsum do ea. Cupidatat sit enim qui eu ut exercitation in adipisicing sit velit dolore deserunt. Enim mollit ea in sunt non pariatur enim aliqua irure anim ex ut duis.</p>
            </section>

        </div>
    )
}
