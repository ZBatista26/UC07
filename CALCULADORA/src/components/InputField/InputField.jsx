import React from "react";
import Style from "./InputField.module.css";

function InputField({label, value, onChange}){
    return(
        <>
      <div className={Style.Container}>
        <label>{label}</label>
        <input type="number" value={value} onChange={onChange}/>
      </div>
        </>
    )
}

export default InputField