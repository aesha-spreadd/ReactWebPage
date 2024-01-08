import styled from 'styled-components';

export const OnchainProfileSection = styled.div`
  background-color: #fff6f6;
  font-family: 'ProximaNova', sans-serif;
`;

export const OnchainProfileContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const OnchainProfileDetails = styled.div`
  border: 1px solid transparent;
  background: rgb(255, 78, 83);
`;

export const OnchainProfileDescription = styled.div`
  margin: 90px auto;
  max-width: 70%;
  width: 100%;

  @media (max-width: 991px) {
    margin: 50px auto 100px;
  }
`;

export const OnchainProfileTag = styled.h3`
  max-width: 475px;
  width: 100%;
  background: linear-gradient(
    90.07deg,
    rgba(255, 255, 255, 0.1) 0.89%,
    rgba(255, 255, 255, 0) 99.85%
  );
  color: #fff;
  font-size: 11px;
  padding: 12px 10px;
`;

export const OnchainProfileHeading = styled.h2`
  color: #fff;
  font-weight: 400;
  font-size: 31px;
  line-height: 40px;

  @media (max-width: 767px) {
    font-size: 23px;
    line-height: 24px;
  }
`;

export const OnchainProfileSubHeading = styled.p`
  color: #fff;
  font-size: 11px;
  font-weight: 400;
  line-height: 26px;
  @media (max-width: 767px) {
    font-size: 11px;
    line-height: 21px;
  }
`;

export const OnchainProfileMatrixBox = styled.div`
  display: flex;
`;

export const OnchainProfileMatrixImage = styled.div`
  margin: auto;
  position: absolute;
  text-align: center;
  border-radius: 50%;
  background: radial-gradient(closest-side, #ff4e53 79%, transparent 80% 100%),
    conic-gradient(white 75%, pink 0);
  height: 35px;
  width: 35px;

  &::before {
    content: '88%';
    position: absolute;
    top: 13px;
    left: 10px;
    color: #fff;
    font-size: 10px;
  }
`;

export const OnchainProfileMatrixText = styled.h6`
  color: #fff;
  margin: 1px 0 0 32px;
  padding: 8px 18px;
`;

export const OnchainProfileWave = styled.div`
  height: 116px;
  width: 100%;
  background-size: contain;
  margin: -2px 0 0;

  @media (max-width: 767px) {
    height: 62px;
  }
`;

export const OnchainProfileSocialMedia = styled.div`
  position: relative;
`;

export const OnchainProfileInnerPart = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
`;

export const OnchainProfileInnerImage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: -140px 0 0;

  @media (max-width: 767px) {
    margin: -140px 0 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const OnchainProfileLeftInner = styled.div`
  max-width: 49%;
  width: 100%;
  position: relative;

  img {
    object-fit: cover;
    width: 100%;
  }

  &::before {
    content: '';
    position: absolute;
    top: 10px;
    right: -25px;
    border-bottom: 1px dashed #fff;
    width: 100px;
    height: 50px;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 130px;
    right: -18px;
    background: url(' https://spreadd.io/assets/home/dotted-line.svg') no-repeat;
    width: 100px;
    height: 50px;
    z-index: -1;
  }

  @media (max-width: 767px) {
    max-width: 90%;

    img {
      object-fit: cover;
      width: 100%;
    }
  }
`;

export const OnchainProfileRightInner = styled.div`
  max-width: 49%;
  width: 100%;

  img {
    object-fit: cover;
    width: 100%;
  }

  @media (max-width: 767px) {
    max-width: 90%;

    img {
      object-fit: cover;
      width: 100%;
    }
  }
`;
