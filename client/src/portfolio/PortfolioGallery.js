import React, { Component } from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import globals from '../globals';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import GalleryCard from '../components/GalleryCard'
import {Grid} from '@material-ui/core'
import ClientView from './ClientView'

import {clientSelected, nextClient, prevClient} from '../redux/portfolio'


const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-top: 103.4px;
  @media (max-width: 700px){
    padding-top: 64px;
  }
  @media (max-width: 600px){
    padding-top: 58px;
  }
`;

const CurrentImage = styled.img`
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  background: white;
  max-width: 80%;
  max-height: 80%;
`

const AnimatedImage = posed(CurrentImage)({
  start: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    x: 0,
    scale: 1
  },
  exit: {
    opacity: 0,
  }
});

const Spacer = styled.div`
  height: ${props => props.height ? props.height : 0};
`

class PortfolioGallery extends Component {

  constructor(props) {
    super(props);
    this.state = {
      animPose: 'exit'
    };
    this.handleGalleryCardSelected = this.handleGalleryCardSelected.bind(this)
    this.handleCloseClient = this.handleCloseClient.bind(this)
  }

  handleGalleryCardSelected(payload){
    console.log(payload)
    // notify redux store
    this.props.clientSelected(payload)
    // show client view
    this.setState({animPose: 'enter'})
  }

  handleCloseClient(){
    this.setState({animPose: 'exit'})
  }


  render() {
    let clients = <div></div>
    const self= this;
    const category = this.props.category.name
    const portfolio = this.props.portfolio
    const clientNames = portfolio[category]['clients']
    console.log(this.props.selectedClient)
    if(clientNames != undefined){
    clients = clientNames.map(elem => {
        let fileRoute = elem + '/cover'
        return(
          <Grid item xs={6} md={3}>
            <GalleryCard 
              handleGalleryCardSelected={self.handleGalleryCardSelected}
              categoryName={category.name} 
              clientName={elem}
              clientObj={portfolio[elem]} 
              fileRoute={fileRoute}>
            </GalleryCard>
           </Grid>
    )})}

    return (
      <RootContainer>
        <Grid container >
          {clients}
        </Grid>
        <ClientView 
          animPose={this.state.animPose} >
        </ClientView>
     </RootContainer>
    );
  }
}

const mapStateToProps = ({portfolio}) => ({
  category: portfolio.selectedCategory,
  portfolio: portfolio.portfolioJson,
  selectedClient: portfolio.selectedClient
})

const mapDispatchToProps = dispatch => ({
  clientSelected : payload => dispatch(clientSelected(payload))

})
  
const reduxedComponent = connect(mapStateToProps, mapDispatchToProps)(PortfolioGallery);

export default withRouter(reduxedComponent);