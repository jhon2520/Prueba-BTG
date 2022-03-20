import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {Pie} from "react-chartjs-2"

ChartJS.register(ArcElement, Tooltip, Legend)

const data={
    labels:["Google","Bing","Baidu","Otros"],
    datasets:[{
      data:[74,56,10.54,9.42,5.42],
      backgroundColor:["#FFFF00","blue","green","#ff0000"]
    }]
  };
  
  const opciones={
    resposive:true,
    maintainAspectRatio:false,
    // del paquete de labels
    // pieceLabel:{
    //   render:function(args){
    //     return args.Label + ": " +args.value +"%"
    //   },
    //   fontSize:15,
    //   fontColor:"#fff",
    //   fontFamily:"Arial"
    // }
  }


export default function ChartApp(props) {

    // Sacar fondos unicos
    const fondosUnicos = props.fondos ? props.fondos.map((i)=>i.nombre).filter((value,index,self)=>self.indexOf(value)===index):[]
    console.log("Fondos unicos",fondosUnicos)

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

    console.log("Base agrupada",baseAgrupada);
    console.log("valores suados",valoresSumados);

    const data2={
        labels:fondosUnicos,
        datasets:[{
          data:valoresSumados,
          backgroundColor:["#FFFF00","blue","green","#ff0000"]
        }]
      };


    return (
        <div>
            <Pie data={data2} options={opciones}/>
        </div>
    )
}
