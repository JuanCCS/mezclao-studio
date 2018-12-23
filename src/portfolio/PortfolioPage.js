import React, { Component } from 'react';
import styled from 'styled-components';
import PortfolioCard from './PortfolioCard';
import PortfolioProgress from './PortfolioProgress';
import PortfolioButtons from './PortfolioButtons';


const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #FF0000;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

/**
 * Renders the Portfolio Section
 * 
 * @TODO Implement Gallery
 * @TODO Implement Buttons
 * @TOOD Implement Foldable Content
 * @TODO Link to Client's Page
 * @TODO Fill Texts
 * @TODO Populate
 */
class PortfolioPage extends Component {
  
  constructor(props){
    super(props);
  }
  
  render() {
    return (
        <Container>
            <PortfolioProgress></PortfolioProgress>
            <PortfolioCard></PortfolioCard>
            <PortfolioButtons></PortfolioButtons>
        </Container>
    )
  }
}

export default PortfolioPage;