import React,{useState,useEffect} from 'react'
import Header from './Header'
import Table from './Table'
import Grid from './Grid'
import ChartApp from "./Chart"
import styles from "../CSS/MyApp.module.css"
import Footer from './Footer'

const historicoBase = [
    {
    fecha:"",
    id:"",
    tipoOperacion:"",
    fondo:"",
    monto:"",
    categoria:""}
    
]

export default function MyApp() {

    const [fondos,setFondos]= useState([])
    const [capitalInicial, setCapitalInicial] = useState(500000)
    const [historico,setHistorico] = useState("");


    useEffect(()=>{

        let data = localStorage.getItem("fondos");
        let historico = localStorage.getItem("historico");
        let capital  = localStorage.getItem("capital");
        if(data){
            setFondos(JSON.parse(data));
        }
        else{
            setFondos("")
        }
        if(historico){
            setHistorico(JSON.parse(historico));
        }
        else{
            setHistorico("")
        }
        if(capital){
            setCapitalInicial(capital);
        }
        else{
            setCapitalInicial(500000)
        }

    },[])

    useEffect(()=>{
        localStorage.setItem("fondos",JSON.stringify(fondos))
        localStorage.setItem("historico",JSON.stringify(historico))
        localStorage.setItem("capital",capitalInicial)
    },[fondos,historico,capitalInicial])
    
    const deleteData = (id) =>{
        
        let newData = fondos.filter((e)=> e.id !== id)
        setFondos(newData);
        return true
        
    }


    
    return (
        <>
        <div className={styles.my_app}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Btg-logo-blue.svg/1200px-Btg-logo-blue.svg.png" alt="" />
            <Grid/>
            <hr/>
            <h2>Mis fondos</h2>
            <p>A continuación puede vincularse a algunos de nuestros fondos. Seleccione el fondo de su interes y si cuenta con el saldo puede acceder a él.</p>
            <h3>Tu capital actual es de: <span className={styles.monto}>{capitalInicial.toLocaleString("es-ES",{style:"currency",currency:"COP", minimumFractionDigits:0})}</span></h3>
            <Header
                setFondos={setFondos}
                fondos={fondos}
                setHistorico={setHistorico}
                capitalInicial={capitalInicial}
                setCapitalInicial={setCapitalInicial}
                
                />
            <section className={styles.tabla_grafica}>
            <Table 
                fondos={fondos}
                deleteData={deleteData}
                capitalInicial={capitalInicial}
                setCapitalInicial={setCapitalInicial}
                setHistorico={setHistorico}
                historico={historico}
                />

            <ChartApp
                fondos={fondos}
                />
            </section>
            <br/><br/>
            <hr/>
        </div>
            <Footer/>
            </>
    )
}
