import "./App.css";
import { useEffect, useState } from "react";
function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((response) => setCountries(response));
  }, []);

  console.log(countries);
  return (
    <div className="App">
      <h1>merhaba</h1>
      {countries.map((country) => {
        return (
          
            
              
              <div key={country.name} className="card-body">
              <img
                src={country.flag}
                className=" image card-img-top  "
                alt={country.name}
              />
                <h5 className="card-title">{country.name}</h5>
                <h5> {country.capital} </h5>
              </div>
            
          
        );
      })}
    </div>
  );
}

export default App;
