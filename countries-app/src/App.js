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
    <div className="App d-flex flex-wrap justify-content-center align-items-center ">
      <h1>COUNTRİES</h1>
      {countries.map((country) => {
        return (
          
            
              
              <div key={country.name} className=" container row d-flex justify-content-center align-items-center mt-5 mx-auto">
                <div className="col-md-8 d-flex  ">
                  <img className="w-50 mw-75 rounded card-img-top " src={country.flag} alt={country.name} />
               
                 <div>
                 <h1>Country:{country.name} </h1>
                 </div>
                 
                 <div>
                 <h2>Capital:{country.capital} </h2>
                 </div>
                </div>
              </div>
            
          
        );
      })}
    </div>
  );
}

export default App;
