import React, { Component } from 'react';
import styled from 'styled-components';
import {Button} from '@material-ui/core';

const Container = styled.div`
  flex-grow: 0;
  display: flex;
  background-color: #FF0000;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 640px;
`;

class PortfolioButtons extends Component {
  
  constructor(props){
    super(props);
  }
  
  render() {
    return (
        <Container>
            <Button>Previous</Button>
            <Button>Next</Button>
        </Container>
    )
  }
}

export default PortfolioButtons;