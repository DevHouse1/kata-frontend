import { useEffect, useMemo } from "react";
import { apiRoot } from "../contexts/GlobalContext";

// this hook use to geets the baskets form server using clientId
// using default id waiting to implement Authentication fonctionalities
const useBasket = (ClientId = 1 , setCart, setCartError) => {
  
  const url = useMemo(() => apiRoot + `/api/baskets/${ClientId}`, [ClientId]);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setCart(data?.lignes ?? []))
      .catch(err => setCartError(err));

  // url will change only if client changed effect expected to run only one time
  }, [url, setCart, setCartError]);

};

export default useBasket;