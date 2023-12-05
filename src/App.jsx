
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { getRandomNumber } from './helpers/random'
import Location from './components/Location'
import  ResidentList  from './components/ResidentList'

function App() {

  const [locationInfo, setLocationInfo] = useState(null)


  useEffect(()=>{
    const randomDimension = getRandomNumber(126)
    
          axios.get(`https://rickandmortyapi.com/api/location/${randomDimension}`)
          .then(({data})=> setLocationInfo(data))
          .catch((err)=> console.log(err))
  },[])



  return (
    <main className='ConteinerGeneral'>
      <div className='header'>
          <div className='headerImg'>
            <img src="/rickmortyimg.webp" alt="" />
          </div>
          <div className='headerTitle'>
            <img src="/rickmortytitle.webp" alt="" />
          </div>
      </div>
      <Location locationInfo={locationInfo}  setLocationInfo={setLocationInfo} />
      <ResidentList residents={locationInfo?.residents ?? []} />
    </main>
  )
}

export default App
