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

import "./CoffinCard.css";
import { useState } from "react";


function CoffinCard({ coffin } : CoffinCardPropsType ) {
const[showDescription, setShowDescritption] = useState (false);

    return (
        <div key={coffin.id} className="coffin-card">
            <figure>
                <img className="coffin-image" src={coffin.imageUrl} alt={coffin.name} />
                <figcaption className="subtitle">
                    {coffin.name} {coffin.type}
                </figcaption>
            </figure>
            <p className="price">{coffin.price}€</p>
            <button className="choose-me" type="button" onClick={ 
            () => setShowDescritption(!showDescription)
        }
        >Should you choose me ⚰️ ?</button>
        {(showDescription) ? <div className="description">{coffin.description}</div> : null}
        </div>
    )
}

export default CoffinCard