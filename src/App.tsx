import "./App.css";
import "/src/fonts.css"
import { CoffinData } from "./data/CoffinData";
import CoffinCard from "./components/CoffinCard";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const coffinDataFiltered = CoffinData.filter((coffin) =>
    coffin.name.includes(search),
  );


  return (
    <div className="site-container">
      <h1 className="title">One coffin a day, get the pleasure everyday...</h1>
      {/* <img className="header-image" src="src/images/fox-coffin.webp" alt="fox-in-coffin"/> */}
      <input 
        type="text" 
        id="coffin-search" 
        value={search} 
        placeholder="Choose your final resting place ☠️ "
        onChange={(event) => setSearch(event.target.value)}
        />
      <article className="coffin-card-container">
        {coffinDataFiltered.map((coffin) => (
          <CoffinCard coffin={coffin} key={coffin.id} />
        ))}
      </article>
    </div>
  );
}

export default App;
