import React,{useState,useEffect} from 'react'
import initialDB from '../Data/InitialData';



export default function Header(props) {


    const [valor, setValor] = useState(undefined);
    const [montoAMostrar,setMonto] = useState("");
    const [categoria,setCategoria] = useState("");


    const handleSubmit = (e)=>{
        e.preventDefault();

        // Validar que se haya seleccionado un fondo
        if(!valor){
            alert("Seleccione el fondo que desea vincular");
            return;
        }

        let valorFondo = initialDB.find((i)=>i.nombre===valor).monto;
        if(props.capitalInicial > valorFondo){

            // Disiminuir capital
            props.setCapitalInicial(el=>el-valorFondo);
            // Crear nuevo fondo
            props.setFondos((i)=>[...i,{
                id:Date.now(),
                nombre:valor,
                monto:initialDB.filter((el)=>el.nombre ===valor)[0].monto,
                categoria:initialDB.filter((el)=>el.nombre ===valor)[0].categoria
            }])
        }
        else{
            window.alert("No tiene saldo disponible para hacer esta operación")
            return;
        }


    }

    const handleChance = (e)=>{
        
        setValor(e.target.value)
        
        let valorMonto = initialDB.filter((el)=>el.nombre===valor)[0].monto 
        setMonto(valorMonto)
        let valorCat = initialDB.filter((el)=>el.nombre===valor)[0].categoria
        setCategoria(valorCat)
        console.log("ValorMONTO",valorMonto,valorCat)
    }





    return (
        <div>
        <form onSubmit={handleSubmit}>
            <select onChange={handleChance} name="Fondo" defaultValue={"default"} >
            <option value="default" disabled hidden>Seleccione...</option>
                {
                    initialDB.map((e)=>{
                        return(
                            <option value={e.nombre} key={e.id}>{e.nombre}</option>
                        );
                    })
                }
            </select>
            <input type="submit" value="Agregar" />
        </form>
        {valor ? <h2>Monto mínimo de inversión: {montoAMostrar}</h2> : null}
        {valor ? <h2>Tipo de fondo {categoria}</h2> : null}
        </div>
    )
}
