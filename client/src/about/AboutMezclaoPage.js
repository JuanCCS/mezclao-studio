import React, { Component } from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import HeadingSeparator from '../components/HeadingSeparator';
import Spacer from '../components/Spacer';

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

const Content = styled.div`
  width: 60%;
  position: relative;
`;

const AboutPaper = styled(Paper)`
  position: absolute;
  max-width: 640px;
  width: 80%;
  height:70%;
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


const AboutMezclaoTitle = styled.div`
  width: 100%;
  color: white;
  font-size: 1.5em;
  letter-spacing: 5px;
  font-weight: 400;
  margin-bottom: 5px;
`

const AboutMezclaoText = styled.div`
  width: 100%;
  color: white;
  font-weight: 400;
`

const AboutMezclaoCTA =  styled.div`    
  width: 100%;
  color: white;
`

const JaguarContainer = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
`

const Jaguar = styled.object`
  left: 50%;
  width: 400px;
  position: absolute;
  height: 400px;
  margin-left: -200px;
  z-index: 1;
`

const Eyes = styled.object`
  left: 50%;
  height: 7.5px;
  margin-left: 37px;
  top: 211px;
  z-index: 2;
  position: absolute; 
`

const AnimEyes = posed(Eyes)({
  loop_enter: {
    x: -2,
    transition: {
      duration: 400
    }
  },
  loop_exit: {
    x: 2,
    transition: {
      duration: 400
    }
  }
})

/**
 * Renders the About Section
 * 
 */
class AboutMezclaoPage extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      loopAnimState: 'loop_enter'
    }
    this.switchAnimationState = this.switchAnimationState.bind(this)
  }

  switchAnimationState(){
    if(this.state.loopAnimState == 'loop_enter'){
      this.setState({
        loopAnimState: 'loop_exit'
      })
    }else{
      this.setState({
        loopAnimState: 'loop_enter'
      }) 
    }
  }

  componentDidMount(){
    const self = this;
    setInterval(function(){
      self.switchAnimationState()
    }, 2500)
  }
  
  render() {
    return (
        <Container>
          <Spacer height='40px'></Spacer>
          <Content>
            <JaguarContainer>
              <Jaguar type="image/svg+xml" data="/images/about_mezclao/Jaguar.svg" >
              </Jaguar>
              <AnimEyes pose={this.state.loopAnimState} type="image/svg+xml" data="/images/about_mezclao/Eyes.svg" ></AnimEyes>
            </JaguarContainer>
           <HeadingSeparator text='a b o u t . m e z c l a o'></HeadingSeparator>
          <AboutMezclaoTitle>
          m e z c l a o :
          <br></br>
         
          </AboutMezclaoTitle> 
          <AboutMezclaoText>
          means mix together .
          <br></br>
          <br></br>
          A Latin American design studio. Illustrated by Mariery Young.
We design identity projects through visual storytelling. 
We focused on branding identity, illustration, and surface design. 
          <br></br>
          <br></br>
Our bold colors and playful designs can be found in book covers, branding, 
chocolate wrapper, limited edition products, capsule collections, branding 
and digital campaigns from clients around the world.
          </AboutMezclaoText>
          <AboutMezclaoCTA>
          <br></br>
          <br></br>
          s e r v i c e s : 
          <br></br>
branding identity . illustration  .  surface design 
<br></br>
          <br></br>
Let’s work together.

          </AboutMezclaoCTA>
          </Content>
        </Container>
    )
  }
}

export default AboutMezclaoPage;