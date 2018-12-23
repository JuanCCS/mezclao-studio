import React, { Component } from 'react';
import BannerSlide from './BannerSlide';
import styled from 'styled-components';
import posed from 'react-pose';

const RootContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: ${props => props.zIndex ? props.zIndex : 0};
`;

const styledImg = styled.img`
  width: ${props => props.width ? props.width + 'px' : "0px"};
  position: absolute;
  filter: drop-shadow( -5px -5px 5px #000 );
`
const SvgImage = posed(styledImg)({
});

class BannerSvg extends Component {

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
      startObj,
      endObj,
      path
    } = this.props;

    return (
      <RootContainer>
        <SvgImage 
          src={path}
          pose={this.state.start ? 'start' : 'loaded'}
          width={width}
          startObj={startObj}
          endObj={endObj}
          >
        </SvgImage>
      </RootContainer>
    );
  }
}

export default BannerSvg;