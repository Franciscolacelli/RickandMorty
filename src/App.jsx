import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Location from './components/Location'
import ResidentInfo from './components/ResidentInfo'
import Loader from './components/Loader'

function App() {
 
  const [ character, setCharacter ] = useState({});
  const [personArray, setPersonArray] = useState([]);
  const id = Math.floor(Math.random(1) * 126);
  const [ num, setNum ] = useState("")
  const [ isLoading, setIsLoading] = useState(true)
 
  useEffect( () => {    

    setIsLoading(true)

      axios
          .get( `https://rickandmortyapi.com/api/location/${id}` )
          .then( resp => {setCharacter(resp.data)
            setPersonArray(resp.data?.residents)})
          .catch( error => console.error(error) )

    setTimeout(() =>{
    setIsLoading(false)
         }, 1500)
  }, [] )



  const userLocation = () => {
    setIsLoading(true)
      axios
         .get(`https://rickandmortyapi.com/api/location/${num}`)
         .then( (resp) => {setCharacter(resp.data)
                            setPersonArray(resp.data?.residents)})
         .catch( (error) => console.log(error) )
         
    setTimeout(() =>{
     setIsLoading(false)
          }, 1500)
  }

  return (
    <>
    { isLoading && <Loader/>}

    <div className="App">

      <div>
        <img className='logo' src="logo.svg" alt="logo" />
      </div>

      <div className="buscador"> 
        <input value={num} onChange={ (e) => setNum(e.target.value)} className='buscador-imput' type="text" placeholder= "..126 locations waiting for you.."/>
        <button onClick={userLocation} className='btn-buscador'><i className='bx bx-search-alt-2'></i></button>
      </div>
      
      <Location data={character}/>
      </div>

      
      
      
         <ul className='conteiner-resident'>
        {personArray.map((resident) => (  
          <ResidentInfo key={resident} personData={resident} />
        ))}
      </ul>
  
      
      </>
  )
}

export default App
