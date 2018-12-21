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
  height: 100%;
  background-color: #E96BBC;
  box-shadow: inset 0 7px 9px -7px rgba(0,0,0,0.7);
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
      <Container>
        <RootContainer>
          <BottomCornerSvg path="/images/banners/banner_one/bottom_corner_pattern.svg" width={'80%'} timeout={600}></BottomCornerSvg>
          <TopSvg path="/images/banners/banner_one/top.svg" width={1280} timeout={900}></TopSvg>
          <LeftSvg path="/images/banners/banner_one/left_pattern.svg" width={434} timeout={1100}></LeftSvg>
          <WomanSvg path="/images/banners/banner_one/mujer.svg" width={'105%'} timeout={700}></WomanSvg>
        </RootContainer>
      </Container>
    );
  }
}

export default BannerSlide;