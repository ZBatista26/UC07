import React, { useState } from "react";
import {useParams} from "react-router-dom";
import bandas from "../../data/bancoBands";
import Band from "../../components/Band/Band";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Aside from "../../components/Aside/Aside";
import Style from "./BandDetalhes.module.css";
import { Link } from "react-router-dom";

function BandDetalhes(){
    const {id} = useParams();
    const [curiosidade, setCuriosidade] = useState('');
    const band = bandas.find((b) => b.id === parseInt(id));

     if(!band){
        
     }
    return(
        <>
        <Header/>
            <div className={Style.container}>
                <Band {...band} />
                <p>{curiosidade}</p>
                <button onClick={()=> setCuriosidade(band.curiosidade)}> Curiosidades </button>
                <Link to = '/' className={Style.link}> Voltar</Link>
            </div>
            
        <Aside/>
        <Footer/>
        </>
    );
}

export default BandDetalhes;