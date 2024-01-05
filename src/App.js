import React from 'react';
import CreatorStore from './Components/CreatorStore';
import SpreadAcademy from './Components/SpreadAcademy';
import { GlobalStyles } from './Components/CreatorsStoreStyled';
import WhySpread from './Components/WhySpread';
import Partnership from './Components/Partnership';

const App = () => {
  return (
    <div>
      <GlobalStyles />

      <CreatorStore />
    </div>
  );
};

export default App;
