import React from 'react';
import {
  SectionCollabration,
  CollabrationPageConetent,
  CollabrationContainer,
  CollabrationInnerWrapper,
  CollabrationLeftInner,
  StyledCollabrationHeading,
  StyledSvgText,
  SvgDiv,
  StyledCollabrationParagraph,
  CollabrationRightInner,
  CollabrationImage,
  CollabrationSecondImage,
  CollabrationSvg,
} from './CollabrationStyled';

const Collabration = () => {
  return (
    <div>
      <SectionCollabration>
        <CollabrationPageConetent>
          <CollabrationContainer>
            <CollabrationInnerWrapper>
              <CollabrationLeftInner>
                <StyledCollabrationHeading>
                  Get ready for seamless collaborations, with personalised
                  content and insights.
                </StyledCollabrationHeading>
                <StyledCollabrationParagraph>
                  Spreadd is a decentralised ecosystem for creators economy
                  giving commercial mobility to brands, creators helping
                  accelerate their growth.
                </StyledCollabrationParagraph>
              </CollabrationLeftInner>
              <CollabrationRightInner>
                <CollabrationImage>
                  <img
                    src="https://spreadd.io/23139c22a9dbe19db52db946b5655757.jpg"
                    alt="no image"
                  />
                </CollabrationImage>
                <CollabrationSecondImage>
                  <img
                    src="https://spreadd.io/23139c22a9dbe19db52db946b5655757.jpg"
                    alt="no image"
                  />
                </CollabrationSecondImage>
                <CollabrationSvg>
                  <StyledSvgText>1.37k+ Creators</StyledSvgText>
                  <SvgDiv></SvgDiv>
                </CollabrationSvg>
              </CollabrationRightInner>
            </CollabrationInnerWrapper>
          </CollabrationContainer>
        </CollabrationPageConetent>
      </SectionCollabration>
    </div>
  );
};

export default Collabration;
