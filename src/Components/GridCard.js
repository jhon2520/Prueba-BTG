import React from 'react'

export default function GridCard(props) {
    return (
        <div>
            <h3>{props.nombre}</h3>
            <p>Consectetur ex dolor mollit non consectetur deserunt. Aliqua proident elit aliqua eu adipisicing occaecat consequat mollit eu dolor ad excepteur tempor.</p>
            <h4>Valor de mínimo de inversión {props.monto}</h4>
            <a href="#">Más información</a>
        </div>
    )
}
