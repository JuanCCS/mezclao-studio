import React, { Component } from 'react';
import styled from 'styled-components';
import { Paper } from '@material-ui/core'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #00F00F;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ShopContainer = styled(Paper)`
    width: 90%;
    max-width: 640px;
    height: 90%;
    position: relative;
`;

/**
 * Renders the Portfolio Section
 * 
 */
class ShopPage extends Component {
  
  constructor(props){
    super(props);
  }
  
  render() {
    return (
        <Container>
            <ShopContainer>
            </ShopContainer>
        </Container>
    )
  }
}

export default ShopPage;