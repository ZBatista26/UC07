import React from "react";
import {useParams} from "react-router-dom";
import bandas from "../../data/bancoBands";
import Band from "../../components/Band/Band";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Aside from "../../components/Aside/Aside";

function BandDetalhes(){
    const {id} = useParams();
    const band = bandas.find((b) => b.id === parseInt(id));
     if(!band) return <h2>Banda não encontrada.</h2>
     
    return(
        <>
        <Header/>
            <div>
                <Band {...band} />
            </div>
        <Aside/>
        <Footer/>
        </>
    );
}

export default BandDetalhes;