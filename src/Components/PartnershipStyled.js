import styled, { createGlobalStyle } from 'styled-components';
import ProximaNova from '../font/Proxima Nova/proximanova_regular.ttf';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ProximaNova';
    src: url('${ProximaNova}') format('truetype');
    font-style: normal;
  }
`;

export const PartnerShipSection = styled.div`
  background-color: #ffffff;
  margin: 0 auto;
  padding: 40px;
  font-family: 'ProximaNova', sans-serif;

  @media (max-width: 991px) {
    padding: 15px;
  }
`;

export const PartnerShipContainer = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
`;

export const PartnerShipContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 480px) {
    flex-direction: column;
    margin: 0 0 66px 0;
  }
`;

export const ParticalWrapper = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 40px 0 0;
  opacity: 1;
  transform: translate3d(0px, 0px, 0px) translateX(0px);
  object-fit: cover;

  img {
    vertical-align: middle;
    border-style: none;
    max-width: 400px;
    width: 100%;
  }

  @media (max-width: 480px) {
    max-width: 332px;
    width: 100%;

    img {
      max-width: 250px;
      width: 100%;
      margin: 40px 0 0 20px;
    }
  }

  @media (max-width: 991px) {
    max-width: 332px;
    width: 100%;

    img {
      max-width: 250px;
      width: 100%;
      margin: 20px 0 0;
    }
  }
`;

export const PartnershipDescription = styled.div`
  display: flex;
  margin: 0 0 -36px;
  flex-direction: column;

  @media (max-width: 480px) {
    order: -1;
    align-self: flex-start;
    padding: 0 0 0 35px;
  }
`;

export const StyledHeading = styled.h2`
  max-width: 300px;
  width: 100%;
  margin: 0 0 0 20px;
  font-family: 'ProximaNova', sans-serif;
  font-size: 42px;
  font-weight: 100;
  line-height: 43px;

  @media (max-width: 991px) {
    max-width: 170px;
    width: 100%;
    margin: 60px 0 0 2px;
    font-size: 25px;
    line-height: 30px;
  }

  @media (max-width: 767px) {
    font-size: 42px;
    line-height: 45px;
    max-width: 296px;
    width: 100%;
  }

  @media (max-width: 575px) {
    font-size: 46px;
    line-height: 40px;
    max-width: 296px;
    width: 100%;
  }

  @media (max-width: 320px) {
    font-weight: 100;
    font-size: 46px;
    line-height: 46px;
    max-width: 296px;
    width: 100%;
  }
`;

export const StyledParagraph = styled.p`
  font-size: 15px;
  line-height: 25px;
  max-width: 500px;
  width: 100%;
  margin: 5px 0 0 20px;

  @media (max-width: 991px) {
    margin: 20px 0 0;
    max-width: 300px;
    width: 100%;
    font-size: 12px;
  }
`;

export const PartnershipStyledPartner = styled.div`
  margin: -30px 0 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 480px) {
    padding: 0 0 0 35px;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
  }
`;

export const PartnershipTrustWrapper = styled.div`
  width: 100%;

  @media (max-width: 480px) {
    margin: 0 0 10px -126px;
  }

  @media (max-width: 766px) {
    margin: 0;
  }
`;

export const PartnershipBorder = styled.div`
  position: relative;
  width: 47px;
  left: 88px;
  border: 2px solid #ff4e54;
  margin: 0 0 14px;
  border-radius: 100px;
  bottom: 2px;

  @media (max-width: 991px) {
    top: 21px;
    left: 0;
  }
`;

export const StyledFooterHeading = styled.div`
  position: relative;
  color: black;
  font-size: 18px;
  bottom: 9px;
  left: 88px;

  @media (max-width: 991px) {
    font-size: 14px;
    top: 14px;
    left: 0;
  }
`;

export const ParnternshipImages = styled.div`
  display: flex;
  gap: 40px;
  margin: 26px 0 0 -200px;
  align-items: center;
  flex-wrap: wrap;
  max-width: 50%;
  width: 100%;

  img {
    max-width: 120px;
    width: 100%;
    object-fit: contain;
  }

  @media (max-width: 991px) {
    align-items: flex-start;
    gap: 40px;
    flex-wrap: wrap;
    width: 100%;
    margin: 52px 0 0 39px;

    img {
      max-width: 80px;
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    max-width: 400px;
    width: 100%;
    margin: 86px 0 0 7px;

    img {
      max-width: 80px;
      width: 100%;
    }
  }

  @media (max-width: 567px) {
    max-width: 400px;
    width: 100%;
    margin: 6px 0 0;

    img {
      max-width: 80px;
      width: 100%;
    }
  }
`;
