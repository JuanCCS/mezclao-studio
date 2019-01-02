import React, { Component } from 'react';
import posed from 'react-pose';
import styled from 'styled-components';

const StyledImg = styled.object`
  max-width: 400px;
  max-height: 400px;
  height: 100%;
  bottom: 0;
  position: absolute;
`;

const AnimatedImg = posed(StyledImg)({

});

class AnimatedSvg extends Component {

  constructor(props){
    super(props);
    this.state = {
      height: 0
    }
  }

  render() {
      return(
      <AnimatedImg type="image/svg+xml" data={this.props.path}>
      </AnimatedImg>
      )
    
  }
}

export default AnimatedSvg;
