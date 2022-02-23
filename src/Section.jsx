import React from "react";
import styled from "styled-components";

function Section({ backgroundImage, title, description, DeliveryText, leftButtonText, rightButtonText, showDownArrow }) {
  return (
    <Wrap bgImage={backgroundImage}>
      <ItemText>
        <h1>{title}</h1>
        <p>
          {description}
          <span>{DeliveryText}</span>
        </p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>{leftButtonText}</LeftButton>
          <RightButton>{rightButtonText}</RightButton>
        </ButtonGroup>
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
  width: 100vw;
`;

const ItemText = styled.div`
  font-size: 20px;
  padding-top: 15vh;
  text-align: center;
`;

const DeliverySpan = styled.div``;

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
