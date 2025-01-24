import axios from "axios";
import { CriptoPriceSchema, responseCriptoApiSchemaarray } from "../schema/zodSchema";
import { CryptoCoin } from "../types/typesCion";

export async function getCriptos() {
  const URL =
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=30&tsym=USD";
  const {
    data: { Data },
  } = await axios.get(URL);
  const resul = responseCriptoApiSchemaarray.safeParse(Data);
  if (resul.success) {
    return resul.data;
  }
}
export async function fetchData(pair: CryptoCoin) {
  const URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.currencycripto}&tsyms=${pair.coin}`;
  const { data:{DISPLAY} } = await axios.get(URL);
  const resul = CriptoPriceSchema.safeParse(DISPLAY[pair.currencycripto][pair.coin])
  if(resul.success){
    return resul.data
  }
}
