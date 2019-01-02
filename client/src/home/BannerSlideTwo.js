import React, { Component } from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

const RootContainer = styled.div`
  position: absolute;
  background: '#F83C2D';
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: '#F83C2D';
`;

const LeftSvg = styled.object`
  position: absolute;
  left: 2%;
  top: 0;
  width: 92.25%;
`
const AnimLeftSvg = posed(LeftSvg)({

})

const TucanSvg = styled.object`
  position: absolute;
  right: -3%;
  bottom: -4.25%;
  width: 51.7%;
  overflow: hidden;
`
const AnimTucanSvg = posed(TucanSvg)({
})

const TopSvg = styled.object`
  position: absolute;
  width: 102%;
  left: -1%;
  top: 0;
`
const AnimTopSvg = posed(TopSvg)({
})

const AnimRootContainer = posed(RootContainer)({
  banner_1_show: {
    opacity: 0,
    background: '#E96BBC'
  },
  banner_2_show: {
    opacity: 1,
    background: '#F83C2D'
  }
});


class BannerSlideTwo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AnimRootContainer>
        <Container>
          <AnimTopSvg type="image/svg+xml" data="/images/banners/banner_two/top.svg"></AnimTopSvg>
          <AnimLeftSvg type="image/svg+xml" data="/images/banners/banner_two/hojas.svg"></AnimLeftSvg>
          <AnimTucanSvg type="image/svg+xml" data="/images/banners/banner_two/tucan.svg"></AnimTucanSvg>
        </Container>
      </AnimRootContainer>
    );
  }
}

export default BannerSlideTwo;