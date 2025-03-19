import React, { useState } from "react";
import Style from "./Band.module.css"

function Band({imagem, nome, descricao}) {
    const [like, setLike] = useState(0);
    const [deslike, setDeslike] = useState(0);
    return (
        
        <div className={Style.Band}>
            <img src={imagem} alt={nome}></img>
            <div className={Style.bandInfo}>
                <h2>{nome}</h2>
                <p>{descricao}</p>
                <p>Like: {like}</p>
                <p>Deslikes: {deslike}</p>
            </div>
            <button onClick={() => setLike(like+1)}>❤️</button>
            <button onClick={() => setDeslike(desLike-1)}>💔</button>
        </div>
    
)

}

export default Band;

        {/* <div className="Band">
            <img src="https://m.media-amazon.com/images/I/91WaJU5cCXL._AC_UF1000,1000_QL80_.jpg" alt="Banda 2"></img>
            <div className="Bandinfo">
                <h2>Banda 2</h2>
                <p>Descrição da Banda 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
    
   
        <div className="Band">
            <img src="https://m.media-amazon.com/images/I/91WaJU5cCXL._AC_UF1000,1000_QL80_.jpg" alt="Banda 2"></img>
            <div className="Bandinfo">
                <h2>Banda 3</h2>
                <p>Descrição da Banda 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>

    
        <div className="Band">
            <img src="https://m.media-amazon.com/images/I/91WaJU5cCXL._AC_UF1000,1000_QL80_.jpg" alt="Banda 2"></img>
            <div className="Bandinfo">
                <h2>Banda 4</h2>
                <p>Descrição da Banda 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
    </section> */}
