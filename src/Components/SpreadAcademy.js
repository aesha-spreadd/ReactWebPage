import React from 'react';
import {
  SectionSpreadAcademy,
  SpreadAcademyContainer,
  SpreadLeftInner,
  SpreadInnerWrapper,
  SpreadStyledDetails,
  SpreadImageWrapper,
  SpreadAcademyQuote,
  SpanStyledText,
  SpreadRightInner,
  SpreadRightDetails,
  SpreadAcadameyTag,
  StyledParagraph,
  StyledText,
} from './SpreadAcademeyStyled';

const SpreadAcademy = () => {
  return (
    <div>
      <SectionSpreadAcademy>
        <SpreadAcademyContainer>
          <SpreadInnerWrapper>
            <SpreadLeftInner>
              <SpreadStyledDetails>
                <SpreadImageWrapper>
                  <img
                    src={'https://spreadd.io/assets/home/academy.jpg'}
                    alt="Logo"
                  />
                </SpreadImageWrapper>
                <SpreadAcademyQuote>
                  <img
                    src={'https://spreadd.io/assets/home/academy.jpg'}
                    alt="Logo"
                  />
                  <SpanStyledText>
                    Amazing course, i would definetely recommend
                  </SpanStyledText>
                </SpreadAcademyQuote>
              </SpreadStyledDetails>
            </SpreadLeftInner>
            <SpreadRightInner>
              <SpreadRightDetails>
                <SpreadAcadameyTag>Spreadd Academy</SpreadAcadameyTag>
                <StyledText>
                  Create courses and curriculums for your
                  collaborators/followers
                </StyledText>
                <StyledParagraph>
                  We have got a host of features that can enable you to
                  skyrocket your workshop and course sales. Empower your
                  collaborators by delivering deeply engaging experience
                  wherever they are, anytime, anywhere.
                </StyledParagraph>
              </SpreadRightDetails>
            </SpreadRightInner>
          </SpreadInnerWrapper>
        </SpreadAcademyContainer>
      </SectionSpreadAcademy>
    </div>
  );
};

export default SpreadAcademy;
