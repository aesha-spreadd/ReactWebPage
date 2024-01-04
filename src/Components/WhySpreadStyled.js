import styled from 'styled-components';
import { GlobalStyles } from './CreatorsStoreStyled';

export const WhySpreadSection = styled.div`
  background: white;
  padding: 80px 0px;
  z-index: 2;
  font-family: 'ProximaNova', san-serif;
  @media (max-width: 991px) {
    padding: 50px 0px;
  }
`;

export const WhySpreadContainer = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0px auto;
  z-index: 2;
`;

export const WhySpreadHeadingWrapper = styled.div`
  text-align: center;
`;

export const StyledHeading = styled.h3`
  margin-top: 0;
  margin-bottom: 0.5em;
  color: #212b36;
  font-weight: 500;
  line-height: 36px;
  font-family: 'ProximaNova', san-serif;
`;

export const StyledHeadingTitle = styled.h3`
  opacity: 1;
  font-size:24px;
  font-weight:500;
  transform: none;
  height: 30px;
  font-family: 'ProximaNova', san-serif;
}`;

export const StyledHeadingParagraph = styled.p`
  margin-top: 0;
  margin-bottom: 1em;
  font-family: 'ProximaNova', san-serif;
  font-size: 14px;
  font-weight: 400;
`;

export const WhySpreadStyledBoxWrapper = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  padding: 36px 0px;
  margin-top: 20px;

  &::before {
    content: '';
    position: absolute;
    top: 0px;
    right: 0px;
    left: 0px;
    margin: 0px auto;
    background: rgb(244, 247, 249);
    width: 80%;
    height: 360px;
  }

  &::after {
    content: '';
    position: absolute;
    top: -120px;
    right: -125px;
    background: url('https://spreadd.io/assets/home/whyspreadd/bg-why-spreadd.svg')
      no-repeat;
    width: 221px;
    height: 360px;
  }
  @media (max-width: 991px) {
    padding: 20px 0px 0px;
    gap: 20px;
    flex-direction: column;
    -webkit-box-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    align-items: center;

    &::before {
      height: 760px;
    }
    &::after {
      display: none;
    }
  }
`;

export const WhySpreadStyledBox = styled.div`
  opacity: 1;
  background: white;
  box-shadow: rgba(49, 49, 49, 0.1) 0px 81.2357px 64.9886px;
  border-radius: 5px;
  max-width: 33%;
  width: 100%;
  min-height: 220px;
  padding: 30px;
  z-index: 2;
  font-size: 1.5rem;

  @media (max-width: 991px) {
    font-size: 10px;
    max-width: 80%;
    min-height: 190px;
  }
`;

export const WhySpreadImageWrapper = styled.div`
  margin-bottom: 20px;
  img {
    vertical-align: middle;
    border-style: none;
  }
}`;

export const StyledCardTitle = styled.h5`
  margin: 0 0 0.5em;
  font-size: 15px;
  color: #212b36;
  font-family: 'ProximaNova', san-serif;
  font-weight: bold;
`;

export const StyledCardParagrah = styled.p`
  margin: 0px;
  font-family: 'ProximaNova', san-serif;
  font-size: 15px;
  font-weight: 400;
`;
