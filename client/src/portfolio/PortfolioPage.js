import React, { Component } from 'react';
import styled from 'styled-components';
import PortfolioCard from './PortfolioCard';
import PortfolioProgress from './PortfolioProgress';
import PortfolioButtons from './PortfolioButtons';
import globals from '../globals';


const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background: url('images/backgrounds/Portfolio_Bg.jpg');
  background-size: cover;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
    const clients = this.state.clients;
    if(clients != []){
      let idx = this.state.currentIndex;
      idx ++;
      idx %= clients.length;
      let nextClient = clients[idx]
      this.setState({currentClient: nextClient, currentIndex: idx});
    }
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
            <PortfolioProgress clients={clients} currentClient={currentClient}></PortfolioProgress>
            <PortfolioCard currentClient={this.state.currentClient}></PortfolioCard>
            <PortfolioButtons></PortfolioButtons>
        </Container>
    )
  }
}

export default PortfolioPage;