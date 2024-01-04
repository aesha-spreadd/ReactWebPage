import styled from 'styled-components';
import { GlobalStyles } from './CreatorsStoreStyled';

const smallScreen = `@media (max-width: 720px)`;

export const SectionSpreadAcademy = styled.section`
  position: relative;
  background: rgb(255, 246, 246);
  margin: 0 auto;
  padding: 100px 0;
  font-family: 'ProximaNova', san-serif;

  &::before {
    content: '';
    position: absolute;
    top: 18px;
    background: url('https://spreadd.io/assets/home/left-dot-patch.svg')
      no-repeat;
    width: 46px;
    height: 37px;

    ${smallScreen} {
      display: none;
    }
  }

  ${smallScreen} {
    height: auto;
    margin: 0;
  }
`;

export const SpreadAcademyContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1500px;
`;

export const SpreadInnerWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  max-width: 1200px;

  ${smallScreen} {
    flex-direction: column-reverse;
  }
`;

export const SpreadLeftInner = styled.div`
  max-width: 49%;
  width: 100%;
  margin: 0 70px 0 0;

  ${smallScreen} {
    margin: 25px 10px 0 90px;
  }
`;

export const SpreadStyledDetails = styled.div`
  text-align: center;
  position: relative;
`;

export const SpreadImageWrapper = styled.div`
  opacity: 1;
  transform: translate3d(0px, 0px, 0px) translateX(0px);
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 96px;
    height: 96px;
    z-index: -1;
  }

  &::before {
    left: 16%;
    top: -20px;
    background: url('https://spreadd.io/assets/home/round-patch.svg') no-repeat;
  }

  &::after {
    left: 14%;
    top: 290px;
    z-index: 1;
    background: url('https://spreadd.io/assets/home/dot-patch.svg') no-repeat;
  }

  img {
    width: 100%;
    border-radius: 20px;
    max-width: 280px;
  }
  @media (max-width: 1200px) {
    &::before,
    &::after {
      width: 96px;
      height: 96px;
    }

    &::before {
      left: 70px;
      top: -13px;
    }

    &::after {
      left: 14%;
      top: 314px;
    }

    img {
      width: 100%;
      border-radius: 20px;
      max-width: 280px;
      margin-top: 20px;
    }
  }
  @media (max-width: 1100px) {
    &::before {
      left: 2px;
      top: -10px;
      width: 96px;
      height: 96px;
    }

    &::after {
      left: 1%;
      top: 300px;
      width: 96px;
      height: 96px;
    }

    img {
      width: 100%;
      border-radius: 20px;
      max-width: 280px;
      margin-top: 20px;
    }
  }

  @media (max-width: 970px) {
    &::before,
    &::after {
      width: 96px;
      height: 96px;
    }

    &::before {
      left: 5px;
      top: -10px;
    }

    &::after {
      left: 3%;
      top: 300px;
    }

    img {
      width: 100%;
      border-radius: 20px;
      max-width: 280px;
      margin-top: 20px;
    }
  }
  @media (max-width: 870px) {
    &::before,
    &::after {
      width: 96px;
      height: 96px;
    }

    &::before {
      left: -31px;
      top: -10px;
    }

    &::after {
      left: -14%;
      top: 300px;
    }

    img {
      width: 100%;
      border-radius: 20px;
      max-width: 280px;
      margin-top: 20px;
    }
  }
  ${smallScreen} {
    &::before,
    &::after {
      width: 96px;
      height: 96px;
    }

    &::before {
      left: -30px;
      top: -10px;
    }

    &::after {
      left: -14%;
      top: 320px;
    }

    img {
      width: 100%;
      border-radius: 20px;
      max-width: 280px;
      margin-top: 20px;
    }
  }
`;

export const SpreadAcademyQuote = styled.div`
  position: absolute;
  top: -25px;
  right: 43%;
  transform: translateX(50%);
  background: rgb(254, 79, 82);
  justify-content: flex-start;
  border-radius: 3px;
  padding: 10px;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 230px;
  img {
    max-width: 30px;
    width: 100%;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
  }
  ${smallScreen} {
    top: 10px;
    right: 20%;
    padding: 5px;
    font-size: 10px;
  }
`;

export const SpanStyled = styled.div`
  font-weight: 600;
  font-size: 12px;
  line-height: 1.5;
  color: white;
  text-align: left;
  ${smallScreen} {
    font-size: 8px;
  }
`;

export const SpreadRightInner = styled.div`
  max-width: 49%;
  width: 100%;
  margin: 0 0 0 100px;

  ${smallScreen} {
    max-width: 100%;
    margin: -79px 0 0 42px;
  }
`;

export const SpreadRightDetails = styled.div``;

export const SpreadAcadameyTag = styled.div`
  opacity: 1;
  transform: translate3d(0px, 0px, 0px) translateX(50%);
  font-size: 15px;
  line-height: 1.5;
  font-weight: 400;
  color: black;
  background: linear-gradient(50deg, white, transparent);
  padding: 8px 12px;
  margin-bottom: 25px;
  width: max-content;
  position: relative;
  left: 15%;
  transform: translateX(-50%);
  ${smallScreen} {
    max-width: 100%;
    left: 20px;
    font-size: 12px;
  }
`;

export const StyledText = styled.h3`
  max-height: 144px;
  width: 100%;
  height: auto;
  font-weight: 400;
  font-family: 'ProximaNova', san-serif;

  ${smallScreen} {
    max-width: 100%;
    position: absolute;
    font-size: 18px;
    line-height: 22px;
    margin: -20px 0 0 -30px;
  }
  @media (max-width: 970px) {
    max-width: 100%;
    position: absolute;
    font-size: 18px;
    line-height: 22px;
    margin: -20px 0 0 -30px;
  }
`;

export const StyledSpan = styled.p`
  @media (max-width: 720px) {
    font-size: 20px;
    margin: 0 -70px 0 0;
  }
  @media (max-width: 970px) {
    font-size: 20px;
    font-weight: bold;
    line-height: 12px;
  }
`;

export const StyledParagraph = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 23px;
  margin: 28px 0 0 10px;
  font-family: 'ProximaNova', san-serif;

  @media (max-width: 720px) {
    font-size: 11px;
    line-height: 18px;
    margin: 90px 50px 0 -30px;
  }
  @media (max-width: 970px) {
    font-size: 11px;
    margin: 130px 50px 0 -30px;
  }
`;

export const StyledSpanText = styled.div``;
