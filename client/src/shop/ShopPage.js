import React, { Component } from 'react';
import styled from 'styled-components';
import ShopCard from './ShopCard';
import globals from '../globals';
import { Paper, Grid } from '@material-ui/core'
import HeadingSeparator from '../components/HeadingSeparator'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const GridContainer = styled(Grid)`
  width: 100%;
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

const items = [
  {
    background_url: '/images/shop/oioba_paradise_hues.jpg',
    instagram_handle: 'o i o b a',
    instagram_url: 'https://www.instagram.com/oioba/',
    article_name: 'paradise hues',
    shop_name: 'Oioba',
    website_url: 'https://oioba.com/products/paradise-hues',
    color: '#274490'
  } ,{
    background_url: '/images/shop/girlsgirlsgirls.jpg',
    instagram_handle: 'o i o b a',
    instagram_url: 'https://www.instagram.com/oioba/',
    article_name: 'Girls Girls Girls ',
    shop_name: 'Casetify',
    website_url: 'https://www.casetify.com/product/iQhCG_girls-girls-girls/iphone-x/classic-grip-case?color=silver#/291604',
    color: '#274490'
  }, {
    background_url: '/images/shop/caladium_orchid.jpg',
    instagram_handle: '@ o i o b a',
    instagram_url: 'https://www.instagram.com/oioba/',
    article_name: 'caladium orchid',
    shop_name: 'East End Prints',
    website_url: 'https://www.eastendprints.co.uk/products/caladium-orchid.html',
    color: '#274490'
  }, {
    background_url: '/images/shop/orchid_jungle.jpg',
    instagram_handle: '@ o i o b a',
    instagram_url: 'https://www.instagram.com/oioba/',
    article_name: 'orchid jungle',
    shop_name: 'Juniqe',
    website_url: 'https://www.juniqe.com/orchid-jungle-premium-poster-portrait-3475601.html',
    color: '#274490'
  },
  {
    background_url: '/images/shop/blue_papaya.jpg',
    instagram_handle: '@ o i o b a',
    instagram_url: 'https://www.instagram.com/oioba/',
    article_name: 'Juniqe',
    shop_name: 'blue papaya',
    website_url: 'https://www.juniqe.com/blue-papaya-premium-poster-portrait-1769905.html',
    color: '#274490'
  }, 
  {
    background_url: '/images/shop/society_6.jpg',
    instagram_handle: '@ o i o b a',
    instagram_url: 'https://www.instagram.com/oioba/',
    article_name: 'tropical birds',
    shop_name: 'Society6',
    website_url: 'https://oioba.com/products/paradise-hues',
    color: '#274490'
  },
  {
    background_url: '/images/shop/pactimo.jpg',
    instagram_handle: '@ o i o b a',
    instagram_url: 'https://www.instagram.com/oioba/',
    article_name: 'supersonic jungle',
    shop_name: 'Pactimo',
    website_url: 'https://www.pactimo.com/collections/artist-series-mariery-young',
    color: '#274490'
  },
  
  
  {
    background_url: '/images/shop/girl_pwr.jpg',
    instagram_handle: '@ o i o b a',
    instagram_url: 'https://www.instagram.com/oioba/',
    article_name: 'Paradise Hues',
    shop_name: 'Oioba',
    website_url: 'https://mezclaostudio.threadless.com/designs/grl-pwr-1',
    color: '#274490'
  }
]

/**
 * Renders the Portfolio Section
 * 
 */
class ShopPage extends Component {

  componentDidMount(){
    
  }
  
  constructor(props){
    super(props);
    this.state = { 
      items: []
    }
  }
  
  render() {
    const shopItems =items.map((item)=>{
      return(
      <GridItem item xs={6} md={3}>
          <ShopCard 
            key={item.article_name} 
            item={item}
            />
            </GridItem>)
    });
    return (
        <Container>
           <HeadingSeparator text='t h e . s h o p'></HeadingSeparator>
          <GridContainer container spacing={16}>
            {shopItems}
          </GridContainer>
        </Container>
    )
  }
}

export default ShopPage;