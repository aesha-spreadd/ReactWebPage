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
  StyledSpan,
  CreatorsStore,
  RightInnerWrapper,
  PopupWrapper,
  RightWrapperContent,
  StyledSpanText,
  StyledParagraph,
  GlobalStyles,
} from './CreatorsStoreStyled';

const CreatorStore = () => {
  return (
    <div>
      <GlobalStyles />
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
                <h5>100+</h5>
                <p>Happy Customers</p>
              </CreatorStyledRateBox>
              <ImageWrapper>
                <img
                  src={'https://spreadd.io/assets/home/iphone.png'}
                  alt="iPhone"
                />
              </ImageWrapper>
              <PopupWrapper>
                <h2>100+ curated products</h2>
              </PopupWrapper>
            </CreatorStyledLeftInner>
            <RightInnerWrapper>
              <RightWrapperContent>
                <CreatorsStore>Creator Store</CreatorsStore>
                <StyledText>
                  <StyledSpan>Curate your</StyledSpan>
                  <StyledSpan>products and turn</StyledSpan>
                  <StyledSpan>your content shop-</StyledSpan>
                  <StyledSpan>able</StyledSpan>
                </StyledText>
                <StyledParagraph>
                  <StyledSpanText>
                    Apply to create your own store. You can choose brands
                  </StyledSpanText>
                  <StyledSpanText>
                    and display their product within your own store. You can
                  </StyledSpanText>
                  <StyledSpanText>
                    get paid on every sale brand makes through you
                  </StyledSpanText>
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
