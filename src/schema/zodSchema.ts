import { z } from "zod";

export const CurrencySchema = z.object({
  code: z.string(),
  name: z.string(),
});

export const responseCriptoApiSchema = z.object({
  CoinInfo: z.object({
    FullName: z.string(),
    Name: z.string(),
  }),
});

export const responseCriptoApiSchemaarray = z.array(responseCriptoApiSchema);

export const cryptoCoin = z.object({
  coin: z.string(),
  currencycripto: z.string(),
});

export const CriptoPriceSchema = z.object({
  IMAGEURL: z.string(),
  PRICE: z.string(),
  HIGHDAY: z.string(),
  LOWDAY: z.string(),
  CHANGEDAY:z.string(),
  HIGH24HOUR:z.string(),
  LASTUPDATE:z.string(),

});
