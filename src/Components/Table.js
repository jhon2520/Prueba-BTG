import React from 'react'
import TableRow from './TableRow'

export default function Table(props) {

    // const montoARetornar = props.fondos.filter((e)=>e.nombre === props.fondo.nombre)
 
    return (
        <div>
            <h3>Tus fondos actuales:</h3>
            <table>

                <thead>
                    <tr>
                        <th>Fondo</th>
                        <th>Valor vinculación</th>
                        <th>Tipo de fondo</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        
                        props.fondos.length === 0 ?
                        <tr><td colSpan="3">No tiene fondos actualmente</td></tr>
                        : props.fondos.map((e)=>{
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
                                    />
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}
