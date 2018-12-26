import React, { Component } from 'react';
import Banner from './Banner';
import MainMenu from '../components/MainMenu';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #E96BBC;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

class HomePage extends Component {
  
  constructor(props){
    super(props);
  }
  
  render() {
    return (
        <Container>
          <Banner />
        </Container>
    )
  }
}

export default HomePage;
