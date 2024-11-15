import React, { useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../contexts/GlobalContext';
import { useNavigate } from 'react-router-dom';


const Cart = () => {
  const { cart, removeFromCart, createCommand } = useContext(GlobalContext);
  const navigate = useNavigate();
  return (
    <CartContainer>
      <Wrapper>
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <CartItem key={item.id}>
              <span className="name">{item.product.nom}</span>
              <span className="quantity">Quantity : {item.quantite}</span>
              <span className="price">Price: ${item.product.prix * item.quantite}</span>
              <button onClick={() => removeFromCart(item.product.id)}>Remove</button>
            </CartItem>
          ))
        )}
        {cart.length > 0 && (
          <CartActions>
            <div className="buttonWrapper">
              <button onClick={() => {
                createCommand();
                navigate('/commands');
                }}>Validate Cart</button>
            </div>
            <span className="total"> Total : ${cart.reduce((prev, curr) => prev + (curr.product.prix * curr.quantite), 0)} </span>
          </CartActions>
        )}
      </Wrapper>
    </CartContainer>
  );
};

export default Cart;

const CartContainer = styled.div`
  margin-top: 20px;
  padding: 20px 50px 20px 50px
`;

const Wrapper = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
  
  .name{
    flex: 4;
  }

  .quantity{
     flex: 3;
     color: tomato;
     font-weight: bold;
  }

  .price{
     flex: 3;
     color: green;
     font-weight: bold;
  }

  button {
    background-color: red;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: darkred;
    }
  }
`;

const CartActions = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  .buttonWrapper{
    flex: 7;

  }
  .total{
     color: tomato;
     font-weight: bold;
     flex: 4;
     margin-left: 30px;
  }

  button {
    padding: 10px 20px;
    background-color: green;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: darkgreen;
    }
  }
`;
