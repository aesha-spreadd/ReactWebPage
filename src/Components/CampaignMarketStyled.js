import styled from 'styled-components';

export const CampaignMarketSection = styled.div`
  background: #fff6f6;
  position: relative;
  padding: 100px 0;
  z-index: -1;
  font-family: ProximaNova, 'sans-serif';

  @media (max-width: 776px) {
    padding: 50px 0;
  }
`;

export const CampaignMarketContainer = styled.div`
  max-width: 980px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    background: linear-gradient(
      rgba(255, 246, 246, 0.5) 31.9%,
      rgba(255, 78, 83, 0.5) 171.98%
    );
    opacity: 0.4;
    width: 100%;
    height: 80px;
  }
`;

export const CampaignMarketInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column-reverse;
  }
`;

export const CampaignMarketParticals = styled.div`
  position: absolute;
  top: 18px;
  right: 0px;
  img {
    max-width: 28px;
    width: 100%;
    height: auto;
    max-height: 38px;
    box-sizing: 'border-box';
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

export const CampaignMarketLeftInner = styled.div`
  position: relative;
  max-width: 48%;
  width: 100%;

  @media (max-width: 767px) {
    max-width: max-content;
    margin: 30px 0 0;
  }
`;

export const CampaignMarketPopBox = styled.div`
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.1) 0.46%,
    rgba(255, 255, 255, 0.1) 100%
  );
  border: 1px solid #fffefe;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 3px 8px;
  backdrop-filter: blur(12.2941px);
  border-radius: 5px;
  width: max-content;
  padding: 15px 10px 10px;
  position: absolute;
  top: 10px;
  left: 70%;
`;

export const CampaignMarketIconBox = styled.div`
  position: absolute;
  right: 30px;
  top: -15px;
`;

export const CampaignMarketPopHeading = styled.h5`
  font-weight: 600;
  font-size: 13px;
  line-height: 1;
  color: #fff;
  margin: 0 0 8px;
`;

export const CampaignMarketImage = styled.div`
  img {
    max-width: 398px;
    width: 90%;
  }
`;

export const CampaignMarketPopBoxBottom = styled.div`
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.1) 0.46%,
    rgba(255, 255, 255, 0.1) 100%
  );
  border: 1px solid #fffefe;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 3px 8px;
  backdrop-filter: blur(12.2941px);
  border-radius: 5px;
  width: max-content;
  padding: 15px 10px 10px;
  position: absolute;
  bottom: -20px;
  left: -20px;
`;

export const CampaignMarketBottomIcon = styled.div`
  position: absolute;
  right: 30px;
  top: -15px;

  img {
    vertical-align: middle;
    border-style: none;
  }
`;

export const CampaignMarketBottomIconHeading = styled.h2`
  font-size: 14px;
  line-height: 8px;
  color: #fff;
  margin: 0 0 8px;
`;

export const CampaignMarketBottomIconParagraph = styled.p`
  margin: 0;
  font-size: 12px;
  color: #fff;
`;

export const CampaignMarketRightInner = styled.div`
  max-width: 48%;
  width: 100%;

  @media (max-width: 767px) {
    max-width: 100%;
  }
`;

export const CampaignMarketRightInnerDetails = styled.div`
  font-family: ProximaNova, 'sans-serif';
`;

export const CampaignMarketTag = styled.div`
  font-size: 16px;
  line-height: 15px;
  font-weight: 400;
  background: linear-gradient(50deg, white, transparent);
  padding: 8px 12px;
  margin: 0 0 25px;
  width: max-content;
  opacity: 1;
  transform: translate3d(0px, 0px, 0px) translateX(0px);
`;

export const CampaignMarketHeading = styled.h3`
  max-width: 350px;
  width: 100%;
  font-size: 42px;
  line-height: 47px;
  font-weight: 400;
  margin: 0 0 20px;

  @media (max-width: 991px) {
    max-width: 300px;
    width: 100%;
    font-size: 28px;
    line-height: 44px;
  }

  @media (max-width: 767px) {
    max-width: 300px;
    width: 100%;
    font-size: 28px;
    line-height: 44px;
  }

  @media (max-width: 320px) {
    max-width: 250px;
    width: 100%;
    font-size: 28px;
    line-height: 40px;
  }
`;

export const CampaignMarketParagraph = styled.p`
  max-width: 372px;
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  line-height: 23px;

  @media (max-width: 991px) {
    max-width: 300px;
    width: 100%;
    font-size: 12px;
    line-height: 23px;
  }

  @media (max-width: 767px) {
    max-width: 350px;
    width: 100%;
    font-size: 12px;
    line-height: 23px;
  }

  @media (max-width: 320px) {
    max-width: 285px;
    width: 100%;
    font-size: 12px;
    line-height: 23px;
  }
`;
