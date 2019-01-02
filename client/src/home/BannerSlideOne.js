import React, { Component } from 'react';
import styled from 'styled-components';
import WomanSvg from './banner_one/WomanSvg';
import BottomCornerSvg from './banner_one/BottomCornerSvg';
import LeftSvg from './banner_one/LeftSvg';
import TopSvg from './banner_one/TopSvg';
import posed from 'react-pose';
import zIndex from '@material-ui/core/styles/zIndex';

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
  background-color: '#E96BBC';
  position: relative;
`;

const AnimRootContainer = posed(RootContainer)({
  banner_1_show: {
    opacity: 1,
    background: '#E96BBC'
  },
  banner_2_show: {
    opacity: 0,
    background: '#F83C2D'
  }
});

class BannerSlideOne extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AnimRootContainer>
      <Container>
          <BottomCornerSvg path="/images/banners/banner_one/bottom_corner_pattern.svg" timeout={600}></BottomCornerSvg>
          <TopSvg path="/images/banners/banner_one/top.svg" timeout={900}></TopSvg>
          <LeftSvg path="/images/banners/banner_one/left_pattern.svg" timeout={1100}></LeftSvg>
          <WomanSvg path="/images/banners/banner_one/mujer.svg"  timeout={700}></WomanSvg>
      </Container>
      </AnimRootContainer>
    );
  }
}

export default BannerSlideOne;