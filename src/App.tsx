import { useEffect } from "react"
import { SearchCriptoForm } from "./component/SearchCriptoForm"
import { useCriptoStorage } from "./storage"
import { CryptoPrice } from "./component/CryptoPrice"

function App() {
const fetchCriptoStorege =useCriptoStorage((state)=>state.fetchCripto)

//Llamado a la funcion fetchCriptoStorage
useEffect(()=>{
fetchCriptoStorege()
},[])
  return (
    <>
   <div className="container">
     <h1 className="app-title">Cotizador de <span>Criptomoneda</span></h1>
     <div className="content">
      <SearchCriptoForm/>
      <CryptoPrice/>
      </div>
    </div> 
   
    </>
  )
}

export default App
