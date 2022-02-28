import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section({
  backgroundImage,
  title,
  description,
  DeliveryText,
  leftButtonText,
  rightButtonText,
  showDownArrow,
}) {
  return (
    <Wrap bgImage={backgroundImage}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>
            {description}
            <span>{DeliveryText}</span>
          </p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftButtonText}</LeftButton>
            {rightButtonText && <RightButton>{rightButtonText}</RightButton>}
          </ButtonGroup>
        </Fade>
        {showDownArrow && <DownArrow src="/images/down-arrow.svg" />}
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  align-items: center;
  background-image: ${(props) => `url("./images/${props.bgImage}")`};
  background-position: center;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  scroll-snap-align: start;
  width: 100vw;
  z-index: 1;
`;

const ItemText = styled.div`
  font-size: 16px;
  padding-top: 15vh;
  text-align: center;

  h1 {
      font-size: 40px;
      font-weight: 500;
  }

  p {
      margin-top: 10px;
  }

  span {
    border-bottom: 1px solid black;
    color: #393c41;
    cursor: pointer;
    padding-bottom: 4px;
    padding-top: 15px;
  }

  span:hover {
    border-bottom-width: 2px;
    color: black;
  }
`;

const ButtonGroup = styled.div`
  cursor: pointer;
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  align-items: center;
  background-color: rgba(23, 26, 32, 0.8);
  border-radius: 100px;
  color: white;
  cursor: pointer;
  display: flex;
  font-size: 12px;
  justify-content: center;
  height: 40px;
  margin: 8px;
  opacity: 0.8;
  text-transform: uppercase;
  width: 256px;
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  color: black;
  opacity: 0.65;
`;

const DownArrow = styled.img`
  align-items: center;
  animation: bounce infinite 1.5s;
  height: 40px;
  overflow-x: hidden;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
`;
