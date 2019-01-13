import React, { Component } from 'react';
import styled from 'styled-components';

import { Paper, Typography } from '@material-ui/core';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #443880;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const RelativeContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const LeftDots= styled.object`
  position: absolute;
  left: -50;
  top: 0;
  height: 101.5%;
  margin-left: -20px;
  margin-top: -10px;
`
const Leaves = styled.object`
  position: absolute;
  left: 1;
  top: 0;
  height: 100%;
`

const Bars = styled.object`
  position: absolute;
  margin-top: -0.5px;
  left: 0;
  top: 0;
  height: 100.1%;
`

const Lines = styled.object`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
`

const Balls = styled.object`
  position: absolute;
  margin-top: -0.5px;
  right: 5%;
  top: -3%;
  height: 106%;
  z-index: 1;
`
const AboutPaper = styled(Paper)`
  position: absolute;
  max-width: 640px;
  width: 80%;
  height: 60%;
  margin: auto;
  left: 10%;
  top: 20%;
  z-index: 99;
  background-color: #1AB687 !important;
  padding: 20px;
`;

const WhiteTypography = styled(Typography)`
  color: white !important;
`;

/**
 * Renders the About Section
 * 
 */
class AboutMezclaoPage extends Component {
  
  constructor(props){
    super(props);
  }
  
  render() {
    return (
        <Container>
          <RelativeContainer>
            <Bars type="image/svg+xml" data="/images/about_mezclao/Bars.svg"></Bars>
            <LeftDots type="image/svg+xml" data="/images/about_mezclao/Dots.svg"></LeftDots>
            <Leaves type="image/svg+xml" data="/images/about_mezclao/Leaves.svg"></Leaves>
            <Balls type="image/svg+xml" data="/images/about_mezclao/Balls.svg"></Balls>
            <Lines type="image/svg+xml" data="/images/about_mezclao/Lines.svg"></Lines>
            <AboutPaper>
              <WhiteTypography variant="h5">m e z c l a o</WhiteTypography>
              <WhiteTypography variant="subtitle1"> means mix together</WhiteTypography><br></br>
              <WhiteTypography variant="body1">A Latin American design studio. Illustrated by Mariery Young.
We design identity projects through visual storytelling. 
We focused on branding identity, illustration, and surface design. <br></br> <br></br>
Our bold colors and playful designs can be found in book covers, branding, 
chocolate wrapper, limited edition products, capsule collections, branding 
and digital campaigns from clients around the world.
<br></br><br></br>
Services: <br></br>
Branding Identity . Illustration  .  Surface Design 
<br></br><br></br>
Let’s work together.
</WhiteTypography>
            </AboutPaper>
          </RelativeContainer>
        </Container>
    )
  }
}

export default AboutMezclaoPage;