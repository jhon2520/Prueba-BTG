import React,{useState} from 'react'
import Header from './Header'
import Table from './Table'
import Grid from './Grid'
import ChartApp from "./Chart"
import styles from "../CSS/MyApp.module.css"

export default function MyApp() {

    const [fondos,setFondos]= useState([])
    const [capitalInicial, setCapitalInicial] = useState(500000)
    console.log(styles);

    // console.log("Fondos desde la app",fondos);

    
    
    const deleteData = (id) =>{
        
        let newData = fondos.filter((e)=> e.id !== id)
        setFondos(newData);
        return true
        
    }


    
    return (
        <div className={styles.my_app}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Btg-logo-blue.svg/1200px-Btg-logo-blue.svg.png" alt="" />
            <Grid/>
            <hr/>
            <h2>Mis fondos</h2>
            <h3>Tu capital actual es de: <span className={styles.monto}>{capitalInicial.toLocaleString("es-ES",{style:"currency",currency:"COP", minimumFractionDigits:0})}</span></h3>
            <Header
                setFondos={setFondos}
                fondos={fondos}
                capitalInicial={capitalInicial}
                setCapitalInicial={setCapitalInicial}
                
                />
            <section className={styles.tabla_grafica}>
            <Table
                fondos={fondos}
                deleteData={deleteData}
                capitalInicial={capitalInicial}
                setCapitalInicial={setCapitalInicial}
                />

            <ChartApp
                fondos={fondos}
                />
            </section>
            <hr/>
        </div>
    )
}
