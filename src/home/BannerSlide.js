import React, { Component } from 'react';
import styled from 'styled-components';
import WomanSvg from './banner_one/WomanSvg';
import BottomCornerSvg from './banner_one/BottomCornerSvg';
import LeftSvg from './banner_one/LeftSvg';
import TopSvg from './banner_one/TopSvg';

const Container = styled.div`
  width: 100%;
  /* height: ${props => props.height ? props.height + 'px' : "80%"}; 
  */
  bottom: 0;
  top: 0;
  position: absolute;
`;

const RootContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: ${props => props.zIndex ? props.zIndex : 0};
`;

class BannerSlide extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container height={this.props.height}>
        <RootContainer>
          <BottomCornerSvg path="/images/banners/banner_one/bottom_corner_pattern.svg" width={1279} timeout={600}></BottomCornerSvg>
          <TopSvg path="/images/banners/banner_one/top.svg" width={1280} timeout={900}></TopSvg>
          <LeftSvg path="/images/banners/banner_one/left_pattern.svg" width={434} timeout={1100}></LeftSvg>
          <WomanSvg path="/images/banners/banner_one/mujer.svg" width={700} timeout={700}></WomanSvg>
        </RootContainer>
      </Container>
    );
  }
}

export default BannerSlide;