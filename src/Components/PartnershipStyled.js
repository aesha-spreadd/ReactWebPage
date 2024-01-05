import styled from 'styled-components';
import { GlobalStyles } from './CreatorsStoreStyled';

export const PartnerShipSection = styled.div`
  background-color: rgb(255, 255, 255);
  margin: 0 auto;
  padding: 40px;
  font-family: 'ProximaNova', sans-serif;
  @media (max-width: 991px) {
    padding: 15px;
  }
  @media (max-width: 480px) {
    padding: 15px;
  }
`;

export const PartnerShipContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
`;

export const PartnerShipContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 480px) {
    flex-direction: column;
    min-height: unset;
    margin-bottom: 4.1rem;
  }
`;

export const ParticalWrapper = styled.div`
  opacity: 1;
  transform: translate3d(0px, 0px, 0px) translateX(0px);
  max-width: 500px;
  width: 100%;
  object-fit: cover;

  img {
    vertical-align: middle;
    border-style: none;
    max-width: 400px;
  }
  @media (max-width: 480px) {
    max-width: 29.7rem;
    img {
      max-width: 300px;
    }
  }
  @media (max-width: 991px) {
    max-width: 29.7rem;
    img {
      max-width: 250px;
    }
  }
`;

export const PartnershipDescription = styled.div`
  display: flex;
  margin-left: -36px;
  flex-direction: column;
  @media (max-width: 480px) {
    order: -1;
    align-self: flex-start;
    padding-left: 2.2rem;
  }
`;

export const StyledHeading = styled.div`
  line-height: 6px;
  max-width: 26.9rem;
  font-family: 'ProximaNova', sans-serif;
`;

export const StyledSpanText = styled.h3`
  font-size: 42px;
  font-weight: 300;
  @media (max-width: 991px) {
    font-size: 32px;
  }
  @media (max-width: 480px) {
    font-size: 2.88rem;
    max-width: 18.5rem;
  }
`;

export const StyledParagraph = styled.div`
  font-size: 15px;
  line-height: 10px;
  max-width: 37rem;
`;

export const StyledSpanParagraph = styled.p``;

export const PartnershipStyledPartner = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.2rem;
  margin-top: -1.9rem;
  align-items: center;
  @media (max-width: 480px) {
    padding-left: 2.2rem;
    flex-direction: column;
    gap: 2.5rem;
    align-items: flex-start;
  }
`;

export const PartnershipTrustWrapper = styled.div`
  width: 100%;
  @media (max-width: 480px) {
    margin: 0 0 10px -126px;
  }
`;

export const PartnershipBorder = styled.div`
  position: relative;
  width: 47px;
  left: 133px;
  border: 2px solid rgb(255, 78, 84);
  margin-bottom: 0.9rem;
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
  left: 133px;
  @media (max-width: 991px) {
    top: 14px;
    left: 0;
  }
`;

export const ParnternshipImages = styled.div`
  display: flex;
  gap: 2.5rem;
  margin: 26px 0 0 80px;
  align-items: center;
  flex-wrap: wrap;
  max-width: 50%;
  img {
    max-width: 120px;
    object-fit: contain;
  }
  @media (max-width: 991px) {
    align-items: flex-start;

    gap: 2.5rem;
    flex-wrap: wrap;
    max-width: 100%;
    margin: 42px 0 0 10px;
    img {
      max-width: 100px;
    }
  }
`;
