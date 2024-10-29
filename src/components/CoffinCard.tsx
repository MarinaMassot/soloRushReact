import "./CoffinCard.css";
import { useState } from "react";


function CoffinCard({ coffin }) {
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
            <button type="button" onClick={ 
            () => setShowDescritption(!showDescription)
        }
        >Should you choose me ⚰️ ?</button>
        {(showDescription) ? <p className="description">{coffin.description}</p> : null}
        </div>
    )
}

export default CoffinCard