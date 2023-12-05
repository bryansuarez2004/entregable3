import axios from "axios";
import './stylesComponents.css'

const Location = ({locationInfo, setLocationInfo}) => {
    
   const handleSubmit = (e) => {
       e.preventDefault();
        const newLocationId = e.target.newLocation.value;

        axios.get(`https://rickandmortyapi.com/api/location/${newLocationId}`)
        .then(({data})=> setLocationInfo(data))
          .catch((err)=> console.log(err))

   }


  return (
   <section>

    <form className="form" onSubmit={handleSubmit}>
       <div className="formSpace">
        <input 
        className="inputForm"
        type="text" 
        name="newLocation" 
        placeholder="Type a location ID..." 
        />
        <button 
        className="buttonForm"
        type="submit" >Search
        <div className="buscador">
            <img src="/pixelarticons_search.png" alt="" />
        </div>
        </button>
        
        </div>   
        
        
    </form> 




    <article className="conteinerInfo">
        <h2>Welcome to {locationInfo?.name}! </h2>
        <ul>
            <li>Type: {locationInfo?.type}</li>
            <li>Dimension: {locationInfo?.dimension}</li>
            <li className="pop">Population: {locationInfo?.residents.length}</li>
        </ul>
    </article>
   </section>
  )
}
export default Location