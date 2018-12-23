import React, { Component } from 'react';
import styled from 'styled-components';
import { Paper } from '@material-ui/core'

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: yellow;
  z-index: 10;
  border-radius: 5px;
`;

/**
 * Renders the About Mariery Section
 * 
 */
class AboutMezclao extends Component {
  
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

export default AboutMezclao;