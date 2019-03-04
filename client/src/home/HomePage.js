import React, { Component } from 'react';
import Banner from './Banner';
import MainMenu from '../components/MainMenu';
import styled from 'styled-components';

const imgHeight = 600;
const imgWidth = 1280;
const paddingTop = 56;
const ratio = imgHeight/imgWidth;

const Container = styled.div`
  width: 100%;
  height: 100%; 
`;

class HomePage extends Component {
  
  constructor(props){
    super(props);
  }
  
  render() {
    const rootHeight = this.props.width * ratio;

    return (
        <Container inputHeight={Math.floor(rootHeight) + 'px'}>
          <Banner/>
        </Container>
    )
  }
}

export default HomePage;
