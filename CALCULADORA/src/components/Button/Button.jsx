import React from "react";
import Style from "./Button.module.css"

function Button({text, onClick}){
    return(
        <>
        <button onClick={onClick} className={Style.Button}> {text} </button>
        </>
    )
}

export default Button