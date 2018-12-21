import React, { Component } from 'react';
import BannerSlide from './BannerSlide';
import styled from 'styled-components';

const RootContainer = styled.div`
  width: 100%;
  flex-grow: 30;
  background-color: #E96BBC;
  position: relative;
`;

class Banner extends Component {

  constructor(props){
    super(props);
    this.state = {
      height: 0
    }
  }
  componentDidMount(){
    const myHeight = this.divElement.clientHeight;
    this.setState({height: myHeight})
  }
  render() {
    return (
      <RootContainer ref={ (node) => this.divElement = node}>
        <BannerSlide height={this.state.height}></BannerSlide>
      </RootContainer>
    );
  }
}

export default Banner;
