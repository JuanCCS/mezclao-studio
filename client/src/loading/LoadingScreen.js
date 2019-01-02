import React, { Component } from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import AnimatedText from './AnimatedText';
import AnimatedSvg from './AnimatedSvg';
import SplitText from 'react-pose-text';
import { withTheme } from '@material-ui/core';

const Container = styled.div`
  z-index: 20;
  width: 100%;
  height: 100%;
  position: absolute;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const SvgContainer = styled.div`
  width: 300px;
  height: 300px;
  text-align: center;
  position: relative;
`

const LeftSvg = styled.object`
  position: absolute;
  height: 308px;
  bottom: -14px;
  left: 0;
`
const RightSvg = styled.object`
  position: absolute;
  height: 287px;  
  bottom: 0;
  right: 0;

`

const WomanSvg = styled.object`
  position: absolute;
  height: 336px; 
  left: 72.75px; 
  bottom: 0;
`;

const Spacer = styled.div`
  height: ${props => props.height ? props.height : 0};
`

const LoadingSvg = styled.object`
  position: absolute;
  width: 300px;
  left: 0;
  bottom: -13px;
`;

const AnimLeftSvg = posed(LeftSvg)({
  start: {opacity: 1},
  enter: {opacity: 1},
  fullImg: { opacity: 0}
})

const AnimRightSvg = posed(RightSvg)({
  start: {opacity: 1},
  enter: {opacity: 1},
  fullImg: { opacity: 0}
})

const AnimWomanSvg = posed(WomanSvg)({
  start: { opacity: 0 },
  enter: {
    opacity: 1
  },
  fullImg: {
    opacity: 0
  },
  end: { opacity: 0 },
})

const AnimLoadingSvg = posed(LoadingSvg)({
  start: { opacity: 0 },
  enter: {
    opacity: 0
  },
  fullImg: {
    opacity: 1
  },
  end: { opacity: 0 },
})

const AnimatedContainer = posed(Container)({
  start: {
    opacity: 1,
    background: '#FFF'
  },
  fullImg: {
    background: '#443880'
  },
  end: {
    opacity: 0, 
    display: 'none'
  }
})

class LoadingScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      animState: "start"
    }
  }

  componentDidMount() {
     // @TODO PREVENT SCROLLING
     // Look into react-scrollock
    setTimeout(() => {
      this.setState({ animState: "enter" });
    }, 1000);
    setTimeout(() => {
      this.setState({ animState: "fullImg" });
    }, 3500);
    setTimeout(() => {
      this.setState({ animState: "end" });
    }, 4800);
    setTimeout(() => {
      // @TODO ENABLE SCROLLING
      // Look into react-scrollock
    }, 5200);
  }

  render() {
    return (
      <AnimatedContainer pose={this.state.animState ? this.state.animState : 'enter'}>
        <Spacer heihgt={'30px'}></Spacer>
        <SvgContainer>
          <AnimLeftSvg type="image/svg+xml" data="/images/loading/LeftPath_animated.svg" />
          <AnimWomanSvg type="image/svg+xml" data="/images/loading/WomanMezclao.svg" />
          <AnimRightSvg type="image/svg+xml" data="/images/loading/RightPath_animated.svg" />
          <AnimLoadingSvg type="image/svg+xml" data="/images/loading/LoadingScreen.svg" />
        </SvgContainer>
        <Spacer height={'50px'}></Spacer>
        <AnimatedText></AnimatedText>

      </AnimatedContainer>
    )
  }
}

export default LoadingScreen;
