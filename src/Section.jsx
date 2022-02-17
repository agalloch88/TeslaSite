import React from 'react';
import styled from 'styled-components';

function Section({backgroundImage}) {
  return (
    <Wrap bgImage={backgroundImage}>Section</Wrap>
  )
}

export default Section;

const Wrap = styled.div`
    height: 100vh;
    background-image: ${(props) => `url("./images/${props.bgImage}")`};
    background-position: center;
    background-size: cover;
    width: 100vw;
`