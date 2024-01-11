import React from 'react';
import {
  PartnerShipSection,
  PartnerShipContainer,
  PartnerShipContent,
  ParticalWrapper,
  StyledHeading,
  StyledSpanText,
  PartnershipDescription,
  StyledParagraph,
  StyledSpanParagraph,
  PartnershipStyledPartner,
  PartnershipTrustWrapper,
  PartnershipBorder,
  StyledFooterHeading,
  ParnternshipImages,
} from './PartnershipStyled';

const Partnership = () => {
  return (
    <div>
      <PartnerShipSection>
        <PartnerShipContainer>
          <PartnerShipContent>
            <ParticalWrapper>
              <img
                src="https://spreadd.io/9ddc94ee6277c0a5b9f2f46f46464e53.jpg"
                alt="spread.io icon"
              />
            </ParticalWrapper>
            <PartnershipDescription>
              <StyledHeading>
                We’re as smooth as our collaborations.
              </StyledHeading>
              <StyledParagraph>
                We’re as smooth as our collaborations. We work with creators and
                brands from Dubai and India. We support more than 5+ brands and
                200+ creators. We proudly facilitate faster growth for global
                companies in web3 and web3.
              </StyledParagraph>
            </PartnershipDescription>
          </PartnerShipContent>
          <PartnershipStyledPartner>
            <PartnershipTrustWrapper>
              <PartnershipBorder />
              <StyledFooterHeading>Trusted & supported by:</StyledFooterHeading>
            </PartnershipTrustWrapper>
            <ParnternshipImages>
              <img
                src="https://spreadd.io/875dec57a27d2f383819edbcc9944e97.jpg"
                alt="Trusted Partner 1"
              />
              <img
                src="https://spreadd.io/f4f4b093b0ebf25d7a22b46e54dd91f6.jpg"
                alt="Trusted Partner 2"
              />
              <img
                src="https://spreadd.io/45aece980a0b097c53b252e3074d8c77.jpg"
                alt="Trusted Partner 3"
              />
              <img
                src="https://spreadd.io/40e1c51ec8d39bdd6f1f6e6caac5bb04.jpg"
                alt="Trusted Partner 4"
              />
              <img
                src="https://spreadd.io/d9d4c5a7d7181156f56f23121c2991bd.jpg"
                alt="Trusted Partner 5"
              />
              <img
                src="https://spreadd.io/ca5422c45d79fc2000681b81915e3e14.jpg"
                alt="Trusted Partner 6"
              />
              <img
                src="https://spreadd.io/373638128aa96ad233997256bfa2e4ee.jpg"
                alt="Trusted Partner 7"
              />
            </ParnternshipImages>
          </PartnershipStyledPartner>
        </PartnerShipContainer>
      </PartnerShipSection>
    </div>
  );
};

export default Partnership;
