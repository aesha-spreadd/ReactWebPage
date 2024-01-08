import React from 'react';
import Collabration from './Components/Collabration';
import WhySpread from './Components/WhySpread';
import Partnership from './Components/Partnership';
import { GlobalStyles } from './Components/PartnershipStyled';
import CampaignMarket from './Components/CampaignMarket';

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <WhySpread />
      <Collabration />
      <Partnership />
      <CampaignMarket />
    </div>
  );
};

export default App;
