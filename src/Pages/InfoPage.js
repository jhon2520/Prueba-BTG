import React from 'react'
import {useParams} from "react-router-dom"

export default function InfoPage() {

    const params = useParams();

    return (
        <div>{params.nombreFondo}</div>
    )
}
