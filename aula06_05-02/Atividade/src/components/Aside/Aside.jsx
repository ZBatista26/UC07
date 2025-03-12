import React from "react";
import Style from "./Aside.module.css"
function Aside(){
    return(
    <aside className={Style.Aside}>
        <h2>Notícias do Mundo do Rock</h2>
        <p>Leia as últimas notícias, lançamentos e eventos do mundo do rock.</p>
    </aside>
    )
}

export default Aside;