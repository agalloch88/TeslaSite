import React from "react";
import styled from "styled-components";

function Section({ backgroundImage, title, description, DeliveryText }) {
  return (
    <Wrap bgImage={backgroundImage}>
      <ItemText>
        <h1>{title}</h1>
        <p>
          {description}
          <DeliverySpan>
            <span>{DeliveryText}</span>
          </DeliverySpan>
        </p>
      </ItemText>
      <ButtonGroup>
        <LeftButton>Custom Order</LeftButton>
        <RightButton>Existing Inventory</RightButton>
      </ButtonGroup>
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
  padding-top: 15vh;
  text-align: center;
`;

const DeliverySpan = styled.div``;

const ButtonGroup = styled.div`
  display: flex;
`;

const LeftButton = styled.div`
  align-items: center;
  background-color: rgba(23, 26, 32, 0.8);
  border-radius: 100px;
  color: white;
  display: flex;
  font-size: 12px;
  justify-content: center;
  height: 40px;
  opacity: 0.8;
  text-transform: uppercase;
  width: 256px;
`;

const RightButton = styled(LeftButton)``;
