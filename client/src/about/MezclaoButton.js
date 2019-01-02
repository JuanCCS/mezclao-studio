import React, { Component } from 'react';
import styled from 'styled-components';
import { Paper } from '@material-ui/core'

const Container = styled(Paper)`
  width: 50px;
  height: 50px;
  border-radius: 50% !important;
  position: absolute;
  background-color: white;
  top: 33%;
  right: -10px;
  z-index: 15;
`;

/**
 * Renders the About Mariery Section
 * 
 */
class MezclaoButton extends Component {
  
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

export default MezclaoButton;