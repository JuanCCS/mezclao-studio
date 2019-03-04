import React, { Component } from 'react';
import styled from 'styled-components';
import WomanSvg from './banner_one/WomanSvg';
import BottomCornerSvg from './banner_one/BottomCornerSvg';
import LeftSvg from './banner_one/LeftSvg';
import TopSvg from './banner_one/TopSvg';
import posed from 'react-pose';
import zIndex from '@material-ui/core/styles/zIndex';
import { Typography } from '@material-ui/core';
import Spacer from '../components/Spacer'
import Triangle from '../components/animation/Triangle'


const RootContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
`

const Container = styled.div`
  width: 100%;
  /* height: ${props => props.height ? props.height + 'px' : "80%"}; 
  */
  height: 100%;
  background-color: '#f83c2d';
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const AnimRootContainer = posed(RootContainer)({
  banner_1_show: {
    opacity: 1,
    background: '#f83c2d'
  }
});

const MezclaoTitle = styled.h2`
  color: white;
  font-weight: 600;
  font-size: 7vh;
  margin-bottom: 0px;
  @media (max-width: 700px) {
    font-size: 4vh;
  }
`

const MezclaoSubTitle = styled.h4`
  color: white;
  font-weight: 400;
  font-size: 4vh;
  margin-top: 4px;
  @media (max-width: 700px) {
    font-size: 2vh;
  }
`

const SunSvg = styled.object`
  position: absolute;
  right: 0;
  height:550px;
  bottom: 0;
  width: 709px;
  @media (max-width: 700px) {
    height: 400px;
    width: auto;
  }
`

const AnimSunSvg = posed(SunSvg)({

})

const TucanSvg = styled.object`
  position: absolute;
  right: 20px;
  bottom: 20px;
  width: 440px;
  height: 500px;
  overflow: hidden;
  @media (max-width: 700px) {
    height: 300px;
    width: auto;
    right: 0px;
  }
`

const AnimTucanSvg = posed(TucanSvg)({
  loop_enter: {
    transform: 'rotate(2deg)',
    transition: {
      duration: 2000
    }
  },
  loop_exit: {
    transform: 'rotate(-2deg)',
    transition: {
      duration: 2000
    }
  }
})

const OceanSvg = styled.object`
  position: absolute;
  bottom: -5px;
  right: 0;
  width: 200%;
  overflow: hidden;
`

const AnimOceanSvg = posed(OceanSvg)({
})

const TrianglesContainer = styled.div`
  width: 600px;
  position: absolute;
  background-color: red;
  height: 600px;
  bottom: 0;
  right: 50%;
`

const AnimMezclaoTitle = posed(MezclaoTitle)({
  exit: {
    opacity: 0,
    y: -50,
  },
  enter: {
    opacity: 1,
    y: 0
  }
})

const AnimMezclaoSubTitle = posed(MezclaoSubTitle)({
  exit: {
    opacity: 0,
    y: -50,
  },
  enter: {
    opacity: 1,
    y: 0
  }
})

class BannerSlideOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loopAnimState: 'loop_enter',
      animState: 'exit'
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
    }, 2000)

    setTimeout(function(){
      self.setState({
        animState: 'enter'
      })
    }, 6000)
  }

  render() {

    let triangles = []
    for(var i = 0; i < 9; i++){
      triangles.push(<Triangle></Triangle>)
    }

    return (
      <AnimRootContainer>
      <Container> 
        <Spacer height='60px'></Spacer>
      { /*
          <BottomCornerSvg path="/images/banners/banner_one/bottom_corner_pattern.svg" timeout={600}></BottomCornerSvg>
          <TopSvg path="/images/banners/banner_one/top.svg" timeout={900}></TopSvg>
          <LeftSvg path="/images/banners/banner_one/left_pattern.svg" timeout={1100}></LeftSvg>
          <WomanSvg path="/images/banners/banner_one/mujer.svg"  timeout={700}></WomanSvg>
      */}
        <AnimSunSvg type="image/svg+xml" data="/images/banners/banner_one/Sun.svg" />
        <AnimOceanSvg type="image/svg+xml" data="/images/banners/banner_one/Ocean.svg"/>
        <AnimTucanSvg type="image/svg+xml" data="/images/banners/banner_one/Tucan.svg" pose={this.state.loopAnimState} />
        <AnimMezclaoTitle pose={this.state.animState}> s h a p e . p a t e r n . p l a y </AnimMezclaoTitle>
        <AnimMezclaoSubTitle variant='h4' pose={this.state.animState}> p l a y f u l . s h a p e s . & . b o l d . c o l o r s</AnimMezclaoSubTitle>
          {triangles}
          </Container>
      </AnimRootContainer>
    );
  }
}

export default BannerSlideOne;