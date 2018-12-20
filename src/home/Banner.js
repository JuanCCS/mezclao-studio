import React, { Component } from 'react';
import BannerSlide from './BannerSlide';
import styled from 'styled-components';

const RootContainer = styled.div`
  width: 100%;
  flex-grow: 30;  
  background-color: #E96BBC;
`;

class Banner extends Component {
  render() {
    return (
      <RootContainer>
        <BannerSlide></BannerSlide>
        <BannerSlide></BannerSlide>
      </RootContainer>
    );
  }
}

export default Banner;
