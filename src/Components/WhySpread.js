import React from 'react';
import {
  WhySpreadSection,
  WhySpreadContainer,
  WhySpreadHeadingWrapper,
  StyledHeading,
  StyledHeadingTitle,
  StyledHeadingParagraph,
  WhySpreadStyledBoxWrapper,
  WhySpreadStyledBox,
  WhySpreadImageWrapper,
  StyledCardTitle,
  StyledCardParagrah,
} from './WhySpreadStyled';

const WhySpread = () => {
  return (
    <div>
      <WhySpreadSection>
        <WhySpreadContainer>
          <WhySpreadHeadingWrapper>
            <StyledHeading>
              <StyledHeadingTitle>Why Spread?</StyledHeadingTitle>
            </StyledHeading>
            <StyledHeadingParagraph>
              Its time to give your ideas the wings they need. Bring them on to
              Spreadd and see them grow.
            </StyledHeadingParagraph>
          </WhySpreadHeadingWrapper>

          <WhySpreadStyledBoxWrapper>
            <WhySpreadStyledBox>
              <WhySpreadImageWrapper>
                <img
                  src="https://spreadd.io/assets/home/whyspreadd/noname.svg"
                  alt="homeicon"
                />
              </WhySpreadImageWrapper>
              <StyledCardTitle>No middle-man</StyledCardTitle>
              <StyledCardParagrah>
                Spreadd helps you to get in touch with your brand ambassadors
                directly. Avoid paying extra cuts to multiple agencies. We are
                here to save your money.
              </StyledCardParagrah>
            </WhySpreadStyledBox>
            <WhySpreadStyledBox>
              <WhySpreadImageWrapper>
                <img
                  src="https://spreadd.io/assets/home/whyspreadd/marketplace.svg"
                  alt="marketplaceicon"
                />
              </WhySpreadImageWrapper>
              <StyledCardTitle>NFT marketplace</StyledCardTitle>
              <StyledCardParagrah>
                Buy, sell and discover exclusive digital items to use within
                your marketing campaign. Our ad inventory gives you millions of
                option to select the content and customise as per your need to
                reuse in your campaigns.
              </StyledCardParagrah>
            </WhySpreadStyledBox>
            <WhySpreadStyledBox>
              <WhySpreadImageWrapper>
                <img
                  src="https://spreadd.io/assets/home/whyspreadd/sales.svg"
                  alt="svg-icon"
                />
              </WhySpreadImageWrapper>
              <StyledCardTitle>Increase your product sale</StyledCardTitle>
              <StyledCardParagrah>
                Want to get your product sold without extra costs? Want to make
                your product reach to more engaged community? Don’t worry, we
                got that covered with our creator stores.
              </StyledCardParagrah>
            </WhySpreadStyledBox>
          </WhySpreadStyledBoxWrapper>
        </WhySpreadContainer>
      </WhySpreadSection>
    </div>
  );
};

export default WhySpread;
