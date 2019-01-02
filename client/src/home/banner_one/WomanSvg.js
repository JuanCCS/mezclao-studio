import React, { Component } from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

const styledImg = styled.img`
  width: 91%;
  position: absolute;
  bottom: 0;
  right: 0;
`
const SvgImage = posed(styledImg)({
    start: {
        opacity: 0
    },
    loaded: {
        opacity: 1
    }
});

class WomanSvg extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      start: true,
     };
  }

  componentDidMount() {
    setTimeout(() => {
        this.setState({ start: false });
    }, this.props.timeout);
  }


  render() {

    const{
      width,
      path
    } = this.props;

    return (
        <SvgImage 
          src={path}
          pose={this.state.start ? 'start' : 'loaded'}
          width={width}
          >
        </SvgImage>
    );
  }
}

export default WomanSvg;