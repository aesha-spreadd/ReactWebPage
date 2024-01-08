import styled from 'styled-components';

export const SectionCollabration = styled.div`
  width: 100%;
  max-width: 5500px;
  height: 500px;
  margin: 0 auto;
  background-color: #f4f7f9;
  font-family: 'ProximaNova', sans-serif;

  @media (max-width: 576px) {
    background-color: #fff;
  }
`;

export const CollabrationPageConetent = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  width: 100%;
`;

export const CollabrationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 136px;
  position: relative;
`;

export const CollabrationInnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const CollabrationLeftInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 0 0 60px;
`;

export const StyledCollabrationHeading = styled.h3`
  max-width: 400px;
  width: 100%;
  margin: 131px 0 0;
  font-size: 40px;
  font-weight: 400;
  font-family: 'ProximaNova', sans-serif;
  line-height: 43px;

  @media (max-width: 768px) {
    margin: 87px 0 0;
    font-size: 29px;
    font-weight: 400;
    font-family: 'ProximaNova', sans-serif;
    line-height: 40px;
  }
`;

export const StyledCollabrationParagraph = styled.p`
  margin: 40px 0 0;
  max-width: 400px;
  width: 100%;
  font-size: 15px;
  line-height: 20px;
`;

export const CollabrationRightInner = styled.div`
  display: flex;
  gap: 60px;
  position: relative;
  margin: 0 -20px 0 110px;

  @media (max-width: 778px) {
    margin: 0 -20px 0 31px;
  }

  @media (max-width: 576px) {
    justify-content: flex-end;
  }
`;

export const CollabrationImagesContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

export const CollabrationImage = styled.div`
  width: 100%;
  max-width: 500px;
  height: auto;

  img {
    position: relative;
    max-width: 190px;
    width: 100%;
    top: 90px;
  }
`;

export const CollabrationSecondImage = styled.div`
  width: 100%;
  max-width: 500px;
  height: auto;

  img {
    position: relative;
    max-width: 190px;
    width: 100%;
    top: 140px;
  }

  @media (max-width: 768px) {
    img {
      margin: 0 0 0 -30px;
    }
  }
`;

export const CollabrationSvg = styled.div`
  border-radius: 3px;
  border: 10px solid #fff;
  background: white;
  position: absolute;
  top: 402px;
  right: 150px;
  width: 128px;
  max-height: 28px;
  height: auto;

  @media (max-width: 778px) {
    position: absolute;
    top: 230px;
    right: 82px;
  }

  @media (max-width: 567px) {
    position: absolute;
    top: 298px;
    right: 110px;
  }
`;

export const StyledSvgText = styled.h4`
  color: #f06156;
  font-size: 18px;
  font-weight: 400;
  position: relative;
  right: -6px;
  top: -20px;
`;

export const SvgDiv = styled.div`
  border-top: 10px solid transparent;
  border-left: 10px solid #fff;
  border-right: 10px solid transparent;
  border-bottom: 10px solid transparent;
  width: 2px;
  position: absolute;
  top: 4px;
  right: -31px;
`;
