import React, { Component } from 'react';
import BannerSlideOne from './BannerSlideOne';
import styled from 'styled-components';
import posed from 'react-pose';
import BannerSlideTwo from './BannerSlideTwo';
import { green } from '@material-ui/core/colors';

const RootContainer = styled.div`
  width: 100%;
  height: ${props => props.height? props.height + 'px' : '100%'};
  position: relative;
`;

const AnimRootContainer = posed(RootContainer)({
  start: {
    opacity: 0
  },
  banner_1_show: {
    opacity: 1
  }
});

const animationController = {
  banner_1_show: {
    timeout: 0,
    name: "banner_1_show"
  },
  banner_1_hide: {
    timeout: 1300,
    name: "banner_1_hide"
  },
  banner_2_show: {
    timeout: 2600,
    name: "banner_2_show"
  },
  banner_2_hide: {
    timeout: 3900,
    name: "banner_2_hide"
  }
}

class Banner extends Component {
  constructor(props){
    super(props);
    this.state = {
      width: this.props.width,
      animState: "start"
    }
  }

  makeAnimations(){
    Object.keys(animationController).forEach((key, index)=>{
      setTimeout(()=>{
        this.setState({animState: animationController[key].name}); 
      }, animationController[key].timeout)
    });
  }

  componentDidMount(){
    this.setState({width: this.props.width});
    // Animations Stuff
    this.makeAnimations();
    setInterval(()=>{this.makeAnimations.call(this)}, 5200)
  }

  render() {
    return (
      <AnimRootContainer pose={this.state.animState? this.state.animState : "start"} height={this.props.height}>
        <BannerSlideOne height={this.props.height}></BannerSlideOne>
      </AnimRootContainer>
    );
  }
}

export default Banner;
