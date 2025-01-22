// components/Navbar.jsx
import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: #000000;
  box-shadow: 0 2px 5px#000000;
`;

const Logo = styled.h1`
  font-weight: 600;
  font-size: 1.7rem;
`;





const Navbar = () => (
  <Nav>
    <Logo>GameStrix</Logo>
   
  </Nav>
);

export default Navbar;
