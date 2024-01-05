import React from 'react';

import {
  CampaignMarketContainer,
  CampaignMarketSection,
  CampaignMarketParticlesWrapper,
  CreatorStyledInnerWrapper,
  CreatorStyledLeftInner,
  CreatorStyledRateBox,
  ImageWrapper,
  StyledText,
  CreatorsStore,
  StyledRateBoxHeading,
  RightInnerWrapper,
  PopupWrapper,
  RightWrapperContent,
  StyledParagraph,
  StyledRateParagraph,
  PopUpHeading,
  GlobalStyles,
} from './CreatorsStoreStyled';

const CreatorStore = () => {
  return (
    <div>
      <CampaignMarketSection>
        <CampaignMarketContainer>
          <CampaignMarketParticlesWrapper>
            <img
              src={'https://spreadd.io/assets/home/left-dot-patch.svg'}
              alt="Logo"
            />
          </CampaignMarketParticlesWrapper>
          <CreatorStyledInnerWrapper>
            <CreatorStyledLeftInner>
              <CreatorStyledRateBox>
                <StyledRateBoxHeading>100+</StyledRateBoxHeading>
                <StyledRateParagraph>Happy Customers</StyledRateParagraph>
              </CreatorStyledRateBox>
              <ImageWrapper>
                <img
                  src={'https://spreadd.io/assets/home/iphone.png'}
                  alt="iPhone"
                />
              </ImageWrapper>
              <PopupWrapper>
                <PopUpHeading>100+ curated products</PopUpHeading>
              </PopupWrapper>
            </CreatorStyledLeftInner>
            <RightInnerWrapper>
              <RightWrapperContent>
                <CreatorsStore>Creator Store</CreatorsStore>
                <StyledText>
                  Curate your products and turn your content shop- able
                </StyledText>
                <StyledParagraph>
                  Apply to create your own store. You can choose brands and
                  display their product within your own store. You can get paid
                  on every sale brand makes through you.
                </StyledParagraph>
              </RightWrapperContent>
            </RightInnerWrapper>
          </CreatorStyledInnerWrapper>
        </CampaignMarketContainer>
      </CampaignMarketSection>
    </div>
  );
};

export default CreatorStore;
