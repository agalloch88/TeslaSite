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
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  background-image: ${(props) => `url("./images/${props.bgImage}")`};
  background-position: center;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100vh;
  width: 100vw;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const DeliverySpan = styled.div`
    
`
