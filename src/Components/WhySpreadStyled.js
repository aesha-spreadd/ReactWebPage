import styled from 'styled-components';

export const WhySpreadSection = styled.div`
  background: #fff;
  padding: 80px 0;
  font-family: 'ProximaNova', san-serif;
  @media (max-width: 991px) {
    padding: 50px 0;
  }
`;

export const WhySpreadContainer = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  z-index: 2;
`;

export const WhySpreadHeadingWrapper = styled.div`
  text-align: center;
`;

export const StyledHeading = styled.div`
  margin: 0 0 8px;
  color: #212b36;
`;

export const StyledHeadingTitle = styled.h3`
  max-height: 30px;
  height:auto;
  font-family: 'ProximaNova', san-serif;
  font-size:24px;
  font-weight:500;
  transform: none;
  opacity: 1;
}`;

export const StyledHeadingParagraph = styled.p`
  margin: 0 0 16px;
  font-family: 'ProximaNova', san-serif;
  font-size: 14px;
  font-weight: 400;
`;

export const WhySpreadStyledBoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  padding: 36px 0;
  margin: 20px 0 0;

  &::before {
    content: '';
    width: 80%;
    height: 360px;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    margin: 0 auto;
    background: #f4f7f9;
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
    padding: 20px 0 0;
    gap: 20px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    &::before {
      height: auto;
      max-height: 760px;
    }
    &::after {
      display: none;
    }
  }
`;

export const WhySpreadStyledBox = styled.div`
  opacity: 1;
  background: #fff;
  box-shadow: rgba(49, 49, 49, 0.1) 0px 81.2357px 64.9886px;
  border-radius: 5px;
  max-width: 33%;
  width: 100%;
  min-height: 220px;
  height: auto;
  padding: 30px;
  z-index: 2;
  font-size: 24px;

  @media (max-width: 991px) {
    width: 100%;
    max-width: 80%;
    height: auto;
    min-height: 190px;
    font-size: 10px;
  }
`;

export const WhySpreadImageWrapper = styled.div`
  margin:0 0 20px 0;
  img {
    vertical-align: middle;
    border-style: none;
  }
}`;

export const StyledCardTitle = styled.h5`
  margin: 0 0 8px;
  color: #212b36;
  font-size: 15px;
  font-family: 'ProximaNova', san-serif;
  font-weight: bold;
`;

export const StyledCardParagrah = styled.p`
  margin: 0;
  font-family: 'ProximaNova', san-serif;
  font-size: 15px;
  font-weight: 400;
`;
