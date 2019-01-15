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

const LeftAdornment= styled.object`
  position: absolute;
  left: -35;
  top: 0;
  margin-top: -20px;
  height: 118%;
  z-index: 3;
`
const RightAdornment = styled.object`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  z-index: 4;
`

const Pink = styled.object`
  position: absolute;
  left: 20%;
  top: 10%;
  height: 60%;
  z-index: 6;
`

const Background = styled.object`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
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
class AboutMarieryPage extends Component {
  
  constructor(props){
    super(props);
  }
  
  render() {
    return (
        <Container>
          <RelativeContainer>
            <Background type="image/svg+xml" data="/images/about_mariery/Background.svg"></Background>
            <LeftAdornment type="image/svg+xml" data="/images/about_mariery/Left.svg"></LeftAdornment>
            <RightAdornment type="image/svg+xml" data="/images/about_mariery/Right.svg"></RightAdornment>
            <Pink type="image/svg+xml" data="/images/about_mariery/Pink.svg"></Pink>
          </RelativeContainer>
        </Container>
    )
  }
}

export default AboutMarieryPage;