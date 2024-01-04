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
  StyledParagraphText,
  StyledTitle,
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
                  <StyledTitle>Create courses and</StyledTitle>
                  <StyledTitle>curriculums for your</StyledTitle>
                  <StyledTitle>collaborators/followers</StyledTitle>
                </StyledText>
                <StyledParagraph>
                  <StyledParagraphText>
                    We have got a host of features that can enable you to
                    skyrocket your
                  </StyledParagraphText>
                  <StyledParagraphText>
                    workshop and course sales. Empower your collaborators by
                    delivering
                  </StyledParagraphText>
                  <StyledParagraphText>
                    deeply engaging experience wherever they are, anytime,
                    anywhere.
                  </StyledParagraphText>
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
