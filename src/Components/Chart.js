import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {Pie} from "react-chartjs-2"
import styles from "../CSS/Chart.module.css"

ChartJS.register(ArcElement, Tooltip, Legend)



export default function ChartApp(props) {

    // Sacar fondos unicos
    const fondosUnicos = props.fondos ? props.fondos.map((i)=>i.nombre).filter((value,index,self)=>self.indexOf(value)===index):[]

    // sumar los montos por nombre
    const baseAgrupada = [];
    props.fondos.reduce(function(res,value){
      if(!res[value.nombre]){
        res[value.nombre] = {nombre:value.nombre,monto:0};
        baseAgrupada.push(res[value.nombre])
      }
      res[value.nombre].monto += value.monto;
      return res;
    },{})

    // crear arreglo de loss valores sumados
    const valoresSumados = []
    baseAgrupada.forEach((e)=>valoresSumados.push(e.monto))

      
  const opciones={
    resposive:true,
    maintainAspectRatio:false,
  }


    const data={
        labels:fondosUnicos,
        datasets:[{
          data:valoresSumados,
          backgroundColor:["#FFFF00","blue","green","#ff0000"]
        }]
      };


    return (
        <div className={styles.char_container}>
            <Pie className={styles.char} data={data} options={opciones}/>
        </div>
    )
}
