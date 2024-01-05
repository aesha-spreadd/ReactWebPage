import styled from 'styled-components';
import { GlobalStyles } from './CreatorsStoreStyled';

const smallScreen = `@media (max-width: 720px)`;
export const SectionSpreadAcademy = styled.section`
  position: relative;
  background: #fff6f6;
  margin: 0 auto;
  padding: 100px 0;
  font-family: 'ProximaNova', san-serif;
  display: flex;
  justify-content: center;
  align-items: center;

  ${smallScreen} {
    padding: 90px 0;
  }

  &::before {
    content: '';
    left: 0;
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
`;

export const SpreadAcademyContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
`;

export const SpreadInnerWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  max-width: 1500px;

  ${smallScreen} {
    flex-direction: column-reverse;
    max-width: 1500px;
  }
`;

export const SpreadLeftInner = styled.div`
  max-width: 49%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin: 0 0 0 40px;
  @media (max-width: 870px) {
    margin: 0 90px 0 40px;
  }
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
    left: 8%;
    top: -32px;
    background: url('https://spreadd.io/assets/home/round-patch.svg') no-repeat;
  }

  &::after {
    left: 5%;
    top: 290px;
    z-index: 1;
    background: url('https://spreadd.io/assets/home/dot-patch.svg') no-repeat;
  }

  img {
    width: 100%;
    border-radius: 20px;
    max-width: 280px;
    margin: 0 0 0 50px;
  }
  @media (max-width: 1200px) and @media(max-width:1100px) {
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
      margin: 20px 0 0;
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
      margin: 20px 0 0;
    }
  }
  @media (max-width: 870px) {
    &::before,
    &::after {
      width: 96px;
      height: 96px;
    }

    &::before {
      left: 28px;
      top: -10px;
    }

    &::after {
      left: 4%;
      top: 312px;
    }

    img {
      width: 100%;
      border-radius: 20px;
      max-width: 280px;
      margin: 20px 0 0;
    }
  }
  ${smallScreen} {
    &::before,
    &::after {
      width: 96px;
      height: 96px;
    }

    &::before {
      left: 29px;
      top: -10px;
    }

    &::after {
      left: 3%;
      top: 313px;
    }

    img {
      width: 100%;
      border-radius: 20px;
      max-width: 280px;
    }
  }
`;

export const SpreadAcademyQuote = styled.div`
  position: absolute;
  top: -25px;
  transform: translateX(50%);
  background: #fe4f52;
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
    margin: 0 10px 0 0;
  }
  ${smallScreen} {
    top: 10px;
    right: 20%;
    padding: 5px;
    font-size: 10px;
  }
`;

export const SpanStyledText = styled.div`
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
  margin: 0 30px 0 20px;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 991px) {
    max-width: 100%;
    margin: 0px 0 0 42px;
    justify-content: flex-start;
  }
  ${smallScreen} {
    max-width: 100%;
    margin: -79px 0 0 42px;
    justify-content: flex-start;
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
  margin: 0 0 25px 18px;
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

export const StyledText = styled.div`
  max-width: 440px;
  width: 100%;
  font-size: 42px;
  font-weight: 500;
  margin: 0 0 0 17px;
  @media (max-width: 991px) {
    font-size: 29px;
    margin: 0 0 0 -8px;
  }
  @media (max-width: 776px) {
    max-width: 300px;
    width: 100%;
    margin: 0 0 0 -20px;
    font-size: 28px;
    line-height: 35px;
  }
`;

export const StyledParagraph = styled.div`
  width: 100%;
  max-width: 440px;
  margin: 12px 0 0 17px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  font-family: 'ProximaNova', san-serif;
  @media (max-width: 991px) {
    font-size: 12px;
    margin: 0 0 0 -8px;
  }
  @media (max-width: 776px) {
    max-width: 400px;
    width: 100%;
    margin: 0 0 0 -20px;
    font-size: 12px;
    line-height: 23px;
  }
`;
