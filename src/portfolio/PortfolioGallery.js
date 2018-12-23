import React, { Component } from 'react';
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
`
const SvgImage = posed(styledImg)({
});

class PortfolioGallery extends Component {

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

export default PortfolioGallery;