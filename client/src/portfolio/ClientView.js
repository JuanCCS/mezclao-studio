import React, { Component } from 'react';
import styled from 'styled-components';
import {Button} from '@material-ui/core';
import posed from 'react-pose';
import {connect} from 'react-redux'
import SwipeableTextMobileStepper from './SwipeableTextMobileStepper';


import {clientSelected, nextClient, prevClient} from '../redux/portfolio'


const Container = styled.div`
  position: absolute;
  background: #F0FF0F;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 4;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

const NextClientButton = styled(Button)`

  color: white !important;
  position: absolute !important;
  height: 50px;
  width: 100px;
  bottom: 3%;
  right: 5%;
`

const PrevClientButton = styled(Button)`
  color: white !important;
  height: 50px;
  width: 100px;
  position: absolute !important;
  bottom: 3%;
  left: 5%;
`

const AnimatedContainer = posed(Container)({
  exit: {
    opacity: 0,
    display: 'block',
    scale: 0
  },
  enter: {
    opacity: 1,
    display: 'none',
    scale: 1
  }
})

const ExitButton = styled(Button)`
  position: absolute !important;
  top: 9%;
  right: 5%;
  color: white !important;
  font-weight: 900 !important;
`

 

class ClientView extends Component {
  
  constructor(props){
    super(props);
    this.handleNextClick = this.handleNextClick.bind(this)
    this.handlePrevClick = this.handlePrevClick.bind(this)
  }

  handleNextClick(){
    this.props.nextClient()
  }

  handlePrevClick(){
    this.props.prevClient()
  }
  
  render() {
    if(this.props.selectedClient == undefined){
      return(<div></div>)
    }
    return (
    <AnimatedContainer pose={this.props.animPose}>
      <Content>
        <ExitButton onClick={this.props.closeClientView}><h1 style={{color: 'white'}}>X</h1></ExitButton>
        <SwipeableTextMobileStepper clientFiles={this.props.selectedClient.files}>

        </SwipeableTextMobileStepper>
        <NextClientButton onClick={this.handleNextClick}>
          n e x t
        </NextClientButton>
        <PrevClientButton onClick={this.handlePrevClick}>
          p r e v
        </PrevClientButton>
      </Content>
    </AnimatedContainer>)
  }xa
}

const mapStateToProps = ({portfolio}) => ({
    selectedClient : portfolio.selectedClient
})

const mapDispatchToProps = dispatch => ({
  nextClient : payload => dispatch(nextClient(payload)),
  prevClient : payload => dispatch(prevClient(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(ClientView);