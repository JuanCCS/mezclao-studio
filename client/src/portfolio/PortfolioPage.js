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
import { connect } from 'react-redux';

import {serverDataArrived} from '../redux/portfolio'

const Container = styled.div`
  width: 100%;
  background: #443880;  
`;

const GridContainer = styled(Grid)`
  width: 100%;
  min-width: 100%;  
`

/**
 * Renders the Portfolio Section
 * 
 * @TODO Implement Gallery
 * @TODO Implement Buttons
 * @TODO Link to Client's Page
 * @TODO Fill Texts
 * @TODO Populate
 */


const Categories = [
  {
    src: '/images/portfolio/nikefull.png',
    title: 't r o p i c a l . l i f e s t y l e',
    description:  `
    Lush rainforest backdrops, Caribbean blues, an exploration of quirks, customs and culture that makes 
    life in the tropics unique. For those who want to take a vacation to explore or for the one that has 
    decided to call it home.
    `
  },
 
  {
    src: '/images/portfolio/paupleude1.png',
    title: 'b e t t e r . t o g e t h er',
    description: `Partnerships, alliances, collaboration, and teamwork is one of the reasons why  Mezclao was founded. 
    I believe every partnership will bring a new set of backgrounds, perspective leading to a new result. 
    We love love love working together, globally and meeting new teams.
    Like Panama, Mezclao Studio is a fluent bilingual studio we have a background in incubating projects that their main focus is collaboration, showcasing every team member skill set and how this raises the value creatives in the global market.
    `
  },
  {
    src: '/images/portfolio/motherpukka.png',
    title: 'G R L . P W R',
    description: `As a female founder, born in a strong matriarchy family. 
    Mezclao Studio has a special place for all female-led, community-driven, collaboration projects
    that are focused to empower women to follow their passion, achieve economic independence
    and break the gender gap. 
    `
  },
  {
    src: '/images/portfolio/octopus_coconut.png',
    title: 'l o c a l . t o . g l o b a l',
    description: `From farm to table, showcasing local flavors, visual identity projects for brands
     and entrepreneurs that are looking to share more about their roots, how sustainable solutions 
     and support local producers. Exploring your identity, roots and experiences are key ingredients 
     that create a unique voice on a brand and project.`
  }
]


class PortfolioPage extends Component {
  
  state = {
    clients: [],
    currentClient: '',
    currentIndex: 0
  }
 
  switchClient(){

  }

  componentDidMount(){

    fetch(globals.serverUrl + '/portfolio_json').then((res)=> {
      let json = res.json().then((portfolio)=>{
        this.props.serverDataArrived(portfolio)
      })
    });   

    setInterval(
      setInterval(()=>{
        this.switchClient.call(this)
      },10000));
  } 

  render() {
    const { clients, currentClient } = this.state;
    const myPortfolio = this.props.portfolio.portfolio;
   
    const categories = myPortfolio.portfolioJson.categories.map( elem => {
      let catObj = myPortfolio.portfolioJson[elem]
      catObj.name = elem
      return (<Grid item xs={6} s={6} md={3}>
      <PortfolioCard category={catObj}>
      </PortfolioCard>
      </Grid>)
    })
    return (
        <Container>
          <Spacer height='60px'></Spacer>
          <HeadingSeparator text='o u r . p r o j e c t s'></HeadingSeparator>
          <Spacer height='60px'></Spacer>

          <GridContainer container spacing={0} alignItems='center' justify='space-evenly'>
            {categories}
          </GridContainer>
        </Container>
    )
  }
}

PortfolioPage.contextType = ViewportContext;

const mapDispatchToProps = dispatch => ({
  serverDataArrived: payload => dispatch(serverDataArrived(payload))
})

// start of code change
const mapStateToProps = (portfolio) => {
  return { portfolio: portfolio };
};

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioPage);