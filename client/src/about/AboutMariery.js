import React, { Component } from 'react';
import styled from 'styled-components';
import { Paper } from '@material-ui/core'

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: pink;
`;

/**
 * Renders the About Mariery Section
 * 
 */
class AboutMariery extends Component {
  
  constructor(props){
    super(props);
  }
  
  render() {
    return (
        <Container>
        </Container>
    )
  }
}

export default AboutMariery;