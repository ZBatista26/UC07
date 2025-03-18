import React from "react";
import { Link } from "react-router-dom";
import Band from "../Band/Band";
import Style from "./Main.module.css"
import Bandas from "../../data/bancoBands"


function Main2(){
    return(
         <main className={Style.Main}>
            {
                Bandas.map((banda, index) => (
                    <section>
                        <Link key={banda.id} to = {`band/${banda.id}`}>
                            <Band key={index} {...banda} />
                        </Link> 
                    </section>
                ))
            }
        </main>
    )
}

export default Main2; 
