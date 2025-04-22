import Styles from "./Main.module.css"
import Frameworks from "../Frameworks/Frameworks"
import Intro from "../Intro/intro"
import Noticias from "../Noticias/Noticias"
import Recursos from "../Recursos/Recursos"
import Tipos from "../Tipos/Tipos"

function Main(){
    return(
        <main>
            
        <Intro/>
        <Tipos/>
        <Noticias/>
        <Frameworks/>
        <Recursos/>
        </main>
        
    );
};
export default Main;