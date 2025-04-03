import React from "react";
import Style from "./InputField.module.css";

function InputField({label, value, onChange}){
    return(
        <>
        
      <div className={Style.Container}>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" />
        <label>{label}</label>
        <div className="Input-field"><input type="number" value={value} onChange={onChange}/></div>
      </div>
        </>
    )
}

export default InputField