import { useState } from "react";
import { currencies } from "../data/coin";
import { useCriptoStorage } from "../storage";
import { CryptoCoin } from "../types/typesCion";
import { Error} from "../component/Error";

export const SearchCriptoForm = () => {
  const currenCryptos = useCriptoStorage((state)=>state.currenCryptos)
  const fetchData = useCriptoStorage((state)=>state.fetchData)
  const [error,setError]=useState('')
  const [pair, setPair]=useState<CryptoCoin>({
    coin:'',
    currencycripto:'',
  })
  const handlechange =(e: React.ChangeEvent<HTMLSelectElement>)=>{
    setPair({
      ...pair,
      [e.target.name]:e.target.value
      
    })
  }
  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if(Object.values(pair).includes("")){
      setError('Todos los campos son obligatorios')
      return 
    }
   console.log("enviando",pair)
   setPair({
    ...pair,
    coin:'',
    currencycripto:'',

   })
   fetchData(pair)
   setError('')
  }
  return (
    <form onSubmit={handleSubmit}>
      {error && <Error>{error}</Error>}
      <div className="field">
        <label htmlFor="coin">Moneda</label>
        <select className="select" id="coin" name="coin"
        value={pair.coin}
        onChange={handlechange}
        >
          <option value={""}>-- Selecione su moneda --</option>
          {currencies.map((coin, index) => (
            <option value={coin.code} key={index}>
              {coin.name}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="currencycripto">Cripto moneda</label>
        <select className="select" id="currencycripto" name="currencycripto"
        value={pair.currencycripto}
         onChange={handlechange}
        >
          <option value={""}>-- Selecione su moneda --</option>
           {currenCryptos.map((crypto,index)=>(
            <option key={index} value={crypto.CoinInfo.Name}>{crypto.CoinInfo.FullName}</option>
          ))} 
        </select>
      </div>
      <div className="container_btn">
        <input className="input" type="submit" value={"Cotizar Cripto"} />
      </div>
    </form>
  );
};
