import React from 'react';
import {
  CampaignMarketContentStyled,
  CampaignMarketSection,
  CampaignMarketParticlesWrapper,
  CreatorStyledInnerWrapper,
  CreatorStyledLeftInner,
  CreatorStyledRateBox,
  ImageWrapper,
  StyledH3,
  StyledSpan,
  CreatorsStore,
  RightInnerWrapper,
  PopupWrapper,
  StyledSpanP,
  StyledP,
} from './Creator_store';

const CreatorStore = () => {
  return (
    <div>
      <CampaignMarketSection>
        <CampaignMarketContentStyled>
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
                  style={{ maxWidth: '380px', top: '-220px' }}
                />
              </ImageWrapper>
              <PopupWrapper>
                <h2>100+ curated products</h2>
              </PopupWrapper>
            </CreatorStyledLeftInner>
            <RightInnerWrapper>
              <div className="RightWrapperContent">
                <CreatorsStore>Creator Store</CreatorsStore>
                <StyledH3>
                  <StyledSpan>Curate your</StyledSpan>
                  <br></br>
                  <StyledSpan>products and turn</StyledSpan>
                  <br></br>
                  <StyledSpan>your content shop-</StyledSpan>
                  <br></br>
                  <StyledSpan>able</StyledSpan>
                </StyledH3>
                <StyledP>
                  <StyledSpanP>
                    Apply to create your own store. You can choose brands
                  </StyledSpanP>
                  <StyledSpanP>
                    and display their product within your own store. You can
                  </StyledSpanP>
                  <StyledSpanP>
                    get paid on every sale brand makes through you
                  </StyledSpanP>
                </StyledP>
              </div>
            </RightInnerWrapper>
          </CreatorStyledInnerWrapper>
        </CampaignMarketContentStyled>
      </CampaignMarketSection>
    </div>
  );
};

export default CreatorStore;