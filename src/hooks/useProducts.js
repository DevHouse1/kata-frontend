import { useState, useEffect, useMemo } from "react";
import { apiRoot } from "../contexts/GlobalContext";

const useProducts = () => {
  const [products, setProducts] = useState(null);
  const [productsError, setProductsError] = useState(null);
  
  const url = useMemo(() => apiRoot + "/api/products", []);
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => setProductsError(err));
  }, [url]);

  return [products, productsError];
};

export default useProducts;