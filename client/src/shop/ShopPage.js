import React, { Component } from 'react';
import styled from 'styled-components';
import ShopCard from './ShopCard';
import globals from '../globals';
import { Paper } from '@material-ui/core'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background: url('images/backgrounds/Shop_Bg.jpg');
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

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
      return(<ShopCard key={item.article_name} item={item}/>)
    });
    return (
        <Container>
          {shopItems}
        </Container>
    )
  }
}

export default ShopPage;