
import styled from 'styled-components';

export const CampaignMarketContentStyled = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ProximaNova, 'sans-serif';
  min-height: 100vh;
  background: rgb(255, 246, 246);
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
`;

export const CreatorStyledInnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 766px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const RightInnerWrapper = styled.div`
  max-width: 48%;
  width: 100%;
  display: flex;
  font-family: ProximaNova, 'sans-serif';

  @media (max-width: 766px) {
    order: -1;
    max-width: 100%;
  }
`;

export const CreatorStyledLeftInner = styled.div`
  max-width: 48%;
  width: 100%;
  position: relative;
  font-family: ProximaNova, 'sans-serif';
`;

export const CreatorStyledRateBox = styled.div`
  position: absolute;
  right: 75px;
  margin: 0;
  top: -20px;
  padding: 10px;
  font-family: ProximaNova, 'sans-serif';
  background: white;
  box-shadow: rgba(240, 97, 86, 0.1) 5px 12px 21px;

  h5 {
    font-size: 14px;
    font-family: 'ProximaNova, "sans-serif"';
    line-height: 14px;
    color: rgb(255, 78, 83);
    margin: 2px;
    font-weight: bold;
  }

  p {
    font-family: 'ProximaNova, "sans-serif"';
    margin: 0px;
    font-size: 14px;
    line-height: 22px;
  }

  @media (max-width: 766px) {
    font-size: 10px;
    right: -190px;
    top: 14px;
    padding: 8px;
  }

  @media (min-width: 750px) and (max-width: 840px) {
    font-size: 10px;
    right: -40px;
    top: 18px;
    padding: 6px;
  }
};

export const ImageWrapper = styled.div`
  vertical-align: baseline;
  margin-left: 120px;

  @media (max-width: 820px) {
    margin-left: 10px;
    margin-top: 40px;

    img {
      max-width: 180px;
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
  margin-bottom: 25px;
  width: max-content;
  opacity: 1;
  transform: translate3d(0, 0, 0) translateX(0);
`;

export const CampaignMarketSection = styled.section`
  position: sticky;
  font-family: ProximaNova, 'sans-serif';
  top: 0;
  right: 0;
  background: rgb(255, 246, 246);
  padding: 100px 0;
  z-index: -1;
  height: 1000px;
  font-family: ProximaNova, 'sans-serif';
`;

export const PopupWrapper = styled.div`
  position: absolute;
  background: linear-gradient(
    240deg,
    rgb(240, 97, 86) 70%,
    rgba(240, 97, 86, 0.4) 100%
  );
  top: 350px;
  left: -70px;
  transform: translateY(-50%);
  background-color: #fff;
  padding: 20px;
  opacity: 0.7;
  width: 100%;
  height: 60px;
  width: 100%;

  display: flex;
  align-items: center;

  h2 {
    margin-left: auto;
    font-size: 20px;
    font-weight: bold;
    color: white;
  }

  @media (max-width: 766px) {
    position: absolute;
    background: linear-gradient(
      240deg,
      rgb(240, 97, 86) 70%,
      rgba(240, 97, 86, 0.4) 100%
    );
    top: 380px;
    left: -7px;
    transform: translateY(-50%);
    background-color: #fff;
    padding: 10px;
    opacity: 0.7;
    width: 100%;
    max-height: 30px;
    max-width: 600px;
    display: flex;
    align-items: center;
    height: auto;

    h2 {
      margin-left: auto;
      font-size: 16px;
      font-weight: bold;
      color: white;
    }
  }
`;

export const StyledH3 = styled.h3`
  max-width: 456px;
  max-height: 144px;
  font-size: 42px;
  width: 100%;
  height: auto;
  line-height: 47px;
  margin: 0 0 20px 10px;
  font-weight: 400;
  font-family: 'ProximaNova, Arial, sans-serif';

  @media (max-width: 766px) {
    font-size: 22px;
    line-height: 22px;
  }
`;

export const StyledSpan = styled.span`
  vertical-align: baseline;
  box-sizing: border-box;

  @media (max-width: 766px) {
    font-size: 22px;
  }
`;

export const StyledP = styled.div`
  margin: 60px 0 0 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 23px;
  margin: 0 0 0 10px;
  font-family: 'ProximaNova, "sans-serif"';

  @media (max-width: 766px) {
    font-size: 11px;
    margin: 20px 0 0 0;
  }
`;

export const StyledSpanP = styled.div

`
  vertical-align: baseline;
  box-sizing: border-box;
`;
```