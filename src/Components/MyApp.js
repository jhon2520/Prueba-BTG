import React,{useState} from 'react'
import Header from './Header'
import Table from './Table'
import Grid from './Grid'

export default function MyApp() {

    const [fondos,setFondos]= useState([])
    const [capitalInicial, setCapitalInicial] = useState(500000)


    // console.log("Fondos desde la app",fondos);

    
    
    const deleteData = (id) =>{
        
        let borrarData = window.confirm("¿eliminar este registro");
        if(borrarData){
            let newData = fondos.filter((e)=> e.id !== id)
            setFondos(newData);
            
        }
        else{
            return;
        }
    }


    
    return (
        <div>
            <h2>Mis fondos</h2>
            <h2>Tu capital actual es de: {capitalInicial.toLocaleString("es-ES",{style:"currency",currency:"COP", minimumFractionDigits:0})}</h2>


            <Header
                setFondos={setFondos}
                fondos={fondos}
                capitalInicial={capitalInicial}
                setCapitalInicial={setCapitalInicial}
                
                />
            <hr/>
            <Table
                fondos={fondos}
                deleteData={deleteData}
                capitalInicial={capitalInicial}
                setCapitalInicial={setCapitalInicial}
            />
            <hr/>
            <Grid/>

        </div>
    )
}
