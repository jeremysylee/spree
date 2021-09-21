import React from 'react';
import styled from 'styled-components';

import GlobalStyle from '../assets/globalStyle';

const AppContainer = styled.div`
  height: 100%;
`;

const App = () => {
  return (
    <AppContainer>
      <GlobalStyle />
      <h1>SPREE</h1>
    </AppContainer>
  )
}

export default App;