import { useState, useRef } from "react";
import "./Homepage.css"
import axios from "axios";
import WeatherInformations from "../../components/Weatherinformations/WeatherInformation";

function Homepage(){

    const inputRef = useRef();
    const [weather, setWeather] = useState();

    async function searchCity(){
        console.log(inputRef.current.value)
        const city = inputRef.current.value;
        const key = "6e1bed643c8e0773069958b32eb27bc9";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=pt_br`
        const apiInfo = await axios.get(url);
        setWeather(apiInfo.data)
        console.log(apiInfo.data)
    }
    return(
        <div className="container">
            <h1>Componente Homepage</h1>
            <input ref= {inputRef} type="text" placeholder="Digite a cidade"/>
            <button onClick={searchCity}>Buscar</button>

           {weather && <WeatherInformations weather={weather}/> } 
            
        </div>
    )
}

export default Homepage;