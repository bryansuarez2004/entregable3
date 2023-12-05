import axios from "axios"
import { useEffect, useState } from "react"
import './stylesComponents.css'



const ResidentCard = ({residentURL}) => {
   const [residentInfo, setResidentInfo] = useState(null);

   const bgByStatus = {
    Alive: 'circleGreen',
    Dead: 'circleRed',
    unknown: 'circleUnk'
   }
   
   useEffect(()=>{
         axios.get(residentURL)
         .then(({data})=> setResidentInfo(data))
         .catch((err)=> console.log(err))
   }, [])

  return (
    <article>
        <header className="conteinerHeader">
               <img src={residentInfo?.image } alt="" />
            <div className="status">
                <div className={`circle ${bgByStatus[residentInfo?.status]}`}></div>
                <span>{residentInfo?.status}</span>
            </div>
        </header>
        <section className="conteinerContent">
            <h5>{residentInfo?.name}</h5>
            <ul>
                <li>
                    <span>Species</span> {residentInfo?.species}
                </li>
                <li>
                    <span>Origin</span> {residentInfo?.origin.name}
                </li>
                <li>
                    <span>Times appear</span> {residentInfo?.episode.length}
                </li>
            </ul>
        </section>
    </article>
  )
}
export default ResidentCard