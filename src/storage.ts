import { create } from "zustand";
import { CryptoCoin, CryptoPrice, CrytoCurrencyProps } from "./types/typesCion";
import { devtools } from 'zustand/middleware'

import { fetchData, getCriptos } from "./services/services";


// Definiendo el type que tipa los datos
type CryptoCurrencyProps={
    currenCryptos:CrytoCurrencyProps[]
    fetchCripto: () => Promise<void>
    fetchData: (pair:CryptoCoin) => Promise<void>
    resul:CryptoPrice
    loading:boolean
}

//Definicion del storege
export const useCriptoStorage = create<CryptoCurrencyProps>()(devtools((set)=>({
    //funcion para modificar el storege
     currenCryptos:[],
     resul:{} as CryptoPrice,
     loading:false,
    fetchCripto:async()=>{
    const criptos = await getCriptos()
    //escribiendo en el state
    set(()=>({
        currenCryptos:criptos
    }))
    },
    // obtenindo datos
    fetchData:async(pair:CryptoCoin)=>{
    const resul=await fetchData(pair)
    //Escribiendo en el state
    set(()=>({
       loading:true
    }))
    set(()=>({
        resul:resul,
        loading:false
    }))
    console.log(resul)
        
    }
    
})))