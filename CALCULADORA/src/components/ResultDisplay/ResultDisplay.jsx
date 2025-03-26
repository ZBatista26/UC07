import React from "react";
import Style from "./ResultDisplay.module.css";

function ResultDisplay({gorjeta, total}){
    return(
        <>
          <div className={Style.container}>
            <p>Gorjeta: {gorjeta}</p>
            <p>Total: {total}</p>
        </div>
        </>
    )
}

export default ResultDisplay