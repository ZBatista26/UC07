import React, { use, useState } from "react";
import Button from "../components/Button/Button.jsx";
import InputField from "../components/InputField/InputField.jsx";
import ResultDisplay from "../components/ResultDisplay/ResultDisplay.jsx";
import Style from "./TipCalculadora.module.css";

function TipCalculator(){
    const [valorConta, setValorConta] = useState("");
    const [percentualGorjeta, setPercentualGorjeta] = useState("");
    const [resultado, setResultado] = useState("");

    const calcularGorjeta = () =>{
       const valor = parseFloat(valorConta);
       const valorGorjeta = (valor * parseFloat(percentualGorjeta))/100;
       const total = valor + valorGorjeta;
       setResultado({gorjeta: valorGorjeta, total: total});
    }
   return(
    <div className={Style.Calculador}>
   <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" />
    <h1>Calculadora de Gorjeta</h1>
    <InputField label="Valor da Compra:" 
    value={valorConta}
    onChange={(e) => setValorConta(e.target.value)}
    />
    <InputField label="Porcentagem da Gorjeta:" 
    value={percentualGorjeta}
    onChange={(e) => setPercentualGorjeta(e.target.value)}
    />
    <Button text="Calcular" onClick={calcularGorjeta}/>
    
    <ResultDisplay gorjeta={resultado.gorjeta} total={resultado.total}/>
    </div>
   )
}

export default TipCalculator