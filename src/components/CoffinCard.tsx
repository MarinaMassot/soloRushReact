import "./CoffinCard.css";
import { useState } from "react";

interface CoffinCardPropsType {
    coffin: {
        id: number;
        name: string;
        type: string;
        price: number;
        description: string;
        imageUrl: string;
    } 
}

function CoffinCard({ coffin } : CoffinCardPropsType ) {
const[showDescription, setShowDescritption] = useState (false);

    return (
        <div key={coffin.id} className="coffin-card">
            <figure>
                <figcaption className="subtitle">
                    {coffin.name} {coffin.type}
                </figcaption>
            </figure>
            <p className="price">{coffin.price}€</p>
            <button className="choose-me" type="button" onClick={ 
            () => setShowDescritption(!showDescription)
        }
        >Should you choose me ⚰️ ?</button>
        {(showDescription) ?
            <div className="description">
                {coffin.description} 
                <a href="https://french.alibaba.com/f/cercueil-pas-cher.html"><button type="button">Buy me</button></a>
            </div> : null}
        </div>
    )
}

export default CoffinCard