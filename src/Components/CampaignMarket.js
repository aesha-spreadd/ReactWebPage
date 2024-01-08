import React from 'react';
import {
  CampaignMarketSection,
  CampaignMarketContainer,
  CampaignMarketInner,
  CampaignMarketParticals,
  CampaignMarketLeftInner,
  CampaignMarketPopBox,
  CampaignMarketIconBox,
  CampaignMarketPopHeading,
  CampaignMarketImage,
  CampaignMarketPopBoxBottom,
  CampaignMarketBottomIcon,
  CampaignMarketBottomIconHeading,
  CampaignMarketBottomIconParagraph,
  CampaignMarketRightInner,
  CampaignMarketRightInnerDetails,
  CampaignMarketTag,
  CampaignMarketHeading,
  CampaignMarketParagraph,
} from './CampaignMarketStyled';

const CampaignMarket = () => {
  return (
    <div>
      <CampaignMarketSection>
        <CampaignMarketContainer>
          <CampaignMarketInner>
            <CampaignMarketParticals>
              <img
                src={'https://spreadd.io/assets/home/left-dot-patch.svg'}
                alt="Logo"
              />
            </CampaignMarketParticals>
            <CampaignMarketLeftInner>
              <CampaignMarketPopBox>
                <CampaignMarketIconBox>
                  <img src="https://spreadd.io/assets/home/setting.svg" />
                </CampaignMarketIconBox>
                <CampaignMarketPopHeading>
                  Available Solution
                </CampaignMarketPopHeading>
              </CampaignMarketPopBox>
              <CampaignMarketImage>
                <img src="https://spreadd.io/assets/home/marketplace.jpg" />
              </CampaignMarketImage>
              <CampaignMarketPopBoxBottom>
                <CampaignMarketBottomIcon>
                  <img src="https://spreadd.io/assets/home/bulb.svg" />
                </CampaignMarketBottomIcon>
                <CampaignMarketBottomIconHeading>
                  Easy Methods
                </CampaignMarketBottomIconHeading>
                <CampaignMarketBottomIconParagraph>
                  We Have the best ideas for your Brand
                </CampaignMarketBottomIconParagraph>
              </CampaignMarketPopBoxBottom>
            </CampaignMarketLeftInner>
            <CampaignMarketRightInner>
              <CampaignMarketRightInnerDetails>
                <CampaignMarketTag>Campaign marketplace</CampaignMarketTag>
                <CampaignMarketHeading>
                  Participate in campaigns & build relationships with brands
                </CampaignMarketHeading>
                <CampaignMarketParagraph>
                  Join our campaign marketplace to deliver content, build strong
                  relationships with brands and receive agreement-based timely
                  payouts.
                </CampaignMarketParagraph>
              </CampaignMarketRightInnerDetails>
            </CampaignMarketRightInner>
          </CampaignMarketInner>
        </CampaignMarketContainer>
      </CampaignMarketSection>
    </div>
  );
};

export default CampaignMarket;
