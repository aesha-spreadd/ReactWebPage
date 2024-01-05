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
  background: #fff6f6;
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
  background: #ffffff;
  box-shadow: rgba(240, 97, 86, 0.1) 5px 12px 21px;

  @media (max-width: 991px) {
    right: 120px;
    top: 23px;
    padding: 6px 6px;
  }

  @media (max-width: 720px) {
    right: -4px;
    top: 23px;
    padding: 6px 6px;
  }
`;

export const StyledRateBoxHeading = styled.h5`
  font-size: 14px;
  font-family: 'ProximaNova', sans-serif;
  line-height: 14px;
  color: #ff4e53;
  margin: 2px;
  font-weight: bold;
  @media (max-width: 991px) {
    font-size: 12px;
  }
  @media (max-width: 720px) {
    font-size: 12px;
  }
`;

export const StyledRateParagraph = styled.p`
  font-family: 'ProximaNova', sans-serif;
  margin: 0;
  font-size: 14px;
  line-height: 22px;

  @media (max-width: 991px) {
    font-size: 10px;
  }

  @media (max-width: 720px) {
    font-size: 10px;
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
      width: 100%;
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
  margin: 0 0 25px 20px;
  width: max-content;
  opacity: 1;
  transform: translate3d(0, 0, 0) translateX(0);

  @media (max-width: 766px) {
    font-size: 11px;
    margin-left: -20px;
  }
`;

export const PopupWrapper = styled.div`
  &::after {
    position: absolute;
    content: '';
    background: linear-gradient(240deg, #ff4e53 70%, #f06156 100%);
    left: -650px;
    transform: translateX(-55%);
    padding: 20px;
    opacity: 0.8;
    width: 2550px;
    height: 60px;
    display: flex;
    top: 285px;
    align-items: center;
  }

  @media (max-width: 991px) {
    top: -13px;
    left: -45px;
    position: absolute;
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

export const PopUpHeading = styled.h2`
  margin: 0 auto;
  z-index: 1;
  top: 324px;
  position: absolute;
  left: 303px;
  font-size: 20px;
  font-weight: bold;
  color: white;
  @media (max-width: 991px) {
    font-size: 12px;
  }
`;

export const StyledTitle = styled.p`
  line-height: 0;

  @media (max-width: 766px) {
    font-size: 22px;
  }
`;

export const RightWrapperContent = styled.div`
  margin: 0 0 0 20px;
`;

export const StyledText = styled.div`
  max-width: 370px;
  width: 100%;
  font-size: 42px;
  line-height: 47px;
  font-weight: 500;
  margin-left: 17px;
  @media (max-width: 991px) {
    font-size: 34px;
  }
  @media (max-width: 776px) {
    max-width: 304px;
    width: 100%;
    margin-left: -20px;
    font-size: 28px;
    line-height: 35px;
  }
`;

export const StyledParagraph = styled.div`
  width: 100%;
  margin-left: 17px;
  max-width: 440px;
  margin-top: 12px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  font-family: 'ProximaNova', san-serif;
  @media (max-width: 991px) {
    font-size: 12px;
  }
  @media (max-width: 776px) {
    max-width: 350px;
    width: 100%;
    margin-left: -20px;
    font-size: 12px;
    line-height: 23px;
  }
`;
