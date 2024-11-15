import React, { useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../contexts/GlobalContext';
import { apiRoot } from '../contexts/GlobalContext';

const ProductList = () => {
  const { products, addToCart } = useContext(GlobalContext);

  return (
    <ProductContainer>
      {products ? products.map(product => (
        <ProductCard key={product.id.toString()}>
          <img src={apiRoot + product.imageUrl} alt={product.nom} />
          <h3>{product.nom}</h3>
          <p>{product.description}</p>
          <div className='wrapper'>
            <span>${product.prix}</span>
            <span className='stockleft'>En Stock: {product.quantiteStock}</span>
          </div>

          <button onClick={() => addToCart(product.id)}>Add to Cart</button>
        </ProductCard>
      )) : <div>loading ...</div>}
    </ProductContainer>
  );
};

export default ProductList;

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ProductCard = styled.div`
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    margin: 16px;
    text-align: center;
    width: 25%;

  img {
    max-width: 100%;
    border-radius: 8px;
  }
  .wrapper{
     display: flex;
     margin-top: 16px;
     margin-bottom: 16px;
     justify-content: space-around;
  }
  
  .stockleft{
      color: tomato;
      font-weight: bold;
  }

  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;
