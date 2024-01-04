import React from 'react';
import CreatorStore from './Components/CreatorStore';
import SpreadAcademy from './Components/SpreadAcademy';
import { GlobalStyles } from './Components/CreatorsStoreStyled';

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <SpreadAcademy />
      <CreatorStore />
    </div>
  );
};

export default App;
