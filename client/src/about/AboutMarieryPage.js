import React, { Component } from 'react';
import styled from 'styled-components';

import { Paper, Typography, Grid } from '@material-ui/core';
import HeadingSeparator from '../components/HeadingSeparator'
import Spacer from '../components/Spacer'


const Container = styled.div`
  width: 100%;
  display: flex;
  background-color: #443880;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Content = styled(Grid)`
  width: 80% !important;
  max-width: 80% !important;
  @media (max-width: 700){
    width: 90%;
  }
`;

const AboutMezclaoTitle = styled.div`
  color: white;
  font-size: 1.5em;
  letter-spacing: 5px;
  font-weight: 400;
  margin-bottom: 5px;
`

const AboutMezclaoText = styled.div`
  padding-left: 10px;
  padding-top: 10px;
  color: white;
  font-weight: 400;
`

const AboutMezclaoCTA =  styled.div`    
  color: white;
`

const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-top: 10px;
`

const social_media = [
  {
    handle: '@marieryyoung',
    link: 'https://instagram.com/marieryyoung',
    src: 'images/social/instagram.svg'
  },
  {
    handle: '@marieryyoung',
    link: 'https://instagram.com/marieryyoung',
    src: 'images/social/twitter.svg'
  },
  {
    handle: '@marieryyoung',
    link: 'https://instagram.com/marieryyoung',
    src: 'images/social/dribbble.svg'
  },
  {
    handle: '@marieryyoung',
    link: 'behance.com/marieryyoung',
    src: 'images/social/behance.svg'
  }
]

const StyledSvg = styled.img`
  color: white !important;
  fill: white !important;
  height: 24px;
  padding: 5px;
  margin-right: 2px;
`

const StyledPortrait = styled.img`
  width: 100%;
  @media (max-width: 960px){
    width: 50%;
  }
`

/**
 * Renders the About Section
 * 
 */
class AboutMarieryPage extends Component {
  
  constructor(props){
    super(props);
  }
  
  render() {
    const socialMediaItems = social_media.map((item) => {
      return(
        <a href={item.link}>
          <StyledSvg src={item.src}></StyledSvg>
        </a>
      )
    })
    return (
      <Container>
        <Spacer height='40px'></Spacer>
       
        <Content container spacing={16}>
        <Grid  item xs={12} s={12} md={4} lg={4}>  
          <StyledPortrait src='images/about_mariery/mariery.jpg' />
        </Grid>
          <Grid itemitem xs={12} s={12} md={7} lg={7}>
          
        <AboutMezclaoText>
          <span style={{fontSize: '2em'}}>m e e t . m a r i e r y</span>
          <br></br>
          <span style={{fontSize: '1.5em'}}>
        I´m Mariery Young,
        <br></br> 
Nice to meet you! 
</span>
<br></br>
<a style={{color: 'white'}} href="mailto:mariery@mezclaostudio.com">
 mariery@mezclaostudio.com
</a>
<br></br>
    
    <SocialMediaContainer>
      {socialMediaItems}
    </SocialMediaContainer>

<br></br>
I´m  a Latin American designer. 
Bold colors, playful shapes, and tropicals vibes are some of my favorite themes 
to explore in my projects. My work is inspired by Latin American folklore and biodiversity. 
<br></br>
<br></br>
As  Founder of Mezclao Studio I works on projects on branding identity, 
illustration and surface design for brands, entrepreneurs and community focused project.

My bold color combos, tropical rainforest backdrops can be found in the projects for clients like Nike, Invision App, Pactimo, Fab.com. And Mother Pukka. 

<br></br>
<br></br>
Let´s work together. 
<br></br>
<br></br>
Representation 
North America :  <a style={{color: 'white'}} href="http://www.sullivanmoore.com/">Sullivan Moore</a>
        </AboutMezclaoText>
        </Grid>
        </Content>
      </Container>
  )
  }
}

export default AboutMarieryPage;