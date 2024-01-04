import React from 'react';
import {
  SectionSpreadAcademy,
  SpreadAcademyContainer,
  SpreadLeftInner,
  SpreadInnerWrapper,
  SpreadStyledDetails,
  SpreadImageWrapper,
  SpreadAcademyQuote,
  SpanStyled,
  SpreadRightInner,
  SpreadRightDetails,
  SpreadAcadameyTag,
  StyledParagraph,
  StyledText,
  StyledSpanText,
  StyledSpan,
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
                  <SpanStyled>
                    Amazing course, i would definetely recommend
                  </SpanStyled>
                </SpreadAcademyQuote>
              </SpreadStyledDetails>
            </SpreadLeftInner>
            <SpreadRightInner>
              <SpreadRightDetails>
                <SpreadAcadameyTag>Spreadd Academy</SpreadAcadameyTag>
                <StyledText>
                  <StyledSpan>Create courses and</StyledSpan>
                  <StyledSpan>curriculums for your</StyledSpan>
                  <StyledSpan>collaborators/followers</StyledSpan>
                </StyledText>
                <StyledParagraph>
                  <StyledSpanText>
                    We have got a host of features that can enable you to
                    skyrocket your
                  </StyledSpanText>
                  <StyledSpanText>
                    workshop and course sales. Empower your collaborators by
                    delivering
                  </StyledSpanText>
                  <StyledSpanText>
                    deeply engaging experience wherever they are, anytime,
                    anywhere.
                  </StyledSpanText>
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
