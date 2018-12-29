import React, { Component } from 'react';
import posed from 'react-pose';
import styled from 'styled-components';
import SplitText from 'react-pose-text';
import {Typography} from '@material-ui/core';

const Container = posed.div({
  exit: {
    x: -20
  },
  enter: {
    x: 0,
    beforeChildren: true,
    staggerChildren: 100
  }
});

const charPoses = {
  exit: { opacity: 0 },
  enter: { opacity: 1 },
  fullImg: {color: '#FFF'},
  end: {opacity: 0}
};

const SpacedTypography = styled(Typography)`
  letter-spacing: 15px;
  text-align: center !important;
  width: 450px;
  padding-left: 15px;
`

class AnimatedText extends Component {

  constructor(props) {
    super(props);
    this.state = {
      start: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ start: false });
    }, 1500);
  }

  render() {
    return (
      <Container initialPose="exit" pose={this.state.start? "exit" : "enter"}>
      <SpacedTypography variant="title">
        <SplitText charPoses={charPoses}>mezclao.studio</SplitText>
        </SpacedTypography>
      </Container>
    )
  }
}

export default AnimatedText;
