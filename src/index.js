import React from "react";
import ReactDom from "react-dom"
import MyApp from "./Components/MyApp";
import InfoPage from "./Pages/InfoPage"
import { BrowserRouter,Route,Routes } from "react-router-dom";

ReactDom.render(

    <BrowserRouter>
        <Routes>  
            <Route path="/" element={<MyApp/>}/> 
            <Route path="/fondos/:nombreFondo" element={<InfoPage/>}/>
        </Routes>
    </BrowserRouter>


,document.getElementById("root"))