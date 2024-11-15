import React from 'react';
import styled from 'styled-components';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';


const Home = () => {
  return (
    <HomeContainer>
      <Heading>Welcome to kata Store</Heading>
      <Cart />
      <ProductList/>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: auto;
`;

const Heading = styled.h2`
   text-align: center;
`;
