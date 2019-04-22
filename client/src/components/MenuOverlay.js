import React, { Component } from 'react'
import NavigationMenu from './NavigationMenu'
import styled from 'styled-components'
import {Button} from '@material-ui/core'
import posed from 'react-pose'
import ScrollLock from 'react-scrolllock'

const Container = styled.div`
  width: 100%;
  height: 100%; 
  z-index: 1000000;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f83c2d;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


const AnimatedContainer = posed(Container)({
    exit: {
        opacity: 0
    },
    enter: {
        opacity: 1
    }
})

class MenuOverlay extends Component {
  
  constructor(props){
    super(props);
    this.state = {
        animState: 'exit'
    }
    this.hideOverlay = this.hideOverlay.bind(this)
  }

  componentDidMount(){
      this.setState({
          animState: 'enter',
          lockScroll: true
      })
  }
  // Add a timer before hiding the overlay
  hideOverlay(){
    const self = this;
    this.setState({
        animState: 'exit',
        lockScroll: false
    })
    setTimeout(()=>{
        self.props.hideOverlay();
    }, 300)
  }

  render() {
    return (
        <AnimatedContainer pose={this.state.animState}>
          <NavigationMenu hideOverlay={this.hideOverlay}/>
          {this.state.lockScroll ? <ScrollLock /> : null}
        </AnimatedContainer>
    )
  }
}

export default MenuOverlay;