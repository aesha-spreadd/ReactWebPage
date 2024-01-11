import React from 'react';
import Collabration from './Components/Collabration';
import WhySpread from './Components/WhySpread';
import Partnership from './Components/Partnership';
import { GlobalStyles } from './Components/PartnershipStyled';
import CampaignMarket from './Components/CampaignMarket';
import OnchainProfile from './Components/OnchainProfile';

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <WhySpread />
      <Partnership />
      <Collabration />
      <CampaignMarket />
      <OnchainProfile />
    </div>
  );
};

export default App;
