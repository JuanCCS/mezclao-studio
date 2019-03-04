import React, { Component } from 'react';
import styled from 'styled-components';
import PortfolioCard from './PortfolioCard';
import PortfolioProgress from './PortfolioProgress';
import PortfolioButtons from './PortfolioButtons';
import globals from '../globals';
import ViewportContext from '../components/ViewportContext';
import HeadingSeparator from '../components/HeadingSeparator';
import Spacer from '../components/Spacer';
import {Grid} from '@material-ui/core'


const Container = styled.div`
  width: 100%;
  height: 2000px;
  background: #443880;  
`;

/**
 * Renders the Portfolio Section
 * 
 * @TODO Implement Gallery
 * @TODO Implement Buttons
 * @TODO Link to Client's Page
 * @TODO Fill Texts
 * @TODO Populate
 */
class PortfolioPage extends Component {
  
  state = {
    clients: [],
    currentClient: '',
    currentIndex: 0
  }
 
  switchClient(){

  }

  componentDidMount(){
    fetch(globals.serverUrl + '/clientnames').then((res)=> {
      let json = res.json().then((clientObj)=>{
        this.setState({clients: clientObj.clients, currentClient: clientObj.clients[0]})
      })
    });

    setInterval(
      setInterval(()=>{
        this.switchClient.call(this)
      },10000));
  } 

  render() {
    const { clients, currentClient } = this.state;
    return (
        <Container>
          <Spacer height='60px'></Spacer>
          <HeadingSeparator text='m y . p o r t f o l i o'></HeadingSeparator>
          <Spacer height='60px'></Spacer>

          <Grid container spacing={16}>
            <Grid item xs={12} md={6} lg={3}>
              
            </Grid> 
            <Grid item xs={12} md={6} lg={3}>

            </Grid>
            <Grid item xs={12} md={6} lg={3}>

            </Grid>
            <Grid item xs={12} md={6} lg={3}>

            </Grid>
          </Grid>
        </Container>
    )
  }
}

PortfolioPage.contextType = ViewportContext;

export default PortfolioPage;