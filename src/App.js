import React from 'react';
import CreatorStore from './Components/CreatorStore';
import SpreadAcademy from './Components/SpreadAcademy';
import { GlobalStyles } from './Components/CreatorsStoreStyled';
import WhySpread from './Components/WhySpread';

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <SpreadAcademy />
      <CreatorStore />
      <WhySpread />
    </div>
  );
};

export default App;
