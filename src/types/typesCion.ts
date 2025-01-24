import {z} from 'zod'
import { CurrencySchema,responseCriptoApiSchema,cryptoCoin,CriptoPriceSchema} from '../schema/zodSchema'
 
//Creando el type 
export type Currency = z.infer<typeof CurrencySchema>
export type CrytoCurrencyProps = z.infer<typeof responseCriptoApiSchema> 
export type CryptoCoin =z.infer<typeof cryptoCoin>
export type CryptoPrice = z.infer<typeof CriptoPriceSchema>