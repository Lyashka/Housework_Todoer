import React from 'react';
import styled from 'styled-components';

const Content = styled.section`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 75vh;

  background-color: yellow;
`;

function MainContent() {
  return(
    <Content />
  );
}

export default MainContent;
