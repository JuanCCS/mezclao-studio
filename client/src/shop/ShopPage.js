import React, { Component } from 'react';
import styled from 'styled-components';
import ShopCard from './ShopCard';
import globals from '../globals';
import { Paper, Grid } from '@material-ui/core'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background: url('images/backgrounds/Shop_Bg.jpg');
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 30px;
`;

const GridContainer = styled(Grid)`
  height: 60%;
  padding: 10px;  
  @media (max-width: 700px) {
    height: 90%;
  }
`

const GridItem = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

/**
 * Renders the Portfolio Section
 * 
 */
class ShopPage extends Component {

  componentDidMount(){
    fetch(globals.serverUrl + '/shopitems').then((res)=> {
      let json = res.json().then((itemsObj)=>{
        this.setState({items: itemsObj.items})
      })
    });
  }
  
  constructor(props){
    super(props);
    this.state = { 
      items: []
    }
  }
  
  render() {
    const shopItems = this.state.items.map((item)=>{
      return(
      <GridItem item xs={12} md={6}>
      <ShopCard 
        key={item.article_name} 
        item={item}
        />
        </GridItem>)
    });
    return (
        <Container>
          <GridContainer container spacing={16}>
            {shopItems}
          </GridContainer>
        </Container>
    )
  }
}

export default ShopPage;