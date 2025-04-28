import "./App.css";
import "/src/fonts.css"
import { CoffinData } from "./data/CoffinData";
import CoffinCard from "./components/CoffinCard";
import { useState } from "react";
import Search from "./components/Search";

function App() {
  const [search, setSearch] = useState("");
  // const [price, setPrice] = useState("");
  const coffinDataFiltered = CoffinData.filter((coffin) =>
    coffin.name.toLowerCase().includes(search.toLowerCase()),
  );


  return (
    <>
      <div className="site-container">
        <div className="search-block">
          <h1 className="title">One coffin a day, get the pleasure everyday...</h1>
          <Search search={search} setSearch={setSearch} />
        </div>
        <article className="coffin-card-container">
          {coffinDataFiltered.map((coffin) => (
            <CoffinCard coffin={coffin} key={coffin.id} />
          ))}
        </article>
        {/* <img className="header-image" src="src/images/fox-coffin.webp" alt="fox-in-coffin" /> */}
      </div>
      
      <div>
            {/* <input type="radio" value="cheap" onChange={(event) => setPrice(event.target.value)}/>
            <input type="radio" value="expensive" onChange={(event) => setPrice(event.target.value)}/> */}
      </div>
    </>
  );
}

export default App;
