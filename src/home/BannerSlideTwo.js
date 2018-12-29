import React, { Component } from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

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
  position: relative;
`;

const LeftSvg = styled.object`
  position: absolute;
  left: 2%;
  top: 0;
  width: 100%;
`
const AnimLeftSvg = posed(LeftSvg)({
  start: {
    opacity: 0
  },
  show: {
    opacity: 1
  }
})

const TucanSvg = styled.object`
  position: absolute;
  right: -3%;
  bottom: -4.25%;
  width: 61%;
  overflow: hidden;
`
const AnimTucanSvg = posed(TucanSvg)({
  start: {
    opacity: 0
  },
  show: {
    opacity: 1
  }
})

const TopSvg = styled.object`
  position: absolute;
  left: 0%;
  top: 0%;
`
const AnimTopSvg = posed(TopSvg)({
  start: {
    opacity: 0
  },
  show: {
    opacity: 1
  }
})

class BannerSlideTwo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <RootContainer>
        <Container>
          <AnimTopSvg type="image/svg+xml" data="/images/banners/banner_two/top.svg"></AnimTopSvg>
          <AnimLeftSvg type="image/svg+xml" data="/images/banners/banner_two/hojas.svg"></AnimLeftSvg>
          <AnimTucanSvg type="image/svg+xml" data="/images/banners/banner_two/tucan.svg"></AnimTucanSvg>
        </Container>
      </RootContainer>
    );
  }
}

export default BannerSlideTwo;