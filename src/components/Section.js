import React from "react";
import styled from "styled-components";
import { Fade } from "react-reveal";

function Section({title, description, leftButtonText, rightButtonText, backgroundImage}) {
  return (
    <Wrap bgImage = {backgroundImage}>
      <Fade bottom>
      <ItemText>
        <h1>{ title }</h1>
        <p>{ description }</p>
      </ItemText>
      </Fade>

      <Buttons>

        <Fade>
        <ButtonGroup>
          <LeftButton>{ leftButtonText }</LeftButton>
          { rightButtonText && 
             <RightButton>{ rightButtonText }</RightButton>
          }
        </ButtonGroup>
        </Fade>

    
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/Tesla Model X.jpg");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${props => `url("/images/${props.bgImage}")`};
`;
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  margin-bottom: 25px;
`;

const LeftButton = styled.div`
  background-color: #42434b;
  height: 45px;
  width: 295px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  opacity: 0.85;
  font-size: 16px;
  cursor: pointer;
  margin: 10px;
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;

const Buttons = styled.div``;

