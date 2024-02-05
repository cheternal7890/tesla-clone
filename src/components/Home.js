import React from "react";
import styled from "styled-components";
import Section from "./Section";


function Home() {
  return (
    <Container>
      <Section
        title="Model X"
        description="From $68,590*"
        backgroundImage="Model X.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Demo Drive"
      />

      <Section
        title="Cybertruck"
        description="Order Online for Touchless Delivery"
        backgroundImage="Cybertruck.png"
        leftButtonText="Custom Order"
        rightButtonText="Demo Drive"
      />

      <Section
        title="Solar Panels"
        description="Schedule a Virtual Consultation"
        backgroundImage="Solar Panel.jpg"
        leftButtonText="Order Now"
        rightButtonText="Learn More"
      />

      <Section
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        backgroundImage="Solar Roof.jpg"
        leftButtonText="Order Now"
        rightButtonText="Learn More"
        DownArrow =""
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
