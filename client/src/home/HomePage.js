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
  min-height: ${props=> props.rootHeight? props.rootHeight + 'px': '80%'}; 
`;

class HomePage extends Component {
  
  constructor(props){
    super(props);
  }
  
  render() {
    const rootHeight = window.innerHeight;

    return (
        <Container rootHeight={rootHeight} >
          <Banner height={rootHeight} />
        </Container>
    )
  }
}

export default HomePage;
