import ResidentCard from "./ResidentCard"
import './stylesComponents.css'

const ResidentList = ({residents}) => {

    
  return (
    <section className="conteinerCards">
        {
            residents.map((resident) => (
            <ResidentCard key={resident} residentURL={resident} />) )
        }
    </section>
  )
}
export default ResidentList