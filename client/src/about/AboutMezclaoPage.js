import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #0000FF;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const RelativeContainer = styled(Paper)`
  width: 100%;
  height: 100%;
  position: relative;
`;

/**
 * Renders the Portfolio Section
 * 
 */
class AboutMezclaoPage extends Component {
  
  constructor(props){
    super(props);
  }
  
  render() {
    return (
        <Container>
          <RelativeContainer>

          </RelativeContainer>
        </Container>
    )
  }
}

export default AboutMezclaoPage;