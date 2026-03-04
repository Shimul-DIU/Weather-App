 import { useState,useEffect } from 'react'



function App() {
  const [alldata,setAlldata ] = useState(null)
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      const lat =position.coords.latitude;
      const lon=position.coords.longitude;
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d73dad236951ee815757e21530792e16&units=metric`)
      .then(res=>res.json())
      .then(data=>setAlldata(data))
    })
    
  },[])

  return (
    <div>
        {console.log(alldata)}
    </div>
  )
}

export default App
