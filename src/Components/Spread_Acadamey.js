import styled from 'styled-components';

const smallScreen = `@media (max-width: 768px)`;

export const SectionSpreadAcademy = styled.section`
  position: relative;
  font-family: ProximaNova, 'sans-serif';
  top: 0;
  right: 0;
  background: rgb(255, 246, 246);
  padding: 100px 0;
  z-index: -1;
  height: 150vh;
  font-family: ProximaNova, 'sans-serif';

  &::before {
    content: '';
    position: absolute;
    top: 18px;
    left: 0px;
    background: url('https://spreadd.io/assets/home/left-dot-patch.svg')
      no-repeat;
    width: 46px;
    height: 37px;
  }

  ${smallScreen} {
    height: auto;
  }
`;

export const SpreadAcademyContainer = styled.div`
  width: 100%;
  margin: 0px auto;
`;

export const SpreadInnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;
  max-width: 1200px;
  margin: 0 auto;

  ${smallScreen} {
    flex-direction: column-reverse;
  }
`;

export const SpreadLeftInner = styled.div`
  max-width: 49%;
  width: 100%;
  margin-right: 100px;

  ${smallScreen} {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

export const SpreadStyledDetails = styled.div`
  text-align: center;
  position: relative;
`;

export const SpreadImageWrapper = styled.div`
  opacity: 1;
  transform: translate3d(0px, 0px, 0px) translateX(0px);
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: -18px;
    width: 96px;
    height: 96px;
    z-index: -1;
  }

  &::before {
    left: 7%;
    background: url('https://spreadd.io/assets/home/round-patch.svg') no-repeat;
  }

  &::after {
    left: 6%;
    top: 330px;
    background: url('https://spreadd.io/assets/home/dot-patch.svg') no-repeat;
  }

  img {
    width: 100%;
    border-radius: 20px;
    max-width: 320px;
  }

  ${smallScreen} {
    &::after {
      top: 350px;
    }
  }
`;

export const SpreadAcademyQuote = styled.div`
  position: absolute;
  top: -20px;
  right: 30%;
  transform: translateX(50%);
  background: rgb(254, 79, 82);
  border-radius: 3px;
  padding: 10px;
  display: flex;
  align-items: center;
  max-width: 260px;
  width: 100%;
  max-width: 230px;
  img {
    max-width: 30px;
    width: 100%;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
  }
`;

export const SpanStyled = styled.div`
  font-weight: 600;
  font-size: 12px;
  line-height: 1.5;
  color: white;
  text-align: left;
`;

export const SpreadRightInner = styled.div`
  max-width: 49%;
  width: 100%;
  margin-left: 100px;

  ${smallScreen} {
    max-width: 100%;
    padding: 0px;
  }
`;

export const SpreadRightDetails = styled.div`
  margin: 0px;
  padding: 0px;
  border: 0px;
  font: inherit;
  vertical-align: baseline;
`;

export const SpreadAcadameyTag = styled.div`
  opacity: 1;
  transform: translate3d(0px, 0px, 0px) translateX(50%);
  font-size: 15px;
  line-height: 1.5;
  font-weight: 400;
  color: black;
  background: linear-gradient(50deg, white, transparent);
  padding: 8px 12px;
  margin-bottom: 25px;
  width: max-content;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  ${smallScreen} {
    max-width: 100%;
    padding: 0px;
    margin-right: 130px;
  }
`;
