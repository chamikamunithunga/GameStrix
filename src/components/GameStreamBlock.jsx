
import React from 'react';
import styled from 'styled-components';

const Block = styled.div`
  width: 100%;
  max-width: 300px;
  height: 200px;
  background: url(${props => props.image}) no-repeat center/cover;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 4px 10px #000000;
`;

const Title = styled.div`
  position: absolute;
  bottom: 0;
  background: #000000;
  color: #fff;
  width: 100%;
  text-align: center;
  padding: 10px;
`;

const GameStreamBlock = ({ title, image }) => (
  <Block image={image}>
    <Title>{title}</Title>
  </Block>
);

export default GameStreamBlock;
