import React, { Component } from 'react';
import styled from 'styled-components';
import { Paper, Typography } from '@material-ui/core'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #443880;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

/**
 * Renders the About Section
 * 
 */
class ContactPage extends Component {
  
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

export default ContactPage;