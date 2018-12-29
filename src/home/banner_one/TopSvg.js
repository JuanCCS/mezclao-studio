import React, { Component } from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

const styledImg = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
`
const SvgImage = posed(styledImg)({
    start: {
        opacity: 0
    },
    loaded: {
        opacity: 1
    }
});

class TopSvg extends Component {

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

export default TopSvg; 