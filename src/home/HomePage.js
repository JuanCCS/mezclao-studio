import React, { Component } from 'react';
import Banner from './Banner';
import MainMenu from '../components/MainMenu';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-height: 100%;
`;

class HomePage extends Component {
  render() {
    return (
        <Container>
          <MainMenu>
          </MainMenu>
          <Banner>
          </Banner>
        </Container>
    )
  }
}

export default HomePage;
