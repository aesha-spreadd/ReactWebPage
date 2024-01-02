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
} from './Spread_Acadamey';
import { StyledP, StyledH3, StyledSpanP, StyledSpan } from './Creator_store';

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
                <StyledH3>
                  <StyledSpan>Create courses and</StyledSpan>
                  <br></br>
                  <StyledSpan>curriculums for your</StyledSpan>
                  <br></br>
                  <StyledSpan>collaborators/followers</StyledSpan>
                  <br></br>
                </StyledH3>
                <StyledP>
                  <StyledSpanP>
                    We have got a host of features that can enable you to
                    skyrocket your
                  </StyledSpanP>
                  <StyledSpanP>
                    workshop and course sales. Empower your collaborators by
                    delivering
                  </StyledSpanP>
                  <StyledSpanP>
                    deeply engaging experience wherever they are, anytime,
                    anywhere.
                  </StyledSpanP>
                </StyledP>
              </SpreadRightDetails>
            </SpreadRightInner>
          </SpreadInnerWrapper>
        </SpreadAcademyContainer>
      </SectionSpreadAcademy>
    </div>
  );
};

export default SpreadAcademy;
