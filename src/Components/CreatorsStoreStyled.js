import styled, { createGlobalStyle } from 'styled-components';
import ProximaNova from '../font/Proxima Nova/proximanova_regular.ttf';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ProximaNova';
    src: url('${ProximaNova}') format('truetype');
    font-style: normal;
  }
`;

export const CampaignMarketSection = styled.section`
  margin: 0 auto;
  background: rgb(255, 246, 246);
  padding: 80px 0;
  font-family: 'ProximaNova', sans-serif;

  @media (max-width: 766px) {
    padding: 50px 10px;
  }
`;

export const CampaignMarketContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
`;

export const CampaignMarketParticlesWrapper = styled.div`
  position: absolute;
  top: 18px;
  right: 0;

  img {
    max-width: 28px;
    width: 100%;
    height: auto;
    max-height: 38px;
    box-sizing: 'border-box';
  }

  @media (max-width: 766px) {
    display: none;
  }
`;

export const CreatorStyledInnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 766px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const RightInnerWrapper = styled.div`
  margin: 0 0 0 30px;
  max-width: 48%;
  width: 100%;
  display: flex;
  font-family: 'ProximaNova', sans-serif;

  @media (max-width: 766px) {
    order: -1;
    max-width: 100%;
    margin: -20px 0 0 10px;
  }
`;

export const CreatorStyledLeftInner = styled.div`
  max-width: 48%;
  width: 100%;
  position: relative;
  font-family: 'ProximaNova', sans-serif;
`;

export const CreatorStyledRateBox = styled.div`
  position: absolute;
  right: 112px;
  top: -13px;
  padding: 10px;
  font-family: 'ProximaNova', sans-serif;
  background: white;
  box-shadow: rgba(240, 97, 86, 0.1) 5px 12px 21px;

  h5 {
    font-size: 14px;
    font-family: 'ProximaNova', sans-serif;
    line-height: 14px;
    color: rgb(255, 78, 83);
    margin: 2px;
    font-weight: bold;
  }

  p {
    font-family: 'ProximaNova', sans-serif;
    margin: 0;
    font-size: 14px;
    line-height: 22px;
  }

  @media (max-width: 991px) {
    right: 120px;
    top: 23px;
    padding: 6px 6px;

    h5 {
      font-size: 12px;
    }

    p {
      font-size: 10px;
    }
  }

  @media (max-width: 720px) {
    right: -4px;
    top: 23px;
    padding: 6px 6px;

    h5 {
      font-size: 12px;
    }

    p {
      font-size: 10px;
    }
  }
`;

export const ImageWrapper = styled.div`
  img {
    max-width: 398px;
    width: 100%;
    top: -220px;
  }

  @media (max-width: 991px) {
    margin: 40px 0 0 10px;
    img {
      max-width: 298px;
    }
  }
`;

export const CreatorsStore = styled.div`
  font-size: 15px;
  line-height: 1.5;
  top: 20px;
  right: 20px;
  font-weight: 400;
  color: black;
  background: linear-gradient(50deg, white, transparent);
  padding: 8px 12px;
  margin: 0 0 25px;
  width: max-content;
  opacity: 1;
  transform: translate3d(0, 0, 0) translateX(0);

  @media (max-width: 766px) {
    font-size: 11px;
  }
`;

export const PopupWrapper = styled.div`
  &::after {
    position: absolute;
    content: '';
    background: linear-gradient(
      240deg,
      rgb(240, 97, 86) 70%,
      rgba(240, 97, 86, 0.4) 100%
    );
    left: -1425px;
    transform: translateX(-55%);
    padding: 20px;
    opacity: 0.8;
    width: 4250px;
    height: 60px;
    display: flex;
    top: 285px;
    align-items: center;
  }

  h2 {
    margin: 0 auto;
    z-index: 1;
    top: 324px;
    position: absolute;
    left: 303px;
    font-size: 20px;
    font-weight: bold;
    color: white;
  }

  @media (max-width: 991px) {
    top: -13px;
    left: -45px;
    position: absolute;
    h2 {
      font-size: 12px;
    }
  }
  @media (max-width: 870px) {
    top: -13px;
    left: -128px;
    position: absolute;
  }

  @media (max-width: 766px) {
    display: none;
  }
`;

export const StyledText = styled.h3`
  max-width: 456px;
  max-height: 144px;
  font-size: 42px;
  width: 100%;
  height: auto;
  line-height: 47px;
  margin: 0 0 20px 10px;
  font-weight: 400;
  font-family: 'ProximaNova', sans-serif;

  @media (max-width: 790px) {
    font-size: 25px;
    line-height: 22px;
  }
`;

export const StyledTitle = styled.p`
  line-height: 0;

  @media (max-width: 766px) {
    font-size: 22px;
  }
`;

export const StyledParagraph = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 23px;
  margin: 70px 0 0 10px;

  @media (max-width: 766px) {
    font-size: 12px;
    margin: 20px 0 0 10px;
    line-height: 16px;
  }
`;

export const StyledSpanText = styled.div``;

export const RightWrapperContent = styled.div`
  margin: 0 0 0 20px;
`;
