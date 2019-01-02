import React, { Component } from 'react';
import styled from 'styled-components';
import { Paper } from '@material-ui/core'
import AboutMariery from './AboutMariery';
import AboutMezclao from './AboutMezclao';
import MezclaoButton from './MezclaoButton';
import MarieryButton from './MarieryButton';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #0000FF;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AboutContainer = styled(Paper)`
    width: 90%;
    max-width: 640px;
    height: 90%;
    position: relative;
`;

/**
 * Renders the Portfolio Section
 * 
 */
class AboutPage extends Component {
  
  constructor(props){
    super(props);
  }
  
  render() {
    return (
        <Container>
            <AboutContainer>
                <AboutMariery>

                </AboutMariery>
                <AboutMezclao>

                </AboutMezclao>
                <MezclaoButton></MezclaoButton>
                <MarieryButton></MarieryButton>
            </AboutContainer>
        </Container>
    )
  }
}

export default AboutPage;