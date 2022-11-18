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
    <div className="App  ">
      <h1>COUNTRİES</h1>
    
      {countries.map((country) => {
        return (
          
           <div  key={country.name} className="container mt-3">
          
          <div className="map" >
          <div className="container d-flex  mt-3" >
              <div className="card">
                  <img className="card-img-top  width:150px "
                      src={country.flags.png} 
                      alt={country.name.common} />
                  <div className="card-body ">
                      <h1 className="card-title">Country:{country.name} </h1>
                      <h3 className="card-text">Capital:{country.capital} </h3>
                      <h4 className="card-text">Population:{country.population}</h4>                      
                  </div>
              </div>
          </div>
          </div>
          </div>
     
              
              // <div key={country.name} className=" container row d-flex justify-content-center align-items-center mt-5 mx-auto">
              //   <div className="col-md-8 d-flex  ">
              //     <img className="w-50 mw-75 rounded card-img-top " src={country.flag} alt={country.name} />
               
              //    <div>
              //    <h1>Country:{country.name} </h1>
              //    </div>
                 
              //    <div>
              //    <h2>Capital:{country.capital} </h2>
              //    </div>
              //   </div>
              // </div>
            
          
        );
      })}
    </div>
  );
}

export default App;
