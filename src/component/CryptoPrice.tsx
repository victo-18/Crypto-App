import { useMemo } from "react";
import { useCriptoStorage } from "../storage";
import { Loader } from "./Loader";

export const CryptoPrice = () => {
  const resul = useCriptoStorage((state) => state.resul);
  const loading = useCriptoStorage((state) => state.loading);
  const hasResul = useMemo(() => {
    return (
      resul && // Verifica que `resul` no sea null o undefined
      Object.keys(resul).length > 0 && // Verifica que tenga claves
      Object.values(resul).every((value) => value !== "") // Asegura que todos los valores no sean vacíos
    );
  }, [resul]);
  return (
    <div className="resul-wapper">
      {loading ? <Loader/> : hasResul ? (
        <>
          <h2 className="resultitle">Cotización</h2>
          <div className="resul">
            <img
              className="imagecrypto"
              src={`https://cryptocompare.com/${resul.IMAGEURL}`}
              alt="imagen crypto"
            />
            <div>
              <p>
                El precio es de: <span>{resul.PRICE}</span>
              </p>
              <p>
                Valor del cambio diario: <span>{resul.CHANGEDAY}</span>
              </p>
              <p>
                Variación ultimas 24 horas: <span>{resul.HIGH24HOUR}</span>
              </p>
              <p>
                Precio mas alto del dia: <span>{resul.HIGHDAY}</span>
              </p>
              <p>
                Precio mas bajo del dia: <span>{resul.LOWDAY}</span>
              </p>
              <p>
                Ultima actualización:<span>{resul.LASTUPDATE}</span>
              </p>
            </div>
          </div>
        </>
      ):""}
    </div>
  );
};
