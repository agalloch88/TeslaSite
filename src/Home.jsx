import React from "react";
import styled from "styled-components";
// import Header from "./Header";
// import HeaderSC from "./HeaderSC";
import Section from "./Section";

function Home() {
  return (
    <Container>
      {/* <HeaderSC /> */}
      {/* <Header /> */}
      <Section
        id="model-3"
        backgroundImage="model-3.jpg"
        title="Model 3"
        description="Order Online for "
        DeliveryText="Touchless Delivery"
        leftButtonText="Custom Order"
        rightButtonText="Existing Inventory"
        showDownArrow
      />
      <Section
        id="model-y"
        backgroundImage="model-y.jpg"
        title="Model Y"
        description="Order Online for "
        DeliveryText="Touchless Delivery"
        leftButtonText="Custom Order"
        rightButtonText="Existing Inventory"
      />
      <Section
        id="model-s"
        backgroundImage="model-s.jpg"
        title="Model S"
        description="Order Online for "
        DeliveryText="Touchless Delivery"
        leftButtonText="Custom Order"
        rightButtonText="Existing Inventory"
      />
      <Section
        id="model-x"
        backgroundImage="model-x.jpg"
        title="Model X"
        description="Order Online for "
        DeliveryText="Touchless Delivery"
        leftButtonText="Custom Order"
        rightButtonText="Existing Inventory"
      />
      <Section
        id="solar-panels"
        backgroundImage="solar-panel.jpg"
        title="Solar Panels"
        description="Lowest Cost Solar Panels in America"
        leftButtonText="Order Now"
        rightButtonText="Learn More"
      />
      <Section
        id="solar-roof"
        backgroundImage="solar-roof.jpg"
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        leftButtonText="Order Now"
        rightButtonText="Learn More"
      />
      <Section
        backgroundImage="accessories.jpg"
        title="Accessories"
        leftButtonText="Shop Now"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
`;
