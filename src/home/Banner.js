import React, { Component } from 'react';
import BannerSlide from './BannerSlide';
import styled from 'styled-components';
import InstagramCard from './InstagramCard';
import TwitterCard from './TwitterCard';


const RootContainer = styled.div`
  width: 100%;
  flex-grow: 30;
  background-color: #E96BBC;
  position: relative;
  max-height: 100% !important;
`;

const CardContainer = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
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
        <CardContainer>

          <InstagramCard></InstagramCard>
        </CardContainer>
      </RootContainer>
    );
  }
}

export default Banner;
