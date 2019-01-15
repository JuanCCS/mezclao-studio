import React, { Component } from 'react';
import styled from 'styled-components';
import { Paper, Typography } from '@material-ui/core'

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


const LeftBlue = styled.object`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  z-index: 3;
`

const Left = styled.object`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  z-index: 4;
`
const Right = styled.object`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  z-index: 5;
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
class ContactPage extends Component {
  
  constructor(props){
    super(props);
  }
  
  render() {
    return (
        <Container>
          <RelativeContainer>
            <Background type="image/svg+xml" data="/images/contact/ContactBg.svg"></Background>
            <LeftBlue type="image/svg+xml" data="/images/contact/LeftBgContact.svg"></LeftBlue>
            <Left type="image/svg+xml" data="/images/contact/LeftContact.svg"></Left>
            <Right type="image/svg+xml" data="/images/contact/RightContact.svg"></Right>
          </RelativeContainer>
        </Container>
    )
  }
}

export default ContactPage;