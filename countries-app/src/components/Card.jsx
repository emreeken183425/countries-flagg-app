// import React, { useEffect, useState } from 'react'
// import axios from "axios"
// const Card = () => {

// const [country, setCountry] = useState([])

// useEffect(() => {
//   // get post hangisini istiyorsak onu yazıyoruz axios yanına
//   axios.get('https://restcountries.com/v2/all')
//   .then(response=>setCountry(response))
// }, [])


//   return (
//     <div>
//       <h1>merhaba</h1>
//       {country.map((emre) => {
//         return (
          
//            <div  key={emre.name} className="container mt-3">
          
//           <div className="map" >
//           <div className="container d-flex  mt-3" >
//               <div className="card">
//                   <img className="card-img-top  width:150px "
//                       src={emre.flags.png} 
//                       alt={emre.name.common} />
//                   <div className="card-body ">
//                       <h1 className="card-title">Country:{emre.name} </h1>
//                       <h3 className="card-text">Capital:{emre.capital} </h3>
//                       <h4 className="card-text">Population:{emre.population}</h4>                      
//                   </div>
//               </div>
//           </div>
//           </div>
//           </div>
     
              
//               // <div key={country.name} className=" container row d-flex justify-content-center align-items-center mt-5 mx-auto">
//               //   <div className="col-md-8 d-flex  ">
//               //     <img className="w-50 mw-75 rounded card-img-top " src={country.flag} alt={country.name} />
               
//               //    <div>
//               //    <h1>Country:{country.name} </h1>
//               //    </div>
                 
//               //    <div>
//               //    <h2>Capital:{country.capital} </h2>
//               //    </div>
//               //   </div>
//               // </div>
            
          
//         );
//       })}
//     </div>
//   )
// }

// export default Card
